import { describe, it, expect } from "vitest";
import { renderMarkdownString } from "../src/lib/render-markdown-string";

const render = (md: string) => renderMarkdownString(md, "micro-ii", new Map());

describe("Obsidian block IDs (^anchor)", () => {
  it("renders display math that is followed by a block ID", async () => {
    const html = await render(`Intro.\n\n$$\\boxed{MR = MC}$$ ^mr-equals-mc\n\nAfter.`);
    expect(html).toContain("katex-display");
    expect(html).not.toContain("katex-error");
    expect(html).not.toContain("^mr-equals-mc");
    expect(html).toContain("After.");
  });

  it("drops a block ID at the end of a paragraph but keeps the text", async () => {
    const html = await render(`The contract curve is the Pareto set. ^contract-curve`);
    expect(html).toContain("The contract curve is the Pareto set.");
    expect(html).not.toContain("^contract-curve");
  });

  it("leaves a superscript with a space before it alone", async () => {
    const html = await render(`$$\nx ^2 + y ^2\n$$`);
    expect(html).not.toContain("katex-error");
    expect(html).toContain("<msup>");
  });

  it("does not touch code blocks", async () => {
    const html = await render("```python\ny = x ^mask\n```");
    expect(html).toContain("y = x ^mask");
  });

  // Obsidian puts a block's ID on its own line after a table, list or callout.
  // Legal & Tax (2026-11-20) leaked 28 of these as literal "^id" paragraphs.
  it("drops a block ID on its own line after a table", async () => {
    const html = await render(`| A | B |\n|---|---|\n| 1 | 2 |\n^tax-rates\n\nAfter.`);
    expect(html).toContain("<table>");
    expect(html).not.toContain("^tax-rates");
    expect(html).toContain("After.");
  });

  it("drops an indented standalone block ID", async () => {
    const html = await render(`- first point\n- second point\n\n  ^key-points`);
    expect(html).toContain("second point");
    expect(html).not.toContain("^key-points");
  });

  it("keeps a standalone caret line with no letters", async () => {
    const html = await render(`Line one\n^2`);
    expect(html).toContain("^2");
  });
});

describe("Obsidian highlights (==text==)", () => {
  it("renders a highlight as bold", async () => {
    const html = await render(`The ==contract curve== is the set of efficient allocations.`);
    expect(html).toContain("<strong>contract curve</strong>");
    expect(html).not.toContain("==");
  });

  it("renders a highlight that wraps inline math", async () => {
    const html = await render(`The inputs are ==labour $L$== and ==capital $K$==.`);
    expect(html).not.toContain("==");
    expect(html).toMatch(/<strong>labour <span class="katex">/);
    expect(html).toMatch(/<strong>capital <span class="katex">/);
  });

  it("leaves comparison operators in prose and code alone", async () => {
    const html = await render("If x == y then `a == b` holds.");
    expect(html).toContain("x == y");
    expect(html).toContain("<code>a == b</code>");
  });
});
