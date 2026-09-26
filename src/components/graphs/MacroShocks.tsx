import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, useGlide, SketchGraph, SketchAxes, InkLine, InkCurve, InkDashed, Note, Dot, ShiftArrow, Toggle, curvePoints, fmt, INK_SOFT, ACCENT, MARKER } from "./sketch";

// Goods-market and fiscal shock diagrams (Lectures 6 and 10). Illustrative
// linear curves: S(r) = 20 + 4r, I(r) = 60 − 4r (r* = 5).
//   type: macro-shocks
//   figure: si-shocks | fiscal
// si-shocks — a transitory rise in current A shifts S right (r falls); a rise
//             in future A^f shifts I right and S left (r rises unambiguously).
// fiscal    — G↑ financed by lump-sum T↑: labour supply shifts right
//             (N↑, w↓) and saving shifts left (r↑, I↓).

interface Props { figure?: string; }

const SAVING = { intercept: 20, slope: 4 }, INVESTMENT = { intercept: 60, slope: 4 };
const clear = (savingShift: number, investmentShift: number) => {
  const rate = (INVESTMENT.intercept + investmentShift - SAVING.intercept - savingShift) / (SAVING.slope + INVESTMENT.slope);
  return { rate, funds: SAVING.intercept + savingShift + SAVING.slope * rate };
};

export default function MacroShocks({ figure = "si-shocks" }: Props): VNode {
  return figure === "fiscal" ? <FiscalShock /> : <SavingInvestmentShocks />;
}

function goodsPanel(frame: ReturnType<typeof useSketch>["frames"][number], savingShift: number, investmentShift: number, showShift: boolean, draw: (step: number) => boolean, drawStep: number, idPrefix: string): VNode[] {
  const toX = frame.x, toY = frame.y;
  const before = clear(0, 0), after = clear(savingShift, investmentShift);
  const savingLine = (shift: number, id: string, dashed: boolean) => dashed
    ? <InkDashed x1={toX(SAVING.intercept + shift)} y1={toY(0)} x2={toX(SAVING.intercept + shift + SAVING.slope * 10)} y2={toY(10)} id={id} color={MARKER.green} width={1.3} />
    : <InkLine x1={toX(SAVING.intercept + shift)} y1={toY(0)} x2={toX(SAVING.intercept + shift + SAVING.slope * 10)} y2={toY(10)} id={id} color={MARKER.green} width={2.4} draw={draw(0)} />;
  const investmentLine = (shift: number, id: string, dashed: boolean) => dashed
    ? <InkDashed x1={toX(INVESTMENT.intercept + shift)} y1={toY(0)} x2={toX(INVESTMENT.intercept + shift - INVESTMENT.slope * 10)} y2={toY(10)} id={id} color={MARKER.blue} width={1.3} />
    : <InkLine x1={toX(INVESTMENT.intercept + shift)} y1={toY(0)} x2={toX(INVESTMENT.intercept + shift - INVESTMENT.slope * 10)} y2={toY(10)} id={id} color={MARKER.blue} width={2.4} draw={draw(0)} />;
  const parts: VNode[] = [<SketchAxes frame={frame} id={`${idPrefix}-axes`} xTicks={[0, 20, 40, 60, 80]} yTicks={[2, 4, 6, 8, 10]} xLabel="S, I" yLabel="r" />];
  const plot: VNode[] = [];
  if (showShift && savingShift) plot.push(savingLine(0, `${idPrefix}-s-old`, true));
  if (showShift && investmentShift) plot.push(investmentLine(0, `${idPrefix}-i-old`, true));
  plot.push(savingLine(showShift ? savingShift : 0, `${idPrefix}-s`, false));
  plot.push(investmentLine(showShift ? investmentShift : 0, `${idPrefix}-i`, false));
  const point = showShift ? after : before;
  plot.push(<InkDashed x1={toX(point.funds)} y1={toY(point.rate)} x2={frame.left} y2={toY(point.rate)} id={`${idPrefix}-r-guide`} color={INK_SOFT} width={1.1} dash={4} gap={4} />);
  parts.push(<g>{plot}</g>);
  parts.push(<Note x={toX(SAVING.intercept + (showShift ? savingShift : 0) + SAVING.slope * 9.3) + 6} y={toY(9.3)} text={showShift && savingShift ? "S′" : "S"} color={MARKER.green} size={19} />);
  parts.push(<Note x={toX(INVESTMENT.intercept + (showShift ? investmentShift : 0) - INVESTMENT.slope * 0.8) + 6} y={toY(0.8)} text={showShift && investmentShift ? "I′" : "I"} color={MARKER.blue} size={19} />);
  if (showShift) {
    parts.push(<Dot x={toX(before.funds)} y={toY(before.rate)} color={INK_SOFT} hollow />);
    const arrowRate = 7.5;
    if (savingShift) parts.push(<ShiftArrow x1={toX(SAVING.intercept + SAVING.slope * arrowRate)} y1={toY(arrowRate)} x2={toX(SAVING.intercept + savingShift + SAVING.slope * arrowRate)} y2={toY(arrowRate)} id={`${idPrefix}-s-arrow`} color={MARKER.green} draw={draw(drawStep)} />);
    if (investmentShift) parts.push(<ShiftArrow x1={toX(INVESTMENT.intercept - INVESTMENT.slope * 2.5)} y1={toY(2.5)} x2={toX(INVESTMENT.intercept + investmentShift - INVESTMENT.slope * 2.5)} y2={toY(2.5)} id={`${idPrefix}-i-arrow`} color={MARKER.blue} draw={draw(drawStep)} />);
  }
  parts.push(<Dot x={toX(point.funds)} y={toY(point.rate)} color={ACCENT} />);
  parts.push(<Note x={frame.left + 6} y={toY(point.rate) - 8} text={`r* = ${fmt(point.rate, 2)}`} color={ACCENT} size={18} />);
  return parts;
}

