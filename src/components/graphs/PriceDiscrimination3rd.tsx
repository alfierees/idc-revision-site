import { useState } from "preact/hooks";
import type { VNode } from "preact";
import {
  useSketch, useGlide, SketchGraph, SketchAxes, InkLine, InkDashed, Hatch, Note, Dot, Ring, Presets,
  niceTicks, fmt, clamp, INK, ACCENT, MARKER, WASH, Slider,
} from "./sketch";

// Third-degree price discrimination: two separable markets P_i = a_i − b_i·Q_i.
// Marginal cost MC_i = mc + s·Q_i (s = 0 for the usual constant MC; s > 0 when
// each market's output is produced separately at rising cost, e.g. the coffee
// exam's Friday / weekday split). Steps: demands → MR in each → MR = MC →
// prices off each demand → surplus and profit → explore.
// The less elastic market ends up paying more.

interface Props {
  a1?: number; b1?: number; a2?: number; b2?: number;
  mc?: number; mcSlope?: number;
  name1?: string; name2?: string;
}

const NOTES = [
  "Two separate markets, one firm. Market 1 has the higher willingness to pay.",
  "Each market has its own MR, falling twice as fast as its demand.",
  "Produce where MR = MC in each market separately.",
  "Read each price off its own demand. The less elastic market pays more.",
  "Each market gets a surplus triangle and a profit area.",
  "Your turn. Change the demands or the cost.",
];

const niceCeil = (value: number) => {
  const magnitude = Math.pow(10, Math.floor(Math.log10(Math.max(value, 1e-9))));
  return Math.ceil(value / (magnitude / 2)) * (magnitude / 2);
};

