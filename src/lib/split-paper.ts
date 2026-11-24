/**
 * Split a flat past-paper markdown body into question cards.
 *
 * Most papers are ingested as one long markdown page: an intro ("What this
 * paper tests"), then `## Q1 — …` sections whose worked answer follows the
 * question text, then a recap / related notes. This turns that page into:
 *
 *   intro → [group heading] → question { stem, parts[{ prompt, answer }] } → outro
 *
 * so the page can render each question as a card with its answer behind a
 * "Show answer" button. Works on the markdown source (top-level mdast blocks
 * sliced back out of the source text), so each piece still goes through the
 * normal render pipeline. Returns null when the paper doesn't look like a
 * sequence of questions, and the page falls back to the flat render.
 */
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import { slugify } from "./slugify";

export interface PaperPart {
  /** Sub-part heading text ("a. The value of k"), absent for single-part questions. */
  title?: string;
  prompt: string;
  answer: string;
}

export interface PaperQuestion {
  kind: "question";
  id: string;
  title: string;
  /** Shared question text shown above the parts. */
  stem: string;
  parts: PaperPart[];
}

export interface PaperSection {
  kind: "section";
  /** Heading markdown included in `md`; rendered as a plain block (no answer). */
  md: string;
  /** True for group headings shallower than the question level ("# Part A"). */
  group: boolean;
  title: string;
  id?: string;
}

export interface SplitPaper {
  intro: string;
  items: (PaperQuestion | PaperSection)[];
  outro: string;
}

interface Block {
  type: string;
  depth?: number;
  text: string; // heading plain text (headings only)
  src: string;
}

// A question-level heading: "Q1 …", "Question 2", "Part A", "Item (a)",
// "Problem 3", "Exercise 1", "Open 1a", "Miluim …", "1. …", "Task 2".
const QUESTION_RE =
  /^(?:Q(?:uestion)?\s*\.?\s*\d|Part\s+(?:[A-Z0-9]\b|One|Two|Three|Four|Five|Six|I{1,3}\b|IV\b|V\b)|Item\s|Problem\s*\d|Exercise\s*\d|Open\s*(?:question\s*|Q\s*)?\d|Closed\s*(?:question\s*)?\d|MCQ\s*\d|S\d+\b|Task\s*\d|Miluim|Section\s+[A-Z0-9]\b|\d+(?:\.\d+)?[.)]?\s+\S|\d+\s*[—–-])/i;

