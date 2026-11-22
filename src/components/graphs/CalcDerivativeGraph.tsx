import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, useGlide, SketchGraph, SketchAxes, InkDashed, Note, Dot, Presets, Toggle, fmt, ACCENT, MARKER, INK_SOFT } from "./sketch";
import { CALC_FUNCTIONS, CalcCurve, CalcLine, axisTicks, clampAwayFromBreaks, pickFunction } from "./CalcKit";

// Lec 07, 10 and 12: f on top, f′ underneath. As the point slides along f, the
// slope of its tangent is plotted below, drawing the derivative graph.

const CHOICES = ["cubic", "parabola", "quartic", "bell"];

export default function CalcDerivativeGraph({ fn }: { fn?: string }): VNode {
  const [functionKey, setFunctionKey] = useState(CALC_FUNCTIONS[fn ?? ""] ? (fn as string) : "cubic");
  const spec = pickFunction(functionKey, "cubic");
  const xMin = spec.domain.xMin ?? 0, xMax = spec.domain.xMax;
  const span = xMax - xMin;
  const stops = [xMin + span * 0.08, ...(spec.criticalPoints ?? []), xMax - span * 0.08];
  const stepCount = stops.length + 2;
  const [draggedX, setDraggedX] = useState(stops[0]);
  const sketch = useSketch({
    stepCount,
    domains: [spec.domain, { xMin, xMax, yMin: spec.derivativeRange[0], yMax: spec.derivativeRange[1] }],
    aspect: 0.62, minHeight: 215, maxHeight: 290, maxWidth: 760, padding: { left: 44, bottom: 34, top: 14 },
    panelTitles: ["f(x), with its tangent", "f′(x), the slope of that tangent"],
  });
  const { step } = sketch;
  const [curveFrame, slopeFrame] = sketch.frames;
  const onExplore = step === stepCount - 1;
  const targetX = onExplore ? draggedX : stops[Math.max(0, Math.min(stops.length - 1, step - 1))];
  const { x: rawX } = useGlide({ x: targetX }, onExplore);
  const pointX = clampAwayFromBreaks(rawX, spec);
  const pointY = spec.value(pointX);
  const slope = spec.derivative(pointX);
  const atCritical = (spec.criticalPoints ?? []).some((point) => Math.abs(point - pointX) < 0.02);
  const note = step === 0
    ? "Top: a function. Bottom: empty for now. We will plot how steep the top curve is at each x."
    : onExplore
      ? "Your turn. Drag the point and compare the two graphs."
      : atCritical
        ? "The tangent is flat here, so f′ = 0: the bottom graph crosses the x-axis."
        : slope > 0
          ? "f is rising, so its slope is positive: the bottom graph is above the axis."
          : "f is falling, so its slope is negative: the bottom graph is below the axis.";
  const tex = step === 0
    ? `f(x) = ${spec.tex},\\quad f'(x) = ${spec.derivativeTex}`
    : `x = ${fmt(pointX, 2)}:\\quad f(x) = ${fmt(pointY, 2)},\\quad f'(x) = ${fmt(slope, 2)}`;
  const drawnTo = onExplore ? xMax : pointX;
  const slopeInView = slope >= spec.derivativeRange[0] && slope <= spec.derivativeRange[1];

  return (
    <SketchGraph
      sketch={sketch}
      note={note}
      tex={tex}
      ariaLabel={`f(x) = ${spec.tex}. At x = ${fmt(pointX, 2)}, the derivative is ${fmt(slope, 2)}.`}
      top={<Toggle label="Function" active={functionKey} onPick={(key) => { setFunctionKey(key); sketch.setStep(0); const next = pickFunction(key, "cubic"); setDraggedX((next.domain.xMin ?? 0) + (next.domain.xMax - (next.domain.xMin ?? 0)) * 0.08); }}
        options={CHOICES.map((key) => ({ key, label: { cubic: "Cubic", parabola: "Parabola", quartic: "W-shape", bell: "Bell" }[key] as string }))} />}
      explore={spec.criticalPoints?.length ? <Presets presets={spec.criticalPoints.map((point) => ({ label: `Go to x = ${fmt(point, 2)}`, apply: () => setDraggedX(point) }))} /> : undefined}
    >
      <SketchAxes frame={curveFrame} id="derivative-top-axes" xTicks={axisTicks(xMin, xMax, 5)} yTicks={axisTicks(spec.domain.yMin ?? 0, spec.domain.yMax, 4)} />
      <SketchAxes frame={slopeFrame} id="derivative-bottom-axes" xTicks={axisTicks(xMin, xMax, 5)} yTicks={axisTicks(spec.derivativeRange[0], spec.derivativeRange[1], 4)} />
      <CalcCurve sketch={sketch} frame={curveFrame} value={spec.value} from={xMin === 0 ? 0.01 : xMin} to={xMax} breaks={spec.breaks} id={`derivative-f-${functionKey}`} color={ACCENT} draw={sketch.drawNow(0)} samples={150} />
      {step > 0 && drawnTo > xMin + 0.01 && <CalcCurve sketch={sketch} frame={slopeFrame} panel={1} value={spec.derivative} from={xMin === 0 ? 0.01 : xMin} to={drawnTo} breaks={spec.breaks} id={`derivative-fp-${functionKey}`} color={MARKER.blue} samples={130} />}
      {step > 0 && (
        <g>
          <CalcLine sketch={sketch} frame={curveFrame} x0={pointX} y0={pointY} slope={slope} id="derivative-tangent" color={MARKER.green} width={1.8} />
          <InkDashed x1={curveFrame.x(pointX)} y1={curveFrame.y(pointY)} x2={slopeFrame.x(pointX)} y2={slopeFrame.y(slopeInView ? slope : 0)} id={`derivative-link-${fmt(pointX, 2)}`} color={INK_SOFT} width={1} />
          {slopeInView && <Dot x={slopeFrame.x(pointX)} y={slopeFrame.y(slope)} color={MARKER.blue} radius={5} />}
          {!onExplore && <Dot x={curveFrame.x(pointX)} y={curveFrame.y(pointY)} color={MARKER.green} radius={5.5} />}
          {atCritical && <Note x={curveFrame.right - 4} y={curveFrame.top + 14} text="flat: f′ = 0" color={MARKER.green} anchor="end" size={17} />}
        </g>
      )}
      {onExplore && sketch.handle({ key: "derivative-point", x: pointX, y: pointY, axis: "x", hint: "above", onDrag: (dataX) => setDraggedX(clampAwayFromBreaks(dataX, spec)) })}
    </SketchGraph>
  );
}
