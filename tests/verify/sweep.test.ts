// Integration test: real headless Chromium against fixture pages served by
// the verify static server. Slower than the unit tests (~2-4 s).

import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { mkdtempSync, mkdirSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { chromium, type Browser, type BrowserContext } from "playwright";
import { startStaticServer, type StaticServer } from "../../scripts/verify/static-server";
import { createContexts, sweepPage, runPool } from "../../scripts/verify/sweep";
import type { Viewport } from "../../scripts/verify/report";

const FAST = { hydrationTimeoutMs: 500, imageTimeoutMs: 1000, graphTimeoutMs: 300, mermaidTimeoutMs: 300 };
const page = (body: string) => `<!doctype html><html><head><meta name="viewport" content="width=device-width"></head><body>${body}</body></html>`;

const FIXTURES: Record<string, string> = {
  "clean/index.html": page('<main><p>Fine <span class="katex">$$x$$</span></p><pre><code>```graph</code></pre><a href="/clean/">self</a><a href="/missing/">gone</a><a href="https://example.com/">out</a></main>'),
  "overflow/index.html": page('<main><div class="wide-table" style="width:2000px">wide</div><div style="overflow-x:auto"><div style="width:3000px">scrolls fine</div></div></main>'),
  "raw-text/index.html": page("<p>$$ x^2 $$</p><p>```graph type: lemons</p>"),
  "graph/index.html": page('<pre><code class="language-graph">type: lemons-threshold</code></pre><div class="graph-embed">[unknown graph type: nope]</div>'),
  "mermaid/index.html": page('<pre><code class="language-mermaid">erDiagram\n  A ||--o{ B : has</code></pre><div class="mermaid">graph TD; broken</div><div class="mermaid" id="mermaid-2"><svg aria-roledescription="error"><g class="error-icon"></g></svg></div>'),
  "mermaid-ok/index.html": page('<div class="mermaid"><svg width="10" height="10"></svg></div>'),
  "image/index.html": page('<img src="/nope.png" alt="missing">'),
  "console/index.html": page("<script>console.error('boom')</script><script>fetch('/_vercel/insights/x')</script>"),
  "throws/index.html": page("<script>setTimeout(() => { throw new Error('kaput') }, 0)</script>"),
};

let root: string;
let server: StaticServer;
let browser: Browser;
let contexts: Record<Viewport, BrowserContext>;

beforeAll(async () => {
  root = mkdtempSync(join(tmpdir(), "sweep-"));
  for (const [file, html] of Object.entries(FIXTURES)) {
    mkdirSync(join(root, file, ".."), { recursive: true });
    writeFileSync(join(root, file), html);
  }
  server = await startStaticServer(root);
  browser = await chromium.launch();
  contexts = await createContexts(browser);
}, 30_000);

afterAll(async () => {
  await browser?.close();
  await server?.close();
});

const kindsFor = async (path: string, viewport: Viewport = "mobile") =>
  (await sweepPage(contexts[viewport], server.url, path, viewport, FAST)).issues.map((issue) => issue.kind);

describe("sweepPage", () => {
  it("passes a clean page and returns its same-origin links only", async () => {
    const result = await sweepPage(contexts.mobile, server.url, "/clean/", "mobile", FAST);
    expect(result.issues).toEqual([]);
    expect(result.status).toBe(200);
    expect(result.links.sort()).toEqual(["/clean/", "/missing/"]);
  });

  it("flags horizontal overflow and names the culprit, not the scrolling container", async () => {
    const result = await sweepPage(contexts.mobile, server.url, "/overflow/", "mobile", FAST);
    expect(result.issues.map((issue) => issue.kind)).toEqual(["horizontal-overflow"]);
    expect(result.issues[0].detail).toContain("wide-table");
    expect(result.issues[0].detail).not.toContain("scrolls fine");
  });

  it("flags raw display maths and raw graph fences showing as text", async () => {
    expect((await kindsFor("/raw-text/")).sort()).toEqual(["raw-display-math", "raw-graph-fence"]);
  });

  it("flags graph blocks that never mounted and unknown graph types", async () => {
    expect(await kindsFor("/graph/")).toEqual(["graph-not-mounted", "graph-not-mounted"]);
  });

  // Databases & SQL: ERDs in problem-set solutions showed as raw erDiagram code.
  it("flags mermaid blocks left as code and hosts mermaid failed to draw", async () => {
    const result = await sweepPage(contexts.mobile, server.url, "/mermaid/", "mobile", FAST);
    expect(result.issues.map((issue) => issue.kind)).toEqual(["mermaid-not-rendered", "mermaid-not-rendered", "mermaid-not-rendered"]);
    expect(result.issues[0].detail).toContain("erDiagram");
    expect(result.issues[2].detail).toBe("syntax error in diagram mermaid-2");
  });

  it("passes a drawn mermaid diagram", async () => {
    expect(await kindsFor("/mermaid-ok/")).toEqual([]);
  });

  it("flags broken images", async () => {
    expect(await kindsFor("/image/")).toEqual(["broken-image"]);
  });

  it("flags console errors but ignores Vercel analytics requests", async () => {
    expect(await kindsFor("/console/", "desktop")).toEqual(["console-error"]);
  });

  it("flags uncaught page errors", async () => {
    expect(await kindsFor("/throws/", "desktop")).toContain("page-error");
  });

  it("reports a missing page as load-failed", async () => {
    expect(await kindsFor("/does-not-exist/")).toEqual(["load-failed"]);
  });
});

describe("runPool", () => {
  it("runs every job, keeps result order, and never exceeds the concurrency", async () => {
    let running = 0;
    let peak = 0;
    const results = await runPool([5, 1, 3, 2, 4], 2, async (delay) => {
      running++;
      peak = Math.max(peak, running);
      await new Promise((resolve) => setTimeout(resolve, delay));
      running--;
      return delay * 10;
    });
    expect(results).toEqual([50, 10, 30, 20, 40]);
    expect(peak).toBe(2);
  });
});

describe("under tsx (how npm run verify runs it)", () => {
  it("evaluates in-page checks without esbuild's __name helper breaking them", async () => {
    // Async spawn: this process hosts the fixture server, so it must keep serving.
    const { execFile } = await import("node:child_process");
    const { promisify } = await import("node:util");
    const script = `
      import { chromium } from "playwright";
      import { createContexts, sweepPage } from "./scripts/verify/sweep.ts";
      const browser = await chromium.launch();
      const contexts = await createContexts(browser);
      const result = await sweepPage(contexts.mobile, ${JSON.stringify(server.url)}, "/overflow/", "mobile", ${JSON.stringify(FAST)});
      console.log(JSON.stringify(result.issues.map((issue) => issue.kind)));
      await browser.close();
    `;
    const run = await promisify(execFile)("npx", ["tsx", "--input-type=module", "-e", script], { encoding: "utf8" });
    expect(run.stderr).not.toContain("__name");
    expect(run.stdout.trim().split("\n").pop()).toBe('["horizontal-overflow"]');
  }, 30_000);
});
