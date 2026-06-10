import { readFile, writeFile, readdir, mkdir, copyFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, basename, extname } from "node:path";
import type { SubjectConfig } from "./config.js";
import { slugify, extractImageRefs } from "./text.js";

/** Insert `subject:` and `in_scope: true` into YAML frontmatter if absent. */
export function injectFrontmatter(md: string, subject: string): string {
  const m = md.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!m) return `---\nsubject: ${subject}\nin_scope: true\n---\n\n${md}`;
  const fm = m[1];
  const additions: string[] = [];
  if (!/^subject:/m.test(fm)) additions.push(`subject: ${subject}`);
  if (!/^in_scope:/m.test(fm)) additions.push(`in_scope: true`);
  if (additions.length === 0) return md;
  const newFm = fm + "\n" + additions.join("\n");
  return md.replace(fm, newFm);
}

/**
 * Rewrite `![[name.excalidraw]]` embeds. `resolveExport(name)` returns the
 * basename of an exported image (png/svg) in Attachments, or null. When found,
 * the embed points at that image (standard embed pre-pass renders it); when not,
 * the embed line is removed, preserving surrounding prose.
 */
export function transformExcalidrawEmbeds(
  md: string,
  resolveExport: (name: string) => string | null,
): string {
  return md.replace(/!\[\[([^\]|]+?)\.excalidraw(?:\|[^\]]*)?\]\]\n?/g, (_match, name: string) => {
    const exported = resolveExport(name);
    return exported ? `![[${exported}]]\n` : "";
  });
}

const EXPORT_EXTS = ["excalidraw.png", "png", "svg"];

function findExcalidrawExport(attachmentsDir: string, name: string): string | null {
  for (const ext of EXPORT_EXTS) {
    const cand = `${name}.${ext}`;
    if (existsSync(join(attachmentsDir, cand))) return cand;
  }
  return null;
}

async function copyImagesFromBody(md: string, attachmentsDir: string, imagesDestDir: string): Promise<void> {
  await mkdir(imagesDestDir, { recursive: true });
  for (const ref of extractImageRefs(md)) {
    const src = ref.startsWith("/") ? ref : join(attachmentsDir, basename(ref));
    if (!existsSync(src)) continue;
    const safe = slugify(basename(ref).replace(/\.[^.]+$/, "")) + extname(ref);
    await copyFile(src, join(imagesDestDir, safe));
  }
}

/** Copy all `Past Papers/*.md` into src/content/past-papers/<subject>/ (overwrite). */
export async function copyPastPapers(cfg: SubjectConfig, contentRoot: string): Promise<string[]> {
  const dir = join(cfg.vaultPath, "Past Papers");
  if (!existsSync(dir)) return [];
  const attachmentsDir = join(cfg.vaultPath, "Attachments");
  const imagesDestDir = join(contentRoot, "..", "..", "public", "images", cfg.slug);
  const destDir = join(contentRoot, "past-papers", cfg.slug);
  await mkdir(destDir, { recursive: true });

  const copied: string[] = [];
  const files = (await readdir(dir)).filter((f) => f.endsWith(".md") && !f.endsWith(".excalidraw.md"));
  for (const f of files) {
    const raw = await readFile(join(dir, f), "utf8");
    const withFm = injectFrontmatter(raw, cfg.slug);
    const withDiagrams = transformExcalidrawEmbeds(withFm, (name) => findExcalidrawExport(attachmentsDir, name));
    await copyImagesFromBody(withDiagrams, attachmentsDir, imagesDestDir);
    const slug = slugify(f.replace(/\.md$/, ""));
    await writeFile(join(destDir, `${slug}.md`), withDiagrams, "utf8");
    copied.push(slug);
  }
  return copied;
}

/** Copy `_<Subject> Concepts.md` into src/content/glossary/<subject>.md (overwrite). */
export async function copyGlossary(cfg: SubjectConfig, contentRoot: string): Promise<boolean> {
  const dir = cfg.vaultPath;
  const files = (await readdir(dir)).filter((f) => /concepts\.md$/i.test(f) && f.startsWith("_"));
  if (files.length === 0) return false;
  const raw = await readFile(join(dir, files[0]), "utf8");
  const withFm = injectFrontmatter(raw, cfg.slug);
  const destDir = join(contentRoot, "glossary");
  await mkdir(destDir, { recursive: true });
  await writeFile(join(destDir, `${cfg.slug}.md`), withFm, "utf8");
  return true;
}
