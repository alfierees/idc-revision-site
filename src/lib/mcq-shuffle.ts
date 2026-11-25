/**
 * Shuffle the options of a parsed flat-paper MCQ and relabel them A, B, C…,
 * remapping every option-letter reference in the per-option explanations and
 * in the full working so "Answer: C" and "**B** swaps the prices" still point
 * at the right option.
 *
 * Why: many keys (and "tofes 0" answer sheets) put the correct answer first,
 * so an unshuffled quiz is answerable by always clicking A.
 *
 * Safety first: if the text holds a letter that could be an option reference
 * but might not be (a graph point "C", a "Type B" consumer, an option that
 * says "a + b is correct"), the question is left in its original order. A
 * question that isn't shuffled is fine; a working that names the wrong letter
 * is not.
 */
import type { ParsedMcq, McqOption } from "./mcq-parse";

/** Deterministic PRNG (mulberry32) seeded from a string. */
function rng(seed: string): () => number {
  let h = 1779033703 ^ seed.length;
  for (let i = 0; i < seed.length; i++) {
    h = Math.imul(h ^ seed.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  let a = h >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// "All of the above", "None of the other answers", "D. all wrong", "other".
const PINNED_LAST_RE =
  /^(?:\*\*)?(?:all|none)\b[^.]{0,40}\b(?:above|other|previous|wrong|correct|true|false)\b|^(?:\*\*)?all wrong|^(?:\*\*)?other\.?$|\b(?:all|are)\s+(?:wrong|incorrect)\.?$|^(?:\*\*)?all(?: of these| of them)?\.?$|^(?:\*\*)?none\.?$|\bnone of (?:the|these)\b|\ball (?:the )?(?:other )?(?:answers|options|statements) (?:are|is) (?:wrong|incorrect|correct|true)/i;

// Text that refers to other options by letter or position: can't be moved.
const CROSS_REF_RE = /\b(?:above|below|previous|both of|either of|first two|last two)\b/i;

// Words that, right before a standalone capital letter, make it a name rather
// than an option ("point C", "Type B", "Part A", "Vitamin D", "Plan B").
const NAME_BEFORE_RE =
  /\b(?:point|points|curve|curves|panel|panels|type|types|part|parts|vitamin|plan|figure|graph|graphs|consumer|consumers|good|goods|firm|firms|country|countries|person|player|players|group|groups|line|lines|region|regions|bundle|bundles|area|areas|model|models|asset|assets|stock|stocks|project|projects|machine|machines|company|companies|individual|candidate|store|shop|class|grade|series|tier|section|sections|zone|market|city|product|products|option\s+set|case|state|strategy|portfolio|portfolios|economist|economists|witness|founder|founders|partner|partners|shareholder|shareholders|employee|employees|student|students|agent|agents|buyer|buyers|seller|sellers|scenario|scenarios|clause|clauses|article|schedule|exhibit|appendix|annex|bond|bonds|loan|loans|investor|investors|worker|workers|team|teams|town|island|factory|economy|economies|matrix|set|event|events|urn|box|boxes|bag|die|coin|machine|row|column|columns|cell|cells)\s*$/i;

// Verbs that follow an option letter ("A is wrong", "b swaps the prices").
// Only verbs that can't also be a noun after the article "a"/"A" ("a change",
// "a drop", "a use" stay articles).
const OPTION_VERB_RE =
  /^\s+(?:is|are|was|has|gives|says|would|could|fails|ignores|confuses|reverses|treats|assumes|swaps|describes|claims|states|mixes|misses|counts|adds|forgets|doubles|cannot|does|doesn't|isn't|wrongly|incorrectly|correctly)\b/;

/** Mask math, code, wiki-links and images so their letters are never touched. */
function mask(text: string): { masked: string; restore: (s: string) => string } {
  const saved: string[] = [];
  const masked = text.replace(
    /\$\$[\s\S]*?\$\$|\$[^$\n]+\$|`[^`\n]*`|```[\s\S]*?```|!?\[\[[^\]]*\]\]|!\[[^\]]*\]\([^)]*\)|\[[^\]]*\]\([^)]*\)|<[^>]+>/g,
    (m) => {
      saved.push(m);
      return `\u0000${saved.length - 1}\u0000`;
    },
  );
  return { masked, restore: (s) => s.replace(/\u0000(\d+)\u0000/g, (_, i) => saved[+i]) };
}

interface RemapResult {
  text: string;
  /** Option references found (and remapped). */
  refs: number;
  /** False when a letter couldn't be classified safely. */
  ok: boolean;
  why: string;
}
type Remap = (text: string) => RemapResult;

const TOKEN_RE = /(?<![A-Za-z0-9_\u0000'’\\-])([A-Ha-h])(?![A-Za-z0-9_\u0000'’-])/g;

/** Build a remapper for one question (old label → new label). */
function remapper(map: Map<string, string>, labels: string[], upperLabels: boolean): Remap {
  const set = new Set(labels.map((l) => l.toLowerCase()));
  const conv = (ch: string) => {
    const to = map.get(ch.toUpperCase());
    if (!to) return ch;
    return ch === ch.toUpperCase() ? to : to.toLowerCase();
  };
  return (text: string) => {
    const { masked, restore } = mask(text);
    let ok = true;
    let refs = 0;
    let why = "";
    const abort = (m: string, at: number, whole: string) => {
      ok = false;
      why ||= whole.slice(Math.max(0, at - 50), at + 30).replace(/\n/g, " ");
      return m;
    };
    const ref = (ch: string) => {
      refs++;
      return conv(ch);
    };
    const out = masked.replace(TOKEN_RE, (m, ch: string, at: number, whole: string) => {
      if (!set.has(ch.toLowerCase())) return m;
      const isUpper = ch === ch.toUpperCase();
      // Upper-case option labels: a lower-case "(b)" is a clause or sub-part, not an option.
      if (upperLabels && !isUpper) return m;
      const before = whole.slice(Math.max(0, at - 40), at);
      const after = whole.slice(at + 1, at + 40);
      // "e.g." / "i.e."
      if ((ch === "e" && /^\.g\./.test(after)) || (ch === "g" && /e\.$/.test(before)) || (ch === "e" && /i\.$/.test(before))) return m;
      // "s.192(a)", "Article 5(b)": a statute sub-clause, never an option.
      if (/[A-Za-z0-9.]\($/.test(before) && /^\)/.test(after)) return m;

      const bold =
        /\*\*\(?$/.test(before) ||
        /^\)?[.:]?\*\*/.test(after) ||
        /\*\*(?:\(?[A-Ha-h]\)?\s*(?:,|and|or|&|\+|\/)\s*)+\(?$/.test(before);
      const paren = /(?:^|[^A-Za-z0-9.])\($/.test(before) && /^\)/.test(after);
      const closeParen = /^\)/.test(after) && !/\($/.test(before);
      const listLead = /(?:^|\n)\s*(?:>\s*)*[-*+]?\s*(?:\*\*)?\(?$/.test(before) && /^\)?\s*(?:\*\*)?\s*[.:)—–-]/.test(after);
      const answerColon = /answer[^\n]{0,30}[:—–-]\s*(?:\*\*)?\(?$/i.test(before) || /\b(?:option|options|answer|answers|choice|choices)\s*(?:is\s+)?(?:\*\*)?\(?$/i.test(before);
      const conj =
        /^\)?(?:\*\*)?\s*(?:,|and|or|&|\+|\/)\s*(?:\*\*)?\(?[A-Ha-h]\b/.test(after) ||
        /\b[A-Ha-h]\b\)?(?:\*\*)?\s*(?:,|and|or|&|\+|\/)\s*(?:\*\*)?\(?$/.test(before);
      const colon = /^\s*:/.test(after);
      const formatted = bold || paren || closeParen || listLead || answerColon || colon;

      // Ranges ("a to c", "A–D", "B through D") can't be remapped letter by letter.
      if (/^\s*(?:to|through|–|—)\s*(?:\*\*)?\(?[A-Ha-h]\b/.test(after) || /\b[A-Ha-h]\)?(?:\*\*)?\s*(?:to|through|–|—)\s*(?:\*\*)?\(?$/.test(before)) {
        return abort(m, at, whole);
      }

      if (isUpper) {
        // "A" followed by a word is an article ("A ceiling…", "A TV show…")
        // unless the word is a verb about the option ("A is wrong", "A has…").
        if (ch === "A" && /^\s+[^\s,.:;)\]]/.test(after) && !OPTION_VERB_RE.test(after) && !formatted && !conj) return m;
        if (NAME_BEFORE_RE.test(before) && !bold && !paren) return abort(m, at, whole);
        // Lower-case labels: a bare capital is a name (point A, consumer B) unless formatted.
        if (!upperLabels && !(bold || paren || listLead || answerColon)) return abort(m, at, whole);
        return ref(ch);
      }
      // Lower-case letter with lower-case labels.
      if (ch !== "a") return ref(ch);
      // "a": an article unless it is clearly an option.
      if (formatted || conj || /^\s*(?:[.,;)]|$)/.test(after) || OPTION_VERB_RE.test(after)) return ref(ch);
      return m;
    });
    return { text: restore(out), refs, ok, why };
  };
}

export let debugAbort: ((why: string) => void) | null = null;
export function setDebugAbort(f: ((why: string) => void) | null) {
  debugAbort = f;
}

export function shuffleMcq(q: ParsedMcq, seed: string): ParsedMcq {
  const n = q.options.length;
  if (n < 3) return q;
  const labels = q.options.map((o) => o.label);
  const upper = q.sourceUpper ?? false;
  const lastPinned = PINNED_LAST_RE.test(mask(q.options[n - 1].text).masked.trim());

  // Options that point at other options ("b + c are correct", "Both of the
  // above") can't move. A pinned "All the answers a, b, c are wrong" can stay:
  // it still means "every other option" after the shuffle.
  const probe = remapper(new Map(labels.map((l) => [l, l])), labels, upper);
  for (let k = 0; k < n; k++) {
    if (lastPinned && k === n - 1) continue;
    const { masked } = mask(q.options[k].text);
    if (CROSS_REF_RE.test(masked)) return debugAbort?.("crossref: " + q.options[k].text.slice(0, 60)), q;
    const r = probe(q.options[k].text);
    if (!r.ok || r.refs) return debugAbort?.("letter in option: " + q.options[k].text.slice(0, 60)), q;
  }

  const movable = lastPinned ? n - 1 : n;
  const rand = rng(seed);
  const order = [...Array(movable).keys()];
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  if (lastPinned) order.push(n - 1);
  if (order.every((v, i) => v === i)) [order[0], order[1]] = [order[1], order[0]];

  // Old label at original index order[k] moves to position k → new label labels[k].
  const map = new Map<string, string>();
  order.forEach((from, k) => map.set(labels[from], labels[k]));
  const remap = remapper(map, labels, upper);

  const w = remap(q.working);
  if (!w.ok) return debugAbort?.("remap: " + w.why), q;
  const options: McqOption[] = [];
  for (let k = 0; k < n; k++) {
    const o = q.options[order[k]];
    let why = "";
    if (o.why) {
      const r = remap(o.why);
      if (!r.ok) return debugAbort?.("remap why: " + r.why), q;
      why = r.text;
    }
    options.push({ ...o, label: labels[k], why });
  }
  return { ...q, options, working: w.text };
}

/** True when a paper's keys lean on one position (≥50% at the same letter). */
export function keyIsLopsided(correctPositions: number[]): boolean {
  if (correctPositions.length < 4) return correctPositions.length >= 2 && correctPositions.every((p) => p === 0);
  const counts = new Map<number, number>();
  for (const p of correctPositions) counts.set(p, (counts.get(p) ?? 0) + 1);
  return Math.max(...counts.values()) / correctPositions.length >= 0.5;
}

/**
 * Shuffle every MCQ of one paper when its key is lopsided, steering each
 * correct answer towards the least-used position so the paper's key ends up
 * spread over A–D. Questions that can't be shuffled safely keep their order.
 */
// A letter answer key printed outside the questions ("| 4 | C |" recap rows,
// "| **Key** | B | B | C |", "key says D"): shuffling would contradict it.
const FRAME_KEY_RE =
  /\|\s*\**(?:Q\s*)?\d+\**\s*\|\s*\**\(?[A-Ha-h]\)?\**\s*\||\|\s*\**(?:key|answer)s?\**\s*\|\s*\**[A-Ha-h]\**\s*\||\bkey (?:says|is|gives|marks) \**\(?[A-Ha-h]\b/i;

export function shufflePaper<T extends { mcq: ParsedMcq | null; seed: string }>(items: T[], frame = ""): T[] {
  const positions = items.filter((x) => x.mcq).map((x) => x.mcq!.options.findIndex((o) => o.correct));
  if (!keyIsLopsided(positions)) return items;
  if (FRAME_KEY_RE.test(frame)) return items;
  const used = new Map<number, number>();
  // Count the ones that will stay put first.
  const trials = items.map((x) => {
    if (!x.mcq) return null;
    const tries: ParsedMcq[] = [];
    for (let k = 0; k < 8; k++) {
      const s = shuffleMcq(x.mcq, `${x.seed}:${k}`);
      if (s === x.mcq) return null; // unsafe → keep original
      tries.push(s);
    }
    return tries;
  });
  items.forEach((x, i) => {
    if (x.mcq && !trials[i]) {
      const p = x.mcq.options.findIndex((o) => o.correct);
      used.set(p, (used.get(p) ?? 0) + 1);
    }
  });
  return items.map((x, i) => {
    const tries = trials[i];
    if (!tries) return x;
    let best = tries[0];
    let bestUse = Infinity;
    for (const t of tries) {
      const p = t.options.findIndex((o) => o.correct);
      const u = used.get(p) ?? 0;
      if (u < bestUse) {
        best = t;
        bestUse = u;
      }
    }
    const p = best.options.findIndex((o) => o.correct);
    used.set(p, (used.get(p) ?? 0) + 1);
    return { ...x, mcq: best };
  });
}
