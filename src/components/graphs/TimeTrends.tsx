import { useMemo, useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, SketchGraph, SketchAxes, InkCurve, InkLine, InkDashed, Note, Scatter, Presets, fmt, INK_SOFT, MARKER } from "./sketch";
import { normalSampler, fitLine } from "./stats";

// Time trends (Lecture 7), with simulated series.
//   type: time-trends
//   mode: spurious | detrending
// spurious   — two independent series that both drift upward: regressing one on
//              the other gives a high R² for no reason. "New pair" redraws them.
// detrending — step 1: fit a linear trend; step 2: keep only the deviations
//              around it, the part a regression should actually explain.

interface Props { mode?: string; }

const PERIODS = 80;

export default function TimeTrends({ mode = "spurious" }: Props): VNode {
  return mode === "detrending" ? <Detrending /> : <Spurious />;
}

function drifting(seed: number, drift: number, noise: number) {
  const draw = normalSampler(seed);
  const series: number[] = [0];
  for (let period = 1; period < PERIODS; period++) series.push(series[period - 1] + drift + draw() * noise);
  return series;
}

function Spurious(): VNode {
  const [seed, setSeed] = useState(11);
  const { seriesA, seriesB, fit, detrendedFit } = useMemo(() => {
    const first = drifting(seed, 0.5, 1.4), second = drifting(seed + 1000, 0.45, 1.4);
    const periods = first.map((_, period) => period);
    const trendA = fitLine(periods, first), trendB = fitLine(periods, second);
    const residualA = first.map((value, period) => value - trendA.intercept - trendA.slope * period);
    const residualB = second.map((value, period) => value - trendB.intercept - trendB.slope * period);
    return { seriesA: first, seriesB: second, fit: fitLine(second, first), detrendedFit: fitLine(residualB, residualA) };
  }, [seed]);
  const NOTES = [
    "Two series that have nothing to do with each other: independent random walks, both drifting upward.",
    "Regress one on the other: a steep line and a huge R². It's the shared trend, not a relationship.",
    "Take the trends out and the 'relationship' vanishes.",
    "Your turn. Draw a new pair: the R² stays high almost every time.",
  ];
  const TEX = [
    "A_t = A_{t-1} + 0.5 + e_t,\\quad B_t = B_{t-1} + 0.45 + v_t",
    `R^2 = ${fmt(fit.rSquared, 2)}`,
    `R^2_{\\text{detrended}} = ${fmt(detrendedFit.rSquared, 2)}`,
    `R^2 = ${fmt(fit.rSquared, 2)},\\quad \\text{detrended } R^2 = ${fmt(detrendedFit.rSquared, 2)}`,
  ];
  const allValues = [...seriesA, ...seriesB];
  const low = Math.min(...allValues) - 2, high = Math.max(...allValues) + 2;
  const sketch = useSketch({
    stepCount: NOTES.length,
    domains: [{ xMax: PERIODS, yMin: low, yMax: high }, { xMin: Math.min(...seriesB) - 2, xMax: Math.max(...seriesB) + 2, yMin: Math.min(...seriesA) - 2, yMax: Math.max(...seriesA) + 2 }],
    aspect: 0.8, minHeight: 240, maxHeight: 320, maxWidth: 760, padding: { left: 36, bottom: 40, top: 16 },
    panelTitles: ["Both series over time", "Regress A on B"],
  });
  const { show, drawNow, step } = sketch;
  const [left, right] = sketch.frames;
  const leftParts: VNode[] = [<SketchAxes frame={left} id="left-axes" xTicks={[0, 40, 80]} yTicks={[]} xLabel="t" />];
  leftParts.push(<InkCurve points={seriesA.map((value, period) => [left.x(period), left.y(value)] as [number, number])} id={`a-${seed}`} color={MARKER.blue} width={1.8} draw={drawNow(0)} />);
  leftParts.push(<InkCurve points={seriesB.map((value, period) => [left.x(period), left.y(value)] as [number, number])} id={`b-${seed}`} color={MARKER.red} width={1.8} delay={300} draw={drawNow(0)} />);
  leftParts.push(<Note x={left.x(PERIODS) - 4} y={left.y(seriesA[PERIODS - 1]) - 8} text="A" color={MARKER.blue} anchor="end" size={18} />);
  leftParts.push(<Note x={left.x(PERIODS) - 4} y={left.y(seriesB[PERIODS - 1]) + 20} text="B" color={MARKER.red} anchor="end" size={18} />);
  const rightParts: VNode[] = [<SketchAxes frame={right} id="right-axes" xLabel="B" yLabel="A" />];
  if (show(1)) {
    rightParts.push(<Scatter points={seriesB.map((value, period) => [right.x(value), right.y(seriesA[period])])} color={MARKER.grey} radius={2.5} opacity={0.6} draw={drawNow(1)} />);
    rightParts.push(<InkLine x1={right.x(right.xMin)} y1={right.y(fit.intercept + fit.slope * right.xMin)} x2={right.x(right.xMax)} y2={right.y(fit.intercept + fit.slope * right.xMax)} id={`fit-${seed}`} color={INK_SOFT} width={2.2} draw={drawNow(1)} />);
    rightParts.push(<Note x={right.right - 4} y={right.bottom - 32} text={`R² = ${fmt(fit.rSquared, 2)} (but unrelated!)`} color={MARKER.red} anchor="end" size={18} draw={drawNow(1)} />);
  }
  if (show(2)) rightParts.push(<Note x={right.right - 4} y={right.bottom - 10} text={`detrended R² = ${fmt(detrendedFit.rSquared, 2)}`} color={MARKER.green} anchor="end" size={18} draw={drawNow(2)} />);
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} footnote="Simulated: two independent random walks with drift."
      ariaLabel={`Spurious regression: two unrelated trending series give R squared ${fmt(fit.rSquared, 2)}; after detrending ${fmt(detrendedFit.rSquared, 2)}.`}
      explore={<Presets presets={[{ label: "Draw a new pair", apply: () => setSeed((current) => current + 1) }]} />}>
      <g>{leftParts}</g>
      <g>{rightParts}</g>
    </SketchGraph>
  );
}