// A sub-part heading inside a question: "a. …", "(b) …", "1.1 …", "Q1a — …", "Part (ii)".
const SUBPART_RE = /^(?:\(?[a-h]\)|[a-h][.)]\s|\(?[ivx]{1,4}\)|\d+\.\d+|Q\d+[a-z]|Part\s*\(|Item\s*\(|Sub-?question|Question\s*\d+[a-z]|[a-h]\s*[—–-]|\d+\s*\(?[a-h]\)?\s*[—–-])/i;

// Headings that open (or belong to) the answer rather than a new sub-part.
const ANSWER_HEADING_RE =
  /\b(solutions?|answers?|working|worked|explanation|marking|why\b|intuition|check|verification|key\b|recap|takeaway|common mistakes?|traps?)\b/i;

// Callout types that mark the start of an answer.
const ANSWER_CALLOUT_RE = /^>\s*\[!(success|check|done|answer|solution)\]/i;
// "> [!warning] AI-written answer, not official…" always sits right above an answer.
const AI_ANSWER_RE = /^>\s*\[!warning\][-+]?[^\n]*\bAI[- ](?:written|solved)\b/i;
// Paragraph-led answers: "**Answer:** …", "**Solution.** …", "Answer: …".
const ANSWER_PARA_RE = /^(?:\*\*|__)?(?:Official\s+|Worked\s+|Model\s+|Suggested\s+|Final\s+)?(?:answer|solution|working)s?\b[^\n]{0,40}?(?:\*\*|__)?\s*[:.—–-]/i;

// Framing sections that are never questions.
const FRAMING_RE =
  /^(?:[^\w\s]+\s*)?(?:what this paper tests|the setup|setup|recap|summary|answer key|answer sheet|official key|related notes?|related|formula|exam strategy|how to use|key takeaways|overview|sources?|notes?|how the questions)\b|\b(?:recap|summary of answers|answer (?:key|sheet|summary)|related notes|agreement with|revision checklist|cheat sheet)\b/i;

const processor = unified().use(remarkParse).use(remarkGfm).use(remarkMath);


function toBlocks(md: string): Block[] {
  const tree = processor.parse(md) as any;
  const kids = tree.children as any[];
  const blocks: Block[] = [];
  for (let i = 0; i < kids.length; i++) {
    const start = kids[i].position.start.offset as number;
    const end = i + 1 < kids.length ? (kids[i + 1].position.start.offset as number) : md.length;
    blocks.push({
      type: kids[i].type,
      depth: kids[i].type === "heading" ? kids[i].depth : undefined,
      // Heading text as raw markdown (keeps $math$ and `code` for rendering).
      text:
        kids[i].type === "heading"
          ? md
              .slice(start, kids[i].position.end.offset)
              .replace(/^#{1,6}\s+/, "")
              .replace(/\s+#+\s*$/, "")
              .trim()
          : "",
      src: (i === 0 ? md.slice(0, start) : "") + md.slice(start, end),
    });
  }
  return blocks;
}

function isAiWarning(b: Block): boolean {
  return b.type === "blockquote" && AI_ANSWER_RE.test(b.src.trimStart());
}

function isAnswerStart(b: Block): boolean {
  const first = b.src.trimStart();
  if (b.type === "blockquote") return ANSWER_CALLOUT_RE.test(first) || AI_ANSWER_RE.test(first);
  if (b.type === "paragraph") return ANSWER_PARA_RE.test(first);
  if (b.type === "heading") return ANSWER_HEADING_RE.test(b.text);
  return false;
}

/** Content that is clearly worked solution, not question text. */
function looksLikeWorking(blocks: Block[]): boolean {
  const src = blocks.map((b) => b.src).join("");
  if (src.length > 900) return true;
  if (/\$\$/.test(src) && !/\*\*\s*Question\b/i.test(src)) return true;
  if (/!\[\[/.test(src)) return true;
  return false;
}

function joinSrc(blocks: Block[]): string {
  return blocks.map((b) => b.src).join("").trim();
}

/** Strip the paper's own H1 (duplicates the page title) from the intro. */
function dropTitleH1(blocks: Block[]): Block[] {
  const i = blocks.findIndex((b) => b.type === "heading");
  if (i !== -1 && blocks[i].depth === 1 && blocks.slice(0, i).every((b) => b.type === "html" || !b.src.trim())) {
    return [...blocks.slice(0, i), ...blocks.slice(i + 1)];
  }
  return blocks;
}

/**
 * "> [!warning] AI-written answer…" sometimes sits above the question text
 * rather than above the answer. When a real answer marker follows later, move
 * the warning down to sit just before it so the question text stays visible.
 */
function relocateAiWarnings(blocks: Block[]): Block[] {
  const out = [...blocks];
  for (let i = 0; i < out.length; i++) {
    if (!isAiWarning(out[i])) continue;
    let k = i + 1;
    while (k < out.length && out[k].type !== "heading" && !(isAnswerStart(out[k]) && !isAiWarning(out[k]))) k++;
    if (k < out.length && k > i + 1 && out[k].type !== "heading") {
      const [w] = out.splice(i, 1);
      out.splice(k - 1, 0, w);
      i = k - 1;
    }
  }
  return out;
}

const isPlainQuote = (b: Block) => b.type === "blockquote" && !/^>\s*\[!/.test(b.src.trimStart());

/**
 * Quoted-question convention: the paper's own wording is a plain blockquote
 * ("> Write a function that…"), optionally followed by its code listing, and
 * the worked answer starts at the first ordinary paragraph after it. Returns
 * how many leading blocks form the prompt, or -1 if the part doesn't open with
 * a quote.
 */
function quotedPromptLength(blocks: Block[]): number {
  if (!blocks.length || !isPlainQuote(blocks[0])) return -1;
  let k = 0;
  while (k < blocks.length && isPlainQuote(blocks[k])) k++;
  // A code listing right after the quote belongs to the question only when the
  // wording points at it ("Run the following code…", "Trace…"); otherwise it's
  // the solution code ("Write a function…" then the answer).
  const wording = blocks.slice(0, k).map((b) => b.src).join(" ");
  if (/\b(following|below|this code|the code|given code|trace|run the|output of|what (?:does|will))\b/i.test(wording)) {
    while (k < blocks.length && (isPlainQuote(blocks[k]) || blocks[k].type === "code")) k++;
  }
  return k;
}

function splitParts(rawBlocks: Block[], qDepth: number): { stem: string; parts: PaperPart[] } {
  // Sub-part headings: deeper headings that aren't answer headings.
  const blocks = relocateAiWarnings(rawBlocks);
  const isSub = (b: Block) =>
    b.type === "heading" && (b.depth ?? 0) > qDepth && !ANSWER_HEADING_RE.test(b.text) && (SUBPART_RE.test(b.text) || (b.depth ?? 0) === qDepth + 1);

  const firstSub = blocks.findIndex(isSub);
  const firstAns = blocks.findIndex(isAnswerStart);

  // Single-part question: everything before the first answer marker is the prompt.
  if (firstSub === -1 || (firstAns !== -1 && firstAns < firstSub)) {
    const quoted = quotedPromptLength(blocks);
    const cut = quoted > 0 && (firstAns === -1 || quoted < firstAns) ? quoted : firstAns;
    if (cut === -1) return { stem: joinSrc(blocks), parts: [] };
    return { stem: "", parts: [{ prompt: joinSrc(blocks.slice(0, cut)), answer: joinSrc(blocks.slice(cut)) }] };
  }

  const stem = joinSrc(blocks.slice(0, firstSub));
  const parts: PaperPart[] = [];
  let i = firstSub;
  while (i < blocks.length) {
    let j = i + 1;
    while (j < blocks.length && !isSub(blocks[j])) j++;
    const body = blocks.slice(i + 1, j);
    const ans = body.findIndex(isAnswerStart);
    let prompt: Block[];
    let answer: Block[];
    const quoted = quotedPromptLength(body);
    if (quoted > 0 && (ans === -1 || quoted < ans)) {
      prompt = body.slice(0, quoted);
      answer = body.slice(quoted);
    } else if (ans === -1) {
      // No marker: the whole sub-part body is the worked answer to the heading.
      prompt = [];
      answer = body;
    } else if (looksLikeWorking(body.slice(0, ans))) {
      prompt = [];
      answer = body;
    } else {
      prompt = body.slice(0, ans);
      answer = body.slice(ans);
    }
    parts.push({ title: blocks[i].text, prompt: joinSrc(prompt), answer: joinSrc(answer) });
    i = j;
  }
  return { stem, parts };
}

export function splitPaper(md: string): SplitPaper | null {
  const blocks = dropTitleH1(toBlocks(md));
  const headings = blocks.filter((b) => b.type === "heading");

  // Question level = the shallowest heading depth with ≥3 question-like
  // headings (so "## Q1" wins over its "### 1.1" sub-parts, and two "# Part A/B"
  // group headings don't win over the "## Q1…Q12" under them); else ≥2.
  const counts = new Map<number, number>();
  for (const h of headings) {
    if (QUESTION_RE.test(h.text) && !FRAMING_RE.test(h.text)) counts.set(h.depth!, (counts.get(h.depth!) ?? 0) + 1);
  }
  const depths = [...counts.entries()].sort((a, b) => a[0] - b[0]);
  const pick = depths.find(([, c]) => c >= 3) ?? depths.find(([, c]) => c >= 2);
  if (!pick) return null;
  const qDepth = pick[0];

  const isBoundary = (b: Block) => b.type === "heading" && (b.depth ?? 9) <= qDepth;

  // Leading blocks before the first heading stay in the intro.
  let start = blocks.findIndex(isBoundary);
  if (start === -1) return null;

  const usedIds = new Set<string>();
  const uniqueId = (text: string) => {
    const base = slugify(text).slice(0, 60).replace(/-+$/, "") || "q";
    let id = base;
    let n = 2;
    while (usedIds.has(id)) id = `${base}-${n++}`;
    usedIds.add(id);
    return id;
  };

  const items: (PaperQuestion | PaperSection)[] = [];
  let i = start;
  while (i < blocks.length) {
    let j = i + 1;
    while (j < blocks.length && !isBoundary(blocks[j])) j++;
    const head = blocks[i];
    const inner = blocks.slice(i + 1, j);
    const chunkMd = joinSrc(blocks.slice(i, j));
    const depth = head.depth ?? 9;
    const framing = FRAMING_RE.test(head.text);
    const hasAnswer = inner.some(isAnswerStart);
    const prev = items[items.length - 1];

    const prevFraming = prev ? FRAMING_RE.test(prev.kind === "question" ? prev.title : prev.title) : true;
    if (depth === qDepth && !framing && !prevFraming && ANSWER_HEADING_RE.test(head.text) && !QUESTION_RE.test(head.text) && prev) {
      // "## Official model answer" right after "## Question": it answers the previous chunk.
      if (prev.kind === "question") {
        const last = prev.parts[prev.parts.length - 1];
        if (last) last.answer = [last.answer, chunkMd].filter(Boolean).join("\n\n");
        else prev.parts.push({ prompt: prev.stem, answer: chunkMd }), (prev.stem = "");
      } else if (!prev.group) {
        const body = prev.md.replace(/^#{1,6} .*\n?/, "").trim();
        items[items.length - 1] = {
          kind: "question",
          id: prev.id ?? uniqueId(prev.title),
          title: prev.title,
          stem: "",
          parts: [{ prompt: body, answer: chunkMd }],
        };
      } else {
        items.push({ kind: "section", md: chunkMd, group: false, title: head.text, id: uniqueId(head.text) });
      }
    } else if (depth === qDepth && !framing && (QUESTION_RE.test(head.text) || hasAnswer)) {
      const { stem, parts } = splitParts(inner, qDepth);
      if (parts.some((p) => p.answer.trim())) {
        items.push({ kind: "question", id: uniqueId(head.text), title: head.text, stem, parts });
      } else {
        // A question heading with no answer under it introduces the questions below it.
        items.push({ kind: "section", md: chunkMd, group: true, title: head.text, id: uniqueId(head.text) });
      }
    } else {
      items.push({ kind: "section", md: chunkMd, group: depth < qDepth && !framing, title: head.text, id: uniqueId(head.text) });
    }
    i = j;
  }

  const firstQ = items.findIndex((x) => x.kind === "question");
  let lastQ = -1;
  items.forEach((x, k) => {
    if (x.kind === "question") lastQ = k;
  });
  if (firstQ === -1 || items.filter((x) => x.kind === "question").length < 2) return null;

  // Intro: framing before the first question, minus group headings that lead into it.
  let introEnd = firstQ;
  while (introEnd > 0) {
    const x = items[introEnd - 1];
    if (x.kind === "section" && x.group) introEnd--;
    else break;
  }
  const introItems = items.slice(0, introEnd) as PaperSection[];
  const outroItems = items.slice(lastQ + 1) as PaperSection[];

  return {
    intro: [joinSrc(blocks.slice(0, start)), ...introItems.map((x) => x.md)].filter(Boolean).join("\n\n"),
    items: items.slice(introEnd, lastQ + 1),
    outro: outroItems.map((x) => x.md).join("\n\n"),
  };
}

/** Stable progress id for one answerable part of a split question. */
export function partId(q: PaperQuestion, index: number): string {
  return q.parts.length > 1 ? `${q.id}--${index + 1}` : q.id;
}

/** Progress ids of every answerable part in a flat paper body (empty if it doesn't split). */
export function flatPaperQuestionIds(md: string): string[] {
  const split = splitPaper(md);
  if (!split) return [];
  return split.items.flatMap((x) =>
    x.kind === "question" ? x.parts.flatMap((p, i) => (p.answer.trim() ? [partId(x, i)] : [])) : [],
  );
}
