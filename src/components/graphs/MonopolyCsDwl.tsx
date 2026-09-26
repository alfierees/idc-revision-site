import { useState } from "preact/hooks";
import type { VNode } from "preact";
import {
  useSketch, useGlide, SketchGraph, SketchAxes, InkLine, InkDashed, Hatch, Note, Arrow, Ring, Dot, Presets,
  niceTicks, fmt, coef, clamp, INK, ACCENT, MARKER, WASH, Slider,
} from "./sketch";

// Linear-demand monopoly, P = a − bQ with constant MC, built up step by step:
// demand → MR → MC → MR = MC → price read off demand → welfare areas, then an
// explore step with draggable MC / demand handles, sliders and presets.
// The single most reusable micro picture.

interface Props { a?: number; b?: number; mc?: number; }

const NOTES = [
  "Start with demand: the price buyers will pay at each quantity.",
  "Marginal revenue falls twice as fast as demand.",
  "Marginal cost is flat here.",
  "The monopolist produces where MR = MC.",
  "Then it charges what buyers will pay: read p* off demand, not MR.",
  "Output is lower than in a competitive market. The red wedge is deadweight loss.",
  "Your turn. Drag MC or the top of demand, or try a preset.",
];

// Axes and slider ranges scale with the starting demand, so the same graph
// serves the lecture's P = 10 − Q example and the recipe's P = 100 − Q.
const roundUpNice = (value: number) => {
  const magnitude = Math.pow(10, Math.floor(Math.log10(value)));
  return Math.ceil(value / (magnitude / 2)) * (magnitude / 2);
};

