import { describe, it, expect } from "vitest";
import { renderMarkdownString } from "../src/lib/render-markdown-string";

const render = (md: string) => renderMarkdownString(md, "micro", new Map());

describe("callout rendering", () => {
  it("renders a plain callout with type class on the block", async () => {
    const html = await render(`> [!warning] Watch out\n> Body text.`);
    expect(html).toMatch(/<blockquote class="callout warning">/);
    expect(html).toMatch(/callout-title/);
    expect(html).toContain("Watch out");
    expect(html).toContain("Body text.");
  });

  it("keeps inline math in the callout title", async () => {
    const html = await render(
      `> [!warning] Don't use the $P=0$ quantities here\n> The tempting wrong move.`,
    );
    const title = html.match(/<div class="callout-title[^"]*">([\s\S]*?)<\/div>/)?.[1] ?? "";
    expect(title).toContain("Don't use the");
    expect(title).toContain("quantities here");
    expect(title).toContain("katex"); // the $P=0$ rendered as math, in the title
    // nothing from the title line leaks into the body
    const content = html.match(/<div class="callout-content">([\s\S]*)<\/div>/)?.[1] ?? "";
    expect(content).not.toContain("quantities here");
    expect(content).toContain("The tempting wrong move.");
  });

  it("keeps bold and escaped dollars in the callout title", async () => {
    const html = await render(`> [!success] Answer — **C. \\$600** (sell to customers 1 and 2)`);
    const title = html.match(/<div class="callout-title[^"]*">([\s\S]*?)<\/div>/)?.[1] ?? "";
    expect(title).toContain("Answer —");
    expect(title).toMatch(/<strong>C\. \$600<\/strong>/);
    expect(title).toContain("(sell to customers 1 and 2)");
  });

  it("keeps wikilinks in the callout title", async () => {
    const html = await render(`> [!tip] See [[Moral Hazard]] first\n> Body.`);
    const title = html.match(/<div class="callout-title[^"]*">([\s\S]*?)<\/div>/)?.[1] ?? "";
    expect(title).toContain("See");
    expect(title).toContain("Moral Hazard");
    expect(title).toContain("first");
  });

  it("uses the capitalised keyword when there is no title text", async () => {
    const html = await render(`> [!tip]\n> Just a body.`);
    expect(html).toMatch(/callout-title[^>]*>[\s\S]*?Tip/);
    expect(html).toContain("Just a body.");
  });

  it("maps alias types (caution → warning styling)", async () => {
    const html = await render(`> [!caution] Careful\n> Body.`);
    expect(html).toMatch(/<blockquote class="callout warning">/);
  });

  it("handles a title-only callout with no body", async () => {
    const html = await render(`> [!success] Answer — **B**`);
    expect(html).toMatch(/callout-title/);
    expect(html).toContain("Answer —");
    expect(html).not.toMatch(/callout-content/);
  });

  it("preserves multi-paragraph bodies and nested content", async () => {
    const html = await render(
      `> [!info] The idea\n> First paragraph with $x=1$.\n>\n> Second paragraph.`,
    );
    const content = html.match(/<div class="callout-content">([\s\S]*)<\/div>/)?.[1] ?? "";
    expect(content).toContain("First paragraph");
    expect(content).toContain("Second paragraph.");
    expect(content).toContain("katex");
  });

  it("leaves plain blockquotes untouched", async () => {
    const html = await render(`> Just a quote, no marker.`);
    expect(html).toContain("<blockquote>");
    expect(html).not.toContain("callout");
  });
});
