// The You section. Signed in: your name (editable), rank, semester, your data, sign out and
// delete account. Signed out: what an account gives you, and the sign-in button.
import { useEffect, useState } from "preact/hooks";
import { openSignIn, signOut, useAuthUser } from "../../lib/auth/session";
import { evaluate, loadTotals } from "../../lib/progress/client";
import { SEMESTERS, SEMESTER_STORAGE_KEY } from "../../lib/semesters";
import { initials } from "./HeaderAccount";

interface Me { displayName: string; email: string; createdAt: string }

const joinedLabel = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

function SignedOut() {
  return (
    <section class="pitch-card" aria-labelledby="you-pitch">
      <h2 class="pitch-title" id="you-pitch">Keep your revision with you</h2>
      <ul class="you-list">
        <li>Your ticks and lectures read, saved on your phone and your laptop.</li>
        <li>A rank, a streak calendar and 29 badges on the Progress page.</li>
        <li>Pick up where you left off, on any device.</li>
      </ul>
      <button type="button" class="acct-signin pitch-cta" onClick={openSignIn}>Sign in</button>
      <p class="pitch-small">Free. Google or an email link, no password. <a href="/privacy">How your data is handled</a></p>
    </section>
  );
}

function NameEditor({ name, onSaved }: { name: string; onSaved: (name: string) => void }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(name);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  const save = async (event: Event) => {
    event.preventDefault();
    setSaving(true);
    setError("");
    try {
      const response = await fetch("/api/me", {
        method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ displayName: draft }),
      });
      const body = await response.json();
      if (!response.ok) throw new Error(body.error ?? "That didn't save.");
      onSaved(body.displayName);
      setEditing(false);
    } catch (problem) {
      setError(problem instanceof Error ? problem.message : "That didn't save.");
    } finally {
      setSaving(false);
    }
  };

  if (!editing) {
    return (
      <div class="you-name-row">
        <h2 class="you-name">{name}</h2>
        <button type="button" class="btn-link" onClick={() => { setDraft(name); setEditing(true); }}>Edit name</button>
      </div>
    );
  }
  return (
    <form class="you-name-form" onSubmit={save}>
      <label class="you-label" for="display-name">Your name</label>
      <div class="you-name-fields">
        <input id="display-name" class="you-input" value={draft} maxLength={60} required autoFocus
          onInput={(event) => setDraft((event.target as HTMLInputElement).value)} />
        <button type="submit" class="acct-signin" disabled={saving}>{saving ? "Saving…" : "Save"}</button>
        <button type="button" class="btn-link" onClick={() => setEditing(false)}>Cancel</button>
      </div>
      {error && <p class="you-error" role="alert">{error}</p>}
    </form>
  );
}

function DeleteAccount() {
  const [confirming, setConfirming] = useState(false);
  const [state, setState] = useState<"idle" | "deleting" | "failed">("idle");

  const remove = async () => {
    setState("deleting");
    try {
      const response = await fetch("/api/account", { method: "DELETE" });
      if (!response.ok) throw new Error();
      await signOut();
    } catch {
      setState("failed");
    }
  };

  if (!confirming) {
    return <button type="button" class="btn-danger-text" onClick={() => setConfirming(true)}>Delete account</button>;
  }
  return (
    <div class="you-confirm" role="alertdialog" aria-labelledby="delete-title" aria-describedby="delete-body">
      <p class="you-confirm-title" id="delete-title">Delete your account for good?</p>
      <p class="you-confirm-body" id="delete-body">
        Your account and all the progress synced to it are removed, and this can't be undone. Download your
        data first if you want a copy.
      </p>
      <div class="you-actions">
        <button type="button" class="btn-danger" onClick={() => void remove()} disabled={state === "deleting"}>
          {state === "deleting" ? "Deleting…" : "Delete for good"}
        </button>
        <button type="button" class="btn-link" onClick={() => setConfirming(false)} disabled={state === "deleting"}>Keep my account</button>
      </div>
      {state === "failed" && <p class="you-error" role="alert">That didn't work, and nothing was deleted. Try again in a moment.</p>}
    </div>
  );
}

export default function ProfilePage() {
  const user = useAuthUser();
  const [me, setMe] = useState<Me | null>(null);
  const [failed, setFailed] = useState(false);
  const [rank, setRank] = useState<{ name: string; badges: number } | null>(null);
  const [semester, setSemester] = useState<string | null>(null);

  useEffect(() => {
    if (!user) return;
    fetch("/api/me").then((r) => (r.ok ? r.json() : Promise.reject())).then(setMe).catch(() => setFailed(true));
    loadTotals().then((totals) => {
      const view = evaluate(totals);
      setRank({ name: view.rank.current.name, badges: Object.keys(view.ledger).length });
    }).catch(() => {});
    try {
      const id = localStorage.getItem(SEMESTER_STORAGE_KEY);
      setSemester(SEMESTERS.find((s) => s.id === id)?.label ?? null);
    } catch {}
  }, [user?.id]);

  if (user === undefined) return <p class="pp-loading" aria-live="polite">Loading…</p>;
  if (user === null) return <SignedOut />;
  if (failed) return <p class="you-error" role="alert">Your profile didn't load. Check your connection and refresh.</p>;
  if (!me) return <p class="pp-loading" aria-live="polite">Loading your profile…</p>;

  return (
    <div class="you">
      <section class="you-card" aria-label="Your profile">
        <div class="you-head">
          <span class="acct-avatar you-avatar" aria-hidden="true">
            {user.imageUrl ? <img src={user.imageUrl} alt="" width="56" height="56" /> : initials(me.displayName)}
          </span>
          <div class="you-id">
            <NameEditor name={me.displayName} onSaved={(displayName) => setMe({ ...me, displayName })} />
            <p class="you-meta">{me.email}<br />Joined {joinedLabel(me.createdAt)}</p>
          </div>
        </div>
        <dl class="you-facts">
          <div><dt>Rank</dt><dd>{rank ? <a href="/progress">{rank.name} · {rank.badges} of 29 badges</a> : "…"}</dd></div>
          <div><dt>Semester</dt><dd>{semester ?? "Not picked yet"} <a href="/" class="btn-link">Change on Home</a></dd></div>
        </dl>
      </section>

      <section class="you-card" aria-labelledby="data-title">
        <h2 class="you-section-title" id="data-title">Your data</h2>
        <p class="you-body">
          Your ticks, lectures read, revision days and badges are saved to your account so they follow you between
          devices. Only you can see them. Course-wide numbers only ever count groups of five or more students.{" "}
          <a href="/privacy">How your data is handled</a>
        </p>
        <div class="you-actions">
          <a class="btn-outline" href="/api/export" download>Download my data</a>
          <button type="button" class="btn-outline" onClick={() => void signOut()}>Sign out</button>
        </div>
        <p class="you-small">Signing out clears your progress from this device. It stays safe in your account.</p>
      </section>

      <section class="you-card you-danger" aria-label="Delete account">
        <DeleteAccount />
      </section>
    </div>
  );
}
