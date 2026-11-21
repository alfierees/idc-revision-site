import { linkHref, resolveLink, type LinkMap } from "./known-links";

export interface ConceptLink {
  label: string;
  href: string;
}

/** Tags that are dictionary terms, under their real names. Course and format tags drop out. */
export function conceptLinks(tags: string[], subject: string, links: LinkMap, termTitles: Map<string, string>): ConceptLink[] {
  const seenTerms = new Set<string>();
  const concepts: ConceptLink[] = [];
  for (const tag of tags) {
    const target = resolveLink(links, tag);
    if (target?.kind !== "term" || seenTerms.has(target.slug)) continue;
    const label = termTitles.get(target.slug);
    if (!label) continue;
    seenTerms.add(target.slug);
    concepts.push({ label, href: linkHref(subject, target) });
  }
  return concepts;
}
