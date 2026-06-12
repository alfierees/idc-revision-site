import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import type { SubjectConfig } from "./config.js";
import { getSubjectConfig } from "./config.js";
import { scan } from "./scan.js";
import { copyAssets } from "./copy-assets.js";
import { writeQueue } from "./queue.js";
import { copyLectures, copyPastPapers, copyGlossary } from "./copy-prose.js";
import { reconcileTerms } from "./reconcile-terms.js";

export interface RunCliInput {
  subject: SubjectConfig;
  siteRoot: string; // absolute path to site/
}

export interface RunCliSummary {
  subject: string;
  counts: Record<string, number>;
  queuePath: string;
}

export async function runCli(input: RunCliInput): Promise<RunCliSummary> {
  const contentRoot = join(input.siteRoot, "src/content");
  const ingestRoot = join(input.siteRoot, "scripts/ingest");

  const result = await scan(input.subject, contentRoot);
  await copyAssets({ imageOps: result.imageOps, docOps: result.docOps });
  await copyLectures(input.subject, contentRoot);
  const pastPapers = await copyPastPapers(input.subject, contentRoot);
  const glossaryCopied = await copyGlossary(input.subject, contentRoot);
  const reconciledTerms = glossaryCopied ? await reconcileTerms(input.subject, contentRoot) : [];
  const queuePath = await writeQueue(result, ingestRoot);

  const counts: Record<string, number> = { term: 0, recipe: 0, "problem-set": 0, lecture: 0 };
  for (const p of result.pending) counts[p.kind]++;
  counts["past-paper"] = pastPapers.length;
  counts["glossary"] = glossaryCopied ? 1 : 0;
  counts["term-stub"] = reconciledTerms.length;
  return { subject: input.subject.slug, counts, queuePath };
}

// CLI shim: `npx tsx scripts/ingest/cli.ts <subject>`
async function main() {
  const slug = process.argv[2];
  if (!slug) {
    console.error("Usage: npx tsx scripts/ingest/cli.ts <subject-slug>");
    process.exit(2);
  }
  const here = dirname(fileURLToPath(import.meta.url));
  const siteRoot = join(here, "..", "..");
  const subject = getSubjectConfig(slug);
  const s = await runCli({ subject, siteRoot });
  const order = ["term", "recipe", "problem-set", "lecture", "past-paper", "glossary", "term-stub"] as const;
  const pretty = order.map(k => `${s.counts[k] ?? 0} ${k}${(s.counts[k] ?? 0) === 1 ? "" : "s"}`).join(", ");
  console.log(`${s.subject}: ${pretty} pending`);
  console.log(`queue: ${s.queuePath}`);
}

const isDirectInvocation = process.argv[1] && process.argv[1].endsWith("cli.ts");
if (isDirectInvocation) {
  main().catch(err => { console.error(err); process.exit(1); });
}
