// Replaces static chart images with interactive sketch graphs at render time.
//
// The vault is the source of truth and past papers are re-copied (overwritten)
// on every ingest, so graphs are NOT hand-inserted into content files. Instead,
// this map says "wherever /images/<subject>/<file> appears, draw this graph
// instead". The swap survives re-ingest and applies on every page that embeds
// the image (lectures, problem sets, past papers, dictionary terms).
//
// Keys are "<subject>/<file>"; values are the ```graph block config
// (`type` picks the component in graphs/registry.ts, other keys are props).

import type { Root, Element, Parent } from "hast";

export type GraphConfig = Record<string, string | number>;

export const GRAPH_SWAPS: Record<string, GraphConfig> = {
  // ---- micro: Topic 1 (asymmetric information) ----
  "micro/t1-lemons-threshold.png": { type: "lemons-threshold" },
  "micro/t1-risk-aversion.png": { type: "risk-aversion" },
  "micro/t1-signaling.png": { type: "signaling" },
  // ---- micro: Topic 2 (market structures) ----
  "micro/t2-monopoly-mrmc.png": { type: "monopoly-cs-dwl", a: 10, b: 1, mc: 2 },
  "micro/t2-mr-elasticity.png": { type: "elasticity-mr" },
  "micro/t2-bundling.png": { type: "bundling", consumers: "C1:90,10,1;C2:80,40,1;C3:40,80,1;C4:10,90,1" },
  "micro/t2-price-discrim-3rd.png": { type: "price-discrimination-3rd", a1: 100, b1: 1, a2: 80, b2: 2, mc: 50, name1: "Segment 1 (less elastic)", name2: "Segment 2 (more elastic)" },
  "micro/t2-second-degree.png": { type: "second-degree-pd" },
  "micro/t2-cournot-br.png": { type: "reaction-functions", br1: "4.5,-0.5", br2: "4.5,-0.5" },
  "micro/t2-stackelberg.png": { type: "reaction-functions", br1: "4,-0.5", br2: "4,-0.5", points: "Stackelberg|The leader moves first and picks its best point on the follower's BR: q₁ = (A − c)/2.|4,2" },
  "micro/t2-structure-comparison.png": { type: "structure-comparison", structures: "monopoly,cournot,bertrand", A: 10, c: 2 },
  "micro/t2-double-marginalisation.png": { type: "double-marginalisation", A: 10, k: 2 },
  // ---- micro: Topics 3–4 (game theory, complements) ----
  "micro/t3-rps-cycle.png": { type: "payoff-matrix", rows: "Rock,Paper,Scissors", cols: "Rock,Paper,Scissors", payoffs: "0,0;-1,1;1,-1|1,-1;0,0;-1,1|-1,1;1,-1;0,0" },
  "micro/t3-bos-mixed-br.png": { type: "mixed-strategy-br" },
  "micro/t4-complement-br.png": { type: "reaction-functions", kind: "price", br1: "5,-0.5", br2: "5,-0.5" },
  "micro/t4-n-effects.png": { type: "complementary-firms", A: 6 },
  // ---- micro: problem sets ----
  "micro/ex8-q1-cournot-stackelberg.png": { type: "reaction-functions", br1: "25,-0.5", br2: "25,-0.5", points: "Stackelberg|The leader slides down firm 2's BR: q₁ = 25, q₂ = 12.5.|25,12.5" },
  "micro/ex8-q3-reaction-functions.png": { type: "reaction-functions", br1: "183.3333,-0.3333", br2: "137.5,-0.25", points: "Stackelberg|The low-cost leader expands and the follower retreats: (165, 96.25).|165,96.25" },
  "micro/ex8-q4-cartel-deviation.png": { type: "profit-bars", bars: "Cournot, q₁ = 40:1600;Cartel, q₁ = 30:1800;Cheat, q₁ = 45:2025", yLabel: "Firm 1 profit", notes: "Competing in quantities (Cournot): 1,600.|Colluding on the cartel quota: 1,800.|Cheating while firm 2 sticks to the quota: 2,025.", conclusion: "Cheating pays most, so every member wants to cheat: cartels are unstable.", conclusionTex: "2{,}025 > 1{,}800 > 1{,}600" },
  "micro/ex8-q5-commons-utility.png": { type: "commons-utility" },
  "micro/ex9-q1-double-marginalisation.png": { type: "double-marginalisation", A: 200, k: 0 },
  "micro/ex9-q3-arbitrage.png": { type: "profit-bars", bars: "Long-term rental:40000;Airbnb:40000+10000", segments: "Net income,Furniture cost", yLabel: "annual income (NIS)", notes: "Long-term rental: the owner keeps the whole rent.|Airbnb earns more, but pays 10,000 a year for furniture.", conclusion: "In long-run equilibrium Airbnb income exceeds rent by exactly the furniture cost, so net returns are equal.", conclusionTex: "R_{AB} - 10{,}000 = R_{LT}", footnote: "The rent level is illustrative; the question fixes only the 10,000 gap." },
  "micro/ex9-q4a-firm-market.png": { type: "competitive-market", scenario: "short-run" },
  "micro/ex9-q4b-demand-decrease.png": { type: "competitive-market", scenario: "demand-fall" },
  "micro/ex9-q4c-tech-improvement.png": { type: "competitive-market", scenario: "tech" },
  "micro/ex9-q4d-longrun-comparison.png": { type: "competitive-market", scenario: "long-run" },
  // ---- micro: past papers ----
  "micro/pp01-q1-uniform-pricing.png": { type: "uniform-pricing", wtp: "900,1100,1300,1500", cost: 1000, good: "computers" },
  "micro/pp01-q4-govt-price-discrim.png": { type: "government-channel" },
  "micro/pp01-open1-bertrand-br.png": { type: "reaction-functions", kind: "price", br1: "9.75,0.25", br2: "9.75,0.25", br1Alt: "17.5,0.125", br2Alt: "17.5,0.125", mainLabel: "(b) closer substitutes", altLabel: "(a) differentiated" },
  "micro/pp01-open2b-two-part-tariff.png": { type: "coffee-monopoly", part: "b" },
  "micro/pp01-open2c-mba-optimum.png": { type: "coffee-monopoly", part: "c" },
  "micro/pp01-open2cd-coffee-pd.png": { type: "price-discrimination-3rd", a1: 22, b1: 0.1, a2: 11, b2: 0.05, mc: 0, mcSlope: 0.5, name1: "MBA students (Friday)", name2: "Other students (weekdays)" },
  "micro/pp02-q1-screens-uniform.png": { type: "uniform-pricing", wtp: "800,600,400,200", cost: 300, good: "screens" },
  "micro/pp02-open1-two-part-tariff.png": { type: "separate-tariffs", a1: 200, a2: 150, mc: 20 },
  "micro/pp02-open1cd-price-vs-a.png": { type: "tariff-price-vs-a" },
  "micro/pp02-open2-qp-game.png": { type: "payoff-matrix", rows: "Quantity,Price", cols: "Quantity,Price", payoffs: "92.16,92.16;92.02,85.21|85.21,92.02;85.33,85.33", player1: "Firm 1", player2: "Firm 2" },
  "micro/pp03-q1-bundling.png": { type: "bundling", consumers: "Type 1:100,20,40;Type 2:20,100,40;Type 3:60,60,20", costX: 30, costY: 30 },
  "micro/pp03-q4-pd-fixed-cost.png": { type: "price-discrimination-3rd", a1: 22, a2: 8, mc: 2 },
  "micro/pp03-q5-cournot-merger-cs.png": { type: "merger-surplus" },
  "micro/pp03-open2-structure-ranking.png": { type: "structure-comparison", structures: "monopoly,stackelberg,vertical", A: 120, c: 40 },
  // ---- econometrics: lectures ----
  "econometrics/lec02-lpm-unbounded.png": { type: "lpm-problems", mode: "unbounded" },
  "econometrics/lec02-variance-frown.png": { type: "lpm-problems", mode: "variance" },
  "econometrics/lec03-scurve.png": { type: "binary-curves", mode: "s-curve" },
  "econometrics/lec03-diminishing-me.png": { type: "binary-curves", mode: "diminishing" },
  "econometrics/lec04-iv-dag.png": { type: "causal-diagram", diagram: "iv" },
  "econometrics/lec04-weak-instrument.png": { type: "weak-instrument" },
  "econometrics/lec05-selection-bias.png": { type: "sample-selection", mode: "bias" },
  "econometrics/lec05-inverse-mills.png": { type: "sample-selection", mode: "mills" },
  "econometrics/lec06-identification.png": { type: "supply-shift-identification" },
  "econometrics/lec06-serial-correlation.png": { type: "serial-correlation" },
  "econometrics/lec07-spurious.png": { type: "time-trends", mode: "spurious" },
  "econometrics/lec07-detrending.png": { type: "time-trends", mode: "detrending" },
  "econometrics/lec07-event-study.png": { type: "event-study" },
  "econometrics/lec08-within-between.png": { type: "fixed-effects", mode: "within-between" },
  "econometrics/lec08-demeaning.png": { type: "fixed-effects", mode: "demeaning" },
  "econometrics/lec09-sharp-rdd-gap.png": { type: "regression-discontinuity", mode: "sharp" },
  "econometrics/lec09-bandwidth.png": { type: "regression-discontinuity", mode: "bandwidth" },
  "econometrics/lec09-fuzzy-two-jumps.png": { type: "regression-discontinuity", mode: "fuzzy" },
  "econometrics/lec10-card-krueger-did.png": { type: "diff-in-diff", control: "23.331,21.166", treatment: "20.439,21.027", controlName: "Pennsylvania (control)", treatmentName: "New Jersey (treated)", periods: "Before (Feb–Mar 1992),After (Nov–Dec 1992)", yLabel: "employment per restaurant", decimals: 2 },
  "econometrics/lec10-parallel-trends.png": { type: "parallel-trends" },
  // ---- econometrics: past papers and problem sets (exact exam figures) ----
  "econometrics/pp01-probit-vs-lpm.png": { type: "binary-curves", mode: "probit-slopes" },
  "econometrics/pp01-did-plot.png": { type: "diff-in-diff", control: "0.52,0.47", treatment: "0.41,0.43", controlName: "Control (no exam)", treatmentName: "Treatment (took exam)", periods: "Pre (Mon–Tue),Post (Wed–Fri)", yLabel: "P(chose lottery B)", decimals: 2 },
  "econometrics/pp03-did-plot.png": { type: "diff-in-diff", control: "0.21,0.325", treatment: "0.26666,0.34583", controlName: "N4 (control village)", treatmentName: "N3 (typhoon warning)", periods: "Pre (rounds 1–5),Post (rounds 6–15)", yLabel: "mean today.always", decimals: 3 },
  "econometrics/ps04-causal-diagram.png": { type: "causal-diagram", diagram: "seatbelt" },
  // ---- macro: lectures (theory diagrams; real-data charts stay as images) ----
  "macro-economics/l2-budget-tangency.png": { type: "consumption-choice", figure: "two-period" },
  "macro-economics/l2-borrowing-constraint.png": { type: "consumption-choice", figure: "borrowing" },
  "macro-economics/l2-lifecycle-profile.png": { type: "consumption-choice", figure: "lifecycle" },
  "macro-economics/l4-production-diminishing.png": { type: "production-capital", figure: "production" },
  "macro-economics/l5-mpk-usercost.png": { type: "production-capital", figure: "user-cost" },
  "macro-economics/l6-si-shocks.png": { type: "macro-shocks", figure: "si-shocks" },
  "macro-economics/l7-budget-leisure.png": { type: "consumption-choice", figure: "leisure" },
  "macro-economics/l7-labor-equilibrium.png": { type: "labor-market", scenario: "equilibrium" },
  "macro-economics/l7-labor-shocks.png": { type: "labor-market", scenario: "lecture-shocks" },
  "macro-economics/l10-labor-goods-equilibrium.png": { type: "macro-shocks", figure: "fiscal" },
  // ---- macro: PS 5 (exact model numbers) ----
  "macro-economics/q1-3-productivity-shift.png": { type: "labor-market", scenario: "productivity" },
  "macro-economics/q1-4-capital-shift.png": { type: "labor-market", scenario: "capital" },
  "macro-economics/q2-foreign-aid.png": { type: "labor-market", scenario: "aid" },
  "macro-economics/q3-permanent-tfp.png": { type: "labor-market", scenario: "permanent-tfp" },
  "macro-economics/q5-task-assignment.png": { type: "production-capital", figure: "tasks" },
};

