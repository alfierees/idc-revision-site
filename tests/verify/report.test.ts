import { describe, it, expect } from "vitest";
import { buildReport, renderSummary, parseAuditTotal, type ReportInput } from "../../scripts/verify/report";

const cleanInput = (): ReportInput => ({
  slug: "pilot",
  generatedAt: "2026-11-20T00:00:00.000Z",
  durationMs: 1234,
  build: { skipped: false, exitCode: 0, output: "845 page(s) built" },
  audit: { exitCode: 0, output: "Total issues: 0\n" },
  staticPages: [{ path: "/subjects/pilot/", findings: [] }],
  sweptPages: [
    { path: "/subjects/pilot/", viewport: "mobile", status: 200, issues: [], links: ["/subjects/pilot/lectures/"] },
    { path: "/subjects/pilot/", viewport: "desktop", status: 200, issues: [], links: ["/subjects/pilot/lectures/"], stats: { solutionsRevealed: 2, graphsMounted: 1, images: 3, mathBlocks: 9 } },
  ],
  brokenLinks: [],
  linksChecked: 1,
});

describe("parseAuditTotal", () => {
  it("reads the audit's total line", () => {
    expect(parseAuditTotal("...\nTotal issues: 7\n")).toBe(7);
    expect(parseAuditTotal("crashed")).toBeNull();
  });
});

describe("buildReport", () => {
  it("passes when every check is clean", () => {
    const report = buildReport(cleanInput());
    expect(report.ok).toBe(true);
    expect(report.checks.audit.ok).toBe(true);
    expect(report.checks.sweep.pagesSwept).toBe(1);
    expect(report.checks.sweep.loadsChecked).toBe(2);
    expect(report.checks.sweep.coverage).toEqual({ solutionsRevealed: 2, graphsMounted: 1, images: 3, mathBlocks: 9 });
    expect(renderSummary(report)).toContain("2 solutions revealed, 1 graphs mounted");
  });

  it("fails on a non-zero audit exit and reports its total", () => {
    const input = cleanInput();
    input.audit = { exitCode: 1, output: "Total issues: 3\n" };
    const report = buildReport(input);
    expect(report.ok).toBe(false);
    expect(report.checks.audit.totalIssues).toBe(3);
  });

  it("flattens static findings and sweep issues with their page and counts them by kind", () => {
    const input = cleanInput();
    input.staticPages = [{ path: "/subjects/pilot/a/", findings: [{ kind: "katex-error", excerpt: "\\frac" }] }];
    input.sweptPages[0].issues = [{ kind: "horizontal-overflow", detail: "scrollWidth 512 > 390" }];
    input.brokenLinks = [{ from: "/subjects/pilot/a/", href: "/subjects/pilot/missing/" }];
    const report = buildReport(input);
    expect(report.ok).toBe(false);
    expect(report.checks.static.findings).toEqual([{ path: "/subjects/pilot/a/", kind: "katex-error", excerpt: "\\frac" }]);
    expect(report.checks.sweep.failures[0]).toMatchObject({ path: "/subjects/pilot/", viewport: "mobile", kind: "horizontal-overflow" });
    expect(report.counts).toEqual({ "katex-error": 1, "horizontal-overflow": 1, "broken-link": 1 });
  });
});

describe("build check", () => {
  it("fails the report when the build fails and keeps the log tail", () => {
    const input = cleanInput();
    input.build = { skipped: false, exitCode: 1, output: "lots\nof\nlog\n[ERROR] bad frontmatter in ps-3.md" };
    const report = buildReport(input);
    expect(report.ok).toBe(false);
    expect(renderSummary(report)).toContain("bad frontmatter in ps-3.md");
  });

  it("says when the build was skipped", () => {
    const input = cleanInput();
    input.build = { skipped: true, exitCode: 0, output: "" };
    expect(renderSummary(buildReport(input))).toContain("skipped");
  });
});

describe("renderSummary", () => {
  it("leads with the verdict and has one line per check", () => {
    const summary = renderSummary(buildReport(cleanInput()));
    expect(summary).toMatch(/^# Verify: pilot/);
    expect(summary).toContain("**PASS**");
    for (const check of ["Build", "Audit", "Static HTML scan", "Browser sweep", "Internal links"]) expect(summary).toContain(check);
  });

  it("lists at most 20 examples per check and says how many more", () => {
    const input = cleanInput();
    input.staticPages = Array.from({ length: 25 }, (_, index) => ({
      path: `/subjects/pilot/p${index}/`,
      findings: [{ kind: "raw-highlight" as const, excerpt: "==x==" }],
    }));
    const summary = renderSummary(buildReport(input));
    expect(summary).toContain("**FAIL**");
    expect(summary).toContain("/subjects/pilot/p19/");
    expect(summary).not.toContain("/subjects/pilot/p20/");
    expect(summary).toContain("and 5 more");
  });
});
