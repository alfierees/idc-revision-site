import { describe, expect, it } from "vitest";
import { chunkDocument, STRATEGIES } from "../src/lib/rag/chunk";
import type { RagDocument } from "../src/lib/rag/corpus";

const document: RagDocument = {
  id: "problem-sets/micro/example#1", title: "Insurance question", subject: "micro",
  kind: "problem-sets-question", url: "/subjects/micro/problem-sets/example#1",
  sourcePath: "test.md", source: "site", text: "",
};

describe("RAG chunking", () => {
  it("keeps the answer near the end of a long question in every strategy", () => {
    const text = `Why can fair insurance be rejected?\n\n${"The premium reflects insured consumption. ".repeat(115)}\n\nThe eight-shekel wedge explains rejection.`;
    for (const strategy of STRATEGIES) {
      const chunks = chunkDocument({ ...document, text }, strategy);
      expect(chunks.length).toBeGreaterThan(1);
      expect(chunks.some((chunk) => chunk.text.includes("eight-shekel wedge"))).toBe(true);
      expect(chunks.every((chunk) => chunk.subject === "micro" && chunk.id === document.id)).toBe(true);
    }
  });

  it("carries the question into later structure chunks and labels sections", () => {
    const text = `Why can fair insurance be rejected?\n\n## Worked solution\n${"Insured consumption rises. ".repeat(125)}\n\n## Conclusion\nThe premium exceeds natural expected loss.`;
    const chunks = chunkDocument({ ...document, text }, "structure");
    expect(chunks.some((chunk) => chunk.section === "Conclusion" && chunk.text.includes("Why can fair insurance be rejected?"))).toBe(true);
    expect(chunks.some((chunk) => chunk.text.includes("premium exceeds natural expected loss"))).toBe(true);
  });
});
