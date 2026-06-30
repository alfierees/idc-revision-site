# Micro past papers → question + "Show solution" structure

**Date:** 2026-06-30
**Branch:** `feat/micro-past-paper-questions`

## Problem

Micro past papers on the site render as one flat markdown blob: the `**Setup:**`
and the `> [!success] Answer` are both always visible, so the answer is spoiled
immediately and there's no self-testing. The econometrics **problem-sets** already
solve this: each question has a separate `text` (shown) and `solution` (hidden
behind a **Show solution** `<details>` toggle via `CollapsibleSolution.astro`),
with a per-question `StatusPill`. We want micro past papers to work the same way.

`StatusPill` already accepts `kind: "past-paper"`, confirming this was the
intended end-state — only the schema and the renderer were never wired up.

## Decisions (from brainstorming)

- **Scope:** micro past papers only. Econometrics past papers stay flat (untouched).
- **Existing papers (PP01/PP02):** user will upload the original sample-exam files
  so the question text is verbatim. **Blocked until those uploads arrive** — out of
  scope for this pass beyond the rendering support.
- **Layout:** per-question cards — question shown, full worked solution behind a
  "Show solution" toggle. Mirror the problem-set page exactly.
- **New 3rd paper (Sample Exam 3):** in scope now. Both the questions docx and the
  official-solutions docx were provided. All official answers verified
  programmatically (every check passes).

## Design

### 1. Schema (`src/content.config.ts`)

- Add `questions: z.array(question).optional()` to the `past-papers` collection,
  reusing the existing shared `question` object
  (`{ id, text, solution, related_terms, source_doc_page }`).
- Add `title: z.string().optional()` to the shared `question` object — used by the
  past-paper card header + sidebar TOC. Backward-compatible: problem-sets simply
  don't set it.

Optionality means the 3 econometrics past papers (no `questions`) keep rendering
flat. Zero risk to them.

### 2. Renderer (`src/pages/subjects/[subject]/past-papers/[paper].astro`)

Branch on `paper.data.questions`:

- **Structured mode** (`questions` present):
  - Split the markdown `body` on a `<!--questions-->` sentinel: the part above
    renders as the intro/Setup framing **above** the cards; the part below (recap
    table + related notes) renders **after** the cards.
  - Render an `<ol>` of question cards, identical to the problem-set page: per-card
    `id`, optional `title` header, `StatusPill kind="past-paper"`, the question
    `text`, and `CollapsibleSolution` wrapping the rendered `solution`.
  - Sidebar (`PaperSidebar`) lists the question ids/titles as anchors.
  - If `paper.data.source_doc` is set, show an "Original paper ↗" link.
- **Flat mode** (no `questions`): unchanged from today.

### 3. Content — Sample Exam 3

- `src/content/past-papers/micro/pp-03-sample-exam-3.md`
  - Frontmatter: standard past-paper fields + `questions[]`.
  - Each question's `text` = verbatim from the questions docx (incl. MC options).
  - Each `solution` = worked solution matching the official key, with `> [!success]`
    answers, `> [!example]` working, `> [!warning]` traps.
  - `body` = "Setup / What this paper tests" framing above `<!--questions-->`, and a
    one-page recap table + related notes below.
- Original paper stored at `public/papers/micro/sample-exam-3.docx` (questions only),
  linked via `source_doc`.
- Figures: `public/images/micro/pp03-*.png` (site) generated with matplotlib.

### 4. Vault note (ingest-past-paper skill)

- `…/Micro-Economics/Past Papers/PP_03-Sample Exam 3.md` — worked-solution note,
  same conventions as PP_01/PP_02.
- Figures duplicated to `…/Micro-Economics/Attachments/PP03_*.png`.
- Wire into Micro hub `## Past Papers`, add any new glossary terms + registry names.

## Question id / title plan (Exam 3)

MC: `q1`…`q6`. Open Q1: `o1a`…`o1d`. Open Q2: `o2a`…`o2f`.
Titles e.g. "Q1 — Bundling vs. separate selling", "Open 2 — Vertical separation &
double marginalisation".

## Verification

- Numbers: official key re-derived in Python — all pass (bundling 5600/6000,
  Q4 CS 54.5 vs 50, Q5 threshold k>25, Open Q1 c>30 / c>60, Open Q2 full table,
  Part F c>40 / c>60).
- One flagged discrepancy: Open Q1 states "MC = c (i.e. TC=½Q²)" which is
  self-contradictory; official key solves with **constant MC = c**. Note follows the
  key and flags this in a `> [!warning]`.
- Links: `verify_links.py` for the vault subject.
- Build: `npm run build` + preview the rendered page (toggle works, math renders).

## Addendum (2026-06-30) — interactive multiple-choice

PP01/PP02 originals were uploaded and all three micro papers restructured into
`questions[]`. A second iteration replaced the "Show solution" toggle **for MC
questions only** with an interactive block (user choice: commit-then-reveal-all;
separate "Show working").

- **Schema:** `question.options?: { label, text, correct, why }[]`. Presence of
  `options` ⇒ MC rendering; absence ⇒ the plain solution toggle (open questions).
- **Component:** `McQuestion.tsx` (preact island). Stem shown; each option a
  clickable box. First click commits, locks all options, reveals every verdict
  (correct = green ✓, others red ✗) + each option's `why`; the picked option is
  badged. Auto-sets the shared status (done/wrong) via a new `STATUS_EVENT` that
  `StatusPill` now listens for. A "Show full working" toggle exposes the full
  derivation (`solution`); "Try again" clears the attempt. Trusted build-time
  HTML is injected via a small ref helper (no raw-HTML React prop).
- **Content:** each MC question's `text` becomes the stem; `options[]` carries
  the verbatim option wording + per-option `why`; the existing worked solution
  stays in `solution` as the "full working". Open questions unchanged.

## Out of scope

- Econometrics past papers (still flat).
- Converting problem-sets MC (none use options yet; schema supports it if wanted).
