import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, SketchGraph, InkLine, InkDashed, Hatch, Note, Dot, Ring, clamp, INK, INK_SOFT, ACCENT, MARKER, WASH } from "./sketch";

// Target-leakage timeline for the loan-default notebook (1,200 customers,
// 14% default rate). Each of the seven data columns is placed at the moment
// the bank first KNOWS it. Four columns exist on application day; month is a
// warehouse artefact that appears row by row; avg_days_late and
// collections_flag only accrue AFTER the loan is granted, yet the notebook
// trains on them. Explore: drag "today" back to 0 to see the leak.

const FEATURES = [
  { name: "income", knownAt: 0 },
  { name: "self_employed", knownAt: 0 },
  { name: "credit_score", knownAt: 0 },
  { name: "loan_amount", knownAt: 0 },
  { name: "month", knownAt: 1 },
  { name: "avg_days_late", knownAt: 8 },
  { name: "collections_flag", knownAt: 8 },
];
const ACCRUING = [{ lane: 5, start: 0.5 }, { lane: 6, start: 2 }];

const NOTES = [
  "The decision is made on application day. Four columns are known then.",
  "month is a warehouse artefact: a new row lands every month after the loan starts.",
  "avg_days_late and collections_flag only build up while the customer repays, or doesn't.",
  "And the outcome, default, is only known at the end.",
  "The notebook trains on all of them. On decision day, two of its strongest columns don't exist yet: that's the leak.",
  "Your turn. Drag 'today' and watch what the bank could actually know.",
];

export default function LeakageTimeline(): VNode {
  const [today, setToday] = useState(0);
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMin: -0.5, xMax: 8.6, yMin: 0, yMax: 8 }], aspect: 0.72, maxWidth: 680, padding: { left: 118, right: 16, top: 30, bottom: 44 } });
  const { show, drawNow, step } = sketch;
  const frame = sketch.frames[0];
  const toX = frame.x;
  const laneY = (lane: number) => frame.y(7.5 - lane);
  const onExplore = step === 5;
  const knownNow = (month: number) => !onExplore || today >= month;

  const drawing: VNode[] = [];
  drawing.push(<InkLine x1={frame.left} y1={frame.bottom} x2={frame.right} y2={frame.bottom} id="axis" color={INK_SOFT} width={1.5} />);
  for (let month = 0; month <= 8; month++) drawing.push(<text x={toX(month)} y={frame.bottom + 16} text-anchor="middle" class="sk-tick">{month}</text>);
  drawing.push(<text x={(frame.left + frame.right) / 2} y={frame.bottom + 33} text-anchor="middle" class="sk-axis-label">months since the application</text>);
  [...FEATURES.map((feature) => feature.name), "default"].forEach((name, lane) => drawing.push(<text x={frame.left - 10} y={laneY(lane) + 4} text-anchor="end" class="sk-code-label">{name}</text>));
  drawing.push(<InkLine x1={toX(0)} y1={frame.top - 12} x2={toX(0)} y2={frame.bottom} id="application-day" color={INK} width={2.4} draw={drawNow(0)} />);
  drawing.push(<Note x={toX(0) + 8} y={frame.top - 12} text="application day: the decision is made here" color={INK} size={17} draw={drawNow(0)} />);

  // four columns known on day 0
  for (let lane = 0; lane < 4; lane++) drawing.push(<Dot x={toX(0)} y={laneY(lane)} color={MARKER.green} radius={6} delay={lane * 120} draw={drawNow(0)} />);
  // month: one chip per month
  if (show(1)) for (let month = 1; month <= 8; month++) drawing.push(<Dot x={toX(month)} y={laneY(4)} color={knownNow(month) ? INK_SOFT : "var(--color-rule-strong)"} radius={3.5} hollow={!knownNow(month)} delay={month * 80} draw={drawNow(1)} />);
  // accruing columns
  if (show(2)) ACCRUING.forEach(({ lane, start }) => {
    const solidEnd = onExplore ? clamp(today, start, 8) : 8;
    const top = laneY(lane) - 7, bottom = laneY(lane) + 7;
    if (solidEnd > start) drawing.push(<Hatch points={[[toX(start), top], [toX(solidEnd), top], [toX(solidEnd), bottom], [toX(start), bottom]]} id={`${sketch.uid}-accrue-${lane}-${Math.round(solidEnd * 2)}`} wash={WASH.green} ink={MARKER.green} gap={5} draw={drawNow(2)} />);
    if (solidEnd < 8) drawing.push(<InkDashed x1={toX(solidEnd)} y1={laneY(lane)} x2={toX(8)} y2={laneY(lane)} id={`ghost-${lane}`} color={INK_SOFT} width={1.3} dash={4} gap={4} />);
  });
  // outcome
  if (show(3)) {
    const outcomeKnown = knownNow(8);
    drawing.push(<Dot x={toX(8)} y={laneY(7)} color={MARKER.red} radius={7} hollow={!outcomeKnown} draw={drawNow(3)} />);
    drawing.push(<Note x={toX(8) - 14} y={laneY(7) + 6} text="the outcome" color={MARKER.red} anchor="end" size={17} draw={drawNow(3)} />);
  }
  // the leak
  const leakVisible = step === 4 || (onExplore && today < 0.5);
  if (leakVisible) {
    ACCRUING.forEach(({ lane, start }) => {
      const left = toX(start) - 8, right = toX(8) + 10, top = laneY(lane) - 13, bottom = laneY(lane) + 13;
      [[left, top, right, top], [right, top, right, bottom], [right, bottom, left, bottom], [left, bottom, left, top]].forEach(([x1, y1, x2, y2], side) => drawing.push(<InkLine x1={x1} y1={y1} x2={x2} y2={y2} id={`leak-${lane}-${side}`} color={MARKER.red} width={1.8} delay={side * 100} duration={200} draw={drawNow(4)} />));
    });
    drawing.push(<Ring x={toX(8)} y={laneY(7)} radius={13} id="leak-outcome" color={MARKER.red} draw={drawNow(4)} />);
    drawing.push(<Note x={toX(0.6)} y={laneY(5) - 18} text="in the training data anyway" color={MARKER.red} size={17} draw={drawNow(4)} />);
  }
  if (onExplore) {
    drawing.push(<InkDashed x1={toX(today)} y1={frame.top - 4} x2={toX(today)} y2={frame.bottom} id="today" color={ACCENT} width={1.8} dash={6} gap={4} />);
    drawing.push(sketch.handle({ key: "today", x: today, y: 0, axis: "x", hint: "right", onDrag: (dataX) => setToday(clamp(Math.round(dataX * 2) / 2, 0, 8)) }));
  }
  const knowable = FEATURES.filter((feature) => (onExplore ? today : 0) >= feature.knownAt).length;
  const tex = onExplore ? `\\text{today} = ${today}:\\; ${knowable} \\text{ of } 7 \\text{ columns knowable}` : step === 4 ? "\\text{used by the model but unknowable on decision day: } 2" : `\\text{known on decision day: } 4 \\text{ of } 7`;
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={tex} ariaLabel="Timeline of when each data column becomes knowable: two columns the model uses only exist after the loan is granted.">
      {drawing}
    </SketchGraph>
  );
}
