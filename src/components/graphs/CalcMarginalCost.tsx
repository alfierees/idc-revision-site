import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, useGlide, SketchGraph, SketchAxes, InkLine, InkDashed, Note, Dot, Slider, fmt, ACCENT, MARKER, INK_SOFT } from "./sketch";
import { CalcCurve, CalcLine, axisTicks } from "./CalcKit";

// Lec 09: C(x) = 300 + 100x - x². The derivative C′(x) estimates the true cost of
// one more unit, C(x+1) - C(x). The zoom panel makes the small gap visible.

const cost = (quantity: number) => 300 + 100 * quantity - quantity * quantity;
const marginal = (quantity: number) => 100 - 2 * quantity;
const NOTES = [
  "A cost curve from the lesson: C(x) = 300 + 100x - x². Focus on producing x = 30 units.",
  "The exact cost of the 31st unit is C(31) - C(30). The zoom shows that rise: 39.",
  "The derivative gives a quick estimate: the tangent's slope, C′(30) = 40.",
  "So marginal cost, 40, is a close estimate of the true extra cost, 39.",
  "Your turn. Slide x. The estimate is always off by exactly 1 for this curve.",
];

export default function CalcMarginalCost(): VNode {
  const [exploredQuantity, setExploredQuantity] = useState(30);
  const sketch = useSketch({
    stepCount: NOTES.length,
    domains: [{ xMin: 0, xMax: 50, yMin: 0, yMax: 3000 }, { xMin: 29.5, xMax: 31.8, yMin: 2350, yMax: 2460 }],
    aspect: 0.8, minHeight: 240, maxHeight: 320, maxWidth: 760, padding: { left: 50, bottom: 38, top: 14 },
    panelTitles: ["Total cost C(x)", "Zoom: one extra unit"],
  });
  const { step, show } = sketch;
  const onExplore = step === NOTES.length - 1;
  const { quantity } = useGlide({ quantity: onExplore ? exploredQuantity : 30 }, onExplore);
  const [fullFrame] = sketch.frames;
  const zoomSlope = Math.max(Math.abs(marginal(quantity)), 12);
  const zoomLow = cost(quantity) - zoomSlope * 0.45;
  const zoomHigh = cost(quantity) + zoomSlope * 1.6;
  const zoomXLow = quantity - 0.5, zoomXHigh = quantity + 1.8;
  const zoomBox = sketch.frames[1];
  const zoomX = (value: number) => zoomBox.left + ((value - zoomXLow) / (zoomXHigh - zoomXLow)) * (zoomBox.right - zoomBox.left);
  const zoomY = (value: number) => zoomBox.bottom - ((value - zoomLow) / (zoomHigh - zoomLow)) * (zoomBox.bottom - zoomBox.top);
  const zoomFrame = { ...zoomBox, x: zoomX, y: zoomY, xMin: zoomXLow, xMax: zoomXHigh, yMin: zoomLow, yMax: zoomHigh };
  const nextCost = cost(quantity + 1);
  const exactExtra = nextCost - cost(quantity);
  const estimate = marginal(quantity);
  const tex = show(3)
    ? `C(${fmt(quantity + 1, 1)}) - C(${fmt(quantity, 1)}) = ${fmt(exactExtra, 2)} \\approx C'(${fmt(quantity, 1)}) = ${fmt(estimate, 2)}`
    : show(2)
      ? `C'(x) = 100 - 2x,\\quad C'(${fmt(quantity, 1)}) = ${fmt(estimate, 2)}`
      : show(1)
        ? `C(${fmt(quantity + 1, 1)}) - C(${fmt(quantity, 1)}) = ${fmt(nextCost, 1)} - ${fmt(cost(quantity), 1)} = ${fmt(exactExtra, 2)}`
        : "C(x) = 300 + 100x - x^2";

  return (
    <SketchGraph
      sketch={sketch}
      note={NOTES[step]}
      tex={tex}
      ariaLabel={`At ${fmt(quantity, 1)} units, marginal cost is ${fmt(estimate, 2)} and the exact extra cost is ${fmt(exactExtra, 2)}.`}
      explore={<div class="graph-sliders"><Slider label="units x" value={exploredQuantity} min={2} max={45} step={1} onInput={setExploredQuantity} /></div>}
    >
      <SketchAxes frame={fullFrame} id="marginal-full-axes" xTicks={[0, 10, 20, 30, 40, 50]} yTicks={[1000, 2000, 3000]} xLabel="x" formatTick={(value) => `${value / 1000}k`} />
      <CalcCurve sketch={sketch} frame={fullFrame} value={cost} from={0} to={50} id="marginal-curve" color={ACCENT} draw={sketch.drawNow(0)} />
      <InkDashed x1={fullFrame.x(quantity)} y1={fullFrame.y(cost(quantity))} x2={fullFrame.x(quantity)} y2={fullFrame.bottom} id={`marginal-drop-${fmt(quantity, 1)}`} color={INK_SOFT} width={1} />
      <Dot x={fullFrame.x(quantity)} y={fullFrame.y(cost(quantity))} color={MARKER.blue} radius={5} />

      <InkLine x1={zoomBox.left} y1={zoomBox.bottom} x2={zoomBox.right} y2={zoomBox.bottom} id="marginal-zoom-base" color={INK_SOFT} width={1.3} />
      <text x={zoomX(quantity)} y={zoomBox.bottom + 16} text-anchor="middle" class="sk-tick">{fmt(quantity, 1)}</text>
      <text x={zoomX(quantity + 1)} y={zoomBox.bottom + 16} text-anchor="middle" class="sk-tick">{fmt(quantity + 1, 1)}</text>
      <CalcCurve sketch={sketch} frame={zoomFrame} panel={1} value={cost} from={zoomXLow} to={zoomXHigh} id="marginal-zoom-curve" color={ACCENT} />
      {show(2) && <CalcLine sketch={sketch} frame={zoomFrame} panel={1} x0={quantity} y0={cost(quantity)} slope={estimate} id="marginal-tangent" color={MARKER.green} width={1.8} dashed />}
      <Dot x={zoomX(quantity)} y={zoomY(cost(quantity))} color={MARKER.blue} radius={5} />
      {show(1) && (
        <g>
          <InkDashed x1={zoomX(quantity + 1)} y1={zoomBox.bottom} x2={zoomX(quantity + 1)} y2={zoomY(Math.max(nextCost, cost(quantity) + estimate))} id={`marginal-next-${fmt(quantity, 1)}`} color={INK_SOFT} width={1} />
          <Dot x={zoomX(quantity + 1)} y={zoomY(nextCost)} color={MARKER.red} radius={5} />
          <Note x={zoomX(quantity + 1) + 8} y={zoomY(nextCost) + 18} text={`true +${fmt(exactExtra, 1)}`} color={MARKER.red} size={16} />
        </g>
      )}
      {show(2) && (
        <g>
          <Dot x={zoomX(quantity + 1)} y={zoomY(cost(quantity) + estimate)} color={MARKER.green} radius={4.5} />
          <Note x={zoomX(quantity + 1) - 8} y={zoomY(cost(quantity) + estimate) - 9} text={`estimate +${fmt(estimate, 1)}`} color={MARKER.green} anchor="end" size={16} />
        </g>
      )}
    </SketchGraph>
  );
}
