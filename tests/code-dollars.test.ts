import { describe, it, expect } from "vitest";
import { renderMarkdownString } from "../src/lib/render-markdown-string";

const render = (md: string) => renderMarkdownString(md, "excel-data-analysis", new Map());

describe("dollar signs inside code", () => {
  it("keeps Excel absolute references intact in a fenced block", async () => {
    const html = await render("```excel\n=SUM($A$1:$B$10)\n```");
    expect(html).toContain("=SUM($A$1:$B$10)");
    expect(html).not.toContain("\\$");
  });

  it("keeps Excel absolute references intact in inline code", async () => {
    const html = await render("Use `$K$209` as the cell.");
    expect(html).toContain("<code>$K$209</code>");
  });

  it("keeps a currency-like dollar intact in code", async () => {
    const html = await render("```python\nprice = '$10'\n```");
    expect(html).toContain("$10");
    expect(html).not.toContain("\\$");
  });

  it("leaves a backslash the author wrote in code", async () => {
    const html = await render("```bash\necho \\$HOME \\$5\n```");
    expect(html).toContain("echo \\$HOME \\$5");
  });
});

describe("dollar signs outside code keep working", () => {
  it("renders currency in prose as a plain dollar", async () => {
    const html = await render("It costs $10 and then $20 more.");
    expect(html).toContain("It costs $10 and then $20 more.");
    expect(html).not.toContain("katex");
  });

  it("renders an escaped dollar inside math", async () => {
    const html = await render("Revenue is $\\$5 \\times q$ today.");
    expect(html).toContain("katex");
    expect(html).not.toContain("katex-error");
  });

  it("still renders ordinary inline math", async () => {
    const html = await render("The price is $p = 10$ here.");
    expect(html).toContain("katex");
  });
});
