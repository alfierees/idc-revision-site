import type { Root, Element, ElementContent, Text } from "hast";
import { toString as hastToString } from "hast-util-to-string";
import { visit, SKIP } from "unist-util-visit";

/**
 * Visual typesetting pass over rendered markdown:
 *  - strips the Obsidian emoji prefixes from headings (ids are unaffected —
 *    slugify already drops emoji, so run this before or after slugging)
 *  - wraps tables in a rounded scrollable `.tbl-wrap` container
 *  - wraps KaTeX display blocks in a framed `.eqn` slab
 *  - rebuilds fenced code:
 *      ```r        → dark editor `.codeblock` with a language bar + syntax tint
 *      ``` (plain) → `.asciiblock` for arrow/box diagrams, `.outblock` for
 *                    console output
 *      ```mermaid  → untouched (client-side Mermaid.astro replaces it)
 */

const span = (cls: string, value: string): Element => ({
  type: "element",
  tagName: "span",
  properties: { className: [cls] },
  children: [{ type: "text", value }],
});

const text = (value: string): Text => ({ type: "text", value });

const R_KEYWORDS = new Set([
  "function", "if", "else", "for", "while", "repeat", "in", "next", "break",
  "TRUE", "FALSE", "NULL", "NA", "NaN", "Inf",
]);

/** Word-ish tokens inside non-string, non-comment R source. */
const R_PLAIN_RE =
  /\b(?:function|if|else|for|while|repeat|in|next|break|TRUE|FALSE|NULL|NA|NaN|Inf)\b|(?<![\w.])\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b|\b[A-Za-z.][\w.]*(?=\s*\()/g;

function tokenizePlainR(chunk: string): ElementContent[] {
  const out: ElementContent[] = [];
  let last = 0;
  for (const m of chunk.matchAll(R_PLAIN_RE)) {
    const idx = m.index!;
    if (idx > last) out.push(text(chunk.slice(last, idx)));
    const tok = m[0];
    if (R_KEYWORDS.has(tok)) out.push(span("tok-kw", tok));
    else if (/^[\d.]/.test(tok)) out.push(span("tok-num", tok));
    else out.push(span("tok-fn", tok));
    last = idx + tok.length;
  }
  if (last < chunk.length) out.push(text(chunk.slice(last)));
  return out;
}

export function tokenizeR(src: string): ElementContent[] {
  const out: ElementContent[] = [];
  let plain = "";
  const flush = () => {
    if (plain) out.push(...tokenizePlainR(plain));
    plain = "";
  };
  let i = 0;
  while (i < src.length) {
    const ch = src[i];
    if (ch === '"' || ch === "'") {
      let j = i + 1;
      while (j < src.length && src[j] !== ch) j += src[j] === "\\" ? 2 : 1;
      j = Math.min(j + 1, src.length);
      flush();
      out.push(span("tok-str", src.slice(i, j)));
      i = j;
    } else if (ch === "#") {
      let j = src.indexOf("\n", i);
      if (j === -1) j = src.length;
      flush();
      out.push(span("tok-cm", src.slice(i, j)));
      i = j;
    } else {
      plain += ch;
      i += 1;
    }
  }
  flush();
  return out;
}

const LEADING_EMOJI_RE =
  /^(?:\p{Extended_Pictographic}[\u{FE0F}\u{200D}\u{20E3}]*|[\u{FE0F}\u{200D}]|\s)+/u;

function stripHeadingEmoji(node: Element) {
  const first = node.children[0];
  if (first?.type !== "text") return;
  const stripped = first.value.replace(LEADING_EMOJI_RE, (m) =>
    /\p{Extended_Pictographic}/u.test(m) ? "" : m,
  );
  first.value = stripped;
}

/** Looks like an ASCII diagram (arrows / box-drawing), not console output. */
const DIAGRAM_RE = /[─│┌┐└┘├┤┬┴▶◀►◄→←↑↓➜]|-->|==>|<--/;

const langOf = (code: Element): string | null => {
  const cls = code.properties?.className;
  const list = Array.isArray(cls) ? cls : typeof cls === "string" ? [cls] : [];
  for (const c of list) {
    const m = String(c).match(/^language-(.+)$/);
    if (m) return m[1].toLowerCase();
  }
  return null;
};

function buildCodeblock(lang: string, code: Element): Element {
  const src = hastToString(code);
  return {
    type: "element",
    tagName: "div",
    properties: { className: ["codeblock"] },
    children: [
      {
        type: "element",
        tagName: "div",
        properties: { className: ["code-bar"] },
        children: [
          span("lang", lang),
          {
            type: "element",
            tagName: "span",
            properties: { className: ["dots"], ariaHidden: "true" },
            children: ["i", "i", "i"].map((t) => ({
              type: "element", tagName: t, properties: {}, children: [],
            })),
          },
        ],
      },
      {
        type: "element",
        tagName: "pre",
        properties: {},
        children: [
          {
            type: "element",
            tagName: "code",
            properties: {},
            children: lang === "r" ? tokenizeR(src) : [text(src)],
          },
        ],
      },
    ],
  };
}

function buildPlainBlock(code: Element): Element {
  const src = hastToString(code);
  const pre: Element = {
    type: "element",
    tagName: "pre",
    properties: {},
    children: [{ type: "element", tagName: "code", properties: {}, children: [text(src)] }],
  };
  if (DIAGRAM_RE.test(src)) {
    return {
      type: "element",
      tagName: "div",
      properties: { className: ["asciiblock"] },
      children: [pre],
    };
  }
  return {
    type: "element",
    tagName: "div",
    properties: { className: ["outblock"] },
    children: [
      { type: "element", tagName: "div", properties: { className: ["out-bar"] }, children: [text("R output")] },
      pre,
    ],
  };
}

export function rehypePaint() {
  return (tree: Root) => {
    visit(tree, "element", (node: Element, index, parent) => {
      if (!parent || index === undefined) return;

      if (/^h[1-6]$/.test(node.tagName)) {
        stripHeadingEmoji(node);
        return;
      }

      const parentClasses = (parent as Element).properties?.className;
      const parentClassList = Array.isArray(parentClasses) ? parentClasses.map(String) : [];

      // wrap tables
      if (node.tagName === "table" && !parentClassList.includes("tbl-wrap")) {
        parent.children[index] = {
          type: "element",
          tagName: "div",
          properties: { className: ["tbl-wrap"] },
          children: [node],
        };
        return SKIP;
      }

      // wrap KaTeX display blocks
      const ownClasses = node.properties?.className;
      const ownClassList = Array.isArray(ownClasses) ? ownClasses.map(String) : [];
      if (ownClassList.includes("katex-display") && !parentClassList.includes("eqn")) {
        parent.children[index] = {
          type: "element",
          tagName: "div",
          properties: { className: ["eqn"] },
          children: [node],
        };
        return SKIP;
      }

      // fenced code
      if (node.tagName === "pre") {
        const code = node.children.find(
          (c): c is Element => c.type === "element" && c.tagName === "code",
        );
        if (!code) return;
        const lang = langOf(code);
        if (lang === "mermaid") return;
        if (lang) {
          parent.children[index] = buildCodeblock(lang, code);
        } else {
          parent.children[index] = buildPlainBlock(code);
        }
        return SKIP;
      }
    });
  };
}
