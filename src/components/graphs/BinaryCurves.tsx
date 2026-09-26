import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, SketchGraph, SketchAxes, InkLine, InkCurve, InkDashed, Hatch, Note, Dot, curvePoints, fmt, clamp, INK, INK_SOFT, ACCENT, MARKER, WASH } from "./sketch";
import { logistic, normalCdf, normalPdf } from "./stats";

// Logit and probit curves (Lecture 3 and practice exam 1).
//   type: binary-curves
//   mode: s-curve | diminishing | probit-slopes
// s-curve       — LPM line vs logit Λ(z) vs probit Φ(z): the S stays inside [0, 1].
// diminishing   — Lecture 3's logit, P(employed) = Λ(−2 + 0.2·schooling):
//                 the same +5 years adds +0.231, +0.231, +0.150, +0.072.
// probit-slopes — a probit coefficient is not a marginal effect: the slope is
//                 β·φ(x′β), 0.40β at the middle and ≈ 0.05β at x′β = ±2.

interface Props { mode?: string; }

export default function BinaryCurves({ mode = "s-curve" }: Props): VNode {
  if (mode === "diminishing") return <Diminishing />;
  if (mode === "probit-slopes") return <ProbitSlopes />;
  return <SCurve />;
}

function SCurve(): VNode {
  const [index, setIndex] = useState(1);
  const lpmSlope = 0.13;
  const NOTES = [
    "The LPM: a straight line in the linear prediction x′β. It escapes [0, 1].",
    "Logit squashes the line through the logistic CDF Λ: an S that stays inside [0, 1].",
    "Probit uses the normal CDF Φ: a slightly steeper S. In practice logit and probit agree closely.",
    "Both are steepest at x′β = 0, where the probability is 0.5, and flatten at the extremes.",
    "Your turn. Drag x′β.",
  ];
  const TEX = [
    `P = 0.5 + ${lpmSlope}\\,x'\\beta`,
    "P = \\Lambda(x'\\beta) = \\frac{e^{x'\\beta}}{1 + e^{x'\\beta}}",
    "P = \\Phi(x'\\beta) = \\int_{-\\infty}^{x'\\beta} \\varphi(v)\\,dv",
    "\\Lambda(0) = \\Phi(0) = 0.5,\\quad \\text{steepest slope at } x'\\beta = 0",
    `x'\\beta = ${fmt(index, 2)}:\\; \\Lambda = ${fmt(logistic(index), 3)},\\; \\Phi = ${fmt(normalCdf(index), 3)},\\; \\text{LPM} = ${fmt(0.5 + lpmSlope * index, 3)}`,
  ];
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMin: -5, xMax: 5, yMin: -0.25, yMax: 1.25 }], maxWidth: 640, padding: { left: 44, bottom: 44, top: 22 } });
  const { show, drawNow, step } = sketch;
  const frame = sketch.frames[0];
  const toX = frame.x, toY = frame.y;
  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={[-4, -2, 0, 2, 4]} yTicks={[0, 0.5, 1]} xLabel="linear prediction x′β" yLabel="P(y = 1)" hideZero={false} />];
  const plot: VNode[] = [
    <Hatch points={[[frame.left, frame.top], [frame.right, frame.top], [frame.right, toY(1)], [frame.left, toY(1)]]} id={`${sketch.uid}-above`} wash={WASH.red} ink={MARKER.red} gap={14} />,
    <Hatch points={[[frame.left, toY(0)], [frame.right, toY(0)], [frame.right, frame.bottom], [frame.left, frame.bottom]]} id={`${sketch.uid}-below`} wash={WASH.red} ink={MARKER.red} gap={14} angle={-1} />,
    <InkLine x1={toX(-5)} y1={toY(0.5 - lpmSlope * 5)} x2={toX(5)} y2={toY(0.5 + lpmSlope * 5)} id="lpm" color={MARKER.red} width={2.2} draw={drawNow(0)} />,
  ];
  if (show(1)) plot.push(<InkCurve points={curvePoints(frame, logistic, -5, 5, 70)} id="logit" color={MARKER.blue} width={2.6} draw={drawNow(1)} />);
  if (show(2)) plot.push(<InkCurve points={curvePoints(frame, normalCdf, -5, 5, 70)} id="probit" color={MARKER.purple} width={2.2} dashed draw={drawNow(2)} />);
  drawing.push(<g clip-path={sketch.clip()}>{plot}</g>);
  drawing.push(<Note x={toX(3.1)} y={toY(0.5 + lpmSlope * 3.1) - 8} text="LPM" color={MARKER.red} anchor="end" size={18} draw={drawNow(0)} />);
  if (show(1)) drawing.push(<Note x={toX(-2.8)} y={toY(logistic(-2.8)) - 10} text="logit Λ" color={MARKER.blue} size={18} draw={drawNow(1)} />);
  if (show(2)) drawing.push(<Note x={toX(1.6)} y={toY(normalCdf(1.6)) - 12} text="probit Φ" color={MARKER.purple} anchor="end" size={18} draw={drawNow(2)} />);
  if (show(3) && step !== 4) {
    drawing.push(<Dot x={toX(0)} y={toY(0.5)} color={INK} draw={drawNow(3)} />);
    drawing.push(<Note x={toX(0) + 12} y={toY(0.5) + 20} text="steepest at x′β = 0" color={INK} size={17} draw={drawNow(3)} />);
  }
  if (step === 4) {
    [[logistic(index), MARKER.blue], [normalCdf(index), MARKER.purple], [0.5 + lpmSlope * index, MARKER.red]].forEach(([value, color]) => drawing.push(<Dot x={toX(index)} y={toY(value as number)} color={color as string} radius={4} />));
    drawing.push(<InkDashed x1={toX(index)} y1={frame.top} x2={toX(index)} y2={frame.bottom} id="index-guide" color={INK_SOFT} width={1.1} dash={4} gap={4} />);
    drawing.push(sketch.handle({ key: "index", x: index, y: -0.25, axis: "x", hint: "above", onDrag: (dataX) => setIndex(clamp(Math.round(dataX * 10) / 10, -5, 5)) }));
  }
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} ariaLabel="LPM line versus logit and probit S-curves: only the S-curves stay between 0 and 1.">
      {drawing}
    </SketchGraph>
  );
}

