import { useMemo, useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, SketchGraph, SketchAxes, InkLine, InkCurve, InkDashed, Note, Scatter, Arrow, Presets, curvePoints, fmt, INK_SOFT, ACCENT, MARKER, Slider } from "./sketch";
import { normalSampler, fitLine } from "./stats";

// Regression discontinuity (Lecture 9), with simulated data.
//   type: regression-discontinuity
//   mode: sharp | bandwidth | fuzzy
// sharp     — treatment switches on at the cutoff; the jump between the two
//             fitted lines at the cutoff is β̂₂ (true jump 1.6).
// bandwidth — the data curve but have NO jump. A straight line over the whole
//             range invents one; a narrow window around the cutoff doesn't.
// fuzzy     — crossing the cutoff raises the chance of treatment (first stage)
//             and the outcome (reduced form); the effect is their ratio (Wald).

interface Props { mode?: string; }

export default function RegressionDiscontinuity({ mode = "sharp" }: Props): VNode {
  if (mode === "bandwidth") return <Bandwidth />;
  if (mode === "fuzzy") return <Fuzzy />;
  return <Sharp />;
}

const splitFit = (points: { x: number; y: number }[], cutoff: number, bandwidth: number) => {
  const left = points.filter((point) => point.x < cutoff && point.x >= cutoff - bandwidth);
  const right = points.filter((point) => point.x >= cutoff && point.x <= cutoff + bandwidth);
  return { left: fitLine(left.map((p) => p.x), left.map((p) => p.y)), right: fitLine(right.map((p) => p.x), right.map((p) => p.y)) };
};

function Sharp(): VNode {
  const [bandwidth, setBandwidth] = useState(4);
  const points = useMemo(() => {
    const draw = normalSampler(909);
    return Array.from({ length: 220 }, (_, index) => {
      const x = -4 + (8 * ((index * 0.6180339887) % 1));
      return { x, y: 2 + 0.45 * x + (x >= 0 ? 1.6 : 0) + draw() * 0.55 };
    });
  }, []);
  const NOTES = [
    "Everyone above the cutoff is treated, everyone below isn't (simulated).",
    "Fit a line on each side of the cutoff.",
    "The gap between the lines at the cutoff is the treatment effect β̂₂.",
    "Your turn. Narrow the bandwidth: only data near the cutoff is used.",
  ];
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMin: -4.3, xMax: 4.3, yMin: -0.8, yMax: 6.5 }], maxWidth: 660, padding: { left: 40, bottom: 44, top: 22 } });
  const { show, drawNow, step } = sketch;
  const width = step === 3 ? bandwidth : 4;
  const fits = splitFit(points, 0, width);
  const jump = fits.right.intercept - fits.left.intercept;
  const frame = sketch.frames[0];
  const toX = frame.x, toY = frame.y;
  const TEX = [
    "\\text{Treated} = \\mathbb{1}[\\text{running} \\ge \\text{cutoff}]",
    "Y = \\beta_0 + \\beta_1 (R - c) + \\beta_2 T + \\beta_3 (R - c)T + u",
    `\\hat\\beta_2 = ${fmt(jump, 2)} \\quad(\\text{true } 1.6)`,
    `h = ${fmt(width, 1)}:\\; \\hat\\beta_2 = ${fmt(jump, 2)}`,
  ];
  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={[-4, -2, 0, 2, 4]} yTicks={[0, 2, 4, 6]} xLabel="running variable − cutoff" yLabel="outcome" hideZero={false} />];
  drawing.push(<InkDashed x1={toX(0)} y1={frame.top} x2={toX(0)} y2={frame.bottom} id="cutoff" color={INK_SOFT} width={1.3} dash={4} gap={4} />);
  drawing.push(<Scatter points={points.map((point) => [toX(point.x), toY(point.y)])} color={MARKER.grey} radius={2.4} opacity={step === 3 ? 0.25 : 0.5} />);
  if (step === 3) drawing.push(<Scatter points={points.filter((point) => Math.abs(point.x) <= width).map((point) => [toX(point.x), toY(point.y)])} color={MARKER.grey} radius={2.4} opacity={0.7} />);
  if (show(1)) {
    drawing.push(<InkLine x1={toX(-width)} y1={toY(fits.left.intercept - fits.left.slope * width)} x2={toX(0)} y2={toY(fits.left.intercept)} id={`left-${width}`} color={MARKER.blue} width={2.6} draw={drawNow(1)} />);
    drawing.push(<InkLine x1={toX(0)} y1={toY(fits.right.intercept)} x2={toX(width)} y2={toY(fits.right.intercept + fits.right.slope * width)} id={`right-${width}`} color={MARKER.red} width={2.6} delay={300} draw={drawNow(1)} />);
    drawing.push(<Note x={toX(-3.8)} y={toY(1)} text="untreated" color={MARKER.blue} size={18} draw={drawNow(1)} />);
    drawing.push(<Note x={toX(2.4)} y={toY(1.8)} text="treated" color={MARKER.red} size={18} draw={drawNow(1)} />);
  }
  if (show(2)) {
    drawing.push(<Arrow x1={toX(0) + 12} y1={toY(fits.left.intercept)} x2={toX(0) + 12} y2={toY(fits.right.intercept)} id="jump" color={MARKER.green} bend={0} draw={drawNow(2)} />);
    drawing.push(<Note x={toX(0) + 22} y={(toY(fits.left.intercept) + toY(fits.right.intercept)) / 2 + 6} text={`β̂₂ = ${fmt(jump, 2)}`} color={MARKER.green} size={20} delay={400} draw={drawNow(2)} />);
  }
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} footnote="Simulated data, true jump 1.6."
      ariaLabel={`Sharp regression discontinuity: estimated jump ${fmt(jump, 2)} at the cutoff.`}
      explore={<><div class="graph-sliders"><Slider label="bandwidth h" value={bandwidth} min={0.5} max={4} step={0.25} onInput={setBandwidth} /></div>
        <Presets presets={[{ label: "All data", apply: () => setBandwidth(4) }, { label: "Narrow (h = 1)", apply: () => setBandwidth(1) }]} /></>}>
      {drawing}
    </SketchGraph>
  );
}

