import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { makeFrame, Axes, area, rect, seg, label, PALETTE, C } from "./plot";

// Port of the ex5-q3 two-part-tariff widget: two consumers (big/high, small/low),
// parts (a)–(e), with fee / rent / per-unit margin / deadweight-loss regions and
// an optional MR overlay. Re-themed to the site's tokens.

const QM = 40, PMX = 21, MC = 6;
const DEM = [
  { a: 20, b: 0.5, mr: 1, qmx: 40 }, // consumer 1 — big / high type
  { a: 20, b: 1, mr: 2, qmx: 20 },   // consumer 2 — small / low type
];
const qOf = (i: number, p: number) => (DEM[i].a - p) / DEM[i].b;

type FeeMode = "whole" | "split" | "annot";
interface Part {
  cap: VNode;
  pr: [number, number];
  fee: [FeeMode, FeeMode];
  recover?: boolean;
  stat: VNode;
}

const PARTS: Record<string, Part> = {
  a: {
    cap: <>(a) Separate two-part tariffs — perfect (1st-degree) extraction. Each consumer gets p = MC, fee = their whole surplus.</>,
    pr: [6, 6], fee: ["whole", "whole"],
    stat: <><b>Each consumer their own contract.</b> Per-unit price p = MC = 6 (efficient, AR meets MC). Fixed fee = the entire consumer-surplus triangle. A₁ = 196, A₂ = 98, q₁ = 28, q₂ = 14. <b>Profit = 196 + 98 = 294.</b></>,
  },
  b: {
    cap: <>(b) One single contract for both — the fee is capped by the SMALL consumer, so price is raised above MC.</>,
    pr: [9.5, 9.5], fee: ["split", "whole"],
    stat: <><b>One (A, p) for both.</b> Fee can't exceed C2's surplus → A = 55.125. Raising p to 9.5 (above MC) claws extra margin from big C1. q₁ = 21, q₂ = 10.5. C1 keeps rent 55.125; C2 squeezed to zero. <b>Profit = 2×55.125 + margin 110.25 = 220.5.</b></>,
  },
  c: {
    cap: <>(c) 100 consumers of each type — the optimal contract does NOT change; only the type ratio matters.</>,
    pr: [9.5, 9.5], fee: ["split", "whole"],
    stat: <><b>100 of each type.</b> Same p = 9.5, A = 55.125 as (b) — composition (1:1) is unchanged, so the per-person answer is identical, just scaled. <b>Profit = 100 × 220.5 = 22,050.</b> Serving both (22,050) still beats excluding the small type (100×196 = 19,600).</>,
  },
  d: {
    cap: <>(d) Most the firm would pay to be ALLOWED to discriminate = profit(a) − profit(b).</>,
    pr: [9.5, 9.5], fee: ["split", "whole"], recover: true,
    stat: <><b>Value of removing the single-contract restriction.</b> = 294 − 220.5 = <b>73.5</b>. That equals C1's information rent (55.125) + the deadweight loss from pricing above MC (18.375) — the outlined regions. (With 100 of each ⇒ 7,350.)</>,
  },
  e: {
    cap: <>(e) Hidden types — a menu of two contracts (2nd-degree). High type efficient + rent; low type distorted down, zero surplus.</>,
    pr: [6, 10.6667], fee: ["annot", "whole"],
    stat: <><b>Self-selecting menu.</b> High type: q = 28 at p = MC = 6 (no distortion "at the top"), fee 174.22, keeps info rent 21.78. Low type: pushed down to q = 9.33 at p = 10.67, fee 43.56, zero surplus. <b>Profit = 261.33</b> — between (a) 294 and (b) 220.5.</>,
  },
};

const fmtP = (p: number) => (p % 1 === 0 ? String(p) : p.toFixed(p > 10 ? 2 : 1));

