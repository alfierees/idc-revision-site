import { useMemo, useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, SketchGraph, SketchAxes, InkCurve, InkLine, Note, Scatter, Presets, fmt, INK_SOFT, MARKER, Slider } from "./sketch";
import { normalSampler, fitLine } from "./stats";

// Serial correlation (Lecture 6): residuals that remember the past.
// u_t = ρ·u_{t−1} + e_t, 120 periods (simulated). Left: over time — long runs
// above and below zero when ρ > 0. Right: u_t against u_{t−1}; the slope ≈ ρ
// is the tell-tale sign. Naive standard errors come out too small.

const PERIODS = 120;

function simulateResiduals(rho: number) {
  const draw = normalSampler(606);
  const residuals: number[] = [0];
  for (let period = 1; period < PERIODS; period++) residuals.push(rho * residuals[period - 1] + draw() * Math.sqrt(1 - Math.min(rho * rho, 0.95)) * 1.1);
  const lagged = residuals.slice(0, -1), current = residuals.slice(1);
  return { residuals, lagged, current, fit: fitLine(lagged, current) };
}

const NOTES = [
  "Independent errors (ρ = 0): residuals hop around zero with no memory.",
  "Serially correlated errors (ρ = 0.7): long runs above and below zero.",
  "Plot each residual against the one before: a clear upward slope, roughly ρ.",
  "Your turn. Change ρ.",
];

export default function SerialCorrelation(): VNode {
  const [exploreRho, setExploreRho] = useState(0.7);
  const sketch = useSketch({
    stepCount: NOTES.length,
    domains: [{ xMax: PERIODS, yMin: -3.5, yMax: 3.5 }, { xMin: -3.5, xMax: 3.5, yMin: -3.5, yMax: 3.5 }],
    aspect: 0.8, minHeight: 240, maxHeight: 320, maxWidth: 760,
    padding: { left: 36, bottom: 40, top: 16 },
    panelTitles: ["Residuals over time", "u(t) against u(t − 1)"],
  });
  const { show, drawNow, step } = sketch;
  const rho = step === 0 ? 0 : step === 3 ? exploreRho : 0.7;
  const simulation = useMemo(() => simulateResiduals(rho), [rho]);
  const [left, right] = sketch.frames;
  const TEX = [
    "u_t = e_t",
    "u_t = 0.7\\,u_{t-1} + e_t",
    `\\widehat{\\operatorname{slope}} = ${fmt(simulation.fit.slope, 2)} \\approx \\rho`,
    `\\rho = ${fmt(rho, 2)}:\\; \\widehat{\\operatorname{slope}} = ${fmt(simulation.fit.slope, 2)}`,
  ];
  const leftParts: VNode[] = [<SketchAxes frame={left} id="left-axes" xTicks={[0, 40, 80, 120]} yTicks={[-3, 0, 3]} xLabel="t" hideZero={false} />];
  leftParts.push(<InkCurve points={simulation.residuals.map((value, period) => [left.x(period), left.y(Math.max(-3.5, Math.min(3.5, value)))] as [number, number])} id={`series-${rho}`} color={rho > 0.2 ? MARKER.red : MARKER.blue} width={1.4} draw={drawNow(0) || drawNow(1)} />);
  const rightParts: VNode[] = [<SketchAxes frame={right} id="right-axes" xTicks={[-3, 0, 3]} yTicks={[-3, 0, 3]} hideZero={false} />];
  if (show(2)) {
    rightParts.push(<Scatter points={simulation.lagged.map((value, index) => [right.x(Math.max(-3.5, Math.min(3.5, value))), right.y(Math.max(-3.5, Math.min(3.5, simulation.current[index])))])} color={MARKER.red} radius={2.5} opacity={0.6} draw={drawNow(2)} />);
    rightParts.push(<InkLine x1={right.x(-3.5)} y1={right.y(simulation.fit.intercept - 3.5 * simulation.fit.slope)} x2={right.x(3.5)} y2={right.y(simulation.fit.intercept + 3.5 * simulation.fit.slope)} id={`fit-${rho}`} color={INK_SOFT} width={2.2} draw={drawNow(2)} />);
    rightParts.push(<Note x={right.left + 8} y={right.top + 10} text={`slope ≈ ${fmt(simulation.fit.slope, 2)}`} color={MARKER.red} size={18} draw={drawNow(2)} />);
  } else {
    rightParts.push(<Note x={(right.left + right.right) / 2} y={(right.top + right.bottom) / 2} text="(step 3)" color={INK_SOFT} anchor="middle" size={18} />);
  }
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} footnote="Simulated residuals, 120 periods."
      ariaLabel={`Serial correlation with rho ${fmt(rho, 2)}: the residual scatter slope is ${fmt(simulation.fit.slope, 2)}.`}
      explore={<>
        <div class="graph-sliders"><Slider label="ρ" value={exploreRho} min={-0.9} max={0.95} step={0.05} onInput={setExploreRho} /></div>
        <Presets presets={[{ label: "No memory (ρ = 0)", apply: () => setExploreRho(0) }, { label: "Strong (ρ = 0.9)", apply: () => setExploreRho(0.9) }, { label: "Negative (ρ = −0.6)", apply: () => setExploreRho(-0.6) }]} />
      </>}>
      <g>{leftParts}</g>
      <g>{rightParts}</g>
    </SketchGraph>
  );
}
