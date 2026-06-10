import { describe, it, expect } from "vitest";
import { injectFrontmatter, transformExcalidrawEmbeds } from "../scripts/ingest/copy-prose";

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
