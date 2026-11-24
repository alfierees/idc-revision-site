import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, useGlide, SketchGraph, SketchAxes, InkCurve, InkLine, InkDashed, Note, Dot, Ring, curvePoints, fmt, INK_SOFT, ACCENT, MARKER, Slider } from "./sketch";

// Solow model with constant technology (Principles of Macro, Lectures 3 and 4).
//   type: solow-model
//   figure: steady-state | savings-shift | golden-rule | poverty-trap
// All figures use y = A·k^α. Defaults come from the course's Economia and
// Stagnatia example: α = 0.4, n + δ = 0.08, s = 0.3 (Economia) or 0.1 (Stagnatia).

interface Props { figure?: string; }

const CAPITAL_SHARE = 0.4;
const MAX_CAPITAL = 16;
const output = (productivity: number) => (capital: number) => productivity * Math.pow(Math.max(capital, 1e-6), CAPITAL_SHARE);
const steadyCapital = (savings: number, breakEven: number, productivity: number) => Math.pow((savings * productivity) / breakEven, 1 / (1 - CAPITAL_SHARE));

export default function SolowModel({ figure = "steady-state" }: Props): VNode {
  if (figure === "savings-shift") return <SavingsShift />;
  if (figure === "golden-rule") return <GoldenRule />;
  if (figure === "poverty-trap") return <PovertyTrap />;
  return <SteadyState />;
}

function SteadyState(): VNode {
  const [target, setTarget] = useState({ savings: 0.3, breakEven: 0.08, productivity: 1 });
  const NOTES = [
    "Output per worker rises with capital per worker, but each extra unit adds less: diminishing returns.",
    "Workers save a fixed share s of output. Savings per worker has the same shape, scaled down.",
    "The straight line is what is needed just to stand still: replace worn-out capital and equip new workers.",
    "Savings above the line means k grows. Watch k climb until the two lines meet: the steady state.",
    "Your turn. Move s, n + δ or A and watch the steady state move.",
  ];
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMax: MAX_CAPITAL, yMax: 3.4 }], maxWidth: 680, padding: { left: 44, bottom: 44, top: 18 } });
  const { show, drawNow, step } = sketch;
  const frame = sketch.frames[0];
  const live = step === 4 ? target : { savings: 0.3, breakEven: 0.08, productivity: 1 };
  const current = useGlide(live, false);
  const steady = steadyCapital(current.savings, current.breakEven, current.productivity);
  const moving = useGlide({ capital: step >= 3 ? Math.min(steady, MAX_CAPITAL) : 2 }, false);
  const production = output(current.productivity);
  const savingsCurve = (capital: number) => current.savings * production(capital);
  const breakEvenLine = (capital: number) => current.breakEven * capital;
  const TEX = [
    "y = A k^{\\alpha}",
    `s\\,y = ${fmt(current.savings, 2)}\\,k^{0.4}`,
    `(n + \\delta)\\,k = ${fmt(current.breakEven, 2)}\\,k`,
    `\\Delta k = s y - (n+\\delta)k = 0 \\;\\Rightarrow\\; k^* = ${fmt(steady, 2)}`,
    `k^* = \\left(\\tfrac{sA}{n+\\delta}\\right)^{1/(1-\\alpha)} = ${fmt(steady, 2)},\\quad y^* = ${fmt(production(steady), 2)}`,
  ];
  const plot: VNode[] = [<InkCurve points={curvePoints(frame, production, 0.02, MAX_CAPITAL, 70)} id="output" color={MARKER.blue} width={2.5} draw={drawNow(0)} />];
  if (show(1)) plot.push(<InkCurve points={curvePoints(frame, savingsCurve, 0.02, MAX_CAPITAL, 70)} id="savings" color={MARKER.green} width={2.5} draw={drawNow(1)} />);
  if (show(2)) plot.push(<InkLine x1={frame.x(0)} y1={frame.y(0)} x2={frame.x(MAX_CAPITAL)} y2={frame.y(breakEvenLine(MAX_CAPITAL))} id="break-even" color={MARKER.red} width={2.3} draw={drawNow(2)} />);
  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={[0, 4, 8, 12, 16]} yTicks={[1, 2, 3]} xLabel="capital per worker k" yLabel="per worker" />, <g clip-path={sketch.clip()}>{plot}</g>];
  drawing.push(<Note x={frame.x(15.6)} y={frame.y(production(15.6)) - 9} text="y = f(k)" color={MARKER.blue} anchor="end" size={18} draw={drawNow(0)} />);
  if (show(1)) drawing.push(<Note x={frame.x(15.6)} y={frame.y(savingsCurve(15.6)) + 20} text="sy" color={MARKER.green} anchor="end" size={18} draw={drawNow(1)} />);
  if (show(2)) drawing.push(<Note x={frame.x(13.5)} y={frame.y(breakEvenLine(13.5)) - 9} text="(n + δ)k" color={MARKER.red} anchor="end" size={17} draw={drawNow(2)} />);
  if (show(3)) {
    drawing.push(<InkDashed x1={frame.x(moving.capital)} y1={frame.y(production(moving.capital))} x2={frame.x(moving.capital)} y2={frame.bottom} id="k-guide" color={INK_SOFT} width={1.2} dash={4} gap={4} />);
    drawing.push(<Dot x={frame.x(moving.capital)} y={frame.y(savingsCurve(moving.capital))} color={ACCENT} />);
    if (steady <= MAX_CAPITAL) drawing.push(<Ring x={frame.x(steady)} y={frame.y(breakEvenLine(steady))} id="steady-ring" color={ACCENT} draw={drawNow(3)} />);
    drawing.push(<Note x={frame.x(Math.min(steady, 13.5)) + 6} y={frame.bottom - 9} text={`k* = ${fmt(steady, 2)}`} color={ACCENT} size={17} />);
  }
  const update = (changes: Partial<typeof target>) => setTarget((state) => ({ ...state, ...changes }));
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} footnote="Course example: α = 0.4, n + δ = 0.08, s = 0.3."
      ariaLabel={`Solow diagram. Savings meets the break-even line at a steady state of k = ${fmt(steady, 2)}.`}
      explore={<div class="graph-sliders">
        <Slider label="savings rate s" value={target.savings} min={0.05} max={0.6} step={0.01} onInput={(value) => update({ savings: value })} />
        <Slider label="n + δ" value={target.breakEven} min={0.04} max={0.2} step={0.005} onInput={(value) => update({ breakEven: value })} />
        <Slider label="TFP A" value={target.productivity} min={0.6} max={1.4} step={0.05} onInput={(value) => update({ productivity: value })} />
      </div>}>
      {drawing}
    </SketchGraph>
  );
}

