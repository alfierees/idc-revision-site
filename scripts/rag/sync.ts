import { Index } from "@upstash/vector";
import { collectLocalDocuments, collectSiteDocuments, corpusHash } from "../../src/lib/rag/corpus";
import { chunkCorpus, STRATEGIES, type ChunkStrategy, type RagChunk } from "../../src/lib/rag/chunk";
import { adminRequest, adminUrl } from "./admin-client";

const root = process.cwd();
const arguments_ = new Set(process.argv.slice(2));
const apply = arguments_.has("--apply");
const reset = arguments_.has("--reset");
const selected = STRATEGIES.filter((strategy) => !process.argv.includes("--strategy") ||
  process.argv[process.argv.indexOf("--strategy") + 1] === strategy);
if (!selected.length) throw new Error("Unknown --strategy value");

const docs = [...collectSiteDocuments(root), ...collectLocalDocuments(root)];
const hash = corpusHash(docs);
const plan = Object.fromEntries(selected.map((strategy) => [strategy, chunkCorpus(docs, strategy).length]));
console.log(JSON.stringify({ documents: docs.length, corpusHash: hash, chunks: plan, mode: apply ? "apply" : "preview" }));
if (!apply) process.exit(0);
if (!adminUrl && (!process.env.UPSTASH_VECTOR_REST_URL || !process.env.UPSTASH_VECTOR_REST_TOKEN)) {
  throw new Error("Missing Upstash Vector credentials; pull Vercel development variables first.");
}

const index = adminUrl ? null : Index.fromEnv();
const existing = index ? new Set(await index.listNamespaces()) : new Set<string>();
const BATCH = 30;
const CONCURRENCY = adminUrl ? 8 : 3;

async function upsertWithRetry(strategy: ChunkStrategy, namespace: ReturnType<NonNullable<typeof index>["namespace"]> | null, batch: RagChunk[]) {
  const items = batch.map((chunk) => ({
    id: chunk.chunkId,
    data: chunk.text,
    metadata: {
      docId: chunk.id, title: chunk.title, subject: chunk.subject, kind: chunk.kind,
      url: chunk.url ?? "", source: chunk.source, sourcePath: chunk.sourcePath,
      section: chunk.section, ordinal: chunk.ordinal, corpusHash: hash,
    },
  }));
  for (let attempt = 0; attempt < 5; attempt++) {
    try {
      if (adminUrl) await adminRequest({ action: "upsert", strategy, items });
      else await namespace!.upsert(items);
      return;
    } catch (error) {
      if (attempt === 4) throw error;
      await new Promise((resolve) => setTimeout(resolve, 1000 * 2 ** attempt));
    }
  }
}

for (const strategy of selected) {
  const name = `rag-${strategy}`;
  if (adminUrl && reset) await adminRequest({ action: "delete", strategy });
  if (existing.has(name)) {
    if (!reset) throw new Error(`${name} already exists. Pass --reset to replace this strategy's index.`);
    await index!.deleteNamespace(name);
  }
  const namespace = index?.namespace(name) ?? null;
  const chunks = chunkCorpus(docs, strategy);
  for (let start = 0; start < chunks.length; start += BATCH * CONCURRENCY) {
    const groups = Array.from({ length: CONCURRENCY }, (_, i) =>
      chunks.slice(start + i * BATCH, start + (i + 1) * BATCH)).filter((group) => group.length);
    await Promise.all(groups.map((group) => upsertWithRetry(strategy, namespace, group)));
    if ((start + groups.reduce((n, group) => n + group.length, 0)) % 900 < BATCH * CONCURRENCY) {
      console.log(`${name}: ${Math.min(start + BATCH * CONCURRENCY, chunks.length)}/${chunks.length}`);
    }
  }
  console.log(`${name}: uploaded ${chunks.length} chunks`);
}

// Upstash indexes new embeddings asynchronously. A successful upsert alone does not
// mean retrieval can see the chunks, so wait before running the benchmark.
for (let attempt = 0; attempt < 60; attempt++) {
  const info = adminUrl
    ? (await adminRequest<{ info: Awaited<ReturnType<NonNullable<typeof index>["info"]>> }>({ action: "info", strategy: selected[0] })).info
    : await index!.info();
  if (info.pendingVectorCount === 0) {
    console.log(JSON.stringify({ ready: true, vectorCount: info.vectorCount, corpusHash: hash }));
    process.exit(0);
  }
  await new Promise((resolve) => setTimeout(resolve, 5000));
}
throw new Error("Uploads finished but vectors are still indexing. Check Upstash before evaluating.");
