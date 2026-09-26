import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, useGlide, SketchGraph, SketchAxes, InkCurve, InkDashed, Note, Dot, Ring, ShiftArrow, Toggle, curvePoints, fmt, INK_SOFT, ACCENT, MARKER, Slider } from "./sketch";

// The labour market (Lectures 7 and 10, PS 5), using PS 5's model:
//   production Y = A·K^0.3·N^0.7, so labour demand is MPN: w = 0.7·A·K^0.3·N^−0.3
//   labour supply N = s·w^(1/3) (s < 1: households work less at any wage)
//   ⇒ w* = (0.7·A·K^0.3·s^−0.3)^(1/1.1), N* = s·w*^(1/3)
// At A = 0.4, K = 4, s = 1 this gives PS 5's w = 0.459, N = 0.771, Y = 0.506.
//   type: labor-market
//   scenario: equilibrium | productivity | capital | aid | permanent-tfp | lecture-shocks
// productivity (A 0.4 → 0.5) and capital (K 4 → 5) reproduce PS 5's numbers
// exactly; the size of supply shifts (aid, permanent TFP, population) is
// illustrative, since those questions ask only for directions.

interface Props { scenario?: string; }

type State = { productivity: number; capital: number; supply: number };
interface Scenario { before: State; after: State; notes: string[]; shiftLabel: string; illustrative: boolean; }

const BASE: State = { productivity: 0.4, capital: 4, supply: 1 };

const SCENARIOS: Record<string, Scenario> = {
  productivity: {
    before: BASE, after: { ...BASE, productivity: 0.5 }, shiftLabel: "A: 0.4 → 0.5", illustrative: false,
    notes: ["Productivity rises 25%: labour is worth more at every N, so demand shifts right.", "Moving up the supply curve: the real wage and employment both rise."],
  },
  capital: {
    before: BASE, after: { ...BASE, capital: 5 }, shiftLabel: "K: 4 → 5", illustrative: false,
    notes: ["More capital makes each worker more productive (complements): demand shifts right, by less than a TFP rise.", "Wage and employment rise, by less than when A rose."],
  },
  aid: {
    before: BASE, after: { ...BASE, supply: 0.86 }, shiftLabel: "permanent aid: richer households", illustrative: true,
    notes: ["Permanent foreign aid makes households richer: they work less at any wage, so supply shifts left. Demand doesn't move.", "Up and left along demand: w rises, N and Y fall."],
  },
  "permanent-tfp": {
    before: BASE, after: { productivity: 0.5, capital: 4, supply: 0.93 }, shiftLabel: "permanent A↑", illustrative: true,
    notes: ["A permanent TFP rise: demand shifts right (higher MPN) and supply shifts left (households feel richer).", "Both push the wage up; employment could go either way: here it barely moves."],
  },
  negative: {
    before: BASE, after: { ...BASE, productivity: 0.32 }, shiftLabel: "temporary A↓", illustrative: true,
    notes: ["A temporary negative TFP shock: MPN falls at every N, so demand shifts left. Supply barely moves (PVLR hardly changes).", "Lower employment and a lower wage."],
  },
  population: {
    before: BASE, after: { ...BASE, supply: 1.12 }, shiftLabel: "population ↑", illustrative: true,
    notes: ["A permanent rise in population: more people want to work at every wage, so supply shifts right.", "More employment, a lower wage (in the short run)."],
  },
};

const solve = (state: State) => {
  const wage = Math.pow(0.7 * state.productivity * Math.pow(state.capital, 0.3) * Math.pow(state.supply, -0.3), 1 / 1.1);
  const employment = state.supply * Math.pow(wage, 1 / 3);
  return { wage, employment, output: state.productivity * Math.pow(state.capital, 0.3) * Math.pow(employment, 0.7) };
};
const demandWage = (state: State) => (employment: number) => 0.7 * state.productivity * Math.pow(state.capital, 0.3) * Math.pow(employment, -0.3);
const supplyWage = (state: State) => (employment: number) => Math.pow(employment / state.supply, 3);
const percent = (after: number, before: number) => `${after >= before ? "+" : ""}${fmt((100 * (after - before)) / before, 1)}\\%`;

