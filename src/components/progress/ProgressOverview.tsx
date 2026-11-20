import { useEffect, useState } from "preact/hooks";
import { evaluate, loadTotals } from "../../lib/progress/client";
import { localDay } from "../../lib/progress/days";
import { BADGE_EVENT, LECTURE_EVENT } from "../../lib/progress/store";
import { calendarWeeks } from "../../lib/progress/streak";
import { STATUS_EVENT } from "../../lib/status";
import type { BadgeFamily } from "../../lib/progress/badges";
import BadgeMedal from "./BadgeMedal";

type View = ReturnType<typeof evaluate>;

const FAMILY_LABEL: Record<BadgeFamily, string> = {
  lectures: "Lectures",
  practice: "Practice",
  papers: "Past papers",
  coverage: "Coverage",
  breadth: "Breadth",
  habit: "Habit",
  keepsakes: "Keepsakes",
};
const CALENDAR_WEEKS = 12;

// Home: rank, 12-week revision calendar and the badge shelf. Renders nothing
// until the device has any progress, so newcomers see the clean picker.
export default function ProgressOverview() {
  const [view, setView] = useState<View | null>(null);
  const [anyMark, setAnyMark] = useState(false);
  const [today, setToday] = useState("");

  useEffect(() => {
    let cancelled = false;
    const refresh = async () => {
      try {
        const next = evaluate(await loadTotals());
        if (cancelled) return;
        setView(next);
        setAnyMark(next.degree.coursesMarked > 0);
        setToday(localDay(new Date()));
      } catch {}
    };
    refresh();
    window.addEventListener(BADGE_EVENT, refresh);
    window.addEventListener(STATUS_EVENT, refresh);
    window.addEventListener(LECTURE_EVENT, refresh);
    return () => {
      cancelled = true;
      window.removeEventListener(BADGE_EVENT, refresh);
      window.removeEventListener(STATUS_EVENT, refresh);
      window.removeEventListener(LECTURE_EVENT, refresh);
    };
  }, []);

  if (!view) return null;
  const earnedCount = Object.keys(view.ledger).length;
  if (!anyMark && view.activityDays.length === 0 && earnedCount === 0) return null;

  const revised = new Set(view.activityDays);
  const weeks = calendarWeeks(today, CALENDAR_WEEKS);
  const total = view.badges.length;
  const { current, next } = view.rank;
  const families = [...new Set(view.badges.map((b) => b.family))];

  return (
    <div class="progress">
      <div class="rank-card">
        <p class="progress-eyebrow">Your rank</p>
        <p class="rank-name">{current.name}</p>
        <p class="rank-count">{earnedCount} of {total} badges</p>
        <p class="rank-next">{next ? <>Next: <strong>{next.name}</strong> at {next.at}</> : "Top of the faculty"}</p>
      </div>

      <div class="calendar-card">
        <p class="progress-eyebrow">
          Streak: <strong>{view.streak} {view.streak === 1 ? "day" : "days"}</strong>
          <span class="calendar-note"> · one rest day a week is fine</span>
        </p>
        <div class="calendar" role="img" aria-label={`Revision days over the last ${CALENDAR_WEEKS} weeks`}>
          {weeks.map((week) => (
            <div class="calendar-week" key={week[0]}>
              {week.map((day) =>
                day > today ? (
                  <span class="calendar-day calendar-future" key={day} />
                ) : (
                  <span
                    key={day}
                    class={`calendar-day${revised.has(day) ? " calendar-on" : ""}${day === today ? " calendar-today" : ""}`}
                    title={day}
                  />
                ),
              )}
            </div>
          ))}
        </div>
      </div>

      <div class="shelf">
        <p class="progress-eyebrow">Badges · {earnedCount} of {total}</p>
        {families.map((family) => (
          <div class="shelf-family" key={family}>
            <p class="shelf-family-label">{FAMILY_LABEL[family]}</p>
            <div class="shelf-row">
              {view.badges
                .filter((b) => b.family === family)
                .map((b) => (
                  <BadgeMedal
                    key={b.id}
                    badge={b}
                    earnedOn={view.ledger[b.id]}
                    progress={b.progress?.(view.ctx)}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
