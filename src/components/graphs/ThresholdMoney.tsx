import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, SketchGraph, SketchAxes, InkCurve, InkDashed, Hatch, Note, Dot, Ring, curvePoints, fmt, clamp, INK_SOFT, ACCENT, MARKER, WASH } from "./sketch";
import { normalCdf } from "./stats";

// The 0.5 cut-off is a library default, not a decision. Risk scores for
// repayers (~N(0.35, 0.13), 860 per 1,000) and defaulters (~N(0.62, 0.13),
// 140 per 1,000) overlap, so every threshold trades two mistakes: a missed
// defaulter costs ≈ 70,000 shekels (lost principal), a wrongly rejected good
// customer ≈ 7,000 (lost interest margin).

const MEAN_REPAYER = 0.35, MEAN_DEFAULTER = 0.62, SPREAD = 0.13;
const REPAYERS = 860, DEFAULTERS = 140;
const COST_MISSED = 70000, COST_REJECTED = 7000;
const density = (score: number, mean: number) => Math.exp(-0.5 * ((score - mean) / SPREAD) ** 2) / (SPREAD * Math.sqrt(2 * Math.PI));
const missedAt = (threshold: number) => DEFAULTERS * normalCdf((threshold - MEAN_DEFAULTER) / SPREAD);
const wronglyRejectedAt = (threshold: number) => REPAYERS * (1 - normalCdf((threshold - MEAN_REPAYER) / SPREAD));
const lossAt = (threshold: number) => missedAt(threshold) * COST_MISSED + wronglyRejectedAt(threshold) * COST_REJECTED;
const SCANNED = Array.from({ length: 91 }, (_, index) => Math.round((0.05 + index * 0.01) * 100) / 100);
const LOSSES = SCANNED.map(lossAt);
const CHEAPEST = SCANNED[LOSSES.indexOf(Math.min(...LOSSES))];
const LOSS_MAX = Math.max(...LOSSES);
const DENSITY_SCALE = 0.8 / (REPAYERS * density(MEAN_REPAYER, MEAN_REPAYER));

const NOTES = [
  "Risk scores for 1,000 applicants: 860 repayers (green) and 140 defaulters (red). They overlap.",
  "The notebook rejects anyone above 0.5, the library default.",
  "Defaulters left of the line get approved (missed, ≈ 70,000 each); repayers right of it get rejected (≈ 7,000 each).",
  "Add up the money at every threshold: the cheapest cut-off is nowhere near 0.5.",
  "Your turn. Drag the threshold and watch the money.",
];

