import { useState } from "preact/hooks";
import type { VNode } from "preact";
import {
  useSketch, useGlide, SketchGraph, SketchAxes, InkCurve, InkDashed, Hatch, Note, Presets, Toggle, Slider,
  curvePoints, fmt, clamp, INK, MARKER, WASH,
} from "./sketch";
import { normalPdf, roundZ, tablePhi } from "./StatsKit";

// Statistics A, Lec 12 (CLT and the law of large numbers), Q19 to Q20 of every
// paper. One observation has SD σ; the average of n has SD σ/√n, so the same
// cut-off is many more standard deviations away. Steps: one observation →
// the average of n → standardize with σ/√n → the tail → explore n and t.
// Defaults are 2023 Moed B Q20: salaries 8,900 ± 2,500, n = 100, more than 9,000.

interface Props { mu?: number; sigma?: number; n?: number; t?: number; }

const NOTES = [
  "One observation: mean μ, standard deviation σ. Wide.",
  "The average of n observations has the same centre but SD σ/√n. It is much narrower.",
  "Standardize with the SD of the AVERAGE, σ/√n, not σ.",
  "The shaded tail is the answer. The same cut-off is far less likely for an average than for one person.",
  "Your turn. Grow n and watch the average pile up on μ: that is the law of large numbers.",
];

