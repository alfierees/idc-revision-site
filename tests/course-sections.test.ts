import { describe, expect, it } from "vitest";
import { availableSections, courseSectionHref, switchCourseHref, type CourseContentCounts } from "../src/lib/course-sections";

const fullCourse: CourseContentCounts = { pastPapers: 3, problemSets: 4, lectures: 10, dictionary: 50, examPrep: 2, recipes: 5 };

describe("availableSections", () => {
  it("lists sections in study order", () => {
    expect(availableSections(fullCourse).map((section) => section.id)).toEqual([
      "overview", "past-papers", "problem-sets", "lectures", "dictionary", "exam-prep", "recipes",
    ]);
  });
  it("hides sections with no content but always keeps Overview", () => {
    const noSets = { ...fullCourse, problemSets: 0, examPrep: 0, recipes: 0 };
    expect(availableSections(noSets).map((section) => section.id)).toEqual(["overview", "past-papers", "lectures", "dictionary"]);
  });
  it("marks the five phone slots with short labels", () => {
    const phoneSlots = availableSections(fullCourse).filter((section) => section.shortLabel);
    expect(phoneSlots.map((section) => section.shortLabel)).toEqual(["Overview", "Papers", "Sets", "Notes", "Terms"]);
  });
});

describe("hrefs", () => {
  it("points Overview at the course root", () => {
    expect(courseSectionHref("micro", "overview")).toBe("/subjects/micro/");
    expect(courseSectionHref("micro", "past-papers")).toBe("/subjects/micro/past-papers");
  });
  it("keeps your section when switching course, else goes to Overview", () => {
    expect(switchCourseHref("macro-ii", fullCourse, "lectures")).toBe("/subjects/macro-ii/lectures");
    expect(switchCourseHref("macro-ii", { ...fullCourse, problemSets: 0 }, "problem-sets")).toBe("/subjects/macro-ii/");
  });
});
