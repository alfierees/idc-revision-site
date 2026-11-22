import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, useGlide, SketchGraph, SketchAxes, InkLine, InkDashed, Note, Ring, fmt, clamp, INK_SOFT, ACCENT, MARKER, Slider } from "./sketch";

// Market for loanable funds (Principles of Macro, Lecture 5 parts 1 and 2).
//   type: loanable-funds
//   figure: deficit | open-economy
// Illustrative numbers. Savings are fixed (independent of r), as the course's
// exam questions assume; investment demand is I(r) = 100 − 8r.

interface Props { figure?: string; }

const MAX_FUNDS = 110;
const MAX_RATE = 12;
const demandAt = (rate: number, shift = 0) => 100 + shift - 8 * rate;
const rateAt = (funds: number, shift = 0) => (100 + shift - funds) / 8;

export default function LoanableFunds({ figure = "deficit" }: Props): VNode {
  return figure === "open-economy" ? <OpenEconomy /> : <Deficit />;
}

function Deficit(): VNode {
  const [deficit, setDeficit] = useState(20);
  const startSavings = 60;
  const householdShare = 0.25;
  const NOTES = [
    "Start in equilibrium: fixed savings meets investment demand, which sets the interest rate.",
    "The government borrows more. Public saving falls, so total savings shifts left by the deficit.",
    "The extra spending raises household income, and part of that is saved. Savings moves part of the way back.",
    "Net effect: less total saving, a higher interest rate, and lower private investment.",
    "Your turn. Change the size of the deficit.",
  ];
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMax: MAX_FUNDS, yMax: MAX_RATE }], maxWidth: 640, padding: { left: 44, bottom: 44, top: 18 } });
  const { show, drawNow, step } = sketch;
  const frame = sketch.frames[0];
  const size = step === 4 ? deficit : 20;
  const targetSavings = step === 0 ? startSavings : step === 1 ? startSavings - size : startSavings - size * (1 - householdShare);
  const shown = useGlide({ savings: targetSavings }, false);
  const startRate = rateAt(startSavings);
  const rate = rateAt(shown.savings);
  const TEX = [
    `S = I(r) \\Rightarrow 60 = 100 - 8r \\Rightarrow r^* = ${fmt(startRate, 1)}\\%`,
    `\\Delta s_G = -${fmt(size, 0)}`,
    `\\Delta s_P = +${fmt(size * householdShare, 0)}`,
    `r: ${fmt(startRate, 1)}\\% \\to ${fmt(rate, 1)}\\%,\\quad I: 60 \\to ${fmt(shown.savings, 1)}`,
    `\\text{deficit } ${fmt(size, 0)}:\\; r = ${fmt(rate, 1)}\\%,\\; I = ${fmt(shown.savings, 1)}`,
  ];
  const drawing: VNode[] = [
    <SketchAxes frame={frame} id="axes" xTicks={[0, 20, 40, 60, 80, 100]} yTicks={[2, 4, 6, 8, 10, 12]} xLabel="loanable funds" yLabel="r (%)" />,
    <InkLine x1={frame.x(100 - 8 * MAX_RATE)} y1={frame.y(MAX_RATE)} x2={frame.x(100)} y2={frame.y(0)} id="demand" color={MARKER.blue} width={2.5} draw={drawNow(0)} />,
    <Note x={frame.x(92)} y={frame.y(rateAt(92)) - 8} text="I(r)" color={MARKER.blue} size={18} anchor="end" draw={drawNow(0)} />,
  ];
  if (step > 0) drawing.push(<InkDashed x1={frame.x(startSavings)} y1={frame.top} x2={frame.x(startSavings)} y2={frame.bottom} id="old-savings" color={INK_SOFT} width={1.3} dash={5} gap={5} />);
  drawing.push(<InkLine x1={frame.x(shown.savings)} y1={frame.top} x2={frame.x(shown.savings)} y2={frame.bottom} id="savings" color={MARKER.green} width={2.5} draw={drawNow(0)} />);
  drawing.push(<Note x={frame.x(shown.savings) + 6} y={frame.top + 18} text="S" color={MARKER.green} size={19} />);
  drawing.push(<InkDashed x1={frame.left} y1={frame.y(rate)} x2={frame.x(shown.savings)} y2={frame.y(rate)} id="rate-guide" color={ACCENT} width={1.3} dash={4} gap={4} />);
  drawing.push(<Note x={frame.left + 6} y={frame.y(rate) - 7} text={`r = ${fmt(rate, 1)}%`} color={ACCENT} size={17} />);
  if (show(3)) drawing.push(<Ring x={frame.x(shown.savings)} y={frame.y(rate)} id="equilibrium" color={ACCENT} draw={drawNow(3)} />);
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} footnote="Illustrative: I(r) = 100 − 8r, savings independent of r, a quarter of the extra income saved."
      ariaLabel={`Loanable funds market. A deficit raises the interest rate from ${fmt(startRate, 1)} to ${fmt(rate, 1)} percent.`}
      explore={<div class="graph-sliders"><Slider label="deficit" value={deficit} min={0} max={40} step={1} onInput={setDeficit} /></div>}>
      {drawing}
    </SketchGraph>
  );
}

