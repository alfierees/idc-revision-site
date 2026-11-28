import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, SketchGraph, InkLine, Note, Slider, seededRandom, MARKER, WASH, INK, INK_SOFT, INK_MUTED } from "./sketch";

// Data Science, Lecture 3: why accuracy lies on imbalanced classes, and the
// precision-recall trade-off as the threshold moves.
//   type: ds-precision-recall
// 50 gym members with a churn score from a model; 5 really churn (10%).
// Steps: the scores → the lazy model (90% accuracy, recall 0) → threshold 0.5
// and the confusion matrix → precision and recall → lower to 0.3 → raise to
// 0.7 → explore.

const CHURN_SCORES = [0.91, 0.76, 0.58, 0.44, 0.27];
const STAY_SCORES = (() => {
  const random = seededRandom(20251);
  return Array.from({ length: 45 }, () => Math.round(Math.pow(random(), 1.7) * 0.82 * 100) / 100);
})();
const MEMBERS = [
  ...CHURN_SCORES.map((score) => ({ score, churn: true })),
  ...STAY_SCORES.map((score) => ({ score, churn: false })),
].sort((a, b) => a.score - b.score);

const NOTES = [
  "1. A model gives each of 50 gym members a churn score. The 5 who really churn are red. Higher scores should mean more likely to churn.",
  "2. The lazy model predicts that nobody churns. It is right about 45 of 50: 90% accuracy, and it catches no churner at all. Accuracy lies when classes are imbalanced.",
  "3. Predict churn above a threshold of 0.5. Every member lands in one cell of the confusion matrix.",
  "4. Precision = TP / (TP + FP): of the members we flag, how many really churn? Recall = TP / (TP + FN): of the churners, how many do we catch?",
  "5. Lower the threshold to 0.3: we catch more churners (recall up) but flag more stayers too (precision down). Right when a retention call is cheap.",
  "6. Raise it to 0.7: fewer false alarms (precision up), more churners missed (recall down). Right when each offer is expensive.",
  "Your turn. Move the threshold and pick the one that fits the cost of each error.",
];
const STEP_THRESHOLD = [null, 1.01, 0.5, 0.5, 0.3, 0.7];

const ratio = (top: number, bottom: number) => (bottom === 0 ? "—" : (top / bottom).toFixed(2));

