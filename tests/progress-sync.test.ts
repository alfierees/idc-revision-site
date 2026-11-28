import { describe, expect, it, vi } from "vitest";
import { createProgressStore } from "../src/lib/progress/store";
import { runFirstSync } from "../src/lib/progress/sync";

function memoryStorage() {
  const map = new Map<string, string>();
  return {
    map, getItem: (k: string) => map.get(k) ?? null, setItem: (k: string, v: string) => void map.set(k, v),
    removeItem: (k: string) => void map.delete(k), key: (i: number) => [...map.keys()][i] ?? null, get length() { return map.size; },
  };
}
const emptyServer = { marks: [], days: [], badges: {}, lastSeen: [] };

function fakeServer(server: object) {
  const uploaded: unknown[] = [];
  const fetcher = vi.fn(async (_url: string, init?: RequestInit) => {
    if (init?.method === "POST") {
      const items = JSON.parse(String(init.body)).items;
      uploaded.push(...items);
      return new Response(JSON.stringify({ saved: items.length, rejected: 0 }));
    }
    return new Response(JSON.stringify(server));
  });
  return { fetcher, uploaded };
}

describe("first sync on a device", () => {
  it("uploads progress made before signing in, pulls the account's, and counts what was added", async () => {
    const storage = memoryStorage();
    storage.setItem("idc-revision:micro:problem-set:ps-1:1", "done");
    storage.setItem("idc-revision:micro:lecture:l1", "read");
    storage.setItem("idc-revision:activity", JSON.stringify(["2026-11-19"]));
    const store = createProgressStore(storage);
    const { fetcher, uploaded } = fakeServer({
      marks: [{ subject: "micro", kind: "problem-set", ref: "ps-1", itemId: "2", value: "wrong", updatedAt: "2026-11-20T00:00:00.000Z" }],
      days: ["2026-11-20"], badges: { "lectures-1": "2026-11-19" },
      lastSeen: [{ subject: "micro", path: "/subjects/micro/lectures/l2", title: "Lecture 2", seenAt: "2026-11-20T00:00:00.000Z" }],
    });
    const result = await runFirstSync({ store, storage, userId: "u1", fetcher });
    expect(result).toEqual({ added: 2, pulled: 1 });
    expect(uploaded).toHaveLength(3);
    expect(storage.map.get("idc-revision:micro:problem-set:ps-1:2")).toBe("wrong");
    expect(store.activityDays()).toEqual(["2026-11-19", "2026-11-20"]);
    expect(store.ledger()).toEqual({ "lectures-1": "2026-11-19" });
    expect(store.lastSeen()[0].title).toBe("Lecture 2");
    expect(storage.map.get("idc-revision:synced-user")).toBe("u1");
  });

  it("on a device already synced for this account, only pulls", async () => {
    const storage = memoryStorage();
    storage.setItem("idc-revision:synced-user", "u1");
    storage.setItem("idc-revision:micro:problem-set:ps-1:1", "done");
    const { fetcher } = fakeServer(emptyServer);
    const result = await runFirstSync({ store: createProgressStore(storage), storage, userId: "u1", fetcher });
    expect(result).toEqual({ added: 0, pulled: 0 });
    expect(fetcher).toHaveBeenCalledTimes(1);
  });

  it("never uploads another account's leftover progress: clears it and pulls instead", async () => {
    const storage = memoryStorage();
    storage.setItem("idc-revision:synced-user", "someone-else");
    storage.setItem("idc-revision:micro:problem-set:ps-1:1", "done");
    storage.setItem("idc-revision:semester", "y2s2");
    const { fetcher, uploaded } = fakeServer(emptyServer);
    await runFirstSync({ store: createProgressStore(storage), storage, userId: "u1", fetcher });
    expect(uploaded).toEqual([]);
    expect(storage.map.has("idc-revision:micro:problem-set:ps-1:1")).toBe(false);
    expect(storage.map.get("idc-revision:semester")).toBe("y2s2");
    expect(storage.map.get("idc-revision:synced-user")).toBe("u1");
  });

  it("fails without marking the device synced when the upload fails, so it retries next time", async () => {
    const storage = memoryStorage();
    storage.setItem("idc-revision:micro:problem-set:ps-1:1", "done");
    const fetcher = vi.fn(async () => new Response("{}", { status: 500 }));
    await expect(runFirstSync({ store: createProgressStore(storage), storage, userId: "u1", fetcher })).rejects.toThrow();
    expect(storage.map.has("idc-revision:synced-user")).toBe(false);
  });
});
