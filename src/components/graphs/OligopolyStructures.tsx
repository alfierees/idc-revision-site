import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { makeFrame, Axes, seg, label, Slider, ticks, PALETTE, C } from "./plot";

// Market structures on one demand curve P = A − Q with marginal cost c.
// Slider for c; markers for Monopoly / Cournot (2-firm) / Stackelberg / Vertical
// separation, with a live Q/P readout. (A fixed at 120 to match the Micro 3 paper.)

const A = 120;

export default function OligopolyStructures({ c: c0 = 40 }: { c?: number }): VNode {
  const [c, setC] = useState(c0);
  const a = A - c;
  const r1 = (n: number) => Math.round(n * 10) / 10;

  const structures = [
    { key: "Stackelberg", Q: (3 * a) / 4, color: PALETTE.mr },
    { key: "Cournot", Q: (2 * a) / 3, color: PALETTE.marginStroke },
    { key: "Monopoly", Q: a / 2, color: PALETTE.feeStroke },
    { key: "Vertical", Q: a / 4, color: PALETTE.dwlStroke },
  ].map((s) => ({ ...s, P: A - s.Q }));

  const f = makeFrame({ w: 520, h: 340, qMax: A, pMax: A, padB: 34 });
  const els: VNode[] = [];
  els.push(<Axes f={f} xTicks={ticks(A)} yTicks={ticks(A)} xLabel="total quantity Q" />);
  els.push(seg(f, 0, c, A, c, PALETTE.mc, 1.5, "4 3"));
  els.push(label(f, A * 0.98, c + 4, `MC = c = ${c}`, PALETTE.mc, "end", 11));
  els.push(seg(f, 0, A, A, 0, C.INK, 2.4)); // demand
  els.push(label(f, A * 0.86, A - A * 0.86 + 4, "demand", C.INK, "end", 12, true));
  for (const s of structures) {
    els.push(<line x1={f.x(s.Q)} y1={f.y(0)} x2={f.x(s.Q)} y2={f.y(s.P)} style={`stroke:${s.color};stroke-width:1.4;stroke-dasharray:3 2`} />);
    els.push(<circle cx={f.x(s.Q)} cy={f.y(s.P)} r="4" style={`fill:${s.color}`} />);
    els.push(label(f, s.Q, s.P + 5, s.key, s.color, "middle", 10.5, true));
  }

  return (
    <div class="graph">
      <div class="graph-sliders">
        <Slider label="marginal cost c" value={c} min={0} max={110} step={5} onInput={setC} />
      </div>
      <div class="graph-cap">One demand curve P = 120 − Q, four market structures. Each dot is that structure's (Q, P). Stackelberg produces most (lowest price); vertical separation least (double marginalisation). Drag c.</div>
      <svg viewBox="0 0 520 340" width="100%" role="img" aria-label="Market structures comparison">{els}</svg>
      <div class="graph-readout">
        {structures.map((s) => (
          <span class="rd">{s.key} <b>Q={r1(s.Q)}, p={r1(s.P)}</b></span>
        ))}
      </div>
    </div>
  );
}
