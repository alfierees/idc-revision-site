import { useState } from "preact/hooks";
import type { VNode } from "preact";
import {
  useSketch, useGlide, SketchGraph, SketchAxes, InkLine, InkDashed, Hatch, Note, Dot, Ring, Presets,
  niceTicks, fmt, coef, clamp, INK, ACCENT, MARKER, WASH, Slider,
} from "./sketch";

// The Principles of Micro exam's market block (Q1 to Q5 every year): linear
// demand P = a − bQ and supply P = c + dQ, then a per-unit tax on sellers.
// Steps: curves → equilibrium → CS and PS → tax shifts supply up by T →
// buyer and seller prices (the wedge) → revenue and deadweight loss → explore.
// A negative tax in the explore step is a subsidy.
// Defaults are the 2025 Moed A olive oil market: P = 60 − 0.5Q, P = 30 + 0.25Q, T = 2.

interface Props { a?: number; b?: number; c?: number; d?: number; t?: number; }

const NOTES = [
  "Demand slopes down, supply slopes up. Both are straight lines.",
  "Set them equal: the crossing gives Q* and P*.",
  "Consumer surplus sits above the price, producer surplus below it.",
  "A tax of T on sellers lifts supply by exactly T.",
  "Buyers pay the price on demand; sellers keep that minus T. The gap is the tax.",
  "The orange rectangle is tax revenue (T × new Q). The red triangle is the deadweight loss.",
  "Your turn. Slide the tax (below zero is a subsidy) or change the curves.",
];

const roundUpNice = (value: number) => {
  const magnitude = Math.pow(10, Math.floor(Math.log10(value)));
  return Math.ceil(value / (magnitude / 2)) * (magnitude / 2);
};

