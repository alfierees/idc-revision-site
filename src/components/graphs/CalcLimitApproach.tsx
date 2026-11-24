import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, useGlide, SketchGraph, SketchAxes, InkDashed, Note, Dot, Slider, Toggle, fmt, ACCENT, MARKER, WASH, INK_SOFT } from "./sketch";
import { CalcCurve, axisTicks } from "./CalcKit";

// A limit as two tracers closing in on x = a from each side, with an ε band
// around the limit (Lec 03 and 04). Cases come from the lesson worksheets.

interface LimitCase {
  label: string; tex: string; point: number;
  value: (x: number) => number;
  leftLimit: number; rightLimit: number; valueAtPoint: number | null;
  domain: { xMin: number; xMax: number; yMin: number; yMax: number };
  verdict: string;
}

const CASES: Record<string, LimitCase> = {
  removable: {
    label: "Hole", tex: "\\frac{x^2-4}{x-2}", point: 2, value: (x) => x + 2, leftLimit: 4, rightLimit: 4, valueAtPoint: null,
    domain: { xMin: -1, xMax: 5, yMin: -1, yMax: 8 },
    verdict: "Both sides head to 4, so the limit is 4, even though f(2) does not exist.",
  },
  moved: {
    label: "Moved point", tex: "x^2,\\; f(2)=3", point: 2, value: (x) => x * x, leftLimit: 4, rightLimit: 4, valueAtPoint: 3,
    domain: { xMin: -1, xMax: 3.6, yMin: -1, yMax: 11 },
    verdict: "The limit is 4, but f(2) = 3. The limit ignores the value at the point itself.",
  },
  jump: {
    label: "Jump", tex: "\\frac{x^2+x}{|x+1|}", point: -1, value: (x) => (x < -1 ? -x : x), leftLimit: 1, rightLimit: -1, valueAtPoint: null,
    domain: { xMin: -3.5, xMax: 1.5, yMin: -2.5, yMax: 3.5 },
    verdict: "From the left we reach 1, from the right -1. The sides disagree, so the limit does not exist.",
  },
  continuous: {
    label: "Continuous", tex: "x^2", point: 2, value: (x) => x * x, leftLimit: 4, rightLimit: 4, valueAtPoint: 4,
    domain: { xMin: -1, xMax: 3.6, yMin: -1, yMax: 11 },
    verdict: "Both sides reach 4 and f(2) = 4. Limit equals value: this is continuity.",
  },
};

const GAPS = [1.2, 1.2, 0.5, 0.08, 0.08];
const NOTES = [
  "Here is the function. What happens near the marked x?",
  "Put one tracer on each side of the point.",
  "Move both closer. We never land on the point itself, we only approach it.",
  "Very close now. Read the height each tracer is heading to.",
];

