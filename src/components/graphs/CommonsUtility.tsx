import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, SketchGraph, SketchAxes, InkCurve, InkDashed, Note, Dot, curvePoints, fmt, clamp, INK, MARKER } from "./sketch";

// Ex 8 Q5: two countries fish a common pool; each country's catch harms the
// other with externality strength B. Utilities as functions of B:
//   Cournot (both):       U = (1 − B) / [4(1 + B)]
//   Stackelberg leader: U₁ = (1 − 2B + 2B³) / [4(1 − B²)²]
//   Stackelberg follower: U₂ = (1 − 2B − B⁴) / [4(1 − B²)²]
// Numerical check from the solution at B = 1/2: Cournot 1/12, leader 1/9,
// follower ≈ −0.028. First-mover advantage grows with B.

const B_MAX = 0.95;

const NOTES = [
  "Cournot: both countries fish at once. Utility falls as the externality B grows.",
  "Stackelberg leader: moving first pays more and more as B grows.",
  "Stackelberg follower: pushed down, even below zero.",
  "Your turn. Drag B and compare.",
];

export default function CommonsUtility(): VNode {
  const [externality, setExternality] = useState(0.5);
  const cournot = (strength: number) => (1 - strength) / (4 * (1 + strength));
  const leader = (strength: number) => (1 - 2 * strength + 2 * strength ** 3) / (4 * (1 - strength * strength) ** 2);
  const follower = (strength: number) => (1 - 2 * strength - strength ** 4) / (4 * (1 - strength * strength) ** 2);
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMax: 1, yMin: -0.15, yMax: 0.3 }], maxWidth: 640, padding: { left: 50, bottom: 40, top: 22 } });
  const { show, drawNow, step } = sketch;
  const frame = sketch.frames[0];
  const toX = frame.x, toY = frame.y;
  const TEX = [
    `U^C = \\frac{1 - B}{4(1 + B)} = ${fmt(cournot(externality), 3)} \\text{ at } B = ${fmt(externality, 2)}`,
    `U_1^S = \\frac{1 - 2B + 2B^3}{4(1-B^2)^2} = ${fmt(leader(externality), 3)}`,
    `U_2^S = \\frac{1 - 2B - B^4}{4(1-B^2)^2} = ${fmt(follower(externality), 3)}`,
    `B = ${fmt(externality, 2)}:\\; U^C = ${fmt(cournot(externality), 3)},\\; U_1^S = ${fmt(leader(externality), 3)},\\; U_2^S = ${fmt(follower(externality), 3)}`,
  ];
  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={[0, 0.2, 0.4, 0.6, 0.8, 1]} yTicks={[-0.1, 0, 0.1, 0.2, 0.3]} xLabel="externality strength B" yLabel="U" hideZero={false} />];
  const plot: VNode[] = [<InkCurve points={curvePoints(frame, cournot, 0, B_MAX, 50)} id="cournot" color={INK} width={2.3} draw={drawNow(0)} />];
  if (show(1)) plot.push(<InkCurve points={curvePoints(frame, leader, 0, B_MAX, 50)} id="leader" color={MARKER.red} width={2.3} draw={drawNow(1)} />);
  if (show(2)) plot.push(<InkCurve points={curvePoints(frame, follower, 0, B_MAX, 50)} id="follower" color={MARKER.amber} width={2.3} draw={drawNow(2)} />);
  if (step === 3) plot.push(<InkDashed x1={toX(externality)} y1={frame.top} x2={toX(externality)} y2={frame.bottom} id="b" color={MARKER.grey} width={1.2} dash={4} gap={4} />);
  drawing.push(<g clip-path={sketch.clip()}>{plot}</g>);
  drawing.push(<Note x={toX(0.75)} y={toY(cournot(0.75)) - 10} text="Cournot" color={INK} size={18} draw={drawNow(0)} />);
  if (show(1)) drawing.push(<Note x={toX(0.62)} y={toY(leader(0.62)) - 12} text="leader" color={MARKER.red} size={18} draw={drawNow(1)} />);
  if (show(2)) drawing.push(<Note x={toX(0.48)} y={toY(follower(0.48)) + 24} text="follower" color={MARKER.amber} size={18} draw={drawNow(2)} />);
  if (step === 3) {
    [cournot, leader, follower].forEach((fn, index) => drawing.push(<Dot x={toX(externality)} y={toY(fn(externality))} color={[INK, MARKER.red, MARKER.amber][index]} radius={4} />));
    drawing.push(sketch.handle({ key: "b", x: externality, y: -0.15, axis: "x", hint: "above", onDrag: (dataX) => setExternality(clamp(Math.round(dataX * 100) / 100, 0, 0.9)) }));
  }
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} ariaLabel="Utility against externality strength: Cournot, Stackelberg leader and follower.">
      {drawing}
    </SketchGraph>
  );
}
