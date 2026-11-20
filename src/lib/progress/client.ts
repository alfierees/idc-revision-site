import { BADGES, earnedBadgeIds, keepsakesAt, rankFor } from "./badges";
import { degreeProgress } from "./coverage";
import { localDay } from "./days";
import { BADGE_EVENT, progressStore } from "./store";
import { gentleStreak } from "./streak";
import type { ProgressTotals } from "./types";

let totalsRequest: Promise<ProgressTotals> | null = null;
export function loadTotals(): Promise<ProgressTotals> {
  totalsRequest ??= fetch("/progress-totals.json").then((r) => r.json() as Promise<ProgressTotals>);
  return totalsRequest;
}

export function evaluate(totals: ProgressTotals, now = new Date()) {
  const store = progressStore();
  const activityDays = store.activityDays();
  const degree = degreeProgress(totals, store.snapshot());
  const streak = gentleStreak(activityDays, localDay(now));
  const ctx = { degree, streak, activityDays };
  const ledger = store.ledger();
  return { ctx, degree, streak, activityDays, ledger, rank: rankFor(Object.keys(ledger).length), badges: BADGES };
}

/**
 * Brings the ledger up to date. `live` = this was triggered by a mark just now:
 * keepsakes for the current hour are checked and new badges are announced.
 * On page load (live = false) badges are backfilled silently.
 */
export async function syncBadges(live: boolean, now = new Date()): Promise<string[]> {
  const totals = await loadTotals();
  const { ctx } = evaluate(totals, now);
  const candidates = [...earnedBadgeIds(ctx), ...(live ? keepsakesAt(now.getHours()) : [])];
  const fresh = progressStore().addToLedger(candidates, localDay(now));
  if (live && fresh.length > 0) {
    window.dispatchEvent(new CustomEvent(BADGE_EVENT, { detail: { ids: fresh } }));
  }
  return fresh;
}
