import { useState } from "preact/hooks";
import type { VNode } from "preact";
import {
  useSketch, useGlide, SketchGraph, SketchAxes, InkLine, InkDashed, Note, Dot, Ring, ShiftArrow,
  fmt, INK_SOFT, ACCENT, MARKER, Slider,
} from "./sketch";

// Loanable-funds / goods-market equilibrium: saving S(r) = 20 + 4r rises with r,
// investment I(r) = 60 − 4r falls with it, so r* = 5. One curve shifts
// (config-driven), so one component serves every goods-market question:
//   type: goods-market
//   shift: investment | savings
//   direction: right | left
//   label: "optimism about future productivity"
// Steps: S → I → equilibrium → the shock shifts a curve → new equilibrium,
// then explore (slider for the size of the shock).

interface Props { shift?: string; direction?: string; label?: string; shock?: number; }

const SAVING_INTERCEPT = 20, SAVING_SLOPE = 4;
const INVESTMENT_INTERCEPT = 60, INVESTMENT_SLOPE = 4;
const FUNDS_MAX = 90, RATE_MAX = 10, SHOCK_MAX = 28;

export default function GoodsMarketEquilibrium({ shift = "investment", direction = "right", label: shockLabel, shock: initialShock = 16 }: Props): VNode {
  const [target, setTarget] = useState({ shock: initialShock });
  const shown = useGlide(target, false);
  const movesInvestment = shift !== "savings";
  const sign = direction === "left" ? -1 : 1;
  const shockName = shockLabel ?? (movesInvestment ? "an investment shock" : "a saving shock");
  const curveName = movesInvestment ? "investment" : "saving";

  const NOTES = [
    "Saving rises with the interest rate: a higher r rewards waiting.",
    "Investment falls with the interest rate: borrowing costs more.",
    "The real interest rate settles where saving equals investment.",
    `The shock: ${shockName}. The ${curveName} curve shifts ${direction}.`,
    "The new equilibrium: compare r* and I = S with before.",
    "Your turn. Change the size of the shock.",
  ];

  const sketch = useSketch({
    stepCount: NOTES.length,
    domains: [{ xMax: FUNDS_MAX, yMax: RATE_MAX }],
    padding: { left: 40, bottom: 44, top: 20 },
  });
  const { show, drawNow, step } = sketch;
  const frame = sketch.frames[0];
  const toX = frame.x, toY = frame.y;

  const shiftAmount = sign * (show(3) ? shown.shock : 0);
  const investmentIntercept = INVESTMENT_INTERCEPT + (movesInvestment ? shiftAmount : 0);
  const savingIntercept = SAVING_INTERCEPT + (movesInvestment ? 0 : shiftAmount);
  const equilibrium = (investment: number, saving: number) => {
    const rate = (investment - saving) / (SAVING_SLOPE + INVESTMENT_SLOPE);
    return { rate, funds: saving + SAVING_SLOPE * rate };
  };
  const before = equilibrium(INVESTMENT_INTERCEPT, SAVING_INTERCEPT);
  const after = equilibrium(investmentIntercept, savingIntercept);
  const savingAt = (intercept: number, rate: number) => intercept + SAVING_SLOPE * rate;
  const investmentAt = (intercept: number, rate: number) => intercept - INVESTMENT_SLOPE * rate;
  const arrowFor = (now: number, was: number) => (now > was + 0.05 ? "\\uparrow" : now < was - 0.05 ? "\\downarrow" : "");

  const TEX = [
    `S(r) = ${SAVING_INTERCEPT} + ${SAVING_SLOPE}r`,
    `I(r) = ${INVESTMENT_INTERCEPT} - ${INVESTMENT_SLOPE}r`,
    `${SAVING_INTERCEPT} + ${SAVING_SLOPE}r = ${INVESTMENT_INTERCEPT} - ${INVESTMENT_SLOPE}r \\;\\Rightarrow\\; r^* = ${fmt(before.rate)},\\; I = S = ${fmt(before.funds)}`,
    movesInvestment ? `I'(r) = ${fmt(investmentIntercept)} - ${INVESTMENT_SLOPE}r` : `S'(r) = ${fmt(savingIntercept)} + ${SAVING_SLOPE}r`,
    `r^* = ${fmt(after.rate)}\\,${arrowFor(after.rate, before.rate)},\\quad I = S = ${fmt(after.funds)}\\,${arrowFor(after.funds, before.funds)}`,
    `r^* = ${fmt(after.rate)},\\quad I = S = ${fmt(after.funds)}\\quad (\\text{was } ${fmt(before.rate)},\\ ${fmt(before.funds)})`,
  ];

  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={[0, 20, 40, 60, 80]} yTicks={[2, 4, 6, 8, 10]} xLabel="S, I  (loanable funds)" yLabel="r" />];
  const plot: VNode[] = [];
  const savingLine = (intercept: number, id: string, dashed: boolean, draw: boolean) => dashed
    ? <InkDashed x1={toX(savingAt(intercept, 0))} y1={toY(0)} x2={toX(savingAt(intercept, RATE_MAX))} y2={toY(RATE_MAX)} id={id} color={MARKER.green} width={1.5} draw={draw} />
    : <InkLine x1={toX(savingAt(intercept, 0))} y1={toY(0)} x2={toX(savingAt(intercept, RATE_MAX))} y2={toY(RATE_MAX)} id={id} color={MARKER.green} width={2.4} duration={800} draw={draw} />;
  const investmentLine = (intercept: number, id: string, dashed: boolean, draw: boolean) => dashed
    ? <InkDashed x1={toX(investmentAt(intercept, 0))} y1={toY(0)} x2={toX(investmentAt(intercept, RATE_MAX))} y2={toY(RATE_MAX)} id={id} color={MARKER.blue} width={1.5} draw={draw} />
    : <InkLine x1={toX(investmentAt(intercept, 0))} y1={toY(0)} x2={toX(investmentAt(intercept, RATE_MAX))} y2={toY(RATE_MAX)} id={id} color={MARKER.blue} width={2.4} duration={800} draw={draw} />;

  const shifted = show(3);
  if (shifted && !movesInvestment) plot.push(savingLine(SAVING_INTERCEPT, "s-old", true, false));
  plot.push(savingLine(savingIntercept, "s", false, drawNow(0)));
  if (show(1)) {
    if (shifted && movesInvestment) plot.push(investmentLine(INVESTMENT_INTERCEPT, "i-old", true, false));
    plot.push(investmentLine(investmentIntercept, "i", false, drawNow(1)));
  }
  const guides = (point: { rate: number; funds: number }, id: string, color: string, draw: boolean) => [
    <InkDashed x1={toX(point.funds)} y1={toY(point.rate)} x2={frame.left} y2={toY(point.rate)} id={`${id}-r`} color={color} width={1.2} dash={4} gap={4} draw={draw} />,
    <InkDashed x1={toX(point.funds)} y1={toY(point.rate)} x2={toX(point.funds)} y2={frame.bottom} id={`${id}-q`} color={color} width={1.2} dash={4} gap={4} draw={draw} />,
  ];
  if (show(2)) plot.push(...guides(before, "eq0", show(4) ? "var(--color-rule-strong)" : ACCENT, drawNow(2)));
  if (show(4)) plot.push(...guides(after, "eq1", ACCENT, drawNow(4)));
  drawing.push(<g clip-path={sketch.clip()}>{plot}</g>);

  drawing.push(<Note x={toX(savingAt(savingIntercept, RATE_MAX * 0.92)) + 8} y={toY(RATE_MAX * 0.92) + 4} text={shifted && !movesInvestment ? "S′" : "S"} color={MARKER.green} size={20} draw={drawNow(0)} />);
  if (show(1)) drawing.push(<Note x={toX(investmentAt(investmentIntercept, 0.6)) + 8} y={toY(0.6)} text={shifted && movesInvestment ? "I′" : "I"} color={MARKER.blue} size={20} draw={drawNow(1)} />);
  if (show(2)) drawing.push(<Dot x={toX(before.funds)} y={toY(before.rate)} color={ACCENT} hollow={show(4)} draw={drawNow(2)} />);
  if (show(2) && !show(4)) drawing.push(<Note x={toX(before.funds) + 12} y={toY(before.rate) - 10} text={`r* = ${fmt(before.rate)}`} color={ACCENT} size={18} delay={300} draw={drawNow(2)} />);
  if (shifted && Math.abs(shown.shock) > 0.5) {
    const arrowRate = RATE_MAX * 0.3;
    const fromFunds = movesInvestment ? investmentAt(INVESTMENT_INTERCEPT, arrowRate) : savingAt(SAVING_INTERCEPT, arrowRate);
    const toFunds = movesInvestment ? investmentAt(investmentIntercept, arrowRate) : savingAt(savingIntercept, arrowRate);
    drawing.push(<ShiftArrow x1={toX(fromFunds)} y1={toY(arrowRate)} x2={toX(toFunds)} y2={toY(arrowRate)} id="shift-arrow" color={INK_SOFT} draw={drawNow(3)} />);
  }
  if (show(4)) {
    drawing.push(<Ring x={toX(after.funds)} y={toY(after.rate)} id="ring-new" color={ACCENT} draw={drawNow(4)} />);
    drawing.push(<Dot x={toX(after.funds)} y={toY(after.rate)} color={ACCENT} draw={drawNow(4)} />);
    drawing.push(<Note x={toX(after.funds) + 14} y={toY(after.rate) - 12} text={`r* = ${fmt(after.rate)}`} color={ACCENT} size={18} delay={300} draw={drawNow(4)} />);
  }

  return (
    <SketchGraph
      sketch={sketch}
      note={NOTES[step]}
      tex={TEX[step]}
      ariaLabel={`Goods market: saving and investment. After ${shockName}, r* ${fmt(after.rate)} and I = S ${fmt(after.funds)}, from ${fmt(before.rate)} and ${fmt(before.funds)}.`}
      explore={<div class="graph-sliders">
        <Slider label="size of the shock" value={target.shock} min={0} max={SHOCK_MAX} step={1} onInput={(value) => setTarget({ shock: value })} />
      </div>}
    >
      {drawing}
    </SketchGraph>
  );
}
