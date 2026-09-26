import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, SketchGraph, SketchAxes, InkLine, InkDashed, Hatch, Note, Dot, fmt, clamp, INK, ACCENT, MARKER, WASH } from "./sketch";

// Signalling (Topic 1): a signal (education, a warranty) is credible only if
// it is cheaper for the high-quality type. Cost of a signal of size e: low
// type 1·e (steep), high type 0.4·e (flat). Looking high-quality is worth 4.
// Any signal between the two crossings (4 ≤ e ≤ 10) separates the types.

const BENEFIT = 4, LOW_COST = 1, HIGH_COST = 0.4, SIGNAL_MAX = 10;

const NOTES = [
  "Signalling costs the low-quality type a lot: the steep line.",
  "The same signal costs the high-quality type less: the flat line.",
  "Looking high-quality is worth 4 to either type.",
  "Separating region: the high type pays for the signal, the low type won't.",
  "Your turn. Drag the required signal level.",
];

export default function Signaling(): VNode {
  const [signal, setSignal] = useState(6);
  const lowCutoff = BENEFIT / LOW_COST, highCutoff = BENEFIT / HIGH_COST;
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMax: SIGNAL_MAX, yMax: 10 }], maxWidth: 640, padding: { left: 40, bottom: 44, top: 22 } });
  const { show, drawNow, step } = sketch;
  const frame = sketch.frames[0];
  const toX = frame.x, toY = frame.y;
  const shownSignal = step === 4 ? signal : (lowCutoff + Math.min(highCutoff, SIGNAL_MAX)) / 2;
  const highSignals = HIGH_COST * shownSignal <= BENEFIT, lowSignals = LOW_COST * shownSignal <= BENEFIT;
  const outcome = highSignals && !lowSignals ? "separating: only the high type signals" : highSignals && lowSignals ? "pooling: both types signal, so it tells buyers nothing" : "nobody signals";

  const TEX = [
    `C_L(e) = ${fmt(LOW_COST)}\\,e`,
    `C_H(e) = ${fmt(HIGH_COST)}\\,e`,
    `\\text{benefit} = ${BENEFIT}`,
    `C_L(e) > ${BENEFIT} \\ge C_H(e) \\;\\Rightarrow\\; ${fmt(lowCutoff)} < e \\le ${fmt(highCutoff)}`,
    `e = ${fmt(shownSignal)}:\\; C_L = ${fmt(LOW_COST * shownSignal)},\\; C_H = ${fmt(HIGH_COST * shownSignal)}`,
  ];

  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={[0, 2, 4, 6, 8, 10]} yTicks={[2, 4, 6, 8, 10]} xLabel="size of the signal e (years of education, warranty length)" yLabel="cost / benefit" />];
  const plot: VNode[] = [];
  if (show(3)) plot.push(<Hatch points={[[toX(lowCutoff), frame.top], [toX(Math.min(highCutoff, SIGNAL_MAX)), frame.top], [toX(Math.min(highCutoff, SIGNAL_MAX)), frame.bottom], [toX(lowCutoff), frame.bottom]]} id={`${sketch.uid}-separating`} wash={WASH.green} ink={MARKER.green} gap={12} draw={drawNow(3)} />);
  plot.push(<InkLine x1={toX(0)} y1={toY(0)} x2={toX(SIGNAL_MAX)} y2={toY(LOW_COST * SIGNAL_MAX)} id="low" color={MARKER.red} width={2.4} draw={drawNow(0)} />);
  if (show(1)) plot.push(<InkLine x1={toX(0)} y1={toY(0)} x2={toX(SIGNAL_MAX)} y2={toY(HIGH_COST * SIGNAL_MAX)} id="high" color={MARKER.blue} width={2.4} draw={drawNow(1)} />);
  if (show(2)) plot.push(<InkDashed x1={frame.left} y1={toY(BENEFIT)} x2={frame.right} y2={toY(BENEFIT)} id="benefit" color={MARKER.green} width={2} draw={drawNow(2)} />);
  if (step === 4) plot.push(<InkDashed x1={toX(signal)} y1={frame.bottom} x2={toX(signal)} y2={frame.top} id="signal" color={ACCENT} width={1.6} dash={5} gap={4} />);
  drawing.push(<g clip-path={sketch.clip()}>{plot}</g>);
  drawing.push(<Note x={toX(7.2)} y={toY(7.2) - 10} text="low type's cost" color={MARKER.red} anchor="end" size={18} draw={drawNow(0)} />);
  if (show(1)) drawing.push(<Note x={toX(9.8)} y={toY(3.92) + 22} text="high type's cost" color={MARKER.blue} anchor="end" size={18} draw={drawNow(1)} />);
  if (show(2)) {
    drawing.push(<Note x={frame.left + 8} y={toY(BENEFIT) - 8} text="benefit of looking high-quality" color={MARKER.green} size={17} draw={drawNow(2)} />);
    drawing.push(<Dot x={toX(lowCutoff)} y={toY(BENEFIT)} color={INK} radius={4} draw={drawNow(2)} />);
  }
  if (show(3) && step !== 4) drawing.push(<Note x={toX((lowCutoff + Math.min(highCutoff, SIGNAL_MAX)) / 2)} y={toY(8.6)} text="separating region" color={MARKER.green} anchor="middle" size={19} draw={drawNow(3)} />);
  if (step === 4) drawing.push(sketch.handle({ key: "signal", x: signal, y: 0, axis: "x", hint: "above", onDrag: (dataX) => setSignal(clamp(Math.round(dataX * 4) / 4, 0.25, SIGNAL_MAX)) }));

  return (
    <SketchGraph sketch={sketch} note={step === 4 ? `${NOTES[4]} At e = ${fmt(signal)}: ${outcome}.` : NOTES[step]} tex={TEX[step]}
      ariaLabel="Signalling: the signal separates types when it costs the low type more than the benefit but the high type less."
      footnote="Illustrative costs: the low type's signal costs 1 per unit, the high type's 0.4.">
      {drawing}
    </SketchGraph>
  );
}
