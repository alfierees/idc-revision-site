// The shape of one mark as it travels between device and server, and how marks are dated.
// The device stores ms stamps (idc-revision:stamps); the wire and the database use ISO time.

export type MarkKind = "problem-set" | "past-paper" | "lecture";

export interface MarkChange {
  subject: string;
  kind: MarkKind;
  /** problem-set / past-paper slug, or the lecture slug */
  ref: string;
  /** question id; "" for lectures */
  itemId: string;
  /** done | wrong | skipped | untried for questions; read | unread for lectures */
  value: string;
  /** ISO time of the change */
  updatedAt: string;
}

/** Marks made before stamps existed. Older than any real change, so any dated mark beats them. */
export const LEGACY_STAMP = "1970-01-01T00:00:00.000Z";

/** True when `a` is strictly later than `b` (compared as instants, not text). */
export function isNewer(a: string, b: string): boolean {
  return Date.parse(a) > Date.parse(b);
}

/** The store's ms stamp as ISO; a missing stamp is a legacy mark. */
export function stampToIso(stamp: number | undefined): string {
  return stamp === undefined ? LEGACY_STAMP : new Date(stamp).toISOString();
}

/** Every progress key on the device starts with this. */
export const PREFIX = "idc-revision:";

const KINDS = new Set<MarkKind>(["problem-set", "past-paper", "lecture"]);
const QUESTION_VALUES = new Set(["done", "wrong", "skipped", "untried"]);
const LECTURE_VALUES = new Set(["read", "unread"]);
const SLUG = /^[a-z0-9][a-z0-9._-]*$/i;
const ITEM_ID = /^[a-z0-9._-]{0,50}$/i;

/**
 * The mark a storage key holds, or null if the key isn't a mark (or wouldn't pass the server's checks).
 * Keys: idc-revision:<subject>:lecture:<slug> and idc-revision:<subject>:<problem-set|past-paper>:<slug>:<question>.
 */
export function keyToMark(key: string, value: string, stamp: number | undefined): MarkChange | null {
  if (!key.startsWith(PREFIX)) return null;
  const parts = key.slice(PREFIX.length).split(":");
  const [subject, kind, ref] = parts;
  if (!KINDS.has(kind as MarkKind) || !SLUG.test(subject ?? "") || !SLUG.test(ref ?? "")) return null;
  if (kind === "lecture") {
    if (parts.length !== 3 || !LECTURE_VALUES.has(value)) return null;
    return { subject, kind, ref, itemId: "", value, updatedAt: stampToIso(stamp) };
  }
  const itemId = parts[3];
  if (parts.length !== 4 || !ITEM_ID.test(itemId) || !QUESTION_VALUES.has(value)) return null;
  return { subject, kind: kind as MarkKind, ref, itemId, value, updatedAt: stampToIso(stamp) };
}

export function markToKey(mark: Pick<MarkChange, "subject" | "kind" | "ref" | "itemId">): string {
  return mark.kind === "lecture"
    ? `${PREFIX}${mark.subject}:lecture:${mark.ref}`
    : `${PREFIX}${mark.subject}:${mark.kind}:${mark.ref}:${mark.itemId}`;
}

/** The value a cleared mark syncs as. */
export const clearedValue = (kind: MarkKind) => (kind === "lecture" ? "unread" : "untried");
