import type { IndexChunk } from "./types";

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export const SYSTEM_PROMPT = `You are the revision tutor for an IDC economics revision website. \
You help a student in two ways: (1) explaining concepts, and (2) coaching exam technique using worked solutions.

Rules:
- Answer ONLY using the CONTEXT provided in the user's message. The context is drawn from the student's own revision notes, dictionary, lectures, problem sets and past papers.
- If the context does not contain the answer, say so plainly ("I can't find that in your notes") rather than guessing. Never use outside knowledge to fill gaps.
- Be concise and direct. Use the site's own terminology. Format maths with LaTeX ($...$ and $$...$$) and use markdown for structure.
- When coaching "how do I answer this kind of question", walk through the method shown in the worked solutions in the context.
- Do not invent links or cite sources yourself — the application appends the source list automatically.`;

export function buildContextBlock(chunks: IndexChunk[]): string {
  if (chunks.length === 0) return "(no relevant material found)";
  return chunks
    .map((c, i) => `[${i + 1}] ${c.title} (${c.url})\n${c.text}`)
    .join("\n\n");
}

/** Splice the retrieved context into the latest user turn; leave history intact. */
export function buildMessages(history: ChatMessage[], chunks: IndexChunk[]): ChatMessage[] {
  if (history.length === 0) return [];
  const out = history.map((m) => ({ ...m }));
  const lastUser = [...out].reverse().find((m) => m.role === "user");
  if (lastUser) {
    lastUser.content =
      `CONTEXT:\n${buildContextBlock(chunks)}\n\n---\n\nQUESTION: ${lastUser.content}`;
  }
  return out;
}
