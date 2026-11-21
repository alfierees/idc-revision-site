// The one place progress lives on this device. Swap the backend here for accounts (B2).
import type { StatusValue } from "../status";
import type { ProgressSnapshot } from "./types";
import ALIASES from "../../data/progress-aliases.json";
import { migrateLocalKeys, type Aliases } from "./aliases";
import { clearedValue, isNewer, keyToMark, markToKey, stampToIso, type MarkChange } from "./marks";
import { mergeBadges, mergeDays } from "./merge";
import type { SyncItem } from "./sync-types";

export interface KeyValueStore {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
  key(index: number): string | null;
  readonly length: number;
}

const PREFIX = "idc-revision:";
/** Sync bookkeeping (Task 15/16); progress, so it goes on sign-out. */
const SYNC_QUEUE_KEY = `${PREFIX}sync-queue`;
const SYNCED_USER_KEY = `${PREFIX}synced-user`;
/** Multiple-choice picks belong to the student's progress too. */
const PICK_PREFIX = "idc-mc:";
const ACTIVITY_KEY = `${PREFIX}activity`;
const LEDGER_KEY = `${PREFIX}badges`;
/** mark key → ms timestamp of its last change (clears included), for B2's newest-wins sync. */
const STAMPS_KEY = `${PREFIX}stamps`;
/** Most recently opened item per course, for "Continue where you left off". */
const LAST_SEEN_KEY = `${PREFIX}last-seen`;
const lectureKey = (subject: string, lecture: string) => `${PREFIX}${subject}:lecture:${lecture}`;

/** Fired after a lecture is marked read or unread. detail: { subject, lecture, read } */
export const LECTURE_EVENT = "idc-lecture-read";
/** Fired with the badge ids newly earned by a live mark. detail: { ids: string[] } */
export const BADGE_EVENT = "idc-badges-earned";
/** Fired when the silent on-load backfill adds badges (no toast). detail: { ids: string[] } */
export const BADGE_SYNC_EVENT = "idc-badges-synced";
/** Fired for every local progress change, in sync-payload shape. detail: ProgressChange */
export const PROGRESS_CHANGE_EVENT = "idc-progress-change";

/** A local change, shaped exactly like the item the device syncs. */
export type ProgressChange = SyncItem;

function readJson<T>(storage: KeyValueStore, key: string, isValid: (v: unknown) => v is T, fallback: T): T {
  try {
    const parsed = JSON.parse(storage.getItem(key) ?? "null");
    return isValid(parsed) ? parsed : fallback;
  } catch {
    return fallback;
  }
}
const isDayList = (v: unknown): v is string[] => Array.isArray(v) && v.every((d) => typeof d === "string");
const isLedger = (v: unknown): v is Record<string, string> =>
  typeof v === "object" && v !== null && !Array.isArray(v) && Object.values(v).every((d) => typeof d === "string");
const isStampIndex = (v: unknown): v is Record<string, number> =>
  typeof v === "object" && v !== null && !Array.isArray(v) && Object.values(v).every((t) => typeof t === "number");

export interface LastSeenEntry {
  subject: string;
  path: string;
  title: string;
  at: number;
}
const isLastSeenList = (v: unknown): v is LastSeenEntry[] =>
  Array.isArray(v) &&
  v.every(
    (e) =>
      typeof e === "object" && e !== null && typeof e.subject === "string" &&
      typeof e.path === "string" && typeof e.title === "string" && typeof e.at === "number",
  );

/** What a remote "Continue" entry looks like (ISO time, as the server sends it). */
export interface RemoteSeen { subject: string; path: string; title: string; seenAt: string }

