import { describe, expect, it } from "vitest";
import { LEGACY_STAMP, keyToMark, markToKey } from "../src/lib/progress/marks";
import { createProgressStore, type KeyValueStore, type ProgressChange } from "../src/lib/progress/store";

function memoryStorage(): KeyValueStore & { map: Map<string, string> } {
  const map = new Map<string, string>();
  return {
    map, getItem: (k) => map.get(k) ?? null, setItem: (k, v) => void map.set(k, v),
    removeItem: (k) => void map.delete(k), key: (i) => [...map.keys()][i] ?? null, get length() { return map.size; },
  };
}
const T1 = Date.UTC(2026, 10, 1);
const T2 = Date.UTC(2026, 10, 2);
const T3 = Date.UTC(2026, 10, 3);
const iso = (ms: number) => new Date(ms).toISOString();
const remote = (value: string, ms: number) =>
  ({ subject: "micro", kind: "problem-set" as const, ref: "ps-1", itemId: "1", value, updatedAt: iso(ms) });
const KEY = "idc-revision:micro:problem-set:ps-1:1";

describe("mark keys", () => {
  it("round-trips question and lecture keys and ignores everything else", () => {
    expect(keyToMark(KEY, "done", T1)).toEqual({ ...remote("done", T1) });
    expect(keyToMark("idc-revision:micro:lecture:l1", "read", undefined))
      .toEqual({ subject: "micro", kind: "lecture", ref: "l1", itemId: "", value: "read", updatedAt: LEGACY_STAMP });
    expect(markToKey(remote("done", T1))).toBe(KEY);
    expect(markToKey({ subject: "micro", kind: "lecture", ref: "l1", itemId: "" })).toBe("idc-revision:micro:lecture:l1");
    for (const key of ["idc-revision:semester", "idc-revision:stamps", "idc-revision:micro:lecture:l1:extra", "idc-mc:micro:pp:q1", "other"]) {
      expect(keyToMark(key, "done", T1)).toBeNull();
    }
    expect(keyToMark(KEY, "banana", T1)).toBeNull();
  });
});

describe("store change events", () => {
  it("reports marks, lectures, new days, new badges and visits in sync-payload shape", () => {
    const changes: ProgressChange[] = [];
    const store = createProgressStore(memoryStorage(), () => T2, (change) => changes.push(change));
    store.writeStatusRaw(KEY, "done");
    store.writeStatusRaw(KEY, "untried");
    store.setLectureRead("micro", "l1", true);
    store.recordActivity("2026-11-02");
    store.recordActivity("2026-11-02");
    store.addToLedger(["lectures-1"], "2026-11-02");
    store.addToLedger(["lectures-1"], "2026-11-02");
    store.recordLastSeen("micro", "/subjects/micro/lectures/l1", "Lecture 1");
    expect(changes).toEqual([
      { type: "mark", mark: remote("done", T2) },
      { type: "mark", mark: remote("untried", T2) },
      { type: "mark", mark: { subject: "micro", kind: "lecture", ref: "l1", itemId: "", value: "read", updatedAt: iso(T2) } },
      { type: "day", day: "2026-11-02" },
      { type: "badge", badgeId: "lectures-1", earnedOn: "2026-11-02" },
      { type: "seen", subject: "micro", path: "/subjects/micro/lectures/l1", title: "Lecture 1", seenAt: iso(T2) },
    ]);
  });
});

describe("store sync helpers", () => {
  it("applies a newer remote mark silently and ignores an older one", () => {
    const changes: ProgressChange[] = [];
    const store = createProgressStore(memoryStorage(), () => T2, (change) => changes.push(change));
    store.writeStatusRaw(KEY, "done");
    changes.length = 0;
    expect(store.applyRemoteMark(remote("wrong", T1))).toBe(false);
    expect(store.readStatusRaw(KEY)).toBe("done");
    expect(store.applyRemoteMark(remote("wrong", T3))).toBe(true);
    expect(store.readStatusRaw(KEY)).toBe("wrong");
    expect(store.stamps()[KEY]).toBe(T3);
    expect(store.applyRemoteMark(remote("untried", T3 + 1))).toBe(true);
    expect(store.readStatusRaw(KEY)).toBe("untried");
    expect(changes).toEqual([]);
  });
  it("lets any dated remote mark replace an undated legacy one", () => {
    const storage = memoryStorage();
    storage.setItem(KEY, "done");
    const store = createProgressStore(storage);
    expect(store.applyRemoteMark(remote("wrong", T1))).toBe(true);
  });
  it("lists local marks, including clears that only survive as a timestamp", () => {
    const storage = memoryStorage();
    storage.setItem(KEY, "done");
    storage.setItem("idc-revision:micro:lecture:l1", "read");
    storage.setItem("idc-revision:semester", "y2s2");
    storage.setItem("idc-revision:stamps", JSON.stringify({ [KEY]: T1, "idc-revision:micro:problem-set:ps-1:2": T2 }));
    const marks = createProgressStore(storage).allMarks();
    expect(marks.map((m) => `${m.ref}:${m.itemId}:${m.value}:${m.updatedAt}`).sort()).toEqual([
      `l1::read:${LEGACY_STAMP}`, `ps-1:1:done:${iso(T1)}`, `ps-1:2:untried:${iso(T2)}`,
    ]);
  });
  it("merges remote days, badges and visits", () => {
    const store = createProgressStore(memoryStorage(), () => T2);
    store.recordActivity("2026-11-02");
    store.addToLedger(["a"], "2026-11-05");
    store.recordLastSeen("micro", "/subjects/micro/x", "X", T2);
    store.applyRemoteDays(["2026-11-01"]);
    store.applyRemoteBadges({ a: "2026-11-01", b: "2026-11-03" });
    store.applyRemoteSeen([
      { subject: "micro", path: "/subjects/micro/old", title: "Old", seenAt: iso(T1) },
      { subject: "macro", path: "/subjects/macro/y", title: "Y", seenAt: iso(T3) },
    ]);
    expect(store.activityDays()).toEqual(["2026-11-01", "2026-11-02"]);
    expect(store.ledger()).toEqual({ a: "2026-11-01", b: "2026-11-03" });
    expect(store.lastSeen().map((e) => e.title)).toEqual(["Y", "X"]);
  });
  it("clears progress on sign-out but keeps preferences", () => {
    const storage = memoryStorage();
    for (const [key, value] of Object.entries({
      [KEY]: "done", "idc-revision:micro:lecture:l1": "read", "idc-revision:activity": "[]", "idc-revision:badges": "{}",
      "idc-revision:stamps": "{}", "idc-revision:last-seen": "[]", "idc-revision:sync-queue": "{}",
      "idc-revision:synced-user": "u1", "idc-mc:micro:pp-01:q1": "B",
      "idc-revision:semester": "y2s2", "idc-revision:onboarded": "1", "unrelated": "x",
    })) storage.setItem(key, value);
    createProgressStore(storage).clearDevice();
    expect([...storage.map.keys()].sort()).toEqual(["idc-revision:onboarded", "idc-revision:semester", "unrelated"]);
  });
});
