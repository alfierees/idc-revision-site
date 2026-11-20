// The Progress section. Signed in: rank, streak calendar, one row per badge ladder, course coverage.
// Signed out: the same dashboard, faded behind a card built from the visitor's own ticks
// ("the dashboard is the reason to sign up").
import { useEffect, useState } from "preact/hooks";
import { openSignIn, useAuthUser } from "../../lib/auth/session";
import type { BadgeDef, BadgeFamily } from "../../lib/progress/badges";
import { evaluate, loadTotals } from "../../lib/progress/client";
import { localDay } from "../../lib/progress/days";
import { BADGE_EVENT, BADGE_SYNC_EVENT, LECTURE_EVENT } from "../../lib/progress/store";
import { calendarWeeks } from "../../lib/progress/streak";
import { SYNC_PULLED_EVENT } from "../../lib/progress/sync-constants";
import type { ProgressTotals } from "../../lib/progress/types";
import { STATUS_EVENT } from "../../lib/status";
import BadgeMedal from "./BadgeMedal";

type View = ReturnType<typeof evaluate>;

const FAMILY_LABEL: Record<BadgeFamily, string> = {
  lectures: "Lectures", practice: "Practice", papers: "Past papers", coverage: "Coverage",
  breadth: "Breadth", habit: "Habit", keepsakes: "Keepsakes",
};
const CALENDAR_WEEKS = 12;
const REFRESH_EVENTS = [STATUS_EVENT, LECTURE_EVENT, BADGE_EVENT, BADGE_SYNC_EVENT, SYNC_PULLED_EVENT];

const plural = (count: number, one: string, many = `${one}s`) => `${count} ${count === 1 ? one : many}`;

function Ladder({ family, badges, view }: { family: BadgeFamily; badges: BadgeDef[]; view: View }) {
  const earned = badges.filter((b) => view.ledger[b.id]);
  const title = earned.length > 0 ? earned[earned.length - 1].name : null;
  const next = badges.find((b) => !view.ledger[b.id]);
  const nextProgress = next?.progress?.(view.ctx);
  return (
    <li class="ladder">
      <div class="ladder-head">
        <h3 class="ladder-family">{FAMILY_LABEL[family]}</h3>
        <p class="ladder-title">{title ?? <span class="ladder-none">Not started</span>}</p>
      </div>
      <div class="ladder-medals">
        {badges.map((b) => (
          <BadgeMedal key={b.id} badge={b} earnedOn={view.ledger[b.id]} size="sm" />
        ))}
      </div>
      <p class="ladder-next">
        {next ? (
          <>
            Next: <strong>{next.name}</strong>
            {nextProgress ? <> · {nextProgress.have}/{nextProgress.need}</> : <> · {next.rule.charAt(0).toLowerCase() + next.rule.slice(1)}</>}
          </>
        ) : (
          "Ladder complete"
        )}
      </p>
    </li>
  );
}

