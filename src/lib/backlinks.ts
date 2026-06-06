import { slugifyTerm } from "./wikilinks";

export type BacklinkEntry =
  | { type: "recipe";      ref: string; title: string }
  | { type: "problem-set"; ref: string; title: string; question: string }
  | { type: "past-paper";  ref: string; title: string; question: string };

export interface BacklinkInput {
  subject: string;
  knownTermSlugs: Set<string>;
  aliases: Map<string, string>;
  recipes: { slug: string; title: string; body: string }[];
  problemSets: { slug: string; title: string; questions: { id: string; text: string; solution: string }[] }[];
  pastPapers:  { slug: string; title: string; questions: { id: string; text: string; solution: string }[] }[];
}

const WIKI = /\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g;

function termsIn(text: string, known: Set<string>, aliases: Map<string, string>): string[] {
  const found = new Set<string>();
  for (const m of text.matchAll(WIKI)) {
    const slug = slugifyTerm(m[1]);
    const canonical = aliases.get(slug) ?? slug;
    if (known.has(canonical)) found.add(canonical);
  }
  return [...found];
}

export function computeBacklinks(input: BacklinkInput): Map<string, BacklinkEntry[]> {
  const out = new Map<string, BacklinkEntry[]>();
  const push = (slug: string, entry: BacklinkEntry) => {
    const arr = out.get(slug) ?? [];
    arr.push(entry);
    out.set(slug, arr);
  };

  for (const r of input.recipes) {
    for (const slug of termsIn(r.body, input.knownTermSlugs, input.aliases)) {
      push(slug, { type: "recipe", ref: r.slug, title: r.title });
    }
  }
  for (const ps of input.problemSets) {
    for (const q of ps.questions) {
      for (const slug of termsIn(`${q.text}\n${q.solution}`, input.knownTermSlugs, input.aliases)) {
        push(slug, { type: "problem-set", ref: ps.slug, title: ps.title, question: q.id });
      }
    }
  }
  for (const pp of input.pastPapers) {
    for (const q of pp.questions) {
      for (const slug of termsIn(`${q.text}\n${q.solution}`, input.knownTermSlugs, input.aliases)) {
        push(slug, { type: "past-paper", ref: pp.slug, title: pp.title, question: q.id });
      }
    }
  }
  return out;
}
