import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkCallouts from "remark-callouts";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";
import wikiLinkPlugin from "remark-wiki-link";
import { rewriteWikiHrefs } from "./wikilink-rewrite";
import type { LinkMap } from "./known-links";
import { slugify } from "./slugify";

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
  .use(rehypeSlug)
  .use(rehypeKatex)
  .use(rehypeStringify);

export async function renderMarkdownString(
  md: string,
  subject: string,
  links: LinkMap | Set<string>,
): Promise<string> {
  const file = await processor.process(md);
  return rewriteWikiHrefs(String(file), subject, links);
}
