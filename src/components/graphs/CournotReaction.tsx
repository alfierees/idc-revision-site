import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { Slider } from "./plot";
import {
  useSketch, useGlide, SketchGraph, SketchAxes, InkLine, InkDashed, Note, Dot, Ring, Arrow, Presets,
  niceTicks, fmt, INK, ACCENT, MARKER,
} from "./sketch";

// Cournot best responses in (q₁, q₂) space with P = a − Q and constant MC = c.
// BR_i: q_i = (a − c − q_j)/2, so the lines slope down (strategic substitutes).
// Steps: BR₁ → BR₂ → Cournot–Nash crossing → Stackelberg (leader slides along
// BR₂) → cartel → explore (sliders; presets).

interface Props { a?: number; c?: number; }

const NOTES = [
  "Firm 1's best response: the more firm 2 makes, the less firm 1 wants to make.",
  "Firm 2's best response is the mirror image.",
  "Cournot–Nash: each firm is best-responding to the other, where the lines cross.",
  "Stackelberg: a leader moves first and picks its favourite point on BR₂.",
  "A cartel splits the monopoly output. Each firm then wants to cheat.",
  "Your turn. Change demand or costs and watch every point slide.",
];

export default function CournotReaction({ a: initialIntercept = 120, c: initialCost = 70 }: Props): VNode {
  const [target, setTarget] = useState({ intercept: initialIntercept, cost: initialCost });
  const shown = useGlide(target, false);
  const margin = Math.max(shown.intercept - Math.min(shown.cost, shown.intercept - 1), 1); // a − c
  const axisMax = Math.max(target.intercept - Math.min(target.cost, target.intercept - 1), 1);
  const sketch = useSketch({
    stepCount: NOTES.length,
    domains: [{ xMax: axisMax, yMax: axisMax }],
    aspect: 0.82,
    maxHeight: 440,
    maxWidth: 560,
    padding: { left: 40, bottom: 40, top: 20 },
  });
  const { show, drawNow, step } = sketch;
  const frame = sketch.frames[0];
  const toX = frame.x, toY = frame.y;

  const nash = margin / 3;
  const leader = margin / 2, follower = margin / 4;
  const cartelEach = margin / 4;
  const cournotPrice = shown.intercept - 2 * nash;
  const stackelbergPrice = shown.intercept - (leader + follower);

  const TEX = [
    `BR_1:\\; q_1 = \\frac{${fmt(margin)} - q_2}{2}`,
    `BR_2:\\; q_2 = \\frac{${fmt(margin)} - q_1}{2}`,
    `q_1 = q_2 = \\frac{a - c}{3} = ${fmt(nash)},\\quad P = ${fmt(cournotPrice)}`,
    `q_1 = \\frac{a-c}{2} = ${fmt(leader)},\\quad q_2 = \\frac{a-c}{4} = ${fmt(follower)},\\quad P = ${fmt(stackelbergPrice)}`,
    `q_1 = q_2 = \\frac{a-c}{4} = ${fmt(cartelEach)},\\quad \\text{but } BR_1(${fmt(cartelEach)}) = ${fmt((margin - cartelEach) / 2)}`,
    `\\text{Cournot } ${fmt(nash)} \\text{ each},\\quad \\text{Stackelberg } (${fmt(leader)}, ${fmt(follower)})`,
  ];

  const ticks = niceTicks(0, axisMax, sketch.narrow ? 4 : 5);
  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={ticks} yTicks={ticks} xLabel="q₁" yLabel="q₂" />];
  const plot: VNode[] = [];
  plot.push(<InkLine x1={toX(0)} y1={toY(margin)} x2={toX(margin / 2)} y2={toY(0)} id="br1" color={MARKER.blue} width={2.4} duration={800} draw={drawNow(0)} />);
  if (show(1)) plot.push(<InkLine x1={toX(0)} y1={toY(margin / 2)} x2={toX(margin)} y2={toY(0)} id="br2" color={MARKER.green} width={2.4} duration={800} draw={drawNow(1)} />);
  if (show(2)) {
    plot.push(<InkDashed x1={toX(nash)} y1={toY(nash)} x2={toX(nash)} y2={frame.bottom} id="nash-x" color={INK} width={1.2} dash={4} gap={4} draw={drawNow(2)} />);
    plot.push(<InkDashed x1={toX(nash)} y1={toY(nash)} x2={frame.left} y2={toY(nash)} id="nash-y" color={INK} width={1.2} dash={4} gap={4} draw={drawNow(2)} />);
  }
  if (show(4)) plot.push(<InkDashed x1={toX(0)} y1={toY(margin / 2)} x2={toX(margin / 2)} y2={toY(0)} id="cartel-line" color={MARKER.amber} width={1.4} draw={drawNow(4)} />);
  drawing.push(<g clip-path={sketch.clip()}>{plot}</g>);

  drawing.push(<Note x={toX(margin * 0.06) + 8} y={toY(margin * 0.88)} text="BR₁" color={MARKER.blue} size={20} draw={drawNow(0)} />);
  if (show(1)) drawing.push(<Note x={toX(margin * 0.9)} y={toY(margin * 0.05) - 10} text="BR₂" color={MARKER.green} anchor="middle" size={20} draw={drawNow(1)} />);
  if (show(2)) {
    drawing.push(<Ring x={toX(nash)} y={toY(nash)} id="ring-nash" color={ACCENT} draw={drawNow(2)} />);
    drawing.push(<Dot x={toX(nash)} y={toY(nash)} color={INK} draw={drawNow(2)} />);
    drawing.push(<Note x={toX(nash) + 16} y={toY(nash) - 12} text="Cournot–Nash" color={INK} size={18} delay={300} draw={drawNow(2)} />);
  }
  if (show(3)) {
    drawing.push(<Dot x={toX(leader)} y={toY(follower)} color={MARKER.red} draw={drawNow(3)} />);
    drawing.push(<Arrow x1={toX(nash) + 6} y1={toY(nash) + 4} x2={toX(leader) - 7} y2={toY(follower) - 3} id="arrow-stackelberg" color={MARKER.red} bend={-10} delay={200} draw={drawNow(3)} />);
    drawing.push(<Note x={toX(leader) + 10} y={toY(follower) + 22} text="Stackelberg" color={MARKER.red} size={18} delay={500} draw={drawNow(3)} />);
  }
  if (show(4)) {
    drawing.push(<Dot x={toX(cartelEach)} y={toY(cartelEach)} color={MARKER.amber} draw={drawNow(4)} />);
    drawing.push(<Note x={toX(cartelEach) - 10} y={toY(cartelEach) + 22} text="cartel" color={MARKER.amber} anchor="end" size={18} delay={300} draw={drawNow(4)} />);
    if (step === 4) {
      const cheat = (margin - cartelEach) / 2;
      drawing.push(<Arrow x1={toX(cartelEach) + 6} y1={toY(cartelEach)} x2={toX(cheat) - 6} y2={toY(cartelEach)} id="arrow-cheat" color={MARKER.amber} bend={0} delay={600} draw={drawNow(4)} />);
      drawing.push(<Note x={toX((cartelEach + cheat) / 2)} y={toY(cartelEach) + 20} text="cheat!" color={MARKER.amber} anchor="middle" size={17} delay={900} draw={drawNow(4)} />);
    }
  }

  const update = (changes: Partial<typeof target>) => setTarget((current) => ({ ...current, ...changes }));

  return (
    <SketchGraph
      sketch={sketch}
      note={NOTES[step]}
      tex={TEX[step]}
      ariaLabel={`Cournot best responses. Nash output ${fmt(nash)} each; Stackelberg leader ${fmt(leader)}, follower ${fmt(follower)}.`}
      explore={<>
        <div class="graph-sliders">
          <Slider label="intercept a" value={target.intercept} min={80} max={200} step={10} onInput={(value) => update({ intercept: value, cost: Math.min(target.cost, value - 20) })} />
          <Slider label="MC c" value={target.cost} min={0} max={Math.max(0, target.intercept - 20)} step={5} onInput={(value) => update({ cost: value })} />
        </div>
        <Presets presets={[
          { label: "Cheaper to produce", apply: () => update({ cost: Math.max(0, target.cost - 30) }) },
          { label: "Bigger market", apply: () => update({ intercept: Math.min(200, target.intercept + 40) }) },
          { label: "Reset", apply: () => setTarget({ intercept: initialIntercept, cost: initialCost }) },
        ]} />
      </>}
    >
      {drawing}
    </SketchGraph>
  );
}
