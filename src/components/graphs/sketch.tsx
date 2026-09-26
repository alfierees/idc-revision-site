import { useEffect, useRef, useState } from "preact/hooks";
import type { VNode, ComponentChildren, RefObject } from "preact";
import katex from "katex";

// "Sketch & explain" toolkit: the whiteboard look (wobbly double-stroke ink,
// pen hatching, handwritten notes) plus the maths-explainer mechanics (live
// equations, step-by-step build-up, smooth parameter glides, draggable handles).
//
// Motion follows the site's UI direction: nothing animates on scroll or load.
// Ink draws on only when the reader steps forward, parameters glide only after
// a click, and prefers-reduced-motion switches every animation off (CSS).
//
// Everything is drawn in real pixels: the SVG is sized to its measured width,
// so text stays the same size on a phone and on a wide desktop column.
//
// A graph component typically:
//   const sketch = useSketch({ stepCount: 5, domains: [{ xMax: 100, yMax: 100 }] });
//   const frame = sketch.frames[0];
//   return <SketchGraph sketch={sketch} note={...} tex={...} ariaLabel={...}>{drawing}</SketchGraph>;

// ---------------------------------------------------------------------------
// Colours shared by every sketch graph (fixed semantic hues read on paper).
// ---------------------------------------------------------------------------
export const INK = "var(--color-ink)";
export const INK_SOFT = "var(--color-ink-soft)";
export const INK_MUTED = "var(--color-ink-muted)";
export const ACCENT = "var(--color-accent)";
export const MARKER = {
  blue: "#378ADD",
  green: "#1D9E75",
  red: "#E24B4A",
  amber: "#D98A1C",
  purple: "#7F77DD",
  grey: "#8A8A8A",
};
export const WASH = {
  blue: "rgba(55,138,221,0.14)",
  green: "rgba(29,158,117,0.14)",
  red: "rgba(226,75,74,0.16)",
  amber: "rgba(239,159,39,0.18)",
  purple: "rgba(127,119,221,0.14)",
  grey: "rgba(138,138,138,0.12)",
};

// ---------------------------------------------------------------------------
// Seeded randomness: the same element wobbles the same way on every render,
// so dragging a curve moves it without the ink jittering.
// ---------------------------------------------------------------------------
export function seededRandom(seed: number): () => number {
  let state = seed | 0;
  return () => {
    state = (state + 0x6d2b79f5) | 0;
    let mixed = Math.imul(state ^ (state >>> 15), 1 | state);
    mixed = (mixed + Math.imul(mixed ^ (mixed >>> 7), 61 | mixed)) ^ mixed;
    return ((mixed ^ (mixed >>> 14)) >>> 0) / 4294967296;
  };
}
export function hashString(text: string): number {
  let hashValue = 2166136261;
  for (let index = 0; index < text.length; index++) hashValue = Math.imul(hashValue ^ text.charCodeAt(index), 16777619);
  return hashValue >>> 0;
}
const toFixed1 = (value: number) => value.toFixed(1);

// Page-unique ids for SVG clip paths. Every graph is mounted as its own Preact
// root, so preact's useId() repeats across graphs on one page; a module-level
// counter never does.
let uniqueIdCounter = 0;
function useUniqueId(prefix: string): string {
  const ref = useRef<string | null>(null);
  if (ref.current === null) ref.current = `${prefix}${++uniqueIdCounter}`;
  return ref.current;
}

// ---------------------------------------------------------------------------
// Plot frames: map data values to pixels (and back, for dragging).
// ---------------------------------------------------------------------------
export interface Domain { xMin?: number; xMax: number; yMin?: number; yMax: number; }
export interface Padding { left: number; right: number; top: number; bottom: number; }
export interface Frame {
  x: (dataX: number) => number;
  y: (dataY: number) => number;
  dataX: (pixelX: number) => number;
  dataY: (pixelY: number) => number;
  left: number; right: number; top: number; bottom: number;
  xMin: number; xMax: number; yMin: number; yMax: number;
  boxLeft: number; boxTop: number;
}

function buildFrame(box: { left: number; top: number; width: number; height: number }, domain: Domain, padding: Padding): Frame {
  const xMin = domain.xMin ?? 0, yMin = domain.yMin ?? 0;
  const left = box.left + padding.left, right = box.left + box.width - padding.right;
  const top = box.top + padding.top, bottom = box.top + box.height - padding.bottom;
  const xSpan = domain.xMax - xMin || 1, ySpan = domain.yMax - yMin || 1;
  return {
    left, right, top, bottom, xMin, xMax: domain.xMax, yMin, yMax: domain.yMax,
    boxLeft: box.left, boxTop: box.top,
    x: (dataX) => left + ((dataX - xMin) / xSpan) * (right - left),
    y: (dataY) => bottom - ((dataY - yMin) / ySpan) * (bottom - top),
    dataX: (pixelX) => xMin + ((pixelX - left) / (right - left)) * xSpan,
    dataY: (pixelY) => yMin + ((bottom - pixelY) / (bottom - top)) * ySpan,
  };
}

