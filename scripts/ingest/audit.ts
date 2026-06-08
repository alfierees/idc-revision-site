#!/usr/bin/env -S npx tsx
/**
 * Post-ingest audit for a subject.
 *
 * Usage:  npx tsx scripts/ingest/audit.ts <subject-slug>
 *
 * Reports four buckets:
 *   1. Muted-tag candidates  — lecture tags that don't resolve to any term/recipe/lecture
 *   2. Broken wiki-links     — [[Foo]] in drafted markdown that don't resolve
 *   3. Missing image refs    — ![[Foo.png]] or ![](/images/...) whose file doesn't exist
 *   4. Lecture sections without term files (top 10)
 *
 * Exit code 0 = clean; 1 = issues found.
 */

import { readFileSync, existsSync } from "node:fs";
import { readdir } from "node:fs/promises";
import { join, basename, extname } from "node:path";
import { getSubjectConfig } from "./config.js";
import { slugify } from "../../src/lib/slugify.js";

// ─── helpers ──────────────────────────────────────────────────────────────────

const REPO_ROOT = new URL("../../", import.meta.url).pathname;

function contentDir(kind: string, subject: string): string {
  return join(REPO_ROOT, "src/content", kind, subject);
}

function publicImagesDir(subject: string): string {
  return join(REPO_ROOT, "public/images", subject);
}

async function mdFiles(dir: string): Promise<string[]> {
  try {
    const entries = await readdir(dir);
    return entries.filter((f) => f.endsWith(".md")).map((f) => join(dir, f));
  } catch {
    return [];
  }
}

function readMd(filePath: string): string {
  try {
    return readFileSync(filePath, "utf8");
  } catch {
    return "";
  }
}

