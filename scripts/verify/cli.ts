// npm run verify -- <slug> [--skip-build] [--concurrency N] [--out DIR]
//
// Machine check for one course, so a course PR can be judged without a human
// reading every page:
//   1. build (unless --skip-build)
//   2. scripts/ingest/audit.ts <slug>
//   3. static scan of dist/subjects/<slug>/** for KaTeX errors, ==highlights==, ^block-ids
//   4. Playwright sweep of every subject page at 390px and 1280px
//   5. internal links checked against dist/ on disk
// Writes <out>/report.json and <out>/summary.md (default .verify/<slug>/),
// prints the summary, exits 1 if anything failed.

import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";
import { scanHtml } from "./static-scan.js";
import { startStaticServer } from "./static-server.js";
import { createContexts, runPool, sweepPage } from "./sweep.js";
import { listSubjectPages, findBrokenLinks } from "./pages.js";
import { buildReport, renderSummary, type Viewport } from "./report.js";

const REPO_ROOT = resolve(fileURLToPath(new URL("../../", import.meta.url)));

interface CliOptions {
  slug: string;
  skipBuild: boolean;
  concurrency: number;
  outDir: string;
}

function parseArguments(argv: string[]): CliOptions {
  const positional: string[] = [];
  let skipBuild = false;
  let concurrency = 6;
  let outDir: string | null = null;
  for (let index = 0; index < argv.length; index++) {
    const argument = argv[index];
    if (argument === "--skip-build") skipBuild = true;
    else if (argument === "--concurrency") concurrency = Number(argv[++index]);
    else if (argument === "--out") outDir = argv[++index];
    else positional.push(argument);
  }
  if (positional.length !== 1 || !Number.isInteger(concurrency) || concurrency < 1) {
    console.error("Usage: npm run verify -- <subject-slug> [--skip-build] [--concurrency N] [--out DIR]");
    process.exit(2);
  }
  const slug = positional[0];
  return { slug, skipBuild, concurrency, outDir: resolve(outDir ?? join(REPO_ROOT, ".verify", slug)) };
}

function run(command: string, args: string[]): { exitCode: number; output: string } {
  const result = spawnSync(command, args, { cwd: REPO_ROOT, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
  return { exitCode: result.status ?? 1, output: `${result.stdout ?? ""}${result.stderr ?? ""}` };
}

async function main() {
  const startedAt = Date.now();
  const options = parseArguments(process.argv.slice(2));
  const { slug } = options;
  const distRoot = join(REPO_ROOT, "dist");

  if (!existsSync(join(REPO_ROOT, "src/content/subjects", `${slug}.md`))) {
    console.error(`Unknown subject "${slug}": no src/content/subjects/${slug}.md`);
    process.exit(2);
  }

  console.log(`verify ${slug}: build…`);
  const build = options.skipBuild
    ? { skipped: true, exitCode: existsSync(distRoot) ? 0 : 1, output: existsSync(distRoot) ? "" : "no dist/ to reuse" }
    : { skipped: false, ...run("npm", ["run", "build"]) };

  console.log(`verify ${slug}: audit…`);
  const audit = run("npx", ["tsx", "scripts/ingest/audit.ts", slug]);

  const pages = build.exitCode === 0 ? listSubjectPages(distRoot, slug) : [];
  if (build.exitCode === 0 && pages.length === 0) {
    build.exitCode = 1;
    build.output += `\nNo pages under dist/subjects/${slug}/`;
  }

  console.log(`verify ${slug}: static scan of ${pages.length} pages…`);
  const staticPages = pages.map((path) => ({
    path,
    findings: scanHtml(readFileSync(join(distRoot, path, "index.html"), "utf8")),
  }));

  let sweptPages: Awaited<ReturnType<typeof sweepPage>>[] = [];
  if (pages.length > 0) {
    console.log(`verify ${slug}: browser sweep of ${pages.length} pages × 2 widths…`);
    const server = await startStaticServer(distRoot);
    const browser = await chromium.launch();
    try {
      const contexts = await createContexts(browser);
      const jobs = pages.flatMap((path) => (["mobile", "desktop"] as Viewport[]).map((viewport) => ({ path, viewport })));
      sweptPages = await runPool(jobs, options.concurrency, ({ path, viewport }) =>
        sweepPage(contexts[viewport], server.url, path, viewport),
      );
    } finally {
      await browser.close();
      await server.close();
    }
  }

  const { linksChecked, broken } = findBrokenLinks(distRoot, sweptPages);
  const report = buildReport({
    slug,
    generatedAt: new Date().toISOString(),
    durationMs: Date.now() - startedAt,
    build,
    audit,
    staticPages,
    sweptPages,
    brokenLinks: broken,
    linksChecked,
  });

  mkdirSync(options.outDir, { recursive: true });
  const summary = renderSummary(report);
  writeFileSync(join(options.outDir, "report.json"), JSON.stringify(report, null, 2) + "\n");
  writeFileSync(join(options.outDir, "summary.md"), summary);
  console.log("\n" + summary);
  console.log(`report: ${join(options.outDir, "report.json")}`);
  process.exit(report.ok ? 0 : 1);
}

main().catch((error) => {
  console.error(error);
  process.exit(2);
});
