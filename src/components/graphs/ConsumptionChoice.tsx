import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, useGlide, SketchGraph, SketchAxes, InkLine, InkCurve, InkDashed, Hatch, Note, Dot, Ring, Presets, curvePoints, fmt, INK, INK_SOFT, ACCENT, MARKER, WASH, Slider } from "./sketch";

// Household choice diagrams (Lectures 2 and 7), with log utility.
//   type: consumption-choice
//   figure: two-period | borrowing | lifecycle | leisure
// two-period — max ln c + β ln c^f s.t. c + c^f/(1+r) = y + y^f/(1+r):
//              c* = PVLR/(1+β), tangency where MRS = 1 + r (the Euler equation).
// borrowing  — same, but the household wants to borrow and can't: stuck at c = y.
// lifecycle  — income y while working (N years), nothing in retirement;
//              consumption smoothed flat at N·y/T.
// leisure    — max ln C + θ ln ℓ s.t. C = w(1 − ℓ) + B: tangency MRS = w.
// Parameter values are illustrative.

interface Props { figure?: string; }

export default function ConsumptionChoice({ figure = "two-period" }: Props): VNode {
  if (figure === "lifecycle") return <LifeCycle />;
  if (figure === "leisure") return <ConsumptionLeisure />;
  return <TwoPeriod constrained={figure === "borrowing"} />;
}

