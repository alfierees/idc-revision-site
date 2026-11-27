import { useState } from "preact/hooks";
import type { VNode } from "preact";
import {
  useSketch, useGlide, SketchGraph, SketchAxes, InkLine, InkDashed, Note, Dot, Toggle, Slider,
  fmt, MARKER,
} from "./sketch";

// Micro II: the two-agent public good game, best responses and free riding.
//   type: microii-public-good
//   paper: b24eq | b24 | alice   (which case opens)
// U_i = a_i·√g + y_i, g = g1 + g2, one unit costs 1. Stand-alone level
// g_i° = a_i²/4; best response BR_i(g_j) = max(0, g_i° − g_j); planner
// g* = (a1 + a2)²/4. Steps: agent 1's best response → agent 2's → the Nash
// equilibria where they meet → the planner's total, far above → explore.

interface Props { paper?: string; }
interface Case { key: string; label: string; source: string; a1: number; a2: number; }
const CASES: Case[] = [
  { key: "b24eq", label: "a = b = 6", source: "2024 Moed B Q4b", a1: 6, a2: 6 },
  { key: "b24", label: "a = 4, b = 6", source: "2024 Moed B Q4c", a1: 4, a2: 6 },
  { key: "alice", label: "a = 7, b = 5", source: "a made-up case (agent 1 keener)", a1: 7, a2: 5 },
];

const NOTES = [
  "Agent 1 only cares about the total. If agent 2 gives g₂, agent 1 tops up to her stand-alone level g₁°: BR₁ = max(0, g₁° − g₂).",
  "Agent 2 does the same with her own level g₂°.",
  "A Nash equilibrium is where both best responses hold at once. Equal levels: every split on the line g₁ + g₂ = g°. Unequal: only the keener agent pays.",
  "The planner adds both marginal benefits: V₁′ + V₂′ = 1. Its total (dashed) lies far outside every equilibrium: under-provision.",
  "Your turn. Change how much each agent values the good.",
];

