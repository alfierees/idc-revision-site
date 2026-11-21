// Integration tests against the Neon "test" branch. Run with `npm run test:db`;
// skipped under plain `npm test`, where TEST_DATABASE_URL isn't loaded.
import { afterAll, describe, expect, it } from "vitest";
import pg from "pg";
import { strictSsl } from "../src/lib/db/client";
import { applyBatch, loadProgress } from "../src/lib/db/progress";
import { deleteUserData, findOrCreateUser, setDisplayName } from "../src/lib/db/users";
import type { SyncItem } from "../src/lib/progress/sync-types";

const url = process.env.TEST_DATABASE_URL;
const pool = url ? new pg.Pool({ connectionString: strictSsl(url), max: 3 }) : null;
const RUN = `test_${Date.now()}`;

afterAll(async () => {
  await pool?.query("delete from users where clerk_id like $1", [`${RUN}%`]);
  await pool?.end();
});

const newUser = () =>
  findOrCreateUser(pool!, `${RUN}_${crypto.randomUUID()}`, async () => ({ email: "t@example.com", displayName: "Test" }));
const mark = (value: "done" | "wrong" | "untried", updatedAt: string): SyncItem => ({
  type: "mark",
  mark: { subject: "micro", kind: "problem-set", ref: "ps-1", itemId: "1", value, updatedAt },
});

describe.skipIf(!url)("progress sql", () => {
  it("creates the user once and only fetches the profile the first time", async () => {
    const clerkId = `${RUN}_${crypto.randomUUID()}`;
    const first = await findOrCreateUser(pool!, clerkId, async () => ({ email: "a@example.com", displayName: "A" }));
    const again = await findOrCreateUser(pool!, clerkId, async () => { throw new Error("fetched twice"); });
    expect(again.id).toBe(first.id);
    await setDisplayName(pool!, first.id, "Renamed");
    const renamed = await findOrCreateUser(pool!, clerkId, async () => { throw new Error("fetched twice"); });
    expect(renamed.displayName).toBe("Renamed");
  });

  it("newest change wins; an older write never regresses it; a clear syncs as a value", async () => {
    const user = await newUser();
    await applyBatch(pool!, user.id, [mark("wrong", "2026-11-02T00:00:00.000Z")]);
    await applyBatch(pool!, user.id, [mark("done", "2026-11-01T00:00:00.000Z")]);
    expect((await loadProgress(pool!, user.id)).marks).toEqual([expect.objectContaining({ value: "wrong" })]);
    await applyBatch(pool!, user.id, [mark("untried", "2026-11-03T00:00:00.000Z")]);
    expect((await loadProgress(pool!, user.id)).marks).toEqual([
      expect.objectContaining({ value: "untried", updatedAt: "2026-11-03T00:00:00.000Z" }),
    ]);
    const events = await pool!.query("select count(*)::int as n from mark_events where user_id = $1", [user.id]);
    expect(events.rows[0].n).toBe(3);
  });

  it("keeps the earliest badge date, unions days and keeps the newest last-seen", async () => {
    const user = await newUser();
    const seen = (title: string, seenAt: string): SyncItem =>
      ({ type: "seen", subject: "micro", path: `/subjects/micro/${title}`, title, seenAt });
    await applyBatch(pool!, user.id, [
      { type: "badge", badgeId: "lectures-1", earnedOn: "2026-11-05" }, { type: "day", day: "2026-11-05" },
      seen("newer", "2026-11-05T10:00:00.000Z"),
    ]);
    await applyBatch(pool!, user.id, [
      { type: "badge", badgeId: "lectures-1", earnedOn: "2026-11-01" }, { type: "day", day: "2026-11-05" },
      { type: "day", day: "2026-11-04" }, seen("older", "2026-11-04T10:00:00.000Z"),
    ]);
    const progress = await loadProgress(pool!, user.id);
    expect(progress.badges).toEqual({ "lectures-1": "2026-11-01" });
    expect(progress.days).toEqual(["2026-11-04", "2026-11-05"]);
    expect(progress.lastSeen).toEqual([expect.objectContaining({ title: "newer" })]);
  });

  it("only returns the caller's rows, and deleting a user removes everything", async () => {
    const owner = await newUser();
    const other = await newUser();
    await applyBatch(pool!, owner.id, [mark("done", "2026-11-02T00:00:00.000Z"), { type: "day", day: "2026-11-02" }]);
    expect((await loadProgress(pool!, other.id)).marks).toEqual([]);
    await deleteUserData(pool!, owner.id);
    const leftovers = await pool!.query(
      `select (select count(*) from marks where user_id = $1) + (select count(*) from mark_events where user_id = $1)
            + (select count(*) from activity_days where user_id = $1) as n`, [owner.id]);
    expect(Number(leftovers.rows[0].n)).toBe(0);
  });
});