function TwoPeriod({ constrained }: { constrained: boolean }): VNode {
  const initial = constrained ? { income: 2, futureIncome: 8, rate: 0.1, patience: 0.95 } : { income: 6, futureIncome: 2, rate: 0.1, patience: 0.95 };
  const [target, setTarget] = useState(initial);
  const NOTES = constrained ? [
    "Low income today, high income tomorrow: this household wants to borrow.",
    "Its unconstrained optimum is to the right of the endowment: consume more today, repay tomorrow.",
    "But it can't borrow: it's stuck at c = y. Consumption today is too low: u′(c) > β(1+r)u′(cᶠ).",
    "Any extra income today is spent straight away: a high marginal propensity to consume.",
    "Your turn. Raise today's income and watch the constraint stop binding.",
  ] : [
    "The budget line: every (c, cᶠ) the household can afford by saving or borrowing at rate r. It passes through the endowment.",
    "Indifference curves: combinations of today and tomorrow the household likes equally.",
    "The best choice is where the highest reachable curve just touches the budget line: MRS = 1 + r.",
    "Your turn. Change the interest rate, patience or today's income.",
  ];
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMax: 12, yMax: 12 }], aspect: 0.82, maxWidth: 580, padding: { left: 40, bottom: 44, top: 22 } });
  const { show, drawNow, step } = sketch;
  const exploreStep = NOTES.length - 1;
  const current = useGlide(step === exploreStep ? target : initial, false);
  const frame = sketch.frames[0];
  const toX = frame.x, toY = frame.y;
  const { income, futureIncome, rate, patience } = current;
  const lifetime = income + futureIncome / (1 + rate);
  const bestNow = lifetime / (1 + patience), bestLater = patience * (1 + rate) * bestNow;
  const wantsToBorrow = bestNow > income;
  const bindingConstraint = constrained && wantsToBorrow;
  const chosenNow = bindingConstraint ? income : bestNow, chosenLater = bindingConstraint ? futureIncome : bestLater;
  const utility = Math.log(chosenNow) + patience * Math.log(chosenLater);
  const indifference = (level: number) => (consumption: number) => Math.exp((level - Math.log(consumption)) / patience);
  const budget = (consumption: number) => futureIncome + (1 + rate) * (income - consumption);
  const maxNow = lifetime;

  const TEX = constrained ? [
    `(y, y^f) = (${fmt(income)}, ${fmt(futureIncome)}),\\; r = ${fmt(rate, 2)}`,
    `c^* = \\frac{y + y^f/(1+r)}{1 + \\beta} = ${fmt(bestNow, 2)} > y = ${fmt(income)}`,
    "c = y:\\quad u'(c) > \\beta(1+r)\\,u'(c^f)",
    "MPC \\approx 1 \\text{ while the constraint binds}",
    bindingConstraint ? `c^* = ${fmt(bestNow, 2)} > y = ${fmt(income, 1)}: \\text{binds}` : `c^* = ${fmt(bestNow, 2)} \\le y = ${fmt(income, 1)}: \\text{no longer binds}`,
  ] : [
    `c + \\frac{c^f}{1+r} = y + \\frac{y^f}{1+r} = ${fmt(lifetime, 2)}`,
    "U = \\ln c + \\beta \\ln c^f",
    `MRS = \\frac{c^f}{\\beta c} = 1 + r \\;\\Rightarrow\\; c^* = ${fmt(bestNow, 2)},\\; c^{f*} = ${fmt(bestLater, 2)}`,
    `r = ${fmt(rate, 2)},\\; \\beta = ${fmt(patience, 2)}:\\; c^* = ${fmt(bestNow, 2)} \\;(${bestNow < income ? "saves" : "borrows"} ${fmt(Math.abs(income - bestNow), 2)})`,
  ];

  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={[0, 2, 4, 6, 8, 10, 12]} yTicks={[2, 4, 6, 8, 10, 12]} xLabel="c (today)" yLabel="cᶠ" />];
  const plot: VNode[] = [];
  if (constrained) {
    plot.push(<InkLine x1={toX(0)} y1={toY(budget(0))} x2={toX(income)} y2={toY(futureIncome)} id="budget-ok" color={MARKER.blue} width={2.4} draw={drawNow(0)} />);
    plot.push(<InkDashed x1={toX(income)} y1={toY(futureIncome)} x2={toX(maxNow)} y2={toY(0)} id="budget-blocked" color={MARKER.blue} width={1.4} draw={drawNow(0)} />);
  } else {
    plot.push(<InkLine x1={toX(0)} y1={toY(budget(0))} x2={toX(maxNow)} y2={toY(0)} id="budget" color={MARKER.blue} width={2.4} draw={drawNow(0)} />);
  }
  if (show(1)) plot.push(<InkCurve points={curvePoints(frame, indifference(Math.log(bestNow) + patience * Math.log(bestLater)), 0.6, 12, 60)} id={`ic-best-${constrained}`} color={MARKER.green} width={2.2} draw={drawNow(1)} />);
  if (constrained && show(2)) plot.push(<InkCurve points={curvePoints(frame, indifference(utility), 0.6, 12, 60)} id="ic-constrained" color={MARKER.red} width={1.6} dashed draw={drawNow(2)} />);
  if (!constrained && show(1) && step < 2) plot.push(<InkCurve points={curvePoints(frame, indifference(utility - 0.35), 0.6, 12, 60)} id="ic-low" color={MARKER.green} width={1.3} dashed draw={drawNow(1)} />);
  drawing.push(<g clip-path={sketch.clip()}>{plot}</g>);
  drawing.push(<Dot x={toX(income)} y={toY(futureIncome)} color={INK} radius={4.5} />);
  drawing.push(<Note x={toX(income) + 10} y={toY(futureIncome) - 10} text={`endowment (${fmt(income)}, ${fmt(futureIncome)})`} color={INK} size={17} />);
  drawing.push(<Note x={toX(maxNow) - 6} y={toY(0.6)} text="budget, slope −(1+r)" color={MARKER.blue} anchor="end" size={16} draw={drawNow(0)} />);
  if (!constrained && show(2)) {
    drawing.push(<Ring x={toX(bestNow)} y={toY(bestLater)} id="ring-best" color={ACCENT} draw={drawNow(2)} />);
    drawing.push(<Dot x={toX(bestNow)} y={toY(bestLater)} color={ACCENT} draw={drawNow(2)} />);
    drawing.push(<Note x={toX(bestNow) - 14} y={toY(bestLater) - 14} text="optimum: MRS = 1 + r" color={ACCENT} anchor="end" size={18} draw={drawNow(2)} />);
  }
  if (constrained && show(1)) {
    drawing.push(<Dot x={toX(bestNow)} y={toY(bestLater)} color={MARKER.green} hollow={bindingConstraint} draw={drawNow(1)} />);
    drawing.push(<Note x={toX(bestNow) + 12} y={toY(bestLater) + 4} text="unconstrained optimum" color={MARKER.green} size={17} draw={drawNow(1)} />);
  }
  if (constrained && show(2) && bindingConstraint) {
    drawing.push(<Ring x={toX(income)} y={toY(futureIncome)} id="ring-stuck" color={MARKER.red} draw={drawNow(2)} />);
    drawing.push(<Note x={toX(income) - 12} y={toY(futureIncome) + 26} text="stuck at c = y" color={MARKER.red} anchor="end" size={18} draw={drawNow(2)} />);
  }
  const update = (changes: Partial<typeof target>) => setTarget((state) => ({ ...state, ...changes }));
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} footnote="Log utility, illustrative numbers."
      ariaLabel={constrained ? "Borrowing constraint: the household wants to consume beyond its endowment today but is stuck at c = y." : "Two-period consumption: tangency of an indifference curve with the budget line."}
      explore={<>
        <div class="graph-sliders">
          <Slider label="interest rate r" value={target.rate} min={0} max={0.5} step={0.05} onInput={(value) => update({ rate: value })} />
          <Slider label="patience β" value={target.patience} min={0.5} max={1.2} step={0.05} onInput={(value) => update({ patience: value })} />
          <Slider label="income today y" value={target.income} min={1} max={9} step={0.5} onInput={(value) => update({ income: value })} />
        </div>
        <Presets presets={[{ label: "Reset", apply: () => setTarget(initial) }]} />
      </>}>
      {drawing}
    </SketchGraph>
  );
}

