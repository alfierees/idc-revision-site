import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, SketchGraph, SketchAxes, InkLine, InkDashed, Hatch, Note, Dot, fmt, clamp, INK, ACCENT, MARKER, WASH } from "./sketch";

// MR and elasticity on linear demand P = A − Q (Topic 2): at every point,
// MR = P(1 − 1/E). Above the midpoint demand is elastic (E > 1, MR > 0), at the
// midpoint unit elastic (MR = 0), below it inelastic (MR < 0). A monopolist
// never produces on the inelastic part.

const INTERCEPT = 10;

const NOTES = [
  "Linear demand P = 10 − Q, and its marginal revenue MR = 10 − 2Q.",
  "Top half: demand is elastic (E > 1), so a price cut raises revenue: MR > 0.",
  "Bottom half: demand is inelastic (E < 1), so MR < 0. A monopolist never produces here.",
  "At the midpoint, E = 1 and MR = 0: revenue is at its maximum.",
  "Your turn. Slide along demand and check MR = P(1 − 1/E).",
];

export default function ElasticityMR(): VNode {
  const [quantity, setQuantity] = useState(3);
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMax: INTERCEPT, yMin: -10, yMax: 10.5 }], maxWidth: 640, padding: { left: 40, bottom: 30, top: 22 } });
  const { show, drawNow, step } = sketch;
  const frame = sketch.frames[0];
  const toX = frame.x, toY = frame.y;
  const midpoint = INTERCEPT / 2;
  const price = INTERCEPT - quantity;
  const elasticity = price / quantity; // |dQ/dP| · P/Q with slope 1
  const marginalRevenue = INTERCEPT - 2 * quantity;

  const TEX = [
    "P = 10 - Q,\\quad MR = 10 - 2Q",
    "E > 1 \\;\\Rightarrow\\; MR = P\\left(1 - \\tfrac{1}{E}\\right) > 0",
    "E < 1 \\;\\Rightarrow\\; MR < 0",
    "Q = 5,\\; P = 5:\\; E = \\tfrac{P}{Q} = 1,\\; MR = 0",
    `Q = ${fmt(quantity)}:\\; E = \\tfrac{${fmt(price)}}{${fmt(quantity)}} = ${fmt(elasticity, 2)},\\quad MR = ${fmt(price)}\\left(1 - \\tfrac{1}{${fmt(elasticity, 2)}}\\right) = ${fmt(marginalRevenue)}`,
  ];

  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={[0, 2, 4, 6, 8, 10]} yTicks={[-10, -5, 5, 10]} xLabel="Q" yLabel="P" />];
  const plot: VNode[] = [];
  if (show(1)) plot.push(<Hatch points={[[frame.left, frame.top], [toX(midpoint), frame.top], [toX(midpoint), frame.bottom], [frame.left, frame.bottom]]} id={`${sketch.uid}-elastic`} wash={WASH.blue} ink={MARKER.blue} gap={14} draw={drawNow(1)} />);
  if (show(2)) plot.push(<Hatch points={[[toX(midpoint), frame.top], [frame.right, frame.top], [frame.right, frame.bottom], [toX(midpoint), frame.bottom]]} id={`${sketch.uid}-inelastic`} wash={WASH.red} ink={MARKER.red} gap={14} angle={-1} draw={drawNow(2)} />);
  plot.push(<InkLine x1={toX(0)} y1={toY(INTERCEPT)} x2={toX(INTERCEPT)} y2={toY(0)} id="demand" color={INK} width={2.5} draw={drawNow(0)} />);
  plot.push(<InkDashed x1={toX(0)} y1={toY(INTERCEPT)} x2={toX(INTERCEPT)} y2={toY(-INTERCEPT)} id="mr" color={MARKER.purple} width={2} draw={drawNow(0)} />);
  if (show(3)) plot.push(<InkDashed x1={toX(midpoint)} y1={frame.top} x2={toX(midpoint)} y2={frame.bottom} id="mid" color={INK} width={1.2} dash={4} gap={4} draw={drawNow(3)} />);
  drawing.push(<g clip-path={sketch.clip()}>{plot}</g>);
  drawing.push(<Note x={toX(8.5)} y={toY(1.5) - 10} text="demand" color={INK} size={19} draw={drawNow(0)} />);
  drawing.push(<Note x={toX(8) + 10} y={toY(-6)} text="MR" color={MARKER.purple} size={19} draw={drawNow(0)} />);
  if (show(1)) drawing.push(<Note x={toX(2.5)} y={toY(-6)} text="elastic: MR > 0" color={MARKER.blue} anchor="middle" size={18} draw={drawNow(1)} />);
  if (show(2)) drawing.push(<Note x={toX(7.5)} y={toY(8)} text="inelastic: MR < 0" color={MARKER.red} anchor="middle" size={18} draw={drawNow(2)} />);
  if (show(3) && step !== 4) {
    drawing.push(<Dot x={toX(midpoint)} y={toY(midpoint)} color={INK} draw={drawNow(3)} />);
    drawing.push(<Dot x={toX(midpoint)} y={toY(0)} color={MARKER.purple} draw={drawNow(3)} />);
    drawing.push(<Note x={toX(midpoint) + 10} y={toY(midpoint) - 10} text="E = 1" color={INK} size={19} draw={drawNow(3)} />);
  }
  if (step === 4) {
    drawing.push(<Dot x={toX(quantity)} y={toY(marginalRevenue)} color={MARKER.purple} />);
    drawing.push(<InkDashed x1={toX(quantity)} y1={toY(price)} x2={toX(quantity)} y2={toY(marginalRevenue)} id="link" color={ACCENT} width={1.2} dash={4} gap={4} />);
    drawing.push(sketch.handle({ key: "q", x: quantity, y: price, axis: "x", hint: "right", onDrag: (dataX) => setQuantity(clamp(Math.round(dataX * 4) / 4, 0.5, 9.5)) }));
  }

  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} ariaLabel="Linear demand and marginal revenue: elastic above the midpoint, inelastic below.">
      {drawing}
    </SketchGraph>
  );
}
