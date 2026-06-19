// src/lib/chat/types.ts

/** The content kinds that can be retrieved and cited. */
export type ChatKind =
  | "term"
  | "recipe"
  | "lecture"
  | "past-paper"
  | "problem-set"
  | "glossary";

/** Maps a content kind to its URL path segment under /subjects/<subject>/. */
export const URL_PATH_FOR: Record<ChatKind, string> = {
  term: "dictionary",
  recipe: "recipes",
  lecture: "lectures",
  "past-paper": "past-papers",
  "problem-set": "problem-sets",
  glossary: "dictionary",
};

/** Build the canonical site URL for a content item. Glossary points at the dictionary index. */
export function chatUrl(kind: ChatKind, subject: string, slug: string): string {
  if (kind === "glossary") return `/subjects/${subject}/dictionary`;
  return `/subjects/${subject}/${URL_PATH_FOR[kind]}/${slug}`;
}

/** One retrievable chunk of site content with its citation metadata. */
export interface IndexChunk {
  id: string; // e.g. "micro/term/risk-aversion#0"
  text: string; // plain-ish text used for retrieval + grounding
  title: string;
  subject: string;
  kind: ChatKind;
  url: string;
  sourceDoc?: string; // downloadable PDF/doc path, when present
  concepts: string[]; // tags / related-term slugs
}

/** A deduped citation shown under an answer. */
export interface ChatSource {
  title: string;
  url: string;
  kind: ChatKind;
  subject: string;
  sourceDoc?: string;
}
