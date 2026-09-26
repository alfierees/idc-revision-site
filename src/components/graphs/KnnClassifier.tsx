import { useMemo, useState } from "preact/hooks";
import type { VNode } from "preact";
import { Slider } from "./plot";
import { useSketch, SketchGraph, SketchAxes, InkLine, Note, Dot, Ring, Presets, fmt, clamp, INK, ACCENT, MARKER } from "./sketch";
import { normalSampler } from "./stats";

// K-nearest neighbours (ML Lectures 3 and 5), simulated two-class data. A new
// point takes the majority label of its k closest training points (Euclidean
// distance). Small k: a jagged, noisy boundary; large k: a smooth one.

const draw = normalSampler(4040);
const TRAINING = [
  ...Array.from({ length: 22 }, () => ({ x: 3.2 + draw() * 1.1, y: 3.4 + draw() * 1.1, label: 0 })),
  ...Array.from({ length: 22 }, () => ({ x: 6.3 + draw() * 1.1, y: 6.2 + draw() * 1.1, label: 1 })),
  { x: 5.6, y: 4.1, label: 1 }, { x: 4.6, y: 6.4, label: 0 }, // a little overlap
];
const COLORS = [MARKER.blue, MARKER.red];
const NAMES = ["blue class", "red class"];

function classify(x: number, y: number, k: number) {
  const neighbours = TRAINING.map((point) => ({ ...point, distance: Math.hypot(point.x - x, point.y - y) })).sort((a, b) => a.distance - b.distance).slice(0, k);
  const redVotes = neighbours.filter((point) => point.label === 1).length;
  return { neighbours, redVotes, label: redVotes * 2 > k ? 1 : 0 };
}

const NOTES = [
  "Labelled training points: two classes (simulated).",
  "A new, unlabelled point. Which class is it?",
  "k = 1: copy the label of the single nearest neighbour.",
  "k = 7: let the 7 nearest vote. The majority wins.",
  "Do that for every spot on the map: the decision regions. Larger k gives smoother boundaries.",
  "Your turn. Drag the new point and change k.",
];

export default function KnnClassifier(): VNode {
  const [query, setQuery] = useState({ x: 5.2, y: 5.1 });
  const [exploreK, setExploreK] = useState(7);
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMax: 10, yMax: 10 }], aspect: 0.8, maxWidth: 580, padding: { left: 36, bottom: 40, top: 20 } });
  const { show, drawNow, step } = sketch;
  const frame = sketch.frames[0];
  const toX = frame.x, toY = frame.y;
  const k = step <= 2 ? 1 : step === 5 ? exploreK : 7;
  const result = classify(query.x, query.y, k);
  const regions = useMemo(() => {
    const cells: VNode[] = [];
    const size = 0.25;
    for (let x = 0; x < 10; x += size) for (let y = 0; y < 10; y += size) {
      const label = classify(x + size / 2, y + size / 2, k).label;
      cells.push(<rect x={toX(x)} y={toY(y + size)} width={toX(x + size) - toX(x) + 0.5} height={toY(y) - toY(y + size) + 0.5} style={`fill:${label ? "rgba(226,75,74,0.09)" : "rgba(55,138,221,0.09)"}`} />);
    }
    return cells;
  }, [k, sketch.width, sketch.height]);
  const radius = result.neighbours[result.neighbours.length - 1].distance;
  const TEX = [
    `${TRAINING.length} \\text{ labelled points}`,
    `\\text{new point } (${fmt(query.x, 1)},\\ ${fmt(query.y, 1)})`,
    `k = 1:\\; \\text{nearest is ${NAMES[result.neighbours[0].label]}}`,
    `k = 7:\\; ${result.redVotes} \\text{ red},\\ ${7 - result.redVotes} \\text{ blue} \\;\\Rightarrow\\; \\text{${NAMES[result.label]}}`,
    `d(p, q) = \\sqrt{(p_1 - q_1)^2 + (p_2 - q_2)^2}`,
    `k = ${k}:\\; ${result.redVotes} \\text{ red},\\ ${k - result.redVotes} \\text{ blue} \\;\\Rightarrow\\; \\text{${NAMES[result.label]}}`,
  ];
  const drawing: VNode[] = [];
  if (show(4)) drawing.push(<g class={drawNow(4) ? "sk-fade" : undefined}>{regions}</g>);
  drawing.push(<SketchAxes frame={frame} id="axes" xTicks={[0, 5, 10]} yTicks={[5, 10]} xLabel="x₁" yLabel="x₂" />);
  TRAINING.forEach((point) => drawing.push(<circle cx={toX(point.x)} cy={toY(point.y)} r={4} style={`fill:${COLORS[point.label]};opacity:0.8`} />));
  if (show(1)) {
    if (show(2)) {
      drawing.push(<g clip-path={sketch.clip()}><circle cx={toX(query.x)} cy={toY(query.y)} r={Math.abs(toX(radius) - toX(0))} style={`fill:none;stroke:${ACCENT};stroke-width:1.5;stroke-dasharray:5 4`} /></g>);
      result.neighbours.forEach((neighbour, index) => drawing.push(<InkLine x1={toX(query.x)} y1={toY(query.y)} x2={toX(neighbour.x)} y2={toY(neighbour.y)} id={`nn-${index}-${k}`} color={COLORS[neighbour.label]} width={1.2} delay={index * 60} duration={250} draw={drawNow(step)} />));
    }
    drawing.push(<Dot x={toX(query.x)} y={toY(query.y)} color={show(2) ? COLORS[result.label] : INK} radius={7} />);
    drawing.push(<Ring x={toX(query.x)} y={toY(query.y)} radius={12} id="query-ring" color={INK} />);
    if (step >= 1 && step < 5) drawing.push(<Note x={toX(query.x) + 16} y={toY(query.y) - 12} text={show(2) ? `→ ${NAMES[result.label]}` : "new point: ?"} color={show(2) ? COLORS[result.label] : INK} size={19} />);
  }
  if (step === 5) drawing.push(sketch.handle({ key: "query", x: query.x, y: query.y, axis: "xy", hint: "none", onDrag: (dataX, dataY) => setQuery({ x: clamp(dataX, 0.3, 9.7), y: clamp(dataY, 0.3, 9.7) }) }));
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} footnote="Simulated data."
      ariaLabel={`KNN with k = ${k}: the new point is classified as the ${NAMES[result.label]}.`}
      explore={<>
        <div class="graph-sliders"><Slider label="k" value={exploreK} min={1} max={25} step={2} onInput={setExploreK} /></div>
        <Presets presets={[{ label: "k = 1 (jagged)", apply: () => setExploreK(1) }, { label: "k = 25 (smooth)", apply: () => setExploreK(25) }]} />
      </>}>
      {drawing}
    </SketchGraph>
  );
}
