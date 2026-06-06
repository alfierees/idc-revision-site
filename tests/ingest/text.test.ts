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

  it("preserves accented characters via Unicode normalisation", () => {
    expect(slugify("Léontief Préférence")).toBe("leontief-preference");
    expect(slugify("São Paulo Model")).toBe("sao-paulo-model");
  });

  it("returns empty string for inputs with no alphanumerics", () => {
    expect(slugify("")).toBe("");
    expect(slugify("---")).toBe("");
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

  it("handles Obsidian sized embeds and additional image extensions", () => {
    expect(extractImageRefs("![[diagram.png|400]]")).toEqual(["diagram.png"]);
    expect(extractImageRefs("![[photo.heic]]")).toEqual(["photo.heic"]);
    expect(extractImageRefs("![](modern.avif)")).toEqual(["modern.avif"]);
  });
});