export function createProgressStore(
  storage: KeyValueStore,
  now: () => number = Date.now,
  /** Told about every local change (not about changes applied from the server). */
  onChange: (change: ProgressChange) => void = () => {},
) {
  const readStatusRaw = (key: string): StatusValue => {
    const value = storage.getItem(key);
    return value === "done" || value === "wrong" || value === "skipped" ? value : "untried";
  };
  const lectureRead = (subject: string, lecture: string) => storage.getItem(lectureKey(subject, lecture)) === "read";
  const readStamps = () => readJson(storage, STAMPS_KEY, isStampIndex, {});
  const setStamp = (key: string, at: number) => {
    const stamps = readStamps();
    stamps[key] = at;
    storage.setItem(STAMPS_KEY, JSON.stringify(stamps));
  };
  /** Stamps a local change and reports it, if the key is a syncable mark. */
  const stamp = (key: string, value: string) => {
    const at = now();
    setStamp(key, at);
    const mark = keyToMark(key, value, at);
    if (mark) onChange({ type: "mark", mark: mark as Extract<SyncItem, { type: "mark" }>["mark"] });
  };
  const readLastSeen = () => readJson(storage, LAST_SEEN_KEY, isLastSeenList, []);

  return {
    readStatusRaw,
    writeStatusRaw(key: string, value: StatusValue) {
      if (value === "untried") storage.removeItem(key);
      else storage.setItem(key, value);
      stamp(key, value);
    },
    lectureRead,
    setLectureRead(subject: string, lecture: string, read: boolean) {
      if (read) storage.setItem(lectureKey(subject, lecture), "read");
      else storage.removeItem(lectureKey(subject, lecture));
      stamp(lectureKey(subject, lecture), read ? "read" : "unread");
    },
    /** When each mark last changed. Legacy marks made before stamps existed are absent (treated as 0 by sync). */
    stamps: readStamps,
    /** Newest first, one entry per subject. */
    lastSeen: (): LastSeenEntry[] => readLastSeen().sort((a, b) => b.at - a.at),
    recordLastSeen(subject: string, path: string, title: string, at: number = now()) {
      const others = readLastSeen().filter((e) => e.subject !== subject);
      storage.setItem(LAST_SEEN_KEY, JSON.stringify([{ subject, path, title, at }, ...others]));
      onChange({ type: "seen", subject, path, title, seenAt: new Date(at).toISOString() });
    },
    activityDays: () => readJson(storage, ACTIVITY_KEY, isDayList, []),
    recordActivity(day: string) {
      const days = new Set(readJson(storage, ACTIVITY_KEY, isDayList, []));
      if (days.has(day)) return;
      days.add(day);
      storage.setItem(ACTIVITY_KEY, JSON.stringify([...days].sort()));
      onChange({ type: "day", day });
    },
    ledger: () => readJson(storage, LEDGER_KEY, isLedger, {}),
    /** Adds badges not already earned, dated `day`. Returns the ids that were new. */
    addToLedger(ids: string[], day: string): string[] {
      const ledger = readJson(storage, LEDGER_KEY, isLedger, {});
      const fresh = ids.filter((id) => !(id in ledger));
      if (fresh.length === 0) return [];
      for (const id of fresh) ledger[id] = day;
      storage.setItem(LEDGER_KEY, JSON.stringify(ledger));
      for (const badgeId of fresh) onChange({ type: "badge", badgeId, earnedOn: day });
      return fresh;
    },

    // ── Sync (B2) ─────────────────────────────────────────────────────────────

    /** Every mark on this device, for a first upload. Clears that only survive as a stamp come back as untried/unread. */
    allMarks(): MarkChange[] {
      const stamps = readStamps();
      const marks = new Map<string, MarkChange>();
      for (let i = 0; i < storage.length; i++) {
        const key = storage.key(i);
        const mark = key ? keyToMark(key, storage.getItem(key) ?? "", stamps[key]) : null;
        if (key && mark) marks.set(key, mark);
      }
      for (const [key, at] of Object.entries(stamps)) {
        if (marks.has(key) || storage.getItem(key) !== null) continue;
        const kind = key.split(":")[2];
        const cleared = keyToMark(key, kind === "lecture" ? "unread" : "untried", at);
        if (cleared) marks.set(key, cleared);
      }
      return [...marks.values()];
    },
    /** Applies a mark from the server if it's newer than this device's. Not reported as a local change. */
    applyRemoteMark(mark: MarkChange): boolean {
      const key = markToKey(mark);
      if (!isNewer(mark.updatedAt, stampToIso(readStamps()[key]))) return false;
      if (mark.value === clearedValue(mark.kind)) storage.removeItem(key);
      else storage.setItem(key, mark.value);
      setStamp(key, Date.parse(mark.updatedAt));
      return true;
    },
    applyRemoteDays(days: string[]) {
      storage.setItem(ACTIVITY_KEY, JSON.stringify(mergeDays(readJson(storage, ACTIVITY_KEY, isDayList, []), days)));
    },
    applyRemoteBadges(badges: Record<string, string>) {
      storage.setItem(LEDGER_KEY, JSON.stringify(mergeBadges(readJson(storage, LEDGER_KEY, isLedger, {}), badges)));
    },
    /** Keeps the newest visit per course. */
    applyRemoteSeen(remote: RemoteSeen[]) {
      const bySubject = new Map(readLastSeen().map((entry) => [entry.subject, entry]));
      for (const seen of remote) {
        const at = Date.parse(seen.seenAt);
        if ((bySubject.get(seen.subject)?.at ?? -1) < at) {
          bySubject.set(seen.subject, { subject: seen.subject, path: seen.path, title: seen.title, at });
        }
      }
      storage.setItem(LAST_SEEN_KEY, JSON.stringify([...bySubject.values()]));
    },
    /** Sign-out on this device: removes the student's progress, keeps UI preferences (semester, onboarding). */
    clearDevice() {
      const progressKeys = new Set([ACTIVITY_KEY, LEDGER_KEY, STAMPS_KEY, LAST_SEEN_KEY, SYNC_QUEUE_KEY, SYNCED_USER_KEY]);
      const doomed: string[] = [];
      for (let i = 0; i < storage.length; i++) {
        const key = storage.key(i);
        if (!key) continue;
        const isMark = key.startsWith(PREFIX) && keyToMark(key, storage.getItem(key) ?? "", undefined) !== null;
        if (isMark || progressKeys.has(key) || key.startsWith(PICK_PREFIX)) doomed.push(key);
      }
      for (const key of doomed) storage.removeItem(key);
    },

    snapshot(): ProgressSnapshot {
      return {
        status: (subject, kind, ref, id) => readStatusRaw(`${PREFIX}${subject}:${kind}:${ref}:${id}`),
        lectureRead,
      };
    },
  };
}