// Round-number ticks (1, 2, 5 × 10^k) spanning [min, max].
export function niceTicks(min: number, max: number, maxCount = 6): number[] {
  const span = max - min;
  if (span <= 0) return [min];
  const rough = span / Math.max(1, maxCount);
  const magnitude = Math.pow(10, Math.floor(Math.log10(rough)));
  const step = [1, 2, 2.5, 5, 10].map((m) => m * magnitude).find((candidate) => span / candidate <= maxCount) ?? 10 * magnitude;
  const first = Math.ceil(min / step - 1e-9) * step;
  const ticks: number[] = [];
  for (let value = first; value <= max + step * 1e-6; value += step) ticks.push(Math.round(value / step) * step);
  return ticks.map((value) => Number(value.toPrecision(12)));
}

// Smallest round number (on the 1-2-5 tick ladder) at or above `value`.
export function niceCeil(value: number, tickCount = 5): number {
  if (value <= 0) return 1;
  const ticks = niceTicks(0, value, tickCount);
  const step = ticks.length > 1 ? ticks[1] - ticks[0] : value;
  return Math.ceil(value / step - 1e-9) * step;
}

// ---------------------------------------------------------------------------
// Ink primitives
// ---------------------------------------------------------------------------

// Two slightly different hand-drawn passes of one straight stroke.
export function roughLine(x1: number, y1: number, x2: number, y2: number, id: string, amplitude = 1.1): [string, string] {
  const random = seededRandom(hashString(id));
  const length = Math.hypot(x2 - x1, y2 - y1) || 1;
  const normalX = -(y2 - y1) / length, normalY = (x2 - x1) / length;
  const pass = (): string => {
    const jitter = () => (random() - 0.5) * 2 * amplitude;
    const bow = (random() - 0.5) * Math.min(length * 0.018, 5);
    const midX = (x1 + x2) / 2 + normalX * bow, midY = (y1 + y2) / 2 + normalY * bow;
    return `M${toFixed1(x1 + jitter())},${toFixed1(y1 + jitter())} Q${toFixed1(midX + jitter())},${toFixed1(midY + jitter())} ${toFixed1(x2 + jitter())},${toFixed1(y2 + jitter())}`;
  };
  return [pass(), pass()];
}

// Smooth hand-drawn path through pixel points (Catmull-Rom → cubic Béziers).
export function roughCurve(points: [number, number][], id: string, amplitude = 0.9): [string, string] {
  const random = seededRandom(hashString(id));
  const pass = (): string => {
    if (points.length < 2) return "";
    const wobbly = points.map(([px, py]) => [px + (random() - 0.5) * amplitude, py + (random() - 0.5) * amplitude] as [number, number]);
    let path = `M${toFixed1(wobbly[0][0])},${toFixed1(wobbly[0][1])}`;
    for (let index = 0; index < wobbly.length - 1; index++) {
      const previous = wobbly[Math.max(0, index - 1)], current = wobbly[index];
      const next = wobbly[index + 1], afterNext = wobbly[Math.min(wobbly.length - 1, index + 2)];
      const control1X = current[0] + (next[0] - previous[0]) / 6, control1Y = current[1] + (next[1] - previous[1]) / 6;
      const control2X = next[0] - (afterNext[0] - current[0]) / 6, control2Y = next[1] - (afterNext[1] - current[1]) / 6;
      path += ` C${toFixed1(control1X)},${toFixed1(control1Y)} ${toFixed1(control2X)},${toFixed1(control2Y)} ${toFixed1(next[0])},${toFixed1(next[1])}`;
    }
    return path;
  };
  return [pass(), pass()];
}

interface InkProps { paths: [string, string]; color: string; width?: number; delay?: number; duration?: number; draw?: boolean; dashed?: boolean; }

