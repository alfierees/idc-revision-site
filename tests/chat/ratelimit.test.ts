import { describe, it, expect } from "vitest";
import { checkRateLimit, checkBudget, recordCost, estimateCostUsd } from "../../src/lib/chat/ratelimit";

function fakeRedis(initial: Record<string, number> = {}) {
  const store: Record<string, number> = { ...initial };
  return {
    store,
    async incr(key: string) { store[key] = (store[key] ?? 0) + 1; return store[key]; },
    async expire(_key: string, _seconds: number) { return 1; },
    async incrbyfloat(key: string, n: number) { store[key] = (store[key] ?? 0) + n; return store[key]; },
    async get<T>(key: string) { return (store[key] ?? null) as T; },
  };
}

describe("rate limiting", () => {
  it("allows under the per-minute limit and blocks over it", async () => {
    const redis = fakeRedis();
    for (let i = 0; i < 10; i++) {
      expect(await checkRateLimit(redis as any, "1.2.3.4", 10)).toBe(true);
    }
    expect(await checkRateLimit(redis as any, "1.2.3.4", 10)).toBe(false);
  });
});

describe("spend cap", () => {
  it("estimates cost from token counts", () => {
    expect(estimateCostUsd(5000, 800)).toBeCloseTo(0.009, 6);
  });
  it("blocks once the monthly cap is reached", async () => {
    const redis = fakeRedis({ ["chat:cost:2026-06"]: 5.0 });
    expect(await checkBudget(redis as any, "2026-06", 5)).toBe(false);
  });
  it("allows while under the cap and records cost", async () => {
    const redis = fakeRedis();
    expect(await checkBudget(redis as any, "2026-06", 5)).toBe(true);
    await recordCost(redis as any, "2026-06", 0.01);
    expect(redis.store["chat:cost:2026-06"]).toBeCloseTo(0.01, 6);
  });
});
