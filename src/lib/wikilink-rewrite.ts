import type { LinkMap } from "./known-links";

const KIND_TO_PATH: Record<string, string> = {
  term: "dictionary",
  recipe: "recipes",
  "problem-set": "problem-sets",
};

export function rewriteWikiHrefs(html: string, subject: string, links: LinkMap | Set<string>): string {
  return html.replace(/href="__WIKI__([^"]+)"/g, (_m, raw: string) => {
    const slug = raw.toLowerCase();
    // Backwards-compat: still accept a plain Set of term slugs.
    if (links instanceof Set) {
      if (links.has(slug)) return `href="/subjects/${subject}/dictionary/${slug}"`;
      return `href="#" data-missing="true" title="Missing concept"`;
    }
    const kind = links.get(slug);
    if (kind) {
      return `href="/subjects/${subject}/${KIND_TO_PATH[kind]}/${slug}"`;
    }
    return `href="#" data-missing="true" title="Missing concept"`;
  });
}
