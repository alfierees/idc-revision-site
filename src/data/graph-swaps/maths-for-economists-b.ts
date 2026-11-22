// Graph swaps for the "maths-for-economists-b" subject: wherever
// /images/maths-for-economists-b/<file> appears, draw this graph instead. The
// other Maths B graphs sit in the lecture files as ```graph blocks, because
// they have no static figure to replace.

import type { GraphConfig } from "../../lib/graph-swaps";

const swaps: Record<string, GraphConfig> = {
  "lec01-cubic-intervals.png": { type: "mathsb-global-extrema" },
  "lec01-fence-cost.png": { type: "mathsb-fence-optimum" },
  "lec02-log-exp-inverse.png": { type: "mathsb-log-inverse" },
  "lec04-circle-tangents.png": { type: "mathsb-implicit-circle" },
  "lec05-contour-lines.png": { type: "mathsb-contour-map", mode: "bowl" },
};

export default swaps;
