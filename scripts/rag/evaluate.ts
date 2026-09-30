import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { Index } from "@upstash/vector";
import { collectLocalDocuments, collectSiteDocuments } from "../../src/lib/rag/corpus";
import { chunkCorpus, STRATEGIES, type ChunkStrategy } from "../../src/lib/rag/chunk";
import { adminRequest, adminUrl } from "./admin-client";

interface GoldQuestion {
  id: string;
  subject: string;
  question: string;
  answer: string;
  relevantDocs: string[];
}

interface Retrieved {
  rank: number;
  docId: string;
  title: string;
  score: number;
  text: string;
  url: string;
}

const root = process.cwd();
const questions = JSON.parse(readFileSync(join(root, "docs/rag-gold-questions.json"), "utf8")) as GoldQuestion[];
const available = new Set(collectSiteDocuments(root).map((doc) => doc.id));
const corpus = [...collectSiteDocuments(root), ...collectLocalDocuments(root)];
for (const question of questions) {
  for (const id of question.relevantDocs) {
    if (!available.has(id)) throw new Error(`${question.id}: gold source is absent: ${id}`);
  }
}
if (!adminUrl && (!process.env.UPSTASH_VECTOR_REST_URL || !process.env.UPSTASH_VECTOR_REST_TOKEN)) {
  throw new Error("Missing Upstash Vector credentials.");
}
const index = adminUrl ? null : Index.fromEnv();
const selected = STRATEGIES.filter((strategy) => !process.argv.includes("--strategy") ||
  process.argv[process.argv.indexOf("--strategy") + 1] === strategy);
if (!selected.length) throw new Error("Unknown --strategy value");
const modes = ["subject", "global"] as const;
const results: Array<GoldQuestion & { mode: typeof modes[number]; strategy: ChunkStrategy; hits: Retrieved[]; relevantRank: number | null }> = [];

for (const strategy of selected) {
  const namespace = index?.namespace(`rag-${strategy}`);
  for (const mode of modes) {
    for (let start = 0; start < questions.length; start += 8) {
      await Promise.all(questions.slice(start, start + 8).map(async (question) => {
        const filter = mode === "subject" ? `subject = '${question.subject.replaceAll("'", "")}'` : undefined;
        const response = adminUrl
          ? (await adminRequest<{ hits: Awaited<ReturnType<NonNullable<typeof namespace>["query"]>> }>({
            action: "query", strategy, question: question.question,
            subject: mode === "subject" ? question.subject : undefined,
          })).hits
          : await namespace!.query({ data: question.question, topK: 10,
            filter, includeMetadata: true, includeData: true });
        const hits = response.map((hit, index) => {
          const metadata = (hit.metadata ?? {}) as Record<string, unknown>;
          return { rank: index + 1, docId: String(metadata.docId ?? ""),
            title: String(metadata.title ?? ""), score: hit.score ?? 0,
            text: hit.data ?? "", url: String(metadata.url ?? "") };
        });
        const first = hits.find((hit) => question.relevantDocs.includes(hit.docId));
        results.push({ ...question, mode, strategy, hits, relevantRank: first?.rank ?? null });
      }));
    }
    console.log(`${strategy}/${mode}: ${questions.length} questions evaluated`);
  }
}

const summary = selected.flatMap((strategy) => modes.map((mode) => {
  const rows = results.filter((result) => result.strategy === strategy && result.mode === mode);
  return { strategy, mode, questions: rows.length,
    hit1: rows.filter((row) => row.relevantRank === 1).length,
    hit5: rows.filter((row) => row.relevantRank !== null && row.relevantRank <= 5).length,
    mrr10: Number((rows.reduce((sum, row) => sum + (row.relevantRank ? 1 / row.relevantRank : 0), 0) / rows.length).toFixed(3)),
    meanTop5Chars: Math.round(rows.reduce((sum, row) => sum + row.hits.slice(0, 5).reduce((n, hit) => n + hit.text.length, 0), 0) / rows.length),
  };
}));
const bySubject = selected.flatMap((strategy) =>
  [...new Set(questions.map((question) => question.subject))].map((subject) => {
    const rows = results.filter((row) => row.strategy === strategy && row.mode === "subject" && row.subject === subject);
    return { strategy, subject, hit5: rows.filter((row) => row.relevantRank !== null && row.relevantRank <= 5).length,
      questions: rows.length };
  }));
const chunkStats = selected.map((strategy) => {
  const chunks = chunkCorpus(corpus, strategy);
  return { strategy, chunks: chunks.length,
    meanChars: Math.round(chunks.reduce((total, chunk) => total + chunk.text.length, 0) / chunks.length) };
});
const candidates = summary.filter((row) => row.mode === "subject").sort((a, b) =>
  b.hit5 - a.hit5 || b.mrr10 - a.mrr10 || a.meanTop5Chars - b.meanTop5Chars);
const winner = candidates[0];
const paragraphSubject = summary.find((row) => row.strategy === "paragraph" && row.mode === "subject");
const structureSubject = summary.find((row) => row.strategy === "structure" && row.mode === "subject");

