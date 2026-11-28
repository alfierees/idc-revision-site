import { useState } from "preact/hooks";
import type { VNode } from "preact";
import {
  useSketch, useGlide, SketchGraph, SketchAxes, InkLine, InkDashed, Note, Dot, Toggle, Slider, ShiftArrow,
  fmt, MARKER,
} from "./sketch";

// Macro II, Lectures 7 and 8: the IS-LM model and policy shocks.
//   type: macroii-islm
//   shock: fiscal | tax | money   (which shock opens)
// Numbers from 2025 Moed B Q19: C = 120 + 0.5(Y − T), I = 100 − 10r, G = 50,
// T = 40, L = Y − 20r, M = 600, P = 2. IS: Y = 2(220 + G − 0.5T) − 20r,
// LM: Y = M/P + 20r. Equilibrium Y = 400, r = 5.
// Steps: IS → LM → equilibrium → the shock (with the Keynesian-cross shift
// shown dashed) → new equilibrium and crowding out → explore G, T, M, P.

interface Props { shock?: string; }
type Shock = "fiscal" | "tax" | "money";
interface Policy { G: number; T: number; M: number; P: number; }
const BASE: Policy = { G: 50, T: 40, M: 600, P: 2 };
const SHOCKS: { key: Shock; label: string; after: Policy; text: string }[] = [
  { key: "fiscal", label: "G up 20", after: { ...BASE, G: 70 }, text: "G rises by 20. At the old r, the Keynesian cross would raise Y by 20/(1 − 0.5) = 40: IS shifts right by 40." },
  { key: "tax", label: "T cut 20", after: { ...BASE, T: 20 }, text: "T falls by 20. The tax multiplier is −0.5/(1 − 0.5) = −1, so IS shifts right by 20: less than for the same rise in G." },
  { key: "money", label: "M up 200", after: { ...BASE, M: 800 }, text: "M rises by 200, so real balances rise by 100. At any r, money demand must rise too: LM shifts right by 100." },
];

const isY = (p: Policy, r: number) => 2 * (220 + p.G - 0.5 * p.T) - 20 * r;
const lmY = (p: Policy, r: number) => p.M / p.P + 20 * r;
function solve(p: Policy) {
  const a = 2 * (220 + p.G - 0.5 * p.T), m = p.M / p.P;
  const r = (a - m) / 40;
  return { r, Y: m + 20 * r };
}

const NOTES = [
  "IS: goods-market equilibrium, Y = C(Y − T) + I(r) + G. A lower r raises investment and, through the multiplier, income: IS slopes down.",
  "LM: money-market equilibrium, M/P = L(r, Y). Higher income raises money demand, so with M/P fixed, r must rise: LM slopes up.",
  "Both markets clear where the curves cross.",
  "", // filled from the shock
  "The new equilibrium. For fiscal shocks r rises and investment falls (crowding out), so Y rises by less than the Keynesian-cross shift.",
  "Your turn. Move G, T, M and P and watch which curve shifts.",
];

