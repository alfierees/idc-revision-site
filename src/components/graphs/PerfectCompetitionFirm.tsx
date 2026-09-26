import { useState } from "preact/hooks";
import type { VNode } from "preact";
import {
  useSketch, useGlide, SketchGraph, SketchAxes, InkLine, InkCurve, InkDashed, Hatch, Note, Dot, Ring, Presets,
  curvePoints, fmt, clamp, INK, ACCENT, MARKER, WASH, Slider,
} from "./sketch";

// A price-taking firm with C(q) = F + ½q², so MC = q and AC = F/q + ½q.
// Steps: MC → AC → the market price → produce where P = MC → profit or loss →
// the long-run price at min AC, then explore (drag the price; F slider).

interface Props { p?: number; f?: number; }

const QUANTITY_MAX = 12, COST_MAX = 14;

const NOTES = [
  "Marginal cost rises with output: MC = q.",
  "Average cost is U-shaped. Fixed cost is spread thin, then rising MC takes over.",
  "The firm is a price-taker: it can sell any amount at the market price.",
  "It produces where price equals marginal cost.",
  "Profit (or loss) is the gap between P and AC, times q.",
  "In the long run, entry and exit push the price to the bottom of AC.",
  "Your turn. Drag the price line, or change the fixed cost.",
];

