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

// Fired whenever a status changes so any listener for the same key re-reads
// (e.g. the exam scorebar recomputing when an MCQ island auto-sets status on
// commit, or an open-answer self-grade is chosen).
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

// Fired by the exam scorebar's "Reset all" so every mounted question island
// (MCQ + open-answer self-grade) on the same paper clears its own in-memory
// state — a bare localStorage clear can't reach a mounted island's React state.
export const EXAM_RESET_EVENT = "idc-exam-reset";

export function dispatchExamReset(refSlug: string): void {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(EXAM_RESET_EVENT, { detail: { refSlug } }));
  }
}

export interface ExamSummary {
  total: number;
  answered: number; // done + wrong + skipped
  correct: number; // done
  missed: number; // wrong
  skipped: number; // skipped
  graded: number; // correct + missed (skips excluded)
  pct: number | null; // round(correct / graded), null when nothing graded
  complete: boolean; // total > 0 && answered === total
}

// Pure score model shared by the scorebar. Skips count as "answered" (so the
// paper can reach completion) but are excluded from the percentage denominator,
// so deliberately skipping a question never lowers your score.
export function summarizeStatuses(values: StatusValue[]): ExamSummary {
  const total = values.length;
  const correct = values.filter((v) => v === "done").length;
  const missed = values.filter((v) => v === "wrong").length;
  const skipped = values.filter((v) => v === "skipped").length;
  const answered = correct + missed + skipped;
  const graded = correct + missed;
  return {
    total,
    answered,
    correct,
    missed,
    skipped,
    graded,
    pct: graded > 0 ? Math.round((correct / graded) * 100) : null,
    complete: total > 0 && answered === total,
  };
}
