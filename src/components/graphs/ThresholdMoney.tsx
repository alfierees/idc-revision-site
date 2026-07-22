import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { makeFrame, Axes, area, seg, label, Slider, PALETTE, C } from "./plot";

// The 0.5 cut-off is a library default, not a decision. Risk scores for
// repayers (~N(0.35, 0.13), 860 per 1,000) and defaulters (~N(0.62, 0.13),
// 140 per 1,000) overlap, so every threshold trades two mistakes: a missed
// defaulter costs ≈ 70,000 shekels (lost principal), a wrongly rejected good
// customer ≈ 7,000 (lost interest margin). Drag the line and watch the money.

const MU_R = 0.35, MU_D = 0.62, SD = 0.13;
const N_R = 860, N_D = 140;
const COST_MISS = 70000, COST_REJ = 7000;

function erf(x: number) { const s = Math.sign(x); x = Math.abs(x); const a1 = 0.254829592, a2 = -0.284496736, a3 = 1.421413741, a4 = -1.453152027, a5 = 1.061405429, p = 0.3275911; const t = 1 / (1 + p * x); const y = 1 - ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t * Math.exp(-x * x); return s * y; }
const phi = (z: number) => 0.5 * (1 + erf(z / Math.SQRT2));
const pdf = (x: number, mu: number) => Math.exp(-0.5 * ((x - mu) / SD) ** 2) / (SD * Math.sqrt(2 * Math.PI));

// Per 1,000 applications at threshold t: defaulters left of t get approved
// (missed), repayers right of t get rejected (wrongly).
const missedAt = (t: number) => N_D * phi((t - MU_D) / SD);
const wrongRejAt = (t: number) => N_R * (1 - phi((t - MU_R) / SD));
const lossAt = (t: number) => missedAt(t) * COST_MISS + wrongRejAt(t) * COST_REJ;

// Loss curve over the whole slider range, plus its cheapest point (scanned,
// not hard-coded).
const LOSS_TS: number[] = [];
for (let t = 0.05; t <= 0.9501; t += 0.01) LOSS_TS.push(Math.round(t * 100) / 100);
const LOSS_VALS = LOSS_TS.map(lossAt);
const LOSS_MAX = Math.max(...LOSS_VALS);
const T_STAR = LOSS_TS[LOSS_VALS.indexOf(Math.min(...LOSS_VALS))];

// Density height scale: repayer peak uses ~80% of the main panel (pMax = 1).
const H_SCALE = 0.8 / (N_R * pdf(MU_R, MU_R));

interface Props { t?: number; }

