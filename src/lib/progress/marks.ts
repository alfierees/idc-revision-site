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
