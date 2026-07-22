import { useEffect, useRef, useState } from "preact/hooks";
import type { JSX } from "preact";
import {
  readStatus,
  writeStatus,
  statusKey,
  EXAM_RESET_EVENT,
  type StatusValue,
} from "../lib/status";

interface Props {
  subject: string;
  kind: "problem-set" | "past-paper";
  refSlug: string;
  questionId: string;
  solutionHtml: string;
}

// Renders build-time-trusted HTML (markdown already compiled by the site's
// render pipeline — same trust level as Astro's set:html used elsewhere, and
// identical to the pattern in McQuestion) via a ref.
function Html({ html, ...rest }: { html: string } & JSX.HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) ref.current.innerHTML = html;
  }, [html]);
  return <div ref={ref} {...rest} />;
}

// Self-grade outcomes, in the order shown. `skipped` counts as answered but is
// excluded from the score's percentage denominator (see summarizeStatuses).
const GRADES: { value: Exclude<StatusValue, "untried">; label: string }[] = [
  { value: "done", label: "✓ Got it" },
  { value: "wrong", label: "✗ Missed it" },
  { value: "skipped", label: "Skip" },
];

// Open-answer question: "Show solution" toggle, then — once the solution is
// revealed — an inline self-grade row. The chosen grade IS the shared status
// (done/wrong/skipped), so the exam scorebar picks it up with no parallel state.
// Replaces the old static CollapsibleSolution + manual StatusPill combination.
export default function OpenAnswer({ subject, kind, refSlug, questionId, solutionHtml }: Props) {
  const statusK = statusKey(subject, kind, refSlug, questionId);

  const [open, setOpen] = useState(false);
  const [grade, setGrade] = useState<StatusValue>("untried");

  useEffect(() => {
    setGrade(readStatus(statusK));
    const onReset = (e: Event) => {
      if ((e as CustomEvent).detail?.refSlug !== refSlug) return;
      setOpen(false);
      setGrade("untried");
    };
    window.addEventListener(EXAM_RESET_EVENT, onReset);
    return () => window.removeEventListener(EXAM_RESET_EVENT, onReset);
  }, [statusK, refSlug]);

  const pick = (value: StatusValue) => {
    // Clicking the active grade again clears it (back to untried).
    const next = grade === value ? "untried" : value;
    setGrade(next);
    writeStatus(statusK, next);
  };

  return (
    <div class="oa">
      <button
        type="button"
        class="oa-toggle"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? "Hide" : "Show"} solution
        <span class={`oa-chev${open ? " oa-chev-open" : ""}`} aria-hidden="true">{"→"}</span>
      </button>

      {open && (
        <>
          <Html class="oa-body prose-card" html={solutionHtml} />
          <div class="oa-grade" role="group" aria-label="Self-grade this question">
            <span class="oa-grade-q">How did you go?</span>
            <div class="oa-grade-btns">
              {GRADES.map((g) => (
                <button
                  key={g.value}
                  type="button"
                  class={`oa-grade-btn oa-grade-${g.value}${grade === g.value ? " oa-grade-on" : ""}`}
                  aria-pressed={grade === g.value}
                  onClick={() => pick(g.value)}
                >
                  {g.label}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
