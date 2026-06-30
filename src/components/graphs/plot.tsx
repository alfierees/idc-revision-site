import type { VNode } from "preact";

// Shared themed SVG toolkit for interactive economics graphs.
//
// Colour rule: structural elements (axes, gridlines, curves, text) use the
// site's --color-* tokens via CSS `style` (so they follow light/dark); shaded
// economic regions use a small fixed semantic palette with alpha so they read
// over either background.

export const PALETTE = {
  fee: "rgba(55,138,221,0.32)",      // fixed fee / consumer surplus
  feeStroke: "#378ADD",
  rent: "rgba(239,159,39,0.42)",     // information rent kept
  rentStroke: "#EF9F27",
  margin: "rgba(29,158,117,0.32)",   // per-unit margin / producer surplus
  marginStroke: "#1D9E75",
  dwl: "rgba(226,75,74,0.32)",       // deadweight loss
  dwlStroke: "#E24B4A",
  mr: "#7F77DD",                     // marginal revenue
  mc: "#8A8A8A",                     // marginal cost
};

const INK = "var(--color-ink)";
const INK_SOFT = "var(--color-ink-soft)";
const RULE = "var(--color-rule)";

export interface Frame {
  x: (q: number) => number;
  y: (p: number) => number;
  L: number; R: number; T: number; B: number;
  w: number; h: number;
  qMax: number; pMax: number;
}

export function makeFrame(o: {
  w: number; h: number; qMax: number; pMax: number;
  padL?: number; padB?: number; padT?: number; padR?: number;
}): Frame {
  const padL = o.padL ?? 46, padB = o.padB ?? 30, padT = o.padT ?? 14, padR = o.padR ?? 16;
  const L = padL, R = o.w - padR, T = padT, B = o.h - padB;
  return {
    L, R, T, B, w: o.w, h: o.h, qMax: o.qMax, pMax: o.pMax,
    x: (q) => L + (q / o.qMax) * (R - L),
    y: (p) => B - (p / o.pMax) * (B - T),
  };
}

// ---- primitives (return SVG VNodes) ----

export function area(f: Frame, pts: [number, number][], fill: string, stroke?: string): VNode {
  const points = pts.map(([q, p]) => `${f.x(q)},${f.y(p)}`).join(" ");
  return <polygon points={points} style={`fill:${fill};stroke:${stroke ?? "none"};stroke-width:1`} />;
}

export function rect(f: Frame, q0: number, p0: number, q1: number, p1: number, fill: string, stroke?: string): VNode {
  return (
    <rect
      x={f.x(q0)} y={f.y(p1)} width={f.x(q1) - f.x(q0)} height={f.y(p0) - f.y(p1)}
      style={`fill:${fill};stroke:${stroke ?? "none"};stroke-width:1`}
    />
  );
}

export function seg(f: Frame, q0: number, p0: number, q1: number, p1: number, color: string, w = 1.5, dash?: string): VNode {
  return (
    <line
      x1={f.x(q0)} y1={f.y(p0)} x2={f.x(q1)} y2={f.y(p1)}
      style={`stroke:${color};stroke-width:${w}${dash ? `;stroke-dasharray:${dash}` : ""}`}
    />
  );
}

export function label(f: Frame, q: number, p: number, s: string, color: string, anchor: "start" | "middle" | "end" = "start", size = 11, bold = false): VNode {
  return (
    <text x={f.x(q)} y={f.y(p) + 3} text-anchor={anchor} style={`font:${bold ? "600 " : ""}${size}px var(--font-ui);fill:${color}`}>{s}</text>
  );
}

// Axes with ticks. xTicks/yTicks are data values to label.
export function Axes(props: { f: Frame; xTicks: number[]; yTicks: number[]; xLabel?: string; yLabel?: string }): VNode {
  const { f, xTicks, yTicks, xLabel, yLabel } = props;
  return (
    <g>
      <line x1={f.L} y1={f.B} x2={f.R} y2={f.B} style={`stroke:${INK_SOFT};stroke-width:1`} />
      <line x1={f.L} y1={f.T} x2={f.L} y2={f.B} style={`stroke:${INK_SOFT};stroke-width:1`} />
      {xTicks.map((q) => (
        <text x={f.x(q)} y={f.B + 15} text-anchor="middle" style={`font:11px var(--font-ui);fill:${INK_SOFT}`}>{q}</text>
      ))}
      {yTicks.map((p) => (
        <text x={f.L - 6} y={f.y(p) + 3} text-anchor="end" style={`font:11px var(--font-ui);fill:${INK_SOFT}`}>{p}</text>
      ))}
      {xLabel && <text x={(f.L + f.R) / 2} y={f.B + 28} text-anchor="middle" style={`font:11px var(--font-ui);fill:${INK_SOFT}`}>{xLabel}</text>}
      {yLabel && <text x={f.L + 4} y={f.T - 4} text-anchor="start" style={`font:11px var(--font-ui);fill:${INK_SOFT}`}>{yLabel}</text>}
    </g>
  );
}

// Evenly-spaced rounded axis ticks 0..max.
export function ticks(max: number, n = 4): number[] {
  return Array.from({ length: n + 1 }, (_, i) => Math.round((max * i) / n));
}

// Labelled range slider for graph parameters.
export function Slider(props: {
  label: string; value: number; min: number; max: number; step: number;
  onInput: (v: number) => void; suffix?: string;
}): VNode {
  return (
    <label class="graph-slider">
      <span class="graph-slider-lab">{props.label}</span>
      <input
        type="range" min={props.min} max={props.max} step={props.step} value={props.value}
        onInput={(e) => props.onInput(Number((e.currentTarget as HTMLInputElement).value))}
      />
      <span class="graph-slider-val">{props.value}{props.suffix ?? ""}</span>
    </label>
  );
}

// Re-export common token colours for components.
export const C = { INK, INK_SOFT, RULE, ACCENT: "var(--color-accent)" };
