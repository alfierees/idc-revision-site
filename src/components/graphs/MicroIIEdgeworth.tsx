import { useState } from "preact/hooks";
import type { VNode } from "preact";
import {
  useSketch, useGlide, SketchGraph, InkLine, InkCurve, InkDashed, Note, Dot, Toggle, Slider,
  fmt, clamp, MARKER, INK_SOFT,
} from "./sketch";

// Micro II: the Edgeworth box of a two-agent Cobb-Douglas exchange economy.
//   type: microii-edgeworth
//   paper: a24 | b24 | same   (which past-paper economy opens)
// U1 = x^a y^(1-a), U2 = x^b y^(1-b). Steps: the box and the endowment →
// the contract curve (MRS1 = MRS2) → the price line through the endowment →
// the Walrasian equilibrium, where both curves touch the line → explore.

interface Props { paper?: string; }
interface Case { key: string; label: string; source: string; a: number; b: number; w1x: number; w1y: number; X: number; Y: number; }

const CASES: Case[] = [
  { key: "a24", label: "2024 A", source: "2024 Moed A Q2a", a: 2 / 3, b: 1 / 3, w1x: 50, w1y: 70, X: 100, Y: 140 },
  { key: "b24", label: "2024 B", source: "2024 Moed B Q2a", a: 0.4, b: 0.4, w1x: 30, w1y: 70, X: 100, Y: 100 },
  { key: "same", label: "Same tastes, same bundle", source: "2023 Moed B T/F 2 and 2024 Moed B Q2b", a: 0.5, b: 0.5, w1x: 50, w1y: 50, X: 100, Y: 100 },
];

const NOTES = [
  "Agent 1 measures from the bottom-left corner, agent 2 from the top-right. The box is the total endowment; the dot is who starts with what.",
  "The contract curve: every point where the two indifference curves are tangent, MRS₁ = MRS₂. Identical Cobb-Douglas shares give the diagonal.",
  "Any price ratio gives a budget line through the endowment, slope −pₓ/p_y. Both agents face the same line.",
  "At the equilibrium price both agents' best bundles are the same point: on the line, on the contract curve, both curves tangent to it (First Welfare Theorem).",
  "Your turn. Change the tastes or the endowment and watch the contract curve, the price and the equilibrium move.",
];

// Equilibrium p_x with p_y = 1, from market clearing for x.
const eqPrice = (a: number, b: number, w1x: number, w1y: number, X: number, Y: number) =>
  (a * w1y + b * (Y - w1y)) / (X - a * w1x - b * (X - w1x));

