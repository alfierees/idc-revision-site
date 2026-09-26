import { describe, it, expect } from "vitest";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import type { Root } from "hast";
import { swapImages } from "../src/lib/graph-swaps";

const SWAPS = { "micro/t2-cournot-br.png": { type: "cournot-reaction", a: 12 } };

async function render(markdown: string): Promise<{ html: string; swapped: number }> {
  let swapped = 0;
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(() => (tree: Root) => { swapped = swapImages(tree, SWAPS); })
    .use(rehypeStringify);
  const html = String(await processor.process(markdown));
  return { html, swapped };
}

describe("graph swaps", () => {
  it("replaces a paragraph holding only a mapped image with a graph block", async () => {
    const { html, swapped } = await render("Before\n\n![Cournot](/images/micro/t2-cournot-br.png)\n\nAfter");
    expect(swapped).toBe(1);
    expect(html).toContain('<pre><code class="language-graph">type: cournot-reaction\na: 12</code></pre>');
    expect(html).not.toContain("<img");
    expect(html).not.toMatch(/<p>\s*<pre>/);
  });

  it("swaps a mapped image inside a blockquote callout", async () => {
    const { swapped, html } = await render("> Note\n>\n> ![c](/images/micro/t2-cournot-br.png)");
    expect(swapped).toBe(1);
    expect(html).toContain("language-graph");
  });

  it("leaves unmapped images alone", async () => {
    const { html, swapped } = await render("![x](/images/micro/other.png)");
    expect(swapped).toBe(0);
    expect(html).toContain('<img src="/images/micro/other.png"');
  });
});
