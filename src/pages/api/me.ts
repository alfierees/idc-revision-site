// GET: the signed-in user's profile. PATCH: change the display name.
import type { APIRoute } from "astro";
import { z } from "astro/zod";
import { getCurrentUser, json, unauthorized } from "../../lib/auth/server";
import { db } from "../../lib/db/client";
import { setDisplayName } from "../../lib/db/users";

export const prerender = false;

export const GET: APIRoute = async (context) => {
  const user = await getCurrentUser(context);
  if (!user) return unauthorized();
  return json({ displayName: user.displayName, email: user.email, createdAt: user.createdAt });
};

const Patch = z.object({ displayName: z.string().trim().min(1).max(60) });

export const PATCH: APIRoute = async (context) => {
  const user = await getCurrentUser(context);
  if (!user) return unauthorized();
  const parsed = Patch.safeParse(await context.request.json().catch(() => null));
  if (!parsed.success) return json({ error: "Names are 1 to 60 characters." }, 400);
  await setDisplayName(db(), user.id, parsed.data.displayName);
  return json({ displayName: parsed.data.displayName });
};
