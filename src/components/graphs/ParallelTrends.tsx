import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { Slider } from "./plot";
import { useSketch, SketchGraph, SketchAxes, InkCurve, InkDashed, Note, Dot, Presets, fmt, INK_SOFT, ACCENT, MARKER } from "./sketch";

// The parallel-trends assumption. Two groups observed for three periods before
// a policy (t = −2, −1, 0) and one after (t = 1); the true effect is fixed at 1.5.
// If the treated group was already trending up faster before the policy, DiD
// (which assumes the control's trend) mistakes that extra trend for an effect.
// Illustrative numbers.

const PERIODS = [-2, -1, 0, 1];
const TRUE_EFFECT = 1.5, CONTROL_START = 10, CONTROL_TREND = 0.5, GROUP_GAP = 2;

const NOTES = [
  "Before the policy, both groups move in parallel: the control is a fair counterfactual.",
  "After the policy, DiD compares the treated group with the control's trend and recovers the true effect.",
  "Now suppose the treated group was already rising faster before the policy.",
  "DiD still assumes the control's trend, so it adds the treated group's extra trend to the effect: biased.",
  "Your turn. Change how much faster the treated group was already growing.",
];

export default function ParallelTrends(): VNode {
  const [extraTrend, setExtraTrend] = useState(0.6);
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMin: -2.4, xMax: 1.5, yMin: 9, yMax: 17 }], maxWidth: 640, padding: { left: 44, bottom: 44, top: 22 } });
  const { show, drawNow, step } = sketch;
  const frame = sketch.frames[0];
  const toX = frame.x, toY = frame.y;
  const treatedTrendGap = step >= 2 ? (step === 4 ? extraTrend : 0.6) : 0;

  const control = (period: number) => CONTROL_START + CONTROL_TREND * (period + 2);
  const treatedWithout = (period: number) => control(period) + GROUP_GAP + treatedTrendGap * (period + 2) - treatedTrendGap * 2; // same level at t = 0
  const treated = (period: number) => treatedWithout(period) + (period >= 1 ? TRUE_EFFECT : 0);
  const didCounterfactual = treated(0) + (control(1) - control(0));
  const didEstimate = treated(1) - didCounterfactual;
  const bias = didEstimate - TRUE_EFFECT;

  const TEX = [
    "\\text{pre-trends parallel}",
    `\\hat\\delta = ${fmt(didEstimate, 2)} = \\text{true effect } ${fmt(TRUE_EFFECT)}`,
    `\\text{treated pre-trend} = ${fmt(CONTROL_TREND + treatedTrendGap, 2)} \\text{ vs control } ${fmt(CONTROL_TREND)}`,
    `\\hat\\delta = ${fmt(didEstimate, 2)} = ${fmt(TRUE_EFFECT)} + \\underbrace{${fmt(bias, 2)}}_{\\text{bias}}`,
    `\\hat\\delta = ${fmt(didEstimate, 2)},\\quad \\text{bias} = ${fmt(bias, 2)}`,
  ];

  const toPoints = (fn: (period: number) => number, periods: number[]): [number, number][] => periods.map((period) => [toX(period), toY(fn(period))]);
  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={PERIODS} yTicks={[10, 12, 14, 16]} xLabel="time (policy at 0)" yLabel="outcome" />];
  drawing.push(<InkDashed x1={toX(0.5)} y1={frame.top} x2={toX(0.5)} y2={frame.bottom} id="policy" color={INK_SOFT} width={1.2} dash={4} gap={4} />);
  drawing.push(<Note x={toX(0.5) + 6} y={frame.top + 10} text="policy" color={INK_SOFT} size={16} />);
  drawing.push(<InkCurve points={toPoints(control, PERIODS)} id={`control-${step >= 2}`} color={MARKER.blue} width={2.3} draw={drawNow(0) || drawNow(2)} />);
  drawing.push(<InkCurve points={toPoints(treated, [-2, -1, 0])} id={`treated-pre-${treatedTrendGap}`} color={MARKER.red} width={2.3} draw={drawNow(0) || drawNow(2)} />);
  PERIODS.forEach((period) => drawing.push(<Dot x={toX(period)} y={toY(control(period))} color={MARKER.blue} radius={3.5} />));
  [-2, -1, 0].forEach((period) => drawing.push(<Dot x={toX(period)} y={toY(treated(period))} color={MARKER.red} radius={3.5} />));
  drawing.push(<Note x={toX(1) + 10} y={toY(control(1)) + 5} text="control" color={MARKER.blue} size={17} />);
  if (show(1)) {
    drawing.push(<InkCurve points={toPoints(treated, [0, 1])} id={`treated-post-${treatedTrendGap}`} color={MARKER.red} width={2.3} draw={drawNow(1) || drawNow(3)} />);
    drawing.push(<Dot x={toX(1)} y={toY(treated(1))} color={MARKER.red} radius={3.5} />);
    drawing.push(<InkDashed x1={toX(0)} y1={toY(treated(0))} x2={toX(1)} y2={toY(didCounterfactual)} id="did-counterfactual" color={MARKER.red} width={1.4} dash={6} gap={4} draw={drawNow(1) || drawNow(3)} />);
    drawing.push(<Dot x={toX(1)} y={toY(didCounterfactual)} color={MARKER.red} hollow />);
    drawing.push(<Note x={toX(1) + 10} y={toY(treated(1)) + 5} text="treated" color={MARKER.red} size={17} />);
    drawing.push(<Note x={toX(1) - 10} y={(toY(treated(1)) + toY(didCounterfactual)) / 2 + 6} text={`DiD ${fmt(didEstimate, 2)}`} color={ACCENT} anchor="end" size={18} />);
  }
  if (show(3) && Math.abs(bias) > 0.05) {
    const trueCounterfactual = treatedWithout(1);
    drawing.push(<InkDashed x1={toX(0)} y1={toY(treated(0))} x2={toX(1)} y2={toY(trueCounterfactual)} id="true-counterfactual" color={MARKER.green} width={1.4} dash={3} gap={4} draw={drawNow(3)} />);
    drawing.push(<Note x={toX(1) + 10} y={toY(trueCounterfactual) + 18} text="true counterfactual" color={MARKER.green} size={16} draw={drawNow(3)} />);
  }

  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} footnote="Illustrative numbers. True effect of the policy: 1.5."
      ariaLabel={`Parallel trends: with a pre-trend gap of ${fmt(treatedTrendGap, 2)} per period, DiD estimates ${fmt(didEstimate, 2)} against a true effect of 1.5.`}
      explore={<>
        <div class="graph-sliders"><Slider label="extra pre-trend of the treated group" value={extraTrend} min={0} max={1.2} step={0.1} onInput={setExtraTrend} /></div>
        <Presets presets={[{ label: "Parallel (valid)", apply: () => setExtraTrend(0) }, { label: "Diverging", apply: () => setExtraTrend(0.8) }]} />
      </>}>
      {drawing}
    </SketchGraph>
  );
}
