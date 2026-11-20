// Playwright sweep: load one built page at one viewport, reveal every hidden
// solution, and report what a reader would see go wrong. Runs headless.
//
// Browser: the `playwright` npm package (pinned in package.json) drives the
// Chromium headless shell from ~/Library/Caches/ms-playwright. If it's
// missing: `npx playwright install chromium-headless-shell`.

import type { Browser, BrowserContext, Page } from "playwright";
import type { SweepIssue, SweptPage, Viewport } from "./report.js";

export const VIEWPORTS: Record<Viewport, { width: number; height: number; isMobile: boolean; hasTouch: boolean }> = {
  mobile: { width: 390, height: 844, isMobile: true, hasTouch: true },
  desktop: { width: 1280, height: 800, isMobile: false, hasTouch: false },
};

export interface SweepOptions {
  navigationTimeoutMs?: number;
  hydrationTimeoutMs?: number;
  imageTimeoutMs?: number;
  graphTimeoutMs?: number;
}

const DEFAULTS: Required<SweepOptions> = {
  navigationTimeoutMs: 30_000,
  hydrationTimeoutMs: 10_000,
  imageTimeoutMs: 5_000,
  graphTimeoutMs: 5_000,
};

// Vercel Analytics requests /_vercel/insights/* which only exists on Vercel.
const isIgnoredUrl = (url: string) => url.includes("/_vercel/");

export async function createContexts(browser: Browser): Promise<Record<Viewport, BrowserContext>> {
  const make = (viewport: Viewport) => {
    const { width, height, isMobile, hasTouch } = VIEWPORTS[viewport];
    return browser.newContext({ viewport: { width, height }, isMobile, hasTouch, reducedMotion: "reduce" });
  };
  const contexts = { mobile: await make("mobile"), desktop: await make("desktop") };
  // tsx (esbuild keepNames) wraps functions in a `__name(...)` helper that
  // doesn't exist in the page, so every page.evaluate would throw. Define it.
  for (const context of Object.values(contexts)) await context.addInitScript("globalThis.__name = (target) => target;");
  return contexts;
}

async function revealHiddenContent(page: Page): Promise<void> {
  await page.evaluate(async () => {
    const pause = () => new Promise((resolve) => setTimeout(resolve, 50));
    document.querySelectorAll<HTMLButtonElement>('button.oa-toggle[aria-expanded="false"]').forEach((button) => button.click());
    // Multiple choice: pick the first option to reveal every option's "why",
    // then open the worked solution.
    document.querySelectorAll(".mc").forEach((question) => question.querySelector<HTMLButtonElement>("button.mc-opt")?.click());
    await pause();
    document.querySelectorAll<HTMLButtonElement>("button.mc-working-toggle").forEach((button) => button.click());
    await pause();
  });
}

async function waitForImages(page: Page, timeoutMs: number): Promise<void> {
  await page.evaluate(async (timeout) => {
    const images = Array.from(document.images);
    images.forEach((image) => { image.loading = "eager"; });
    const settled = images.map((image) =>
      image.complete ? Promise.resolve() : new Promise<void>((resolve) => {
        image.addEventListener("load", () => resolve(), { once: true });
        image.addEventListener("error", () => resolve(), { once: true });
      }),
    );
    await Promise.race([Promise.all(settled), new Promise((resolve) => setTimeout(resolve, timeout))]);
  }, timeoutMs);
}

