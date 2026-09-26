import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { Slider } from "./plot";
import { useSketch, useGlide, SketchGraph, SketchAxes, InkCurve, InkDashed, Hatch, Note, Toggle, fmt, INK, ACCENT, MARKER, WASH } from "./sketch";

// The income column silently mixes monthly and annual figures. Most source
// systems wrote monthly pay (lognormal, exp(N(9.1, 0.45²)) shekels, median
// ≈ 9,000); some wrote the same pay twelve times bigger (annual). Seen as one
// column, the histogram grows two humps and the mean drifts into the empty
// valley between them: exactly what the notebook pastes into every customer
// with a missing income.

const MU = 9.1, SIGMA = 0.45;
const MONTHLY_MEAN_THOUSANDS = 9.98; // exp(9.1 + 0.45²/2) / 1000
const lognormalPdf = (shekels: number) => (shekels <= 0 ? 0 : Math.exp(-((Math.log(shekels) - MU) ** 2) / (2 * SIGMA * SIGMA)) / (shekels * SIGMA * Math.sqrt(2 * Math.PI)));
const monthlyDensity = (thousands: number) => lognormalPdf(thousands * 1000) * 1000;
const annualDensity = (thousands: number) => (lognormalPdf((thousands * 1000) / 12) / 12) * 1000;

const NOTES = [
  "Most source systems stored income as monthly pay: one hump around 9,000 shekels.",
  "But some stored the same pay as an annual figure, twelve times bigger: a second hump near 120,000.",
  "In one column you can't tell them apart. The mean lands in the empty valley between the humps: it describes nobody.",
  "And that mean is what the notebook pastes into every customer with a missing income.",
  "Your turn. Change the share stored annually.",
];

export default function IncomeMixup(): VNode {
  const [exploreShare, setExploreShare] = useState(30);
  const [view, setView] = useState<"source" | "one">("source");
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMax: 200, yMax: 1 }], maxWidth: 680, padding: { left: 24, bottom: 44, top: 22 } });
  const { show, drawNow, step } = sketch;
  const shareTarget = step === 0 ? 0 : step === 4 ? exploreShare : 30;
  const { share } = useGlide({ share: shareTarget }, false);
  const annualWeight = share / 100;
  const frame = sketch.frames[0];
  const monthlyCurve = (x: number) => (1 - annualWeight) * monthlyDensity(x);
  const annualCurve = (x: number) => annualWeight * annualDensity(x);
  const mixture = (x: number) => monthlyCurve(x) + annualCurve(x);
  let peak = 0;
  for (let x = 0.5; x <= 200; x += 0.5) peak = Math.max(peak, mixture(x));
  const scale = peak > 0 ? 0.85 / peak : 1;
  const mean = (1 - annualWeight) * MONTHLY_MEAN_THOUSANDS + annualWeight * 12 * MONTHLY_MEAN_THOUSANDS;
  const oneColumn = step === 2 || step === 3 || (step === 4 && view === "one");
  const area = (fn: (x: number) => number): [number, number][] => {
    const points: [number, number][] = [[frame.x(0.5), frame.bottom]];
    for (let x = 0.5; x <= 200; x += 1) points.push([frame.x(x), frame.y(fn(x) * scale)]);
    points.push([frame.x(200), frame.bottom]);
    return points;
  };
  const line = (fn: (x: number) => number): [number, number][] => Array.from({ length: 200 }, (_, index) => [frame.x(0.5 + index), frame.y(fn(0.5 + index) * scale)] as [number, number]);
  const TEX = [
    "\\text{monthly: } \\exp\\big(N(9.1,\\ 0.45^2)\\big),\\; \\text{mean} \\approx 10\\text{k}",
    `\\text{annual} = 12 \\times \\text{monthly},\\; \\text{share} = ${fmt(share, 0)}\\%`,
    `\\bar x = ${fmt(1 - annualWeight, 2)}(10) + ${fmt(annualWeight, 2)}(120) = ${fmt(mean, 0)}\\text{k}`,
    `\\text{missing income} \\to ${fmt(mean, 0)}\\text{k}`,
    `\\text{share } ${fmt(share, 0)}\\%:\\; \\text{fill-in value} = ${fmt(mean, 0)}\\text{k}`,
  ];
  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={[0, 50, 100, 150, 200]} yTicks={[]} xLabel="income (thousands of shekels)" />];
  if (oneColumn) {
    drawing.push(<Hatch points={area(mixture)} id={`${sketch.uid}-mix`} wash="rgba(28,24,20,0.1)" ink={INK} gap={9} draw={drawNow(2)} />);
    drawing.push(<InkCurve points={line(mixture)} id="mixture" color={INK} width={2.2} draw={drawNow(2)} />);
  } else {
    drawing.push(<Hatch points={area(monthlyCurve)} id={`${sketch.uid}-monthly`} wash={WASH.blue} ink={MARKER.blue} gap={8} draw={drawNow(0)} />);
    drawing.push(<InkCurve points={line(monthlyCurve)} id="monthly" color={MARKER.blue} width={2.2} draw={drawNow(0)} />);
    if (annualWeight > 0.001) {
      drawing.push(<Hatch points={area(annualCurve)} id={`${sketch.uid}-annual`} wash={WASH.amber} ink={MARKER.amber} gap={8} angle={-1} draw={drawNow(1)} />);
      drawing.push(<InkCurve points={line(annualCurve)} id="annual" color={MARKER.amber} width={2.2} draw={drawNow(1)} />);
    }
    drawing.push(<Note x={frame.x(22)} y={frame.y(monthlyCurve(9) * scale) + 4} text="monthly records" color={MARKER.blue} size={18} draw={drawNow(0)} />);
    if (show(1) && annualWeight > 0.001) drawing.push(<Note x={frame.x(125)} y={frame.y(annualCurve(110) * scale) - 12} text="annual records" color={MARKER.amber} anchor="middle" size={18} draw={drawNow(1)} />);
  }
  if (show(2)) {
    drawing.push(<InkDashed x1={frame.x(mean)} y1={frame.top} x2={frame.x(mean)} y2={frame.bottom} id="mean" color={ACCENT} width={1.8} dash={6} gap={4} />);
    drawing.push(<Note x={frame.x(mean) + 8} y={frame.top + 12} text={step >= 3 ? `fill-in value = ${fmt(mean, 0)}k` : `mean = ${fmt(mean, 0)}k: describes nobody`} color={ACCENT} size={18} />);
  }
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} ariaLabel={`Income column mixing monthly and annual records: with ${fmt(share, 0)} percent annual, the mean is ${fmt(mean, 0)} thousand shekels.`}
      explore={<>
        <div class="graph-sliders"><Slider label="share stored annually" value={exploreShare} min={0} max={40} step={5} suffix="%" onInput={setExploreShare} /></div>
        <Toggle label="View" options={[{ key: "source", label: "Coloured by source system" }, { key: "one", label: "One column (what the notebook sees)" }]} active={view} onPick={(key) => setView(key as "source" | "one")} />
      </>}>
      {drawing}
    </SketchGraph>
  );
}
