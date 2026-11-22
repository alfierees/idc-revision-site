import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, useGlide, SketchGraph, SketchAxes, Note, Dot, Slider, Presets, fmt, ACCENT, MARKER } from "./sketch";
import { CalcCurve, CalcLine, axisTicks, clampAwayFromBreaks, pickFunction } from "./CalcKit";

// Lec 06 and 07: the secant through x and x + h turns into the tangent as h → 0.
// Props: fn (a CalcKit function key), at (the point's x).

const GAPS = [2, 2, 1, 0.3, 0.02];
const NOTES = [
  "Pick a point on the curve. How steep is the curve exactly there?",
  "A second point h away gives a secant line. Its slope is rise over run.",
  "Bring the second point closer: the secant swings toward the curve's direction at our point.",
  "Closer still. The slope is settling on one number.",
  "As h → 0, the secant becomes the tangent. Its slope is the derivative f′(x).",
  "Your turn. Drag the point along the curve, and change h.",
];

export default function CalcTangentSlope({ fn, at }: { fn?: string; at?: number }): VNode {
  const spec = pickFunction(fn, "parabola");
  const startX = clampAwayFromBreaks(typeof at === "number" ? at : spec.start, spec);
  const [explored, setExplored] = useState({ x: startX, gap: 0.5 });
  const sketch = useSketch({ stepCount: NOTES.length, domains: [spec.domain], aspect: 0.72, minHeight: 280, maxHeight: 400 });
  const { step, show } = sketch;
  const frame = sketch.frames[0];
  const onExplore = step === NOTES.length - 1;
  const target = onExplore ? explored : { x: startX, gap: GAPS[step] };
  const shown = useGlide(target, onExplore || sketch.dragging !== null);
  const pointX = shown.x;
  const pointY = spec.value(pointX);
  const crossesBreak = (spec.breaks ?? []).some((point) => (pointX - point) * (pointX + shown.gap - point) <= 0);
  const gapDirection = pointX + shown.gap > frame.xMax || crossesBreak ? -1 : 1;
  const secondX = pointX + gapDirection * shown.gap;
  const secondY = spec.value(secondX);
  const secantSlope = (secondY - pointY) / (secondX - pointX);
  const exactSlope = spec.derivative(pointX);
  const atTangent = step === 4;
  const tex = !show(1)
    ? `f(x) = ${spec.tex},\\quad x = ${fmt(pointX, 2)}`
    : atTangent
      ? `f'(${fmt(pointX, 2)}) = \\lim_{h\\to 0}\\frac{f(x+h)-f(x)}{h} = ${fmt(exactSlope, 3)}`
      : `h = ${fmt(gapDirection * shown.gap, 2)}:\\quad \\frac{f(x+h)-f(x)}{h} = ${fmt(secantSlope, 3)}${onExplore ? `,\\quad f'(x) = ${fmt(exactSlope, 3)}` : ""}`;

  return (
    <SketchGraph
      sketch={sketch}
      note={NOTES[step]}
      tex={tex}
      ariaLabel={`Curve ${spec.tex}. At x = ${fmt(pointX, 2)} the derivative is ${fmt(exactSlope, 3)}.`}
      explore={<>
        <div class="graph-sliders"><Slider label="h" value={explored.gap} min={0.02} max={2} step={0.02} onInput={(gap) => setExplored((current) => ({ ...current, gap }))} /></div>
        <Presets presets={[{ label: "h tiny", apply: () => setExplored((current) => ({ ...current, gap: 0.02 })) }, { label: "h large", apply: () => setExplored((current) => ({ ...current, gap: 2 })) }]} />
      </>}
    >
      <SketchAxes frame={frame} id="tangent-axes" xTicks={axisTicks(frame.xMin, frame.xMax, sketch.narrow ? 5 : 7)} yTicks={axisTicks(frame.yMin, frame.yMax)} xLabel="x" yLabel="y" />
      <CalcCurve sketch={sketch} frame={frame} value={spec.value} from={frame.xMin === 0 ? 0.01 : frame.xMin} to={frame.xMax} breaks={spec.breaks} id="tangent-curve" color={ACCENT} draw={sketch.drawNow(0)} samples={170} />
      {show(1) && !atTangent && <CalcLine sketch={sketch} frame={frame} x0={pointX} y0={pointY} slope={secantSlope} id="tangent-secant" color={MARKER.purple} width={1.8} />}
      {(atTangent || onExplore) && <CalcLine sketch={sketch} frame={frame} x0={pointX} y0={pointY} slope={exactSlope} id="tangent-line" color={MARKER.green} width={2} dashed={onExplore} />}
      {show(1) && !atTangent && <Dot x={frame.x(secondX)} y={frame.y(secondY)} color={MARKER.purple} radius={5} />}
      {!onExplore && <Dot x={frame.x(pointX)} y={frame.y(pointY)} color={MARKER.blue} radius={5.5} />}
      {atTangent && <Note x={frame.right - 4} y={frame.top + 14} text={`slope = ${fmt(exactSlope, 2)}`} color={MARKER.green} anchor="end" size={18} />}
      {onExplore && sketch.handle({
        key: "tangent-point", x: pointX, y: pointY, axis: "x", hint: "above",
        onDrag: (dataX) => setExplored((current) => ({ ...current, x: clampAwayFromBreaks(dataX, spec) })),
      })}
    </SketchGraph>
  );
}
