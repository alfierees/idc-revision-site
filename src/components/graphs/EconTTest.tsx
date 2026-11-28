import { useState } from "preact/hooks";
import type { VNode } from "preact";
import {
  useSketch, useGlide, SketchGraph, SketchAxes, InkCurve, InkDashed, Hatch, Note, Toggle, Slider, Presets,
  curvePoints, fmt, clamp, INK, MARKER, WASH,
} from "./sketch";

// Intro to Econometrics: the t-test on one coefficient, read off an R table.
//   type: econ-t-test
//   paper: a23q16 | a23q9 | a26q1 | a26q18   (which past-paper test opens)
// Steps: the t distribution under H0 → the rejection region at α → the
// statistic t = (β̂ − b)/se → the p-value area and the decision → explore.

interface Props { paper?: string; }
type Sides = "two" | "left" | "right";
interface Case {
  key: string; label: string; source: string;
  name: string; est: number; se: number; b: number; df: number; sides: Sides; alpha: number;
}
const CASES: Case[] = [
  { key: "a23q16", label: "2023 A Q16", source: "2023 Moed A Q16: is X2's effect negative? ols3, one-sided", name: "\\beta_{X2}", est: -2.55818, se: 1.21108, b: 0, df: 74, sides: "left", alpha: 0.05 },
  { key: "a23q9", label: "2023 A Q9", source: "2023 Moed A Q9: is X2 significant in ols1?", name: "\\beta_{X2}", est: -4.074, se: 2.456, b: 0, df: 75, sides: "two", alpha: 0.05 },
  { key: "a26q1", label: "2026 A Q1", source: "2026 Moed A Q1: is the elasticity 1? (not the 0 that R tests)", name: "\\beta_1", est: 0.867231, se: 0.014493, b: 1, df: 1464, sides: "two", alpha: 0.01 },
  { key: "a26q18", label: "2026 A Q18", source: "2026 Moed A Q18: X in Model [B]", name: "\\beta_4", est: -0.3529, se: 0.8969, b: 0, df: 81, sides: "two", alpha: 0.05 },
];

// Student's t: density, CDF by Simpson's rule, and the critical value by bisection.
function logGamma(z: number): number {
  const g = 7;
  const c = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
  if (z < 0.5) return Math.log(Math.PI / Math.sin(Math.PI * z)) - logGamma(1 - z);
  const x = z - 1;
  let a = c[0];
  const t = x + g + 0.5;
  for (let i = 1; i < g + 2; i++) a += c[i] / (x + i);
  return 0.5 * Math.log(2 * Math.PI) + (x + 0.5) * Math.log(t) - t + Math.log(a);
}
const tPdf = (t: number, df: number) =>
  Math.exp(logGamma((df + 1) / 2) - logGamma(df / 2) - 0.5 * Math.log(df * Math.PI) - ((df + 1) / 2) * Math.log(1 + (t * t) / df));
function upperTail(t: number, df: number): number {
  // P(T > t) for t ≥ 0.
  const n = 400, h = Math.abs(t) / n;
  let sum = tPdf(0, df) + tPdf(Math.abs(t), df);
  for (let i = 1; i < n; i++) sum += (i % 2 ? 4 : 2) * tPdf(i * h, df);
  const tail = 0.5 - (sum * h) / 3;
  return Math.max(0, t >= 0 ? tail : 1 - tail);
}
function critical(tailArea: number, df: number): number {
  let lo = 0, hi = 30;
  for (let i = 0; i < 60; i++) {
    const mid = (lo + hi) / 2;
    if (upperTail(mid, df) > tailArea) lo = mid; else hi = mid;
  }
  return (lo + hi) / 2;
}
const pct = (value: number) => (value < 0.0001 ? "< 0.0001" : fmt(value, 4));

const NOTES = [
  "Under H₀ the statistic (β̂ − b)/se follows a t distribution with N − M degrees of freedom. With hundreds of df it is the normal.",
  "The rejection region holds α of the area: split α/2 in each tail for “≠”, all of α in one tail for “<” or “>”.",
  "Build the statistic yourself. R's t value only tests b = 0.",
  "The p-value is the area beyond the statistic, on the side(s) H₁ points to. Reject when it is below α, which is the same as t landing in the rejection region.",
  "Your turn. Move the statistic, the degrees of freedom and α, and switch between one- and two-sided.",
];

