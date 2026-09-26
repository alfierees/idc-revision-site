import type { VNode } from "preact";
import { useSketch, SketchGraph, SketchAxes, InkBar, InkDashed, Note, Arrow, fmt, INK_SOFT, MARKER, WASH } from "./sketch";
import { normalSampler } from "./stats";

// Event study (Lecture 7): abnormal return AR_t = actual − model-predicted
// return, in trading days around an announcement (simulated). Ordinary days
// hover around zero; a spike on the day is the surprise; a bump before it hints
// at leaked information; a bump after it is the market still adjusting.

const DAYS = Array.from({ length: 31 }, (_, index) => index - 15);

const NOTES = [
  "Abnormal return = actual return − what the market model predicted. Ordinary days hover around zero.",
  "Announcement day: a big spike. The market was surprised.",
  "A positive abnormal return the day before: anticipation. Did information leak?",
  "And the day after: the market still adjusting to the news.",
];
const TEX = [
  "AR_t = R_t - \\hat\\beta_0 - \\hat\\beta_1 R_t^{S\\&P500}",
  "AR_0 \\gg 0",
  "AR_{-1} > 0",
  "AR_{+1} > 0",
];

export default function EventStudy(): VNode {
  const draw = normalSampler(99);
  const abnormal = DAYS.map((day) => (day === 0 ? 5.4 : day === -1 ? 2.3 : day === 1 ? 2.5 : draw() * 0.5));
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMin: -16, xMax: 16, yMin: -1.5, yMax: 6 }], maxWidth: 680, padding: { left: 40, bottom: 44, top: 22 } });
  const { show, drawNow, step } = sketch;
  const frame = sketch.frames[0];
  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={[-15, -10, -5, 0, 5, 10, 15]} yTicks={[-1, 0, 1, 2, 3, 4, 5]} xLabel="trading days relative to the event" yLabel="AR (%)" hideZero={false} />];
  drawing.push(<InkDashed x1={frame.x(0)} y1={frame.top} x2={frame.x(0)} y2={frame.bottom} id="event" color={INK_SOFT} width={1.2} dash={4} gap={4} />);
  DAYS.forEach((day, index) => {
    const isSpecial = day >= -1 && day <= 1;
    const revealStep = day === 0 ? 1 : day === -1 ? 2 : day === 1 ? 3 : 0;
    if (!show(revealStep)) return;
    const color = day === 0 ? MARKER.red : isSpecial ? MARKER.green : MARKER.grey;
    const wash = day === 0 ? WASH.red : isSpecial ? WASH.green : WASH.grey;
    drawing.push(<InkBar frame={frame} fromX={day - 0.38} toX={day + 0.38} value={abnormal[index]} id={`${sketch.uid}-day-${day}`} color={color} wash={wash} delay={revealStep === 0 ? index * 25 : 0} draw={drawNow(revealStep)} />);
  });
  if (show(1)) drawing.push(<Note x={frame.x(0) + 10} y={frame.y(5.4) + 4} text="surprise!" color={MARKER.red} size={19} draw={drawNow(1)} />);
  if (show(2)) {
    drawing.push(<Note x={frame.x(-6)} y={frame.y(4.2)} text="anticipation (leak?)" color={MARKER.green} anchor="middle" size={18} draw={drawNow(2)} />);
    drawing.push(<Arrow x1={frame.x(-5)} y1={frame.y(3.9)} x2={frame.x(-1.2)} y2={frame.y(2.5)} id="arrow-before" color={MARKER.green} bend={10} draw={drawNow(2)} />);
  }
  if (show(3)) {
    drawing.push(<Note x={frame.x(7)} y={frame.y(4.2)} text="post-event adjustment" color={MARKER.green} anchor="middle" size={18} draw={drawNow(3)} />);
    drawing.push(<Arrow x1={frame.x(5.5)} y1={frame.y(3.9)} x2={frame.x(1.3)} y2={frame.y(2.7)} id="arrow-after" color={MARKER.green} bend={-10} draw={drawNow(3)} />);
  }
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} footnote="Simulated abnormal returns."
      ariaLabel={`Event study: abnormal returns near zero except ${fmt(abnormal[15], 1)} percent on the event day, with smaller rises the day before and after.`}>
      {drawing}
    </SketchGraph>
  );
}
