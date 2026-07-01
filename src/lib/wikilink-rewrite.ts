import { resolveLink, KIND_TO_PATH, type LinkMap } from "./known-links";
import { slugify } from "./slugify";

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
    if (fragmentPart && slug === `${subject}-concepts`) {
      const gTarget = resolveLink(links, fragmentPart);
      if (gTarget) {
        return `href="/subjects/${subject}/${KIND_TO_PATH[gTarget.kind]}/${gTarget.slug}"`;
      }
      return `href="#" data-missing="true" title="Missing concept"`;
    }

    // Subject-hub link: [[Econometrics]] (slug === subject slug) appears as
    // "Part of: [[Subject]]" on every lecture/past-paper page and resolves to
    // the subject hub at /subjects/<subject>.
    if (slug === subject) {
      return `href="/subjects/${subject}"`;
    }

    // The Data Science course is ingested into the machine-learning subject;
    // its lectures carry "Part of: [[Data Science]]" — resolve that to the ML hub.
    if (subject === "machine-learning" && slug === "data-science") {
      return `href="/subjects/${subject}"`;
    }

    // The micro subject's slug is "micro" but its lectures/exam-prep carry
    // "Part of: [[Microeconomics]]" — resolve that display name to the hub.
    if (subject === "micro" && slug === "microeconomics") {
      return `href="/subjects/${subject}"`;
    }

    // Meta-file links: the vault index "_Wiki-Link Registry" and the bare
    // glossary file "_<Subject> Concepts" (no fragment) have no standalone page
    // — resolve both to the subject's Dictionary landing (the on-site concept
    // index). The fragment form [[_<Subject> Concepts#Term]] is handled above.
    if (slug === "wiki-link-registry" || slug === `${subject}-concepts`) {
      return `href="/subjects/${subject}/dictionary"`;
    }

    const target = resolveLink(links, slugPart);
    if (target) {
      const url = `/subjects/${subject}/${KIND_TO_PATH[target.kind]}/${target.slug}`;
      return `href="${fragmentPart ? `${url}#${slugify(fragmentPart)}` : url}"`;
    }
    return `href="#" data-missing="true" title="Missing concept"`;
  });
}