function graphBlock(config: GraphConfig): Element {
  const configText = Object.entries(config).map(([key, value]) => `${key}: ${value}`).join("\n");
  return {
    type: "element",
    tagName: "pre",
    properties: {},
    children: [{ type: "element", tagName: "code", properties: { className: ["language-graph"] }, children: [{ type: "text", value: configText }] }],
  };
}

const imageKey = (src: unknown): string | null => {
  if (typeof src !== "string") return null;
  const match = src.match(/^\/images\/([^/]+\/[^/?#]+)$/);
  return match ? decodeURIComponent(match[1]) : null;
};

const isBlankText = (node: { type: string; value?: string }) => node.type === "text" && !(node.value ?? "").trim();

// Walk the tree; replace a mapped <img> (or the <p> that holds only that image).
export function swapImages(tree: Root, swaps: Record<string, GraphConfig>): number {
  let swapped = 0;
  const visit = (parent: Parent) => {
    parent.children.forEach((child, index) => {
      if (child.type !== "element") return;
      if (child.tagName === "img") {
        const key = imageKey(child.properties?.src);
        if (key && swaps[key]) { parent.children[index] = graphBlock(swaps[key]); swapped++; }
        return;
      }
      if (child.tagName === "p") {
        const meaningful = child.children.filter((grandchild) => !isBlankText(grandchild as { type: string; value?: string }));
        const onlyChild = meaningful.length === 1 ? meaningful[0] : null;
        if (onlyChild && onlyChild.type === "element" && onlyChild.tagName === "img") {
          const key = imageKey(onlyChild.properties?.src);
          if (key && swaps[key]) { parent.children[index] = graphBlock(swaps[key]); swapped++; return; }
        }
      }
      visit(child);
    });
  };
  visit(tree);
  return swapped;
}

export function rehypeGraphSwaps() {
  return (tree: Root) => { swapImages(tree, GRAPH_SWAPS); };
}
