import { getCollection } from "astro:content";

export type LinkKind = "term" | "recipe" | "problem-set";
export type LinkMap = Map<string, LinkKind>;

export const KIND_TO_PATH: Record<LinkKind, string> = {
  term: "dictionary",
  recipe: "recipes",
  "problem-set": "problem-sets",
};

export function linkHref(subject: string, slug: string, kind: LinkKind): string {
  return `/subjects/${subject}/${KIND_TO_PATH[kind]}/${slug}`;
}

function slugOf(id: string): string {
  return id.split("/").pop()!;
}

/**
 * Build a slug → kind map for a subject, covering terms, recipes, and problem-sets.
 * Used by the wiki-link resolver so [[Title]] inside any rendered markdown can
 * link to the right page kind. Terms win on collision.
 */
export async function buildLinkMap(subject: string): Promise<LinkMap> {
  const [terms, recipes, sets] = await Promise.all([
    getCollection("terms", (t) => t.data.subject === subject),
    getCollection("recipes", (r) => r.data.subject === subject),
    getCollection("problem-sets", (p) => p.data.subject === subject),
  ]);
  const map: LinkMap = new Map();
  for (const s of sets) map.set(slugOf(s.id), "problem-set");
  for (const r of recipes) map.set(slugOf(r.id), "recipe");
  for (const t of terms) map.set(slugOf(t.id), "term"); // terms last → highest priority
  return map;
}
