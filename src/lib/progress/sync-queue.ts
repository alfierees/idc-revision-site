// Changes waiting to reach the server. Persisted on the device, so nothing is lost offline or on reload.
import { markToKey, PREFIX } from "./marks";
import type { KeyValueStore } from "./store";
import { MAX_BATCH } from "./sync-constants";
import type { SyncItem } from "./sync-types";

const QUEUE_KEY = `${PREFIX}sync-queue`;
const DEBOUNCE_MS = 3000;
const FIRST_BACKOFF_MS = 2000;
const MAX_BACKOFF_MS = 60_000;

interface Options {
  storage: KeyValueStore;
  /** The queue belongs to one account; another account never sends it. */
  userId: string;
  /** Resolves true when the server accepted the batch. */
  send: (items: SyncItem[]) => Promise<boolean>;
  onPendingChange?: (pending: number) => void;
}

/** Items with the same identity replace each other: the newest change per mark, one entry per day, badge or course. */
function identity(item: SyncItem): string {
  switch (item.type) {
    case "mark": return `m:${markToKey(item.mark)}`;
    case "day": return `d:${item.day}`;
    case "badge": return `b:${item.badgeId}`;
    case "seen": return `s:${item.subject}`;
  }
}

export function createSyncQueue({ storage, userId, send, onPendingChange }: Options) {
  let items: SyncItem[] = [];
  try {
    const saved = JSON.parse(storage.getItem(QUEUE_KEY) ?? "null");
    if (saved?.userId === userId && Array.isArray(saved.items)) items = saved.items;
  } catch {
    // A corrupt queue is dropped; the next full sync re-uploads from the store.
  }
  let timer: ReturnType<typeof setTimeout> | undefined;
  let backoff = 0;
  let sending = false;

  const save = () => {
    try {
      storage.setItem(QUEUE_KEY, JSON.stringify({ userId, items }));
    } catch {
      // Storage full or blocked: the queue still works for this page.
    }
    onPendingChange?.(items.length);
  };
  const schedule = (delay: number) => {
    clearTimeout(timer);
    timer = setTimeout(() => void flush(), delay);
  };

  async function flush(): Promise<void> {
    if (sending || items.length === 0) return;
    sending = true;
    const batch = items.slice(0, MAX_BATCH);
    const ok = await send(batch).catch(() => false);
    sending = false;
    if (ok) {
      const sent = new Set(batch);
      items = items.filter((item) => !sent.has(item));
      backoff = 0;
      save();
      if (items.length > 0) schedule(0);
    } else {
      backoff = Math.min(backoff ? backoff * 2 : FIRST_BACKOFF_MS, MAX_BACKOFF_MS);
      schedule(backoff);
    }
  }

  return {
    enqueue(item: SyncItem) {
      const id = identity(item);
      items = [...items.filter((existing) => identity(existing) !== id), item];
      save();
      if (!backoff && !sending) schedule(DEBOUNCE_MS);
    },
    flush,
    pending: () => items.length,
    /** For page close: the next batch to hand to sendBeacon. Nothing is forgotten until confirmDrained. */
    drain: (): SyncItem[] => items.slice(0, MAX_BATCH),
    confirmDrained(handedOff: SyncItem[]) {
      const gone = new Set(handedOff);
      items = items.filter((item) => !gone.has(item));
      save();
    },
    stop() {
      clearTimeout(timer);
    },
  };
}

export type SyncQueue = ReturnType<typeof createSyncQueue>;
