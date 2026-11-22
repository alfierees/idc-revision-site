// Static scan of built HTML for rendering failures that a clean build hides:
// KaTeX parse errors, Obsidian ==highlights== and ^block-ids leaking as text,
// and cramped equations: a formula the source wrote as one-line `$$…$$`
// display math that came out as an inline formula alone in a paragraph (what
// happened in callouts and list items before remark-line-display-math).
//
// Scripts and styles are stripped first: minified JS is full of `==null`.
// KaTeX errors are matched on the raw HTML so they're found even inside an
// island's escaped props (solutions that only render after "Show solution").
// Highlights and block ids are matched on visible text only, outside KaTeX
// output and code.

import { fromHtml } from "hast-util-from-html";
import type { Element, Nodes } from "hast";

export type StaticFindingKind = "katex-error" | "raw-highlight" | "raw-block-id" | "cramped-math";

export interface StaticFinding {
  kind: StaticFindingKind;
  excerpt: string;
}

const EXCERPT_LENGTH = 100;
const SKIPPED_TAGS = new Set(["script", "style", "pre", "code", "textarea", "template"]);
const HIGHLIGHT = /==[^=\s](?:[^=]*?[^=\s])?==/;
// Obsidian block id: " ^some-id" at the end of a text run; the id needs a letter
// so "x ^2" style text isn't flagged.
const BLOCK_ID = /(?:^|\s)\^[A-Za-z0-9-]*[A-Za-z][A-Za-z0-9-]*\s*$/;

export function stripScriptsAndStyles(html: string): string {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script\s*>/gi, "")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style\s*>/gi, "");
}

function excerptAround(text: string, index: number, matchLength: number): string {
  const collapsed = (value: string) => value.replace(/\s+/g, " ");
  const padding = Math.max(0, Math.floor((EXCERPT_LENGTH - matchLength) / 2));
  const start = Math.max(0, index - padding);
  return collapsed(text.slice(start, start + EXCERPT_LENGTH)).trim();
}

function isKatexOutput(element: Element): boolean {
  const className = element.properties?.className;
  return Array.isArray(className) && className.some((name) => String(name) === "katex" || String(name) === "katex-display");
}

function collectTextRuns(node: Nodes, runs: string[]): void {
  if (node.type === "text") {
    runs.push(node.value);
    return;
  }
  if (node.type === "element" && (SKIPPED_TAGS.has(node.tagName) || isKatexOutput(node))) return;
  if ("children" in node) for (const child of node.children) collectTextRuns(child as Nodes, runs);
}

function hasClass(element: Element, name: string): boolean {
  const className = element.properties?.className;
  return Array.isArray(className) && className.some((c) => String(c) === name);
}

/** KaTeX keeps the TeX source in a MathML annotation; compare with whitespace collapsed. */
const normaliseTex = (tex: string) => tex.replace(/\s+/g, " ").trim();

function annotationTex(node: Nodes): string | undefined {
  if (node.type === "element" && node.tagName === "annotation") {
    return node.children.map((child) => ("value" in child ? child.value : "")).join("");
  }
  if ("children" in node) {
    for (const child of node.children) {
      const tex = annotationTex(child as Nodes);
      if (tex !== undefined) return tex;
    }
  }
  return undefined;
}

/**
 * Every formula the author wrote as display math on one line: `$$…$$` alone on
 * its line, at column 0, inside a callout (`> $$…$$`) or indented under a list
 * item. Fenced code is skipped. These are what render cramped if the renderer
 * fails to promote them.
 */
export function collectLineDisplayTex(markdown: string): string[] {
  const found: string[] = [];
  let inFence = false;
  for (const raw of markdown.split("\n")) {
    const line = raw.replace(/^(?:[ \t]*>)*[ \t]*/, "");
    if (/^(```|~~~)/.test(line)) inFence = !inFence;
    if (inFence) continue;
    const match = /^\$\$((?:(?!\$\$).)+)\$\$[ \t]*(?:\^[A-Za-z0-9-]+[ \t]*)?$/.exec(line);
    if (match) found.push(normaliseTex(match[1]));
  }
  return found;
}

/**
 * Every formula written as inline math: `$…$`, or `$$…$$` sharing its line with
 * other text. Fenced code is skipped.
 */
export function collectInlineTex(markdown: string): string[] {
  const found: string[] = [];
  let inFence = false;
  for (const raw of markdown.split("\n")) {
    const line = raw.replace(/^(?:[ \t]*>)*[ \t]*/, "");
    if (/^(```|~~~)/.test(line)) inFence = !inFence;
    if (inFence || collectLineDisplayTex(line).length) continue;
    const spans = /\$\$((?:(?!\$\$)[^\n])+?)\$\$|(?<![$\\])\$(?![\s$])([^$\n]*?[^\s$\\])\$(?!\d)/g;
    for (const match of line.matchAll(spans)) found.push(normaliseTex(match[1] ?? match[2]));
  }
  return found;
}

