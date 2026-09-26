import type { VNode } from "preact";
import {
  useSketch, SketchGraph, SketchAxes, InkBar, Note, niceTicks, niceCeil, fmt, INK_SOFT, MARKER, WASH,
} from "./sketch";

// Bars revealed one per step, then a conclusion. Config:
//   type: profit-bars
//   bars: (a) Cournot, q₁ = 40:1600;(b) Cartel, q₁ = 30:1800;(c) Cheat, q₁ = 45:2025
//   segments: Net rental income,Furniture cost     (optional; bar values "40000+10000" stack)
//   yLabel: Firm 1 profit
//   notes: Competing...|Colluding...|Cheating...    (one per bar, optional)
//   conclusion: Cheating pays most, so the cartel is unstable.
//   conclusionTex: 2025 > 1800 > 1600
//   footnote: ...

interface Props { bars?: string; segments?: string; yLabel?: string; notes?: string; conclusion?: string; conclusionTex?: string; footnote?: string; }

const COLORS = [
  { ink: MARKER.blue, wash: WASH.blue }, { ink: MARKER.green, wash: WASH.green }, { ink: MARKER.red, wash: WASH.red },
  { ink: MARKER.amber, wash: WASH.amber }, { ink: MARKER.purple, wash: WASH.purple },
];

const formatValue = (value: number) => (Math.abs(value) >= 1000 ? value.toLocaleString("en-GB") : fmt(value, 2));

export default function ProfitBars(props: Props): VNode {
  const bars = String(props.bars ?? "A:1;B:2").split(";").map((chunk) => {
    const splitAt = chunk.lastIndexOf(":");
    const label = chunk.slice(0, splitAt).trim();
    const parts = chunk.slice(splitAt + 1).split("+").map(Number);
    return { label, parts, total: parts.reduce((sum, value) => sum + value, 0) };
  });
  const segmentNames = props.segments ? String(props.segments).split(",").map((name) => name.trim()) : [];
  const barNotes = props.notes ? String(props.notes).split("|") : [];
  const stacked = segmentNames.length > 1;
  const NOTES = [...bars.map((bar, index) => barNotes[index] ?? bar.label), props.conclusion ?? "Compare the bars."];
  const minimum = Math.min(0, ...bars.map((bar) => bar.total));
  const maximum = niceCeil(Math.max(...bars.map((bar) => bar.total)) * 1.12);
  const lowest = minimum < 0 ? -niceCeil(-minimum * 1.1) : 0;
  const sketch = useSketch({
    stepCount: NOTES.length,
    domains: [{ xMin: 0, xMax: bars.length, yMin: lowest, yMax: maximum }],
    aspect: 0.62,
    maxWidth: 620,
    padding: { left: 58, bottom: 44, top: 22 },
  });
  const { show, drawNow, step } = sketch;
  const frame = sketch.frames[0];
  const toX = frame.x, toY = frame.y;

  const TEX = [
    ...bars.map((bar) => `\\text{${bar.label.replace(/[{}\\]/g, "")}}:\\; ${stacked ? bar.parts.map(formatValue).join(" + ") + " = " : ""}${formatValue(bar.total)}`),
    props.conclusionTex ?? bars.map((bar) => formatValue(bar.total)).join(",\\ "),
  ];

  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" yTicks={niceTicks(lowest, maximum, 5)} formatTick={(value) => formatValue(value)} yLabel={props.yLabel} />];
  const best = bars.reduce((bestIndex, bar, index) => (bar.total > bars[bestIndex].total ? index : bestIndex), 0);
  bars.forEach((bar, index) => {
    const barStep = index;
    const left = index + 0.18, right = index + 0.82;
    drawing.push(<text x={toX(index + 0.5)} y={frame.bottom + 16} text-anchor="middle" class="sk-tick">{bar.label.length > 22 && sketch.narrow ? bar.label.slice(0, 20) + "…" : bar.label}</text>);
    if (!show(barStep)) return;
    let base = 0;
    bar.parts.forEach((value, partIndex) => {
      const color = stacked ? COLORS[partIndex % COLORS.length] : COLORS[index % COLORS.length];
      drawing.push(<InkBar frame={frame} fromX={left} toX={right} baseline={base} value={base + value} id={`${sketch.uid}-bar-${index}-${partIndex}`} color={color.ink} wash={color.wash} delay={partIndex * 400} draw={drawNow(barStep)} />);
      if (stacked && value !== 0 && Math.abs(toY(base) - toY(base + value)) > 22) {
        drawing.push(<Note x={toX(index + 0.5)} y={(toY(base) + toY(base + value)) / 2 + 6} text={segmentNames[partIndex] ?? ""} color={color.ink} anchor="middle" size={16} delay={partIndex * 400 + 300} draw={drawNow(barStep)} />);
      }
      base += value;
    });
    drawing.push(<Note x={toX(index + 0.5)} y={toY(Math.max(bar.total, 0)) - 8} text={formatValue(bar.total)} color={step === bars.length && index === best ? "var(--color-accent)" : INK_SOFT} anchor="middle" size={20} delay={400} draw={drawNow(barStep)} />);
  });

  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} footnote={props.footnote}
      ariaLabel={`Bar chart: ${bars.map((bar) => `${bar.label} ${formatValue(bar.total)}`).join(", ")}.`}>
      {drawing}
    </SketchGraph>
  );
}
