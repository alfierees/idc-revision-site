import { describe, it, expect } from "vitest";
import { collectLineDisplayTex, displayOnlyTex, scanHtml, stripScriptsAndStyles } from "../../scripts/verify/static-scan";

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

describe("cramped-math check", () => {
  // A KaTeX inline formula as it appears in built HTML: the TeX sits in a MathML annotation.
  const inline = (tex: string) =>
    `<span class="katex"><span class="katex-mathml"><math><semantics><mrow></mrow><annotation encoding="application/x-tex">${tex}</annotation></semantics></math></span></span>`;
  const display = (tex: string) => `<span class="katex-display">${inline(tex)}</span>`;

  it("collects one-line $$ formulas from callouts and list items, not mid-sentence or in code", () => {
    const md = "$$a=1$$\n> $$b = 2$$\n   $$c=3$$ ^id\nso $$d$$ holds\n```\n$$e$$\n```";
    expect(collectLineDisplayTex(md)).toEqual(["a=1", "b = 2", "c=3"]);
  });

  it("only checks formulas the course never also writes inline", () => {
    const tex = displayOnlyTex(["$$-2$$\n$$\\frac{a}{b}$$", "The answer is $-2$."]);
    expect([...tex]).toEqual(["\\frac{a}{b}"]);
  });

  it("flags a one-line $$ formula that rendered inline on its own line", () => {
    const displayTex = new Set(["\\frac{a}{b}"]);
    expect(kinds2(`<ul><li>item\n${inline("\\frac{a}{b}")}\n</li></ul>`, displayTex)).toEqual(["cramped-math"]);
    expect(kinds2(`<p>text\n${inline("\\frac{a}{b}")}\nmore</p>`, displayTex)).toEqual(["cramped-math"]);
  });

  it("does not flag display output, mid-sentence use, or pages scanned without the course formulas", () => {
    const displayTex = new Set(["\\frac{a}{b}"]);
    expect(kinds2(`<div class="eqn">${display("\\frac{a}{b}")}</div>`, displayTex)).toEqual([]);
    expect(kinds2(`<p>so ${inline("\\frac{a}{b}")} holds</p>`, displayTex)).toEqual([]);
    expect(kinds(`<p>${inline("\\frac{a}{b}")}</p>`)).toEqual([]);
  });

  it("checks solutions hidden in an island's props", () => {
    const props = JSON.stringify({ solutionHtml: [0, `<p>${inline("\\frac{a}{b}")}</p>`] }).replace(/"/g, "&quot;");
    expect(kinds2(`<astro-island props="${props}"></astro-island>`, new Set(["\\frac{a}{b}"]))).toEqual(["cramped-math"]);
  });
});

const kinds2 = (html: string, displayTex: Set<string>) => scanHtml(html, { displayTex }).map((finding) => finding.kind);