export default function PerfectCompetitionFirm({ p: initialPrice = 5, f: initialFixed = 12.5 }: Props): VNode {
  const [target, setTarget] = useState({ price: initialPrice, fixed: initialFixed });
  const sketch = useSketch({
    stepCount: NOTES.length,
    domains: [{ xMax: QUANTITY_MAX, yMax: COST_MAX }],
    padding: { left: 40, bottom: 40, top: 20 },
  });
  const shown = useGlide(target, sketch.dragging !== null);
  const { show, drawNow, step } = sketch;
  const frame = sketch.frames[0];
  const toX = frame.x, toY = frame.y;

  const price = shown.price, fixed = shown.fixed;
  const averageCost = (quantity: number) => fixed / quantity + 0.5 * quantity;
  const quantity = Math.min(price, QUANTITY_MAX);
  const averageAtQuantity = averageCost(quantity);
  const profit = (price - averageAtQuantity) * quantity;
  const breakEvenQuantity = Math.sqrt(2 * fixed);
  const longRunPrice = averageCost(breakEvenQuantity);
  const isProfit = price >= averageAtQuantity;

  const TEX = [
    `C(q) = ${fmt(fixed)} + \\tfrac12 q^2 \\;\\Rightarrow\\; MC = q`,
    `AC = \\frac{${fmt(fixed)}}{q} + \\tfrac12 q`,
    `P = ${fmt(price)} = MR`,
    `P = MC \\;\\Rightarrow\\; q^* = ${fmt(quantity)}`,
    `\\pi = (P - AC)\\,q^* = (${fmt(price)} - ${fmt(averageAtQuantity)})(${fmt(quantity)}) = ${fmt(profit)}`,
    `\\min AC:\\; q = \\sqrt{2F} = ${fmt(breakEvenQuantity)},\\quad P_{LR} = ${fmt(longRunPrice)}`,
    `q^* = ${fmt(quantity)},\\quad \\pi = ${fmt(profit)},\\quad P_{LR} = ${fmt(longRunPrice)}`,
  ];

  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={[0, 2, 4, 6, 8, 10, 12]} yTicks={[2, 4, 6, 8, 10, 12, 14]} xLabel="q" yLabel="$" />];
  const plot: VNode[] = [];
  if (show(4) && quantity > 0) {
    const low = Math.min(price, averageAtQuantity), high = Math.max(price, averageAtQuantity);
    plot.push(<Hatch
      points={[[toX(0), toY(high)], [toX(quantity), toY(high)], [toX(quantity), toY(low)], [toX(0), toY(low)]]}
      id={`${sketch.uid}-profit-${isProfit ? "p" : "l"}`} wash={isProfit ? WASH.green : WASH.red} ink={isProfit ? MARKER.green : MARKER.red} angle={isProfit ? -1 : 1} draw={drawNow(4)} />);
  }
  plot.push(<InkLine x1={toX(0)} y1={toY(0)} x2={toX(COST_MAX)} y2={toY(COST_MAX)} id="mc" color={MARKER.green} width={2.3} duration={700} draw={drawNow(0)} />);
  if (show(1)) plot.push(<InkCurve points={curvePoints(frame, averageCost, 0.6, QUANTITY_MAX, 70)} id="ac" color={MARKER.blue} width={2.3} draw={drawNow(1)} />);
  if (show(2)) plot.push(<InkDashed x1={toX(0)} y1={toY(price)} x2={frame.right} y2={toY(price)} id="price" color={INK} width={2} draw={drawNow(2)} />);
  if (show(3)) plot.push(<InkDashed x1={toX(quantity)} y1={toY(price)} x2={toX(quantity)} y2={frame.bottom} id="q-guide" color={MARKER.green} width={1.3} dash={4} gap={4} delay={300} draw={drawNow(3)} />);
  if (show(5)) plot.push(<InkDashed x1={toX(0)} y1={toY(longRunPrice)} x2={toX(breakEvenQuantity)} y2={toY(longRunPrice)} id="lr" color={MARKER.red} width={1.3} dash={4} gap={4} draw={drawNow(5)} />);
  drawing.push(<g clip-path={sketch.clip()}>{plot}</g>);

  drawing.push(<Note x={toX(11.2)} y={toY(11.2) + 4} text="MC" color={MARKER.green} anchor="end" size={20} draw={drawNow(0)} />);
  if (show(1)) drawing.push(<Note x={toX(QUANTITY_MAX) - 4} y={toY(averageCost(QUANTITY_MAX)) - 10} text="AC" color={MARKER.blue} anchor="end" size={20} draw={drawNow(1)} />);
  if (show(2) && step !== 6) drawing.push(<Note x={frame.right - 4} y={toY(price) - 8} text={`P = ${fmt(price)}`} color={INK} anchor="end" size={19} draw={drawNow(2)} />);
  if (show(3)) {
    drawing.push(<Ring x={toX(quantity)} y={toY(price)} id="ring-p-mc" color={ACCENT} draw={drawNow(3)} />);
    drawing.push(<Note x={toX(quantity)} y={frame.bottom + 32} text={`q* = ${fmt(quantity)}`} color={MARKER.green} anchor="middle" size={18} delay={300} draw={drawNow(3)} />);
  }
  if (show(4) && Math.abs(toY(price) - toY(averageAtQuantity)) > 16) {
    drawing.push(<Note x={toX(quantity / 2)} y={(toY(price) + toY(averageAtQuantity)) / 2 + 6} text={isProfit ? "profit" : "loss"} color={isProfit ? MARKER.green : MARKER.red} anchor="middle" size={19} draw={drawNow(4)} />);
  }
  if (show(5)) {
    drawing.push(<Dot x={toX(breakEvenQuantity)} y={toY(longRunPrice)} color={MARKER.red} draw={drawNow(5)} />);
    drawing.push(<Note x={toX(breakEvenQuantity) + 10} y={toY(longRunPrice) + 22} text={`min AC = ${fmt(longRunPrice)}`} color={MARKER.red} size={18} delay={300} draw={drawNow(5)} />);
  }
  if (step === 6) {
    drawing.push(sketch.handle({
      key: "price", x: frame.dataX(frame.right - 18), y: price, axis: "y", hint: "above",
      onDrag: (_dataX, dataY) => setTarget((current) => ({ ...current, price: clamp(Math.round(dataY * 2) / 2, 1, 12) })),
    }));
  }

  const status = price > longRunPrice + 0.05 ? "profit, so firms enter" : price < longRunPrice - 0.05 ? "loss, so firms exit" : "zero profit: long-run equilibrium";
  const update = (changes: Partial<typeof target>) => setTarget((current) => ({ ...current, ...changes }));

  return (
    <SketchGraph
      sketch={sketch}
      note={step === 6 ? `${NOTES[6]} Right now: ${status}.` : NOTES[step]}
      tex={TEX[step]}
      ariaLabel={`Perfectly competitive firm. Price ${fmt(price)}, output ${fmt(quantity)}, profit ${fmt(profit)}, long-run price ${fmt(longRunPrice)}.`}
      explore={<>
        <div class="graph-sliders">
          <Slider label="price P" value={target.price} min={1} max={12} step={0.5} onInput={(value) => update({ price: value })} />
          <Slider label="fixed cost F" value={target.fixed} min={2} max={32} step={0.5} onInput={(value) => update({ fixed: value })} />
        </div>
        <Presets presets={[
          { label: "Demand falls (P = 3)", apply: () => update({ price: 3 }) },
          { label: "Long-run price", apply: () => update({ price: Math.round(longRunPrice * 2) / 2 }) },
          { label: "Cheaper technology", apply: () => update({ fixed: Math.max(2, target.fixed / 2) }) },
          { label: "Reset", apply: () => setTarget({ price: initialPrice, fixed: initialFixed }) },
        ]} />
      </>}
    >
      {drawing}
    </SketchGraph>
  );
}