// A double pass of pen. `draw` makes the strokes draw themselves on.
// Dashed ink can't use the dash-offset trick, so it fades in instead.
export function Ink({ paths, color, width = 2, delay = 0, duration = 650, draw, dashed }: InkProps): VNode {
  const dash = dashed ? ";stroke-dasharray:7 6" : "";
  const animationClass = draw ? (dashed ? "sk-fade" : "sk-draw") : undefined;
  return (
    <g class={animationClass} style={`--d:${delay}ms;--dur:${duration}ms`}>
      <path d={paths[0]} pathLength={dashed ? undefined : 1} style={`fill:none;stroke:${color};stroke-width:${width};stroke-linecap:round${dash}`} />
      <path d={paths[1]} pathLength={dashed ? undefined : 1} style={`fill:none;stroke:${color};stroke-width:${width * 0.55};stroke-linecap:round;opacity:0.55${dash}`} />
    </g>
  );
}

export function InkLine(props: { x1: number; y1: number; x2: number; y2: number; id: string; color: string; width?: number; delay?: number; duration?: number; draw?: boolean }): VNode {
  return <Ink paths={roughLine(props.x1, props.y1, props.x2, props.y2, props.id)} color={props.color} width={props.width} delay={props.delay} duration={props.duration} draw={props.draw} />;
}

export function InkCurve(props: { points: [number, number][]; id: string; color: string; width?: number; delay?: number; duration?: number; draw?: boolean; dashed?: boolean }): VNode | null {
  if (props.points.length < 2) return null;
  return <Ink paths={roughCurve(props.points, props.id)} color={props.color} width={props.width} delay={props.delay} duration={props.duration ?? 900} draw={props.draw} dashed={props.dashed} />;
}

// Sample y = fn(x) across [fromX, toX] into pixel points, dropping points far off the plot.
export function curvePoints(frame: Frame, fn: (dataX: number) => number, fromX: number, toX: number, samples = 64): [number, number][] {
  const points: [number, number][] = [];
  const ySpan = frame.yMax - frame.yMin;
  for (let index = 0; index <= samples; index++) {
    const dataX = fromX + ((toX - fromX) * index) / samples;
    const dataY = fn(dataX);
    if (!Number.isFinite(dataY)) continue;
    const clampedY = Math.max(frame.yMin - ySpan * 0.5, Math.min(frame.yMax + ySpan * 0.5, dataY));
    points.push([frame.x(dataX), frame.y(clampedY)]);
  }
  return points;
}

// Hand-drawn dashes, each its own little stroke, drawn on one after another.
export function InkDashed(props: { x1: number; y1: number; x2: number; y2: number; id: string; color: string; width?: number; dash?: number; gap?: number; delay?: number; draw?: boolean }): VNode {
  const length = Math.hypot(props.x2 - props.x1, props.y2 - props.y1);
  const dash = props.dash ?? 9, gap = props.gap ?? 6;
  const count = Math.max(1, Math.floor((length + gap) / (dash + gap)));
  const unitX = (props.x2 - props.x1) / (length || 1), unitY = (props.y2 - props.y1) / (length || 1);
  const random = seededRandom(hashString(props.id));
  const dashes: VNode[] = [];
  for (let index = 0; index < count; index++) {
    const start = index * (dash + gap), end = Math.min(length, start + dash);
    const jitter = () => (random() - 0.5) * 1.2;
    const path = `M${toFixed1(props.x1 + unitX * start + jitter())},${toFixed1(props.y1 + unitY * start + jitter())} L${toFixed1(props.x1 + unitX * end + jitter())},${toFixed1(props.y1 + unitY * end + jitter())}`;
    dashes.push(
      <path d={path} pathLength={1} style={`fill:none;stroke:${props.color};stroke-width:${props.width ?? 1.8};stroke-linecap:round;--d:${(props.delay ?? 0) + index * 22}ms;--dur:160ms`} />,
    );
  }
  return <g class={props.draw ? "sk-draw" : undefined}>{dashes}</g>;
}