export default function EconTTest({ paper = "a23q16" }: Props): VNode {
  const start = CASES.find((c) => c.key === paper) ?? CASES[0];
  const [pick, setPick] = useState(start.key);
  const chosen = CASES.find((c) => c.key === pick) ?? start;
  const tCase = (chosen.est - chosen.b) / chosen.se;
  const [tune, setTune] = useState({ t: clamp(tCase, -6, 6), df: Math.min(chosen.df, 120), alpha: chosen.alpha, sides: chosen.sides as Sides });
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMin: -4, xMax: 4, yMax: 1 }], padding: { left: 16, bottom: 50, top: 22 }, aspect: 0.55, maxWidth: 640 });
  const { step, show, drawNow, narrow } = sketch;
  const exploring = step === NOTES.length - 1;

  const sides: Sides = exploring ? tune.sides : chosen.sides;
  const alpha = exploring ? tune.alpha : chosen.alpha;
  const df = exploring ? tune.df : chosen.df;
  const target = exploring ? tune.t : tCase;
  const v = useGlide({ t: target, span: Math.max(4.2, Math.min(Math.abs(target) * 1.12, 12)) }, false);

  const base = sketch.frames[0];
  const span = v.span;
  const peak = tPdf(0, df);
  const yMax = peak * 1.25;
  const frame = {
    ...base, xMin: -span, xMax: span, yMin: 0, yMax,
    x: (value: number) => base.left + ((value + span) / (2 * span)) * (base.right - base.left),
    y: (value: number) => base.bottom - (value / yMax) * (base.bottom - base.top),
  };
  const density = (x: number) => tPdf(x, df);
  const area = (from: number, to: number, id: string, wash: string, ink: string, atStep: number, angle: 1 | -1 = 1) => {
    const a = clamp(from, -span, span), b = clamp(to, -span, span);
    if (b - a < 1e-6) return null;
    const points: [number, number][] = [[frame.x(a), frame.y(0)], ...curvePoints(frame, density, a, b, 40), [frame.x(b), frame.y(0)]];
    return <Hatch points={points} id={`${sketch.uid}-${id}-${pick}`} wash={wash} ink={ink} angle={angle} draw={drawNow(atStep)} />;
  };

  const crit = critical(sides === "two" ? alpha / 2 : alpha, df);
  const t = v.t;
  const pValue = sides === "two" ? 2 * upperTail(Math.abs(target), df) : sides === "right" ? upperTail(target, df) : 1 - upperTail(target, df);
  const reject = pValue < alpha;

  const plot: VNode[] = [];
  if (show(1)) {
    if (sides !== "right") plot.push(area(-span, -crit, "rejL", WASH.red, MARKER.red, 1, -1)!);
    if (sides !== "left") plot.push(area(crit, span, "rejR", WASH.red, MARKER.red, 1, -1)!);
  }
  if (show(3)) {
    if (sides === "two") {
      plot.push(area(-span, -Math.abs(t), "pL", WASH.blue, MARKER.blue, 3)!);
      plot.push(area(Math.abs(t), span, "pR", WASH.blue, MARKER.blue, 3)!);
    } else if (sides === "right") plot.push(area(t, span, "pR", WASH.blue, MARKER.blue, 3)!);
    else plot.push(area(-span, t, "pL", WASH.blue, MARKER.blue, 3)!);
  }
  plot.push(<InkCurve points={curvePoints(frame, density, -span, span, 120)} id={`t-bell-${pick}`} color={INK} width={2.6} draw={drawNow(0)} />);
  const tickSet = narrow ? [-Math.round(span / 2) * 1, 0, Math.round(span / 2)] : [-Math.round(span * 0.75), -Math.round(span * 0.375), 0, Math.round(span * 0.375), Math.round(span * 0.75)];
  const drawing: VNode[] = [
    <SketchAxes frame={frame} id={`t-axes-${pick}`} xTicks={Array.from(new Set(tickSet))} />,
    <g clip-path={sketch.clip()}>{plot}</g>,
  ];
  if (show(1)) {
    const labels = sides === "two" ? [-crit, crit] : sides === "right" ? [crit] : [-crit];
    for (const c of labels) {
      drawing.push(<InkDashed x1={frame.x(c)} y1={frame.y(peak * 0.55)} x2={frame.x(c)} y2={frame.y(0)} id={`t-crit-${c > 0 ? "r" : "l"}-${pick}`} color={MARKER.red} width={1.6} dash={5} gap={4} draw={drawNow(1)} />);
      drawing.push(<Note x={frame.x(c)} y={frame.y(peak * 0.58)} text={fmt(c, 3)} color={MARKER.red} anchor="middle" size={16} draw={drawNow(1)} />);
    }
  }
  if (show(2)) {
    const tx = frame.x(clamp(t, -span, span));
    drawing.push(<InkDashed x1={tx} y1={frame.y(peak * 0.95)} x2={tx} y2={frame.y(0)} id={`t-stat-${pick}`} color={MARKER.purple} width={2.4} dash={6} gap={4} draw={drawNow(2)} />);
    drawing.push(<Note x={tx} y={frame.bottom + 36} text={`t = ${fmt(target, 3)}`} color={MARKER.purple} anchor="middle" size={17} draw={drawNow(2)} />);
  }
  if (show(3) && !narrow) {
    drawing.push(<Note x={frame.x(0)} y={frame.y(peak * 1.12)} text={reject ? "reject H₀" : "fail to reject H₀"} color={reject ? MARKER.red : MARKER.green} anchor="middle" size={18} draw={drawNow(3)} />);
  }

  const h1 = sides === "two" ? "\\neq" : sides === "right" ? ">" : "<";
  const h0 = sides === "two" ? "=" : sides === "right" ? "\\le" : "\\ge";
  const critTex = sides === "two" ? `t_{${fmt(alpha / 2, 3)}}(${df}) = ${fmt(crit, 3)}` : `t_{${fmt(alpha, 2)}}(${df}) = ${fmt(crit, 3)}`;
  const nm = chosen.name;
  const TEX = [
    `H_0: ${nm} ${h0} ${chosen.b},\\ H_1: ${nm} ${h1} ${chosen.b},\\qquad t = \\frac{\\hat\\beta - b}{se(\\hat\\beta)} \\sim t_{${df}}`,
    `\\alpha = ${fmt(alpha * 100, 0)}\\%,\\ \\text{${sides === "two" ? "two-sided" : "one-sided"}}:\\ ${critTex}`,
    `t = \\frac{${fmt(chosen.est, 4)} - ${chosen.b}}{${fmt(chosen.se, 4)}} = ${fmt(tCase, 3)}`,
    `p = ${pct(pValue)} ${reject ? "<" : ">"} ${alpha}\\ \\Rightarrow\\ \\text{${reject ? "reject" : "fail to reject"} } H_0`,
    `t = ${fmt(target, 2)},\\ ${critTex},\\ p = ${pct(pValue)}\\ \\Rightarrow\\ \\text{${reject ? "reject" : "fail to reject"}}`,
  ];

  const choose = (key: string) => {
    const next = CASES.find((c) => c.key === key) ?? CASES[0];
    setPick(next.key);
    setTune({ t: clamp((next.est - next.b) / next.se, -6, 6), df: Math.min(next.df, 120), alpha: next.alpha, sides: next.sides });
  };

  return (
    <SketchGraph
      sketch={sketch}
      note={NOTES[step]}
      tex={TEX[step]}
      footnote={`${chosen.source}. Estimate ${chosen.est}, standard error ${chosen.se}, ${chosen.df} degrees of freedom.`}
      ariaLabel={`t distribution with ${df} degrees of freedom; critical value ${fmt(crit, 3)}; statistic ${fmt(target, 3)}; p-value ${pct(pValue)}.`}
      top={exploring
        ? <Toggle label="Alternative" active={tune.sides} onPick={(key) => setTune({ ...tune, sides: key as Sides })} options={[{ key: "two", label: "two-sided ≠" }, { key: "left", label: "one-sided <" }, { key: "right", label: "one-sided >" }]} />
        : <Toggle label="Question" active={pick} onPick={choose} options={CASES.map((c) => ({ key: c.key, label: c.label }))} />}
      explore={<>
        <div class="graph-sliders">
          <Slider label="t statistic" value={Math.round(tune.t * 100) / 100} min={-6} max={6} step={0.01} onInput={(value) => setTune({ ...tune, t: value })} />
          <Slider label="degrees of freedom" value={tune.df} min={3} max={200} step={1} onInput={(value) => setTune({ ...tune, df: value })} />
        </div>
        <Presets presets={[
          { label: "α = 1%", apply: () => setTune({ ...tune, alpha: 0.01 }) },
          { label: "α = 5%", apply: () => setTune({ ...tune, alpha: 0.05 }) },
          { label: "α = 10%", apply: () => setTune({ ...tune, alpha: 0.1 }) },
        ]} />
      </>}
    >
      {drawing}
    </SketchGraph>
  );
}
