import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { makeFrame, Axes, rect, seg, label, Slider, ticks, PALETTE, C } from "./plot";

// Representative firm under perfect competition. Cost C(x) = F + ½x² ⇒ MC = x,
// AC = F/x + ½x (U-shaped). The firm takes price P and produces where MC = P.
// Sliders: P (a demand-driven price change) and F (a cost change). Shows the
// profit/loss rectangle and the long-run break-even price = min AC.

interface Props { p?: number; f?: number; }

export default function PerfectCompetitionFirm({ p: p0 = 5, f: f0 = 12.5 }: Props): VNode {
  const [P, setP] = useState(p0);
  const [F, setF] = useState(f0);

  const qMax = 12, yMax = 14;
  const r1 = (n: number) => Math.round(n * 10) / 10;
  const AC = (x: number) => F / x + 0.5 * x;
  const qStar = Math.min(P, qMax);           // MC = x = P
  const acq = AC(qStar);
  const profit = (P - acq) * qStar;
  const xMinAc = Math.sqrt(2 * F);           // min-AC quantity
  const minAc = AC(xMinAc);                  // = long-run price

  const fr = makeFrame({ w: 470, h: 330, qMax, pMax: yMax, padB: 34 });
  const els: VNode[] = [];
  els.push(<Axes f={fr} xTicks={ticks(qMax)} yTicks={ticks(yMax)} xLabel="firm output q" />);
  // profit / loss rectangle (P vs AC over [0, q*])
  if (qStar > 0) {
    const lo = Math.min(P, acq), hi = Math.max(P, acq);
    const fill = P >= acq ? PALETTE.margin : PALETTE.dwl;
    const stroke = P >= acq ? PALETTE.marginStroke : PALETTE.dwlStroke;
    els.push(rect(fr, 0, lo, qStar, hi, fill, stroke));
  }
  // AC curve (U-shaped)
  const pts: string[] = [];
  for (let x = 0.6; x <= qMax + 0.001; x += 0.2) pts.push(`${fr.x(x)},${fr.y(Math.min(AC(x), yMax))}`);
  els.push(<polyline points={pts.join(" ")} style={`fill:none;stroke:${PALETTE.feeStroke};stroke-width:2`} />);
  els.push(label(fr, qMax * 0.96, Math.min(AC(qMax * 0.96), yMax) + 0.5, "AC", PALETTE.feeStroke, "end", 11, true));
  // MC = x
  els.push(seg(fr, 0, 0, yMax, yMax, PALETTE.marginStroke, 2));
  els.push(label(fr, yMax * 0.82, yMax * 0.82 + 0.5, "MC", PALETTE.marginStroke, "start", 11, true));
  // price line P = MR
  els.push(seg(fr, 0, P, qMax, P, C.INK, 2, "5 3"));
  els.push(label(fr, qMax * 0.02, P + 0.5, `P = ${r1(P)}`, C.INK, "start", 11, true));
  // min-AC marker (long-run price)
  els.push(<circle cx={fr.x(xMinAc)} cy={fr.y(minAc)} r="4" style={`fill:${PALETTE.dwlStroke}`} />);
  els.push(label(fr, xMinAc + 0.2, minAc - 0.7, `min AC = ${r1(minAc)}`, PALETTE.dwlStroke, "start", 10, true));
  // q* guide
  els.push(<line x1={fr.x(qStar)} y1={fr.y(0)} x2={fr.x(qStar)} y2={fr.y(P)} style={`stroke:${PALETTE.mc};stroke-width:1;stroke-dasharray:2 2`} />);
  els.push(label(fr, qStar, -yMax * 0.04, `q*=${r1(qStar)}`, PALETTE.marginStroke, "middle", 10.5, true));

  const state = P > minAc + 0.05 ? "profit (entry follows)" : P < minAc - 0.05 ? "loss (exit follows)" : "long-run zero profit";

  return (
    <div class="graph">
      <div class="graph-sliders">
        <Slider label="price P" value={P} min={2} max={12} step={0.5} onInput={setP} />
        <Slider label="fixed cost F" value={F} min={2} max={32} step={0.5} onInput={setF} />
      </div>
      <div class="graph-cap">Price-taking firm, C(q) = F + ½q². It produces where MC = P. Drop P (a demand fall) to see a short-run loss; cut F (a cost improvement) to shift AC down. In the long run, entry/exit drives P to min AC.</div>
      <svg viewBox="0 0 470 330" width="100%" role="img" aria-label="Perfect-competition firm">{els}</svg>
      <div class="graph-legend">
        <span><i class="gsw" style="background:var(--color-ink)" />P = MR</span>
        <span><i class="gsw" style={`background:${PALETTE.marginStroke}`} />MC</span>
        <span><i class="gsw" style={`background:${PALETTE.feeStroke}`} />AC</span>
        <span><i class="gsw" style={`background:${PALETTE.margin}`} />profit</span>
        <span><i class="gsw" style={`background:${PALETTE.dwl}`} />loss</span>
      </div>
      <div class="graph-readout">
        <span class="rd">q* <b>{r1(qStar)}</b></span>
        <span class="rd">AC(q*) <b>{r1(acq)}</b></span>
        <span class="rd">profit <b>{r1(profit)}</b></span>
        <span class="rd">long-run P <b>{r1(minAc)}</b></span>
        <span class="rd">{state}</span>
      </div>
    </div>
  );
}