// A polygon filled with a light wash plus diagonal pen hatching, clipped to shape.
export function Hatch(props: { points: [number, number][]; id: string; wash: string; ink: string; gap?: number; angle?: 1 | -1; delay?: number; draw?: boolean }): VNode | null {
  const clipId = useUniqueId("skc"); // hooks before any early return
  if (props.points.length < 3) return null;
  const xs = props.points.map((point) => point[0]), ys = props.points.map((point) => point[1]);
  const minX = Math.min(...xs), maxX = Math.max(...xs), minY = Math.min(...ys), maxY = Math.max(...ys);
  if (maxX - minX < 1 || maxY - minY < 1) return null;
  const gap = props.gap ?? 7, direction = props.angle ?? 1;
  const random = seededRandom(hashString(props.id));
  const polygon = props.points.map((point) => `${toFixed1(point[0])},${toFixed1(point[1])}`).join(" ");
  const height = maxY - minY;
  const strokes: VNode[] = [];
  let strokeIndex = 0;
  for (let offset = minX - height; offset <= maxX; offset += gap, strokeIndex++) {
    const jitter = () => (random() - 0.5) * 1.4;
    const [startX, endX] = direction > 0 ? [offset, offset + height] : [offset + height, offset];
    strokes.push(
      <path
        d={`M${toFixed1(startX + jitter())},${toFixed1(maxY + jitter())} L${toFixed1(endX + jitter())},${toFixed1(minY + jitter())}`}
        pathLength={1}
        style={`fill:none;stroke:${props.ink};stroke-width:1.1;opacity:0.7;--d:${(props.delay ?? 0) + Math.min(strokeIndex, 40) * 14}ms;--dur:220ms`}
      />,
    );
  }
  return (
    <g>
      <clipPath id={clipId}><polygon points={polygon} /></clipPath>
      <polygon points={polygon} class={props.draw ? "sk-fade" : undefined} style={`fill:${props.wash};stroke:none;--d:${props.delay ?? 0}ms`} />
      <g clip-path={`url(#${clipId})`} class={props.draw ? "sk-draw" : undefined}>{strokes}</g>
    </g>
  );
}

// A hatched bar from y = baseline to y = value, between data xs.
export function InkBar(props: { frame: Frame; fromX: number; toX: number; value: number; baseline?: number; id: string; color: string; wash: string; delay?: number; draw?: boolean }): VNode {
  const { frame } = props;
  const baseline = props.baseline ?? 0;
  const left = frame.x(props.fromX), right = frame.x(props.toX);
  const top = frame.y(Math.max(props.value, baseline)), bottom = frame.y(Math.min(props.value, baseline));
  return (
    <g>
      <Hatch points={[[left, top], [right, top], [right, bottom], [left, bottom]]} id={`${props.id}-fill`} wash={props.wash} ink={props.color} delay={props.delay} draw={props.draw} />
      <InkLine x1={left} y1={bottom} x2={left} y2={top} id={`${props.id}-l`} color={props.color} width={1.6} delay={props.delay} duration={300} draw={props.draw} />
      <InkLine x1={left} y1={top} x2={right} y2={top} id={`${props.id}-t`} color={props.color} width={1.6} delay={(props.delay ?? 0) + 200} duration={300} draw={props.draw} />
      <InkLine x1={right} y1={top} x2={right} y2={bottom} id={`${props.id}-r`} color={props.color} width={1.6} delay={(props.delay ?? 0) + 400} duration={300} draw={props.draw} />
    </g>
  );
}

// Handwritten label. `size` in px, already screen-sized. A paper-coloured halo
// keeps it legible over hatching and lines.
export function Note(props: { x: number; y: number; text: string; color: string; size?: number; anchor?: "start" | "middle" | "end"; delay?: number; draw?: boolean }): VNode {
  return (
    <text
      x={props.x} y={props.y} text-anchor={props.anchor ?? "start"}
      class={props.draw ? "sk-fade" : undefined}
      style={`font:700 ${props.size ?? 19}px var(--font-hand);fill:${props.color};paint-order:stroke;stroke:var(--color-card);stroke-width:4px;stroke-linejoin:round;--d:${props.delay ?? 0}ms`}
    >
      {props.text}
    </text>
  );
}

// Curved hand-drawn arrow from (x1,y1) to (x2,y2).
export function Arrow(props: { x1: number; y1: number; x2: number; y2: number; id: string; color: string; bend?: number; delay?: number; draw?: boolean }): VNode {
  const random = seededRandom(hashString(props.id));
  const bend = props.bend ?? 18;
  const midX = (props.x1 + props.x2) / 2 + bend, midY = (props.y1 + props.y2) / 2 - bend * 0.4;
  const angle = Math.atan2(props.y2 - midY, props.x2 - midX);
  const head = (side: number) => {
    const wingAngle = angle + side * 0.45 + (random() - 0.5) * 0.1;
    return `M${props.x2},${props.y2} L${toFixed1(props.x2 - 10 * Math.cos(wingAngle))},${toFixed1(props.y2 - 10 * Math.sin(wingAngle))}`;
  };
  const strokeStyle = `fill:none;stroke:${props.color};stroke-width:1.8;stroke-linecap:round`;
  const delay = props.delay ?? 0;
  return (
    <g class={props.draw ? "sk-draw" : undefined} style={`--d:${delay}ms;--dur:420ms`}>
      <path d={`M${props.x1},${props.y1} Q${toFixed1(midX)},${toFixed1(midY)} ${props.x2},${props.y2}`} pathLength={1} style={strokeStyle} />
      <path d={head(1)} pathLength={1} style={`${strokeStyle};--d:${delay + 380}ms;--dur:120ms`} />
      <path d={head(-1)} pathLength={1} style={`${strokeStyle};--d:${delay + 380}ms;--dur:120ms`} />
    </g>
  );
}

