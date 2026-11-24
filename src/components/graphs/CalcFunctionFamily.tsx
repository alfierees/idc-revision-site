import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, useGlide, SketchGraph, SketchAxes, InkLine, Note, Dot, Slider, Presets, signed, fmt, ACCENT, MARKER, INK_MUTED } from "./sketch";
import type { Domain } from "./sketch";
import { CalcCurve, axisTicks } from "./CalcKit";

// A family of functions morphing as its parameters change (Lec 01 to 03, 06).
// Props: family = linear | quadratic | exponential | logarithm.

type Parameters = Record<string, number>;
interface ParameterSpec { key: string; label: string; min: number; max: number; step: number; }
interface Stop { values: Parameters; note: string; }
interface Family {
  domain: Domain;
  parameters: ParameterSpec[];
  stops: Stop[];
  explore: string;
  value: (values: Parameters, x: number) => number;
  tex: (values: Parameters) => string;
  from?: number;
  horizontalGuide?: (values: Parameters) => number;
  verticalGuide?: number;
  marker?: (values: Parameters) => { x: number; y: number; label: string } | null;
  presets: { label: string; values: Parameters }[];
}

const leadingCoefficient = (value: number) => (Math.abs(value - 1) < 0.005 ? "" : Math.abs(value + 1) < 0.005 ? "-" : fmt(value, 2));
const scaledPrefix = (value: number) => (Math.abs(value - 1) < 0.005 ? "" : Math.abs(value + 1) < 0.005 ? "-" : `${fmt(value, 2)}\\cdot `);
const trailing = (value: number) => (Math.abs(value) < 0.005 ? "" : ` ${signed(value, 2)}`);

const FAMILIES: Record<string, Family> = {
  linear: {
    domain: { xMin: -5, xMax: 5, yMin: -6, yMax: 6 },
    parameters: [
      { key: "a", label: "slope a", min: -3, max: 3, step: 0.25 },
      { key: "b", label: "intercept b", min: -4, max: 4, step: 0.5 },
    ],
    stops: [
      { values: { a: 1, b: 0 }, note: "A linear function: every step right changes y by the same amount." },
      { values: { a: 2.5, b: 0 }, note: "A bigger slope a makes the line steeper." },
      { values: { a: -1, b: 0 }, note: "A negative slope makes the line fall from left to right." },
      { values: { a: -1, b: 3 }, note: "The intercept b slides the whole line up or down without turning it." },
    ],
    explore: "Your turn. Set a slope and an intercept.",
    value: (values, x) => values.a * x + values.b,
    tex: (values) => `y = ${leadingCoefficient(values.a)}x${trailing(values.b)}`,
    marker: (values) => ({ x: 0, y: values.b, label: `(0, ${fmt(values.b, 1)})` }),
    presets: [{ label: "Flat", values: { a: 0, b: 2 } }, { label: "Steep up", values: { a: 3, b: -2 } }, { label: "Falling", values: { a: -2, b: 1 } }],
  },
  quadratic: {
    domain: { xMin: -6, xMax: 6, yMin: -8, yMax: 10 },
    parameters: [
      { key: "a", label: "a", min: -2, max: 2, step: 0.25 },
      { key: "b", label: "b", min: -4, max: 4, step: 0.5 },
      { key: "c", label: "c", min: -6, max: 6, step: 0.5 },
    ],
    stops: [
      { values: { a: 1, b: 0, c: 0 }, note: "The basic parabola. Its turning point is called the vertex." },
      { values: { a: 0.35, b: 0, c: 0 }, note: "A smaller a opens the parabola wider." },
      { values: { a: -1, b: 0, c: 0 }, note: "A negative a flips it: the vertex becomes a maximum." },
      { values: { a: -1, b: 2, c: 3 }, note: "b moves the vertex sideways, to x = -b/2a. c moves the y-intercept." },
    ],
    explore: "Your turn. Watch the vertex follow x = -b/2a.",
    value: (values, x) => values.a * x * x + values.b * x + values.c,
    tex: (values) => `y = ${leadingCoefficient(values.a)}x^2${Math.abs(values.b) < 0.005 ? "" : ` ${signed(values.b, 2)}x`}${trailing(values.c)}`,
    marker: (values) => {
      if (Math.abs(values.a) < 0.01) return null;
      const vertexX = -values.b / (2 * values.a);
      return { x: vertexX, y: values.a * vertexX * vertexX + values.b * vertexX + values.c, label: "vertex" };
    },
    presets: [{ label: "Maximum", values: { a: -1, b: 2, c: 3 } }, { label: "Minimum", values: { a: 1, b: -2, c: -3 } }, { label: "Becomes a line (a = 0)", values: { a: 0, b: 1, c: 1 } }],
  },
  exponential: {
    domain: { xMin: -4, xMax: 4, yMin: -6, yMax: 12 },
    parameters: [
      { key: "base", label: "base a", min: 0.2, max: 4, step: 0.1 },
      { key: "k", label: "scale k", min: -3, max: 3, step: 0.25 },
      { key: "d", label: "shift d", min: -4, max: 4, step: 0.5 },
    ],
    stops: [
      { values: { base: 2, k: 1, d: 0 }, note: "With base above 1, the function grows faster and faster. It always passes through (0, 1)." },
      { values: { base: 0.5, k: 1, d: 0 }, note: "With a base between 0 and 1, the same shape runs backwards: exponential decay." },
      { values: { base: 2, k: -1, d: 0 }, note: "A negative scale k reflects the curve across the x-axis." },
      { values: { base: 2, k: 1, d: -3 }, note: "The shift d moves the horizontal asymptote to y = d." },
    ],
    explore: "Your turn. Slide the base through 1 and watch growth turn into decay.",
    value: (values, x) => values.k * Math.pow(values.base, x) + values.d,
    tex: (values) => `y = ${scaledPrefix(values.k)}${fmt(values.base, 2)}^{x}${trailing(values.d)}`,
    horizontalGuide: (values) => values.d,
    marker: (values) => ({ x: 0, y: values.k + values.d, label: `(0, ${fmt(values.k + values.d, 2)})` }),
    presets: [{ label: "Growth", values: { base: 3, k: 1, d: 0 } }, { label: "Decay", values: { base: 0.4, k: 1, d: 0 } }, { label: "Flat (base 1)", values: { base: 1, k: 1, d: 0 } }],
  },
  logarithm: {
    domain: { xMin: -0.5, xMax: 9, yMin: -5, yMax: 5 },
    parameters: [
      { key: "base", label: "base a", min: 1.2, max: 10, step: 0.1 },
      { key: "d", label: "shift d", min: -3, max: 3, step: 0.5 },
    ],
    stops: [
      { values: { base: Math.E, d: 0 }, note: "The natural log: defined only for x > 0, with a vertical asymptote at x = 0." },
      { values: { base: 10, d: 0 }, note: "A larger base flattens the curve, but it still crosses at (1, 0)." },
      { values: { base: 1.5, d: 0 }, note: "A base close to 1 makes the curve rise steeply." },
      { values: { base: Math.E, d: 2 }, note: "Adding d shifts the curve up, and moves its x-intercept." },
    ],
    explore: "Your turn. Change the base and the shift.",
    value: (values, x) => (x <= 0 ? NaN : Math.log(x) / Math.log(values.base) + values.d),
    tex: (values) => `y = \\log_{${fmt(values.base, 2)}} x${trailing(values.d)}`,
    from: 0.015,
    verticalGuide: 0,
    marker: (values) => ({ x: Math.pow(values.base, -values.d), y: 0, label: "x-intercept" }),
    presets: [{ label: "ln x", values: { base: Math.E, d: 0 } }, { label: "log₁₀ x", values: { base: 10, d: 0 } }],
  },
};

