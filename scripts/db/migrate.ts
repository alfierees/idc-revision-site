// Applies db/migrations/*.sql in name order, each once, recording them in schema_migrations.
// Usage: npm run db:migrate [-- <name of the env var holding the URL>]   (default DATABASE_URL)
import { readdirSync, readFileSync } from "node:fs";
import pg from "pg";
import { strictSsl } from "../../src/lib/db/client";

const envName = process.argv[2] ?? "DATABASE_URL";
const url = process.env[envName];
if (!url) throw new Error(`${envName} is not set`);

const client = new pg.Client({ connectionString: strictSsl(url) });
await client.connect();
try {
  await client.query(
    "create table if not exists schema_migrations (name text primary key, applied_at timestamptz not null default now())",
  );
  const applied = new Set((await client.query("select name from schema_migrations")).rows.map((row) => row.name));
  const files = readdirSync("db/migrations").filter((file) => file.endsWith(".sql")).sort();
  let count = 0;
  for (const file of files) {
    if (applied.has(file)) continue;
    await client.query("begin");
    try {
      await client.query(readFileSync(`db/migrations/${file}`, "utf8"));
      await client.query("insert into schema_migrations (name) values ($1)", [file]);
      await client.query("commit");
      console.log(`applied ${file}`);
      count++;
    } catch (error) {
      await client.query("rollback");
      throw error;
    }
  }
  console.log(`${envName}: ${count} migration(s) applied, ${files.length} in total`);
} finally {
  await client.end();
}
