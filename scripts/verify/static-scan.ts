// Static scan of built HTML for rendering failures that a clean build hides:
// KaTeX parse errors, Obsidian ==highlights== and ^block-ids leaking as text.
//
// Scripts and styles are stripped first: minified JS is full of `==null`.
// KaTeX errors are matched on the raw HTML so they're found even inside an
// island's escaped props (solutions that only render after "Show solution").
// Highlights and block ids are matched on visible text only, outside KaTeX
// output and code.

import { fromHtml } from "hast-util-from-html";
import type { Element, Nodes } from "hast";

export type StaticFindingKind = "katex-error" | "raw-highlight" | "raw-block-id";

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

export function scanHtml(html: string): StaticFinding[] {
  const findings: StaticFinding[] = [];
  const stripped = stripScriptsAndStyles(html);

  const katexError = /katex-error/g;
  for (let match = katexError.exec(stripped); match; match = katexError.exec(stripped)) {
    findings.push({ kind: "katex-error", excerpt: excerptAround(stripped, match.index, match[0].length) });
  }

  const textRuns: string[] = [];
  collectTextRuns(fromHtml(stripped), textRuns);
  for (const text of textRuns) {
    const highlight = HIGHLIGHT.exec(text);
    if (highlight) findings.push({ kind: "raw-highlight", excerpt: excerptAround(text, highlight.index, highlight[0].length) });
    const blockId = BLOCK_ID.exec(text);
    if (blockId) findings.push({ kind: "raw-block-id", excerpt: excerptAround(text, blockId.index, blockId[0].length) });
  }
  return findings;
}