// Straight shift arrow (for "the curve moves this way").
export function ShiftArrow(props: { x1: number; y1: number; x2: number; y2: number; id: string; color: string; delay?: number; draw?: boolean }): VNode {
  return <Arrow {...props} bend={0} />;
}

// Hand-drawn ring around a point, for "look here" moments.
export function Ring(props: { x: number; y: number; radius?: number; id: string; color: string; delay?: number; draw?: boolean }): VNode {
  const random = seededRandom(hashString(props.id));
  const radius = props.radius ?? 11;
  const points: string[] = [];
  const startAngle = random() * Math.PI * 2;
  for (let index = 0; index <= 26; index++) {
    const angle = startAngle + (index / 24) * Math.PI * 2;
    const wobbleRadius = radius + (random() - 0.5) * 1.6 + index * 0.06;
    points.push(`${toFixed1(props.x + wobbleRadius * Math.cos(angle))},${toFixed1(props.y + wobbleRadius * Math.sin(angle) * 0.9)}`);
  }
  return (
    <g class={props.draw ? "sk-draw" : undefined} style={`--d:${props.delay ?? 0}ms;--dur:500ms`}>
      <path d={`M${points.join(" L")}`} pathLength={1} style={`fill:none;stroke:${props.color};stroke-width:1.8;stroke-linecap:round`} />
    </g>
  );
}

// Solid marker dot with a thin paper ring so it reads on top of lines.
export function Dot(props: { x: number; y: number; color: string; radius?: number; hollow?: boolean; delay?: number; draw?: boolean }): VNode {
  const radius = props.radius ?? 4.5;
  return (
    <circle
      cx={props.x} cy={props.y} r={radius}
      class={props.draw ? "sk-fade" : undefined}
      style={props.hollow
        ? `fill:var(--color-card);stroke:${props.color};stroke-width:2;--d:${props.delay ?? 0}ms`
        : `fill:${props.color};stroke:var(--color-card);stroke-width:1.5;--d:${props.delay ?? 0}ms`}
    />
  );
}

// A cloud of data points (already in pixels).
export function Scatter(props: { points: [number, number][]; color: string; radius?: number; opacity?: number; draw?: boolean; delay?: number }): VNode {
  return (
    <g class={props.draw ? "sk-fade" : undefined} style={`--d:${props.delay ?? 0}ms`}>
      {props.points.map(([px, py]) => (
        <circle cx={toFixed1(px)} cy={toFixed1(py)} r={props.radius ?? 2.6} style={`fill:${props.color};opacity:${props.opacity ?? 0.55}`} />
      ))}
    </g>
  );
}

// Ink axes with round-number ticks. Short labels (≤ 3 characters, e.g. "P",
// "q₂") sit at the axis ends in handwriting; longer ones sit beside the axes.
export function SketchAxes(props: {
  frame: Frame; id: string;
  xTicks?: number[]; yTicks?: number[];
  xLabel?: string; yLabel?: string;
  formatTick?: (value: number) => string;   // y-axis ticks
  formatXTick?: (value: number) => string;  // x-axis ticks
  hideZero?: boolean;
}): VNode {
  const { frame } = props;
  const format = props.formatTick ?? ((value: number) => String(value));
  const formatX = props.formatXTick ?? ((value: number) => String(value));
  const parts: VNode[] = [];
  const axisY = frame.yMin < 0 && frame.yMax > 0 ? frame.y(0) : frame.bottom;
  const axisX = frame.xMin < 0 && frame.xMax > 0 ? frame.x(0) : frame.left;
  parts.push(<InkLine x1={frame.left} y1={axisY} x2={frame.right + 6} y2={axisY} id={`${props.id}-x`} color={INK_SOFT} width={1.6} />);
  parts.push(<InkLine x1={axisX} y1={frame.bottom} x2={axisX} y2={frame.top - 6} id={`${props.id}-y`} color={INK_SOFT} width={1.6} />);
  for (const value of props.xTicks ?? []) {
    if (props.hideZero && value === 0) continue;
    parts.push(<text x={frame.x(value)} y={frame.bottom + 16} text-anchor="middle" class="sk-tick">{formatX(value)}</text>);
  }
  for (const value of props.yTicks ?? []) {
    if ((props.hideZero ?? true) && value === 0 && (props.xTicks ?? []).includes(0)) continue;
    parts.push(<text x={frame.left - 7} y={frame.y(value) + 4} text-anchor="end" class="sk-tick">{format(value)}</text>);
  }
  if (props.xLabel) {
    parts.push(props.xLabel.length <= 3
      ? <Note x={frame.right} y={axisY - 8} text={props.xLabel} color={INK_SOFT} size={18} anchor="end" />
      : <text x={(frame.left + frame.right) / 2} y={frame.bottom + 33} text-anchor="middle" class="sk-axis-label">{props.xLabel}</text>);
  }
  if (props.yLabel) {
    parts.push(props.yLabel.length <= 3
      ? <Note x={axisX + 6} y={frame.top + 8} text={props.yLabel} color={INK_SOFT} size={18} />
      : <text x={frame.left - 30} y={frame.top - 10} text-anchor="start" class="sk-axis-label">{props.yLabel}</text>);
  }
  return <g>{parts}</g>;
}

