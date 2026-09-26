import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, SketchGraph, SketchAxes, InkLine, InkDashed, Hatch, Note, Arrow, clamp, fmt, INK, ACCENT, MARKER, WASH, Slider } from "./sketch";

// Second-degree price discrimination (Topic 2): a rich type (p = 12 − q) and a
// poor type (p = 8 − q), zero marginal cost, types hidden. The rich type can
// always take the poor type's bundle, so the firm leaves them an information
// rent: the area between the two demands up to the poor bundle size.
// Shrinking the poor bundle by Δq:
//   loses b = (8 − q)·Δq of revenue from the poor type,
//   gains a = (12 − q − (8 − q))·Δq = 4·Δq of rent from each rich consumer.
// Keep shrinking while a > b; the optimum is a = b, i.e. 8 − q = 4r (r = rich per poor).

const RICH_INTERCEPT = 12, POOR_INTERCEPT = 8;

const NOTES = [
  "Two hidden types: a rich one (higher demand) and a poor one. Marginal cost is zero.",
  "If the poor bundle is the efficient 8 units, the rich type could take it and keep the whole shaded rent.",
  "Shrink the poor bundle a little. You lose b from the poor type, but the rich type's rent shrinks by a.",
  "Keep shrinking while a > b. With equal numbers of each type, stop at q = 4, where a = b.",
  "Your turn. Drag the poor bundle, or change the mix of rich to poor.",
];