export default function MicroIIPublicGood({ paper = "b24eq" }: Props): VNode {
  const start = CASES.find((c) => c.key === paper) ?? CASES[0];
  const [pick, setPick] = useState(start.key);
  const chosen = CASES.find((c) => c.key === pick) ?? start;
  const [tune, setTune] = useState({ a1: chosen.a1, a2: chosen.a2 });
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMin: 0, xMax: 1, yMax: 1 }], maxWidth: 560, aspect: 0.85, padding: { left: 44, bottom: 40, top: 18 } });
  const { step, show, drawNow, narrow } = sketch;
  const exploring = step === NOTES.length - 1;
  const v = useGlide(exploring ? tune : { a1: chosen.a1, a2: chosen.a2 }, false);
  const g1o = (v.a1 * v.a1) / 4, g2o = (v.a2 * v.a2) / 4;
  const gStar = ((v.a1 + v.a2) * (v.a1 + v.a2)) / 4;
  const span = show(3) ? gStar * 1.08 : Math.max(g1o, g2o) * 1.6;
  const shown = useGlide({ span }, false);
  const base = sketch.frames[0];
  const m = shown.span;
  const frame = {
    ...base, xMax: m, yMax: m,
    x: (value: number) => base.left + (value / m) * (base.right - base.left),
    y: (value: number) => base.bottom - (value / m) * (base.bottom - base.top),
  };

  const equal = Math.abs(g1o - g2o) < 1e-6;
  const drawing: VNode[] = [
    <SketchAxes frame={frame} id={`pg-axes-${pick}`} xTicks={[0, Math.round(g1o), ...(show(3) ? [Math.round(gStar)] : [])]} yTicks={[0, Math.round(g2o), ...(show(3) ? [Math.round(gStar)] : [])]} xLabel="g₁" yLabel="g₂" />,
  ];
  // BR1 as g1 against g2: g1 = g1o - g2 for g2 < g1o, then g1 = 0 up the axis.
  drawing.push(<InkLine x1={frame.x(g1o)} y1={frame.y(0)} x2={frame.x(0)} y2={frame.y(g1o)} id={`pg-br1-${pick}`} color={MARKER.blue} width={2.8} draw={drawNow(0)} />);
  drawing.push(<InkLine x1={frame.x(0) + 3} y1={frame.y(g1o)} x2={frame.x(0) + 3} y2={frame.top} id={`pg-br1v-${pick}`} color={MARKER.blue} width={2.8} draw={drawNow(0)} />);
  drawing.push(<Note x={frame.x(g1o) + 4} y={frame.y(0) - 10} text="BR₁" color={MARKER.blue} size={17} />);
  if (show(1)) {
    drawing.push(<InkLine x1={frame.x(0)} y1={frame.y(g2o)} x2={frame.x(g2o)} y2={frame.y(0)} id={`pg-br2-${pick}`} color={MARKER.red} width={2.8} draw={drawNow(1)} />);
    drawing.push(<InkLine x1={frame.x(g2o)} y1={frame.y(0) - 3} x2={frame.right} y2={frame.y(0) - 3} id={`pg-br2h-${pick}`} color={MARKER.red} width={2.8} draw={drawNow(1)} />);
    drawing.push(<Note x={frame.x(0) + 10} y={frame.y(g2o) - 8} text="BR₂" color={MARKER.red} size={17} />);
  }
  let eqText = "";
  if (show(2)) {
    if (equal) {
      drawing.push(<InkLine x1={frame.x(g1o)} y1={frame.y(0)} x2={frame.x(0)} y2={frame.y(g1o)} id={`pg-ne-${pick}`} color={MARKER.purple} width={5} draw={drawNow(2)} />);
      eqText = `\\text{every } g_1 + g_2 = ${fmt(g1o, 2)}`;
    } else if (g1o > g2o) {
      drawing.push(<Dot x={frame.x(g1o)} y={frame.y(0)} color={MARKER.purple} radius={7} />);
      eqText = `(g_1, g_2) = (${fmt(g1o, 2)}, 0)`;
    } else {
      drawing.push(<Dot x={frame.x(0)} y={frame.y(g2o)} color={MARKER.purple} radius={7} />);
      eqText = `(g_1, g_2) = (0, ${fmt(g2o, 2)})`;
    }
    if (!narrow) drawing.push(<Note x={frame.x(Math.max(g1o, g2o) * 0.55) + 10} y={frame.y(Math.max(g1o, g2o) * 0.55) - 10} text="Nash" color={MARKER.purple} size={17} />);
  }
  if (show(3)) {
    drawing.push(<InkDashed x1={frame.x(gStar)} y1={frame.y(0)} x2={frame.x(0)} y2={frame.y(gStar)} id={`pg-opt-${pick}`} color={MARKER.green} width={2.2} draw={drawNow(3)} />);
    drawing.push(<Note x={frame.x(gStar * 0.55) + 8} y={frame.y(gStar * 0.45) - 8} text="planner: g₁ + g₂ = g*" color={MARKER.green} size={16} />);
  }

  const TEX = [
    `\\tfrac{${fmt(v.a1, 1)}}{2\\sqrt g} = 1 \\Rightarrow g_1^{o} = \\tfrac{${fmt(v.a1, 1)}^2}{4} = ${fmt(g1o, 2)}`,
    `g_2^{o} = \\tfrac{${fmt(v.a2, 1)}^2}{4} = ${fmt(g2o, 2)}`,
    `\\text{Nash: } ${eqText},\\ \\text{total } ${fmt(Math.max(g1o, g2o), 2)}`,
    `\\tfrac{${fmt(v.a1, 1)} + ${fmt(v.a2, 1)}}{2\\sqrt g} = 1 \\Rightarrow g^* = ${fmt(gStar, 2)} > ${fmt(Math.max(g1o, g2o), 2)}`,
    `g^{NE} = ${fmt(Math.max(g1o, g2o), 2)},\\ g^* = ${fmt(gStar, 2)}`,
  ];

  const choose = (key: string) => {
    const next = CASES.find((c) => c.key === key) ?? CASES[0];
    setPick(next.key);
    setTune({ a1: next.a1, a2: next.a2 });
  };

  return (
    <SketchGraph
      sketch={sketch}
      note={NOTES[step]}
      tex={TEX[step]}
      footnote={`${chosen.source}: U₁ = a√g + y₁, U₂ = b√g + y₂, each unit of g costs 1.`}
      ariaLabel={`Public good game: stand-alone levels ${fmt(g1o, 1)} and ${fmt(g2o, 1)}; the equilibrium total is ${fmt(Math.max(g1o, g2o), 1)} against the planner's ${fmt(gStar, 1)}.`}
      top={<Toggle label="Case" active={pick} onPick={choose} options={CASES.map((c) => ({ key: c.key, label: c.label }))} />}
      explore={<div class="graph-sliders">
        <Slider label="agent 1's a" value={tune.a1} min={2} max={10} step={0.5} onInput={(value) => setTune({ ...tune, a1: value })} />
        <Slider label="agent 2's b" value={tune.a2} min={2} max={10} step={0.5} onInput={(value) => setTune({ ...tune, a2: value })} />
      </div>}
    >
      {drawing}
    </SketchGraph>
  );
}