export default function PriceDiscrimination3rd({
  a1: firstIntercept = 22, b1: firstSlope = 1, a2: secondIntercept = 12, b2: secondSlope = 1,
  mc: initialCost = 2, mcSlope = 0, name1 = "Market 1", name2 = "Market 2",
}: Props): VNode {
  const [target, setTarget] = useState({ first: firstIntercept, second: secondIntercept, cost: initialCost });
  const slopes = [firstSlope, secondSlope];
  const priceMax = niceCeil(Math.max(firstIntercept, secondIntercept) * 1.15);
  const quantityMaxes = [niceCeil((firstIntercept / firstSlope) * 1.1), niceCeil((secondIntercept / secondSlope) * 1.1)];
  const sketch = useSketch({
    stepCount: NOTES.length,
    domains: [{ xMax: quantityMaxes[0], yMax: priceMax }, { xMax: quantityMaxes[1], yMax: priceMax }],
    aspect: 0.8,
    minHeight: 240,
    maxHeight: 320,
    padding: { left: 38, bottom: 38, top: 16 },
    panelTitles: [name1, name2],
    maxWidth: 720,
  });
  const shown = useGlide(target, sketch.dragging !== null);
  const { show, drawNow, step } = sketch;
  const intercepts = [shown.first, shown.second];
  const cost = Math.min(shown.cost, Math.min(...intercepts) * 0.9);
  const marginalCost = (quantity: number) => cost + mcSlope * quantity;
  const quantities = intercepts.map((intercept, market) => Math.max(0, (intercept - cost) / (2 * slopes[market] + mcSlope)));
  const prices = intercepts.map((intercept, market) => intercept - slopes[market] * quantities[market]);
  const profits = quantities.map((quantity, market) => prices[market] * quantity - cost * quantity - 0.5 * mcSlope * quantity * quantity);

  const demandTex = (market: number) => `P_${market + 1} = ${fmt(intercepts[market])} - ${slopes[market] === 1 ? "" : fmt(slopes[market], 3)}Q_${market + 1}`;
  const marginalRevenueTex = (market: number) => `MR_${market + 1} = ${fmt(intercepts[market])} - ${2 * slopes[market] === 1 ? "" : fmt(2 * slopes[market], 3)}Q_${market + 1}`;
  const costTex = mcSlope > 0 ? `MC_i = ${cost ? `${fmt(cost)} + ` : ""}${fmt(mcSlope, 2)}Q_i` : `MC = ${fmt(cost)}`;
  const TEX = [
    `${demandTex(0)},\\quad ${demandTex(1)}`,
    `${marginalRevenueTex(0)},\\quad ${marginalRevenueTex(1)}`,
    `${costTex} \\;\\Rightarrow\\; Q_1 = ${fmt(quantities[0], 2)},\\; Q_2 = ${fmt(quantities[1], 2)}`,
    `p_1 = ${fmt(prices[0], 2)},\\quad p_2 = ${fmt(prices[1], 2)}`,
    `\\pi_1 = ${fmt(profits[0])},\\quad \\pi_2 = ${fmt(profits[1])},\\quad CS_1 = ${fmt(0.5 * (intercepts[0] - prices[0]) * quantities[0])},\\quad CS_2 = ${fmt(0.5 * (intercepts[1] - prices[1]) * quantities[1])}`,
    `p_1 = ${fmt(prices[0], 2)},\\quad p_2 = ${fmt(prices[1], 2)}`,
  ];

  const panel = (market: number): VNode => {
    const frame = sketch.frames[market];
    const toX = frame.x, toY = frame.y;
    const intercept = intercepts[market], slope = slopes[market];
    const quantity = quantities[market], price = prices[market];
    const choke = intercept / slope;
    const id = `${sketch.uid}-m${market}`;
    const parts: VNode[] = [<SketchAxes frame={frame} id={`axes-${market}`} xTicks={niceTicks(0, quantityMaxes[market], 4)} yTicks={niceTicks(0, priceMax, 4)} yLabel="P" />];
    const plot: VNode[] = [];
    if (show(4)) {
      plot.push(<Hatch points={[[toX(0), toY(intercept)], [toX(0), toY(price)], [toX(quantity), toY(price)]]} id={`${id}-cs`} wash={WASH.blue} ink={MARKER.blue} draw={drawNow(4)} />);
      plot.push(<Hatch points={[[toX(0), toY(price)], [toX(quantity), toY(price)], [toX(quantity), toY(marginalCost(quantity))], [toX(0), toY(cost)]]} id={`${id}-profit`} wash={WASH.green} ink={MARKER.green} angle={-1} delay={250} draw={drawNow(4)} />);
    }
    if (show(2)) {
      plot.push(mcSlope > 0
        ? <InkLine x1={toX(0)} y1={toY(cost)} x2={frame.right} y2={toY(marginalCost(quantityMaxes[market]))} id={`mc-${market}`} color={MARKER.grey} width={1.8} draw={drawNow(2)} />
        : <InkDashed x1={toX(0)} y1={toY(cost)} x2={frame.right} y2={toY(cost)} id={`mc-${market}`} color={MARKER.grey} draw={drawNow(2)} />);
    }
    if (show(1)) plot.push(<InkDashed x1={toX(0)} y1={toY(intercept)} x2={toX(choke / 2)} y2={toY(0)} id={`mr-${market}`} color={MARKER.purple} width={1.9} draw={drawNow(1)} />);
    plot.push(<InkLine x1={toX(0)} y1={toY(intercept)} x2={toX(choke)} y2={toY(0)} id={`demand-${market}`} color={INK} width={2.4} duration={800} draw={drawNow(0)} />);
    if (show(2)) plot.push(<InkDashed x1={toX(quantity)} y1={toY(marginalCost(quantity))} x2={toX(quantity)} y2={frame.bottom} id={`${id}-q`} color={MARKER.green} width={1.3} dash={4} gap={4} delay={300} draw={drawNow(2)} />);
    if (show(3)) {
      plot.push(<InkDashed x1={toX(quantity)} y1={toY(marginalCost(quantity))} x2={toX(quantity)} y2={toY(price)} id={`${id}-up`} color={INK} width={1.3} dash={4} gap={4} draw={drawNow(3)} />);
      plot.push(<InkDashed x1={toX(quantity)} y1={toY(price)} x2={frame.left} y2={toY(price)} id={`${id}-left`} color={INK} width={1.3} dash={4} gap={4} delay={220} draw={drawNow(3)} />);
    }
    parts.push(<g clip-path={sketch.clip(market)}>{plot}</g>);
    parts.push(<Note x={toX(choke * 0.68) + 8} y={toY(intercept * 0.32) + 2} text={`D${market + 1}`} color={INK} size={19} draw={drawNow(0)} />);
    if (show(1)) parts.push(<Note x={toX(choke / 2) + 4} y={toY(0) - 10} text="MR" color={MARKER.purple} size={17} draw={drawNow(1)} />);
    if (show(2)) {
      const labelQuantity = quantityMaxes[market] * (step === NOTES.length - 1 && market === 1 ? 0.7 : 0.92);
      parts.push(<Note x={toX(labelQuantity)} y={toY(marginalCost(labelQuantity)) - 8} text="MC" color={MARKER.grey} anchor="middle" size={17} draw={drawNow(2)} />);
      parts.push(<Ring x={toX(quantity)} y={toY(marginalCost(quantity))} radius={9} id={`${id}-ring`} color={ACCENT} draw={drawNow(2)} />);
      parts.push(<Note x={toX(quantity)} y={frame.bottom + 31} text={`Q = ${fmt(quantity, 2)}`} color={MARKER.green} anchor="middle" size={17} delay={300} draw={drawNow(2)} />);
    }
    if (show(3)) {
      parts.push(<Dot x={toX(quantity)} y={toY(price)} color={INK} radius={4} draw={drawNow(3)} />);
      parts.push(<Note x={toX(quantity) + 8} y={toY(price) - 8} text={`p = ${fmt(price, 2)}`} color={INK} size={18} delay={350} draw={drawNow(3)} />);
    }
    if (show(4)) {
      parts.push(<Note x={toX(quantity * 0.25)} y={(2 * toY(price) + toY(intercept)) / 3 + 3} text="CS" color={MARKER.blue} anchor="middle" size={17} draw={drawNow(4)} />);
      if (toY(cost) - toY(price) > 18) parts.push(<Note x={toX(quantity * 0.5)} y={(toY(price) + toY(cost)) / 2 + 6} text="profit" color={MARKER.green} anchor="middle" size={17} delay={250} draw={drawNow(4)} />);
    }
    if (step === NOTES.length - 1 && market === 1 && mcSlope === 0) {
      parts.push(sketch.handle({
        key: "cost", panel: 1, x: frame.dataX(frame.right - 16), y: cost, axis: "y", hint: "above",
        onDrag: (_dataX, dataY) => setTarget((current) => ({ ...current, cost: clamp(Math.round(dataY * 2) / 2, 0, Math.min(current.first, current.second) * 0.9) })),
      }));
    }
    return <g>{parts}</g>;
  };

  const update = (changes: Partial<typeof target>) => setTarget((current) => ({ ...current, ...changes }));
  const costStep = priceMax / 40;

  return (
    <SketchGraph
      sketch={sketch}
      note={NOTES[step]}
      tex={TEX[step]}
      ariaLabel={`Third-degree price discrimination. ${name1} price ${fmt(prices[0], 2)}, ${name2} price ${fmt(prices[1], 2)}.`}
      explore={<>
        <div class="graph-sliders">
          <Slider label={`${name1} intercept`} value={target.first} min={Math.round(firstIntercept * 0.5)} max={Math.round(firstIntercept * 1.4)} step={costStep} onInput={(value) => update({ first: value })} />
          <Slider label={`${name2} intercept`} value={target.second} min={Math.round(secondIntercept * 0.5)} max={Math.round(Math.max(secondIntercept, firstIntercept) * 1.2)} step={costStep} onInput={(value) => update({ second: value })} />
          <Slider label={mcSlope > 0 ? "MC intercept" : "MC"} value={target.cost} min={0} max={Math.round(Math.min(target.first, target.second) * 0.8)} step={costStep} onInput={(value) => update({ cost: value })} />
        </div>
        <Presets presets={[
          { label: "Identical markets", apply: () => update({ second: target.first }) },
          { label: "Reset", apply: () => setTarget({ first: firstIntercept, second: secondIntercept, cost: initialCost }) },
        ]} />
      </>}
    >
      {panel(0)}
      {panel(1)}
    </SketchGraph>
  );
}
