import type { DegreeProgress } from "./coverage";
import { hasFullWeek } from "./streak";

export type BadgeFamily = "lectures" | "practice" | "papers" | "coverage" | "breadth" | "habit" | "keepsakes";

export interface BadgeContext {
  degree: DegreeProgress;
  streak: number;
  activityDays: string[];
}

export interface BadgeDef {
  id: string;
  name: string;
  family: BadgeFamily;
  /** 1-based position on its family's ladder (drawn as pips) */
  step: number;
  /** what earns it, shown on the tile */
  rule: string;
  /** count-based badges: how far along a locked badge is */
  progress?: (ctx: BadgeContext) => { have: number; need: number };
  /** undefined for keepsakes, which are only earned live (see keepsakesAt) */
  earned?: (ctx: BadgeContext) => boolean;
}

const countBadge = (
  id: string, name: string, family: BadgeFamily, step: number, need: number, rule: string,
  have: (ctx: BadgeContext) => number,
): BadgeDef => ({
  id, name, family, step, rule,
  progress: (ctx) => ({ have: Math.min(have(ctx), need), need }),
  earned: (ctx) => have(ctx) >= need,
});

const anyCourse = (ctx: BadgeContext, test: (c: DegreeProgress["courses"][number]) => boolean) =>
  ctx.degree.courses.some(test);

/** Semesters (by "y-s") that have at least one live course, each mapped to whether every / any course is marked. */
function semesterMarks(ctx: BadgeContext) {
  const bySemester = new Map<string, boolean[]>();
  for (const c of ctx.degree.courses) {
    const key = `${c.year}-${c.semester}`;
    bySemester.set(key, [...(bySemester.get(key) ?? []), c.hasMark]);
  }
  return [...bySemester.values()];
}

const lecturesRead = (ctx: BadgeContext) => ctx.degree.lecturesRead;
const questionsAttempted = (ctx: BadgeContext) => ctx.degree.questionsAttempted;
const coursesMarked = (ctx: BadgeContext) => ctx.degree.coursesMarked;
const bestPercent = (ctx: BadgeContext) => Math.max(0, ...ctx.degree.courses.map((c) => c.percent));
const streak = (ctx: BadgeContext) => ctx.streak;
const revisionDays = (ctx: BadgeContext) => ctx.activityDays.length;

