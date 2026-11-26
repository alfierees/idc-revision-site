import { useState } from "preact/hooks";
import type { VNode } from "preact";
import {
  useSketch, useGlide, SketchGraph, SketchAxes, InkCurve, InkDashed, Hatch, Note, Presets, Toggle, Slider,
  curvePoints, fmt, INK, MARKER, WASH,
} from "./sketch";
import { normalPdf, phiInverse, roundZ, tablePhi } from "./StatsKit";

// Statistics B, Lec 06 and Lec 12 Q12: the power of a Z test for a mean.
// Steps: the sampling distribution of X̄ under H0 → the critical value and the
// rejection region (α) → the true distribution under H1 → power (1 − β) and β
// → explore n, the true mean, σ, α and the tails.
//   type: stats-power
//   mu0, mu1, sigma, n, alpha, tails (two | right | left)
// Defaults are the practice exam Q12: n = 49, σ = 4, H0: μ = 30, true μ = 32,
// α = 0.05, two-tailed, power 0.938.

interface Props { mu0?: number; mu1?: number; sigma?: number; n?: number; alpha?: number; tails?: string; }
type Tails = "two" | "right" | "left";
const TAILS: { key: Tails; label: string }[] = [
  { key: "two", label: "H₁: μ ≠ μ₀" },
  { key: "right", label: "H₁: μ > μ₀" },
  { key: "left", label: "H₁: μ < μ₀" },
];

const NOTES = [
  "Assume H₀ is true. Then X̄ is normal around μ₀, with standard error σ/√n.",
  "The critical value cuts off α of the H₀ curve. A sample mean beyond it rejects H₀.",
  "But suppose the truth is a different mean. X̄ really follows this second curve.",
  "Power is the part of the TRUE curve beyond the critical value: the chance we correctly reject. The rest is β, a Type II error.",
  "Your turn. Raise n, move the true mean, change α or the tails, and watch power move.",
];

const zCritical = (alpha: number, tails: Tails) => Math.round(phiInverse(1 - (tails === "two" ? alpha / 2 : alpha)) * 1000) / 1000;

