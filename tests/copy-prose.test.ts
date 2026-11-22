import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import {
  copyPastPapers,
  hasStructuredQuestions,
  injectFrontmatter,
  transformExcalidrawEmbeds,
} from "../scripts/ingest/copy-prose";

describe("injectFrontmatter", () => {
  it("adds subject and in_scope when absent", () => {
    const out = injectFrontmatter("---\ntitle: X\n---\n\nbody", "econometrics");
    expect(out).toMatch(/subject: econometrics/);
    expect(out).toMatch(/in_scope: true/);
    expect(out).toContain("title: X");
    expect(out).toContain("body");
  });

  it("leaves an existing subject untouched", () => {
    const out = injectFrontmatter("---\ntitle: X\nsubject: foo\n---\nbody", "econometrics");
    expect(out).toContain("subject: foo");
    expect(out).not.toMatch(/subject: econometrics/);
  });
});

describe("transformExcalidrawEmbeds", () => {
  it("rewrites the embed to an exported image when one exists", () => {
    const out = transformExcalidrawEmbeds(
      "before\n![[PP_01 Causal Diagram.excalidraw]]\nafter",
      (name) => (name === "PP_01 Causal Diagram" ? "PP_01 Causal Diagram.png" : null),
    );
    expect(out).toContain("![[PP_01 Causal Diagram.png]]");
    expect(out).not.toContain(".excalidraw");
  });

  it("strips the embed line when no export exists, keeping surrounding text", () => {
    const out = transformExcalidrawEmbeds(
      "before\n![[PP_01 Causal Diagram.excalidraw]]\nafter",
      () => null,
    );
    expect(out).toContain("before");
    expect(out).toContain("after");
    expect(out).not.toContain("excalidraw");
  });
});

const structuredPaper = `---
title: Structured
subject: pilot
questions:
  - id: q1
    text: |
      A question
      ---
      with a rule inside its text
    solution: |
      An answer
---

Intro
`;

describe("hasStructuredQuestions", () => {
  it("is true for a frontmatter question list", () => {
    expect(hasStructuredQuestions(structuredPaper)).toBe(true);
  });

  it("is true for an unindented question list", () => {
    expect(hasStructuredQuestions("---\ntitle: X\nquestions:\n- id: q1\n  text: A\n  solution: B\n---\nBody")).toBe(true);
  });

  it("is true for a Windows line-ending question list", () => {
    expect(hasStructuredQuestions("---\r\ntitle: X\r\nquestions:\r\n  - id: q1\r\n---\r\nBody")).toBe(true);
  });

  it("is false for an empty question list", () => {
    expect(hasStructuredQuestions("---\ntitle: X\nquestions: []\n---\nBody")).toBe(false);
  });

  it("is false for a questions key with no items", () => {
    expect(hasStructuredQuestions("---\nquestions:\ntitle: X\n---\nBody")).toBe(false);
  });

  it("is false when only the body mentions questions", () => {
    expect(hasStructuredQuestions("---\ntitle: X\n---\n\nquestions:\n  - id: q1\n")).toBe(false);
  });

  it("is false without frontmatter", () => {
    expect(hasStructuredQuestions("questions:\n  - id: q1\n")).toBe(false);
  });
});

describe("copyPastPapers", () => {
  let fixtureRoot: string;
  let contentRoot: string;
  let destinationDir: string;
  let subject: { slug: string; title: string; vaultPath: string; sourceDocPath: string };

  const writeVaultPaper = (fileName: string, contents: string) =>
    writeFile(join(subject.vaultPath, "Past Papers", fileName), contents);

  beforeEach(async () => {
    fixtureRoot = await mkdtemp(join(tmpdir(), "copy-past-papers-"));
    subject = {
      slug: "pilot",
      title: "Pilot",
      vaultPath: join(fixtureRoot, "vault"),
      sourceDocPath: join(fixtureRoot, "docs"),
    };
    contentRoot = join(fixtureRoot, "site", "src", "content");
    destinationDir = join(contentRoot, "past-papers", "pilot");
    await mkdir(join(subject.vaultPath, "Past Papers"), { recursive: true });
    await mkdir(join(subject.vaultPath, "Attachments"), { recursive: true });
    await mkdir(destinationDir, { recursive: true });
  });

  afterEach(async () => {
    await rm(fixtureRoot, { recursive: true, force: true });
  });

  it("copies a new paper", async () => {
    await writeVaultPaper("PP 01.md", "---\ntitle: New\n---\n\nVault body");

    const result = await copyPastPapers(subject, contentRoot);

    expect(result).toEqual({ copied: ["pp-01"], kept: [] });
    expect(await readFile(join(destinationDir, "pp-01.md"), "utf8")).toContain("Vault body");
  });

  it("overwrites a flat paper with the vault copy", async () => {
    await writeVaultPaper("PP 01.md", "---\ntitle: Updated\n---\n\nNew vault body");
    await writeFile(join(destinationDir, "pp-01.md"), "---\ntitle: Old\nsubject: pilot\n---\n\nOld body");

    const result = await copyPastPapers(subject, contentRoot);

    expect(result).toEqual({ copied: ["pp-01"], kept: [] });
    const updatedPaper = await readFile(join(destinationDir, "pp-01.md"), "utf8");
    expect(updatedPaper).toContain("New vault body");
    expect(updatedPaper).not.toContain("Old body");
  });

  it("keeps a structured paper byte for byte", async () => {
    await writeVaultPaper("PP 01.md", "---\ntitle: Flat vault copy\n---\n\nVault body");
    await writeFile(join(destinationDir, "pp-01.md"), structuredPaper);

    const result = await copyPastPapers(subject, contentRoot);

    expect(result).toEqual({ copied: [], kept: ["pp-01"] });
    expect(await readFile(join(destinationDir, "pp-01.md"), "utf8")).toBe(structuredPaper);
  });

  it("overwrites a paper whose question list is empty", async () => {
    await writeVaultPaper("PP 01.md", "---\ntitle: Updated\n---\n\nNew vault body");
    await writeFile(join(destinationDir, "pp-01.md"), "---\ntitle: Old\nquestions: []\n---\n\nOld body");

    const result = await copyPastPapers(subject, contentRoot);

    expect(result).toEqual({ copied: ["pp-01"], kept: [] });
    expect(await readFile(join(destinationDir, "pp-01.md"), "utf8")).toContain("New vault body");
  });

  it("still copies images referenced by the vault note of a kept paper", async () => {
    await writeFile(join(subject.vaultPath, "Attachments", "figure.png"), "image-bytes");
    await writeVaultPaper("PP 01.md", "---\ntitle: Flat\n---\n\n![[figure.png]]");
    await writeFile(join(destinationDir, "pp-01.md"), structuredPaper);

    await copyPastPapers(subject, contentRoot);

    expect(existsSync(join(fixtureRoot, "site", "public", "images", "pilot", "figure.png"))).toBe(true);
  });
});
