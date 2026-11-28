// One pool per function instance (Vercel's Fluid Compute reuses instances across requests).
// Server-only: never import this from a component that runs in the browser.
import pg from "pg";

let pool: pg.Pool | null = null;

/**
 * Neon's URLs say sslmode=require. pg 8 already treats that as verify-full (full certificate
 * checks), but pg 9 will weaken it to libpq's meaning. Pin verify-full so an upgrade can't.
 */
export function strictSsl(url: string): string {
  return url.replace(/([?&])sslmode=(prefer|require|verify-ca)\b/, "$1sslmode=verify-full");
}

export function db(): pg.Pool {
  const url = import.meta.env.DATABASE_URL ?? process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL is not set");
  pool ??= new pg.Pool({ connectionString: strictSsl(url), max: 5 });
  return pool;
}

export type Queryable = Pick<pg.Pool, "query">;
