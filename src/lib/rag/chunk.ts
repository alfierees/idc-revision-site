import { createHash } from "node:crypto";
import type { RagDocument } from "./corpus";

export type ChunkStrategy = "fixed" | "paragraph" | "structure";
export const STRATEGIES: ChunkStrategy[] = ["fixed", "paragraph", "structure"];

export interface RagChunk extends Omit<RagDocument, "text"> {
  chunkId: string;
  strategy: ChunkStrategy;
  section: string;
  text: string;
  ordinal: number;
}

function clean(text: string): string {
  return text
    .replace(/!\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g, "[Image: $1]")
    .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, "$2")
    .replace(/\[\[([^\]]+)\]\]/g, "$1")
    .replace(/\r\n/g, "\n")
    .replace(/[ \t]+$/gm, "")
    .replace(/\n{4,}/g, "\n\n\n")
    .trim();
}

function splitAtWords(text: string, size: number, overlap: number): string[] {
  if (text.length <= size) return [text];
  const result: string[] = [];
  let start = 0;
  while (start < text.length) {
    let end = Math.min(start + size, text.length);
    if (end < text.length) {
      const boundary = text.lastIndexOf(" ", end);
      if (boundary > start + size * 0.7) end = boundary;
    }
    result.push(text.slice(start, end).trim());
    if (end === text.length) break;
    start = Math.max(start + 1, end - overlap);
    while (start < text.length && /\s/.test(text[start])) start++;
  }
  return result.filter(Boolean);
}

function paragraphPieces(text: string, size: number): Array<{ section: string; text: string }> {
  const paragraphs = text.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
  const pieces: Array<{ section: string; text: string }> = [];
  let current = "";
  let section = "";
  let previous = "";
  for (const para of paragraphs) {
    if (/^#{1,4}\s+/.test(para)) section = para.split("\n")[0].replace(/^#+\s*/, "");
    if (current && current.length + para.length + 2 > size) {
      pieces.push({ section, text: current });
      current = previous.length < 250 ? `${previous}\n\n${para}` : para;
    } else current = current ? `${current}\n\n${para}` : para;
    previous = para;
    if (current.length > size * 1.7) {
      const split = splitAtWords(current, size, 100);
      for (const part of split.slice(0, -1)) pieces.push({ section, text: part });
      current = split.at(-1) ?? "";
    }
  }
  if (current) pieces.push({ section, text: current });
  return pieces;
}

function structurePieces(doc: RagDocument, text: string): Array<{ section: string; text: string }> {
  const lines = text.split("\n");
  const sections: Array<{ section: string; text: string }> = [];
  let headings: string[] = [];
  let current: string[] = [];
  const flush = () => {
    const body = current.join("\n").trim();
    if (body) sections.push({ section: headings.filter(Boolean).join(" › "), text: body });
    current = [];
  };
  for (const line of lines) {
    const match = line.match(/^(#{1,3})\s+(.+)/);
    if (match) {
      flush();
      const level = match[1].length;
      headings[level - 1] = match[2].trim();
      headings.length = level;
    }
    current.push(line);
  }
  flush();
  const result: Array<{ section: string; text: string }> = [];
  const questionLead = doc.kind.endsWith("-question") ? text.split("\n\n")[0].slice(0, 550) : "";
  for (const part of sections) {
    const prefix = `${doc.title}${part.section ? `\nSection: ${part.section}` : ""}${questionLead && !part.text.includes(questionLead) ? `\nQuestion: ${questionLead}` : ""}\n\n`;
    for (const piece of splitAtWords(part.text, Math.max(500, 1800 - prefix.length), 180)) {
      result.push({ section: part.section, text: prefix + piece });
    }
  }
  return result;
}

export function chunkDocument(doc: RagDocument, strategy: ChunkStrategy): RagChunk[] {
  const text = clean(doc.text);
  if (!text) return [];
  const pieces = strategy === "fixed"
    ? splitAtWords(`${doc.title}\n\n${text}`, 1100, 160).map((part) => ({ section: "", text: part }))
    : strategy === "paragraph"
      ? paragraphPieces(`${doc.title}\n\n${text}`, 1450)
      : structurePieces(doc, text);
  return pieces.map((piece, ordinal) => ({ ...doc, text: piece.text, section: piece.section,
    strategy, ordinal, chunkId: createHash("sha256").update(`${strategy}\0${doc.id}\0${ordinal}\0${piece.text}`).digest("hex").slice(0, 32) }));
}

export function chunkCorpus(documents: RagDocument[], strategy: ChunkStrategy): RagChunk[] {
  return documents.flatMap((doc) => chunkDocument(doc, strategy));
}
