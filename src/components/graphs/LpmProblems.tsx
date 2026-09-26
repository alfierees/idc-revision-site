import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, seededRandom, SketchGraph, SketchAxes, InkLine, InkCurve, InkDashed, Hatch, Note, Dot, Scatter, curvePoints, fmt, clamp, INK_SOFT, ACCENT, MARKER, WASH } from "./sketch";
import { normalSampler, logistic, fitLine } from "./stats";

// The linear probability model's two drawbacks (Lecture 2).
//   type: lpm-problems
//   mode: unbounded | variance
// unbounded — OLS on a 0/1 outcome draws a straight line that escapes [0, 1]
//             (simulated ultimatum-game offers and accept decisions).
// variance  — Var(u | x) = p(x)(1 − p(x)) depends on x: largest at p = 0.5,
//             so homoskedasticity always fails.

interface Props { mode?: string; }

export default function LpmProblems({ mode = "unbounded" }: Props): VNode {
  return mode === "variance" ? <VarianceFrown /> : <Unbounded />;
}

function Unbounded(): VNode {
  // simulated: offers as a share of the pie, acceptance more likely for bigger offers
  const uniform = seededRandom(2024);
  const offers: number[] = [], accepts: number[] = [];
  for (let index = 0; index < 160; index++) {
    const offer = clamp(0.1 + 0.9 * ((index * 0.6180339887) % 1), 0, 1);
    const acceptChance = logistic(-3 + 9 * offer);
    offers.push(offer);
    accepts.push(uniform() < acceptChance ? 1 : 0);
  }
  const fit = fitLine(offers, accepts);
  const [offer, setOffer] = useState(1.1);
  const NOTES = [
    "Each dot is one responder: accept (1) or reject (0). Simulated offers and decisions.",
    "OLS draws a straight line through the 0s and 1s: the linear probability model.",
    "But a straight line doesn't stop at 0 or 1: extend it and it predicts impossible probabilities.",
    "Your turn. Drag the offer and read off the LPM's prediction.",
  ];
  const TEX = [
    "y_i \\in \\{0, 1\\}",
    `\\hat p = ${fmt(fit.intercept, 3)} + ${fmt(fit.slope, 3)}\\,\\text{offer}`,
    `\\hat p(1.2) = ${fmt(fit.intercept + fit.slope * 1.2, 2)} > 1,\\qquad \\hat p < 0 \\text{ once offer} < ${fmt(-fit.intercept / fit.slope, 2)}`,
    `\\hat p(${fmt(offer, 2)}) = ${fmt(fit.intercept + fit.slope * offer, 3)}`,
  ];
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMin: -0.15, xMax: 1.25, yMin: -0.3, yMax: 1.35 }], maxWidth: 640, padding: { left: 44, bottom: 44, top: 22 } });
  const { show, drawNow, step } = sketch;
  const frame = sketch.frames[0];
  const toX = frame.x, toY = frame.y;
  const jitter = normalSampler(7);
  const points: [number, number][] = offers.map((value, index) => [toX(value), toY(accepts[index] + jitter() * 0.018)]);
  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={[0, 0.2, 0.4, 0.6, 0.8, 1]} yTicks={[0, 0.5, 1]} xLabel="offer (share of the pie)" yLabel="accept" hideZero={false} />];
  const plot: VNode[] = [];
  if (show(2)) {
    plot.push(<Hatch points={[[frame.left, frame.top], [frame.right, frame.top], [frame.right, toY(1)], [frame.left, toY(1)]]} id={`${sketch.uid}-above`} wash={WASH.red} ink={MARKER.red} gap={12} draw={drawNow(2)} />);
    plot.push(<Hatch points={[[frame.left, toY(0)], [frame.right, toY(0)], [frame.right, frame.bottom], [frame.left, frame.bottom]]} id={`${sketch.uid}-below`} wash={WASH.red} ink={MARKER.red} gap={12} angle={-1} draw={drawNow(2)} />);
  }
  plot.push(<InkDashed x1={frame.left} y1={toY(1)} x2={frame.right} y2={toY(1)} id="one" color={INK_SOFT} width={1.1} dash={4} gap={4} />);
  plot.push(<Scatter points={points} color={MARKER.grey} radius={2.6} opacity={0.6} draw={drawNow(0)} />);
  if (show(1)) plot.push(<InkLine x1={toX(-0.15)} y1={toY(fit.intercept - fit.slope * 0.15)} x2={toX(1.25)} y2={toY(fit.intercept + fit.slope * 1.25)} id="lpm" color={MARKER.red} width={2.6} draw={drawNow(1)} />);
  drawing.push(<g clip-path={sketch.clip()}>{plot}</g>);
  if (show(1)) drawing.push(<Note x={toX(0.55)} y={toY(fit.intercept + fit.slope * 0.55) + 24} text="LPM (OLS line)" color={MARKER.red} size={18} draw={drawNow(1)} />);
  if (show(2)) {
    drawing.push(<Note x={toX(0.5)} y={frame.top + 16} text="P > 1: impossible" color={MARKER.red} anchor="middle" size={18} draw={drawNow(2)} />);
    drawing.push(<Note x={toX(0.5)} y={frame.bottom - 6} text="P < 0: impossible" color={MARKER.red} anchor="middle" size={18} draw={drawNow(2)} />);
  }
  if (step === 3) {
    drawing.push(<Dot x={toX(offer)} y={toY(fit.intercept + fit.slope * offer)} color={ACCENT} />);
    drawing.push(sketch.handle({ key: "offer", x: offer, y: fit.intercept + fit.slope * offer, axis: "x", hint: "left", onDrag: (dataX) => setOffer(clamp(Math.round(dataX * 100) / 100, -0.15, 1.25)) }));
  }
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} footnote="Simulated data. In Andersen et al. the largest fitted value was 1.1943: a 119% probability."
      ariaLabel="Linear probability model: the OLS line through 0/1 outcomes predicts probabilities above 1 and below 0.">
      {drawing}
    </SketchGraph>
  );
}

