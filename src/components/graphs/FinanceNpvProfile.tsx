import { useState } from "preact/hooks";
import type { VNode } from "preact";
import {
  useSketch, useGlide, SketchGraph, SketchAxes, InkCurve, InkDashed, Note, Dot, Toggle, Slider,
  curvePoints, fmt, INK_SOFT, MARKER,
} from "./sketch";

// Fundamentals of Finance: NPV profiles, NPV against IRR.
//   type: finance-npv-profile
//   paper: b25 | a25   (which past-paper question opens)
// b25 = 2025 Moed B MCQ 1 (three projects, rates 0%, 5%, 20%);
// a25 = 2025 Moed A Q12 (three one-payment projects at 8%).
// Steps: one project's NPV falls with r and crosses zero at its IRR → all
// three → the cost of capital picks the highest NPV → IRR ranks them
// differently → explore r.

interface Props { paper?: string; }
interface Project { name: string; flows: number[]; }
interface Case { key: string; label: string; source: string; rate: number; xMax: number; projects: Project[]; }

const CASES: Case[] = [
  {
    key: "b25", label: "2025 B MCQ 1", source: "2025 Moed B MCQ 1", rate: 0.05, xMax: 0.24,
    projects: [
      { name: "A", flows: [-1000, 100, 100, 1100] },
      { name: "B", flows: [-700, 400, 300, 200] },
      { name: "C", flows: [-2000, 0, 0, 2500] },
    ],
  },
  {
    key: "a25", label: "2025 A Q12", source: "2025 Moed A Q12", rate: 0.08, xMax: 0.26,
    projects: [
      { name: "A", flows: [-8000, 9600] },
      { name: "B", flows: [-10000, 0, 12996] },
      { name: "C", flows: [-5000, 0, 0, 6655] },
    ],
  },
];
const COLORS = [MARKER.blue, MARKER.green, MARKER.amber];

const NOTES = [
  "Discount project A's cash flows at a rising rate: its NPV falls. Where the curve crosses zero is the IRR.",
  "Add the other two projects. Each has its own curve and its own IRR.",
  "The cost of capital picks a point on every curve. Mutually exclusive: take the highest NPV there.",
  "Now rank by IRR (where each curve hits zero). The order can differ from the NPV order: trust NPV.",
  "Your turn. Move the cost of capital and watch the NPV ranking change where the curves cross.",
];

const npv = (flows: number[], rate: number) => flows.reduce((sum, flow, t) => sum + flow / Math.pow(1 + rate, t), 0);
const irr = (flows: number[]) => {
  let low = -0.9, high = 3;
  for (let i = 0; i < 200; i++) {
    const mid = (low + high) / 2;
    if (npv(flows, mid) > 0) low = mid; else high = mid;
  }
  return (low + high) / 2;
};
const pct = (value: number, digits = 1) => `${fmt(value * 100, digits)}\\%`;