function SavingsShift(): VNode {
  const [newSavings, setNewSavings] = useState(0.3);
  const startSavings = 0.2, breakEven = 0.08;
  const NOTES = [
    "Start in steady state with s = 20%: savings exactly covers the break-even line.",
    "The savings rate rises permanently. The savings curve jumps up, but k has not moved yet.",
    "Now savings exceeds the break-even line, so k climbs. Growth is fastest at first, then fades.",
    "At the new steady state, k and y are permanently higher, but growth in y per worker is back to zero.",
    "Your turn. Pick a new savings rate. A lower one makes k fall to a lower steady state.",
  ];
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMax: MAX_CAPITAL, yMax: 3 }, { xMax: 60, yMax: MAX_CAPITAL }], aspect: 0.82, minHeight: 240, maxHeight: 320, maxWidth: 760, padding: { left: 40, bottom: 42, top: 16 }, panelTitles: ["Solow diagram", "Capital per worker over time"] });
  const { show, drawNow, step } = sketch;
  const [left, right] = sketch.frames;
  const shown = useGlide({ savings: step === 0 ? startSavings : step === 4 ? newSavings : 0.3 }, false);
  const oldSteady = steadyCapital(startSavings, breakEven, 1);
  const newSteady = steadyCapital(shown.savings, breakEven, 1);
  const path: [number, number][] = [];
  let capital = oldSteady;
  for (let period = 0; period <= 60; period++) {
    path.push([right.x(period), right.y(capital)]);
    capital += shown.savings * Math.pow(capital, CAPITAL_SHARE) - breakEven * capital;
  }
  const production = output(1);
  const TEX = [
    `0.2\\,k^{0.4} = 0.08\\,k \\Rightarrow k^* = ${fmt(oldSteady, 2)}`,
    `s: 0.2 \\to ${fmt(shown.savings, 2)}`,
    "\\Delta k = s y - (n+\\delta)k > 0",
    `k^*: ${fmt(oldSteady, 2)} \\to ${fmt(newSteady, 2)},\\quad y^*: ${fmt(production(oldSteady), 2)} \\to ${fmt(production(newSteady), 2)}`,
    `s = ${fmt(shown.savings, 2)}:\\; k^* = ${fmt(newSteady, 2)},\\; y^* = ${fmt(production(newSteady), 2)}`,
  ];
  const leftParts: VNode[] = [<SketchAxes frame={left} id="left-axes" xTicks={[0, 4, 8, 12, 16]} yTicks={[1, 2, 3]} xLabel="k" yLabel="per worker" />];
  const leftPlot: VNode[] = [
    <InkLine x1={left.x(0)} y1={left.y(0)} x2={left.x(MAX_CAPITAL)} y2={left.y(breakEven * MAX_CAPITAL)} id="break-even" color={MARKER.red} width={2.2} draw={drawNow(0)} />,
    <InkCurve points={curvePoints(left, (value) => startSavings * production(value), 0.02, MAX_CAPITAL, 60)} id="old-savings" color={MARKER.green} width={step === 0 ? 2.5 : 1.3} dashed={step > 0} draw={drawNow(0)} />,
  ];
  if (show(1)) leftPlot.push(<InkCurve points={curvePoints(left, (value) => shown.savings * production(value), 0.02, MAX_CAPITAL, 60)} id="new-savings" color={MARKER.green} width={2.5} draw={drawNow(1)} />);
  leftParts.push(<g clip-path={sketch.clip(0)}>{leftPlot}</g>);
  leftParts.push(<Ring x={left.x(oldSteady)} y={left.y(breakEven * oldSteady)} id="old-ring" color={INK_SOFT} draw={drawNow(0)} />);
  if (show(3) && newSteady <= MAX_CAPITAL) leftParts.push(<Ring x={left.x(newSteady)} y={left.y(breakEven * newSteady)} id="new-ring" color={ACCENT} draw={drawNow(3)} />);
  const rightParts: VNode[] = [<SketchAxes frame={right} id="right-axes" xTicks={[0, 20, 40, 60]} yTicks={[4, 8, 12, 16]} xLabel="years" yLabel="k" />];
  if (show(2)) rightParts.push(<g clip-path={sketch.clip(1)}><InkCurve points={path} id="capital-path" color={ACCENT} width={2.5} draw={drawNow(2)} /></g>);
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} footnote="Illustrative path with α = 0.4, A = 1, n + δ = 0.08."
      ariaLabel={`A change in the savings rate moves steady-state capital per worker from ${fmt(oldSteady, 2)} to ${fmt(newSteady, 2)}.`}
      explore={<div class="graph-sliders"><Slider label="new savings rate" value={newSavings} min={0.08} max={0.4} step={0.01} onInput={setNewSavings} /></div>}>
      <g>{leftParts}</g>
      <g>{rightParts}</g>
    </SketchGraph>
  );
}