function Diminishing(): VNode {
  const [schooling, setSchooling] = useState(12);
  const probability = (years: number) => logistic(-2 + 0.2 * years);
  const STOPS = [5, 10, 15, 20, 25];
  const NOTES = [
    "A logit for employment: P = Λ(−2 + 0.2 × years of education).",
    ...STOPS.slice(1).map((years) => `From ${years - 5} to ${years} years: +${fmt(probability(years) - probability(years - 5), 3)}.`),
    "The same five years add less and less once the probability is already high. An LPM would say +0.231 every time.",
    "Your turn. Drag years of education: the marginal effect is 0.2 × P(1 − P).",
  ];
  const TEX = [
    "P = \\Lambda(-2 + 0.2\\,\\text{educ})",
    ...STOPS.slice(1).map((years) => `\\Lambda(${fmt(-2 + 0.2 * years)}) - \\Lambda(${fmt(-2 + 0.2 * (years - 5))}) = ${fmt(probability(years), 3)} - ${fmt(probability(years - 5), 3)} = ${fmt(probability(years) - probability(years - 5), 3)}`),
    "0.231,\\; 0.231,\\; 0.150,\\; 0.072",
    `\\text{educ} = ${fmt(schooling)}:\\; \\frac{\\partial P}{\\partial\\,\\text{educ}} = 0.2 \\times ${fmt(probability(schooling), 3)} \\times ${fmt(1 - probability(schooling), 3)} = ${fmt(0.2 * probability(schooling) * (1 - probability(schooling)), 3)}`,
  ];
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMax: 30, yMax: 1 }], maxWidth: 640, padding: { left: 44, bottom: 44, top: 22 } });
  const { show, drawNow, step } = sketch;
  const frame = sketch.frames[0];
  const toX = frame.x, toY = frame.y;
  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={[0, 5, 10, 15, 20, 25, 30]} yTicks={[0.2, 0.4, 0.6, 0.8, 1]} xLabel="years of education" yLabel="P(employed)" />];
  drawing.push(<InkCurve points={curvePoints(frame, probability, 0, 30, 70)} id="logit" color={MARKER.blue} width={2.6} draw={drawNow(0)} />);
  drawing.push(<Dot x={toX(5)} y={toY(probability(5))} color={MARKER.blue} radius={4} draw={drawNow(0)} />);
  STOPS.slice(1).forEach((years, index) => {
    const stepIndex = index + 1;
    if (!show(stepIndex) || step === NOTES.length - 1) return;
    const low = probability(years - 5), high = probability(years);
    drawing.push(<InkDashed x1={toX(years - 5)} y1={toY(low)} x2={toX(years)} y2={toY(low)} id={`run-${years}`} color={INK_SOFT} width={1.1} dash={3} gap={3} draw={drawNow(stepIndex)} />);
    drawing.push(<InkLine x1={toX(years)} y1={toY(low)} x2={toX(years)} y2={toY(high)} id={`rise-${years}`} color={MARKER.green} width={2.4} delay={250} draw={drawNow(stepIndex)} />);
    drawing.push(<Dot x={toX(years)} y={toY(high)} color={MARKER.blue} radius={4} draw={drawNow(stepIndex)} />);
    drawing.push(<Note x={toX(years) + 6} y={(toY(low) + toY(high)) / 2 + 6} text={`+${fmt(high - low, 3)}`} color={MARKER.green} size={17} delay={400} draw={drawNow(stepIndex)} />);
  });
  if (step === NOTES.length - 1) {
    const slope = 0.2 * probability(schooling) * (1 - probability(schooling));
    const run = 3;
    drawing.push(<InkLine x1={toX(schooling - run)} y1={toY(probability(schooling) - slope * run)} x2={toX(schooling + run)} y2={toY(probability(schooling) + slope * run)} id={`tangent-${schooling}`} color={ACCENT} width={1.8} />);
    drawing.push(<Dot x={toX(schooling)} y={toY(probability(schooling))} color={ACCENT} />);
    drawing.push(sketch.handle({ key: "educ", x: schooling, y: 0, axis: "x", hint: "above", onDrag: (dataX) => setSchooling(clamp(Math.round(dataX), 0, 30)) }));
  }
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} ariaLabel="Logit employment probability: the same five extra years raise the probability by less at high education.">
      {drawing}
    </SketchGraph>
  );
}

