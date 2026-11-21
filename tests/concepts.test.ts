import { describe, expect, it } from "vitest";
import { conceptLinks } from "../src/lib/concepts";
import type { LinkMap } from "../src/lib/known-links";

const links: LinkMap = new Map([
  ["solow-model", { kind: "term", slug: "solow-model" }],
  ["solow", { kind: "term", slug: "solow-model" }],
  ["is-lm-model", { kind: "term", slug: "is-lm-model" }],
  ["lec-05", { kind: "lecture", slug: "lec-05" }],
]);
const titles = new Map([["solow-model", "Solow Model"], ["is-lm-model", "IS-LM Model"]]);

describe("conceptLinks", () => {
  it("uses real term names and links", () => {
    expect(conceptLinks(["is-lm-model"], "macro-ii", links, titles)).toEqual([
      { label: "IS-LM Model", href: "/subjects/macro-ii/dictionary/is-lm-model" },
    ]);
  });
  it("drops course and format tags that aren't terms", () => {
    expect(conceptLinks(["past-paper", "lec-05", "macro-ii"], "macro-ii", links, titles)).toEqual([]);
  });
  it("lists a term once however it's tagged", () => {
    expect(conceptLinks(["solow", "solow-model"], "macro-ii", links, titles)).toHaveLength(1);
  });
});
