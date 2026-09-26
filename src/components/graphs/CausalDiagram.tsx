import type { VNode } from "preact";
import { useSketch, SketchGraph, InkLine, InkCurve, Note, Arrow, INK, INK_SOFT, MARKER } from "./sketch";

// Hand-drawn causal diagrams, built up one arrow at a time.
//   type: causal-diagram
//   diagram: iv | seatbelt
// iv       — Lecture 4: Z → X → Y with a confounder u → X and u → Y, and no
//            direct path from Z to Y (the exclusion restriction).
// seatbelt — PS 4 Q1: primary seatbelt law → traffic fatalities; confounders
//            (secondary, beer) affect both; outcome-only controls (totalvmt,
//            precip, snow32, rural_speed) improve precision; variables
//            touching neither are left out. Groups as in the PS 4 solution.

interface Props { diagram?: string; }

interface NodeSpec { id: string; label: string; x: number; y: number; color: string; width: number; }
interface EdgeSpec { from: string; to: string; color: string; dashed?: boolean; label?: string; step: number; }
interface DiagramSpec { nodes: (NodeSpec & { step: number })[]; edges: EdgeSpec[]; notes: string[]; tex: string[]; }

const DIAGRAMS: Record<string, DiagramSpec> = {
  iv: {
    nodes: [
      { id: "x", label: "X  endogenous", x: 0.5, y: 0.5, color: MARKER.amber, width: 0.24, step: 0 },
      { id: "y", label: "Y  outcome", x: 0.85, y: 0.5, color: MARKER.green, width: 0.2, step: 0 },
      { id: "u", label: "u  confounder", x: 0.68, y: 0.12, color: MARKER.red, width: 0.24, step: 1 },
      { id: "z", label: "Z  instrument", x: 0.14, y: 0.5, color: MARKER.blue, width: 0.24, step: 2 },
    ],
    edges: [
      { from: "x", to: "y", color: INK, step: 0, label: "effect we want" },
      { from: "u", to: "x", color: MARKER.red, step: 1 },
      { from: "u", to: "y", color: MARKER.red, step: 1 },
      { from: "z", to: "x", color: MARKER.blue, step: 2, label: "relevance" },
      { from: "z", to: "y", color: INK_SOFT, dashed: true, step: 3, label: "no direct path" },
    ],
    notes: [
      "We want the effect of X on Y.",
      "But an unobserved confounder u moves both X and Y, so OLS mixes the two.",
      "An instrument Z moves X (relevance)…",
      "…and reaches Y only through X (exclusion). IV uses just the slice of X that Z moves.",
    ],
    tex: ["y = \\beta_0 + \\beta_1 x + u", "\\operatorname{cov}(x, u) \\ne 0 \\Rightarrow \\text{OLS biased}", "\\operatorname{cov}(z, x) \\ne 0", "\\operatorname{cov}(z, u) = 0 \\;\\Rightarrow\\; \\hat\\beta_{IV} = \\frac{\\operatorname{cov}(y, z)}{\\operatorname{cov}(x, z)}"],
  },
  seatbelt: {
    nodes: [
      { id: "law", label: "primary seatbelt law", x: 0.18, y: 0.2, color: MARKER.blue, width: 0.3, step: 0 },
      { id: "deaths", label: "traffic fatalities", x: 0.82, y: 0.2, color: MARKER.amber, width: 0.28, step: 0 },
      { id: "a", label: "A: secondary, beer", x: 0.3, y: 0.68, color: MARKER.red, width: 0.3, step: 1 },
      { id: "b", label: "B: totalvmt, precip, snow32, rural_speed", x: 0.74, y: 0.68, color: MARKER.green, width: 0.46, step: 2 },
      { id: "c", label: "C: neither", x: 0.5, y: 0.92, color: MARKER.grey, width: 0.2, step: 3 },
    ],
    edges: [
      { from: "law", to: "deaths", color: INK, step: 0, label: "effect of interest" },
      { from: "a", to: "law", color: MARKER.red, step: 1 },
      { from: "a", to: "deaths", color: MARKER.red, step: 1 },
      { from: "b", to: "deaths", color: MARKER.green, step: 2 },
    ],
    notes: [
      "The question: does a primary seatbelt law reduce traffic fatalities?",
      "A (secondary law, beer consumption) affects both the law and deaths: a confounder. Leave it out and β̂ is biased.",
      "B (miles driven, rain, snow, rural speed limits) affects only deaths. Not needed for bias, but it soaks up noise: include it.",
      "C: variables that touch neither. Leave them out.",
    ],
    tex: ["\\text{fatalities}_{it} = \\beta\\,\\text{primary}_{it} + \\dots", "\\text{A} \\to \\text{include (avoid bias)}", "\\text{B} \\to \\text{include (precision)}", "\\text{C} \\to \\text{exclude}"],
  },
};

