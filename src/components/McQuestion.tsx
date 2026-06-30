import { useEffect, useRef, useState } from "preact/hooks";
import type { JSX } from "preact";
import { readStatus, writeStatus, statusKey } from "../lib/status";

interface Option {
  label: string;
  html: string;
  correct: boolean;
  whyHtml: string;
}

interface Props {
  subject: string;
  refSlug: string;
  questionId: string;
  options: Option[];
  workingHtml: string;
}

// Renders build-time-trusted HTML (markdown already compiled by the site's
// render pipeline — same trust level as Astro's set:html used elsewhere) via a
// ref, keeping the island free of dangerouslySetInnerHTML.
function Html({ html, ...rest }: { html: string } & JSX.HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) ref.current.innerHTML = html;
  }, [html]);
  return <div ref={ref} {...rest} />;
}

// Interactive multiple-choice block: commit-then-reveal-all. The first click
// locks the user's answer and reveals every option's verdict + per-option
// explanation, auto-sets the shared status (done/wrong), and exposes the full
// derivation behind a "Show working" toggle. "Try again" clears it.
export default function McQuestion({ subject, refSlug, questionId, options, workingHtml }: Props) {
  const statusK = statusKey(subject, "past-paper", refSlug, questionId);
  const pickK = `idc-mc:${subject}:${refSlug}:${questionId}`;

  const [picked, setPicked] = useState<string | null>(null);
  const [showWorking, setShowWorking] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(pickK);
    if (saved) setPicked(saved);
  }, [pickK]);

  const revealed = picked !== null;

  const choose = (label: string) => {
    if (revealed) return; // locked after the first commit
    setPicked(label);
    localStorage.setItem(pickK, label);
    const correct = options.find((o) => o.label === label)?.correct ?? false;
    // Don't clobber a manual "skipped"; otherwise reflect the attempt.
    if (readStatus(statusK) !== "skipped") writeStatus(statusK, correct ? "done" : "wrong");
  };

  const reset = () => {
    setPicked(null);
    setShowWorking(false);
    localStorage.removeItem(pickK);
    writeStatus(statusK, "untried");
  };

  return (
    <div class="mc">
      <ul class="mc-options" role="radiogroup" aria-label="Answer options">
        {options.map((o) => {
          const isPicked = picked === o.label;
          const state = !revealed ? "idle" : o.correct ? "correct" : "wrong";
          return (
            <li key={o.label} class="mc-item">
              <button
                type="button"
                class={`mc-opt mc-${state}${isPicked ? " mc-picked" : ""}`}
                disabled={revealed}
                aria-pressed={isPicked}
                onClick={() => choose(o.label)}
              >
                <span class="mc-key">{o.label}</span>
                <Html class="mc-text" html={o.html} />
                {revealed && (
                  <span class="mc-verdict">
                    {o.correct ? "✓ Correct" : "✗ Wrong"}
                    {isPicked ? " · your answer" : ""}
                  </span>
                )}
              </button>
              {revealed && o.whyHtml && <Html class="mc-why prose-card" html={o.whyHtml} />}
            </li>
          );
        })}
      </ul>

      {revealed && (
        <div class="mc-after">
          {workingHtml && (
            <>
              <button type="button" class="mc-working-toggle" onClick={() => setShowWorking((s) => !s)}>
                {showWorking ? "Hide" : "Show"} full working
                <span class={`mc-chev${showWorking ? " mc-chev-open" : ""}`} aria-hidden="true">→</span>
              </button>
              {showWorking && <Html class="mc-working prose-card" html={workingHtml} />}
            </>
          )}
          <button type="button" class="mc-reset" onClick={reset}>Try again</button>
        </div>
      )}
    </div>
  );
}