function GoldenRule(): VNode {
  const [savings, setSavings] = useState(0.2);
  const breakEven = 0.08;
  const NOTES = [
    "In steady state, consumption per worker is output minus what must be reinvested: c* = f(k) − (n + δ)k.",
    "It is the vertical gap between the output curve and the break-even line.",
    "The gap is widest where the slopes match: f′(k) = n + δ. That k is the Golden Rule level.",
    "For Cobb-Douglas this means a simple rule: the best savings rate equals the capital share, s = α.",
    "Your turn. Slide s. Too little or too much saving both lower long-run consumption.",
  ];
  const goldenCapital = Math.pow(CAPITAL_SHARE / breakEven, 1 / (1 - CAPITAL_SHARE));
  const domainMax = Math.ceil(goldenCapital * 1.5);
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMax: domainMax, yMax: 4.6 }], maxWidth: 680, padding: { left: 44, bottom: 44, top: 18 } });
  const { show, drawNow, step } = sketch;
  const frame = sketch.frames[0];
  const shown = useGlide({ savings: step === 4 ? savings : step >= 2 ? CAPITAL_SHARE : 0.2 }, false);
  const capital = Math.min(steadyCapital(shown.savings, breakEven, 1), domainMax);
  const production = output(1);
  const consumption = production(capital) - breakEven * capital;
  const goldenConsumption = production(goldenCapital) - breakEven * goldenCapital;
  const TEX = [
    "c^* = f(k^*) - (n+\\delta)k^*",
    `s = ${fmt(shown.savings, 2)}:\\; c^* = ${fmt(consumption, 2)}`,
    `f'(k_{GR}) = n + \\delta \\Rightarrow k_{GR} = ${fmt(goldenCapital, 1)}`,
    `s_{GR} = \\alpha = 0.4,\\quad c_{GR} = ${fmt(goldenConsumption, 2)}`,
    `s = ${fmt(shown.savings, 2)}:\\; c^* = ${fmt(consumption, 2)} \\text{ vs best } ${fmt(goldenConsumption, 2)}`,
  ];
  const plot: VNode[] = [
    <InkCurve points={curvePoints(frame, production, 0.02, domainMax, 70)} id="output" color={MARKER.blue} width={2.5} draw={drawNow(0)} />,
    <InkLine x1={frame.x(0)} y1={frame.y(0)} x2={frame.x(domainMax)} y2={frame.y(breakEven * domainMax)} id="break-even" color={MARKER.red} width={2.2} draw={drawNow(0)} />,
  ];
  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={[0, Math.round(domainMax / 2), domainMax]} yTicks={[1, 2, 3, 4]} xLabel="steady-state k" yLabel="per worker" />, <g clip-path={sketch.clip()}>{plot}</g>];
  if (show(1)) {
    drawing.push(<InkLine x1={frame.x(capital)} y1={frame.y(production(capital))} x2={frame.x(capital)} y2={frame.y(breakEven * capital)} id="consumption-gap" color={ACCENT} width={3} />);
    drawing.push(<Note x={frame.x(capital) + 8} y={frame.y((production(capital) + breakEven * capital) / 2)} text={`c* = ${fmt(consumption, 2)}`} color={ACCENT} size={17} />);
  }
  if (show(2)) drawing.push(<InkDashed x1={frame.x(goldenCapital)} y1={frame.y(production(goldenCapital))} x2={frame.x(goldenCapital)} y2={frame.bottom} id="golden-guide" color={INK_SOFT} width={1.2} dash={4} gap={4} draw={drawNow(2)} />);
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} footnote="Illustrative: y = k^0.4, n + δ = 0.08."
      ariaLabel={`Golden Rule diagram. Consumption is highest at a savings rate of 0.4, where k is ${fmt(goldenCapital, 1)}.`}
      explore={<div class="graph-sliders"><Slider label="savings rate s" value={savings} min={0.05} max={0.8} step={0.01} onInput={setSavings} /></div>}>
      {drawing}
    </SketchGraph>
  );
}

