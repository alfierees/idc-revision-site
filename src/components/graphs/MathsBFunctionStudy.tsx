import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, SketchGraph, SketchAxes, InkCurve, InkDashed, Note, Dot, Ring, Hatch, Toggle, curvePoints, fmt, INK_SOFT, ACCENT, MARKER, WASH } from "./sketch";

// The last question of every Maths B final: a full study of one exp/log
// function. Domain, then the limits at the edges (asymptotes), then the sign
// of f′ (the extremum), then the global extrema on the interval the paper gives.
//   type: mathsb-function-study
//   fn: xx | xroot | xex | x2lnx | xemx | lnrecip | xlnx | xminusex
// Every function, interval and verdict is from a past paper (2017 to 2025).

interface Study {
  key: string; label: string; paper: string;
  f: (x: number) => number;
  view: { xMin: number; xMax: number; yMin: number; yMax: number };
  xTicks: number[]; yTicks: number[];
  pieces: [number, number][];          // drawable x-ranges (split at vertical asymptotes)
  vertical: number[]; horizontal: number[];
  openDots: [number, number][];        // limits at the edge that are approached, not reached
  critical: { x: number; kind: "min" | "max" };
  interval: { a: number; b: number; aClosed: boolean; bClosed: boolean; aText: string; bText: string };
  tex: string[];                       // domain, limits, derivative, verdict
  notes: string[];
  best: { x: number; label: string }[];
}