// ---------------------------------------------------------------------------
// Hooks
// ---------------------------------------------------------------------------

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Glides a set of numbers toward their targets after a click (presets, sliders).
// `snap` jumps straight there (used while dragging, where lag would feel wrong).
export function useGlide<Values extends Record<string, number>>(target: Values, snap: boolean): Values {
  const [shown, setShown] = useState<Values>(target);
  const shownRef = useRef(shown);
  shownRef.current = shown;
  useEffect(() => {
    if (snap || prefersReducedMotion()) { setShown(target); return; }
    let frameRequest = 0;
    const tick = () => {
      const current = shownRef.current;
      const next = { ...current } as Record<string, number>;
      let settled = true;
      for (const key in target) {
        const gap = target[key] - current[key];
        if (Math.abs(gap) > 1e-3 * (Math.abs(target[key]) + 1)) { next[key] = current[key] + gap * 0.2; settled = false; }
        else next[key] = target[key];
      }
      setShown(next as Values);
      if (!settled) frameRequest = requestAnimationFrame(tick);
    };
    frameRequest = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRequest);
  }, [JSON.stringify(target), snap]);
  return shown;
}

// True for a short window after `key` changes: lets newly revealed ink draw
// itself on, then drops the animation classes so dragging never re-triggers it.
export function useFresh(key: unknown, durationMs = 1900): boolean {
  const [fresh, setFresh] = useState(false);
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) { isFirstRender.current = false; return; }
    setFresh(true);
    const timer = setTimeout(() => setFresh(false), durationMs);
    return () => clearTimeout(timer);
  }, [key]);
  return fresh;
}

interface SketchOptions {
  stepCount: number;
  domains: Domain[];            // one per panel (1 or 2 panels)
  aspect?: number;              // panel height ÷ panel width
  minHeight?: number;           // per panel, px
  maxHeight?: number;           // per panel, px
  maxWidth?: number;
  padding?: Partial<Padding>;
  panelTitles?: string[];
}

interface HandleOptions {
  key: string;
  x: number; y: number;          // data coordinates
  panel?: number;
  axis: "x" | "y" | "xy";
  onDrag: (dataX: number, dataY: number) => void;
  hint?: "left" | "right" | "above" | "below" | "none";
}

export interface Sketch {
  uid: string;
  step: number;
  setStep: (step: number) => void;
  stepCount: number;
  show: (fromStep: number) => boolean;
  drawNow: (atStep: number) => boolean;
  narrow: boolean;
  width: number;
  height: number;
  frames: Frame[];
  panelTitles?: string[];
  plotRef: RefObject<HTMLDivElement>;
  svgRef: RefObject<SVGSVGElement>;
  dragging: string | null;
  clip: (panel?: number) => string;
  handle: (options: HandleOptions) => VNode;
}

