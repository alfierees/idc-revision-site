import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, SketchGraph, SketchAxes, InkLine, Note, Scatter, Toggle, fmt, INK_SOFT, ACCENT, MARKER } from "./sketch";
import { fitLine, mean } from "./stats";

// Anscombe's quartet (Anscombe 1973; ML Lecture 2): four real, published
// datasets with near-identical summary statistics (mean x = 9, mean y ≈ 7.50,
// correlation ≈ 0.816, fitted line y ≈ 3.00 + 0.500x) that look nothing alike.
// Always plot the data.

const X_SHARED = [10, 8, 13, 9, 11, 14, 6, 4, 12, 7, 5];
const QUARTET = [
  { name: "I", x: X_SHARED, y: [8.04, 6.95, 7.58, 8.81, 8.33, 9.96, 7.24, 4.26, 10.84, 4.82, 5.68], note: "A roughly linear cloud: the line fits." },
  { name: "II", x: X_SHARED, y: [9.14, 8.14, 8.74, 8.77, 9.26, 8.1, 6.13, 3.1, 9.13, 7.26, 4.74], note: "A perfect curve: a straight line is the wrong model." },
  { name: "III", x: X_SHARED, y: [7.46, 6.77, 12.74, 7.11, 7.81, 8.84, 6.08, 5.39, 8.15, 6.42, 5.73], note: "A tight line with one outlier dragging the fit." },
  { name: "IV", x: [8, 8, 8, 8, 8, 8, 8, 19, 8, 8, 8], y: [6.58, 5.76, 7.71, 8.84, 8.47, 7.04, 5.25, 12.5, 5.56, 7.91, 6.89], note: "No relationship at all: one extreme point creates the whole line." },
];

const NOTES = [
  "Four datasets. Their means, variances, correlation and regression line are almost identical.",
  ...QUARTET.map((set) => `Dataset ${set.name}: ${set.note}`),
  "Same statistics, four different stories. Always plot the data.",
];

export default function AnscombeQuartet(): VNode {
  const [exploreSet, setExploreSet] = useState(0);
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMin: 2, xMax: 20, yMin: 2, yMax: 14 }], aspect: 0.62, maxWidth: 620, padding: { left: 36, bottom: 36, top: 20 } });
  const { step, drawNow } = sketch;
  const frame = sketch.frames[0];
  const index = step === 0 ? 0 : step <= 4 ? step - 1 : exploreSet;
  const set = QUARTET[index];
  const fit = fitLine(set.x, set.y);
  const correlation = Math.sign(fit.slope) * Math.sqrt(fit.rSquared);
  const tex = `\\bar x = ${fmt(mean(set.x), 2)},\\; \\bar y = ${fmt(mean(set.y), 2)},\\; r = ${fmt(correlation, 3)},\\; \\hat y = ${fmt(fit.intercept, 2)} + ${fmt(fit.slope, 3)}x`;
  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={[4, 8, 12, 16, 20]} yTicks={[4, 8, 12]} xLabel="x" yLabel="y" />];
  drawing.push(<InkLine x1={frame.x(3)} y1={frame.y(fit.intercept + fit.slope * 3)} x2={frame.x(19.5)} y2={frame.y(fit.intercept + fit.slope * 19.5)} id={`fit-${index}`} color={ACCENT} width={2} draw={drawNow(step)} />);
  drawing.push(<Scatter points={set.x.map((value, point) => [frame.x(value), frame.y(set.y[point])])} color={MARKER.blue} radius={5} opacity={0.85} draw={drawNow(step)} />);
  drawing.push(<Note x={frame.left + 10} y={frame.top + 12} text={`dataset ${set.name}`} color={INK_SOFT} size={20} />);
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={tex} footnote="Anscombe (1973), the published values."
      ariaLabel={`Anscombe's quartet, dataset ${set.name}: correlation ${fmt(correlation, 3)}, line y = ${fmt(fit.intercept, 2)} + ${fmt(fit.slope, 3)}x.`}
      explore={step === NOTES.length - 1 ? <Toggle label="Dataset" options={QUARTET.map((quartetSet, position) => ({ key: String(position), label: quartetSet.name }))} active={String(exploreSet)} onPick={(key) => setExploreSet(Number(key))} /> : undefined}>
      {drawing}
    </SketchGraph>
  );
}
