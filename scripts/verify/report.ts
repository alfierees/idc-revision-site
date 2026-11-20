// Aggregates the verify checks into one machine-readable report (report.json)
// and a short markdown summary for a PR body or the run's review report.

import type { StaticFinding, StaticFindingKind } from "./static-scan.js";

export type SweepIssueKind =
  | "load-failed"
  | "console-error"
  | "page-error"
  | "horizontal-overflow"
  | "raw-graph-fence"
  | "raw-display-math"
  | "graph-not-mounted"
  | "mermaid-not-rendered"
  | "broken-image";

export type Viewport = "mobile" | "desktop";

export interface SweepIssue {
  kind: SweepIssueKind;
  detail: string;
}

export interface SweptPage {
  path: string;
  viewport: Viewport;
  status: number | null;
  issues: SweepIssue[];
  links: string[];
  stats?: { solutionsRevealed: number; graphsMounted: number; images: number; mathBlocks: number };
  // Text of each display formula still wider than its box (scrolls sideways).
  clippedMath?: string[];
}

export interface ReportInput {
  slug: string;
  generatedAt: string;
  durationMs: number;
  build: { skipped: boolean; exitCode: number; output: string };
  audit: { exitCode: number; output: string };
  staticPages: { path: string; findings: StaticFinding[] }[];
  sweptPages: SweptPage[];
  brokenLinks: { from: string; href: string }[];
  linksChecked: number;
}

export interface VerifyReport {
  slug: string;
  generatedAt: string;
  durationMs: number;
  ok: boolean;
  counts: Partial<Record<StaticFindingKind | SweepIssueKind | "broken-link", number>>;
  checks: {
    build: { ok: boolean; skipped: boolean; exitCode: number; outputTail: string };
    audit: { ok: boolean; exitCode: number; totalIssues: number | null; output: string };
    static: { ok: boolean; pagesScanned: number; findings: { path: string; kind: StaticFindingKind; excerpt: string }[] };
    sweep: {
      ok: boolean;
      pagesSwept: number;
      loadsChecked: number;
      coverage: NonNullable<SweptPage["stats"]>;
      failures: { path: string; viewport: Viewport; kind: SweepIssueKind; detail: string }[];
      // Informational: never affects `ok`. Display formulas that still scroll sideways.
      clippedMath: { total: number; byViewport: Record<Viewport, number>; pages: { path: string; viewport: Viewport; count: number; examples: string[] }[] };
    };
    links: { ok: boolean; linksChecked: number; broken: { from: string; href: string }[] };
  };
}

const EXAMPLES_PER_CHECK = 20;

export function parseAuditTotal(output: string): number | null {
  const match = output.match(/Total issues:\s*(\d+)/);
  return match ? Number(match[1]) : null;
}

export function buildReport(input: ReportInput): VerifyReport {
  const staticFindings = input.staticPages.flatMap((page) =>
    page.findings.map((finding) => ({ path: page.path, kind: finding.kind, excerpt: finding.excerpt })),
  );
  const sweepFailures = input.sweptPages.flatMap((page) =>
    page.issues.map((issue) => ({ path: page.path, viewport: page.viewport, kind: issue.kind, detail: issue.detail })),
  );

  const counts: VerifyReport["counts"] = {};
  const bump = (kind: keyof VerifyReport["counts"]) => { counts[kind] = (counts[kind] ?? 0) + 1; };
  staticFindings.forEach((finding) => bump(finding.kind));
  sweepFailures.forEach((failure) => bump(failure.kind));
  input.brokenLinks.forEach(() => bump("broken-link"));

  const clippedPages = input.sweptPages
    .filter((page) => (page.clippedMath?.length ?? 0) > 0)
    .map((page) => ({ path: page.path, viewport: page.viewport, count: page.clippedMath!.length, examples: page.clippedMath!.slice(0, 3) }));
  const clippedByViewport = { mobile: 0, desktop: 0 };
  clippedPages.forEach((page) => { clippedByViewport[page.viewport] += page.count; });

  const checks: VerifyReport["checks"] = {
    build: {
      ok: input.build.exitCode === 0,
      skipped: input.build.skipped,
      exitCode: input.build.exitCode,
      outputTail: input.build.output.trim().split("\n").slice(-30).join("\n"),
    },
    audit: {
      ok: input.audit.exitCode === 0,
      exitCode: input.audit.exitCode,
      totalIssues: parseAuditTotal(input.audit.output),
      output: input.audit.output,
    },
    static: { ok: staticFindings.length === 0, pagesScanned: input.staticPages.length, findings: staticFindings },
    sweep: {
      ok: sweepFailures.length === 0,
      pagesSwept: new Set(input.sweptPages.map((page) => page.path)).size,
      loadsChecked: input.sweptPages.length,
      // Desktop loads only, so each page counts once.
      coverage: input.sweptPages
        .filter((page) => page.viewport === "desktop" && page.stats)
        .reduce((total, page) => ({
          solutionsRevealed: total.solutionsRevealed + page.stats!.solutionsRevealed,
          graphsMounted: total.graphsMounted + page.stats!.graphsMounted,
          images: total.images + page.stats!.images,
          mathBlocks: total.mathBlocks + page.stats!.mathBlocks,
        }), { solutionsRevealed: 0, graphsMounted: 0, images: 0, mathBlocks: 0 }),
      failures: sweepFailures,
      clippedMath: { total: clippedByViewport.mobile + clippedByViewport.desktop, byViewport: clippedByViewport, pages: clippedPages },
    },
    links: { ok: input.brokenLinks.length === 0, linksChecked: input.linksChecked, broken: input.brokenLinks },
  };

  return {
    slug: input.slug,
    generatedAt: input.generatedAt,
    durationMs: input.durationMs,
    ok: Object.values(checks).every((check) => check.ok),
    counts,
    checks,
  };
}

