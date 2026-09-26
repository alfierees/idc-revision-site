import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, SketchGraph, SketchAxes, InkCurve, InkDashed, Hatch, Note, Dot, curvePoints, fmt, clamp, INK, ACCENT, MARKER, WASH } from "./sketch";

// Training blind: the notebook trained its neural network for a fixed 30 epochs
// with no validation set and no early stopping. Training error keeps falling,
// but error on unseen data bottoms out and then climbs as the network starts
// memorising its own rows. Illustrative curves.

const trainingError = (epoch: number) => 0.3 * Math.exp(-epoch / 9) + 0.06;
const validationError = (epoch: number) => 0.34 * Math.exp(-epoch / 9) + 0.12 + 0.0028 * Math.pow(Math.max(0, epoch - 14), 1.15);
let bestEpoch = 0;
for (let epoch = 0; epoch <= 60; epoch += 0.5) if (validationError(epoch) < validationError(bestEpoch)) bestEpoch = epoch;

const NOTES = [
  "Error on the training rows keeps falling the longer the network trains.",
  "Error on data it hasn't seen: falls at first, bottoms out, then climbs.",
  `Early stopping would stop at the bottom, around epoch ${Math.round(bestEpoch)}. Past it, the network memorises rather than learns.`,
  "The notebook trained for a fixed 30 epochs with no validation set: blind to all of this.",
  "Your turn. Drag the number of epochs.",
];

export default function OverfitCurves(): VNode {
  const [exploreEpochs, setExploreEpochs] = useState(30);
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMax: 60, yMax: 0.5 }], maxWidth: 660, padding: { left: 44, bottom: 44, top: 22 } });
  const { show, drawNow, step } = sketch;
  const frame = sketch.frames[0];
  const toX = frame.x, toY = frame.y;
  const epochs = step === 4 ? exploreEpochs : 30;
  const gap = validationError(epochs) - trainingError(epochs);
  const TEX = [
    "\\text{training error} \\downarrow",
    "\\text{validation error: U-shaped}",
    `\\text{best epoch} \\approx ${Math.round(bestEpoch)},\\; \\text{validation error } ${fmt(validationError(bestEpoch), 3)}`,
    `\\text{epoch } 30:\\; \\text{train } ${fmt(trainingError(30), 3)},\\; \\text{validation } ${fmt(validationError(30), 3)}`,
    `\\text{epoch } ${epochs}:\\; \\text{gap} = ${fmt(gap, 3)}`,
  ];
  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={[0, 15, 30, 45, 60]} yTicks={[0.1, 0.2, 0.3, 0.4, 0.5]} xLabel="epochs of training" yLabel="error (lower is better)" />];
  if (show(2) && epochs > bestEpoch) {
    const band: [number, number][] = [];
    for (let epoch = bestEpoch; epoch <= epochs + 1e-9; epoch += 0.5) band.push([toX(epoch), toY(validationError(epoch))]);
    for (let epoch = epochs; epoch >= bestEpoch - 1e-9; epoch -= 0.5) band.push([toX(epoch), toY(trainingError(epoch))]);
    drawing.push(<Hatch points={band} id={`${sketch.uid}-gap-${epochs}`} wash={WASH.red} ink={MARKER.red} gap={6} draw={step === 2 && drawNow(2)} />);
  }
  drawing.push(<InkCurve points={curvePoints(frame, trainingError, 0, 60, 70)} id="train" color={MARKER.blue} width={2.4} draw={drawNow(0)} />);
  if (show(1)) drawing.push(<InkCurve points={curvePoints(frame, validationError, 0, 60, 70)} id="validation" color={MARKER.red} width={2.4} draw={drawNow(1)} />);
  drawing.push(<Note x={toX(58)} y={toY(trainingError(58)) + 22} text="training data" color={MARKER.blue} anchor="end" size={18} draw={drawNow(0)} />);
  if (show(1)) drawing.push(<Note x={toX(58)} y={toY(validationError(58)) - 10} text="unseen data" color={MARKER.red} anchor="end" size={18} draw={drawNow(1)} />);
  if (show(2)) {
    drawing.push(<Dot x={toX(bestEpoch)} y={toY(validationError(bestEpoch))} color={MARKER.green} draw={drawNow(2)} />);
    drawing.push(<Note x={toX(bestEpoch)} y={toY(validationError(bestEpoch)) - 14} text="stop here" color={MARKER.green} anchor="middle" size={18} draw={drawNow(2)} />);
    if (epochs - bestEpoch > 8) drawing.push(<Note x={toX((bestEpoch + epochs) / 2)} y={toY(trainingError((bestEpoch + epochs) / 2)) - 12} text="memorising" color={MARKER.red} anchor="middle" size={17} />);
  }
  if (show(3)) {
    drawing.push(<InkDashed x1={toX(epochs)} y1={frame.top} x2={toX(epochs)} y2={frame.bottom} id={`epochs-${epochs}`} color={step === 4 ? ACCENT : INK} width={1.8} dash={6} gap={4} draw={step === 3 && drawNow(3)} />);
    if (step === 3) drawing.push(<Note x={toX(30) + 6} y={frame.top + 10} text="the notebook's fixed 30: chosen blind" color={INK} size={17} draw={drawNow(3)} />);
  }
  if (step === 4) drawing.push(sketch.handle({ key: "epochs", x: exploreEpochs, y: 0, axis: "x", hint: "above", onDrag: (dataX) => setExploreEpochs(clamp(Math.round(dataX), 1, 60)) }));
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} footnote="Illustrative learning curves."
      ariaLabel={`Training and validation error: validation error is lowest around epoch ${Math.round(bestEpoch)}; the notebook trained for 30.`}>
      {drawing}
    </SketchGraph>
  );
}