const E = Math.E;
const STUDIES: Study[] = [
  {
    key: "xx", label: "xˣ + 1", paper: "2025 Moed A Q4",
    f: (x) => Math.pow(x, x) + 1,
    view: { xMin: 0, xMax: 1.6, yMin: 0.8, yMax: 3.2 }, xTicks: [0.4, 0.8, 1.2, 1.6], yTicks: [1, 2, 3],
    pieces: [[0.002, 1.6]], vertical: [], horizontal: [], openDots: [[0, 2]],
    critical: { x: 1 / E, kind: "min" },
    interval: { a: 0.4, b: 1, aClosed: true, bClosed: false, aText: "0.4", bText: "1" },
    tex: ["x > 0", "\\lim_{x\\to0^+} e^{x\\ln x} + 1 = e^0 + 1 = 2,\\quad \\lim_{x\\to\\infty} = \\infty", "(x^x)' = x^x(\\ln x + 1) = 0 \\Rightarrow x = \\tfrac1e,\\ f \\approx 1.69", "[0.4, 1):\\ \\min f(0.4) \\approx 1.69,\\ \\text{no max } (f \\to 2)"],
    notes: ["Domain: x > 0 (a variable base must be positive).", "Edges: x ln x → 0 by L'Hôpital, so f → 2 at 0⁺: a hole, not an asymptote. No asymptote at ∞ either.", "Log differentiation: f′ changes from − to + at x = 1/e, a minimum.", "The interval [0.4, 1) starts after the minimum, so f only rises: min at the closed left end, and the value 2 at the open right end is never reached."],
    best: [{ x: 0.4, label: "global min" }],
  },
  {
    key: "xroot", label: "x·e^(−√x)", paper: "2025 Moed B Q4",
    f: (x) => x * Math.exp(-Math.sqrt(x)),
    view: { xMin: 0, xMax: 20, yMin: -0.05, yMax: 0.65 }, xTicks: [2, 4, 8, 12, 16, 20], yTicks: [0.2, 0.4, 0.6],
    pieces: [[0, 20]], vertical: [], horizontal: [0], openDots: [],
    critical: { x: 4, kind: "max" },
    interval: { a: 0, b: 2, aClosed: true, bClosed: false, aText: "0", bText: "2" },
    tex: ["x \\ge 0", "\\lim_{x\\to\\infty} \\frac{x}{e^{\\sqrt x}} \\overset{L'H}{=} 0:\\ \\text{asymptote } y = 0", "f' = e^{-\\sqrt x}\\left(1 - \\tfrac{\\sqrt x}{2}\\right) = 0 \\Rightarrow x = 4,\\ f = 4e^{-2} \\approx 0.54", "[0, 2):\\ \\min f(0) = 0,\\ \\text{no max } (f \\to 2e^{-\\sqrt2})"],
    notes: ["Domain: x ≥ 0 because of the square root.", "At ∞ the exponential wins: f → 0, a horizontal asymptote y = 0.", "f′ is + before x = 4 and − after: a maximum of 4e⁻² ≈ 0.54.", "The maximum at x = 4 is outside [0, 2), so f only rises there: min f(0) = 0, and no max because x = 2 is excluded."],
    best: [{ x: 0, label: "global min" }],
  },
  {
    key: "xex", label: "x·eˣ", paper: "2024 Moed B Q3",
    f: (x) => x * Math.exp(x),
    view: { xMin: -5, xMax: 1, yMin: -0.5, yMax: 1.2 }, xTicks: [-4, -3, -2, -1, 1], yTicks: [-0.4, 0.4, 0.8],
    pieces: [[-5, 0.6]], vertical: [], horizontal: [0], openDots: [],
    critical: { x: -1, kind: "min" },
    interval: { a: -2, b: 0, aClosed: true, bClosed: true, aText: "−2", bText: "0" },
    tex: ["g(x) = f(e^x, 0) = x e^x,\\ \\text{all } x", "\\lim_{x\\to-\\infty} \\frac{x}{e^{-x}} \\overset{L'H}{=} 0:\\ y = 0 \\text{ on the left}", "g' = e^x(x + 1) = 0 \\Rightarrow x = -1,\\ g = -\\tfrac1e", "[-2, 0]:\\ \\min -\\tfrac1e \\text{ at } -1,\\ \\max 0 \\text{ at } 0"],
    notes: ["Built from a surface: g(x) = f(eˣ, 0) = x·eˣ. Defined for every x.", "As x → −∞, x/e^(−x) → 0 by L'Hôpital: horizontal asymptote y = 0 on the left only.", "g′ = eˣ(x + 1): − before −1, + after. A minimum of −1/e.", "A closed interval always has both: compare the critical point with both ends. g(−2) ≈ −0.27, g(−1) ≈ −0.37, g(0) = 0."],
    best: [{ x: -1, label: "global min" }, { x: 0, label: "global max" }],
  },
  {
    key: "x2lnx", label: "x² ln x", paper: "2023 Moed B Q4",
    f: (x) => x * x * Math.log(x),
    view: { xMin: 0, xMax: 1.6, yMin: -0.3, yMax: 1.2 }, xTicks: [0.4, 0.8, 1.2, 1.6], yTicks: [-0.2, 0.4, 0.8],
    pieces: [[0.002, 1.6]], vertical: [], horizontal: [], openDots: [[0, 0]],
    critical: { x: Math.exp(-0.5), kind: "min" },
    interval: { a: 0, b: 1, aClosed: false, bClosed: true, aText: "0", bText: "1" },
    tex: ["x > 0", "\\lim_{x\\to0^+} \\frac{\\ln x}{x^{-2}} \\overset{L'H}{=} \\lim -\\tfrac{x^2}{2} = 0", "f' = x(2\\ln x + 1) = 0 \\Rightarrow x = e^{-1/2},\\ f = -\\tfrac{1}{2e}", "(0, 1]:\\ \\min -\\tfrac{1}{2e} \\text{ at } e^{-1/2},\\ \\max 0 \\text{ at } x = 1"],
    notes: ["Domain: x > 0 for the log.", "0·(−∞) at 0⁺: rewrite as a quotient, L'Hôpital gives 0. A hole at the origin, no vertical asymptote.", "f′ = x(2 ln x + 1): a minimum at x = e^(−1/2) ≈ 0.61.", "On (0, 1] the minimum is inside. The value 0 is reached at the closed end x = 1, so that is the max (the 0 at the open end does not count)."],
    best: [{ x: Math.exp(-0.5), label: "global min" }, { x: 1, label: "global max" }],
  },
  {
    key: "xemx", label: "x·e^(−x)", paper: "2022 Moed B Q4",
    f: (x) => x * Math.exp(-x),
    view: { xMin: -1, xMax: 7, yMin: -0.6, yMax: 0.55 }, xTicks: [1, 2, 3, 4, 5, 6], yTicks: [-0.4, 0.2, 0.4],
    pieces: [[-1, 7]], vertical: [], horizontal: [0], openDots: [],
    critical: { x: 1, kind: "max" },
    interval: { a: 0, b: 7, aClosed: false, bClosed: false, aText: "0", bText: "∞" },
    tex: ["\\text{all } x", "\\lim_{x\\to\\infty} \\frac{x}{e^x} \\overset{L'H}{=} 0:\\ y = 0 \\text{ on the right}", "f' = e^{-x}(1 - x) = 0 \\Rightarrow x = 1,\\ f = \\tfrac1e", "(0, \\infty):\\ \\max \\tfrac1e \\text{ at } 1,\\ \\text{no min}"],
    notes: ["Defined for every x.", "As x → ∞, eˣ beats x: horizontal asymptote y = 0 on the right.", "f′ = e^(−x)(1 − x): + then −, a maximum 1/e at x = 1.", "On (0, ∞) both ends are open and f only approaches 0 there: the max at x = 1 is global, and there is no min."],
    best: [{ x: 1, label: "global max" }],
  },
  {
    key: "lnrecip", label: "ln x + 1/x", paper: "2022 Moed A Q4",
    f: (x) => Math.log(x) + 1 / x,
    view: { xMin: 0, xMax: 6, yMin: 0, yMax: 3.5 }, xTicks: [0.5, 1, 2, 3, 4, 5, 6], yTicks: [1, 2, 3],
    pieces: [[0.28, 6]], vertical: [0], horizontal: [], openDots: [],
    critical: { x: 1, kind: "min" },
    interval: { a: 0.5, b: 6, aClosed: true, bClosed: false, aText: "½", bText: "∞" },
    tex: ["x > 0", "\\lim_{x\\to0^+} \\frac{x\\ln x + 1}{x} = \\tfrac{1}{0^+} = \\infty:\\ x = 0 \\text{ is a VA}", "f' = \\tfrac1x - \\tfrac{1}{x^2} = \\tfrac{x - 1}{x^2} = 0 \\Rightarrow x = 1,\\ f = 1", "[\\tfrac12, \\infty):\\ \\min 1 \\text{ at } 1,\\ \\text{no max } (f \\to \\infty)"],
    notes: ["Domain: x > 0.", "At 0⁺ the 1/x term wins: x = 0 is a vertical asymptote. At ∞, f → ∞: no horizontal asymptote.", "f′ = (x − 1)/x²: a minimum of 1 at x = 1.", "On [½, ∞) the minimum is inside and f(½) ≈ 1.31 is higher, so min 1 at x = 1. f → ∞, so no max."],
    best: [{ x: 1, label: "global min" }],
  },
  {
    key: "xlnx", label: "x / ln x", paper: "2020 Moed A Q4",
    f: (x) => x / Math.log(x),
    view: { xMin: 0, xMax: 8, yMin: -4, yMax: 8 }, xTicks: [1, 2, 3, 4, 6, 8], yTicks: [-4, -2, 2, 4, 6, 8],
    pieces: [[0.01, 0.93], [1.08, 8]], vertical: [1], horizontal: [], openDots: [[0, 0]],
    critical: { x: E, kind: "min" },
    interval: { a: 1.7, b: 8, aClosed: true, bClosed: false, aText: "1.7", bText: "∞" },
    tex: ["x > 0,\\ x \\ne 1", "\\lim_{x\\to1^\\pm} \\frac{x}{\\ln x} = \\pm\\infty:\\ x = 1 \\text{ is a VA},\\quad \\lim_{x\\to0^+} = 0", "f' = \\frac{\\ln x - 1}{\\ln^2 x} = 0 \\Rightarrow x = e,\\ f = e", "[1.7, \\infty):\\ \\min e \\text{ at } e,\\ \\text{no max}"],
    notes: ["Domain: x > 0 for the log, and x ≠ 1 because ln 1 = 0 is in the denominator.", "Either side of x = 1 the function shoots to ∓∞: a vertical asymptote. At 0⁺ it tends to 0 (a hole).", "f′ = (ln x − 1)/ln²x: a local minimum at x = e, value e.", "On [1.7, ∞) the only critical point is the minimum at e, so it is global. f → ∞, so no max."],
    best: [{ x: E, label: "global min" }],
  },
  {
    key: "xminusex", label: "x − eˣ", paper: "2017 Moed A Q2",
    f: (x) => x - Math.exp(x),
    view: { xMin: -3, xMax: 3.2, yMin: -18, yMax: 2 }, xTicks: [-2, -1, 1, 2, 3], yTicks: [-15, -10, -5],
    pieces: [[-3, 3.2]], vertical: [], horizontal: [], openDots: [],
    critical: { x: 0, kind: "max" },
    interval: { a: 0, b: 3, aClosed: true, bClosed: false, aText: "0", bText: "3" },
    tex: ["\\text{all } x", "\\lim_{x\\to\\pm\\infty} (x - e^x) = -\\infty:\\ \\text{no asymptotes}", "f' = 1 - e^x = 0 \\Rightarrow x = 0,\\ f = -1", "[0, 3):\\ \\max -1 \\text{ at } 0,\\ \\text{no min}"],
    notes: ["Defined for every x.", "To the left, x → −∞ dominates; to the right, −eˣ does. Both ends go to −∞: no asymptotes.", "f′ = 1 − eˣ: + then −, a maximum of −1 at x = 0.", "On [0, 3) f is decreasing: the max is the closed left end, and the open right end leaves no min."],
    best: [{ x: 0, label: "global max" }],
  },
];

