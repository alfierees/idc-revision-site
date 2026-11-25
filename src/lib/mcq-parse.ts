/**
 * Detect a multiple-choice question inside a flat (markdown) question and pull
 * it apart into the pieces the interactive McQuestion island needs.
 *
 * Papers ingested as flat markdown write MCQs in a handful of shapes:
 *
 *   - A. Lower, lower, zero          a) down-sloping line…        - (a) …
 *   - B. Higher, higher, higher      b) up-sloping line…          - **B.** …
 *
 *   > [!success] Answer: C. Lower, higher, zero      (or "Official answer — **d**")
 *
 *   …working…
 *
 *   > [!failure] Why the others are wrong
 *   > - **A:** total income growth equals n…
 *
 * `parseMcq(prompt, answer)` returns null unless the prompt has a run of ≥3
 * consecutively lettered options (a, b, c…) AND the answer names one of those
 * letters in its "Answer" line, so sub-part lists ("a. Find the domain…") and
 * open questions never turn into a quiz by accident.
 */

export interface McqOption {
  label: string;
  text: string;
  correct: boolean;
  why: string;
}

export interface ParsedMcq {
  /** Prompt markdown with the option list removed. */
  stem: string;
  options: McqOption[];
  /** The full worked answer, shown behind "Show full working". */
  working: string;
  /** True when the paper wrote the option labels in capitals ("A.", "B)"). */
  sourceUpper?: boolean;
}

const LETTERS = "abcdefgh";

interface OptionRun {
  start: number; // line index of first option
  end: number; // line index after the last option
  options: { label: string; text: string }[];
}

// One option at the start of a line: "- A. text", "- (a) text", "a) text",
// "- **B.** text", "**(c)** text", "- A) text". The letter must be followed by
// ".", ")" or ":" (or wrapped in parens/bold) so "- A higher price" never counts.
const OPTION_LINE_RE =
  /^\s*(?:>\s*)*(?:[-*+]\s+)?(?:\*\*|__)?\s*(?:\(([A-Ha-h])\)|([A-Ha-h])\s*[.):])\s*(?:\*\*|__)?\s*(.*)$/;

function optionAt(line: string): { label: string; text: string } | null {
  const m = OPTION_LINE_RE.exec(line);
  if (!m) return null;
  const label = (m[1] ?? m[2])!;
  const text = m[3].trim();
  if (!text) return null;
  return { label, text };
}

/** Find the last run of ≥3 consecutive lettered option lines (a, b, c…). */
function findOptionRun(lines: string[]): OptionRun | null {
  let best: OptionRun | null = null;
  let i = 0;
  while (i < lines.length) {
    const first = optionAt(lines[i]);
    if (!first || first.label.toLowerCase() !== "a") {
      i++;
      continue;
    }
    const opts = [first];
    let j = i + 1;
    let lastOpt = i;
    while (j < lines.length) {
      const line = lines[j];
      if (!line.trim()) {
        j++;
        continue;
      }
      const o = optionAt(line);
      if (o && o.label.toLowerCase() === LETTERS[opts.length]) {
        opts.push(o);
        lastOpt = j;
        j++;
        continue;
      }
      // Indented continuation of a list option ("  more text").
      if (/^\s{2,}\S/.test(line) && lastOpt === j - 1) {
        opts[opts.length - 1].text += "\n" + line.trim();
        lastOpt = j;
        j++;
        continue;
      }
      break;
    }
    if (opts.length >= 3 && opts.every((o) => (o.label === o.label.toUpperCase()) === (first.label === first.label.toUpperCase()))) {
      best = { start: i, end: lastOpt + 1, options: opts };
    }
    i = lastOpt + 1;
  }
  return best;
}

/**
 * Inline options inside one line: "a) foo. b) bar. c) baz. d) qux." or
 * "Severe pollution. Options: A) … B) … C) … D) all wrong." Returns the text
 * before the options (the stem, minus a trailing "Options:") and the options,
 * when a, b, c… run in order from the first "a" token to the end of the line.
 */
