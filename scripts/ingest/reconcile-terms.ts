import { readFile, readdir, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";
import type { SubjectConfig } from "./config.js";
import { slugify } from "./text.js";
import { parseGlossary, type GlossaryEntry } from "../../src/lib/glossary.js";

/** Render a per-term stub file from a glossary entry. */
export function buildTermStub(entry: GlossaryEntry, subject: string): string {
  const see = entry.lectureRef ? `\n\nSee ${entry.lectureRef}.` : "";
  return `---
title: ${entry.term}
subject: ${subject}
aliases: []
related: []
source_folder: ${subject}
ai_drafted: true
---

${entry.definition}${see}
`;
}

/**
 * Create a term file for every glossary entry that has no existing term file.
 * Existing term files (by filename slug or frontmatter title slug) are left
 * untouched. Returns the list of created slugs.
 */
export async function reconcileTerms(cfg: SubjectConfig, contentRoot: string): Promise<string[]> {
  const glossaryFile = join(contentRoot, "glossary", `${cfg.slug}.md`);
  if (!existsSync(glossaryFile)) return [];
  const g = parseGlossary(await readFile(glossaryFile, "utf8"));

  const termsDir = join(contentRoot, "terms", cfg.slug);
  await mkdir(termsDir, { recursive: true });
  const existing = new Set<string>();
  for (const f of (await readdir(termsDir)).filter((f) => f.endsWith(".md"))) {
    existing.add(slugify(f.replace(/\.md$/, "")));
    const md = await readFile(join(termsDir, f), "utf8");
    const t = md.match(/^title:\s*['"]?(.+?)['"]?\s*$/m);
    if (t) existing.add(slugify(t[1]));
  }

  const created: string[] = [];
  for (const entry of g.entries) {
    if (existing.has(entry.slug)) continue;
    await writeFile(join(termsDir, `${entry.slug}.md`), buildTermStub(entry, cfg.slug), "utf8");
    created.push(entry.slug);
  }
  return created;
}
