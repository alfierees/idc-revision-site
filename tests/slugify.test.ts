import { describe, it, expect } from "vitest";
import { slugify, termSlug } from "../src/lib/slugify";

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

describe("termSlug", () => {
  it("is slugify for an ordinary term", () => {
    expect(termSlug("Primary Key")).toBe("primary-key");
  });
  // A term file named index.md becomes the folder's own id in Astro's glob
  // loader, and /dictionary/index is the dictionary page (Databases & SQL crash).
  it("renames a term titled Index so it can't become index.md", () => {
    expect(termSlug("Index")).toBe("index-term");
    expect(termSlug("  INDEX ")).toBe("index-term");
  });
  it("leaves longer titles that start with index alone", () => {
    expect(termSlug("Index Funds")).toBe("index-funds");
  });
});