// Runs in the browser. Kept self-contained: Playwright serialises it.
function inspectInBrowser(): { issues: { kind: string; detail: string }[]; links: string[]; stats: Record<string, number> } {
  const issues: { kind: string; detail: string }[] = [];
  const describe = (element: Element) => {
    const id = element.id ? `#${element.id}` : "";
    const className = typeof element.className === "string" && element.className.trim()
      ? "." + element.className.trim().split(/\s+/).slice(0, 2).join(".")
      : "";
    const text = (element.textContent ?? "").replace(/\s+/g, " ").trim().slice(0, 40);
    return `${element.tagName.toLowerCase()}${id}${className}${text ? ` "${text}"` : ""}`;
  };

  // Horizontal overflow, with the outermost elements that stick out and
  // aren't inside a scrolling or clipping container.
  const viewportWidth = window.innerWidth;
  const scrollWidth = document.documentElement.scrollWidth;
  if (scrollWidth > viewportWidth + 1) {
    const sticksOut = (element: Element) => element.getBoundingClientRect().right > viewportWidth + 1;
    const isClipped = (element: Element) => {
      for (let parent = element.parentElement; parent && parent !== document.body; parent = parent.parentElement) {
        if (/(auto|scroll|hidden|clip)/.test(getComputedStyle(parent).overflowX)) return true;
      }
      return false;
    };
    const culprits = Array.from(document.body.querySelectorAll("*"))
      .filter((element) => sticksOut(element) && !isClipped(element))
      .filter((element) => !element.parentElement || element.parentElement === document.body || !sticksOut(element.parentElement) || isClipped(element.parentElement))
      .slice(0, 3)
      .map(describe);
    issues.push({ kind: "horizontal-overflow", detail: `scrollWidth ${scrollWidth} > ${viewportWidth}; ${culprits.join("; ") || "no single culprit"}` });
  }

  // Raw markdown leaking as visible text, outside KaTeX output and code.
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    const text = node.nodeValue ?? "";
    if (!text.includes("$$") && !text.includes("```")) continue;
    const parent = node.parentElement;
    if (!parent || parent.closest(".katex, pre, code, script, style, textarea, template")) continue;
    const snippet = text.replace(/\s+/g, " ").trim().slice(0, 80);
    if (text.includes("```graph")) issues.push({ kind: "raw-graph-fence", detail: snippet });
    else if (text.includes("$$")) issues.push({ kind: "raw-display-math", detail: snippet });
  }

  // Graph blocks that never mounted, or mounted as nothing / an unknown type.
  document.querySelectorAll("code.language-graph").forEach((code) => {
    issues.push({ kind: "graph-not-mounted", detail: (code.textContent ?? "").split("\n")[0].slice(0, 80) });
  });
  document.querySelectorAll(".graph-embed").forEach((host) => {
    const text = (host.textContent ?? "").trim();
    if (text.startsWith("[unknown graph type")) issues.push({ kind: "graph-not-mounted", detail: text.slice(0, 80) });
    else if (host.childElementCount === 0) issues.push({ kind: "graph-not-mounted", detail: "empty graph host" });
  });

  // Broken images.
  Array.from(document.images).forEach((image) => {
    if (!image.complete) issues.push({ kind: "broken-image", detail: `did not load: ${image.getAttribute("src")}` });
    else if (image.naturalWidth === 0) issues.push({ kind: "broken-image", detail: `${image.getAttribute("src")}` });
  });

  // Same-origin links, for the on-disk link check.
  const links = Array.from(document.querySelectorAll<HTMLAnchorElement>("a[href]"))
    .map((anchor) => anchor.href)
    .filter((href) => href.startsWith(location.origin))
    .map((href) => new URL(href).pathname);

  // Evidence that the checks had something to look at.
  const stats = {
    solutionsRevealed: document.querySelectorAll(".oa-body, .mc-working").length,
    graphsMounted: document.querySelectorAll(".graph-embed").length,
    images: document.images.length,
    mathBlocks: document.querySelectorAll(".katex").length,
  };

  return { issues, links: Array.from(new Set(links)), stats };
}

export async function sweepPage(
  context: BrowserContext,
  baseUrl: string,
  path: string,
  viewport: Viewport,
  options: SweepOptions = {},
): Promise<SweptPage> {
  const settings = { ...DEFAULTS, ...options };
  const issues: SweepIssue[] = [];
  const page = await context.newPage();

  page.on("console", (message) => {
    if (message.type() !== "error") return;
    const text = message.text();
    // Failed subresource loads are reported below with their URL instead.
    if (text.startsWith("Failed to load resource")) return;
    if (isIgnoredUrl(text) || isIgnoredUrl(message.location().url ?? "")) return;
    issues.push({ kind: "console-error", detail: text.slice(0, 200) });
  });
  page.on("pageerror", (error) => issues.push({ kind: "page-error", detail: error.message.slice(0, 200) }));
  page.on("response", (response) => {
    const url = response.url();
    if (response.status() < 400 || isIgnoredUrl(url) || !url.startsWith(baseUrl)) return;
    if (response.request().resourceType() === "image") return; // reported as broken-image
    if (response.request().resourceType() === "document") return; // reported as load-failed
    issues.push({ kind: "console-error", detail: `HTTP ${response.status()} ${url.slice(baseUrl.length)}` });
  });

  let status: number | null = null;
  let links: string[] = [];
  let stats: SweptPage["stats"];
  try {
    const response = await page.goto(baseUrl + path, { waitUntil: "load", timeout: settings.navigationTimeoutMs });
    status = response?.status() ?? null;
    if (status !== 200) issues.push({ kind: "load-failed", detail: `HTTP ${status}` });

    const hydrated = await page
      .waitForFunction(() => !document.querySelector("astro-island[ssr]"), null, { timeout: settings.hydrationTimeoutMs })
      .then(() => true, () => false);
    if (!hydrated) issues.push({ kind: "page-error", detail: `islands not hydrated after ${settings.hydrationTimeoutMs}ms` });

    await revealHiddenContent(page);
    await waitForImages(page, settings.imageTimeoutMs);
    await page
      .waitForFunction(() => !document.querySelector("code.language-graph"), null, { timeout: settings.graphTimeoutMs })
      .catch(() => undefined); // leftovers are reported by inspectInBrowser

    const inspected = await page.evaluate(inspectInBrowser);
    issues.push(...(inspected.issues as SweepIssue[]));
    links = inspected.links;
    stats = inspected.stats as SweptPage["stats"];
  } catch (error) {
    issues.push({ kind: "load-failed", detail: (error as Error).message.split("\n")[0].slice(0, 200) });
  } finally {
    await page.close();
  }
  return { path, viewport, status, issues, links, stats };
}

// Run jobs with a fixed number of pages open at once.
export async function runPool<Job, Result>(jobs: Job[], concurrency: number, worker: (job: Job) => Promise<Result>): Promise<Result[]> {
  const results: Result[] = new Array(jobs.length);
  let next = 0;
  const runners = Array.from({ length: Math.min(concurrency, jobs.length) }, async () => {
    while (next < jobs.length) {
      const index = next++;
      results[index] = await worker(jobs[index]);
    }
  });
  await Promise.all(runners);
  return results;
}
