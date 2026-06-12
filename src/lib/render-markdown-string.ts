import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkCallouts from "remark-callouts";
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
 * Pre-pass: Obsidian writes display math as a single line `$$...$$`, which
 * remark-math parses as inline math inside a paragraph. Break the delimiters
 * onto their own lines so it becomes a math-display block (and gets the
 * framed .eqn treatment).
 */
function promoteDisplayMath(md: string): string {
  return md.replace(/^\$\$([^$].*?)\$\$\s*$/gm, (_m, inner: string) => `$$\n${inner}\n$$`);
}

const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkMath)
  .use(remarkCallouts)
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
  .use(rehypeKatex)
  .use(rehypePaint)
  .use(rehypeStringify);

export async function renderMarkdownString(
  md: string,
  subject: string,
  links: LinkMap | Set<string>,
): Promise<string> {
  const pre = promoteDisplayMath(rewriteObsidianEmbeds(md, subject));
  const file = await processor.process(pre);
  return rewriteWikiHrefs(String(file), subject, links);
}
