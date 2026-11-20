// The degree's semesters as shown on the home page, plus pure helpers for
// grouping subjects under them. Year 3 is deliberately absent for now.

export type Year = 1 | 2;
export type SemesterNumber = 1 | 2;
export type SemesterId = "y1s1" | "y1s2" | "y2s1" | "y2s2";

export interface Semester {
  id: SemesterId;
  year: Year;
  semester: SemesterNumber;
  /** "Year 2 · Semester 1" */
  label: string;
  /** "Y2 S1" — switcher pills */
  short: string;
}

export function semesterId(year: Year, semester: SemesterNumber): SemesterId {
  return `y${year}s${semester}` as SemesterId;
}

const YEARS: Year[] = [1, 2];
const TERMS: SemesterNumber[] = [1, 2];

export const SEMESTERS: Semester[] = YEARS.flatMap((year) =>
  TERMS.map((semester) => ({
    id: semesterId(year, semester),
    year,
    semester,
    label: `Year ${year} · Semester ${semester}`,
    short: `Y${year} S${semester}`,
  })),
);

export const SEMESTER_STORAGE_KEY = "idc-revision:semester";

export function isSemesterId(value: unknown): value is SemesterId {
  return SEMESTERS.some((s) => s.id === value);
}

export interface SemesterSubject {
  slug: string;
  title: string;
  year: Year;
  semester: SemesterNumber;
  placeholder: boolean;
}

export interface SemesterGroup<T extends SemesterSubject> {
  semester: Semester;
  live: T[];
  coming: T[];
}

/** Every semester in order (empty ones included), with its live and coming-soon subjects sorted by title. */
export function groupBySemester<T extends SemesterSubject>(subjects: T[]): SemesterGroup<T>[] {
  const byTitle = (a: T, b: T) => a.title.localeCompare(b.title);
  return SEMESTERS.map((semester) => {
    const inSemester = subjects.filter((s) => s.year === semester.year && s.semester === semester.semester);
    return {
      semester,
      live: inSemester.filter((s) => !s.placeholder).sort(byTitle),
      coming: inSemester.filter((s) => s.placeholder).sort(byTitle),
    };
  });
}

export interface ContentCounts {
  lectures: number;
  problemSets: number;
  pastPapers: number;
}

/** "3 lectures · 8 past papers" — zero counts are left out. */
export function countsLine(counts: ContentCounts): string {
  const parts: [number, string][] = [
    [counts.lectures, "lecture"],
    [counts.problemSets, "problem set"],
    [counts.pastPapers, "past paper"],
  ];
  return parts
    .filter(([count]) => count > 0)
    .map(([count, noun]) => `${count} ${noun}${count === 1 ? "" : "s"}`)
    .join(" · ");
}
