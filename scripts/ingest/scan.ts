import { readFile, readdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, basename, extname } from "node:path";
import type { SubjectConfig } from "./config.js";
import type { ScanResult, PendingItem, ImageOp, DocOp } from "./types.js";
import { parseRegistry } from "./registry.js";
import { detectRecipes } from "./recipes.js";
import { slugify, extractImageRefs } from "./text.js";

// dest is the absolute path to site/src/content
export async function scan(cfg: SubjectConfig, destContentRoot: string): Promise<ScanResult> {
  const pending: PendingItem[] = [];
  const imageOps: ImageOp[] = [];
  const docOps: DocOp[] = [];

  const registryPath = join(cfg.vaultPath, "_Wiki-Link Registry.md");
  if (existsSync(registryPath)) {
    const reg = parseRegistry(await readFile(registryPath, "utf8"));
    for (const entry of reg) {
      if (entry.isResolved) continue; // resolved entries are notes, not standalone terms
      const slug = slugify(entry.title);
      const destFile = join(destContentRoot, "terms", cfg.slug, `${slug}.md`);
      if (existsSync(destFile)) continue;
      pending.push({
        kind: "term",
        slug,
        title: entry.title,
        registryDefinition: entry.registryDefinition,
        sourceVaultPath: registryPath,
        sourceFolder: cfg.slug,
      });
    }
  }

  const lecturesDir = join(cfg.vaultPath, "Lectures");
  if (existsSync(lecturesDir)) {
    const lectureFiles = (await readdir(lecturesDir)).filter(f => f.endsWith(".md"));
    for (const lf of lectureFiles) {
      const lecturePath = join(lecturesDir, lf);
      const md = await readFile(lecturePath, "utf8");

      for (const r of detectRecipes(md)) {
        const slug = slugify(r.title);
        const destFile = join(destContentRoot, "recipes", cfg.slug, `${slug}.md`);
        if (existsSync(destFile)) continue;
        pending.push({
          kind: "recipe",
          slug,
          title: r.title,
          sourceVaultPath: lecturePath,
          sourceFolder: cfg.slug,
          detectedStepCount: r.stepCount,
        });
      }

      for (const img of extractImageRefs(md)) {
        const fromAbs = img.startsWith("/") ? img : join(cfg.vaultPath, "Attachments", basename(img));
        if (!existsSync(fromAbs)) continue; // silent skip; logged in scan summary by CLI
        const safe = slugify(basename(img).replace(/\.[^.]+$/, "")) + extname(img);
        const toAbs = join(destContentRoot, "..", "..", "public", "images", cfg.slug, safe);
        imageOps.push({ from: fromAbs, to: toAbs });
      }
    }
  }

  if (existsSync(cfg.sourceDocPath)) {
    const docFiles = await collectDocs(cfg.sourceDocPath);
    for (const docPath of docFiles) {
      const filename = basename(docPath);
      const ext = extname(filename).toLowerCase();
      if (ext !== ".pdf" && ext !== ".docx") continue;
      const slug = slugify(filename.replace(/\.[^.]+$/, ""));
      const destFile = join(destContentRoot, "problem-sets", cfg.slug, `${slug}.md`);
      const docDest = join(destContentRoot, "..", "..", "public", "papers", cfg.slug, `${slug}${ext}`);
      docOps.push({ from: docPath, to: docDest });
      if (existsSync(destFile)) continue;
      pending.push({
        kind: "problem-set",
        slug,
        title: filename.replace(/\.[^.]+$/, ""),
        sourceDocPath: docPath,
        sourceDocFilename: filename,
        solutionDocPath: null, // filled in by drafting step from sibling "Solutions" folder
      });
    }
  }

  return { subject: cfg.slug, pending, imageOps, docOps };
}

// Recursively find .pdf and .docx files but only inside an "Assignments" folder
// (Plan 2 pilot scope — past papers folder etc. are not auto-scanned).
async function collectDocs(root: string): Promise<string[]> {
  const out: string[] = [];
  async function walk(dir: string) {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const e of entries) {
      const full = join(dir, e.name);
      if (e.isDirectory() && e.name === "Assignments") {
        const inner = await readdir(full);
        for (const f of inner) {
          const st = await stat(join(full, f));
          if (st.isFile()) out.push(join(full, f));
        }
      } else if (e.isDirectory()) {
        await walk(full);
      }
    }
  }
  await walk(root);
  return out;
}
