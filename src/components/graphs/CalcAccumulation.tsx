import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, useGlide, SketchGraph, SketchAxes, InkDashed, Note, Dot, Presets, fmt, ACCENT, MARKER, WASH, INK_SOFT } from "./sketch";
import { CalcCurve, axisTicks } from "./CalcKit";

// Lec 08: the printed piecewise integral on [-3, 7]. Dragging the upper limit
// adds area above the axis and subtracts area below it; the total is 389/70.

const FROM = -3, TO = 7;
const BREAKS = [0, 5];
const piecewise = (x: number) => (x <= 0 ? x * x - 2 : x < 5 ? 3 - x : 1 / (x * x));
const firstPiece = (x: number) => x ** 3 / 3 - 2 * x;
const secondPiece = (x: number) => 3 * x - (x * x) / 2;
const accumulated = (x: number) => {
  if (x <= 0) return firstPiece(x) - firstPiece(FROM);
  const throughFirst = firstPiece(0) - firstPiece(FROM);
  if (x < 5) return throughFirst + secondPiece(x);
  return throughFirst + secondPiece(5) + (1 / 5 - 1 / x);
};
const STOPS = [
  { x: FROM, note: "A piecewise function from the lesson. We add up signed area from x = -3." },
  { x: -Math.SQRT2, note: "Area above the x-axis counts as positive, so the running total climbs." },
  { x: 0, note: "Below the axis area counts as negative, so the total falls back to 3." },
  { x: 3, note: "New piece: 3 - x. Its area is positive until it crosses zero at x = 3, reaching 7.5." },
  { x: 5, note: "Past x = 3 the function is negative, so the total drops to 5.5." },
  { x: TO, note: "The last piece adds a tiny 2/35. The full integral is 389/70 ≈ 5.557." },
];
const NOTE_EXPLORE = "Your turn. Drag the upper limit. When f is positive the total rises, and when f is negative it falls.";

export default function CalcAccumulation(): VNode {
  const [draggedX, setDraggedX] = useState(3);
  const stepCount = STOPS.length + 1;
  const sketch = useSketch({
    stepCount,
    domains: [{ xMin: FROM, xMax: TO, yMin: -3, yMax: 8 }, { xMin: FROM, xMax: TO, yMin: -0.5, yMax: 8.5 }],
    aspect: 0.62, minHeight: 215, maxHeight: 290, maxWidth: 760, padding: { left: 38, bottom: 34, top: 14 },
    panelTitles: ["f(x), shaded up to the limit", "Running total A(x)"],
  });
  const { step } = sketch;
  const [curveFrame, totalFrame] = sketch.frames;
  const onExplore = step === stepCount - 1;
  const { x: upperLimit } = useGlide({ x: onExplore ? draggedX : STOPS[step].x }, onExplore);
  const total = accumulated(upperLimit);
  const sliceCount = Math.max(1, Math.round(((upperLimit - FROM) / (TO - FROM)) * 160));
  const sliceWidth = (upperLimit - FROM) / sliceCount;
  const slices: VNode[] = [];
  for (let index = 0; index < sliceCount && upperLimit > FROM; index++) {
    const middle = FROM + (index + 0.5) * sliceWidth;
    const height = piecewise(middle);
    const top = curveFrame.y(Math.max(height, 0)), bottom = curveFrame.y(Math.min(height, 0));
    slices.push(<rect x={curveFrame.x(FROM + index * sliceWidth)} y={top} width={curveFrame.x(FROM + (index + 1) * sliceWidth) - curveFrame.x(FROM + index * sliceWidth) + 0.4} height={Math.max(0, bottom - top)} shape-rendering="crispEdges" style={`fill:${height >= 0 ? WASH.green : WASH.red}`} />);
  }
  const tex = `\\int_{-3}^{${fmt(upperLimit, 2)}} f(x)\\,dx = ${fmt(total, 3)}`;

  return (
    <SketchGraph
      sketch={sketch}
      note={onExplore ? NOTE_EXPLORE : STOPS[step].note}
      tex={tex}
      ariaLabel={`Signed area from -3 to ${fmt(upperLimit, 2)} is ${fmt(total, 3)}.`}
      explore={<Presets presets={[{ label: "x = 0", apply: () => setDraggedX(0) }, { label: "Peak (x = 3)", apply: () => setDraggedX(3) }, { label: "Full (x = 7)", apply: () => setDraggedX(TO) }]} />}
    >
      <g>{slices}</g>
      <SketchAxes frame={curveFrame} id="accumulation-top-axes" xTicks={[-3, 0, 3, 5, 7]} yTicks={axisTicks(-3, 8, 4)} hideZero={false} />
      <SketchAxes frame={totalFrame} id="accumulation-bottom-axes" xTicks={[-3, 0, 3, 5, 7]} yTicks={axisTicks(0, 8, 4)} hideZero={false} />
      <CalcCurve sketch={sketch} frame={curveFrame} value={piecewise} from={FROM} to={TO} breaks={BREAKS} id="accumulation-f" color={ACCENT} draw={sketch.drawNow(0)} samples={170} />
      {upperLimit > FROM + 0.01 && <CalcCurve sketch={sketch} frame={totalFrame} panel={1} value={accumulated} from={FROM} to={upperLimit} id="accumulation-total" color={MARKER.blue} samples={110} />}
      <InkDashed x1={curveFrame.x(upperLimit)} y1={curveFrame.top} x2={curveFrame.x(upperLimit)} y2={curveFrame.bottom} id={`accumulation-limit-${fmt(upperLimit, 2)}`} color={INK_SOFT} width={1} />
      <Dot x={totalFrame.x(upperLimit)} y={totalFrame.y(total)} color={MARKER.blue} radius={5} />
      <Note x={totalFrame.x(upperLimit) + (upperLimit > 3.5 ? -8 : 8)} y={totalFrame.y(total) - 10} text={fmt(total, 2)} color={MARKER.blue} anchor={upperLimit > 3.5 ? "end" : "start"} size={17} />
      {onExplore && sketch.handle({ key: "accumulation-limit", x: upperLimit, y: 7, axis: "x", hint: upperLimit > 3.5 ? "left" : "right", onDrag: (dataX) => setDraggedX(Math.max(FROM, Math.min(TO, dataX))) })}
    </SketchGraph>
  );
}
