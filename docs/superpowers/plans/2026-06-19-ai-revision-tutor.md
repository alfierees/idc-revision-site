# AI Revision Tutor Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a grounded AI chat tutor to the IDC revision site that answers conceptual questions and coaches exam technique using only the site's own content, always citing the source pages.

**Architecture:** A build-time script flattens the Astro content collections into a JSON index (`src/generated/chat-index.json`). One dynamic Vercel serverless route (`/api/chat`) does lexical retrieval over that index (Fuse.js), calls Claude Haiku 4.5 with the retrieved chunks as grounding, and streams an NDJSON response (answer deltas + a deterministic Sources list). A Preact island (`ChatWidget.tsx`) in the base layout renders it on every page. All existing pages stay static.

**Tech Stack:** Astro 6 (hybrid via `@astrojs/vercel`), Preact, Fuse.js (existing), `@anthropic-ai/sdk`, `@upstash/redis`, `gray-matter` (build-time), `marked` + `katex/contrib/auto-render` (client render), Vitest.

**Spec:** `docs/superpowers/specs/2026-06-19-ai-revision-tutor-design.md`

---

## File Structure

**Create:**
- `src/lib/chat/types.ts` — shared `IndexChunk` / `ChatSource` types + `URL_PATH_FOR` map
- `src/lib/chat/chunk.ts` — `chunkDocument()`: one document's frontmatter+body → `IndexChunk[]` (pure)
- `src/lib/chat/retrieve.ts` — `retrieve()`: index + query → top-K chunks (Fuse.js, pure)
- `src/lib/chat/sources.ts` — `sourcesFromChunks()`: chunks → deduped `ChatSource[]` (pure)
- `src/lib/chat/prompt.ts` — `SYSTEM_PROMPT`, `buildContextBlock()`, `buildMessages()` (pure)
- `src/lib/chat/ratelimit.ts` — `checkRateLimit()`, `checkBudget()`, `recordCost()`, `estimateCostUsd()` (Redis injected)
- `scripts/build-chat-index.ts` — reads `src/content/**`, writes `src/generated/chat-index.json`
- `src/pages/api/chat.ts` — the dynamic endpoint (orchestration + streaming)
- `src/components/ChatWidget.tsx` — Preact island
- Tests: `tests/chat/chunk.test.ts`, `tests/chat/retrieve.test.ts`, `tests/chat/sources.test.ts`, `tests/chat/prompt.test.ts`, `tests/chat/ratelimit.test.ts`, `tests/chat/build-index.test.ts`

**Modify:**
- `astro.config.mjs` — add Vercel adapter
- `package.json` — deps + `predev`/`prebuild` scripts
- `.gitignore` — ignore generated index
- `src/components/Layout.astro` — mount `<ChatWidget client:idle />`

---

## Task 1: Add the Vercel adapter (hybrid rendering)

**Files:**
- Modify: `astro.config.mjs`
- Modify: `package.json` (dependency)

- [ ] **Step 1: Install the adapter**

Run: `npm install @astrojs/vercel`
Expected: adds `@astrojs/vercel` to `dependencies`.

- [ ] **Step 2: Wire the adapter into the config**

Modify `astro.config.mjs` — add the import and the `adapter` key. The full file becomes:

```js
// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import remarkCallouts from 'remark-callouts';
import rehypeKatex from 'rehype-katex';
import wikiLinkPlugin from 'remark-wiki-link';

import preact from '@astrojs/preact';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx(), preact()],

  markdown: {
    remarkPlugins: [
      remarkGfm,
      remarkMath,
      remarkCallouts,
      [
        wikiLinkPlugin,
        {
          pageResolver: (name) => [name.toLowerCase().replace(/\s+/g, '-')],
          hrefTemplate: (permalink) => `__WIKI__${permalink}`,
          aliasDivider: '|',
        },
      ],
    ],
    rehypePlugins: [rehypeKatex],
  },
});
```

In Astro 6, pages are prerendered (static) by default even with an adapter present, so only routes that opt out via `export const prerender = false` run server-side. No `output` key is needed.

- [ ] **Step 3: Verify the build still produces the static site**

Run: `npm run build`
Expected: build completes, "502 page(s) built" (unchanged count — no dynamic routes yet). If it errors, the adapter import is wrong.

- [ ] **Step 4: Commit**

```bash
git add astro.config.mjs package.json package-lock.json
git commit -m "build: add Vercel adapter for hybrid rendering"
```

---

## Task 2: Add the remaining dependencies

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Install runtime + build dependencies**

Run:
```bash
npm install @anthropic-ai/sdk @upstash/redis marked
npm install -D gray-matter
```
Expected: `@anthropic-ai/sdk`, `@upstash/redis`, `marked` in `dependencies`; `gray-matter` in `devDependencies`. (`fuse.js` and `katex` are already present.)

- [ ] **Step 2: Commit**

```bash
git add package.json package-lock.json
git commit -m "build: add chat tutor dependencies"
```

---

## Task 3: Shared types

**Files:**
- Create: `src/lib/chat/types.ts`

- [ ] **Step 1: Write the types module**

