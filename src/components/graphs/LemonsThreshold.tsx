import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, SketchGraph, SketchAxes, InkLine, InkDashed, Hatch, Note, Dot, Ring, fmt, clamp, INK, ACCENT, MARKER, WASH } from "./sketch";

// Akerlof's lemons with two qualities (Topic 1): good cars are worth 3,000 to
// buyers, lemons 2,000, and good sellers won't sell below 2,800. If a share p of
// cars is good, a buyer who can't tell them apart pays E[value] = 3000p + 2000(1 − p).
// Good cars stay only if that clears 2,800, i.e. p ≥ 0.8.

const GOOD_VALUE = 3000, LEMON_VALUE = 2000, GOOD_RESERVATION = 2800;

const NOTES = [
  "A buyer can't tell good cars from lemons, so they pay the expected value.",
  "Good sellers won't sell below 2,800.",
  "Good cars stay only where the expected value clears 2,800: p ≥ 0.8.",
  "Below 0.8 good sellers leave, the average falls, and only lemons are left.",
  "Your turn. Drag the share of good cars p.",
];

export default function LemonsThreshold(): VNode {
  const [share, setShare] = useState(0.6);
  const threshold = (GOOD_RESERVATION - LEMON_VALUE) / (GOOD_VALUE - LEMON_VALUE);
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMax: 1, yMin: 2000, yMax: 3050 }], maxWidth: 640, padding: { left: 52, bottom: 44, top: 22 } });
  const { show, drawNow, step } = sketch;
  const frame = sketch.frames[0];
  const toX = frame.x, toY = frame.y;
  const expectedValue = (goodShare: number) => GOOD_VALUE * goodShare + LEMON_VALUE * (1 - goodShare);
  const shareShown = step === 4 ? share : threshold;
  const goodCarsStay = expectedValue(shareShown) >= GOOD_RESERVATION - 1e-9;

  const TEX = [
    "E[\\text{value}] = 3000p + 2000(1 - p)",
    "\\text{good sellers need} \\ge 2800",
    "3000p + 2000(1-p) \\ge 2800 \\;\\Rightarrow\\; p \\ge 0.8",
    "p < 0.8 \\;\\Rightarrow\\; \\text{only lemons trade, at } 2000",
    `p = ${fmt(share, 2)}:\\; E[\\text{value}] = ${fmt(expectedValue(share), 0)} ${goodCarsStay ? "\\ge" : "<"} 2800`,
  ];

  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={[0, 0.2, 0.4, 0.6, 0.8, 1]} yTicks={[2000, 2200, 2400, 2600, 2800, 3000]} xLabel="share of good cars p" yLabel="$" />];
  const plot: VNode[] = [];
  if (show(2)) {
    plot.push(<Hatch points={[[toX(threshold), frame.top], [frame.right, frame.top], [frame.right, frame.bottom], [toX(threshold), frame.bottom]]} id={`${sketch.uid}-good`} wash={WASH.green} ink={MARKER.green} gap={12} draw={drawNow(2)} />);
  }
  if (show(3)) plot.push(<Hatch points={[[frame.left, frame.top], [toX(threshold), frame.top], [toX(threshold), frame.bottom], [frame.left, frame.bottom]]} id={`${sketch.uid}-bad`} wash={WASH.red} ink={MARKER.red} gap={12} angle={-1} draw={drawNow(3)} />);
  plot.push(<InkLine x1={toX(0)} y1={toY(LEMON_VALUE)} x2={toX(1)} y2={toY(GOOD_VALUE)} id="expected" color={MARKER.blue} width={2.5} duration={800} draw={drawNow(0)} />);
  if (show(1)) plot.push(<InkDashed x1={frame.left} y1={toY(GOOD_RESERVATION)} x2={frame.right} y2={toY(GOOD_RESERVATION)} id="reservation" color={MARKER.red} width={1.9} draw={drawNow(1)} />);
  if (show(2)) plot.push(<InkDashed x1={toX(threshold)} y1={toY(GOOD_RESERVATION)} x2={toX(threshold)} y2={frame.bottom} id="threshold" color={INK} width={1.3} dash={4} gap={4} draw={drawNow(2)} />);
  drawing.push(<g clip-path={sketch.clip()}>{plot}</g>);
  drawing.push(<Note x={toX(0.3)} y={toY(expectedValue(0.3)) - 12} text="E[value to buyer]" color={MARKER.blue} size={18} draw={drawNow(0)} />);
  if (show(1)) drawing.push(<Note x={frame.left + 8} y={toY(GOOD_RESERVATION) - 8} text="good seller's reservation 2,800" color={MARKER.red} size={17} draw={drawNow(1)} />);
  if (show(2)) {
    drawing.push(<Ring x={toX(threshold)} y={toY(GOOD_RESERVATION)} id="ring-threshold" color={ACCENT} draw={drawNow(2)} />);
    drawing.push(<Note x={toX(0.9)} y={toY(2150)} text="good cars can stay" color={MARKER.green} anchor="middle" size={18} delay={300} draw={drawNow(2)} />);
  }
  if (show(3)) drawing.push(<Note x={toX(0.4)} y={toY(2150)} text="only lemons survive" color={MARKER.red} anchor="middle" size={18} draw={drawNow(3)} />);
  if (step === 4) {
    drawing.push(<Dot x={toX(share)} y={toY(expectedValue(share))} color={goodCarsStay ? MARKER.green : MARKER.red} />);
    drawing.push(sketch.handle({ key: "share", x: share, y: 2000, axis: "x", hint: "above", onDrag: (dataX) => setShare(clamp(Math.round(dataX * 100) / 100, 0, 1)) }));
  }

  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} ariaLabel="Lemons model: good cars stay only if at least 80 percent of cars are good.">
      {drawing}
    </SketchGraph>
  );
}
