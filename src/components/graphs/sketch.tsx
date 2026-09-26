import { useEffect, useRef, useState } from "preact/hooks";
import type { VNode, ComponentChildren, RefObject } from "preact";
import katex from "katex";

// "Sketch & explain" toolkit: the whiteboard look (wobbly double-stroke ink,
// pen hatching, handwritten notes) plus the maths-explainer mechanics (live
// equations, step-by-step build-up, smooth parameter morphs, draggable handles).
//
// Motion follows the site's UI direction: nothing animates on scroll or load.
// Ink draws on only when the reader steps forward, parameters glide only after
// a click, and prefers-reduced-motion switches every animation off (CSS).
//
// Everything is drawn in real pixels: the SVG is sized to its measured width,
// so text stays the same size on a phone and on a wide desktop column.

// ---- seeded randomness: the same element wobbles the same way every render ----
export function rng(seed: number) {
  let a = seed | 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const hash = (s: string) => {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return h >>> 0;
};

// Two slightly different hand-drawn passes of one straight stroke.
export function roughLine(x1: number, y1: number, x2: number, y2: number, id: string, amp = 1.1): [string, string] {
  const r = rng(hash(id));
  const len = Math.hypot(x2 - x1, y2 - y1) || 1;
  const nx = -(y2 - y1) / len, ny = (x2 - x1) / len;
  const pass = (): string => {
    const j = () => (r() - 0.5) * 2 * amp;
    const bow = (r() - 0.5) * Math.min(len * 0.018, 5);
    const mx = (x1 + x2) / 2 + nx * bow, my = (y1 + y2) / 2 + ny * bow;
    return `M${(x1 + j()).toFixed(1)},${(y1 + j()).toFixed(1)} Q${(mx + j()).toFixed(1)},${(my + j()).toFixed(1)} ${(x2 + j()).toFixed(1)},${(y2 + j()).toFixed(1)}`;
  };
  return [pass(), pass()];
}

// ---- ink primitives ----
interface InkProps { d: [string, string]; color: string; w?: number; delay?: number; dur?: number; draw?: boolean; }

// A double pass of pen. When `draw` is set the strokes draw themselves on.
export function Ink({ d, color, w = 2, delay = 0, dur = 650, draw }: InkProps): VNode {
  return (
    <g class={draw ? "sk-draw" : undefined} style={`--d:${delay}ms;--dur:${dur}ms`}>
      <path d={d[0]} pathLength={1} style={`fill:none;stroke:${color};stroke-width:${w};stroke-linecap:round`} />
      <path d={d[1]} pathLength={1} style={`fill:none;stroke:${color};stroke-width:${w * 0.55};stroke-linecap:round;opacity:0.55`} />
    </g>
  );
}

export function InkLine(p: { x1: number; y1: number; x2: number; y2: number; id: string; color: string; w?: number; delay?: number; dur?: number; draw?: boolean }): VNode {
  return <Ink d={roughLine(p.x1, p.y1, p.x2, p.y2, p.id)} color={p.color} w={p.w} delay={p.delay} dur={p.dur} draw={p.draw} />;
}

// Hand-drawn dashes, each its own little stroke, drawn on one after another.
export function InkDashed(p: { x1: number; y1: number; x2: number; y2: number; id: string; color: string; w?: number; dash?: number; gap?: number; delay?: number; draw?: boolean }): VNode {
  const len = Math.hypot(p.x2 - p.x1, p.y2 - p.y1);
  const dash = p.dash ?? 9, gap = p.gap ?? 6;
  const n = Math.max(1, Math.floor((len + gap) / (dash + gap)));
  const ux = (p.x2 - p.x1) / (len || 1), uy = (p.y2 - p.y1) / (len || 1);
  const r = rng(hash(p.id));
  const parts: VNode[] = [];
  for (let i = 0; i < n; i++) {
    const s = i * (dash + gap), e = Math.min(len, s + dash);
    const j = () => (r() - 0.5) * 1.2;
    const d = `M${(p.x1 + ux * s + j()).toFixed(1)},${(p.y1 + uy * s + j()).toFixed(1)} L${(p.x1 + ux * e + j()).toFixed(1)},${(p.y1 + uy * e + j()).toFixed(1)}`;
    parts.push(
      <path d={d} pathLength={1} style={`fill:none;stroke:${p.color};stroke-width:${p.w ?? 1.8};stroke-linecap:round;--d:${(p.delay ?? 0) + i * 22}ms;--dur:160ms`} />,
    );
  }
  return <g class={p.draw ? "sk-draw" : undefined}>{parts}</g>;
}

// A polygon filled with a light wash plus diagonal pen hatching, clipped to shape.
export function Hatch(p: { pts: [number, number][]; id: string; wash: string; ink: string; gap?: number; angle?: 1 | -1; delay?: number; draw?: boolean }): VNode | null {
  if (p.pts.length < 3) return null;
  const xs = p.pts.map((q) => q[0]), ys = p.pts.map((q) => q[1]);
  const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys);
  if (x1 - x0 < 1 || y1 - y0 < 1) return null;
  const gap = p.gap ?? 7, dir = p.angle ?? 1;
  const r = rng(hash(p.id));
  const clipId = `skc-${p.id}`;
  const poly = p.pts.map((q) => `${q[0].toFixed(1)},${q[1].toFixed(1)}`).join(" ");
  const h = y1 - y0;
  const lines: VNode[] = [];
  let k = 0;
  for (let c = x0 - h; c <= x1; c += gap, k++) {
    const j = () => (r() - 0.5) * 1.4;
    const [ax, bx] = dir > 0 ? [c, c + h] : [c + h, c];
    lines.push(
      <path
        d={`M${(ax + j()).toFixed(1)},${(y1 + j()).toFixed(1)} L${(bx + j()).toFixed(1)},${(y0 + j()).toFixed(1)}`}
        pathLength={1}
        style={`fill:none;stroke:${p.ink};stroke-width:1.1;opacity:0.7;--d:${(p.delay ?? 0) + k * 14}ms;--dur:220ms`}
      />,
    );
  }
  return (
    <g>
      <clipPath id={clipId}><polygon points={poly} /></clipPath>
      <polygon points={poly} class={p.draw ? "sk-fade" : undefined} style={`fill:${p.wash};stroke:none;--d:${p.delay ?? 0}ms`} />
      <g clip-path={`url(#${clipId})`} class={p.draw ? "sk-draw" : undefined}>{lines}</g>
    </g>
  );
}

