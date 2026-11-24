import { describe, expect, it } from "vitest";
import { stripNoteMeta } from "../src/lib/strip-note-meta";

describe("stripNoteMeta", () => {
  it("removes the Part of / Key concepts / Builds on header", () => {
    const md = "# Lec 2\n\n> Part of: [[Python]]\n> Key concepts: [[Int]], [[Float]]\n> Builds on: [[Lec 1]]\n\nIntro text.\n\n## 1. Types\n\n> Part of: keep me\n";
    expect(stripNoteMeta(md)).toBe("\n\nIntro text.\n\n## 1. Types\n\n> Part of: keep me\n");
  });
  it("keeps non-metadata lines of the same quote", () => {
    const md = "# R\n\n> Part of: [[DM]]\n> **Topic 5** · Reading\n> Citation: Ebrahim (2020).\n> Key concepts: [[SMM]]\n\n## TL;DR\n";
    expect(stripNoteMeta(md)).toBe("\n> **Topic 5** · Reading\n> Citation: Ebrahim (2020).\n\n## TL;DR\n");
  });
  it("leaves callouts alone", () => {
    const md = "Intro\n\n> [!note] Source\n> Slides 1–40.\n\n## A\n";
    expect(stripNoteMeta(md)).toBe(md);
  });
});

import { compareCourseOrder } from "../src/lib/ordering";
describe("compareCourseOrder", () => {
  it("orders by slug number, not title", () => {
    const slugs = ["lec-10-x", "lec-02-y", "read-01-z", "lec-07b-q", "lec-07-p", "rec-01-r", "lec-00-a"];
    expect([...slugs].sort(compareCourseOrder)).toEqual(["lec-00-a", "lec-02-y", "lec-07-p", "lec-07b-q", "lec-10-x", "rec-01-r", "read-01-z"]);
  });
});