function panel(idx: number, partId: string, showMR: boolean): VNode {
  const f = makeFrame({ w: 440, h: 300, qMax: QM, pMax: PMX, padB: 38 });
  const cfg = PARTS[partId], D = DEM[idx], p = cfg.pr[idx];
  const qp = qOf(idx, p), qmc = qOf(idx, MC);
  const feemode = cfg.fee[idx];
  const els: VNode[] = [];

  els.push(<Axes f={f} xTicks={[0, 10, 20, 30, 40]} yTicks={[0, 6, 10, 15, 20]} xLabel="quantity q" />);

  if (feemode === "whole" || feemode === "annot") {
    els.push(area(f, [[0, D.a], [0, p], [qp, p]], PALETTE.fee, PALETTE.feeStroke));
  } else {
    const qc2 = qOf(1, p);
    els.push(area(f, [[0, D.a], [0, p], [qc2, p]], PALETTE.fee, PALETTE.feeStroke));
    els.push(area(f, [[0, D.a], [qc2, p], [qp, p]], PALETTE.rent, PALETTE.rentStroke));
    els.push(seg(f, 0, D.a, qOf(1, 0), 0, PALETTE.feeStroke, 1.2, "5 3"));
  }
  if (p > MC) els.push(rect(f, 0, MC, qp, p, PALETTE.margin, PALETTE.marginStroke));
  if (p > MC && qmc > qp) els.push(area(f, [[qp, p], [qp, MC], [qmc, MC]], PALETTE.dwl, PALETTE.dwlStroke));
  if (cfg.recover) {
    const qc2b = qOf(1, p);
    const pts = [[0, D.a], [qc2b, p], [qp, p]].map(([q, pp]) => `${f.x(q)},${f.y(pp)}`).join(" ");
    els.push(<polygon points={pts} style={`fill:none;stroke:${PALETTE.dwlStroke};stroke-width:2;stroke-dasharray:4 3`} />);
  }
  if (showMR) {
    const mrx = D.a / D.mr;
    els.push(seg(f, 0, D.a, mrx, 0, PALETTE.mr, 1.6, "6 3"));
    els.push(label(f, mrx * 0.5 + 1.5, D.a - D.mr * (mrx * 0.5) + 0.8, "MR", PALETTE.mr, "start", 11, true));
  }
  els.push(seg(f, 0, MC, QM, MC, PALETTE.mc, 1.5, "4 3"));
  els.push(label(f, QM - 0.5, MC - 1.1, "MC=6", PALETTE.mc, "end", 11));
  els.push(seg(f, 0, p, QM, p, C.INK_SOFT, 1.6));
  els.push(label(f, QM - 0.5, p + 1.3, "p=" + fmtP(p), C.INK_SOFT, "end", 11, true));
  els.push(seg(f, 0, D.a, D.qmx, 0, C.INK, 2.4));
  const arx = idx === 0 ? 38 : 18.5;
  els.push(label(f, arx, D.a - D.b * arx + 1.0, "AR" + (idx + 1), C.INK, "end", 12, true));
  els.push(<line x1={f.x(qp)} y1={f.y(0)} x2={f.x(qp)} y2={f.y(p)} style={`stroke:${PALETTE.mc};stroke-width:1;stroke-dasharray:2 2`} />);
  els.push(label(f, qp, -1.0, String(Math.round(qp * 100) / 100), PALETTE.marginStroke, "middle", 11, true));
  if (feemode === "split") {
    els.push(label(f, 2.5, (D.a + p) / 2 + 1, "fee", PALETTE.feeStroke, "start", 11, true));
    els.push(label(f, qOf(1, p) * 0.55 + 2, (D.a + p) / 2 - 1.5, "rent", PALETTE.rentStroke, "start", 11, true));
  } else if (feemode === "annot") {
    els.push(label(f, 3, (D.a + p) / 2, "fee 174.2 + rent 21.8", PALETTE.feeStroke, "start", 11, true));
  } else {
    els.push(label(f, 2.5, (D.a + p) / 2, "fee", PALETTE.feeStroke, "start", 11, true));
  }
  return <svg viewBox="0 0 440 300" width="100%" role="img" aria-label={`Two-part tariff, consumer ${idx + 1}, part ${partId}`}>{els}</svg>;
}

export default function TwoPartTariff(): VNode {
  const [cur, setCur] = useState("a");
  const [mr, setMr] = useState(false);

  return (
    <div class="graph">
      <div class="graph-bar">
        {["a", "b", "c", "d", "e"].map((p) => (
          <button type="button" class={`graph-btn${cur === p ? " on" : ""}`} onClick={() => setCur(p)}>Part {p}</button>
        ))}
        <label class="graph-toggle">
          <input type="checkbox" checked={mr} onChange={(e) => setMr((e.currentTarget as HTMLInputElement).checked)} /> show MR curves
        </label>
      </div>
      <div class="graph-cap">{PARTS[cur].cap}</div>
      <div class="graph-grid2">
        <div>
          <div class="graph-pt">Consumer 1 — big / high type</div>
          {panel(0, cur, mr)}
        </div>
        <div>
          <div class="graph-pt">Consumer 2 — small / low type</div>
          {panel(1, cur, mr)}
        </div>
      </div>
      <div class="graph-legend">
        <span><i class="gsw" style="background:var(--color-ink)" />AR (demand)</span>
        <span><i class="gsw" style={`background:${PALETTE.mr}`} />MR</span>
        <span><i class="gsw" style={`background:${PALETTE.mc}`} />MC=6</span>
        <span><i class="gsw" style={`background:${PALETTE.fee}`} />fee</span>
        <span><i class="gsw" style={`background:${PALETTE.rent}`} />rent kept</span>
        <span><i class="gsw" style={`background:${PALETTE.margin}`} />per-unit margin</span>
        <span><i class="gsw" style={`background:${PALETTE.dwl}`} />deadweight loss</span>
      </div>
      <div class="graph-stat">{PARTS[cur].stat}</div>
    </div>
  );
}
