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

describe("rewriteWikiHrefs — subject self-hub", () => {
  it("renders [[Subject]] (slug === subject) as plain text, not a link", () => {
    const html = rewriteWikiHrefs(
      '<a href="__WIKI__econometrics">Econometrics</a>',
      "econometrics", new Map(),
    );
    // The self-hub route only redirects to the dictionary, so a subject
    // referencing itself is unwrapped to plain text rather than a link.
    expect(html).toBe("Econometrics");
    expect(html).not.toContain("<a");
    expect(html).not.toContain("data-missing");
    expect(html).not.toContain("data-selfhub");
  });

  it("keeps an aliased self-hub link ([[Subject|alias]]) as plain alias text", () => {
    const html = rewriteWikiHrefs(
      '<a href="__WIKI__econometrics" class="internal">the course</a>',
      "econometrics", new Map(),
    );
    expect(html).toBe("the course");
    expect(html).not.toContain("<a");
  });
});

describe("resolveLink — problem-set vault-name fallback", () => {
  const map: LinkMap = new Map([
    ["ps-4", { kind: "problem-set", slug: "ps-4" }],
    ["ps-2", { kind: "problem-set", slug: "ps-2" }],
  ]);

  it("resolves a zero-padded full vault name to the ingested ps-N page", () => {
    // [[PS_04-Seatbelt Laws & Traffic Fatalities]] slugifies to this.
    expect(resolveLink(map, "ps-04-seatbelt-laws-traffic-fatalities")?.slug).toBe("ps-4");
  });

  it("resolves a bare zero-padded number", () => {
    expect(resolveLink(map, "ps-02")?.slug).toBe("ps-2");
  });

  it("returns undefined when the target ps-N page does not exist", () => {
    expect(resolveLink(map, "ps-09-nonexistent")).toBeUndefined();
  });
});

describe("rewriteWikiHrefs — lecture title & recipe title aliases", () => {
  // Mirrors the alias entries buildLinkMap registers from frontmatter `title`.
  const links: LinkMap = new Map([
    ["lec-01-introduction-treatment-effects",
      { kind: "lecture", slug: "lec-01-introduction-treatment-effects" }],
    ["introduction-treatment-effects",
      { kind: "lecture", slug: "lec-01-introduction-treatment-effects" }],
    ["testing-heteroskedasticity", { kind: "recipe", slug: "testing-heteroskedasticity" }],
    ["testing-for-heteroskedasticity", { kind: "recipe", slug: "testing-heteroskedasticity" }],
  ]);

  it("resolves a prefix-free lecture title to the Lec_NN page", () => {
    const html = rewriteWikiHrefs(
      '<a href="__WIKI__introduction-treatment-effects">x</a>',
      "econometrics", links,
    );
    expect(html).toContain(
      'href="/subjects/econometrics/lectures/lec-01-introduction-treatment-effects"',
    );
  });

  it("resolves a recipe referenced by its full title", () => {
    const html = rewriteWikiHrefs(
      '<a href="__WIKI__testing-for-heteroskedasticity">x</a>',
      "econometrics", links,
    );
    expect(html).toContain(
      'href="/subjects/econometrics/recipes/testing-heteroskedasticity"',
    );
  });
});

