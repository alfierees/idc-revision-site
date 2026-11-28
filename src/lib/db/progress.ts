// Saving and loading one user's progress. Merge rules match src/lib/progress/merge.ts:
// newest mark wins, days union, badges keep their earliest date, last-seen keeps the newest.
import type pg from "pg";
import type { Queryable } from "./client";
import { DEFAULT_DEGREE } from "./degree";
import type { ServerProgress, SyncItem } from "../progress/sync-types";

async function applyItem(sql: Queryable, userId: string, degree: string, item: SyncItem): Promise<void> {
  switch (item.type) {
    case "mark": {
      const m = item.mark;
      const params = [userId, degree, m.subject, m.kind, m.ref, m.itemId, m.value, m.updatedAt];
      await sql.query(
        `insert into marks (user_id, degree, subject, kind, ref, item_id, value, updated_at)
         values ($1, $2, $3, $4, $5, $6, $7, $8)
         on conflict (user_id, degree, subject, kind, ref, item_id)
         do update set value = excluded.value, updated_at = excluded.updated_at
         where marks.updated_at < excluded.updated_at`,
        params,
      );
      await sql.query(
        `insert into mark_events (user_id, degree, subject, kind, ref, item_id, value, at)
         values ($1, $2, $3, $4, $5, $6, $7, $8)`,
        params,
      );
      return;
    }
    case "day":
      await sql.query("insert into activity_days (user_id, day) values ($1, $2) on conflict do nothing", [userId, item.day]);
      return;
    case "badge":
      await sql.query(
        `insert into badges (user_id, badge_id, earned_on) values ($1, $2, $3)
         on conflict (user_id, badge_id) do update set earned_on = least(badges.earned_on, excluded.earned_on)`,
        [userId, item.badgeId, item.earnedOn],
      );
      return;
    case "seen":
      await sql.query(
        `insert into last_seen (user_id, degree, subject, path, title, seen_at) values ($1, $2, $3, $4, $5, $6)
         on conflict (user_id, degree, subject)
         do update set path = excluded.path, title = excluded.title, seen_at = excluded.seen_at
         where last_seen.seen_at < excluded.seen_at`,
        [userId, degree, item.subject, item.path, item.title, item.seenAt],
      );
  }
}

/** Saves a whole batch in one transaction: all of it or none of it. */
export async function applyBatch(pool: pg.Pool, userId: string, items: SyncItem[], degree = DEFAULT_DEGREE): Promise<void> {
  const client = await pool.connect();
  try {
    await client.query("begin");
    for (const item of items) await applyItem(client, userId, degree, item);
    await client.query("commit");
  } catch (error) {
    await client.query("rollback");
    throw error;
  } finally {
    client.release();
  }
}

export async function loadProgress(sql: Queryable, userId: string, degree = DEFAULT_DEGREE): Promise<ServerProgress> {
  const [marks, days, badges, seen] = await Promise.all([
    sql.query("select subject, kind, ref, item_id, value, updated_at from marks where user_id = $1 and degree = $2", [userId, degree]),
    sql.query("select to_char(day, 'YYYY-MM-DD') as day from activity_days where user_id = $1 order by day", [userId]),
    sql.query("select badge_id, to_char(earned_on, 'YYYY-MM-DD') as earned_on from badges where user_id = $1", [userId]),
    sql.query(
      "select subject, path, title, seen_at from last_seen where user_id = $1 and degree = $2 order by seen_at desc",
      [userId, degree],
    ),
  ]);
  return {
    marks: marks.rows.map((r) => ({
      subject: r.subject, kind: r.kind, ref: r.ref, itemId: r.item_id, value: r.value, updatedAt: r.updated_at.toISOString(),
    })),
    days: days.rows.map((r) => r.day),
    badges: Object.fromEntries(badges.rows.map((r) => [r.badge_id, r.earned_on])),
    lastSeen: seen.rows.map((r) => ({ subject: r.subject, path: r.path, title: r.title, seenAt: r.seen_at.toISOString() })),
  };
}