export default function ThresholdMoney(): VNode {
  const [exploreThreshold, setExploreThreshold] = useState(0.5);
  const sketch = useSketch({
    stepCount: NOTES.length,
    domains: [{ xMax: 1, yMax: 1 }, { xMax: 1, yMax: LOSS_MAX }],
    aspect: 0.5, minHeight: 190, maxHeight: 260, maxWidth: 680, padding: { left: 64, bottom: 36, top: 14 },
    panelTitles: ["Scores of 1,000 applicants", "Cost per 1,000 applications"],
  });
  const { show, drawNow, step } = sketch;
  const [scores, money] = sketch.frames;
  const threshold = step === 3 ? CHEAPEST : step === 4 ? exploreThreshold : 0.5;
  const missed = missedAt(threshold), rejected = wronglyRejectedAt(threshold), loss = lossAt(threshold);
  const repayerCurve = (score: number) => REPAYERS * density(score, MEAN_REPAYER) * DENSITY_SCALE;
  const defaulterCurve = (score: number) => DEFAULTERS * density(score, MEAN_DEFAULTER) * DENSITY_SCALE;
  const areaUnder = (fn: (score: number) => number, from: number, to: number): [number, number][] => {
    const points: [number, number][] = [[scores.x(from), scores.bottom]];
    for (let score = from; score <= to + 1e-9; score += 0.01) points.push([scores.x(score), scores.y(fn(score))]);
    points.push([scores.x(to), scores.bottom]);
    return points;
  };
  const TEX = [
    "\\text{repayers} \\sim N(0.35,\\ 0.13^2),\\quad \\text{defaulters} \\sim N(0.62,\\ 0.13^2)",
    "\\text{reject if score} > 0.5",
    `\\text{missed } ${fmt(missed, 0)} \\times 70\\text{k} + \\text{rejected } ${fmt(rejected, 0)} \\times 7\\text{k} = ${fmt(loss / 1e6, 2)}\\text{m}`,
    `t^* = ${CHEAPEST}:\\; ${fmt(loss / 1e6, 2)}\\text{m vs } ${fmt(lossAt(0.5) / 1e6, 2)}\\text{m at } 0.5`,
    `t = ${fmt(threshold, 2)}:\\; ${fmt(missed, 0)} \\text{ missed},\\; ${fmt(rejected, 0)} \\text{ rejected},\\; ${fmt(loss / 1e6, 2)}\\text{m}`,
  ];
  const scoreParts: VNode[] = [<SketchAxes frame={scores} id="score-axes" xTicks={[0, 0.25, 0.5, 0.75, 1]} yTicks={[]} />];
  if (show(2)) {
    scoreParts.push(<Hatch points={areaUnder(defaulterCurve, 0, threshold)} id={`${sketch.uid}-missed-${threshold}`} wash={WASH.red} ink={MARKER.red} gap={5} />);
    scoreParts.push(<Hatch points={areaUnder(repayerCurve, threshold, 1)} id={`${sketch.uid}-rejected-${threshold}`} wash={WASH.amber} ink={MARKER.amber} gap={5} angle={-1} />);
  }
  scoreParts.push(<InkCurve points={curvePoints(scores, repayerCurve, 0, 1, 80)} id="repayers" color={MARKER.green} width={2.3} draw={drawNow(0)} />);
  scoreParts.push(<InkCurve points={curvePoints(scores, defaulterCurve, 0, 1, 80)} id="defaulters" color={MARKER.red} width={2.3} draw={drawNow(0)} />);
  scoreParts.push(<Note x={scores.x(0.2)} y={scores.y(repayerCurve(0.2)) - 8} text="repayers" color={MARKER.green} anchor="end" size={17} />);
  scoreParts.push(<Note x={scores.x(0.8)} y={scores.y(defaulterCurve(0.8)) - 8} text="defaulters" color={MARKER.red} size={17} />);
  if (show(1)) {
    scoreParts.push(<InkDashed x1={scores.x(threshold)} y1={scores.top} x2={scores.x(threshold)} y2={scores.bottom} id="threshold" color={ACCENT} width={2} dash={6} gap={4} />);
    scoreParts.push(<Note x={scores.x(threshold) + 6} y={scores.top + 10} text={`reject > ${fmt(threshold, 2)}`} color={ACCENT} size={17} />);
  }
  const moneyParts: VNode[] = [<SketchAxes frame={money} id="money-axes" xTicks={[0, 0.25, 0.5, 0.75, 1]} yTicks={[0, 4e6, 8e6].filter((value) => value <= LOSS_MAX)} formatTick={(value) => `${value / 1e6}m`} xLabel="threshold" />];
  if (show(3)) {
    moneyParts.push(<InkCurve points={curvePoints(money, lossAt, 0.05, 0.95, 80)} id="loss" color={INK_SOFT} width={2.2} draw={drawNow(3)} />);
    moneyParts.push(<Dot x={money.x(CHEAPEST)} y={money.y(lossAt(CHEAPEST))} color={MARKER.green} draw={drawNow(3)} />);
    moneyParts.push(<Note x={money.x(CHEAPEST)} y={money.y(lossAt(CHEAPEST)) - 12} text={`cheapest: ${CHEAPEST}`} color={MARKER.green} anchor="middle" size={17} draw={drawNow(3)} />);
    moneyParts.push(<Dot x={money.x(threshold)} y={money.y(loss)} color={ACCENT} radius={4} />);
    if (step === 3) moneyParts.push(<Ring x={money.x(0.5)} y={money.y(lossAt(0.5))} id="ring-default" color={MARKER.red} radius={9} draw={drawNow(3)} />);
  }
  if (step === 4) scoreParts.push(sketch.handle({ key: "threshold", x: exploreThreshold, y: 0, axis: "x", hint: "above", onDrag: (dataX) => setExploreThreshold(clamp(Math.round(dataX * 100) / 100, 0.05, 0.95)) }));
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]}
      ariaLabel={`Rejection threshold ${fmt(threshold, 2)}: ${fmt(missed, 0)} defaulters missed, ${fmt(rejected, 0)} good customers rejected, cost ${fmt(loss / 1e6, 2)} million shekels per 1,000 applications. Cheapest threshold ${CHEAPEST}.`}>
      <g>{scoreParts}</g>
      <g>{moneyParts}</g>
    </SketchGraph>
  );
}