export default function CalcLimitApproach({ limitCase }: { limitCase?: string }): VNode {
  const [caseKey, setCaseKey] = useState(CASES[limitCase ?? ""] ? (limitCase as string) : "removable");
  const [exploredGap, setExploredGap] = useState(0.6);
  const [bandWidth, setBandWidth] = useState(0.5);
  const spec = CASES[caseKey];
  const stepCount = NOTES.length + 2;
  const sketch = useSketch({ stepCount, domains: [spec.domain], aspect: 0.72, minHeight: 280, maxHeight: 400 });
  const { step, show } = sketch;
  const frame = sketch.frames[0];
  const onExplore = step === stepCount - 1;
  const { gap } = useGlide({ gap: onExplore ? exploredGap : GAPS[Math.min(step, GAPS.length - 1)] }, onExplore);
  const leftX = spec.point - gap, rightX = spec.point + gap;
  const leftY = spec.value(leftX), rightY = spec.value(rightX);
  const limitExists = Math.abs(spec.leftLimit - spec.rightLimit) < 1e-9;
  const showBand = show(4);
  const bandCentre = spec.leftLimit;
  const leftInside = Math.abs(leftY - bandCentre) < bandWidth, rightInside = Math.abs(rightY - bandCentre) < bandWidth;
  const note = onExplore ? "Your turn. Shrink the gap, then tighten the band around the limit." : step === 4 ? spec.verdict : NOTES[step];
  const tex = show(1)
    ? `f(${fmt(leftX, 2)}) = ${fmt(leftY, 3)},\\quad f(${fmt(rightX, 2)}) = ${fmt(rightY, 3)}`
    : `f(x) = ${spec.tex}`;
  const finalTex = limitExists ? `\\lim_{x\\to ${spec.point}} f(x) = ${spec.leftLimit}` : `\\lim_{x\\to ${spec.point}^-} f = ${spec.leftLimit},\\;\\lim_{x\\to ${spec.point}^+} f = ${spec.rightLimit}`;

  return (
    <SketchGraph
      sketch={sketch}
      note={note}
      tex={step === 4 ? finalTex : tex}
      ariaLabel={`Limit of ${spec.label} case at x = ${spec.point}. Left limit ${spec.leftLimit}, right limit ${spec.rightLimit}.`}
      top={<Toggle label="Case" active={caseKey} onPick={(key) => { setCaseKey(key); sketch.setStep(0); }} options={Object.entries(CASES).map(([key, entry]) => ({ key, label: entry.label }))} />}
      explore={<div class="graph-sliders">
        <Slider label="gap" value={exploredGap} min={0.02} max={1.4} step={0.02} onInput={setExploredGap} />
        <Slider label="band ε" value={bandWidth} min={0.1} max={1.5} step={0.05} onInput={setBandWidth} />
      </div>}
    >
      {showBand && <rect x={frame.left} y={frame.y(bandCentre + bandWidth)} width={frame.right - frame.left} height={Math.max(0, frame.y(bandCentre - bandWidth) - frame.y(bandCentre + bandWidth))} style={`fill:${WASH.green}`} clip-path={sketch.clip()} />}
      <SketchAxes frame={frame} id="limit-axes" xTicks={axisTicks(frame.xMin, frame.xMax, sketch.narrow ? 5 : 7)} yTicks={axisTicks(frame.yMin, frame.yMax)} xLabel="x" yLabel="y" />
      <CalcCurve sketch={sketch} frame={frame} value={spec.value} from={frame.xMin} to={frame.xMax} breaks={[spec.point]} id={`limit-${caseKey}`} color={ACCENT} draw={sketch.drawNow(0)} />
      <InkDashed x1={frame.x(spec.point)} y1={frame.top} x2={frame.x(spec.point)} y2={frame.bottom} id={`limit-guide-${caseKey}`} color={INK_SOFT} width={1.2} />
      <Dot x={frame.x(spec.point)} y={frame.y(spec.leftLimit)} color={ACCENT} hollow radius={5.5} />
      {!limitExists && <Dot x={frame.x(spec.point)} y={frame.y(spec.rightLimit)} color={ACCENT} hollow radius={5.5} />}
      {spec.valueAtPoint !== null && <Dot x={frame.x(spec.point)} y={frame.y(spec.valueAtPoint)} color={MARKER.red} radius={5} />}
      {show(1) && (
        <g>
          <InkDashed x1={frame.x(leftX)} y1={frame.y(leftY)} x2={frame.left} y2={frame.y(leftY)} id={`left-level-${fmt(gap, 2)}`} color={MARKER.blue} width={1.1} />
          <InkDashed x1={frame.x(rightX)} y1={frame.y(rightY)} x2={frame.right} y2={frame.y(rightY)} id={`right-level-${fmt(gap, 2)}`} color={MARKER.purple} width={1.1} />
          <Dot x={frame.x(leftX)} y={frame.y(leftY)} color={MARKER.blue} radius={5.5} />
          <Dot x={frame.x(rightX)} y={frame.y(rightY)} color={MARKER.purple} radius={5.5} />
          <Note x={frame.left + 5} y={frame.y(leftY) - 7} text="from left" color={MARKER.blue} size={16} />
          <Note x={frame.right - 4} y={frame.y(rightY) + 19} text="from right" color={MARKER.purple} anchor="end" size={16} />
        </g>
      )}
      {showBand && <Note x={frame.right - 4} y={frame.top + 12} text={leftInside && rightInside ? "both in the band" : "not both in the band"} color={leftInside && rightInside ? MARKER.green : MARKER.red} anchor="end" size={17} />}
    </SketchGraph>
  );
}