function Bandwidth(): VNode {
  const [bandwidth, setBandwidth] = useState(1);
  const curve = (x: number) => 0.9 + 1.25 * x - 0.16 * x * x - 0.02 * x * x * x;
  const points = useMemo(() => {
    const draw = normalSampler(313);
    return Array.from({ length: 200 }, (_, index) => {
      const x = -4 + (8 * ((index * 0.6180339887) % 1));
      return { x, y: curve(x) + draw() * 0.35 };
    });
  }, []);
  const NOTES = [
    "Curved data with no jump at the cutoff at all (simulated).",
    "Force a straight line on each side over the whole range: the curvature shows up as a fake jump.",
    "Use only a narrow window around the cutoff: local lines, and the fake jump disappears.",
    "Your turn. Change the bandwidth.",
  ];
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMin: -4.3, xMax: 4.3, yMin: -5, yMax: 5 }], maxWidth: 660, padding: { left: 40, bottom: 44, top: 22 } });
  const { show, drawNow, step } = sketch;
  const width = step === 1 ? 4 : step === 2 ? 1 : step === 3 ? bandwidth : 4;
  const fits = splitFit(points, 0, width);
  const jump = fits.right.intercept - fits.left.intercept;
  const frame = sketch.frames[0];
  const toX = frame.x, toY = frame.y;
  const TEX = [
    "\\text{true jump} = 0",
    `h = 4:\\; \\widehat{\\text{jump}} = ${fmt(splitFit(points, 0, 4).right.intercept - splitFit(points, 0, 4).left.intercept, 2)}`,
    `h = 1:\\; \\widehat{\\text{jump}} = ${fmt(splitFit(points, 0, 1).right.intercept - splitFit(points, 0, 1).left.intercept, 2)}`,
    `h = ${fmt(width, 2)}:\\; \\widehat{\\text{jump}} = ${fmt(jump, 2)}`,
  ];
  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={[-4, -2, 0, 2, 4]} yTicks={[-4, -2, 0, 2, 4]} xLabel="running variable − cutoff" yLabel="outcome" hideZero={false} />];
  drawing.push(<InkDashed x1={toX(0)} y1={frame.top} x2={toX(0)} y2={frame.bottom} id="cutoff" color={INK_SOFT} width={1.3} dash={4} gap={4} />);
  drawing.push(<Scatter points={points.map((point) => [toX(point.x), toY(point.y)])} color={MARKER.grey} radius={2.3} opacity={show(1) ? 0.3 : 0.55} />);
  if (step === 0) drawing.push(<InkCurve points={curvePoints(frame, curve, -4, 4, 60)} id="truth" color={MARKER.green} width={2} dashed draw={drawNow(0)} />);
  if (show(1)) {
    drawing.push(<InkLine x1={toX(-width)} y1={toY(fits.left.intercept - fits.left.slope * width)} x2={toX(0)} y2={toY(fits.left.intercept)} id={`left-${width}`} color={MARKER.blue} width={2.6} draw={drawNow(1) || drawNow(2)} />);
    drawing.push(<InkLine x1={toX(0)} y1={toY(fits.right.intercept)} x2={toX(width)} y2={toY(fits.right.intercept + fits.right.slope * width)} id={`right-${width}`} color={MARKER.red} width={2.6} draw={drawNow(1) || drawNow(2)} />);
    drawing.push(<Note x={toX(0) + 12} y={toY(Math.max(fits.left.intercept, fits.right.intercept)) - 12} text={`jump ${fmt(jump, 2)}`} color={Math.abs(jump) > 0.3 ? MARKER.red : MARKER.green} size={19} />);
  }
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} footnote="Simulated data with no true jump."
      ariaLabel={`Bandwidth choice: with bandwidth ${fmt(width, 2)} the estimated jump is ${fmt(jump, 2)} though the truth is zero.`}
      explore={<div class="graph-sliders"><Slider label="bandwidth h" value={bandwidth} min={0.5} max={4} step={0.25} onInput={setBandwidth} /></div>}>
      {drawing}
    </SketchGraph>
  );
}

