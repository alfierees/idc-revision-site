import { describe, expect, it } from "vitest";
import { migrateLocalKeys, resolveKey } from "../src/lib/progress/aliases";

const aliases = { subjects: { micro: "micro-i" }, keys: { "micro-i:problem-set:ps-1:4": "micro-i:problem-set:ps-1:2" } };

function storage(entries: Record<string, string>) {
  const map = new Map(Object.entries(entries));
  return {
    map,
    getItem: (k: string) => map.get(k) ?? null,
    setItem: (k: string, v: string) => void map.set(k, v),
    removeItem: (k: string) => void map.delete(k),
    key: (i: number) => [...map.keys()][i] ?? null,
    get length() { return map.size; },
  };
}

describe("resolveKey", () => {
  it("applies the subject rename, then the key alias", () => {
    expect(resolveKey("micro:problem-set:ps-1:4", aliases)).toBe("micro-i:problem-set:ps-1:2");
    expect(resolveKey("accounting:lecture:s2", aliases)).toBe("accounting:lecture:s2");
  });
  it("follows chains of renames", () => {
    const chain = { subjects: {}, keys: { "a:lecture:x": "a:lecture:y", "a:lecture:y": "a:lecture:z" } };
    expect(resolveKey("a:lecture:x", chain)).toBe("a:lecture:z");
  });
  it("stops on a cycle instead of looping", () => {
    const cycle = { subjects: {}, keys: { "a:lecture:x": "a:lecture:y", "a:lecture:y": "a:lecture:x" } };
    expect(resolveKey("a:lecture:x", cycle)).toBe("a:lecture:y");
  });
});

describe("migrateLocalKeys", () => {
  it("moves marks to the new key without overwriting a value already there", () => {
    const store = storage({
      "idc-revision:micro:problem-set:ps-1:1": "done",
      "idc-revision:micro:problem-set:ps-1:4": "wrong",
      "idc-revision:micro-i:problem-set:ps-1:2": "done",
      "idc-revision:micro:lecture:l1": "read",
    });
    migrateLocalKeys(store, aliases);
    expect(store.map.get("idc-revision:micro-i:problem-set:ps-1:1")).toBe("done");
    expect(store.map.has("idc-revision:micro:problem-set:ps-1:1")).toBe(false);
    expect(store.map.get("idc-revision:micro-i:problem-set:ps-1:2")).toBe("done");
    expect(store.map.has("idc-revision:micro:problem-set:ps-1:4")).toBe(false);
    expect(store.map.get("idc-revision:micro-i:lecture:l1")).toBe("read");
  });

  it("moves each mark's timestamp with it", () => {
    const store = storage({
      "idc-revision:micro:problem-set:ps-1:1": "done",
      "idc-revision:stamps": JSON.stringify({ "idc-revision:micro:problem-set:ps-1:1": 1700000000000, "idc-revision:x:lecture:y": 5 }),
    });
    migrateLocalKeys(store, aliases);
    expect(JSON.parse(store.map.get("idc-revision:stamps")!)).toEqual({
      "idc-revision:micro-i:problem-set:ps-1:1": 1700000000000,
      "idc-revision:x:lecture:y": 5,
    });
  });

  it("moves a past-paper multiple-choice pick alongside its mark", () => {
    const store = storage({
      "idc-revision:micro:past-paper:pp-01:q1": "done",
      "idc-mc:micro:pp-01:q1": "B",
    });
    migrateLocalKeys(store, aliases);
    expect(store.map.get("idc-mc:micro-i:pp-01:q1")).toBe("B");
    expect(store.map.has("idc-mc:micro:pp-01:q1")).toBe(false);
  });

  it("leaves non-mark keys alone and does nothing when there are no aliases", () => {
    const entries = {
      "idc-revision:semester": "y2s2",
      "idc-revision:activity": "[]",
      "idc-revision:badges": "{}",
      "idc-revision:micro:lecture:l1": "read",
    };
    const store = storage(entries);
    migrateLocalKeys(store, { subjects: {}, keys: {} });
    expect(Object.fromEntries(store.map)).toEqual(entries);
    migrateLocalKeys(store, aliases);
    expect(store.map.get("idc-revision:semester")).toBe("y2s2");
    expect(store.map.get("idc-revision:activity")).toBe("[]");
  });
});
