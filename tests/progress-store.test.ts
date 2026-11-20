import { describe, expect, it } from "vitest";
import { createProgressStore, type KeyValueStore } from "../src/lib/progress/store";

function memoryStorage(): KeyValueStore {
  const map = new Map<string, string>();
  return {
    getItem: (k) => map.get(k) ?? null,
    setItem: (k, v) => void map.set(k, v),
    removeItem: (k) => void map.delete(k),
    key: (i) => [...map.keys()][i] ?? null,
    get length() { return map.size; },
  };
}

describe("progress store", () => {
  it("reads and writes lecture-read flags", () => {
    const store = createProgressStore(memoryStorage());
    expect(store.lectureRead("micro", "l1")).toBe(false);
    store.setLectureRead("micro", "l1", true);
    expect(store.lectureRead("micro", "l1")).toBe(true);
    store.setLectureRead("micro", "l1", false);
    expect(store.lectureRead("micro", "l1")).toBe(false);
  });

  it("records each revision day once, sorted", () => {
    const store = createProgressStore(memoryStorage());
    store.recordActivity("2026-11-20");
    store.recordActivity("2026-11-19");
    store.recordActivity("2026-11-20");
    expect(store.activityDays()).toEqual(["2026-11-19", "2026-11-20"]);
  });

  it("only ever adds to the ledger", () => {
    const store = createProgressStore(memoryStorage());
    store.addToLedger(["practice-10"], "2026-11-20");
    store.addToLedger(["practice-10", "lectures-1"], "2026-11-21");
    expect(store.ledger()).toEqual({ "practice-10": "2026-11-20", "lectures-1": "2026-11-21" });
  });

  it("survives corrupt JSON", () => {
    const storage = memoryStorage();
    storage.setItem("idc-revision:activity", "{oops");
    storage.setItem("idc-revision:badges", "[]");
    const store = createProgressStore(storage);
    expect(store.activityDays()).toEqual([]);
    expect(store.ledger()).toEqual({});
  });

  it("exposes a snapshot over existing status keys", () => {
    const storage = memoryStorage();
    storage.setItem("idc-revision:micro:problem-set:ps-1:1", "done");
    const snap = createProgressStore(storage).snapshot();
    expect(snap.status("micro", "problem-set", "ps-1", "1")).toBe("done");
    expect(snap.status("micro", "problem-set", "ps-1", "2")).toBe("untried");
  });

  it("stamps every status write and lecture change, including clears", () => {
    let clock = 1000;
    const store = createProgressStore(memoryStorage(), () => clock);
    store.writeStatusRaw("idc-revision:micro:problem-set:ps-1:1", "done");
    clock = 2000;
    store.setLectureRead("micro", "l1", true);
    clock = 3000;
    store.writeStatusRaw("idc-revision:micro:problem-set:ps-1:1", "untried");
    expect(store.stamps()).toEqual({
      "idc-revision:micro:problem-set:ps-1:1": 3000,
      "idc-revision:micro:lecture:l1": 2000,
    });
  });

  it("treats a corrupt stamp index as empty", () => {
    const storage = memoryStorage();
    storage.setItem("idc-revision:stamps", "[1,2]");
    expect(createProgressStore(storage).stamps()).toEqual({});
  });
});


describe("last seen", () => {
  it("keeps one entry per subject (the newest), newest first", () => {
    const store = createProgressStore(memoryStorage());
    store.recordLastSeen("micro", "/subjects/micro/lectures/a", "Lecture A", 1000);
    store.recordLastSeen("macro", "/subjects/macro/problem-sets/ps-1", "PS 1", 2000);
    store.recordLastSeen("micro", "/subjects/micro/problem-sets/ps-4", "PS 4", 3000);
    expect(store.lastSeen()).toEqual([
      { subject: "micro", path: "/subjects/micro/problem-sets/ps-4", title: "PS 4", at: 3000 },
      { subject: "macro", path: "/subjects/macro/problem-sets/ps-1", title: "PS 1", at: 2000 },
    ]);
  });

  it("gives an empty list for corrupt JSON", () => {
    const storage = memoryStorage();
    storage.setItem("idc-revision:last-seen", "{not json");
    expect(createProgressStore(storage).lastSeen()).toEqual([]);
  });
});