export default function MacroIIIsLm({ shock = "fiscal" }: Props): VNode {
  const [pick, setPick] = useState<Shock>((SHOCKS.find((s) => s.key === shock)?.key ?? "fiscal") as Shock);
  const chosen = SHOCKS.find((s) => s.key === pick)!;
  const [tune, setTune] = useState<Policy>(chosen.after);
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMin: 250, xMax: 640, yMin: 0, yMax: 11 }], maxWidth: 600, aspect: 0.78, padding: { left: 44, bottom: 40, top: 18 } });
  const { step, show, drawNow, narrow } = sketch;
  const frame = sketch.frames[0];
  const exploring = step === NOTES.length - 1;
  const target = exploring ? tune : show(3) ? chosen.after : BASE;
  const p = useGlide({ ...target }, false) as Policy;
  const e0 = solve(BASE), e1 = solve(p);

  const line = (fn: (r: number) => number, id: string, color: string, atStep: number, label: string, dashed = false) => {
    const r0 = 0.3, r1 = 10.7;
    const props = { x1: frame.x(fn(r0)), y1: frame.y(r0), x2: frame.x(fn(r1)), y2: frame.y(r1), id, color, width: 2.6 };
    const out: VNode[] = [dashed ? <InkDashed {...props} width={1.8} draw={drawNow(atStep)} /> : <InkLine {...props} draw={drawNow(atStep)} />];
    if (label) out.push(<Note x={frame.x(fn(label === "IS" || label === "IS₂" ? 1.2 : 9.8)) + 6} y={frame.y(label === "IS" || label === "IS₂" ? 1.2 : 9.8) - 6} text={label} color={color} size={17} />);
    return out;
  };

  const drawing: VNode[] = [];
  const moved = show(3);
  drawing.push(...line((r) => isY(BASE, r), "is0", MARKER.blue, 0, moved && isY(p, 5) !== isY(BASE, 5) ? "" : "IS", moved && isY(p, 5) !== isY(BASE, 5)));
  if (show(1)) drawing.push(...line((r) => lmY(BASE, r), "lm0", MARKER.red, 1, moved && lmY(p, 5) !== lmY(BASE, 5) ? "" : "LM", moved && lmY(p, 5) !== lmY(BASE, 5)));
  if (show(2)) {
    drawing.push(<Dot x={frame.x(e0.Y)} y={frame.y(e0.r)} color={MARKER.purple} radius={6} />);
    if (!moved) drawing.push(<Note x={frame.x(e0.Y) + 10} y={frame.y(e0.r) + 20} text={`(${fmt(e0.Y, 0)}, ${fmt(e0.r, 1)})`} color={MARKER.purple} size={16} />);
  }
  if (moved) {
    if (Math.abs(isY(p, 5) - isY(BASE, 5)) > 0.5) {
      drawing.push(...line((r) => isY(p, r), "is1", MARKER.blue, 3, "IS₂"));
      drawing.push(<ShiftArrow x1={frame.x(isY(BASE, 2.5))} y1={frame.y(2.5)} x2={frame.x(isY(p, 2.5))} y2={frame.y(2.5)} id="is-shift" color={MARKER.blue} draw={drawNow(3)} />);
    }
    if (Math.abs(lmY(p, 5) - lmY(BASE, 5)) > 0.5) {
      drawing.push(...line((r) => lmY(p, r), "lm1", MARKER.red, 3, "LM₂"));
      drawing.push(<ShiftArrow x1={frame.x(lmY(BASE, 8.5))} y1={frame.y(8.5)} x2={frame.x(lmY(p, 8.5))} y2={frame.y(8.5)} id="lm-shift" color={MARKER.red} draw={drawNow(3)} />);
    }
    // Keynesian-cross shift at the old interest rate.
    const kcY = isY(p, e0.r);
    if (Math.abs(kcY - e0.Y) > 0.5) {
      drawing.push(<InkDashed x1={frame.x(e0.Y)} y1={frame.y(e0.r)} x2={frame.x(kcY)} y2={frame.y(e0.r)} id="kc" color={MARKER.amber} width={2} dash={5} gap={4} draw={drawNow(3)} />);
      if (!narrow) drawing.push(<Note x={frame.x(kcY) + 6} y={frame.y(e0.r) + 18} text="cross, r fixed" color={MARKER.amber} size={14} />);
    }
  }
  if (show(4)) {
    drawing.push(<Dot x={frame.x(e1.Y)} y={frame.y(e1.r)} color={MARKER.green} radius={6.5} />);
    drawing.push(<Note x={frame.x(e1.Y) + 10} y={frame.y(e1.r) - 10} text={`(${fmt(e1.Y, 0)}, ${fmt(e1.r, 2)})`} color={MARKER.green} size={16} />);
  }

  const TEX = [
    `Y = 120 + 0.5(Y - ${fmt(BASE.T, 0)}) + 100 - 10r + ${fmt(BASE.G, 0)} \\Rightarrow Y = ${fmt(isY(BASE, 0), 0)} - 20r`,
    `\\frac{M}{P} = \\frac{${BASE.M}}{${BASE.P}} = Y - 20r \\Rightarrow Y = ${fmt(BASE.M / BASE.P, 0)} + 20r`,
    `${fmt(isY(BASE, 0), 0)} - 20r = ${fmt(BASE.M / BASE.P, 0)} + 20r \\Rightarrow r = ${fmt(e0.r, 1)},\\ Y = ${fmt(e0.Y, 0)}`,
    pick === "money" ? `\\frac{M}{P} = \\frac{800}{2} = 400:\\ Y = 400 + 20r` : `\\text{IS: } Y = ${fmt(isY(chosen.after, 0), 0)} - 20r\\quad(\\text{shift } ${fmt(isY(chosen.after, 0) - isY(BASE, 0), 0)})`,
    `r = ${fmt(solve(chosen.after).r, 2)},\\ Y = ${fmt(solve(chosen.after).Y, 0)}\\quad(\\Delta Y = ${fmt(solve(chosen.after).Y - e0.Y, 0)}\\ \\text{vs cross } ${fmt(isY(chosen.after, e0.r) - e0.Y, 0)})`,
    `\\text{IS: } Y = ${fmt(isY(tune, 0), 0)} - 20r,\\ \\text{LM: } Y = ${fmt(tune.M / tune.P, 0)} + 20r \\Rightarrow r = ${fmt(solve(tune).r, 2)},\\ Y = ${fmt(solve(tune).Y, 1)}`,
  ];
  const notes = NOTES.slice();
  notes[3] = chosen.text;

  const choose = (key: string) => {
    const next = SHOCKS.find((s) => s.key === key)!;
    setPick(next.key);
    setTune(next.after);
  };

  return (
    <SketchGraph
      sketch={sketch}
      note={notes[step]}
      tex={TEX[step]}
      footnote="2025 Moed B Q19: C = 120 + 0.5(Y − T), I = 100 − 10r, G = 50, T = 40, L = Y − 20r, M = 600, P = 2."
      ariaLabel={`IS-LM: equilibrium Y = ${fmt(e0.Y, 0)}, r = ${fmt(e0.r, 1)}; after the shock Y = ${fmt(e1.Y, 0)}, r = ${fmt(e1.r, 2)}.`}
      top={<Toggle label="Shock" active={pick} onPick={choose} options={SHOCKS.map((s) => ({ key: s.key, label: s.label }))} />}
      explore={<div class="graph-sliders">
        <Slider label="G" value={tune.G} min={0} max={120} step={5} onInput={(value) => setTune({ ...tune, G: value })} />
        <Slider label="T" value={tune.T} min={0} max={120} step={5} onInput={(value) => setTune({ ...tune, T: value })} />
        <Slider label="M" value={tune.M} min={400} max={900} step={20} onInput={(value) => setTune({ ...tune, M: value })} />
        <Slider label="P" value={tune.P} min={1.5} max={3} step={0.1} onInput={(value) => setTune({ ...tune, P: value })} />
      </div>}
    >
      <SketchAxes frame={frame} id="islm-axes" xTicks={[300, 400, 500, 600]} yTicks={[0, 5, 10]} xLabel="Y" yLabel="r" />
      <g clip-path={sketch.clip()}>{drawing}</g>
    </SketchGraph>
  );
}
