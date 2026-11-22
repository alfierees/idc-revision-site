import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, useGlide, SketchGraph, SketchAxes, Note, Dot, Slider, Toggle, fmt, ACCENT, MARKER } from "./sketch";
import { CalcCurve, CalcLine, axisTicks, texNumber } from "./CalcKit";

// Lec 07: compare the left and right slopes at x = 0 for the classic failure
// shapes. Differentiable means both exist, are finite, and agree.

interface Shape {
  label: string; tex: string; value: (x: number) => number; atZero: number; breaks?: number[];
  leftLimit: number; rightLimit: number; verdict: string; differentiable: boolean;
}
const realPower = (x: number, numerator: number, denominator: number) => {
  const magnitude = Math.pow(Math.abs(x), numerator / denominator);
  return x < 0 && numerator % 2 === 1 ? -magnitude : magnitude;
};
const SHAPES: Record<string, Shape> = {
  smooth: { label: "Smooth", tex: "x^2", value: (x) => x * x, atZero: 0, leftLimit: 0, rightLimit: 0, differentiable: true, verdict: "Both one-sided slopes reach 0. They agree, so f′(0) = 0." },
  corner: { label: "Corner", tex: "|x|", value: Math.abs, atZero: 0, leftLimit: -1, rightLimit: 1, differentiable: false, verdict: "Left slope -1, right slope +1. Two finite slopes that disagree: a corner, no tangent." },
  cusp: { label: "Cusp", tex: "x^{2/3}", value: (x) => realPower(x, 2, 3), atZero: 0, leftLimit: -Infinity, rightLimit: Infinity, differentiable: false, verdict: "The slopes run to -∞ and +∞, opposite infinities: a cusp, no tangent." },
  vertical: { label: "Vertical", tex: "\\sqrt[3]{x}", value: (x) => realPower(x, 1, 3), atZero: 0, leftLimit: Infinity, rightLimit: Infinity, differentiable: false, verdict: "Both slopes run to +∞: a vertical tangent line, but no finite derivative." },
  jump: { label: "Jump", tex: "x < 0:\\ x,\\ \\ x \\ge 0:\\ x+1", value: (x) => (x < 0 ? x : x + 1), atZero: 1, breaks: [0], leftLimit: Infinity, rightLimit: 1, differentiable: false, verdict: "The graph breaks at 0. A function that is not continuous cannot be differentiable." },
};
const GAPS = [1.5, 1.5, 0.5, 0.04, 0.04];
const NOTES = [
  "Is there one clear slope at x = 0?",
  "Measure the slope from the left and from the right, using a point h away on each side.",
  "Bring both points closer to x = 0.",
  "Very close now. Do the two slopes agree?",
];

export default function CalcDifferentiability({ shape }: { shape?: string }): VNode {
  const [shapeKey, setShapeKey] = useState(SHAPES[shape ?? ""] ? (shape as string) : "corner");
  const [exploredGap, setExploredGap] = useState(0.6);
  const spec = SHAPES[shapeKey];
  const stepCount = NOTES.length + 2;
  const sketch = useSketch({ stepCount, domains: [{ xMin: -2, xMax: 2, yMin: -2, yMax: 3.2 }], aspect: 0.72, minHeight: 280, maxHeight: 390 });
  const { step, show } = sketch;
  const frame = sketch.frames[0];
  const onExplore = step === stepCount - 1;
  const { gap } = useGlide({ gap: onExplore ? exploredGap : GAPS[Math.min(step, GAPS.length - 1)] }, onExplore);
  const leftX = -gap, rightX = gap;
  const leftY = spec.value(leftX), rightY = spec.value(rightX);
  const leftSlope = (spec.atZero - leftY) / gap;
  const rightSlope = (rightY - spec.atZero) / gap;
  const note = onExplore ? "Your turn. Pick a shape and shrink h." : step === 4 ? spec.verdict : NOTES[step];
  const tex = step === 4
    ? `f'(0^-) \\to ${texNumber(spec.leftLimit)},\\quad f'(0^+) \\to ${texNumber(spec.rightLimit)}`
    : show(1)
      ? `\\text{left slope} = ${fmt(leftSlope, 2)},\\quad \\text{right slope} = ${fmt(rightSlope, 2)}`
      : `f(x) = ${spec.tex}`;

  return (
    <SketchGraph
      sketch={sketch}
      note={note}
      tex={tex}
      ariaLabel={`${spec.label} at zero. ${spec.verdict}`}
      top={<Toggle label="Shape" active={shapeKey} onPick={(key) => { setShapeKey(key); sketch.setStep(0); }} options={Object.entries(SHAPES).map(([key, entry]) => ({ key, label: entry.label }))} />}
      explore={<div class="graph-sliders"><Slider label="h" value={exploredGap} min={0.02} max={1.8} step={0.02} onInput={setExploredGap} /></div>}
    >
      <SketchAxes frame={frame} id="diff-axes" xTicks={[-2, -1, 0, 1, 2]} yTicks={axisTicks(-2, 3, 5)} xLabel="x" yLabel="y" />
      <CalcCurve sketch={sketch} frame={frame} value={spec.value} from={-2} to={2} breaks={spec.breaks} id={`diff-${shapeKey}`} color={ACCENT} draw={sketch.drawNow(0)} samples={260} />
      {shapeKey === "jump" && <Dot x={frame.x(0)} y={frame.y(0)} color={ACCENT} hollow radius={5} />}
      <Dot x={frame.x(0)} y={frame.y(spec.atZero)} color={ACCENT} radius={5} />
      {show(1) && (
        <g>
          <CalcLine sketch={sketch} frame={frame} x0={0} y0={spec.atZero} slope={leftSlope} id="diff-left-line" color={MARKER.blue} width={1.7} />
          <CalcLine sketch={sketch} frame={frame} x0={0} y0={spec.atZero} slope={rightSlope} id="diff-right-line" color={MARKER.purple} width={1.7} />
          <Dot x={frame.x(leftX)} y={frame.y(leftY)} color={MARKER.blue} radius={5} />
          <Dot x={frame.x(rightX)} y={frame.y(rightY)} color={MARKER.purple} radius={5} />
        </g>
      )}
      {step === 4 && <Note x={frame.right - 4} y={frame.top + 14} text={spec.differentiable ? "differentiable" : "not differentiable"} color={spec.differentiable ? MARKER.green : MARKER.red} anchor="end" size={18} />}
    </SketchGraph>
  );
}
