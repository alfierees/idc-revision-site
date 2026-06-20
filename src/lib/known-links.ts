import { getCollection } from "astro:content";

export type LinkKind = "term" | "recipe" | "problem-set" | "lecture" | "past-paper" | "exam-prep";
export type LinkTarget = { kind: LinkKind; slug: string };
export type LinkMap = Map<string, LinkTarget>;

export const KIND_TO_PATH: Record<LinkKind, string> = {
  term: "dictionary",
  recipe: "recipes",
  "problem-set": "problem-sets",
  lecture: "lectures",
  "past-paper": "past-papers",
  "exam-prep": "exam-prep",
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
  const slug = slugifyAlias(raw);
  const direct = links.get(slug);
  if (direct) return direct;
  // Prefix-fallback: if exactly one CANONICAL entry starts with `<slug>-`, use it.
  // This lets short tags like "cournot" auto-resolve to "cournot-competition"
  // without needing an explicit alias. Returns undefined on ambiguity (e.g.
  // "fixed" with both "fixed-effects" and "time-fixed-effects" present).
  const prefix = slug + "-";
  let candidate: LinkTarget | undefined;
  for (const [key, target] of links) {
    if (key.startsWith(prefix) && target.slug === key) {
      if (candidate) return undefined; // ambiguous, mute
      candidate = target;
    }
  }
  if (candidate) return candidate;
  // Problem-set vault-name fallback: vault links carry the full descriptive
  // name, e.g. [[PS_04-Seatbelt Laws & Traffic Fatalities]] slugifies to
  // "ps-04-seatbelt-laws-traffic-fatalities" and [[Assignment 3 - CoreWeave …]]
  // to "assignment-3-coreweave-…", but the ingested pages are "ps-4" /
  // "assignment-3". Strip the leading zero-padded number off any trailing
  // description and retry against the prefix-number slug.
  const psMatch = slug.match(/^(?:problem[-_]?set|ps|assignment|ex|hw)-0*(\d+)(?:-.*)?$/);
  if (psMatch) {
    const n = psMatch[1];
    // The canonical slug prefix depends on the subject's problemSetSlugPrefix
    // (ps-N, assignment-N, …); try the known prefixes for a problem-set match.
    for (const pref of ["ps", "assignment", "ex", "hw", "problem-set"]) {
      const t = links.get(`${pref}-${n}`);
      if (t && t.kind === "problem-set") return t;
    }
  }
  return undefined;
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
  const [lectures, terms, recipes, sets, papers, examPrep] = await Promise.all([
    getCollection("lectures", (l) => l.data.subject === subject),
    getCollection("terms", (t) => t.data.subject === subject),
    getCollection("recipes", (r) => r.data.subject === subject),
    getCollection("problem-sets", (p) => p.data.subject === subject),
    getCollection("past-papers", (p) => p.data.subject === subject),
    getCollection("exam-prep", (e) => e.data.subject === subject),
  ]);
  const map: LinkMap = new Map();
  for (const s of sets) {
    const slug = slugOf(s.id);
    map.set(slug, { kind: "problem-set", slug });
  }
  for (const l of lectures) {
    const slug = slugOf(l.id);
    map.set(slug, { kind: "lecture", slug });
    // Title alias: the frontmatter `title` is the prefix-free lecture name
    // (e.g. "Introduction & Treatment Effects"), so vault links that omit the
    // `Lec_NN-` filename prefix resolve to this lecture.
    const aliases = [l.data.title, ...((l.data as { aliases?: string[] }).aliases ?? [])];
    for (const a of aliases) {
      const aslug = slugifyAlias(a);
      if (aslug && !map.has(aslug)) {
        map.set(aslug, { kind: "lecture", slug });
      }
    }
  }
  for (const p of papers) {
    const slug = slugOf(p.id);
    if (!map.has(slug)) map.set(slug, { kind: "past-paper", slug });
    const aliases = (p.data as { aliases?: string[] }).aliases ?? [];
    for (const a of aliases) {
      const aslug = slugifyAlias(a);
      if (aslug && !map.has(aslug)) map.set(aslug, { kind: "past-paper", slug });
    }
  }
  for (const e of examPrep) {
    const slug = slugOf(e.id);
    if (!map.has(slug)) map.set(slug, { kind: "exam-prep", slug });
    // Title + alias slugs: a cross-reference like [[_Exam Formula Sheet (Lec 1-10)]]
    // slugifies to the same key as the doc's `title`, so registering the title as
    // an alias resolves it to this page.
    const aliases = [e.data.title, ...((e.data as { aliases?: string[] }).aliases ?? [])];
    for (const a of aliases) {
      const aslug = slugifyAlias(a);
      if (aslug && !map.has(aslug)) map.set(aslug, { kind: "exam-prep", slug });
    }
  }
  for (const r of recipes) {
    const slug = slugOf(r.id);
    map.set(slug, { kind: "recipe", slug });
    // Title alias: recipe pages are referenced by their full title
    // (e.g. [[Testing for heteroskedasticity]] → testing-heteroskedasticity).
    const aslug = slugifyAlias(r.data.title);
    if (aslug && !map.has(aslug)) map.set(aslug, { kind: "recipe", slug });
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
