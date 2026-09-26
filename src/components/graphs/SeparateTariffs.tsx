import type { VNode } from "preact";
import { useSketch, SketchGraph, SketchAxes, InkLine, InkDashed, Hatch, Note, Dot, niceTicks, niceCeil, fmt, INK, MARKER, WASH } from "./sketch";

// First-degree two-part tariffs for two consumers the firm can tell apart:
// price each at MC and set each fee to that consumer's whole surplus.
//   type: separate-tariffs
//   a1: 200  b1: 1      consumer 1: p = a1 − b1·q
//   a2: 150  b2: 1      consumer 2: p = a2 − b2·q
//   mc: 20

interface Props { a1?: number; b1?: number; a2?: number; b2?: number; mc?: number; }

export default function SeparateTariffs({ a1 = 200, b1 = 1, a2 = 150, b2 = 1, mc = 20 }: Props): VNode {
  const consumers = [{ intercept: a1, slope: b1 }, { intercept: a2, slope: b2 }];
  const quantities = consumers.map((consumer) => (consumer.intercept - mc) / consumer.slope);
  const fees = consumers.map((consumer, index) => 0.5 * (consumer.intercept - mc) * quantities[index]);
  const NOTES = [
    "Two consumers the firm can tell apart, and a constant marginal cost.",
    "Charge each consumer the efficient price: p = MC.",
    "Set each fixed fee to that consumer's whole surplus.",
    `Total profit = ${fmt(fees[0], 0)} + ${fmt(fees[1], 0)} = ${fmt(fees[0] + fees[1], 0)}. Nothing is left on the table.`,
  ];
  const TEX = [
    `p = ${fmt(a1)} - ${b1 === 1 ? "" : fmt(b1)}q_1,\\quad p = ${fmt(a2)} - ${b2 === 1 ? "" : fmt(b2)}q_2,\\quad MC = ${fmt(mc)}`,
    `p_1 = p_2 = MC = ${fmt(mc)} \\;\\Rightarrow\\; q_1 = ${fmt(quantities[0])},\\; q_2 = ${fmt(quantities[1])}`,
    `T_1 = \\tfrac12(${fmt(a1 - mc)})(${fmt(quantities[0])}) = ${fees[0].toLocaleString("en-GB")},\\quad T_2 = ${fees[1].toLocaleString("en-GB")}`,
    `\\pi = ${(fees[0] + fees[1]).toLocaleString("en-GB")}`,
  ];
  const axisMax = niceCeil(Math.max(a1 / b1, a2 / b2, a1, a2) * 1.05);
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMax: axisMax, yMax: niceCeil(Math.max(a1, a2) * 1.1) }], maxWidth: 640, padding: { left: 44, bottom: 44, top: 22 } });
  const { show, drawNow, step } = sketch;
  const frame = sketch.frames[0];
  const toX = frame.x, toY = frame.y;
  const colors = [{ ink: MARKER.blue, wash: WASH.blue }, { ink: MARKER.red, wash: WASH.red }];
  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={niceTicks(0, axisMax, 5)} yTicks={niceTicks(0, frame.yMax, 5)} xLabel="q" yLabel="p" />];
  const plot: VNode[] = [];
  if (show(2)) consumers.forEach((consumer, index) => plot.push(<Hatch points={[[toX(0), toY(consumer.intercept)], [toX(0), toY(mc)], [toX(quantities[index]), toY(mc)]]} id={`${sketch.uid}-fee-${index}`} wash={colors[index].wash} ink={colors[index].ink} angle={index === 0 ? 1 : -1} delay={index * 300} draw={drawNow(2)} />));
  consumers.forEach((consumer, index) => plot.push(<InkLine x1={toX(0)} y1={toY(consumer.intercept)} x2={toX(consumer.intercept / consumer.slope)} y2={toY(0)} id={`demand-${index}`} color={colors[index].ink} width={2.4} delay={index * 300} draw={drawNow(0)} />));
  plot.push(<InkDashed x1={frame.left} y1={toY(mc)} x2={frame.right} y2={toY(mc)} id="mc" color={MARKER.grey} draw={drawNow(0)} />);
  drawing.push(<g clip-path={sketch.clip()}>{plot}</g>);
  consumers.forEach((consumer, index) => drawing.push(<Note x={toX(consumer.intercept / consumer.slope * 0.8) + 10} y={toY(consumer.intercept * 0.2) + 4} text={`consumer ${index + 1}`} color={colors[index].ink} size={18} draw={drawNow(0)} />));
  drawing.push(<Note x={frame.right - 4} y={toY(mc) - 8} text={`MC = ${fmt(mc)}`} color={MARKER.grey} anchor="end" size={17} draw={drawNow(0)} />);
  if (show(1)) quantities.forEach((quantity, index) => drawing.push(<Dot x={toX(quantity)} y={toY(mc)} color={colors[index].ink} delay={index * 250} draw={drawNow(1)} />));
  if (show(2)) consumers.forEach((consumer, index) => drawing.push(<Note x={toX(quantities[index] * 0.18)} y={toY(mc + (consumer.intercept - mc) * (index === 0 ? 0.55 : 0.2)) + 6} text={`T${index + 1} = ${fees[index].toLocaleString("en-GB")}`} color={colors[index].ink} size={18} delay={index * 300 + 300} draw={drawNow(2)} />));
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} ariaLabel={`Separate two-part tariffs: fees ${fees.join(" and ")}, total ${fees[0] + fees[1]}.`}>
      {drawing}
    </SketchGraph>
  );
}
