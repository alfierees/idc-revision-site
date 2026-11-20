import { describe, it, expect } from "vitest";
import { findSlugCollisions, termSlugCollisions, formatCollision } from "../../scripts/ingest/slug-collisions";

describe("findSlugCollisions", () => {
  it("finds distinct titles that slugify to the same slug (Macro II's IS* Curve vs IS Curve)", () => {
    expect(findSlugCollisions(["IS* Curve", "IS Curve", "LM* Curve", "LM Curve", "Solow Model"])).toEqual([
      { slug: "is-curve", titles: ["IS* Curve", "IS Curve"] },
      { slug: "lm-curve", titles: ["LM* Curve", "LM Curve"] },
    ]);
  });

  it("ignores the same title listed twice: nothing is lost", () => {
    expect(findSlugCollisions(["Pareto Efficiency", "Pareto Efficiency"])).toEqual([]);
  });

  it("returns nothing when every slug is unique", () => {
    expect(findSlugCollisions(["Cournot Competition", "Bertrand Competition"])).toEqual([]);
  });
});

describe("termSlugCollisions", () => {
  it("checks registry concepts and glossary entries separately and labels the source", () => {
    const registry = "## Unresolved Links\n\n- `[[IS* Curve]]` — open economy\n- `[[IS Curve]]` — closed economy\n";
    const glossary = "## Topic\n\n### LM* Curve\nopen\n\n### LM Curve\nclosed\n";
    expect(termSlugCollisions({ registry, glossary })).toEqual([
      { source: "registry", slug: "is-curve", titles: ["IS* Curve", "IS Curve"] },
      { source: "glossary", slug: "lm-curve", titles: ["LM* Curve", "LM Curve"] },
    ]);
  });

  it("skips resolved registry rows (they are notes, not terms) and missing files", () => {
    const registry = "## Resolved Links\n\n| Link Target | Context |\n|---|---|\n| [[IS Curve]] | note |\n\n## Unresolved Links\n\n- `[[IS* Curve]]` — x\n";
    expect(termSlugCollisions({ registry, glossary: null })).toEqual([]);
  });
});

describe("formatCollision", () => {
  it("says which titles collide and what to do", () => {
    expect(formatCollision({ source: "registry", slug: "is-curve", titles: ["IS* Curve", "IS Curve"] }))
      .toBe('registry: "IS* Curve", "IS Curve" → is-curve (only one term page would be written; merge them into one page and alias the other)');
  });
});