function Dashboard({ view, totals, today, locked = false }: { view: View; totals: ProgressTotals; today: string; locked?: boolean }) {
  const earnedCount = Object.keys(view.ledger).length;
  const { current, next } = view.rank;
  const revised = new Set(view.activityDays);
  const weeks = calendarWeeks(today, CALENDAR_WEEKS);
  const families = [...new Set(view.badges.map((b) => b.family))];
  const titles = new Map(totals.courses.map((c) => [c.slug, c.title]));
  const touched = view.degree.courses.filter((c) => c.hasMark).sort((a, b) => b.percent - a.percent);

  return (
    <>
      <div class="pp-top">
        <section class="rank-card" aria-label="Your rank">
          <p class="progress-eyebrow">Your rank</p>
          {/* Locked: the rank is what signing in reveals, so it's never in the page, blurred or not. */}
          {locked ? <p class="rank-name rank-redacted">Your rank</p> : <p class="rank-name">{current.name}</p>}
          <p class="rank-count">{earnedCount} of {view.badges.length} badges</p>
          {!locked && <p class="rank-next">{next ? <>Next: <strong>{next.name}</strong> at {next.at}</> : "Top of the faculty"}</p>}
        </section>
        <section class="calendar-card" aria-label="Revision calendar">
          <p class="progress-eyebrow">
            Streak: <strong>{plural(view.streak, "day")}</strong>
            <span class="calendar-note"> · one rest day a week is fine</span>
          </p>
          <div class="calendar" role="img" aria-label={`Revised on ${plural(view.activityDays.length, "day")}; last ${CALENDAR_WEEKS} weeks shown`}>
            {weeks.map((week) => (
              <div class="calendar-week" key={week[0]}>
                {week.map((day) =>
                  day > today ? (
                    <span class="calendar-day calendar-future" key={day} />
                  ) : (
                    <span key={day} title={day}
                      class={`calendar-day${revised.has(day) ? " calendar-on" : ""}${day === today ? " calendar-today" : ""}`} />
                  ),
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

      <section class="pp-section" aria-labelledby="ladders-title">
        <h2 class="section-label" id="ladders-title">Badges</h2>
        <ul class="ladders">
          {families.map((family) => (
            <Ladder key={family} family={family} badges={view.badges.filter((b) => b.family === family)} view={view} />
          ))}
        </ul>
      </section>

      <section class="pp-section" aria-labelledby="courses-title">
        <h2 class="section-label" id="courses-title">Your courses</h2>
        {touched.length === 0 ? (
          <p class="pp-empty">Tick a question or mark a lecture as read, and the course shows up here.</p>
        ) : (
          <ul class="pp-courses">
            {touched.map((c) => (
              <li id={c.slug} key={c.slug} class="pp-course">
                <a href={`/subjects/${c.slug}/lectures`} class="pp-course-name">{titles.get(c.slug) ?? c.slug}</a>
                <span class="pp-course-bar" aria-hidden="true"><span style={`width: ${c.percent}%`} /></span>
                <span class="pp-course-pct">{c.percent}%</span>
                <span class="pp-course-detail">
                  {plural(c.attempted, "question")} of {c.questions} · {plural(c.lecturesRead, "lecture")} of {c.lectures}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}

function SignInPitch({ view }: { view: View }) {
  const questions = view.degree.questionsAttempted;
  const lectures = view.degree.lecturesRead;
  const badges = Object.keys(view.ledger).length;
  const hasWork = questions + lectures > 0;
  return (
    <section class="pitch-card" aria-labelledby="pitch-title">
      <h2 class="pitch-title" id="pitch-title">
        {hasWork ? "Your progress is waiting" : "Turn your revision into a rank"}
      </h2>
      {hasWork ? (
        <p class="pitch-body">
          You've done <strong>{plural(questions, "question")}</strong>
          {lectures > 0 && <> and read <strong>{plural(lectures, "lecture")}</strong></>}
          {badges > 0 && <>, which already adds up to <strong>{plural(badges, "badge")}</strong></>}.
          Sign in to see your rank and badges, and keep them on every device.
        </p>
      ) : (
        <p class="pitch-body">
          Tick questions and mark lectures as read as you go. Sign in and they become a rank, a streak and
          29 badges, saved on every device.
        </p>
      )}
      <button type="button" class="acct-signin pitch-cta" onClick={openSignIn}>Sign in to see it</button>
      <p class="pitch-small">Free. Google or an email link, no password. Lectures and questions stay open either way.</p>
    </section>
  );
}

export default function ProgressPage() {
  const user = useAuthUser();
  const [totals, setTotals] = useState<ProgressTotals | null>(null);
  const [view, setView] = useState<View | null>(null);
  const [today, setToday] = useState("");

  useEffect(() => {
    let cancelled = false;
    const refresh = async () => {
      try {
        const loaded = await loadTotals();
        if (cancelled) return;
        setTotals(loaded);
        setView(evaluate(loaded));
        setToday(localDay(new Date()));
      } catch {
        // Totals unavailable: the page keeps its loading state.
      }
    };
    void refresh();
    for (const name of REFRESH_EVENTS) window.addEventListener(name, refresh);
    return () => {
      cancelled = true;
      for (const name of REFRESH_EVENTS) window.removeEventListener(name, refresh);
    };
  }, []);

  if (!view || !totals || user === undefined) return <p class="pp-loading" aria-live="polite">Loading your progress…</p>;
  if (user) return <Dashboard view={view} totals={totals} today={today} />;
  return (
    <>
      <SignInPitch view={view} />
      <div class="pp-locked" aria-hidden="true" inert>
        <Dashboard view={view} totals={totals} today={today} locked />
      </div>
    </>
  );
}
