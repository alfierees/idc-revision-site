import { useState } from "preact/hooks";
import type { VNode } from "preact";
import {
  useSketch, useGlide, SketchGraph, SketchAxes, InkCurve, InkDashed, Hatch, Note, Presets, Toggle, Slider,
  curvePoints, fmt, clamp, INK, MARKER, WASH,
} from "./sketch";
import { normalPdf, phiInverse, roundZ, tablePhi } from "./StatsKit";

// Statistics A, Lec 11 and the last three questions of every paper: a normal
// probability by standardizing and reading the Z table. Steps: the bell →
// the 68-95-99.7 rule → standardize t → left area Φ(z) → right tail 1 − Φ(z)
// → explore (left, right, between, or find the cut-off from a probability).
// Defaults are 2023 Moed B Q18: tree trunks N(20, 5²), more than 26 tons.

interface Props { mu?: number; sigma?: number; t?: number; }

type Mode = "left" | "right" | "between" | "cutoff";
const MODES: { key: Mode; label: string }[] = [
  { key: "left", label: "P(X < t)" },
  { key: "right", label: "P(X > t)" },
  { key: "between", label: "P(s < X < t)" },
  { key: "cutoff", label: "Find t" },
];

const NOTES = [
  "The normal curve is a symmetric bell centred on μ. Probability is area under it.",
  "σ sets the width. About 68% of the area is within one σ of μ and 95% within two.",
  "Standardize the cut-off: how many standard deviations is t from μ?",
  "The Z table gives the area to the LEFT of z. That is P(X < t).",
  "For “more than”, take the complement: the right tail is 1 − Φ(z).",
  "Your turn. Pick a question type, then move μ, σ and the cut-off.",
];

