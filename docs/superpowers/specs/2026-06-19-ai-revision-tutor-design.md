# AI Revision Tutor — Design Spec

**Date:** 2026-06-19
**Status:** Approved (brainstorm) — ready for implementation plan
**Project:** idc-revision-site (Astro, deployed on Vercel)

## 1. Goal

Add an AI chat tutor to the revision site that knows all the site's content and can:

1. **Answer conceptual questions** (e.g. "What's the connection between adverse selection and moral hazard?") with a concise, correct answer grounded only in the site's own material.
2. **Coach exam technique** (e.g. "How do I answer this kind of question?") by drawing on worked solutions, and **link the user to the relevant pages, past papers, and problem sets**.

Both behaviours live in a **single tutor**, available from every page. Answers are always **grounded** in retrieved site content and always **cite their sources** as clickable links.

## 2. Scope

**In scope (v1):**
- One chat tutor handling both conceptual Q&A and exam-technique coaching.
- Retrieval-augmented generation (RAG) over the existing content collections.
- Floating chat widget on every page, with streaming answers and a deterministic Sources list.
- Per-IP rate limiting and a global monthly spend cap.

**Out of scope (YAGNI — deferred):**
- **Semantic embeddings.** v1 uses lexical retrieval (reusing Fuse.js). Embeddings (Voyage AI) are a documented upgrade if recall proves weak.
- **PDF/docx parsing.** Not needed — the `past-papers` and `problem-sets` collections already contain worked solutions as markdown. Source documents are linked, not read.
- **Accounts / login.** The endpoint is public (link-shared); protection is rate-limit + spend cap, not auth.
- **Subject-aware retrieval bias** (nice-to-have v1.1).

## 3. Architecture

Three components, all in the existing repo, deployed together on Vercel. The static pages stay static; **one** new dynamic route is added via Astro's Vercel adapter (hybrid rendering).

```
Content collections (.md) ──(build step)──> content-index.json
                                                  │
Browser: chat widget (Preact island)             │
        │  POST { messages }                      │
        ▼                                         ▼
  Vercel serverless route  /api/chat  ── loads ── content-index.json
        │ 1. rate-limit + spend-cap check
        │ 2. lexical retrieval → top-K chunks (+ metadata)
        │ 3. Claude (grounded-tutor system prompt + chunks + history)
        │ 4. stream tokens
        └──> answer (streamed) + deterministic Sources[]
```

### 3.1 Build-time content index

A new script under `scripts/ingest/` (or a sibling `scripts/`), run as part of `astro build`, walks the content collections and emits `content-index.json`. The site's content is already structured for this — no schema changes needed.

**One entry per chunk:**
```ts
interface IndexChunk {
  id: string;              // stable chunk id
  text: string;            // chunk body (plain text, math/markdown stripped or kept simple)
  title: string;           // page title
  subject: string;         // accounting | econometrics | micro | macro-economics | machine-learning
  type: "term" | "recipe" | "lecture" | "past-paper" | "problem-set" | "glossary";
  url: string;             // canonical site page URL (for citation links)
  sourceDoc?: string;      // /papers/... PDF/doc link when present
  concepts: string[];      // tags / wiki-linked concept slugs
}
```

- **What it does:** turn the content collections into a flat, searchable, citable list of chunks.
- **How to use it:** `content-index.json` ships as a static build artifact; the endpoint reads it once per cold start and caches it across warm invocations, then queries via the retrieval module.
- **Depends on:** Astro content collections, existing slug/URL conventions (`linkHref` in `src/lib/known-links.ts`).

### 3.2 Retrieval module

- **What it does:** given a query string (latest user question, optionally plus the previous turn), return the top-K most relevant `IndexChunk`s.
- **How:** lexical search reusing **Fuse.js** (already a dependency) over `text` + `title` + `concepts`, weighted toward title/concepts. K ≈ 6–10.
- **How to use it:** `retrieve(query: string, k?: number): IndexChunk[]`.
- **Upgrade path:** swap the implementation for embeddings (Voyage AI) behind the same interface — no caller changes.

### 3.3 Chat endpoint (`/api/chat`)

A single Astro server endpoint (Vercel serverless). Per request:

