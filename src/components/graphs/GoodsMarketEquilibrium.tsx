import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { makeFrame, Axes, seg, label, Slider, ticks, PALETTE, C } from "./plot";

// Loanable-funds / goods-market equilibrium: saving S(r) = S0 + a·r (upward in r)
// meets investment I(r) = I0 − b·r (downward in r); their crossing sets the real
// interest rate r*. One curve shifts (config-driven) so this single component
// serves every goods-market question:
//   type: goods-market
//   shift: investment | savings     (which curve moves)
//   direction: right | left          (which way)
//   label: "optimism about future productivity"   (caption for the shock)
// A slider scales the shock live; the pre-shift curve is drawn dashed, the new
// curve solid, both equilibria marked. r is on the vertical axis (textbook style).

interface Props {
  shift?: string;      // "investment" | "savings"
  direction?: string;  // "right" | "left"
  label?: string;      // human caption for the shock
  shock?: number;      // initial shock magnitude
}

const S0 = 20, A = 4;   // saving:     S(r) = 20 + 4r
const I0 = 60, B = 4;   // investment: I(r) = 60 − 4r  (baseline r* = 5, q* = 40)
const qMax = 90, rMax = 10, SHOCK_MAX = 28;

export default function GoodsMarketEquilibrium({
  shift = "investment",
  direction = "right",
  label: caption,
  shock: shock0 = 16,
}: Props): VNode {
  const [shock, setShock] = useState(shock0);
  const r1 = (n: number) => Math.round(n * 10) / 10;

  const movesInvestment = shift !== "savings";
  const dir = direction === "left" ? -1 : 1;
  const signed = dir * shock;                       // + = rightward (more demanded/supplied)

  // effective intercepts after the shift
  const Ieff = I0 + (movesInvestment ? signed : 0);
  const Seff = S0 + (movesInvestment ? 0 : signed);

  const eq = (i: number, s: number) => {
    const r = (i - s) / (A + B);
    return { r, q: s + A * r };
  };
  const e0 = eq(I0, S0);        // original equilibrium
  const e1 = eq(Ieff, Seff);    // post-shift equilibrium

  // curve endpoints across the full r-axis, in (q, r) space
  const sLine = (s: number): [number, number, number, number] => [s + A * 0, 0, s + A * rMax, rMax];
  const iLine = (i: number): [number, number, number, number] => [i - B * 0, 0, i - B * rMax, rMax];

  const fr = makeFrame({ w: 470, h: 340, qMax, pMax: rMax, padB: 34 });
  const els: VNode[] = [];
  els.push(<Axes f={fr} xTicks={ticks(qMax)} yTicks={ticks(rMax)} xLabel="S, I  (loanable funds)" yLabel="r" />);

  const S_C = PALETTE.marginStroke;   // saving — green
  const I_C = PALETTE.feeStroke;      // investment — blue
  const shifted = shock > 0.01;

  // --- fixed curve (solid) + shifting curve (dashed original, solid new) ---
  if (movesInvestment) {
    els.push(seg(fr, ...sLine(S0), S_C, 2));
    els.push(label(fr, S0 + A * rMax, rMax - 0.15, "S", S_C, "start", 12, true));
    if (shifted) els.push(seg(fr, ...iLine(I0), I_C, 1.5, "5 4"));   // original I
    els.push(seg(fr, ...iLine(Ieff), I_C, 2));                        // new I
    els.push(label(fr, Ieff - B * 0.4, 0.5, shifted ? "I'" : "I", I_C, "start", 12, true));
  } else {
    els.push(seg(fr, ...iLine(I0), I_C, 2));
    els.push(label(fr, I0 - B * 0.4, 0.5, "I", I_C, "start", 12, true));
    if (shifted) els.push(seg(fr, ...sLine(S0), S_C, 1.5, "5 4"));    // original S
    els.push(seg(fr, ...sLine(Seff), S_C, 2));                         // new S
    els.push(label(fr, Seff + A * rMax, rMax - 0.15, shifted ? "S'" : "S", S_C, "start", 12, true));
  }

  // --- shift-direction arrow ---
  if (shifted) {
    const ay = rMax * 0.32;
    const from = movesInvestment ? I0 - B * ay : S0 + A * ay;
    const to = movesInvestment ? Ieff - B * ay : Seff + A * ay;
    els.push(seg(fr, from, ay, to, ay, C.ACCENT, 1.5));
    const head = to + (to > from ? -2.5 : 2.5);
    els.push(<polyline points={`${fr.x(head)},${fr.y(ay) - 3.5} ${fr.x(to)},${fr.y(ay)} ${fr.x(head)},${fr.y(ay) + 3.5}`} style={`fill:none;stroke:${C.ACCENT};stroke-width:1.5`} />);
  }

  // --- equilibrium guides + points ---
  const guide = (e: { r: number; q: number }, faded: boolean) => {
    const col = faded ? C.RULE : C.ACCENT;
    els.push(<line x1={fr.x(0)} y1={fr.y(e.r)} x2={fr.x(e.q)} y2={fr.y(e.r)} style={`stroke:${col};stroke-width:1;stroke-dasharray:2 2`} />);
    els.push(<line x1={fr.x(e.q)} y1={fr.y(0)} x2={fr.x(e.q)} y2={fr.y(e.r)} style={`stroke:${col};stroke-width:1;stroke-dasharray:2 2`} />);
  };
  if (shifted) guide(e0, true);
  guide(e1, false);
  if (shifted) els.push(<circle cx={fr.x(e0.q)} cy={fr.y(e0.r)} r="4" style={`fill:none;stroke:${C.ACCENT};stroke-width:1.5`} />);
  els.push(<circle cx={fr.x(e1.q)} cy={fr.y(e1.r)} r="4.5" style={`fill:${C.ACCENT}`} />);

  const arrow = (now: number, was: number) => (now > was + 0.05 ? "↑" : now < was - 0.05 ? "↓" : "—");
  const shockName = caption ?? (movesInvestment ? "investment shock" : "saving shock");

  return (
    <div class="graph">
      <div class="graph-sliders">
        <Slider label={shockName} value={shock} min={0} max={SHOCK_MAX} step={1} onInput={setShock} />
      </div>
      <div class="graph-cap">
        Saving <b>S(r)</b> rises with the interest rate; investment <b>I(r)</b> falls with it; where they cross sets <b>r*</b>. Drag the shock to slide the <b>{movesInvestment ? "investment" : "saving"}</b> curve to the <b>{direction}</b> — the dashed line is its original position — and watch the equilibrium move.
      </div>
      <svg viewBox="0 0 470 340" width="100%" role="img" aria-label="Goods-market (loanable-funds) equilibrium">{els}</svg>
      <div class="graph-legend">
        <span><i class="gsw" style={`background:${S_C}`} />saving S</span>
        <span><i class="gsw" style={`background:${I_C}`} />investment I</span>
        <span><i class="gsw" style={`background:${C.ACCENT}`} />equilibrium</span>
      </div>
      <div class="graph-readout">
        <span class="rd">r* <b>{r1(e1.r)}</b> {shifted && <span>{arrow(e1.r, e0.r)}</span>}</span>
        <span class="rd">I = S <b>{r1(e1.q)}</b> {shifted && <span>{arrow(e1.q, e0.q)}</span>}</span>
        {shifted && <span class="rd">was r* {r1(e0.r)}, I=S {r1(e0.q)}</span>}
      </div>
    </div>
  );
}
