/**
 * Project-wide slug algorithm. The ONLY canonical implementation —
 * scripts/ingest/text.ts re-exports from here. Keep this in sync with the
 * heading-anchor algorithm used by rehype-slug; in practice the two agree
 * because both lowercase, ascii-fold, replace non-word chars with hyphens,
 * and trim.
 */
export function slugify(input: string): string {
  return input
    .normalize("NFKD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Slugs a term file can't have: `terms/<subject>/index.md` gets the folder's id
// in Astro's glob loader (the Databases & SQL dictionary build crashed on it),
// and /dictionary/index would be the dictionary page itself.
const RESERVED_TERM_SLUGS = new Set(["index"]);

/** Slug for a term's file and dictionary URL: slugify, renaming reserved slugs. */
export function termSlug(title: string): string {
  const slug = slugify(title);
  return RESERVED_TERM_SLUGS.has(slug) ? `${slug}-term` : slug;
}