function SavingInvestmentShocks(): VNode {
  const [shock, setShock] = useState<"current" | "future">("current");
  const shifts = shock === "current" ? { saving: 12, investment: 0 } : { saving: -6, investment: 14 };
  const NOTES = [
    "Saving rises with r; investment falls with r. They cross at r*.",
    shock === "current"
      ? "A transitory rise in today's productivity: income is high today, so households save more. S shifts right."
      : "A rise in expected future productivity: firms invest more (I right) and households, feeling richer, save less (S left).",
    shock === "current" ? "The real interest rate falls; saving and investment rise." : "Both shifts push r up: unambiguous. What happens to I = S depends on the sizes.",
  ];
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMax: 90, yMax: 10 }], maxWidth: 640, padding: { left: 40, bottom: 44, top: 22 } });
  const { step, drawNow } = sketch;
  const glide = useGlide({ saving: step >= 1 ? shifts.saving : 0, investment: step >= 1 ? shifts.investment : 0 }, false);
  const after = clear(glide.saving, glide.investment), before = clear(0, 0);
  const TEX = [
    `S = 20 + 4r,\\; I = 60 - 4r \\;\\Rightarrow\\; r^* = ${fmt(before.rate)}`,
    shock === "current" ? "\\text{transitory } A\\uparrow \\Rightarrow S \\text{ shifts right}" : "A^f\\uparrow \\Rightarrow I \\text{ right},\\ S \\text{ left}",
    `r^*: ${fmt(before.rate, 2)} \\to ${fmt(after.rate, 2)},\\quad I = S: ${fmt(before.funds, 1)} \\to ${fmt(after.funds, 1)}`,
  ];
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} footnote="Illustrative linear curves."
      ariaLabel={`Saving–investment shock: the real interest rate moves from ${fmt(before.rate, 2)} to ${fmt(after.rate, 2)}.`}
      top={<Toggle label="Shock" options={[{ key: "current", label: "Transitory A↑ (today)" }, { key: "future", label: "Future A^f ↑" }]} active={shock} onPick={(key) => { setShock(key as "current" | "future"); sketch.setStep(0); }} />}>
      {goodsPanel(sketch.frames[0], glide.saving, glide.investment, step >= 1, drawNow, 1, "si")}
    </SketchGraph>
  );
}

