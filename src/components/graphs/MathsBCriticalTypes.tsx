import { useMemo, useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, SketchGraph, SketchAxes, Note, Dot, Ring, Presets, fmt, ACCENT, MARKER } from "./sketch";
import { contourPath } from "./MathsBShared";

// Lesson 8 slide problem: classify the five critical points of
// f = xy³ − 2x³ + 2x² − 3xy with D = fxx·fyy − fxy².

const surface = (x: number, y: number) => x * y ** 3 - 2 * x ** 3 + 2 * x ** 2 - 3 * x * y;
const secondXX = (x: number) => -12 * x + 4;
const secondYY = (x: number, y: number) => 6 * x * y;
const secondXY = (y: number) => 3 * y * y - 3;
const ROOT_THREE = Math.sqrt(3);

interface CriticalPoint { name: string; x: number; y: number; kind: "max" | "min" | "saddle"; }
const POINTS: CriticalPoint[] = [
  { name: "(1, −1)", x: 1, y: -1, kind: "max" },
  { name: "(−1/3, −1)", x: -1 / 3, y: -1, kind: "min" },
  { name: "(0, 0)", x: 0, y: 0, kind: "saddle" },
  { name: "(0, √3)", x: 0, y: ROOT_THREE, kind: "saddle" },
  { name: "(0, −√3)", x: 0, y: -ROOT_THREE, kind: "saddle" },
];
const KIND_COLOR = { max: MARKER.red, min: MARKER.green, saddle: MARKER.amber };
const KIND_LABEL = { max: "local max", min: "local min", saddle: "saddle" };
const LEVELS = Array.from({ length: 41 }, (_, index) => -4 + index * 0.2).filter((level) => Math.abs(level) > 1e-6);

const NOTES = [
  "The contour map of f, with its five critical points, where both partial derivatives are zero.",
  "At (1, −1): D > 0 and fxx < 0. Contours ring the point and f falls away. A local max.",
  "At (−1/3, −1): D > 0 and fxx > 0. Contours ring the point and f rises away. A local min.",
  "At (0, 0): D < 0. Contours cross in an X. f rises one way and falls the other. A saddle.",
  "At (0, ±√3): D < 0 again, so both are saddles.",
  "Your turn. Pick any critical point and read its test.",
];
const FOCUS_BY_STEP = [-1, 0, 1, 2, 3, 0];

export default function MathsBCriticalTypes(): VNode {
  const [exploreIndex, setExploreIndex] = useState(0);
  const sketch = useSketch({
    stepCount: NOTES.length,
    domains: [{ xMin: -1.25, xMax: 1.65, yMin: -2.35, yMax: 2.35 }],
    aspect: 0.95, minHeight: 330, maxHeight: 450, maxWidth: 560, padding: { left: 32, bottom: 30, top: 12, right: 14 },
  });
  const { drawNow, step } = sketch;
  const frame = sketch.frames[0];
  const contourPaths = useMemo(() => LEVELS.map((level) => ({ level, path: contourPath(frame, surface, level, 90) })), [sketch.width, sketch.height]);
  const focusIndex = step === 5 ? exploreIndex : FOCUS_BY_STEP[step];
  const focus = focusIndex >= 0 ? POINTS[focusIndex] : null;
  const testTex = (point: CriticalPoint) => {
    const fxx = secondXX(point.x), fyy = secondYY(point.x, point.y), fxy = secondXY(point.y);
    const determinant = fxx * fyy - fxy * fxy;
    return `f_{xx} = ${fmt(fxx, 2)},\\ f_{yy} = ${fmt(fyy, 2)},\\ f_{xy} = ${fmt(fxy, 2)},\\ D = ${fmt(determinant, 2)}`;
  };
  const tex = focus ? testTex(focus) : "f = xy^3 - 2x^3 + 2x^2 - 3xy,\\quad D = f_{xx}f_{yy} - f_{xy}^2";

  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={tex}
      ariaLabel={`Contour map with five critical points. ${focus ? `${focus.name} is a ${KIND_LABEL[focus.kind]}.` : "One local max, one local min and three saddles."}`}
      explore={<Presets presets={POINTS.map((point, index) => ({ label: point.name, apply: () => setExploreIndex(index) }))} />}>
      <SketchAxes frame={frame} id="axes" xTicks={[-1, 1]} yTicks={[-2, -1, 1, 2]} xLabel="x" yLabel="y" hideZero />
      <g clip-path={sketch.clip(0)}>
        {contourPaths.map(({ level, path }) => <path d={path} style={`fill:none;stroke:${level > 0 ? MARKER.red : MARKER.blue};stroke-width:1;opacity:0.42`} />)}
      </g>
      {POINTS.map((point) => <Dot x={frame.x(point.x)} y={frame.y(point.y)} color={KIND_COLOR[point.kind]} radius={focus === point ? 6 : 4.5} />)}
      {step === 4 && POINTS.slice(3).map((point) => <Ring x={frame.x(point.x)} y={frame.y(point.y)} id={`ring-${point.name}`} color={ACCENT} radius={14} draw={drawNow(4)} />)}
      {focus && step !== 4 && <Ring x={frame.x(focus.x)} y={frame.y(focus.y)} id={`ring-${focus.name}`} color={ACCENT} radius={14} draw={drawNow(step)} />}
      {focus && <Note x={frame.x(focus.x) + (focus.x > 0.5 ? -18 : 18)} y={frame.y(focus.y) - 16} text={KIND_LABEL[focus.kind]} color={KIND_COLOR[focus.kind]} anchor={focus.x > 0.5 ? "end" : "start"} size={18} />}
    </SketchGraph>
  );
}