export default function MonopolyCsDwl({ a: initialIntercept = 100, b: initialSlope = 1, mc: initialCost = 20 }: Props): VNode {
  const [target, setTarget] = useState({ intercept: initialIntercept, slope: initialSlope, cost: initialCost });
  const PRICE_MAX = roundUpNice(initialIntercept * 1.2);
  const QUANTITY_MAX = roundUpNice((initialIntercept / initialSlope) * 1.2);
  const unit = initialIntercept / 20; // slider / drag step
  const sketch = useSketch({
    stepCount: NOTES.length,
    domains: [{ xMax: QUANTITY_MAX, yMax: PRICE_MAX }],
    padding: { left: 40, bottom: 40, top: 18 },
  });
  const shown = useGlide(target, sketch.dragging !== null);
  const frame = sketch.frames[0];
  const { step, narrow } = sketch;
  const show = sketch.show, drawNow = sketch.drawNow;
  const toX = frame.x, toY = frame.y;

  const intercept = shown.intercept, slope = shown.slope;
  const cost = Math.min(shown.cost, intercept - unit);
  const monopolyQuantity = (intercept - cost) / (2 * slope);
  const monopolyPrice = intercept - slope * monopolyQuantity;
  const competitiveQuantity = (intercept - cost) / slope;
  const consumerSurplus = 0.5 * (intercept - monopolyPrice) * monopolyQuantity;
  const profit = (monopolyPrice - cost) * monopolyQuantity;
  const deadweightLoss = 0.5 * (monopolyPrice - cost) * (competitiveQuantity - monopolyQuantity);
  const demandEnd = Math.min(QUANTITY_MAX, intercept / slope);

  const slopeTimes = (value: number) => (Math.abs(slope - 1) < 1e-6 ? fmt(value) : `${fmt(slope, 2)}\\times${fmt(value)}`);
  const TEX = [
    `P = ${fmt(intercept)} - ${coef(slope)}Q`,
    `MR = \\frac{d(PQ)}{dQ} = ${fmt(intercept)} - ${coef(2 * slope)}Q`,
    `MC = ${fmt(cost)}`,
    `${fmt(intercept)} - ${coef(2 * slope)}Q = ${fmt(cost)} \\;\\Rightarrow\\; Q^* = ${fmt(monopolyQuantity)}`,
    `p^* = ${fmt(intercept)} - ${slopeTimes(monopolyQuantity)} = ${fmt(monopolyPrice)}`,
    `\\color{${MARKER.blue}}{\\text{CS}} = ${fmt(consumerSurplus)},\\quad \\color{${MARKER.green}}{\\pi} = ${fmt(profit)},\\quad \\color{${MARKER.red}}{\\text{DWL}} = \\tfrac12(p^*-MC)(Q_c-Q^*) = ${fmt(deadweightLoss)}`,
    `Q^* = ${fmt(monopolyQuantity)},\\quad p^* = ${fmt(monopolyPrice)},\\quad \\color{${MARKER.red}}{\\text{DWL}} = ${fmt(deadweightLoss)}`,
  ];

  const quantityTicks = niceTicks(0, QUANTITY_MAX, narrow ? 3 : 6);
  const priceTicks = niceTicks(0, PRICE_MAX, narrow ? 3 : 6);
  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={quantityTicks} yTicks={priceTicks} xLabel="Q" yLabel="P" />];

  const plot: VNode[] = [];
  if (show(5)) {
    plot.push(<Hatch points={[[toX(0), toY(intercept)], [toX(0), toY(monopolyPrice)], [toX(monopolyQuantity), toY(monopolyPrice)]]} id={`${sketch.uid}-cs`} wash={WASH.blue} ink={MARKER.blue} draw={drawNow(5)} />);
    plot.push(<Hatch points={[[toX(0), toY(monopolyPrice)], [toX(monopolyQuantity), toY(monopolyPrice)], [toX(monopolyQuantity), toY(cost)], [toX(0), toY(cost)]]} id={`${sketch.uid}-profit`} wash={WASH.green} ink={MARKER.green} angle={-1} delay={250} draw={drawNow(5)} />);
    plot.push(<Hatch points={[[toX(monopolyQuantity), toY(monopolyPrice)], [toX(monopolyQuantity), toY(cost)], [toX(competitiveQuantity), toY(cost)]]} id={`${sketch.uid}-dwl`} wash={WASH.red} ink={MARKER.red} gap={5} delay={500} draw={drawNow(5)} />);
  }
  if (show(2)) plot.push(<InkDashed x1={toX(0)} y1={toY(cost)} x2={frame.right} y2={toY(cost)} id="mc" color={MARKER.grey} draw={drawNow(2)} />);
  if (show(1)) plot.push(<InkDashed x1={toX(0)} y1={toY(intercept)} x2={toX(intercept / (2 * slope))} y2={toY(0)} id="mr" color={MARKER.purple} width={2} draw={drawNow(1)} />);
  plot.push(<InkLine x1={toX(0)} y1={toY(intercept)} x2={toX(demandEnd)} y2={toY(intercept - slope * demandEnd)} id="demand" color={INK} width={2.6} duration={800} draw={drawNow(0)} />);
  if (show(3)) plot.push(<InkDashed x1={toX(monopolyQuantity)} y1={toY(cost)} x2={toX(monopolyQuantity)} y2={frame.bottom} id="q-guide" color={MARKER.green} width={1.4} dash={5} gap={4} delay={300} draw={drawNow(3)} />);
  if (show(4)) {
    plot.push(<InkDashed x1={toX(monopolyQuantity)} y1={toY(cost)} x2={toX(monopolyQuantity)} y2={toY(monopolyPrice)} id="p-up" color={INK} width={1.4} dash={5} gap={4} draw={drawNow(4)} />);
    plot.push(<InkDashed x1={toX(monopolyQuantity)} y1={toY(monopolyPrice)} x2={frame.left} y2={toY(monopolyPrice)} id="p-left" color={INK} width={1.4} dash={5} gap={4} delay={260} draw={drawNow(4)} />);
  }
  drawing.push(<g clip-path={sketch.clip()}>{plot}</g>);

  drawing.push(<Note x={toX(demandEnd) - 4} y={toY(intercept - slope * demandEnd) - 10} text="D" color={INK} anchor="end" size={21} draw={drawNow(0)} />);
  const marginalRevenueLabelQuantity = (intercept / (2 * slope)) * 0.3;
  if (show(1)) drawing.push(<Note x={toX(marginalRevenueLabelQuantity) - 8} y={toY(intercept - 2 * slope * marginalRevenueLabelQuantity) + 4} text="MR" color={MARKER.purple} anchor="end" size={20} draw={drawNow(1)} />);
  if (show(2)) drawing.push(<Note x={step === 6 ? frame.right - 36 : frame.right - 2} y={toY(cost) - 8} text={`MC = ${fmt(cost)}`} color={MARKER.grey} anchor="end" size={18} draw={drawNow(2)} />);
  if (show(3)) {
    drawing.push(<Ring x={toX(monopolyQuantity)} y={toY(cost)} id="ring-mr-mc" color={ACCENT} draw={drawNow(3)} />);
    if (!narrow) drawing.push(<Note x={toX(monopolyQuantity) + 16} y={toY(cost) + 22} text="MR = MC" color={ACCENT} size={19} delay={300} draw={drawNow(3)} />);
    drawing.push(<Note x={toX(monopolyQuantity)} y={frame.bottom + 32} text={`Q* = ${fmt(monopolyQuantity)}`} color={MARKER.green} anchor="middle" size={18} delay={500} draw={drawNow(3)} />);
  }
  if (show(4)) {
    drawing.push(<Dot x={toX(monopolyQuantity)} y={toY(monopolyPrice)} color={INK} draw={drawNow(4)} />);
    drawing.push(<Note x={frame.left + 6} y={toY(monopolyPrice) - 8} text={`p* = ${fmt(monopolyPrice)}`} color={INK} size={19} delay={450} draw={drawNow(4)} />);
    if (step === 4) {
      const noteX = toX(monopolyQuantity) + 58, noteY = toY(cost) - 34;
      drawing.push(<Note x={noteX} y={noteY} text="not this height!" color={MARKER.red} size={18} delay={700} draw={drawNow(4)} />);
      drawing.push(<Arrow x1={noteX - 4} y1={noteY - 4} x2={toX(monopolyQuantity) + 8} y2={toY(cost) - 6} id="arrow-not-mr" color={MARKER.red} bend={-14} delay={800} draw={drawNow(4)} />);
    }
  }
  if (show(5)) {
    drawing.push(<Note x={toX(monopolyQuantity * 0.3)} y={(toY(intercept) + 2 * toY(monopolyPrice)) / 3 + 6} text="CS" color={MARKER.blue} anchor="middle" size={20} draw={drawNow(5)} />);
    drawing.push(<Note x={toX(monopolyQuantity * 0.5)} y={(toY(monopolyPrice) + toY(cost)) / 2 + 6} text="profit" color={MARKER.green} anchor="middle" size={20} delay={250} draw={drawNow(5)} />);
    drawing.push(<Note x={toX(monopolyQuantity + (competitiveQuantity - monopolyQuantity) * 0.3)} y={toY(cost) - (toY(cost) - toY(monopolyPrice)) * 0.3 + 4} text="DWL" color={MARKER.red} anchor="middle" size={18} delay={500} draw={drawNow(5)} />);
  }
  if (step === 6) {
    drawing.push(sketch.handle({
      key: "cost", x: frame.dataX(frame.right - 18), y: cost, axis: "y", hint: narrow ? "left" : "below",
      onDrag: (_dataX, dataY) => setTarget((current) => ({ ...current, cost: clamp(Math.round(dataY / unit * 2) * unit / 2, 0, current.intercept - 2 * unit) })),
    }));
    drawing.push(sketch.handle({
      key: "intercept", x: 0, y: intercept, axis: "y", hint: "right",
      onDrag: (_dataX, dataY) => setTarget((current) => {
        const nextIntercept = clamp(Math.round(dataY / unit) * unit, 8 * unit, PRICE_MAX);
        return { ...current, intercept: nextIntercept, cost: Math.min(current.cost, nextIntercept - 2 * unit) };
      }),
    }));
  }

  const update = (changes: Partial<typeof target>) => setTarget((current) => ({ ...current, ...changes }));

  return (
    <SketchGraph
      sketch={sketch}
      note={NOTES[step]}
      tex={TEX[step]}
      ariaLabel={`Monopoly diagram. Demand P = ${fmt(intercept)} minus ${fmt(slope, 2)}Q, MC = ${fmt(cost)}. Q* = ${fmt(monopolyQuantity)}, p* = ${fmt(monopolyPrice)}, deadweight loss ${fmt(deadweightLoss)}.`}
      explore={<>
        <div class="graph-sliders">
          <Slider label="intercept a" value={target.intercept} min={8 * unit} max={PRICE_MAX} step={unit} onInput={(value) => update({ intercept: value, cost: Math.min(target.cost, value - 2 * unit) })} />
          <Slider label="slope b" value={target.slope} min={initialSlope * 0.5} max={initialSlope * 2} step={initialSlope * 0.25} onInput={(value) => update({ slope: value })} />
          <Slider label="MC" value={target.cost} min={0} max={target.intercept - 2 * unit} step={unit} onInput={(value) => update({ cost: value })} />
        </div>
        <Presets presets={[
          { label: "Costs rise", apply: () => update({ cost: initialIntercept / 2 }) },
          { label: "Steeper demand", apply: () => update({ slope: initialSlope * 2 }) },
          { label: "Free to produce", apply: () => update({ cost: 0 }) },
          { label: "Reset", apply: () => setTarget({ intercept: initialIntercept, slope: initialSlope, cost: initialCost }) },
        ]} />
      </>}
    >
      {drawing}
    </SketchGraph>
  );
}
