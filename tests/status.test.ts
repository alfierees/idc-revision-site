import { describe, it, expect, beforeEach, vi } from "vitest";
import { statusKey, readStatus, writeStatus, cycleStatus, type StatusValue } from "../src/lib/status";

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