describe("rewriteWikiHrefs — past papers & glossary anchors", () => {
  const links: LinkMap = new Map([
    ["pp-01-emotions-risky-choice-practice-exam",
      { kind: "past-paper", slug: "pp-01-emotions-risky-choice-practice-exam" }],
    ["f-test", { kind: "term", slug: "f-test" }],
  ]);

  it("resolves a [[PP_..]] link to the past-papers URL", () => {
    const html = rewriteWikiHrefs(
      '<a href="__WIKI__pp-01-emotions-risky-choice-practice-exam">x</a>',
      "econometrics", links,
    );
    expect(html).toContain(
      'href="/subjects/econometrics/past-papers/pp-01-emotions-risky-choice-practice-exam"',
    );
  });

  it("routes a glossary-anchor link to the dictionary page via its fragment", () => {
    const html = rewriteWikiHrefs(
      '<a href="__WIKI__econometrics-concepts#f-test">F-test</a>',
      "econometrics", links,
    );
    expect(html).toContain('href="/subjects/econometrics/dictionary/f-test"');
    expect(html).not.toContain("#f-test\"");
  });

  it("marks an unknown glossary fragment as missing", () => {
    const html = rewriteWikiHrefs(
      '<a href="__WIKI__econometrics-concepts#never-heard">x</a>',
      "econometrics", links,
    );
    expect(html).toContain('data-missing="true"');
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

describe("renderMarkdownString — escaped dollars in math (currency)", () => {
  const SENTINEL = String.fromCharCode(0xe000); // internal sentinel must never leak into output

  it("renders inline math containing an escaped dollar without a KaTeX error", async () => {
    // `$P^{**} = \$1{,}062.50$` — currency inside inline math. remark-math used
    // to treat the `$` in `\$` as a closing delimiter, breaking the span.
    const html = await renderMarkdownString(
      "$q^{**} = 47.5$, $P^{**} = \\$1{,}062.50$.",
      "micro", new Map(),
    );
    expect(html).not.toContain("katex-error");
    expect(html).not.toContain(SENTINEL)
  });

  it("renders \\Delta with an escaped dollar in the same span", async () => {
    const html = await renderMarkdownString(
      "Price rose by $\\Delta P = 1{,}062.5 - 987.5 = \\$75$ here.",
      "micro", new Map(),
    );
    expect(html).not.toContain("katex-error");
    expect(html).not.toContain(SENTINEL)
  });

  it("renders an escaped dollar in display math", async () => {
    const html = await renderMarkdownString(
      "$$\\$10 < \\$20 \\implies \\textbf{UNDERPRICED}$$",
      "micro", new Map(),
    );
    expect(html).not.toContain("katex-error");
    expect(html).not.toContain(SENTINEL)
  });

  it("renders an escaped dollar in prose as a literal $", async () => {
    const html = await renderMarkdownString(
      "The current ticket price is \\$10 per seat.",
      "micro", new Map(),
    );
    expect(html).toContain("$10 per seat");
    expect(html).not.toContain(SENTINEL)
  });

  it("does not turn bare currency dollars into a math span", async () => {
    // `($2,000) and **debit ...** for the $250` — two bare `$` used to pair up
    // into one inline-math span, swallowing the prose (words ran together, the
    // `**bold**` showed as `∗∗`). Each `$` is currency and must stay literal.
    const html = await renderMarkdownString(
      "credit Equipment for its full cost ($2,000) and **debit Accumulated Depreciation** for the $250 built up.",
      "accounting", new Map(),
    );
    expect(html).not.toMatch(/class="katex/);          // no math rendered at all
    expect(html).toContain("$2,000");
    expect(html).toContain("$250");
    expect(html).toContain("<strong>debit Accumulated Depreciation</strong>"); // bold survives
    expect(html).not.toContain(SENTINEL);
  });

  it("still renders a pure-number inline math span ($0.68$)", async () => {
    const html = await renderMarkdownString("the probability is $0.68$ today", "micro", new Map());
    expect(html).toMatch(/class="katex/);              // 0.68 is real math
    expect(html).not.toContain(SENTINEL);
  });

  it("keeps real math that contains numbers ($P = 40 - 0.5Q$)", async () => {
    const html = await renderMarkdownString("demand is $P = 40 - 0.5Q$ here", "micro", new Map());
    expect(html).toMatch(/class="katex/);
    expect(html).not.toContain(SENTINEL);
  });

  it("keeps inline math that STARTS with a digit ($1-\\alpha$)", async () => {
    // The currency heuristic must not eat a real span that opens with a digit.
    const html = await renderMarkdownString(
      "exponents $\\alpha$ and $1-\\alpha$ sum to 1.",
      "macro-economics", new Map(),
    );
    expect(html).not.toContain("katex-error");
    expect(html).toMatch(/class="katex/);
    expect(html).not.toContain(SENTINEL);
  });

  it("renders a multi-line $$…$$ display block (content on the opening line)", async () => {
    const html = await renderMarkdownString(
      "inputs:\n\n$$Y = A \\cdot F(K, L\n)$$\n\nFor Cobb–Douglas:",
      "macro-economics", new Map(),
    );
    expect(html).not.toContain("katex-error");
    expect(html).toMatch(/katex-display/);             // rendered as display math
    expect(html).not.toContain(SENTINEL);
  });
});