```ts
// src/lib/chat/types.ts

/** The content kinds that can be retrieved and cited. */
export type ChatKind =
  | "term"
  | "recipe"
  | "lecture"
  | "past-paper"
  | "problem-set"
  | "glossary";

/** Maps a content kind to its URL path segment under /subjects/<subject>/. */
export const URL_PATH_FOR: Record<ChatKind, string> = {
  term: "dictionary",
  recipe: "recipes",
  lecture: "lectures",
  "past-paper": "past-papers",
  "problem-set": "problem-sets",
  glossary: "dictionary",
};

/** Build the canonical site URL for a content item. Glossary points at the dictionary index. */
export function chatUrl(kind: ChatKind, subject: string, slug: string): string {
  if (kind === "glossary") return `/subjects/${subject}/dictionary`;
  return `/subjects/${subject}/${URL_PATH_FOR[kind]}/${slug}`;
}

/** One retrievable chunk of site content with its citation metadata. */
export interface IndexChunk {
  id: string; // e.g. "micro/term/risk-aversion#0"
  text: string; // plain-ish text used for retrieval + grounding
  title: string;
  subject: string;
  kind: ChatKind;
  url: string;
  sourceDoc?: string; // downloadable PDF/doc path, when present
  concepts: string[]; // tags / related-term slugs
}

/** A deduped citation shown under an answer. */
export interface ChatSource {
  title: string;
  url: string;
  kind: ChatKind;
  subject: string;
  sourceDoc?: string;
}
```

- [ ] **Step 2: Commit**

```bash
git add src/lib/chat/types.ts
git commit -m "feat(chat): shared index/source types"
```

---

## Task 4: Document chunker

**Files:**
- Create: `src/lib/chat/chunk.ts`
- Test: `tests/chat/chunk.test.ts`

- [ ] **Step 1: Write the failing test**

```ts
// tests/chat/chunk.test.ts
import { describe, it, expect } from "vitest";
import { chunkDocument } from "../../src/lib/chat/chunk";

describe("chunkDocument", () => {
  it("emits a single chunk for a short term with metadata + url", () => {
    const chunks = chunkDocument({
      kind: "term",
      subject: "micro",
      slug: "risk-aversion",
      data: { title: "Risk Aversion", aliases: [], related: ["insurance"] },
      body: "A preference for a certain outcome over a fair gamble.",
    });
    expect(chunks).toHaveLength(1);
    expect(chunks[0]).toMatchObject({
      title: "Risk Aversion",
      subject: "micro",
      kind: "term",
      url: "/subjects/micro/dictionary/risk-aversion",
      concepts: ["insurance"],
    });
    expect(chunks[0].text).toContain("certain outcome");
    expect(chunks[0].id).toBe("micro/term/risk-aversion#0");
  });

  it("splits a long lecture body on h2 headings", () => {
    const body = "# Lec\n\n## Intro\n" + "x ".repeat(50) + "\n\n## Method\n" + "y ".repeat(50);
    const chunks = chunkDocument({
      kind: "lecture",
      subject: "econometrics",
      slug: "lec-10-did",
      data: { title: "DiD", tags: ["did"] },
      body,
    });
    expect(chunks.length).toBeGreaterThanOrEqual(2);
    expect(chunks.every((c) => c.url === "/subjects/econometrics/lectures/lec-10-did")).toBe(true);
    expect(chunks[0].concepts).toEqual(["did"]);
  });

  it("builds one chunk per question for a problem-set (from frontmatter)", () => {
    const chunks = chunkDocument({
      kind: "problem-set",
      subject: "micro",
      slug: "ex-9-micro-3",
      data: {
        title: "EX-9",
        tags: ["double-marginalization"],
        source_doc: "/papers/micro/ex-9-micro-3.docx",
        questions: [
          { id: "1a", text: "Monopolist sells directly.", solution: "Q=100." },
          { id: "1b", text: "Through a distributor.", solution: "w=100." },
        ],
      },
      body: "",
    });
    expect(chunks).toHaveLength(2);
    expect(chunks[0].text).toContain("Monopolist sells directly");
    expect(chunks[0].text).toContain("Q=100");
    expect(chunks[0].sourceDoc).toBe("/papers/micro/ex-9-micro-3.docx");
    expect(chunks[0].id).toBe("micro/problem-set/ex-9-micro-3#0");
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run tests/chat/chunk.test.ts`
Expected: FAIL — cannot find module `chunk`.

- [ ] **Step 3: Write the implementation**

```ts
// src/lib/chat/chunk.ts
import { type ChatKind, type IndexChunk, chatUrl } from "./types";

export interface RawDoc {
  kind: ChatKind;
  subject: string;
  slug: string;
  data: Record<string, unknown>;
  body: string;
}

const MAX_CHARS = 1600;

/** Strip the heaviest markdown noise so retrieval matches on words, not syntax. */
function clean(md: string): string {
  return md
    .replace(/```[\s\S]*?```/g, " ")        // fenced code
    .replace(/!\[\[[^\]]*\]\]/g, " ")        // image embeds
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")   // markdown images
    .replace(/\[\[([^\]|]+)(\|[^\]]+)?\]\]/g, "$1") // wiki-links → text
    .replace(/[#>*_`$]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Split a long body into <=MAX_CHARS pieces, preferring h2 boundaries. */