1. **Guard:** check per-IP rate limit and global monthly spend cap (Section 6). If blocked, return a friendly message without calling Claude.
2. **Retrieve:** `retrieve(latestQuestion)` → top-K chunks.
3. **Assemble prompt:** grounded-tutor system prompt + a context block (each chunk with its title + URL) + the conversation history.
4. **Call Claude** (Haiku 4.5 default), **stream** the response back to the widget.
5. **Append Sources:** a deterministic list derived from the retrieved chunks actually provided (title + URL + sourceDoc), so links are never hallucinated.

**System prompt intent:** "You are a revision tutor for this site. Use ONLY the provided context. If the answer isn't in context, say so. You handle two modes — explain concepts, and coach exam technique using the worked solutions provided. Always be concise and cite sources." (Exact wording finalised in implementation.)

### 3.4 Chat widget (Preact island)

- Floating **"Ask"** button bottom-right, included once in the base layout → appears on every page. Opens a slide-up panel (full-screen on mobile).
- Message list (user/assistant), input, send. Streams tokens live.
- Assistant messages rendered through the existing markdown + KaTeX pipeline (`src/lib/render-markdown-string.ts`) so math and callouts render natively.
- Sources block at the end of each answer (clickable page links + doc downloads).
- Starter chips: "Explain a concept", "How do I answer this type of question?", "Find past papers on…".

## 4. Model & cost

- **Default:** Claude **Haiku 4.5** (`claude-haiku-4-5`). Retrieval puts the worked solutions/definitions in context, so the model mostly explains/synthesises — well-suited to Haiku.
- **Switch:** env var to use **Sonnet 4.6** (`claude-sonnet-4-6`) for heavier reasoning if needed.
- **Cost:** Haiku 4.5 is $1 / MTok input, $5 / MTok output. A typical question (~5k input tokens of system prompt + ~8 retrieved chunks + short history, ~800 output tokens) costs **~0.9¢**. The **$5/month spend cap** therefore buys **~550 questions/month** (conservative; with prompt-caching of the static system prompt, closer to ~1,000) — ample for the user plus friends during revision season.
- **Key:** one Anthropic API key as a Vercel env var. Never shipped to the browser.

## 5. Abuse protection

- **Per-IP rate limit** (~10/min, ~100/day) via Upstash Redis (free tier, native Vercel integration).
- **Global monthly spend cap of $5:** a running token-cost counter; once the month's accumulated cost reaches $5 the endpoint returns a friendly "limit reached" message instead of calling Claude — a hard ceiling on spend (~550–1,000 questions/month on Haiku 4.5). Resets monthly.
- **Input caps:** max message length, max turns per conversation, reject oversized payloads. No CAPTCHA.

## 6. Error handling

- Claude API error / timeout → graceful "couldn't reach the tutor, try again" message; nothing partial left dangling in the UI.
- Rate-limited / cap-exceeded → distinct friendly messages (not generic errors).
- Empty retrieval (nothing relevant) → tutor says it can't find that in the site content rather than inventing an answer.
- Malformed request → 400 with a clear message.

## 7. Testing

- **Vitest** (already in project). Unit tests for:
  - index builder — chunking + metadata extraction,
  - retrieval — query → expected page(s),
  - prompt assembly,
  - deterministic Sources list,
  - rate-limit / spend-cap logic.
- Claude call **mocked** in CI (no live API).
- A small hand-written **eval set** (~10 question → expected-source-page pairs) to sanity-check retrieval quality as content grows.

## 8. Deployment notes

- Add Astro's Vercel adapter (enables the one dynamic route; static pages unaffected).
- New env vars on Vercel: Anthropic API key, Upstash Redis credentials, model id, spend-cap value.
- Index build wired into `astro build`, so the tutor's knowledge refreshes on every deploy (in sync with site content).

## 9. Decisions log

- **Approach A (RAG)** chosen over whole-corpus-in-context (corpus ~250k tokens, already past the context window and growing) and over search-only (not "tutor" enough).
- **Lexical retrieval** for v1 (single API key, reuses Fuse.js); embeddings deferred.
- **Public endpoint** guarded by rate-limit + spend cap (no auth) — fits link-sharing with friends.
- **Haiku 4.5** default model; Sonnet switch available.
- **No PDF parsing** — worked solutions already exist as markdown.
