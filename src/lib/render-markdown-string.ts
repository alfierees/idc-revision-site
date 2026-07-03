import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import { remarkCalloutsLocal } from "./remark-callouts";
import remarkRehype from "remark-rehype";
import type { Root, Element } from "hast";
import { toString as hastToString } from "hast-util-to-string";
import { visit } from "unist-util-visit";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";
import wikiLinkPlugin from "remark-wiki-link";
import { rewriteWikiHrefs } from "./wikilink-rewrite";
import { rehypePaint } from "./rehype-paint";
import type { LinkMap } from "./known-links";
import { slugify } from "./slugify";

/** Rehype plugin: set heading ids using the project slugify, matching wiki-link fragments. */
function rehypeSlugLocal() {
  return (tree: Root) => {
    visit(tree, "element", (node: Element) => {
      if (/^h[1-6]$/.test(node.tagName) && !node.properties?.id) {
        node.properties = node.properties ?? {};
        node.properties.id = slugify(hastToString(node));
      }
    });
  };
}

/**
 * Pre-pass: convert Obsidian image embeds `![[basename.ext|alias]]` into standard
 * markdown image syntax pointing at /images/<subject>/<slug>.<ext>. The site's
 * ingest scan has already copied each vault image to that path using the same
 * slug algorithm. Alias is treated as alt text when non-numeric, dropped when
 * numeric (Obsidian's width hint).
 */
function rewriteObsidianEmbeds(md: string, subject: string): string {
  return md.replace(/!\[\[([^\]|]+?)(?:\|([^\]]+))?\]\]/g, (_match, fname: string, alias: string | undefined) => {
    // Strip any folder prefix (e.g. `attachments/foo.png`) — the ingest copies
    // attachments by basename, so the rewritten URL must use the basename too.
    const fileName = fname.split("/").pop() ?? fname;
    const extMatch = fileName.match(/\.[^.]+$/);
    const ext = extMatch ? extMatch[0] : "";
    const stem = ext ? fileName.slice(0, -ext.length) : fileName;
    const slug = slugify(stem) + ext;
    const alt = alias && !/^\d+$/.test(alias.trim()) ? alias.trim() : stem;
    return `![${alt}](/images/${subject}/${slug})`;
  });
}

/**
 * Pre-pass: normalise a `$$…$$` display block that STARTS a line so its
 * delimiters sit on their own lines. Handles both single-line `$$…$$`
 * (Obsidian's style — remark-math would otherwise read it as inline math in a
 * paragraph) and a `$$<content>` block whose body begins on the opening line
 * and closes on a later line (micromark treats that trailing text as a
 * code-fence-style *info string* and then fails to find a close, swallowing the
 * rest of the block).
 *
 * The `^\$\$` anchor (column 0, no indent) is deliberate. Display math inside a
 * callout begins with `> `, and math indented under a list item begins with
 * spaces — both are left untouched so remark-callouts + remark-math handle them
 * (rewriting across a `> ` prefix, or promoting an indented block, corrupts
 * them). `$$` never appears in fenced code in the content, so this never
 * touches code.
 */
function promoteDisplayMath(md: string): string {
  return md.replace(
    /^\$\$([^$][\s\S]*?)\$\$[ \t]*$/gm,
    (_m, inner: string) => `$$\n${inner.trim()}\n$$`,
  );
}

// Private-use sentinel standing in for an escaped dollar `\$` while remark-math
// runs. Currency written inside inline math (`$P = \$10$`, `$\Delta P = \$75$`)
// would otherwise break: remark-math treats the `$` in `\$` as a closing
// delimiter, so KaTeX receives a dangling `\` and the rest leaks out as text.
const DOLLAR_SENTINEL = "\uE000";

// Sentinels bracketing a stashed inline-math span while currency is neutralised.
const MATH_OPEN = "\uE003";
const MATH_CLOSE = "\uE004";

// A valid (Pandoc-style) inline-math span: a single `$` — not `$$`, not escaped
// — that is NOT followed by whitespace, up to a closing `$` that is NOT preceded
// by whitespace and NOT followed by a digit. This is the discriminator between
// real math like `$1-\alpha$` (closed by a tight `$`) and currency like
// `$250 … for the $150` (whose next `$` is preceded by a space, so it never
// validly closes — those dollars fall through to the currency pass below).
const INLINE_MATH = /(?<![$\\])\$(?![\s$])[^$\n]*?(?<![\s$])\$(?!\d)/g;

