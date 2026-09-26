import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { Slider } from "./plot";
import {
  useSketch, useGlide, SketchGraph, SketchAxes, InkLine, InkDashed, Note, Dot, Presets,
  niceTicks, fmt, clamp, INK, MARKER,
} from "./sketch";

// Four market structures on one demand curve P = 120 − Q with MC = c (Micro 3
// sample exam). Each step adds a structure's (Q, P) point, from least to most
// output: vertical separation → monopoly → Cournot → Stackelberg. Explore: drag MC.

const DEMAND_INTERCEPT = 120;

const STRUCTURES = [
  { key: "Vertical", share: 1 / 4, color: MARKER.red, tex: "Q_V = \\tfrac{a-c}{4}", note: "Vertical separation: two markups stacked, so the least output." },
  { key: "Monopoly", share: 1 / 2, color: MARKER.blue, tex: "Q_M = \\tfrac{a-c}{2}", note: "An integrated monopoly: one markup." },
  { key: "Cournot", share: 2 / 3, color: MARKER.green, tex: "Q_C = \\tfrac{2(a-c)}{3}", note: "Two Cournot firms: competition pushes output up." },
  { key: "Stackelberg", share: 3 / 4, color: MARKER.purple, tex: "Q_S = \\tfrac{3(a-c)}{4}", note: "Stackelberg: the leader over-produces, so the most output of all." },
];

const NOTES = [
  "One market demand curve P = 120 − Q, and marginal cost c.",
  ...STRUCTURES.map((structure) => structure.note),
  "Your turn. Drag MC and every structure's point slides along demand.",
];

export default function OligopolyStructures({ c: initialCost = 40 }: { c?: number }): VNode {
  const [target, setTarget] = useState({ cost: initialCost });
  const sketch = useSketch({
    stepCount: NOTES.length,
    domains: [{ xMax: DEMAND_INTERCEPT, yMax: DEMAND_INTERCEPT }],
    padding: { left: 40, bottom: 40, top: 20 },
  });
  const shown = useGlide(target, sketch.dragging !== null);
  const { show, drawNow, step, narrow } = sketch;
  const frame = sketch.frames[0];
  const toX = frame.x, toY = frame.y;
  const cost = shown.cost;
  const margin = DEMAND_INTERCEPT - cost;
  const points = STRUCTURES.map((structure) => {
    const quantity = margin * structure.share;
    return { ...structure, quantity, price: DEMAND_INTERCEPT - quantity };
  });

  const TEX = [
    `P = 120 - Q,\\quad MC = c = ${fmt(cost)}`,
    ...points.map((point) => `${point.tex} = ${fmt(point.quantity)},\\quad P = ${fmt(point.price)}`),
    points.map((point) => `Q_{${point.key[0]}} = ${fmt(point.quantity)}`).join(",\\; "),
  ];

  const ticks = niceTicks(0, DEMAND_INTERCEPT, narrow ? 3 : 6);
  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={ticks} yTicks={ticks} xLabel="Q" yLabel="P" />];
  const plot: VNode[] = [
    <InkDashed x1={toX(0)} y1={toY(cost)} x2={frame.right} y2={toY(cost)} id="mc" color={MARKER.grey} draw={drawNow(0)} />,
    <InkLine x1={toX(0)} y1={toY(DEMAND_INTERCEPT)} x2={toX(DEMAND_INTERCEPT)} y2={toY(0)} id="demand" color={INK} width={2.5} duration={800} draw={drawNow(0)} />,
  ];
  points.forEach((point, index) => {
    if (!show(index + 1)) return;
    plot.push(<InkDashed x1={toX(point.quantity)} y1={toY(point.price)} x2={toX(point.quantity)} y2={frame.bottom} id={`guide-${point.key}`} color={point.color} width={1.3} dash={4} gap={4} draw={drawNow(index + 1)} />);
  });
  drawing.push(<g clip-path={sketch.clip()}>{plot}</g>);
  drawing.push(<Note x={toX(104) + 6} y={toY(16) + 2} text="D" color={INK} size={21} draw={drawNow(0)} />);
  drawing.push(<Note x={frame.right - 36} y={toY(cost) - 8} text={`MC = ${fmt(cost)}`} color={MARKER.grey} anchor="end" size={18} draw={drawNow(0)} />);
  points.forEach((point, index) => {
    if (!show(index + 1)) return;
    drawing.push(<Dot x={toX(point.quantity)} y={toY(point.price)} color={point.color} draw={drawNow(index + 1)} />);
    drawing.push(<Note x={toX(point.quantity) + 8} y={toY(point.price) - 10} text={point.key} color={point.color} size={18} delay={250} draw={drawNow(index + 1)} />);
  });
  if (step === NOTES.length - 1) {
    drawing.push(sketch.handle({
      key: "cost", x: frame.dataX(frame.right - 18), y: cost, axis: "y", hint: "above",
      onDrag: (_dataX, dataY) => setTarget({ cost: clamp(Math.round(dataY / 5) * 5, 0, 110) }),
    }));
  }

  return (
    <SketchGraph
      sketch={sketch}
      note={NOTES[step]}
      tex={TEX[step]}
      ariaLabel={`Market structures on demand P = 120 minus Q with MC ${fmt(cost)}: ${points.map((point) => `${point.key} Q ${fmt(point.quantity)}`).join(", ")}.`}
      explore={<>
        <div class="graph-sliders">
          <Slider label="marginal cost c" value={target.cost} min={0} max={110} step={5} onInput={(value) => setTarget({ cost: value })} />
        </div>
        <Presets presets={[
          { label: "Exam value (c = 40)", apply: () => setTarget({ cost: 40 }) },
          { label: "Free to produce", apply: () => setTarget({ cost: 0 }) },
        ]} />
      </>}
    >
      {drawing}
    </SketchGraph>
  );
}
