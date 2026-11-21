// The same merge rules on the device and the server.
import { isNewer, type MarkChange } from "./marks";

/** Newest change wins; on a tie the current value stays. */
export function pickNewer<T extends Pick<MarkChange, "updatedAt">>(current: T, incoming: T): T {
  return isNewer(incoming.updatedAt, current.updatedAt) ? incoming : current;
}

/** Revision days only ever add up. */
export function mergeDays(a: string[], b: string[]): string[] {
  return [...new Set([...a, ...b])].sort();
}

/** A badge is never un-earned; the earliest date wins. */
export function mergeBadges(a: Record<string, string>, b: Record<string, string>): Record<string, string> {
  const merged = { ...a };
  for (const [id, day] of Object.entries(b)) if (!merged[id] || day < merged[id]) merged[id] = day;
  return merged;
}
