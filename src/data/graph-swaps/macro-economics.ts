// Graph swaps for the "macro-economics" subject: wherever /images/macro-economics/<file> appears,
// draw this graph instead. Keys are file names under public/images/macro-economics/;
// values are the ```graph block config (`type` picks the component in
// src/components/graphs/registry.ts, other keys are props). One file per
// subject keeps parallel ingest branches from conflicting; see
// src/lib/graph-swaps.ts for how they are combined.

import type { GraphConfig } from "../../lib/graph-swaps";

const swaps: Record<string, GraphConfig> = {
  // ---- macro: lectures (theory diagrams; real-data charts stay as images) ----
  "l2-budget-tangency.png": { type: "consumption-choice", figure: "two-period" },
  "l2-borrowing-constraint.png": { type: "consumption-choice", figure: "borrowing" },
  "l2-lifecycle-profile.png": { type: "consumption-choice", figure: "lifecycle" },
  "l4-production-diminishing.png": { type: "production-capital", figure: "production" },
  "l5-mpk-usercost.png": { type: "production-capital", figure: "user-cost" },
  "l6-si-shocks.png": { type: "macro-shocks", figure: "si-shocks" },
  "l7-budget-leisure.png": { type: "consumption-choice", figure: "leisure" },
  "l7-labor-equilibrium.png": { type: "labor-market", scenario: "equilibrium" },
  "l7-labor-shocks.png": { type: "labor-market", scenario: "lecture-shocks" },
  "l10-labor-goods-equilibrium.png": { type: "macro-shocks", figure: "fiscal" },
  // ---- macro: PS 5 (exact model numbers) ----
  "q1-3-productivity-shift.png": { type: "labor-market", scenario: "productivity" },
  "q1-4-capital-shift.png": { type: "labor-market", scenario: "capital" },
  "q2-foreign-aid.png": { type: "labor-market", scenario: "aid" },
  "q3-permanent-tfp.png": { type: "labor-market", scenario: "permanent-tfp" },
  "q5-task-assignment.png": { type: "production-capital", figure: "tasks" },
};

export default swaps;
