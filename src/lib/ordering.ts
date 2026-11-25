/**
 * Course-order sorting for lecture-like entries (lectures, lessons, sessions,
 * topics, recitations, readings).
 *
 * Titles are inconsistent across the vault ("Lec 03: …", "Lecture 2: …",
 * "Lesson_01-…"), so sorting by title puts "Lecture 2" after every "Lec NN".
 * Slugs are consistent: `<kind>-<number><optional letter>-<topic>`, e.g.
 * `lec-02-…`, `lec-07b-…`, `lecture-3-…`, `session-9-…`, `rec-01-…`, `read-01-…`.
 * We sort on (kind rank, number, letter, slug) parsed from the slug.
 */

const KIND_RANK: Record<string, number> = {
  lec: 0, lecture: 0, lesson: 0, session: 0, topic: 0, class: 0, week: 0,
  rec: 1, recitation: 1, tutorial: 1,
  read: 2, reading: 2,
};

export interface OrderKey {
  kind: number;
  num: number;
  letter: string;
  slug: string;
}

export function courseOrderKey(slug: string): OrderKey {
  const m = slug.match(/^([a-z]+)[-_]?(\d+)([a-z]?)(?=-|$)/);
  if (m) {
    return { kind: KIND_RANK[m[1]] ?? 0, num: parseInt(m[2], 10), letter: m[3], slug };
  }
  const kindOnly = slug.match(/^([a-z]+)-/);
  const anyNum = slug.match(/(\d+)/);
  return {
    kind: kindOnly ? (KIND_RANK[kindOnly[1]] ?? 0) : 0,
    num: anyNum ? parseInt(anyNum[1], 10) : Number.POSITIVE_INFINITY,
    letter: "",
    slug,
  };
}

export function compareCourseOrder(a: string, b: string): number {
  const ka = courseOrderKey(a);
  const kb = courseOrderKey(b);
  return (
    ka.kind - kb.kind ||
    (ka.num === kb.num ? 0 : ka.num < kb.num ? -1 : 1) ||
    ka.letter.localeCompare(kb.letter) ||
    ka.slug.localeCompare(kb.slug, undefined, { numeric: true })
  );
}

/** Sort entries carrying a `slug` into course order (returns a new array). */
export function sortByCourseOrder<T extends { slug: string }>(items: readonly T[]): T[] {
  return [...items].sort((a, b) => compareCourseOrder(a.slug, b.slug));
}

const KIND_LABEL: Record<string, string> = {
  lec: "Lecture", lecture: "Lecture", lesson: "Lesson", session: "Session", topic: "Topic",
  class: "Class", week: "Week", rec: "Recitation", recitation: "Recitation", tutorial: "Tutorial",
  read: "Reading", reading: "Reading",
};

/**
 * Split an inconsistent vault title ("Lec 03: Conditions…", "Lecture 2: Numeric…",
 * "Lesson_01-Time Value…") into a uniform kicker ("Lecture 3") and topic
 * ("Conditions and While Loops"), using the slug for the kind and number,
 * unless the lecture's frontmatter sets its own `kicker`.
 */
export function lectureDisplay(
  slug: string,
  title: string,
  kickerOverride?: string,
): { kicker: string; topic: string } {
  const m = slug.match(/^([a-z]+)[-_]?(\d+)([a-z]?)(?=-|$)/);
  const topic =
    title
      .replace(/^(?:lec(?:ture)?|lesson|session|topic|class|week|rec(?:itation)?|read(?:ing)?|tutorial)[\s_.-]*\d+[a-z]?\s*(?:[:\-–—.|]\s*)?/i, "")
      .trim() || title;
  // Frontmatter `kicker` wins over the slug, e.g. Micro II's cumulative decks
  // keep `lec-04` slugs (stable URLs and links) but read as "Part 1".
  if (kickerOverride) return { kicker: kickerOverride, topic };
  if (!m || !KIND_LABEL[m[1]]) return { kicker: "", topic };
  return { kicker: `${KIND_LABEL[m[1]]} ${parseInt(m[2], 10)}${m[3]}`, topic };
}
