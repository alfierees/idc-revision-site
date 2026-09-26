import type { VNode } from "preact";
import { useSketch, SketchGraph, InkLine, Hatch, Note, INK_SOFT, ACCENT, MARKER, WASH } from "./sketch";

// k-fold cross-validation (ML Lectures 4 and 7): split the training data into
// 5 folds; each fold takes one turn as the validation set while the model
// trains on the other four. Average the five scores. The fold scores here are
// illustrative.

const FOLD_SCORES = [0.81, 0.78, 0.84, 0.8, 0.79];
const AVERAGE = FOLD_SCORES.reduce((total, score) => total + score, 0) / FOLD_SCORES.length;

const NOTES = [
  "Split the training data into 5 equal folds. (The test set stays locked away the whole time.)",
  ...FOLD_SCORES.map((score, index) => `Round ${index + 1}: train on the other four folds, validate on fold ${index + 1}. Score ${score.toFixed(2)}.`),
  `Average the five scores: ${AVERAGE.toFixed(3)}. Every row is used for validation exactly once, so the estimate is steadier than one split.`,
];

export default function CrossValidation(): VNode {
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMax: 1, yMax: 1 }], aspect: 0.55, minHeight: 240, maxHeight: 360, maxWidth: 680, padding: { left: 0, right: 0, top: 0, bottom: 0 } });
  const { step, drawNow } = sketch;
  const width = sketch.width, height = sketch.height;
  const labelWidth = sketch.narrow ? 58 : 76, scoreWidth = 56;
  const barLeft = labelWidth, barRight = width - scoreWidth - 8;
  const rowHeight = Math.min(38, (height - 30) / 5.4), rowGap = rowHeight * 0.3;
  const foldWidth = (barRight - barLeft) / 5;
  const round = step >= 1 && step <= 5 ? step - 1 : null;
  const drawing: VNode[] = [];
  for (let row = 0; row < 5; row++) {
    const rowTop = 18 + row * (rowHeight + rowGap);
    const rowVisible = step === 0 ? row === 0 : step === 6 || row <= (round ?? 0);
    if (!rowVisible) continue;
    drawing.push(<Note x={labelWidth - 10} y={rowTop + rowHeight / 2 + 6} text={step === 0 ? "data" : `round ${row + 1}`} color={INK_SOFT} anchor="end" size={17} />);
    for (let fold = 0; fold < 5; fold++) {
      const left = barLeft + fold * foldWidth + 2, right = left + foldWidth - 4, top = rowTop, bottom = rowTop + rowHeight;
      const isValidation = step > 0 && fold === row;
      drawing.push(<Hatch points={[[left, top], [right, top], [right, bottom], [left, bottom]]} id={`${sketch.uid}-${row}-${fold}-${isValidation}`} wash={isValidation ? WASH.amber : WASH.blue} ink={isValidation ? MARKER.amber : MARKER.blue} gap={isValidation ? 5 : 10} angle={isValidation ? -1 : 1} draw={row === round && drawNow(step)} />);
      [[left, top, right, top], [right, top, right, bottom], [right, bottom, left, bottom], [left, bottom, left, top]].forEach(([x1, y1, x2, y2], side) => drawing.push(<InkLine x1={x1} y1={y1} x2={x2} y2={y2} id={`fold-${row}-${fold}-${side}`} color={isValidation ? MARKER.amber : MARKER.blue} width={1.3} />));
      if (row === 0 && step === 0) drawing.push(<Note x={(left + right) / 2} y={bottom + 22} text={`fold ${fold + 1}`} color={INK_SOFT} anchor="middle" size={16} />);
    }
    if (step > 0) drawing.push(<Note x={barRight + 12} y={rowTop + rowHeight / 2 + 6} text={FOLD_SCORES[row].toFixed(2)} color={row === round ? ACCENT : INK_SOFT} size={19} draw={row === round && drawNow(step)} delay={300} />);
  }
  if (step >= 1) drawing.push(<Note x={barLeft} y={height - 8} text="blue: train · amber: validate" color={INK_SOFT} size={16} />);
  if (step === 6) drawing.push(<Note x={width - 6} y={height - 8} text={`mean ${AVERAGE.toFixed(3)}`} color={ACCENT} anchor="end" size={19} draw={drawNow(6)} />);
  const tex = step === 0 ? "k = 5" : step === 6 ? `\\text{CV score} = \\tfrac15 \\sum_{j=1}^{5} s_j = ${AVERAGE.toFixed(3)}` : `s_${step} = ${FOLD_SCORES[step - 1].toFixed(2)}`;
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={tex} footnote="Fold scores are illustrative."
      ariaLabel={`Five-fold cross-validation: fold scores ${FOLD_SCORES.join(", ")}, average ${AVERAGE.toFixed(3)}.`}>
      {drawing}
    </SketchGraph>
  );
}