export default function CalcFunctionFamily({ family }: { family?: string }): VNode {
  const spec = FAMILIES[family ?? "quadratic"] ?? FAMILIES.quadratic;
  const stepCount = spec.stops.length + 1;
  const [explored, setExplored] = useState<Parameters>(spec.stops[spec.stops.length - 1].values);
  const sketch = useSketch({ stepCount, domains: [spec.domain], aspect: 0.72, minHeight: 280, maxHeight: 400 });
  const { step } = sketch;
  const frame = sketch.frames[0];
  const onExplore = step === stepCount - 1;
  const target = onExplore ? explored : spec.stops[step].values;
  const shown = useGlide(target, onExplore);
  const fromX = spec.from ?? (spec.domain.xMin ?? 0);
  const guideY = spec.horizontalGuide?.(shown);
  const marker = spec.marker?.(shown) ?? null;
  const markerVisible = marker && marker.x >= frame.xMin && marker.x <= frame.xMax && marker.y >= frame.yMin && marker.y <= frame.yMax;
  const labelOnLeft = marker ? frame.x(marker.x) > (frame.left + frame.right) / 2 : false;

  return (
    <SketchGraph
      sketch={sketch}
      note={onExplore ? spec.explore : spec.stops[step].note}
      tex={spec.tex(shown)}
      ariaLabel={`Graph of ${spec.tex(shown)}`}
      explore={<>
        <div class="graph-sliders">
          {spec.parameters.map((parameter) => (
            <Slider label={parameter.label} value={Math.round(explored[parameter.key] * 100) / 100} min={parameter.min} max={parameter.max} step={parameter.step}
              onInput={(value) => setExplored((current) => ({ ...current, [parameter.key]: value }))} />
          ))}
        </div>
        <Presets presets={spec.presets.map((preset) => ({ label: preset.label, apply: () => setExplored(preset.values) }))} />
      </>}
    >
      <SketchAxes frame={frame} id="family-axes" xTicks={axisTicks(frame.xMin, frame.xMax, sketch.narrow ? 5 : 7)} yTicks={axisTicks(frame.yMin, frame.yMax)} xLabel="x" yLabel="y" />
      {guideY !== undefined && guideY >= frame.yMin && guideY <= frame.yMax && (
        <g>
          <InkLine x1={frame.left} y1={frame.y(guideY)} x2={frame.right} y2={frame.y(guideY)} id={`family-asymptote-${fmt(guideY, 1)}`} color={MARKER.amber} width={1.2} />
          <Note x={frame.left + 6} y={frame.y(guideY) - 7} text={`y = ${fmt(guideY, 1)}`} color={MARKER.amber} size={16} />
        </g>
      )}
      {spec.verticalGuide !== undefined && <InkLine x1={frame.x(spec.verticalGuide)} y1={frame.top} x2={frame.x(spec.verticalGuide)} y2={frame.bottom} id="family-vertical" color={INK_MUTED} width={1.1} />}
      <CalcCurve sketch={sketch} frame={frame} value={(x) => spec.value(shown, x)} from={fromX} to={spec.domain.xMax} id={`family-${step}`} color={ACCENT} draw={sketch.drawNow(0)} samples={140} />
      {markerVisible && marker && (
        <g>
          <Dot x={frame.x(marker.x)} y={frame.y(marker.y)} color={MARKER.blue} />
          <Note x={frame.x(marker.x) + (labelOnLeft ? -10 : 10)} y={frame.y(marker.y) - 10} text={marker.label} color={MARKER.blue} anchor={labelOnLeft ? "end" : "start"} size={16} />
        </g>
      )}
    </SketchGraph>
  );
}