function inlineOptions(line: string): { lead: string; options: { label: string; text: string }[] } | null {
  const tokenRe = /(^|[\s:;(])(?:\*\*)?(?:\(([A-Ha-h])\)|([A-Ha-h])[.)])(?:\*\*)?\s+/g;
  const tokens: { label: string; at: number; after: number }[] = [];
  for (const m of line.matchAll(tokenRe)) {
    tokens.push({ label: (m[2] ?? m[3])!, at: m.index! + m[1].length, after: m.index! + m[0].length });
  }
  for (let s = 0; s < tokens.length; s++) {
    if (tokens[s].label.toLowerCase() !== "a") continue;
    const upper = tokens[s].label === "A";
    const seq = [tokens[s]];
    for (let k = s + 1; k < tokens.length; k++) {
      const t = tokens[k];
      if (t.label.toLowerCase() === LETTERS[seq.length] && (t.label === t.label.toUpperCase()) === upper) seq.push(t);
    }
    if (seq.length < 3) continue;
    const options = seq.map((t, k) => ({
      label: t.label,
      text: line
        .slice(t.after, k + 1 < seq.length ? seq[k + 1].at : line.length)
        .trim()
        .replace(k + 1 < seq.length ? /\s*[;,(]$/ : /\s*[;,]?\)?$/, (m) => (k + 1 === seq.length && !/\(/.test(line.slice(seq[0].at - 1, seq[0].at)) ? m.replace(/[;,]/, "") : ""))
        .trim(),
    }));
    if (!options.every((o) => o.text)) continue;
    const lead = line.slice(0, seq[0].at).replace(/\($/, "").replace(/\s*(?:\*\*)?(?:the\s+)?options?(?:\*\*)?\s*:?\s*(?:\*\*)?\s*$/i, "").trim();
    return { lead, options };
  }
  return null;
}

// The answer line: "Answer: C. …", "Official answer — **d**", "Answer: (B)",
// "Official answer: d) all the above", "**Answer: (b)**", "Correct answer is B".
const ANSWER_LETTER_RE =
  /\banswer\b[^\n]{0,40}?(?:[:—–-]|\bis\b)\s*(?:\*\*|__)?\s*(?:option\s+)?\(?([A-Ha-h])\b(?!['’])\)?(?=\s*(?:$|[\s.,:;)*_—–-]))/i;

function answerLetters(answer: string, labels: string[]): string[] {
  const one = answerLetter(answer, labels);
  if (!one) return [];
  // "Answer: a and b (both accepted)" — only with an explicit "both/either/accepted".
  const line = answer.split("\n").find((l) => /\banswer\b/i.test(l) && /\b(both|either|accepted)\b/i.test(l));
  if (!line) return [one];
  const m = /\banswer\b[^\n]{0,40}?[:—–-]\s*(?:\*\*)?\s*\(?([A-Ha-h])\)?\s*(?:\*\*)?\s*(?:and|or|&)\s*(?:\*\*)?\(?([A-Ha-h])\b\)?/i.exec(line);
  if (!m) return [one];
  const out = [m[1], m[2]].map((x) => labels.find((l) => l.toLowerCase() === x.toLowerCase())).filter(Boolean) as string[];
  return out.length === 2 ? out : [one];
}

function answerLetter(answer: string, labels: string[]): string | null {
  // Only look at the first few lines that mention "answer" (the verdict line),
  // not at letters cited deep in the working.
  const lines = answer.split("\n").filter((l) => /\banswer\b/i.test(l)).slice(0, 3);
  for (const line of lines) {
    const m = ANSWER_LETTER_RE.exec(line.replace(/^\s*>\s*/, "").replace(/\[![a-z-]+\][-+]?/i, ""));
    if (!m) continue;
    const hit = labels.find((l) => l.toLowerCase() === m[1].toLowerCase());
    if (hit) return hit;
  }
  return null;
}

// A "why" bullet: "- **A:** …", "- (a) is wrong…", "- **B and D:** …",
// "- **c** and **d** use…", "> - **(A)** is a straight line…".
const WHY_BULLET_RE = /^\s*(?:>\s*)*[-*+]\s+(.*)$/;
const WHY_LEAD_RE =
  /^((?:\s*(?:,|and|&|\+|\/|or)?\s*(?:\*\*|__)?\s*(?:option\s+)?(?:\(([A-Ha-h])\)|([A-Ha-h]))(?:\s*[.):])?\s*(?:\*\*|__)?)+)(?=[\s:.,—–-])/i;

function whyBullets(answer: string, labels: string[]): Map<string, string> {
  const out = new Map<string, string>();
  const lower = labels.map((l) => l.toLowerCase());
  for (const raw of answer.split("\n")) {
    const b = WHY_BULLET_RE.exec(raw);
    if (!b) continue;
    const body = b[1];
    const lead = WHY_LEAD_RE.exec(body);
    if (!lead) continue;
    const leadText = lead[1];
    // Bare capital/lowercase letter with no bold/parens/punctuation ("- A higher…")
    // is ordinary prose, not a reference to an option.
    if (!/[*_()]/.test(leadText) && !/[A-Ha-h]\s*[.):]/.test(leadText) && !/^\s*(?:\(|:)/.test(body.slice(leadText.length))) continue;
    const letters = [...leadText.matchAll(/(?:\(([A-Ha-h])\)|(?<![A-Za-z])([A-Ha-h])(?![A-Za-z]))/g)]
      .map((m) => (m[1] ?? m[2])!.toLowerCase())
      .filter((l) => lower.includes(l));
    if (!letters.length) continue;
    let rest = body.slice(leadText.length).replace(/^\s*[:.—–-]\s*/, "").trim();
    // "(a) is wrong because …" reads fine on its own; keep the verb.
    rest = rest.replace(/^(?:is|are)\s+(?:wrong|incorrect|false|out)\b[,:]?\s*(?:because\s+)?/i, "");
    if (!rest) continue;
    rest = rest.charAt(0).toUpperCase() + rest.slice(1);
    for (const l of letters) {
      const label = labels[lower.indexOf(l)];
      if (!out.has(label)) out.set(label, rest);
    }
  }
  return out;
}

// Prose whys: "B is wrong because …", "Why not B: …", "B and D have …",
// "C, D are not on both curves." Capital or bracketed letters only, so the
// article "a" never reads as an option.
const WHY_SENTENCE_RE =
  /^(?:Why not\s+)?((?:\(?[A-H]\)?|\([a-h]\)|\*\*[A-Ha-h]\*\*|[a-h](?=:))(?:\s*(?:,|and|or|&)\s*(?:\(?[A-H]\)?|\([a-h]\)|\*\*[A-Ha-h]\*\*|[a-h](?=:)))*)(?=\s*:|\s+(?:is|are|has|have|gives?|uses?|would|changes?|says?|puts?|treats?|confuses?|reverses?|ignores?|assumes?|mixes?|fails?|misses?|counts?|adds?|takes?|describes?|forgets?|applies|apply|states?|claims?|swaps?|drops?|doubles?)\b)/;

function whySentences(answer: string, labels: string[], out: Map<string, string>): void {
  const lower = labels.map((l) => l.toLowerCase());
  for (const para of answer.split(/\n\s*\n/)) {
    // Drop quote markers and a callout header ("[!example] Why the others fail").
    const t = para.replace(/^\s*>\s?/gm, "").replace(/^\[![a-z-]+\][-+]?[^\n]*\n?/i, "").trim();
    if (!t || /^(?:[-*+]\s|\||\$\$|!\[|#|\[!)/.test(t)) continue;
    const sentences = t.replace(/\n/g, " ").split(/(?<=[.!?;])\s+(?=(?:Why not\s+)?(?:\*\*)?\(?[A-Ha-h]\)?(?:\*\*)?[\s,:])|(?<=:)\s+(?=(?:\*\*)?[A-Ha-h](?:\*\*)?\s+gives\b)/);
    for (const sen of sentences) {
      const m = WHY_SENTENCE_RE.exec(sen.trim().replace(/^Why the others (?:fail|are wrong|lose)\s*:\s*/i, ""));
      if (!m) continue;
      const letters = [...m[1].matchAll(/(?<![A-Za-z])[A-Ha-h](?![A-Za-z])/g)].map((x) => x[0].toLowerCase()).filter((l) => lower.includes(l));
      let rest = sen.trim().replace(/^Why the others (?:fail|are wrong|lose)\s*:\s*/i, "");
      rest = rest.replace(/^Why not\s+[^:]+:\s*/, "");
      for (const l of letters) {
        const label = labels[lower.indexOf(l)];
        if (!out.has(label)) out.set(label, rest);
      }
    }
  }
}

/** A one-paragraph explanation for the correct option. */
function correctWhy(answer: string): string {
  const lines = answer.split("\n");
  // 1) Body of the verdict callout, if it says more than the letter.
  const verdict = lines.findIndex((l) => /^\s*>\s*\[!(success|check|done|answer)\]/i.test(l));
  if (verdict !== -1) {
    const body: string[] = [];
    for (let k = verdict + 1; k < lines.length && /^\s*>/.test(lines[k]); k++) {
      const line = lines[k].replace(/^\s*>\s?/, "");
      // Stop where the callout moves on to the other options ("B is the…", "- **C:** …").
      if (/^\s*(?:[-*+]\s+)?(?:\*\*)?(?:Why\b|\(?[A-H]\)?(?:\*\*)?(?:\s+(?:is|are|and|has|gives|would|fails|means|says)\b|\s*[:)]))/.test(line)) break;
      body.push(line);
    }
    let text = body.join("\n").trim();
    // Keep it short: at most the first display equation.
    const firstEq = text.indexOf("$$");
    if (firstEq !== -1) {
      const close = text.indexOf("$$", firstEq + 2);
      if (close !== -1) text = text.slice(0, close + 2).trim();
    }
    if (text && !/^\$\$/.test(text) && text.length < 600) return text;
  }
  // 2) Otherwise the first ordinary paragraph of the working.
  const paras = answer.split(/\n\s*\n/);
  for (const p of paras) {
    const t = p.trim();
    if (!t || /^(?:>|\$\$|!\[|\||#|[-*+]\s|```|<)/.test(t)) continue;
    if (/\banswer\b/i.test(t) && t.length < 80) continue;
    if (/^See\s/.test(t)) continue;
    return t.length < 700 ? t : "";
  }
  return "";
}

/**
 * Options given as a table whose first column is the letter:
 *   | Option | Estimator |      | a | $X_1/2$ |   | b | $X_1/3$ | …
 * Returns the line span of the whole table and the options.
 */
function tableOptions(lines: string[]): OptionRun | null {
  for (let i = 0; i < lines.length; i++) {
    if (!/^\s*(?:>\s*)*\|/.test(lines[i])) continue;
    let j = i;
    while (j < lines.length && /^\s*(?:>\s*)*\|/.test(lines[j])) j++;
    const opts: { label: string; text: string }[] = [];
    for (const row of lines.slice(i, j)) {
      const cells = row.trim().replace(/^(?:>\s*)*\|/, "").replace(/\|\s*$/, "").split(/(?<!\\)\|/).map((c) => c.trim());
      const m = /^(?:\*\*)?\(?([A-Ha-h])[.)]?(?:\*\*)?$/.exec(cells[0] ?? "");
      if (!m || cells.length < 2) continue;
      if (m[1].toLowerCase() !== LETTERS[opts.length]) break;
      opts.push({ label: m[1], text: cells.slice(1).filter(Boolean).join(" · ") });
    }
    if (opts.length >= 3) return { start: i, end: j, options: opts };
    i = j;
  }
  return null;
}

function parseIn(prompt: string, answer: string): ParsedMcq | null {
  if (!prompt.trim() || !answer.trim()) return null;
  const lines = prompt.split("\n");

  let opts: { label: string; text: string }[] | null = null;
  let stemLines: string[] = lines;

  const run = findOptionRun(lines) ?? tableOptions(lines);
  if (run) {
    opts = run.options;
    stemLines = [...lines.slice(0, run.start), ...lines.slice(run.end)];
  } else {
    for (let k = lines.length - 1; k >= 0; k--) {
      const inl = inlineOptions(lines[k]);
      if (inl) {
        opts = inl.options;
        stemLines = [...lines.slice(0, k), ...(inl.lead ? [inl.lead] : []), ...lines.slice(k + 1)];
        break;
      }
    }
  }
  if (!opts) return null;

  const labels = opts.map((o) => o.label);
  const corrects = answerLetters(answer, labels);
  if (!corrects.length) return null;

  const whys = whyBullets(answer, labels);
  whySentences(answer, labels, whys);
  const cw = correctWhy(answer);
  for (const c of corrects) if (!whys.has(c) && cw) whys.set(c, cw);

  const stem = stemLines
    .join("\n")
    .replace(/^\s*\*\*Question\.?\*\*\s*/i, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  return {
    stem,
    options: opts.map((o) => ({
      label: o.label.toUpperCase(),
      text: o.text,
      correct: corrects.includes(o.label),
      why: whys.get(o.label) ?? "",
    })),
    working: answer.trim(),
    sourceUpper: opts[0].label === opts[0].label.toUpperCase(),
  };
}

export function parseMcq(prompt: string, answer: string): ParsedMcq | null {
  const direct = parseIn(prompt, answer);
  if (direct) return direct;
  // Some papers open the answer before the options ("> [!success] Official
  // answer and working" right under the heading), so the splitter files the
  // options under the answer. Re-cut at the end of the option list.
  const all = [prompt, answer].filter((x) => x.trim()).join("\n\n");
  const lines = all.split("\n");
  const run = findOptionRun(lines) ?? tableOptions(lines);
  if (!run) return null;
  return parseIn(lines.slice(0, run.end).join("\n"), lines.slice(run.end).join("\n"));
}
