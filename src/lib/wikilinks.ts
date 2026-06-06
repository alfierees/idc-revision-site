export function slugifyTerm(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[‐-―]/g, "-")    // unicode dashes → ASCII
    .replace(/[^\w\s-]/g, "")            // strip punctuation
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export interface ResolvedWikiLink {
  found: boolean;
  url: string | null;
}

export function resolveWikiLink(
  raw: string,
  subject: string,
  knownSlugs: Set<string>,
  aliases: Map<string, string>,
): ResolvedWikiLink {
  const slug = slugifyTerm(raw);
  const canonical = aliases.get(slug) ?? slug;
  if (knownSlugs.has(canonical)) {
    return { found: true, url: `/subjects/${subject}/dictionary/${canonical}` };
  }
  return { found: false, url: null };
}
