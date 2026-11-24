import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, SketchGraph, SketchAxes, Note, Slider, Toggle, fmt, ACCENT, MARKER, WASH } from "./sketch";
import { CalcCurve, axisTicks } from "./CalcKit";

// Lec 08: the definite integral as rectangles converging on the exact area.
// Props: fn = cube | decay | square.

interface Integrand {
  tex: string; value: (x: number) => number; antiderivative: (x: number) => number;
  from: number; to: number; xMin: number; xMax: number; yMax: number;
}
const INTEGRANDS: Record<string, Integrand> = {
  cube: { tex: "x^3", value: (x) => x ** 3, antiderivative: (x) => x ** 4 / 4, from: 1, to: 2, xMin: 0, xMax: 2.4, yMax: 10 },
  square: { tex: "x^2", value: (x) => x * x, antiderivative: (x) => x ** 3 / 3, from: 0, to: 2, xMin: 0, xMax: 2.4, yMax: 5 },
  decay: { tex: "2e^{-2x}", value: (x) => 2 * Math.exp(-2 * x), antiderivative: (x) => -Math.exp(-2 * x), from: 0, to: 3, xMin: 0, xMax: 3.4, yMax: 2.2 },
};
const COUNTS = [1, 2, 4, 10, 40];
const NOTES = [
  "We want the exact area under the curve between the two bounds.",
  "Estimate with one rectangle. It is crude.",
  "Two rectangles are already better.",
  "Four. The error, the part that misses the curve, is shrinking.",
  "Ten rectangles.",
  "With forty, the rectangles are almost the area itself. In the limit, they are the integral.",
  "Your turn. Change the number of rectangles and where each one takes its height.",
];
type Method = "left" | "middle" | "right";

export default function CalcRiemann({ fn }: { fn?: string }): VNode {
  const spec = INTEGRANDS[fn ?? "cube"] ?? INTEGRANDS.cube;
  const [method, setMethod] = useState<Method>("left");
  const [exploredCount, setExploredCount] = useState(8);
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMin: spec.xMin, xMax: spec.xMax, yMin: 0, yMax: spec.yMax }], aspect: 0.68, minHeight: 275, maxHeight: 390 });
  const { step } = sketch;
  const frame = sketch.frames[0];
  const onExplore = step === NOTES.length - 1;
  const count = onExplore ? exploredCount : step === 0 ? 0 : COUNTS[step - 1];
  const width = count > 0 ? (spec.to - spec.from) / count : 0;
  const offset = method === "left" ? 0 : method === "middle" ? 0.5 : 1;
  const heights = Array.from({ length: count }, (_, index) => spec.value(spec.from + (index + offset) * width));
  const estimate = heights.reduce((total, height) => total + height * width, 0);
  const exact = spec.antiderivative(spec.to) - spec.antiderivative(spec.from);
  const bounds = `\\int_{${spec.from}}^{${spec.to}} ${spec.tex}\\,dx`;
  const tex = count === 0 ? `${bounds} = ${fmt(exact, 4)}` : `n = ${count}:\\; \\text{sum} = ${fmt(estimate, 4)},\\quad ${bounds} = ${fmt(exact, 4)}`;

  return (
    <SketchGraph
      sketch={sketch}
      note={NOTES[step]}
      tex={tex}
      ariaLabel={`${count} rectangles estimate the integral as ${fmt(estimate, 4)}; the exact value is ${fmt(exact, 4)}.`}
      top={<Toggle label="Rectangle height" active={method} onPick={(key) => setMethod(key as Method)} options={[{ key: "left", label: "Left" }, { key: "middle", label: "Middle" }, { key: "right", label: "Right" }]} />}
      explore={<div class="graph-sliders"><Slider label="rectangles n" value={exploredCount} min={1} max={60} step={1} onInput={setExploredCount} /></div>}
    >
      {heights.map((height, index) => {
        const left = frame.x(spec.from + index * width), right = frame.x(spec.from + (index + 1) * width);
        const top = frame.y(Math.min(height, spec.yMax));
        return <rect x={left} y={top} width={Math.max(0.5, right - left)} height={Math.max(0, frame.bottom - top)} style={`fill:${WASH.blue};stroke:${MARKER.blue};stroke-width:${count > 24 ? 0.4 : 1}`} />;
      })}
      <SketchAxes frame={frame} id="riemann-axes" xTicks={axisTicks(spec.xMin, spec.xMax, 5)} yTicks={axisTicks(0, spec.yMax, 4)} xLabel="x" yLabel="y" hideZero={false} />
      <CalcCurve sketch={sketch} frame={frame} value={spec.value} from={spec.xMin} to={spec.xMax} id={`riemann-${fn ?? "cube"}`} color={ACCENT} draw={sketch.drawNow(0)} />
      {count > 0 && <Note x={frame.left + 26} y={frame.top + 16} text={`error ${fmt(Math.abs(estimate - exact), 4)}`} color={MARKER.red} size={18} />}
    </SketchGraph>
  );
}
