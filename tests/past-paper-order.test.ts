import { describe, expect, it } from "vitest";
import { comparePapersNewestFirst, examYear } from "../src/lib/past-paper-order";

const paper = (slug: string, title = "Paper") => ({ slug, title });

describe("examYear", () => {
  it("reads the year from the slug", () => {
    expect(examYear(paper("pp-09-classical-theory-2025-moed-b"))).toBe(2025);
  });
  it("falls back to the title", () => {
    expect(examYear(paper("pp-02-holdup", "2023 Moed A — Holdup Game"))).toBe(2023);
  });
  it("returns null for undated papers", () => {
    expect(examYear(paper("pp-01-sample-final-a", "Sample Final A"))).toBeNull();
  });
});

describe("comparePapersNewestFirst", () => {
  it("puts newer exams first, Moed B before Moed A in the same year", () => {
    const papers = [paper("pp-06-2023-moed-a"), paper("pp-09-2025-moed-b"), paper("pp-08-2025-moed-a")];
    expect(papers.sort(comparePapersNewestFirst).map((entry) => entry.slug)).toEqual([
      "pp-09-2025-moed-b", "pp-08-2025-moed-a", "pp-06-2023-moed-a",
    ]);
  });
  it("puts undated papers after dated ones, in paper order", () => {
    const papers = [paper("pp-07-readings-practice"), paper("pp-06-2024-exam-b2"), paper("pp-01-sample")];
    expect(papers.sort(comparePapersNewestFirst).map((entry) => entry.slug)).toEqual([
      "pp-06-2024-exam-b2", "pp-01-sample", "pp-07-readings-practice",
    ]);
  });
});
