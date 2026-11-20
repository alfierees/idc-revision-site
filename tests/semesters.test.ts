import { describe, expect, it } from "vitest";
import { SEMESTERS, semesterId, isSemesterId, groupBySemester, countsLine } from "../src/lib/semesters";

const course = (slug: string, title: string, year: 1 | 2, semester: 1 | 2, placeholder = false) => ({
  slug,
  title,
  year,
  semester,
  placeholder,
});

describe("SEMESTERS", () => {
  it("lists the four semesters of Years 1 and 2 in order", () => {
    expect(SEMESTERS.map((s) => s.id)).toEqual(["y1s1", "y1s2", "y2s1", "y2s2"]);
    expect(SEMESTERS[2].label).toBe("Year 2 · Semester 1");
    expect(SEMESTERS[2].short).toBe("Y2 S1");
  });
});

describe("semesterId / isSemesterId", () => {
  it("builds and recognises ids", () => {
    expect(semesterId(1, 2)).toBe("y1s2");
    expect(isSemesterId("y2s2")).toBe(true);
    expect(isSemesterId("y3s1")).toBe(false);
    expect(isSemesterId(null)).toBe(false);
  });
});

describe("groupBySemester", () => {
  const subjects = [
    course("micro", "Micro-Economics", 2, 2),
    course("accounting", "Accounting", 2, 2),
    course("micro-ii", "Micro-Economics II", 2, 1),
    course("statistics-a", "Statistics A", 1, 1, true),
  ];

  it("keeps every semester, even empty ones", () => {
    const groups = groupBySemester(subjects);
    expect(groups.map((g) => g.semester.id)).toEqual(["y1s1", "y1s2", "y2s1", "y2s2"]);
    expect(groups[1].live).toEqual([]);
    expect(groups[1].coming).toEqual([]);
  });

  it("splits live and coming-soon courses, sorted by title", () => {
    const groups = groupBySemester(subjects);
    expect(groups[3].live.map((s) => s.slug)).toEqual(["accounting", "micro"]);
    expect(groups[0].live).toEqual([]);
    expect(groups[0].coming.map((s) => s.slug)).toEqual(["statistics-a"]);
    expect(groups[2].live.map((s) => s.slug)).toEqual(["micro-ii"]);
  });
});

describe("countsLine", () => {
  it("joins non-zero counts with plurals", () => {
    expect(countsLine({ lectures: 3, problemSets: 0, pastPapers: 8 })).toBe("3 lectures · 8 past papers");
    expect(countsLine({ lectures: 1, problemSets: 1, pastPapers: 1 })).toBe("1 lecture · 1 problem set · 1 past paper");
  });

  it("is empty when there is nothing", () => {
    expect(countsLine({ lectures: 0, problemSets: 0, pastPapers: 0 })).toBe("");
  });
});
