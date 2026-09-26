import { useState } from "preact/hooks";
import type { VNode } from "preact";
import {
  useSketch, SketchGraph, SketchAxes, InkLine, InkDashed, Hatch, Note, Dot,
  niceTicks, niceCeil, fmt, clamp, INK, INK_SOFT, ACCENT, MARKER, WASH,
} from "./sketch";

// One uniform price, a handful of buyers with known willingness to pay (WTP).
// The buyers form a staircase demand curve; each candidate price sells to
// everyone whose WTP is at least that price. Steps: the staircase → MC → try
// each candidate price → the best price → explore (drag the price).
//   type: uniform-pricing
//   wtp: 900,1100,1300,1500
//   cost: 1000
//   good: computers

interface Props { wtp?: string; cost?: number; good?: string; }

export default function UniformPricing({ wtp = "900,1100,1300,1500", cost = 1000, good = "units" }: Props): VNode {
  const valuations = String(wtp).split(",").map(Number).filter(Number.isFinite).sort((a, b) => b - a);
  const candidates = [...valuations].sort((a, b) => a - b);
  const buyersAt = (price: number) => valuations.filter((value) => value >= price - 1e-9).length;
  const profitAt = (price: number) => buyersAt(price) * (price - cost);
  const bestPrice = candidates.reduce((best, price) => (profitAt(price) > profitAt(best) ? price : best), candidates[0]);
  const [explorePrice, setExplorePrice] = useState(bestPrice);

  const NOTES = [
    `Each buyer wants one of the ${good}. Line them up from highest willingness to pay to lowest.`,
    `Marginal cost is ${fmt(cost)} per unit.`,
    ...candidates.map((price) => {
      const profit = profitAt(price);
      return `Price ${fmt(price)}: ${buyersAt(price)} buyer${buyersAt(price) === 1 ? "" : "s"}, ${profit < 0 ? "a loss" : "a margin of " + fmt(price - cost) + " each"}.`;
    }),
    `The best single price is ${fmt(bestPrice)}, for a profit of ${fmt(profitAt(bestPrice))}.`,
    "Your turn. Drag the price and watch who buys.",
  ];
  const firstCandidateStep = 2, bestStep = firstCandidateStep + candidates.length, exploreStep = bestStep + 1;

  const priceMax = niceCeil(valuations[0] * 1.15);
  const priceMin = Math.max(0, Math.floor((Math.min(cost, candidates[0]) * 0.8) / 100) * 100);
  const sketch = useSketch({
    stepCount: NOTES.length,
    domains: [{ xMax: valuations.length + 0.4, yMin: priceMin, yMax: priceMax }],
    aspect: 0.64,
    maxWidth: 620,
    padding: { left: 52, bottom: 44, top: 22 },
  });
  const { show, drawNow, step } = sketch;
  const frame = sketch.frames[0];
  const toX = frame.x, toY = frame.y;

  const priceInFocus = step >= firstCandidateStep && step < bestStep
    ? candidates[step - firstCandidateStep]
    : step === bestStep ? bestPrice : step === exploreStep ? explorePrice : null;

  const TEX = [
    `\\text{WTP} = ${valuations.map((value) => fmt(value)).join(",\\ ")}`,
    `MC = ${fmt(cost)}`,
    ...candidates.map((price) => `\\pi(${fmt(price)}) = ${buyersAt(price)} \\times (${fmt(price)} - ${fmt(cost)}) = ${fmt(profitAt(price))}`),
    `p^* = ${fmt(bestPrice)},\\quad \\pi^* = ${fmt(profitAt(bestPrice))}`,
    `\\pi(${fmt(explorePrice)}) = ${buyersAt(explorePrice)} \\times (${fmt(explorePrice)} - ${fmt(cost)}) = ${fmt(profitAt(explorePrice))}`,
  ];

  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={valuations.map((_, index) => index + 1)} yTicks={niceTicks(priceMin, priceMax, 5)} xLabel="buyers" yLabel="price" />];
  const plot: VNode[] = [];
  if (priceInFocus !== null) {
    const buyers = buyersAt(priceInFocus), isGain = priceInFocus >= cost;
    if (buyers > 0 && Math.abs(priceInFocus - cost) > 1e-6) {
      plot.push(<Hatch
        points={[[toX(0), toY(priceInFocus)], [toX(buyers), toY(priceInFocus)], [toX(buyers), toY(cost)], [toX(0), toY(cost)]]}
        id={`${sketch.uid}-profit-${priceInFocus}`} wash={isGain ? WASH.green : WASH.red} ink={isGain ? MARKER.green : MARKER.red} angle={isGain ? -1 : 1}
        draw={step !== exploreStep && drawNow(step)} />);
    }
  }
  // the staircase: buyer k (1-indexed) sits on [k-1, k] at height WTP_k
  valuations.forEach((value, index) => {
    plot.push(<InkLine x1={toX(index)} y1={toY(value)} x2={toX(index + 1)} y2={toY(value)} id={`stair-top-${index}`} color={INK} width={2.4} delay={index * 180} duration={300} draw={drawNow(0)} />);
    const next = valuations[index + 1];
    if (next !== undefined) plot.push(<InkLine x1={toX(index + 1)} y1={toY(value)} x2={toX(index + 1)} y2={toY(next)} id={`stair-drop-${index}`} color={INK} width={1.6} delay={index * 180 + 150} duration={150} draw={drawNow(0)} />);
  });
  if (show(1)) plot.push(<InkDashed x1={frame.left} y1={toY(cost)} x2={frame.right} y2={toY(cost)} id="mc" color={MARKER.grey} draw={drawNow(1)} />);
  if (priceInFocus !== null) plot.push(<InkDashed x1={frame.left} y1={toY(priceInFocus)} x2={frame.right} y2={toY(priceInFocus)} id={`price-${step}`} color={ACCENT} width={1.6} dash={6} gap={4} draw={step !== exploreStep && drawNow(step)} />);
  drawing.push(<g clip-path={sketch.clip()}>{plot}</g>);

  valuations.forEach((value, index) => drawing.push(<Dot x={toX(index + 0.5)} y={toY(value)} color={INK} radius={3.5} draw={drawNow(0)} delay={index * 180} />));
  if (show(1)) drawing.push(<Note x={frame.right - 4} y={toY(cost) + 20} text={`MC = ${fmt(cost)}`} color={MARKER.grey} anchor="end" size={18} draw={drawNow(1)} />);
  if (priceInFocus !== null) {
    const buyers = buyersAt(priceInFocus), profit = profitAt(priceInFocus);
    drawing.push(<Note x={frame.right - 4} y={toY(priceInFocus) - 8} text={`p = ${fmt(priceInFocus)}`} color={ACCENT} anchor="end" size={19} />);
    if (buyers > 0 && Math.abs(toY(priceInFocus) - toY(cost)) > 18) {
      drawing.push(<Note x={toX(buyers / 2)} y={(toY(priceInFocus) + toY(cost)) / 2 + 6} text={`${profit >= 0 ? "+" : ""}${fmt(profit)}`} color={profit >= 0 ? MARKER.green : MARKER.red} anchor="middle" size={21} />);
    }
  }
  if (step === exploreStep) {
    drawing.push(sketch.handle({
      key: "price", x: valuations.length + 0.2, y: explorePrice, axis: "y", hint: "left",
      onDrag: (_dataX, dataY) => setExplorePrice(clamp(Math.round(dataY / 50) * 50, priceMin, priceMax)),
    }));
  }
  if (show(bestStep) && step !== exploreStep) drawing.push(<Note x={toX(0.1)} y={frame.top + 10} text={`best: p = ${fmt(bestPrice)}`} color={INK_SOFT} size={18} draw={drawNow(bestStep)} />);

  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]}
      ariaLabel={`Uniform pricing with willingness to pay ${valuations.join(", ")} and marginal cost ${cost}. Best price ${bestPrice}, profit ${profitAt(bestPrice)}.`}>
      {drawing}
    </SketchGraph>
  );
}
