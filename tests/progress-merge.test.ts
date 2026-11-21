import { describe, expect, it } from "vitest";
import { LEGACY_STAMP, isNewer, stampToIso } from "../src/lib/progress/marks";
import { mergeBadges, mergeDays, pickNewer } from "../src/lib/progress/merge";

const mark = (value: string, updatedAt: string) =>
  ({ subject: "s", kind: "problem-set" as const, ref: "r", itemId: "1", value, updatedAt });

describe("merge rules", () => {
  it("newest change wins; ties keep the current value", () => {
    expect(pickNewer(mark("done", "2026-11-01T00:00:00Z"), mark("wrong", "2026-11-02T00:00:00Z")).value).toBe("wrong");
    expect(pickNewer(mark("done", "2026-11-02T00:00:00Z"), mark("wrong", "2026-11-02T00:00:00Z")).value).toBe("done");
    expect(pickNewer(mark("wrong", "2026-11-02T00:00:00Z"), mark("done", "2026-11-01T00:00:00Z")).value).toBe("wrong");
  });
  it("legacy undated marks lose to any dated mark, including a clear", () => {
    expect(pickNewer(mark("done", LEGACY_STAMP), mark("untried", "2026-11-02T00:00:00Z")).value).toBe("untried");
  });
  it("unions days, sorted", () => {
    expect(mergeDays(["2026-11-03", "2026-11-01"], ["2026-11-02", "2026-11-03"])).toEqual(["2026-11-01", "2026-11-02", "2026-11-03"]);
  });
  it("unions badges keeping the earliest date (never un-earned)", () => {
    expect(mergeBadges({ a: "2026-11-05", c: "2026-11-09" }, { a: "2026-11-01", b: "2026-11-02" }))
      .toEqual({ a: "2026-11-01", b: "2026-11-02", c: "2026-11-09" });
  });
});

describe("timestamps", () => {
  it("compares ISO times by instant, not by text", () => {
    expect(isNewer("2026-11-02T00:00:00+02:00", "2026-11-01T23:00:00Z")).toBe(false);
    expect(isNewer("2026-11-02T00:00:00.001Z", "2026-11-02T00:00:00Z")).toBe(true);
  });
  it("turns the store's ms stamps into ISO, and missing ones into the legacy stamp", () => {
    expect(stampToIso(Date.UTC(2026, 10, 20, 12))).toBe("2026-11-20T12:00:00.000Z");
    expect(stampToIso(undefined)).toBe(LEGACY_STAMP);
  });
});