export default function StatsCltAverage({ mu: mu0 = 8900, sigma: sigma0 = 2500, n: n0 = 100, t: t0 = 9000 }: Props): VNode {
  const [target, setTarget] = useState({ n: n0, t: t0 });
  const [tail, setTail] = useState<"right" | "left">("right");
  const sketch = useSketch({
    stepCount: NOTES.length,
    domains: [{ xMin: mu0 - 3 * sigma0, xMax: mu0 + 3 * sigma0, yMax: 1 }],
    padding: { left: 16, bottom: 50, top: 22 },
    aspect: 0.55,
  });
  const shown = useGlide(target, sketch.dragging !== null);
  const { step, narrow } = sketch;
  const show = sketch.show, drawNow = sketch.drawNow;
  const exploring = step === NOTES.length - 1;
  const n = Math.max(1, Math.round(shown.n));
  const se = sigma0 / Math.sqrt(n);
  const base = sketch.frames[0];
  const xMin = mu0 - 3 * sigma0, xMax = mu0 + 3 * sigma0;
  // Once the average is drawn, scale to its (taller) peak; before that, to one observation.
  const yMax = (show(1) ? normalPdf(mu0, mu0, se) : normalPdf(mu0, mu0, sigma0)) * 1.18;
  const frame = { ...base, xMin, xMax, yMin: 0, yMax, x: base.x, y: (value: number) => base.bottom - (value / yMax) * (base.bottom - base.top) };
  const toX = frame.x, toY = frame.y;
  const single = (x: number) => normalPdf(x, mu0, sigma0);
  const average = (x: number) => normalPdf(x, mu0, se);

  const cut = clamp(shown.t, xMin, xMax);
  const zAverage = roundZ((cut - mu0) / se);
  const zSingle = roundZ((cut - mu0) / sigma0);
  const tailArea = (z: number) => {
    const left = tablePhi(z);
    return tail === "right" || !exploring ? Math.round((1 - left) * 10000) / 10000 : left;
  };
  const pAverage = tailArea(zAverage), pSingle = tailArea(zSingle);
  const rightTail = tail === "right" || !exploring;

  const plot: VNode[] = [];
  if (show(3)) {
    const [from, to] = rightTail ? [cut, xMax] : [xMin, cut];
    if (to > from) {
      const points: [number, number][] = [[toX(from), toY(0)], ...curvePoints(frame, average, from, to, 60), [toX(to), toY(0)]];
      plot.push(<Hatch points={points} id={`${sketch.uid}-tail`} wash={WASH.red} ink={MARKER.red} draw={drawNow(3)} />);
    }
  }
  plot.push(<InkCurve points={curvePoints(frame, single, xMin, xMax, 80)} id="single" color={show(1) ? MARKER.grey : INK} width={show(1) ? 1.8 : 2.6} draw={drawNow(0)} />);
  if (show(1)) plot.push(<InkCurve points={curvePoints(frame, average, Math.max(xMin, mu0 - 4.5 * se), Math.min(xMax, mu0 + 4.5 * se), 120)} id="average" color={MARKER.blue} width={2.6} draw={drawNow(1)} />);
  if (show(2)) plot.push(<InkDashed x1={toX(cut)} y1={toY(Math.max(average(cut), single(cut))) - 20} x2={toX(cut)} y2={toY(0)} id="cut" color={MARKER.purple} width={2} dash={6} gap={4} draw={drawNow(2)} />);

  const ticks = (narrow ? [-2, 0, 2] : [-3, -2, -1, 0, 1, 2, 3]).map((k) => mu0 + k * sigma0);
  const drawing: VNode[] = [
    <SketchAxes frame={frame} id="clt-axes" xTicks={ticks} formatXTick={(value) => fmt(value, 2)} />,
    <g clip-path={sketch.clip()}>{plot}</g>,
  ];
  if (!show(1)) drawing.push(<Note x={toX(mu0 + sigma0)} y={toY(single(mu0 + sigma0)) - 10} text="one observation" color={INK} size={17} draw={drawNow(0)} />);
  if (show(1)) {
    drawing.push(<Note x={toX(mu0 + 1.6 * sigma0)} y={toY(single(mu0 + 1.6 * sigma0)) - 10} text="one" color={MARKER.grey} size={16} />);
    drawing.push(<Note x={toX(mu0) + 8} y={toY(average(mu0)) + 4} text={`average of ${n}`} color={MARKER.blue} size={17} draw={drawNow(1)} />);
  }
  if (show(2)) drawing.push(<Note x={toX(cut)} y={frame.bottom + 36} text={`t = ${fmt(shown.t, 2)}`} color={MARKER.purple} anchor="middle" size={17} draw={drawNow(2)} />);

  const sign = rightTail ? ">" : "<";
  const TEX = [
    `X_i:\\ \\mu = ${fmt(mu0, 2)},\\quad \\sigma = ${fmt(sigma0, 2)}`,
    `\\bar X \\sim N\\!\\left(\\mu,\\ \\tfrac{\\sigma^2}{n}\\right),\\quad SD(\\bar X) = \\frac{${fmt(sigma0, 2)}}{\\sqrt{${n}}} = ${fmt(se, 2)}`,
    `z = \\frac{${fmt(shown.t, 2)} - ${fmt(mu0, 2)}}{${fmt(se, 2)}} = ${fmt(zAverage, 2)}\\qquad (\\text{one person: } z = ${fmt(zSingle, 2)})`,
    `P(\\bar X > ${fmt(shown.t, 2)}) = 1 - \\Phi(${fmt(zAverage, 2)}) = \\textcolor{${MARKER.red}}{${pAverage}}\\qquad (\\text{one person: } ${pSingle})`,
    `n = ${n}:\\ SD(\\bar X) = ${fmt(se, 2)},\\ z = ${fmt(zAverage, 2)},\\ P(\\bar X ${sign} ${fmt(shown.t, 2)}) = \\textcolor{${MARKER.red}}{${pAverage}}\\ \\ (\\text{one: } ${pSingle})`,
  ];

  const update = (changes: Partial<typeof target>) => setTarget((current) => ({ ...current, ...changes }));

  return (
    <SketchGraph
      sketch={sketch}
      note={NOTES[step]}
      tex={TEX[step]}
      ariaLabel={`Central limit theorem. One observation has mean ${fmt(mu0, 2)} and SD ${fmt(sigma0, 2)}. The average of ${n} has SD ${fmt(se, 2)}. Probability the average is ${rightTail ? "above" : "below"} ${fmt(shown.t, 2)} is ${pAverage}; for one observation ${pSingle}.`}
      top={exploring ? <Toggle label="Tail" active={tail} onPick={(key) => setTail(key as "right" | "left")} options={[{ key: "right", label: "average > t" }, { key: "left", label: "average < t" }]} /> : undefined}
      explore={<>
        <div class="graph-sliders">
          <Slider label="sample size n" value={target.n} min={1} max={400} step={1} onInput={(value) => update({ n: value })} />
          <Slider label="cut-off t" value={target.t} min={Math.round(mu0 - 2 * sigma0)} max={Math.round(mu0 + 2 * sigma0)} step={Math.max(1, Math.round(sigma0 / 50))} onInput={(value) => update({ t: value })} />
        </div>
        <Presets presets={[
          { label: "n = 1", apply: () => update({ n: 1 }) },
          { label: "n = 30", apply: () => update({ n: 30 }) },
          { label: "n = 400", apply: () => update({ n: 400 }) },
          { label: "Reset", apply: () => { setTarget({ n: n0, t: t0 }); setTail("right"); } },
        ]} />
      </>}
    >
      {drawing}
    </SketchGraph>
  );
}
