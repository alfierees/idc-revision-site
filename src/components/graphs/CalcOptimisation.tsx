import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, useGlide, SketchGraph, SketchAxes, InkDashed, Note, Dot, Slider, Presets, fmt, ACCENT, MARKER, WASH, INK_SOFT } from "./sketch";
import { CalcCurve, CalcLine } from "./CalcKit";

// Lec 02 factory: demand x = 6000 - 30p, C(p) = 432000 - 1800p, R(p) = 6000p - 30p².
// Profit is positive for 80 < p < 180 and peaks at p = 130 with 75,000.

const revenue = (price: number) => 6000 * price - 30 * price * price;
const cost = (price: number) => 432000 - 1800 * price;
const profit = (price: number) => revenue(price) - cost(price);
const marginalProfit = (price: number) => 7800 - 60 * price;
const BREAK_EVEN_LOW = 80, BREAK_EVEN_HIGH = 180, BEST_PRICE = 130;
const thousands = (value: number) => `${fmt(value / 1000, 0)}k`;
const STOPS = [
  { price: 40, note: "Revenue (blue) and cost (green) as functions of the price the factory charges." },
  { price: BREAK_EVEN_LOW, note: "Where the curves cross, revenue equals cost: break-even at p = 80 and p = 180." },
  { price: 105, note: "Between them revenue is above cost, so profit is positive. The tangent to profit still rises." },
  { price: BEST_PRICE, note: "Maximum profit is where the slope of profit is 0: π′(p) = 7800 - 60p = 0, so p = 130." },
];
const NOTE_EXPLORE = "Your turn. Slide the price and watch profit and its tangent.";

export default function CalcOptimisation(): VNode {
  const [exploredPrice, setExploredPrice] = useState(BEST_PRICE);
  const stepCount = STOPS.length + 1;
  const sketch = useSketch({
    stepCount,
    domains: [{ xMin: 0, xMax: 200, yMin: 0, yMax: 450000 }, { xMin: 0, xMax: 200, yMin: -140000, yMax: 110000 }],
    aspect: 0.72, minHeight: 225, maxHeight: 300, maxWidth: 760, padding: { left: 48, bottom: 36, top: 14 },
    panelTitles: ["Revenue and cost", "Profit π(p) = R - C"],
  });
  const { step, show } = sketch;
  const [moneyFrame, profitFrame] = sketch.frames;
  const onExplore = step === stepCount - 1;
  const { price } = useGlide({ price: onExplore ? exploredPrice : STOPS[step].price }, onExplore);
  const currentProfit = profit(price);
  const slope = marginalProfit(price);
  const tex = step === 3
    ? "\\pi'(p) = 7800 - 60p = 0 \\;\\Rightarrow\\; p = 130,\\quad \\pi(130) = 75{,}000"
    : `p = ${fmt(price, 0)}:\\; R = ${fmt(revenue(price), 0)},\\; C = ${fmt(cost(price), 0)},\\; \\pi = ${fmt(currentProfit, 0)}`;
  const bandLeft = profitFrame.x(BREAK_EVEN_LOW), bandRight = profitFrame.x(BREAK_EVEN_HIGH);

  return (
    <SketchGraph
      sketch={sketch}
      note={onExplore ? NOTE_EXPLORE : STOPS[step].note}
      tex={tex}
      ariaLabel={`At price ${fmt(price, 0)}, profit is ${fmt(currentProfit, 0)}. Maximum profit 75,000 at price 130.`}
      explore={<>
        <div class="graph-sliders"><Slider label="price p" value={exploredPrice} min={0} max={200} step={5} onInput={setExploredPrice} /></div>
        <Presets presets={[{ label: "Break-even (80)", apply: () => setExploredPrice(80) }, { label: "Best (130)", apply: () => setExploredPrice(130) }, { label: "Break-even (180)", apply: () => setExploredPrice(180) }]} />
      </>}
    >
      <SketchAxes frame={moneyFrame} id="optimisation-money-axes" xTicks={[0, 50, 100, 150, 200]} yTicks={[100000, 200000, 300000, 400000]} formatTick={thousands} />
      <SketchAxes frame={profitFrame} id="optimisation-profit-axes" xTicks={[0, 50, 100, 150, 200]} yTicks={[-100000, 0, 100000]} formatTick={thousands} hideZero={false} />
      {show(2) && <rect x={bandLeft} y={profitFrame.top} width={bandRight - bandLeft} height={profitFrame.bottom - profitFrame.top} style={`fill:${WASH.green}`} />}
      <CalcCurve sketch={sketch} frame={moneyFrame} value={revenue} from={0} to={200} id="optimisation-revenue" color={MARKER.blue} draw={sketch.drawNow(0)} />
      <CalcCurve sketch={sketch} frame={moneyFrame} value={cost} from={0} to={200} id="optimisation-cost" color={MARKER.green} draw={sketch.drawNow(0)} />
      <CalcCurve sketch={sketch} frame={profitFrame} panel={1} value={profit} from={0} to={200} id="optimisation-profit" color={ACCENT} draw={sketch.drawNow(0)} />
      <Note x={moneyFrame.x(100)} y={moneyFrame.y(revenue(100)) - 8} text="R" color={MARKER.blue} anchor="middle" size={18} />
      <Note x={moneyFrame.x(22)} y={moneyFrame.y(cost(22)) - 8} text="C" color={MARKER.green} anchor="middle" size={18} />
      {show(1) && [BREAK_EVEN_LOW, BREAK_EVEN_HIGH].map((point) => (
        <g>
          <Dot x={moneyFrame.x(point)} y={moneyFrame.y(revenue(point))} color={MARKER.red} radius={4.5} />
          <Dot x={profitFrame.x(point)} y={profitFrame.y(0)} color={MARKER.red} radius={4.5} />
          <Note x={profitFrame.x(point)} y={profitFrame.y(0) + 20} text={String(point)} color={MARKER.red} anchor="middle" size={16} />
        </g>
      ))}
      <InkDashed x1={moneyFrame.x(price)} y1={moneyFrame.top} x2={moneyFrame.x(price)} y2={moneyFrame.bottom} id={`optimisation-top-${fmt(price, 0)}`} color={INK_SOFT} width={1} />
      <InkDashed x1={profitFrame.x(price)} y1={profitFrame.top} x2={profitFrame.x(price)} y2={profitFrame.bottom} id={`optimisation-bottom-${fmt(price, 0)}`} color={INK_SOFT} width={1} />
      <Dot x={moneyFrame.x(price)} y={moneyFrame.y(revenue(price))} color={MARKER.blue} radius={4.5} />
      <Dot x={moneyFrame.x(price)} y={moneyFrame.y(cost(price))} color={MARKER.green} radius={4.5} />
      {show(2) && <CalcLine sketch={sketch} frame={profitFrame} panel={1} x0={price} y0={currentProfit} slope={slope} id="optimisation-tangent" color={MARKER.purple} width={1.7} />}
      <Dot x={profitFrame.x(price)} y={profitFrame.y(Math.max(-140000, currentProfit))} color={ACCENT} radius={5} />
      {Math.abs(price - BEST_PRICE) < 1 && <Note x={profitFrame.x(BEST_PRICE)} y={profitFrame.y(75000) - 10} text="max 75k" color={MARKER.green} anchor="middle" size={17} />}
    </SketchGraph>
  );
}
