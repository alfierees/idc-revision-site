// Proves the owner views stay anonymous: a question only shows up in question_stats once 5+
// students have marked it. Runs against TEST_DATABASE_URL and cleans up after itself.
// Usage: npm run db:check-views
import pg from "pg";
import { strictSsl } from "../../src/lib/db/client";
import { applyBatch } from "../../src/lib/db/progress";
import { findOrCreateUser } from "../../src/lib/db/users";

const url = process.env.TEST_DATABASE_URL;
if (!url) throw new Error("TEST_DATABASE_URL is not set");
const pool = new pg.Pool({ connectionString: strictSsl(url), max: 3 });
const run = `views_${Date.now()}`;
const question = { subject: "micro", kind: "problem-set" as const, ref: run, itemId: "1" };

async function statsRow() {
  const result = await pool.query("select attempts, wrong_pct from question_stats where ref = $1", [run]);
  return result.rows[0] ?? null;
}

try {
  let leakedEarly = false;
  for (let i = 0; i < 5; i++) {
    const user = await findOrCreateUser(pool, `${run}_${i}`, async () => ({ email: `s${i}@example.com`, displayName: `S${i}` }));
    await applyBatch(pool, user.id, [{ type: "mark", mark: { ...question, value: "wrong", updatedAt: new Date().toISOString() } }]);
    const row = await statsRow();
    if (row && i < 4) leakedEarly = true;
    console.log(`${i + 1} student(s): ${row ? `visible, attempts ${row.attempts}, wrong ${row.wrong_pct}%` : "hidden"}`);
  }
  const final = await statsRow();
  if (leakedEarly || !final || Number(final.wrong_pct) !== 100 || Number(final.attempts) !== 5) {
    throw new Error("owner view check failed");
  }
  console.log("owner views: ok (hidden below 5 students, 100% wrong at 5)");
} finally {
  await pool.query("delete from users where clerk_id like $1", [`${run}%`]);
  await pool.end();
}
