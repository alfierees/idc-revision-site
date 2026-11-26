import { useState } from "preact/hooks";
import type { VNode } from "preact";
import {
  useSketch, useGlide, SketchGraph, SketchAxes, InkCurve, InkLine, InkDashed, Note, Dot, Ring, Toggle, Slider, Presets,
  curvePoints, fmt, INK_SOFT, MARKER,
} from "./sketch";

// Principles of Macro: the "will capital per worker grow?" question, asked in
// every paper. Compare saving per worker s·f(k) with the break-even line
// (δ + n)·k at the k the question gives.
//   type: macro-k-check
//   paper: a25 | b25 | practice | sample   (which past-paper question opens)
// Steps: saving per worker → break-even line → compare at the given k →
// the verdict and where k heads → explore s and δ + n.

interface Props { paper?: string; }
interface Case { key: string; label: string; source: string; A: number; alpha: number; s: number; delta: number; n: number; k: number; }

const CASES: Case[] = [
  { key: "a25", label: "2025 A Q14", source: "2025 Moed A Q14", A: 10, alpha: 0.5, s: 0.05, delta: 0.03, n: 0.02, k: 100 },
  { key: "b25", label: "2025 B Q5", source: "2025 Moed B Q5", A: 625, alpha: 0.25, s: 0.1, delta: 0.02, n: 0.03, k: 256 },
  { key: "practice", label: "Practice Q13", source: "Practice questions Q13", A: 5, alpha: 0.5, s: 0.2, delta: 0.1, n: 0.05, k: 100 },
  { key: "sample", label: "Sample Q16", source: "Sample exam Q16", A: 1, alpha: 0.4, s: 0.2, delta: 0.1, n: 0, k: 1 },
];

const NOTES = [
  "Households save a fixed share s of output, so saving per worker is s·f(k): a curve that flattens (diminishing returns).",
  "The straight line is what it costs just to stand still: replace worn-out capital (δ) and equip new workers (n).",
  "Read both heights at the k the question gives.",
  "Saving above the line: k grows. Below: k falls. Equal: steady state. Either way k heads for k*.",
  "Your turn. Move s or δ + n and watch the verdict and k* change.",
];

const steadyCapital = (c: { A: number; alpha: number; s: number; breakEven: number }) =>
  c.breakEven > 0 ? Math.pow((c.s * c.A) / c.breakEven, 1 / (1 - c.alpha)) : Infinity;