export default function LaborMarket({ scenario = "equilibrium" }: Props): VNode {
  const [lectureShock, setLectureShock] = useState<"negative" | "population">("negative");
  const [explore, setExplore] = useState<State>(BASE);
  const scenarioKey = scenario === "lecture-shocks" ? lectureShock : scenario;
  const spec = SCENARIOS[scenarioKey];

  const NOTES = [
    "Labour supply slopes up: a higher real wage draws out more hours.",
    "Labour demand is the marginal product of labour, falling as N rises.",
    "Equilibrium: households and firms both optimise and the market clears.",
    ...(spec ? spec.notes : []),
    "Your turn. Change productivity, capital or households' willingness to work.",
  ];
  const shockStep = 3, resultStep = 4, exploreStep = NOTES.length - 1;
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMin: 0.45, xMax: 1.05, yMin: 0.2, yMax: 1 }], maxWidth: 640, padding: { left: 44, bottom: 44, top: 22 } });
  const { show, drawNow, step } = sketch;
  const frame = sketch.frames[0];
  const toX = frame.x, toY = frame.y;
  const onExplore = step === exploreStep;
  const target = onExplore ? explore : spec && step >= shockStep ? spec.after : BASE;
  const current = useGlide(target, false);
  const before = solve(BASE), now = solve(current);

  const TEX = [
    "N^S = w^{1/3}",
    "N^D:\\; w = MPN = 0.7\\,A K^{0.3} N^{-0.3}",
    `w^* = ${fmt(before.wage, 3)},\\; N^* = ${fmt(before.employment, 3)},\\; Y = ${fmt(before.output, 3)}`,
    ...(spec ? [
      `\\text{${spec.shiftLabel}}`,
      `w: ${percent(now.wage, before.wage)},\\; N: ${percent(now.employment, before.employment)},\\; Y: ${percent(now.output, before.output)}\\quad (w = ${fmt(now.wage, 3)},\\ N = ${fmt(now.employment, 3)})`,
    ] : []),
    `w = ${fmt(now.wage, 3)},\\; N = ${fmt(now.employment, 3)},\\; Y = ${fmt(now.output, 3)}`,
  ];

  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={[0.5, 0.6, 0.7, 0.8, 0.9, 1]} yTicks={[0.2, 0.4, 0.6, 0.8, 1]} xLabel="labour N" yLabel="real wage w" />];
  const plot: VNode[] = [];
  const shifted = (spec && step >= shockStep) || onExplore;
  if (shifted) {
    plot.push(<InkCurve points={curvePoints(frame, supplyWage(BASE), 0.45, 1.05, 50)} id="supply-old" color={MARKER.green} width={1.3} dashed />);
    plot.push(<InkCurve points={curvePoints(frame, demandWage(BASE), 0.45, 1.05, 50)} id="demand-old" color={MARKER.blue} width={1.3} dashed />);
  }
  plot.push(<InkCurve points={curvePoints(frame, supplyWage(current), 0.45, 1.05, 50)} id="supply" color={MARKER.green} width={2.5} draw={drawNow(0)} />);
  if (show(1)) plot.push(<InkCurve points={curvePoints(frame, demandWage(current), 0.45, 1.05, 50)} id="demand" color={MARKER.blue} width={2.5} draw={drawNow(1)} />);
  if (show(2)) {
    plot.push(<InkDashed x1={toX(now.employment)} y1={toY(now.wage)} x2={toX(now.employment)} y2={frame.bottom} id="n-guide" color={INK_SOFT} width={1.1} dash={4} gap={4} />);
    plot.push(<InkDashed x1={toX(now.employment)} y1={toY(now.wage)} x2={frame.left} y2={toY(now.wage)} id="w-guide" color={INK_SOFT} width={1.1} dash={4} gap={4} />);
  }
  drawing.push(<g clip-path={sketch.clip()}>{plot}</g>);
  drawing.push(<Note x={toX(0.97)} y={toY(supplyWage(current)(0.97)) + 4} text="Nˢ" color={MARKER.green} anchor="end" size={20} draw={drawNow(0)} />);
  if (show(1)) drawing.push(<Note x={toX(1.02)} y={toY(demandWage(current)(1.02)) - 10} text="Nᴰ" color={MARKER.blue} anchor="end" size={20} draw={drawNow(1)} />);
  if (show(2)) {
    if (shifted) drawing.push(<Dot x={toX(before.employment)} y={toY(before.wage)} color={INK_SOFT} hollow />);
    drawing.push(<Dot x={toX(now.employment)} y={toY(now.wage)} color={ACCENT} draw={drawNow(2)} />);
    drawing.push(<Note x={toX(now.employment) + 12} y={toY(now.wage) - 10} text={`(${fmt(now.employment, 3)}, ${fmt(now.wage, 3)})`} color={ACCENT} size={18} draw={drawNow(2)} />);
  }
  if (spec && step === shockStep) {
    const arrowEmployment = 0.62;
    const demandMoved = spec.after.productivity !== BASE.productivity || spec.after.capital !== BASE.capital;
    const supplyMoved = spec.after.supply !== BASE.supply;
    if (demandMoved) drawing.push(<ShiftArrow x1={toX(arrowEmployment)} y1={toY(demandWage(BASE)(arrowEmployment))} x2={toX(arrowEmployment)} y2={toY(demandWage(spec.after)(arrowEmployment))} id="demand-shift" color={MARKER.blue} draw={drawNow(shockStep)} />);
    if (supplyMoved) {
      const wageLevel = 0.75;
      drawing.push(<ShiftArrow x1={toX(BASE.supply * Math.pow(wageLevel, 1 / 3))} y1={toY(wageLevel)} x2={toX(spec.after.supply * Math.pow(wageLevel, 1 / 3))} y2={toY(wageLevel)} id="supply-shift" color={MARKER.green} draw={drawNow(shockStep)} />);
    }
  }
  if (spec && step === resultStep && spec === SCENARIOS["permanent-tfp"]) drawing.push(<Ring x={toX(now.employment)} y={toY(now.wage)} id="ring-ambiguous" color={MARKER.amber} radius={14} draw={drawNow(resultStep)} />);

  const footnote = spec?.illustrative ? "The size of the supply shift is illustrative; the question asks only for directions." : "PS 5 model: Y = A·K^0.3·N^0.7, Nˢ = w^(1/3).";
  const update = (changes: Partial<State>) => setExplore((state) => ({ ...state, ...changes }));
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} footnote={footnote}
      ariaLabel={`Labour market: equilibrium employment ${fmt(now.employment, 3)} and real wage ${fmt(now.wage, 3)}.`}
      top={scenario === "lecture-shocks" ? <Toggle label="Shock" options={[{ key: "negative", label: "Negative TFP shock" }, { key: "population", label: "Population rises" }]} active={lectureShock} onPick={(key) => { setLectureShock(key as "negative" | "population"); sketch.setStep(0); }} /> : undefined}
      explore={<div class="graph-sliders">
        <Slider label="TFP A" value={explore.productivity} min={0.25} max={0.6} step={0.01} onInput={(value) => update({ productivity: value })} />
        <Slider label="capital K" value={explore.capital} min={2} max={7} step={0.25} onInput={(value) => update({ capital: value })} />
        <Slider label="willingness to work s" value={explore.supply} min={0.8} max={1.2} step={0.02} onInput={(value) => update({ supply: value })} />
      </div>}>
      {drawing}
    </SketchGraph>
  );
}
