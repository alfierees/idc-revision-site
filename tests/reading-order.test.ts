import { describe, expect, it } from "vitest";
import { neighbours, sortExamPrep, sortLectures, sortProblemSets } from "../src/lib/reading-order";

describe("section order", () => {
  it("sorts lectures by week, then undated by title", () => {
    const lectures = [{ slug: "c", title: "C" }, { slug: "b", title: "B", week: 2 }, { slug: "a", title: "A", week: 1 }];
    expect(sortLectures(lectures).map((entry) => entry.slug)).toEqual(["a", "b", "c"]);
  });
  it("sorts problem sets by their number", () => {
    const sets = [{ slug: "ps-10" }, { slug: "ps-2" }, { slug: "ps-1" }];
    expect(sortProblemSets(sets).map((entry) => entry.slug)).toEqual(["ps-1", "ps-2", "ps-10"]);
  });
  it("sorts exam prep by order, then title", () => {
    const docs = [{ slug: "z", title: "Z" }, { slug: "b", title: "B", order: 2 }, { slug: "a", title: "A", order: 1 }];
    expect(sortExamPrep(docs).map((entry) => entry.slug)).toEqual(["a", "b", "z"]);
  });
});

describe("neighbours", () => {
  const items = [{ slug: "one" }, { slug: "two" }, { slug: "three" }];
  it("finds both sides", () => {
    expect(neighbours(items, "two")).toEqual({ previous: { slug: "one" }, next: { slug: "three" } });
  });
  it("has no previous at the start or next at the end", () => {
    expect(neighbours(items, "one").previous).toBeUndefined();
    expect(neighbours(items, "three").next).toBeUndefined();
  });
  it("returns nothing for an unknown page", () => {
    expect(neighbours(items, "missing")).toEqual({});
  });
});
