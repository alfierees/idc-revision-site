import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, SketchGraph, SketchAxes, InkCurve, InkLine, InkDashed, Note, Dot, curvePoints, fmt, clamp, INK, ACCENT, MARKER } from "./sketch";

// Why a risk-averse agent values insurance (Topic 1, U(M) = √M). Income is 400
// in the good state and 100 in the bad one. With probability π of the bad state:
// E[M] = 400(1 − π) + 100π, and the gamble is worth E[U] = 20(1 − π) + 10π,
// which sits below U(E[M]) on the concave curve. The gap is why fair insurance
// (the insured income E[M] for sure) is worth buying.

const GOOD_INCOME = 400, BAD_INCOME = 100;

const NOTES = [
  "Utility of money is concave: each extra pound adds less. U(M) = √M.",
  "Two outcomes: 400 if healthy, 100 if not. The gamble's expected utility lies on the straight chord.",
  "Full fair insurance pays E[M] for sure. Its utility is on the curve, above the chord.",
  "The certainty equivalent: the sure income that feels as good as the gamble. The gap is the risk premium.",
  "Your turn. Drag the probability of the bad outcome.",
];

export default function RiskAversion({ badChance: initialBadChance = 0.25 }: { badChance?: number }): VNode {
  const [badChance, setBadChance] = useState(initialBadChance);
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMax: 420, yMax: 21 }], maxWidth: 640, padding: { left: 44, bottom: 44, top: 22 } });
  const { show, drawNow, step } = sketch;
  const frame = sketch.frames[0];
  const toX = frame.x, toY = frame.y;
  const utility = (money: number) => Math.sqrt(Math.max(0, money));
  const expectedMoney = GOOD_INCOME * (1 - badChance) + BAD_INCOME * badChance;
  const expectedUtility = utility(GOOD_INCOME) * (1 - badChance) + utility(BAD_INCOME) * badChance;
  const certaintyEquivalent = expectedUtility * expectedUtility;
  const riskPremium = expectedMoney - certaintyEquivalent;

  const TEX = [
    "U(M) = \\sqrt{M}",
    `E[U] = ${fmt(1 - badChance, 2)}\\sqrt{400} + ${fmt(badChance, 2)}\\sqrt{100} = ${fmt(expectedUtility, 2)}`,
    `U(E[M]) = \\sqrt{${fmt(expectedMoney)}} = ${fmt(utility(expectedMoney), 2)} > ${fmt(expectedUtility, 2)}`,
    `CE = ${fmt(expectedUtility, 2)}^2 = ${fmt(certaintyEquivalent)},\\quad \\text{risk premium} = ${fmt(expectedMoney)} - ${fmt(certaintyEquivalent)} = ${fmt(riskPremium)}`,
    `\\pi = ${fmt(badChance, 2)}:\\; E[M] = ${fmt(expectedMoney)},\\; CE = ${fmt(certaintyEquivalent)},\\; \\text{premium} = ${fmt(riskPremium)}`,
  ];

  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={[0, 100, 200, 300, 400]} yTicks={[5, 10, 15, 20]} xLabel="income M" yLabel="U" />];
  const plot: VNode[] = [<InkCurve points={curvePoints(frame, utility, 0, 420, 80)} id="utility" color={MARKER.blue} width={2.5} draw={drawNow(0)} />];
  if (show(1)) {
    plot.push(<InkLine x1={toX(BAD_INCOME)} y1={toY(utility(BAD_INCOME))} x2={toX(GOOD_INCOME)} y2={toY(utility(GOOD_INCOME))} id="chord" color={MARKER.red} width={1.8} draw={drawNow(1)} />);
    plot.push(<InkDashed x1={toX(expectedMoney)} y1={toY(expectedUtility)} x2={toX(expectedMoney)} y2={frame.bottom} id="em-guide" color={INK} width={1.1} dash={4} gap={4} draw={drawNow(1)} />);
  }
  if (show(3)) {
    plot.push(<InkDashed x1={toX(certaintyEquivalent)} y1={toY(expectedUtility)} x2={toX(expectedMoney)} y2={toY(expectedUtility)} id="premium" color={MARKER.amber} width={2.4} dash={6} gap={3} draw={drawNow(3)} />);
    plot.push(<InkDashed x1={toX(certaintyEquivalent)} y1={toY(expectedUtility)} x2={toX(certaintyEquivalent)} y2={frame.bottom} id="ce-guide" color={MARKER.amber} width={1.1} dash={4} gap={4} draw={drawNow(3)} />);
  }
  drawing.push(<g clip-path={sketch.clip()}>{plot}</g>);
  drawing.push(<Note x={toX(40)} y={toY(utility(40)) - 12} text="U = √M" color={MARKER.blue} size={19} draw={drawNow(0)} />);
  if (show(1)) {
    drawing.push(<Dot x={toX(BAD_INCOME)} y={toY(utility(BAD_INCOME))} color={INK} radius={4} draw={drawNow(1)} />);
    drawing.push(<Dot x={toX(GOOD_INCOME)} y={toY(utility(GOOD_INCOME))} color={INK} radius={4} draw={drawNow(1)} />);
    drawing.push(<Dot x={toX(expectedMoney)} y={toY(expectedUtility)} color={MARKER.red} draw={drawNow(1)} />);
    if (step !== 4) drawing.push(<Note x={toX(expectedMoney) + 10} y={toY(expectedUtility) + 22} text={`E[U] = ${fmt(expectedUtility, 2)}`} color={MARKER.red} size={18} delay={300} draw={drawNow(1)} />);
    drawing.push(<Note x={toX(expectedMoney)} y={frame.bottom + 33} text={`E[M] = ${fmt(expectedMoney)}`} color={INK} anchor="middle" size={17} draw={drawNow(1)} />);
  }
  if (show(2)) {
    drawing.push(<Dot x={toX(expectedMoney)} y={toY(utility(expectedMoney))} color={MARKER.green} draw={drawNow(2)} />);
    drawing.push(<Note x={toX(expectedMoney) - 10} y={toY(utility(expectedMoney)) - 12} text={`insured: U(E[M]) = ${fmt(utility(expectedMoney), 2)}`} color={MARKER.green} anchor="end" size={18} draw={drawNow(2)} />);
  }
  if (show(3) && step !== 4) drawing.push(<Note x={toX(certaintyEquivalent) - 8} y={toY(expectedUtility) + 34} text="risk premium" color={MARKER.amber} anchor="end" size={17} draw={drawNow(3)} />);
  if (step === 4) drawing.push(sketch.handle({
    key: "chance", x: expectedMoney, y: expectedUtility, axis: "x", hint: "below",
    onDrag: (dataX) => setBadChance(clamp(Math.round(((GOOD_INCOME - dataX) / (GOOD_INCOME - BAD_INCOME)) * 100) / 100, 0.01, 0.99)),
  }));

  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} ariaLabel={`Concave utility √M with incomes 100 and 400. Expected income ${fmt(expectedMoney)}, certainty equivalent ${fmt(certaintyEquivalent)}.`}
      footnote={step === 4 ? "Dragging moves E[M] along the chord; the chance of the bad outcome follows from it." : undefined}>
      {drawing}
    </SketchGraph>
  );
}
