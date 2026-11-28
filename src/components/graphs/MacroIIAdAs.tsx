import { useState } from "preact/hooks";
import type { VNode } from "preact";
import {
  useSketch, useGlide, SketchGraph, SketchAxes, InkLine, InkDashed, Note, Dot, Toggle, Slider, ShiftArrow,
  fmt, MARKER,
} from "./sketch";

// Macro II, Lectures 6 and 14: AD-AS, short run against long run.
//   type: macroii-adas
//   shock: demand-fall | demand-rise | supply
// SRAS: Y = Ȳ + α(P − EP) (Lecture 14), drawn as P = EP + (Y − Ȳ)/α with
// Ȳ = 100, α = 2. AD: P = A/Y-style straight line P = a − 0.5Y. Start
// a = 150, EP = 100, so Y = 100, P = 100.
// Steps: LRAS → AD → SRAS and the long-run equilibrium → the shock and the
// short-run point → expectations adjust, SRAS shifts back to Ȳ → explore
// (slide time, or let the central bank accommodate a supply shock).

interface Props { shock?: string; }
type Shock = "demand-fall" | "demand-rise" | "supply";
const YBAR = 100, ALPHA = 2;
const adP = (a: number, Y: number) => a - 0.5 * Y;
const srasP = (ep: number, Y: number) => ep + (Y - YBAR) / ALPHA;
const cross = (a: number, ep: number) => {
  // a − 0.5Y = ep + (Y − 100)/2  ⇒  Y = a − ep + 50
  const Y = a - ep + 50;
  return { Y, P: adP(a, Y) };
};
interface Path { a1: number; ep1: number; aEnd: number; epEnd: number; label: string; story: string; end: string; }
const PATHS: Record<Shock, Path> = {
  "demand-fall": {
    a1: 130, ep1: 100, aEnd: 130, epEnd: 80, label: "AD falls",
    story: "A fall in demand (pessimism, a cut in M or G) shifts AD left. Prices are expected at 100, so output falls below Ȳ and unemployment rises.",
    end: "With output below normal, firms and workers lower their expected price level: SRAS shifts down until Y is back at Ȳ. Only P fell for good.",
  },
  "demand-rise": {
    a1: 170, ep1: 100, aEnd: 170, epEnd: 120, label: "AD rises",
    story: "A demand boom (more M, more G, optimism) shifts AD right: output rises above Ȳ at a higher P.",
    end: "Output above normal pushes expected prices up: SRAS shifts up until Y is back at Ȳ. In the long run money is neutral: only P is higher.",
  },
  supply: {
    a1: 150, ep1: 120, aEnd: 150, epEnd: 100, label: "supply shock",
    story: "An adverse supply shock (oil, drought) shifts SRAS up: higher P and lower Y at the same time, stagflation.",
    end: "With no policy, the recession pushes prices back down and SRAS returns: Y and P go back to where they started. Accommodating it instead (raising AD) keeps Y at Ȳ but locks in the higher P.",
  },
};

const NOTES = [
  "The long-run aggregate supply is vertical at natural output Ȳ: in the long run output depends on K, L and technology, not on prices.",
  "AD slopes down: a lower P raises real balances M/P, lowers r, and raises spending.",
  "SRAS: Y = Ȳ + α(P − EP). Output is above normal only when prices beat expectations. Start in long-run equilibrium, P = EP.",
  "",
  "",
  "Your turn. Slide time to watch expectations adjust; for the supply shock, let the central bank accommodate.",
];

