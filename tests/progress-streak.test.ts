import { describe, expect, it } from "vitest";
import { addDays, weekStart, localDay } from "../src/lib/progress/days";
import { gentleStreak, hasFullWeek, calendarWeeks } from "../src/lib/progress/streak";

describe("days", () => {
  it("adds days across month ends", () => {
    expect(addDays("2026-11-30", 1)).toBe("2026-12-01");
    expect(addDays("2026-03-01", -1)).toBe("2026-02-28");
  });
  it("finds the Monday of a week", () => {
    expect(weekStart("2026-11-20")).toBe("2026-11-16"); // Friday → Monday
    expect(weekStart("2026-11-16")).toBe("2026-11-16");
    expect(weekStart("2026-11-22")).toBe("2026-11-16"); // Sunday belongs to the week before
  });
  it("formats a local date", () => {
    expect(localDay(new Date(2026, 0, 5, 23, 30))).toBe("2026-01-05");
  });
});

describe("gentleStreak", () => {
  const today = "2026-11-20"; // Friday
  it("is 0 with no activity", () => {
    expect(gentleStreak([], today)).toBe(0);
  });
  it("counts consecutive days", () => {
    expect(gentleStreak(["2026-11-18", "2026-11-19", "2026-11-20"], today)).toBe(3);
  });
  it("doesn't break just because today isn't done yet", () => {
    expect(gentleStreak(["2026-11-18", "2026-11-19"], today)).toBe(2);
  });
  it("forgives one missed day per week", () => {
    // Wed 18 missed, Mon 16 to Fri 20 otherwise
    expect(gentleStreak(["2026-11-16", "2026-11-17", "2026-11-19", "2026-11-20"], today)).toBe(4);
  });
  it("ends on a second miss in the same week", () => {
    expect(gentleStreak(["2026-11-16", "2026-11-19", "2026-11-20"], today)).toBe(2);
  });
  it("stops at the first ever revision day", () => {
    expect(gentleStreak(["2026-11-20"], today)).toBe(1);
  });
});

describe("hasFullWeek", () => {
  it("needs all seven days Monday to Sunday", () => {
    const week = ["16", "17", "18", "19", "20", "21", "22"].map((d) => `2026-11-${d}`);
    expect(hasFullWeek(week)).toBe(true);
    expect(hasFullWeek(week.slice(1))).toBe(false);
    expect(hasFullWeek(["2026-11-17", "2026-11-18", "2026-11-19", "2026-11-20", "2026-11-21", "2026-11-22", "2026-11-23"])).toBe(false);
  });
});

describe("calendarWeeks", () => {
  it("returns 12 Monday-start columns ending with this week", () => {
    const weeks = calendarWeeks("2026-11-20", 12);
    expect(weeks).toHaveLength(12);
    expect(weeks[11][0]).toBe("2026-11-16");
    expect(weeks[11][6]).toBe("2026-11-22");
    expect(weeks[0][0]).toBe("2026-08-31");
  });
});
