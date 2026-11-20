// Term titles that slugify to the same slug. The scan and reconcileTerms both
// skip a slug they've already seen, so the second title silently gets no term
// page (Macro II: "IS* Curve" and "IS Curve" are both is-curve; 88 queued,
// 86 written). Reported by cli.ts at scan time and by audit.ts as an issue,
// so `npm run verify` fails until the two are merged into one page.

import { slugify } from "./text.js";
import { parseRegistry } from "./registry.js";
import { parseGlossary } from "../../src/lib/glossary.js";

export interface SlugCollision {
  slug: string;
  titles: string[];
}

export interface SourcedSlugCollision extends SlugCollision {
  source: "registry" | "glossary";
}

export function findSlugCollisions(titles: string[]): SlugCollision[] {
  const titlesBySlug = new Map<string, string[]>();
  for (const title of titles) {
    const slug = slugify(title);
    const group = titlesBySlug.get(slug) ?? [];
    if (!group.includes(title)) group.push(title);
    titlesBySlug.set(slug, group);
  }
  return [...titlesBySlug]
    .filter(([, group]) => group.length > 1)
    .map(([slug, group]) => ({ slug, titles: group }));
}

// Collisions among a course's term sources: unresolved registry concepts (what
// the scan queues) and glossary entries (what reconcileTerms stubs). Pass null
// for a file that doesn't exist.
export function termSlugCollisions(sources: { registry: string | null; glossary: string | null }): SourcedSlugCollision[] {
  const collisions: SourcedSlugCollision[] = [];
  if (sources.registry !== null) {
    const titles = parseRegistry(sources.registry).filter((entry) => !entry.isResolved).map((entry) => entry.title);
    collisions.push(...findSlugCollisions(titles).map((collision) => ({ source: "registry" as const, ...collision })));
  }
  if (sources.glossary !== null) {
    const titles = parseGlossary(sources.glossary).entries.map((entry) => entry.term);
    collisions.push(...findSlugCollisions(titles).map((collision) => ({ source: "glossary" as const, ...collision })));
  }
  return collisions;
}

export function formatCollision(collision: SourcedSlugCollision): string {
  const titles = collision.titles.map((title) => `"${title}"`).join(", ");
  return `${collision.source}: ${titles} → ${collision.slug} (only one term page would be written; merge them into one page and alias the other)`;
}
