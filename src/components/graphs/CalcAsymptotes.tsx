import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, useGlide, SketchGraph, SketchAxes, InkLine, Note, Dot, Slider, Presets, signed, fmt, ACCENT, MARKER } from "./sketch";
import { CalcCurve, axisTicks } from "./CalcKit";

// Lec 05 and 11: f(x) = (ax - 1)/(x - b). The denominator's root gives a vertical
// asymptote, the ratio of leading terms gives a horizontal one, and when the
// factors cancel (ab = 1) the asymptote collapses into a hole.

const X_MIN = -6, X_MAX = 8, Y_MIN = -9, Y_MAX = 12;
const NOTES = [
  "f(x) = (3x - 1)/(x - 2). Something happens at x = 2, and again far out.",
  "Near x = 2 the denominator goes to 0 while the top does not, so f blows up: a vertical asymptote.",
  "The side matters: just left of 2 the value dives to -∞, just right of 2 it shoots to +∞.",
  "Far out, the leading terms dominate: 3x/x = 3. So y = 3 is a horizontal asymptote.",
  "If the factors cancel, as with (0.5x - 1)/(x - 2), there is no asymptote at x = 2, only a hole.",
  "Your turn. Move a and b and watch both asymptotes follow.",
];

export default function CalcAsymptotes(): VNode {
  const [explored, setExplored] = useState({ a: 3, b: 2 });
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMin: X_MIN, xMax: X_MAX, yMin: Y_MIN, yMax: Y_MAX }], aspect: 0.72, minHeight: 290, maxHeight: 410 });
  const { step, show } = sketch;
  const frame = sketch.frames[0];
  const onExplore = step === NOTES.length - 1;
  const target = onExplore ? explored : step === 4 ? { a: 0.5, b: 2 } : { a: 3, b: 2 };
  const shown = useGlide(target, onExplore);
  const value = (x: number) => (shown.a * x - 1) / (x - shown.b);
  const isHole = Math.abs(shown.a * shown.b - 1) < 0.015;
  const verticalVisible = !isHole && (show(1) || onExplore);
  const horizontalVisible = show(3);
  const topTex = `${fmt(shown.a, 2)}x - 1`;
  const bottomTex = `x ${signed(-shown.b, 2)}`;
  const details = isHole ? `\\text{hole at } x = ${fmt(shown.b, 2)}` : `x = ${fmt(shown.b, 2)}`;
  const tex = `f(x) = \\frac{${topTex}}{${bottomTex}}${show(1) ? `,\\quad ${details}` : ""}${horizontalVisible ? `,\\; y = ${fmt(shown.a, 2)}` : ""}`;
  const nearLeft = shown.b - 0.28, nearRight = shown.b + 0.28;

  return (
    <SketchGraph
      sketch={sketch}
      note={NOTES[step]}
      tex={tex}
      ariaLabel={`Rational function with vertical line x = ${fmt(shown.b, 2)} and horizontal asymptote y = ${fmt(shown.a, 2)}.`}
      explore={<>
        <div class="graph-sliders">
          <Slider label="a" value={explored.a} min={-3} max={5} step={0.25} onInput={(a) => setExplored((current) => ({ ...current, a }))} />
          <Slider label="b" value={explored.b} min={-3} max={5} step={0.25} onInput={(b) => setExplored((current) => ({ ...current, b }))} />
        </div>
        <Presets presets={[{ label: "Lesson example", apply: () => setExplored({ a: 3, b: 2 }) }, { label: "Hole (ab = 1)", apply: () => setExplored({ a: 0.5, b: 2 }) }, { label: "Negative a", apply: () => setExplored({ a: -2, b: 1 }) }]} />
      </>}
    >
      <SketchAxes frame={frame} id="asymptote-axes" xTicks={axisTicks(X_MIN, X_MAX, sketch.narrow ? 5 : 7)} yTicks={axisTicks(Y_MIN, Y_MAX)} xLabel="x" yLabel="y" />
      {verticalVisible && (
        <g>
          <InkLine x1={frame.x(shown.b)} y1={frame.top} x2={frame.x(shown.b)} y2={frame.bottom} id={`vertical-${fmt(shown.b, 2)}`} color={MARKER.red} width={1.4} />
          <Note x={frame.x(shown.b) + 6} y={frame.bottom - 8} text={`x = ${fmt(shown.b, 1)}`} color={MARKER.red} size={16} />
        </g>
      )}
      {horizontalVisible && shown.a >= Y_MIN && shown.a <= Y_MAX && (
        <g>
          <InkLine x1={frame.left} y1={frame.y(shown.a)} x2={frame.right} y2={frame.y(shown.a)} id={`horizontal-${fmt(shown.a, 2)}`} color={MARKER.amber} width={1.4} />
          <Note x={frame.left + 6} y={frame.y(shown.a) - 7} text={`y = ${fmt(shown.a, 1)}`} color={MARKER.amber} size={16} />
        </g>
      )}
      <CalcCurve sketch={sketch} frame={frame} value={value} from={X_MIN} to={X_MAX} breaks={[shown.b]} id="asymptote-curve" color={ACCENT} draw={sketch.drawNow(0)} samples={220} />
      {isHole && <Dot x={frame.x(shown.b)} y={frame.y(shown.a)} color={ACCENT} hollow radius={5.5} />}
      {step === 2 && (
        <g>
          <Dot x={frame.x(nearLeft)} y={frame.y(Math.max(Y_MIN + 0.5, value(nearLeft)))} color={MARKER.blue} radius={5.5} />
          <Dot x={frame.x(nearRight)} y={frame.y(Math.min(Y_MAX - 0.5, value(nearRight)))} color={MARKER.purple} radius={5.5} />
          <Note x={frame.x(nearLeft) - 8} y={frame.bottom - 28} text="→ -∞" color={MARKER.blue} anchor="end" size={18} />
          <Note x={frame.x(nearRight) + 10} y={frame.top + 22} text="→ +∞" color={MARKER.purple} size={18} />
        </g>
      )}
    </SketchGraph>
  );
}
