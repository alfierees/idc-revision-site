import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, useGlide, SketchGraph, SketchAxes, InkLine, InkDashed, Note, Dot, Slider, Presets, fmt, ACCENT, MARKER, INK_SOFT } from "./sketch";
import { CalcCurve, axisTicks } from "./CalcKit";

// Lec 06: (1 + k/x)^x climbs toward e^k. With k = 1 it is the definition of e,
// the "1^∞" form that cannot be settled by substitution.

const X_MAX = 40, Y_MAX = 8;
const value = (x: number, growth: number) => Math.pow(1 + growth / x, x);
const STOPS = [
  { x: 1, note: "At x = 1, (1 + 1/1)¹ = 2." },
  { x: 2, note: "At x = 2 the base is smaller, but the power is bigger. The result is 2.25." },
  { x: 8, note: "The base heads to 1 and the power heads to ∞. That is the undecided form 1^∞." },
  { x: 40, note: "The two effects balance, and the value settles at e ≈ 2.718." },
];
const NOTE_K = "Your turn. Change k too: (1 + k/x)^x heads to e^k.";

export default function CalcEulerLimit(): VNode {
  const [explored, setExplored] = useState({ x: 12, growth: 1 });
  const stepCount = STOPS.length + 1;
  const sketch = useSketch({ stepCount, domains: [{ xMin: 0, xMax: X_MAX, yMin: 0, yMax: Y_MAX }], aspect: 0.66, minHeight: 270, maxHeight: 380 });
  const { step } = sketch;
  const frame = sketch.frames[0];
  const onExplore = step === stepCount - 1;
  const target = onExplore ? explored : { x: STOPS[step].x, growth: 1 };
  const shown = useGlide(target, onExplore);
  const limitValue = Math.exp(shown.growth);
  const currentValue = value(shown.x, shown.growth);
  const pointY = Math.min(Y_MAX, currentValue);
  const tex = `\\left(1 + \\frac{${fmt(shown.growth, 2)}}{${fmt(shown.x, 1)}}\\right)^{${fmt(shown.x, 1)}} = ${fmt(currentValue, 4)},\\quad e^{${fmt(shown.growth, 2)}} = ${fmt(limitValue, 4)}`;

  return (
    <SketchGraph
      sketch={sketch}
      note={onExplore ? NOTE_K : STOPS[step].note}
      tex={tex}
      ariaLabel={`At x = ${fmt(shown.x, 1)} the value is ${fmt(currentValue, 3)}, approaching ${fmt(limitValue, 3)}.`}
      explore={<>
        <div class="graph-sliders">
          <Slider label="x" value={explored.x} min={1} max={40} step={1} onInput={(x) => setExplored((current) => ({ ...current, x }))} />
          <Slider label="k" value={explored.growth} min={-1} max={2} step={0.25} onInput={(growth) => setExplored((current) => ({ ...current, growth }))} />
        </div>
        <Presets presets={[{ label: "k = 1 (e)", apply: () => setExplored((current) => ({ ...current, growth: 1 })) }, { label: "k = 2 (e²)", apply: () => setExplored((current) => ({ ...current, growth: 2 })) }, { label: "k = -1 (1/e)", apply: () => setExplored((current) => ({ ...current, growth: -1 })) }]} />
      </>}
    >
      <SketchAxes frame={frame} id="euler-axes" xTicks={axisTicks(0, X_MAX, 5)} yTicks={axisTicks(0, Y_MAX, 4)} xLabel="x" yLabel="y" hideZero={false} />
      <InkLine x1={frame.left} y1={frame.y(limitValue)} x2={frame.right} y2={frame.y(limitValue)} id={`euler-limit-${fmt(shown.growth, 2)}`} color={MARKER.green} width={1.5} />
      <Note x={frame.right - 4} y={frame.y(limitValue) - 8} text={shown.growth === 1 ? "y = e" : `y = ${fmt(limitValue, 2)}`} color={MARKER.green} anchor="end" size={17} />
      <CalcCurve sketch={sketch} frame={frame} value={(x) => value(x, shown.growth)} from={Math.max(0.25, -shown.growth + 0.05)} to={X_MAX} id="euler-curve" color={ACCENT} draw={sketch.drawNow(0)} samples={150} />
      <InkDashed x1={frame.x(shown.x)} y1={frame.y(pointY)} x2={frame.x(shown.x)} y2={frame.bottom} id={`euler-drop-${fmt(shown.x, 1)}`} color={INK_SOFT} width={1.1} />
      <Dot x={frame.x(shown.x)} y={frame.y(pointY)} color={MARKER.blue} radius={5.5} />
      <Note x={frame.x(shown.x) + (shown.x > 28 ? -8 : 8)} y={frame.y(pointY) + 23} text={fmt(currentValue, 3)} color={MARKER.blue} anchor={shown.x > 28 ? "end" : "start"} size={18} />
    </SketchGraph>
  );
}
