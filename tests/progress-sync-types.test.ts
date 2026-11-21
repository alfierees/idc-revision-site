import { describe, expect, it } from "vitest";
import { MAX_BATCH, SyncBatch, parseBatch } from "../src/lib/progress/sync-types";

const ok = (item: unknown) => SyncBatch.safeParse({ items: [item] }).success;
const time = "2026-11-21T10:00:00.000Z";

describe("sync batch schema", () => {
  it("accepts each item type", () => {
    expect(SyncBatch.safeParse({ items: [
      { type: "mark", mark: { subject: "micro", kind: "lecture", ref: "l1", itemId: "", value: "read", updatedAt: time } },
      { type: "mark", mark: { subject: "micro-ii", kind: "past-paper", ref: "pp-01", itemId: "q1", value: "done", updatedAt: time } },
      { type: "day", day: "2026-11-21" },
      { type: "badge", badgeId: "lectures-1", earnedOn: "2026-11-21" },
      { type: "seen", subject: "micro", path: "/subjects/micro/lectures/l1", title: "Lecture 1", seenAt: time },
    ] }).success).toBe(true);
  });
  it("rejects bad values, foreign paths, bad dates and oversized batches", () => {
    expect(ok({ type: "mark", mark: { subject: "micro", kind: "lecture", ref: "l1", itemId: "", value: "hacked", updatedAt: time } })).toBe(false);
    expect(ok({ type: "mark", mark: { subject: "../x", kind: "lecture", ref: "l1", itemId: "", value: "read", updatedAt: time } })).toBe(false);
    expect(ok({ type: "seen", subject: "micro", path: "https://evil.example", title: "x", seenAt: time })).toBe(false);
    expect(ok({ type: "seen", subject: "micro", path: "//evil.example/x", title: "x", seenAt: time })).toBe(false);
    expect(ok({ type: "day", day: "21/11/2026" })).toBe(false);
    expect(ok({ type: "nope" })).toBe(false);
    const day = { type: "day", day: "2026-11-21" };
    expect(SyncBatch.safeParse({ items: Array(MAX_BATCH).fill(day) }).success).toBe(true);
    expect(SyncBatch.safeParse({ items: Array(MAX_BATCH + 1).fill(day) }).success).toBe(false);
  });
});

describe("parseBatch", () => {
  it("keeps the valid items and counts the rest instead of failing the batch", () => {
    const result = parseBatch({ items: [{ type: "day", day: "2026-11-21" }, { type: "day", day: "nope" }, { type: "x" }] });
    expect(result).toEqual({ items: [{ type: "day", day: "2026-11-21" }], rejected: 2 });
  });
  it("rejects a body that isn't a batch, or one over the limit", () => {
    expect(parseBatch(null)).toBeNull();
    expect(parseBatch({ items: "x" })).toBeNull();
    expect(parseBatch({ items: Array(MAX_BATCH + 1).fill({ type: "day", day: "2026-11-21" }) })).toBeNull();
  });
});
