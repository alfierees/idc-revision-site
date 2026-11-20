// Graph swaps for the "econometrics" subject: wherever /images/econometrics/<file> appears,
// draw this graph instead. Keys are file names under public/images/econometrics/;
// values are the ```graph block config (`type` picks the component in
// src/components/graphs/registry.ts, other keys are props). One file per
// subject keeps parallel ingest branches from conflicting; see
// src/lib/graph-swaps.ts for how they are combined.

import type { GraphConfig } from "../../lib/graph-swaps";

const swaps: Record<string, GraphConfig> = {
  // ---- econometrics: lectures ----
  "lec02-lpm-unbounded.png": { type: "lpm-problems", mode: "unbounded" },
  "lec02-variance-frown.png": { type: "lpm-problems", mode: "variance" },
  "lec03-scurve.png": { type: "binary-curves", mode: "s-curve" },
  "lec03-diminishing-me.png": { type: "binary-curves", mode: "diminishing" },
  "lec04-iv-dag.png": { type: "causal-diagram", diagram: "iv" },
  "lec04-weak-instrument.png": { type: "weak-instrument" },
  "lec05-selection-bias.png": { type: "sample-selection", mode: "bias" },
  "lec05-inverse-mills.png": { type: "sample-selection", mode: "mills" },
  "lec06-identification.png": { type: "supply-shift-identification" },
  "lec06-serial-correlation.png": { type: "serial-correlation" },
  "lec07-spurious.png": { type: "time-trends", mode: "spurious" },
  "lec07-detrending.png": { type: "time-trends", mode: "detrending" },
  "lec07-event-study.png": { type: "event-study" },
  "lec08-within-between.png": { type: "fixed-effects", mode: "within-between" },
  "lec08-demeaning.png": { type: "fixed-effects", mode: "demeaning" },
  "lec09-sharp-rdd-gap.png": { type: "regression-discontinuity", mode: "sharp" },
  "lec09-bandwidth.png": { type: "regression-discontinuity", mode: "bandwidth" },
  "lec09-fuzzy-two-jumps.png": { type: "regression-discontinuity", mode: "fuzzy" },
  "lec10-card-krueger-did.png": { type: "diff-in-diff", control: "23.331,21.166", treatment: "20.439,21.027", controlName: "Pennsylvania (control)", treatmentName: "New Jersey (treated)", periods: "Before (Feb–Mar 1992),After (Nov–Dec 1992)", yLabel: "employment per restaurant", decimals: 2 },
  "lec10-parallel-trends.png": { type: "parallel-trends" },
  // ---- econometrics: past papers and problem sets (exact exam figures) ----
  "pp01-probit-vs-lpm.png": { type: "binary-curves", mode: "probit-slopes" },
  "pp01-did-plot.png": { type: "diff-in-diff", control: "0.52,0.47", treatment: "0.41,0.43", controlName: "Control (no exam)", treatmentName: "Treatment (took exam)", periods: "Pre (Mon–Tue),Post (Wed–Fri)", yLabel: "P(chose lottery B)", decimals: 2 },
  "pp03-did-plot.png": { type: "diff-in-diff", control: "0.21,0.325", treatment: "0.26666,0.34583", controlName: "N4 (control village)", treatmentName: "N3 (typhoon warning)", periods: "Pre (rounds 1–5),Post (rounds 6–15)", yLabel: "mean today.always", decimals: 3 },
  "ps04-causal-diagram.png": { type: "causal-diagram", diagram: "seatbelt" },
};

export default swaps;
