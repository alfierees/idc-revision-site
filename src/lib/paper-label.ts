/**
 * Short, scannable labels for past papers: "2022 Moed A" as the headline and a
 * one-line "what it tests" subline, instead of the long descriptive titles the
 * ingest writes ("Scope Error, Digit Sums, List Palindrome … (2022 Moed A)").
 *
 * Derived from the paper's title / `exam` / slug. A paper can override either
 * part with `label:` / `topics:` in its frontmatter when the heuristic is wrong.
 */

export interface PaperLabelInput {
  slug: string;
  title: string;
  exam?: string;
  label?: string;
  topics?: string;
  body?: string;
}

export interface PaperLabel {
  label: string;
  topics: string;
  /** Calendar year of the sitting, when known (drives newest-first order). */
  examYear?: number;
  moed?: string;
  /** 0 = real sitting (Moed), 1 = sample/practice/mock with a year, 2 = undated. */
  rank: number;
}

const YEAR_RE = /\b(19[89]\d|20\d\d)\b/;
const MOED_RE = /\bmoed[\s_-]*([abc])\b/i;

function kindOf(text: string): string | undefined {
  const t = text.toLowerCase();
  if (/\bmock\b/.test(t)) return "Mock Exam";
  if (/\bsample\b/.test(t)) return "Sample Exam";
  if (/\bpractice\b/.test(t)) return "Practice Exam";
  if (/\bexample exam\b/.test(t)) return "Example Exam";
  return undefined;
}

/** Strip generic noise from a title fragment so only the topics remain. */
function cleanTopics(s: string): string {
  return s
    .replace(/^PP[\s_-]*\d+\s*[:\-–—]?\s*/i, "")
    .replace(/\s*[—–-]\s*Worked (Solutions|MCQs)(\s*\([^)]*\))?\s*$/i, "")
    .replace(/^Worked (Solutions|MCQs)(\s*\([^)]*\))?$/i, "")
    .replace(/\s+/g, " ")
    .trim();
}

/** True when a fragment is just exam identity ("2022 Moed A", "Sample Exam 2026"). */
function isIdentityOnly(s: string): boolean {
  const rest = s
    .replace(YEAR_RE, "")
    .replace(MOED_RE, "")
    .replace(/\b(final|exam|sample|practice|mock|example|undated|term|[abc]|worked|solutions?|mcqs?|questions?|\d+|year not stated|june|march|february|july|august|january)\b/gi, "")
    .replace(/[\s(),.:;·—–-]+/g, "");
  return rest.length === 0;
}

/** Topics from the question headings: "## Q1 — The classical loanable funds market". */
function topicsFromBody(body: string): string {
  const out: string[] = [];
  for (const m of body.matchAll(/^##\s+(?:Q(?:uestion)?\s*\d+[a-z]?|Part\s+[A-Z0-9]+|Problem\s+\d+)\s*[—–:.-]\s*(.+)$/gim)) {
    const t = m[1].replace(/\s*\([^)]*\b(points?|pts|marks?)\b[^)]*\)\s*$/i, "").replace(/\[[^\]]*\]\s*$/, "").trim();
    if (t && !out.includes(t)) out.push(t);
  }
  return out.slice(0, 5).join(", ");
}

export function paperLabel(p: PaperLabelInput): PaperLabel {
  const title = p.title.trim();
  const haystack = [title, p.exam ?? "", p.slug.replace(/-/g, " ")];
  const yearStr = haystack.map((h) => h.match(YEAR_RE)?.[1]).find(Boolean);
  const examYear = yearStr ? parseInt(yearStr, 10) : undefined;
  const moedLetter = haystack.map((h) => h.match(MOED_RE)?.[1]).find(Boolean);
  const moed = moedLetter ? `Moed ${moedLetter.toUpperCase()}` : undefined;
  const kind = haystack.map(kindOf).find(Boolean);

  let label: string;
  let rank: number;
  if (examYear && moed && !kind) {
    label = `${examYear} ${moed}`;
    rank = 0;
  } else if (examYear && moed && kind) {
    label = `${examYear} ${moed} (${kind.replace(/ Exam$/, "").toLowerCase()})`;
    rank = 0;
  } else if (kind && examYear) {
    label = `${examYear} ${kind}`;
    rank = 1;
  } else if (moed) {
    label = `${moed} (undated)`;
    rank = 2;
  } else {
    // No year/moed: keep the paper's own name, minus topic lists and noise.
    const head = title.split(/\s+[—–]\s+/)[0];
    const paren = title.match(/\(([^)]+)\)\s*$/)?.[1];
    label = cleanTopics(paren && kind && kindOf(paren) ? paren : head) || title;
    label = label.replace(/,?\s*undated/i, "").trim();
    rank = 2;
  }

  // Topics: the title minus its identity part.
  let topics = "";
  const parenMatch = title.match(/^(.*?)\s*\(([^)]*)\)\s*$/);
  if (parenMatch && isIdentityOnly(parenMatch[2])) {
    topics = cleanTopics(parenMatch[1]);
  } else if (/\s[—–]\s/.test(title)) {
    const parts = title.split(/\s+[—–]\s+/).map(cleanTopics).filter((x) => x && !isIdentityOnly(x));
    topics = parts.filter((x) => x !== label).join(" — ");
  } else if (!isIdentityOnly(title)) {
    topics = cleanTopics(title);
  }
  if (topics === label || isIdentityOnly(topics)) topics = "";
  if (!topics && p.body) topics = topicsFromBody(p.body);

  return {
    label: p.label?.trim() || label,
    topics: p.topics?.trim() ?? topics,
    examYear,
    moed,
    rank,
  };
}

/** Newest real sittings first (Moed A before B), then samples, then undated. */
export function comparePapers(
  a: PaperLabel & { slug: string },
  b: PaperLabel & { slug: string },
): number {
  return (
    a.rank - b.rank ||
    (b.examYear ?? 0) - (a.examYear ?? 0) ||
    (a.moed ?? "").localeCompare(b.moed ?? "") ||
    a.slug.localeCompare(b.slug, undefined, { numeric: true })
  );
}
