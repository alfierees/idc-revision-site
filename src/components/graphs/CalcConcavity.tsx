import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, useGlide, SketchGraph, SketchAxes, Note, Dot, Presets, Toggle, fmt, ACCENT, MARKER, WASH } from "./sketch";
import { CalcCurve, CalcLine, axisTicks, clampAwayFromBreaks, pickFunction } from "./CalcKit";

// Lec 11: f″ says which way the curve bends. Where f″ changes sign, the tangent
// crosses the curve: an inflection point.

const CHOICES: Record<string, string> = { cubic: "Cubic", quartic: "W-shape", bell: "Bell" };

export default function CalcConcavity({ fn }: { fn?: string }): VNode {
  const [functionKey, setFunctionKey] = useState(CHOICES[fn ?? ""] ? (fn as string) : "cubic");
  const spec = pickFunction(functionKey, "cubic");
  const inflections = spec.inflectionPoints ?? [];
  const xMin = spec.domain.xMin ?? 0, xMax = spec.domain.xMax;
  const firstInflection = inflections[0] ?? (xMin + xMax) / 2;
  const span = xMax - xMin;
  const beforeX = Math.max(xMin + span * 0.08, firstInflection - span * 0.16);
  const afterX = Math.min(xMax - span * 0.08, firstInflection + span * 0.16);
  const stops = [beforeX, beforeX, afterX, firstInflection];
  const stepCount = stops.length + 1;
  const [draggedX, setDraggedX] = useState(beforeX);
  const sketch = useSketch({ stepCount, domains: [spec.domain], aspect: 0.72, minHeight: 290, maxHeight: 410, padding: { bottom: 58 } });
  const { step, show } = sketch;
  const frame = sketch.frames[0];
  const onExplore = step === stepCount - 1;
  const { x: rawX } = useGlide({ x: onExplore ? draggedX : stops[step] }, onExplore);
  const pointX = clampAwayFromBreaks(rawX, spec);
  const pointY = spec.value(pointX);
  const slope = spec.derivative(pointX);
  const bend = spec.secondDerivative(pointX);
  const bendWord = Math.abs(bend) < 1e-6 ? "changing" : bend > 0 ? "concave up" : "concave down";
  const stripTop = frame.bottom + 22, stripHeight = 12;
  const stripEdges = [xMin, ...inflections, xMax];
  const describe = (x: number) => (spec.secondDerivative(x) > 0
    ? "f″ > 0 here: the slope is increasing and the curve bends upward, like a cup. The tangent sits below the curve."
    : "f″ < 0 here: the slope is decreasing and the curve bends downward, like a cap. The tangent sits above the curve.");
  const note = step === 0
    ? "The first derivative says up or down. The second derivative says which way the curve bends."
    : step === 1 || step === 2
      ? describe(stops[step])
      : onExplore
        ? "Your turn. Drag the point and watch the tangent switch sides at each inflection point."
        : "At the inflection point f″ changes sign, and the tangent cuts through the curve.";
  const tex = step === 3
    ? `f''(${fmt(firstInflection, 2)}) = 0,\\quad \\text{inflection at } (${fmt(firstInflection, 2)},\\ ${fmt(spec.value(firstInflection), 2)})`
    : show(1)
      ? `f''(x) = ${spec.secondDerivativeTex},\\quad f''(${fmt(pointX, 2)}) = ${fmt(bend, 2)}`
      : `f(x) = ${spec.tex}`;

  return (
    <SketchGraph
      sketch={sketch}
      note={note}
      tex={tex}
      ariaLabel={`f(x) = ${spec.tex}. At x = ${fmt(pointX, 2)} the curve is ${bendWord}.`}
      top={<Toggle label="Function" active={functionKey} onPick={(key) => { setFunctionKey(key); sketch.setStep(0); const next = pickFunction(key, "cubic"); const nextInflection = next.inflectionPoints?.[0] ?? 0; setDraggedX(nextInflection - (next.domain.xMax - (next.domain.xMin ?? 0)) * 0.16); }} options={Object.entries(CHOICES).map(([key, label]) => ({ key, label }))} />}
      explore={<Presets presets={inflections.map((point) => ({ label: `Inflection x = ${fmt(point, 2)}`, apply: () => setDraggedX(point) }))} />}
    >
      <SketchAxes frame={frame} id="concavity-axes" xTicks={axisTicks(xMin, xMax, sketch.narrow ? 5 : 7)} yTicks={axisTicks(spec.domain.yMin ?? 0, spec.domain.yMax)} xLabel="x" yLabel="y" />
      <CalcCurve sketch={sketch} frame={frame} value={spec.value} from={xMin} to={xMax} id={`concavity-${functionKey}`} color={ACCENT} draw={sketch.drawNow(0)} samples={170} />
      {show(1) && stripEdges.slice(0, -1).map((edge, index) => {
        const next = stripEdges[index + 1];
        const up = spec.secondDerivative((edge + next) / 2) > 0;
        return (
          <g>
            <rect x={frame.x(edge)} y={stripTop} width={Math.max(0, frame.x(next) - frame.x(edge) - 1)} height={stripHeight} rx={2} style={`fill:${up ? WASH.blue : WASH.amber};stroke:${up ? MARKER.blue : MARKER.amber};stroke-width:1`} />
            <text x={(frame.x(edge) + frame.x(next)) / 2} y={stripTop + 10} text-anchor="middle" class="sk-tick" style={`fill:${up ? MARKER.blue : MARKER.amber};font-weight:700`}>{up ? "∪" : "∩"}</text>
          </g>
        );
      })}
      {show(3) && inflections.map((point) => <Dot x={frame.x(point)} y={frame.y(spec.value(point))} color={MARKER.purple} radius={5.5} />)}
      {show(1) && <CalcLine sketch={sketch} frame={frame} x0={pointX} y0={pointY} slope={slope} id="concavity-tangent" color={MARKER.green} width={1.8} />}
      {show(1) && !onExplore && <Dot x={frame.x(pointX)} y={frame.y(pointY)} color={MARKER.green} radius={5} />}
      {show(1) && <Note x={frame.right - 4} y={frame.top + 14} text={bendWord} color={bend > 0 ? MARKER.blue : bend < 0 ? MARKER.amber : MARKER.purple} anchor="end" size={18} />}
      {onExplore && sketch.handle({ key: "concavity-point", x: pointX, y: pointY, axis: "x", hint: "above", onDrag: (dataX) => setDraggedX(clampAwayFromBreaks(dataX, spec)) })}
    </SketchGraph>
  );
}
