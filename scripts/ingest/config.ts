import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

// One file per course: scripts/ingest/subjects/<key>.json, auto-discovered.
// The key (filename) is what you pass to cli.ts/audit.ts; `slug` is the site
// subject it writes into (usually the same).
// Per-course files keep parallel ingest/<course> branches from conflicting.

export interface SubjectConfig {
  slug: string;          // e.g. "micro"
  title: string;         // e.g. "Micro-Economics"
  vaultPath: string;     // absolute
  sourceDocPath: string; // absolute

  // Optional vault folder names — default to micro's conventions when omitted.
  lecturesDir?: string;          // default "Lectures"
  vaultSolutionsDir?: string;    // default "Assignments" (the vault folder that holds worked-up solution notes)
  requireSolutionKeyword?: boolean; // default true — when false, every .md in vaultSolutionsDir is a candidate, not just files matching /solution|answer/i

  // Optional source-doc folder name — default "Assignments". Sibling solutions folder lives at "<sourceDocPath>/Assignment solutions".
  assignmentsDir?: string;       // default "Assignments"

  // Optional explicit list of problem-set source files, relative to sourceDocPath.
  // When set, it replaces the assignmentsDir walk: only these files are queued
  // and copied into public/papers. Use it when assignments sit in several
  // folders or loose in the course root, or when their folders also hold
  // solutions, data files or student submissions that must not be published.
  assignmentFiles?: string[];

  // Optional problem-set slug prefix. When set, the slug becomes "<prefix>-<exerciseNum>"
  // (e.g. "ps-1") instead of the raw slugified filename. Falls back to the raw slug when
  // no exercise number can be extracted.
  problemSetSlugPrefix?: string;

  // Lecture/PS tags that are page metadata, not concepts (the course's own
  // subject tag, e.g. "micro-economics-ii"). The audit doesn't flag them.
  mutedTags?: string[];

  // Free-text notes for humans (JSON has no comments).
  notes?: string;
}

const REQUIRED_FIELDS = ["slug", "title", "vaultPath", "sourceDocPath"] as const;

export function loadSubjects(dir: string): Record<string, SubjectConfig> {
  const configs: Record<string, SubjectConfig> = {};
  const fileNames = readdirSync(dir).filter((name) => name.endsWith(".json")).sort();
  for (const fileName of fileNames) {
    let parsed: Record<string, unknown>;
    try {
      parsed = JSON.parse(readFileSync(join(dir, fileName), "utf8"));
    } catch (error) {
      throw new Error(`${fileName}: invalid JSON (${(error as Error).message})`);
    }
    for (const field of REQUIRED_FIELDS) {
      if (typeof parsed[field] !== "string" || parsed[field] === "") {
        throw new Error(`${fileName}: missing required field "${field}"`);
      }
    }
    const assignmentFiles = parsed.assignmentFiles;
    if (assignmentFiles !== undefined
      && !(Array.isArray(assignmentFiles) && assignmentFiles.every((file) => typeof file === "string" && file !== ""))) {
      throw new Error(`${fileName}: "assignmentFiles" must be a list of file paths relative to sourceDocPath`);
    }
    configs[fileName.replace(/\.json$/, "")] = parsed as unknown as SubjectConfig;
  }
  return configs;
}

export const SUBJECTS_DIR = fileURLToPath(new URL("./subjects/", import.meta.url));

export const subjects: Record<string, SubjectConfig> = loadSubjects(SUBJECTS_DIR);

export function getSubjectConfig(key: string): SubjectConfig {
  const config = subjects[key];
  if (!config) throw new Error(`Unknown subject: ${key}. Add scripts/ingest/subjects/${key}.json.`);
  return config;
}

// Tags muted for every subject: generic page metadata.
export const SHARED_MUTED_TAGS = ["assignment-solution", "problem-set"];

// Muted tags for one site subject: the shared ones plus the mutedTags of every
// course config that writes into it.
export function mutedTagsFor(siteSlug: string): Set<string> {
  const muted = new Set(SHARED_MUTED_TAGS);
  for (const [key, config] of Object.entries(subjects)) {
    if (config.slug !== siteSlug && key !== siteSlug) continue;
    for (const tag of config.mutedTags ?? []) muted.add(tag);
  }
  return muted;
}
