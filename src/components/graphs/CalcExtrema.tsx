import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, useGlide, SketchGraph, SketchAxes, Note, Dot, Presets, Toggle, fmt, ACCENT, MARKER, WASH } from "./sketch";
import { CalcCurve, CalcLine, axisTicks, clampAwayFromBreaks, pickFunction } from "./CalcKit";

// Lec 10: the sign of f′ decides rising or falling, and a sign change at a
// critical point decides maximum or minimum.

const CHOICES: Record<string, string> = { quartic: "W-shape", cubic: "Cubic", bell: "Bell" };

function classify(derivative: (x: number) => number, point: number): "maximum" | "minimum" | "no extremum" {
  const before = derivative(point - 0.05), after = derivative(point + 0.05);
  if (before > 0 && after < 0) return "maximum";
  if (before < 0 && after > 0) return "minimum";
  return "no extremum";
}

export default function CalcExtrema({ fn }: { fn?: string }): VNode {
  const [functionKey, setFunctionKey] = useState(CHOICES[fn ?? ""] ? (fn as string) : "quartic");
  const spec = pickFunction(functionKey, "quartic");
  const critical = spec.criticalPoints ?? [];
  const stepCount = critical.length + 3;
  const xMin = spec.domain.xMin ?? 0, xMax = spec.domain.xMax;
  const [draggedX, setDraggedX] = useState(spec.start);
  const sketch = useSketch({ stepCount, domains: [spec.domain], aspect: 0.72, minHeight: 290, maxHeight: 410, padding: { bottom: 58 } });
  const { step, show } = sketch;
  const frame = sketch.frames[0];
  const onExplore = step === stepCount - 1;
  const currentCritical = step >= 2 && !onExplore ? critical[step - 2] : null;
  const { x: rawX } = useGlide({ x: onExplore ? draggedX : currentCritical ?? spec.start }, onExplore);
  const pointX = clampAwayFromBreaks(rawX, spec);
  const pointY = spec.value(pointX);
  const slope = spec.derivative(pointX);
  const stripTop = frame.bottom + 22, stripHeight = 12;
  const stripEdges = [xMin, ...critical, xMax];
  const kind = currentCritical !== null ? classify(spec.derivative, currentCritical) : null;
  const note = step === 0
    ? "Where does this function turn around?"
    : step === 1
      ? "The strip shows the sign of f′: green where f rises, red where it falls."
      : onExplore
        ? "Your turn. Drag the point, and watch the tangent flatten at each turning point."
        : kind === "maximum"
          ? "f′ = 0 and changes from + to -: rising then falling, so this is a maximum."
          : kind === "minimum"
            ? "f′ = 0 and changes from - to +: falling then rising, so this is a minimum."
            : "f′ = 0 here, but its sign does not change, so there is no extremum.";
  const tex = currentCritical !== null
    ? `f'(${fmt(currentCritical, 2)}) = 0,\\quad \\text{${kind}},\\quad f = ${fmt(spec.value(currentCritical), 2)}`
    : show(1)
      ? `f'(x) = ${spec.derivativeTex}`
      : `f(x) = ${spec.tex}`;

  return (
    <SketchGraph
      sketch={sketch}
      note={note}
      tex={tex}
      ariaLabel={`f(x) = ${spec.tex}, with critical points at ${critical.map((point) => fmt(point, 2)).join(", ")}.`}
      top={<Toggle label="Function" active={functionKey} onPick={(key) => { setFunctionKey(key); sketch.setStep(0); setDraggedX(pickFunction(key, "quartic").start); }} options={Object.entries(CHOICES).map(([key, label]) => ({ key, label }))} />}
      explore={<Presets presets={critical.map((point) => ({ label: `x = ${fmt(point, 2)}`, apply: () => setDraggedX(point) }))} />}
    >
      <SketchAxes frame={frame} id="extrema-axes" xTicks={axisTicks(xMin, xMax, sketch.narrow ? 5 : 7)} yTicks={axisTicks(spec.domain.yMin ?? 0, spec.domain.yMax)} xLabel="x" yLabel="y" />
      <CalcCurve sketch={sketch} frame={frame} value={spec.value} from={xMin} to={xMax} id={`extrema-${functionKey}`} color={ACCENT} draw={sketch.drawNow(0)} samples={170} />
      {show(1) && stripEdges.slice(0, -1).map((edge, index) => {
        const next = stripEdges[index + 1];
        const rising = spec.derivative((edge + next) / 2) > 0;
        return (
          <g>
            <rect x={frame.x(edge)} y={stripTop} width={Math.max(0, frame.x(next) - frame.x(edge) - 1)} height={stripHeight} rx={2} style={`fill:${rising ? WASH.green : WASH.red};stroke:${rising ? MARKER.green : MARKER.red};stroke-width:1`} />
            <text x={(frame.x(edge) + frame.x(next)) / 2} y={stripTop + 10} text-anchor="middle" class="sk-tick" style={`fill:${rising ? MARKER.green : MARKER.red};font-weight:700`}>{rising ? "+" : "−"}</text>
          </g>
        );
      })}
      {show(2) && critical.slice(0, onExplore ? critical.length : step - 1).map((point) => {
        const label = classify(spec.derivative, point);
        const color = label === "maximum" ? MARKER.red : label === "minimum" ? MARKER.green : MARKER.amber;
        return (
          <g>
            <Dot x={frame.x(point)} y={frame.y(spec.value(point))} color={color} radius={5} />
            <Note x={frame.x(point)} y={frame.y(spec.value(point)) + (label === "maximum" ? -12 : 24)} text={label === "maximum" ? "max" : label === "minimum" ? "min" : "flat"} color={color} anchor="middle" size={17} />
          </g>
        );
      })}
      {(show(2) || onExplore) && <CalcLine sketch={sketch} frame={frame} x0={pointX} y0={pointY} slope={slope} id="extrema-tangent" color={MARKER.blue} width={1.7} />}
      {!onExplore && show(2) && <Dot x={frame.x(pointX)} y={frame.y(pointY)} color={MARKER.blue} radius={4.5} />}
      {onExplore && sketch.handle({ key: "extrema-point", x: pointX, y: pointY, axis: "x", hint: "above", onDrag: (dataX) => setDraggedX(clampAwayFromBreaks(dataX, spec)) })}
    </SketchGraph>
  );
}
