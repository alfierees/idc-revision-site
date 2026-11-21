// Dependency-free sync constants, safe to import from any island without pulling in zod.

/** Most items in one POST to /api/progress. */
export const MAX_BATCH = 500;

/** First sign-in on a device merged its ticks into the account. detail: { added: number } */
export const SYNC_MERGED_EVENT = "idc-sync-merged";
/** Server data was applied to this device; anything showing progress should re-read. */
export const SYNC_PULLED_EVENT = "idc-sync-pulled";
/** detail: { pending: number } — changes not yet saved to the account. */
export const SYNC_PENDING_EVENT = "idc-sync-pending";
