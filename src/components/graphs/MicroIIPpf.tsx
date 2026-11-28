import { useState } from "preact/hooks";
import type { VNode } from "preact";
import {
  useSketch, useGlide, SketchGraph, SketchAxes, InkLine, InkCurve, InkDashed, Note, Dot, Toggle, Slider,
  fmt, MARKER,
} from "./sketch";

// Micro II: a production economy's PPF and the consumer's optimum, MRS = RPT.
//   type: microii-ppf
//   utility: cd | linear | quasi   (which consumer opens)
// Both firms Cobb-Douglas with the same exponents, firm 2 scaled by b, so the
// efficiency locus is k1 = l1 and the PPF is the straight line y = b(D - x),
// RPT = b. Consumers: x^c y^(1-c) (interior), c·x + y (corner), 10√x + y
// (quasi-linear: x does not depend on D). Steps: PPF → the price line equals
// the PPF → the tangency → explore b, c and D.

interface Props { utility?: string; }
type Kind = "cd" | "linear" | "quasi";
const KINDS: { key: Kind; label: string }[] = [
  { key: "cd", label: "x^c y^(1−c)" },
  { key: "linear", label: "c·x + y" },
  { key: "quasi", label: "10√x + y" },
];
const START: Record<Kind, { b: number; c: number; D: number }> = {
  cd: { b: 1, c: 0.5, D: 50 },
  linear: { b: 1, c: 2, D: 50 },
  quasi: { b: 1, c: 0.5, D: 50 },
};

const NOTES = [
  "Equal RTS in both firms gives k₁ = l₁, so x = l₁ and y = b(D − l₁): the PPF is a straight line with slope −b. RPT = b everywhere.",
  "In equilibrium firms price at marginal cost, so pₓ/p_y = RPT. With a straight PPF the budget line is the PPF itself.",
  "The consumer picks the point where MRS = RPT. That point is both the social optimum and the competitive equilibrium.",
  "Your turn. Raise b (firm 2 more productive), change the taste parameter c, or scale the resources D.",
];

const optimum = (kind: Kind, b: number, c: number, D: number): [number, number] => {
  if (kind === "cd") return [c * D, (1 - c) * b * D];
  if (kind === "linear") return c > b ? [D, 0] : c < b ? [0, b * D] : [D / 2, (b * D) / 2];
  const x = Math.min(D, 25 / (b * b));
  return [x, b * (D - x)];
};

