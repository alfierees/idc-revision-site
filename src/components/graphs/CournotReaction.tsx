import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { makeFrame, Axes, seg, label, Slider, ticks, PALETTE, C } from "./plot";

// Cournot reaction-function (best-response) diagram in (q1, q2) space.
// P = a − Q, constant MC = c. BR_i: q_i = (a − c − q_j)/2 → downward-sloping
// lines (strategic substitutes); they cross at the Cournot–Nash point. Also
// marks the Stackelberg (firm-1-leader) and cartel/collusive points. Slider: c.

interface Props { a?: number; c?: number; }

export default function CournotReaction({ a: a0 = 120, c: c0 = 70 }: Props): VNode {
  const [a, setA] = useState(a0);
  const [c, setC] = useState(c0);
  const m = Math.max(a - Math.min(c, a - 1), 1); // a − c (capacity of each axis)
  const r1 = (n: number) => Math.round(n * 10) / 10;

  const nash = m / 3;            // q1 = q2 = (a−c)/3
  const stackL = m / 2, stackF = m / 4;
  const cartel = m / 4;          // each firm under joint-profit split

  const f = makeFrame({ w: 430, h: 360, qMax: m, pMax: m, padB: 34, padL: 40 });
  const els: VNode[] = [];
  els.push(<Axes f={f} xTicks={ticks(m)} yTicks={ticks(m)} xLabel="q₁ (firm 1)" yLabel="q₂" />);
  // BR1: q1 = (m − q2)/2  →  in (x=q1,y=q2): y = m − 2x  (from (0,m) to (m/2,0))
  els.push(seg(f, 0, m, m / 2, 0, PALETTE.feeStroke, 2));
  els.push(label(f, m / 2 + m * 0.01, m * 0.06, "BR₁", PALETTE.feeStroke, "start", 11, true));
  // BR2: q2 = (m − q1)/2  →  y = (m − x)/2  (from (0,m/2) to (m,0))
  els.push(seg(f, 0, m / 2, m, 0, PALETTE.marginStroke, 2));
  els.push(label(f, m * 0.92, (m - m * 0.92) / 2 + m * 0.03, "BR₂", PALETTE.marginStroke, "end", 11, true));
  // points
  const dot = (x: number, y: number, color: string, name: string, dx = 0.02, dy = 0.03) => {
    els.push(<circle cx={f.x(x)} cy={f.y(y)} r="4.5" style={`fill:${color}`} />);
    els.push(label(f, x + m * dx, y + m * dy, name, color, "start", 10.5, true));
  };
  dot(nash, nash, C.INK, "Cournot–Nash");
  dot(stackL, stackF, PALETTE.dwlStroke, "Stackelberg", 0.02, -0.05);
  dot(cartel, cartel, PALETTE.rentStroke, "cartel", -0.16, -0.05);

  const cEff = Math.min(c, a - 1);
  const Pc = a - 2 * nash;     // Cournot price
  const Ps = a - (stackL + stackF);

  return (
    <div class="graph">
      <div class="graph-sliders">
        <Slider label="intercept a" value={a} min={80} max={200} step={10} onInput={setA} />
        <Slider label="MC c" value={c} min={0} max={Math.max(0, a - 20)} step={5} onInput={setC} />
      </div>
      <div class="graph-cap">Cournot best responses in (q₁, q₂) space, P = a − Q, MC = c. The lines cross at the Cournot–Nash equilibrium; the leader pushes out along BR₂ to the Stackelberg point. Drag c.</div>
      <svg viewBox="0 0 430 360" width="100%" role="img" aria-label="Cournot reaction functions">{els}</svg>
      <div class="graph-legend">
        <span><i class="gsw" style={`background:${PALETTE.feeStroke}`} />BR₁ (firm 1)</span>
        <span><i class="gsw" style={`background:${PALETTE.marginStroke}`} />BR₂ (firm 2)</span>
        <span><i class="gsw" style="background:var(--color-ink)" />Cournot–Nash</span>
        <span><i class="gsw" style={`background:${PALETTE.dwlStroke}`} />Stackelberg</span>
        <span><i class="gsw" style={`background:${PALETTE.rentStroke}`} />cartel</span>
      </div>
      <div class="graph-readout">
        <span class="rd">Cournot q each <b>{r1(nash)}</b></span>
        <span class="rd">Q, p <b>{r1(2 * nash)}, {r1(Pc)}</b></span>
        <span class="rd">Stackelberg q₁,q₂ <b>{r1(stackL)}, {r1(stackF)}</b></span>
        <span class="rd">Stackelberg p <b>{r1(Ps)}</b></span>
      </div>
    </div>
  );
}
