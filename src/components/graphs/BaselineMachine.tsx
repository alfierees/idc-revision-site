import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { BtnRow, PALETTE, C } from "./plot";

// One hundred loan applicants (14 will default) scored by three rules:
// "approve everyone" (no model, 86% accuracy, catches nobody), the notebook's
// leaky 98% model (it read columns from the future), and an honest model that
// scores LOWER than doing nothing on accuracy yet is the only useful one.
// The point: accuracy is the wrong yardstick when the baseline is 86% for free.

// Fixed defaulter positions so the grid is deterministic.
const DEFAULTERS = [3, 9, 17, 22, 31, 38, 44, 52, 57, 63, 68, 76, 84, 91];
const DEF_SET = new Set(DEFAULTERS);
// Leaky model: catches 13 of 14 (misses one), wrongly flags one repayer.
const LEAKY_MISSED = 57;
const LEAKY_FLAGGED = new Set([40]);
// Honest model: catches 5 of 14, wrongly rejects 13 repayers.
const HONEST_CAUGHT = new Set([9, 31, 52, 68, 84]);
const HONEST_REJECTED = new Set([1, 7, 14, 26, 35, 41, 48, 55, 61, 70, 79, 88, 95]);

type Status = "ok" | "missed" | "caught" | "rejected";

function statusOf(i: number, mode: string): Status {
  if (DEF_SET.has(i)) {
    if (mode === "none") return "missed";
    if (mode === "leaky") return i === LEAKY_MISSED ? "missed" : "caught";
    return HONEST_CAUGHT.has(i) ? "caught" : "missed";
  }
  if (mode === "leaky" && LEAKY_FLAGGED.has(i)) return "rejected";
  if (mode === "honest" && HONEST_REJECTED.has(i)) return "rejected";
  return "ok";
}

const READOUT: Record<string, { acc: string; caught: string; rej: number; state: string }> = {
  none: { acc: "86", caught: "0 / 14", rej: 0, state: "the do-nothing baseline every model must beat" },
  leaky: { acc: "98", caught: "13 / 14", rej: 1, state: "not real — the model read the future" },
  honest: { acc: "78", caught: "5 / 14 (36%)", rej: 13, state: "worse accuracy than doing nothing — yet the only option that catches anyone" },
};

interface Props { mode?: "none" | "leaky" | "honest"; }

export default function BaselineMachine({ mode: mode0 = "none" }: Props): VNode {
  const [mode, setMode] = useState<string>(mode0);

  // 10×10 grid of applicants.
  const X0 = 133, Y0 = 45, GAP = 26, R = 9;
  const els: VNode[] = [];
  for (let i = 0; i < 100; i++) {
    const cx = X0 + (i % 10) * GAP;
    const cy = Y0 + Math.floor(i / 10) * GAP;
    const s = statusOf(i, mode);
    let fill = PALETTE.margin, stroke = PALETTE.marginStroke, sw = 1;
    if (s === "missed") { fill = PALETTE.dwl; stroke = PALETTE.dwlStroke; }
    else if (s === "caught") { fill = PALETTE.dwl; stroke = C.INK; sw = 3; }
    else if (s === "rejected") { fill = PALETTE.rent; stroke = PALETTE.rentStroke; }
    els.push(
      <circle
        cx={cx} cy={cy} r={R}
        style={`fill:${fill};stroke:${stroke};stroke-width:${sw};transition:fill .4s ease, stroke .4s ease, stroke-width .4s ease`}
      />
    );
  }
  // Slanted warning badge across the grid corner: the 98% is built on leakage.
  if (mode === "leaky") {
    els.push(
      <g style="transform:translate(322px,78px) rotate(-12deg)">
        <rect x={-102} y={-21} width={204} height={42} rx={4} style={`fill:var(--color-bg);fill-opacity:.88;stroke:${PALETTE.dwlStroke};stroke-width:1.5`} />
        <text x={0} y={-3} text-anchor="middle" style={`font:600 11px var(--font-ui);fill:${PALETTE.dwlStroke}`}>score built on leaked columns</text>
        <text x={0} y={12} text-anchor="middle" style={`font:600 11px var(--font-ui);fill:${PALETTE.dwlStroke}`}>— see Cell 3</text>
      </g>
    );
  }

  const rd = READOUT[mode];

  return (
    <div class="graph">
      <div class="graph-sliders">
        <BtnRow
          options={[
            { key: "none", label: "Approve everyone (no model)" },
            { key: "leaky", label: "The notebook's model" },
            { key: "honest", label: "An honest model (fixed data)" },
          ]}
          active={mode}
          onPick={setMode}
        />
      </div>
      <div class="graph-cap">One hundred applicants, fourteen of whom will default. 'Approve everyone' — no model, no data, no effort — already scores 86%, catching nobody. The notebook's 98% beats that only by reading columns from the future. The honest model scores LOWER than doing nothing on accuracy, and is still the only one worth having — which is why accuracy is the wrong yardstick here.</div>
      <svg viewBox="0 0 500 340" width="100%" role="img" aria-label="One hundred applicants scored by three different rules">{els}</svg>
      <div class="graph-legend">
        <span><i class="gsw" style={`background:${PALETTE.margin}`} />repays</span>
        <span><i class="gsw" style={`background:${PALETTE.dwl}`} />defaulter missed</span>
        <span><i class="gsw" style={`background:${PALETTE.dwlStroke}`} />defaulter caught</span>
        <span><i class="gsw" style={`background:${PALETTE.rent}`} />wrongly rejected</span>
      </div>
      <div class="graph-readout">
        <span class="rd">accuracy <b>{rd.acc}%</b></span>
        <span class="rd">defaulters caught <b>{rd.caught}</b></span>
        <span class="rd">wrongly rejected <b>{rd.rej}</b></span>
        <span class="rd">{rd.state}</span>
      </div>
    </div>
  );
}
