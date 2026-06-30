import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { makeFrame, Axes, seg, label, Slider, ticks, PALETTE, C } from "./plot";

// Differentiated-Bertrand reaction functions in (P1, P2) space. Demand
// q_i = α − β P_i + γ P_j, zero cost. BR_i: P_i = (α + γ P_j)/(2β) — UPWARD
// sloping (prices are strategic complements), crossing at the symmetric Nash
// price P* = α/(2β − γ). Sliders: market size α and substitutability γ.

interface Props { alpha?: number; gamma?: number; beta?: number; }

export default function BertrandDiffReaction({ alpha: a0 = 168, gamma: g0 = 1, beta = 2 }: Props): VNode {
  const [alpha, setAlpha] = useState(a0);
  const [gamma, setGamma] = useState(g0);

  const g = Math.min(gamma, 2 * beta - 0.2);
  const nash = alpha / (2 * beta - g);
  const r1 = (n: number) => Math.round(n * 10) / 10;
  const axMax = Math.max(nash * 1.8, alpha / (2 * beta));

  const f = makeFrame({ w: 430, h: 360, qMax: axMax, pMax: axMax, padB: 34, padL: 42 });
  const els: VNode[] = [];
  els.push(<Axes f={f} xTicks={ticks(axMax)} yTicks={ticks(axMax)} xLabel="p₁ (firm 1)" yLabel="p₂" />);
  // BR1: p1 = (α + γ p2)/(2β)  → in (x=p1,y=p2): y = (2β x − α)/γ
  const br1y = (x: number) => (2 * beta * x - alpha) / g;
  // clamp endpoints to the box
  const x1a = alpha / (2 * beta), x1b = axMax;       // y from 0 upward
  els.push(seg(f, x1a, 0, x1b, Math.min(br1y(x1b), axMax), PALETTE.feeStroke, 2));
  els.push(label(f, x1b * 0.99, Math.min(br1y(x1b), axMax) - axMax * 0.03, "BR₁", PALETTE.feeStroke, "end", 11, true));
  // BR2: p2 = (α + γ p1)/(2β)  → y = (α + γ x)/(2β)
  const br2y = (x: number) => (alpha + g * x) / (2 * beta);
  els.push(seg(f, 0, br2y(0), axMax, Math.min(br2y(axMax), axMax), PALETTE.marginStroke, 2));
  els.push(label(f, axMax * 0.7, Math.min(br2y(axMax * 0.7), axMax) + axMax * 0.03, "BR₂", PALETTE.marginStroke, "start", 11, true));
  // Nash point
  els.push(<circle cx={f.x(nash)} cy={f.y(nash)} r="4.5" style={`fill:${C.INK}`} />);
  els.push(label(f, nash + axMax * 0.02, nash + axMax * 0.04, "Nash", C.INK, "start", 10.5, true));

  const q = alpha - beta * nash + g * nash;
  const profit = nash * q;

  return (
    <div class="graph">
      <div class="graph-sliders">
        <Slider label="market size α" value={alpha} min={100} max={240} step={10} onInput={setAlpha} />
        <Slider label="substitutability γ" value={gamma} min={0} max={3.5} step={0.25} onInput={setGamma} />
      </div>
      <div class="graph-cap">Differentiated Bertrand: q = α − βp + γp′. Best responses slope UP (prices are strategic complements) and cross at the symmetric Nash price. More substitutable (higher γ) ⇒ tougher competition ⇒ lower price. Drag the sliders.</div>
      <svg viewBox="0 0 430 360" width="100%" role="img" aria-label="Differentiated Bertrand reaction functions">{els}</svg>
      <div class="graph-legend">
        <span><i class="gsw" style={`background:${PALETTE.feeStroke}`} />BR₁ (firm 1)</span>
        <span><i class="gsw" style={`background:${PALETTE.marginStroke}`} />BR₂ (firm 2)</span>
        <span><i class="gsw" style="background:var(--color-ink)" />Nash</span>
      </div>
      <div class="graph-readout">
        <span class="rd">Nash price p* <b>{r1(nash)}</b></span>
        <span class="rd">quantity each <b>{r1(q)}</b></span>
        <span class="rd">profit each <b>{r1(profit)}</b></span>
      </div>
    </div>
  );
}
