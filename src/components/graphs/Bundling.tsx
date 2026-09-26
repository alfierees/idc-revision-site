import { useState } from "preact/hooks";
import type { VNode } from "preact";
import {
  useSketch, SketchGraph, SketchAxes, InkLine, InkDashed, Hatch, Note, Dot,
  niceTicks, niceCeil, fmt, clamp, INK, INK_SOFT, ACCENT, MARKER, WASH,
} from "./sketch";

// Bundling in reservation-price space: each consumer is a point (RP for good X,
// RP for good Y). Separate prices split the square into buy-X / buy-Y regions;
// a bundle price is a diagonal line (buy if RP_X + RP_Y ≥ bundle price).
// Best separate and bundle prices are found by trying every consumer's value.
//   type: bundling
//   consumers: Type 1:100,20,40;Type 2:20,100,40;Type 3:60,60,20    (name:x,y,count)
//   costX: 30    costY: 30
//   goodX: X     goodY: Y

interface Props { consumers?: string; costX?: number; costY?: number; goodX?: string; goodY?: string; }

interface Consumer { name: string; x: number; y: number; count: number; }

export default function Bundling({ consumers = "C1:90,10,1;C2:80,40,1;C3:40,80,1;C4:10,90,1", costX = 0, costY = 0, goodX = "X", goodY = "Y" }: Props): VNode {
  const people: Consumer[] = String(consumers).split(";").map((chunk) => {
    const [name, values] = chunk.split(":");
    const [x, y, count] = values.split(",").map(Number);
    return { name: name.trim(), x, y, count: Number.isFinite(count) ? count : 1 };
  });
  const bestPrice = (values: number[], counts: number[], cost: number) => {
    let best = { price: values[0], profit: -Infinity };
    for (const price of values) {
      const buyers = values.reduce((total, value, index) => total + (value >= price ? counts[index] : 0), 0);
      const profit = buyers * (price - cost);
      if (profit > best.profit) best = { price, profit };
    }
    return best;
  };
  const counts = people.map((person) => person.count);
  const separateX = bestPrice(people.map((person) => person.x), counts, costX);
  const separateY = bestPrice(people.map((person) => person.y), counts, costY);
  const bundleBest = bestPrice(people.map((person) => person.x + person.y), counts, costX + costY);
  const [bundlePrice, setBundlePrice] = useState(bundleBest.price);
  const bundleBuyers = people.reduce((total, person) => total + (person.x + person.y >= bundlePrice ? person.count : 0), 0);
  const bundleProfit = bundleBuyers * (bundlePrice - costX - costY);
  const separateTotal = separateX.profit + separateY.profit;
  const costNote = costX || costY ? ` (costs ${fmt(costX)} and ${fmt(costY)})` : "";

  const NOTES = [
    `Each dot is a consumer type: how much they would pay for ${goodX} (across) and ${goodY} (up).`,
    `Selling ${goodX} alone: the best price is ${fmt(separateX.price)}. Everyone to the right buys it.`,
    `Selling ${goodY} alone: the best price is ${fmt(separateY.price)}. Separate profit: ${fmt(separateTotal)}${costNote}.`,
    `A bundle at ${fmt(bundleBest.price)}: everyone on or above the diagonal buys both. Profit ${fmt(bundleBest.profit)}.`,
    "Your turn. Drag the bundle price.",
  ];
  const TEX = [
    people.map((person) => `\\text{${person.name}}: (${fmt(person.x)}, ${fmt(person.y)})${person.count !== 1 ? `\\times ${person.count}` : ""}`).join(",\\;"),
    `p_{${goodX}} = ${fmt(separateX.price)} \\;\\Rightarrow\\; \\pi_{${goodX}} = ${fmt(separateX.profit)}`,
    `\\pi_{\\text{separate}} = ${fmt(separateX.profit)} + ${fmt(separateY.profit)} = ${fmt(separateTotal)}`,
    `p_B = ${fmt(bundleBest.price)} \\;\\Rightarrow\\; \\pi_B = ${fmt(bundleBest.profit)} ${bundleBest.profit > separateTotal ? ">" : "\\le"} ${fmt(separateTotal)}`,
    `p_B = ${fmt(bundlePrice)}:\\; ${bundleBuyers} \\text{ buyers},\\; \\pi_B = ${fmt(bundleProfit)}`,
  ];

  const axisMax = niceCeil(Math.max(...people.map((person) => Math.max(person.x, person.y))) * 1.2);
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMax: axisMax, yMax: axisMax }], aspect: 0.82, maxWidth: 560, padding: { left: 44, bottom: 44, top: 22 } });
  const { show, drawNow, step } = sketch;
  const frame = sketch.frames[0];
  const toX = frame.x, toY = frame.y;
  const ticks = niceTicks(0, axisMax, 5);
  const shownBundle = step === 4 ? bundlePrice : bundleBest.price;

  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={ticks} yTicks={ticks} xLabel={`willingness to pay for ${goodX}`} yLabel={`… for ${goodY}`} />];
  const plot: VNode[] = [];
  if (show(1) && step < 3) plot.push(<Hatch points={[[toX(separateX.price), frame.top], [frame.right, frame.top], [frame.right, frame.bottom], [toX(separateX.price), frame.bottom]]} id={`${sketch.uid}-buy-x`} wash={WASH.blue} ink={MARKER.blue} gap={10} draw={drawNow(1)} />);
  if (show(2) && step < 3) plot.push(<Hatch points={[[frame.left, toY(separateY.price)], [frame.right, toY(separateY.price)], [frame.right, frame.top], [frame.left, frame.top]]} id={`${sketch.uid}-buy-y`} wash={WASH.green} ink={MARKER.green} gap={10} angle={-1} draw={drawNow(2)} />);
  if (show(1) && step < 3) plot.push(<InkDashed x1={toX(separateX.price)} y1={frame.bottom} x2={toX(separateX.price)} y2={frame.top} id="px" color={MARKER.blue} width={1.8} draw={drawNow(1)} />);
  if (show(2) && step < 3) plot.push(<InkDashed x1={frame.left} y1={toY(separateY.price)} x2={frame.right} y2={toY(separateY.price)} id="py" color={MARKER.green} width={1.8} draw={drawNow(2)} />);
  if (show(3)) {
    const lineEndX = Math.min(shownBundle, axisMax), lineStartY = Math.min(shownBundle, axisMax);
    plot.push(<Hatch points={[[toX(shownBundle - lineStartY), toY(lineStartY)], [toX(lineEndX), toY(shownBundle - lineEndX)], [frame.right, frame.bottom], [frame.right, frame.top], [toX(Math.max(0, shownBundle - axisMax)), frame.top]]} id={`${sketch.uid}-bundle-${step}`} wash={WASH.amber} ink={MARKER.amber} gap={10} draw={step === 3 && drawNow(3)} />);
    plot.push(<InkLine x1={toX(shownBundle - lineStartY)} y1={toY(lineStartY)} x2={toX(lineEndX)} y2={toY(shownBundle - lineEndX)} id={`bundle-line-${step}`} color={MARKER.amber} width={2.4} draw={step === 3 && drawNow(3)} />);
  }
  drawing.push(<g clip-path={sketch.clip()}>{plot}</g>);
  people.forEach((person, index) => {
    const radius = 4 + Math.min(6, Math.sqrt(person.count));
    drawing.push(<Dot x={toX(person.x)} y={toY(person.y)} color={INK} radius={radius} delay={index * 150} draw={drawNow(0)} />);
    drawing.push(<Note x={toX(person.x) + radius + 5} y={toY(person.y) - radius - 2} text={person.count > 1 ? `${person.name} ×${person.count}` : person.name} color={INK_SOFT} size={17} delay={index * 150} draw={drawNow(0)} />);
  });
  if (show(1) && step < 3) drawing.push(<Note x={toX(separateX.price) + 6} y={frame.bottom - 10} text={`p = ${fmt(separateX.price)}`} color={MARKER.blue} size={18} draw={drawNow(1)} />);
  if (show(2) && step < 3) drawing.push(<Note x={frame.left + 8} y={toY(separateY.price) - 8} text={`p = ${fmt(separateY.price)}`} color={MARKER.green} size={18} draw={drawNow(2)} />);
  if (show(3)) drawing.push(<Note x={toX(Math.min(shownBundle, axisMax) * 0.55) + 10} y={toY(shownBundle - Math.min(shownBundle, axisMax) * 0.55) - 10} text={`bundle ${fmt(shownBundle)}`} color={MARKER.amber} size={19} draw={step === 3 && drawNow(3)} />);
  if (step === 4) {
    drawing.push(sketch.handle({
      key: "bundle", x: Math.min(bundlePrice, axisMax), y: Math.max(0, bundlePrice - Math.min(bundlePrice, axisMax)), axis: "x", hint: "above",
      onDrag: (dataX) => setBundlePrice(clamp(Math.round(dataX), 1, axisMax * 2)),
    }));
  }

  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]}
      ariaLabel={`Bundling: separate profit ${fmt(separateTotal)}, bundle profit ${fmt(bundleBest.profit)} at bundle price ${fmt(bundleBest.price)}.`}
      footnote={bundleBest.profit > separateTotal ? undefined : "Here bundling does not beat separate pricing."}>
      {drawing}
    </SketchGraph>
  );
}