// Handwritten label. `size` in px, already screen-sized.
export function Note(p: { x: number; y: number; text: string; color: string; size?: number; anchor?: "start" | "middle" | "end"; delay?: number; draw?: boolean }): VNode {
  return (
    <text
      x={p.x} y={p.y} text-anchor={p.anchor ?? "start"}
      class={p.draw ? "sk-fade" : undefined}
      style={`font:700 ${p.size ?? 19}px var(--font-hand);fill:${p.color};paint-order:stroke;stroke:var(--color-card);stroke-width:4px;stroke-linejoin:round;--d:${p.delay ?? 0}ms`}
    >
      {p.text}
    </text>
  );
}

// Curved hand-drawn arrow from (x1,y1) to (x2,y2).
export function Arrow(p: { x1: number; y1: number; x2: number; y2: number; id: string; color: string; bend?: number; delay?: number; draw?: boolean }): VNode {
  const r = rng(hash(p.id));
  const mx = (p.x1 + p.x2) / 2 + (p.bend ?? 18), my = (p.y1 + p.y2) / 2 - (p.bend ?? 18) * 0.4;
  const ang = Math.atan2(p.y2 - my, p.x2 - mx);
  const head = (s: number) => {
    const a = ang + s * 0.45 + (r() - 0.5) * 0.1;
    return `M${p.x2},${p.y2} L${(p.x2 - 10 * Math.cos(a)).toFixed(1)},${(p.y2 - 10 * Math.sin(a)).toFixed(1)}`;
  };
  const st = `fill:none;stroke:${p.color};stroke-width:1.8;stroke-linecap:round`;
  return (
    <g class={p.draw ? "sk-draw" : undefined} style={`--d:${p.delay ?? 0}ms;--dur:420ms`}>
      <path d={`M${p.x1},${p.y1} Q${mx.toFixed(1)},${my.toFixed(1)} ${p.x2},${p.y2}`} pathLength={1} style={st} />
      <path d={head(1)} pathLength={1} style={`${st};--d:${(p.delay ?? 0) + 380}ms;--dur:120ms`} />
      <path d={head(-1)} pathLength={1} style={`${st};--d:${(p.delay ?? 0) + 380}ms;--dur:120ms`} />
    </g>
  );
}