function LifeCycle(): VNode {
  const [workingYears, setWorkingYears] = useState(40);
  const LIFETIME = 60, INCOME = 1;
  const NOTES = [
    "Income: a steady y during working life, nothing after retirement.",
    "With β(1+r) = 1, the household smooths completely: consumption is flat at N·y/T all life.",
    "While working it saves the gap; in retirement it runs those savings down.",
    "Your turn. Change how many years you work.",
  ];
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMax: LIFETIME + 2, yMax: 1.3 }], maxWidth: 640, padding: { left: 40, bottom: 44, top: 22 } });
  const { show, drawNow, step } = sketch;
  const years = step === 3 ? workingYears : 40;
  const consumption = (years * INCOME) / LIFETIME;
  const frame = sketch.frames[0];
  const toX = frame.x, toY = frame.y;
  const TEX = [
    "y_t = y \\;(t \\le N),\\quad y_t = 0 \\;(t > N)",
    `\\bar c = \\frac{N y}{T} = \\frac{${years} \\times 1}{${LIFETIME}} = ${fmt(consumption, 2)}`,
    `\\text{saving } = y - \\bar c = ${fmt(INCOME - consumption, 2)},\\quad \\text{dissaving } = ${fmt(consumption, 2)}`,
    `N = ${years}:\\; \\bar c = ${fmt(consumption, 2)}`,
  ];
  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={[0, 20, 40, 60]} yTicks={[0.5, 1]} xLabel="years of adult life" yLabel="income, consumption" />];
  if (show(2)) {
    drawing.push(<Hatch points={[[toX(0), toY(INCOME)], [toX(years), toY(INCOME)], [toX(years), toY(consumption)], [toX(0), toY(consumption)]]} id={`${sketch.uid}-saving-${years}`} wash={WASH.green} ink={MARKER.green} draw={step === 2 && drawNow(2)} />);
    drawing.push(<Hatch points={[[toX(years), toY(consumption)], [toX(LIFETIME), toY(consumption)], [toX(LIFETIME), toY(0)], [toX(years), toY(0)]]} id={`${sketch.uid}-dissaving-${years}`} wash={WASH.red} ink={MARKER.red} angle={-1} draw={step === 2 && drawNow(2)} />);
  }
  drawing.push(<InkLine x1={toX(0)} y1={toY(INCOME)} x2={toX(years)} y2={toY(INCOME)} id={`income-work-${years}`} color={MARKER.green} width={2.6} draw={drawNow(0)} />);
  drawing.push(<InkDashed x1={toX(years)} y1={toY(INCOME)} x2={toX(years)} y2={toY(0)} id={`retire-${years}`} color={INK_SOFT} width={1.2} dash={4} gap={4} />);
  drawing.push(<InkLine x1={toX(years)} y1={toY(0) - 1} x2={toX(LIFETIME)} y2={toY(0) - 1} id={`income-retired-${years}`} color={MARKER.green} width={2.6} draw={drawNow(0)} />);
  if (show(1)) drawing.push(<InkLine x1={toX(0)} y1={toY(consumption)} x2={toX(LIFETIME)} y2={toY(consumption)} id={`consumption-${years}`} color={MARKER.blue} width={2.6} draw={drawNow(1)} />);
  drawing.push(<Note x={toX(4)} y={toY(INCOME) - 10} text="income" color={MARKER.green} size={18} draw={drawNow(0)} />);
  drawing.push(<Note x={toX(years) + 4} y={frame.top + 10} text="retirement" color={INK_SOFT} size={17} />);
  if (show(1)) drawing.push(<Note x={toX(LIFETIME) - 4} y={toY(consumption) - 10} text="consumption (flat)" color={MARKER.blue} anchor="end" size={18} draw={drawNow(1)} />);
  if (show(2)) {
    drawing.push(<Note x={toX(years / 2)} y={(toY(INCOME) + toY(consumption)) / 2 + 6} text="saving" color={MARKER.green} anchor="middle" size={19} />);
    drawing.push(<Note x={toX((years + LIFETIME) / 2)} y={(toY(consumption) + toY(0)) / 2 + 6} text="dissaving" color={MARKER.red} anchor="middle" size={19} />);
  }
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} footnote="Illustrative: 60 adult years, income 1 while working."
      ariaLabel={`Life-cycle: working ${years} of 60 years, consumption smoothed at ${fmt(consumption, 2)}.`}
      explore={<div class="graph-sliders"><Slider label="working years N" value={workingYears} min={20} max={55} step={1} onInput={setWorkingYears} /></div>}>
      {drawing}
    </SketchGraph>
  );
}