function Fuzzy(): VNode {
  const { firstStage, reducedForm } = useMemo(() => {
    const draw = normalSampler(1212);
    const firstStagePoints: { x: number; y: number }[] = [], reducedPoints: { x: number; y: number }[] = [];
    for (let index = 0; index < 240; index++) {
      const x = -100 + 200 * ((index * 0.6180339887) % 1);
      const enrolChance = x >= 0 ? 0.55 + 0.0006 * x : 0.08 + 0.0006 * x;
      firstStagePoints.push({ x, y: enrolChance + draw() * 0.025 });
      reducedPoints.push({ x, y: 10.1 + 0.0009 * x + (x >= 0 ? 0.095 * 0.47 : 0) + draw() * 0.018 });
    }
    return { firstStage: firstStagePoints, reducedForm: reducedPoints };
  }, []);
  const firstFits = splitFit(firstStage, 0, 100), reducedFits = splitFit(reducedForm, 0, 100);
  const firstJump = firstFits.right.intercept - firstFits.left.intercept;
  const reducedJump = reducedFits.right.intercept - reducedFits.left.intercept;
  const NOTES = [
    "Crossing the SAT cutoff makes you eligible, not enrolled: the chance of attending jumps, but not to 1 (simulated binned data).",
    "The outcome, log earnings, also jumps at the cutoff: the reduced form.",
    "The effect of attending is the outcome jump divided by the enrolment jump: the Wald estimator.",
  ];
  const TEX = [
    `\\Delta P(\\text{enrol}) = ${fmt(firstJump, 3)}`,
    `\\Delta \\log(\\text{earnings}) = ${fmt(reducedJump, 3)}`,
    `\\text{effect} = \\frac{${fmt(reducedJump, 3)}}{${fmt(firstJump, 3)}} = ${fmt(reducedJump / firstJump, 3)} \\approx ${fmt(100 * reducedJump / firstJump, 1)}\\%`,
  ];
  const sketch = useSketch({
    stepCount: NOTES.length,
    domains: [{ xMin: -105, xMax: 105, yMin: 0, yMax: 0.75 }, { xMin: -105, xMax: 105, yMin: 9.95, yMax: 10.3 }],
    aspect: 0.8, minHeight: 240, maxHeight: 320, maxWidth: 760, padding: { left: 46, bottom: 40, top: 16 },
    panelTitles: ["First stage: P(enrolled)", "Reduced form: log earnings"],
  });
  const { show, drawNow, step } = sketch;
  const [left, right] = sketch.frames;
  const panel = (frame: typeof left, points: { x: number; y: number }[], fits: ReturnType<typeof splitFit>, jump: number, id: string, visibleFrom: number, format: (value: number) => string, yTicks: number[]) => {
    const parts: VNode[] = [<SketchAxes frame={frame} id={`${id}-axes`} xTicks={[-100, -50, 0, 50, 100]} yTicks={yTicks} formatTick={format} xLabel="SAT − cutoff" />];
    parts.push(<InkDashed x1={frame.x(0)} y1={frame.top} x2={frame.x(0)} y2={frame.bottom} id={`${id}-cutoff`} color={INK_SOFT} width={1.2} dash={4} gap={4} />);
    if (!show(visibleFrom)) return parts;
    parts.push(<Scatter points={points.map((point) => [frame.x(point.x), frame.y(point.y)])} color={MARKER.grey} radius={2.3} opacity={0.5} draw={drawNow(visibleFrom)} />);
    parts.push(<InkLine x1={frame.x(-100)} y1={frame.y(fits.left.intercept - 100 * fits.left.slope)} x2={frame.x(0)} y2={frame.y(fits.left.intercept)} id={`${id}-left`} color={MARKER.blue} width={2.4} draw={drawNow(visibleFrom)} />);
    parts.push(<InkLine x1={frame.x(0)} y1={frame.y(fits.right.intercept)} x2={frame.x(100)} y2={frame.y(fits.right.intercept + 100 * fits.right.slope)} id={`${id}-right`} color={MARKER.red} width={2.4} draw={drawNow(visibleFrom)} />);
    parts.push(<Arrow x1={frame.x(0) + 10} y1={frame.y(fits.left.intercept)} x2={frame.x(0) + 10} y2={frame.y(fits.right.intercept)} id={`${id}-jump`} color={MARKER.green} bend={0} delay={400} draw={drawNow(visibleFrom)} />);
    parts.push(<Note x={frame.x(0) + 18} y={(frame.y(fits.left.intercept) + frame.y(fits.right.intercept)) / 2 + 6} text={`jump ${format(jump)}`} color={MARKER.green} size={18} delay={600} draw={drawNow(visibleFrom)} />);
    return parts;
  };
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} footnote="Simulated to mirror Hoekstra (2009); not the paper's data."
      ariaLabel={`Fuzzy RDD: enrolment jumps by ${fmt(firstJump, 2)}, log earnings by ${fmt(reducedJump, 3)}; Wald estimate ${fmt(reducedJump / firstJump, 3)}.`}>
      <g>{panel(left, firstStage, firstFits, firstJump, "first", 0, (value) => fmt(value, 2), [0.2, 0.4, 0.6])}</g>
      <g>{panel(right, reducedForm, reducedFits, reducedJump, "reduced", 1, (value) => fmt(value, 2), [10, 10.1, 10.2, 10.3])}</g>
      {show(2) && <Note x={sketch.width / 2} y={sketch.height - 4} text={`effect = ${fmt(reducedJump, 3)} ÷ ${fmt(firstJump, 3)} = ${fmt(reducedJump / firstJump, 3)}`} color={ACCENT} anchor="middle" size={19} draw={drawNow(2)} />}
    </SketchGraph>
  );
}
