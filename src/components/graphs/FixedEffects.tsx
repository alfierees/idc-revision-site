import { useMemo } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, SketchGraph, SketchAxes, InkLine, Note, Dot, Scatter, fmt, INK, MARKER } from "./sketch";
import { normalSampler, fitLine, mean } from "./stats";

// Fixed effects (Lecture 8), simulated panel: five individuals, each observed
// eight times. Individuals with higher x also have higher y on average (the
// between comparison slopes UP), but within each individual more x means
// less y (the within slope is −0.55). Pooled OLS picks up the between
// confound; demeaning keeps only within variation.
//   type: fixed-effects
//   mode: within-between | demeaning

interface Props { mode?: string; }

const COLORS = [MARKER.blue, MARKER.red, MARKER.green, MARKER.purple, MARKER.amber];
const WITHIN_SLOPE = -0.55;

function simulatePanel() {
  const draw = normalSampler(808);
  return COLORS.map((_, person) => {
    const centreX = 2 + person * 2.1, centreY = 3.4 + person * 3.4;
    return Array.from({ length: 8 }, () => {
      const offset = draw() * 0.7;
      return { x: centreX + offset, y: centreY + WITHIN_SLOPE * offset + draw() * 0.25 };
    });
  });
}

export default function FixedEffects({ mode = "within-between" }: Props): VNode {
  const panel = useMemo(simulatePanel, []);
  const all = panel.flat();
  const pooled = fitLine(all.map((point) => point.x), all.map((point) => point.y));
  const demeaned = panel.flatMap((points) => {
    const meanX = mean(points.map((point) => point.x)), meanY = mean(points.map((point) => point.y));
    return points.map((point) => ({ x: point.x - meanX, y: point.y - meanY }));
  });
  const within = fitLine(demeaned.map((point) => point.x), demeaned.map((point) => point.y));
  return mode === "demeaning" ? <Demeaning panel={panel} demeaned={demeaned} within={within.slope} /> : <WithinBetween panel={panel} pooledSlope={pooled.slope} pooledIntercept={pooled.intercept} within={within.slope} />;
}

function WithinBetween(props: { panel: { x: number; y: number }[][]; pooledSlope: number; pooledIntercept: number; within: number }): VNode {
  const NOTES = [
    "Five individuals, eight observations each (simulated). Pooled together, x and y look positively related.",
    "Pooled OLS: a positive slope. But this compares different people, who differ in fixed ways.",
    "Look within each person: more x goes with less y. That is the causal comparison.",
    "Fixed effects use only this within variation: the sign flips.",
  ];
  const TEX = [
    "y_{it} = \\beta_1 x_{it} + a_i + u_{it}",
    `\\hat\\beta_{\\text{pooled}} = ${fmt(props.pooledSlope, 2)}`,
    `\\text{within each person: slope} \\approx ${fmt(props.within, 2)}`,
    `\\hat\\beta_{FE} = ${fmt(props.within, 2)} \\;\\text{vs pooled}\\; ${fmt(props.pooledSlope, 2)}`,
  ];
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMax: 12, yMax: 19 }], maxWidth: 640, padding: { left: 40, bottom: 44, top: 22 } });
  const { show, drawNow, step } = sketch;
  const frame = sketch.frames[0];
  const toX = frame.x, toY = frame.y;
  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={[0, 2, 4, 6, 8, 10, 12]} yTicks={[5, 10, 15]} xLabel="x (e.g. temperature)" yLabel="y" />];
  props.panel.forEach((points, person) => drawing.push(<Scatter points={points.map((point) => [toX(point.x), toY(point.y)])} color={show(2) ? COLORS[person] : MARKER.grey} radius={3} opacity={0.75} />));
  if (show(1)) {
    drawing.push(<InkLine x1={toX(0.5)} y1={toY(props.pooledIntercept + props.pooledSlope * 0.5)} x2={toX(11.5)} y2={toY(props.pooledIntercept + props.pooledSlope * 11.5)} id="pooled" color={INK} width={2.4} draw={drawNow(1)} />);
    drawing.push(<Note x={toX(9.5)} y={toY(props.pooledIntercept + props.pooledSlope * 9.5) + 24} text="between: slope looks positive" color={INK} size={17} draw={drawNow(1)} />);
  }
  if (show(2)) props.panel.forEach((points, person) => {
    const fit = fitLine(points.map((point) => point.x), points.map((point) => point.y));
    const centre = mean(points.map((point) => point.x));
    drawing.push(<InkLine x1={toX(centre - 1.1)} y1={toY(fit.intercept + fit.slope * (centre - 1.1))} x2={toX(centre + 1.1)} y2={toY(fit.intercept + fit.slope * (centre + 1.1))} id={`within-${person}`} color={COLORS[person]} width={2.2} delay={person * 200} draw={drawNow(2)} />);
    drawing.push(<Dot x={toX(centre)} y={toY(mean(points.map((point) => point.y)))} color={COLORS[person]} radius={4} />);
  });
  if (show(3)) drawing.push(<Note x={toX(0.8)} y={frame.top + 12} text="within each person: slope is negative" color={MARKER.red} size={18} draw={drawNow(3)} />);
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} footnote="Simulated panel."
      ariaLabel={`Within versus between variation: pooled slope ${fmt(props.pooledSlope, 2)}, within slope ${fmt(props.within, 2)}.`}>
      {drawing}
    </SketchGraph>
  );
}