export function useSketch(options: SketchOptions): Sketch {
  const uid = useUniqueId("sk");
  const plotRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const maxWidth = options.maxWidth ?? 680;
  const [width, setWidth] = useState(maxWidth);
  const [step, setStepState] = useState(0);
  const [dragging, setDragging] = useState<string | null>(null);
  const dragRef = useRef<HandleOptions | null>(null);
  const fresh = useFresh(step);

  useEffect(() => {
    const element = plotRef.current;
    if (!element) return;
    const observer = new ResizeObserver(() => setWidth(Math.min(maxWidth, Math.floor(element.clientWidth))));
    observer.observe(element);
    return () => observer.disconnect();
  }, [maxWidth]);

  const narrow = width < 440;
  const panelCount = options.domains.length;
  const sideBySide = panelCount > 1 && width >= 560;
  const gap = 24;
  const panelWidth = sideBySide ? (width - gap * (panelCount - 1)) / panelCount : width;
  const aspect = options.aspect ?? 0.66;
  const panelHeight = Math.round(Math.max(options.minHeight ?? 250, Math.min(options.maxHeight ?? 400, panelWidth * aspect)));
  const titleSpace = options.panelTitles ? 24 : 0;
  const padding: Padding = {
    left: options.padding?.left ?? 44,
    right: options.padding?.right ?? 16,
    top: (options.padding?.top ?? 24) + titleSpace,
    bottom: options.padding?.bottom ?? 40,
  };
  const frames = options.domains.map((domain, index) => {
    const box = sideBySide
      ? { left: index * (panelWidth + gap), top: 0, width: panelWidth, height: panelHeight }
      : { left: 0, top: index * (panelHeight + gap), width: panelWidth, height: panelHeight };
    return buildFrame(box, domain, padding);
  });
  const height = sideBySide ? panelHeight : panelHeight * panelCount + gap * (panelCount - 1);

  const setStep = (next: number) => setStepState(Math.max(0, Math.min(options.stepCount - 1, next)));

  const pointerToData = (event: PointerEvent, panel: number): [number, number] => {
    const rect = svgRef.current!.getBoundingClientRect();
    const frame = frames[panel];
    return [frame.dataX(event.clientX - rect.left), frame.dataY(event.clientY - rect.top)];
  };

  const handle = (handleOptions: HandleOptions): VNode => {
    const panel = handleOptions.panel ?? 0;
    const frame = frames[panel];
    const pixelX = frame.x(handleOptions.x), pixelY = frame.y(handleOptions.y);
    const isDragging = dragging === handleOptions.key;
    const cursor = handleOptions.axis === "x" ? "ew-resize" : handleOptions.axis === "y" ? "ns-resize" : "move";
    const hintSide = handleOptions.hint ?? "below";
    const hintPosition = {
      left: { x: pixelX - 16, y: pixelY + 5, anchor: "end" as const },
      right: { x: pixelX + 16, y: pixelY + 5, anchor: "start" as const },
      above: { x: pixelX, y: pixelY - 16, anchor: "middle" as const },
      below: { x: pixelX, y: pixelY + 30, anchor: "middle" as const },
      none: null,
    }[hintSide];
    return (
      <g
        class={`sk-handle${isDragging ? " sk-handle-on" : ""}`}
        style={`cursor:${cursor}`}
        onPointerDown={(event: PointerEvent) => {
          (event.currentTarget as Element).setPointerCapture(event.pointerId);
          dragRef.current = handleOptions;
          setDragging(handleOptions.key);
        }}
        onPointerMove={(event: PointerEvent) => {
          if (dragRef.current?.key !== handleOptions.key) return;
          const [dataX, dataY] = pointerToData(event, panel);
          handleOptions.onDrag(dataX, dataY);
        }}
        onPointerUp={() => { dragRef.current = null; setDragging(null); }}
        onPointerCancel={() => { dragRef.current = null; setDragging(null); }}
      >
        <circle class="sk-hit" cx={pixelX} cy={pixelY} r={18} />
        <circle class="sk-ring" cx={pixelX} cy={pixelY} r={9} style={`stroke:${ACCENT}`} />
        <circle cx={pixelX} cy={pixelY} r={5} style={`fill:${ACCENT}`} />
        {!dragging && hintPosition && <Note x={hintPosition.x} y={hintPosition.y} text="drag" color={ACCENT} anchor={hintPosition.anchor} size={17} />}
      </g>
    );
  };

  return {
    uid, step, setStep, stepCount: options.stepCount,
    show: (fromStep) => step >= fromStep,
    drawNow: (atStep) => fresh && step === atStep,
    narrow, width, height, frames, panelTitles: options.panelTitles,
    plotRef, svgRef, dragging,
    clip: (panel = 0) => `url(#${uid}-clip-${panel})`,
    handle,
  };
}

// ---------------------------------------------------------------------------
// KaTeX, rendered client-side for live equations.
// katex.render builds the DOM itself from our own TeX strings (numbers only).
// ---------------------------------------------------------------------------
export function Tex({ tex, class: className }: { tex: string; class?: string }): VNode {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (ref.current) katex.render(tex, ref.current, { throwOnError: false, displayMode: false });
  }, [tex]);
  return <span ref={ref} class={className} />;
}

