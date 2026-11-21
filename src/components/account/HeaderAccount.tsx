// Top-right of the nav: a Sign in button when signed out, your avatar (linking to You) when signed in.
// The dot means changes are still waiting to reach your account (offline, or just made).
import { useEffect, useState } from "preact/hooks";
import { openSignIn, useAuthUser } from "../../lib/auth/session";
import { SYNC_PENDING_EVENT } from "../../lib/progress/sync-constants";

export function initials(name: string): string {
  const letters = name.trim().split(/\s+/).filter(Boolean).map((part) => part[0]);
  return (letters.length > 1 ? letters[0] + letters[letters.length - 1] : letters[0] ?? "?").toUpperCase();
}

export default function HeaderAccount() {
  const user = useAuthUser();
  const [pending, setPending] = useState(0);

  useEffect(() => {
    const onPending = (event: Event) => setPending((event as CustomEvent<{ pending: number }>).detail?.pending ?? 0);
    window.addEventListener(SYNC_PENDING_EVENT, onPending);
    return () => window.removeEventListener(SYNC_PENDING_EVENT, onPending);
  }, []);

  if (user === undefined) return <span class="acct-slot" aria-hidden="true" />;
  if (user === null) {
    return <button type="button" class="acct-signin" onClick={openSignIn}>Sign in</button>;
  }
  const label = pending > 0 ? `You: ${pending} change${pending === 1 ? "" : "s"} waiting to sync` : "You";
  return (
    <a href="/profile" class="acct-avatar" aria-label={label} title={label}>
      {user.imageUrl ? <img src={user.imageUrl} alt="" width="32" height="32" /> : <span>{initials(user.name)}</span>}
      {pending > 0 && <span class="acct-dot" aria-hidden="true" />}
    </a>
  );
}
