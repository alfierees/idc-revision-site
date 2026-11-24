import type { VNode } from "preact";
import { InkCurve, curvePoints, niceTicks } from "./sketch";
import type { Domain, Frame, Sketch } from "./sketch";

// Private helpers for the Maths A calculus explainers (the Calc* graphs): a small
// catalogue of the course's functions with exact derivatives, and curve drawing
// that breaks cleanly at holes and vertical asymptotes.

export interface CalcFunction {
  tex: string;
  derivativeTex: string;
  secondDerivativeTex: string;
  value: (x: number) => number;
  derivative: (x: number) => number;
  secondDerivative: (x: number) => number;
  domain: Domain;
  derivativeRange: [number, number];
  breaks?: number[];
  start: number;
  criticalPoints?: number[];
  inflectionPoints?: number[];
}

export const CALC_FUNCTIONS: Record<string, CalcFunction> = {
  // Lec 06: the tangent to x^2 + 1 at x = -3
  parabola: {
    tex: "x^2 + 1", derivativeTex: "2x", secondDerivativeTex: "2",
    value: (x) => x * x + 1, derivative: (x) => 2 * x, secondDerivative: () => 2,
    domain: { xMin: -4, xMax: 4, yMin: -2, yMax: 17 }, derivativeRange: [-8, 8], start: -3, criticalPoints: [0],
  },
  // Lec 07: the square root and its tangent at x = 4
  sqrt: {
    tex: "\\sqrt{x}", derivativeTex: "\\frac{1}{2\\sqrt{x}}", secondDerivativeTex: "-\\frac{1}{4x^{3/2}}",
    value: (x) => (x < 0 ? NaN : Math.sqrt(x)), derivative: (x) => (x <= 0 ? NaN : 1 / (2 * Math.sqrt(x))),
    secondDerivative: (x) => (x <= 0 ? NaN : -1 / (4 * Math.pow(x, 1.5))),
    domain: { xMin: 0, xMax: 9, yMin: -0.5, yMax: 3.5 }, derivativeRange: [0, 2], start: 4,
  },
  cubic: {
    tex: "x^3 - 3x", derivativeTex: "3x^2 - 3", secondDerivativeTex: "6x",
    value: (x) => x ** 3 - 3 * x, derivative: (x) => 3 * x * x - 3, secondDerivative: (x) => 6 * x,
    domain: { xMin: -2.6, xMax: 2.6, yMin: -6, yMax: 6 }, derivativeRange: [-4, 12], start: -1.8,
    criticalPoints: [-1, 1], inflectionPoints: [0],
  },
  // PS 10: the W-shaped quartic with three critical points
  quartic: {
    tex: "x^4 - 8x^2", derivativeTex: "4x^3 - 16x", secondDerivativeTex: "12x^2 - 16",
    value: (x) => x ** 4 - 8 * x * x, derivative: (x) => 4 * x ** 3 - 16 * x, secondDerivative: (x) => 12 * x * x - 16,
    domain: { xMin: -3.2, xMax: 3.2, yMin: -19, yMax: 14 }, derivativeRange: [-40, 40], start: -2.8,
    criticalPoints: [-2, 0, 2], inflectionPoints: [-2 / Math.sqrt(3), 2 / Math.sqrt(3)],
  },
  exponential: {
    tex: "e^x", derivativeTex: "e^x", secondDerivativeTex: "e^x",
    value: Math.exp, derivative: Math.exp, secondDerivative: Math.exp,
    domain: { xMin: -3, xMax: 2.4, yMin: -1, yMax: 11 }, derivativeRange: [-1, 11], start: 0,
  },
  logarithm: {
    tex: "\\ln x", derivativeTex: "\\frac{1}{x}", secondDerivativeTex: "-\\frac{1}{x^2}",
    value: (x) => (x <= 0 ? NaN : Math.log(x)), derivative: (x) => (x <= 0 ? NaN : 1 / x),
    secondDerivative: (x) => (x <= 0 ? NaN : -1 / (x * x)),
    domain: { xMin: 0, xMax: 8, yMin: -3, yMax: 3 }, derivativeRange: [0, 4], start: 1,
  },
  // PP 01: a rational function with a vertical asymptote at x = 2
  rational: {
    tex: "\\frac{x^2}{x-2}", derivativeTex: "\\frac{x(x-4)}{(x-2)^2}", secondDerivativeTex: "\\frac{8}{(x-2)^3}",
    value: (x) => (x === 2 ? NaN : (x * x) / (x - 2)),
    derivative: (x) => (x === 2 ? NaN : (x * (x - 4)) / (x - 2) ** 2),
    secondDerivative: (x) => (x === 2 ? NaN : 8 / (x - 2) ** 3),
    domain: { xMin: -4, xMax: 9, yMin: -10, yMax: 18 }, derivativeRange: [-6, 3], breaks: [2], start: 5.5, criticalPoints: [0, 4],
  },
  // PP 19: the bell-shaped curve with two inflection points
  bell: {
    tex: "\\frac{1}{\\sqrt{x^2+2}}", derivativeTex: "\\frac{-x}{(x^2+2)^{3/2}}", secondDerivativeTex: "\\frac{2x^2-2}{(x^2+2)^{5/2}}",
    value: (x) => 1 / Math.sqrt(x * x + 2), derivative: (x) => -x / Math.pow(x * x + 2, 1.5),
    secondDerivative: (x) => (2 * x * x - 2) / Math.pow(x * x + 2, 2.5),
    domain: { xMin: -4, xMax: 4, yMin: -0.1, yMax: 0.85 }, derivativeRange: [-0.25, 0.25], start: -2.6,
    criticalPoints: [0], inflectionPoints: [-1, 1],
  },
};