function FiscalShock(): VNode {
  const NOTES = [
    "Before: the labour market and the goods market each in equilibrium.",
    "G rises, paid for with a lump-sum tax. Households are poorer, so they work more: labour supply shifts right. More N, lower w.",
    "Households smooth consumption, so saving falls by less than the tax: S shifts left. Higher r, lower I.",
    "Output rises (more N), but by less than G: investment and consumption are crowded out.",
  ];
  const sketch = useSketch({
    stepCount: NOTES.length,
    domains: [{ xMin: 0.45, xMax: 1.05, yMin: 0.2, yMax: 1 }, { xMax: 90, yMax: 10 }],
    aspect: 0.82, minHeight: 250, maxHeight: 320, maxWidth: 760, padding: { left: 40, bottom: 40, top: 16 },
    panelTitles: ["Labour market", "Goods market"],
  });
  const { step, drawNow } = sketch;
  const [labour, goods] = sketch.frames;
  const supplyShift = step >= 1 ? 1.1 : 1;
  const glide = useGlide({ supply: supplyShift, saving: step >= 2 ? -10 : 0 }, false);
  const demandWage = (employment: number) => 0.7 * 0.4 * Math.pow(4, 0.3) * Math.pow(employment, -0.3);
  const supplyWage = (scale: number) => (employment: number) => Math.pow(employment / scale, 3);
  const solveWage = (scale: number) => Math.pow(0.7 * 0.4 * Math.pow(4, 0.3) * Math.pow(scale, -0.3), 1 / 1.1);
  const wageNow = solveWage(glide.supply), employmentNow = glide.supply * Math.pow(wageNow, 1 / 3);
  const wageBefore = solveWage(1), employmentBefore = Math.pow(wageBefore, 1 / 3);
  const goodsAfter = clear(glide.saving, 0), goodsBefore = clear(0, 0);
  const TEX = [
    `N^* = ${fmt(employmentBefore, 3)},\\; w^* = ${fmt(wageBefore, 3)};\\quad r^* = ${fmt(goodsBefore.rate)}`,
    `N: ${fmt(employmentBefore, 3)} \\to ${fmt(employmentNow, 3)},\\quad w: ${fmt(wageBefore, 3)} \\to ${fmt(wageNow, 3)}`,
    `r: ${fmt(goodsBefore.rate, 2)} \\to ${fmt(goodsAfter.rate, 2)},\\quad I: ${fmt(goodsBefore.funds, 1)} \\to ${fmt(goodsAfter.funds, 1)}`,
    "Y\\uparrow,\\; I\\downarrow,\\; C\\downarrow,\\; r\\uparrow,\\quad \\Delta Y < \\Delta G",
  ];
  const labourParts: VNode[] = [<SketchAxes frame={labour} id="labour-axes" xTicks={[0.6, 0.8, 1]} yTicks={[0.4, 0.6, 0.8]} xLabel="N" yLabel="w" />];
  if (step >= 1) labourParts.push(<InkCurve points={curvePoints(labour, supplyWage(1), 0.45, 1.05, 40)} id="ns-old" color={MARKER.green} width={1.3} dashed />);
  labourParts.push(<InkCurve points={curvePoints(labour, supplyWage(glide.supply), 0.45, 1.05, 40)} id="ns" color={MARKER.green} width={2.4} draw={drawNow(0)} />);
  labourParts.push(<InkCurve points={curvePoints(labour, demandWage, 0.45, 1.05, 40)} id="nd" color={MARKER.blue} width={2.4} draw={drawNow(0)} />);
  if (step >= 1) labourParts.push(<Dot x={labour.x(employmentBefore)} y={labour.y(wageBefore)} color={INK_SOFT} hollow />);
  labourParts.push(<Dot x={labour.x(employmentNow)} y={labour.y(wageNow)} color={ACCENT} />);
  labourParts.push(<Note x={labour.x(0.98)} y={labour.y(supplyWage(glide.supply)(0.98)) + 4} text="Nˢ" color={MARKER.green} anchor="end" size={19} />);
  labourParts.push(<Note x={labour.x(1.02)} y={labour.y(demandWage(1.02)) - 10} text="Nᴰ" color={MARKER.blue} anchor="end" size={19} />);
  if (step === 1) labourParts.push(<ShiftArrow x1={labour.x(Math.pow(0.75, 1 / 3))} y1={labour.y(0.75)} x2={labour.x(1.1 * Math.pow(0.75, 1 / 3))} y2={labour.y(0.75)} id="ns-arrow" color={MARKER.green} draw={drawNow(1)} />);
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} footnote="Illustrative curves (labour side uses the PS 5 model)."
      ariaLabel="Fiscal shock: labour supply shifts right and saving shifts left; employment and the interest rate rise, investment falls.">
      <g>{labourParts}</g>
      <g>{goodsPanel(goods, glide.saving, 0, step >= 2, drawNow, 2, "fiscal")}</g>
    </SketchGraph>
  );
}