function PovertyTrap(): VNode {
  const [savings, setSavings] = useState(0.1);
  const startCapital = 1.5, breakEven = 0.08;
  const threshold = breakEven * Math.pow(startCapital, 1 - CAPITAL_SHARE);
  const NOTES = [
    "Economia and Stagnatia both start at k = 1.5 with the same technology and n + δ = 0.08.",
    "Stagnatia saves 10%. At k = 1.5 savings falls just short of the break-even line, so k shrinks.",
    "Economia saves 30%. Savings is far above the line, so capital accumulates.",
    `The threshold at k = 1.5 is s ≈ ${fmt(threshold, 3)}. Below it, capital per worker falls.`,
    "Your turn. Slide the savings rate across the threshold.",
  ];
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMax: 3, yMax: 0.5 }], maxWidth: 680, padding: { left: 48, bottom: 44, top: 18 } });
  const { show, drawNow, step } = sketch;
  const frame = sketch.frames[0];
  const shown = useGlide({ savings: step === 4 ? savings : step === 2 ? 0.3 : step === 3 ? threshold : 0.1 }, false);
  const production = output(1);
  const change = shown.savings * production(startCapital) - breakEven * startCapital;
  const TEX = [
    "y = k^{0.4},\\quad k_0 = 1.5",
    "\\Delta k^S = 0.1(1.5)^{0.4} - 0.08(1.5) = -0.0024",
    "\\Delta k^E = 0.3(1.5)^{0.4} - 0.08(1.5) = 0.2328",
    "s\\,(1.5)^{0.4} = 0.08(1.5) \\Rightarrow s = 0.08(1.5)^{0.6} \\approx 0.102",
    `s = ${fmt(shown.savings, 2)}:\\; \\Delta k = ${fmt(change, 4)}`,
  ];
  const plot: VNode[] = [
    <InkLine x1={frame.x(0)} y1={frame.y(0)} x2={frame.x(3)} y2={frame.y(breakEven * 3)} id="break-even" color={MARKER.red} width={2.2} draw={drawNow(0)} />,
    <InkCurve points={curvePoints(frame, (value) => shown.savings * production(value), 0.01, 3, 60)} id="savings" color={MARKER.green} width={2.5} draw={drawNow(0)} />,
  ];
  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={[0, 1, 1.5, 2, 3]} yTicks={[0.1, 0.2, 0.3, 0.4, 0.5]} xLabel="capital per worker k" yLabel="per worker" />, <g clip-path={sketch.clip()}>{plot}</g>];
  drawing.push(<InkDashed x1={frame.x(startCapital)} y1={frame.top} x2={frame.x(startCapital)} y2={frame.bottom} id="start-guide" color={INK_SOFT} width={1.2} dash={4} gap={4} draw={drawNow(0)} />);
  if (show(1)) {
    drawing.push(<Dot x={frame.x(startCapital)} y={frame.y(shown.savings * production(startCapital))} color={ACCENT} />);
    drawing.push(<Note x={frame.x(startCapital) + 9} y={frame.top + 22} text={change >= 0 ? "k grows" : "k shrinks"} color={change >= 0 ? MARKER.green : MARKER.red} size={18} />);
  }
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} footnote="Lecture 4 example: y = k^0.4, n + δ = 0.08, k₀ = 1.5."
      ariaLabel={`At k = 1.5 and a savings rate of ${fmt(shown.savings, 2)}, capital per worker changes by ${fmt(change, 4)}.`}
      explore={<div class="graph-sliders"><Slider label="savings rate s" value={savings} min={0.04} max={0.4} step={0.002} onInput={setSavings} /></div>}>
      {drawing}
    </SketchGraph>
  );
}
