import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { createSyncQueue } from "../src/lib/progress/sync-queue";
import type { SyncItem } from "../src/lib/progress/sync-types";

function memoryStorage() {
  const map = new Map<string, string>();
  return {
    getItem: (k: string) => map.get(k) ?? null, setItem: (k: string, v: string) => void map.set(k, v),
    removeItem: (k: string) => void map.delete(k), key: (i: number) => [...map.keys()][i] ?? null, get length() { return map.size; },
  };
}
const mark = (value: "done" | "wrong", at: string): SyncItem =>
  ({ type: "mark", mark: { subject: "micro", kind: "problem-set", ref: "ps-1", itemId: "1", value, updatedAt: at } });
const day: SyncItem = { type: "day", day: "2026-11-21" };

beforeEach(() => vi.useFakeTimers());
afterEach(() => vi.useRealTimers());

describe("sync queue", () => {
  it("batches within the debounce window and keeps only the newest change per mark", async () => {
    const send = vi.fn().mockResolvedValue(true);
    const queue = createSyncQueue({ storage: memoryStorage(), userId: "u1", send });
    queue.enqueue(mark("done", "2026-11-21T10:00:00.000Z"));
    queue.enqueue(mark("wrong", "2026-11-21T10:00:01.000Z"));
    queue.enqueue(day);
    await vi.advanceTimersByTimeAsync(2999);
    expect(send).not.toHaveBeenCalled();
    await vi.advanceTimersByTimeAsync(1);
    expect(send).toHaveBeenCalledTimes(1);
    expect(send.mock.calls[0][0]).toEqual([mark("wrong", "2026-11-21T10:00:01.000Z"), day]);
    expect(queue.pending()).toBe(0);
  });

  it("keeps items and retries with growing backoff when sending fails or throws", async () => {
    const send = vi.fn().mockResolvedValueOnce(false).mockRejectedValueOnce(new Error("offline")).mockResolvedValueOnce(true);
    const queue = createSyncQueue({ storage: memoryStorage(), userId: "u1", send });
    queue.enqueue(day);
    await vi.advanceTimersByTimeAsync(3000);
    expect(queue.pending()).toBe(1);
    await vi.advanceTimersByTimeAsync(2000);
    expect(send).toHaveBeenCalledTimes(2);
    await vi.advanceTimersByTimeAsync(3999);
    expect(send).toHaveBeenCalledTimes(2);
    await vi.advanceTimersByTimeAsync(1);
    expect(send).toHaveBeenCalledTimes(3);
    expect(queue.pending()).toBe(0);
  });

  it("keeps a change made while a batch was in flight", async () => {
    let release: (ok: boolean) => void = () => {};
    const send = vi.fn().mockImplementationOnce(() => new Promise<boolean>((resolve) => { release = resolve; })).mockResolvedValue(true);
    const queue = createSyncQueue({ storage: memoryStorage(), userId: "u1", send });
    queue.enqueue(mark("done", "2026-11-21T10:00:00.000Z"));
    await vi.advanceTimersByTimeAsync(3000);
    queue.enqueue(mark("wrong", "2026-11-21T10:00:05.000Z"));
    release(true);
    await vi.advanceTimersByTimeAsync(3000);
    expect(send).toHaveBeenCalledTimes(2);
    expect(send.mock.calls[1][0]).toEqual([mark("wrong", "2026-11-21T10:00:05.000Z")]);
    expect(queue.pending()).toBe(0);
  });

  it("sends at most 500 per batch and carries on with the rest", async () => {
    const send = vi.fn().mockResolvedValue(true);
    const queue = createSyncQueue({ storage: memoryStorage(), userId: "u1", send });
    for (let i = 0; i < 501; i++) queue.enqueue({ type: "badge", badgeId: `b${i}`, earnedOn: "2026-11-21" });
    await vi.advanceTimersByTimeAsync(3010); // the follow-up batch is scheduled right after the first one lands
    expect(send.mock.calls.map((call) => call[0].length)).toEqual([500, 1]);
  });

  it("survives a reload, but never hands one user's queue to another", () => {
    const storage = memoryStorage();
    createSyncQueue({ storage, userId: "u1", send: vi.fn() }).enqueue(day);
    expect(createSyncQueue({ storage, userId: "u1", send: vi.fn() }).pending()).toBe(1);
    expect(createSyncQueue({ storage, userId: "u2", send: vi.fn() }).pending()).toBe(0);
  });

  it("hands the rest off on page close and only forgets what was handed off", () => {
    const queue = createSyncQueue({ storage: memoryStorage(), userId: "u1", send: vi.fn() });
    queue.enqueue(day);
    const items = queue.drain();
    expect(items).toEqual([day]);
    expect(queue.pending()).toBe(1);
    queue.confirmDrained(items);
    expect(queue.pending()).toBe(0);
  });
});
