import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, SketchGraph, SketchAxes, InkCurve, InkDashed, Hatch, Note, Dot, Ring, curvePoints, fmt, clamp, INK, ACCENT, MARKER, WASH } from "./sketch";

// Micro sample exam 3, Q5: two Cournot firms with marginal cost k merge into a
// monopoly with MC = 0, facing p = 100 − Q (so CS = ½Q²).
//   Before:  CS_C = 2(100 − k)²/9       After:  CS_M = 1,250
// Consumers gain from the merger exactly when k > 25: the cost saving beats
// the lost competition.

const NOTES = [
  "Before the merger: two Cournot firms with cost k. The higher k, the less they produce, the lower consumer surplus.",
  "After: one monopoly with zero cost. Consumer surplus is 1,250 whatever k was.",
  "The curves cross at k = 25. Above it, the merger raises consumer surplus.",
  "Your turn. Drag the pre-merger cost k.",
];

export default function MergerSurplus(): VNode {
  const [cost, setCost] = useState(40);
  const cournotSurplus = (k: number) => (2 * (100 - k) * (100 - k)) / 9;
  const mergedSurplus = 1250;
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMax: 60, yMax: 2400 }], maxWidth: 640, padding: { left: 54, bottom: 44, top: 22 } });
  const { show, drawNow, step } = sketch;
  const frame = sketch.frames[0];
  const toX = frame.x, toY = frame.y;
  const TEX = [
    "CS_C = \\tfrac{2(100-k)^2}{9}",
    "CS_M = \\tfrac12(50)^2 = 1{,}250",
    "1250 > \\tfrac{2(100-k)^2}{9} \\;\\Rightarrow\\; (100-k)^2 < 5625 \\;\\Rightarrow\\; k > 25",
    `k = ${fmt(cost)}:\\; CS_C = ${fmt(cournotSurplus(cost), 0)} ${cournotSurplus(cost) < mergedSurplus ? "<" : "\\ge"} CS_M = 1{,}250`,
  ];

  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={[0, 10, 20, 25, 30, 40, 50, 60]} yTicks={[500, 1000, 1500, 2000]} formatTick={(value) => value.toLocaleString("en-GB")} xLabel="pre-merger marginal cost k" yLabel="consumer surplus" />];
  const plot: VNode[] = [];
  if (show(2)) {
    const shadedPoints = curvePoints(frame, cournotSurplus, 25, 60, 30);
    plot.push(<Hatch points={[[toX(25), toY(mergedSurplus)], [toX(60), toY(mergedSurplus)], ...shadedPoints.slice().reverse()]} id={`${sketch.uid}-gain`} wash={WASH.green} ink={MARKER.green} gap={9} draw={drawNow(2)} />);
  }
  plot.push(<InkCurve points={curvePoints(frame, cournotSurplus, 0, 60, 60)} id="cournot" color={MARKER.blue} width={2.4} draw={drawNow(0)} />);
  if (show(1)) plot.push(<InkDashed x1={frame.left} y1={toY(mergedSurplus)} x2={frame.right} y2={toY(mergedSurplus)} id="merged" color={MARKER.red} width={2.2} draw={drawNow(1)} />);
  if (show(2)) plot.push(<InkDashed x1={toX(25)} y1={toY(mergedSurplus)} x2={toX(25)} y2={frame.bottom} id="k25" color={INK} width={1.2} dash={4} gap={4} draw={drawNow(2)} />);
  drawing.push(<g clip-path={sketch.clip()}>{plot}</g>);
  drawing.push(<Note x={toX(6)} y={toY(cournotSurplus(6)) + 24} text="Cournot, cost k" color={MARKER.blue} size={18} draw={drawNow(0)} />);
  if (show(1)) drawing.push(<Note x={frame.right - 4} y={toY(mergedSurplus) - 8} text="merged, MC = 0" color={MARKER.red} anchor="end" size={18} draw={drawNow(1)} />);
  if (show(2)) {
    drawing.push(<Ring x={toX(25)} y={toY(mergedSurplus)} id="ring-cross" color={ACCENT} draw={drawNow(2)} />);
    drawing.push(<Note x={toX(46)} y={toY(900)} text="merger helps consumers" color={MARKER.green} anchor="middle" size={18} delay={300} draw={drawNow(2)} />);
  }
  if (step === 3) {
    drawing.push(<Dot x={toX(cost)} y={toY(cournotSurplus(cost))} color={MARKER.blue} />);
    drawing.push(sketch.handle({ key: "k", x: cost, y: 0, axis: "x", hint: "above", onDrag: (dataX) => setCost(clamp(Math.round(dataX), 0, 60)) }));
  }

  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} ariaLabel="Consumer surplus before and after a merger: the merger raises consumer surplus when k exceeds 25.">
      {drawing}
    </SketchGraph>
  );
}
