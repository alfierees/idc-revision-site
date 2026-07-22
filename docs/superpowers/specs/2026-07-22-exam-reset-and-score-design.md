# Exam completion: reset-all + score

**Date:** 2026-07-22
**Branch:** `feat/exam-reset-and-score`
**Status:** approved, implementing overnight for morning review

## Problem

Two gaps when re-attempting an exam on the site:

1. **No bulk reset.** Re-doing a paper means clicking "Try again" on every MCQ card individually; open-answer cards keep whatever manual status was set. Users re-run papers to check understanding and want a clean slate in one click.
2. **No score.** After completing an exam the user cannot see how many they got right or a percentage — "regardless, the user should see how many points/percentage correct they score after completing one of the exams."

A third feature — typing an answer into the page and checking it against the solution — is explicitly **out of scope** (future work). The design leaves a clean seam for it.

## Key insight

The existing `src/lib/status.ts` layer (`untried / done / wrong / skipped`, persisted in `localStorage`, broadcast via `STATUS_EVENT`) is already the right data model for a score. MCQ questions (`McQuestion.tsx`) auto-write it on every pick. The only gap is open-answer questions, whose sole status signal today is a manual chip (`StatusPill`) the user reports never using.

So: capture the open-answer judgement at the natural moment (right after the solution is revealed), retire the unused chip, and add one floating control that **reads** statuses to show a score and **clears** them to reset. No parallel state system.

## Decisions (from the user)

- **Open-answer scoring:** inline self-grade after the solution reveal (not the manual chip).
- **Retire the manual `StatusPill`** entirely, on both paper types.
- **Self-grade outcomes:** Got it / Missed it / Skip. Skip = answered-but-not-scored (excluded from the % denominator so deliberate skips don't lower the score).
- **Placement:** floating pill, bottom-right, expandable.
- **Score timing:** reveal at the end. While working, the pill shows only a progress count; the score/% appears once every gradable question is answered.
- Applies to **both** past-paper and problem-set pages (MCQ and open-answer alike).

## Components

### `src/lib/status.ts` (extend)
- Add `EXAM_RESET_EVENT = "idc-exam-reset"` and `dispatchExamReset(refSlug)` (a page-scoped `CustomEvent` carrying `{ refSlug }`).
- Add a **pure** `summarizeStatuses(values: StatusValue[]): ExamSummary` returning `{ total, answered, correct, missed, skipped, graded, pct, complete }`. `graded = correct + missed`; `pct = graded > 0 ? round(correct / graded * 100) : null`; `complete = total > 0 && answered === total`. This is the unit-tested core.
- Keep `cycleStatus` and its test untouched (harmless tested utility even once `StatusPill` is gone).

### `src/components/OpenAnswer.tsx` (new island; replaces `CollapsibleSolution` on question cards)
- Props: `subject`, `kind`, `refSlug`, `questionId`, `solutionHtml`.
- Renders the "Show solution" toggle (same visual language as `CollapsibleSolution`), the solution HTML (via the same `ref` + `innerHTML` assignment pattern used in `McQuestion`, keeping the island free of React's raw-HTML prop), and — **only once the solution is revealed** — a self-grade row: `How did you go? ✓ Got it · ✗ Missed it · Skip`.
- The chosen grade **is** the status (`done` / `wrong` / `skipped`), read from and written to the status key. Active button reflects current status. Persists across reload; the score reflects it even while the solution is collapsed.
- Subscribes to `EXAM_RESET_EVENT` (matched on `refSlug`): collapse the solution, clear the status.

### `src/components/ExamScorebar.tsx` (new island; one per exam page)
- Props: `subject`, `kind`, `refSlug`, `questionIds: string[]` (gradable questions only, in order).
- Reads statuses on mount and on every `STATUS_EVENT` / `EXAM_RESET_EVENT`, recomputing via `summarizeStatuses`.
- **Collapsed pill** (fixed bottom-right, safe-area aware):
  - incomplete → progress: `6 / 8 answered`
  - complete → score: `You scored 7 / 8 · 88%` (headline is `correct / graded`; if `graded === 0` because everything was skipped, show `All skipped`).
- **Expanded panel** (tap to toggle): breakdown (correct / missed / skipped) + **Reset all**.
- **Reset all:** for each `questionId`, `writeStatus(key, "untried")` and remove the MCQ pick key `idc-mc:{subject}:{refSlug}:{questionId}` (authoritative clear), then `dispatchExamReset(refSlug)` so every mounted island updates its own UI (MCQ un-reveals, OpenAnswer collapses). The direct clear covers any island that failed to mount; the event covers the in-memory React state that a bare `localStorage` clear would not touch.
- Not rendered when the page has zero gradable questions.

### `src/components/McQuestion.tsx` (small change)
- Add a `useEffect` subscribing to `EXAM_RESET_EVENT`; when `detail.refSlug === refSlug`, call the existing `reset()`. Nothing else changes.

### `src/components/StatusPill.tsx` (delete)
- Removed from both card headers and deleted from the codebase.

### Page templates
- `src/pages/subjects/[subject]/past-papers/[paper].astro` and `.../problem-sets/[set].astro`:
  - Drop the `StatusPill` import + header usage.
  - Replace `CollapsibleSolution` (on question cards) with `OpenAnswer`.
  - Mount one `ExamScorebar` per page with the gradable question ids (`kind="past-paper"` / `"problem-set"`).
- **Gradable** = question has options (MCQ) **or** a non-empty solution. Framing/setup rows with neither are excluded from the denominator.

## Data flow

```
pick / self-grade  ──writeStatus──▶  localStorage + STATUS_EVENT
                                          │
                     ExamScorebar ◀───────┘  (recompute, update pill)

Reset all ──▶ clear status + pick keys ──▶ dispatchExamReset(refSlug)
                                                │
              McQuestion.reset() ◀──────────────┤
              OpenAnswer collapse+clear ◀────────┘
```

## Testing / verification

- **Unit:** `summarizeStatuses` in `tests/status.test.ts` — progress vs complete, skip excluded from `pct`, all-skipped edge, empty paper.
- **Build:** `npm test` + `npm run build` clean.
- **Browser (real verification for UI):** an MCQ paper (`pp-01`) and an open-answer paper (an accounting sample or the ML prep set) at desktop and 390px:
  - answer a few → pill shows progress, no %
  - complete all → pill reveals score + %
  - open-answer self-grade writes to the score; Skip doesn't lower %
  - Reset all → every card returns to untried, solutions collapse, pill returns to `0 / N`
  - no horizontal overflow; pill doesn't obscure content or the sidebar toggle on mobile
- **Screenshots** at desktop + 390px captured for morning review.

## Out of scope

- Typing an answer into the page and auto/assisted-checking it against the solution. The self-grade row is the seam where a typed-answer box would later slot in.
- Any change to non-exam pages (lectures, recipes, dictionary).
