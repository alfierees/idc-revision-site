import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, useGlide, SketchGraph, SketchAxes, InkDashed, Note, Dot, Slider, Presets, fmt, ACCENT, MARKER, INK_SOFT } from "./sketch";
import { CalcCurve, CalcLine, axisTicks } from "./CalcKit";

// Lec 12: f(x) = ∛(x+1) for x ≥ -1 and 1/x + a for x < -1. One parameter closes
// the gap (continuity), but the join still cannot be differentiable.

const JOIN = -1;
const rightPiece = (x: number) => Math.cbrt(x + 1);
const leftPiece = (x: number, parameter: number) => 1 / x + parameter;
const NOTES = [
  "Two formulas meet at x = -1. With a = 3 they do not line up.",
  "The right piece reaches 0 at x = -1. The left piece heads to -1 + a.",
  "For continuity the two must agree: -1 + a = 0, so a = 1. Watch the gap close.",
  "Continuous is not enough. The left slope is -1, but the right piece arrives with a vertical tangent.",
  "Your turn. Slide a and find where the graph joins.",
];

export default function CalcContinuityJoin(): VNode {
  const [exploredParameter, setExploredParameter] = useState(2);
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMin: -4, xMax: 2, yMin: -2.5, yMax: 4 }], aspect: 0.72, minHeight: 280, maxHeight: 400 });
  const { step, show } = sketch;
  const frame = sketch.frames[0];
  const onExplore = step === NOTES.length - 1;
  const targetParameter = onExplore ? exploredParameter : step >= 2 ? 1 : 3;
  const { parameter } = useGlide({ parameter: targetParameter }, onExplore);
  const leftLimit = leftPiece(JOIN, parameter);
  const joined = Math.abs(leftLimit) < 0.015;
  const tex = step === 3
    ? "f'(-1^-) = -\\frac{1}{x^2}\\Big|_{-1} = -1,\\qquad f'(-1^+) = +\\infty"
    : `\\lim_{x\\to -1^-} f = ${fmt(leftLimit, 2)},\\quad \\lim_{x\\to -1^+} f = 0`;

  return (
    <SketchGraph
      sketch={sketch}
      note={NOTES[step]}
      tex={tex}
      ariaLabel={`Piecewise function with a = ${fmt(parameter, 2)}. Left limit ${fmt(leftLimit, 2)}, right limit 0.`}
      explore={<>
        <div class="graph-sliders"><Slider label="a" value={exploredParameter} min={-1} max={3} step={0.05} onInput={setExploredParameter} /></div>
        <Presets presets={[{ label: "Gap above", apply: () => setExploredParameter(2.5) }, { label: "Joined (a = 1)", apply: () => setExploredParameter(1) }, { label: "Gap below", apply: () => setExploredParameter(-0.5) }]} />
      </>}
    >
      <SketchAxes frame={frame} id="join-axes" xTicks={axisTicks(-4, 2, 6)} yTicks={axisTicks(-2.5, 4)} xLabel="x" yLabel="y" />
      <InkDashed x1={frame.x(JOIN)} y1={frame.top} x2={frame.x(JOIN)} y2={frame.bottom} id="join-guide" color={INK_SOFT} width={1.1} />
      <CalcCurve sketch={sketch} frame={frame} value={(x) => leftPiece(x, parameter)} from={-4} to={JOIN - 0.002} id="join-left" color={MARKER.blue} />
      <CalcCurve sketch={sketch} frame={frame} value={rightPiece} from={JOIN} to={2} id="join-right" color={ACCENT} samples={180} />
      {!joined && <Dot x={frame.x(JOIN)} y={frame.y(leftLimit)} color={MARKER.blue} hollow radius={5.5} />}
      <Dot x={frame.x(JOIN)} y={frame.y(0)} color={ACCENT} radius={5} />
      {show(1) && !joined && <Note x={frame.x(JOIN) - 9} y={frame.y(leftLimit) + (leftLimit > 0 ? 24 : -10)} text={`-1 + a = ${fmt(leftLimit, 2)}`} color={MARKER.blue} anchor="end" size={16} />}
      {joined && !show(3) && <Note x={frame.x(JOIN) + 10} y={frame.y(0) - 12} text="joined!" color={MARKER.green} size={19} />}
      {step === 3 && (
        <g>
          <CalcLine sketch={sketch} frame={frame} x0={JOIN} y0={0} slope={-1} id="join-left-tangent" color={MARKER.blue} width={1.6} dashed />
          <InkDashed x1={frame.x(JOIN)} y1={frame.y(0)} x2={frame.x(JOIN)} y2={frame.top} id="join-vertical-tangent" color={MARKER.red} width={2} />
          <Note x={frame.x(JOIN) + 8} y={frame.top + 18} text="slope → ∞" color={MARKER.red} size={17} />
          <Note x={frame.x(-3)} y={frame.y(2) + 22} text="slope -1" color={MARKER.blue} size={17} />
        </g>
      )}
    </SketchGraph>
  );
}
