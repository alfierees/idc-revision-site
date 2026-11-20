// Every progress key a course currently offers, so a build can check that no key students may
// have marked has disappeared. Keys are written without the "idc-revision:" prefix to keep
// src/data/progress-ids/*.json readable.
import { resolveKey, type Aliases } from "./aliases";
import type { ProgressTotals } from "./types";

export function keysBySubject(totals: ProgressTotals): Record<string, string[]> {
  const result: Record<string, string[]> = {};
  for (const course of totals.courses) {
    result[course.slug] = [
      ...course.lectures.map((lecture) => `${course.slug}:lecture:${lecture}`),
      ...Object.entries(course.problemSets).flatMap(([set, ids]) =>
        ids.map((id) => `${course.slug}:problem-set:${set}:${id}`)),
      ...Object.entries(course.pastPapers).flatMap(([paper, ids]) =>
        ids.map((id) => `${course.slug}:past-paper:${paper}:${id}`)),
    ].sort();
  }
  return result;
}

/** Known keys that no longer exist, after following aliases. */
export function missingKeys(known: string[], current: string[], aliases: Aliases): string[] {
  const present = new Set(current);
  return known.filter((key) => !present.has(resolveKey(key, aliases)));
}