export function pickFunction(key: unknown, fallback: string): CalcFunction {
  return CALC_FUNCTIONS[String(key)] ?? CALC_FUNCTIONS[fallback];
}

export const axisTicks = (min: number, max: number, count = 5) => niceTicks(min, max, count);

// Keep a dragged x inside the plot and off any asymptote.
export function clampAwayFromBreaks(x: number, fn: CalcFunction, margin = 0.08): number {
  const low = (fn.domain.xMin ?? 0) + (fn.domain.xMin === 0 ? 0.08 : 0);
  const high = fn.domain.xMax;
  let clamped = Math.max(low, Math.min(high, x));
  for (const breakPoint of fn.breaks ?? []) {
    if (Math.abs(clamped - breakPoint) < margin) clamped = breakPoint + (clamped < breakPoint ? -margin : margin);
  }
  return clamped;
}

// One clipped curve, drawn as separate strokes either side of each break.
export function CalcCurve(props: {
  sketch: Sketch; frame: Frame; panel?: number;
  value: (x: number) => number; from: number; to: number;
  breaks?: number[]; id: string; color: string; width?: number; draw?: boolean; dashed?: boolean; samples?: number;
}): VNode {
  const inner = (props.breaks ?? []).filter((point) => point > props.from && point < props.to).sort((first, second) => first - second);
  const edges = [props.from, ...inner, props.to];
  const span = props.to - props.from;
  const gap = inner.length ? span * 0.002 : 0;
  const pieces: VNode[] = [];
  for (let index = 0; index < edges.length - 1; index++) {
    const start = edges[index] + (index > 0 ? gap : 0);
    const end = edges[index + 1] - (index < edges.length - 2 ? gap : 0);
    const share = (end - start) / span;
    const samples = Math.max(16, Math.round((props.samples ?? 120) * share));
    pieces.push(
      <InkCurve points={curvePoints(props.frame, props.value, start, end, samples)} id={`${props.id}-${index}`} color={props.color} width={props.width ?? 2.4} draw={props.draw} dashed={props.dashed} />,
    );
  }
  return <g clip-path={props.sketch.clip(props.panel ?? 0)}>{pieces}</g>;
}

// A straight line through (x0, y0) with the given slope, clipped to the plot.
export function CalcLine(props: {
  sketch: Sketch; frame: Frame; panel?: number; x0: number; y0: number; slope: number; id: string; color: string; width?: number; draw?: boolean; dashed?: boolean;
}): VNode {
  const { frame } = props;
  const line = (x: number) => props.y0 + props.slope * (x - props.x0);
  const points: [number, number][] = [[frame.x(frame.xMin), frame.y(line(frame.xMin))], [frame.x(frame.xMax), frame.y(line(frame.xMax))]];
  return <g clip-path={props.sketch.clip(props.panel ?? 0)}><InkCurve points={points} id={props.id} color={props.color} width={props.width ?? 2} draw={props.draw} dashed={props.dashed} /></g>;
}

// Texts for a signed number with a fixed look in equations.
export const texNumber = (value: number, decimals = 2): string => {
  if (!Number.isFinite(value)) return value > 0 ? "\\infty" : "-\\infty";
  const factor = Math.pow(10, decimals);
  const rounded = Math.round(value * factor) / factor;
  return String(Object.is(rounded, -0) ? 0 : rounded);
};
