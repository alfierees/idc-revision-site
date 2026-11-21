// The sections inside a course, in study order: exam end first.

export type CourseSectionId = "overview" | "past-papers" | "problem-sets" | "lectures" | "dictionary" | "exam-prep" | "recipes";

export interface CourseContentCounts {
  pastPapers: number;
  problemSets: number;
  lectures: number;
  dictionary: number;
  examPrep: number;
  recipes: number;
}

export interface CourseSection {
  id: CourseSectionId;
  label: string;
  /** Set on the sections that get a slot in the phone course bar. */
  shortLabel?: string;
  /** Drawn indented under the section before it in the rail. */
  nested?: boolean;
}

const COURSE_SECTIONS: { section: CourseSection; contentCount: (counts: CourseContentCounts) => number }[] = [
  { section: { id: "overview", label: "Overview", shortLabel: "Overview" }, contentCount: () => 1 },
  { section: { id: "past-papers", label: "Past papers", shortLabel: "Papers" }, contentCount: (counts) => counts.pastPapers },
  { section: { id: "problem-sets", label: "Problem sets", shortLabel: "Sets" }, contentCount: (counts) => counts.problemSets },
  { section: { id: "lectures", label: "Lectures", shortLabel: "Notes" }, contentCount: (counts) => counts.lectures },
  { section: { id: "dictionary", label: "Dictionary", shortLabel: "Terms" }, contentCount: (counts) => counts.dictionary },
  { section: { id: "exam-prep", label: "Exam prep" }, contentCount: (counts) => counts.examPrep },
  { section: { id: "recipes", label: "Recipes", nested: true }, contentCount: (counts) => counts.recipes },
];

export function availableSections(counts: CourseContentCounts): CourseSection[] {
  return COURSE_SECTIONS.filter((entry) => entry.contentCount(counts) > 0).map((entry) => entry.section);
}

export function courseSectionHref(subject: string, sectionId: CourseSectionId): string {
  return sectionId === "overview" ? `/subjects/${subject}/` : `/subjects/${subject}/${sectionId}`;
}

/** Switching course keeps you on the same section when the other course has it. */
export function switchCourseHref(subject: string, counts: CourseContentCounts, sectionId: CourseSectionId): string {
  const hasSection = availableSections(counts).some((section) => section.id === sectionId);
  return courseSectionHref(subject, hasSection ? sectionId : "overview");
}