export default function MathsBFunctionStudy({ fn = "xx" }: { fn?: string }): VNode {
  const [key, setKey] = useState(STUDIES.some((s) => s.key === fn) ? fn : "xx");
  const study = STUDIES.find((s) => s.key === key)!;
  const sketch = useSketch({ stepCount: 4, domains: [study.view], aspect: 0.72, minHeight: 300, maxHeight: 430, maxWidth: 620, padding: { left: 44, bottom: 36, top: 18 } });
  const { show, drawNow, step } = sketch;
  const frame = sketch.frames[0];
  const { f, view, interval } = study;
  const clampY = (y: number) => Math.max(view.yMin - 1, Math.min(view.yMax + 1, y));

  const parts: VNode[] = [<SketchAxes frame={frame} id={`axes-${key}`} xTicks={study.xTicks} yTicks={study.yTicks} xLabel="x" yLabel="y" hideZero />];
  if (step === 0) {
    const domainStart = study.pieces[0][0], domainEnd = study.pieces[study.pieces.length - 1][1];
    for (const v of study.vertical) parts.push(<InkDashed x1={frame.x(v)} y1={frame.top} x2={frame.x(v)} y2={frame.bottom} id={`excluded-${key}-${v}`} color={MARKER.red} width={1.4} dash={5} gap={5} draw={drawNow(0)} />);
    parts.push(<Note x={frame.x((domainStart + domainEnd) / 2)} y={frame.top + 18} text={study.tex[0].includes("all") ? "domain: every x" : "domain"} color={INK_SOFT} anchor="middle" size={17} />);
  }
  const curveColor = show(3) ? MARKER.grey : MARKER.blue;
  const curves = study.pieces.map(([from, to], index) => <InkCurve points={curvePoints(frame, (x) => clampY(f(x)), from, to, 120)} id={`curve-${key}-${index}`} color={curveColor} width={2.4} draw={drawNow(0)} />);
  parts.push(<g clip-path={sketch.clip(0)}>{curves}</g>);
  if (show(1)) {
    for (const v of study.vertical) parts.push(<InkDashed x1={frame.x(v)} y1={frame.top} x2={frame.x(v)} y2={frame.bottom} id={`va-${key}-${v}`} color={MARKER.red} width={1.6} draw={drawNow(1)} />);
    for (const h of study.horizontal) parts.push(<InkDashed x1={frame.left} y1={frame.y(h)} x2={frame.right} y2={frame.y(h)} id={`ha-${key}-${h}`} color={MARKER.red} width={1.6} draw={drawNow(1)} />);
    for (const [x, y] of study.openDots) parts.push(<Dot x={frame.x(x)} y={frame.y(y)} color={MARKER.red} hollow radius={5} />);
  }
  if (show(2)) {
    const c = study.critical;
    parts.push(<Dot x={frame.x(c.x)} y={frame.y(f(c.x))} color={ACCENT} radius={5} />);
    // On the interval step a "global" label sits right next to it: drop this one to avoid a clash.
    const clash = show(3) && study.best.some((best) => Math.abs(frame.x(best.x) - frame.x(c.x)) < 80);
    if (!clash) parts.push(<Note x={frame.x(c.x)} y={frame.y(f(c.x)) + (c.kind === "min" ? 26 : -14)} text={`${c.kind} (${fmt(c.x, 2)}, ${fmt(f(c.x), 2)})`} color={ACCENT} anchor="middle" size={17} />);
    const leftSign = c.kind === "min" ? "f′ < 0" : "f′ > 0", rightSign = c.kind === "min" ? "f′ > 0" : "f′ < 0";
    parts.push(<Note x={frame.x((view.xMin + c.x) / 2 + (study.pieces[0][0] > view.xMin ? study.pieces[0][0] / 2 : 0))} y={frame.bottom - 10} text={leftSign} color={MARKER.purple} anchor="middle" size={16} />);
    parts.push(<Note x={frame.x((c.x + view.xMax) / 2)} y={frame.bottom - 10} text={rightSign} color={MARKER.purple} anchor="middle" size={16} />);
  }
  if (show(3)) {
    const a = Math.max(interval.a, view.xMin), b = Math.min(interval.b, view.xMax);
    parts.push(<Hatch points={[[frame.x(a), frame.top], [frame.x(b), frame.top], [frame.x(b), frame.bottom], [frame.x(a), frame.bottom]]} id={`band-${key}`} wash={WASH.amber} ink={MARKER.amber} gap={14} draw={drawNow(3)} />);
    const from = interval.aClosed ? a : a + 1e-3, to = interval.bClosed ? b : b - 1e-3;
    parts.push(<g clip-path={sketch.clip(0)}><InkCurve points={curvePoints(frame, (x) => clampY(f(x)), Math.max(from, study.pieces[0][0]), to, 90)} id={`active-${key}`} color={MARKER.blue} width={3.2} draw={drawNow(3)} /></g>);
    if (interval.bText !== "∞" && interval.b <= view.xMax) parts.push(<Dot x={frame.x(interval.b)} y={frame.y(clampY(f(interval.b)))} color={MARKER.blue} hollow={!interval.bClosed} radius={5} />);
    if (interval.a >= view.xMin && Number.isFinite(f(interval.a))) parts.push(<Dot x={frame.x(interval.a)} y={frame.y(clampY(f(interval.a)))} color={MARKER.blue} hollow={!interval.aClosed} radius={5} />);
    parts.push(<Note x={frame.x((a + b) / 2)} y={frame.top + 16} text={`${interval.aClosed ? "[" : "("}${interval.aText}, ${interval.bText}${interval.bClosed ? "]" : ")"}`} color={MARKER.amber} anchor="middle" size={19} />);
    for (const best of study.best) {
      parts.push(<Ring x={frame.x(best.x)} y={frame.y(f(best.x))} id={`best-${key}-${best.x}`} color={MARKER.green} draw={drawNow(3)} />);
      parts.push(<Note x={frame.x(best.x) + 12} y={frame.y(f(best.x)) + (best.label.includes("min") ? 22 : -16)} text={best.label} color={MARKER.green} size={17} />);
    }
  }
  return (
    <SketchGraph sketch={sketch} note={study.notes[step]} tex={study.tex[step]} footnote={`f(x) = ${study.label}, from ${study.paper}.`}
      ariaLabel={`Function study of ${study.label}: ${study.notes[step]}`}
      top={<Toggle label="Past-paper function" options={STUDIES.map((s) => ({ key: s.key, label: s.label }))} active={key} onPick={(next) => { setKey(next); sketch.setStep(0); }} />}>
      {parts}
    </SketchGraph>
  );
}
