import { describe, it, expect } from "vitest";
import { slugify } from "../src/lib/slugify";

describe("slugify (shared)", () => {
  it("lowercases and hyphenates ascii", () => {
    expect(slugify("Hello World")).toBe("hello-world");
  });
  it("strips accents and punctuation", () => {
    expect(slugify("Cournot (1838) — Quantity competition")).toBe("cournot-1838-quantity-competition");
  });
  it("collapses underscores and runs of separators", () => {
    expect(slugify("Lec_04-Instrumental Variables")).toBe("lec-04-instrumental-variables");
  });
  it("trims leading and trailing hyphens", () => {
    expect(slugify("-foo-bar-")).toBe("foo-bar");
  });
});
