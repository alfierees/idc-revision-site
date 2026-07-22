import { describe, it, expect, beforeEach, vi } from "vitest";
import { statusKey, readStatus, writeStatus, cycleStatus, summarizeStatuses, type StatusValue } from "../src/lib/status";

class MemStorage {
  store = new Map<string, string>();
  getItem(k: string) { return this.store.get(k) ?? null; }
  setItem(k: string, v: string) { this.store.set(k, v); }
  removeItem(k: string) { this.store.delete(k); }
  clear() { this.store.clear(); }
  key() { return null; }
  get length() { return this.store.size; }
}

beforeEach(() => {
  vi.stubGlobal("localStorage", new MemStorage());
});

describe("statusKey", () => {
  it("composes a stable key", () => {
    expect(statusKey("econometrics", "past-paper", "2023-exam", "Q1b"))
      .toBe("idc-revision:econometrics:past-paper:2023-exam:Q1b");
  });
});

describe("read/write/cycle", () => {
  const key = "idc-revision:econometrics:past-paper:2023-exam:Q1b";

  it("readStatus returns untried by default", () => {
    expect(readStatus(key)).toBe<StatusValue>("untried");
  });
  it("writeStatus persists and reads back", () => {
    writeStatus(key, "wrong");
    expect(readStatus(key)).toBe<StatusValue>("wrong");
  });
  it("cycleStatus walks untried → done → wrong → skipped → untried", () => {
    expect(cycleStatus(key)).toBe<StatusValue>("done");
    expect(cycleStatus(key)).toBe<StatusValue>("wrong");
    expect(cycleStatus(key)).toBe<StatusValue>("skipped");
    expect(cycleStatus(key)).toBe<StatusValue>("untried");
  });
});

describe("summarizeStatuses", () => {
  it("reports progress and withholds the score while questions remain untried", () => {
    const s = summarizeStatuses(["done", "wrong", "untried", "untried"]);
    expect(s.answered).toBe(2);
    expect(s.total).toBe(4);
    expect(s.complete).toBe(false);
  });

  it("computes correct/graded and a percentage once complete", () => {
    // 6 done, 1 wrong, 1 skipped → graded 7, pct 6/7 ≈ 86
    const s = summarizeStatuses([
      "done", "done", "done", "done", "done", "done", "wrong", "skipped",
    ]);
    expect(s.complete).toBe(true);
    expect(s.correct).toBe(6);
    expect(s.missed).toBe(1);
    expect(s.skipped).toBe(1);
    expect(s.graded).toBe(7);
    expect(s.pct).toBe(86);
  });

  it("excludes skips from the percentage denominator", () => {
    // Two answered correctly, two skipped → 100%, not 50%.
    const s = summarizeStatuses(["done", "done", "skipped", "skipped"]);
    expect(s.pct).toBe(100);
    expect(s.complete).toBe(true);
  });

  it("returns a null percentage when everything was skipped", () => {
    const s = summarizeStatuses(["skipped", "skipped"]);
    expect(s.graded).toBe(0);
    expect(s.pct).toBeNull();
    expect(s.complete).toBe(true);
  });

  it("treats an empty paper as not complete", () => {
    const s = summarizeStatuses([]);
    expect(s.total).toBe(0);
    expect(s.complete).toBe(false);
    expect(s.pct).toBeNull();
  });
});