export default function MacroIIAdAs({ shock = "demand-fall" }: Props): VNode {
  const [pick, setPick] = useState<Shock>((Object.keys(PATHS).includes(shock) ? shock : "demand-fall") as Shock);
  const [time, setTime] = useState(0.5);
  const [accommodate, setAccommodate] = useState(false);
  const path = PATHS[pick];
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMin: 40, xMax: 160, yMin: 40, yMax: 160 }], maxWidth: 560, aspect: 0.85, padding: { left: 44, bottom: 40, top: 18 } });
  const { step, show, drawNow } = sketch;
  const frame = sketch.frames[0];
  const exploring = step === NOTES.length - 1;

  let a = 150, ep = 100;
  if (show(3)) { a = path.a1; ep = path.ep1; }
  if (step === 4) { a = path.aEnd; ep = path.epEnd; }
  if (exploring) {
    if (pick === "supply" && accommodate) {
      // Shift AD so that Y stays at Ȳ on the shocked SRAS: a − 50 = srasP(120, 100) = 120.
      a = path.a1 + time * (170 - path.a1); ep = path.ep1;
    } else {
      a = path.a1; ep = path.ep1 + time * (path.epEnd - path.ep1);
    }
  }
  const g = useGlide({ a, ep }, false);
  const eq = cross(g.a, g.ep);

  const drawing: VNode[] = [
    <InkLine x1={frame.x(YBAR)} y1={frame.y(42)} x2={frame.x(YBAR)} y2={frame.y(158)} id="lras" color={MARKER.grey} width={2.4} draw={drawNow(0)} />,
    <Note x={frame.x(YBAR) + 6} y={frame.y(154)} text="LRAS" color={MARKER.grey} size={16} />,
  ];
  const ad = (aa: number, id: string, dashed: boolean, label: string, at: number) => {
    const props = { x1: frame.x(45), y1: frame.y(adP(aa, 45)), x2: frame.x(155), y2: frame.y(adP(aa, 155)), id, color: MARKER.blue };
    drawing.push(dashed ? <InkDashed {...props} width={1.8} draw={drawNow(at)} /> : <InkLine {...props} width={2.6} draw={drawNow(at)} />);
    if (label) drawing.push(<Note x={frame.x(150)} y={frame.y(adP(aa, 150)) - 8} text={label} color={MARKER.blue} size={16} anchor="end" />);
  };
  const sras = (e: number, id: string, dashed: boolean, label: string, at: number) => {
    const props = { x1: frame.x(45), y1: frame.y(srasP(e, 45)), x2: frame.x(155), y2: frame.y(srasP(e, 155)), id, color: MARKER.red };
    drawing.push(dashed ? <InkDashed {...props} width={1.8} draw={drawNow(at)} /> : <InkLine {...props} width={2.6} draw={drawNow(at)} />);
    if (label) drawing.push(<Note x={frame.x(152)} y={frame.y(srasP(e, 152)) - 8} text={label} color={MARKER.red} size={16} anchor="end" />);
  };
  if (show(1)) {
    const adMoved = Math.abs(g.a - 150) > 0.3;
    ad(150, "ad0", adMoved, adMoved ? "" : "AD", 1);
    if (adMoved) ad(g.a, "ad1", false, "AD₂", 3);
  }
  if (show(2)) {
    const srMoved = Math.abs(g.ep - 100) > 0.3;
    sras(100, "sras0", srMoved, srMoved ? "" : "SRAS", 2);
    if (srMoved) sras(g.ep, "sras1", false, "SRAS₂", 3);
    drawing.push(<Dot x={frame.x(100)} y={frame.y(100)} color={MARKER.purple} radius={6} />);
  }
  if (show(3)) {
    const sr = cross(path.a1, path.ep1);
    if (step === 3 || step === 4) drawing.push(<Dot x={frame.x(sr.Y)} y={frame.y(sr.P)} color={MARKER.amber} radius={6} />);
    if (step === 4 && pick !== "supply") drawing.push(<ShiftArrow x1={frame.x(sr.Y)} y1={frame.y(sr.P)} x2={frame.x(eq.Y)} y2={frame.y(eq.P)} id="adjust" color={MARKER.green} draw={drawNow(4)} />);
    drawing.push(<Dot x={frame.x(eq.Y)} y={frame.y(eq.P)} color={MARKER.green} radius={6.5} />);
  }

  const notes = NOTES.slice();
  notes[3] = path.story;
  notes[4] = path.end;
  const sr = cross(path.a1, path.ep1), lr = cross(path.aEnd, path.epEnd);
  const TEX = [
    `\\bar Y = ${YBAR}`,
    `P = ${150} - 0.5Y`,
    `Y = \\bar Y + ${ALPHA}(P - EP),\\ EP = 100 \\Rightarrow (Y, P) = (100, 100)`,
    `\\text{short run: } Y = ${fmt(sr.Y, 1)},\\ P = ${fmt(sr.P, 1)}`,
    `\\text{long run: } EP = ${fmt(path.epEnd, 0)},\\ Y = ${fmt(lr.Y, 1)},\\ P = ${fmt(lr.P, 1)}`,
    `EP = ${fmt(ep, 1)},\\ Y = ${fmt(eq.Y, 1)},\\ P = ${fmt(eq.P, 1)},\\ Y - \\bar Y = ${fmt(eq.Y - YBAR, 1)}`,
  ];

  const choose = (key: string) => { setPick(key as Shock); setAccommodate(false); setTime(0.5); };
  return (
    <SketchGraph
      sketch={sketch}
      note={notes[step]}
      tex={TEX[step]}
      footnote="Illustrative straight lines: AD P = a − 0.5Y, SRAS Y = 100 + 2(P − EP), natural output 100."
      ariaLabel={`AD-AS: ${path.label}. Short run Y = ${fmt(sr.Y, 0)}, P = ${fmt(sr.P, 0)}; long run Y = ${fmt(lr.Y, 0)}, P = ${fmt(lr.P, 0)}.`}
      top={<Toggle label="Shock" active={pick} onPick={choose} options={(Object.keys(PATHS) as Shock[]).map((k) => ({ key: k, label: PATHS[k].label }))} />}
      explore={<div class="graph-sliders">
        <Slider label={pick === "supply" && accommodate ? "accommodation" : "time (expectations adjust)"} value={time} min={0} max={1} step={0.05} onInput={setTime} />
        {pick === "supply" && <Toggle label="Policy" active={accommodate ? "acc" : "none"} onPick={(key) => setAccommodate(key === "acc")} options={[{ key: "none", label: "no policy" }, { key: "acc", label: "accommodate" }]} />}
      </div>}
    >
      <SketchAxes frame={frame} id="adas-axes" xTicks={[60, 100, 140]} yTicks={[60, 100, 140]} xLabel="Y" yLabel="P" />
      <g clip-path={sketch.clip()}>{drawing}</g>
    </SketchGraph>
  );
}
