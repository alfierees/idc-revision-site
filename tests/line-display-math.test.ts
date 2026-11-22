import { describe, it, expect } from "vitest";
import { renderMarkdownString } from "../src/lib/render-markdown-string";

const render = (md: string) => renderMarkdownString(md, "econometrics", new Map());
const displays = (html: string) => (html.match(/class="katex-display"/g) ?? []).length;
const katexCount = (html: string) => (html.match(/class="katex"/g) ?? []).length;

describe("one-line $$…$$ renders as display math in any container", () => {
  it("inside a callout", async () => {
    const html = await render(`> [!note] Formula\n> $$\\hat\\beta = \\dfrac{\\sum x_i y_i}{\\sum x_i^2}$$`);
    expect(displays(html)).toBe(1);
    expect(html).toContain('class="callout note"');
    expect(html).not.toContain("katex-error");
  });

  it("between lines of text in a callout, keeping the text either side", async () => {
    const html = await render(`> [!tip] T\n> Before the formula\n> $$\\dfrac{a}{b}$$\n> after **the** formula`);
    expect(displays(html)).toBe(1);
    expect(html).toMatch(/<p>Before the formula<\/p>/);
    expect(html).toMatch(/<p>after <strong>the<\/strong> formula<\/p>/);
  });

  it("in a nested callout", async () => {
    const html = await render(`> [!note] Outer\n> > [!tip] Inner\n> > $$\\dfrac{a}{b}$$`);
    expect(displays(html)).toBe(1);
  });

  it("indented under a list item, in a list inside a callout, and at top level mid-paragraph", async () => {
    expect(displays(await render(`1. item\n\n   $$\\dfrac{a}{b}$$\n2. next`))).toBe(1);
    expect(displays(await render(`- item\n  $$\\dfrac{a}{b}$$`))).toBe(1);
    expect(displays(await render(`> [!note] T\n> - item\n>   $$\\dfrac{a}{b}$$`))).toBe(1);
    expect(displays(await render(`text\n$$\\dfrac{a}{b}$$\nmore`))).toBe(1);
  });

  it("keeps an ordered list's numbering when one item holds display math", async () => {
    const html = await render(`1. first\n   $$x = 1$$\n2. second`);
    expect((html.match(/<ol>/g) ?? []).length).toBe(1);
    expect(displays(html)).toBe(1);
  });

  it("leaves $$…$$ in the middle of a sentence inline", async () => {
    const html = await render(`> [!note] T\n> so $$x$$ holds`);
    expect(displays(html)).toBe(0);
    expect(katexCount(html)).toBe(1);
  });

  it("leaves single-dollar math alone on its line inline", async () => {
    const html = await render(`> [!note] T\n> $x = 1$`);
    expect(displays(html)).toBe(0);
  });

  it("keeps escaped currency inside promoted math", async () => {
    const html = await render(`> [!note] T\n> $$P = \\$10 + x$$`);
    expect(displays(html)).toBe(1);
    expect(html).not.toContain("katex-error");
    expect(html).not.toContain("");
  });

  it("does not touch math on the callout title line", async () => {
    const html = await render(`> [!note] Solve $$x^2 = 4$$\n> body`);
    expect(html).toMatch(/callout-title[^]*katex[^]*<\/strong>/);
  });
});
