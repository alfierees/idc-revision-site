import { describe, expect, it } from "vitest";
import { BADGES, earnedBadgeIds, keepsakesAt, RANKS, rankFor, type BadgeContext } from "../src/lib/progress/badges";
import type { CourseProgress } from "../src/lib/progress/coverage";

const blankCourse = (slug: string, year: 1 | 2, semester: 1 | 2): CourseProgress => ({
  slug, year, semester, attempted: 0, questions: 10, lecturesRead: 0, lectures: 4, percent: 0,
  hasMark: false, papersSat: 0, cleanPapers: 0, allPapersSat: false, allLecturesRead: false,
});

function context(overrides: Partial<BadgeContext> = {}): BadgeContext {
  const courses = [blankCourse("micro", 2, 2), blankCourse("micro-ii", 2, 1)];
  return {
    degree: { courses, questionsAttempted: 0, lecturesRead: 0, coursesMarked: 0 },
    streak: 0,
    activityDays: [],
    ...overrides,
  };
}

describe("catalogue", () => {
  it("has 29 badges with unique ids", () => {
    expect(BADGES).toHaveLength(29);
    expect(new Set(BADGES.map((b) => b.id)).size).toBe(29);
  });
});

describe("earnedBadgeIds", () => {
  it("earns nothing from nothing", () => {
    expect(earnedBadgeIds(context())).toEqual([]);
  });

  it("follows the practice ladder", () => {
    const ctx = context({ degree: { ...context().degree, questionsAttempted: 100 } });
    expect(earnedBadgeIds(ctx)).toEqual(expect.arrayContaining(["practice-10", "practice-50", "practice-100"]));
    expect(earnedBadgeIds(ctx)).not.toContain("practice-250");
  });

  it("needs two or more live courses in a semester for Semester Sweep", () => {
    const base = context();
    // micro (Y2 S2) and micro-ii (Y2 S1) each sit alone in their semester
    const allMarked = { ...base.degree, courses: base.degree.courses.map((c) => ({ ...c, hasMark: true })) };
    expect(earnedBadgeIds(context({ degree: allMarked }))).not.toContain("coverage-sweep");
    const twoInOne = {
      ...base.degree,
      courses: [...allMarked.courses, { ...blankCourse("macro", 2, 2), hasMark: true }],
    };
    expect(earnedBadgeIds(context({ degree: twoInOne }))).toContain("coverage-sweep");
    const oneUnmarked = { ...twoInOne, courses: [...allMarked.courses, blankCourse("macro", 2, 2)] };
    expect(earnedBadgeIds(context({ degree: oneUnmarked }))).not.toContain("coverage-sweep");
  });

  it("earns Two-Year Tour only with a mark in every semester that has courses", () => {
    const base = context();
    const oneMarked = { ...base.degree, courses: [{ ...base.degree.courses[0], hasMark: true }, base.degree.courses[1]] };
    expect(earnedBadgeIds(context({ degree: oneMarked }))).not.toContain("breadth-tour");
    const bothMarked = { ...base.degree, courses: base.degree.courses.map((c) => ({ ...c, hasMark: true })) };
    expect(earnedBadgeIds(context({ degree: bothMarked }))).toContain("breadth-tour");
  });

  it("never awards keepsakes from counts", () => {
    expect(earnedBadgeIds(context({ streak: 30 }))).not.toContain("keepsake-early");
  });
});

describe("keepsakesAt", () => {
  it("uses the local hour", () => {
    expect(keepsakesAt(7)).toEqual(["keepsake-early"]);
    expect(keepsakesAt(8)).toEqual([]);
    expect(keepsakesAt(22)).toEqual([]);
    expect(keepsakesAt(23)).toEqual(["keepsake-night"]);
  });
});

describe("rankFor", () => {
  it("climbs at the thresholds", () => {
    expect(rankFor(0).current.name).toBe("Fresher");
    expect(rankFor(2).next).toEqual({ name: "Undergrad", at: 3 });
    expect(rankFor(3).current.name).toBe("Undergrad");
    expect(rankFor(27).current.name).toBe("Professor");
    expect(rankFor(29).current.name).toBe("Professor Emeritus (allegedly)");
    expect(rankFor(29).next).toBeUndefined();
  });
  it("tops out at the full catalogue", () => {
    expect(RANKS[RANKS.length - 1].at).toBe(BADGES.length);
  });
});
