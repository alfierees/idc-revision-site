import { useEffect, useState } from "preact/hooks";
import { SYNC_PULLED_EVENT } from "../../lib/progress/sync-constants";
import { evaluate, loadTotals } from "../../lib/progress/client";
import { LECTURE_EVENT } from "../../lib/progress/store";

interface Props {
  subject: string;
}

// Slim coverage pill in the course bar. Hidden until the course has any progress.
// Only rendered while PROGRESS_UI_ENABLED (see Layout.astro).
export default function CourseChip({ subject }: Props) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const refresh = () => {
      loadTotals()
        .then((totals) => {
          if (cancelled) return;
          const course = evaluate(totals).degree.courses.find((c) => c.slug === subject);
          setPercent(course && course.hasMark ? course.percent : 0);
        })
        .catch(() => {});
    };
    refresh();
    window.addEventListener(LECTURE_EVENT, refresh);
    window.addEventListener("storage", refresh);
    window.addEventListener(SYNC_PULLED_EVENT, refresh);
    return () => {
      cancelled = true;
      window.removeEventListener(LECTURE_EVENT, refresh);
      window.removeEventListener("storage", refresh);
      window.removeEventListener(SYNC_PULLED_EVENT, refresh);
    };
  }, [subject]);

  if (percent <= 0) return null;
  return (
    <a class="course-chip" href={`/progress#${subject}`} aria-label={`${percent}% of this course covered. Open progress.`}>
      {percent}%
    </a>
  );
}
