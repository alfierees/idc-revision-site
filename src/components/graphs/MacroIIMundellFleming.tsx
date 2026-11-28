import { useState } from "preact/hooks";
import type { VNode } from "preact";
import {
  useSketch, useGlide, SketchGraph, SketchAxes, InkLine, InkDashed, Note, Dot, Toggle, ShiftArrow,
  fmt, MARKER,
} from "./sketch";

// Macro II, Lecture 9: the Mundell-Fleming model of a small open economy with
// perfect capital mobility (r = r*), under floating and fixed exchange rates.
//   type: macroii-mundell-fleming
//   regime: floating | fixed
//   shock: fiscal | money | quota
// Illustrative linear curves: IS*: Y = 800 + 2ΔG + Δquota − 200e (e = foreign
// currency per unit of home currency, so a higher e is an appreciation and
// lowers NX); LM*: Y = 2·M/P, vertical. Start: M/P = 250, Y = 500, e = 1.5.
// Steps: IS* → LM* → equilibrium → the shock → how the regime responds →
// explore (switch regime and shock).

interface Props { regime?: string; shock?: string; }
type Regime = "floating" | "fixed";
type Shock = "fiscal" | "money" | "quota";
const SHOCK_LABEL: Record<Shock, string> = { fiscal: "G up", money: "M up", quota: "import quota" };

const isY = (shift: number, e: number) => 800 + shift - 200 * e;
const lmY = (m: number) => 2 * m;

function outcome(regime: Regime, shock: Shock) {
  const isShift = shock === "money" ? 0 : 100;
  const m0 = 250, mShock = shock === "money" ? 300 : 250;
  if (regime === "floating") {
    const Y = lmY(mShock);
    return { isShift, mFinal: mShock, mShock, Y, e: (800 + isShift - Y) / 200 };
  }
  // Fixed: e stays at 1.5; the central bank moves M until LM* passes through IS* at e = 1.5.
  const Y = isY(isShift, 1.5);
  return { isShift, mFinal: Y / 2, mShock, Y, e: 1.5, m0 };
}

const STORY: Record<Regime, Record<Shock, string>> = {
  floating: {
    fiscal: "IS* shifts right. With LM* fixed, the currency appreciates (e up) until net exports fall by as much as G rose. Y does not change: fiscal policy is powerless.",
    money: "LM* shifts right. r cannot fall below r*, so capital flows out and the currency depreciates (e down); net exports rise and Y rises. Monetary policy works.",
    quota: "The quota raises NX at every e: IS* shifts right. The currency appreciates, imports recover, and Y and NX end where they started.",
  },
  fixed: {
    fiscal: "IS* shifts right and pushes e up. To hold e, the central bank sells home currency: M rises, LM* follows, and Y rises by the full shift. Fiscal policy is powerful.",
    money: "LM* shifts right and pushes e down. To hold e, the central bank buys back its currency and M returns to where it was. Monetary policy is powerless.",
    quota: "IS* shifts right; to hold e the central bank expands M. Y and NX rise: trade policy works under a fixed rate.",
  },
};

const NOTES = [
  "IS*: goods-market equilibrium with r = r*. A higher e (appreciation) makes home goods dearer abroad and lowers net exports: IS* slopes down.",
  "LM*: money-market equilibrium with r = r*. M/P = L(r*, Y) pins down Y alone, whatever e is: LM* is vertical.",
  "Equilibrium where they cross.",
  "", // the shock
  "", // the regime's response
  "Your turn. Switch the regime and the shock.",
];

