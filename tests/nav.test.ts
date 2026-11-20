import { describe, expect, it } from "vitest";
import { activeSection, visibleSections } from "../src/lib/nav";

describe("activeSection", () => {
  it("maps the pathname to a nav section", () => {
    expect(activeSection("/")).toBe("home");
    expect(activeSection("/courses")).toBe("courses");
    expect(activeSection("/courses/")).toBe("courses");
    expect(activeSection("/subjects/micro/lectures")).toBe("courses");
    expect(activeSection("/progress")).toBe("progress");
    expect(activeSection("/profile")).toBe("you");
  });
  it("returns undefined for pages outside the sections", () => {
    expect(activeSection("/nowhere")).toBeUndefined();
  });
});

describe("visibleSections", () => {
  it("shows Home and Courses only while progress UI is off", () => {
    expect(visibleSections(false).map((s) => s.id)).toEqual(["home", "courses"]);
  });
  it("shows all four when progress UI is on", () => {
    expect(visibleSections(true).map((s) => s.id)).toEqual(["home", "courses", "progress", "you"]);
  });
});
