import { useEffect, useState } from "preact/hooks";
import { readStatus, statusKey, type StatusValue } from "../lib/status";

interface Props {
  subject: string;
  refSlug: string;
  questionIds: string[];
}

export default function PaperProgress({ subject, refSlug, questionIds }: Props) {
  const [counts, setCounts] = useState<Record<StatusValue, number>>({ untried: 0, done: 0, wrong: 0, skipped: 0 });

  useEffect(() => {
    const c: Record<StatusValue, number> = { untried: 0, done: 0, wrong: 0, skipped: 0 };
    for (const q of questionIds) c[readStatus(statusKey(subject, "past-paper", refSlug, q))]++;
    setCounts(c);
  }, [subject, refSlug, questionIds.join(",")]);

  const total = questionIds.length;
  const attempted = counts.done + counts.wrong + counts.skipped;

  return (
    <div class="rounded bg-paper-deep p-5 font-ui text-sm text-ink-soft">
      <span class="font-display text-ink" style="font-variation-settings: 'opsz' 36, 'wght' 500;">{attempted}</span>
      <span class="text-ink-muted"> of {total} attempted</span>
      <span class="text-ink-muted"> · </span>
      <span class="text-status-done">{counts.done} done</span>
      <span class="text-ink-muted"> · </span>
      <span class="text-status-wrong">{counts.wrong} wrong</span>
      <span class="text-ink-muted"> · </span>
      <span class="text-status-skipped">{counts.skipped} skipped</span>
    </div>
  );
}