export default function MicroIIEdgeworth({ paper = "a24" }: Props): VNode {
  const start = CASES.find((c) => c.key === paper) ?? CASES[0];
  const [pick, setPick] = useState(start.key);
  const chosen = CASES.find((c) => c.key === pick) ?? start;
  const [tune, setTune] = useState({ a: chosen.a, b: chosen.b, w1x: chosen.w1x, w1y: chosen.w1y });
  const { X, Y } = chosen;
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMin: 0, xMax: X, yMax: Y }], maxWidth: 560, aspect: Y / X > 1.2 ? 0.95 : 0.8, padding: { left: 34, right: 34, top: 30, bottom: 34 } });
  const { step, show, drawNow, narrow } = sketch;
  const frame = sketch.frames[0];
  const exploring = step === NOTES.length - 1;
  const target = exploring ? tune : { a: chosen.a, b: chosen.b, w1x: chosen.w1x, w1y: chosen.w1y };
  const v = useGlide(target, false);
  const { a, b, w1x, w1y } = v;

  const k = a / (1 - a), m = b / (1 - b);
  const contract = (x1: number) => (m * Y * x1) / (k * X + (m - k) * x1);
  const p = eqPrice(a, b, w1x, w1y, X, Y);
  const income1 = p * w1x + w1y;
  const x1 = clamp((a * income1) / p, 0, X), y1 = clamp((1 - a) * income1, 0, Y);
  const x2 = X - x1, y2 = Y - y1;
  const u1 = Math.pow(x1, a) * Math.pow(y1, 1 - a);
  const u2 = Math.pow(x2, b) * Math.pow(y2, 1 - b);
  const P = (x: number, y: number): [number, number] => [frame.x(x), frame.y(y)];

  // Agent 1's indifference curve through (x1, y1): y = (u1 / x^a)^(1/(1-a)).
  const ic1: [number, number][] = [];
  const ic2: [number, number][] = [];
  for (let i = 1; i <= 80; i++) {
    const x = (X * i) / 80;
    const y = Math.pow(u1 / Math.pow(x, a), 1 / (1 - a));
    if (y <= Y * 1.05) ic1.push(P(x, y));
    // Agent 2 in her own coordinates (x', y'), drawn at (X - x', Y - y').
    const yy = Math.pow(u2 / Math.pow(x, b), 1 / (1 - b));
    if (yy <= Y * 1.05) ic2.push(P(X - x, Y - yy));
  }
  // Price line through the endowment: y = w1y - p (x - w1x).
  const shownPrice = show(3) ? p : p * 0.55 + 0.1;
  const lineAt = (x: number) => w1y - shownPrice * (x - w1x);
  const xLeft = Math.max(0, w1x - (Y - w1y) / shownPrice), xRight = Math.min(X, w1x + w1y / shownPrice);

  const drawing: VNode[] = [
    <InkLine x1={frame.left} y1={frame.bottom} x2={frame.right} y2={frame.bottom} id={`eb-b-${pick}`} color={INK_SOFT} width={1.6} />,
    <InkLine x1={frame.left} y1={frame.top} x2={frame.right} y2={frame.top} id={`eb-t-${pick}`} color={INK_SOFT} width={1.6} />,
    <InkLine x1={frame.left} y1={frame.top} x2={frame.left} y2={frame.bottom} id={`eb-l-${pick}`} color={INK_SOFT} width={1.6} />,
    <InkLine x1={frame.right} y1={frame.top} x2={frame.right} y2={frame.bottom} id={`eb-r-${pick}`} color={INK_SOFT} width={1.6} />,
    <Note x={frame.left - 6} y={frame.bottom + 20} text="0₁" color={MARKER.blue} size={18} anchor="end" />,
    <Note x={frame.right + 6} y={frame.top - 8} text="0₂" color={MARKER.red} size={18} />,
    <Note x={frame.right} y={frame.bottom + 22} text={`x₁ → (X = ${X})`} color={MARKER.blue} size={15} anchor="end" />,
    <Note x={frame.left} y={frame.top - 10} text={`← x₂   (Y = ${Y})`} color={MARKER.red} size={15} />,
    <Dot x={frame.x(w1x)} y={frame.y(w1y)} color={INK_SOFT} radius={6} />,
    <Note x={frame.x(w1x) + 8} y={frame.y(w1y) + 18} text="ω" color={INK_SOFT} size={18} />,
  ];
  if (show(1)) {
    const pts: [number, number][] = [];
    for (let i = 0; i <= 80; i++) { const x = (X * i) / 80; pts.push(P(x, contract(x))); }
    drawing.push(<InkCurve points={pts} id={`eb-cc-${pick}`} color={MARKER.purple} width={2.4} draw={drawNow(1)} />);
    if (!narrow) drawing.push(<Note x={frame.x(X * 0.82)} y={frame.y(contract(X * 0.82)) + 20} text="contract curve" color={MARKER.purple} size={16} anchor="middle" />);
  }
  if (show(2)) {
    drawing.push(<InkDashed x1={frame.x(xLeft)} y1={frame.y(lineAt(xLeft))} x2={frame.x(xRight)} y2={frame.y(lineAt(xRight))} id={`eb-pl-${pick}-${step}`} color={MARKER.amber} width={2} draw={drawNow(2) || drawNow(3)} />);
  }
  if (show(3)) {
    drawing.push(<g clip-path={sketch.clip()}><InkCurve points={ic1} id={`eb-ic1-${pick}`} color={MARKER.blue} width={2} draw={drawNow(3)} /><InkCurve points={ic2} id={`eb-ic2-${pick}`} color={MARKER.red} width={2} draw={drawNow(3)} /></g>);
    drawing.push(<Dot x={frame.x(x1)} y={frame.y(y1)} color={MARKER.green} radius={6} />);
    drawing.push(<Note x={frame.x(x1) - 8} y={frame.y(y1) - 10} text="equilibrium" color={MARKER.green} size={16} anchor="end" />);
  }

  const frac = (value: number) => fmt(value, 2);
  const TEX = [
    `\\omega_1 = (${fmt(w1x, 0)}, ${fmt(w1y, 0)}),\\ \\omega_2 = (${fmt(X - w1x, 0)}, ${fmt(Y - w1y, 0)})`,
    `\\tfrac{${frac(a)}}{${frac(1 - a)}}\\tfrac{y_1}{x_1} = \\tfrac{${frac(b)}}{${frac(1 - b)}}\\tfrac{${Y} - y_1}{${X} - x_1}`,
    `p_x x_i + y_i = p_x\\omega_{ix} + \\omega_{iy}\\quad (p_y = 1)`,
    `p_x = ${fmt(p, 3)}:\\ (x_1, y_1) = (${fmt(x1, 1)}, ${fmt(y1, 1)}),\\ (x_2, y_2) = (${fmt(x2, 1)}, ${fmt(y2, 1)})`,
    `p_x = ${fmt(p, 3)}:\\ (x_1, y_1) = (${fmt(x1, 1)}, ${fmt(y1, 1)}),\\ (x_2, y_2) = (${fmt(x2, 1)}, ${fmt(y2, 1)})`,
  ];

  const choose = (key: string) => {
    const next = CASES.find((c) => c.key === key) ?? CASES[0];
    setPick(next.key);
    setTune({ a: next.a, b: next.b, w1x: next.w1x, w1y: next.w1y });
  };

  return (
    <SketchGraph
      sketch={sketch}
      note={NOTES[step]}
      tex={TEX[step]}
      footnote={`${chosen.source}: U₁ = x₁^a y₁^(1−a), U₂ = x₂^b y₂^(1−b). Equilibrium price from x₁ + x₂ = ${X}, with p_y = 1.`}
      ariaLabel={`Edgeworth box for ${chosen.source}. Equilibrium price ${fmt(p, 2)}; agent 1 gets (${fmt(x1, 1)}, ${fmt(y1, 1)}) and agent 2 gets (${fmt(x2, 1)}, ${fmt(y2, 1)}).`}
      top={<Toggle label="Economy" active={pick} onPick={choose} options={CASES.map((c) => ({ key: c.key, label: c.label }))} />}
      explore={<div class="graph-sliders">
        <Slider label="agent 1's share a" value={Math.round(tune.a * 100) / 100} min={0.1} max={0.9} step={0.05} onInput={(value) => setTune({ ...tune, a: value })} />
        <Slider label="agent 2's share b" value={Math.round(tune.b * 100) / 100} min={0.1} max={0.9} step={0.05} onInput={(value) => setTune({ ...tune, b: value })} />
        <Slider label="ω₁ of x" value={Math.round(tune.w1x)} min={5} max={X - 5} step={5} onInput={(value) => setTune({ ...tune, w1x: value })} />
        <Slider label="ω₁ of y" value={Math.round(tune.w1y)} min={5} max={Y - 5} step={5} onInput={(value) => setTune({ ...tune, w1y: value })} />
      </div>}
    >
      {drawing}
    </SketchGraph>
  );
}
