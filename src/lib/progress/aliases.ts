// Renamed courses, files or question ids map old progress keys to new ones, so marks follow the rename.
// The map lives in src/data/progress-aliases.json; the postbuild guard (scripts/progress-ids) makes sure
// a rename can't ship without an entry here.
import type { KeyValueStore } from "./store";

export interface Aliases {
  /** old subject slug → new subject slug */
  subjects: Record<string, string>;
  /** old key → new key, written without the "idc-revision:" prefix and after subject renames */
  keys: Record<string, string>;
}

const PREFIX = "idc-revision:";
const STAMPS_KEY = `${PREFIX}stamps`;
/** Multiple-choice picks: idc-mc:<subject>:<paper>:<question>, the past-paper mark's companion. */
const PICK_PREFIX = "idc-mc:";
const MARK_SHAPE = /^[^:]+:(lecture|problem-set|past-paper):.+$/;

/** Where a progress key (without the prefix) lives now. Follows chains; stops on a cycle. */
export function resolveKey(key: string, aliases: Aliases): string {
  const [subject, ...rest] = key.split(":");
  let resolved = [aliases.subjects[subject] ?? subject, ...rest].join(":");
  const seen = new Set([resolved]);
  while (aliases.keys[resolved] && !seen.has(aliases.keys[resolved])) {
    resolved = aliases.keys[resolved];
    seen.add(resolved);
  }
  return resolved;
}

const hasAliases = (aliases: Aliases) =>
  Object.keys(aliases.subjects).length > 0 || Object.keys(aliases.keys).length > 0;

function readStamps(storage: KeyValueStore): Record<string, number> {
  try {
    const parsed = JSON.parse(storage.getItem(STAMPS_KEY) ?? "{}");
    return typeof parsed === "object" && parsed !== null && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

/** Old storage key → new storage key for every mark (and pick) on this device that an alias moves. */
function plannedMoves(storage: KeyValueStore, aliases: Aliases): [string, string][] {
  const moves: [string, string][] = [];
  for (let i = 0; i < storage.length; i++) {
    const key = storage.key(i);
    if (!key) continue;
    if (key.startsWith(PREFIX) && MARK_SHAPE.test(key.slice(PREFIX.length))) {
      const moved = PREFIX + resolveKey(key.slice(PREFIX.length), aliases);
      if (moved !== key) moves.push([key, moved]);
    } else if (key.startsWith(PICK_PREFIX)) {
      // A pick has no kind segment; resolve it as the past-paper mark it belongs to.
      const [subject, paper, ...question] = key.slice(PICK_PREFIX.length).split(":");
      const mark = resolveKey(`${subject}:past-paper:${paper}:${question.join(":")}`, aliases);
      const [newSubject, , newPaper, ...newQuestion] = mark.split(":");
      const moved = `${PICK_PREFIX}${newSubject}:${newPaper}:${newQuestion.join(":")}`;
      if (moved !== key) moves.push([key, moved]);
    }
  }
  return moves;
}

/** One pass over this device's keys. Never overwrites a value already stored at the new key. */
export function migrateLocalKeys(storage: KeyValueStore, aliases: Aliases): void {
  if (!hasAliases(aliases)) return;
  const moves = plannedMoves(storage, aliases);
  if (moves.length === 0) return;
  const stamps = readStamps(storage);
  let stampsChanged = false;
  for (const [oldKey, newKey] of moves) {
    const value = storage.getItem(oldKey);
    if (value !== null && storage.getItem(newKey) === null) {
      storage.setItem(newKey, value);
      if (oldKey in stamps) stamps[newKey] = stamps[oldKey];
    }
    storage.removeItem(oldKey);
    if (oldKey in stamps) {
      delete stamps[oldKey];
      stampsChanged = true;
    }
  }
  if (stampsChanged) storage.setItem(STAMPS_KEY, JSON.stringify(stamps));
}
