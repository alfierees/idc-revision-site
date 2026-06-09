import { resolveLink, type LinkMap } from "./known-links";
import { slugify } from "./slugify";

const KIND_TO_PATH: Record<string, string> = {
  term: "dictionary",
  recipe: "recipes",
  "problem-set": "problem-sets",
  lecture: "lectures",
  "past-paper": "past-papers",
};

export function rewriteWikiHrefs(html: string, subject: string, links: LinkMap | Set<string>): string {
  return html.replace(/href="__WIKI__([^"]+)"/g, (_m, raw: string) => {
    const [slugPart, fragmentPart] = raw.split("#", 2);

    // Same-page [[#Section]] links: no page slug, just an anchor on this page.
    if (slugPart === "" && fragmentPart) {
      return `href="#${slugify(fragmentPart)}"`;
    }

    const slug = slugPart.toLowerCase();

    // Backwards-compat: still accept a plain Set of term slugs.
    if (links instanceof Set) {
      if (links.has(slug)) {
        const url = `/subjects/${subject}/dictionary/${slug}`;
        return `href="${fragmentPart ? `${url}#${slugify(fragmentPart)}` : url}"`;
      }
      return `href="#" data-missing="true" title="Missing concept"`;
    }

    // Glossary-anchor links: [[_<Subject> Concepts#Term|Display]] resolves to
    // the per-term Dictionary page via its fragment, dropping the fragment.
    if (fragmentPart && slugPart === `${subject}-concepts`) {
      const gTarget = resolveLink(links, fragmentPart);
      if (gTarget) {
        return `href="/subjects/${subject}/${KIND_TO_PATH[gTarget.kind]}/${gTarget.slug}"`;
      }
      return `href="#" data-missing="true" title="Missing concept"`;
    }

    const target = resolveLink(links, slugPart);
    if (target) {
      const url = `/subjects/${subject}/${KIND_TO_PATH[target.kind]}/${target.slug}`;
      return `href="${fragmentPart ? `${url}#${slugify(fragmentPart)}` : url}"`;
    }
    return `href="#" data-missing="true" title="Missing concept"`;
  });
}