export default function MacroKCheck({ paper = "a25" }: Props): VNode {
  const start = CASES.find((c) => c.key === paper) ?? CASES[0];
  const [pick, setPick] = useState(start.key);
  const chosen = CASES.find((c) => c.key === pick) ?? start;
  const [target, setTarget] = useState({ s: chosen.s, breakEven: chosen.delta + chosen.n });
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMin: 0, xMax: 1, yMax: 1 }], maxWidth: 680, padding: { left: 52, bottom: 44, top: 18 } });
  const { step, show, drawNow, narrow } = sketch;
  const exploring = step === NOTES.length - 1;
  const live = exploring ? target : { s: chosen.s, breakEven: chosen.delta + chosen.n };
  const shown = useGlide(live, false);

  // The window is fixed per question, so sliders move the curves, not the axes.
  const k0 = chosen.k;
  const kStar0 = steadyCapital({ A: chosen.A, alpha: chosen.alpha, s: chosen.s, breakEven: chosen.delta + chosen.n });
  const xMax = 1.6 * Math.max(k0, Math.min(kStar0, 3 * k0));
  const f = (k: number) => chosen.A * Math.pow(Math.max(k, 1e-9), chosen.alpha);
  const yMax = 1.3 * Math.max(chosen.s * f(xMax), (chosen.delta + chosen.n) * xMax);
  const base = sketch.frames[0];
  const frame = {
    ...base, xMin: 0, xMax, yMin: 0, yMax,
    x: (value: number) => base.left + (value / xMax) * (base.right - base.left),
    y: (value: number) => base.bottom - (value / yMax) * (base.bottom - base.top),
  };

  const saving = (k: number) => shown.s * f(k);
  const needed = (k: number) => shown.breakEven * k;
  const kStar = steadyCapital({ A: chosen.A, alpha: chosen.alpha, s: shown.s, breakEven: shown.breakEven });
  const sy = saving(k0), be = needed(k0), dk = sy - be;
  const tol = Math.max(Math.abs(be), 1e-9) * 0.005;
  const verdict = Math.abs(dk) <= tol ? "steady" : dk > 0 ? "grows" : "falls";
  const verdictText = verdict === "steady" ? "Δk = 0: already in steady state, k stays put" : verdict === "grows" ? "Δk > 0: k grows towards k*" : "Δk < 0: k falls towards k*";
  const verdictColor = verdict === "falls" ? MARKER.red : MARKER.green;
  const heading = useGlide({ k: step >= 3 ? Math.min(kStar, xMax * 0.97) : k0 }, false);

  const tick = (value: number) => fmt(value, value >= 100 ? 0 : 2);
  const plot: VNode[] = [
    <InkCurve points={curvePoints(frame, saving, xMax * 0.002, xMax, 80)} id={`kc-save-${pick}`} color={MARKER.green} width={2.5} draw={drawNow(0)} />,
  ];
  if (show(1)) plot.push(<InkLine x1={frame.x(0)} y1={frame.y(0)} x2={frame.x(xMax)} y2={frame.y(needed(xMax))} id={`kc-be-${pick}`} color={MARKER.red} width={2.3} draw={drawNow(1)} />);

  const drawing: VNode[] = [
    <SketchAxes frame={frame} id={`kc-axes-${pick}`} xTicks={[k0]} formatXTick={tick} xLabel="capital per worker k" yLabel="per worker" />,
    <g clip-path={sketch.clip()}>{plot}</g>,
    <Note x={frame.x(xMax * 0.97)} y={frame.y(saving(xMax * 0.97)) + 20} text="s·f(k)" color={MARKER.green} anchor="end" size={18} draw={drawNow(0)} />,
  ];
  if (show(1)) {
    const labelK = Math.min(xMax * 0.8, (yMax * 0.9) / Math.max(shown.breakEven, 1e-9));
    drawing.push(<Note x={frame.x(labelK) - 6} y={frame.y(needed(labelK)) - 10} text="(δ + n)k" color={MARKER.red} anchor="end" size={17} draw={drawNow(1)} />);
  }
  if (show(2)) {
    drawing.push(<InkDashed x1={frame.x(k0)} y1={frame.y(Math.max(sy, be))} x2={frame.x(k0)} y2={frame.bottom} id={`kc-k0-${pick}`} color={INK_SOFT} width={1.3} dash={4} gap={4} draw={drawNow(2)} />);
    drawing.push(<Dot x={frame.x(k0)} y={frame.y(sy)} color={MARKER.green} draw={drawNow(2)} />);
    drawing.push(<Dot x={frame.x(k0)} y={frame.y(be)} color={MARKER.red} draw={drawNow(2)} />);
    if (!narrow) {
      drawing.push(<Note x={frame.x(k0) + 10} y={frame.y(sy) + (sy >= be ? -8 : 18)} text={`sy = ${tick(sy)}`} color={MARKER.green} size={16} draw={drawNow(2)} />);
      if (verdict !== "steady") drawing.push(<Note x={frame.x(k0) + 10} y={frame.y(be) + (be > sy ? -8 : 18)} text={`(δ+n)k = ${tick(be)}`} color={MARKER.red} size={16} draw={drawNow(2)} />);
    }
  }
  if (show(3)) {
    if (kStar <= xMax) drawing.push(<Ring x={frame.x(kStar)} y={frame.y(needed(kStar))} id={`kc-star-${pick}`} color={MARKER.purple} draw={drawNow(3)} />);
    if (verdict !== "steady") drawing.push(<Dot x={frame.x(heading.k)} y={frame.bottom} color={MARKER.purple} />);
    drawing.push(<Note x={kStar <= xMax ? frame.x(Math.min(kStar, xMax * 0.8)) : frame.right - 4} y={frame.bottom - 10} text={kStar <= xMax ? `k* = ${tick(kStar)}` : `k* = ${tick(kStar)} →`} color={MARKER.purple} anchor={kStar <= xMax ? "middle" : "end"} size={16} draw={drawNow(3)} />);
  }

  const sTex = fmt(shown.s, 3), beTex = fmt(shown.breakEven, 3);
  const prod = `${chosen.A}\\cdot ${k0}^{${chosen.alpha}}`;
  const TEX = [
    `s\\,f(k) = ${sTex}\\cdot ${chosen.A}\\,k^{${chosen.alpha}}`,
    `(\\delta + n)\\,k = (${fmt(chosen.delta, 3)} + ${fmt(chosen.n, 3)})\\,k = ${beTex}\\,k`,
    `k = ${k0}:\\quad y = ${prod} = ${tick(f(k0))},\\quad sy = ${tick(sy)},\\quad (\\delta+n)k = ${tick(be)}`,
    `\\Delta k = ${tick(sy)} - ${tick(be)} = \\textcolor{${verdictColor}}{${tick(dk)}},\\quad k^* = \\left(\\tfrac{sA}{\\delta + n}\\right)^{1/(1-\\alpha)} = ${tick(kStar)}`,
    `\\Delta k = ${tick(sy)} - ${tick(be)} = \\textcolor{${verdictColor}}{${tick(dk)}},\\quad k^* = ${tick(kStar)}`,
  ];

  const choose = (key: string) => {
    const next = CASES.find((c) => c.key === key) ?? CASES[0];
    setPick(next.key);
    setTarget({ s: next.s, breakEven: next.delta + next.n });
  };

  return (
    <SketchGraph
      sketch={sketch}
      note={step >= 3 ? `${NOTES[step]} Here: ${verdictText}.` : NOTES[step]}
      tex={TEX[step]}
      footnote={`${chosen.source}: Y = ${chosen.A}K^${chosen.alpha}L^${fmt(1 - chosen.alpha, 2)}, s = ${chosen.s}, δ = ${chosen.delta}, n = ${chosen.n}, k = ${k0}.`}
      ariaLabel={`Solow check for ${chosen.source}. At k = ${k0}, saving per worker ${tick(sy)} against break-even ${tick(be)}: ${verdictText}. Steady state k* = ${tick(kStar)}.`}
      top={<Toggle label="Past-paper question" active={pick} onPick={choose} options={CASES.map((c) => ({ key: c.key, label: c.label }))} />}
      explore={<>
        <div class="graph-sliders">
          <Slider label="savings rate s" value={target.s} min={0.01} max={0.5} step={0.01} onInput={(value) => setTarget((t) => ({ ...t, s: value }))} />
          <Slider label="δ + n" value={target.breakEven} min={0.01} max={0.3} step={0.005} onInput={(value) => setTarget((t) => ({ ...t, breakEven: value }))} />
        </div>
        <Presets presets={[{ label: "Reset", apply: () => setTarget({ s: chosen.s, breakEven: chosen.delta + chosen.n }) }]} />
      </>}
    >
      {drawing}
    </SketchGraph>
  );
}
