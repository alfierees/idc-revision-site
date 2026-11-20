import type { StatusValue } from "../status";

export interface CourseTotals {
  slug: string;
  title: string;
  year: 1 | 2;
  semester: 1 | 2;
  /** in-scope lecture slugs */
  lectures: string[];
  /** problem-set slug → ids of questions that have a solution (the ones with a status control) */
  problemSets: Record<string, string[]>;
  /** past-paper slug → ids of gradable questions (options or a solution) */
  pastPapers: Record<string, string[]>;
}

export interface ProgressTotals {
  courses: CourseTotals[];
}

/** Read-only view of what this device has marked. */
export interface ProgressSnapshot {
  status(subject: string, kind: "problem-set" | "past-paper", ref: string, questionId: string): StatusValue;
  lectureRead(subject: string, lecture: string): boolean;
}
