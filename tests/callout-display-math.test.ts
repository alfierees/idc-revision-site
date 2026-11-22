import { describe, it, expect } from "vitest";
import { renderMarkdownString } from "../src/lib/render-markdown-string";

const render = (markdown: string) => renderMarkdownString(markdown, "micro", new Map());
const displayCount = (html: string) => (html.match(/class="katex-display"/g) ?? []).length;
const calloutContent = (html: string) => html.match(/<div class="callout-content">([\s\S]*)<\/div>/)?.[1] ?? "";

describe("one-line display math inside callouts", () => {
  it("renders a one-line equation as display math", async () => {
    const html = await render("> [!note] Working\n> Start here.\n>\n> $$x^2 + 1$$\n>\n> End here.");
    expect(displayCount(html)).toBe(1);
    expect(calloutContent(html)).toContain("Start here.");
    expect(calloutContent(html)).toContain("End here.");
    expect(html.match(/<blockquote/g)).toHaveLength(1);
  });

  it("handles an equation directly after a text line, with no blank line", async () => {
    const html = await render("> [!note] Working\n> So we get:\n> $$\\frac{a}{b}$$\n> and we are done.");
    expect(displayCount(html)).toBe(1);
    expect(calloutContent(html)).toContain("So we get:");
    expect(calloutContent(html)).toContain("and we are done.");
  });

  it("keeps trailing punctuation with the equation", async () => {
    const html = await render("> [!note] Working\n> $$y = 2$$.");
    expect(displayCount(html)).toBe(1);
    expect(html).not.toMatch(/<p>\.<\/p>/);
  });

  it("keeps prose that follows the equation on the same line", async () => {
    const html = await render("> [!note] Working\n> $$a = b.$$ As $x$ grows, this holds.");
    expect(displayCount(html)).toBe(1);
    expect(calloutContent(html)).toContain("As");
    expect(calloutContent(html)).toContain("grows, this holds.");
  });

  it("handles nested blockquotes", async () => {
    const html = await render("> outer\n>\n> > $$z = 1$$");
    expect(displayCount(html)).toBe(1);
    expect(html.match(/<blockquote/g)).toHaveLength(2);
  });

  it("leaves multi-line display math in a callout alone", async () => {
    const html = await render("> [!note] Working\n> $$\n> x = 1\n> $$\n>\n> After.");
    expect(displayCount(html)).toBe(1);
    expect(calloutContent(html)).toContain("After.");
  });

  it("does not treat two display spans on one line as a single equation", async () => {
    const html = await render("> $$a$$ and $$b$$");
    expect(html).not.toContain("katex-error");
    expect(html).toContain("and");
  });

  it("leaves inline math in a callout inline", async () => {
    const html = await render("> [!note] Working\n> The value $x = 2$ works.");
    expect(displayCount(html)).toBe(0);
    expect(html).toContain("katex");
  });

  it("does not touch dollars inside a quoted code fence", async () => {
    const html = await render("> ```text\n> $$not math$$\n> ```");
    expect(displayCount(html)).toBe(0);
    expect(html).toContain("$$not math$$");
  });

  it("still promotes one-line display math outside callouts", async () => {
    const html = await render("Before.\n\n$$x + y$$\n\nAfter.");
    expect(displayCount(html)).toBe(1);
  });
});
