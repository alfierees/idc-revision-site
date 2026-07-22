import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { makeFrame, Axes, Slider, PALETTE, C } from "./plot";

// The notebook's own final bar chart, rebuilt with the axis you can drag back
// to honest. Random Forest ≈ 0.99 vs Neural Network ≈ 0.98 test accuracy on a
// y-axis that starts at 0.90 — so a one-point gap fills a tenth of the picture
// and the 86% do-nothing baseline ("approve everyone") falls off the chart.

const BARS = [
  { name: "Random Forest", value: 0.99 },
  { name: "Neural Network", value: 0.98 },
];
const BASELINE = 0.86; // accuracy of approving everyone

interface Props { start?: number; }

export default function AxisTruncation({ start: s0 = 0.90 }: Props): VNode {
  const [start, setStart] = useState(s0);

  const fr = makeFrame({ w: 500, h: 320, qMax: 1, pMax: 1, padB: 34 });
  // The y-scale maps [start, 1.0] onto the plot height.
  const Y = (v: number) => fr.B - ((v - start) / (1 - start)) * (fr.B - fr.T);

  const barW = 90;
  const centre = (fr.L + fr.R) / 2;
  const centres = [centre - 80, centre + 80];

  const els: VNode[] = [];
  els.push(<Axes f={fr} xTicks={[]} yTicks={[]} yLabel="test accuracy" />);

  // Manual y-tick labels: 5 evenly spaced values between start and 1.0,
  // shown as percentages (Axes would print raw plot units, so draw our own).
  for (let i = 0; i <= 4; i++) {
    const v = start + ((1 - start) * i) / 4;
    els.push(
      <text x={fr.L - 6} y={Y(v) + 3} text-anchor="end" style="font:11px var(--font-ui);fill:var(--color-ink-soft)">
        {Math.round(v * 100)}%
      </text>
    );
    els.push(<line x1={fr.L - 3} y1={Y(v)} x2={fr.L} y2={Y(v)} style="stroke:var(--color-ink-soft);stroke-width:1" />);
  }

  // Bars with value labels on top and names underneath.
  BARS.forEach((b, i) => {
    const cx = centres[i];
    const top = Y(b.value);
    els.push(
      <rect
        x={cx - barW / 2} y={top} width={barW} height={fr.B - top}
        style={`fill:${PALETTE.feeStroke};fill-opacity:0.65;stroke:${PALETTE.feeStroke};stroke-width:1.5`}
      />
    );
    els.push(
      <text x={cx} y={top - 6} text-anchor="middle" style={`font:600 12px var(--font-ui);fill:${C.INK}`}>
        {Math.round(b.value * 100)}%
      </text>
    );
    els.push(
      <text x={cx} y={fr.B + 15} text-anchor="middle" style={`font:11px var(--font-ui);fill:${C.INK_SOFT}`}>
        {b.name}
      </text>
    );
  });

  // The do-nothing baseline — only on the chart once the axis drops below it.
  if (start < BASELINE) {
    els.push(<line x1={fr.L} y1={Y(BASELINE)} x2={fr.R} y2={Y(BASELINE)} style={`stroke:${C.ACCENT};stroke-width:1.5;stroke-dasharray:5 3`} />);
    els.push(
      <text x={fr.R - 4} y={Y(BASELINE) - 6} text-anchor="end" style={`font:600 10.5px var(--font-ui);fill:${C.ACCENT}`}>
        approve everyone: 86%
      </text>
    );
  }

  const exaggeration = Math.round((1 - 0) / (1 - start));

  return (
    <div class="graph">
      <div class="graph-sliders">
        <Slider
          label="y-axis starts at"
          value={start}
          min={0}
          max={0.90}
          step={0.05}
          onInput={(v) => setStart(Math.round(v * 100) / 100)}
        />
      </div>
      <div class="graph-cap">
        The notebook's final chart, rebuilt. Its y-axis starts at 0.90, so a one-point difference
        fills a tenth of the picture — and the 86% a do-nothing rule scores doesn't fit on the
        chart at all. Drag the axis down to zero: the drama disappears, and both bars end up
        barely clearing the line that requires no model whatsoever.
      </div>
      <svg viewBox="0 0 500 320" width="100%" role="img" aria-label="Model comparison bar chart with adjustable y-axis start">{els}</svg>
      <div class="graph-legend">
        <span><i class="gsw" style={`background:${PALETTE.feeStroke}`} />model test accuracy</span>
        <span><i class="gsw" style={`background:${C.ACCENT}`} />approve-everyone baseline</span>
      </div>
      <div class="graph-readout">
        <span class="rd">real gap between the models <b>1 point</b></span>
        <span class="rd">visual exaggeration <b>{exaggeration}×</b></span>
        <span class="rd">baseline visible <b>{start < BASELINE ? "yes" : "hidden below the chart"}</b></span>
      </div>
    </div>
  );
}
