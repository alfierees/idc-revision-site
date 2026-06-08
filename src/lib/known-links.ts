import { getCollection } from "astro:content";

export type LinkKind = "term" | "recipe" | "problem-set" | "lecture";
export type LinkTarget = { kind: LinkKind; slug: string };
export type LinkMap = Map<string, LinkTarget>;

export const KIND_TO_PATH: Record<LinkKind, string> = {
  term: "dictionary",
  recipe: "recipes",
  "problem-set": "problem-sets",
  lecture: "lectures",
};

export function linkHref(subject: string, target: LinkTarget): string {
  return `/subjects/${subject}/${KIND_TO_PATH[target.kind]}/${target.slug}`;
}

/**
 * Resolve a tag or [[link]] string to a LinkTarget if known. Slugifies the
 * input (lowercase + ascii-fold + collapse non-alphanumerics to "-") so tags
 * like "OLS", "pooled-OLS", or "2SLS" match canonical slugs and aliases that
 * were registered in lowercase form.
 */
export function resolveLink(links: LinkMap, raw: string): LinkTarget | undefined {
  return links.get(slugifyAlias(raw));
}

function slugOf(id: string): string {
  return id.split("/").pop()!;
}

function slugifyAlias(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[‐-―]/g, "-")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/**
 * Build a slug → {kind, canonical slug} map for a subject, covering terms,
 * recipes, and problem-sets. Used by tag-rendering and the wiki-link resolver:
 * any tag or [[link]] inside rendered markdown is looked up here and rewritten
 * to /subjects/<subject>/<kind-path>/<canonical>. Terms win on collision; alias
 * slugs (from a term's `aliases:` array) resolve back to that term's canonical
 * slug but never override an existing entry.
 */
export async function buildLinkMap(subject: string): Promise<LinkMap> {
  const [lectures, terms, recipes, sets] = await Promise.all([
    getCollection("lectures", (l) => l.data.subject === subject),
    getCollection("terms", (t) => t.data.subject === subject),
    getCollection("recipes", (r) => r.data.subject === subject),
    getCollection("problem-sets", (p) => p.data.subject === subject),
  ]);
  const map: LinkMap = new Map();
  for (const s of sets) {
    const slug = slugOf(s.id);
    map.set(slug, { kind: "problem-set", slug });
  }
  for (const l of lectures) {
    const slug = slugOf(l.id);
    map.set(slug, { kind: "lecture", slug });
    const aliases = (l.data as { aliases?: string[] }).aliases ?? [];
    for (const a of aliases) {
      const aslug = slugifyAlias(a);
      if (aslug && !map.has(aslug)) {
        map.set(aslug, { kind: "lecture", slug });
      }
    }
  }
  for (const r of recipes) {
    const slug = slugOf(r.id);
    map.set(slug, { kind: "recipe", slug });
  }
  for (const t of terms) {
    const slug = slugOf(t.id);
    map.set(slug, { kind: "term", slug });
    const aliases = (t.data as { aliases?: string[] }).aliases ?? [];
    for (const a of aliases) {
      const aslug = slugifyAlias(a);
      if (aslug && !map.has(aslug)) {
        map.set(aslug, { kind: "term", slug });
      }
    }
  }
  return map;
}