export default function FinanceNpvProfile({ paper = "b25" }: Props): VNode {
  const start = CASES.find((c) => c.key === paper) ?? CASES[0];
  const [pick, setPick] = useState(start.key);
  const chosen = CASES.find((c) => c.key === pick) ?? start;
  const [rateTarget, setRateTarget] = useState(chosen.rate);
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMin: 0, xMax: 1, yMax: 1 }], maxWidth: 680, padding: { left: 58, bottom: 44, top: 18 } });
  const { step, show, drawNow, narrow } = sketch;
  const exploring = step === NOTES.length - 1;
  const shown = useGlide({ rate: exploring ? rateTarget : chosen.rate }, false);
  const rate = shown.rate;

  const xMax = chosen.xMax;
  const values = chosen.projects.flatMap((p) => [npv(p.flows, 0), npv(p.flows, xMax)]);
  const top = Math.max(...values), bottom = Math.min(...values);
  const pad = (top - bottom) * 0.12;
  const yMax = top + pad, yMin = Math.min(bottom - pad, -pad);
  const base = sketch.frames[0];
  const frame = {
    ...base, xMin: 0, xMax, yMin, yMax,
    x: (value: number) => base.left + (value / xMax) * (base.right - base.left),
    y: (value: number) => base.bottom - ((value - yMin) / (yMax - yMin)) * (base.bottom - base.top),
  };

  const visible = show(1) ? chosen.projects : chosen.projects.slice(0, 1);
  const irrs = chosen.projects.map((p) => irr(p.flows));
  const npvs = chosen.projects.map((p) => npv(p.flows, rate));
  const bestNpv = npvs.indexOf(Math.max(...npvs));
  const bestIrr = irrs.indexOf(Math.max(...irrs));

  const plot: VNode[] = [];
  visible.forEach((project, index) => {
    plot.push(<InkCurve points={curvePoints(frame, (r) => npv(project.flows, r), 0, xMax, 70)} id={`npv-${pick}-${project.name}`} color={COLORS[index]} width={2.5} draw={drawNow(index === 0 ? 0 : 1)} />);
  });

  const yTick = (value: number) => fmt(value, 0);
  const span = yMax - yMin;
  const stepSize = Math.pow(10, Math.floor(Math.log10(span / 3)));
  const unit = span / stepSize > 12 ? stepSize * 2 : stepSize;
  const yTicks: number[] = [];
  for (let v = Math.ceil(yMin / unit) * unit; v <= yMax; v += unit) yTicks.push(Math.round(v));
  const xTicks = [0, 0.05, 0.1, 0.15, 0.2, 0.25].filter((v) => v <= xMax);

  const drawing: VNode[] = [
    <SketchAxes frame={frame} id={`npv-axes-${pick}`} xTicks={xTicks} yTicks={yTicks} formatXTick={(v) => `${fmt(v * 100, 0)}%`} formatTick={yTick} xLabel="discount rate r" yLabel="NPV" hideZero={false} />,
    <g clip-path={sketch.clip()}>{plot}</g>,
  ];
  visible.forEach((project, index) => {
    const labelR = xMax * (0.02 + 0.03 * index);
    drawing.push(<Note x={frame.x(labelR) + 4} y={frame.y(npv(project.flows, labelR)) - 8} text={project.name} color={COLORS[index]} size={18} draw={drawNow(index === 0 ? 0 : 1)} />);
    if (irrs[index] <= xMax) drawing.push(<Dot x={frame.x(irrs[index])} y={frame.y(0)} color={COLORS[index]} draw={drawNow(index === 0 ? 0 : 1)} />);
  });
  if (show(2)) {
    drawing.push(<InkDashed x1={frame.x(rate)} y1={frame.top} x2={frame.x(rate)} y2={frame.bottom} id={`npv-rate-${pick}`} color={MARKER.purple} width={1.6} dash={5} gap={4} draw={drawNow(2)} />);
    npvs.forEach((value, index) => drawing.push(<Dot x={frame.x(rate)} y={frame.y(value)} color={COLORS[index]} radius={index === bestNpv ? 6 : 4} />));
    drawing.push(<Note x={frame.x(rate) + 6} y={frame.top + 14} text={`r = ${fmt(rate * 100, 1)}%`} color={MARKER.purple} size={16} draw={drawNow(2)} />);
  }
  if (show(3) && !narrow) {
    irrs.forEach((value, index) => {
      if (value <= xMax) drawing.push(<Note x={frame.x(value)} y={frame.y(0) + 20 + 16 * (index % 2)} text={`${fmt(value * 100, 1)}%`} color={COLORS[index]} anchor="middle" size={14} draw={drawNow(3)} />);
    });
  }

  const names = chosen.projects.map((p) => p.name);
  const npvList = npvs.map((value, index) => `NPV_${names[index]} = ${fmt(value, 1)}`).join(",\\ ");
  const irrList = irrs.map((value, index) => `IRR_${names[index]} = ${pct(value)}`).join(",\\ ");
  const first = chosen.projects[0];
  const firstFlows = first.flows.map((flow, t) => (t === 0 ? `${flow}` : `\\tfrac{${flow}}{(1+r)^{${t}}}`)).join(" + ");
  const TEX = [
    `NPV_A(r) = ${firstFlows},\\quad IRR_A = ${pct(irrs[0])}`,
    irrList,
    `r = ${pct(rate)}:\\ ${npvList}\\ \\Rightarrow\\ \\textbf{${names[bestNpv]}}`,
    `\\text{highest IRR: } ${names[bestIrr]}\\ (${pct(irrs[bestIrr])});\\ \\text{highest NPV at } ${pct(rate)}: ${names[bestNpv]}`,
    `r = ${pct(rate)}:\\ ${npvList}\\ \\Rightarrow\\ \\textbf{${names[bestNpv]}}`,
  ];

  const choose = (key: string) => {
    const next = CASES.find((c) => c.key === key) ?? CASES[0];
    setPick(next.key);
    setRateTarget(next.rate);
  };

  return (
    <SketchGraph
      sketch={sketch}
      note={NOTES[step]}
      tex={TEX[step]}
      footnote={`${chosen.source}: ${chosen.projects.map((p) => `${p.name} = (${p.flows.join(", ")})`).join("; ")}.`}
      ariaLabel={`NPV profiles for ${chosen.source}. At ${fmt(rate * 100, 1)}% the highest NPV is project ${names[bestNpv]}; the highest IRR is project ${names[bestIrr]}.`}
      top={<Toggle label="Past-paper question" active={pick} onPick={choose} options={CASES.map((c) => ({ key: c.key, label: c.label }))} />}
      explore={<div class="graph-sliders">
        <Slider label="cost of capital r (%)" value={Math.round(rateTarget * 1000) / 10} min={0} max={Math.round(xMax * 100)} step={0.5} onInput={(value) => setRateTarget(value / 100)} />
      </div>}
    >
      {drawing}
    </SketchGraph>
  );
}