/** Parse YAML frontmatter (very lightweight — only handles simple string/array keys). */
function parseFrontmatter(content: string): { body: string; fm: Record<string, unknown> } {
  if (!content.startsWith("---")) return { body: content, fm: {} };
  const end = content.indexOf("\n---", 3);
  if (end === -1) return { body: content, fm: {} };
  const yamlBlock = content.slice(4, end);
  const body = content.slice(end + 4).trimStart();
  const fm: Record<string, unknown> = {};

  // Parse top-level string values and simple arrays
  const lines = yamlBlock.split("\n");
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const kvMatch = line.match(/^(\w[\w-]*):\s*(.*)/);
    if (kvMatch) {
      const key = kvMatch[1];
      const val = kvMatch[2].trim();
      if (val === "" || val === "|" || val === ">") {
        // block scalar or sequence — skip for our purposes unless it's aliases/tags
        if (val === "") {
          // Might be a sequence
          const items: string[] = [];
          i++;
          while (i < lines.length && lines[i].match(/^\s+-\s/)) {
            items.push(lines[i].replace(/^\s+-\s+/, "").replace(/^["']|["']$/g, "").trim());
            i++;
          }
          fm[key] = items;
          continue;
        }
      } else if (val.startsWith("[") && val.endsWith("]")) {
        // Inline JSON-style array: aliases: ["LPM", "binary-outcome"]
        const inner = val.slice(1, -1);
        const items: string[] = [];
        for (const m of inner.matchAll(/"([^"]*)"|'([^']*)'|([^,\s]+)/g)) {
          const item = (m[1] ?? m[2] ?? m[3] ?? "").trim();
          if (item) items.push(item);
        }
        fm[key] = items;
      } else {
        fm[key] = val.replace(/^["']|["']$/g, "");
      }
    }
    i++;
  }
  return { body, fm };
}

function slugifyAlias(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[‐-―]/g, "-")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

// ─── link map (mirrors buildLinkMap but reads FS directly) ───────────────────

type LinkKind = "term" | "recipe" | "problem-set" | "lecture";
interface LinkTarget { kind: LinkKind; slug: string }
type LinkMap = Map<string, LinkTarget>;

async function buildLinkMap(subject: string): Promise<LinkMap> {
  const map: LinkMap = new Map();

  const addEntries = async (kind: LinkKind, dir: string, withAliases = false) => {
    const files = await mdFiles(dir);
    for (const f of files) {
      const slug = basename(f, ".md");
      if (!map.has(slug)) map.set(slug, { kind, slug });
      if (withAliases) {
        const { fm } = parseFrontmatter(readMd(f));
        const aliases = (fm.aliases as string[] | undefined) ?? [];
        for (const a of aliases) {
          const aslug = slugifyAlias(a);
          if (aslug && !map.has(aslug)) map.set(aslug, { kind, slug });
        }
      }
    }
  };

  // Build order matches buildLinkMap: sets → lectures → recipes → terms
  await addEntries("problem-set", contentDir("problem-sets", subject));
  await addEntries("lecture", contentDir("lectures", subject), true);
  await addEntries("recipe", contentDir("recipes", subject));
  await addEntries("term", contentDir("terms", subject), true);

  return map;
}

function resolveLink(links: LinkMap, raw: string): LinkTarget | undefined {
  const slug = slugifyAlias(raw);
  const direct = links.get(slug);
  if (direct) return direct;
  // Prefix-fallback
  const prefix = slug + "-";
  let candidate: LinkTarget | undefined;
  for (const [key, target] of links) {
    if (key.startsWith(prefix) && target.slug === key) {
      if (candidate) return undefined; // ambiguous
      candidate = target;
    }
  }
  return candidate;
}

// ─── intentionally-muted slugs (subject's own slug + metadata) ───────────────

const ALWAYS_MUTED = new Set([
  "microeconomics",
  "econometrics",
  "accounting",
  "machine-learning",
  "macroeconomics",
  "assignment-solution",
  "problem-set",         // generic metadata pill used in econometrics
]);

// ─── bucket 1: muted-tag candidates ──────────────────────────────────────────

interface MutedTagCandidate {
  tag: string;
  lectureFile: string;
  suggestedHeading: string;
}

async function findMutedTagCandidates(
  subject: string,
  links: LinkMap,
): Promise<MutedTagCandidate[]> {
  const lecDir = contentDir("lectures", subject);
  const files = await mdFiles(lecDir);
  const results: MutedTagCandidate[] = [];
  const seen = new Set<string>();

  for (const f of files) {
    const content = readMd(f);
    const { fm, body } = parseFrontmatter(content);
    const tags = (fm.tags as string[] | undefined) ?? [];

    for (const tag of tags) {
      if (ALWAYS_MUTED.has(tag)) continue;
      const slugged = slugifyAlias(tag);
      if (seen.has(slugged)) continue;
      if (resolveLink(links, tag)) continue;

      seen.add(slugged);
      // Find a good grounding heading
      const headings = [...body.matchAll(/^#{2,3}\s+(.+)/gm)].map((m) => m[1].trim());
      const tagWords = slugged.split("-");
      let suggestedHeading =
        headings.find((h) => {
          const hs = slugify(h);
          return tagWords.every((w) => hs.includes(w));
        }) ??
        headings.find((h) => slugify(h).includes(slugged.replace(/-/g, ""))) ??
        headings.find((h) => {
          const hs = slugify(h);
          return tagWords.some((w) => w.length > 3 && hs.includes(w));
        }) ??
        headings.find((h) => !h.startsWith("📎") && h.length > 3) ??
        "(no suitable heading found)";

      // Strip emoji prefix if present
      suggestedHeading = suggestedHeading.replace(/^[\p{Emoji}\s]+/u, "").trim();

      results.push({
        tag,
        lectureFile: basename(f),
        suggestedHeading: suggestedHeading || "(no suitable heading found)",
      });
    }
  }
  return results;
}

// ─── bucket 2: broken wiki-links ─────────────────────────────────────────────

interface BrokenLink {
  file: string;
  rawLink: string;
}

async function findBrokenWikiLinks(subject: string, links: LinkMap): Promise<BrokenLink[]> {
  const results: BrokenLink[] = [];
  // Walk terms, recipes, problem-sets — NOT lectures (verbatim vault)
  for (const kind of ["terms", "recipes", "problem-sets"] as const) {
    const files = await mdFiles(contentDir(kind, subject));
    for (const f of files) {
      const content = readMd(f);
      // Find [[...]] patterns (possibly with fragment)
      const matches = [...content.matchAll(/\[\[([^\]]+)\]\]/g)];
      for (const m of matches) {
        const inner = m[1];
        // Strip pipe alias: [[Page|alias]] → "Page"
        const withoutAlias = inner.split("|")[0].trim();
        // Strip fragment: [[Page#Section]] → "Page"
        const pagePart = withoutAlias.split("#")[0].trim();
        if (!pagePart) continue; // same-page anchor [[#Foo]] — skip
        // Match the renderer: the wiki-link plugin's pageResolver runs the
        // canonical slugify (underscores collapse to hyphens) before lookup.
        // Audit must do the same or it false-positives on `[[Lec_04-Foo]]`.
        const pageSlug = slugify(pagePart);
        if (!resolveLink(links, pageSlug)) {
          results.push({ file: `src/content/${kind}/${subject}/${basename(f)}`, rawLink: inner });
        }
      }
    }
  }
  return results;
}

// ─── bucket 3: missing image refs ────────────────────────────────────────────

interface MissingImage {
  file: string;
  ref: string;
}

async function findMissingImages(subject: string): Promise<MissingImage[]> {
  const results: MissingImage[] = [];
  const imgDir = publicImagesDir(subject);

  const checkFile = async (f: string, kindPath: string) => {
    const content = readMd(f);
    // Vault-style: ![[Foo.png]] or ![[Foo.png|width]]
    for (const m of content.matchAll(/!\[\[([^\]]+)\]\]/g)) {
      const inner = m[1].split("|")[0].trim();
      const sluggedBase = slugify(basename(inner, extname(inner)));
      const ext = extname(inner);
      const candidate = join(imgDir, sluggedBase + ext);
      if (!existsSync(candidate)) {
        results.push({ file: `${kindPath}/${basename(f)}`, ref: `![[${inner}]]` });
      }
    }
    // Standard markdown: ![...](/images/<subject>/...)
    for (const m of content.matchAll(/!\[[^\]]*\]\(\/images\/[^)]+\)/g)) {
      const urlMatch = m[0].match(/\(\/images\/([^)]+)\)/);
      if (urlMatch) {
        const imgPath = join(REPO_ROOT, "public/images", urlMatch[1]);
        if (!existsSync(imgPath)) {
          results.push({ file: `${kindPath}/${basename(f)}`, ref: m[0].slice(0, 60) });
        }
      }
    }
  };

  for (const kind of ["terms", "recipes", "problem-sets", "lectures"] as const) {
    const dir = contentDir(kind, subject);
    const files = await mdFiles(dir);
    for (const f of files) {
      await checkFile(f, `src/content/${kind}/${subject}`);
    }
  }
  return results;
}