function VarianceFrown(): VNode {
  const [probability, setProbability] = useState(0.3);
  const variance = (p: number) => p * (1 - p);
  const TABLE = [0.1, 0.3, 0.5, 0.7, 0.9];
  const NOTES = [
    "In the LPM the error can only take two values, so its variance is p(1 − p).",
    "It depends on x through p(x): biggest at p = 0.5, shrinking toward 0 and 1.",
    "So the error variance changes with x: heteroskedasticity, always. Use robust standard errors.",
    "Your turn. Drag p.",
  ];
  const TEX = [
    "\\operatorname{Var}(u \\mid x) = p(x)\\,\\big(1 - p(x)\\big)",
    TABLE.map((p) => `${fmt(p)}\\!\\to\\!${fmt(variance(p), 2)}`).join(",\\;"),
    "\\max \\operatorname{Var} = 0.5 \\times 0.5 = 0.25",
    `p = ${fmt(probability, 2)}:\\; \\operatorname{Var} = ${fmt(variance(probability), 3)}`,
  ];
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMax: 1, yMax: 0.3 }], maxWidth: 620, padding: { left: 48, bottom: 44, top: 22 } });
  const { show, drawNow, step } = sketch;
  const frame = sketch.frames[0];
  const toX = frame.x, toY = frame.y;
  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={[0, 0.2, 0.4, 0.6, 0.8, 1]} yTicks={[0.05, 0.1, 0.15, 0.2, 0.25]} xLabel="fitted probability p(x)" yLabel="Var(u | x)" />];
  drawing.push(<InkCurve points={curvePoints(frame, variance, 0, 1, 60)} id="frown" color={MARKER.blue} width={2.5} draw={drawNow(0)} />);
  if (show(1)) TABLE.forEach((p, index) => drawing.push(<Dot x={toX(p)} y={toY(variance(p))} color={MARKER.blue} radius={4} delay={index * 150} draw={drawNow(1)} />));
  if (show(2)) {
    drawing.push(<InkDashed x1={toX(0.5)} y1={toY(0.25)} x2={toX(0.5)} y2={frame.bottom} id="max" color={MARKER.green} width={1.4} dash={4} gap={4} draw={drawNow(2)} />);
    drawing.push(<Dot x={toX(0.5)} y={toY(0.25)} color={MARKER.red} draw={drawNow(2)} />);
    drawing.push(<Note x={toX(0.5) + 12} y={toY(0.25) - 6} text="max 0.25 at p = 0.5" color={MARKER.red} size={18} draw={drawNow(2)} />);
  }
  if (step === 3) {
    drawing.push(<Dot x={toX(probability)} y={toY(variance(probability))} color={ACCENT} />);
    drawing.push(sketch.handle({ key: "p", x: probability, y: 0, axis: "x", hint: "above", onDrag: (dataX) => setProbability(clamp(Math.round(dataX * 100) / 100, 0, 1)) }));
  }
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} ariaLabel="The LPM error variance p(1 − p) peaks at 0.25 when p = 0.5.">
      {drawing}
    </SketchGraph>
  );
}
