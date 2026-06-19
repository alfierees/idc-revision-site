import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { collectChunks } from "../../scripts/build-chat-index";

let root: string;

beforeAll(() => {
  root = mkdtempSync(join(tmpdir(), "chatidx-"));
  mkdirSync(join(root, "terms/micro"), { recursive: true });
  writeFileSync(
    join(root, "terms/micro/risk-aversion.md"),
    `---\ntitle: Risk Aversion\nsubject: micro\nrelated: [insurance]\n---\nA preference for certainty.`,
  );
  mkdirSync(join(root, "problem-sets/micro"), { recursive: true });
  writeFileSync(
    join(root, "problem-sets/micro/ex-9-micro-3.md"),
    `---\ntitle: EX-9\nsubject: micro\nsource_doc: /papers/micro/ex-9-micro-3.docx\nquestions:\n  - id: "1a"\n    text: Solve it.\n    solution: Q=100.\n---\n`,
  );
});

afterAll(() => rmSync(root, { recursive: true, force: true }));

describe("collectChunks", () => {
  it("indexes terms and problem-set questions with correct urls", () => {
    const chunks = collectChunks(root);
    const term = chunks.find((c) => c.kind === "term");
    const ps = chunks.find((c) => c.kind === "problem-set");
    expect(term?.url).toBe("/subjects/micro/dictionary/risk-aversion");
    expect(term?.concepts).toContain("insurance");
    expect(ps?.url).toBe("/subjects/micro/problem-sets/ex-9-micro-3");
    expect(ps?.text).toContain("Q=100");
    expect(ps?.sourceDoc).toBe("/papers/micro/ex-9-micro-3.docx");
  });
});
