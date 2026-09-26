import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, SketchGraph, SketchAxes, InkLine, InkDashed, Note, Dot, Toggle, fmt, INK_SOFT, ACCENT, MARKER, Slider } from "./sketch";

// Identification with a supply shifter (Lecture 6, the Fulton fish market).
// Demand is fixed: P = 9 − 0.8Q. Weather shifts supply: P = s + 0.9Q with
// s = 0.5 … 4.5 as the sea gets rougher. We only ever observe equilibria; when
// only supply moves they all sit on the demand curve, so weather identifies
// demand. If demand moves too, the points no longer trace it out.

const DEMAND_INTERCEPT = 9, DEMAND_SLOPE = 0.8, SUPPLY_SLOPE = 0.9;
const SUPPLY_SHIFTS = [0.5, 1.5, 2.5, 3.5, 4.5];
const DEMAND_SHIFTS = [0.6, -0.9, 1.1, -0.4, 0.2]; // used only in "both shift"

const NOTES = [
  "One day at the fish market: we only see where supply and demand cross.",
  "Stormy weather cuts the catch: supply shifts up. Consumers don't care about the weather, so demand stays put.",
  "Every day's equilibrium lands on the same demand curve: weather traces demand out.",
  "Your turn. Change the weather, or let demand shift too and watch identification fail.",
];

export default function SupplyShiftIdentification(): VNode {
  const [weather, setWeather] = useState(2.5);
  const [scenario, setScenario] = useState<"supply" | "both">("supply");
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMax: 10, yMax: 10 }], maxWidth: 620, padding: { left: 40, bottom: 44, top: 22 } });
  const { show, drawNow, step } = sketch;
  const frame = sketch.frames[0];
  const toX = frame.x, toY = frame.y;
  const bothShift = step === 3 && scenario === "both";
  const equilibrium = (supplyIntercept: number, demandShift = 0) => {
    const quantity = (DEMAND_INTERCEPT + demandShift - supplyIntercept) / (DEMAND_SLOPE + SUPPLY_SLOPE);
    return { quantity, price: supplyIntercept + SUPPLY_SLOPE * quantity };
  };
  const days = SUPPLY_SHIFTS.map((shift, index) => ({ shift, ...equilibrium(shift, bothShift ? DEMAND_SHIFTS[index] : 0), demandShift: bothShift ? DEMAND_SHIFTS[index] : 0 }));
  const today = equilibrium(step === 3 ? weather : 2.5, 0);

  const TEX = [
    "Q^d:\\; P = 9 - 0.8Q,\\qquad Q^s:\\; P = s + 0.9Q",
    "s = 0.5,\\ 1.5,\\ \\dots,\\ 4.5 \\text{ (rougher seas)}",
    "\\text{equilibria on } P = 9 - 0.8Q \\;\\Rightarrow\\; \\text{weather is an instrument for price in demand}",
    bothShift ? "\\text{demand shifts too} \\;\\Rightarrow\\; \\text{the points no longer trace demand}" : `s = ${fmt(weather)}:\\; Q = ${fmt(today.quantity, 2)},\\; P = ${fmt(today.price, 2)}`,
  ];
  const supplyLine = (intercept: number, id: string, dashed: boolean, draw: boolean) => dashed
    ? <InkDashed x1={toX(0)} y1={toY(intercept)} x2={toX(10)} y2={toY(intercept + SUPPLY_SLOPE * 10)} id={id} color={MARKER.blue} width={1.3} draw={draw} />
    : <InkLine x1={toX(0)} y1={toY(intercept)} x2={toX(10)} y2={toY(intercept + SUPPLY_SLOPE * 10)} id={id} color={MARKER.blue} width={2} draw={draw} />;
  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={[0, 2, 4, 6, 8, 10]} yTicks={[2, 4, 6, 8, 10]} xLabel="Q" yLabel="P" />];
  const plot: VNode[] = [];
  if (bothShift) days.forEach((day, index) => plot.push(<InkDashed x1={toX(0)} y1={toY(DEMAND_INTERCEPT + day.demandShift)} x2={toX(10)} y2={toY(DEMAND_INTERCEPT + day.demandShift - DEMAND_SLOPE * 10)} id={`demand-${index}`} color={MARKER.green} width={1.2} />));
  if (!bothShift) plot.push(<InkLine x1={toX(0)} y1={toY(DEMAND_INTERCEPT)} x2={toX(10)} y2={toY(DEMAND_INTERCEPT - DEMAND_SLOPE * 10)} id="demand" color={MARKER.green} width={2.6} draw={drawNow(0)} />);
  if (step === 0) plot.push(supplyLine(2.5, "supply-today", false, drawNow(0)));
  if (show(1) && step !== 3) SUPPLY_SHIFTS.forEach((shift) => plot.push(supplyLine(shift, `supply-${shift}`, shift !== 2.5, drawNow(1) && shift !== 2.5)));
  if (step === 3) {
    SUPPLY_SHIFTS.forEach((shift) => plot.push(supplyLine(shift, `supply-faint-${shift}`, true, false)));
    if (!bothShift) plot.push(supplyLine(weather, `supply-live`, false, false));
  }
  drawing.push(<g clip-path={sketch.clip()}>{plot}</g>);
  drawing.push(<Note x={toX(9.6)} y={toY(DEMAND_INTERCEPT - DEMAND_SLOPE * 9.6) - 10} text="demand (fixed)" color={MARKER.green} anchor="end" size={17} />);
  drawing.push(<Note x={toX(5.2)} y={toY(4.5 + SUPPLY_SLOPE * 5.2) + 4} text="supply" color={MARKER.blue} size={17} />);
  if (step === 0) drawing.push(<Dot x={toX(today.quantity)} y={toY(today.price)} color={MARKER.red} draw={drawNow(0)} />);
  if (show(1)) days.forEach((day, index) => drawing.push(<Dot x={toX(day.quantity)} y={toY(day.price)} color={MARKER.red} delay={index * 200} draw={drawNow(1)} />));
  if (show(2) && step !== 3) drawing.push(<Note x={toX(days[0].quantity) + 10} y={toY(days[0].price) + 22} text="equilibria fall along demand" color={MARKER.red} size={17} draw={drawNow(2)} />);
  if (step === 3 && !bothShift) {
    drawing.push(<Dot x={toX(today.quantity)} y={toY(today.price)} color={ACCENT} radius={6} />);
    drawing.push(sketch.handle({ key: "weather", x: 0, y: weather, axis: "y", hint: "right", onDrag: (_dataX, dataY) => setWeather(Math.max(0.5, Math.min(4.5, Math.round(dataY * 4) / 4))) }));
  }
  if (bothShift) drawing.push(<Note x={toX(1)} y={frame.top + 10} text="both curves move: the dots no longer sit on one demand" color={MARKER.red} size={17} />);

  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} footnote="Illustrative curves."
      ariaLabel="Identification: supply shifts driven by weather trace out a fixed demand curve."
      explore={<>
        <Toggle label="Scenario" options={[{ key: "supply", label: "Only supply shifts" }, { key: "both", label: "Demand shifts too" }]} active={scenario} onPick={(key) => setScenario(key as "supply" | "both")} />
        {scenario === "supply" && <div class="graph-sliders"><Slider label="rough seas s" value={weather} min={0.5} max={4.5} step={0.25} onInput={setWeather} /></div>}
      </>}>
      {drawing}
    </SketchGraph>
  );
}
