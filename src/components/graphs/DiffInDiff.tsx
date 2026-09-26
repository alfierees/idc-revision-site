import type { VNode } from "preact";
import { useSketch, SketchGraph, SketchAxes, InkLine, InkDashed, Note, Dot, Arrow, niceTicks, fmt, INK_SOFT, ACCENT, MARKER } from "./sketch";

// Two-group, two-period difference-in-differences with real numbers.
//   type: diff-in-diff
//   control: 23.331,21.166          (before, after)
//   treatment: 20.439,21.027
//   controlName: Pennsylvania (control)
//   treatmentName: New Jersey (treated)
//   periods: Before (Feb–Mar 1992),After (Nov–Dec 1992)
//   yLabel: employment per restaurant
//   decimals: 3
// Steps: control's change → treatment's change → the counterfactual (treated
// start + control's change) → the DiD gap → the regression that computes it.

interface Props { control?: string; treatment?: string; controlName?: string; treatmentName?: string; periods?: string; yLabel?: string; decimals?: number; }

const pair = (text: string | undefined, fallback: [number, number]): [number, number] => {
  const values = String(text ?? "").split(",").map(Number);
  return values.length === 2 && values.every(Number.isFinite) ? [values[0], values[1]] : fallback;
};

export default function DiffInDiff(props: Props): VNode {
  const [controlBefore, controlAfter] = pair(props.control, [23.331, 21.166]);
  const [treatedBefore, treatedAfter] = pair(props.treatment, [20.439, 21.027]);
  const controlName = props.controlName ?? "Control", treatedName = props.treatmentName ?? "Treated";
  const [beforeLabel, afterLabel] = String(props.periods ?? "Before,After").split(",").map((label) => label.trim());
  const decimals = props.decimals ?? 2;
  const controlChange = controlAfter - controlBefore, treatedChange = treatedAfter - treatedBefore;
  const counterfactual = treatedBefore + controlChange;
  const effect = treatedAfter - counterfactual;
  const show = (value: number) => fmt(value, decimals);
  const signedValue = (value: number) => (value >= 0 ? `+${show(value)}` : `-${show(-value)}`);

  const NOTES = [
    `${controlName}: no policy change. Its outcome moves ${controlChange >= 0 ? "up" : "down"} by ${show(Math.abs(controlChange))}. That's the common trend.`,
    `${treatedName}: moves ${treatedChange >= 0 ? "up" : "down"} by ${show(Math.abs(treatedChange))}.`,
    `Without treatment, the treated group would have followed the control's trend (parallel trends): ${show(counterfactual)}.`,
    `The treatment effect is the gap between what happened and that counterfactual: ${signedValue(effect)}.`,
    "The same number is the interaction coefficient in the DiD regression.",
  ];
  const TEX = [
    `\\Delta_C = ${show(controlAfter)} - ${show(controlBefore)} = ${signedValue(controlChange)}`,
    `\\Delta_T = ${show(treatedAfter)} - ${show(treatedBefore)} = ${signedValue(treatedChange)}`,
    `\\text{counterfactual} = ${show(treatedBefore)} ${controlChange >= 0 ? "+" : "-"} ${show(Math.abs(controlChange))} = ${show(counterfactual)}`,
    `\\hat\\delta = \\Delta_T - \\Delta_C = (${signedValue(treatedChange)}) - (${signedValue(controlChange)}) = ${signedValue(effect)}`,
    `y = \\beta_0 + \\beta_1\\,\\text{treat} + \\beta_2\\,\\text{post} + \\delta\\,(\\text{treat}\\times\\text{post}),\\quad \\hat\\delta = ${signedValue(effect)}`,
  ];

  const values = [controlBefore, controlAfter, treatedBefore, treatedAfter, counterfactual];
  const spread = Math.max(...values) - Math.min(...values);
  const yMin = Math.min(...values) - spread * 0.25, yMax = Math.max(...values) + spread * 0.25;
  const ticks = niceTicks(yMin, yMax, 5).filter((tick) => tick >= yMin && tick <= yMax);
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMin: -0.35, xMax: 1.6, yMin, yMax }], maxWidth: 640, padding: { left: 56, bottom: 44, top: 26 } });
  const { show: showStep, drawNow, step } = sketch;
  const frame = sketch.frames[0];
  const toX = frame.x, toY = frame.y;

  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" yTicks={ticks} formatTick={(value) => fmt(value, 2)} yLabel={props.yLabel} />];
  drawing.push(<text x={toX(0)} y={frame.bottom + 18} text-anchor="middle" class="sk-tick">{beforeLabel}</text>);
  drawing.push(<text x={toX(1)} y={frame.bottom + 18} text-anchor="middle" class="sk-tick">{afterLabel}</text>);
  drawing.push(<InkLine x1={toX(0)} y1={toY(controlBefore)} x2={toX(1)} y2={toY(controlAfter)} id="control" color={MARKER.blue} width={2.5} draw={drawNow(0)} />);
  drawing.push(<Dot x={toX(0)} y={toY(controlBefore)} color={MARKER.blue} draw={drawNow(0)} />, <Dot x={toX(1)} y={toY(controlAfter)} color={MARKER.blue} delay={500} draw={drawNow(0)} />);
  drawing.push(<Note x={toX(1) + 12} y={toY(controlAfter) + 5} text={`${controlName}  ${show(controlAfter)}`} color={MARKER.blue} size={17} draw={drawNow(0)} />);
  drawing.push(<Note x={toX(0) - 10} y={toY(controlBefore) + 5} text={show(controlBefore)} color={MARKER.blue} anchor="end" size={17} draw={drawNow(0)} />);
  if (showStep(1)) {
    drawing.push(<InkLine x1={toX(0)} y1={toY(treatedBefore)} x2={toX(1)} y2={toY(treatedAfter)} id="treated" color={MARKER.red} width={2.5} draw={drawNow(1)} />);
    drawing.push(<Dot x={toX(0)} y={toY(treatedBefore)} color={MARKER.red} draw={drawNow(1)} />, <Dot x={toX(1)} y={toY(treatedAfter)} color={MARKER.red} delay={500} draw={drawNow(1)} />);
    drawing.push(<Note x={toX(1) + 12} y={toY(treatedAfter) + (treatedAfter > controlAfter ? -8 : 20)} text={`${treatedName}  ${show(treatedAfter)}`} color={MARKER.red} size={17} draw={drawNow(1)} />);
    drawing.push(<Note x={toX(0) - 10} y={toY(treatedBefore) + 5} text={show(treatedBefore)} color={MARKER.red} anchor="end" size={17} draw={drawNow(1)} />);
  }
  if (showStep(2)) {
    drawing.push(<InkDashed x1={toX(0)} y1={toY(treatedBefore)} x2={toX(1)} y2={toY(counterfactual)} id="counterfactual" color={MARKER.red} width={1.6} dash={7} gap={5} draw={drawNow(2)} />);
    drawing.push(<Dot x={toX(1)} y={toY(counterfactual)} color={MARKER.red} hollow draw={drawNow(2)} />);
    drawing.push(<Note x={toX(1) + 12} y={toY(counterfactual) + 5} text={`counterfactual ${show(counterfactual)}`} color={INK_SOFT} size={16} draw={drawNow(2)} />);
  }
  if (showStep(3)) {
    const bracketX = toX(1) - 22;
    drawing.push(<Arrow x1={bracketX} y1={toY(counterfactual)} x2={bracketX} y2={toY(treatedAfter)} id="gap" color={ACCENT} bend={0} draw={drawNow(3)} />);
    drawing.push(<Note x={bracketX - 8} y={(toY(counterfactual) + toY(treatedAfter)) / 2 + 6} text={`δ = ${signedValue(effect)}`} color={ACCENT} anchor="end" size={20} delay={400} draw={drawNow(3)} />);
  }

  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]}
      ariaLabel={`Difference-in-differences: ${controlName} ${show(controlBefore)} to ${show(controlAfter)}, ${treatedName} ${show(treatedBefore)} to ${show(treatedAfter)}. Estimated effect ${signedValue(effect)}.`}>
      {drawing}
    </SketchGraph>
  );
}
