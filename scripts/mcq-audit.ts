/**
 * Audit the multiple-choice detection that turns markdown MCQs into
 * interactive cards (src/lib/mcq-parse.ts, src/lib/mcq-shuffle.ts).
 *
 *   npx tsx scripts/mcq-audit.ts            per-file counts
 *   npx tsx scripts/mcq-audit.ts --missed   also list questions that name a letter answer but didn't parse
 *
 * Mirrors what the past-paper and problem-set pages do: structured questions
 * without an `options` block, and the parts of flat (split) papers.
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import yaml from "js-yaml";
import { splitPaper, partId } from "../src/lib/split-paper";
import { stripNoteMeta } from "../src/lib/strip-note-meta";
import { parseMcq } from "../src/lib/mcq-parse";
import { detectPaperMcqs, type McqCandidate } from "../src/lib/paper-mcq";

const showMissed = process.argv.includes("--missed");

function walk(dir: string): string[] {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : p.endsWith(".md") ? [p] : [];
  });
}

function frontmatter(src: string): { data: any; content: string } {
  const m = /^---\n([\s\S]*?)\n---\n?/.exec(src);
  return m ? { data: (yaml.load(m[1]) ?? {}) as any, content: src.slice(m[0].length) } : { data: {}, content: src };
}

const LETTER_ANSWER = /\banswer\b[^\n]{0,40}?(?:[:—–-]|\bis\b)\s*(?:\*\*)?\s*\(?[A-Ea-e]\b(?![a-z'])/i;
let total = 0;
let shuffledTotal = 0;
for (const f of [...walk("src/content/past-papers"), ...walk("src/content/problem-sets")].sort()) {
  const slug = f.split("/").pop()!.replace(/\.md$/, "");
  const { data, content } = frontmatter(readFileSync(f, "utf8"));
  let cands: McqCandidate[] = [];
  let frame = content;
  let already = 0;
  if (Array.isArray(data.questions) && data.questions.length) {
    already = data.questions.filter((q: any) => q.options?.length).length;
    cands = data.questions.filter((q: any) => !q.options?.length).map((q: any) => ({ id: q.id, prompt: q.text ?? "", answer: q.solution ?? "" }));
  } else {
    const split = splitPaper(stripNoteMeta(content));
    if (!split) continue;
    frame = [split.intro, split.outro, ...split.items.map((it) => (it.kind === "section" ? it.md : ""))].join("\n");
    for (const it of split.items) {
      if (it.kind !== "question") continue;
      it.parts.forEach((p, i) =>
        cands.push({
          id: partId(it, i),
          prompt: it.parts.length === 1 ? [it.stem, p.prompt].filter((x) => x.trim()).join("\n\n") : p.prompt,
          answer: p.answer,
        }),
      );
    }
  }
  const found = detectPaperMcqs(slug, cands, frame);
  const missed = cands.filter((c) => !found.has(c.id) && LETTER_ANSWER.test(c.answer + c.prompt));
  if (!found.size && !already && !missed.length) continue;
  let shuffled = 0;
  for (const c of cands) {
    const m = found.get(c.id);
    const orig = m && parseMcq(c.prompt, c.answer);
    if (m && orig && m.options.some((o, k) => o.text !== orig.options[k].text)) shuffled++;
  }
  const pos = [0, 0, 0, 0, 0, 0];
  for (const m of found.values()) pos[m.options.findIndex((o) => o.correct)]++;
  const whys = [...found.values()].reduce((s, m) => s + m.options.filter((o) => o.why).length, 0);
  const opts = [...found.values()].reduce((s, m) => s + m.options.length, 0);
  total += found.size;
  shuffledTotal += shuffled;
  console.log(
    `${f.replace("src/content/", "")}\n   mcq=${found.size} alreadyStructured=${already} shuffled=${shuffled} key=${pos.slice(0, 5).join("/")} why=${whys}/${opts}${missed.length ? ` missed=${missed.length}` : ""}`,
  );
  if (showMissed && missed.length) console.log(`   missed: ${missed.map((m) => m.id).join(", ")}`);
}
console.log(`\n${total} MCQs detected, ${shuffledTotal} shuffled`);
