import { useEffect, useState } from "preact/hooks";
import {
  readStatus,
  writeStatus,
  statusKey,
  summarizeStatuses,
  dispatchExamReset,
  STATUS_EVENT,
  EXAM_RESET_EVENT,
  type ExamSummary,
} from "../lib/status";

interface Props {
  subject: string;
  kind: "problem-set" | "past-paper";
  refSlug: string;
  questionIds: string[];
}

// Mirrors the pick-key format written by McQuestion, so "Reset all" clears MCQ
// selections as well as statuses.
const pickKey = (subject: string, refSlug: string, questionId: string) =>
  `idc-mc:${subject}:${refSlug}:${questionId}`;

// Floating, per-exam progress + score control (bottom-right). Reads the shared
// question statuses to show a running count while the paper is in progress and
// the score once every question is answered; owns the single "Reset all".
export default function ExamScorebar({ subject, kind, refSlug, questionIds }: Props) {
  const [summary, setSummary] = useState<ExamSummary>(() => summarizeStatuses([]));
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const recompute = () =>
      setSummary(summarizeStatuses(questionIds.map((id) => readStatus(statusKey(subject, kind, refSlug, id)))));
    recompute();
    window.addEventListener(STATUS_EVENT, recompute);
    window.addEventListener(EXAM_RESET_EVENT, recompute);
    return () => {
      window.removeEventListener(STATUS_EVENT, recompute);
      window.removeEventListener(EXAM_RESET_EVENT, recompute);
    };
    // questionIds is a stable build-time array for the page.
  }, [subject, kind, refSlug, questionIds]);

  const resetAll = () => {
    // Authoritative clear of persisted state...
    for (const id of questionIds) {
      writeStatus(statusKey(subject, kind, refSlug, id), "untried");
      if (typeof localStorage !== "undefined") localStorage.removeItem(pickKey(subject, refSlug, id));
    }
    // ...then tell every mounted island to reset its own in-memory UI.
    dispatchExamReset(refSlug);
    setExpanded(false);
  };

  const { total, answered, correct, missed, skipped, graded, pct, complete } = summary;

  const headline = !complete
    ? `${answered} / ${total} answered`
    : graded === 0
      ? "All skipped"
      : `${correct} / ${graded} · ${pct}%`;

  return (
    <div class={`scorebar${complete ? " scorebar-complete" : ""}`}>
      {expanded && (
        <div class="scorebar-panel" role="dialog" aria-label="Exam progress">
          <p class="scorebar-panel-title">{complete ? "Exam complete" : "Progress"}</p>
          <dl class="scorebar-stats">
            <div><dt>Answered</dt><dd>{answered} / {total}</dd></div>
            <div class="stat-correct"><dt>Correct</dt><dd>{correct}</dd></div>
            <div class="stat-missed"><dt>Missed</dt><dd>{missed}</dd></div>
            <div class="stat-skipped"><dt>Skipped</dt><dd>{skipped}</dd></div>
            {complete && graded > 0 && (
              <div class="stat-score"><dt>Score</dt><dd>{pct}%</dd></div>
            )}
          </dl>
          <button type="button" class="scorebar-reset" onClick={resetAll}>
            Reset all
          </button>
        </div>
      )}
      <button
        type="button"
        class="scorebar-pill"
        aria-expanded={expanded}
        aria-label={`${headline}. Tap for breakdown and reset.`}
        onClick={() => setExpanded((e) => !e)}
      >
        {complete && graded > 0 && <span class="scorebar-check" aria-hidden="true">✓</span>}
        <span class="scorebar-headline">{complete && graded > 0 ? "You scored " : ""}{headline}</span>
        <span class={`scorebar-caret${expanded ? " scorebar-caret-open" : ""}`} aria-hidden="true">⌃</span>
      </button>
    </div>
  );
}
