import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, SketchGraph, SketchAxes, InkLine, InkCurve, InkDashed, Note, Dot, Ring, curvePoints, fmt, clamp, INK, ACCENT, MARKER } from "./sketch";

// Micro sample exam 2, open question 1 (C–D): one two-part tariff for both
// consumers (p = 200 − q₁ and p = A − q₂, MC = 20), with the fee pinned by
// consumer 2: T = ½(A − p)².
//   Optimal per-unit price:  p*(A) = 120 − A/2      (check: A = 150 gives 45)
//   Profit serving both:     π(A) = 2.25(A − 80)² + (100 − A/2)(2A − 40)
//   Serving consumer 1 only: 16,200 (first-degree tariff, p = 20, T = ½·180²)
// Serving both wins once A > 144.2.

const A_MIN = 80, A_MAX = 200, ONLY_FIRST = 16200;
const priceFor = (choke: number) => 120 - choke / 2;
const profitServingBoth = (choke: number) => 2.25 * (choke - 80) ** 2 + (100 - choke / 2) * (2 * choke - 40);
const CROSSING = (140 + Math.sqrt(140 * 140 + 4 * 1.25 * 5800)) / 2.5; // root of 1.25A² − 140A − 5800 = 0

const NOTES = [
  "The best per-unit price falls as consumer 2's choke price A rises: p* = 120 − A/2.",
  "Profit from one tariff that serves both consumers grows with A.",
  "The alternative: serve only consumer 1 with a first-degree tariff, 16,200.",
  "Serving both beats serving one once A > 144.2.",
  "Your turn. Drag A.",
];

export default function TariffPriceVsA(): VNode {
  const [choke, setChoke] = useState(150);
  const sketch = useSketch({
    stepCount: NOTES.length,
    domains: [{ xMin: A_MIN, xMax: A_MAX, yMax: 80 }, { xMin: A_MIN, xMax: A_MAX, yMin: 5000, yMax: 35000 }],
    aspect: 0.82, minHeight: 240, maxHeight: 320, maxWidth: 760,
    padding: { left: 52, bottom: 40, top: 16 },
    panelTitles: ["Optimal per-unit price p*(A)", "Monopoly profit"],
  });
  const { show, drawNow, step } = sketch;
  const [left, right] = sketch.frames;
  const focus = step === 4 ? choke : 150;
  const TEX = [
    `p^*(A) = 120 - \\tfrac{A}{2}\\quad (A = 150 \\Rightarrow p^* = 45)`,
    "\\pi(A) = 2.25(A-80)^2 + (100 - \\tfrac{A}{2})(2A - 40)",
    "\\pi_{\\text{consumer 1 only}} = \\tfrac12(180)^2 = 16{,}200",
    `\\pi(A) = 16{,}200 \\;\\Rightarrow\\; A^* \\approx ${fmt(CROSSING, 1)}`,
    `A = ${fmt(choke)}:\\; p^* = ${fmt(priceFor(choke))},\\; \\pi = ${fmt(profitServingBoth(choke), 0)} \\text{ vs } 16{,}200`,
  ];
  const leftParts: VNode[] = [
    <SketchAxes frame={left} id="left-axes" xTicks={[80, 110, 140, 170, 200]} yTicks={[20, 40, 60, 80]} xLabel="A" yLabel="p*" />,
    <InkLine x1={left.x(A_MIN)} y1={left.y(priceFor(A_MIN))} x2={left.x(A_MAX)} y2={left.y(priceFor(A_MAX))} id="price" color={MARKER.purple} width={2.4} draw={drawNow(0)} />,
    <InkDashed x1={left.left} y1={left.y(20)} x2={left.right} y2={left.y(20)} id="mc" color={MARKER.grey} width={1.3} />,
    <Note x={left.right - 4} y={left.y(20) + 18} text="MC = 20" color={MARKER.grey} anchor="end" size={16} />,
    <Dot x={left.x(focus)} y={left.y(priceFor(focus))} color={INK} radius={4} />,
    <Note x={left.x(focus) + 10} y={left.y(priceFor(focus)) - 10} text={`p* = ${fmt(priceFor(focus))}`} color={INK} size={17} />,
  ];
  const rightParts: VNode[] = [<SketchAxes frame={right} id="right-axes" xTicks={[80, 110, 140, 170, 200]} yTicks={[10000, 20000, 30000]} formatTick={(value) => `${value / 1000}k`} xLabel="A" />];
  const rightPlot: VNode[] = [];
  if (show(1)) rightPlot.push(<InkCurve points={curvePoints(right, profitServingBoth, A_MIN, A_MAX, 60)} id="both" color={MARKER.green} width={2.4} draw={drawNow(1)} />);
  if (show(2)) rightPlot.push(<InkDashed x1={right.left} y1={right.y(ONLY_FIRST)} x2={right.right} y2={right.y(ONLY_FIRST)} id="only-first" color={MARKER.red} width={2} draw={drawNow(2)} />);
  if (show(3)) rightPlot.push(<InkDashed x1={right.x(CROSSING)} y1={right.y(ONLY_FIRST)} x2={right.x(CROSSING)} y2={right.bottom} id="cross" color={INK} width={1.2} dash={4} gap={4} draw={drawNow(3)} />);
  rightParts.push(<g clip-path={sketch.clip(1)}>{rightPlot}</g>);
  if (show(1)) rightParts.push(<Note x={right.x(190)} y={right.y(profitServingBoth(190)) + 22} text="serve both" color={MARKER.green} anchor="end" size={17} draw={drawNow(1)} />);
  if (show(2)) rightParts.push(<Note x={right.left + 6} y={right.y(ONLY_FIRST) - 8} text="consumer 1 only: 16,200" color={MARKER.red} size={16} draw={drawNow(2)} />);
  if (show(3)) {
    rightParts.push(<Ring x={right.x(CROSSING)} y={right.y(ONLY_FIRST)} id="ring" color={ACCENT} draw={drawNow(3)} />);
    rightParts.push(<Note x={right.x(CROSSING) + 12} y={right.y(ONLY_FIRST) + 24} text={`A* ≈ ${fmt(CROSSING, 1)}`} color={ACCENT} size={17} draw={drawNow(3)} />);
  }
  if (step === 4) {
    rightParts.push(<Dot x={right.x(choke)} y={right.y(profitServingBoth(choke))} color={MARKER.green} />);
    leftParts.push(sketch.handle({ key: "A", x: choke, y: priceFor(choke), axis: "x", hint: "above", onDrag: (dataX) => setChoke(clamp(Math.round(dataX), A_MIN, A_MAX)) }));
  }
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} ariaLabel="Optimal per-unit price falls with A; serving both consumers beats serving one when A exceeds 144.2.">
      <g>{leftParts}</g>
      <g>{rightParts}</g>
    </SketchGraph>
  );
}