export default function SecondDegreePD(): VNode {
  const [bundle, setBundle] = useState(6);
  const [richPerPoor, setRichPerPoor] = useState(1);
  const gap = RICH_INTERCEPT - POOR_INTERCEPT;
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMax: 12.5, yMax: 12.5 }], maxWidth: 640, padding: { left: 40, bottom: 44, top: 22 } });
  const { show, drawNow, step } = sketch;
  const frame = sketch.frames[0];
  const toX = frame.x, toY = frame.y;
  const onExplore = step === 4;
  const optimum = clamp(POOR_INTERCEPT - gap * richPerPoor, 0, POOR_INTERCEPT);
  const poorBundle = onExplore ? bundle : step === 3 ? optimum : step === 2 ? 6 : POOR_INTERCEPT;
  const stripWidth = 0.5;
  const gain = gap * richPerPoor * stripWidth, loss = (POOR_INTERCEPT - poorBundle) * stripWidth;

  const TEX = [
    "p_{\\text{rich}} = 12 - q,\\quad p_{\\text{poor}} = 8 - q",
    "\\text{rent} = \\int_0^{8} \\big[(12-q) - (8-q)\\big]\\,dq = 4 \\times 8 = 32",
    `a = ${fmt(gap * richPerPoor)}\\,\\Delta q,\\quad b = (8 - q)\\,\\Delta q = ${fmt(POOR_INTERCEPT - poorBundle)}\\,\\Delta q`,
    `a = b \\;\\Rightarrow\\; 8 - q = ${fmt(gap * richPerPoor)} \\;\\Rightarrow\\; q^* = ${fmt(optimum)}`,
    `q = ${fmt(bundle)}:\\; a = ${fmt(gap * richPerPoor)}\\Delta q \\;${gap * richPerPoor > POOR_INTERCEPT - bundle ? ">" : gap * richPerPoor < POOR_INTERCEPT - bundle ? "<" : "="}\\; b = ${fmt(POOR_INTERCEPT - bundle)}\\Delta q\\quad (q^* = ${fmt(optimum)})`,
  ];

  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={[0, 2, 4, 6, 8, 10, 12]} yTicks={[2, 4, 6, 8, 10, 12]} xLabel="quantity in the poor type's bundle" yLabel="p" />];
  const plot: VNode[] = [];
  if (show(1)) plot.push(<Hatch points={[[toX(0), toY(RICH_INTERCEPT)], [toX(poorBundle), toY(RICH_INTERCEPT - poorBundle)], [toX(poorBundle), toY(POOR_INTERCEPT - poorBundle)], [toX(0), toY(POOR_INTERCEPT)]]} id={`${sketch.uid}-rent`} wash={WASH.amber} ink={MARKER.amber} gap={9} draw={drawNow(1)} />);
  if (show(2) && poorBundle > stripWidth) {
    const from = poorBundle - stripWidth, to = poorBundle;
    plot.push(<Hatch points={[[toX(from), toY(RICH_INTERCEPT - from)], [toX(to), toY(RICH_INTERCEPT - to)], [toX(to), toY(POOR_INTERCEPT - to)], [toX(from), toY(POOR_INTERCEPT - from)]]} id={`${sketch.uid}-a-${poorBundle}`} wash={WASH.green} ink={MARKER.green} gap={4} draw={step === 2 && drawNow(2)} />);
    plot.push(<Hatch points={[[toX(from), toY(POOR_INTERCEPT - from)], [toX(to), toY(POOR_INTERCEPT - to)], [toX(to), toY(0)], [toX(from), toY(0)]]} id={`${sketch.uid}-b-${poorBundle}`} wash={WASH.red} ink={MARKER.red} gap={4} angle={-1} draw={step === 2 && drawNow(2)} />);
  }
  plot.push(<InkLine x1={toX(0)} y1={toY(RICH_INTERCEPT)} x2={toX(RICH_INTERCEPT)} y2={toY(0)} id="rich" color={MARKER.blue} width={2.4} draw={drawNow(0)} />);
  plot.push(<InkLine x1={toX(0)} y1={toY(POOR_INTERCEPT)} x2={toX(POOR_INTERCEPT)} y2={toY(0)} id="poor" color={MARKER.amber} width={2.4} delay={300} draw={drawNow(0)} />);
  if (show(1)) plot.push(<InkDashed x1={toX(poorBundle)} y1={frame.top} x2={toX(poorBundle)} y2={frame.bottom} id="bundle" color={INK} width={1.3} dash={4} gap={4} />);
  drawing.push(<g clip-path={sketch.clip()}>{plot}</g>);
  drawing.push(<Note x={toX(10)} y={toY(2) - 10} text="rich" color={MARKER.blue} size={19} draw={drawNow(0)} />);
  drawing.push(<Note x={toX(6.2)} y={toY(1.8) + 22} text="poor" color={MARKER.amber} size={19} draw={drawNow(0)} />);
  if (show(1)) drawing.push(<Note x={toX(poorBundle / 2)} y={toY((RICH_INTERCEPT + POOR_INTERCEPT) / 2 - poorBundle / 2) + 6} text="rich type's rent" color={MARKER.amber} anchor="middle" size={17} draw={drawNow(1)} />);
  if (show(2) && poorBundle > stripWidth) {
    drawing.push(<Note x={toX(poorBundle) + 10} y={toY(RICH_INTERCEPT - poorBundle) + 30} text="a (gain)" color={MARKER.green} size={17} />);
    drawing.push(<Note x={toX(poorBundle) + 10} y={toY((POOR_INTERCEPT - poorBundle) / 2) + 6} text="b (loss)" color={MARKER.red} size={17} />);
  }
  if (step === 3) drawing.push(<Arrow x1={toX(7.2)} y1={toY(10)} x2={toX(optimum) + 6} y2={toY(9)} id="arrow-opt" color={ACCENT} bend={-12} draw={drawNow(3)} />);
  if (onExplore) drawing.push(sketch.handle({ key: "bundle", x: bundle, y: 0, axis: "x", hint: "left", onDrag: (dataX) => setBundle(clamp(Math.round(dataX * 4) / 4, 0.5, POOR_INTERCEPT)) }));

  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} ariaLabel="Second-degree price discrimination: shrinking the poor type's bundle trades loss b against gain a."
      explore={<div class="graph-sliders"><Slider label="rich consumers per poor" value={richPerPoor} min={0.25} max={2} step={0.25} onInput={setRichPerPoor} /></div>}>
      {drawing}
    </SketchGraph>
  );
}
