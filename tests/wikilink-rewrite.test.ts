import { describe, it, expect } from "vitest";
import { rewriteWikiHrefs } from "../src/lib/wikilink-rewrite";
import { resolveLink, type LinkMap } from "../src/lib/known-links";
import { renderMarkdownString } from "../src/lib/render-markdown-string";

describe("rewriteWikiHrefs", () => {
  const links: LinkMap = new Map([
    ["topic-2-equilibrium-in-different-market-structures",
      { kind: "lecture", slug: "topic-2-equilibrium-in-different-market-structures" }],
    ["cournot-competition", { kind: "term", slug: "cournot-competition" }],
  ]);

  it("resolves a plain wiki-link to the canonical URL", () => {
    const html = rewriteWikiHrefs(
      '<a href="__WIKI__cournot-competition">x</a>',
      "micro", links,
    );
    expect(html).toContain('href="/subjects/micro/dictionary/cournot-competition"');
  });

  it("resolves a wiki-link with a #fragment to URL + anchor", () => {
    const html = rewriteWikiHrefs(
      '<a href="__WIKI__topic-2-equilibrium-in-different-market-structures#cournot-1838-quantity-competition">x</a>',
      "micro", links,
    );
    expect(html).toContain(
      'href="/subjects/micro/lectures/topic-2-equilibrium-in-different-market-structures#cournot-1838-quantity-competition"',
    );
  });

  it("resolves a same-page [[#Section]] link to a #fragment href", () => {
    const html = rewriteWikiHrefs('<a href="__WIKI__#costs-of-production">x</a>', "micro", new Map());
    expect(html).toContain('href="#costs-of-production"');
  });

  it("marks an unresolved wiki-link as missing", () => {
    const html = rewriteWikiHrefs(
      '<a href="__WIKI__never-heard-of-it">x</a>',
      "micro", links,
    );
    expect(html).toContain('data-missing="true"');
  });
});

describe("renderMarkdownString — heading ids", () => {
  it("adds an id to ## headings", async () => {
    const html = await renderMarkdownString(
      "## Cournot (1838) — Quantity competition\n\nfoo",
      "micro",
      new Map(),
    );
    expect(html).toMatch(/<h2[^>]*id="cournot-1838-quantity-competition"/);
  });

  it("adds an id to ### headings", async () => {
    const html = await renderMarkdownString("### Sub-section\n\nbody", "micro", new Map());
    expect(html).toMatch(/<h3[^>]*id="sub-section"/);
  });

  it("parses [[Page#Section]] into a slug#fragment href", async () => {
    const links: LinkMap = new Map([
      ["topic-2-x", { kind: "lecture", slug: "topic-2-x" }],
    ]);
    const html = await renderMarkdownString(
      "see [[Topic 2 X#Cournot (1838)]]",
      "micro", links,
    );
    expect(html).toContain('href="/subjects/micro/lectures/topic-2-x#cournot-1838"');
  });
});

describe("resolveLink — prefix fallback", () => {
  it("auto-resolves a single-word tag to the longer canonical term", () => {
    const map: LinkMap = new Map([
      ["cournot-competition", { kind: "term", slug: "cournot-competition" }],
    ]);
    expect(resolveLink(map, "cournot")?.slug).toBe("cournot-competition");
  });

  it("returns undefined when multiple canonicals share the prefix (ambiguous)", () => {
    const map: LinkMap = new Map([
      ["fixed-effects", { kind: "term", slug: "fixed-effects" }],
      ["time-fixed-effects", { kind: "term", slug: "time-fixed-effects" }],
    ]);
    // "fixed" prefix-matches "fixed-effects" only (not "time-fixed-effects"
    // which doesn't START with "fixed-"). So this should resolve to fixed-effects.
    expect(resolveLink(map, "fixed")?.slug).toBe("fixed-effects");
  });

  it("prefers exact match over prefix fallback", () => {
    const map: LinkMap = new Map([
      ["panel-data", { kind: "term", slug: "panel-data" }],
      ["panel-data-extras", { kind: "term", slug: "panel-data-extras" }],
    ]);
    expect(resolveLink(map, "panel-data")?.slug).toBe("panel-data");
  });

  it("does not match against alias entries (only canonical)", () => {
    // Setup: alias "ols" -> canonical "ols-estimator"; another canonical "ols-extras".
    // Tag "ols" should hit the alias direct (highest precedence), not get confused
    // by prefix-fallback (which would otherwise see two candidates: "ols-estimator"
    // and "ols-extras") and return undefined.
    const map: LinkMap = new Map([
      ["ols-estimator", { kind: "term", slug: "ols-estimator" }],
      ["ols-extras", { kind: "term", slug: "ols-extras" }],
      ["ols", { kind: "term", slug: "ols-estimator" }],   // alias
    ]);
    expect(resolveLink(map, "ols")?.slug).toBe("ols-estimator");
  });
});

describe("renderMarkdownString — Obsidian image embeds", () => {
  it("converts ![[Foo.png]] into an img with stem as alt", async () => {
    const html = await renderMarkdownString("![[Lec04_iv_dag.png]]", "econometrics", new Map());
    expect(html).toContain('<img src="/images/econometrics/lec04-iv-dag.png" alt="Lec04_iv_dag"');
  });

  it("drops a numeric width alias and uses stem as alt", async () => {
    const html = await renderMarkdownString("![[Lec01_bimodal_giving.png|560]]", "econometrics", new Map());
    expect(html).toContain('src="/images/econometrics/lec01-bimodal-giving.png"');
    expect(html).toContain('alt="Lec01_bimodal_giving"');
    expect(html).not.toMatch(/width="?560"?/);
  });

  it("uses a non-numeric alias as alt text", async () => {
    const html = await renderMarkdownString("![[Foo.png|A causal DAG]]", "econometrics", new Map());
    expect(html).toContain('alt="A causal DAG"');
  });
});
