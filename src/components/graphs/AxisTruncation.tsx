import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, useGlide, SketchGraph, InkBar, InkLine, InkDashed, Note, INK_SOFT, MARKER, WASH } from "./sketch";

// The notebook's own final bar chart, rebuilt with an axis you can drag back to
// honest. Random Forest ≈ 0.99 vs Neural Network ≈ 0.98 test accuracy on a
// y-axis that starts at 0.90, so a one-point gap fills a tenth of the picture
// and the 86% do-nothing baseline ("approve everyone") falls off the chart.

const BARS = [{ name: "Random Forest", value: 0.99 }, { name: "Neural Network", value: 0.98 }];
const BASELINE = 0.86;

const NOTES = [
  "The notebook's final chart: its y-axis starts at 90%. A one-point gap looks huge.",
  "Start the axis at zero: the two models are practically identical.",
  "Add the missing bar: approving everyone already scores 86%. Both models sit just above doing nothing.",
  "Your turn. Drag where the axis starts.",
];

export default function AxisTruncation(): VNode {
  const [exploreStart, setExploreStart] = useState(0.9);
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMax: 3, yMax: 1 }], aspect: 0.62, maxWidth: 620, padding: { left: 52, bottom: 40, top: 22 } });
  const { show, step } = sketch;
  const { start } = useGlide({ start: step === 0 ? 0.9 : step === 3 ? exploreStart : 0 }, false);
  const frame = sketch.frames[0];
  const toY = (value: number) => frame.bottom - ((value - start) / (1 - start)) * (frame.bottom - frame.top);
  const scaledFrame = { ...frame, y: toY };
  const drawing: VNode[] = [
    <InkLine x1={frame.left} y1={frame.bottom} x2={frame.right} y2={frame.bottom} id="x-axis" color={INK_SOFT} width={1.6} />,
    <InkLine x1={frame.left} y1={frame.bottom} x2={frame.left} y2={frame.top - 6} id="y-axis" color={INK_SOFT} width={1.6} />,
    <text x={frame.left - 30} y={frame.top - 10} class="sk-axis-label">test accuracy</text>,
  ];
  for (let tick = 0; tick <= 4; tick++) {
    const value = start + ((1 - start) * tick) / 4;
    drawing.push(<text x={frame.left - 7} y={toY(value) + 4} text-anchor="end" class="sk-tick">{Math.round(value * 100)}%</text>);
  }
  const bars = show(2) ? [...BARS, { name: "Approve everyone", value: BASELINE }] : BARS;
  bars.forEach((bar, index) => {
    const isBaseline = bar.value === BASELINE;
    const visibleValue = Math.max(bar.value, start);
    drawing.push(<InkBar frame={scaledFrame} fromX={index * 1 + 0.18} toX={index * 1 + 0.82} value={visibleValue} baseline={start} id={`${sketch.uid}-bar-${index}`} color={isBaseline ? MARKER.grey : MARKER.blue} wash={isBaseline ? WASH.grey : WASH.blue} />);
    drawing.push(<Note x={frame.x(index + 0.5)} y={toY(visibleValue) - 8} text={bar.value >= start ? `${Math.round(bar.value * 100)}%` : "off the chart"} color={isBaseline ? MARKER.grey : INK_SOFT} anchor="middle" size={19} />);
    drawing.push(<text x={frame.x(index + 0.5)} y={frame.bottom + 16} text-anchor="middle" class="sk-tick">{bar.name}</text>);
  });
  if (show(2) && BASELINE >= start) drawing.push(<InkDashed x1={frame.left} y1={toY(BASELINE)} x2={frame.right} y2={toY(BASELINE)} id="baseline" color={MARKER.grey} width={1.3} dash={5} gap={4} />);
  const tex = `\\text{axis starts at } ${Math.round(start * 100)}\\%:\\; \\text{the 1-point gap fills } ${Math.round((0.01 / (1 - start)) * 100)}\\% \\text{ of the height}`;
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={tex} ariaLabel={`Accuracy bar chart with the axis starting at ${Math.round(start * 100)} percent.`}
      explore={<div class="graph-sliders"><label class="graph-slider"><span class="graph-slider-lab">axis starts at</span><input type="range" min={0} max={0.95} step={0.05} value={exploreStart} onInput={(event) => setExploreStart(Number((event.currentTarget as HTMLInputElement).value))} /><span class="graph-slider-val">{Math.round(exploreStart * 100)}%</span></label></div>}>
      {drawing}
      <Note x={frame.right - 4} y={frame.top + 10} text={start > 0.5 ? "truncated axis" : "honest axis"} color={start > 0.5 ? MARKER.red : MARKER.green} anchor="end" size={18} />
    </SketchGraph>
  );
}
