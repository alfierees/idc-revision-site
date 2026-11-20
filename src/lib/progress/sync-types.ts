// What a device sends to /api/progress and gets back. Validated on the server; never trust the client.
import { z } from "astro/zod";

import { MAX_BATCH } from "./sync-constants";

export { MAX_BATCH };

const slug = z.string().min(1).max(200).regex(/^[a-z0-9][a-z0-9._-]*$/i);
const isoDay = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);
const isoTime = z.iso.datetime({ offset: true });
/** A path on this site: starts with one slash (not "//host"), no scheme. */
const sitePath = z.string().max(300).regex(/^\/(?!\/)[^\s]*$/);

export const Mark = z.object({
  subject: slug,
  kind: z.enum(["problem-set", "past-paper", "lecture"]),
  ref: slug,
  itemId: z.string().max(50).regex(/^[a-z0-9._-]*$/i),
  value: z.enum(["done", "wrong", "skipped", "untried", "read", "unread"]),
  updatedAt: isoTime,
});

export const SyncItem = z.discriminatedUnion("type", [
  z.object({ type: z.literal("mark"), mark: Mark }),
  z.object({ type: z.literal("day"), day: isoDay }),
  z.object({ type: z.literal("badge"), badgeId: slug, earnedOn: isoDay }),
  z.object({ type: z.literal("seen"), subject: slug, path: sitePath, title: z.string().max(200), seenAt: isoTime }),
]);
export type SyncItem = z.infer<typeof SyncItem>;

export const SyncBatch = z.object({ items: z.array(SyncItem).max(MAX_BATCH) });

/**
 * Reads a POST body leniently: one invalid item is dropped (and counted) instead of failing the
 * whole batch, so a single odd key on a device can't make it retry forever. Null when the body
 * itself isn't a batch.
 */
export function parseBatch(body: unknown): { items: SyncItem[]; rejected: number } | null {
  const envelope = z.object({ items: z.array(z.unknown()).max(MAX_BATCH) }).safeParse(body);
  if (!envelope.success) return null;
  const items: SyncItem[] = [];
  for (const raw of envelope.data.items) {
    const item = SyncItem.safeParse(raw);
    if (item.success) items.push(item.data);
  }
  return { items, rejected: envelope.data.items.length - items.length };
}

/** What GET /api/progress returns. */
export interface ServerProgress {
  marks: z.infer<typeof Mark>[];
  days: string[];
  badges: Record<string, string>;
  lastSeen: { subject: string; path: string; title: string; seenAt: string }[];
}
