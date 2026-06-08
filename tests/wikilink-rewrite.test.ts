import { describe, it, expect } from "vitest";
import { rewriteWikiHrefs } from "../src/lib/wikilink-rewrite";
import type { LinkMap } from "../src/lib/known-links";
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
