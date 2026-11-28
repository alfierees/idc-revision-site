// One line on Home that links to Progress. Signed in: rank · streak · badges.
// Signed out with some ticks: what they've done, and that signing in shows the rest.
import { useEffect, useState } from "preact/hooks";
import { useAuthUser } from "../../lib/auth/session";
import { evaluate, loadTotals } from "../../lib/progress/client";
import { BADGE_EVENT, BADGE_SYNC_EVENT, LECTURE_EVENT } from "../../lib/progress/store";
import { SYNC_PULLED_EVENT } from "../../lib/progress/sync-constants";
import { STATUS_EVENT } from "../../lib/status";

type View = ReturnType<typeof evaluate>;
const EVENTS = [STATUS_EVENT, LECTURE_EVENT, BADGE_EVENT, BADGE_SYNC_EVENT, SYNC_PULLED_EVENT];
const plural = (count: number, one: string, many = `${one}s`) => `${count} ${count === 1 ? one : many}`;

export default function ProgressStrip() {
  const user = useAuthUser();
  const [view, setView] = useState<View | null>(null);

  useEffect(() => {
    let cancelled = false;
    const refresh = () => loadTotals().then((totals) => { if (!cancelled) setView(evaluate(totals)); }).catch(() => {});
    refresh();
    for (const name of EVENTS) window.addEventListener(name, refresh);
    return () => {
      cancelled = true;
      for (const name of EVENTS) window.removeEventListener(name, refresh);
    };
  }, []);

  if (!view || user === undefined) return null;
  const badges = Object.keys(view.ledger).length;
  if (user) {
    return (
      <a href="/progress" class="strip">
        <span class="strip-item"><strong>{view.rank.current.name}</strong></span>
        <span class="strip-sep" aria-hidden="true">·</span>
        <span class="strip-item">{plural(view.streak, "day")} streak</span>
        <span class="strip-sep" aria-hidden="true">·</span>
        <span class="strip-item">{plural(badges, "badge")}</span>
        <span class="strip-arrow" aria-hidden="true">→</span>
      </a>
    );
  }
  const questions = view.degree.questionsAttempted;
  const lectures = view.degree.lecturesRead;
  if (questions + lectures === 0) return null;
  const done = questions > 0 ? plural(questions, "question") : plural(lectures, "lecture");
  return (
    <a href="/progress" class="strip strip-locked">
      <span class="strip-item">You've done <strong>{done}</strong>. Sign in to see your rank and badges</span>
      <span class="strip-arrow" aria-hidden="true">→</span>
    </a>
  );
}