export default function StatsPowerTest({ mu0: muNull = 30, mu1: muTrue = 32, sigma: sigma0 = 4, n: n0 = 49, alpha: alpha0 = 0.05, tails: tails0 = "two" }: Props): VNode {
  const startTails: Tails = tails0 === "right" || tails0 === "left" ? tails0 : "two";
  const [target, setTarget] = useState({ mu1: muTrue, sigma: sigma0, n: n0 });
  const [alpha, setAlpha] = useState(alpha0);
  const [tails, setTails] = useState<Tails>(startTails);
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMin: 0, xMax: 1, yMax: 1 }], padding: { left: 16, bottom: 52, top: 26 }, aspect: 0.56 });
  const shown = useGlide(target, false);
  const { step, narrow, show, drawNow } = sketch;
  const exploring = step === NOTES.length - 1;

  const n = Math.max(2, Math.round(shown.n));
  const se = shown.sigma / Math.sqrt(n);
  const mu1 = shown.mu1;
  const span = Math.max(Math.abs(mu1 - muNull), 0.001);
  const xMin = Math.min(muNull, mu1) - 3.6 * se - span * 0.05, xMax = Math.max(muNull, mu1) + 3.6 * se + span * 0.05;
  const peak = normalPdf(muNull, muNull, se);
  const base = sketch.frames[0];
  const yMax = peak * 1.3;
  const frame = {
    ...base, xMin, xMax, yMin: 0, yMax,
    x: (value: number) => base.left + ((value - xMin) / (xMax - xMin)) * (base.right - base.left),
    y: (value: number) => base.bottom - (value / yMax) * (base.bottom - base.top),
  };
  const toX = frame.x, toY = frame.y;
  const nullDensity = (x: number) => normalPdf(x, muNull, se);
  const trueDensity = (x: number) => normalPdf(x, mu1, se);

  const z = zCritical(alpha, tails);
  const upper = Math.round((muNull + z * se) * 100) / 100, lower = Math.round((muNull - z * se) * 100) / 100;
  const useUpper = tails !== "left", useLower = tails !== "right";
  // Power as the exam computes it: standardise each critical value around the true mean, read Φ.
  const zUpper = roundZ((upper - mu1) / se), zLower = roundZ((lower - mu1) / se);
  const powerUpper = useUpper ? Math.round((1 - tablePhi(zUpper)) * 10000) / 10000 : 0;
  const powerLower = useLower ? tablePhi(zLower) : 0;
  const power = Math.min(1, Math.round((powerUpper + powerLower) * 10000) / 10000);
  const beta = Math.round((1 - power) * 10000) / 10000;

  const area = (density: (x: number) => number, from: number, to: number, id: string, wash: string, ink: string, atStep: number, angle: 1 | -1 = 1) => {
    const a = Math.max(from, xMin), b = Math.min(to, xMax);
    if (b <= a) return null;
    const points: [number, number][] = [[toX(a), toY(0)], ...curvePoints(frame, density, a, b, 56), [toX(b), toY(0)]];
    return <Hatch points={points} id={`${sketch.uid}-${id}`} wash={wash} ink={ink} angle={angle} draw={drawNow(atStep)} />;
  };

  const plot: (VNode | null)[] = [];
  if (show(3)) {
    // β: the true curve inside the acceptance region.
    plot.push(area(trueDensity, useLower ? lower : xMin, useUpper ? upper : xMax, "beta", WASH.amber, MARKER.amber, 3, -1));
    if (useUpper) plot.push(area(trueDensity, upper, xMax, "power-up", WASH.green, MARKER.green, 3));
    if (useLower) plot.push(area(trueDensity, xMin, lower, "power-low", WASH.green, MARKER.green, 3));
  }
  if (show(1)) {
    if (useUpper) plot.push(area(nullDensity, upper, xMax, "alpha-up", WASH.red, MARKER.red, 1));
    if (useLower) plot.push(area(nullDensity, xMin, lower, "alpha-low", WASH.red, MARKER.red, 1));
  }
  plot.push(<InkCurve points={curvePoints(frame, nullDensity, xMin, xMax, 90)} id="null-bell" color={INK} width={2.4} draw={drawNow(0)} />);
  if (show(2)) plot.push(<InkCurve points={curvePoints(frame, trueDensity, xMin, xMax, 90)} id="true-bell" color={MARKER.blue} width={2.4} draw={drawNow(2)} />);
  if (show(1)) {
    if (useUpper) plot.push(<InkDashed x1={toX(upper)} y1={frame.top + 4} x2={toX(upper)} y2={toY(0)} id="crit-up" color={MARKER.purple} width={2} dash={6} gap={4} draw={drawNow(1)} />);
    if (useLower) plot.push(<InkDashed x1={toX(lower)} y1={frame.top + 4} x2={toX(lower)} y2={toY(0)} id="crit-low" color={MARKER.purple} width={2} dash={6} gap={4} draw={drawNow(1)} />);
  }

  const ticks = [muNull, ...(show(2) && Math.abs(mu1 - muNull) > se * 0.8 ? [mu1] : [])];
  const drawing: VNode[] = [
    <SketchAxes frame={frame} id="power-axes" xTicks={ticks} formatXTick={(value) => fmt(value, 2)} />,
    <g clip-path={sketch.clip()}>{plot}</g>,
    <Note x={toX(muNull)} y={toY(peak) - 8} text="H₀" color={INK} anchor="middle" size={18} draw={drawNow(0)} />,
  ];
  if (show(2)) drawing.push(<Note x={toX(mu1)} y={toY(peak) - 8} text="true μ" color={MARKER.blue} anchor="middle" size={17} draw={drawNow(2)} />);
  if (show(1)) {
    const critLabel = (value: number) => (narrow ? fmt(value, 2) : `X̄crit = ${fmt(value, 2)}`);
    if (useUpper) drawing.push(<Note x={toX(upper)} y={frame.bottom + 38} text={critLabel(upper)} color={MARKER.purple} anchor="middle" size={15} draw={drawNow(1)} />);
    if (useLower && (!useUpper || !narrow)) drawing.push(<Note x={toX(lower)} y={frame.bottom + 38} text={critLabel(lower)} color={MARKER.purple} anchor="middle" size={15} draw={drawNow(1)} />);
  }
  if (show(3)) {
    const labelX = useUpper ? toX(Math.min(upper + se * 0.9, xMax - se * 0.4)) : toX(Math.max(lower - se * 0.9, xMin + se * 0.4));
    drawing.push(<Note x={labelX} y={toY(peak * 0.55)} text={`power ${fmt(power, 3)}`} color={MARKER.green} anchor="middle" size={17} draw={drawNow(3)} />);
  }

  const m0 = fmt(muNull, 2), sd = fmt(shown.sigma, 2), m1 = fmt(mu1, 2);
  const seTex = `\\tfrac{${sd}}{\\sqrt{${n}}}`;
  const critTex = tails === "two"
    ? `\\bar X_{crit} = \\mu_0 \\pm z_{1-\\alpha/2}\\,\\tfrac{\\sigma}{\\sqrt n} = ${m0} \\pm ${fmt(z, 3)}\\cdot${seTex} = ${fmt(lower, 2)},\\ ${fmt(upper, 2)}`
    : `\\bar X_{crit} = ${m0} ${tails === "right" ? "+" : "-"} ${fmt(z, 3)}\\cdot${seTex} = ${fmt(tails === "right" ? upper : lower, 2)}`;
  const powerParts: string[] = [];
  if (useUpper) powerParts.push(`1 - \\Phi\\!\\left(\\tfrac{${fmt(upper, 2)} - ${m1}}{${fmt(se, 3)}}\\right) = 1 - \\Phi(${fmt(zUpper, 2)})`);
  if (useLower) powerParts.push(`\\Phi\\!\\left(\\tfrac{${fmt(lower, 2)} - ${m1}}{${fmt(se, 3)}}\\right) = \\Phi(${fmt(zLower, 2)})`);
  const powerTex = `1 - \\beta = ${powerParts.join(" + ")} = \\textcolor{${MARKER.green}}{${fmt(power, 4)}}`;
  const TEX = [
    `\\bar X \\overset{H_0}{\\sim} N\\!\\left(\\mu_0,\\ \\tfrac{\\sigma^2}{n}\\right) = N\\!\\left(${m0},\\ \\left(${seTex}\\right)^2\\right)`,
    `${critTex},\\quad \\alpha = ${alpha}`,
    `\\bar X \\overset{H_1}{\\sim} N\\!\\left(${m1},\\ \\left(${seTex}\\right)^2\\right)`,
    powerTex,
    `${powerTex},\\quad \\beta = ${fmt(beta, 4)}`,
  ];

  const update = (changes: Partial<typeof target>) => setTarget((current) => ({ ...current, ...changes }));
  const reset = () => { setTarget({ mu1: muTrue, sigma: sigma0, n: n0 }); setAlpha(alpha0); setTails(startTails); };
  const gap = Math.max(Math.abs(muTrue - muNull), sigma0 / 2);

  return (
    <SketchGraph
      sketch={sketch}
      note={NOTES[step]}
      tex={TEX[step]}
      footnote={`H₀: μ = ${m0}, σ = ${sd}, n = ${n}.`}
      ariaLabel={`Power of a Z test: H0 mean ${m0}, true mean ${m1}, standard error ${fmt(se, 3)}, alpha ${alpha}. Power ${fmt(power, 3)}, beta ${fmt(beta, 3)}.`}
      top={exploring ? <Toggle label="Alternative hypothesis" active={tails} onPick={(key) => setTails(key as Tails)} options={TAILS} /> : undefined}
      explore={<>
        <div class="graph-sliders">
          <Slider label="sample size n" value={target.n} min={4} max={Math.max(200, n0 * 3)} step={1} onInput={(value) => update({ n: value })} />
          <Slider label="true mean μ" value={target.mu1} min={Math.round((muNull - 2 * gap) * 10) / 10} max={Math.round((muNull + 2 * gap) * 10) / 10} step={Math.max(0.1, Math.round(gap * 5) / 100)} onInput={(value) => update({ mu1: value })} />
          <Slider label="σ" value={target.sigma} min={Math.round(sigma0 * 0.4 * 10) / 10} max={Math.round(sigma0 * 2.5 * 10) / 10} step={Math.max(0.1, Math.round(sigma0 * 5) / 100)} onInput={(value) => update({ sigma: value })} />
        </div>
        <Presets presets={[
          { label: "α = 0.01", apply: () => setAlpha(0.01) },
          { label: "α = 0.05", apply: () => setAlpha(0.05) },
          { label: "α = 0.10", apply: () => setAlpha(0.1) },
          { label: "Reset", apply: reset },
        ]} />
      </>}
    >
      {drawing}
    </SketchGraph>
  );
}