export default function StatsNormalArea({ mu: mu0 = 20, sigma: sigma0 = 5, t: t0 = 26 }: Props): VNode {
  const [target, setTarget] = useState({ mu: mu0, sigma: sigma0, t: t0, s: mu0 - Math.abs(t0 - mu0), p: 0.9 });
  const [mode, setMode] = useState<Mode>("right");
  const sketch = useSketch({
    stepCount: NOTES.length,
    domains: [{ xMin: mu0 - 4 * sigma0, xMax: mu0 + 4 * sigma0, yMax: 1 }],
    padding: { left: 16, bottom: 50, top: 22 },
    aspect: 0.55,
  });
  const shown = useGlide(target, sketch.dragging !== null);
  const { step, narrow } = sketch;
  const show = sketch.show, drawNow = sketch.drawNow;
  const exploring = step === NOTES.length - 1;
  const activeMode: Mode = exploring ? mode : step === 3 ? "left" : "right";

  // Rebuild the frame around the live μ and σ (the hook's frame uses the defaults).
  const base = sketch.frames[0];
  const sigma = Math.max(0.05, shown.sigma), mu = shown.mu;
  const xMin = mu - 4 * sigma, xMax = mu + 4 * sigma;
  const peak = normalPdf(mu, mu, sigma);
  const yMax = peak * 1.22;
  const frame = {
    ...base, xMin, xMax, yMin: 0, yMax,
    x: (value: number) => base.left + ((value - xMin) / (xMax - xMin)) * (base.right - base.left),
    y: (value: number) => base.bottom - (value / yMax) * (base.bottom - base.top),
  };
  const toX = frame.x, toY = frame.y;
  const density = (x: number) => normalPdf(x, mu, sigma);

  const zCut = activeMode === "cutoff" ? roundZ(phiInverse(shown.p)) : roundZ((shown.t - mu) / sigma);
  const cut = activeMode === "cutoff" ? mu + sigma * zCut : clamp(shown.t, xMin, xMax);
  const zLow = roundZ((shown.s - mu) / sigma);
  const low = clamp(Math.min(shown.s, cut), xMin, xMax);
  const leftArea = tablePhi(zCut);
  const rightArea = Math.round((1 - leftArea) * 10000) / 10000;
  const betweenArea = Math.round((tablePhi(zCut) - tablePhi(zLow)) * 10000) / 10000;

  const area = (from: number, to: number, id: string, wash: string, ink: string, atStep: number, angle: 1 | -1 = 1) => {
    if (to <= from) return null;
    const points: [number, number][] = [[toX(from), toY(0)], ...curvePoints(frame, density, from, to, 48), [toX(to), toY(0)]];
    return <Hatch points={points} id={`${sketch.uid}-${id}`} wash={wash} ink={ink} angle={angle} draw={drawNow(atStep)} />;
  };

  const plot: VNode[] = [];
  if (step === 1) {
    plot.push(area(mu - 2 * sigma, mu + 2 * sigma, "two", WASH.grey, MARKER.grey, 1, -1)!);
    plot.push(area(mu - sigma, mu + sigma, "one", WASH.blue, MARKER.blue, 1)!);
  }
  if (step >= 3) {
    if (activeMode === "left" || activeMode === "cutoff") plot.push(area(xMin, cut, "left", WASH.blue, MARKER.blue, step)!);
    if (activeMode === "right") plot.push(area(cut, xMax, "right", WASH.red, MARKER.red, step)!);
    if (activeMode === "between") plot.push(area(low, cut, "between", WASH.green, MARKER.green, step)!);
  }
  plot.push(<InkCurve points={curvePoints(frame, density, xMin, xMax, 90)} id="bell" color={INK} width={2.6} draw={drawNow(0)} />);
  plot.push(<InkDashed x1={toX(mu)} y1={toY(peak)} x2={toX(mu)} y2={toY(0)} id="mu-line" color={INK} width={1.3} dash={5} gap={4} draw={drawNow(0)} />);
  if (show(2)) plot.push(<InkDashed x1={toX(cut)} y1={toY(density(cut)) - 18} x2={toX(cut)} y2={toY(0)} id="cut-line" color={MARKER.purple} width={2} dash={6} gap={4} draw={drawNow(2)} />);
  if (exploring && activeMode === "between") plot.push(<InkDashed x1={toX(low)} y1={toY(density(low)) - 18} x2={toX(low)} y2={toY(0)} id="low-line" color={MARKER.purple} width={2} dash={6} gap={4} />);

  // Ticks at μ + kσ: the exam always reasons in standard deviations.
  const ks = narrow ? [-2, 0, 2] : [-3, -2, -1, 0, 1, 2, 3];
  const drawing: VNode[] = [
    <SketchAxes frame={frame} id="normal-axes" xTicks={ks.map((k) => mu + k * sigma)} formatXTick={(value) => fmt(value, 2)} />,
    <g clip-path={sketch.clip()}>{plot}</g>,
    <Note x={toX(mu) + 6} y={toY(peak) - 6} text="μ" color={INK} size={19} draw={drawNow(0)} />,
  ];
  if (step === 1) {
    drawing.push(<Note x={toX(mu)} y={toY(peak * 0.42)} text="68%" color={MARKER.blue} anchor="middle" size={19} draw={drawNow(1)} />);
    if (!narrow) drawing.push(<Note x={toX(mu + 1.5 * sigma)} y={toY(peak * 0.08)} text="95% to here" color={MARKER.grey} anchor="start" size={15} draw={drawNow(1)} />);
  }
  if (show(2)) {
    const label = activeMode === "cutoff" ? `t = ${fmt(cut, 2)}` : `t = ${fmt(shown.t, 2)}`;
    drawing.push(<Note x={toX(cut)} y={frame.bottom + 36} text={label} color={MARKER.purple} anchor="middle" size={17} draw={drawNow(2)} />);
    drawing.push(<Note x={toX(cut) + 6} y={toY(density(cut)) - 22} text={`z = ${fmt(zCut, 2)}`} color={MARKER.purple} size={16} draw={drawNow(2)} />);
  }
  if (exploring && activeMode === "between") {
    drawing.push(<Note x={toX(low)} y={frame.bottom + 36} text={`s = ${fmt(shown.s, 2)}`} color={MARKER.purple} anchor="middle" size={17} />);
  }

  const m = fmt(mu, 2), sd = fmt(sigma, 2), tt = fmt(shown.t, 2);
  const standardize = `z = \\frac{t - \\mu}{\\sigma} = \\frac{${tt} - ${m}}{${sd}} = ${fmt(zCut, 2)}`;
  const exploreTex: Record<Mode, string> = {
    left: `P(X < ${tt}) = \\Phi\\!\\left(\\tfrac{${tt} - ${m}}{${sd}}\\right) = \\Phi(${fmt(zCut, 2)}) = \\textcolor{${MARKER.blue}}{${leftArea}}`,
    right: `P(X > ${tt}) = 1 - \\Phi(${fmt(zCut, 2)}) = 1 - ${leftArea} = \\textcolor{${MARKER.red}}{${rightArea}}`,
    between: `P(${fmt(shown.s, 2)} < X < ${tt}) = \\Phi(${fmt(zCut, 2)}) - \\Phi(${fmt(zLow, 2)}) = \\textcolor{${MARKER.green}}{${betweenArea}}`,
    cutoff: `\\Phi(z) = ${fmt(shown.p, 2)} \\Rightarrow z = ${fmt(zCut, 2)},\\quad t = \\mu + z\\sigma = ${m} + ${fmt(zCut, 2)} \\cdot ${sd} = ${fmt(cut, 2)}`,
  };
  const TEX = [
    `X \\sim N(${m},\\, ${sd}^2),\\qquad f(x) = \\frac{1}{\\sqrt{2\\pi\\sigma^2}}\\, e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}`,
    `\\mu \\pm \\sigma:\\ 68\\%,\\qquad \\mu \\pm 2\\sigma:\\ 95\\%,\\qquad \\mu \\pm 3\\sigma:\\ 99.7\\%`,
    standardize,
    `P(X < ${tt}) = \\Phi(${fmt(zCut, 2)}) = \\textcolor{${MARKER.blue}}{${leftArea}}`,
    `P(X > ${tt}) = 1 - \\Phi(${fmt(zCut, 2)}) = 1 - ${leftArea} = \\textcolor{${MARKER.red}}{${rightArea}}`,
    exploreTex[mode],
  ];

  const update = (changes: Partial<typeof target>) => setTarget((current) => ({ ...current, ...changes }));
  const tMin = Math.round((target.mu - 3.5 * target.sigma) * 100) / 100, tMax = Math.round((target.mu + 3.5 * target.sigma) * 100) / 100;
  const tStep = Math.max(0.01, Math.round(target.sigma * 0.05 * 100) / 100);

  return (
    <SketchGraph
      sketch={sketch}
      note={NOTES[step]}
      tex={TEX[step]}
      ariaLabel={`Normal curve with mean ${m} and standard deviation ${sd}. Cut-off ${fmt(cut, 2)}, z = ${fmt(zCut, 2)}. Area to the left ${leftArea}, to the right ${rightArea}.`}
      top={exploring ? <Toggle label="Question type" active={mode} onPick={(key) => setMode(key as Mode)} options={MODES} /> : undefined}
      explore={<>
        <div class="graph-sliders">
          <Slider label="mean μ" value={target.mu} min={mu0 - 3 * sigma0} max={mu0 + 3 * sigma0} step={Math.max(0.1, sigma0 / 10)} onInput={(value) => update({ mu: value })} />
          <Slider label="standard deviation σ" value={target.sigma} min={sigma0 * 0.3} max={sigma0 * 2.5} step={sigma0 / 20} onInput={(value) => update({ sigma: value })} />
          {mode === "cutoff"
            ? <Slider label="area to the left" value={target.p} min={0.01} max={0.99} step={0.01} onInput={(value) => update({ p: value })} />
            : <Slider label="cut-off t" value={target.t} min={tMin} max={tMax} step={tStep} onInput={(value) => update({ t: value })} />}
          {mode === "between" && <Slider label="lower cut-off s" value={target.s} min={tMin} max={tMax} step={tStep} onInput={(value) => update({ s: value })} />}
        </div>
        <Presets presets={[
          { label: "t = μ + 1σ", apply: () => update({ t: target.mu + target.sigma }) },
          { label: "t = μ + 2σ", apply: () => update({ t: target.mu + 2 * target.sigma }) },
          { label: "Top 4% (p = 0.96)", apply: () => { setMode("cutoff"); update({ p: 0.96 }); } },
          { label: "Reset", apply: () => setTarget({ mu: mu0, sigma: sigma0, t: t0, s: mu0 - Math.abs(t0 - mu0), p: 0.9 }) },
        ]} />
      </>}
    >
      {drawing}
    </SketchGraph>
  );
}
