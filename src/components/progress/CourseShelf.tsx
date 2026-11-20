import { useEffect, useState } from "preact/hooks";
import { BADGES, type BadgeDef } from "../../lib/progress/badges";
import { loadTotals } from "../../lib/progress/client";
import { courseProgress, type CourseProgress } from "../../lib/progress/coverage";
import { LECTURE_EVENT, progressStore } from "../../lib/progress/store";
import { STATUS_EVENT } from "../../lib/status";
import BadgeMedal from "./BadgeMedal";

interface Props {
  subject: string;
}

const badgeById = (id: string) => BADGES.find((b) => b.id === id)!;
// Course steps are views of this course's marks, not ledger entries.
const STARTED: BadgeDef = {
  id: "course-started", name: "Started", family: "coverage", step: 1, rule: "Mark anything in this course",
};

// Slim panel at the top of a course's Lectures page. Hidden until the course has a mark.
export default function CourseShelf({ subject }: Props) {
  const [progress, setProgress] = useState<CourseProgress | null>(null);

  useEffect(() => {
    let cancelled = false;
    const refresh = async () => {
      try {
        const totals = await loadTotals();
        const course = totals.courses.find((c) => c.slug === subject);
        if (!course || cancelled) return;
        setProgress(courseProgress(course, progressStore().snapshot()));
      } catch {}
    };
    refresh();
    window.addEventListener(STATUS_EVENT, refresh);
    window.addEventListener(LECTURE_EVENT, refresh);
    return () => {
      cancelled = true;
      window.removeEventListener(STATUS_EVENT, refresh);
      window.removeEventListener(LECTURE_EVENT, refresh);
    };
  }, [subject]);

  if (!progress || !progress.hasMark) return null;

  const steps: { badge: BadgeDef; earned: boolean }[] = [
    { badge: STARTED, earned: progress.hasMark },
    { badge: badgeById("coverage-50"), earned: progress.percent >= 50 },
    { badge: badgeById("coverage-100"), earned: progress.percent >= 100 },
  ];
  if (progress.cleanPapers > 0) steps.push({ badge: badgeById("papers-clean"), earned: true });
  if (progress.allLecturesRead) steps.push({ badge: badgeById("lectures-all"), earned: true });

  return (
    <div class="course-shelf">
      <p class="course-shelf-line">
        <strong>{progress.percent}%</strong> covered · {progress.attempted} of {progress.questions} questions ·{" "}
        {progress.lecturesRead} of {progress.lectures} lectures read
      </p>
      <div class="course-shelf-row">
        {steps.map(({ badge, earned }) => (
          <BadgeMedal key={badge.id} badge={badge} earnedOn={earned ? "in this course" : undefined} size="md" />
        ))}
      </div>
    </div>
  );
}
