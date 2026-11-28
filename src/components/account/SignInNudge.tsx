// Sitewide notices about accounts, in the same toast slot as badges:
// - signed out: after the first real tick of a visit, "Saved on this device. Sign in to keep it everywhere."
//   Once per visit; "Don't ask again" stops it on this device.
// - signed in: after a first sign-in merged this device's ticks, how many were added.
import { useEffect, useState } from "preact/hooks";
import { isSignedIn, openSignIn } from "../../lib/auth/session";
import { LECTURE_EVENT } from "../../lib/progress/store";
import { SYNC_MERGED_EVENT } from "../../lib/progress/sync-constants";
import { STATUS_EVENT } from "../../lib/status";

const SHOWN_THIS_VISIT = "idc-revision:nudge-shown";
/** A UI preference, so it survives sign-out (clearDevice only removes progress). */
const DISMISSED_KEY = "idc-revision:nudge-dismissed";
const SHOW_MS = 9000;

type Notice = { kind: "nudge" } | { kind: "merged"; added: number };

const safe = <T,>(read: () => T, fallback: T): T => { try { return read(); } catch { return fallback; } };

export default function SignInNudge() {
  const [notice, setNotice] = useState<Notice | null>(null);

  useEffect(() => {
    let hide: number | undefined;
    const show = (next: Notice) => {
      setNotice(next);
      window.clearTimeout(hide);
      hide = window.setTimeout(() => setNotice(null), SHOW_MS);
    };
    const onMark = (event: Event) => {
      const detail = (event as CustomEvent<{ value?: string; read?: boolean }>).detail ?? {};
      if (detail.value === "untried" || detail.read === false || isSignedIn()) return;
      if (safe(() => sessionStorage.getItem(SHOWN_THIS_VISIT) === "1", false)) return;
      if (safe(() => localStorage.getItem(DISMISSED_KEY) === "1", false)) return;
      safe(() => sessionStorage.setItem(SHOWN_THIS_VISIT, "1"), undefined);
      show({ kind: "nudge" });
    };
    const onMerged = (event: Event) => {
      const added = (event as CustomEvent<{ added: number }>).detail?.added ?? 0;
      if (added > 0) show({ kind: "merged", added });
    };
    window.addEventListener(STATUS_EVENT, onMark);
    window.addEventListener(LECTURE_EVENT, onMark);
    window.addEventListener(SYNC_MERGED_EVENT, onMerged);
    return () => {
      window.clearTimeout(hide);
      window.removeEventListener(STATUS_EVENT, onMark);
      window.removeEventListener(LECTURE_EVENT, onMark);
      window.removeEventListener(SYNC_MERGED_EVENT, onMerged);
    };
  }, []);

  const close = () => setNotice(null);
  return (
    <div class="toaster toaster-account" role="status" aria-live="polite">
      {notice?.kind === "nudge" && (
        <div class="toast">
          <div class="toast-text">
            <p class="toast-line"><strong>Saved on this device.</strong> Sign in to keep it on your phone and laptop.</p>
            <p class="toast-actions">
              <button type="button" class="toast-link" onClick={() => { close(); openSignIn(); }}>Sign in</button>
              <button type="button" class="toast-quiet" onClick={() => { safe(() => localStorage.setItem(DISMISSED_KEY, "1"), undefined); close(); }}>
                Don't ask again
              </button>
            </p>
          </div>
          <button type="button" class="toast-close" aria-label="Close" onClick={close}>×</button>
        </div>
      )}
      {notice?.kind === "merged" && (
        <div class="toast">
          <div class="toast-text">
            <p class="toast-line">
              <strong>Added {notice.added} {notice.added === 1 ? "tick" : "ticks"}</strong> from this device to your account.
            </p>
            <a class="toast-link" href="/progress">See your progress →</a>
          </div>
          <button type="button" class="toast-close" aria-label="Close" onClick={close}>×</button>
        </div>
      )}
    </div>
  );
}