function exampleLines(lines: string[]): string[] {
  const shown = lines.slice(0, EXAMPLES_PER_CHECK);
  const hidden = lines.length - shown.length;
  return hidden > 0 ? [...shown, `- … and ${hidden} more (see report.json)`] : shown;
}

const verdict = (ok: boolean) => (ok ? "✅" : "❌");

// Informational row: counts never fail the run, they're a watch-list.
function clippedSummary(clipped: VerifyReport["checks"]["sweep"]["clippedMath"]): string {
  if (clipped.total === 0) return "none (non-failing check)";
  const pageCount = (viewport: Viewport) => clipped.pages.filter((page) => page.viewport === viewport).length;
  return `${clipped.byViewport.mobile} blocks on ${pageCount("mobile")} pages at 390px, ${clipped.byViewport.desktop} on ${pageCount("desktop")} at 1280px (non-failing: they scroll sideways)`;
}

export function renderSummary(report: VerifyReport): string {
  const { build, audit, static: staticCheck, sweep, links } = report.checks;
  const seconds = Math.round(report.durationMs / 1000);
  const lines: string[] = [
    `# Verify: ${report.slug}`,
    "",
    `**${report.ok ? "PASS" : "FAIL"}** · ${report.generatedAt} · ${seconds}s`,
    "",
    "| Check | Result |",
    "|---|---|",
    `| ${verdict(build.ok)} Build | ${build.skipped ? "skipped (--skip-build), used existing dist/" : `exit ${build.exitCode}`} |`,
    `| ${verdict(audit.ok)} Audit | exit ${audit.exitCode}, ${audit.totalIssues ?? "?"} issues |`,
    `| ${verdict(staticCheck.ok)} Static HTML scan | ${staticCheck.findings.length} findings in ${staticCheck.pagesScanned} pages |`,
    `| ${verdict(sweep.ok)} Browser sweep | ${sweep.failures.length} failures across ${sweep.pagesSwept} pages × 2 widths |`,
    `| ℹ️ Clipped display math | ${clippedSummary(sweep.clippedMath)} |`,
    `| ${verdict(links.ok)} Internal links | ${links.broken.length} broken of ${links.linksChecked} checked |`,
  ];

  const { coverage } = sweep;
  lines.push("", `**Swept:** ${coverage.solutionsRevealed} solutions revealed, ${coverage.graphsMounted} graphs mounted, ${coverage.images} images, ${coverage.mathBlocks} KaTeX blocks (desktop pass).`);

  const counted = Object.entries(report.counts);
  if (counted.length > 0) {
    lines.push("", "**By kind:** " + counted.map(([kind, count]) => `${kind} ${count}`).join(", "));
  }

  if (!build.ok) {
    lines.push("", "## Build", "", "```", build.outputTail, "```");
  }
  if (!audit.ok) {
    const auditTail = audit.output.trim().split("\n").slice(-25).join("\n");
    lines.push("", "## Audit", "", "```", auditTail, "```");
  }
  if (!staticCheck.ok) {
    lines.push("", "## Static HTML scan", "", ...exampleLines(
      staticCheck.findings.map((finding) => `- \`${finding.kind}\` ${finding.path}: ${finding.excerpt}`),
    ));
  }
  if (!sweep.ok) {
    lines.push("", "## Browser sweep", "", ...exampleLines(
      sweep.failures.map((failure) => `- \`${failure.kind}\` ${failure.path} (${failure.viewport}): ${failure.detail}`),
    ));
  }
  if (sweep.clippedMath.total > 0) {
    lines.push("", "## Clipped display math (non-failing)", "", ...exampleLines(
      sweep.clippedMath.pages.map((page) => `- ${page.path} (${page.viewport}): ${page.count} — ${page.examples.map((text) => `\`${text}\``).join(", ")}`),
    ));
  }
  if (!links.ok) {
    lines.push("", "## Internal links", "", ...exampleLines(
      links.broken.map((link) => `- ${link.from} → ${link.href}`),
    ));
  }
  return lines.join("\n") + "\n";
}
