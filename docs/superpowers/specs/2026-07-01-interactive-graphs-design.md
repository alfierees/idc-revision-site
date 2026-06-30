# Interactive parameter graphs

**Date:** 2026-07-01
**Branch:** `feat/interactive-graphs`

## Goal

Let revision content embed **interactive, themed graphs** that show how a change
in a parameter changes the picture — equilibria, shaded areas (CS, PS, DWL, fee,
rent), and live numeric readouts. Authored with a one-line marker in markdown,
reusable across past papers, problem sets, lectures, recipes. Seeded by porting
the user's existing `ex5_q3` two-part-tariff widget.

## Constraints discovered

- The markdown pipeline renders with `allowDangerousHtml: false`; injected
  `<script>` never executes. So interactivity must come through the island
  system, not raw HTML in `.md`.
- A fenced ` ```graph ` block survives rendering as
  `<pre><code class="language-graph">…</code></pre>` (same as ` ```mermaid `),
  so no rehype plugin is needed — a client scanner can find and replace it,
  exactly like `Mermaid.astro`.
- The widget's CSS vars (`--surface-1`, `--text-secondary`, …) don't exist on the
  site; graphs must use the site tokens (`--color-*`) to inherit light/dark.

## Architecture

1. **Authoring marker** — a fenced block:
   ````
   ```graph
   type: two-part-tariff
   ```
   ````
   Optional `key: value` lines below `type:` become props (numbers coerced).

2. **`GraphMounter.astro`** — a `<script>` (mirrors `Mermaid.astro`) that finds
   every `code.language-graph`, parses its config, dynamic-imports the registry +
   preact, and `render()`s the matching component into a host div that replaces
   the `<pre>`. Included once on each content page
   (`past-papers`, `problem-sets`, `lectures`, `recipes`, `exam-prep`).

3. **`src/components/graphs/`**
   - `plot.tsx` — themed SVG toolkit: coordinate `scale()`, `<Axes>`, `<Curve>`,
     `<Area>` (shaded polygon), `<Marker>`, `<Readout>`; axes/curves/text use
     `--color-*` tokens, economic regions use a small fixed semantic palette
     (CS/fee = blue, PS/margin = green, DWL = red, rent = amber) with alpha so
     they read in both themes.
   - `registry.ts` — `type` → component map.
   - One file per graph component (thin, built on `plot.tsx`).

4. **Interaction** — each graph holds its parameters in state, rendered as
   `<input type="range">` sliders (and/or preset toggle buttons). Moving a slider
   recomputes curves, equilibrium, shaded areas, and a readout line live.

## First graphs + placement

| `type` | What it shows | Interaction | Placed on |
|--------|---------------|-------------|-----------|
| `two-part-tariff` | Port of ex5-q3: parts a–e, two consumers, fee/rent/DWL | part toggle + "show MR" | EX-5 problem set + recipe |
| `monopoly-cs-dwl` | Linear demand, MR=MC, shaded CS/PS/DWL + values | sliders: intercept, slope, MC | a micro recipe/lecture (reused) |
| `price-discrimination-3rd` | Two markets, separate MR=MC, CS per market | slider per market + uniform-price toggle | PP01 Q4 / PP03 Q4 |
| `oligopoly-structures` | Q & P under Monopoly/Cournot/Stackelberg/Vertical vs `c` | slider: `c` | PP03 Open Q2 / Topic 4 |

## Build order (de-risk "matches my vision")

1. Toolkit + mounter + registry + `two-part-tariff` port → embed on EX-5 → **show user**.
2. On approval: `monopoly-cs-dwl`, `price-discrimination-3rd`, `oligopoly-structures` + placements.

## Verification

Per graph: build clean; live preview (slider/toggle redraws areas + readouts;
math/labels legible); light + dark screenshot. `npm test` stays green.

## Out of scope (now)

- A declarative no-code graph DSL (components cover it; revisit if many similar graphs pile up).
- Graphs on non-micro subjects (mechanism is subject-agnostic; add as needed).