export default function DsPrecisionRecall(): VNode {
  const [explore, setExplore] = useState(0.5);
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMin: 0, xMax: 1, yMin: 0, yMax: 1 }], maxWidth: 600, aspect: 0.62, minHeight: 330, maxHeight: 370, padding: { left: 14, right: 14, top: 8, bottom: 6 } });
  const { step, narrow } = sketch;
  const frame = sketch.frames[0];
  const exploring = step === NOTES.length - 1;
  const threshold = exploring ? explore : STEP_THRESHOLD[step];
  const parts: VNode[] = [];

  const W = frame.right - frame.left;
  const sx = (score: number) => frame.left + score * W;
  const stripTop = frame.top + 14, stripBottom = frame.top + 112, axisY = stripBottom + 10;
  const text = (x: number, y: number, s: string, opts: { color?: string; weight?: number; size?: number; anchor?: string; mono?: boolean } = {}) => (
    <text x={x} y={y} text-anchor={opts.anchor ?? "middle"} style={`font:${opts.weight ?? 400} ${opts.size ?? 12.5}px var(${opts.mono ? "--font-mono" : "--font-ui"});fill:${opts.color ?? INK}`}>{s}</text>
  );

  // Predicted-churn zone.
  if (threshold !== null && threshold <= 1) {
    parts.push(<rect x={sx(threshold)} y={stripTop - 6} width={frame.right - sx(threshold)} height={stripBottom - stripTop + 12} style={`fill:${WASH.red};opacity:0.6;transition:all 400ms`} />);
  }

  // Dots, stacked so that equal scores do not overlap.
  const used: Record<number, number> = {};
  MEMBERS.forEach((m, i) => {
    const bin = Math.round(m.score * 40);
    const level = used[bin] ?? 0;
    used[bin] = level + 1;
    const y = stripBottom - 8 - level * 13;
    const flagged = threshold !== null && m.score >= threshold;
    parts.push(
      <circle key={i} cx={sx(m.score)} cy={y} r={5.2}
        style={`fill:${m.churn ? MARKER.red : "var(--color-card)"};stroke:${m.churn ? MARKER.red : MARKER.blue};stroke-width:1.6;opacity:${threshold === null || flagged || m.churn ? 1 : 0.55}`} />,
    );
  });

  // Score axis.
  parts.push(<InkLine x1={frame.left} y1={axisY} x2={frame.right} y2={axisY} id="axis" color={INK_SOFT} width={1.4} />);
  [0, 0.25, 0.5, 0.75, 1].forEach((v) => parts.push(text(sx(v), axisY + 15, String(v), { size: 11, color: INK_SOFT })));
  parts.push(text(frame.right, axisY + 30, "churn score", { size: 11.5, color: INK_SOFT, anchor: "end" }));
  if (threshold !== null && threshold <= 1) {
    parts.push(<line x1={sx(threshold)} y1={stripTop - 10} x2={sx(threshold)} y2={axisY + 4} style={`stroke:${MARKER.red};stroke-width:2;transition:all 400ms`} />);
    parts.push(<Note x={sx(threshold) + (threshold > 0.75 ? -5 : 5)} y={stripTop + 2} anchor={threshold > 0.75 ? "end" : "start"} text={`threshold ${threshold.toFixed(2)}`} color={MARKER.red} size={15} />);
  }

  // Confusion matrix and metrics.
  if (step >= 1) {
    const t = threshold ?? 1.01;
    let tp = 0, fp = 0, fn = 0, tn = 0;
    MEMBERS.forEach((m) => {
      const flagged = m.score >= t;
      if (m.churn && flagged) tp++; else if (m.churn) fn++; else if (flagged) fp++; else tn++;
    });
    const my = axisY + 62, cw = narrow ? 52 : 64, ch = 34, mx = frame.left + (narrow ? 62 : 82);
    parts.push(text(mx + cw, my - 18, "predicted", { size: 11, color: INK_SOFT }));
    parts.push(text(mx + cw / 2, my - 4, "stay", { size: 11, color: INK_SOFT }));
    parts.push(text(mx + cw * 1.5, my - 4, "churn", { size: 11, color: INK_SOFT }));
    parts.push(text(mx - 6, my + ch / 2 + 4, "stays", { size: 11, color: INK_SOFT, anchor: "end" }));
    parts.push(text(mx - 6, my + ch * 1.5 + 4, "churns", { size: 11, color: INK_SOFT, anchor: "end" }));
    parts.push(text(frame.left, my - 18, "actual", { size: 11, color: INK_SOFT, anchor: "start" }));
    const cells: [number, number, string, number, keyof typeof WASH][] = [
      [0, 0, "TN", tn, "grey"], [1, 0, "FP", fp, "amber"], [0, 1, "FN", fn, "amber"], [1, 1, "TP", tp, "green"],
    ];
    cells.forEach(([c, r, label, n, wash]) => {
      parts.push(<rect x={mx + c * cw} y={my + r * ch} width={cw} height={ch} style={`fill:${WASH[wash]};stroke:${INK_MUTED};stroke-width:0.8`} />);
      parts.push(text(mx + c * cw + cw / 2, my + r * ch + 15, label, { size: 10.5, weight: 600, color: INK_SOFT }));
      parts.push(text(mx + c * cw + cw / 2, my + r * ch + 29, String(n), { size: 14, weight: 700, mono: true }));
    });

    const accuracy = (tp + tn) / MEMBERS.length;
    const precision = ratio(tp, tp + fp), recall = ratio(tp, tp + fn);
    const f1 = tp === 0 ? "—" : ((2 * tp) / (2 * tp + fp + fn)).toFixed(2);
    const lx = mx + 2 * cw + (narrow ? 14 : 30), size = narrow ? 13 : 15;
    const lines: [string, string, string][] = [
      ["accuracy", `${Math.round(accuracy * 100)}%`, INK],
      ["precision", precision, step >= 3 ? MARKER.green : INK_SOFT],
      ["recall", recall, step >= 3 ? MARKER.red : INK_SOFT],
      ["F1", f1, INK_SOFT],
    ];
    lines.forEach(([name, value, color], i) => {
      parts.push(text(lx, my + 6 + i * 19, name, { size: size - 2, anchor: "start", color }));
      parts.push(text(frame.right, my + 6 + i * 19, value, { size: size - 1, anchor: "end", mono: true, weight: 700, color }));
    });
  }

  const tex = step < 3 && !exploring
    ? "\\text{Accuracy} = \\dfrac{TP + TN}{\\text{all}}"
    : "\\text{Precision} = \\dfrac{TP}{TP + FP} \\qquad \\text{Recall} = \\dfrac{TP}{TP + FN}";

  return (
    <SketchGraph
      sketch={sketch}
      note={NOTES[step]}
      tex={tex}
      footnote="Illustrative scores for 50 members, 5 of whom churn (10%). Lower threshold: recall up, precision down."
      ariaLabel="Fifty members' churn scores on a line with a movable threshold, the confusion matrix it gives, and accuracy, precision, recall and F1."
      explore={<div class="graph-sliders"><Slider label="Threshold" value={explore} min={0} max={1} step={0.02} onInput={(v) => setExplore(Math.round(v * 100) / 100)} /></div>}
    >
      {parts}
    </SketchGraph>
  );
}
