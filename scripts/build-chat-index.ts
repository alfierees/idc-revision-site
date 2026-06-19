import { readdirSync, statSync, readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";
import { chunkDocument } from "../src/lib/chat/chunk.js";
import { type ChatKind, type IndexChunk } from "../src/lib/chat/types.js";

const KIND_DIRS: Record<string, ChatKind> = {
  terms: "term",
  recipes: "recipe",
  lectures: "lecture",
  "past-papers": "past-paper",
  "problem-sets": "problem-set",
  glossary: "glossary",
};

function walk(dir: string): string[] {
  const out: string[] = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else if (name.endsWith(".md")) out.push(full);
  }
  return out;
}

/** Read every content file under `contentRoot` and flatten to index chunks. */
export function collectChunks(contentRoot: string): IndexChunk[] {
  const chunks: IndexChunk[] = [];
  for (const [dir, kind] of Object.entries(KIND_DIRS)) {
    const base = join(contentRoot, dir);
    let files: string[];
    try {
      files = walk(base);
    } catch {
      continue;
    }
    for (const file of files) {
      const { data, content } = matter(readFileSync(file, "utf8"));
      if (data.in_scope === false) continue;
      const slug = file.split("/").pop()!.replace(/\.md$/, "");
      const rel = file.slice(base.length + 1);
      const subject = String(data.subject ?? rel.split("/")[0]);
      chunks.push(...chunkDocument({ kind, subject, slug, data, body: content }));
    }
  }
  return chunks;
}

const isDirect = process.argv[1] && process.argv[1].endsWith("build-chat-index.ts");
if (isDirect) {
  const here = dirname(fileURLToPath(import.meta.url));
  const root = join(here, "..", "src", "content");
  const outDir = join(here, "..", "src", "generated");
  const chunks = collectChunks(root);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "chat-index.json"), JSON.stringify(chunks));
  console.log(`chat-index: ${chunks.length} chunks written`);
}
