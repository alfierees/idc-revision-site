import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { Slider } from "./plot";
import {
  useSketch, useGlide, SketchGraph, SketchAxes, InkLine, InkDashed, Hatch, Note, Dot, Ring, Presets,
  niceTicks, fmt, clamp, INK, ACCENT, MARKER, WASH,
} from "./sketch";

// Third-degree price discrimination: two markets P_i = a_i − Q_i sharing one MC.
// Steps: demands → MR in each → MR = MC in each → prices off each demand →
// surplus and profit, then explore (drag MC; sliders for both intercepts).
// The less elastic market (higher intercept) ends up with the higher price.

interface Props { a1?: number; a2?: number; mc?: number; }

const NOTES = [
  "Two separate markets, one firm. Market 1 has the higher demand.",
  "Each market has its own MR, falling twice as fast as its demand.",
  "One marginal cost for both. Produce where MR = MC in each market.",
  "Read each price off its own demand. The less elastic market pays more.",
  "Each market gets a surplus triangle and a profit rectangle.",
  "Your turn. Drag MC or change the intercepts.",
];

export default function PriceDiscrimination3rd({ a1: initialFirst = 22, a2: initialSecond = 12, mc: initialCost = 2 }: Props): VNode {
  const [target, setTarget] = useState({ first: initialFirst, second: initialSecond, cost: initialCost });
  const axisMax = Math.max(target.first, target.second, 12);
  const sketch = useSketch({
    stepCount: NOTES.length,
    domains: [{ xMax: axisMax, yMax: axisMax }, { xMax: axisMax, yMax: axisMax }],
    aspect: 0.8,
    minHeight: 240,
    maxHeight: 320,
    padding: { left: 34, bottom: 38, top: 16 },
    panelTitles: ["Market 1", "Market 2"],
    maxWidth: 720,
  });
  const shown = useGlide(target, sketch.dragging !== null);
  const { show, drawNow, step } = sketch;
  const intercepts = [shown.first, shown.second];
  const cost = Math.min(shown.cost, Math.min(...intercepts) - 0.5);
  const quantities = intercepts.map((intercept) => (intercept - cost) / 2);
  const prices = intercepts.map((intercept, index) => intercept - quantities[index]);

  const TEX = [
    `P_1 = ${fmt(intercepts[0])} - Q_1,\\quad P_2 = ${fmt(intercepts[1])} - Q_2`,
    `MR_1 = ${fmt(intercepts[0])} - 2Q_1,\\quad MR_2 = ${fmt(intercepts[1])} - 2Q_2`,
    `MR_i = MC = ${fmt(cost)} \\;\\Rightarrow\\; Q_1 = ${fmt(quantities[0])},\\; Q_2 = ${fmt(quantities[1])}`,
    `p_1 = ${fmt(prices[0])},\\quad p_2 = ${fmt(prices[1])},\\quad \\text{gap} = ${fmt(Math.abs(prices[0] - prices[1]))}`,
    `\\pi = (${fmt(prices[0])} - ${fmt(cost)})(${fmt(quantities[0])}) + (${fmt(prices[1])} - ${fmt(cost)})(${fmt(quantities[1])}) = ${fmt((prices[0] - cost) * quantities[0] + (prices[1] - cost) * quantities[1])}`,
    `p_1 = ${fmt(prices[0])},\\quad p_2 = ${fmt(prices[1])}`,
  ];

  const panel = (market: number): VNode => {
    const frame = sketch.frames[market];
    const toX = frame.x, toY = frame.y;
    const intercept = intercepts[market], quantity = quantities[market], price = prices[market];
    const id = `${sketch.uid}-m${market}`;
    const ticks = niceTicks(0, axisMax, 4);
    const parts: VNode[] = [<SketchAxes frame={frame} id={`axes-${market}`} xTicks={ticks} yTicks={ticks} yLabel="P" />];
    const plot: VNode[] = [];
    if (show(4)) {
      plot.push(<Hatch points={[[toX(0), toY(intercept)], [toX(0), toY(price)], [toX(quantity), toY(price)]]} id={`${id}-cs`} wash={WASH.blue} ink={MARKER.blue} draw={drawNow(4)} />);
      plot.push(<Hatch points={[[toX(0), toY(price)], [toX(quantity), toY(price)], [toX(quantity), toY(cost)], [toX(0), toY(cost)]]} id={`${id}-profit`} wash={WASH.green} ink={MARKER.green} angle={-1} delay={250} draw={drawNow(4)} />);
    }
    if (show(2)) plot.push(<InkDashed x1={toX(0)} y1={toY(cost)} x2={frame.right} y2={toY(cost)} id={`mc-${market}`} color={MARKER.grey} draw={drawNow(2)} />);
    if (show(1)) plot.push(<InkDashed x1={toX(0)} y1={toY(intercept)} x2={toX(intercept / 2)} y2={toY(0)} id={`mr-${market}`} color={MARKER.purple} width={1.9} draw={drawNow(1)} />);
    plot.push(<InkLine x1={toX(0)} y1={toY(intercept)} x2={toX(intercept)} y2={toY(0)} id={`demand-${market}`} color={INK} width={2.4} duration={800} draw={drawNow(0)} />);
    if (show(2)) plot.push(<InkDashed x1={toX(quantity)} y1={toY(cost)} x2={toX(quantity)} y2={frame.bottom} id={`${id}-q`} color={MARKER.green} width={1.3} dash={4} gap={4} delay={300} draw={drawNow(2)} />);
    if (show(3)) {
      plot.push(<InkDashed x1={toX(quantity)} y1={toY(cost)} x2={toX(quantity)} y2={toY(price)} id={`${id}-up`} color={INK} width={1.3} dash={4} gap={4} draw={drawNow(3)} />);
      plot.push(<InkDashed x1={toX(quantity)} y1={toY(price)} x2={frame.left} y2={toY(price)} id={`${id}-left`} color={INK} width={1.3} dash={4} gap={4} delay={220} draw={drawNow(3)} />);
    }
    parts.push(<g clip-path={sketch.clip(market)}>{plot}</g>);
    parts.push(<Note x={toX(intercept * 0.86) + 8} y={toY(intercept * 0.14) + 2} text={`D${market + 1}`} color={INK} size={19} draw={drawNow(0)} />);
    if (show(1)) parts.push(<Note x={toX(intercept / 2) + 4} y={toY(0) - 10} text="MR" color={MARKER.purple} size={17} draw={drawNow(1)} />);
    if (show(2)) {
      parts.push(<Note x={frame.right - 2} y={toY(cost) - 7} text="MC" color={MARKER.grey} anchor="end" size={17} draw={drawNow(2)} />);
      parts.push(<Ring x={toX(quantity)} y={toY(cost)} radius={9} id={`${id}-ring`} color={ACCENT} draw={drawNow(2)} />);
      parts.push(<Note x={toX(quantity)} y={frame.bottom + 31} text={`Q = ${fmt(quantity)}`} color={MARKER.green} anchor="middle" size={17} delay={300} draw={drawNow(2)} />);
    }
    if (show(3)) {
      parts.push(<Dot x={toX(quantity)} y={toY(price)} color={INK} radius={4} draw={drawNow(3)} />);
      parts.push(<Note x={toX(quantity) + 8} y={toY(price) - 8} text={`p = ${fmt(price)}`} color={INK} size={18} delay={350} draw={drawNow(3)} />);
    }
    if (show(4)) {
      parts.push(<Note x={toX(quantity * 0.25)} y={(2 * toY(price) + toY(intercept)) / 3 + 3} text="CS" color={MARKER.blue} anchor="middle" size={17} draw={drawNow(4)} />);
      if (toY(cost) - toY(price) > 18) parts.push(<Note x={toX(quantity * 0.5)} y={(toY(price) + toY(cost)) / 2 + 6} text="profit" color={MARKER.green} anchor="middle" size={17} delay={250} draw={drawNow(4)} />);
    }
    if (step === NOTES.length - 1 && market === 1) {
      parts.push(sketch.handle({
        key: "cost", panel: 1, x: frame.dataX(frame.right - 16), y: cost, axis: "y", hint: "above",
        onDrag: (_dataX, dataY) => setTarget((current) => ({ ...current, cost: clamp(Math.round(dataY * 2) / 2, 0, Math.min(current.first, current.second) - 1) })),
      }));
    }
    return <g>{parts}</g>;
  };

  const update = (changes: Partial<typeof target>) => setTarget((current) => ({ ...current, ...changes }));

  return (
    <SketchGraph
      sketch={sketch}
      note={NOTES[step]}
      tex={TEX[step]}
      ariaLabel={`Third-degree price discrimination. Market 1 price ${fmt(prices[0])}, market 2 price ${fmt(prices[1])}, MC ${fmt(cost)}.`}
      explore={<>
        <div class="graph-sliders">
          <Slider label="Market 1 intercept" value={target.first} min={10} max={30} step={1} onInput={(value) => update({ first: value, cost: Math.min(target.cost, Math.min(value, target.second) - 1) })} />
          <Slider label="Market 2 intercept" value={target.second} min={6} max={30} step={1} onInput={(value) => update({ second: value, cost: Math.min(target.cost, Math.min(target.first, value) - 1) })} />
          <Slider label="MC" value={target.cost} min={0} max={Math.min(target.first, target.second) - 1} step={0.5} onInput={(value) => update({ cost: value })} />
        </div>
        <Presets presets={[
          { label: "Identical markets", apply: () => update({ second: target.first }) },
          { label: "Costs rise", apply: () => update({ cost: Math.min(8, Math.min(target.first, target.second) - 1) }) },
          { label: "Reset", apply: () => setTarget({ first: initialFirst, second: initialSecond, cost: initialCost }) },
        ]} />
      </>}
    >
      {panel(0)}
      {panel(1)}
    </SketchGraph>
  );
}
