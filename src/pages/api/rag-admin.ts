import type { APIRoute } from "astro";
import { timingSafeEqual } from "node:crypto";
import { vectorIndex } from "../../lib/rag/vector";

export const prerender = false;

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: {
    "content-type": "application/json", "cache-control": "no-store",
  } });
}

export const POST: APIRoute = async ({ request }) => {
  const secret = process.env.RAG_ADMIN_SECRET;
  if (!secret || secret.length < 32) return json({ error: "Unavailable" }, 404);
  const given = request.headers.get("authorization")?.replace(/^Bearer /, "") ?? "";
  const expectedBytes = Buffer.from(secret);
  const givenBytes = Buffer.from(given);
  if (givenBytes.length !== expectedBytes.length || !timingSafeEqual(givenBytes, expectedBytes)) {
    return json({ error: "Unauthorized" }, 401);
  }
  if (Number(request.headers.get("content-length") ?? 0) > 1_000_000) return json({ error: "Too large" }, 413);
  let body: Record<string, unknown>;
  try { body = await request.json(); } catch { return json({ error: "Invalid JSON" }, 400); }
  const strategy = body.strategy;
  if (strategy !== "fixed" && strategy !== "paragraph" && strategy !== "structure") {
    return json({ error: "Invalid strategy" }, 400);
  }
  const index = vectorIndex();
  const namespace = index.namespace(`rag-${strategy}`);
  try {
    if (body.action === "upsert") {
      if (!Array.isArray(body.items) || body.items.length < 1 || body.items.length > 90) {
        return json({ error: "Invalid batch" }, 400);
      }
      const items = body.items as Array<{ id: string; data: string; metadata: Record<string, string | number> }>;
      if (items.some((item) => typeof item.id !== "string" || typeof item.data !== "string" ||
          item.data.length > 4000 || typeof item.metadata?.docId !== "string")) {
        return json({ error: "Invalid item" }, 400);
      }
      await namespace.upsert(items);
      return json({ uploaded: items.length });
    }
    if (body.action === "query" && typeof body.question === "string" && body.question.length <= 600) {
      const filter = typeof body.subject === "string" && /^[a-z-]+$/.test(body.subject)
        ? `subject = '${body.subject}'` : undefined;
      const hits = await namespace.query({ data: body.question, topK: 10, filter,
        includeData: true, includeMetadata: true });
      return json({ hits });
    }
    if (body.action === "delete") {
      if ((await index.listNamespaces()).includes(`rag-${strategy}`)) await index.deleteNamespace(`rag-${strategy}`);
      return json({ deleted: strategy });
    }
    if (body.action === "info") return json({ info: await index.info() });
    return json({ error: "Invalid action" }, 400);
  } catch (error) {
    console.error("RAG admin action failed", error instanceof Error ? error.message : "unknown");
    return json({ error: "Action failed" }, 502);
  }
};