export default function MicroIIPpf({ utility = "cd" }: Props): VNode {
  const startKind = (KINDS.find((k) => k.key === utility)?.key ?? "cd") as Kind;
  const [kind, setKind] = useState<Kind>(startKind);
  const [tune, setTune] = useState(START[startKind]);
  const exploringSteps = NOTES.length - 1;
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMin: 0, xMax: 110, yMax: 220 }], maxWidth: 600, padding: { left: 46, bottom: 40, top: 18 } });
  const { step, show, drawNow, narrow } = sketch;
  const exploring = step === exploringSteps;
  const v = useGlide(exploring ? tune : START[kind], false);
  const { b, c, D } = v;
  const base = sketch.frames[0];
  const xMax = Math.max(60, D * 1.15), yMax = Math.max(60, b * D * 1.15);
  const frame = {
    ...base, xMax, yMax,
    x: (value: number) => base.left + (value / xMax) * (base.right - base.left),
    y: (value: number) => base.bottom - (value / yMax) * (base.bottom - base.top),
  };

  const [xs, ys] = optimum(kind, b, c, D);
  const level = kind === "cd" ? Math.pow(Math.max(xs, 1e-6), c) * Math.pow(Math.max(ys, 1e-6), 1 - c) : kind === "linear" ? c * xs + ys : 10 * Math.sqrt(xs) + ys;
  const icAt = (x: number) => {
    if (kind === "cd") return Math.pow(level / Math.pow(Math.max(x, 1e-6), c), 1 / (1 - c));
    if (kind === "linear") return level - c * x;
    return level - 10 * Math.sqrt(x);
  };
  const ic: [number, number][] = [];
  for (let i = 0; i <= 90; i++) {
    const x = (xMax * i) / 90;
    const y = icAt(x);
    if (y >= 0 && y <= yMax * 1.1) ic.push([frame.x(x), frame.y(y)]);
  }

  const drawing: VNode[] = [
    <SketchAxes frame={frame} id={`ppf-axes-${kind}`} xTicks={[0, Math.round(D)]} yTicks={[0, Math.round(b * D)]} xLabel="x" yLabel="y" />,
    <InkLine x1={frame.x(0)} y1={frame.y(b * D)} x2={frame.x(D)} y2={frame.y(0)} id={`ppf-line-${kind}`} color={MARKER.green} width={2.8} draw={drawNow(0)} />,
    <Note x={frame.x(D * 0.7) + 6} y={frame.y(b * D * 0.3) - 8} text={`PPF: y = ${fmt(b, 2)}(${fmt(D, 0)} − x)`} color={MARKER.green} size={16} />,
  ];
  if (show(1)) {
    drawing.push(<InkDashed x1={frame.x(0)} y1={frame.y(b * D)} x2={frame.x(D)} y2={frame.y(0)} id={`ppf-budget-${kind}`} color={MARKER.amber} width={1.6} dash={7} gap={6} draw={drawNow(1)} />);
    if (!narrow) drawing.push(<Note x={frame.x(D * 0.18)} y={frame.y(b * D * 0.82) - 12} text={`budget: slope −pₓ/p_y = −${fmt(b, 2)}`} color={MARKER.amber} size={15} />);
  }
  if (show(2)) {
    drawing.push(<g clip-path={sketch.clip()}><InkCurve points={ic} id={`ppf-ic-${kind}`} color={MARKER.blue} width={2.2} draw={drawNow(2)} /></g>);
    drawing.push(<Dot x={frame.x(xs)} y={frame.y(ys)} color={MARKER.purple} radius={6} />);
    drawing.push(<Note x={frame.x(xs) + 9} y={frame.y(ys) - 9} text={`(${fmt(xs, 1)}, ${fmt(ys, 1)})`} color={MARKER.purple} size={16} />);
  }

  const mrsTex = kind === "cd" ? `MRS = \\tfrac{${fmt(c, 2)}\\,y}{${fmt(1 - c, 2)}\\,x}` : kind === "linear" ? `MRS = c = ${fmt(c, 2)}` : `MRS = \\tfrac{5}{\\sqrt{x}}`;
  const verdict = kind === "linear"
    ? (c > b ? `${fmt(c, 2)} > ${fmt(b, 2)}:\\ \\text{only } x` : c < b ? `${fmt(c, 2)} < ${fmt(b, 2)}:\\ \\text{only } y` : `\\text{tie: any point}`)
    : kind !== "cd" && 25 / (b * b) > D
      ? `MRS(${fmt(D, 0)}) = \\tfrac{5}{\\sqrt{${fmt(D, 0)}}} = ${fmt(5 / Math.sqrt(D), 2)} > ${fmt(b, 2)}:\\ \\text{corner } (x^*, y^*) = (${fmt(xs, 2)}, ${fmt(ys, 2)})`
      : `${mrsTex} = ${fmt(b, 2)} \\Rightarrow (x^*, y^*) = (${fmt(xs, 2)}, ${fmt(ys, 2)})`;
  const TEX = [
    `k_1 = l_1:\\ x = l_1,\\ y = ${fmt(b, 2)}(${fmt(D, 0)} - l_1) \\Rightarrow RPT = ${fmt(b, 2)}`,
    `\\tfrac{p_x}{p_y} = RPT = ${fmt(b, 2)}`,
    verdict,
    verdict,
  ];

  const choose = (key: string) => { const next = key as Kind; setKind(next); setTune(START[next]); };

  return (
    <SketchGraph
      sketch={sketch}
      note={NOTES[step]}
      tex={TEX[step]}
      footnote="f₁ = l^a k^(1−a), f₂ = b·l^a k^(1−a), k₁ + k₂ = l₁ + l₂ = D (2023 Moed A Q2, 2026 Moed A Q3, 2025 Moed A Q2, PS9). The exponent a cancels: the PPF does not depend on it."
      ariaLabel={`Production possibility frontier y = ${fmt(b, 2)}(${fmt(D, 0)} − x) and the consumer's optimum at (${fmt(xs, 1)}, ${fmt(ys, 1)}).`}
      top={<Toggle label="Consumer" active={kind} onPick={choose} options={KINDS.map((k) => ({ key: k.key, label: k.label }))} />}
      explore={<div class="graph-sliders">
        <Slider label="firm 2 productivity b" value={tune.b} min={0.5} max={3} step={0.25} onInput={(value) => setTune({ ...tune, b: value })} />
        {kind !== "quasi" && <Slider label="taste c" value={tune.c} min={kind === "linear" ? 0.25 : 0.1} max={kind === "linear" ? 3 : 0.9} step={kind === "linear" ? 0.25 : 0.05} onInput={(value) => setTune({ ...tune, c: value })} />}
        <Slider label="resources D" value={tune.D} min={20} max={100} step={10} onInput={(value) => setTune({ ...tune, D: value })} />
      </div>}
    >
      {drawing}
    </SketchGraph>
  );
}
