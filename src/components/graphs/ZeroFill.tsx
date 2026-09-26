import type { VNode } from "preact";
import { useSketch, SketchGraph, SketchAxes, Hatch, Note, Arrow, seededRandom, INK_SOFT, MARKER, WASH } from "./sketch";

// Filling missing credit scores with 0 manufactures impossible customers.
// Real scores live between 300 and 850 (≈ N(680, 70) clipped). The notebook
// fills its gaps with 0: not a low score, an impossible one. After
// standardisation those zeros sit at z ≈ −3.2, a far-out cluster the model
// learns as a "mystery segment". The fix: a plausible value from the training
// rows plus a flag remembering the score was missing.

// 60 customers, fixed so every render is identical (same seed as before).
const random = seededRandom(7);
const MISSING = [3, 17, 29, 41, 55];
const CUSTOMERS = Array.from({ length: 60 }, () => {
  const first = random(), second = random();
  const gaussian = Math.sqrt(-2 * Math.log(first || 1e-9)) * Math.cos(2 * Math.PI * second);
  return { score: Math.min(850, Math.max(300, 680 + 70 * gaussian)), height: 0.3 + 0.48 * random() };
});
const MOVERS = MISSING.map((index, order) => ({ index, order, zeroScore: 4 + random() * 26, medianScore: 682 + (random() - 0.5) * 30 }));

const NOTES = [
  "60 customers' credit scores. Real scores live between 300 and 850.",
  "Five customers have no score recorded.",
  "The notebook fills the gaps with 0: not a low score, an impossible one. After scaling they sit at z ≈ −3.2, a made-up segment.",
  "The fix: fill with a plausible value (the training median) and keep a 'was missing' flag as its own column.",
];

export default function ZeroFill(): VNode {
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMax: 850, yMax: 1 }], aspect: 0.6, maxWidth: 680, padding: { left: 18, bottom: 44, top: 22 } });
  const { show, drawNow, step } = sketch;
  const frame = sketch.frames[0];
  const mode = step <= 1 ? "raw" : step === 2 ? "zero" : "median";
  const drawing: VNode[] = [
    <Hatch points={[[frame.x(300), frame.top], [frame.x(850), frame.top], [frame.x(850), frame.bottom], [frame.x(300), frame.bottom]]} id={`${sketch.uid}-possible`} wash={WASH.green} ink={MARKER.green} gap={16} />,
    <SketchAxes frame={frame} id="axes" xTicks={[0, 300, 500, 700, 850]} yTicks={[]} xLabel="credit score" />,
    <Note x={frame.x(575)} y={frame.top + 14} text="possible scores" color={MARKER.green} anchor="middle" size={18} />,
    <Note x={frame.x(150)} y={frame.top + 14} text="impossible" color={INK_SOFT} anchor="middle" size={18} />,
  ];
  CUSTOMERS.forEach((customer, index) => {
    if (MISSING.includes(index)) return;
    drawing.push(<circle cx={frame.x(customer.score)} cy={frame.y(customer.height)} r={4.5} style={`fill:${INK_SOFT};opacity:0.55`} />);
  });
  MOVERS.forEach(({ index, order, zeroScore, medianScore }) => {
    const shelfX = frame.right - 12 - (4 - order) * 16, shelfY = frame.bottom - 12;
    const x = mode === "raw" ? shelfX : mode === "zero" ? frame.x(zeroScore) : frame.x(medianScore);
    const y = mode === "raw" ? shelfY : frame.y(CUSTOMERS[index].height);
    const fill = mode === "raw" ? "var(--color-card)" : mode === "zero" ? MARKER.red : MARKER.green;
    const visible = show(1);
    drawing.push(
      <g style={`transform:translate(${x}px,${y}px);transition:transform .7s ease;opacity:${visible ? 1 : 0}`}>
        <circle r={5.5} style={`fill:${fill};stroke:${mode === "raw" ? INK_SOFT : fill};stroke-width:1.6;${mode === "raw" ? "stroke-dasharray:2 2" : ""}`} />
        {mode === "median" && <text x={7} y={-6} style={`font:700 14px var(--font-hand);fill:${MARKER.green}`}>flag</text>}
      </g>,
    );
  });
  if (step === 1) drawing.push(<Note x={frame.right - 50} y={frame.bottom - 30} text="missing (?)" color={INK_SOFT} anchor="middle" size={18} draw={drawNow(1)} />);
  if (step === 2) {
    drawing.push(<Note x={frame.x(12)} y={frame.y(0.12)} text="z ≈ −3.2 after scaling: an invented segment" color={MARKER.red} size={18} draw={drawNow(2)} />);
    drawing.push(<Arrow x1={frame.x(250)} y1={frame.y(0.9)} x2={frame.x(40)} y2={frame.y(0.72)} id="to-zero" color={MARKER.red} bend={-20} draw={drawNow(2)} />);
  }
  if (step === 3) drawing.push(<Note x={frame.x(500)} y={frame.y(0.12)} text="plausible value + 'was missing' kept as its own column" color={MARKER.green} anchor="middle" size={18} draw={drawNow(3)} />);
  const tex = mode === "raw" ? "5 / 60 \\text{ customers have no score}" : mode === "zero" ? "\\text{score} = 0 \\;\\to\\; z \\approx -3.2 \\text{ after scaling}" : "\\text{score} \\leftarrow \\text{median}_{\\text{train}},\\quad \\text{was\\_missing} = 1";
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={tex} ariaLabel="Credit scores: filling missing values with zero creates impossible customers; the fix uses the median and a missing flag.">
      {drawing}
    </SketchGraph>
  );
}
