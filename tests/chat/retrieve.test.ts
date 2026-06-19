import { describe, it, expect } from "vitest";
import { retrieve } from "../../src/lib/chat/retrieve";
import type { IndexChunk } from "../../src/lib/chat/types";

const idx: IndexChunk[] = [
  { id: "a#0", text: "Adverse selection arises from hidden information before a contract.", title: "Adverse Selection", subject: "micro", kind: "term", url: "/u/a", concepts: ["asymmetric-information"] },
  { id: "b#0", text: "Moral hazard arises from hidden action after a contract.", title: "Moral Hazard", subject: "micro", kind: "term", url: "/u/b", concepts: ["asymmetric-information"] },
  { id: "c#0", text: "Cournot competition has firms choosing quantities.", title: "Cournot", subject: "micro", kind: "term", url: "/u/c", concepts: [] },
];

describe("retrieve", () => {
  it("returns the most relevant chunks for a query", () => {
    const hits = retrieve(idx, "adverse selection and moral hazard", 2);
    const titles = hits.map((h) => h.title);
    expect(titles).toContain("Adverse Selection");
    expect(titles).toContain("Moral Hazard");
    expect(hits).toHaveLength(2);
  });
  it("never returns more than k", () => {
    expect(retrieve(idx, "competition", 1)).toHaveLength(1);
  });
  it("returns [] for empty query", () => {
    expect(retrieve(idx, "   ", 5)).toEqual([]);
  });
});
