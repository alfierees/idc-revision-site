import { slugify } from "./slugify";

export interface GlossaryEntry {
  term: string;
  slug: string;
  definition: string;      // entry prose with the trailing "→ [[Lec..]]" citation removed
  lectureRef: string | null; // the raw "[[...]]" citation, or null
}

export interface GlossaryTopic {
  title: string;
  slug: string;
  entries: GlossaryEntry[];
}

export interface GlossaryData {
  topics: GlossaryTopic[];
  entries: GlossaryEntry[];        // flattened, in document order
  aliases: Map<string, string>;    // alias-slug -> canonical term-slug
}

const ALIASES_HEADING = "aliases & shorthands";

function stripFrontmatter(md: string): string {
  const m = md.match(/^---\s*\n[\s\S]*?\n---\s*\n?/);
  return m ? md.slice(m[0].length) : md;
}

/** Pull a trailing "→ [[..]]" citation off a definition line. */
function splitCitation(text: string): { definition: string; lectureRef: string | null } {
  const m = text.match(/→\s*(\[\[.*?\]\])\s*$/);
  if (m) return { definition: text.slice(0, m.index).trim(), lectureRef: m[1] };
  return { definition: text.trim(), lectureRef: null };
}

export function parseGlossary(md: string): GlossaryData {
  const body = stripFrontmatter(md);
  const lines = body.split("\n");

  const topics: GlossaryTopic[] = [];
  const aliases = new Map<string, string>();

  let currentTopic: GlossaryTopic | null = null;
  let inAliases = false;
  let entryTerm: string | null = null;
  let entryLines: string[] = [];

  const flushEntry = () => {
    if (entryTerm === null) return;
    const raw = entryLines.join("\n").trim();
    if (inAliases) {
      // Body is "See [[#Canonical]]." — map shorthand slug -> canonical term slug.
      const m = raw.match(/\[\[#([^\]|]+)(?:\|[^\]]+)?\]\]/);
      if (m) aliases.set(slugify(entryTerm), slugify(m[1]));
    } else if (currentTopic) {
      const { definition, lectureRef } = splitCitation(raw);
      currentTopic.entries.push({ term: entryTerm, slug: slugify(entryTerm), definition, lectureRef });
    }
    entryTerm = null;
    entryLines = [];
  };

  for (const line of lines) {
    const h2 = line.match(/^##\s+(.+?)\s*$/);
    const h3 = line.match(/^###\s+(.+?)\s*$/);
    if (h2) {
      flushEntry();
      const title = h2[1].trim();
      inAliases = title.toLowerCase() === ALIASES_HEADING;
      if (inAliases) {
        currentTopic = null;
      } else {
        currentTopic = { title, slug: slugify(title), entries: [] };
        topics.push(currentTopic);
      }
      continue;
    }
    if (h3) {
      flushEntry();
      entryTerm = h3[1].trim();
      continue;
    }
    if (entryTerm !== null && !/^-{3,}\s*$/.test(line)) entryLines.push(line);
  }
  flushEntry();

  const entries = topics.flatMap((t) => t.entries);
  return { topics, entries, aliases };
}
