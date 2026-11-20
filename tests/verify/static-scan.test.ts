import { describe, it, expect } from "vitest";
import { scanHtml, stripScriptsAndStyles } from "../../scripts/verify/static-scan";

const kinds = (html: string) => scanHtml(html).map((finding) => finding.kind);

describe("stripScriptsAndStyles", () => {
  it("removes script and style blocks, including ones with attributes", () => {
    expect(stripScriptsAndStyles('<style>a==b</style><script type="module" src="x.js"></script><p>ok</p>'))
      .toBe("<p>ok</p>");
  });
});

describe("scanHtml", () => {
  it("ignores ==null inside minified scripts", () => {
    expect(scanHtml("<script>if(a==null)b()</script><p>ok</p>")).toEqual([]);
  });

  it("flags KaTeX parse errors", () => {
    expect(kinds('<span class="katex-error" title="ParseError">\\frac{</span>')).toEqual(["katex-error"]);
  });

  it("flags KaTeX errors hidden inside an island's escaped props (unrevealed solutions)", () => {
    expect(kinds('<astro-island props="{&quot;solutionHtml&quot;:[0,&quot;&lt;span class=\\&quot;katex-error\\&quot;&gt;x&lt;/span&gt;&quot;]}"></astro-island>'))
      .toEqual(["katex-error"]);
  });

  it("flags literal ==highlight== text", () => {
    expect(kinds("<p>this is ==key== text</p>")).toEqual(["raw-highlight"]);
  });

  it("does not flag == used as an operator in prose or code", () => {
    expect(scanHtml("<p>if a == b then</p><pre><code>x==y==z</code></pre>")).toEqual([]);
  });

  it("flags a stray Obsidian block id at the end of a text run", () => {
    expect(kinds("<p>Some claim ^def-1</p>")).toEqual(["raw-block-id"]);
  });

  it("does not flag carets that are maths or numbers", () => {
    expect(scanHtml("<p>x ^2 is fine</p><p>see ^12</p>")).toEqual([]);
  });

  it("ignores everything inside KaTeX output", () => {
    expect(scanHtml('<span class="katex"><span class="katex-mathml">a ==b== ^abc</span></span>')).toEqual([]);
  });

  it("gives a short excerpt for each finding", () => {
    const [finding] = scanHtml(`<p>${"word ".repeat(40)}==oops== ${"tail ".repeat(40)}</p>`);
    expect(finding.excerpt).toContain("==oops==");
    expect(finding.excerpt.length).toBeLessThanOrEqual(100);
  });
});
