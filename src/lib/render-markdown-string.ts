import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";
import wikiLinkPlugin from "remark-wiki-link";
import { rewriteWikiHrefs } from "./wikilink-rewrite";

const processor = unified()
  .use(remarkParse)
  .use(remarkMath)
  .use(wikiLinkPlugin, {
    pageResolver: (n: string) => [n.toLowerCase().replace(/\s+/g, "-")],
    hrefTemplate: (p: string) => `__WIKI__${p}`,
    aliasDivider: "|",
  })
  .use(remarkRehype, { allowDangerousHtml: false })
  .use(rehypeKatex)
  .use(rehypeStringify);

export async function renderMarkdownString(
  md: string,
  subject: string,
  knownSlugs: Set<string>,
): Promise<string> {
  const file = await processor.process(md);
  return rewriteWikiHrefs(String(file), subject, knownSlugs);
}
