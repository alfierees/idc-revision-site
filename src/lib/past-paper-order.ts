// Frontmatter `year` is usually the course year (2), so the exam year comes
// from the slug or title.

export interface PaperIdentity {
  slug: string;
  title: string;
}

const EXAM_YEAR = /\b(20\d{2})\b/;

export function examYear(paper: PaperIdentity): number | null {
  const match = paper.slug.match(EXAM_YEAR) ?? paper.title.match(EXAM_YEAR);
  return match ? Number(match[1]) : null;
}

function paperNumber(slug: string): number {
  return Number(slug.match(/^pp-(\d+)/)?.[1] ?? Number.MAX_SAFE_INTEGER);
}

/** Dated exams newest first (later paper first within a year), then undated papers in paper order. */
export function comparePapersNewestFirst(first: PaperIdentity, second: PaperIdentity): number {
  const firstYear = examYear(first);
  const secondYear = examYear(second);
  if (firstYear !== null && secondYear !== null) {
    return secondYear - firstYear || paperNumber(second.slug) - paperNumber(first.slug);
  }
  if (firstYear !== null) return -1;
  if (secondYear !== null) return 1;
  return paperNumber(first.slug) - paperNumber(second.slug);
}
