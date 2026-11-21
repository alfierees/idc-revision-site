// "Download my data": the account, current progress and full mark history as one JSON file.
import type { APIRoute } from "astro";
import { getCurrentUser, unauthorized } from "../../lib/auth/server";
import { db } from "../../lib/db/client";
import { loadProgress } from "../../lib/db/progress";

export const prerender = false;

export const GET: APIRoute = async (context) => {
  const user = await getCurrentUser(context);
  if (!user) return unauthorized();
  const history = await db().query(
    "select subject, kind, ref, item_id, value, at from mark_events where user_id = $1 order by at",
    [user.id],
  );
  const body = {
    account: { email: user.email, displayName: user.displayName, joined: user.createdAt },
    progress: await loadProgress(db(), user.id),
    history: history.rows,
  };
  return new Response(JSON.stringify(body, null, 2), {
    headers: {
      "Content-Type": "application/json",
      "Content-Disposition": 'attachment; filename="idc-revision-my-data.json"',
      "Cache-Control": "no-store",
    },
  });
};