export default function LinearMarketTax({ a: a0 = 60, b: b0 = 0.5, c: c0 = 30, d: d0 = 0.25, t: t0 = 2 }: Props): VNode {
  const [target, setTarget] = useState({ a: a0, b: b0, c: c0, d: d0, t: t0 });
  const q0 = (a0 - c0) / (b0 + d0);
  const QUANTITY_MAX = roundUpNice(Math.min(a0 / b0, q0 * 2.2));
  const PRICE_MAX = roundUpNice(a0 * 1.1);
  const sketch = useSketch({
    stepCount: NOTES.length,
    domains: [{ xMax: QUANTITY_MAX, yMax: PRICE_MAX }],
    padding: { left: 44, bottom: 40, top: 18 },
  });
  const shown = useGlide(target, sketch.dragging !== null);
  const frame = sketch.frames[0];
  const { step, narrow } = sketch;
  const show = sketch.show, drawNow = sketch.drawNow;
  const toX = frame.x, toY = frame.y;

  const { a, b, c, d } = shown;
  const spread = a - c;
  const tax = clamp(shown.t, -spread * 0.9, spread * 0.9);
  const qStar = Math.max(0, spread / (b + d));
  const pStar = a - b * qStar;
  const qTax = Math.max(0, (spread - tax) / (b + d));
  const buyerPrice = a - b * qTax;
  const sellerPrice = buyerPrice - tax;
  const cs = 0.5 * qStar * (a - pStar);
  const ps = 0.5 * qStar * (pStar - c);
  const revenue = tax * qTax;
  const dwl = 0.5 * Math.abs(tax) * Math.abs(qStar - qTax);
  const isSubsidy = tax < 0;
  const word = isSubsidy ? "subsidy" : "tax";

  const demandEnd = Math.min(QUANTITY_MAX, a / b);
  const supplyEnd = Math.min(QUANTITY_MAX, (PRICE_MAX - c) / d);
  const shiftedEnd = Math.min(QUANTITY_MAX, (PRICE_MAX - c - tax) / d);

  const TEX = [
    `D:\\; P = ${fmt(a)} - ${coef(b)}Q \\qquad S:\\; P = ${fmt(c)} + ${coef(d)}Q`,
    `${fmt(a)} - ${coef(b)}Q = ${fmt(c)} + ${coef(d)}Q \\;\\Rightarrow\\; Q^* = ${fmt(qStar, 2)},\\; P^* = ${fmt(pStar, 2)}`,
    `\\color{${MARKER.blue}}{CS} = \\tfrac12(${fmt(qStar, 2)})(${fmt(a - pStar, 2)}) = ${fmt(cs, 2)},\\quad \\color{${MARKER.green}}{PS} = \\tfrac12(${fmt(qStar, 2)})(${fmt(pStar - c, 2)}) = ${fmt(ps, 2)}`,
    `S_T:\\; P = ${fmt(c + tax, 2)} + ${coef(d)}Q \\;\\Rightarrow\\; Q_T = ${fmt(qTax, 2)}`,
    `P_B = ${fmt(buyerPrice, 2)},\\quad P_S = ${fmt(sellerPrice, 2)},\\quad P_B - P_S = ${fmt(tax, 2)}`,
    `\\color{${MARKER.amber}}{\\text{${isSubsidy ? "cost" : "revenue"}}} = ${fmt(Math.abs(tax), 2)} \\times ${fmt(qTax, 2)} = ${fmt(Math.abs(revenue), 2)},\\quad \\color{${MARKER.red}}{DWL} = \\tfrac12 (${fmt(Math.abs(tax), 2)})(${fmt(Math.abs(qStar - qTax), 2)}) = ${fmt(dwl, 2)}`,
    `${word} = ${fmt(Math.abs(tax), 2)}:\\; Q_T = ${fmt(qTax, 2)},\\; P_B = ${fmt(buyerPrice, 2)},\\; P_S = ${fmt(sellerPrice, 2)},\\; \\color{${MARKER.red}}{DWL} = ${fmt(dwl, 2)}`,
  ];

  const quantityTicks = niceTicks(0, QUANTITY_MAX, narrow ? 3 : 6);
  const priceTicks = niceTicks(0, PRICE_MAX, narrow ? 3 : 6);
  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={quantityTicks} yTicks={priceTicks} xLabel="Q" yLabel="P" />];
  const plot: VNode[] = [];

  // Surplus triangles before the tax (step 2 only, so the tax picture stays readable).
  if (step === 2) {
    plot.push(<Hatch points={[[toX(0), toY(a)], [toX(0), toY(pStar)], [toX(qStar), toY(pStar)]]} id={`${sketch.uid}-cs`} wash={WASH.blue} ink={MARKER.blue} draw={drawNow(2)} />);
    plot.push(<Hatch points={[[toX(0), toY(pStar)], [toX(0), toY(c)], [toX(qStar), toY(pStar)]]} id={`${sketch.uid}-ps`} wash={WASH.green} ink={MARKER.green} angle={-1} delay={250} draw={drawNow(2)} />);
  }
  if (show(5)) {
    plot.push(<Hatch points={[[toX(0), toY(buyerPrice)], [toX(qTax), toY(buyerPrice)], [toX(qTax), toY(sellerPrice)], [toX(0), toY(sellerPrice)]]} id={`${sketch.uid}-rev`} wash={WASH.amber} ink={MARKER.amber} draw={drawNow(5)} />);
    // Same triangle for a tax (left of Q*) and a subsidy (right of Q*).
    plot.push(<Hatch points={[[toX(qTax), toY(buyerPrice)], [toX(qTax), toY(sellerPrice)], [toX(qStar), toY(pStar)]]} id={`${sketch.uid}-dwl`} wash={WASH.red} ink={MARKER.red} gap={5} delay={300} draw={drawNow(5)} />);
  }
  plot.push(<InkLine x1={toX(0)} y1={toY(a)} x2={toX(demandEnd)} y2={toY(a - b * demandEnd)} id="demand" color={INK} width={2.6} duration={800} draw={drawNow(0)} />);
  plot.push(<InkLine x1={toX(0)} y1={toY(c)} x2={toX(supplyEnd)} y2={toY(c + d * supplyEnd)} id="supply" color={MARKER.blue} width={2.6} duration={800} delay={200} draw={drawNow(0)} />);
  if (show(3)) plot.push(<InkDashed x1={toX(0)} y1={toY(c + tax)} x2={toX(shiftedEnd)} y2={toY(c + tax + d * shiftedEnd)} id="supply-tax" color={MARKER.purple} width={2.2} draw={drawNow(3)} />);
  if (show(1) && step < 3) {
    plot.push(<InkDashed x1={toX(qStar)} y1={toY(pStar)} x2={toX(qStar)} y2={frame.bottom} id="q-star" color={INK} width={1.4} dash={5} gap={4} draw={drawNow(1)} />);
    plot.push(<InkDashed x1={toX(qStar)} y1={toY(pStar)} x2={frame.left} y2={toY(pStar)} id="p-star" color={INK} width={1.4} dash={5} gap={4} delay={200} draw={drawNow(1)} />);
  }
  if (show(4)) {
    plot.push(<InkDashed x1={toX(qTax)} y1={toY(Math.max(buyerPrice, sellerPrice))} x2={toX(qTax)} y2={frame.bottom} id="q-tax" color={MARKER.purple} width={1.4} dash={5} gap={4} draw={drawNow(4)} />);
    plot.push(<InkDashed x1={toX(qTax)} y1={toY(buyerPrice)} x2={frame.left} y2={toY(buyerPrice)} id="p-buyer" color={INK} width={1.4} dash={5} gap={4} delay={150} draw={drawNow(4)} />);
    plot.push(<InkDashed x1={toX(qTax)} y1={toY(sellerPrice)} x2={frame.left} y2={toY(sellerPrice)} id="p-seller" color={MARKER.blue} width={1.4} dash={5} gap={4} delay={300} draw={drawNow(4)} />);
  }
  drawing.push(<g clip-path={sketch.clip()}>{plot}</g>);

  drawing.push(<Note x={toX(demandEnd) - 4} y={toY(a - b * demandEnd) - 10} text="D" color={INK} anchor="end" size={21} draw={drawNow(0)} />);
  drawing.push(<Note x={toX(supplyEnd) - 6} y={toY(c + d * supplyEnd) + 22} text="S" color={MARKER.blue} anchor="end" size={21} draw={drawNow(0)} />);
  if (show(3)) drawing.push(<Note x={toX(shiftedEnd) - 6} y={toY(c + tax + d * shiftedEnd) + (isSubsidy ? 22 : -8)} text={isSubsidy ? "S − s" : "S + T"} color={MARKER.purple} anchor="end" size={19} draw={drawNow(3)} />);
  if (show(1) && step < 3) {
    drawing.push(<Ring x={toX(qStar)} y={toY(pStar)} id="ring-eq" color={ACCENT} draw={drawNow(1)} />);
    drawing.push(<Note x={toX(qStar)} y={frame.bottom + 32} text={`Q* = ${fmt(qStar, 2)}`} color={INK} anchor="middle" size={17} draw={drawNow(1)} />);
    drawing.push(<Note x={frame.left + 6} y={toY(pStar) - 8} text={`P* = ${fmt(pStar, 2)}`} color={INK} size={17} draw={drawNow(1)} />);
  }
  if (step === 2) {
    drawing.push(<Note x={toX(qStar * 0.3)} y={(toY(a) + 2 * toY(pStar)) / 3 + 6} text="CS" color={MARKER.blue} anchor="middle" size={20} draw={drawNow(2)} />);
    drawing.push(<Note x={toX(qStar * 0.3)} y={(toY(c) + 2 * toY(pStar)) / 3 + 6} text="PS" color={MARKER.green} anchor="middle" size={20} delay={250} draw={drawNow(2)} />);
  }
  if (show(4)) {
    drawing.push(<Dot x={toX(qTax)} y={toY(buyerPrice)} color={INK} draw={drawNow(4)} />);
    drawing.push(<Dot x={toX(qTax)} y={toY(sellerPrice)} color={MARKER.blue} draw={drawNow(4)} />);
    drawing.push(<Note x={frame.left + 6} y={toY(buyerPrice) + (isSubsidy ? 18 : -8)} text={`buyers ${fmt(buyerPrice, 2)}`} color={INK} size={16} draw={drawNow(4)} />);
    drawing.push(<Note x={frame.left + 6} y={toY(sellerPrice) + (isSubsidy ? -8 : 18)} text={`sellers ${fmt(sellerPrice, 2)}`} color={MARKER.blue} size={16} delay={200} draw={drawNow(4)} />);
    drawing.push(<Note x={toX(qTax)} y={frame.bottom + 32} text={`Q = ${fmt(qTax, 2)}`} color={MARKER.purple} anchor="middle" size={17} draw={drawNow(4)} />);
  }
  if (show(5) && !narrow) {
    drawing.push(<Note x={toX(qStar) + 10} y={toY(pStar) + 4} text="DWL" color={MARKER.red} size={17} delay={400} draw={drawNow(5)} />);
  }

  const update = (changes: Partial<typeof target>) => setTarget((current) => ({ ...current, ...changes }));
  const taxMax = Math.max(1, Math.round((a0 - c0) * 0.6));

  return (
    <SketchGraph
      sketch={sketch}
      note={NOTES[step]}
      tex={TEX[step]}
      ariaLabel={`Linear market. Demand P = ${fmt(a)} minus ${fmt(b, 2)}Q, supply P = ${fmt(c)} plus ${fmt(d, 2)}Q. Equilibrium Q = ${fmt(qStar, 2)}, P = ${fmt(pStar, 2)}. With a ${word} of ${fmt(Math.abs(tax), 2)}: Q = ${fmt(qTax, 2)}, buyers pay ${fmt(buyerPrice, 2)}, sellers receive ${fmt(sellerPrice, 2)}, deadweight loss ${fmt(dwl, 2)}.`}
      explore={<>
        <div class="graph-sliders">
          <Slider label="tax T (negative = subsidy)" value={target.t} min={-taxMax} max={taxMax} step={taxMax / 20} onInput={(value) => update({ t: value })} />
          <Slider label="demand slope b" value={target.b} min={b0 * 0.25} max={b0 * 3} step={b0 * 0.25} onInput={(value) => update({ b: value })} />
          <Slider label="supply slope d" value={target.d} min={d0 * 0.25} max={d0 * 3} step={d0 * 0.25} onInput={(value) => update({ d: value })} />
        </div>
        <Presets presets={[
          { label: "Steep demand (buyers pay)", apply: () => update({ b: b0 * 3, d: d0 * 0.5 }) },
          { label: "Steep supply (sellers pay)", apply: () => update({ b: b0 * 0.5, d: d0 * 3 }) },
          { label: "Subsidy", apply: () => update({ t: -Math.abs(t0 || taxMax / 4) }) },
          { label: "Reset", apply: () => setTarget({ a: a0, b: b0, c: c0, d: d0, t: t0 }) },
        ]} />
      </>}
    >
      {drawing}
    </SketchGraph>
  );
}