export default function ThresholdMoney({ t: t0 = 0.5 }: Props): VNode {
  const [t, setT] = useState(t0);

  const missed = missedAt(t);
  const wrongRej = wrongRejAt(t);
  const loss = lossAt(t);

  // Two stacked frames sharing the same x mapping: densities on top, money below.
  const fM = makeFrame({ w: 500, h: 360, qMax: 1, pMax: 1, padL: 46, padR: 16, padT: 16, padB: 144 });
  const fS = makeFrame({ w: 500, h: 360, qMax: 1, pMax: LOSS_MAX, padL: 46, padR: 16, padT: 252, padB: 30 });

  const els: VNode[] = [];
  els.push(<Axes f={fM} xTicks={[0, 0.25, 0.5, 0.75, 1]} yTicks={[]} />);

  // Density curves (fill + stroked crest), scaled by population.
  const curve = (mu: number, n: number) => {
    const pts: [number, number][] = [];
    for (let x = 0; x <= 1.0001; x += 0.01) pts.push([x, n * pdf(x, mu) * H_SCALE]);
    return pts;
  };
  const drawCurve = (mu: number, n: number, fill: string, stroke: string) => {
    const pts = curve(mu, n);
    els.push(area(fM, [...pts, [1, 0], [0, 0]], fill));
    els.push(<polyline points={pts.map(([x, y]) => `${fM.x(x)},${fM.y(y)}`).join(" ")} style={`fill:none;stroke:${stroke};stroke-width:2`} />);
  };
  drawCurve(MU_R, N_R, PALETTE.margin, PALETTE.marginStroke);
  drawCurve(MU_D, N_D, PALETTE.dwl, PALETTE.dwlStroke);
  els.push(label(fM, 0.17, 0.86, "repayers (860 per 1,000)", PALETTE.marginStroke, "middle", 11, true));
  els.push(label(fM, 0.79, 0.22, "defaulters (140)", PALETTE.dwlStroke, "middle", 11, true));

  // Rejected region (right of t) and the threshold line itself.
  els.push(<rect x={fM.x(t)} y={fM.T} width={fM.x(1) - fM.x(t)} height={fM.B - fM.T} style={`fill:${C.RULE};opacity:.3`} />);
  els.push(seg(fM, t, 0, t, 1, C.INK, 2));
  els.push(label(fM, Math.min(t + 0.02, 0.88), 0.95, "rejected", C.INK_SOFT, "start", 10.5));

  // Money strip: loss(t') curve, current-t dot, cheapest point, 0.5 marker.
  els.push(<line x1={fS.L} y1={fS.B} x2={fS.R} y2={fS.B} style={`stroke:${C.INK_SOFT};stroke-width:1`} />);
  els.push(<text x={fS.L + 4} y={fS.T - 6} text-anchor="start" style={`font:11px var(--font-ui);fill:${C.INK_SOFT}`}>money lost (per 1,000 applications)</text>);
  els.push(<polyline points={LOSS_TS.map((tt, i) => `${fS.x(tt)},${fS.y(LOSS_VALS[i])}`).join(" ")} style={`fill:none;stroke:${C.INK};stroke-width:2`} />);
  // the notebook's default (0.5), dashed
  els.push(seg(fS, 0.5, 0, 0.5, LOSS_MAX, C.INK_SOFT, 1, "3 3"));
  els.push(label(fS, 0.515, LOSS_MAX * 0.9, "the notebook's default", C.INK_SOFT, "start", 10));
  // cheapest threshold marker
  els.push(<circle cx={fS.x(T_STAR)} cy={fS.y(lossAt(T_STAR))} r="4.5" style={`fill:${PALETTE.marginStroke}`} />);
  els.push(label(fS, T_STAR - 0.015, lossAt(T_STAR) + LOSS_MAX * 0.14, `cheapest: ${T_STAR}`, PALETTE.marginStroke, "end", 10, true));
  // current threshold dot
  els.push(<circle cx={fS.x(t)} cy={fS.y(loss)} r="5" style={`fill:${C.INK};transition:cx .1s linear, cy .1s linear`} />);
  // shared x-axis label under the strip
  els.push(<text x={(fS.L + fS.R) / 2} y={352} text-anchor="middle" style={`font:11px var(--font-ui);fill:${C.INK_SOFT}`}>predicted risk of default</text>);

  return (
    <div class="graph">
      <div class="graph-sliders">
        <Slider label="rejection threshold" value={t} min={0.05} max={0.95} step={0.01} onInput={setT} />
      </div>
      <div class="graph-cap">Every threshold trades the two mistakes against each other — but they don't cost the same: a missed defaulter loses roughly ten times more than a wrongly rejected customer. Drag the line and find the cheapest point yourself. It is nowhere near 0.5 — the number the notebook used without asking.</div>
      <svg viewBox="0 0 500 360" width="100%" role="img" aria-label="Risk score distributions with a movable rejection threshold and its cost">{els}</svg>
      <div class="graph-legend">
        <span><i class="gsw" style={`background:${PALETTE.margin}`} />repayers</span>
        <span><i class="gsw" style={`background:${PALETTE.dwl}`} />defaulters</span>
        <span><i class="gsw" style="background:var(--color-ink)" />money lost</span>
      </div>
      <div class="graph-readout">
        <span class="rd">missed defaulters <b>{Math.round(missed)}</b> × 70k</span>
        <span class="rd">wrong rejections <b>{Math.round(wrongRej)}</b> × 7k</span>
        <span class="rd">total lost <b>{(loss / 1e6).toFixed(2)}m shekels</b></span>
        <span class="rd">cheapest threshold <b>{T_STAR}</b></span>
      </div>
    </div>
  );
}
