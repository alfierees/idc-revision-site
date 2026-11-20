import { entrySlug } from "../entry-slug";
import type { ProgressTotals } from "./types";

interface QuestionLike { id: string; solution: string; options?: unknown[] }
interface Entry<D> { id: string; data: D }
export interface TotalsInput {
  subjects: { slug: string; title: string; year: 1 | 2; semester: 1 | 2; placeholder: boolean }[];
  lectures: Entry<{ subject: string; in_scope?: boolean }>[];
  problemSets: Entry<{ subject: string; questions: QuestionLike[] }>[];
  pastPapers: Entry<{ subject: string; questions?: QuestionLike[] }>[];
}

const hasSolution = (q: QuestionLike) => q.solution.trim().length > 0;
const isGradable = (q: QuestionLike) => Boolean(q.options?.length) || hasSolution(q);

/** What exists to be marked, per live course. Mirrors the rules the pages use to render status controls. */
export function buildTotals(input: TotalsInput): ProgressTotals {
  const courses = input.subjects
    .filter((s) => !s.placeholder)
    .map((s) => {
      const problemSets: Record<string, string[]> = {};
      for (const set of input.problemSets.filter((p) => p.data.subject === s.slug)) {
        const ids = set.data.questions.filter(hasSolution).map((q) => q.id);
        if (ids.length > 0) problemSets[entrySlug(set.id)] = ids;
      }
      const pastPapers: Record<string, string[]> = {};
      for (const paper of input.pastPapers.filter((p) => p.data.subject === s.slug)) {
        const ids = (paper.data.questions ?? []).filter(isGradable).map((q) => q.id);
        if (ids.length > 0) pastPapers[entrySlug(paper.id)] = ids;
      }
      return {
        slug: s.slug,
        title: s.title,
        year: s.year,
        semester: s.semester,
        lectures: input.lectures
          .filter((l) => l.data.subject === s.slug && l.data.in_scope !== false)
          .map((l) => entrySlug(l.id)),
        problemSets,
        pastPapers,
      };
    });
  return { courses };
}
