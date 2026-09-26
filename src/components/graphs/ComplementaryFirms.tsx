import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { Slider } from "./plot";
import { useSketch, SketchGraph, SketchAxes, InkCurve, InkDashed, Note, Dot, curvePoints, fmt, INK, ACCENT, MARKER } from "./sketch";

// N complementary monopolists (Topic 4): each prices one component of a bundle
// with demand Q = A − P, where P is the sum of all N prices.
//   Total price P = AN/(N + 1),  quantity Q = A/(N + 1),  industry profit NA²/(N + 1)²
// More firms ⇒ higher price, lower quantity, lower profit: the opposite of
// competition in substitutes.

const N_MAX = 10;

const NOTES = [
  "One monopolist (N = 1) prices the whole bundle.",
  "Split it among N firms: each ignores the harm its price does to the others, so the total price climbs toward A.",
  "Quantity falls as N grows.",
  "Industry profit falls too: everyone is worse off.",
  "Your turn. Change the number of firms.",
];

export default function ComplementaryFirms({ A: intercept = 6 }: { A?: number }): VNode {
  const [firms, setFirms] = useState(2);
  const sketch = useSketch({
    stepCount: NOTES.length,
    domains: [{ xMin: 1, xMax: N_MAX, yMax: intercept * 1.1 }, { xMin: 1, xMax: N_MAX, yMax: (intercept * intercept) / 4 * 1.1 }],
    aspect: 0.8, minHeight: 240, maxHeight: 320, maxWidth: 720,
    padding: { left: 40, bottom: 40, top: 16 },
    panelTitles: ["Price and quantity", "Industry profit"],
  });
  const { show, drawNow, step } = sketch;
  const [left, right] = sketch.frames;
  const totalPrice = (count: number) => (intercept * count) / (count + 1);
  const quantity = (count: number) => intercept / (count + 1);
  const industryProfit = (count: number) => (count * intercept * intercept) / ((count + 1) * (count + 1));
  const focus = step === 4 ? firms : step === 0 ? 1 : 3;

  const TEX = [
    `N = 1:\\; P = \\tfrac{A}{2} = ${fmt(totalPrice(1))},\\; Q = ${fmt(quantity(1))},\\; \\Pi = ${fmt(industryProfit(1))}`,
    `P = \\tfrac{AN}{N+1} \\to A = ${fmt(intercept)}`,
    `Q = \\tfrac{A}{N+1} \\to 0`,
    `\\Pi = \\tfrac{NA^2}{(N+1)^2} \\to 0`,
    `N = ${firms}:\\; P = ${fmt(totalPrice(firms), 2)},\\; Q = ${fmt(quantity(firms), 2)},\\; \\Pi = ${fmt(industryProfit(firms), 2)}`,
  ];

  const leftParts: VNode[] = [<SketchAxes frame={left} id="axes-left" xTicks={[1, 4, 7, 10]} yTicks={[0, intercept / 2, intercept].map((value) => Math.round(value * 10) / 10)} xLabel="N" />];
  const rightParts: VNode[] = [<SketchAxes frame={right} id="axes-right" xTicks={[1, 4, 7, 10]} yTicks={[0, (intercept * intercept) / 8, (intercept * intercept) / 4].map((value) => Math.round(value * 10) / 10)} xLabel="N" />];
  leftParts.push(<InkDashed x1={left.left} y1={left.y(intercept)} x2={left.right} y2={left.y(intercept)} id="choke" color={MARKER.grey} width={1.3} />);
  leftParts.push(<Note x={left.right - 4} y={left.y(intercept) - 7} text="A" color={MARKER.grey} anchor="end" size={17} />);
  if (show(1)) leftParts.push(<InkCurve points={curvePoints(left, totalPrice, 1, N_MAX, 40)} id="price" color={MARKER.red} width={2.3} draw={drawNow(1)} />);
  if (show(2)) leftParts.push(<InkCurve points={curvePoints(left, quantity, 1, N_MAX, 40)} id="quantity" color={MARKER.blue} width={2.3} draw={drawNow(2)} />);
  if (show(3)) rightParts.push(<InkCurve points={curvePoints(right, industryProfit, 1, N_MAX, 40)} id="profit" color={MARKER.green} width={2.3} draw={drawNow(3)} />);
  leftParts.push(<Dot x={left.x(1)} y={left.y(totalPrice(1))} color={INK} draw={drawNow(0)} />);
  leftParts.push(<Note x={left.x(1) + 10} y={left.y(totalPrice(1)) + 20} text="monopoly" color={INK} size={17} draw={drawNow(0)} />);
  if (show(1)) {
    leftParts.push(<Dot x={left.x(focus)} y={left.y(totalPrice(focus))} color={MARKER.red} />);
    leftParts.push(<Note x={left.x(N_MAX) - 4} y={left.y(totalPrice(N_MAX)) + 20} text="total price" color={MARKER.red} anchor="end" size={17} draw={drawNow(1)} />);
  }
  if (show(2)) {
    leftParts.push(<Dot x={left.x(focus)} y={left.y(quantity(focus))} color={MARKER.blue} />);
    leftParts.push(<Note x={left.x(N_MAX) - 4} y={left.y(quantity(N_MAX)) - 8} text="quantity" color={MARKER.blue} anchor="end" size={17} draw={drawNow(2)} />);
  }
  if (show(3)) {
    rightParts.push(<Dot x={right.x(focus)} y={right.y(industryProfit(focus))} color={MARKER.green} />);
    rightParts.push(<Note x={right.x(1) + 10} y={right.y(industryProfit(1)) + 4} text="monopoly maximises profit" color={MARKER.green} size={17} draw={drawNow(3)} />);
  }
  if (step === 4) leftParts.push(sketch.handle({ key: "firms", x: firms, y: 0, axis: "x", hint: "above", onDrag: (dataX) => setFirms(Math.max(1, Math.min(N_MAX, Math.round(dataX)))) }));

  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} ariaLabel="Complementary monopolists: total price rises and quantity and profit fall as the number of firms grows."
      explore={<div class="graph-sliders"><Slider label="number of firms N" value={firms} min={1} max={N_MAX} step={1} onInput={setFirms} /></div>}>
      <g>{leftParts}</g>
      <g>{rightParts}</g>
    </SketchGraph>
  );
}
