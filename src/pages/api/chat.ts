import type { APIRoute } from "astro";
import Anthropic from "@anthropic-ai/sdk";
import { Redis } from "@upstash/redis";
import indexData from "../../generated/chat-index.json";
import type { IndexChunk } from "../../lib/chat/types";
import { retrieve } from "../../lib/chat/retrieve";
import { sourcesFromChunks } from "../../lib/chat/sources";
import { SYSTEM_PROMPT, buildMessages, type ChatMessage } from "../../lib/chat/prompt";
import {
  checkRateLimit, checkBudget, recordCost, estimateCostUsd, currentYearMonth,
} from "../../lib/chat/ratelimit";

export const prerender = false;

const INDEX = indexData as IndexChunk[];
const MODEL = import.meta.env.CHAT_MODEL ?? "claude-haiku-4-5";
const MONTHLY_CAP_USD = Number(import.meta.env.CHAT_MONTHLY_CAP_USD ?? "5");
const PER_MINUTE = Number(import.meta.env.CHAT_RATE_PER_MINUTE ?? "10");
const MAX_MESSAGES = 20;
const MAX_CHARS = 2000;

const enc = new TextEncoder();
const line = (obj: unknown) => enc.encode(JSON.stringify(obj) + "\n");

export const POST: APIRoute = async ({ request, clientAddress }) => {
  let body: { messages?: ChatMessage[] };
  try {
    body = await request.json();
  } catch {
    return new Response("Bad request", { status: 400 });
  }
  const history = (body.messages ?? [])
    .filter((m) => (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
    .slice(-MAX_MESSAGES)
    .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_CHARS) }));
  const lastUser = [...history].reverse().find((m) => m.role === "user");
  if (!lastUser) return new Response("No question", { status: 400 });

  const redis = new Redis({
    url: import.meta.env.UPSTASH_REDIS_REST_URL,
    token: import.meta.env.UPSTASH_REDIS_REST_TOKEN,
  });
  const ym = currentYearMonth(new Date());

  if (!(await checkRateLimit(redis, clientAddress ?? "unknown", PER_MINUTE))) {
    return new Response(JSON.stringify({ error: "rate_limited" }), { status: 429 });
  }
  if (!(await checkBudget(redis, ym, MONTHLY_CAP_USD))) {
    return new Response(JSON.stringify({ error: "budget_exceeded" }), { status: 429 });
  }

  const chunks = retrieve(INDEX, lastUser.content, 8);
  const messages = buildMessages(history, chunks);
  const sources = sourcesFromChunks(chunks);
  const anthropic = new Anthropic({ apiKey: import.meta.env.ANTHROPIC_API_KEY });

  const stream = new ReadableStream({
    async start(controller) {
      try {
        const claude = anthropic.messages.stream({
          model: MODEL,
          max_tokens: 1024,
          system: SYSTEM_PROMPT,
          messages,
        });
        claude.on("text", (delta) => controller.enqueue(line({ type: "delta", text: delta })));
        const final = await claude.finalMessage();
        controller.enqueue(line({ type: "sources", sources }));
        controller.enqueue(line({ type: "done" }));
        const cost = estimateCostUsd(final.usage.input_tokens, final.usage.output_tokens);
        await recordCost(redis, ym, cost);
      } catch (err) {
        controller.enqueue(line({ type: "error", message: "The tutor is unavailable right now." }));
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: { "Content-Type": "application/x-ndjson; charset=utf-8", "Cache-Control": "no-store" },
  });
};
