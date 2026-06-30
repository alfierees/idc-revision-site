import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { makeFrame, Axes, area, rect, seg, label, Slider, ticks, PALETTE, C } from "./plot";

// Linear-demand monopoly: P = a − bQ, constant MC. Sliders for a, b, MC; live
// CS / producer surplus / deadweight-loss areas and values. The single most
// reusable micro picture.

interface Props { a?: number; b?: number; mc?: number; }

export default function MonopolyCsDwl({ a: a0 = 100, b: b0 = 1, mc: mc0 = 20 }: Props): VNode {
  const [a, setA] = useState(a0);
  const [b, setB] = useState(b0);
  const [mc, setMc] = useState(mc0);

  const mcEff = Math.min(mc, a - 1); // keep monopoly valid
  const Qm = (a - mcEff) / (2 * b);
  const Pm = a - b * Qm;
  const Qc = (a - mcEff) / b;
  const CS = 0.5 * (a - Pm) * Qm;
  const PS = (Pm - mcEff) * Qm;
  const DWL = 0.5 * (Pm - mcEff) * (Qc - Qm);

  const qMax = a / b, pMax = a;
  const f = makeFrame({ w: 460, h: 320, qMax, pMax, padB: 34 });
  const r1 = (n: number) => Math.round(n * 10) / 10;

  const els: VNode[] = [];
  els.push(<Axes f={f} xTicks={ticks(qMax)} yTicks={ticks(pMax)} xLabel="quantity Q" />);
  // shaded regions
  els.push(area(f, [[0, a], [0, Pm], [Qm, Pm]], PALETTE.fee, PALETTE.feeStroke));        // CS
  els.push(rect(f, 0, mcEff, Qm, Pm, PALETTE.margin, PALETTE.marginStroke));             // PS / profit
  els.push(area(f, [[Qm, Pm], [Qm, mcEff], [Qc, mcEff]], PALETTE.dwl, PALETTE.dwlStroke)); // DWL
  // curves
  els.push(seg(f, 0, mcEff, qMax, mcEff, PALETTE.mc, 1.5, "4 3"));
  els.push(label(f, qMax * 0.98, mcEff + pMax * 0.02, "MC", PALETTE.mc, "end", 11));
  els.push(seg(f, 0, a, a / (2 * b), 0, PALETTE.mr, 1.6, "6 3"));                          // MR
  els.push(label(f, a / (2 * b) * 0.5, a * 0.5 + a * 0.03, "MR", PALETTE.mr, "start", 11, true));
  els.push(seg(f, 0, a, qMax, 0, C.INK, 2.4));                                            // demand
  els.push(label(f, qMax * 0.9, b * (qMax * 0.9) > a ? 0 : a - b * (qMax * 0.9) + a * 0.03, "D = AR", C.INK, "end", 12, true));
  // guides
  els.push(<line x1={f.x(Qm)} y1={f.y(0)} x2={f.x(Qm)} y2={f.y(Pm)} style={`stroke:${PALETTE.mc};stroke-width:1;stroke-dasharray:2 2`} />);
  els.push(seg(f, 0, Pm, Qm, Pm, C.INK_SOFT, 1, "2 2"));
  els.push(label(f, Qm, -pMax * 0.04, `Q*=${r1(Qm)}`, PALETTE.marginStroke, "middle", 11, true));
  els.push(label(f, qMax * 0.02, Pm + pMax * 0.025, `p*=${r1(Pm)}`, C.INK_SOFT, "start", 11, true));
  // region labels
  els.push(label(f, Qm * 0.32, (a + Pm) / 2, "CS", PALETTE.feeStroke, "middle", 11, true));
  els.push(label(f, Qm * 0.42, (Pm + mcEff) / 2, "profit", PALETTE.marginStroke, "middle", 11, true));

  return (
    <div class="graph">
      <div class="graph-sliders">
        <Slider label="intercept a" value={a} min={60} max={140} step={5} onInput={setA} />
        <Slider label="slope b" value={b} min={0.5} max={3} step={0.5} onInput={setB} />
        <Slider label="MC" value={mc} min={0} max={80} step={5} onInput={setMc} />
      </div>
      <div class="graph-cap">Monopoly with demand P = a − bQ. Move the sliders to watch the equilibrium and the consumer-surplus / profit / deadweight-loss areas change.</div>
      <svg viewBox="0 0 460 320" width="100%" role="img" aria-label="Monopoly consumer surplus and deadweight loss">{els}</svg>
      <div class="graph-legend">
        <span><i class="gsw" style="background:var(--color-ink)" />D = AR</span>
        <span><i class="gsw" style={`background:${PALETTE.mr}`} />MR</span>
        <span><i class="gsw" style={`background:${PALETTE.mc}`} />MC</span>
        <span><i class="gsw" style={`background:${PALETTE.fee}`} />consumer surplus</span>
        <span><i class="gsw" style={`background:${PALETTE.margin}`} />profit (PS)</span>
        <span><i class="gsw" style={`background:${PALETTE.dwl}`} />deadweight loss</span>
      </div>
      <div class="graph-readout">
        <span class="rd">Q* <b>{r1(Qm)}</b></span>
        <span class="rd">p* <b>{r1(Pm)}</b></span>
        <span class="rd">CS <b>{r1(CS)}</b></span>
        <span class="rd">profit <b>{r1(PS)}</b></span>
        <span class="rd">DWL <b>{r1(DWL)}</b></span>
      </div>
    </div>
  );
}
