import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, useGlide, SketchGraph, SketchAxes, Note, Dot, Slider, Presets, Toggle, signed, fmt, ACCENT, MARKER, INK_MUTED } from "./sketch";
import { CalcCurve, axisTicks } from "./CalcKit";

// Graph transformations y = a·f(x - h) + k (Lec 03): outside changes move the
// graph the way you expect, inside changes move it the opposite way.

interface BaseShape { label: string; value: (x: number) => number; tex: (inner: string) => string; anchorX: number; }
const SHAPES: Record<string, BaseShape> = {
  parabola: { label: "x²", value: (x) => x * x, tex: (inner) => `(${inner})^2`, anchorX: 0 },
  sqrt: { label: "√x", value: (x) => (x < 0 ? NaN : Math.sqrt(x)), tex: (inner) => `\\sqrt{${inner}}`, anchorX: 0 },
  exponential: { label: "2ˣ", value: (x) => Math.pow(2, x), tex: (inner) => `2^{${inner}}`, anchorX: 0 },
};

const STOPS = [
  { scale: 1, h: 0, k: 0, note: "Start with the original function, shown dashed from here on." },
  { scale: 1, h: 0, k: 3, note: "Adding outside, f(x) + 3, lifts the whole graph up by 3." },
  { scale: 1, h: 2, k: 0, note: "Inside is the opposite way round: f(x - 2) moves the graph 2 to the right." },
  { scale: 1, h: -2, k: 0, note: "And f(x + 2) moves it 2 to the left." },
  { scale: -1, h: 0, k: 0, note: "A minus sign outside, -f(x), reflects the graph across the x-axis." },
  { scale: 1, h: 1, k: -2, note: "Shifts combine: this one moves 1 right and 2 down." },
];
const NOTE_EXPLORE = "Your turn. Combine a stretch, a sideways shift and a vertical shift.";
const insideTex = (h: number) => (Math.abs(h) < 0.005 ? "x" : `x ${signed(-h, 2)}`);

export default function CalcTransformations({ base }: { base?: string }): VNode {
  const [shapeKey, setShapeKey] = useState(SHAPES[base ?? ""] ? (base as string) : "parabola");
  const [explored, setExplored] = useState({ scale: 1, h: 1, k: -2 });
  const stepCount = STOPS.length + 1;
  const sketch = useSketch({ stepCount, domains: [{ xMin: -6, xMax: 6, yMin: -7, yMax: 9 }], aspect: 0.72, minHeight: 280, maxHeight: 400 });
  const { step } = sketch;
  const frame = sketch.frames[0];
  const onExplore = step === stepCount - 1;
  const stop = onExplore ? explored : STOPS[step];
  const shown = useGlide({ scale: stop.scale, h: stop.h, k: stop.k }, onExplore);
  const shape = SHAPES[shapeKey];
  const transformed = (x: number) => shown.scale * shape.value(x - shown.h) + shown.k;
  const scaleText = Math.abs(shown.scale - 1) < 0.005 ? "" : Math.abs(shown.scale + 1) < 0.005 ? "-" : `${fmt(shown.scale, 2)}\\cdot `;
  const kText = Math.abs(shown.k) < 0.005 ? "" : ` ${signed(shown.k, 2)}`;
  const tex = `y = ${scaleText}${shape.tex(insideTex(shown.h))}${kText}`;
  const anchorX = shape.anchorX + shown.h;
  const anchorY = transformed(anchorX);
  const anchorVisible = anchorX >= frame.xMin && anchorX <= frame.xMax && anchorY >= frame.yMin && anchorY <= frame.yMax;

  return (
    <SketchGraph
      sketch={sketch}
      note={onExplore ? NOTE_EXPLORE : STOPS[step].note}
      tex={tex}
      ariaLabel={`Transformation of ${shape.label}: ${tex}`}
      top={<Toggle label="Base function" active={shapeKey} onPick={setShapeKey} options={Object.entries(SHAPES).map(([key, entry]) => ({ key, label: entry.label }))} />}
      explore={<>
        <div class="graph-sliders">
          <Slider label="stretch a" value={explored.scale} min={-3} max={3} step={0.25} onInput={(value) => setExplored((current) => ({ ...current, scale: value }))} />
          <Slider label="right h" value={explored.h} min={-4} max={4} step={0.5} onInput={(value) => setExplored((current) => ({ ...current, h: value }))} />
          <Slider label="up k" value={explored.k} min={-5} max={5} step={0.5} onInput={(value) => setExplored((current) => ({ ...current, k: value }))} />
        </div>
        <Presets presets={[
          { label: "Reset", apply: () => setExplored({ scale: 1, h: 0, k: 0 }) },
          { label: "Flip and lift", apply: () => setExplored({ scale: -1, h: 0, k: 4 }) },
          { label: "Narrow", apply: () => setExplored({ scale: 3, h: 0, k: 0 }) },
        ]} />
      </>}
    >
      <SketchAxes frame={frame} id="transform-axes" xTicks={axisTicks(-6, 6, sketch.narrow ? 5 : 7)} yTicks={axisTicks(-7, 9)} xLabel="x" yLabel="y" />
      {step > 0 && <CalcCurve sketch={sketch} frame={frame} value={shape.value} from={-6} to={6} id={`transform-original-${shapeKey}`} color={INK_MUTED} width={1.5} dashed />}
      <CalcCurve sketch={sketch} frame={frame} value={transformed} from={-6} to={6} id={`transform-${shapeKey}`} color={ACCENT} samples={150} />
      {anchorVisible && (
        <g>
          <Dot x={frame.x(anchorX)} y={frame.y(anchorY)} color={MARKER.blue} />
          <Note x={frame.x(anchorX) + 10} y={frame.y(anchorY) + (shown.scale < 0 ? 22 : -10)} text={`(${fmt(anchorX, 1)}, ${fmt(anchorY, 1)})`} color={MARKER.blue} size={16} />
        </g>
      )}
    </SketchGraph>
  );
}
