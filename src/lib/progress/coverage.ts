import type { CourseTotals, ProgressSnapshot, ProgressTotals } from "./types";

export interface CourseProgress {
  slug: string;
  year: 1 | 2;
  semester: 1 | 2;
  attempted: number; // done + wrong
  questions: number;
  lecturesRead: number;
  lectures: number;
  percent: number; // 0–100, whole number
  hasMark: boolean; // any status (incl. skipped) or any lecture read
  papersSat: number; // papers with every gradable question marked
  cleanPapers: number; // papers with every gradable question done
  allPapersSat: boolean; // false when the course has no gradable papers
  allLecturesRead: boolean; // false when the course has no lectures
}

export function courseProgress(course: CourseTotals, snap: ProgressSnapshot): CourseProgress {
  let attempted = 0;
  let questions = 0;
  let anyStatus = false;
  for (const [ref, ids] of Object.entries(course.problemSets)) {
    for (const id of ids) {
      const value = snap.status(course.slug, "problem-set", ref, id);
      questions += 1;
      if (value === "done" || value === "wrong") attempted += 1;
      if (value !== "untried") anyStatus = true;
    }
  }
  let papersSat = 0;
  let cleanPapers = 0;
  for (const [ref, ids] of Object.entries(course.pastPapers)) {
    const values = ids.map((id) => snap.status(course.slug, "past-paper", ref, id));
    questions += values.length;
    attempted += values.filter((v) => v === "done" || v === "wrong").length;
    if (values.some((v) => v !== "untried")) anyStatus = true;
    if (values.every((v) => v !== "untried")) papersSat += 1;
    if (values.every((v) => v === "done")) cleanPapers += 1;
  }
  const lecturesRead = course.lectures.filter((l) => snap.lectureRead(course.slug, l)).length;
  const paperCount = Object.keys(course.pastPapers).length;
  const total = questions + course.lectures.length;
  return {
    slug: course.slug,
    year: course.year,
    semester: course.semester,
    attempted,
    questions,
    lecturesRead,
    lectures: course.lectures.length,
    percent: total === 0 ? 0 : Math.round((100 * (attempted + lecturesRead)) / total),
    hasMark: anyStatus || lecturesRead > 0,
    papersSat,
    cleanPapers,
    allPapersSat: paperCount > 0 && papersSat === paperCount,
    allLecturesRead: course.lectures.length > 0 && lecturesRead === course.lectures.length,
  };
}

export interface DegreeProgress {
  courses: CourseProgress[];
  questionsAttempted: number;
  lecturesRead: number;
  coursesMarked: number;
}

export function degreeProgress(totals: ProgressTotals, snap: ProgressSnapshot): DegreeProgress {
  const courses = totals.courses.map((c) => courseProgress(c, snap));
  return {
    courses,
    questionsAttempted: courses.reduce((sum, c) => sum + c.attempted, 0),
    lecturesRead: courses.reduce((sum, c) => sum + c.lecturesRead, 0),
    coursesMarked: courses.filter((c) => c.hasMark).length,
  };
}