function Demeaning(props: { panel: { x: number; y: number }[][]; demeaned: { x: number; y: number }[]; within: number }): VNode {
  const NOTES = [
    "Before: each person's cloud sits at their own level: their fixed effect aᵢ.",
    "Subtract each person's own averages from their x and y: every cloud moves to the origin.",
    "Now one line fits them all: the within slope, with every fixed difference between people wiped out.",
  ];
  const TEX = [
    "y_{it} = \\beta_1 x_{it} + a_i + u_{it}",
    "\\ddot x_{it} = x_{it} - \\bar x_i,\\quad \\ddot y_{it} = y_{it} - \\bar y_i",
    `\\ddot y_{it} = \\beta_1 \\ddot x_{it} + \\ddot u_{it},\\quad \\hat\\beta_1 = ${fmt(props.within, 2)}`,
  ];
  const sketch = useSketch({
    stepCount: NOTES.length,
    domains: [{ xMax: 12, yMax: 19 }, { xMin: -1.8, xMax: 1.8, yMin: -1.5, yMax: 1.5 }],
    aspect: 0.82, minHeight: 240, maxHeight: 320, maxWidth: 760, padding: { left: 40, bottom: 40, top: 16 },
    panelTitles: ["Before: own levels", "After demeaning"],
  });
  const { show, drawNow, step } = sketch;
  const [left, right] = sketch.frames;
  const leftParts: VNode[] = [<SketchAxes frame={left} id="left-axes" xTicks={[0, 4, 8, 12]} yTicks={[5, 10, 15]} xLabel="x" yLabel="y" />];
  props.panel.forEach((points, person) => {
    leftParts.push(<Scatter points={points.map((point) => [left.x(point.x), left.y(point.y)])} color={COLORS[person]} radius={3} opacity={0.75} />);
    leftParts.push(<Dot x={left.x(mean(points.map((point) => point.x)))} y={left.y(mean(points.map((point) => point.y)))} color={INK} radius={3.5} />);
  });
  const rightParts: VNode[] = [<SketchAxes frame={right} id="right-axes" xTicks={[-1.5, 0, 1.5]} yTicks={[-1, 0, 1]} xLabel="ẍ" yLabel="ÿ" hideZero={false} />];
  if (show(1)) {
    let offset = 0;
    props.panel.forEach((points, person) => {
      const slice = props.demeaned.slice(offset, offset + points.length);
      offset += points.length;
      rightParts.push(<Scatter points={slice.map((point) => [right.x(point.x), right.y(point.y)])} color={COLORS[person]} radius={3} opacity={0.75} draw={drawNow(1)} delay={person * 150} />);
    });
  }
  if (show(2)) {
    rightParts.push(<InkLine x1={right.x(-1.7)} y1={right.y(props.within * -1.7)} x2={right.x(1.7)} y2={right.y(props.within * 1.7)} id="within" color={INK} width={2.4} draw={drawNow(2)} />);
    rightParts.push(<Note x={right.right - 4} y={right.y(props.within * 1.5) - 12} text={`within slope ${fmt(props.within, 2)}`} color={INK} anchor="end" size={17} draw={drawNow(2)} />);
  }
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} footnote="Simulated panel."
      ariaLabel={`Demeaning: after subtracting each individual's means, a single within slope of ${fmt(props.within, 2)} fits all.`}>
      <g>{leftParts}</g>
      <g>{rightParts}</g>
    </SketchGraph>
  );
}