mkdirSync(join(root, ".rag-cache"), { recursive: true });
writeFileSync(join(root, ".rag-cache/eval-results.json"), JSON.stringify({ summary, bySubject, chunkStats, winner, results }, null, 2));

const table = [
  "| Strategy | Search scope | Hit@1 | Hit@5 | MRR@10 | Mean top-5 context |",
  "| --- | --- | ---: | ---: | ---: | ---: |",
  ...summary.map((row) => `| ${row.strategy} | ${row.mode} | ${row.hit1}/${row.questions} | ${row.hit5}/${row.questions} | ${row.mrr10.toFixed(3)} | ~${Math.round(row.meanTop5Chars / 4)} tokens |`),
];
const subjectTable = [
  "| Subject | Fixed | Paragraph | Structure |",
  "| --- | ---: | ---: | ---: |",
  ...[...new Set(questions.map((question) => question.subject))].map((subject) =>
    `| ${subject} | ${STRATEGIES.map((strategy) => {
      const row = bySubject.find((item) => item.strategy === strategy && item.subject === subject);
      return row ? `${row.hit5}/${row.questions}` : "—";
    }).join(" | ")} |`),
];
const chunkTable = [
  "| Recipe | Chunks | Mean characters/chunk |",
  "| --- | ---: | ---: |",
  ...chunkStats.map((row) => `| ${row.strategy} | ${row.chunks.toLocaleString()} | ${row.meanChars.toLocaleString()} |`),
];
const failures = results.filter((row) => row.mode === "subject" && (row.relevantRank === null || row.relevantRank > 5));
const failureLines = failures.length ? failures.map((row) =>
  `- **${row.id} / ${row.strategy}:** expected ${row.relevantDocs.join(" or ")}; top result: ${row.hits[0]?.docId ?? "none"} (${row.hits[0]?.title ?? ""}).`) : ["- No gold-source misses in the top five for subject-filtered search."];
const questionLines = questions.map((q) =>
  `### ${q.id} · ${q.subject}\n\n**Question:** ${q.question}\n\n**Reference answer:** ${q.answer}\n\n**Supporting page:** ${q.relevantDocs.map((id) => `\`${id}\``).join("; ")}\n`);
const report = `# RAG retrieval benchmark and reference answers\n\n` +
  `This benchmark tests **retrieval only**. No answer model sees these questions during scoring. ` +
  `A hit means that at least one manually selected supporting site document appears in the first N chunks. ` +
  `It does not prove that every retrieved chunk contains the exact answer span or that generated answers are correct. ` +
  `Equivalent lectures, term entries and source PDFs may answer a question without counting as an exact-source hit.\n\n` +
  `## Chunk recipes\n\nFixed uses roughly 1,100-character windows with 160-character overlap. ` +
  `Paragraph groups neighbouring paragraphs to roughly 1,450 characters and carries short context forward. ` +
  `Structure follows headings and question boundaries, adds the document title and question where needed, then caps the body near 1,800 characters with overlap. ` +
  `These are complete recipe comparisons; their sizes are not identical, so the result cannot isolate boundary type alone.\n\n` +
  `${chunkTable.join("\n")}\n\n` +
  `## Results\n\n${table.join("\n")}\n\n` +
  `The three strategies use the same corpus, embedding model, questions and vector index. ` +
  `Subject search applies the current course as a metadata filter; global search has no filter. ` +
  `Hit@5 and MRR@10 are exact-source retrieval measures. The context estimate uses four characters per token.\n\n` +
  `## Results by subject (Hit@5)\n\n${subjectTable.join("\n")}\n\n` +
  `## Selection\n\nThe leading exact-source Hit@5 recipe is **${winner?.strategy ?? "unknown"}** ` +
  `(${winner?.hit5 ?? 0}/24). Paragraph reaches ${paragraphSubject?.hit5 ?? 0}/24 and structure reaches ` +
  `${structureSubject?.hit5 ?? 0}/24. Structure puts a named reference page first in ` +
  `${structureSubject?.hit1 ?? 0}/24 cases (paragraph: ${paragraphSubject?.hit1 ?? 0}/24), ` +
  `with MRR@10 ${structureSubject?.mrr10.toFixed(3) ?? "n/a"} and about ` +
  `${Math.round((structureSubject?.meanTop5Chars ?? 0) / 4)} tokens of top-five context. ` +
  `This small sample **does not establish a definitive winner**. The live tutor uses **structure** because ` +
  `it usually brings supporting material nearer the top while keeping the prompt smaller. ` +
  `All three recipes remain indexed for comparison.\n\n` +
  `## Manual answer-bearing review\n\nExact-source misses below require manual review. ` +
  `Another retrieved page may contain the full answer even when the selected reference page does not appear in the first five. ` +
  `Record that judgement separately from the numerical score; it is not a blinded benchmark.\n\n` +
  `## Top-five misses by subject\n\n${failureLines.join("\n")}\n\n` +
  `## Gold questions and answers\n\n${questionLines.join("\n")}\n`;
if (selected.length === STRATEGIES.length) writeFileSync(join(root, "docs/rag-retrieval-report.md"), report);
console.log(JSON.stringify(summary, null, 2));