/**
 * Pre-pass: replace literal dollar signs with a sentinel so remark-math only
 * sees the dollars that genuinely delimit math.
 *
 *   1. Escaped `\$` — a dollar the author escaped, including currency inside
 *      inline math (`$P = \$10$`). remark-math treats the `$` in `\$` as a
 *      closing delimiter, leaving KaTeX a dangling `\`.
 *   2. Bare currency `$2,000`, `$50K`, `$1M` — without protection, prose like
 *      `($2,000) and … for the $250` pairs the two `$` into a math span and
 *      swallows everything between them (words run together, `**bold**` shows
 *      as `∗∗`).
 *
 * To avoid misreading real math like `$1-\alpha$` as currency, valid inline
 * math spans are stashed FIRST, then only the leftover `$<digits>` is treated
 * as currency, then the spans are restored. Pure-number math (`$0.68$`,
 * `$200$`) is a valid span and survives; `$$…$$` display math is untouched.
 * `restoreEscapedDollars` puts the sentinel back once parsing is done.
 */
function protectLiteralDollars(md: string): string {
  md = md.replace(/\\\$/g, DOLLAR_SENTINEL);
  const spans: string[] = [];
  md = md.replace(INLINE_MATH, (m) => `${MATH_OPEN}${spans.push(m) - 1}${MATH_CLOSE}`);
  md = md.replace(/(?<!\$)\$(?=[\d][\d.,]*(?:[^\d.,$]|$))/g, DOLLAR_SENTINEL);
  md = md.replace(new RegExp(`${MATH_OPEN}(\\d+)${MATH_CLOSE}`, "g"), (_m, i) => spans[Number(i)]);
  return md;
}

/**
 * rehype plugin (after remark-rehype, before rehype-katex): restore the dollar
 * sentinel now that math spans are delimited. It must run on hast, not mdast —
 * remark-math freezes each math node's rendered children into `data.hChildren`
 * at parse time, so a later mdast mutation of `node.value` is ignored. Here the
 * immediate parent tells us the context: inside a `math` span or a `code`/`pre`
 * element the sentinel becomes `\$` (KaTeX renders a literal dollar; code is
 * verbatim); everywhere else (prose) it becomes a plain `$`.
 */
function restoreEscapedDollars() {
  return (tree: Root) => {
    visit(tree, "text", (node: { value: string }, _i, parent) => {
      if (!node.value.includes(DOLLAR_SENTINEL)) return;
      const el = parent as Element | undefined;
      const cls = el?.properties?.className;
      const classList = Array.isArray(cls) ? cls.map(String) : [];
      const inMath = classList.some((c) => c.includes("math"));
      const inCode = el?.tagName === "code" || el?.tagName === "pre";
      const replacement = inMath || inCode ? "\\$" : "$";
      node.value = node.value.split(DOLLAR_SENTINEL).join(replacement);
    });
  };
}

const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkMath)
  .use(remarkCalloutsLocal)
  .use(wikiLinkPlugin, {
    pageResolver: (n: string) => {
      const [page, fragment] = n.split("#", 2);
      const pageSlug = slugify(page);
      return [fragment ? `${pageSlug}#${slugify(fragment)}` : pageSlug];
    },
    hrefTemplate: (p: string) => `__WIKI__${p}`,
    aliasDivider: "|",
  })
  .use(remarkRehype, { allowDangerousHtml: false })
  .use(rehypeSlugLocal)
  .use(restoreEscapedDollars)
  .use(rehypeKatex)
  .use(rehypePaint)
  .use(rehypeStringify);

export async function renderMarkdownString(
  md: string,
  subject: string,
  links: LinkMap | Set<string>,
): Promise<string> {
  const pre = promoteDisplayMath(protectLiteralDollars(rewriteObsidianEmbeds(md, subject)));
  const file = await processor.process(pre);
  return rewriteWikiHrefs(String(file), subject, links);
}
