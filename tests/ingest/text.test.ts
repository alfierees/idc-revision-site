import { describe, it, expect } from "vitest";
import { slugify, extractImageRefs } from "../../scripts/ingest/text";

describe("slugify", () => {
  it("lowercases and replaces non-alphanumerics with dashes", () => {
    expect(slugify("Nash Equilibrium")).toBe("nash-equilibrium");
    expect(slugify("Prisoner's Dilemma")).toBe("prisoners-dilemma");
    expect(slugify("EX-1 - Micro 3")).toBe("ex-1-micro-3");
  });

  it("collapses repeated dashes and trims edges", () => {
    expect(slugify("  ---hello---world---  ")).toBe("hello-world");
  });
});

describe("extractImageRefs", () => {
  it("finds Obsidian-style ![[name.png]] refs", () => {
    const md = "Some text ![[diagram.png]] more text ![[chart 2.jpg]].";
    expect(extractImageRefs(md)).toEqual(["diagram.png", "chart 2.jpg"]);
  });

  it("finds standard ![](path/name.png) refs", () => {
    const md = "Foo ![alt](attachments/figure-1.png) bar ![](other.svg).";
    expect(extractImageRefs(md)).toEqual(["attachments/figure-1.png", "other.svg"]);
  });

  it("returns empty array when no images", () => {
    expect(extractImageRefs("just text")).toEqual([]);
  });
});
