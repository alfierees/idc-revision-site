import { describe, it, expect } from "vitest";
import { SYSTEM_PROMPT, buildContextBlock, buildMessages } from "../../src/lib/chat/prompt";
import type { IndexChunk } from "../../src/lib/chat/types";

const chunks: IndexChunk[] = [
  { id: "a#0", text: "Adverse selection is hidden information.", title: "Adverse Selection", subject: "micro", kind: "term", url: "/u/a", concepts: [] },
];

describe("prompt assembly", () => {
  it("system prompt forbids outside knowledge", () => {
    expect(SYSTEM_PROMPT.toLowerCase()).toContain("only");
    expect(SYSTEM_PROMPT.toLowerCase()).toContain("context");
  });
  it("context block lists title, url and text", () => {
    const block = buildContextBlock(chunks);
    expect(block).toContain("Adverse Selection");
    expect(block).toContain("/u/a");
    expect(block).toContain("hidden information");
  });
  it("buildMessages appends the context to the latest user turn and keeps history", () => {
    const history = [
      { role: "user" as const, content: "hi" },
      { role: "assistant" as const, content: "hello" },
      { role: "user" as const, content: "what is adverse selection?" },
    ];
    const msgs = buildMessages(history, chunks);
    expect(msgs).toHaveLength(3);
    expect(msgs[2].role).toBe("user");
    expect(msgs[2].content).toContain("what is adverse selection?");
    expect(msgs[2].content).toContain("Adverse Selection");
  });
});
