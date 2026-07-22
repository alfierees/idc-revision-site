# IDC Revision Site

Astro 6 static site that turns the IDC Obsidian vault into a per-subject exam-revision tool (Dictionary, Lectures, Problem Sets, Past Papers, Recipes, Exam Prep). Shared with classmates via Vercel: **deployment protection is OFF** — handing out the `.vercel.app` URL just works, no login/invite needed, and it auto-updates on every merge to `main`. (This has caused confusion twice: there is nothing extra to configure to "share" it.)

## Commands

Package manager is **npm** (package-lock.json).

- `npm run dev` — Astro dev server, default port **4321**. `.claude/launch.json` pins it to **4322** (`npm run dev -- --port 4322`).
- `npm run build` — static build (500+ pages).
- `npm test` — vitest run.

**Port quirk (bit us for weeks):** stale node processes squat ports 4321/4322 and make dev silently start on the wrong port or fail. Kill them first:

```sh
lsof -ti :4321 :4322 | xargs kill
```

## Content ingestion

Ingestion is driven by the user-level **`/ingest <subject-slug>`** slash command (`~/.claude/commands/ingest.md`) — it holds the full workflow and conventions; don't duplicate or improvise around it. Its machinery lives in `scripts/ingest/`:

- `npx tsx scripts/ingest/cli.ts <subject-slug>` — deterministic scan/copy pass (lectures, assets, glossary, term stubs, queue of pending AI drafts).
- `npx tsx scripts/ingest/audit.ts <subject-slug>` — post-ingest audit (muted tags, broken wiki-links, missing images). Exit 1 = issues.
- Per-subject vault/source paths are configured in `scripts/ingest/config.ts`.

## Architecture facts (non-obvious)

- **Heading IDs use the local slugify, NOT `rehype-slug`.** `src/lib/slugify.ts` is the single canonical slug algorithm; a local rehype plugin in `src/lib/render-markdown-string.ts` applies it to headings so `[[Page#Section]]` fragments and anchors agree (em-dashes/punctuation collapse to single hyphens). Never assume rehype-slug defaults.
- **Wiki-link resolution** lives in `src/lib/known-links.ts` (`resolveLink`): slugify-then-lookup, plus a **prefix fallback** (`cournot` → `cournot-competition` when unambiguous) and problem-set name fallbacks (`[[PS_04-…]]` → `ps-4`). Unresolvable links render muted, not broken.
- **Obsidian image embeds** (`![[Foo.png|300]]`) are rewritten by a pre-pass in `src/lib/render-markdown-string.ts` to `/images/<subject>/<slug>.<ext>` — keep them verbatim in lecture copies; ingest copies the bytes.
- **Content collections** (subjects, terms, recipes, lectures, problem-sets, past-papers, glossary, exam-prep) are defined in `src/content.config.ts` under `src/content/`.

## Vault mapping

- **Project notes** (overview, decisions, build log, specs, plans): `~/Documents/Obsidian/Projects/projects/idc-revision/` — Title Case em-dash filenames, e.g. `IDC Revision — Build Log.md`.
- **Content source** (read-only): `~/Documents/Obsidian/IDC notes/Year 2/Semester 2/<Subject>/`; source PDFs under `~/Desktop/IDC/IDC subjects/Year 2/Semester 2/`.

## Recurring failure mode: KaTeX / squished math

Math rendering breaks subtly (single-line `$$…$$` treated as inline, `\|` in tables, em-dashes inside math, squished display blocks). For any change touching math-heavy pages (econometrics/macro problem sets especially), **load the page in a browser and eyeball the equations before claiming done** — a clean build does not mean the math renders correctly.
