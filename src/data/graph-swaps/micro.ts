// Graph swaps for the "micro" subject: wherever /images/micro/<file> appears,
// draw this graph instead. Keys are file names under public/images/micro/;
// values are the ```graph block config (`type` picks the component in
// src/components/graphs/registry.ts, other keys are props). One file per
// subject keeps parallel ingest branches from conflicting; see
// src/lib/graph-swaps.ts for how they are combined.

import type { GraphConfig } from "../../lib/graph-swaps";

const swaps: Record<string, GraphConfig> = {
  // ---- micro: Topic 1 (asymmetric information) ----
  "t1-lemons-threshold.png": { type: "lemons-threshold" },
  "t1-risk-aversion.png": { type: "risk-aversion" },
  "t1-signaling.png": { type: "signaling" },
  // ---- micro: Topic 2 (market structures) ----
  "t2-monopoly-mrmc.png": { type: "monopoly-cs-dwl", a: 10, b: 1, mc: 2 },
  "t2-mr-elasticity.png": { type: "elasticity-mr" },
  "t2-bundling.png": { type: "bundling", consumers: "C1:90,10,1;C2:80,40,1;C3:40,80,1;C4:10,90,1" },
  "t2-price-discrim-3rd.png": { type: "price-discrimination-3rd", a1: 100, b1: 1, a2: 80, b2: 2, mc: 50, name1: "Segment 1 (less elastic)", name2: "Segment 2 (more elastic)" },
  "t2-second-degree.png": { type: "second-degree-pd" },
  "t2-cournot-br.png": { type: "reaction-functions", br1: "4.5,-0.5", br2: "4.5,-0.5" },
  "t2-stackelberg.png": { type: "reaction-functions", br1: "4,-0.5", br2: "4,-0.5", points: "Stackelberg|The leader moves first and picks its best point on the follower's BR: q₁ = (A − c)/2.|4,2" },
  "t2-structure-comparison.png": { type: "structure-comparison", structures: "monopoly,cournot,bertrand", A: 10, c: 2 },
  "t2-double-marginalisation.png": { type: "double-marginalisation", A: 10, k: 2 },
  // ---- micro: Topics 3–4 (game theory, complements) ----
  "t3-rps-cycle.png": { type: "payoff-matrix", rows: "Rock,Paper,Scissors", cols: "Rock,Paper,Scissors", payoffs: "0,0;-1,1;1,-1|1,-1;0,0;-1,1|-1,1;1,-1;0,0" },
  "t3-bos-mixed-br.png": { type: "mixed-strategy-br" },
  "t4-complement-br.png": { type: "reaction-functions", kind: "price", br1: "5,-0.5", br2: "5,-0.5" },
  "t4-n-effects.png": { type: "complementary-firms", A: 6 },
  // ---- micro: problem sets ----
  "ex8-q1-cournot-stackelberg.png": { type: "reaction-functions", br1: "25,-0.5", br2: "25,-0.5", points: "Stackelberg|The leader slides down firm 2's BR: q₁ = 25, q₂ = 12.5.|25,12.5" },
  "ex8-q3-reaction-functions.png": { type: "reaction-functions", br1: "183.3333,-0.3333", br2: "137.5,-0.25", points: "Stackelberg|The low-cost leader expands and the follower retreats: (165, 96.25).|165,96.25" },
  "ex8-q4-cartel-deviation.png": { type: "profit-bars", bars: "Cournot, q₁ = 40:1600;Cartel, q₁ = 30:1800;Cheat, q₁ = 45:2025", yLabel: "Firm 1 profit", notes: "Competing in quantities (Cournot): 1,600.|Colluding on the cartel quota: 1,800.|Cheating while firm 2 sticks to the quota: 2,025.", conclusion: "Cheating pays most, so every member wants to cheat: cartels are unstable.", conclusionTex: "2{,}025 > 1{,}800 > 1{,}600" },
  "ex8-q5-commons-utility.png": { type: "commons-utility" },
  "ex9-q1-double-marginalisation.png": { type: "double-marginalisation", A: 200, k: 0 },
  "ex9-q3-arbitrage.png": { type: "profit-bars", bars: "Long-term rental:40000;Airbnb:40000+10000", segments: "Net income,Furniture cost", yLabel: "annual income (NIS)", notes: "Long-term rental: the owner keeps the whole rent.|Airbnb earns more, but pays 10,000 a year for furniture.", conclusion: "In long-run equilibrium Airbnb income exceeds rent by exactly the furniture cost, so net returns are equal.", conclusionTex: "R_{AB} - 10{,}000 = R_{LT}", footnote: "The rent level is illustrative; the question fixes only the 10,000 gap." },
  "ex9-q4a-firm-market.png": { type: "competitive-market", scenario: "short-run" },
  "ex9-q4b-demand-decrease.png": { type: "competitive-market", scenario: "demand-fall" },
  "ex9-q4c-tech-improvement.png": { type: "competitive-market", scenario: "tech" },
  "ex9-q4d-longrun-comparison.png": { type: "competitive-market", scenario: "long-run" },
  // ---- micro: past papers ----
  "pp01-q1-uniform-pricing.png": { type: "uniform-pricing", wtp: "900,1100,1300,1500", cost: 1000, good: "computers" },
  "pp01-q4-govt-price-discrim.png": { type: "government-channel" },
  "pp01-open1-bertrand-br.png": { type: "reaction-functions", kind: "price", br1: "9.75,0.25", br2: "9.75,0.25", br1Alt: "17.5,0.125", br2Alt: "17.5,0.125", mainLabel: "(b) closer substitutes", altLabel: "(a) differentiated" },
  "pp01-open2b-two-part-tariff.png": { type: "coffee-monopoly", part: "b" },
  "pp01-open2c-mba-optimum.png": { type: "coffee-monopoly", part: "c" },
  "pp01-open2cd-coffee-pd.png": { type: "price-discrimination-3rd", a1: 22, b1: 0.1, a2: 11, b2: 0.05, mc: 0, mcSlope: 0.5, name1: "MBA students (Friday)", name2: "Other students (weekdays)" },
  "pp02-q1-screens-uniform.png": { type: "uniform-pricing", wtp: "800,600,400,200", cost: 300, good: "screens" },
  "pp02-open1-two-part-tariff.png": { type: "separate-tariffs", a1: 200, a2: 150, mc: 20 },
  "pp02-open1cd-price-vs-a.png": { type: "tariff-price-vs-a" },
  "pp02-open2-qp-game.png": { type: "payoff-matrix", rows: "Quantity,Price", cols: "Quantity,Price", payoffs: "92.16,92.16;92.02,85.21|85.21,92.02;85.33,85.33", player1: "Firm 1", player2: "Firm 2" },
  "pp03-q1-bundling.png": { type: "bundling", consumers: "Type 1:100,20,40;Type 2:20,100,40;Type 3:60,60,20", costX: 30, costY: 30 },
  "pp03-q4-pd-fixed-cost.png": { type: "price-discrimination-3rd", a1: 22, a2: 8, mc: 2 },
  "pp03-q5-cournot-merger-cs.png": { type: "merger-surplus" },
  "pp03-open2-structure-ranking.png": { type: "structure-comparison", structures: "monopoly,stackelberg,vertical", A: 120, c: 40 },
};

export default swaps;
