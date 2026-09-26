import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, SketchGraph, SketchAxes, InkCurve, InkDashed, Hatch, Note, Dot, curvePoints, fmt, clamp, INK_SOFT, ACCENT, MARKER, WASH } from "./sketch";
import { normalCdf } from "./stats";

// ROC curves (ML Lecture 7). A classifier gives each case a confidence score;
// positives ~ N(0.62, 0.14²), negatives ~ N(0.38, 0.14²) (illustrative). A
// threshold turns scores into predictions: TPR = share of positives above it,
// FPR = share of negatives above it. Sweeping the threshold traces the ROC
// curve; AUC = P(random positive scores above random negative) = Φ(Δμ / (σ√2)).

const POSITIVE_MEAN = 0.62, NEGATIVE_MEAN = 0.38, SPREAD = 0.14;
const truePositiveRate = (threshold: number) => 1 - normalCdf((threshold - POSITIVE_MEAN) / SPREAD);
const falsePositiveRate = (threshold: number) => 1 - normalCdf((threshold - NEGATIVE_MEAN) / SPREAD);
const AUC = normalCdf((POSITIVE_MEAN - NEGATIVE_MEAN) / (SPREAD * Math.SQRT2));
const density = (score: number, mean: number) => Math.exp(-0.5 * ((score - mean) / SPREAD) ** 2);

const NOTES = [
  "Confidence scores from a classifier: positives (red) tend to score higher than negatives (blue), but they overlap.",
  "Pick a threshold: predict positive above it. TPR = share of positives caught; FPR = share of negatives wrongly flagged.",
  "That threshold is one point on the ROC plot (FPR across, TPR up).",
  "Sweep the threshold from 1 down to 0 and the point traces the ROC curve.",
  `The area under it, AUC = ${fmt(AUC, 2)}: the chance a random positive outscores a random negative. 0.5 is a coin flip.`,
  "Your turn. Drag the threshold.",
];

