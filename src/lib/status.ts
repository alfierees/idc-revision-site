export type StatusValue = "untried" | "done" | "wrong" | "skipped";

const ORDER: StatusValue[] = ["untried", "done", "wrong", "skipped"];

export function statusKey(
  subject: string,
  kind: "problem-set" | "past-paper",
  ref: string,
  questionId: string,
): string {
  return `idc-revision:${subject}:${kind}:${ref}:${questionId}`;
}

export function readStatus(key: string): StatusValue {
  const v = localStorage.getItem(key);
  if (v === "done" || v === "wrong" || v === "skipped") return v;
  return "untried";
}

// Fired whenever a status changes so any mounted StatusPill for the same key
// re-reads (e.g. when the MC island auto-sets status on commit).
export const STATUS_EVENT = "idc-status-change";

export function writeStatus(key: string, value: StatusValue): void {
  if (value === "untried") localStorage.removeItem(key);
  else localStorage.setItem(key, value);
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(STATUS_EVENT, { detail: { key, value } }));
  }
}

export function cycleStatus(key: string): StatusValue {
  const current = readStatus(key);
  const next = ORDER[(ORDER.indexOf(current) + 1) % ORDER.length];
  writeStatus(key, next);
  return next;
}
