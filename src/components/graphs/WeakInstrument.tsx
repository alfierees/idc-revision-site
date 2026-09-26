import { useMemo, useState } from "preact/hooks";
import type { VNode } from "preact";
import { Slider } from "./plot";
import { useSketch, SketchGraph, SketchAxes, InkLine, InkDashed, Note, Scatter, Presets, fmt, INK_SOFT, ACCENT, MARKER, WASH } from "./sketch";
import { normalSampler, fitLine } from "./stats";

// Weak instruments (Lecture 4), by simulation. Each sample: Z ~ N(0,1), an
// unobserved confounder u, X = γZ + u + e, Y = 1·X + u + v (so OLS is biased
// up). Left: one sample's first stage. Right: β̂_IV = cov(Y,Z)/cov(X,Z) across
// 300 samples. Strong γ ⇒ tight around the truth; weak γ ⇒ wild.

const TRUE_EFFECT = 1, SAMPLE_SIZE = 100, SAMPLE_COUNT = 300;
const BIN_MIN = -2, BIN_MAX = 4, BIN_COUNT = 30;

function simulate(strength: number) {
  const draw = normalSampler(4242);
  const estimates: number[] = [];
  let firstSample: { instrument: number[]; regressor: number[] } | null = null;
  let firstStageF = 0;
  for (let sample = 0; sample < SAMPLE_COUNT; sample++) {
    const instrument: number[] = [], regressor: number[] = [], outcome: number[] = [];
    for (let row = 0; row < SAMPLE_SIZE; row++) {
      const z = draw(), confounder = draw();
      const x = strength * z + confounder + draw();
      instrument.push(z); regressor.push(x); outcome.push(TRUE_EFFECT * x + confounder + draw());
    }
    const covariance = (a: number[], b: number[]) => {
      const meanA = a.reduce((s, v) => s + v, 0) / a.length, meanB = b.reduce((s, v) => s + v, 0) / b.length;
      return a.reduce((s, v, i) => s + (v - meanA) * (b[i] - meanB), 0) / (a.length - 1);
    };
    estimates.push(covariance(outcome, instrument) / covariance(regressor, instrument));
    if (sample === 0) {
      firstSample = { instrument, regressor };
      const fit = fitLine(instrument, regressor);
      firstStageF = (fit.rSquared / (1 - fit.rSquared)) * (SAMPLE_SIZE - 2);
    }
  }
  const counts = new Array(BIN_COUNT).fill(0);
  let outside = 0;
  for (const estimate of estimates) {
    const bin = Math.floor(((estimate - BIN_MIN) / (BIN_MAX - BIN_MIN)) * BIN_COUNT);
    if (bin >= 0 && bin < BIN_COUNT) counts[bin]++; else outside++;
  }
  const sorted = [...estimates].sort((a, b) => a - b);
  const spread = sorted[Math.floor(SAMPLE_COUNT * 0.9)] - sorted[Math.floor(SAMPLE_COUNT * 0.1)];
  return { counts, outside, firstSample: firstSample!, firstStageF, spread };
}

const NOTES = [
  "A strong instrument: Z moves X a lot. One simulated sample's first stage.",
  "Redo the study 300 times: the IV estimates bunch tightly around the true effect of 1.",
  "Now a weak instrument: Z barely moves X. The first-stage F falls below 10.",
  "The IV estimates scatter wildly: a tiny denominator cov(X, Z) blows up every bit of noise.",
  "Your turn. Change the instrument's strength.",
];