// ---------------------------------------------------------------------------
// Number formatting for equations and labels.
// ---------------------------------------------------------------------------
export const round1 = (value: number) => Math.round(value * 10) / 10;
export const round2 = (value: number) => Math.round(value * 100) / 100;
export const fmt = (value: number, decimals = 1) => {
  const factor = Math.pow(10, decimals);
  const rounded = Math.round(value * factor) / factor;
  return String(Object.is(rounded, -0) ? 0 : rounded);
};
// Coefficient in front of a variable: 1 -> "", 0.5 -> "0.5".
export const coef = (value: number) => (round2(value) === 1 ? "" : fmt(value, 2));
// "+ 3" / "- 3" for writing linear expressions.
export const signed = (value: number, decimals = 1) => (value < 0 ? `- ${fmt(-value, decimals)}` : `+ ${fmt(value, decimals)}`);
export const clamp = (value: number, low: number, high: number) => Math.max(low, Math.min(high, value));

// ---------------------------------------------------------------------------
// Controls
// ---------------------------------------------------------------------------
export function Steps(props: { step: number; count: number; onStep: (step: number) => void }): VNode {
  const isLast = props.step === props.count - 1;
  return (
    <div class="sk-bar">
      <div class="sk-nav">
        <button type="button" class="sk-btn" disabled={props.step === 0} onClick={() => props.onStep(props.step - 1)}>Back</button>
        <button type="button" class="sk-btn sk-btn-main" onClick={() => props.onStep(isLast ? 0 : props.step + 1)}>
          {isLast ? "Start over" : "Next"}
        </button>
        <div class="sk-dots" role="group" aria-label="Jump to step">
          {Array.from({ length: props.count }, (_, index) => (
            <button
              type="button"
              class={`sk-dot${index === props.step ? " sk-dot-on" : ""}${index < props.step ? " sk-dot-done" : ""}`}
              aria-label={`Step ${index + 1}`}
              aria-current={index === props.step ? "step" : undefined}
              onClick={() => props.onStep(index)}
            />
          ))}
        </div>
      </div>
      <span class="sk-count">Step {props.step + 1} of {props.count}</span>
    </div>
  );
}

export function Presets(props: { presets: { label: string; apply: () => void }[] }): VNode {
  return (
    <div class="sk-presets" role="group" aria-label="Presets">
      {props.presets.map((preset) => (
        <button type="button" class="sk-chip" onClick={preset.apply}>{preset.label}</button>
      ))}
    </div>
  );
}

export function Toggle(props: { options: { key: string; label: string }[]; active: string; onPick: (key: string) => void; label?: string }): VNode {
  return (
    <div class="sk-toggle" role="group" aria-label={props.label}>
      {props.options.map((option) => (
        <button
          type="button"
          class={`sk-toggle-btn${props.active === option.key ? " sk-toggle-on" : ""}`}
          aria-pressed={props.active === option.key}
          onClick={() => props.onPick(option.key)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// The card: narration, live equation, the drawing, explore controls, steps.
// ---------------------------------------------------------------------------
export function SketchGraph(props: {
  sketch: Sketch;
  note: string;
  tex?: string;
  ariaLabel: string;
  explore?: ComponentChildren;      // shown on the last step (always, for one-step graphs)
  top?: ComponentChildren;          // mode toggles shown above the narration
  footnote?: string;                // e.g. "Simulated data, for illustration."
  children: ComponentChildren;
}): VNode {
  const { sketch } = props;
  const onLastStep = sketch.step === sketch.stepCount - 1;
  return (
    <div class="sk">
      {props.top && <div class="sk-top">{props.top}</div>}
      <p class="sk-note" key={`${sketch.step}-${props.note}`}>{props.note}</p>
      {props.tex !== undefined && <div class="sk-eq"><Tex tex={props.tex} /></div>}
      <div class="sk-plot" ref={sketch.plotRef}>
        <svg ref={sketch.svgRef} width={sketch.width} height={sketch.height} viewBox={`0 0 ${sketch.width} ${sketch.height}`} role="img" aria-label={props.ariaLabel}>
          <defs>
            {sketch.frames.map((frame, index) => (
              <clipPath id={`${sketch.uid}-clip-${index}`}>
                <rect x={frame.left} y={frame.top - 10} width={frame.right - frame.left + 10} height={frame.bottom - frame.top + 10} />
              </clipPath>
            ))}
          </defs>
          {sketch.panelTitles?.map((title, index) => (
            <text x={sketch.frames[index].boxLeft + 4} y={sketch.frames[index].boxTop + 15} class="sk-panel-title">{title}</text>
          ))}
          {props.children}
        </svg>
      </div>
      {props.footnote && <p class="sk-footnote">{props.footnote}</p>}
      {props.explore && (onLastStep || sketch.stepCount === 1) && <div class="sk-explore">{props.explore}</div>}
      {sketch.stepCount > 1 && <Steps step={sketch.step} count={sketch.stepCount} onStep={sketch.setStep} />}
    </div>
  );
}