export type ProgressStore = ReturnType<typeof createProgressStore>;

let browserStore: ProgressStore | null = null;
let browserStorage: KeyValueStore | null = null;
let fallbackStorage: KeyValueStore | null = null;
/** The store over this browser's localStorage, or an in-memory one when storage is blocked. */
export function progressStore(): ProgressStore {
  let storage: KeyValueStore;
  try {
    storage = globalThis.localStorage;
    storage.getItem(ACTIVITY_KEY);
  } catch {
    if (!fallbackStorage) {
      const map = new Map<string, string>();
      fallbackStorage = {
        getItem: (k) => map.get(k) ?? null, setItem: (k, v) => void map.set(k, v),
        removeItem: (k) => void map.delete(k), key: (i) => [...map.keys()][i] ?? null,
        get length() { return map.size; },
      };
    }
    storage = fallbackStorage;
  }
  if (!browserStore || browserStorage !== storage) {
    browserStorage = storage;
    // Renamed courses or questions: move this device's marks to their new keys, once per page.
    try { migrateLocalKeys(storage, ALIASES as Aliases); } catch {}
    browserStore = createProgressStore(storage, Date.now, (change) => {
      if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent(PROGRESS_CHANGE_EVENT, { detail: change }));
    });
  }
  return browserStore;
}