export default function WeakInstrument(): VNode {
  const [exploreStrength, setExploreStrength] = useState(0.6);
  const sketch = useSketch({
    stepCount: NOTES.length,
    domains: [{ xMin: -3, xMax: 3, yMin: -6, yMax: 6 }, { xMin: BIN_MIN, xMax: BIN_MAX, yMax: 0.34 }],
    aspect: 0.82, minHeight: 250, maxHeight: 320, maxWidth: 760,
    padding: { left: 40, bottom: 40, top: 16 },
    panelTitles: ["First stage: X on Z (one sample)", "β̂ IV across 300 samples"],
  });
  const { step } = sketch;
  const strength = step === 4 ? exploreStrength : step >= 2 ? 0.15 : 1.2;
  const result = useMemo(() => simulate(strength), [strength]);
  const [left, right] = sketch.frames;
  const fit = fitLine(result.firstSample.instrument, result.firstSample.regressor);
  const showDistribution = step === 1 || step >= 3;
  const isWeak = result.firstStageF < 10;

  const TEX = [
    `\\hat\\gamma = ${fmt(fit.slope, 2)},\\quad F = ${fmt(result.firstStageF, 0)}`,
    `\\hat\\beta_{IV} = \\frac{\\operatorname{cov}(y, z)}{\\operatorname{cov}(x, z)}:\\; \\text{80\\% within } \\pm ${fmt(result.spread / 2, 2)} \\text{ of the centre}`,
    `\\hat\\gamma = ${fmt(fit.slope, 2)},\\quad F = ${fmt(result.firstStageF, 1)} < 10`,
    `\\text{80\\% range width } ${fmt(result.spread, 2)},\\; ${result.outside} \\text{ of } 300 \\text{ off the chart}`,
    `\\gamma = ${fmt(strength, 2)}:\\; F = ${fmt(result.firstStageF, 1)}${isWeak ? " < 10 \\text{ (weak)}" : " \\ge 10"},\\; \\text{80\\% width } ${fmt(result.spread, 2)}`,
  ];

  const leftParts: VNode[] = [<SketchAxes frame={left} id="left-axes" xTicks={[-2, 0, 2]} yTicks={[-4, 0, 4]} xLabel="Z" yLabel="X" hideZero={false} />];
  const points: [number, number][] = result.firstSample.instrument.map((z, index) => [left.x(z), left.y(Math.max(-6, Math.min(6, result.firstSample.regressor[index])))]);
  leftParts.push(<g clip-path={sketch.clip(0)}>
    <Scatter points={points} color={isWeak ? MARKER.amber : MARKER.blue} radius={2.6} opacity={0.6} />
    <InkLine x1={left.x(-3)} y1={left.y(fit.intercept - 3 * fit.slope)} x2={left.x(3)} y2={left.y(fit.intercept + 3 * fit.slope)} id={`first-stage-${strength}`} color={isWeak ? MARKER.red : MARKER.blue} width={2.4} />
  </g>);
  leftParts.push(<Note x={left.left + 8} y={left.top + 10} text={`F = ${fmt(result.firstStageF, 1)}${isWeak ? "  weak!" : ""}`} color={isWeak ? MARKER.red : MARKER.green} size={19} />);

  const rightParts: VNode[] = [<SketchAxes frame={right} id="right-axes" xTicks={[-2, -1, 0, 1, 2, 3, 4]} yTicks={[0.1, 0.2, 0.3]} xLabel="β̂ IV" />];
  if (showDistribution) {
    const binWidth = (BIN_MAX - BIN_MIN) / BIN_COUNT;
    result.counts.forEach((count, bin) => {
      if (!count) return;
      const share = count / SAMPLE_COUNT;
      const x0 = right.x(BIN_MIN + bin * binWidth), x1 = right.x(BIN_MIN + (bin + 1) * binWidth);
      rightParts.push(<rect x={x0 + 0.5} y={right.y(share)} width={Math.max(0, x1 - x0 - 1)} height={right.bottom - right.y(share)} style={`fill:${isWeak ? WASH.amber : WASH.blue};stroke:${isWeak ? MARKER.amber : MARKER.blue};stroke-width:1.2`} />);
    });
  }
  rightParts.push(<InkDashed x1={right.x(TRUE_EFFECT)} y1={right.top} x2={right.x(TRUE_EFFECT)} y2={right.bottom} id="truth" color={MARKER.green} width={1.8} dash={5} gap={4} />);
  rightParts.push(<Note x={right.x(TRUE_EFFECT) + 6} y={right.top + 10} text="true effect 1" color={MARKER.green} size={17} />);
  if (showDistribution && result.outside > 0) rightParts.push(<Note x={right.right - 4} y={right.top + 30} text={`+${result.outside} off the chart`} color={MARKER.red} anchor="end" size={16} />);
  if (!showDistribution) rightParts.push(<Note x={(right.left + right.right) / 2} y={(right.top + right.bottom) / 2} text="(press Next)" color={INK_SOFT} anchor="middle" size={18} />);

  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} footnote="Simulated: 300 samples of 100 observations, true effect β = 1."
      ariaLabel={`Weak instruments: with instrument strength ${fmt(strength, 2)} the first-stage F is ${fmt(result.firstStageF, 1)} and IV estimates spread over a width of ${fmt(result.spread, 2)}.`}
      explore={<>
        <div class="graph-sliders"><Slider label="instrument strength γ" value={exploreStrength} min={0.05} max={1.5} step={0.05} onInput={setExploreStrength} /></div>
        <Presets presets={[{ label: "Strong (γ = 1.2)", apply: () => setExploreStrength(1.2) }, { label: "Borderline", apply: () => setExploreStrength(0.45) }, { label: "Weak (γ = 0.1)", apply: () => setExploreStrength(0.1) }]} />
      </>}>
      <g>{leftParts}</g>
      <g>{rightParts}</g>
    </SketchGraph>
  );
}
