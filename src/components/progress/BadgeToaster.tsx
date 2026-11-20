import { useEffect, useRef, useState } from "preact/hooks";
import { BADGES } from "../../lib/progress/badges";
import { syncBadges } from "../../lib/progress/client";
import { BADGE_EVENT, LECTURE_EVENT } from "../../lib/progress/store";
import { STATUS_EVENT } from "../../lib/status";
import BadgeMedal from "./BadgeMedal";

const SHOW_MS = 6000;
const DEBOUNCE_MS = 300;

// Sitewide: silently backfills the badge ledger on load, then announces badges
// earned by a live mark with a quiet toast.
export default function BadgeToaster() {
  const [ids, setIds] = useState<string[]>([]);
  const hideTimer = useRef<number>();

  useEffect(() => {
    let debounce: number | undefined;
    syncBadges(false).catch(() => {});
    // Only a real mark can earn a badge: clearing a status (exam reset) or undoing a read can't.
    const onMark = (event: Event) => {
      const detail = (event as CustomEvent<{ value?: string; read?: boolean }>).detail ?? {};
      if (detail.value === "untried" || detail.read === false) return;
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

  const badges = ids.map((id) => BADGES.find((b) => b.id === id)).filter((b): b is (typeof BADGES)[number] => b !== undefined);
  const dismiss = () => {
    window.clearTimeout(hideTimer.current);
    setIds([]);
  };
  // Hold the toast while it's hovered or focused, so keyboard users can reach the link.
  const hold = () => window.clearTimeout(hideTimer.current);
  const release = () => {
    window.clearTimeout(hideTimer.current);
    hideTimer.current = window.setTimeout(() => setIds([]), SHOW_MS);
  };

  return (
    <div class="toaster" role="status" aria-live="polite">
      {badges.length > 0 && (
        <div class="toast" onMouseEnter={hold} onMouseLeave={release} onFocusIn={hold} onFocusOut={release}>
          <BadgeMedal badge={badges[0]} earnedOn="today" size="sm" />
          <div class="toast-text">
            <p class="toast-line">
              New badge · <strong>{badges.slice(0, 2).map((b) => b.name).join(", ")}</strong>
              {badges.length > 2 && ` +${badges.length - 2} more`}
            </p>
            <a class="toast-link" href="/#progress">See your badges →</a>
          </div>
          <button type="button" class="toast-close" aria-label="Dismiss" onClick={dismiss}>×</button>
        </div>
      )}
    </div>
  );
}
