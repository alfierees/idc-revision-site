// GET: everything this user has synced. POST: a batch of changes from a device.
import type { APIRoute } from "astro";
import { getCurrentUser, json, unauthorized } from "../../lib/auth/server";
import { db } from "../../lib/db/client";
import { applyBatch, loadProgress } from "../../lib/db/progress";
import { SyncBatch } from "../../lib/progress/sync-types";

export const prerender = false;

export const GET: APIRoute = async (context) => {
  const user = await getCurrentUser(context);
  if (!user) return unauthorized();
  return json(await loadProgress(db(), user.id));
};

export const POST: APIRoute = async (context) => {
  const user = await getCurrentUser(context);
  if (!user) return unauthorized();
  const parsed = SyncBatch.safeParse(await context.request.json().catch(() => null));
  if (!parsed.success) return json({ error: "That batch couldn't be read." }, 400);
  await applyBatch(db(), user.id, parsed.data.items);
  return json({ saved: parsed.data.items.length });
};
