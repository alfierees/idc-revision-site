import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, useGlide, SketchGraph, SketchAxes, InkCurve, InkLine, InkDashed, Hatch, Note, Dot, Ring, Presets, curvePoints, fmt, clamp, ACCENT, INK, MARKER, WASH } from "./sketch";

// Lesson 1 optimisation problem: a 10,800 m² yard against a building. The side
// parallel to the building costs $3/m, the two others $2/m. Substituting the
// area constraint leaves cost as a function of x alone: C(x) = 3x + 43200/x.

const AREA = 10800;
const depthFor = (width: number) => AREA / width;
const costFor = (width: number) => 3 * width + 43200 / width;
const BEST_WIDTH = 120;

const NOTES = [
  "A rectangular yard of 10,800 m² against a building. The front (x) costs $3 per metre, the two sides (y) cost $2.",
  "The area constraint xy = 10,800 turns the cost into a function of x alone.",
  "A wide, shallow yard: lots of expensive front fence.",
  "A narrow, deep yard: lots of side fence. The cost is the same $900.",
  "In between is the minimum, where C′(x) = 0: x = 120, y = 90, cost $720.",
  "Your turn. Drag the width and watch the yard and the cost move together.",
];

export default function MathsBFenceOptimum(): VNode {
  const [exploreWidth, setExploreWidth] = useState(BEST_WIDTH);
  const sketch = useSketch({
    stepCount: NOTES.length,
    domains: [{ xMax: 280, yMax: 290 }, { xMin: 30, xMax: 290, yMin: 600, yMax: 1200 }],
    aspect: 0.86, minHeight: 250, maxHeight: 320, maxWidth: 760, padding: { left: 44, bottom: 36, top: 14 },
    panelTitles: ["The yard", "Total fence cost C(x)"],
  });
  const { show, drawNow, step, dragging } = sketch;
  const [yardFrame, costFrame] = sketch.frames;
  const targetWidth = step === 2 ? 240 : step === 3 ? 60 : step === 5 ? exploreWidth : BEST_WIDTH;
  const { width } = useGlide({ width: targetWidth }, dragging !== null);
  const depth = depthFor(width), cost = costFor(width);

  const TEX = [
    "xy = 10{,}800,\\quad C = 3x + 2(2y) = 3x + 4y",
    "C(x) = 3x + 4\\cdot\\frac{10{,}800}{x} = 3x + \\frac{43{,}200}{x}",
    "x = 240,\\ y = 45:\\quad C = 720 + 180 = 900",
    "x = 60,\\ y = 180:\\quad C = 180 + 720 = 900",
    "C'(x) = 3 - \\frac{43{,}200}{x^2} = 0 \\Rightarrow x = 120,\\ y = 90,\\ C = 720",
    `x = ${fmt(width, 0)},\\ y = ${fmt(depth, 1)}:\\quad C = ${fmt(cost, 0)}`,
  ];

  const yardLeft = yardFrame.x(10), yardRight = yardFrame.x(10 + width);
  const yardTop = yardFrame.y(250), yardBottom = yardFrame.y(250 - depth);
  const yardParts: VNode[] = [
    <rect x={yardFrame.x(0)} y={yardFrame.y(285)} width={yardFrame.x(280) - yardFrame.x(0)} height={yardFrame.y(250) - yardFrame.y(285)} rx={3} style={`fill:${WASH.grey};stroke:${MARKER.grey};stroke-width:1.4`} />,
    <text x={(yardFrame.x(0) + yardFrame.x(280)) / 2} y={(yardFrame.y(285) + yardFrame.y(250)) / 2 + 5} text-anchor="middle" class="sk-tick">building</text>,
    <Hatch points={[[yardLeft, yardTop], [yardRight, yardTop], [yardRight, yardBottom], [yardLeft, yardBottom]]} id="yard" wash={WASH.green} ink={MARKER.green} gap={11} />,
    <InkLine x1={yardLeft} y1={yardBottom} x2={yardRight} y2={yardBottom} id="front" color={MARKER.red} width={3} />,
    <InkLine x1={yardLeft} y1={yardTop} x2={yardLeft} y2={yardBottom} id="left" color={MARKER.blue} width={2.6} />,
    <InkLine x1={yardRight} y1={yardTop} x2={yardRight} y2={yardBottom} id="right" color={MARKER.blue} width={2.6} />,
    <Note x={(yardLeft + yardRight) / 2} y={Math.min(yardBottom + 19, yardFrame.bottom + 6)} text={`x = ${fmt(width, 0)} ($3)`} color={MARKER.red} anchor="middle" size={16} />,
    <Note x={yardRight + 5} y={(yardTop + yardBottom) / 2} text={`y = ${fmt(depth, 0)}`} color={MARKER.blue} anchor={width > 190 ? "end" : "start"} size={16} />,
  ];

  const costParts: VNode[] = [<SketchAxes frame={costFrame} id="cost-axes" xTicks={[60, 120, 180, 240]} yTicks={[720, 900, 1100]} xLabel="x" hideZero={false} />];
  if (show(1)) {
    costParts.push(<g clip-path={sketch.clip(1)}><InkCurve points={curvePoints(costFrame, costFor, 36, 290, 70)} id="cost" color={MARKER.blue} width={2.4} draw={drawNow(1)} /></g>);
    costParts.push(<InkDashed x1={costFrame.x(width)} y1={costFrame.bottom} x2={costFrame.x(width)} y2={costFrame.y(cost)} id={`drop-${fmt(width, 0)}`} color={INK} width={1.2} />);
    costParts.push(<Dot x={costFrame.x(width)} y={costFrame.y(cost)} color={ACCENT} radius={5} />);
    costParts.push(<Note x={costFrame.x(width)} y={costFrame.y(cost) - 12} text={`$${fmt(cost, 0)}`} color={ACCENT} anchor="middle" size={18} />);
  }
  if (step === 4) costParts.push(<Ring x={costFrame.x(BEST_WIDTH)} y={costFrame.y(720)} id="best" color={MARKER.green} radius={13} draw={drawNow(4)} />);
  if (step === 5) costParts.push(sketch.handle({ key: "width", panel: 1, x: exploreWidth, y: costFor(exploreWidth), axis: "x", hint: "right", onDrag: (dataX) => setExploreWidth(Math.round(clamp(dataX, 45, 262))) }));

  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]}
      ariaLabel={`Yard of width ${fmt(width, 0)} and depth ${fmt(depth, 0)} metres costs ${fmt(cost, 0)} dollars. The minimum cost is 720 dollars at width 120.`}
      explore={<Presets presets={[
        { label: "Wide (240)", apply: () => setExploreWidth(240) },
        { label: "Best (120)", apply: () => setExploreWidth(120) },
        { label: "Narrow (60)", apply: () => setExploreWidth(60) },
      ]} />}>
      <g>{yardParts}</g>
      <g>{costParts}</g>
    </SketchGraph>
  );
}
