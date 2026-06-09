import { getEntry } from "astro:content";
import { parseGlossary } from "./glossary";
import { renderMarkdownString } from "./render-markdown-string";
import { buildLinkMap } from "./known-links";

export type ConceptPreview = { title: string; defHtml: string; lecture: string | null };

// Memoize per subject: the Astro build renders many pages in one process, and
// every page that mounts HoverPreview would otherwise re-render all ~81 defs.
const cache = new Map<string, Record<string, ConceptPreview>>();

function plainLecture(ref: string | null): string | null {
  if (!ref) return null;
  return ref.replace(/\[\[[^\]|]+\|([^\]]+)\]\]/, "$1").replace(/\[\[([^\]]+)\]\]/, "$1");
}

export async function getConceptPreviews(subject: string): Promise<Record<string, ConceptPreview>> {
  const hit = cache.get(subject);
  if (hit) return hit;
  const out: Record<string, ConceptPreview> = {};
  const glossaryEntry = await getEntry("glossary", subject);
  if (glossaryEntry) {
    const links = await buildLinkMap(subject);
    const g = parseGlossary(glossaryEntry.body ?? "");
    for (const e of g.entries) {
      out[e.slug] = {
        title: e.term,
        defHtml: await renderMarkdownString(e.definition, subject, links),
        lecture: plainLecture(e.lectureRef),
      };
    }
  }
  cache.set(subject, out);
  return out;
}