export const BADGES: BadgeDef[] = [
  // Lectures
  countBadge("lectures-1", "Front Row", "lectures", 1, 1, "Read a lecture", lecturesRead),
  countBadge("lectures-10", "Note Hoarder", "lectures", 2, 10, "Read 10 lectures", lecturesRead),
  countBadge("lectures-25", "Lecture Hall Regular", "lectures", 3, 25, "Read 25 lectures", lecturesRead),
  countBadge("lectures-50", "Walking Textbook", "lectures", 4, 50, "Read 50 lectures", lecturesRead),
  { id: "lectures-all", name: "Perfect Attendance", family: "lectures", step: 5,
    rule: "Read every lecture in a course", earned: (ctx) => anyCourse(ctx, (c) => c.allLecturesRead) },
  // Practice
  countBadge("practice-10", "Pencil Sharpened", "practice", 1, 10, "Attempt 10 questions", questionsAttempted),
  countBadge("practice-50", "Problem Solver", "practice", 2, 50, "Attempt 50 questions", questionsAttempted),
  countBadge("practice-100", "The Grind", "practice", 3, 100, "Attempt 100 questions", questionsAttempted),
  countBadge("practice-250", "Question Bank Raider", "practice", 4, 250, "Attempt 250 questions", questionsAttempted),
  countBadge("practice-500", "Answer Key Who?", "practice", 5, 500, "Attempt 500 questions", questionsAttempted),
  // Past papers
  { id: "papers-first", name: "First Sitting", family: "papers", step: 1,
    rule: "Mark every question on a past paper", earned: (ctx) => anyCourse(ctx, (c) => c.papersSat > 0) },
  { id: "papers-clean", name: "First-Class Honours", family: "papers", step: 2,
    rule: "Get every question on a past paper right", earned: (ctx) => anyCourse(ctx, (c) => c.cleanPapers > 0) },
  { id: "papers-all", name: "Exam Hall Veteran", family: "papers", step: 3,
    rule: "Sit every past paper in a course", earned: (ctx) => anyCourse(ctx, (c) => c.allPapersSat) },
  // Coverage
  countBadge("coverage-25", "Skimmed the Syllabus", "coverage", 1, 25, "Get a course to 25%", bestPercent),
  countBadge("coverage-50", "Halfway There", "coverage", 2, 50, "Get a course to 50%", bestPercent),
  countBadge("coverage-100", "Course Conquered", "coverage", 3, 100, "Get a course to 100%", bestPercent),
  { id: "coverage-sweep", name: "Semester Sweep", family: "coverage", step: 4,
    rule: "Mark something in every course of a semester",
    earned: (ctx) => semesterMarks(ctx).some((marks) => marks.every(Boolean)) },
  // Breadth
  countBadge("breadth-3", "Interdisciplinary", "breadth", 1, 3, "Mark something in 3 courses", coursesMarked),
  countBadge("breadth-5", "Polymath", "breadth", 2, 5, "Mark something in 5 courses", coursesMarked),
  countBadge("breadth-10", "Renaissance Student", "breadth", 3, 10, "Mark something in 10 courses", coursesMarked),
  { id: "breadth-tour", name: "Two-Year Tour", family: "breadth", step: 4,
    rule: "Mark something in every semester",
    earned: (ctx) => {
      const semesters = semesterMarks(ctx);
      return semesters.length > 0 && semesters.every((marks) => marks.some(Boolean));
    } },
  // Habit
  countBadge("habit-3", "Showed Up", "habit", 1, 3, "A 3-day streak", streak),
  countBadge("habit-7", "Study Week", "habit", 2, 7, "A 7-day streak", streak),
  countBadge("habit-14", "Library Card", "habit", 3, 14, "A 14-day streak", streak),
  countBadge("habit-30", "Tenure Track", "habit", 4, 30, "A 30-day streak", streak),
  { id: "habit-week", name: "Seven-Day Scholar", family: "habit", step: 5,
    rule: "Revise on all seven days of a week", earned: (ctx) => hasFullWeek(ctx.activityDays) },
  countBadge("habit-50", "Part of the Furniture", "habit", 6, 50, "50 revision days", revisionDays),
  // Keepsakes (earned live only)
  { id: "keepsake-early", name: "8am Lecture Survivor", family: "keepsakes", step: 1, rule: "Revise before 8am" },
  { id: "keepsake-night", name: "Library Goblin", family: "keepsakes", step: 2, rule: "Revise after 11pm" },
];

export function earnedBadgeIds(ctx: BadgeContext): string[] {
  return BADGES.filter((b) => b.earned?.(ctx)).map((b) => b.id);
}

/** Keepsakes earned by a mark made at this local hour (0–23). */
export function keepsakesAt(hour: number): string[] {
  if (hour < 8) return ["keepsake-early"];
  if (hour >= 23) return ["keepsake-night"];
  return [];
}

export const RANKS = [
  { at: 0, name: "Fresher" },
  { at: 3, name: "Undergrad" },
  { at: 8, name: "Honours Student" },
  { at: 13, name: "Teaching Assistant" },
  { at: 18, name: "PhD Candidate" },
  { at: 23, name: "Post-doc" },
  { at: 27, name: "Professor" },
  { at: BADGES.length, name: "Professor Emeritus (allegedly)" },
];

export function rankFor(earnedCount: number) {
  const index = RANKS.findLastIndex((r) => earnedCount >= r.at);
  const next = RANKS[index + 1];
  return { current: RANKS[index], next: next ? { name: next.name, at: next.at } : undefined };
}
