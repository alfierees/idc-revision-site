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
