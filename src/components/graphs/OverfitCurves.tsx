import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { makeFrame, Axes, seg, label, Slider, PALETTE, C } from "./plot";

// Training blind: the notebook trained its neural network for a fixed 30 epochs
// with no validation set and no early stopping. This graph shows what it could
// not see — training error keeps falling forever, but error on unseen data
// bottoms out and then climbs as the network starts memorising its own rows.

const train = (e: number) => 0.30 * Math.exp(-e / 9) + 0.06;
const val = (e: number) =>
  0.34 * Math.exp(-e / 9) + 0.12 + 0.0028 * Math.pow(Math.max(0, e - 14), 1.15);

// Find the validation minimum by scanning (don't hard-code it).
let valMinE = 0;
let valMinV = val(0);
for (let e = 0; e <= 60; e += 0.5) {
  const v = val(e);
  if (v < valMinV) {
    valMinV = v;
    valMinE = e;
  }
}
const bestE = Math.round(valMinE);

interface Props { epochs?: number; }

export default function OverfitCurves({ epochs: e0 = 30 }: Props): VNode {
  const [E, setE] = useState(e0);

  const fr = makeFrame({ w: 500, h: 320, qMax: 60, pMax: 0.5, padB: 34 });

  const linePts = (fn: (e: number) => number, a: number, b: number): string => {
    const pts: string[] = [];
    for (let e = a; e <= b + 0.001; e += 0.5) pts.push(`${fr.x(e)},${fr.y(fn(e))}`);
    return pts.join(" ");
  };

  const els: VNode[] = [];
  els.push(
    <Axes
      f={fr}
      xTicks={[0, 15, 30, 45, 60]}
      yTicks={[0, 0.1, 0.2, 0.3, 0.4, 0.5]}
      xLabel="epochs of training"
      yLabel="error (lower is better)"
    />
  );

  // Overfitting gap: shaded band between the curves from the validation
  // minimum up to the current epoch (only once we're past the minimum).
  if (E > valMinE) {
    const pts: string[] = [];
    for (let e = valMinE; e <= E + 0.001; e += 0.5) pts.push(`${fr.x(e)},${fr.y(val(e))}`);
    for (let e = E; e >= valMinE - 0.001; e -= 0.5) pts.push(`${fr.x(e)},${fr.y(train(e))}`);
    els.push(<polygon points={pts.join(" ")} style={`fill:${PALETTE.dwl};stroke:none`} />);
    if (E - valMinE >= 8) {
      const mid = (valMinE + E) / 2;
      els.push(label(fr, mid, train(mid) + 0.022, "overfitting: memorising, not learning", PALETTE.dwlStroke, "middle", 10.5, true));
    }
  }

  // Curves: solid up to the current epoch, then dashed and faded — the future
  // the notebook can't see.
  els.push(<polyline points={linePts(train, 0, E)} style={`fill:none;stroke:${PALETTE.feeStroke};stroke-width:2`} />);
  els.push(<polyline points={linePts(val, 0, E)} style={`fill:none;stroke:${PALETTE.dwlStroke};stroke-width:2`} />);
  if (E < 60) {
    els.push(<polyline points={linePts(train, E, 60)} style={`fill:none;stroke:${PALETTE.feeStroke};stroke-width:2;stroke-dasharray:5 4;opacity:0.35`} />);
    els.push(<polyline points={linePts(val, E, 60)} style={`fill:none;stroke:${PALETTE.dwlStroke};stroke-width:2;stroke-dasharray:5 4;opacity:0.35`} />);
  }

  // The notebook's fixed choice: a blind vertical line at 30 epochs.
  els.push(seg(fr, 30, 0, 30, 0.46, C.INK, 1.5, "5 3"));
  els.push(label(fr, 30.8, 0.48, "the notebook's fixed 30 — chosen blind", C.INK, "start", 10.5, true));

  // Where early stopping would have stopped: the validation minimum.
  els.push(<line x1={fr.x(valMinE)} y1={fr.y(valMinV)} x2={fr.x(valMinE)} y2={fr.y(0.155)} style={`stroke:${PALETTE.marginStroke};stroke-width:1;stroke-dasharray:2 2`} />);
  els.push(<circle cx={fr.x(valMinE)} cy={fr.y(valMinV)} r="4" style={`fill:${PALETTE.marginStroke}`} />);
  els.push(label(fr, valMinE + 1, 0.145, `early stopping would stop here (≈${bestE})`, PALETTE.marginStroke, "start", 10.5, true));

  const tr = train(E);
  const vl = val(E);
  const state =
    E < valMinE - 2
      ? "still learning"
      : E <= valMinE + 2
        ? "the sweet spot"
        : "past the turn — every extra epoch makes it worse on new data";

  return (
    <div class="graph">
      <div class="graph-sliders">
        <Slider label="epochs trained" value={E} min={1} max={60} step={1} onInput={setE} />
      </div>
      <div class="graph-cap">
        The red curve is the one that matters — how wrong the model is on data it hasn't seen.
        It stops improving around epoch {bestE} and then turns worse, while the training curve
        keeps falling: the network has switched from learning patterns to memorising its own
        training rows. The notebook cannot see any of this — it kept no validation set, so it
        trained to a fixed 30 with its eyes shut.
      </div>
      <svg viewBox="0 0 500 320" width="100%" role="img" aria-label="Training and validation error as training runs longer">{els}</svg>
      <div class="graph-legend">
        <span><i class="gsw" style={`background:${PALETTE.feeStroke}`} />error on training data</span>
        <span><i class="gsw" style={`background:${PALETTE.dwlStroke}`} />error on unseen data</span>
        <span><i class="gsw" style={`background:${PALETTE.dwl}`} />overfitting gap</span>
      </div>
      <div class="graph-readout">
        <span class="rd">training error <b>{tr.toFixed(3)}</b></span>
        <span class="rd">validation error <b>{vl.toFixed(3)}</b></span>
        <span class="rd">gap <b>{(vl - tr).toFixed(3)}</b></span>
        <span class="rd">{state}</span>
      </div>
    </div>
  );
}