function OpenEconomy(): VNode {
  const [worldRate, setWorldRate] = useState(7);
  const savings = 60;
  const closedRate = rateAt(savings);
  const NOTES = [
    "Closed economy: investment must equal domestic savings, which sets r at 5%.",
    "Open the economy to a higher world rate. Investment falls, leaving surplus savings that flow abroad: NX > 0.",
    "With a lower world rate, investment rises above savings. The gap is financed from abroad: NX < 0.",
    "Your turn. Move the world interest rate and read off net exports.",
  ];
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMax: MAX_FUNDS, yMax: MAX_RATE }], maxWidth: 640, padding: { left: 44, bottom: 44, top: 18 } });
  const { show, drawNow, step } = sketch;
  const frame = sketch.frames[0];
  const targetRate = step === 0 ? closedRate : step === 1 ? 7 : step === 2 ? 3 : worldRate;
  const shown = useGlide({ rate: targetRate }, false);
  const investment = clamp(demandAt(shown.rate), 0, MAX_FUNDS);
  const netExports = savings - investment;
  const TEX = [
    `S = I \\Rightarrow r = ${fmt(closedRate, 1)}\\%`,
    `r_w = 7\\%:\\; I = ${fmt(demandAt(7), 0)},\\; NX = S - I = ${fmt(savings - demandAt(7), 0)}`,
    `r_w = 3\\%:\\; I = ${fmt(demandAt(3), 0)},\\; NX = S - I = ${fmt(savings - demandAt(3), 0)}`,
    `r_w = ${fmt(shown.rate, 1)}\\%:\\; I = ${fmt(investment, 1)},\\; NX = ${fmt(netExports, 1)}`,
  ];
  const drawing: VNode[] = [
    <SketchAxes frame={frame} id="axes" xTicks={[0, 20, 40, 60, 80, 100]} yTicks={[2, 4, 6, 8, 10, 12]} xLabel="loanable funds" yLabel="r (%)" />,
    <InkLine x1={frame.x(100 - 8 * MAX_RATE)} y1={frame.y(MAX_RATE)} x2={frame.x(100)} y2={frame.y(0)} id="demand" color={MARKER.blue} width={2.5} draw={drawNow(0)} />,
    <InkLine x1={frame.x(savings)} y1={frame.top} x2={frame.x(savings)} y2={frame.bottom} id="savings" color={MARKER.green} width={2.5} draw={drawNow(0)} />,
    <Note x={frame.x(savings) + 6} y={frame.top + 18} text="S" color={MARKER.green} size={19} />,
    <Note x={frame.x(92)} y={frame.y(rateAt(92)) - 8} text="I(r)" color={MARKER.blue} size={18} anchor="end" />,
    <InkDashed x1={frame.left} y1={frame.y(shown.rate)} x2={frame.right} y2={frame.y(shown.rate)} id="world-rate" color={ACCENT} width={1.5} dash={5} gap={4} />,
    <Note x={frame.right - 3} y={frame.y(shown.rate) - 7} text={step === 0 ? "closed r" : `world r = ${fmt(shown.rate, 1)}%`} color={ACCENT} anchor="end" size={17} />,
  ];
  if (show(1) && Math.abs(netExports) > 0.4) {
    drawing.push(<InkLine x1={frame.x(investment)} y1={frame.y(shown.rate)} x2={frame.x(savings)} y2={frame.y(shown.rate)} id="nx-gap" color={netExports > 0 ? MARKER.green : MARKER.red} width={4} draw={drawNow(1)} />);
    drawing.push(<Note x={frame.x((investment + savings) / 2)} y={frame.y(shown.rate) + 21} text={`NX = ${fmt(netExports, 0)}`} color={netExports > 0 ? MARKER.green : MARKER.red} anchor="middle" size={17} />);
  }
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} footnote="Illustrative: I(r) = 100 − 8r, S = 60, no net foreign factor income."
      ariaLabel={`Open economy loanable funds. At a world rate of ${fmt(shown.rate, 1)} percent, net exports are ${fmt(netExports, 1)}.`}
      explore={<div class="graph-sliders"><Slider label="world rate r (%)" value={worldRate} min={1} max={10} step={0.25} onInput={setWorldRate} /></div>}>
      {drawing}
    </SketchGraph>
  );
}
