import { describe, expect, it } from "vitest";
import { entrySlug } from "../src/lib/entry-slug";
import { buildTotals } from "../src/lib/progress/totals";

describe("entrySlug", () => {
  it("takes the last path segment, like the pages do", () => {
    expect(entrySlug("micro-ii/ps-4")).toBe("ps-4");
    expect(entrySlug("ps-4")).toBe("ps-4");
  });
});

describe("buildTotals", () => {
  const input = {
    subjects: [
      { slug: "micro-ii", title: "Micro-Economics II", year: 2 as const, semester: 1 as const, placeholder: false },
      { slug: "statistics-a", title: "Statistics A", year: 1 as const, semester: 1 as const, placeholder: true },
    ],
    lectures: [
      { id: "micro-ii/lec-4", data: { subject: "micro-ii", in_scope: true } },
      { id: "micro-ii/old", data: { subject: "micro-ii", in_scope: false } },
    ],
    problemSets: [
      {
        id: "micro-ii/ps-1",
        data: { subject: "micro-ii", questions: [{ id: "1", solution: "x" }, { id: "2", solution: "  " }] },
      },
    ],
    pastPapers: [
      {
        id: "micro-ii/pp-1",
        data: { subject: "micro-ii", questions: [{ id: "q1", solution: "", options: [{}] }, { id: "q2", solution: "" }] },
      },
      { id: "micro-ii/pp-prose", data: { subject: "micro-ii" } },
    ],
  };

  it("lists live courses only", () => {
    expect(buildTotals(input).courses.map((c) => c.slug)).toEqual(["micro-ii"]);
  });

  it("keeps in-scope lectures, solved PS questions and gradable PP questions", () => {
    const [course] = buildTotals(input).courses;
    expect(course.lectures).toEqual(["lec-4"]);
    expect(course.problemSets).toEqual({ "ps-1": ["1"] });
    expect(course.pastPapers).toEqual({ "pp-1": ["q1"] });
  });
});
