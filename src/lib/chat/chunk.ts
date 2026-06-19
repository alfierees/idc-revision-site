import { type ChatKind, type IndexChunk, chatUrl } from "./types";

export interface RawDoc {
  kind: ChatKind;
  subject: string;
  slug: string;
  data: Record<string, unknown>;
  body: string;
}

const MAX_CHARS = 1600;

/** Strip the heaviest markdown noise so retrieval matches on words, not syntax. */
function clean(md: string): string {
  return md
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/!\[\[[^\]]*\]\]/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[\[([^\]|]+)(\|[^\]]+)?\]\]/g, "$1")
    .replace(/[#>*_`$]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Split a long body into <=MAX_CHARS pieces, preferring h2 boundaries. */
function splitBody(body: string): string[] {
  const sections = body.split(/\n(?=##\s)/g);
  const out: string[] = [];
  for (const section of sections) {
    const cleaned = clean(section);
    if (!cleaned) continue;
    if (cleaned.length <= MAX_CHARS) {
      out.push(cleaned);
      continue;
    }
    let buf = "";
    for (const word of cleaned.split(" ")) {
      if (buf.length + word.length + 1 > MAX_CHARS) {
        out.push(buf.trim());
        buf = "";
      }
      buf += word + " ";
    }
    if (buf.trim()) out.push(buf.trim());
  }
  return out.length ? out : [];
}

function conceptsOf(data: Record<string, unknown>): string[] {
  const tags = Array.isArray(data.tags) ? (data.tags as string[]) : [];
  const related = Array.isArray(data.related) ? (data.related as string[]) : [];
  const relatedTerms = Array.isArray(data.related_terms) ? (data.related_terms as string[]) : [];
  return [...new Set([...tags, ...related, ...relatedTerms])];
}

export function chunkDocument(doc: RawDoc): IndexChunk[] {
  const title = String(doc.data.title ?? doc.slug);
  const url = chatUrl(doc.kind, doc.subject, doc.slug);
  const sourceDoc = typeof doc.data.source_doc === "string" ? doc.data.source_doc : undefined;
  const concepts = conceptsOf(doc.data);
  const base = { title, subject: doc.subject, kind: doc.kind, url, sourceDoc, concepts };
  const mk = (text: string, i: number): IndexChunk => ({
    id: `${doc.subject}/${doc.kind}/${doc.slug}#${i}`,
    text,
    ...base,
  });

  if (doc.kind === "problem-set" && Array.isArray(doc.data.questions)) {
    const qs = doc.data.questions as { id: string; text: string; solution: string }[];
    return qs.map((q, i) => mk(clean(`${title} — Q${q.id}. ${q.text} ${q.solution}`), i));
  }

  const pieces = splitBody(doc.body);
  if (pieces.length === 0) return [mk(clean(title), 0)];
  pieces[0] = clean(`${title}. ${pieces[0]}`);
  return pieces.map(mk);
}
