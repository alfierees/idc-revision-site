import { createHash } from "node:crypto";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, relative, basename } from "node:path";
import YAML from "yaml";

export interface RagDocument {
  id: string;
  title: string;
  subject: string;
  kind: string;
  text: string;
  url: string | null;
  sourcePath: string;
  source: "site" | "public-file" | "vault" | "local-file";
}

const COLLECTION_ROUTES: Record<string, string> = {
  lectures: "lectures",
  terms: "dictionary",
  recipes: "recipes",
  "problem-sets": "problem-sets",
  "past-papers": "past-papers",
  "exam-prep": "exam-prep",
};

function walk(dir: string): string[] {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

function parseMarkdown(source: string): { data: Record<string, unknown>; body: string } {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) return { data: {}, body: source };
  const data = YAML.parse(match[1]) ?? {};
  return { data, body: source.slice(match[0].length) };
}

function asText(value: unknown): string {
  return typeof value === "string" ? value : "";
}

function questionText(q: Record<string, unknown>): string {
  const options = Array.isArray(q.options)
    ? q.options.map((option) => {
        const o = option as Record<string, unknown>;
        return `${asText(o.label)}. ${asText(o.text)}${o.correct ? " [correct]" : ""} ${asText(o.why)}`;
      }).join("\n")
    : "";
  return [asText(q.title), asText(q.text), options, asText(q.solution)]
    .filter(Boolean).join("\n\n");
}

export function collectSiteDocuments(root: string): RagDocument[] {
  const contentRoot = join(root, "src/content");
  const result: RagDocument[] = [];
  for (const [collection, route] of Object.entries(COLLECTION_ROUTES)) {
    const base = join(contentRoot, collection);
    for (const path of walk(base).filter((p) => p.endsWith(".md"))) {
      const { data, body } = parseMarkdown(readFileSync(path, "utf8"));
      if (data.in_scope === false) continue;
      const subject = asText(data.subject) || relative(base, path).split("/")[0];
      const slug = basename(path, ".md");
      const id = `${collection}/${subject}/${slug}`;
      const title = asText(data.title) || slug;
      const url = `/subjects/${subject}/${route}/${slug}`;
      const questions = Array.isArray(data.questions) ? data.questions : [];
      if (questions.length) {
        for (const item of questions) {
          const q = item as Record<string, unknown>;
          const qid = asText(q.id);
          if (!qid) continue;
          const officialNote = qid === "setup" ? asText(data.official_solution_note) : "";
          const text = [officialNote ? `Official lecturer solution note: ${officialNote}` : "", questionText(q)]
            .filter(Boolean).join("\n\n");
          if (!text.trim()) continue;
          result.push({ id: `${id}#${qid}`, title: `${title} · ${asText(q.title) || `Question ${qid}`}`,
            subject, kind: `${collection}-question`, text, url: `${url}#${qid}`,
            sourcePath: relative(root, path), source: "site" });
        }
      }
      if (body.trim()) result.push({ id, title, subject, kind: collection, text: body,
        url, sourcePath: relative(root, path), source: "site" });
    }
  }
  // Glossaries are landing pages, and do not follow the per-document URL rule.
  for (const path of walk(join(contentRoot, "glossary")).filter((p) => p.endsWith(".md"))) {
    const { data, body } = parseMarkdown(readFileSync(path, "utf8"));
    const subject = asText(data.subject);
    if (!subject || !body.trim()) continue;
    result.push({ id: `glossary/${subject}`, title: asText(data.title) || `${subject} glossary`,
      subject, kind: "glossary", text: body, url: `/subjects/${subject}/dictionary`,
      sourcePath: relative(root, path), source: "site" });
  }
  return result.sort((a, b) => a.id.localeCompare(b.id));
}

export function collectLocalDocuments(root: string): RagDocument[] {
  const path = join(root, ".rag-cache/sources.jsonl");
  if (!existsSync(path)) return [];
  return readFileSync(path, "utf8").split("\n").filter(Boolean).map((line) => JSON.parse(line) as RagDocument);
}

export function corpusHash(documents: RagDocument[]): string {
  const hash = createHash("sha256");
  for (const doc of documents) hash.update(`${doc.id}\0${doc.text}\0`);
  return hash.digest("hex");
}
