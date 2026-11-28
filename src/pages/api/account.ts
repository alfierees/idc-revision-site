// DELETE: removes the account for good, our rows first (so a Clerk failure never leaves progress behind).
import type { APIRoute } from "astro";
import { deleteAuthAccount, getCurrentUser, json, unauthorized } from "../../lib/auth/server";
import { db } from "../../lib/db/client";
import { deleteUserData } from "../../lib/db/users";

export const prerender = false;

export const DELETE: APIRoute = async (context) => {
  const user = await getCurrentUser(context);
  if (!user) return unauthorized();
  await deleteUserData(db(), user.id);
  await deleteAuthAccount(context, user.clerkId);
  return json({ deleted: true });
};