function ProbitSlopes(): VNode {
  const [index, setIndex] = useState(1);
  const lpmSlope = 0.14;
  const TANGENTS = [-2, 0, 2];
  const NOTES = [
    "A probit: P = Φ(x′β). The coefficient β shifts the index x′β.",
    "An LPM has one constant slope: its coefficient is the marginal effect everywhere.",
    "The probit's slope is β·φ(x′β). It changes along the curve: 0.40β in the middle, about 0.05β at ±2.",
    "Your turn. Drag x′β and read the marginal effect.",
  ];
  const TEX = [
    "P(\\text{chose B}) = \\Phi(\\beta_0 + \\beta_1\\,\\text{diff.E} + \\beta_2\\,\\text{emotion} + \\beta_3\\,\\text{energy})",
    "\\text{LPM: } \\frac{\\partial P}{\\partial x_j} = \\beta_j \\text{ everywhere}",
    `\\frac{\\partial P}{\\partial x_j} = \\beta_j\\,\\varphi(x'\\beta):\\; \\varphi(0) = ${fmt(normalPdf(0), 2)},\\; \\varphi(\\pm 2) = ${fmt(normalPdf(2), 2)}`,
    `x'\\beta = ${fmt(index, 1)}:\\; \\frac{\\partial P}{\\partial x_j} = ${fmt(normalPdf(index), 3)}\\,\\beta_j`,
  ];
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMin: -4, xMax: 4, yMin: -0.1, yMax: 1.1 }], maxWidth: 640, padding: { left: 44, bottom: 44, top: 22 } });
  const { show, drawNow, step } = sketch;
  const frame = sketch.frames[0];
  const toX = frame.x, toY = frame.y;
  const tangent = (at: number, id: string, color: string, draw: boolean, delay = 0) => {
    const slope = normalPdf(at), run = 0.9;
    return <InkLine x1={toX(at - run)} y1={toY(normalCdf(at) - slope * run)} x2={toX(at + run)} y2={toY(normalCdf(at) + slope * run)} id={id} color={color} width={2} delay={delay} draw={draw} />;
  };
  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={[-4, -2, 0, 2, 4]} yTicks={[0, 0.5, 1]} xLabel="linear index x′β" yLabel="P(chose B)" hideZero={false} />];
  const plot: VNode[] = [<InkCurve points={curvePoints(frame, normalCdf, -4, 4, 70)} id="probit" color={MARKER.green} width={2.6} draw={drawNow(0)} />];
  if (show(1)) plot.push(<InkLine x1={toX(-4)} y1={toY(0.5 - lpmSlope * 4)} x2={toX(4)} y2={toY(0.5 + lpmSlope * 4)} id="lpm" color={MARKER.grey} width={1.8} draw={drawNow(1)} />);
  if (show(2) && step !== 3) TANGENTS.forEach((at, position) => plot.push(tangent(at, `tangent-${at}`, at === 0 ? MARKER.blue : MARKER.red, drawNow(2), position * 300)));
  if (step === 3) plot.push(tangent(index, `tangent-live-${index}`, ACCENT, false));
  drawing.push(<g clip-path={sketch.clip()}>{plot}</g>);
  drawing.push(<Note x={toX(2.4)} y={toY(normalCdf(2.4)) + 22} text="probit Φ(x′β)" color={MARKER.green} size={18} draw={drawNow(0)} />);
  if (show(1)) drawing.push(<Note x={toX(-3.8)} y={toY(0.5 - lpmSlope * 3.8) - 10} text="LPM: constant slope" color={MARKER.grey} size={17} draw={drawNow(1)} />);
  if (show(2) && step !== 3) TANGENTS.forEach((at, position) => drawing.push(<Note x={toX(at) + (at > 0 ? -12 : 12)} y={toY(normalCdf(at)) + (at > 0 ? 24 : -14)} text={`slope ${fmt(normalPdf(at), 2)}β`} color={at === 0 ? MARKER.blue : MARKER.red} anchor={at > 0 ? "end" : "start"} size={17} delay={position * 300 + 200} draw={drawNow(2)} />));
  if (step === 3) {
    drawing.push(<Dot x={toX(index)} y={toY(normalCdf(index))} color={ACCENT} />);
    drawing.push(sketch.handle({ key: "index", x: index, y: -0.1, axis: "x", hint: "above", onDrag: (dataX) => setIndex(clamp(Math.round(dataX * 10) / 10, -4, 4)) }));
  }
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} ariaLabel="Probit curve with tangents: the marginal effect is 0.40 beta at the middle and about 0.05 beta at plus or minus 2.">
      {drawing}
    </SketchGraph>
  );
}
