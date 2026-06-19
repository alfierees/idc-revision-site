import { describe, it, expect } from "vitest";
import { sourcesFromChunks } from "../../src/lib/chat/sources";
import type { IndexChunk } from "../../src/lib/chat/types";

const chunks: IndexChunk[] = [
  { id: "a#0", text: "", title: "EX-9", subject: "micro", kind: "problem-set", url: "/u/ex9", sourceDoc: "/papers/micro/ex-9.docx", concepts: [] },
  { id: "a#1", text: "", title: "EX-9", subject: "micro", kind: "problem-set", url: "/u/ex9", sourceDoc: "/papers/micro/ex-9.docx", concepts: [] },
  { id: "b#0", text: "", title: "Risk Aversion", subject: "micro", kind: "term", url: "/u/ra", concepts: [] },
];

describe("sourcesFromChunks", () => {
  it("dedupes by url and keeps source docs", () => {
    const sources = sourcesFromChunks(chunks);
    expect(sources).toHaveLength(2);
    expect(sources[0]).toEqual({ title: "EX-9", url: "/u/ex9", kind: "problem-set", subject: "micro", sourceDoc: "/papers/micro/ex-9.docx" });
    expect(sources[1].title).toBe("Risk Aversion");
  });
});
