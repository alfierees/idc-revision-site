import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { Slider } from "./plot";
import {
  useSketch, useGlide, SketchGraph, SketchAxes, InkBar, Note, Presets,
  niceTicks, niceCeil, fmt, INK_SOFT, MARKER, WASH,
} from "./sketch";

// Market structures on linear demand P = A − Q with marginal cost c, compared on
// total quantity, price and industry profit (three small panels). Config:
//   type: structure-comparison
//   structures: monopoly,cournot,bertrand     (any of: monopoly, cournot,
//                                             stackelberg, vertical, bertrand)
//   A: 10
//   c: 2

interface Props { structures?: string; A?: number; c?: number; }

interface Outcome { quantity: number; price: number; profit: number; }
const FORMULAS: Record<string, { name: string; short: string; outcome: (margin: number, intercept: number, cost: number) => Outcome }> = {
  monopoly: { name: "Monopoly", short: "Mono.", outcome: (m, a, c) => ({ quantity: m / 2, price: (a + c) / 2, profit: (m * m) / 4 }) },
  cournot: { name: "Cournot (2)", short: "Cournot", outcome: (m, a, c) => ({ quantity: (2 * m) / 3, price: (a + 2 * c) / 3, profit: (2 * m * m) / 9 }) },
  stackelberg: { name: "Stackelberg", short: "Stack.", outcome: (m, a, c) => ({ quantity: (3 * m) / 4, price: (a + 3 * c) / 4, profit: (3 * m * m) / 16 }) },
  vertical: { name: "Vertical sep.", short: "Vert.", outcome: (m, a, c) => ({ quantity: m / 4, price: (3 * a + c) / 4, profit: (3 * m * m) / 16 }) },
  bertrand: { name: "Bertrand / PC", short: "Bertrand", outcome: (m, _a, c) => ({ quantity: m, price: c, profit: 0 }) },
};
const METRICS: { key: keyof Outcome; title: string; color: string; wash: string }[] = [
  { key: "quantity", title: "Total quantity Q", color: MARKER.blue, wash: WASH.blue },
  { key: "price", title: "Price P", color: MARKER.amber, wash: WASH.amber },
  { key: "profit", title: "Industry profit", color: MARKER.green, wash: WASH.green },
];

export default function StructureComparison({ structures = "monopoly,cournot,bertrand", A: initialIntercept = 10, c: initialCost = 2 }: Props): VNode {
  const keys = String(structures).split(",").map((key) => key.trim()).filter((key) => key in FORMULAS);
  const [target, setTarget] = useState({ intercept: initialIntercept, cost: initialCost });
  const shown = useGlide(target, false);
  const margin = Math.max(0, shown.intercept - shown.cost);
  const outcomes = keys.map((key) => ({ key, name: FORMULAS[key].name, short: FORMULAS[key].short, ...FORMULAS[key].outcome(margin, shown.intercept, shown.cost) }));
  const initialOutcomes = keys.map((key) => FORMULAS[key].outcome(initialIntercept - initialCost, initialIntercept, initialCost));
  const maxima = METRICS.map((metric) => niceCeil(Math.max(...initialOutcomes.map((outcome) => outcome[metric.key])) * 1.5));

  const NOTES = [
    "Total quantity: more competition means more output.",
    "Price: more competition pushes price down toward marginal cost.",
    "Industry profit: competition hands surplus from firms to consumers.",
    "Your turn. Change demand and cost; the ranking never changes.",
  ];
  const sketch = useSketch({
    stepCount: NOTES.length,
    domains: METRICS.map((_, index) => ({ xMax: keys.length, yMax: maxima[index] })),
    aspect: 1.05,
    minHeight: 220,
    maxHeight: 280,
    maxWidth: 760,
    padding: { left: 40, bottom: 40, top: 14, right: 8 },
    panelTitles: METRICS.map((metric) => metric.title),
  });
  const { show, drawNow, step } = sketch;
  const valueTex = (metricIndex: number) => outcomes.map((outcome) => `\\text{${outcome.name.replace(/[()]/g, "")}}: ${fmt(outcome[METRICS[metricIndex].key])}`).join(",\\;");
  const TEX = [valueTex(0), valueTex(1), valueTex(2), `A = ${fmt(shown.intercept)},\\; c = ${fmt(shown.cost)}`];

  const panels = METRICS.map((metric, metricIndex) => {
    const frame = sketch.frames[metricIndex];
    const parts: VNode[] = [<SketchAxes frame={frame} id={`axes-${metricIndex}`} yTicks={niceTicks(0, maxima[metricIndex], 4)} />];
    outcomes.forEach((outcome, index) => {
      parts.push(<text x={frame.x(index + 0.5)} y={frame.bottom + 15} text-anchor="middle" class="sk-tick">{outcome.short}</text>);
      if (!show(metricIndex)) return;
      const visibleStep = step === NOTES.length - 1 ? -1 : metricIndex;
      parts.push(<InkBar frame={frame} fromX={index + 0.2} toX={index + 0.8} value={outcome[metric.key]} id={`${sketch.uid}-${metric.key}-${outcome.key}`} color={metric.color} wash={metric.wash} delay={index * 250} draw={drawNow(visibleStep)} />);
      parts.push(<Note x={frame.x(index + 0.5)} y={frame.y(outcome[metric.key]) - 7} text={fmt(outcome[metric.key])} color={INK_SOFT} anchor="middle" size={17} delay={index * 250 + 300} draw={drawNow(visibleStep)} />);
    });
    return <g>{parts}</g>;
  });

  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]}
      ariaLabel={`Market structures compared on quantity, price and profit with A = ${fmt(shown.intercept)} and c = ${fmt(shown.cost)}.`}
      explore={<>
        <div class="graph-sliders">
          <Slider label="demand intercept A" value={target.intercept} min={Math.round(initialIntercept * 0.6)} max={Math.round(initialIntercept * 1.4)} step={initialIntercept / 20} onInput={(value) => setTarget((current) => ({ ...current, intercept: value, cost: Math.min(current.cost, value * 0.8) }))} />
          <Slider label="marginal cost c" value={target.cost} min={0} max={Math.round(target.intercept * 0.8)} step={initialIntercept / 20} onInput={(value) => setTarget((current) => ({ ...current, cost: value }))} />
        </div>
        <Presets presets={[{ label: "Reset", apply: () => setTarget({ intercept: initialIntercept, cost: initialCost }) }]} />
      </>}>
      {panels}
    </SketchGraph>
  );
}