// Hand-drawn ring around a point, for "look here" moments.
export function Ring(p: { x: number; y: number; r?: number; id: string; color: string; delay?: number; draw?: boolean }): VNode {
  const q = rng(hash(p.id));
  const R = p.r ?? 11;
  const pts: string[] = [];
  const start = q() * Math.PI * 2;
  for (let i = 0; i <= 26; i++) {
    const t = start + (i / 24) * Math.PI * 2;
    const rr = R + (q() - 0.5) * 1.6 + i * 0.06;
    pts.push(`${(p.x + rr * Math.cos(t)).toFixed(1)},${(p.y + rr * Math.sin(t) * 0.9).toFixed(1)}`);
  }
  return (
    <g class={p.draw ? "sk-draw" : undefined} style={`--d:${p.delay ?? 0}ms;--dur:500ms`}>
      <path d={`M${pts.join(" L")}`} pathLength={1} style={`fill:none;stroke:${p.color};stroke-width:1.8;stroke-linecap:round`} />
    </g>
  );
}

// ---- hooks ----

// Measured content width of an element (px), for real-pixel SVG sizing.
export function useWidth(max = 680): [RefObject<HTMLDivElement>, number] {
  const ref = useRef<HTMLDivElement>(null);
  const [w, setW] = useState(max);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setW(Math.min(max, Math.floor(el.clientWidth))));
    ro.observe(el);
    return () => ro.disconnect();
  }, [max]);
  return [ref, w];
}

const reducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Glides a set of numbers toward their targets after a click (presets, sliders).
// `snap` jumps straight there (used while dragging, where lag would feel wrong).
export function useGlide<T extends Record<string, number>>(target: T, snap: boolean): T {
  const [shown, setShown] = useState<T>(target);
  const shownRef = useRef(shown);
  shownRef.current = shown;
  useEffect(() => {
    if (snap || reducedMotion()) { setShown(target); return; }
    let raf = 0;
    const tick = () => {
      const cur = shownRef.current;
      const next = { ...cur } as Record<string, number>;
      let done = true;
      for (const k in target) {
        const d = target[k] - cur[k];
        if (Math.abs(d) > 1e-3) { next[k] = cur[k] + d * 0.2; done = false; }
        else next[k] = target[k];
      }
      setShown(next as T);
      if (!done) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [JSON.stringify(target), snap]);
  return shown;
}

// True for a short window after `key` changes: lets newly revealed ink draw
// itself on, then drops the animation classes so dragging never re-triggers it.
export function useFresh(key: number, ms = 1800): boolean {
  const [fresh, setFresh] = useState(false);
  const first = useRef(true);
  useEffect(() => {
    if (first.current) { first.current = false; return; }
    setFresh(true);
    const t = setTimeout(() => setFresh(false), ms);
    return () => clearTimeout(t);
  }, [key]);
  return fresh;
}

// ---- KaTeX, rendered client-side for live equations ----
// katex.render builds the DOM itself from our own TeX strings (numbers only).
export function Tex({ tex, class: cls }: { tex: string; class?: string }): VNode {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (ref.current) katex.render(tex, ref.current, { throwOnError: false, displayMode: false });
  }, [tex]);
  return <span ref={ref} class={cls} />;
}

// ---- number formatting for equations ----
export const r1 = (n: number) => Math.round(n * 10) / 10;
export const fmt = (n: number) => String(r1(n));
// Coefficient in front of a variable: 1 -> "", 0.5 -> "0.5".
export const coef = (n: number) => (r1(n) === 1 ? "" : fmt(n));

// ---- step controls (Back / Next / dots) ----
export function Steps(p: { step: number; count: number; onStep: (s: number) => void; label: string; children?: ComponentChildren }): VNode {
  const last = p.step === p.count - 1;
  return (
    <div class="sk-bar">
      <div class="sk-nav">
        <button type="button" class="sk-btn" disabled={p.step === 0} onClick={() => p.onStep(p.step - 1)}>Back</button>
        <button type="button" class="sk-btn sk-btn-main" onClick={() => p.onStep(last ? 0 : p.step + 1)}>
          {last ? "Start over" : "Next"}
        </button>
        <div class="sk-dots" role="group" aria-label="Jump to step">
          {Array.from({ length: p.count }, (_, i) => (
            <button
              type="button"
              class={`sk-dot${i === p.step ? " sk-dot-on" : ""}${i < p.step ? " sk-dot-done" : ""}`}
              aria-label={`Step ${i + 1}`}
              aria-current={i === p.step ? "step" : undefined}
              onClick={() => p.onStep(i)}
            />
          ))}
        </div>
      </div>
      <span class="sk-count">{p.label}</span>
      {p.children}
    </div>
  );
}
