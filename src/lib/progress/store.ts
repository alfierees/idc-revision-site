// The one place progress lives on this device. Swap the backend here for accounts (B2).
import type { StatusValue } from "../status";
import type { ProgressSnapshot } from "./types";
import ALIASES from "../../data/progress-aliases.json";
import { migrateLocalKeys, type Aliases } from "./aliases";

export interface KeyValueStore {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
  key(index: number): string | null;
  readonly length: number;
}

const PREFIX = "idc-revision:";
const ACTIVITY_KEY = `${PREFIX}activity`;
const LEDGER_KEY = `${PREFIX}badges`;
/** mark key → ms timestamp of its last change (clears included), for B2's newest-wins sync. */
const STAMPS_KEY = `${PREFIX}stamps`;
/** Most recently opened item per course, for "Continue where you left off". */
export const LAST_SEEN_STORAGE_KEY = `${PREFIX}last-seen`;
const lectureKey = (subject: string, lecture: string) => `${PREFIX}${subject}:lecture:${lecture}`;

/** Fired after a lecture is marked read or unread. detail: { subject, lecture, read } */
export const LECTURE_EVENT = "idc-lecture-read";
/** Fired with the badge ids newly earned by a live mark. detail: { ids: string[] } */
export const BADGE_EVENT = "idc-badges-earned";
/** Fired when the silent on-load backfill adds badges (no toast). detail: { ids: string[] } */
export const BADGE_SYNC_EVENT = "idc-badges-synced";

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

export function createProgressStore(storage: KeyValueStore, now: () => number = Date.now) {
  const readStatusRaw = (key: string): StatusValue => {
    const value = storage.getItem(key);
    return value === "done" || value === "wrong" || value === "skipped" ? value : "untried";
  };
  const lectureRead = (subject: string, lecture: string) => storage.getItem(lectureKey(subject, lecture)) === "read";
  const stamp = (key: string) => {
    const stamps = readJson(storage, STAMPS_KEY, isStampIndex, {});
    stamps[key] = now();
    storage.setItem(STAMPS_KEY, JSON.stringify(stamps));
  };

  return {
    readStatusRaw,
    writeStatusRaw(key: string, value: StatusValue) {
      if (value === "untried") storage.removeItem(key);
      else storage.setItem(key, value);
      stamp(key);
    },
    lectureRead,
    setLectureRead(subject: string, lecture: string, read: boolean) {
      if (read) storage.setItem(lectureKey(subject, lecture), "read");
      else storage.removeItem(lectureKey(subject, lecture));
      stamp(lectureKey(subject, lecture));
    },
    /** When each mark last changed. Legacy marks made before stamps existed are absent (treated as 0 by sync). */
    stamps: () => readJson(storage, STAMPS_KEY, isStampIndex, {}),
    /** Newest first, one entry per subject. */
    lastSeen: (): LastSeenEntry[] =>
      readJson(storage, LAST_SEEN_STORAGE_KEY, isLastSeenList, []).sort((a, b) => b.at - a.at),
    recordLastSeen(subject: string, path: string, title: string, at: number = now()) {
      const others = readJson(storage, LAST_SEEN_STORAGE_KEY, isLastSeenList, []).filter((e) => e.subject !== subject);
      storage.setItem(LAST_SEEN_STORAGE_KEY, JSON.stringify([{ subject, path, title, at }, ...others]));
    },
    activityDays: () => readJson(storage, ACTIVITY_KEY, isDayList, []),
    recordActivity(day: string) {
      const days = new Set(readJson(storage, ACTIVITY_KEY, isDayList, []));
      if (days.has(day)) return;
      days.add(day);
      storage.setItem(ACTIVITY_KEY, JSON.stringify([...days].sort()));
    },
    ledger: () => readJson(storage, LEDGER_KEY, isLedger, {}),
    /** Adds badges not already earned, dated `day`. Returns the ids that were new. */
    addToLedger(ids: string[], day: string): string[] {
      const ledger = readJson(storage, LEDGER_KEY, isLedger, {});
      const fresh = ids.filter((id) => !(id in ledger));
      if (fresh.length === 0) return [];
      for (const id of fresh) ledger[id] = day;
      storage.setItem(LEDGER_KEY, JSON.stringify(ledger));
      return fresh;
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
    browserStore = createProgressStore(storage);
  }
  return browserStore;
}
