import { useEffect, useRef, useState } from "preact/hooks";
import { BADGES } from "../../lib/progress/badges";
import { syncBadges } from "../../lib/progress/client";
import { BADGE_EVENT, LECTURE_EVENT } from "../../lib/progress/store";
import { STATUS_EVENT } from "../../lib/status";
import BadgeMedal from "./BadgeMedal";

const SHOW_MS = 4000;
const DEBOUNCE_MS = 300;

// Sitewide: silently backfills the badge ledger on load, then announces badges
// earned by a live mark with a quiet toast.
export default function BadgeToaster() {
  const [ids, setIds] = useState<string[]>([]);
  const hideTimer = useRef<number>();

  useEffect(() => {
    let debounce: number | undefined;
    syncBadges(false).catch(() => {});
    const onMark = () => {
      window.clearTimeout(debounce);
      debounce = window.setTimeout(() => void syncBadges(true).catch(() => {}), DEBOUNCE_MS);
    };
    const onBadges = (event: Event) => {
      const fresh = (event as CustomEvent<{ ids: string[] }>).detail?.ids ?? [];
      if (fresh.length === 0) return;
      setIds(fresh);
      window.clearTimeout(hideTimer.current);
      hideTimer.current = window.setTimeout(() => setIds([]), SHOW_MS);
    };
    window.addEventListener(STATUS_EVENT, onMark);
    window.addEventListener(LECTURE_EVENT, onMark);
    window.addEventListener(BADGE_EVENT, onBadges);
    return () => {
      window.clearTimeout(debounce);
      window.clearTimeout(hideTimer.current);
      window.removeEventListener(STATUS_EVENT, onMark);
      window.removeEventListener(LECTURE_EVENT, onMark);
      window.removeEventListener(BADGE_EVENT, onBadges);
    };
  }, []);

  const badges = ids.map((id) => BADGES.find((b) => b.id === id)).filter((b) => b !== undefined);
  const dismiss = () => {
    window.clearTimeout(hideTimer.current);
    setIds([]);
  };

  return (
    <div class="toaster" role="status" aria-live="polite">
      {badges.length > 0 && (
        <div class="toast" onClick={dismiss}>
          <BadgeMedal badge={badges[0]} earnedOn="today" size="sm" />
          <div class="toast-text">
            <p class="toast-line">
              New badge · <strong>{badges.slice(0, 2).map((b) => b.name).join(", ")}</strong>
              {badges.length > 2 && ` +${badges.length - 2} more`}
            </p>
            <a class="toast-link" href="/#progress" onClick={(e) => e.stopPropagation()}>See your badges →</a>
          </div>
        </div>
      )}
    </div>
  );
}