export default function CausalDiagram({ diagram = "iv" }: Props): VNode {
  const spec = DIAGRAMS[diagram] ?? DIAGRAMS.iv;
  const sketch = useSketch({ stepCount: spec.notes.length, domains: [{ xMax: 1, yMax: 1 }], aspect: 0.5, minHeight: 240, maxHeight: 340, maxWidth: 720, padding: { left: 8, right: 8, top: 8, bottom: 8 } });
  const { show, drawNow, step } = sketch;
  const frame = sketch.frames[0];
  const nodeHeight = 38;
  const position = (id: string) => {
    const node = spec.nodes.find((candidate) => candidate.id === id)!;
    return { x: frame.left + node.x * (frame.right - frame.left), y: frame.top + node.y * (frame.bottom - frame.top), width: node.width * (frame.right - frame.left) };
  };
  // point on a node's box edge in the direction of another point
  const edgePoint = (id: string, towardX: number, towardY: number) => {
    const box = position(id);
    const dx = towardX - box.x, dy = towardY - box.y;
    const scale = Math.min(Math.abs((box.width / 2 + 4) / (dx || 1e-9)), Math.abs((nodeHeight / 2 + 4) / (dy || 1e-9)));
    return { x: box.x + dx * scale, y: box.y + dy * scale };
  };
  const drawing: VNode[] = [];
  spec.edges.forEach((edge, index) => {
    if (!show(edge.step)) return;
    const from = position(edge.from), to = position(edge.to);
    const start = edgePoint(edge.from, to.x, to.y), end = edgePoint(edge.to, from.x, from.y);
    if (edge.dashed) {
      // the missing path arcs underneath the row, so it never crosses a box
      const arcStart = { x: from.x, y: from.y + nodeHeight / 2 + 4 }, arcEnd = { x: to.x, y: to.y + nodeHeight / 2 + 4 };
      const dip = Math.min(90, (frame.bottom - arcStart.y) * 1.6);
      const arc: [number, number][] = Array.from({ length: 25 }, (_, sample) => {
        const t = sample / 24;
        return [arcStart.x + (arcEnd.x - arcStart.x) * t, arcStart.y + 4 * t * (1 - t) * dip * 0.5 + (arcEnd.y - arcStart.y) * t];
      });
      const lowest = arcStart.y + dip * 0.5;
      drawing.push(<InkCurve points={arc} id={`edge-${index}`} color={edge.color} width={1.6} dashed draw={drawNow(edge.step)} />);
      drawing.push(<Note x={(arcStart.x + arcEnd.x) / 2} y={lowest + 20} text={`${edge.label ?? ""} ✗`} color={MARKER.red} anchor="middle" size={17} draw={drawNow(edge.step)} />);
      return;
    }
    drawing.push(<Arrow x1={start.x} y1={start.y} x2={end.x} y2={end.y} id={`edge-${index}`} color={edge.color} bend={edge.from === "u" || edge.from === "a" ? 14 : 0} draw={drawNow(edge.step)} />);
    if (edge.label) drawing.push(<Note x={(start.x + end.x) / 2} y={(start.y + end.y) / 2 - 10} text={edge.label} color={edge.color} anchor="middle" size={16} draw={drawNow(edge.step)} />);
  });
  spec.nodes.forEach((node) => {
    if (!show(node.step)) return;
    const box = position(node.id);
    const left = box.x - box.width / 2, right = box.x + box.width / 2, top = box.y - nodeHeight / 2, bottom = box.y + nodeHeight / 2;
    [[left, top, right, top], [right, top, right, bottom], [right, bottom, left, bottom], [left, bottom, left, top]].forEach(([x1, y1, x2, y2], side) => {
      drawing.push(<InkLine x1={x1} y1={y1} x2={x2} y2={y2} id={`${node.id}-${side}`} color={node.color} width={2} delay={side * 120} duration={200} draw={drawNow(node.step)} />);
    });
    drawing.push(<Note x={box.x} y={box.y + 7} text={node.label} color={node.color} anchor="middle" size={sketch.narrow ? 15 : 18} delay={300} draw={drawNow(node.step)} />);
  });
  return (
    <SketchGraph sketch={sketch} note={spec.notes[step]} tex={spec.tex[step]} ariaLabel={`Causal diagram: ${spec.notes.join(" ")}`}>
      {drawing}
    </SketchGraph>
  );
}