function splitBody(body: string): string[] {
  const sections = body.split(/\n(?=##\s)/g);
  const out: string[] = [];
  for (const section of sections) {
    const cleaned = clean(section);
    if (!cleaned) continue;
    if (cleaned.length <= MAX_CHARS) {
      out.push(cleaned);
      continue;
    }
    // Hard-wrap oversized sections at word boundaries.
    let buf = "";
    for (const word of cleaned.split(" ")) {
      if (buf.length + word.length + 1 > MAX_CHARS) {
        out.push(buf.trim());
        buf = "";
      }
      buf += word + " ";
    }
    if (buf.trim()) out.push(buf.trim());
  }
  return out.length ? out : [];
}

function conceptsOf(data: Record<string, unknown>): string[] {
  const tags = Array.isArray(data.tags) ? (data.tags as string[]) : [];
  const related = Array.isArray(data.related) ? (data.related as string[]) : [];
  const relatedTerms = Array.isArray(data.related_terms) ? (data.related_terms as string[]) : [];
  return [...new Set([...tags, ...related, ...relatedTerms])];
}

export function chunkDocument(doc: RawDoc): IndexChunk[] {
  const title = String(doc.data.title ?? doc.slug);
  const url = chatUrl(doc.kind, doc.subject, doc.slug);
  const sourceDoc = typeof doc.data.source_doc === "string" ? doc.data.source_doc : undefined;
  const concepts = conceptsOf(doc.data);
  const base = { title, subject: doc.subject, kind: doc.kind, url, sourceDoc, concepts };
  const mk = (text: string, i: number): IndexChunk => ({
    id: `${doc.subject}/${doc.kind}/${doc.slug}#${i}`,
    text,
    ...base,
  });

  // Problem sets keep their Q&A in frontmatter, not the body.
  if (doc.kind === "problem-set" && Array.isArray(doc.data.questions)) {
    const qs = doc.data.questions as { id: string; text: string; solution: string }[];
    return qs.map((q, i) => mk(clean(`${title} — Q${q.id}. ${q.text} ${q.solution}`), i));
  }

  const pieces = splitBody(doc.body);
  if (pieces.length === 0) return [mk(clean(title), 0)];
  // Prepend the title to the first chunk so titles are retrievable.
  pieces[0] = clean(`${title}. ${pieces[0]}`);
  return pieces.map(mk);
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run tests/chat/chunk.test.ts`
Expected: PASS (3 tests).

- [ ] **Step 5: Commit**

```bash
git add src/lib/chat/chunk.ts tests/chat/chunk.test.ts
git commit -m "feat(chat): document chunker with metadata"
```

---

## Task 5: Build-index script

**Files:**
- Create: `scripts/build-chat-index.ts`
- Test: `tests/chat/build-index.test.ts`
- Modify: `package.json` (scripts)
- Modify: `.gitignore`

- [ ] **Step 1: Write the failing test**

The script's core is a pure `collectChunks(contentRoot)` function we can test against a temp fixture.

```ts
// tests/chat/build-index.test.ts
import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { collectChunks } from "../../scripts/build-chat-index";

let root: string;

beforeAll(() => {
  root = mkdtempSync(join(tmpdir(), "chatidx-"));
  mkdirSync(join(root, "terms/micro"), { recursive: true });
  writeFileSync(
    join(root, "terms/micro/risk-aversion.md"),
    `---\ntitle: Risk Aversion\nsubject: micro\nrelated: [insurance]\n---\nA preference for certainty.`,
  );
  mkdirSync(join(root, "problem-sets/micro"), { recursive: true });
  writeFileSync(
    join(root, "problem-sets/micro/ex-9-micro-3.md"),
    `---\ntitle: EX-9\nsubject: micro\nsource_doc: /papers/micro/ex-9-micro-3.docx\nquestions:\n  - id: "1a"\n    text: Solve it.\n    solution: Q=100.\n---\n`,
  );
});

afterAll(() => rmSync(root, { recursive: true, force: true }));

describe("collectChunks", () => {
  it("indexes terms and problem-set questions with correct urls", () => {
    const chunks = collectChunks(root);
    const term = chunks.find((c) => c.kind === "term");
    const ps = chunks.find((c) => c.kind === "problem-set");
    expect(term?.url).toBe("/subjects/micro/dictionary/risk-aversion");
    expect(term?.concepts).toContain("insurance");
    expect(ps?.url).toBe("/subjects/micro/problem-sets/ex-9-micro-3");
    expect(ps?.text).toContain("Q=100");
    expect(ps?.sourceDoc).toBe("/papers/micro/ex-9-micro-3.docx");
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run tests/chat/build-index.test.ts`
Expected: FAIL — cannot find module `build-chat-index`.

- [ ] **Step 3: Write the implementation**

```ts
// scripts/build-chat-index.ts
import { readdirSync, statSync, readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";
import { chunkDocument } from "../src/lib/chat/chunk.js";
import { type ChatKind, type IndexChunk } from "../src/lib/chat/types.js";

const KIND_DIRS: Record<string, ChatKind> = {
  terms: "term",
  recipes: "recipe",
  lectures: "lecture",
  "past-papers": "past-paper",
  "problem-sets": "problem-set",
  glossary: "glossary",
};

function walk(dir: string): string[] {
  const out: string[] = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else if (name.endsWith(".md")) out.push(full);
  }
  return out;
}

/** Read every content file under `contentRoot` and flatten to index chunks. */
export function collectChunks(contentRoot: string): IndexChunk[] {
  const chunks: IndexChunk[] = [];
  for (const [dir, kind] of Object.entries(KIND_DIRS)) {
    const base = join(contentRoot, dir);
    let files: string[];
    try {
      files = walk(base);
    } catch {
      continue; // collection dir may not exist
    }
    for (const file of files) {
      const { data, content } = matter(readFileSync(file, "utf8"));
      if (data.in_scope === false) continue;
      // Slug = filename without extension; subject = frontmatter or first path segment after base.
      const slug = file.split("/").pop()!.replace(/\.md$/, "");
      const rel = file.slice(base.length + 1);
      const subject = String(data.subject ?? rel.split("/")[0]);
      chunks.push(...chunkDocument({ kind, subject, slug, data, body: content }));
    }
  }
  return chunks;
}

// CLI: `npx tsx scripts/build-chat-index.ts`
const isDirect = process.argv[1] && process.argv[1].endsWith("build-chat-index.ts");
if (isDirect) {
  const here = dirname(fileURLToPath(import.meta.url));
  const root = join(here, "..", "src", "content");
  const outDir = join(here, "..", "src", "generated");
  const chunks = collectChunks(root);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "chat-index.json"), JSON.stringify(chunks));
  console.log(`chat-index: ${chunks.length} chunks written`);
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run tests/chat/build-index.test.ts`
Expected: PASS.

- [ ] **Step 5: Run the builder against the real content**

Run: `npx tsx scripts/build-chat-index.ts`
Expected: prints `chat-index: <N> chunks written` (N in the low thousands), creates `src/generated/chat-index.json`.

- [ ] **Step 6: Wire the builder into dev/build and gitignore the artifact**

Modify `package.json` `scripts` to:

```json
"scripts": {
  "dev": "npm run chat:index && astro dev",
  "build": "npm run chat:index && astro build",
  "preview": "astro preview",
  "astro": "astro",
  "chat:index": "tsx scripts/build-chat-index.ts",
  "test": "vitest run"
}
```

Append to `.gitignore`:

```
# generated chat index
src/generated/
```

- [ ] **Step 7: Verify build regenerates the index**

Run: `npm run build`
Expected: prints the `chat-index:` line, then the normal Astro build output, no errors.

- [ ] **Step 8: Commit**

```bash
git add scripts/build-chat-index.ts tests/chat/build-index.test.ts package.json .gitignore
git commit -m "feat(chat): build-time content index"
```

---

## Task 6: Retrieval module

**Files:**
- Create: `src/lib/chat/retrieve.ts`
- Test: `tests/chat/retrieve.test.ts`

- [ ] **Step 1: Write the failing test**

```ts
// tests/chat/retrieve.test.ts
import { describe, it, expect } from "vitest";
import { retrieve } from "../../src/lib/chat/retrieve";
import type { IndexChunk } from "../../src/lib/chat/types";

const idx: IndexChunk[] = [
  { id: "a#0", text: "Adverse selection arises from hidden information before a contract.", title: "Adverse Selection", subject: "micro", kind: "term", url: "/u/a", concepts: ["asymmetric-information"] },
  { id: "b#0", text: "Moral hazard arises from hidden action after a contract.", title: "Moral Hazard", subject: "micro", kind: "term", url: "/u/b", concepts: ["asymmetric-information"] },
  { id: "c#0", text: "Cournot competition has firms choosing quantities.", title: "Cournot", subject: "micro", kind: "term", url: "/u/c", concepts: [] },
];

describe("retrieve", () => {
  it("returns the most relevant chunks for a query", () => {
    const hits = retrieve(idx, "adverse selection and moral hazard", 2);
    const titles = hits.map((h) => h.title);
    expect(titles).toContain("Adverse Selection");
    expect(titles).toContain("Moral Hazard");
    expect(hits).toHaveLength(2);
  });

  it("never returns more than k", () => {
    expect(retrieve(idx, "competition", 1)).toHaveLength(1);
  });

  it("returns [] for empty query", () => {
    expect(retrieve(idx, "   ", 5)).toEqual([]);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run tests/chat/retrieve.test.ts`
Expected: FAIL — cannot find module `retrieve`.

- [ ] **Step 3: Write the implementation**

```ts
// src/lib/chat/retrieve.ts
import Fuse from "fuse.js";
import type { IndexChunk } from "./types";

export function retrieve(index: IndexChunk[], query: string, k = 8): IndexChunk[] {
  if (!query.trim()) return [];
  const fuse = new Fuse(index, {
    keys: [
      { name: "title", weight: 3 },
      { name: "concepts", weight: 2 },
      { name: "text", weight: 1 },
    ],
    threshold: 0.4,
    ignoreLocation: true,
    minMatchCharLength: 3,
  });
  return fuse.search(query, { limit: k }).map((r) => r.item);
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run tests/chat/retrieve.test.ts`
Expected: PASS (3 tests).

- [ ] **Step 5: Commit**

```bash
git add src/lib/chat/retrieve.ts tests/chat/retrieve.test.ts
git commit -m "feat(chat): lexical retrieval over the index"
```

---

## Task 7: Sources module

**Files:**
- Create: `src/lib/chat/sources.ts`
- Test: `tests/chat/sources.test.ts`

- [ ] **Step 1: Write the failing test**

```ts
// tests/chat/sources.test.ts
import { describe, it, expect } from "vitest";
import { sourcesFromChunks } from "../../src/lib/chat/sources";
import type { IndexChunk } from "../../src/lib/chat/types";

const chunks: IndexChunk[] = [
  { id: "a#0", text: "", title: "EX-9", subject: "micro", kind: "problem-set", url: "/u/ex9", sourceDoc: "/papers/micro/ex-9.docx", concepts: [] },
  { id: "a#1", text: "", title: "EX-9", subject: "micro", kind: "problem-set", url: "/u/ex9", sourceDoc: "/papers/micro/ex-9.docx", concepts: [] },
  { id: "b#0", text: "", title: "Risk Aversion", subject: "micro", kind: "term", url: "/u/ra", concepts: [] },
];

describe("sourcesFromChunks", () => {
  it("dedupes by url and keeps source docs", () => {
    const sources = sourcesFromChunks(chunks);
    expect(sources).toHaveLength(2);
    expect(sources[0]).toEqual({ title: "EX-9", url: "/u/ex9", kind: "problem-set", subject: "micro", sourceDoc: "/papers/micro/ex-9.docx" });
    expect(sources[1].title).toBe("Risk Aversion");
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run tests/chat/sources.test.ts`
Expected: FAIL — cannot find module `sources`.

- [ ] **Step 3: Write the implementation**

```ts
// src/lib/chat/sources.ts
import type { IndexChunk, ChatSource } from "./types";

/** Collapse retrieved chunks to one citation per page, preserving order. */
export function sourcesFromChunks(chunks: IndexChunk[]): ChatSource[] {
  const seen = new Set<string>();
  const out: ChatSource[] = [];
  for (const c of chunks) {
    if (seen.has(c.url)) continue;
    seen.add(c.url);
    out.push({ title: c.title, url: c.url, kind: c.kind, subject: c.subject, sourceDoc: c.sourceDoc });
  }
  return out;
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run tests/chat/sources.test.ts`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/lib/chat/sources.ts tests/chat/sources.test.ts
git commit -m "feat(chat): deterministic source citations"
```

---

## Task 8: Prompt assembly

**Files:**
- Create: `src/lib/chat/prompt.ts`
- Test: `tests/chat/prompt.test.ts`

- [ ] **Step 1: Write the failing test**

```ts
// tests/chat/prompt.test.ts
import { describe, it, expect } from "vitest";
import { SYSTEM_PROMPT, buildContextBlock, buildMessages } from "../../src/lib/chat/prompt";
import type { IndexChunk } from "../../src/lib/chat/types";

const chunks: IndexChunk[] = [
  { id: "a#0", text: "Adverse selection is hidden information.", title: "Adverse Selection", subject: "micro", kind: "term", url: "/u/a", concepts: [] },
];

describe("prompt assembly", () => {
  it("system prompt forbids outside knowledge", () => {
    expect(SYSTEM_PROMPT.toLowerCase()).toContain("only");
    expect(SYSTEM_PROMPT.toLowerCase()).toContain("context");
  });

  it("context block lists title, url and text", () => {
    const block = buildContextBlock(chunks);
    expect(block).toContain("Adverse Selection");
    expect(block).toContain("/u/a");
    expect(block).toContain("hidden information");
  });

  it("buildMessages appends the context to the latest user turn and keeps history", () => {
    const history = [
      { role: "user" as const, content: "hi" },
      { role: "assistant" as const, content: "hello" },
      { role: "user" as const, content: "what is adverse selection?" },
    ];
    const msgs = buildMessages(history, chunks);
    expect(msgs).toHaveLength(3);
    expect(msgs[2].role).toBe("user");
    expect(msgs[2].content).toContain("what is adverse selection?");
    expect(msgs[2].content).toContain("Adverse Selection"); // context spliced in
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run tests/chat/prompt.test.ts`
Expected: FAIL — cannot find module `prompt`.

- [ ] **Step 3: Write the implementation**

```ts
// src/lib/chat/prompt.ts
import type { IndexChunk } from "./types";

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export const SYSTEM_PROMPT = `You are the revision tutor for an IDC economics revision website. \
You help a student in two ways: (1) explaining concepts, and (2) coaching exam technique using worked solutions.

Rules:
- Answer ONLY using the CONTEXT provided in the user's message. The context is drawn from the student's own revision notes, dictionary, lectures, problem sets and past papers.
- If the context does not contain the answer, say so plainly ("I can't find that in your notes") rather than guessing. Never use outside knowledge to fill gaps.
- Be concise and direct. Use the site's own terminology. Format maths with LaTeX ($...$ and $$...$$) and use markdown for structure.
- When coaching "how do I answer this kind of question", walk through the method shown in the worked solutions in the context.
- Do not invent links or cite sources yourself — the application appends the source list automatically.`;

export function buildContextBlock(chunks: IndexChunk[]): string {
  if (chunks.length === 0) return "(no relevant material found)";
  return chunks
    .map((c, i) => `[${i + 1}] ${c.title} (${c.url})\n${c.text}`)
    .join("\n\n");
}

/** Splice the retrieved context into the latest user turn; leave history intact. */
export function buildMessages(history: ChatMessage[], chunks: IndexChunk[]): ChatMessage[] {
  if (history.length === 0) return [];
  const out = history.map((m) => ({ ...m }));
  const lastUser = [...out].reverse().find((m) => m.role === "user");
  if (lastUser) {
    lastUser.content =
      `CONTEXT:\n${buildContextBlock(chunks)}\n\n---\n\nQUESTION: ${lastUser.content}`;
  }
  return out;
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run tests/chat/prompt.test.ts`
Expected: PASS (3 tests).

- [ ] **Step 5: Commit**

```bash
git add src/lib/chat/prompt.ts tests/chat/prompt.test.ts
git commit -m "feat(chat): grounded-tutor prompt assembly"
```

---

## Task 9: Rate limit + spend cap

**Files:**
- Create: `src/lib/chat/ratelimit.ts`
- Test: `tests/chat/ratelimit.test.ts`

The Redis client is injected so the logic is testable with a fake. We use Upstash's atomic `incr` + `expire`.

- [ ] **Step 1: Write the failing test**

```ts
// tests/chat/ratelimit.test.ts
import { describe, it, expect } from "vitest";
import { checkRateLimit, checkBudget, recordCost, estimateCostUsd } from "../../src/lib/chat/ratelimit";

// Minimal in-memory fake of the two Upstash methods we use.
function fakeRedis(initial: Record<string, number> = {}) {
  const store: Record<string, number> = { ...initial };
  return {
    store,
    async incr(key: string) { store[key] = (store[key] ?? 0) + 1; return store[key]; },
    async expire(_key: string, _seconds: number) { return 1; },
    async incrbyfloat(key: string, n: number) { store[key] = (store[key] ?? 0) + n; return store[key]; },
    async get<T>(key: string) { return (store[key] ?? null) as T; },
  };
}

describe("rate limiting", () => {
  it("allows under the per-minute limit and blocks over it", async () => {
    const redis = fakeRedis();
    for (let i = 0; i < 10; i++) {
      expect(await checkRateLimit(redis as any, "1.2.3.4", 10)).toBe(true);
    }
    expect(await checkRateLimit(redis as any, "1.2.3.4", 10)).toBe(false);
  });
});

describe("spend cap", () => {
  it("estimates cost from token counts", () => {
    // 5000 in @ $1/M + 800 out @ $5/M = 0.005 + 0.004 = 0.009
    expect(estimateCostUsd(5000, 800)).toBeCloseTo(0.009, 6);
  });

  it("blocks once the monthly cap is reached", async () => {
    const redis = fakeRedis({ ["chat:cost:2026-06"]: 5.0 });
    expect(await checkBudget(redis as any, "2026-06", 5)).toBe(false);
  });

  it("allows while under the cap and records cost", async () => {
    const redis = fakeRedis();
    expect(await checkBudget(redis as any, "2026-06", 5)).toBe(true);
    await recordCost(redis as any, "2026-06", 0.01);
    expect(redis.store["chat:cost:2026-06"]).toBeCloseTo(0.01, 6);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run tests/chat/ratelimit.test.ts`
Expected: FAIL — cannot find module `ratelimit`.

- [ ] **Step 3: Write the implementation**

```ts
// src/lib/chat/ratelimit.ts

/** The subset of the Upstash Redis client we depend on (keeps this testable). */
export interface RedisLike {
  incr(key: string): Promise<number>;
  expire(key: string, seconds: number): Promise<number>;
  incrbyfloat(key: string, n: number): Promise<number>;
  get<T = unknown>(key: string): Promise<T | null>;
}

const HAIKU_IN_PER_TOKEN = 1 / 1_000_000; // $1 / MTok
const HAIKU_OUT_PER_TOKEN = 5 / 1_000_000; // $5 / MTok

export function estimateCostUsd(inputTokens: number, outputTokens: number): number {
  return inputTokens * HAIKU_IN_PER_TOKEN + outputTokens * HAIKU_OUT_PER_TOKEN;
}

/** Fixed 60s window per IP. Returns true if the request is allowed. */
export async function checkRateLimit(redis: RedisLike, ip: string, perMinute: number): Promise<boolean> {
  const key = `chat:rl:${ip}`;
  const count = await redis.incr(key);
  if (count === 1) await redis.expire(key, 60);
  return count <= perMinute;
}

/** Returns true if spending is still under the monthly cap. */
export async function checkBudget(redis: RedisLike, yearMonth: string, capUsd: number): Promise<boolean> {
  const spent = Number((await redis.get<number>(`chat:cost:${yearMonth}`)) ?? 0);
  return spent < capUsd;
}

export async function recordCost(redis: RedisLike, yearMonth: string, costUsd: number): Promise<void> {
  await redis.incrbyfloat(`chat:cost:${yearMonth}`, costUsd);
}

export function currentYearMonth(now: Date): string {
  return `${now.getUTCFullYear()}-${String(now.getUTCMonth() + 1).padStart(2, "0")}`;
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run tests/chat/ratelimit.test.ts`
Expected: PASS (4 tests).

- [ ] **Step 5: Commit**

```bash
git add src/lib/chat/ratelimit.ts tests/chat/ratelimit.test.ts
git commit -m "feat(chat): per-IP rate limit and monthly spend cap"
```

---

## Task 10: The chat API endpoint

**Files:**
- Create: `src/pages/api/chat.ts`

This route is `prerender = false` (runs server-side on Vercel). It orchestrates the pure modules from Tasks 3–9 and streams NDJSON. It is verified end-to-end in Task 12 (the streaming + live Anthropic call aren't unit-tested; the logic they call is already covered by Tasks 4–9).

- [ ] **Step 1: Write the endpoint**

```ts
// src/pages/api/chat.ts
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
```

- [ ] **Step 2: Type-check the build**

Run: `npm run build`
Expected: build completes with no type errors. `/api/chat` appears as a server route (Vercel function) in the output, page count otherwise unchanged. If `indexData` import fails, confirm Task 5 generated `src/generated/chat-index.json`.

- [ ] **Step 3: Commit**

```bash
git add src/pages/api/chat.ts
git commit -m "feat(chat): streaming /api/chat endpoint"
```

---

## Task 11: The chat widget

**Files:**
- Create: `src/components/ChatWidget.tsx`
- Modify: `src/components/Layout.astro`

- [ ] **Step 1: Write the widget**

```tsx
// src/components/ChatWidget.tsx
import { useState, useRef, useEffect } from "preact/hooks";
import { marked } from "marked";
import renderMathInElement from "katex/contrib/auto-render";

interface Source { title: string; url: string; kind: string; subject: string; sourceDoc?: string }
interface Msg { role: "user" | "assistant"; content: string; sources?: Source[] }

const STARTERS = [
  "Explain a concept",
  "How do I answer this type of question?",
  "Find past papers on…",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
    if (bodyRef.current) {
      renderMathInElement(bodyRef.current, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false },
        ],
        throwOnError: false,
      });
    }
  }, [msgs]);

  async function send(text: string) {
    const q = text.trim();
    if (!q || busy) return;
    setInput("");
    const history: Msg[] = [...msgs, { role: "user", content: q }, { role: "assistant", content: "" }];
    setMsgs(history);
    setBusy(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history.slice(0, -1).map((m) => ({ role: m.role, content: m.content })) }),
      });
      if (res.status === 429) {
        const { error } = await res.json();
        patchLast((m) => { m.content = error === "rate_limited"
          ? "You're sending messages too fast — give it a moment."
          : "The tutor has hit its monthly usage limit. Try again next month."; });
        return;
      }
      if (!res.body) throw new Error("no stream");
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buf = "";
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        buf += decoder.decode(value, { stream: true });
        const lines = buf.split("\n");
        buf = lines.pop() ?? "";
        for (const ln of lines) {
          if (!ln.trim()) continue;
          const evt = JSON.parse(ln);
          if (evt.type === "delta") patchLast((m) => { m.content += evt.text; });
          else if (evt.type === "sources") patchLast((m) => { m.sources = evt.sources; });
          else if (evt.type === "error") patchLast((m) => { m.content = evt.message; });
        }
      }
    } catch {
      patchLast((m) => { m.content = "Something went wrong. Please try again."; });
    } finally {
      setBusy(false);
    }
  }

  function patchLast(fn: (m: Msg) => void) {
    setMsgs((prev) => {
      const next = prev.map((m) => ({ ...m }));
      fn(next[next.length - 1]);
      return next;
    });
  }

  return (
    <div class="chat-widget">
      {!open && (
        <button class="chat-fab" onClick={() => setOpen(true)} aria-label="Ask the tutor">Ask</button>
      )}
      {open && (
        <div class="chat-panel">
          <header class="chat-head">
            <span>Revision tutor</span>
            <button onClick={() => setOpen(false)} aria-label="Close">×</button>
          </header>
          <div class="chat-body" ref={bodyRef}>
            {msgs.length === 0 && (
              <div class="chat-starters">
                {STARTERS.map((s) => (
                  <button onClick={() => send(s === "Find past papers on…" ? "Find past papers on " : s)}>{s}</button>
                ))}
              </div>
            )}
            {msgs.map((m) => (
              <div class={`chat-msg chat-${m.role}`}>
                {m.role === "assistant"
                  ? <div dangerouslySetInnerHTML={{ __html: marked.parse(m.content || "…") as string }} />
                  : <p>{m.content}</p>}
                {m.sources && m.sources.length > 0 && (
                  <div class="chat-sources">
                    <span>Sources</span>
                    <ul>
                      {m.sources.map((s) => (
                        <li>
                          <a href={s.url}>{s.title}</a>
                          {s.sourceDoc && <a class="chat-doc" href={s.sourceDoc}>PDF</a>}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
          <form class="chat-input" onSubmit={(e) => { e.preventDefault(); send(input); }}>
            <input value={input} disabled={busy} placeholder="Ask anything…"
              onInput={(e) => setInput((e.target as HTMLInputElement).value)} />
            <button type="submit" disabled={busy}>{busy ? "…" : "Send"}</button>
          </form>
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Add widget styles + KaTeX CSS + mount the island**

In `src/components/Layout.astro`: add the KaTeX stylesheet import to the `<head>` (if not already present site-wide) and mount the widget just before `</body>`. Add this immediately before the closing `</body>` tag:

```astro
<ChatWidget client:idle />
```

And add the import to the Layout's frontmatter (top `---` block):

```astro
import ChatWidget from "./ChatWidget.tsx";
```

Add these styles inside the Layout's existing `<style>` block (or a new one) — scoped, minimal, using the site's CSS variables:

```css
.chat-widget { position: fixed; right: 1.25rem; bottom: 1.25rem; z-index: 50; }
.chat-fab { background: var(--accent, #b4532a); color: #fff; border: 0; border-radius: 999px;
  padding: 0.7rem 1.2rem; font-family: var(--font-ui, sans-serif); font-weight: 600; cursor: pointer;
  box-shadow: 0 4px 14px rgba(0,0,0,.18); }
.chat-panel { width: min(380px, 92vw); height: min(560px, 80vh); display: flex; flex-direction: column;
  background: var(--paper, #fff); border: 1px solid var(--rule, #ddd); border-radius: 14px; overflow: hidden;
  box-shadow: 0 10px 40px rgba(0,0,0,.22); }
.chat-head { display: flex; justify-content: space-between; align-items: center; padding: .7rem 1rem;
  border-bottom: 1px solid var(--rule, #eee); font-family: var(--font-ui, sans-serif); font-weight: 600; }
.chat-head button { background: none; border: 0; font-size: 1.3rem; cursor: pointer; line-height: 1; }
.chat-body { flex: 1; overflow-y: auto; padding: 1rem; display: flex; flex-direction: column; gap: .9rem; }
.chat-starters { display: flex; flex-direction: column; gap: .5rem; }
.chat-starters button { text-align: left; padding: .55rem .8rem; border: 1px solid var(--rule, #ddd);
  border-radius: 8px; background: transparent; cursor: pointer; font-family: var(--font-ui, sans-serif); }
.chat-msg { font-size: .92rem; line-height: 1.5; }
.chat-user { align-self: flex-end; background: var(--paper-deep, #f0ece3); padding: .5rem .8rem;
  border-radius: 10px; max-width: 85%; }
.chat-assistant :global(p) { margin: 0 0 .6rem; }
.chat-sources { margin-top: .6rem; font-size: .8rem; }
.chat-sources span { font-weight: 600; color: var(--ink-muted, #888); }
.chat-sources ul { margin: .3rem 0 0; padding-left: 1rem; }
.chat-doc { margin-left: .4rem; font-size: .72rem; color: var(--ink-muted, #888); }
.chat-input { display: flex; gap: .5rem; padding: .7rem; border-top: 1px solid var(--rule, #eee); }
.chat-input input { flex: 1; border: 1px solid var(--rule, #ddd); border-radius: 8px; padding: .5rem .7rem;
  font-family: var(--font-ui, sans-serif); }
.chat-input button { border: 0; background: var(--accent, #b4532a); color: #fff; border-radius: 8px;
  padding: 0 1rem; cursor: pointer; }
```

If the site does not already load KaTeX CSS globally, add to `<head>`:

```astro
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css" />
```

(Confirm whether KaTeX CSS is already global by viewing a problem-set page source before adding — the math on existing pages must already be styled by something. Reuse that mechanism rather than duplicating.)

- [ ] **Step 3: Commit**

```bash
git add src/components/ChatWidget.tsx src/components/Layout.astro
git commit -m "feat(chat): chat widget island mounted site-wide"
```

---

## Task 12: End-to-end verification

**Files:** none (verification + env setup)

This task confirms the whole flow against a running server. Requires real credentials.

- [ ] **Step 1: Create the local env file**

Create `.env` in the project root (already gitignored by Astro convention — verify it's in `.gitignore`, add if missing):

```
ANTHROPIC_API_KEY=sk-ant-...
UPSTASH_REDIS_REST_URL=https://...upstash.io
UPSTASH_REDIS_REST_TOKEN=...
CHAT_MONTHLY_CAP_USD=5
CHAT_RATE_PER_MINUTE=10
```

Obtain the Anthropic key from console.anthropic.com and the Upstash REST URL/token by creating a free Redis database at upstash.com. **Do not commit `.env`.**

- [ ] **Step 2: Run the full test suite**

Run: `npm test`
Expected: all suites pass, including the new `tests/chat/*` (Tasks 4–9). No regressions in existing tests.

- [ ] **Step 3: Start the dev server and exercise the widget (preview workflow)**

Use the preview tooling (`preview_start` → `preview_eval`/`preview_screenshot`) or `npm run dev` manually. Verify, on any page:
- The "Ask" button appears bottom-right.
- Sending "What's the connection between adverse selection and moral hazard?" streams an answer that references the dictionary entries, with a **Sources** block linking to `/subjects/micro/dictionary/...`.
- Maths renders via KaTeX (no raw `$...$`).
- A clearly out-of-scope question ("what's the capital of France?") yields an "I can't find that in your notes"-style refusal.
- Console shows no errors; `preview_network` shows the `/api/chat` NDJSON response.

- [ ] **Step 4: Configure Vercel environment variables**

In the Vercel dashboard (Project → Settings → Environment Variables), add `ANTHROPIC_API_KEY`, `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`, `CHAT_MONTHLY_CAP_USD=5`, `CHAT_RATE_PER_MINUTE=10` for Production (and Preview). This is a manual dashboard step — note it for the user; it cannot be scripted here.

- [ ] **Step 5: Final commit (if any verification fixes were needed)**

```bash
git add -A
git commit -m "chore(chat): end-to-end verification fixes"
```

---

## Self-Review Notes

- **Spec coverage:** build-time index (Task 5) ✓; lexical retrieval, embeddings deferred (Task 6) ✓; `/api/chat` with guards → retrieve → Claude → stream → deterministic sources (Tasks 9–10) ✓; Preact widget on every page with markdown+KaTeX render and starter chips (Task 11) ✓; Haiku 4.5 default + Sonnet switch via `CHAT_MODEL` env (Task 10) ✓; per-IP rate limit + $5 monthly cap (Task 9) ✓; error handling — API failure, rate-limit, budget, empty retrieval all produce friendly messages (Tasks 10–11) ✓; testing via Vitest unit tests + preview verification (Tasks 4–12) ✓; Vercel adapter, hybrid, index in build (Tasks 1, 5) ✓.
- **Type consistency:** `IndexChunk`, `ChatSource`, `ChatKind`, `ChatMessage` defined once (Tasks 3, 8) and reused verbatim across retrieve/sources/prompt/endpoint. `retrieve()`, `sourcesFromChunks()`, `buildMessages()`, `checkRateLimit()`, `checkBudget()`, `recordCost()`, `estimateCostUsd()`, `currentYearMonth()` signatures are consistent between their defining task and the endpoint in Task 10.
- **Deferred to v1.1 (per spec, not gaps):** semantic embeddings, subject-aware retrieval bias.
