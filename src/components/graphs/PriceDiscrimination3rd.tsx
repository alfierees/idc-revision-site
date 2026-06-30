import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { makeFrame, Axes, area, rect, seg, label, Slider, ticks, PALETTE, C } from "./plot";

// Third-degree price discrimination: two markets P_i = a_i − Q_i, shared MC.
// Sliders for the two intercepts and MC; the firm sets MR_i = MC in each market,
// so the higher-intercept (less elastic) market gets the higher price.

interface Props { a1?: number; a2?: number; mc?: number; }

export default function PriceDiscrimination3rd({ a1: a10 = 22, a2: a20 = 12, mc: mc0 = 2 }: Props): VNode {
  const [a1, setA1] = useState(a10);
  const [a2, setA2] = useState(a20);
  const [mc, setMc] = useState(mc0);

  const scale = Math.max(a1, a2);
  const r1 = (n: number) => Math.round(n * 10) / 10;

  const panel = (a: number, idx: number): VNode => {
    const c = Math.min(mc, a - 0.5);
    const Q = (a - c) / 2;
    const P = a - Q;
    const f = makeFrame({ w: 440, h: 300, qMax: scale, pMax: scale, padB: 34 });
    const els: VNode[] = [];
    els.push(<Axes f={f} xTicks={ticks(scale)} yTicks={ticks(scale)} xLabel="quantity" />);
    els.push(area(f, [[0, a], [0, P], [Q, P]], PALETTE.fee, PALETTE.feeStroke));      // CS
    els.push(rect(f, 0, c, Q, P, PALETTE.margin, PALETTE.marginStroke));              // profit
    els.push(seg(f, 0, c, scale, c, PALETTE.mc, 1.5, "4 3"));
    els.push(label(f, scale * 0.98, c + scale * 0.02, "MC", PALETTE.mc, "end", 11));
    els.push(seg(f, 0, a, a / 2, 0, PALETTE.mr, 1.6, "6 3"));                          // MR
    els.push(seg(f, 0, a, a, 0, C.INK, 2.4));                                          // demand
    els.push(<line x1={f.x(Q)} y1={f.y(0)} x2={f.x(Q)} y2={f.y(P)} style={`stroke:${PALETTE.mc};stroke-width:1;stroke-dasharray:2 2`} />);
    els.push(seg(f, 0, P, Q, P, C.INK_SOFT, 1, "2 2"));
    els.push(label(f, scale * 0.02, P + scale * 0.03, `p=${r1(P)}`, C.INK_SOFT, "start", 11, true));
    els.push(label(f, Q, -scale * 0.04, `q=${r1(Q)}`, PALETTE.marginStroke, "middle", 11, true));
    els.push(label(f, Q * 0.32, (a + P) / 2, "CS", PALETTE.feeStroke, "middle", 11, true));
    return <svg viewBox="0 0 440 300" width="100%" role="img" aria-label={`Market ${idx}`}>{els}</svg>;
  };

  const c = Math.min(mc, Math.min(a1, a2) - 0.5);
  const P1 = (a1 + c) / 2, P2 = (a2 + c) / 2;

  return (
    <div class="graph">
      <div class="graph-sliders">
        <Slider label="Market 1 intercept" value={a1} min={10} max={30} step={1} onInput={setA1} />
        <Slider label="Market 2 intercept" value={a2} min={6} max={30} step={1} onInput={setA2} />
        <Slider label="MC" value={mc} min={0} max={12} step={1} onInput={setMc} />
      </div>
      <div class="graph-cap">Each market gets its own MR = MC price. The market with the higher intercept (less elastic) is charged more — drag the intercepts to see the gap.</div>
      <div class="graph-grid2">
        <div><div class="graph-pt">Market 1</div>{panel(a1, 1)}</div>
        <div><div class="graph-pt">Market 2</div>{panel(a2, 2)}</div>
      </div>
      <div class="graph-legend">
        <span><i class="gsw" style="background:var(--color-ink)" />demand</span>
        <span><i class="gsw" style={`background:${PALETTE.mr}`} />MR</span>
        <span><i class="gsw" style={`background:${PALETTE.mc}`} />MC</span>
        <span><i class="gsw" style={`background:${PALETTE.fee}`} />consumer surplus</span>
        <span><i class="gsw" style={`background:${PALETTE.margin}`} />profit</span>
      </div>
      <div class="graph-readout">
        <span class="rd">p₁ <b>{r1(P1)}</b></span>
        <span class="rd">p₂ <b>{r1(P2)}</b></span>
        <span class="rd">price gap <b>{r1(Math.abs(P1 - P2))}</b></span>
      </div>
    </div>
  );
}
