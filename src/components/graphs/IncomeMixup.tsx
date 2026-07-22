import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { makeFrame, Axes, Slider, BtnRow, PALETTE, C } from "./plot";

// The income column silently mixes monthly and annual figures. Most source
// systems wrote monthly pay (lognormal, exp(N(9.1, 0.45²)) shekels, median
// ≈ 9,000); some wrote the same pay twelve times bigger (annual). Seen as one
// column, the histogram grows two humps and the mean drifts into the empty
// valley between them — and that mean is exactly what the notebook pastes
// into every customer with a missing income.

const MU = 9.1;
const SIG = 0.45;

// Lognormal pdf with x in shekels.
function lognPdf(s: number): number {
  if (s <= 0) return 0;
  return (1 / (s * SIG * Math.sqrt(2 * Math.PI))) * Math.exp(-((Math.log(s) - MU) ** 2) / (2 * SIG * SIG));
}

// Fixed density grids over income in THOUSANDS of shekels, 0 → 200.
// FM = monthly population; FA = the same distribution scaled ×12 (annual):
// if Y = 12X then pdf_Y(y) = pdf_X(y/12)/12.
const XS: number[] = [];
const FM: number[] = [];
const FA: number[] = [];
for (let x = 0.5; x <= 200.0001; x += 0.5) {
  XS.push(x);
  FM.push(lognPdf(x * 1000) * 1000);
  FA.push(lognPdf((x * 1000) / 12) / 12 * 1000);
}

interface Props { share?: number; mode?: string }

export default function IncomeMixup({ share: share0 = 30, mode: mode0 = "one" }: Props): VNode {
  const [share, setShare] = useState(share0);
  const [mode, setMode] = useState(mode0);
  const w = share / 100;

  // Weighted component curves and their mixture.
  const mCurve = FM.map((v) => (1 - w) * v);
  const aCurve = FA.map((v) => w * v);
  const mix = mCurve.map((v, i) => v + aCurve[i]);

  // Scale so the taller peak sits at ~85% of plot height.
  const peak = Math.max(...mix);
  const scale = peak > 0 ? 0.85 / peak : 1;

  // Mixture mean in thousands of shekels (lognormal mean ≈ 9.98k monthly).
  const mean = (1 - w) * 9.98 + w * 12 * 9.98;
  const meanK = Math.round(mean);

  const fr = makeFrame({ w: 500, h: 320, qMax: 200, pMax: 1, padB: 34 });
  const poly = (ys: number[]) =>
    [`${fr.x(XS[0])},${fr.y(0)}`, ...XS.map((x, i) => `${fr.x(x)},${fr.y(ys[i] * scale)}`), `${fr.x(XS[XS.length - 1])},${fr.y(0)}`].join(" ");
  const line = (ys: number[]) => XS.map((x, i) => `${fr.x(x)},${fr.y(ys[i] * scale)}`).join(" ");

  const els: VNode[] = [];
  els.push(<Axes f={fr} xTicks={[0, 50, 100, 150, 200]} yTicks={[]} xLabel="income (thousands of shekels)" />);

  if (mode === "one") {
    // One column: the mixture as a single anonymous hump-scape.
    els.push(<polygon points={poly(mix)} style={`fill:${C.INK};fill-opacity:.25`} />);
    els.push(<polyline points={line(mix)} style={`fill:none;stroke:${C.INK};stroke-width:2`} />);
  } else {
    // Coloured by source system: monthly vs annual records.
    els.push(<polygon points={poly(mCurve)} style={`fill:${PALETTE.fee}`} />);
    els.push(<polyline points={line(mCurve)} style={`fill:none;stroke:${PALETTE.feeStroke};stroke-width:2`} />);
    if (w > 0) {
      els.push(<polygon points={poly(aCurve)} style={`fill:${PALETTE.rent}`} />);
      els.push(<polyline points={line(aCurve)} style={`fill:none;stroke:${PALETTE.rentStroke};stroke-width:2`} />);
    }
  }

  // The mean of the column — the value Cell 6 fills every gap with. Drawn at
  // x = 0 inside a translated group so slider moves glide.
  els.push(
    <g style={`transform:translate(${fr.x(mean)}px,0px);transition:transform .5s ease`}>
      <line x1={0} y1={fr.T} x2={0} y2={fr.B} style={`stroke:${C.ACCENT};stroke-width:1.5;stroke-dasharray:5 3`} />
      <text x={5} y={fr.T + 12} text-anchor="start" style={`font:600 11px var(--font-ui);fill:${C.ACCENT}`}>
        the fill-in value = {meanK}k
      </text>
    </g>,
  );

  return (
    <div class="graph">
      <div class="graph-sliders">
        <Slider label="share stored annually" value={share} min={0} max={40} step={5} onInput={setShare} suffix="%" />
        <BtnRow
          options={[
            { key: "one", label: "one column (what the notebook sees)" },
            { key: "src", label: "coloured by source system" },
          ]}
          active={mode}
          onPick={setMode}
        />
      </div>
      <div class="graph-cap">
        The histogram from Cell 4, rebuilt. Two source systems wrote into one column — most monthly, some annual, twelve
        times apart. Slide the annual share up and the average drifts into the empty valley between the humps: that
        number is what Cell 6 pastes into every customer with a missing income.
      </div>
      <svg viewBox="0 0 500 320" width="100%" role="img" aria-label="Income distribution mixing monthly and annual records">{els}</svg>
      <div class="graph-legend">
        <span><i class="gsw" style={`background:${PALETTE.fee}`} />monthly records</span>
        <span><i class="gsw" style={`background:${PALETTE.rent}`} />annual records</span>
        <span><i class="gsw" style={`background:${C.ACCENT}`} />the mean (fill-in value)</span>
      </div>
      <div class="graph-readout">
        <span class="rd">mean of the column <b>{meanK}k shekels</b></span>
        <span class="rd">typical monthly earner <b>≈ 9k</b></span>
        <span class="rd">typical annual figure <b>≈ 120k</b></span>
        <span class="rd">{w > 0 ? "the mean describes nobody" : "one honest population"}</span>
      </div>
    </div>
  );
}
