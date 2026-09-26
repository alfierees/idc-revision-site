import { useMemo, useState } from "preact/hooks";
import type { VNode } from "preact";
import { Slider } from "./plot";
import { useSketch, SketchGraph, SketchAxes, InkLine, InkCurve, InkDashed, Note, Dot, Scatter, Presets, curvePoints, fmt, clamp, INK, ACCENT, MARKER } from "./sketch";
import { normalSampler, fitLine, normalPdf, normalCdf } from "./stats";

// Sample selection (Lecture 5).
//   type: sample-selection
//   mode: bias | mills
// bias  — simulated women: log wage = 1 + 0.111·educ + u. Only some work; if
//         highly educated women with low potential wages tend not to work,
//         the workers-only OLS slope is steeper than the truth.
// mills — the inverse Mills ratio λ(a) = φ(a)/Φ(a), the correction term in
//         Heckman's second step: large when few are selected, ≈ 0 when nearly
//         everyone is.

interface Props { mode?: string; }

export default function SampleSelection({ mode = "bias" }: Props): VNode {
  return mode === "mills" ? <InverseMills /> : <SelectionBias />;
}

const TRUE_INTERCEPT = 1, TRUE_SLOPE = 0.111;

function simulateWomen(selectionStrength: number) {
  const draw = normalSampler(515);
  const people: { education: number; wage: number; works: boolean }[] = [];
  for (let index = 0; index < 360; index++) {
    const education = 8 + ((index * 0.754877666) % 1) * 10;
    const wageShock = draw() * 0.45;
    const wage = TRUE_INTERCEPT + TRUE_SLOPE * education + wageShock;
    // the bar for working rises with education when selection is positive
    const works = wageShock + draw() * 0.2 > selectionStrength * (education - 13) * 0.12;
    people.push({ education, wage, works });
  }
  const workers = people.filter((person) => person.works);
  return { people, workerFit: fitLine(workers.map((p) => p.education), workers.map((p) => p.wage)), share: workers.length / people.length };
}

function SelectionBias(): VNode {
  const [exploreStrength, setExploreStrength] = useState(1);
  const NOTES = [
    "Every woman's potential log wage against education (simulated). The true slope is 0.111.",
    "We only observe wages for women who work (blue). Highly educated women with low potential wages tend not to.",
    "OLS on workers only: a steeper line than the truth. The sample, not education, did that.",
    "Your turn. Change how selection depends on education; negative selection flattens the line instead.",
  ];
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMin: 7.5, xMax: 18.5, yMin: 0.8, yMax: 4 }], maxWidth: 660, padding: { left: 44, bottom: 44, top: 22 } });
  const { show, drawNow, step } = sketch;
  const strength = step === 3 ? exploreStrength : 1;
  const simulation = useMemo(() => simulateWomen(strength), [strength]);
  const frame = sketch.frames[0];
  const toX = frame.x, toY = frame.y;
  const TEX = [
    `\\log w = ${TRUE_INTERCEPT} + ${TRUE_SLOPE}\\,\\text{educ} + u`,
    `\\text{working: } ${Math.round(simulation.share * 100)}\\%\\text{ of women}`,
    `\\hat\\beta_{\\text{workers}} = ${fmt(simulation.workerFit.slope, 3)} \\;\\text{vs true}\\; ${TRUE_SLOPE}`,
    `\\hat\\beta_{\\text{workers}} = ${fmt(simulation.workerFit.slope, 3)},\\quad \\text{bias} = ${fmt(simulation.workerFit.slope - TRUE_SLOPE, 3)}`,
  ];
  const workers = simulation.people.filter((person) => person.works), others = simulation.people.filter((person) => !person.works);
  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={[8, 10, 12, 14, 16, 18]} yTicks={[1, 2, 3, 4]} xLabel="education (years)" yLabel="log wage" />];
  drawing.push(<Scatter points={(show(1) ? others : simulation.people).map((p) => [toX(p.education), toY(p.wage)])} color={MARKER.grey} radius={2.4} opacity={show(1) ? 0.35 : 0.55} />);
  if (show(1)) drawing.push(<Scatter points={workers.map((p) => [toX(p.education), toY(p.wage)])} color={MARKER.blue} radius={2.6} opacity={0.7} draw={drawNow(1)} />);
  drawing.push(<InkLine x1={toX(8)} y1={toY(TRUE_INTERCEPT + TRUE_SLOPE * 8)} x2={toX(18)} y2={toY(TRUE_INTERCEPT + TRUE_SLOPE * 18)} id="truth" color={MARKER.green} width={2.4} draw={drawNow(0)} />);
  drawing.push(<Note x={toX(18) - 4} y={toY(TRUE_INTERCEPT + TRUE_SLOPE * 18) + 22} text="true line, all women" color={MARKER.green} anchor="end" size={17} draw={drawNow(0)} />);
  if (show(2)) {
    const fit = simulation.workerFit;
    drawing.push(<InkLine x1={toX(8)} y1={toY(fit.intercept + fit.slope * 8)} x2={toX(18)} y2={toY(fit.intercept + fit.slope * 18)} id={`workers-${strength}`} color={MARKER.red} width={2.4} draw={drawNow(2)} />);
    drawing.push(<Note x={toX(8.3)} y={toY(fit.intercept + fit.slope * 8.3) - 10} text="OLS on workers only" color={MARKER.red} size={17} draw={drawNow(2)} />);
  }
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} footnote="Simulated data: 360 women, true slope 0.111."
      ariaLabel={`Sample selection: OLS on workers gives slope ${fmt(simulation.workerFit.slope, 3)} against a true slope of 0.111.`}
      explore={<>
        <div class="graph-sliders"><Slider label="how selection depends on education" value={exploreStrength} min={-1.5} max={1.5} step={0.25} onInput={setExploreStrength} /></div>
        <Presets presets={[{ label: "No selection", apply: () => setExploreStrength(0) }, { label: "Steeper (lecture case)", apply: () => setExploreStrength(1) }, { label: "Flatter", apply: () => setExploreStrength(-1) }]} />
      </>}>
      {drawing}
    </SketchGraph>
  );
}

