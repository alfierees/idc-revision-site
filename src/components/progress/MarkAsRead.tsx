import { useEffect, useState } from "preact/hooks";
import { SYNC_PULLED_EVENT } from "../../lib/progress/sync-constants";
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
    const reread = () => setRead(progressStore().lectureRead(subject, lecture));
    reread();
    // Synced progress arrived from the account.
    window.addEventListener(SYNC_PULLED_EVENT, reread);
    return () => window.removeEventListener(SYNC_PULLED_EVENT, reread);
  }, [subject, lecture]);

  const change = (nextRead: boolean) => {
    const store = progressStore();
    store.setLectureRead(subject, lecture, nextRead);
    if (nextRead) store.recordActivity(localDay(new Date()));
    setRead(nextRead);
    window.dispatchEvent(new CustomEvent(LECTURE_EVENT, { detail: { subject, lecture, read: nextRead } }));
  };

  // One button that toggles, so keyboard focus stays on it after a click.
  return (
    <button
      type="button"
      class={`mark-read-btn${read ? " mark-read-on" : ""}`}
      aria-pressed={read}
      onClick={() => change(!read)}
    >
      {read ? (
        <>
          <span aria-hidden="true">✓ </span>Read<span class="mark-read-undo" aria-hidden="true"> · Undo</span>
        </>
      ) : (
        "Mark as read"
      )}
    </button>
  );
}
