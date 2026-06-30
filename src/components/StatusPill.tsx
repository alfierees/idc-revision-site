import { useEffect, useState } from "preact/hooks";
import { readStatus, cycleStatus, statusKey, STATUS_EVENT, type StatusValue } from "../lib/status";

interface Props {
  subject: string;
  kind: "problem-set" | "past-paper";
  refSlug: string;
  question: string;
}

const COLOR: Record<StatusValue, string> = {
  untried: "bg-paper-deep text-ink-muted",
  done:    "bg-status-done-bg text-status-done",
  wrong:   "bg-status-wrong-bg text-status-wrong",
  skipped: "bg-status-skipped-bg text-status-skipped",
};

const LABEL: Record<StatusValue, string> = {
  untried: "Untried",
  done: "Done",
  wrong: "Wrong",
  skipped: "Skipped",
};

export default function StatusPill({ subject, kind, refSlug, question }: Props) {
  const key = statusKey(subject, kind, refSlug, question);
  const [value, setValue] = useState<StatusValue>("untried");
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    setValue(readStatus(key));
    const onChange = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail?.key === key) setValue(readStatus(key));
    };
    window.addEventListener(STATUS_EVENT, onChange);
    return () => window.removeEventListener(STATUS_EVENT, onChange);
  }, [key]);

  const onClick = () => {
    setValue(cycleStatus(key));
    setPulse(true);
    setTimeout(() => setPulse(false), 120);
  };

  return (
    <button
      onClick={onClick}
      class={`rounded-full px-3 py-1 font-ui text-xs font-bold uppercase tracking-[0.08em] transition-all duration-150 ease-out ${COLOR[value]} ${pulse ? "scale-[1.06]" : "scale-100"}`}
      aria-label={`Question ${question}, status: ${LABEL[value]}. Click to change.`}
    >
      {LABEL[value]}
    </button>
  );
}
