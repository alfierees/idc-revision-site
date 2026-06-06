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

export function writeStatus(key: string, value: StatusValue): void {
  if (value === "untried") localStorage.removeItem(key);
  else localStorage.setItem(key, value);
}

export function cycleStatus(key: string): StatusValue {
  const current = readStatus(key);
  const next = ORDER[(ORDER.indexOf(current) + 1) % ORDER.length];
  writeStatus(key, next);
  return next;
}
