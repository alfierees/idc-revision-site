import { describe, expect, it } from "vitest";
import { keysBySubject, missingKeys } from "../src/lib/progress/id-guard";
import type { ProgressTotals } from "../src/lib/progress/types";

const totals: ProgressTotals = {
  courses: [{
    slug: "micro", title: "Micro", year: 2, semester: 2,
    lectures: ["l1"], problemSets: { "ps-1": ["1", "2"] }, pastPapers: { "pp-01": ["q1"] },
  }],
};

describe("id guard", () => {
  it("lists every progress key per subject, sorted, in the same shape the pages store", () => {
    expect(keysBySubject(totals)).toEqual({
      micro: ["micro:lecture:l1", "micro:past-paper:pp-01:q1", "micro:problem-set:ps-1:1", "micro:problem-set:ps-1:2"],
    });
  });
  it("reports known keys that disappeared and are not aliased", () => {
    const known = ["micro:problem-set:ps-1:1", "micro:problem-set:ps-1:3", "micro:problem-set:ps-1:4"];
    const aliases = { subjects: {}, keys: { "micro:problem-set:ps-1:4": "micro:problem-set:ps-1:2" } };
    expect(missingKeys(known, keysBySubject(totals).micro, aliases)).toEqual(["micro:problem-set:ps-1:3"]);
  });
  it("accepts a whole-subject rename through a subject alias", () => {
    const renamed: ProgressTotals = { courses: [{ ...totals.courses[0], slug: "micro-i" }] };
    const aliases = { subjects: { micro: "micro-i" }, keys: {} };
    expect(missingKeys(["micro:problem-set:ps-1:1"], keysBySubject(renamed)["micro-i"], aliases)).toEqual([]);
  });
  it("still fails when an alias points at a key that does not exist either", () => {
    const aliases = { subjects: {}, keys: { "micro:lecture:old": "micro:lecture:typo" } };
    expect(missingKeys(["micro:lecture:old"], keysBySubject(totals).micro, aliases)).toEqual(["micro:lecture:old"]);
  });
});
