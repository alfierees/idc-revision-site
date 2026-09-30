import { describe, expect, it } from "vitest";
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { collectSiteDocuments } from "../src/lib/rag/corpus";

describe("RAG source collection", () => {
  it("keeps an official solution discrepancy with its assignment question", () => {
    const root = mkdtempSync(join(tmpdir(), "rag-corpus-"));
    try {
      const folder = join(root, "src/content/problem-sets/accounting");
      mkdirSync(folder, { recursive: true });
      writeFileSync(join(folder, "assignment.md"), `---
title: Assignment
subject: accounting
official_solution_note: "The lecturer's workbook leaves the insurance fully prepaid."
questions:
  - id: setup
    text: Record the insurance payment.
    solution: Amortise six months.
---
`);
      const [doc] = collectSiteDocuments(root);
      expect(doc.id).toBe("problem-sets/accounting/assignment#setup");
      expect(doc.text).toContain("lecturer's workbook leaves the insurance fully prepaid");
      expect(doc.text).toContain("Amortise six months");
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });
});