// ─── bucket 4: lecture sections without term files ───────────────────────────

interface OrphanSection {
  slug: string;
  lectureFile: string;
}

async function findOrphanLectureSections(subject: string): Promise<OrphanSection[]> {
  const lecDir = contentDir("lectures", subject);
  const termDir = contentDir("terms", subject);
  const files = await mdFiles(lecDir);
  const counts = new Map<string, { lectureFile: string; count: number }>();

  for (const f of files) {
    const { body } = parseFrontmatter(readMd(f));
    for (const m of body.matchAll(/^#{2,3}\s+(.+)/gm)) {
      const heading = m[1].replace(/^[\p{Emoji}\s]+/u, "").trim();
      if (!heading || heading.length < 4) continue;
      const s = slugify(heading);
      if (!s || s.length < 4) continue;
      // Skip if a term file already exists
      if (existsSync(join(termDir, s + ".md"))) continue;
      const existing = counts.get(s);
      if (existing) existing.count++;
      else counts.set(s, { lectureFile: basename(f), count: 1 });
    }
  }

  // Sort by slug length (shorter = more fundamental) then alphabetically, cap at 10
  return [...counts.entries()]
    .map(([slug, { lectureFile }]) => ({ slug, lectureFile }))
    .sort((a, b) => a.slug.length - b.slug.length || a.slug.localeCompare(b.slug))
    .slice(0, 10);
}

// ─── main ─────────────────────────────────────────────────────────────────────

const HR = "─".repeat(37);

async function main() {
  const subject = process.argv[2];
  if (!subject) {
    console.error("Usage: npx tsx scripts/ingest/audit.ts <subject-slug>");
    process.exit(2);
  }

  // Validate subject exists in config
  try {
    getSubjectConfig(subject);
  } catch {
    console.error(`Unknown subject: "${subject}". Add it to scripts/ingest/config.ts first.`);
    process.exit(2);
  }

  console.log(`\naudit: ${subject}`);
  console.log(HR);

  const links = await buildLinkMap(subject);

  const [muted, brokenLinks, missingImages, orphans] = await Promise.all([
    findMutedTagCandidates(subject, links),
    findBrokenWikiLinks(subject, links),
    findMissingImages(subject),
    findOrphanLectureSections(subject),
  ]);

  // Bucket 1
  console.log(`\nMuted-tag candidates (${muted.length}):`);
  if (muted.length === 0) {
    console.log("  (none)");
  } else {
    for (const c of muted) {
      console.log(`  • ${c.tag} (tag in ${c.lectureFile})`);
      console.log(`    suggested heading: ## ${c.suggestedHeading}`);
      console.log();
    }
  }

  // Bucket 2
  console.log(`Broken wiki-links (${brokenLinks.length}):`);
  if (brokenLinks.length === 0) {
    console.log("  (none)");
  } else {
    for (const b of brokenLinks) {
      console.log(`  • ${b.file} → [[${b.rawLink}]] (no match)`);
    }
  }

  // Bucket 3
  console.log(`\nMissing image refs (${missingImages.length}):`);
  if (missingImages.length === 0) {
    console.log("  (none)");
  } else {
    for (const img of missingImages) {
      console.log(`  • ${img.file}: ${img.ref}`);
    }
  }

  // Bucket 4
  const topN = orphans.length;
  console.log(`\nLecture sections without term files (top ${topN}):`);
  if (orphans.length === 0) {
    console.log("  (none)");
  } else {
    for (const o of orphans) {
      console.log(`  • ${o.slug} — ${o.lectureFile}`);
    }
  }

  const total = muted.length + brokenLinks.length + missingImages.length;
  console.log(`\nTotal issues: ${total}`);
  console.log();

  process.exit(total > 0 || muted.length > 0 ? 1 : 0);
}

main().catch((err) => {
  console.error(err);
  process.exit(2);
});
