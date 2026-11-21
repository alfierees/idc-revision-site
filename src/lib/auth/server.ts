// The only server file that talks to Clerk. Routes ask for "the current user" and get our own
// user row back, so swapping the auth provider later means changing this file, not the routes.
import type { APIContext } from "astro";
import { clerkClient } from "@clerk/astro/server";
import { db } from "../db/client";
import { findOrCreateUser, type AppUser } from "../db/users";

export async function getCurrentUser(context: APIContext): Promise<AppUser | null> {
  const { isAuthenticated, userId } = context.locals.auth();
  if (!isAuthenticated || !userId) return null;
  return findOrCreateUser(db(), userId, async () => {
    const clerkUser = await clerkClient(context).users.getUser(userId);
    const email = clerkUser.primaryEmailAddress?.emailAddress ?? "";
    const displayName = [clerkUser.firstName, clerkUser.lastName].filter(Boolean).join(" ") || email.split("@")[0];
    return { email, displayName };
  });
}

export async function deleteAuthAccount(context: APIContext, clerkId: string): Promise<void> {
  await clerkClient(context).users.deleteUser(clerkId);
}

export const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });

export const unauthorized = () => json({ error: "Sign in to sync your progress." }, 401);