export default function RocCurve(): VNode {
  const [exploreThreshold, setExploreThreshold] = useState(0.5);
  const sketch = useSketch({
    stepCount: NOTES.length,
    domains: [{ xMax: 1, yMax: 1.1 }, { xMax: 1, yMax: 1 }],
    aspect: 0.82, minHeight: 250, maxHeight: 320, maxWidth: 760, padding: { left: 40, bottom: 40, top: 16 },
    panelTitles: ["Scores", "ROC curve"],
  });
  const { show, drawNow, step } = sketch;
  const [scores, roc] = sketch.frames;
  const threshold = step === 5 ? exploreThreshold : 0.5;
  const tpr = truePositiveRate(threshold), fpr = falsePositiveRate(threshold);
  const TEX = [
    "\\text{positives} \\sim N(0.62, 0.14^2),\\; \\text{negatives} \\sim N(0.38, 0.14^2)",
    `t = ${fmt(threshold, 2)}:\\; TPR = ${fmt(tpr, 2)},\\; FPR = ${fmt(fpr, 2)}`,
    `(FPR, TPR) = (${fmt(fpr, 2)},\\ ${fmt(tpr, 2)})`,
    "t: 1 \\to 0 \\;\\Rightarrow\\; (0, 0) \\to (1, 1)",
    `AUC = \\Phi\\!\\left(\\tfrac{0.62 - 0.38}{0.14\\sqrt2}\\right) = ${fmt(AUC, 3)}`,
    `t = ${fmt(threshold, 2)}:\\; TPR = ${fmt(tpr, 2)},\\; FPR = ${fmt(fpr, 2)}`,
  ];
  const areaAbove = (mean: number): [number, number][] => {
    const points: [number, number][] = [[scores.x(threshold), scores.bottom]];
    for (let score = threshold; score <= 1.0001; score += 0.01) points.push([scores.x(score), scores.y(density(score, mean))]);
    points.push([scores.x(1), scores.bottom]);
    return points;
  };
  const scoreParts: VNode[] = [<SketchAxes frame={scores} id="score-axes" xTicks={[0, 0.5, 1]} yTicks={[]} xLabel="score" />];
  if (show(1)) {
    scoreParts.push(<Hatch points={areaAbove(POSITIVE_MEAN)} id={`${sketch.uid}-tp-${threshold}`} wash={WASH.red} ink={MARKER.red} gap={6} />);
    scoreParts.push(<Hatch points={areaAbove(NEGATIVE_MEAN)} id={`${sketch.uid}-fp-${threshold}`} wash={WASH.blue} ink={MARKER.blue} gap={6} angle={-1} />);
  }
  scoreParts.push(<InkCurve points={curvePoints(scores, (score) => density(score, NEGATIVE_MEAN), 0, 1, 60)} id="negatives" color={MARKER.blue} width={2.2} draw={drawNow(0)} />);
  scoreParts.push(<InkCurve points={curvePoints(scores, (score) => density(score, POSITIVE_MEAN), 0, 1, 60)} id="positives" color={MARKER.red} width={2.2} draw={drawNow(0)} />);
  scoreParts.push(<Note x={scores.x(0.2)} y={scores.y(density(0.2, NEGATIVE_MEAN)) - 8} text="negatives" color={MARKER.blue} anchor="end" size={16} />);
  scoreParts.push(<Note x={scores.x(0.82)} y={scores.y(density(0.82, POSITIVE_MEAN)) - 8} text="positives" color={MARKER.red} size={16} />);
  if (show(1)) {
    scoreParts.push(<InkDashed x1={scores.x(threshold)} y1={scores.top} x2={scores.x(threshold)} y2={scores.bottom} id="threshold" color={ACCENT} width={2} dash={6} gap={4} />);
    scoreParts.push(<Note x={scores.x(threshold) + 6} y={scores.top + 10} text={`t = ${fmt(threshold, 2)}`} color={ACCENT} size={17} />);
  }
  const rocParts: VNode[] = [<SketchAxes frame={roc} id="roc-axes" xTicks={[0, 0.5, 1]} yTicks={[0.5, 1]} xLabel="FPR" yLabel="TPR" />];
  rocParts.push(<InkDashed x1={roc.x(0)} y1={roc.y(0)} x2={roc.x(1)} y2={roc.y(1)} id="chance" color={INK_SOFT} width={1.2} dash={4} gap={4} />);
  if (show(3)) {
    const curve: [number, number][] = Array.from({ length: 81 }, (_, index) => { const t = 1.2 - (1.4 * index) / 80; return [roc.x(falsePositiveRate(t)), roc.y(truePositiveRate(t))]; });
    if (show(4)) rocParts.push(<Hatch points={[...curve, [roc.x(1), roc.bottom], [roc.x(0), roc.bottom]]} id={`${sketch.uid}-auc`} wash={WASH.green} ink={MARKER.green} gap={9} draw={drawNow(4)} />);
    rocParts.push(<InkCurve points={curve} id="roc" color={MARKER.green} width={2.4} draw={drawNow(3)} />);
    if (show(4)) rocParts.push(<Note x={roc.x(0.62)} y={roc.y(0.3)} text={`AUC = ${fmt(AUC, 2)}`} color={MARKER.green} anchor="middle" size={20} draw={drawNow(4)} />);
  }
  rocParts.push(<Note x={roc.x(0.98)} y={roc.y(0.9)} text="coin flip" color={INK_SOFT} anchor="end" size={15} />);
  if (show(2)) rocParts.push(<Dot x={roc.x(fpr)} y={roc.y(tpr)} color={ACCENT} radius={6} draw={drawNow(2)} />);
  if (step === 5) scoreParts.push(sketch.handle({ key: "threshold", x: exploreThreshold, y: 0, axis: "x", hint: "above", onDrag: (dataX) => setExploreThreshold(clamp(Math.round(dataX * 100) / 100, 0.02, 0.98)) }));
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} footnote="Illustrative score distributions."
      ariaLabel={`ROC: at threshold ${fmt(threshold, 2)}, TPR ${fmt(tpr, 2)} and FPR ${fmt(fpr, 2)}; AUC ${fmt(AUC, 2)}.`}>
      <g>{scoreParts}</g>
      <g>{rocParts}</g>
    </SketchGraph>
  );
}
