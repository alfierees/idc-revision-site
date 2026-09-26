import { useMemo, useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, SketchGraph, SketchAxes, InkLine, Note, Presets, fmt, INK_SOFT, MARKER } from "./sketch";
import { normalSampler } from "./stats";

// K-means (ML Lecture 5), simulated: 3 groups of 20 points. Start from k
// random centroids, then alternate: assign every point to its nearest centroid,
// move each centroid to the mean of its points. Stop when nothing changes.

const COLORS = [MARKER.blue, MARKER.red, MARKER.green, MARKER.amber];
const CENTRES = [{ x: 2.6, y: 3 }, { x: 7.2, y: 3.4 }, { x: 5, y: 7.4 }];

function makePoints(seed: number) {
  const draw = normalSampler(seed);
  return CENTRES.flatMap((centre) => Array.from({ length: 20 }, () => ({ x: centre.x + draw() * 0.95, y: centre.y + draw() * 0.95 })));
}

function runKMeans(points: { x: number; y: number }[], seed: number, clusters: number) {
  const draw = normalSampler(seed * 7 + 1);
  let centroids = Array.from({ length: clusters }, () => ({ x: 5 + draw() * 2.2, y: 5 + draw() * 2.2 }));
  const history: { centroids: { x: number; y: number }[]; assignment: number[] }[] = [];
  for (let iteration = 0; iteration < 12; iteration++) {
    const assignment = points.map((point) => centroids.reduce((best, centroid, index) => (Math.hypot(point.x - centroid.x, point.y - centroid.y) < Math.hypot(point.x - centroids[best].x, point.y - centroids[best].y) ? index : best), 0));
    history.push({ centroids, assignment });
    const next = centroids.map((centroid, index) => {
      const members = points.filter((_, pointIndex) => assignment[pointIndex] === index);
      return members.length ? { x: members.reduce((sum, point) => sum + point.x, 0) / members.length, y: members.reduce((sum, point) => sum + point.y, 0) / members.length } : centroid;
    });
    const moved = next.some((centroid, index) => Math.hypot(centroid.x - centroids[index].x, centroid.y - centroids[index].y) > 1e-6);
    centroids = next;
    if (!moved) break;
  }
  const last = history[history.length - 1];
  const inertia = points.reduce((total, point, index) => total + (point.x - last.centroids[last.assignment[index]].x) ** 2 + (point.y - last.centroids[last.assignment[index]].y) ** 2, 0);
  return { history, inertia };
}

const NOTES = [
  "60 unlabelled points (simulated). We ask for k = 3 groups.",
  "Drop 3 centroids at random.",
  "Assign every point to its nearest centroid.",
  "Move each centroid to the average of its points.",
  "Repeat assign, move, assign, move… until nothing changes. The groups settle.",
  "Your turn. Try another random start, or another k.",
];

export default function KMeans(): VNode {
  const [explore, setExplore] = useState({ seed: 3, clusters: 3 });
  const points = useMemo(() => makePoints(77), []);
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMax: 10, yMax: 10 }], aspect: 0.8, maxWidth: 580, padding: { left: 36, bottom: 40, top: 20 } });
  const { show, step } = sketch;
  const seed = step === 5 ? explore.seed : 3, clusters = step === 5 ? explore.clusters : 3;
  const { history, inertia } = useMemo(() => runKMeans(points, seed, clusters), [points, seed, clusters]);
  const frame = sketch.frames[0];
  const toX = frame.x, toY = frame.y;
  const snapshot = step <= 2 ? history[0] : step === 3 ? { centroids: history[Math.min(1, history.length - 1)].centroids, assignment: history[0].assignment } : history[history.length - 1];
  const coloured = show(2);
  const TEX = [
    "k = 3",
    "\\mu_1, \\mu_2, \\mu_3 \\text{ at random}",
    "c_i = \\arg\\min_j \\lVert x_i - \\mu_j \\rVert",
    "\\mu_j = \\text{mean of the points in cluster } j",
    `\\text{converged after } ${history.length} \\text{ rounds},\\; \\text{within-cluster SS} = ${fmt(inertia, 1)}`,
    `k = ${clusters}:\\; ${history.length} \\text{ rounds},\\; \\text{within-cluster SS} = ${fmt(inertia, 1)}`,
  ];
  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={[0, 5, 10]} yTicks={[5, 10]} xLabel="x₁" yLabel="x₂" />];
  points.forEach((point, index) => {
    const color = coloured ? COLORS[snapshot.assignment[index]] : INK_SOFT;
    drawing.push(<circle cx={toX(point.x)} cy={toY(point.y)} r={4} style={`fill:${color};opacity:0.75;transition:fill .4s ease`} />);
  });
  if (show(1)) snapshot.centroids.forEach((centroid, index) => {
    const size = 9;
    if (step === 3) {
      const from = history[0].centroids[index];
      drawing.push(<InkLine x1={toX(from.x)} y1={toY(from.y)} x2={toX(centroid.x)} y2={toY(centroid.y)} id={`move-${index}`} color={COLORS[index]} width={1.4} />);
    }
    drawing.push(
      <g style={`transform:translate(${toX(centroid.x)}px,${toY(centroid.y)}px);transition:transform .6s ease`}>
        <path d={`M${-size},${-size} L${size},${size} M${size},${-size} L${-size},${size}`} style={`stroke:var(--color-card);stroke-width:6;stroke-linecap:round`} />
        <path d={`M${-size},${-size} L${size},${size} M${size},${-size} L${-size},${size}`} style={`stroke:${COLORS[index]};stroke-width:3.2;stroke-linecap:round`} />
      </g>,
    );
  });
  if (show(1) && step < 5) drawing.push(<Note x={frame.right - 4} y={frame.top + 10} text="✕ = centroid" color={INK_SOFT} anchor="end" size={17} />);
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} footnote="Simulated data: three groups of 20."
      ariaLabel={`K-means with k = ${clusters}: converged after ${history.length} rounds.`}
      explore={<Presets presets={[
        { label: "New random start", apply: () => setExplore((state) => ({ ...state, seed: state.seed + 1 })) },
        { label: "k = 2", apply: () => setExplore((state) => ({ ...state, clusters: 2 })) },
        { label: "k = 3", apply: () => setExplore((state) => ({ ...state, clusters: 3 })) },
        { label: "k = 4", apply: () => setExplore((state) => ({ ...state, clusters: 4 })) },
      ]} />}>
      {drawing}
    </SketchGraph>
  );
}
