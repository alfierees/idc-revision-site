import { useMemo, useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, SketchGraph, SketchAxes, InkLine, InkDashed, Note, Scatter, Presets, fmt, INK_SOFT, ACCENT, MARKER } from "./sketch";
import { normalSampler } from "./stats";

// PCA (ML Lectures 5 and 7), simulated: a cloud of two correlated features.
// Project every point onto a direction; the share of total variance kept is
// the variance of the projections divided by the total. PC1 is the direction
// that keeps the most; PC2 is at right angles to it.

const CLOUD = (() => {
  const draw = normalSampler(99);
  return Array.from({ length: 70 }, () => {
    const along = draw() * 2.2, across = draw() * 0.7;
    const angle = Math.PI / 5.5;
    return { x: along * Math.cos(angle) - across * Math.sin(angle), y: along * Math.sin(angle) + across * Math.cos(angle) };
  });
})();
const MEAN_X = CLOUD.reduce((total, point) => total + point.x, 0) / CLOUD.length;
const MEAN_Y = CLOUD.reduce((total, point) => total + point.y, 0) / CLOUD.length;
const CENTRED = CLOUD.map((point) => ({ x: point.x - MEAN_X, y: point.y - MEAN_Y }));
const TOTAL_VARIANCE = CENTRED.reduce((total, point) => total + point.x * point.x + point.y * point.y, 0) / CENTRED.length;
const varianceAlong = (angle: number) => CENTRED.reduce((total, point) => total + (point.x * Math.cos(angle) + point.y * Math.sin(angle)) ** 2, 0) / CENTRED.length;
const BEST_ANGLE = (() => {
  // closed form from the covariance matrix
  const sxx = CENTRED.reduce((t, p) => t + p.x * p.x, 0), syy = CENTRED.reduce((t, p) => t + p.y * p.y, 0), sxy = CENTRED.reduce((t, p) => t + p.x * p.y, 0);
  return 0.5 * Math.atan2(2 * sxy, sxx - syy);
})();

const NOTES = [
  "Two correlated features (simulated). Can one number summarise both?",
  "Pick a direction and project every point onto it (dashed lines).",
  "The spread of the projections is the information we keep. This direction keeps only part of it.",
  "PC1 is the direction that keeps the most. The rest lies along PC2, at right angles.",
  "Your turn. Rotate the direction.",
];

export default function PcaProjection(): VNode {
  const [exploreAngle, setExploreAngle] = useState(-0.6);
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMin: -6, xMax: 6, yMin: -4.5, yMax: 4.5 }], aspect: 0.75, maxWidth: 620, padding: { left: 32, bottom: 32, top: 20 } });
  const { show, step } = sketch;
  const frame = sketch.frames[0];
  const toX = frame.x, toY = frame.y;
  const angle = step <= 2 ? -0.6 : step === 3 ? BEST_ANGLE : exploreAngle;
  const kept = varianceAlong(angle) / TOTAL_VARIANCE;
  const direction = { x: Math.cos(angle), y: Math.sin(angle) };
  const projections = useMemo(() => CENTRED.map((point) => { const length = point.x * direction.x + point.y * direction.y; return { from: point, to: { x: length * direction.x, y: length * direction.y } }; }), [angle]);
  const TEX = [
    "x_1, x_2 \\text{ correlated}",
    `\\text{direction at } ${fmt((angle * 180) / Math.PI, 0)}^\\circ`,
    `\\text{variance kept} = ${fmt(kept * 100, 0)}\\%`,
    `PC_1:\\; ${fmt((varianceAlong(BEST_ANGLE) / TOTAL_VARIANCE) * 100, 0)}\\%,\\quad PC_2:\\; ${fmt((1 - varianceAlong(BEST_ANGLE) / TOTAL_VARIANCE) * 100, 0)}\\%`,
    `${fmt((angle * 180) / Math.PI, 0)}^\\circ:\\; ${fmt(kept * 100, 0)}\\% \\text{ kept}`,
  ];
  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={[]} yTicks={[]} xLabel="x₁" yLabel="x₂" />];
  if (show(1)) {
    drawing.push(<g clip-path={sketch.clip()}>
      <InkLine x1={toX(-7 * direction.x)} y1={toY(-7 * direction.y)} x2={toX(7 * direction.x)} y2={toY(7 * direction.y)} id={`axis-${fmt(angle, 2)}`} color={ACCENT} width={2.4} />
      {step === 3 && <InkDashed x1={toX(-5 * direction.y)} y1={toY(5 * direction.x)} x2={toX(5 * direction.y)} y2={toY(-5 * direction.x)} id="pc2" color={INK_SOFT} width={1.5} />}
      {projections.map(({ from, to }) => <line x1={toX(from.x)} y1={toY(from.y)} x2={toX(to.x)} y2={toY(to.y)} style={`stroke:${INK_SOFT};stroke-width:0.8;stroke-dasharray:2 2;opacity:0.7`} />)}
      {show(2) && projections.map(({ to }) => <circle cx={toX(to.x)} cy={toY(to.y)} r={2.6} style={`fill:${ACCENT};opacity:0.7`} />)}
    </g>);
  }
  drawing.push(<Scatter points={CENTRED.map((point) => [toX(point.x), toY(point.y)])} color={MARKER.blue} radius={3.3} opacity={0.75} />);
  if (show(2)) drawing.push(<Note x={frame.left + 8} y={frame.top + 12} text={`variance kept: ${fmt(kept * 100, 0)}%`} color={kept > 0.85 ? MARKER.green : ACCENT} size={20} />);
  if (step === 3) {
    drawing.push(<Note x={toX(5.2 * direction.x)} y={toY(5.2 * direction.y) - 10} text="PC1" color={ACCENT} anchor="middle" size={19} />);
    drawing.push(<Note x={toX(3.5 * direction.y) + 8} y={toY(-3.5 * direction.x)} text="PC2" color={INK_SOFT} size={18} />);
  }
  if (step === 4) drawing.push(sketch.handle({ key: "angle", x: 4 * direction.x, y: 4 * direction.y, axis: "xy", hint: "none", onDrag: (dataX, dataY) => setExploreAngle(Math.atan2(dataY, dataX)) }));
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} footnote="Simulated, centred data."
      ariaLabel={`PCA: projecting onto a direction at ${fmt((angle * 180) / Math.PI, 0)} degrees keeps ${fmt(kept * 100, 0)} percent of the variance.`}
      explore={<Presets presets={[{ label: "Snap to PC1", apply: () => setExploreAngle(BEST_ANGLE) }, { label: "Snap to PC2", apply: () => setExploreAngle(BEST_ANGLE + Math.PI / 2) }]} />}>
      {drawing}
    </SketchGraph>
  );
}