export default function MacroIIMundellFleming({ regime = "floating", shock = "fiscal" }: Props): VNode {
  const [reg, setReg] = useState<Regime>(regime === "fixed" ? "fixed" : "floating");
  const [shk, setShk] = useState<Shock>((["fiscal", "money", "quota"].includes(shock) ? shock : "fiscal") as Shock);
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMin: 300, xMax: 760, yMin: 0, yMax: 3 }], maxWidth: 600, aspect: 0.78, padding: { left: 44, bottom: 40, top: 18 } });
  const { step, show, drawNow } = sketch;
  const frame = sketch.frames[0];
  const out = outcome(reg, shk);
  // Step 3: the shock alone; step 4: the regime's response.
  const isShift = show(3) ? out.isShift : 0;
  const m = show(4) ? out.mFinal : show(3) ? out.mShock : 250;
  const g = useGlide({ isShift, m }, false);

  const drawing: VNode[] = [];
  const isLine = (shift: number, id: string, dashed: boolean, label: string, atStep: number) => {
    const props = { x1: frame.x(isY(shift, 0.15)), y1: frame.y(0.15), x2: frame.x(isY(shift, 2.85)), y2: frame.y(2.85), id, color: MARKER.blue };
    drawing.push(dashed ? <InkDashed {...props} width={1.8} draw={drawNow(atStep)} /> : <InkLine {...props} width={2.6} draw={drawNow(atStep)} />);
    if (label) drawing.push(<Note x={frame.x(isY(shift, 2.6)) + 8} y={frame.y(2.6)} text={label} color={MARKER.blue} size={17} />);
  };
  const lmLine = (mm: number, id: string, dashed: boolean, label: string, atStep: number) => {
    const props = { x1: frame.x(lmY(mm)), y1: frame.y(0.1), x2: frame.x(lmY(mm)), y2: frame.y(2.9), id, color: MARKER.red };
    drawing.push(dashed ? <InkDashed {...props} width={1.8} draw={drawNow(atStep)} /> : <InkLine {...props} width={2.6} draw={drawNow(atStep)} />);
    if (label) drawing.push(<Note x={frame.x(lmY(mm)) + 6} y={frame.y(2.8)} text={label} color={MARKER.red} size={17} />);
  };

  const isMoved = g.isShift > 1, lmMoved = Math.abs(g.m - 250) > 0.5;
  isLine(0, "is0", isMoved, isMoved ? "" : "IS*", 0);
  if (isMoved) {
    isLine(g.isShift, "is1", false, "IS*₂", 3);
    drawing.push(<ShiftArrow x1={frame.x(isY(0, 1.0))} y1={frame.y(1.0)} x2={frame.x(isY(g.isShift, 1.0))} y2={frame.y(1.0)} id="is-arrow" color={MARKER.blue} draw={drawNow(3)} />);
  }
  if (show(1)) {
    lmLine(250, "lm0", lmMoved, lmMoved ? "" : "LM*", 1);
    if (lmMoved) {
      lmLine(g.m, "lm1", false, "LM*₂", 3);
      drawing.push(<ShiftArrow x1={frame.x(500)} y1={frame.y(0.4)} x2={frame.x(lmY(g.m))} y2={frame.y(0.4)} id="lm-arrow" color={MARKER.red} draw={drawNow(3)} />);
    }
  }
  if (reg === "fixed" && show(3)) {
    drawing.push(<InkDashed x1={frame.left} y1={frame.y(1.5)} x2={frame.right} y2={frame.y(1.5)} id="peg" color={MARKER.amber} width={1.6} dash={6} gap={4} />);
    drawing.push(<Note x={frame.right - 4} y={frame.y(1.5) - 8} text="fixed e" color={MARKER.amber} size={15} anchor="end" />);
  }
  if (show(2)) drawing.push(<Dot x={frame.x(500)} y={frame.y(1.5)} color={MARKER.purple} radius={6} />);
  if (show(3)) {
    // Where the curves cross now.
    const Y = lmY(g.m), e = (800 + g.isShift - Y) / 200;
    drawing.push(<Dot x={frame.x(Y)} y={frame.y(e)} color={MARKER.green} radius={6.5} />);
    if (show(4)) drawing.push(<Note x={frame.x(Y) + 10} y={frame.y(e) - 10} text={`Y = ${fmt(Y, 0)}, e = ${fmt(e, 2)}`} color={MARKER.green} size={16} />);
  }

  const notes = NOTES.slice();
  const shockLine: Record<Shock, string> = {
    fiscal: "Fiscal expansion: G rises, IS* shifts right.",
    money: "Monetary expansion: M rises, LM* shifts right.",
    quota: "An import quota: imports fall, so NX is higher at every e and IS* shifts right.",
  };
  notes[3] = shockLine[shk];
  notes[4] = STORY[reg][shk];
  const Yf = out.Y, ef = out.e;
  const TEX = [
    `Y = C(Y - T) + I(r^*) + G + NX(e),\\quad e \\uparrow \\Rightarrow NX \\downarrow`,
    `\\frac{M}{P} = L(r^*, Y) \\Rightarrow Y = ${lmY(250)}`,
    `Y = 500,\\ e = 1.5`,
    shk === "money" ? `M/P: 250 \\to 300,\\ \\text{LM*: } Y = 600` : `\\text{IS*: } Y = 900 - 200e`,
    `\\text{${reg}: } Y = ${fmt(Yf, 0)},\\ e = ${fmt(ef, 2)},\\ M/P = ${fmt(out.mFinal, 0)}`,
    `\\text{${reg}, ${SHOCK_LABEL[shk]}: } \\Delta Y = ${fmt(Yf - 500, 0)},\\ \\Delta e = ${fmt(ef - 1.5, 2)}`,
  ];

  const regimeToggle = <Toggle label="Exchange rate" active={reg} onPick={(key) => setReg(key as Regime)} options={[{ key: "floating", label: "floating" }, { key: "fixed", label: "fixed" }]} />;
  return (
    <SketchGraph
      sketch={sketch}
      note={notes[step]}
      tex={TEX[step]}
      footnote="Illustrative linear curves. e is foreign currency per unit of home currency, as in the course: e up is an appreciation."
      ariaLabel={`Mundell-Fleming, ${reg} exchange rate, ${SHOCK_LABEL[shk]}: Y moves from 500 to ${fmt(Yf, 0)} and e from 1.5 to ${fmt(ef, 2)}.`}
      top={step === NOTES.length - 1
        ? <div>{regimeToggle}<Toggle label="Shock" active={shk} onPick={(key) => setShk(key as Shock)} options={(["fiscal", "money", "quota"] as Shock[]).map((k) => ({ key: k, label: SHOCK_LABEL[k] }))} /></div>
        : regimeToggle}
    >
      <SketchAxes frame={frame} id="mf-axes" xTicks={[400, 500, 600, 700]} yTicks={[0, 1, 2, 3]} xLabel="Y" yLabel="e" />
      <g clip-path={sketch.clip()}>{drawing}</g>
    </SketchGraph>
  );
}
