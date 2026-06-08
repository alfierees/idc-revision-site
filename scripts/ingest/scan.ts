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

  const lecturesDirName = cfg.lecturesDir ?? "Lectures";
  const vaultSolutionsDirName = cfg.vaultSolutionsDir ?? "Assignments";
  const requireSolutionKeyword = cfg.requireSolutionKeyword ?? true;
  const assignmentsDirName = cfg.assignmentsDir ?? "Assignments";

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

  const lecturesDir = join(cfg.vaultPath, lecturesDirName);
  if (existsSync(lecturesDir)) {
    const lectureFiles = (await readdir(lecturesDir)).filter(f => f.endsWith(".md"));
    for (const lf of lectureFiles) {
      const lecturePath = join(lecturesDir, lf);
      const md = await readFile(lecturePath, "utf8");

      const lectureSlug = slugify(lf.replace(/\.md$/, ""));
      const destLecture = join(destContentRoot, "lectures", cfg.slug, `${lectureSlug}.md`);
      if (!existsSync(destLecture)) {
        const fmTitle = extractFrontmatterTitle(md) ?? lf.replace(/\.md$/, "");
        pending.push({
          kind: "lecture",
          slug: lectureSlug,
          title: fmTitle,
          sourceVaultPath: lecturePath,
          sourceFolder: cfg.slug,
        });
      }

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

  // Also scan vault solution-notes folder for image refs — solution notes often
  // embed diagrams (e.g. game trees, indifference curves, causal DAGs) that need
  // to land in public/images/<subject>/ so the drafted problem-set can reference them.
  const vaultSolutionsDir = join(cfg.vaultPath, vaultSolutionsDirName);
  if (existsSync(vaultSolutionsDir)) {
    const files = (await readdir(vaultSolutionsDir)).filter(f => f.endsWith(".md"));
    for (const f of files) {
      const md = await readFile(join(vaultSolutionsDir, f), "utf8");
      for (const img of extractImageRefs(md)) {
        const fromAbs = img.startsWith("/") ? img : join(cfg.vaultPath, "Attachments", basename(img));
        if (!existsSync(fromAbs)) continue;
        const safe = slugify(basename(img).replace(/\.[^.]+$/, "")) + extname(img);
        const toAbs = join(destContentRoot, "..", "..", "public", "images", cfg.slug, safe);
        imageOps.push({ from: fromAbs, to: toAbs });
      }
    }
  }

  if (existsSync(cfg.sourceDocPath)) {
    const docFiles = await collectDocs(cfg.sourceDocPath, assignmentsDirName);
    const vaultSolutions = await listVaultSolutions(cfg.vaultPath, vaultSolutionsDirName, requireSolutionKeyword);
    const docxSolutions = await listDocxSolutions(cfg.sourceDocPath);
    for (const docPath of docFiles) {
      const filename = basename(docPath);
      const ext = extname(filename).toLowerCase();
      if (ext !== ".pdf" && ext !== ".docx") continue;
      const rawSlug = slugify(filename.replace(/\.[^.]+$/, ""));
      const exerciseNum = extractExerciseNumberFromSlug(rawSlug);
      const slug = cfg.problemSetSlugPrefix && exerciseNum !== null
        ? `${cfg.problemSetSlugPrefix}-${exerciseNum}`
        : rawSlug;
      const destFile = join(destContentRoot, "problem-sets", cfg.slug, `${slug}.md`);
      const docDest = join(destContentRoot, "..", "..", "public", "papers", cfg.slug, `${slug}${ext}`);
      docOps.push({ from: docPath, to: docDest });
      if (existsSync(destFile)) continue;
      const vaultSolutionPath = pickBestMatch(vaultSolutions, exerciseNum, requireSolutionKeyword);
      const solutionDocPath = vaultSolutionPath ? null : pickBestMatch(docxSolutions, exerciseNum, false);
      pending.push({
        kind: "problem-set",
        slug,
        title: filename.replace(/\.[^.]+$/, ""),
        sourceDocPath: docPath,
        sourceDocFilename: filename,
        vaultSolutionPath,
        solutionDocPath,
      });
    }
  }

  return { subject: cfg.slug, pending, imageOps, docOps };
}

// Extracts the assignment number from a slug. Handles "ex-1-micro-3" → 1, "appliedmetrics2026-hw1" → 1, "ps-2-something" → 2.
// Matches the first occurrence of ex/hw/ps/assignment followed by digits, anywhere in the slug.
function extractExerciseNumberFromSlug(slug: string): number | null {
  const m = slug.match(/(?:^|[^a-z])(?:ex|hw|ps|assignment)[-_ ]?(\d+)/i);
  return m ? parseInt(m[1], 10) : null;
}

// Returns the assignment numbers explicitly tied to ex/hw/ps/assignment tokens in a filename.
// e.g. "EX1_Micro3_Answers.docx" → [1] (the "3" in "Micro3" is ignored).
// "AppliedMetrics2026-HW1.pdf" → [1]. "PS_02-Fertility & Education.md" → [2].
function exerciseNumbersInFilename(filename: string): number[] {
  return [...filename.matchAll(/(?:exercise|ex|hw|ps|assignment)[-_ ]?(\d+)/gi)].map(m => parseInt(m[1], 10));
}

async function listVaultSolutions(vaultPath: string, dirName: string, requireKeyword: boolean): Promise<string[]> {
  const dir = join(vaultPath, dirName);
  if (!existsSync(dir)) return [];
  const files = await readdir(dir);
  return files
    .filter(f => {
      if (!f.toLowerCase().endsWith(".md")) return false;
      // Skip Obsidian Excalidraw metadata files — the rendered .png is what we embed.
      if (f.endsWith(".excalidraw.md")) return false;
      if (requireKeyword && !/solutions?|answers?/i.test(f)) return false;
      return true;
    })
    .map(f => join(dir, f));
}

async function listDocxSolutions(sourceDocPath: string): Promise<string[]> {
  const dir = join(sourceDocPath, "Assignment solutions");
  if (!existsSync(dir)) return [];
  const files = await readdir(dir);
  return files
    .filter(f => {
      const ext = extname(f).toLowerCase();
      return ext === ".docx" || ext === ".pdf";
    })
    .map(f => join(dir, f));
}

// Prefer the shortest filename among candidates whose exercise number matches.
// When requireSolutionKeyword is true (vault Assignments folder also contains questions),
// the filename must reference "solution(s)" / "answer(s)".
function pickBestMatch(candidates: string[], exerciseNum: number | null, requireSolutionKeyword: boolean): string | null {
  if (exerciseNum === null) return null;
  const matching = candidates.filter(p => {
    const name = basename(p);
    if (requireSolutionKeyword && !/solutions?|answers?/i.test(name)) return false;
    return exerciseNumbersInFilename(name).includes(exerciseNum);
  });
  if (matching.length === 0) return null;
  matching.sort((a, b) => basename(a).length - basename(b).length);
  return matching[0];
}

function extractFrontmatterTitle(md: string): string | null {
  const m = md.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!m) return null;
  const titleMatch = m[1].match(/^title:\s*['"]?(.+?)['"]?\s*$/m);
  return titleMatch ? titleMatch[1] : null;
}

// Recursively find .pdf and .docx files but only inside the configured assignments folder
// (Plan 2 pilot scope — past papers folder etc. are not auto-scanned). Recurses into
// nested subdirectories of the assignments folder so subjects like econometrics whose
// assignments live in per-HW subfolders are still picked up.
async function collectDocs(root: string, assignmentsDirName: string): Promise<string[]> {
  const out: string[] = [];
  async function walkAssignments(dir: string) {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const e of entries) {
      const full = join(dir, e.name);
      if (e.isDirectory()) {
        await walkAssignments(full);
      } else if (e.isFile()) {
        out.push(full);
      }
    }
  }
  async function walk(dir: string) {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const e of entries) {
      const full = join(dir, e.name);
      if (e.isDirectory() && e.name === assignmentsDirName) {
        await walkAssignments(full);
      } else if (e.isDirectory()) {
        await walk(full);
      }
    }
  }
  await walk(root);
  return out;
}