function Detrending(): VNode {
  const series = useMemo(() => {
    const draw = normalSampler(77);
    return Array.from({ length: PERIODS }, (_, period) => 10 + 0.8 * period + draw() * 2.2);
  }, []);
  const periods = series.map((_, period) => period);
  const trend = fitLine(periods, series);
  const deviations = series.map((value, period) => value - trend.intercept - trend.slope * period);
  const NOTES = [
    "A series with a strong upward drift (simulated GDP-like data).",
    "Step 1: regress it on time and draw the fitted trend.",
    "Step 2: keep only the deviations from the trend: the wiggles a regression should explain.",
  ];
  const TEX = [
    "y_t",
    `\\hat y_t = ${fmt(trend.intercept, 1)} + ${fmt(trend.slope, 2)}\\,t`,
    "\\ddot y_t = y_t - \\hat\\alpha_0 - \\hat\\alpha_1 t",
  ];
  const sketch = useSketch({
    stepCount: NOTES.length,
    domains: [{ xMax: PERIODS, yMin: 0, yMax: Math.max(...series) + 5 }, { xMax: PERIODS, yMin: -8, yMax: 8 }],
    aspect: 0.8, minHeight: 230, maxHeight: 300, maxWidth: 760, padding: { left: 36, bottom: 40, top: 16 },
    panelTitles: ["Original series and fitted trend", "Detrended: deviations around the trend"],
  });
  const { show, drawNow, step } = sketch;
  const [top, bottom] = sketch.frames;
  const topParts: VNode[] = [<SketchAxes frame={top} id="top-axes" xTicks={[0, 20, 40, 60, 80]} yTicks={[20, 40, 60]} xLabel="t" />];
  topParts.push(<InkCurve points={series.map((value, period) => [top.x(period), top.y(value)] as [number, number])} id="series" color={MARKER.blue} width={1.8} draw={drawNow(0)} />);
  if (show(1)) topParts.push(<InkDashed x1={top.x(0)} y1={top.y(trend.intercept)} x2={top.x(PERIODS)} y2={top.y(trend.intercept + trend.slope * PERIODS)} id="trend" color={MARKER.green} width={2.2} draw={drawNow(1)} />);
  if (show(1)) topParts.push(<Note x={top.x(PERIODS) - 4} y={top.y(trend.intercept + trend.slope * PERIODS) + 20} text="fitted trend" color={MARKER.green} anchor="end" size={17} draw={drawNow(1)} />);
  const bottomParts: VNode[] = [<SketchAxes frame={bottom} id="bottom-axes" xTicks={[0, 20, 40, 60, 80]} yTicks={[-5, 0, 5]} xLabel="t" hideZero={false} />];
  if (show(2)) bottomParts.push(<InkCurve points={deviations.map((value, period) => [bottom.x(period), bottom.y(value)] as [number, number])} id="deviations" color={MARKER.red} width={1.8} draw={drawNow(2)} />);
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} footnote="Simulated series."
      ariaLabel="Detrending: fit a linear time trend, then keep only the deviations around it.">
      <g>{topParts}</g>
      <g>{bottomParts}</g>
    </SketchGraph>
  );
}
