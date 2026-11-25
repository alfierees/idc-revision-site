/**
 * Page-level glue: detect multiple-choice questions in a paper's flat
 * questions, then shuffle the whole paper's options when its key is lopsided.
 * `frame` is the paper's text outside the questions (intro, recap): when it
 * prints a letter key, the paper keeps its order so the two stay consistent.
 */
import { parseMcq, type ParsedMcq } from "./mcq-parse";
import { shufflePaper } from "./mcq-shuffle";

export interface McqCandidate {
  id: string;
  prompt: string;
  answer: string;
}

/** id → parsed (and possibly shuffled) MCQ, for the candidates that are MCQs. */
export function detectPaperMcqs(refSlug: string, candidates: McqCandidate[], frame = ""): Map<string, ParsedMcq> {
  const items = candidates.map((c) => ({ id: c.id, seed: `${refSlug}:${c.id}`, mcq: parseMcq(c.prompt, c.answer) }));
  const out = new Map<string, ParsedMcq>();
  for (const it of shufflePaper(items, frame)) if (it.mcq) out.set(it.id, it.mcq);
  return out;
}
