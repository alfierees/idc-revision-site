/** The subset of the Upstash Redis client we depend on (keeps this testable). */
export interface RedisLike {
  incr(key: string): Promise<number>;
  expire(key: string, seconds: number): Promise<number>;
  incrbyfloat(key: string, n: number): Promise<number>;
  get<T = unknown>(key: string): Promise<T | null>;
}

const HAIKU_IN_PER_TOKEN = 1 / 1_000_000;
const HAIKU_OUT_PER_TOKEN = 5 / 1_000_000;

export function estimateCostUsd(inputTokens: number, outputTokens: number): number {
  return inputTokens * HAIKU_IN_PER_TOKEN + outputTokens * HAIKU_OUT_PER_TOKEN;
}

/** Fixed 60s window per IP. Returns true if the request is allowed. */
export async function checkRateLimit(redis: RedisLike, ip: string, perMinute: number): Promise<boolean> {
  const key = `chat:rl:${ip}`;
  const count = await redis.incr(key);
  if (count === 1) await redis.expire(key, 60);
  return count <= perMinute;
}

/** Returns true if spending is still under the monthly cap. */
export async function checkBudget(redis: RedisLike, yearMonth: string, capUsd: number): Promise<boolean> {
  const spent = Number((await redis.get<number>(`chat:cost:${yearMonth}`)) ?? 0);
  return spent < capUsd;
}

export async function recordCost(redis: RedisLike, yearMonth: string, costUsd: number): Promise<void> {
  await redis.incrbyfloat(`chat:cost:${yearMonth}`, costUsd);
}

export function currentYearMonth(now: Date): string {
  return `${now.getUTCFullYear()}-${String(now.getUTCMonth() + 1).padStart(2, "0")}`;
}
