// Our own users table. Clerk's id is just a column, so the auth provider can be swapped.
import type { Queryable } from "./client";

export interface AppUser {
  id: string;
  clerkId: string;
  email: string;
  displayName: string;
  createdAt: string;
}

interface UserRow { id: string; clerk_id: string; email: string; display_name: string; created_at: Date }
const toUser = (row: UserRow): AppUser => ({
  id: row.id, clerkId: row.clerk_id, email: row.email, displayName: row.display_name, createdAt: row.created_at.toISOString(),
});

/** The user for this Clerk id, created on first sign-in. The profile is only fetched for a new user. */
export async function findOrCreateUser(
  sql: Queryable,
  clerkId: string,
  fetchProfile: () => Promise<{ email: string; displayName: string }>,
): Promise<AppUser> {
  const found = await sql.query<UserRow>("select * from users where clerk_id = $1", [clerkId]);
  if (found.rows[0]) return toUser(found.rows[0]);
  const profile = await fetchProfile();
  // Two first requests at once: the second insert becomes a no-op update and returns the same row.
  const inserted = await sql.query<UserRow>(
    `insert into users (clerk_id, email, display_name) values ($1, $2, $3)
     on conflict (clerk_id) do update set clerk_id = excluded.clerk_id
     returning *`,
    [clerkId, profile.email, profile.displayName],
  );
  return toUser(inserted.rows[0]);
}

export async function setDisplayName(sql: Queryable, userId: string, displayName: string): Promise<void> {
  await sql.query("update users set display_name = $2 where id = $1", [userId, displayName]);
}

/** Hard delete. Every progress table cascades from users. */
export async function deleteUserData(sql: Queryable, userId: string): Promise<void> {
  await sql.query("delete from users where id = $1", [userId]);
}
