import { useMemo, useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, SketchGraph, SketchAxes, InkLine, InkCurve, Note, Dot, Scatter, Presets, Arrow, curvePoints, fmt, INK, ACCENT, MARKER } from "./sketch";
import { normalSampler } from "./stats";

// Gradient descent on a one-parameter least-squares problem (ML Lecture 2):
// fit y ≈ θ·x to simulated data. Cost J(θ) = (1/2m)·Σ(θxᵢ − yᵢ)², gradient
// (1/m)·Σ(θxᵢ − yᵢ)xᵢ. Each step: θ ← θ − α·gradient. The learning rate α
// decides whether it crawls, converges, zig-zags or blows up.

const POINTS = (() => {
  const draw = normalSampler(2718);
  return Array.from({ length: 24 }, (_, index) => {
    const x = 0.2 + (2.8 * index) / 23;
    return { x, y: 1.4 * x + draw() * 0.45 };
  });
})();
const COUNT = POINTS.length;
const SUM_XX = POINTS.reduce((total, point) => total + point.x * point.x, 0);
const SUM_XY = POINTS.reduce((total, point) => total + point.x * point.y, 0);
const BEST = SUM_XY / SUM_XX;
const cost = (theta: number) => POINTS.reduce((total, point) => total + (theta * point.x - point.y) ** 2, 0) / (2 * COUNT);
const gradient = (theta: number) => POINTS.reduce((total, point) => total + (theta * point.x - point.y) * point.x, 0) / COUNT;
const CRITICAL = 2 / (SUM_XX / COUNT); // α above this diverges
const START = -0.6;

function descend(rate: number, steps: number) {
  const path = [START];
  for (let index = 0; index < steps; index++) path.push(path[path.length - 1] - rate * gradient(path[path.length - 1]));
  return path;
}

const NOTES = [
  "Fit a line through the origin, y = θx, to these points (simulated).",
  "The cost J(θ): average squared error for every possible slope. We want its lowest point.",
  "Gradient descent: measure the slope of the cost where you stand, step downhill, repeat.",
  "A good learning rate walks smoothly to the minimum.",
  "Too big a learning rate overshoots, zig-zags, and can blow up entirely.",
  "Your turn. Pick a learning rate.",
];