/**
 * The TeX to check for cramping: formulas a course writes as one-line `$$…$$`
 * and never as inline math. A formula that is also inline somewhere (`$-2$`,
 * `$M = C + D$` in a table) could legitimately render inline alone on a line,
 * so it's left out rather than risk a false alarm.
 */
export function displayOnlyTex(markdowns: string[]): Set<string> {
  const display = new Set(markdowns.flatMap(collectLineDisplayTex));
  for (const tex of markdowns.flatMap(collectInlineTex)) display.delete(tex);
  return display;
}

const startsLine = (node: Nodes | undefined) =>
  !node || (node.type === "element" && node.tagName === "br") || (node.type === "text" && /\n\s*$/.test(node.value));
const endsLine = (node: Nodes | undefined) =>
  !node || (node.type === "element" && node.tagName === "br") || (node.type === "text" && /^\s*\n/.test(node.value));

/**
 * An inline KaTeX formula that sits alone on its source line (the HTML keeps
 * the source newlines in its text nodes) and whose TeX the source wrote as
 * one-line `$$…$$` display math. Display output (`.katex-display`) is skipped.
 */
function collectCrampedMath(node: Nodes, displayTex: Set<string>, out: string[]): void {
  if (node.type !== "element" && node.type !== "root") return;
  if (node.type === "element" && hasClass(node, "katex-display")) return;
  const siblings = node.children.filter((child) => child.type !== "comment") as Nodes[];
  siblings.forEach((child, index) => {
    if (child.type === "element" && hasClass(child, "katex")) {
      if (startsLine(siblings[index - 1]) && endsLine(siblings[index + 1])) {
        const tex = normaliseTex(annotationTex(child) ?? "");
        if (displayTex.has(tex)) out.push(tex.slice(0, EXCERPT_LENGTH));
      }
      return;
    }
    collectCrampedMath(child, displayTex, out);
  });
}

// Solutions behind "Show solution" are rendered HTML strings inside an island's
// JSON props, not part of the page tree. Pull out every string that holds
// KaTeX output so it gets the same tree check.
function islandHtmlFragments(tree: Nodes): string[] {
  const fragments: string[] = [];
  const collect = (value: unknown) => {
    if (typeof value === "string") {
      if (value.includes('class="katex')) fragments.push(value);
    } else if (Array.isArray(value)) value.forEach(collect);
    else if (value && typeof value === "object") Object.values(value).forEach(collect);
  };
  const walk = (node: Nodes) => {
    if (node.type === "element" && node.tagName === "astro-island") {
      const props = node.properties?.props;
      if (typeof props === "string") {
        try {
          collect(JSON.parse(props));
        } catch {
          // not JSON: nothing to check
        }
      }
    }
    if ("children" in node) for (const child of node.children) walk(child as Nodes);
  };
  walk(tree);
  return fragments;
}

export interface ScanOptions {
  /** TeX of the course's one-line `$$…$$` formulas (displayOnlyTex); enables the cramped-math check. */
  displayTex?: Set<string>;
}

export function scanHtml(html: string, options: ScanOptions = {}): StaticFinding[] {
  const findings: StaticFinding[] = [];
  const stripped = stripScriptsAndStyles(html);

  const katexError = /katex-error/g;
  for (let match = katexError.exec(stripped); match; match = katexError.exec(stripped)) {
    findings.push({ kind: "katex-error", excerpt: excerptAround(stripped, match.index, match[0].length) });
  }

  const tree = fromHtml(stripped);

  if (options.displayTex?.size) {
    const cramped: string[] = [];
    const roots = [tree, ...islandHtmlFragments(tree).map((fragment) => fromHtml(fragment, { fragment: true }))];
    for (const root of roots) collectCrampedMath(root, options.displayTex, cramped);
    for (const tex of cramped) findings.push({ kind: "cramped-math", excerpt: tex });
  }

  const textRuns: string[] = [];
  collectTextRuns(tree, textRuns);
  for (const text of textRuns) {
    const highlight = HIGHLIGHT.exec(text);
    if (highlight) findings.push({ kind: "raw-highlight", excerpt: excerptAround(text, highlight.index, highlight[0].length) });
    const blockId = BLOCK_ID.exec(text);
    if (blockId) findings.push({ kind: "raw-block-id", excerpt: excerptAround(text, blockId.index, blockId[0].length) });
  }
  return findings;
}