function InverseMills(): VNode {
  const [index, setIndex] = useState(0);
  const millsRatio = (value: number) => normalPdf(value) / normalCdf(value);
  const NOTES = [
    "The inverse Mills ratio λ(a) = φ(a)/Φ(a), with a = z′γ the selection index.",
    "Low index: few people are selected, so the selected are unusual. λ is large: a big correction.",
    "High index: almost everyone is selected, so the sample is representative. λ ≈ 0: no correction needed.",
    "Your turn. Drag the selection index; Φ(a) is the share selected.",
  ];
  const TEX = [
    "\\mathbb{E}[y \\mid z, s = 1] = x'\\beta + \\rho\\,\\lambda(z'\\gamma),\\quad \\lambda(a) = \\frac{\\varphi(a)}{\\Phi(a)}",
    `\\lambda(-2) = ${fmt(millsRatio(-2), 2)},\\quad \\Phi(-2) = ${fmt(normalCdf(-2), 3)}`,
    `\\lambda(2) = ${fmt(millsRatio(2), 3)},\\quad \\Phi(2) = ${fmt(normalCdf(2), 3)}`,
    `a = ${fmt(index, 1)}:\\; \\lambda = ${fmt(millsRatio(index), 3)},\\; \\Phi(a) = ${fmt(normalCdf(index), 3)}`,
  ];
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMin: -3, xMax: 3, yMax: 3.5 }], maxWidth: 620, padding: { left: 44, bottom: 44, top: 22 } });
  const { show, drawNow, step } = sketch;
  const frame = sketch.frames[0];
  const toX = frame.x, toY = frame.y;
  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={[-3, -2, -1, 0, 1, 2, 3]} yTicks={[0.5, 1, 1.5, 2, 2.5, 3]} xLabel="selection index z′γ" yLabel="λ" />];
  drawing.push(<InkCurve points={curvePoints(frame, millsRatio, -3, 3, 70)} id="mills" color={MARKER.blue} width={2.6} draw={drawNow(0)} />);
  if (show(1) && step !== 3) {
    drawing.push(<Dot x={toX(-2)} y={toY(millsRatio(-2))} color={MARKER.red} draw={drawNow(1)} />);
    drawing.push(<Note x={toX(-2) + 12} y={toY(millsRatio(-2)) - 6} text="few selected: big correction" color={MARKER.red} size={17} draw={drawNow(1)} />);
  }
  if (show(2) && step !== 3) {
    drawing.push(<Dot x={toX(2)} y={toY(millsRatio(2))} color={MARKER.green} draw={drawNow(2)} />);
    drawing.push(<Note x={toX(2)} y={toY(millsRatio(2)) - 16} text="almost all selected: λ ≈ 0" color={MARKER.green} anchor="middle" size={17} draw={drawNow(2)} />);
  }
  if (step === 3) {
    drawing.push(<InkDashed x1={toX(index)} y1={toY(millsRatio(index))} x2={toX(index)} y2={frame.bottom} id="guide" color={INK} width={1.1} dash={4} gap={4} />);
    drawing.push(<Dot x={toX(index)} y={toY(millsRatio(index))} color={ACCENT} />);
    drawing.push(sketch.handle({ key: "index", x: index, y: 0, axis: "x", hint: "above", onDrag: (dataX) => setIndex(clamp(Math.round(dataX * 10) / 10, -3, 3)) }));
  }
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} ariaLabel="The inverse Mills ratio falls from large values at low selection index toward zero.">
      {drawing}
    </SketchGraph>
  );
}