function ConsumptionLeisure(): VNode {
  const initial = { wage: 10, wealth: 2, taste: 1 };
  const [target, setTarget] = useState(initial);
  const NOTES = [
    "The budget: C = w·(1 − ℓ) + B. Every hour of leisure ℓ costs the wage w in consumption, so the slope is −w.",
    "Indifference curves between consumption and leisure.",
    "The optimum is the tangency: MRS = w, the static first-order condition.",
    "Your turn. Change the wage or non-labour wealth B.",
  ];
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMax: 1.05, yMax: 16 }], aspect: 0.82, maxWidth: 580, padding: { left: 40, bottom: 44, top: 22 } });
  const { show, drawNow, step } = sketch;
  const current = useGlide(step === 3 ? target : initial, false);
  const frame = sketch.frames[0];
  const toX = frame.x, toY = frame.y;
  const { wage, wealth, taste } = current;
  const leisure = Math.min(1, (taste * (wage + wealth)) / (wage * (1 + taste)));
  const consumption = wage * (1 - leisure) + wealth;
  const utility = Math.log(consumption) + taste * Math.log(leisure);
  const indifference = (hours: number) => Math.exp(utility - taste * Math.log(hours));
  const TEX = [
    `C = ${fmt(wage)}(1 - \\ell) + ${fmt(wealth)}`,
    "U = \\ln C + \\theta \\ln \\ell",
    `MRS = w:\\; \\ell^* = ${fmt(leisure, 2)},\\; N^* = ${fmt(1 - leisure, 2)},\\; C^* = ${fmt(consumption, 2)}`,
    `w = ${fmt(wage)},\\; B = ${fmt(wealth)}:\\; N^* = ${fmt(1 - leisure, 2)}`,
  ];
  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={[0, 0.25, 0.5, 0.75, 1]} yTicks={[4, 8, 12, 16]} xLabel="leisure ℓ = 1 − N" yLabel="C" />];
  const plot: VNode[] = [<InkLine x1={toX(0)} y1={toY(wage + wealth)} x2={toX(1)} y2={toY(wealth)} id="budget" color={MARKER.blue} width={2.4} draw={drawNow(0)} />];
  plot.push(<InkDashed x1={toX(1)} y1={toY(wealth)} x2={toX(1)} y2={frame.bottom} id="no-work" color={MARKER.blue} width={1.2} dash={4} gap={4} />);
  if (show(1)) plot.push(<InkCurve points={curvePoints(frame, indifference, 0.08, 1.05, 60)} id="indifference" color={MARKER.green} width={2.2} draw={drawNow(1)} />);
  drawing.push(<g clip-path={sketch.clip()}>{plot}</g>);
  drawing.push(<Note x={toX(0.02) + 6} y={toY(wage + wealth) - 6} text="work every hour" color={MARKER.blue} size={16} />);
  drawing.push(<Note x={toX(1) - 6} y={toY(wealth) - 10} text="no work: C = B" color={MARKER.blue} anchor="end" size={16} />);
  if (show(2)) {
    drawing.push(<Ring x={toX(leisure)} y={toY(consumption)} id="ring" color={ACCENT} draw={drawNow(2)} />);
    drawing.push(<Dot x={toX(leisure)} y={toY(consumption)} color={ACCENT} draw={drawNow(2)} />);
    drawing.push(<Note x={toX(leisure) + 14} y={toY(consumption) - 12} text="optimum: MRS = w" color={ACCENT} size={18} draw={drawNow(2)} />);
  }
  const update = (changes: Partial<typeof target>) => setTarget((state) => ({ ...state, ...changes }));
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} footnote="Log utility, illustrative numbers."
      ariaLabel={`Consumption–leisure choice: the household works ${fmt(1 - leisure, 2)} of its time.`}
      explore={<div class="graph-sliders">
        <Slider label="real wage w" value={target.wage} min={4} max={14} step={0.5} onInput={(value) => update({ wage: value })} />
        <Slider label="non-labour wealth B" value={target.wealth} min={0} max={8} step={0.5} onInput={(value) => update({ wealth: value })} />
      </div>}>
      {drawing}
    </SketchGraph>
  );
}
