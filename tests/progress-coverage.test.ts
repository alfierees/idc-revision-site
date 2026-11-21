import { describe, expect, it } from "vitest";
import { courseProgress, degreeProgress, sectionProgress } from "../src/lib/progress/coverage";
import type { CourseTotals, ProgressSnapshot } from "../src/lib/progress/types";
import type { StatusValue } from "../src/lib/status";

const course: CourseTotals = {
  slug: "micro",
  title: "Micro",
  year: 2,
  semester: 2,
  lectures: ["l1", "l2"],
  problemSets: { "ps-1": ["1", "2"] },
  pastPapers: { "pp-1": ["a", "b"] },
};

function snapshot(statuses: Record<string, StatusValue>, read: string[] = []): ProgressSnapshot {
  return {
    status: (subject, kind, ref, id) => statuses[`${subject}:${kind}:${ref}:${id}`] ?? "untried",
    lectureRead: (subject, lecture) => read.includes(`${subject}:${lecture}`),
  };
}

describe("courseProgress", () => {
  it("is empty with nothing marked", () => {
    const p = courseProgress(course, snapshot({}));
    expect(p).toMatchObject({ attempted: 0, questions: 4, lecturesRead: 0, lectures: 2, percent: 0, hasMark: false });
  });

  it("counts done and wrong as attempted, skipped only as a mark", () => {
    const p = courseProgress(course, snapshot({ "micro:problem-set:ps-1:1": "done", "micro:problem-set:ps-1:2": "skipped" }));
    expect(p.attempted).toBe(1);
    expect(p.hasMark).toBe(true);
  });

  it("works out percent over questions and lectures", () => {
    const p = courseProgress(course, snapshot({ "micro:past-paper:pp-1:a": "wrong" }, ["micro:l1"]));
    expect(p.percent).toBe(33); // (1 + 1) / (4 + 2)
  });

  it("knows sat, clean and complete papers", () => {
    const sat = courseProgress(course, snapshot({ "micro:past-paper:pp-1:a": "done", "micro:past-paper:pp-1:b": "skipped" }));
    expect(sat.papersSat).toBe(1);
    expect(sat.cleanPapers).toBe(0);
    expect(sat.allPapersSat).toBe(true);
    const clean = courseProgress(course, snapshot({ "micro:past-paper:pp-1:a": "done", "micro:past-paper:pp-1:b": "done" }));
    expect(clean.cleanPapers).toBe(1);
  });

  it("never claims 'all' for a course with none", () => {
    const empty = { ...course, lectures: [], pastPapers: {} };
    const p = courseProgress(empty, snapshot({}));
    expect(p.allLecturesRead).toBe(false);
    expect(p.allPapersSat).toBe(false);
  });
});

describe("degreeProgress", () => {
  it("adds up across courses", () => {
    const other = { ...course, slug: "macro" };
    const d = degreeProgress({ courses: [course, other] }, snapshot({ "micro:problem-set:ps-1:1": "done" }, ["macro:l1"]));
    expect(d.questionsAttempted).toBe(1);
    expect(d.lecturesRead).toBe(1);
    expect(d.coursesMarked).toBe(2);
  });
});

describe("sectionProgress", () => {
  it("splits answered counts by section and ignores skips", () => {
    const progress = sectionProgress(course, snapshot({
      "micro:past-paper:pp-1:a": "done",
      "micro:past-paper:pp-1:b": "skipped",
      "micro:problem-set:ps-1:1": "wrong",
    }, ["micro:l1"]));
    expect(progress.pastPapers).toEqual({ answered: 1, total: 2 });
    expect(progress.problemSets).toEqual({ answered: 1, total: 2 });
    expect(progress.lectures).toEqual({ answered: 1, total: 2 });
    expect(progress.hasMark).toBe(true);
  });
  it("has no mark on a fresh course", () => {
    expect(sectionProgress(course, snapshot({})).hasMark).toBe(false);
  });
});
