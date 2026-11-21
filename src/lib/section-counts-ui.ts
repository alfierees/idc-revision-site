// Fills the "3/12" counts and bars in the rail and on the Overview from this
// device's marks. Nothing shows until the course has at least one mark.
import { loadTotals } from "./progress/client";
import { sectionProgress, type CourseSectionProgress } from "./progress/coverage";
import { LECTURE_EVENT, progressStore } from "./progress/store";
import { STATUS_EVENT } from "./status";

const COUNTED_SECTIONS: Record<string, keyof Omit<CourseSectionProgress, "hasMark">> = {
  "past-papers": "pastPapers",
  "problem-sets": "problemSets",
  lectures: "lectures",
};

export function mountSectionCounts(subject: string): void {
  const refresh = () => {
    loadTotals()
      .then((totals) => {
        const course = totals.courses.find((candidate) => candidate.slug === subject);
        if (!course) return;
        const progress = sectionProgress(course, progressStore().snapshot());
        for (const [sectionId, progressKey] of Object.entries(COUNTED_SECTIONS)) {
          const { answered, total } = progress[progressKey];
          const showCount = progress.hasMark && total > 0;
          document.querySelectorAll<HTMLElement>(`[data-section-count="${sectionId}"]`).forEach((countElement) => {
            countElement.textContent = showCount ? `${answered}/${total}` : "";
            countElement.hidden = !showCount;
          });
          document.querySelectorAll<HTMLElement>(`[data-section-bar="${sectionId}"]`).forEach((barElement) => {
            barElement.hidden = !showCount;
            const fill = barElement.firstElementChild as HTMLElement | null;
            if (fill && showCount) fill.style.width = `${(100 * answered) / total}%`;
          });
        }
      })
      .catch(() => {});
  };
  refresh();
  window.addEventListener(STATUS_EVENT, refresh);
  window.addEventListener(LECTURE_EVENT, refresh);
  window.addEventListener("storage", refresh);
}
