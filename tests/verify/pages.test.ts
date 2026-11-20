import { describe, it, expect, beforeAll } from "vitest";
import { mkdtempSync, mkdirSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { listSubjectPages, findBrokenLinks } from "../../scripts/verify/pages";
import type { SweptPage } from "../../scripts/verify/report";

let distRoot: string;
beforeAll(() => {
  distRoot = mkdtempSync(join(tmpdir(), "pages-"));
  for (const directory of ["subjects/pilot", "subjects/pilot/lectures/intro", "subjects/pilot-two", "subjects/other"]) {
    mkdirSync(join(distRoot, directory), { recursive: true });
    writeFileSync(join(distRoot, directory, "index.html"), "<p></p>");
  }
  mkdirSync(join(distRoot, "papers/pilot"), { recursive: true });
  writeFileSync(join(distRoot, "papers/pilot/ps-1.pdf"), "%PDF");
});

describe("listSubjectPages", () => {
  it("lists only the subject's own pages, not a subject whose slug starts the same", () => {
    expect(listSubjectPages(distRoot, "pilot")).toEqual(["/subjects/pilot/", "/subjects/pilot/lectures/intro/"]);
  });

  it("returns nothing for a subject that wasn't built", () => {
    expect(listSubjectPages(distRoot, "missing")).toEqual([]);
  });
});

describe("findBrokenLinks", () => {
  const swept = (path: string, links: string[]): SweptPage => ({ path, viewport: "mobile", status: 200, issues: [], links });

  it("reports each missing target once, with the first page that links to it", () => {
    const result = findBrokenLinks(distRoot, [
      swept("/subjects/pilot/", ["/subjects/pilot/lectures/intro/", "/subjects/pilot/gone/", "/papers/pilot/ps-1.pdf"]),
      swept("/subjects/pilot/lectures/intro/", ["/subjects/pilot/gone/", "/subjects/other"]),
    ]);
    expect(result.linksChecked).toBe(4);
    expect(result.broken).toEqual([{ from: "/subjects/pilot/", href: "/subjects/pilot/gone/" }]);
  });
});
