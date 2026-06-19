import type { IndexChunk, ChatSource } from "./types";

/** Collapse retrieved chunks to one citation per page, preserving order. */
export function sourcesFromChunks(chunks: IndexChunk[]): ChatSource[] {
  const seen = new Set<string>();
  const out: ChatSource[] = [];
  for (const c of chunks) {
    if (seen.has(c.url)) continue;
    seen.add(c.url);
    out.push({ title: c.title, url: c.url, kind: c.kind, subject: c.subject, sourceDoc: c.sourceDoc });
  }
  return out;
}