export default function GradientDescent(): VNode {
  const [exploreRate, setExploreRate] = useState(0.2);
  const sketch = useSketch({
    stepCount: NOTES.length,
    domains: [{ xMax: 3.2, yMin: -1, yMax: 5.5 }, { xMin: -1, xMax: 3.6, yMax: cost(-1) * 1.05 }],
    aspect: 0.82, minHeight: 250, maxHeight: 320, maxWidth: 760, padding: { left: 40, bottom: 40, top: 16 },
    panelTitles: ["Data and the current line", "Cost J(θ)"],
  });
  const { show, drawNow, step } = sketch;
  const [dataFrame, costFrame] = sketch.frames;
  const rate = step === 3 ? 0.2 : step === 4 ? CRITICAL * 0.93 : step === 5 ? exploreRate : 0.2;
  const iterations = step === 2 ? 1 : 12;
  const path = useMemo(() => descend(rate, iterations), [rate, iterations]);
  const theta = show(2) ? path[path.length - 1] : START;
  const diverged = !Number.isFinite(theta) || Math.abs(theta) > 50;

  const TEX = [
    "\\hat y = \\theta x",
    `J(\\theta) = \\frac{1}{2m}\\sum_i (\\theta x_i - y_i)^2,\\quad \\theta^* = ${fmt(BEST, 3)}`,
    `\\theta \\leftarrow \\theta - \\alpha\\,\\frac{\\partial J}{\\partial \\theta} = ${fmt(START, 2)} - ${fmt(rate, 2)} \\times (${fmt(gradient(START), 2)}) = ${fmt(path[1], 3)}`,
    `\\alpha = ${fmt(rate, 2)}:\\; \\theta_{12} = ${fmt(theta, 3)} \\approx \\theta^*`,
    `\\alpha = ${fmt(rate, 2)} \\;(\\text{diverges above } ${fmt(CRITICAL, 2)}):\\; \\theta_{12} = ${diverged ? "\\text{blown up}" : fmt(theta, 3)}`,
    `\\alpha = ${fmt(rate, 2)}:\\; \\theta_{12} = ${diverged ? "\\text{blown up}" : fmt(theta, 3)}`,
  ];

  const dataParts: VNode[] = [<SketchAxes frame={dataFrame} id="data-axes" xTicks={[0, 1, 2, 3]} yTicks={[0, 2, 4]} xLabel="x" yLabel="y" hideZero={false} />];
  dataParts.push(<Scatter points={POINTS.map((point) => [dataFrame.x(point.x), dataFrame.y(point.y)])} color={MARKER.grey} radius={3} opacity={0.7} draw={drawNow(0)} />);
  if (!diverged) dataParts.push(<g clip-path={sketch.clip(0)}><InkLine x1={dataFrame.x(0)} y1={dataFrame.y(0)} x2={dataFrame.x(3.2)} y2={dataFrame.y(theta * 3.2)} id={`line-${fmt(theta, 3)}`} color={ACCENT} width={2.4} /></g>);
  dataParts.push(<Note x={dataFrame.right - 4} y={dataFrame.top + 10} text={diverged ? "θ blew up!" : `θ = ${fmt(theta, 2)}`} color={diverged ? MARKER.red : ACCENT} anchor="end" size={19} />);

  const costParts: VNode[] = [<SketchAxes frame={costFrame} id="cost-axes" xTicks={[-1, 0, 1, 2, 3]} yTicks={[]} xLabel="θ" hideZero={false} />];
  if (show(1)) {
    costParts.push(<InkCurve points={curvePoints(costFrame, cost, -1, 3.6, 70)} id="cost" color={MARKER.blue} width={2.4} draw={drawNow(1)} />);
    costParts.push(<Dot x={costFrame.x(BEST)} y={costFrame.y(cost(BEST))} color={MARKER.green} radius={4} />);
    costParts.push(<Note x={costFrame.x(BEST)} y={costFrame.y(cost(BEST)) + 22} text="minimum" color={MARKER.green} anchor="middle" size={17} />);
  }
  if (show(2)) {
    const visible = path.filter((value) => Number.isFinite(value) && value >= -1 && value <= 3.6);
    visible.slice(0, -1).forEach((value, index) => {
      const next = visible[index + 1];
      costParts.push(<Arrow x1={costFrame.x(value)} y1={costFrame.y(cost(value))} x2={costFrame.x(next)} y2={costFrame.y(cost(next))} id={`step-${rate}-${index}`} color={ACCENT} bend={-8} delay={index * 180} draw={drawNow(step)} />);
    });
    visible.forEach((value, index) => costParts.push(<Dot x={costFrame.x(value)} y={costFrame.y(cost(value))} color={index === 0 ? INK : ACCENT} radius={index === 0 ? 5 : 3.5} />));
    costParts.push(<Note x={costFrame.x(START) + 8} y={costFrame.y(cost(START)) + 4} text="start" color={INK} size={17} />);
  }
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} footnote="Simulated data; 12 steps shown."
      ariaLabel={`Gradient descent with learning rate ${fmt(rate, 2)}: after 12 steps theta is ${diverged ? "divergent" : fmt(theta, 3)}, optimum ${fmt(BEST, 3)}.`}
      explore={<Presets presets={[
        { label: "Too small (α = 0.02)", apply: () => setExploreRate(0.02) },
        { label: "Good (α = 0.2)", apply: () => setExploreRate(0.2) },
        { label: "Zig-zag", apply: () => setExploreRate(Math.round(CRITICAL * 0.85 * 100) / 100) },
        { label: "Blows up", apply: () => setExploreRate(Math.round(CRITICAL * 1.08 * 100) / 100) },
      ]} />}>
      <g>{dataParts}</g>
      <g>{costParts}</g>
    </SketchGraph>
  );
}
