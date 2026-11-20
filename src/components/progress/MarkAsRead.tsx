import { useEffect, useState } from "preact/hooks";
import { localDay } from "../../lib/progress/days";
import { LECTURE_EVENT, progressStore } from "../../lib/progress/store";

interface Props {
  subject: string;
  lecture: string;
}

// Button at the end of a lecture. Reads the stored state in an effect so the
// static HTML and the first hydrated render agree.
export default function MarkAsRead({ subject, lecture }: Props) {
  const [read, setRead] = useState(false);

  useEffect(() => {
    setRead(progressStore().lectureRead(subject, lecture));
  }, [subject, lecture]);

  const change = (nextRead: boolean) => {
    const store = progressStore();
    store.setLectureRead(subject, lecture, nextRead);
    if (nextRead) store.recordActivity(localDay(new Date()));
    setRead(nextRead);
    window.dispatchEvent(new CustomEvent(LECTURE_EVENT, { detail: { subject, lecture, read: nextRead } }));
  };

  return read ? (
    <p class="mark-read mark-read-done">
      <span aria-hidden="true">✓</span> Read
      <span aria-hidden="true"> · </span>
      <button type="button" class="mark-read-undo" onClick={() => change(false)}>Undo</button>
    </p>
  ) : (
    <button type="button" class="mark-read-btn" onClick={() => change(true)}>Mark as read</button>
  );
}
