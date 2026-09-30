import type { ChunkStrategy } from "./chunk";
import { vectorIndex } from "./vector";

export interface RetrievedChunk {
  id: string;
  docId: string;
  title: string;
  subject: string;
  kind: string;
  section: string;
  url: string | null;
  source: string;
  text: string;
  score: number;
}

export async function retrieve(question: string, subject?: string, strategy: ChunkStrategy = "structure"):
  Promise<RetrievedChunk[]> {
  const index = vectorIndex().namespace(`rag-${strategy}`);
  const filter = subject ? `subject = '${subject.replaceAll("'", "")}'` : undefined;
  const hits = await index.query({ data: question, topK: 20, filter,
    includeData: true, includeMetadata: true });
  const selected: RetrievedChunk[] = [];
  const perDocument = new Map<string, number>();
  let characters = 0;
  for (const hit of hits) {
    const m = (hit.metadata ?? {}) as Record<string, unknown>;
    const docId = String(m.docId ?? "");
    const text = hit.data ?? "";
    if (!docId || !text || (perDocument.get(docId) ?? 0) >= 2) continue;
    if (characters + text.length > 12_000 && selected.length >= 4) continue;
    selected.push({ id: String(hit.id), docId, title: String(m.title ?? "Source"),
      subject: String(m.subject ?? ""), kind: String(m.kind ?? ""),
      section: String(m.section ?? ""), url: String(m.url ?? "") || null,
      source: String(m.source ?? ""), text, score: hit.score ?? 0 });
    perDocument.set(docId, (perDocument.get(docId) ?? 0) + 1);
    characters += text.length;
    if (selected.length >= 7) break;
  }
  return selected;
}
