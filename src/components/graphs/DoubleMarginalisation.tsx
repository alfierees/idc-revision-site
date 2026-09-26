import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, useGlide, SketchGraph, SketchAxes, InkLine, InkDashed, Note, Dot, Presets, niceTicks, niceCeil, fmt, INK, MARKER, Slider } from "./sketch";

// Double marginalisation: final demand P = A − Q, upstream cost k. A vertical
// chain (producer sets wholesale w, retailer marks up again) versus one
// integrated monopoly versus perfect competition.
//   Chain:        Q = (A − k)/4,  w = (A + k)/2,  P = (3A + k)/4
//   Integrated:   Q = (A − k)/2,  P = (A + k)/2
//   Competitive:  Q = A − k,      P = k
//   type: double-marginalisation
//   A: 200    k: 0

interface Props { A?: number; k?: number; }

export default function DoubleMarginalisation({ A: initialIntercept = 10, k: initialCost = 2 }: Props): VNode {
  const [target, setTarget] = useState({ intercept: initialIntercept, cost: initialCost });
  const shown = useGlide(target, false);
  const intercept = shown.intercept, cost = shown.cost;
  const chainQuantity = (intercept - cost) / 4, wholesale = (intercept + cost) / 2, chainPrice = (3 * intercept + cost) / 4;
  const integratedQuantity = (intercept - cost) / 2, integratedPrice = (intercept + cost) / 2;
  const competitiveQuantity = intercept - cost;
  const chainProfit = (wholesale - cost) * chainQuantity + (chainPrice - wholesale) * chainQuantity;
  const integratedProfit = (integratedPrice - cost) * integratedQuantity;
  const axisMax = niceCeil(initialIntercept * 1.1);

  const NOTES = [
    `Final demand P = ${fmt(initialIntercept)} − Q; the upstream cost is k = ${fmt(initialCost)}.`,
    "Perfect competition would price at cost and sell the most.",
    "One integrated monopoly: a single markup.",
    "A vertical chain: the producer marks up to the retailer, the retailer marks up again.",
    "Two markups: higher price, lower quantity, and even lower total profit than one monopoly.",
    "Your turn. Change demand or cost.",
  ];
  const TEX = [
    `P = ${fmt(intercept)} - Q,\\quad k = ${fmt(cost)}`,
    `Q_{PC} = A - k = ${fmt(competitiveQuantity)},\\quad P = k = ${fmt(cost)}`,
    `Q_M = \\tfrac{A-k}{2} = ${fmt(integratedQuantity)},\\quad P_M = \\tfrac{A+k}{2} = ${fmt(integratedPrice)}`,
    `w = \\tfrac{A+k}{2} = ${fmt(wholesale)},\\quad Q_{VR} = \\tfrac{A-k}{4} = ${fmt(chainQuantity)},\\quad P = \\tfrac{3A+k}{4} = ${fmt(chainPrice)}`,
    `\\pi_{\\text{chain}} = ${fmt(chainProfit)} < \\pi_M = ${fmt(integratedProfit)}`,
    `P_{\\text{chain}} = ${fmt(chainPrice)},\\quad P_M = ${fmt(integratedPrice)},\\quad P_{PC} = ${fmt(cost)}`,
  ];
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMax: axisMax, yMax: axisMax }], maxWidth: 640, padding: { left: 44, bottom: 40, top: 22 } });
  const { show, drawNow, step } = sketch;
  const frame = sketch.frames[0];
  const toX = frame.x, toY = frame.y;
  const ticks = niceTicks(0, axisMax, sketch.narrow ? 4 : 5);

  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={ticks} yTicks={ticks} xLabel="Q" yLabel="P" />];
  const plot: VNode[] = [
    <InkLine x1={toX(0)} y1={toY(intercept)} x2={toX(intercept)} y2={toY(0)} id="demand" color={INK} width={2.5} draw={drawNow(0)} />,
    <InkDashed x1={frame.left} y1={toY(cost)} x2={frame.right} y2={toY(cost)} id="cost" color={MARKER.grey} draw={drawNow(0)} />,
  ];
  const guide = (quantity: number, price: number, id: string, color: string, atStep: number) => [
    <InkDashed x1={toX(quantity)} y1={toY(price)} x2={toX(quantity)} y2={frame.bottom} id={`${id}-q`} color={color} width={1.2} dash={4} gap={4} draw={drawNow(atStep)} />,
    <InkDashed x1={toX(quantity)} y1={toY(price)} x2={frame.left} y2={toY(price)} id={`${id}-p`} color={color} width={1.2} dash={4} gap={4} draw={drawNow(atStep)} />,
  ];
  if (show(1)) plot.push(...guide(competitiveQuantity, cost, "pc", MARKER.grey, 1));
  if (show(2)) plot.push(...guide(integratedQuantity, integratedPrice, "mono", MARKER.green, 2));
  if (show(3)) {
    plot.push(...guide(chainQuantity, chainPrice, "chain", MARKER.red, 3));
    plot.push(<InkDashed x1={frame.left} y1={toY(wholesale)} x2={frame.right} y2={toY(wholesale)} id="wholesale" color={MARKER.amber} width={1.4} dash={6} gap={5} draw={drawNow(3)} />);
  }
  drawing.push(<g clip-path={sketch.clip()}>{plot}</g>);
  if (cost > 0) drawing.push(<Note x={frame.right - 4} y={toY(cost) - 8} text={`k = ${fmt(cost)}`} color={MARKER.grey} anchor="end" size={18} draw={drawNow(0)} />);
  if (show(1)) {
    drawing.push(<Dot x={toX(competitiveQuantity)} y={toY(cost)} color={MARKER.grey} draw={drawNow(1)} />);
    drawing.push(<Note x={toX(competitiveQuantity) + 8} y={toY(cost) + 22} text="competition" color={MARKER.grey} size={18} draw={drawNow(1)} />);
  }
  if (show(2)) {
    drawing.push(<Dot x={toX(integratedQuantity)} y={toY(integratedPrice)} color={MARKER.green} draw={drawNow(2)} />);
    drawing.push(<Note x={toX(integratedQuantity) + 12} y={toY(integratedPrice) - 6} text="integrated monopoly" color={MARKER.green} size={18} draw={drawNow(2)} />);
  }
  if (show(3)) {
    drawing.push(<Dot x={toX(chainQuantity)} y={toY(chainPrice)} color={MARKER.red} draw={drawNow(3)} />);
    drawing.push(<Note x={toX(chainQuantity) + 12} y={toY(chainPrice) - 6} text="vertical chain" color={MARKER.red} size={18} draw={drawNow(3)} />);
    drawing.push(<Note x={frame.right - 4} y={toY(wholesale) - 8} text={`wholesale w = ${fmt(wholesale)}`} color={MARKER.amber} anchor="end" size={17} draw={drawNow(3)} />);
  }

  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} ariaLabel={`Double marginalisation. Chain price ${fmt(chainPrice)}, integrated monopoly price ${fmt(integratedPrice)}.`}
      explore={<>
        <div class="graph-sliders">
          <Slider label="demand intercept A" value={target.intercept} min={Math.round(initialIntercept * 0.6)} max={Math.round(initialIntercept)} step={initialIntercept / 20} onInput={(value) => setTarget((current) => ({ ...current, intercept: value, cost: Math.min(current.cost, value * 0.8) }))} />
          <Slider label="upstream cost k" value={target.cost} min={0} max={Math.round(target.intercept * 0.8)} step={initialIntercept / 20} onInput={(value) => setTarget((current) => ({ ...current, cost: value }))} />
        </div>
        <Presets presets={[{ label: "Reset", apply: () => setTarget({ intercept: initialIntercept, cost: initialCost }) }]} />
      </>}>
      {drawing}
    </SketchGraph>
  );
}
