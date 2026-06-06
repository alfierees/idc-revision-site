import { useEffect, useState } from "preact/hooks";
import { readStatus, cycleStatus, statusKey, type StatusValue } from "../lib/status";

interface Props {
  subject: string;
  kind: "problem-set" | "past-paper";
  ref: string;
  question: string;
}

const COLOR: Record<StatusValue, string> = {
  untried: "bg-paper-deep text-ink-muted border-rule",
  done:    "bg-status-done-bg text-status-done border-status-done/40",
  wrong:   "bg-status-wrong-bg text-status-wrong border-status-wrong/40",
  skipped: "bg-status-skipped-bg text-status-skipped border-status-skipped/40",
};

const LABEL: Record<StatusValue, string> = {
  untried: "Untried",
  done: "Done",
  wrong: "Wrong",
  skipped: "Skipped",
};

export default function StatusPill({ subject, kind, ref, question }: Props) {
  const key = statusKey(subject, kind, ref, question);
  const [value, setValue] = useState<StatusValue>("untried");
  const [pulse, setPulse] = useState(false);

  useEffect(() => { setValue(readStatus(key)); }, [key]);

  const onClick = () => {
    setValue(cycleStatus(key));
    setPulse(true);
    setTimeout(() => setPulse(false), 120);
  };

  return (
    <button
      onClick={onClick}
      class={`rounded-full border px-3 py-1 font-ui text-xs tracking-wide transition-all duration-150 ease-out ${COLOR[value]} ${pulse ? "scale-[1.06]" : "scale-100"}`}
      aria-label={`Question ${question}, status: ${LABEL[value]}. Click to change.`}
    >
      {LABEL[value]}
    </button>
  );
}
