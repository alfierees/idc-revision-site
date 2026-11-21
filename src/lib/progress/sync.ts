// Keeps this device and the student's account in step while they're signed in.
// The device stays the working copy: every page works offline, and changes reach the server in the background.
import { clearedValue, PREFIX } from "./marks";
import {
  PROGRESS_CHANGE_EVENT, progressStore, type KeyValueStore, type ProgressChange, type ProgressStore,
} from "./store";
import { createSyncQueue, type SyncQueue } from "./sync-queue";
import { MAX_BATCH, SYNC_MERGED_EVENT, SYNC_PENDING_EVENT, SYNC_PULLED_EVENT } from "./sync-constants";
import type { ServerProgress, SyncItem } from "./sync-types";

export { SYNC_MERGED_EVENT, SYNC_PENDING_EVENT, SYNC_PULLED_EVENT };

/** Which account this device's progress belongs to. */
const SYNCED_USER_KEY = `${PREFIX}synced-user`;

type Fetcher = (url: string, init?: RequestInit) => Promise<Response>;

const postBatch = (fetcher: Fetcher) => async (items: SyncItem[]): Promise<boolean> => {
  const response = await fetcher("/api/progress", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ items }),
    credentials: "same-origin",
  });
  return response.ok;
};

/** Everything on this device, as sync items. */
function deviceItems(store: ProgressStore): SyncItem[] {
  return [
    ...store.allMarks().map((mark) => ({ type: "mark", mark }) as SyncItem),
    ...store.activityDays().map((day): SyncItem => ({ type: "day", day })),
    ...Object.entries(store.ledger()).map(([badgeId, earnedOn]): SyncItem => ({ type: "badge", badgeId, earnedOn })),
    ...store.lastSeen().map((entry): SyncItem => ({
      type: "seen", subject: entry.subject, path: entry.path, title: entry.title, seenAt: new Date(entry.at).toISOString(),
    })),
  ];
}

/**
 * Brings a device into step with the account:
 * - progress that belongs to nobody yet (made before signing in) is uploaded into this account;
 * - progress left by a different account (never signed out) is cleared, never uploaded;
 * - then the account's progress is pulled and merged in.
 * Returns how many ticks were added to the account and how many marks changed on this device.
 */
export async function runFirstSync({ store, storage, userId, fetcher }: {
  store: ProgressStore; storage: KeyValueStore; userId: string; fetcher: Fetcher;
}): Promise<{ added: number; pulled: number }> {
  let added = 0;
  const owner = storage.getItem(SYNCED_USER_KEY);
  if (owner !== null && owner !== userId) store.clearDevice();
  if (owner !== userId) {
    if (owner === null) {
      const items = deviceItems(store);
      for (let i = 0; i < items.length; i += MAX_BATCH) {
        if (!(await postBatch(fetcher)(items.slice(i, i + MAX_BATCH)))) throw new Error("upload failed");
      }
      added = items.filter((item) => item.type === "mark" && item.mark.value !== clearedValue(item.mark.kind)).length;
    }
    storage.setItem(SYNCED_USER_KEY, userId);
  }
  const response = await fetcher("/api/progress", { credentials: "same-origin" });
  if (!response.ok) throw new Error(`pull failed: ${response.status}`);
  const server = (await response.json()) as ServerProgress;
  let pulled = 0;
  for (const mark of server.marks) if (store.applyRemoteMark(mark)) pulled++;
  store.applyRemoteDays(server.days);
  store.applyRemoteBadges(server.badges);
  store.applyRemoteSeen(server.lastSeen);
  return { added, pulled };
}

let queue: SyncQueue | null = null;
let detach: (() => void) | null = null;

const announce = (name: string, detail?: unknown) => window.dispatchEvent(new CustomEvent(name, { detail }));

/** Called by the session module when a signed-in page loads or a student signs in. */
export async function startSync(userId: string): Promise<void> {
  if (queue) return;
  const storage = globalThis.localStorage;
  const store = progressStore();
  const activeQueue = createSyncQueue({
    storage, userId, send: postBatch(fetch), onPendingChange: (pending) => announce(SYNC_PENDING_EVENT, { pending }),
  });
  queue = activeQueue;
  const onChange = (event: Event) => activeQueue.enqueue((event as CustomEvent<ProgressChange>).detail);
  // Page closing: hand what's left to the browser, which finishes sending it after the tab is gone.
  const onHide = () => {
    if (activeQueue.pending() === 0) return;
    const items = activeQueue.drain();
    const body = new Blob([JSON.stringify({ items })], { type: "application/json" });
    if (navigator.sendBeacon("/api/progress", body)) activeQueue.confirmDrained(items);
  };
  window.addEventListener(PROGRESS_CHANGE_EVENT, onChange);
  window.addEventListener("pagehide", onHide);
  detach = () => {
    window.removeEventListener(PROGRESS_CHANGE_EVENT, onChange);
    window.removeEventListener("pagehide", onHide);
  };
  try {
    const { added, pulled } = await runFirstSync({ store, storage, userId, fetcher: fetch });
    if (added > 0) announce(SYNC_MERGED_EVENT, { added });
    if (pulled > 0 || added > 0) announce(SYNC_PULLED_EVENT);
    await activeQueue.flush();
  } catch {
    // Offline or the server is down: the device keeps working, and the queue retries on its own.
  }
}

/** Explicit sign-out: try to send what's left, then remove this student's progress from the device. */
export async function stopSync(): Promise<void> {
  if (queue) {
    await queue.flush().catch(() => {});
    queue.stop();
  }
  detach?.();
  queue = null;
  detach = null;
  progressStore().clearDevice();
  announce(SYNC_PULLED_EVENT);
}
