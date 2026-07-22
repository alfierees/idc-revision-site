import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { makeFrame, Axes, BtnRow, PALETTE, C } from "./plot";

// Filling missing credit scores with 0 manufactures impossible customers.
// Real scores live between 300 and 850 (≈ N(680, 70) clipped). The notebook
// fills its gaps with 0 — not a low score, an impossible one — and after
// standardisation those zeros sit at z ≈ −3.2, a far-out cluster the model
// happily learns as a "mystery segment". The fix: a plausible value from the
// training rows plus a flag remembering the score was missing.

function mulberry32(a: number) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const F = makeFrame({ w: 500, h: 300, qMax: 850, pMax: 1, padB: 34 });

// 60 customers, fixed at module scope so every render is identical.
const rnd = mulberry32(7);
const MISSING_IDX = [3, 17, 29, 41, 55];
const MISSING = new Set(MISSING_IDX);
const CUSTOMERS: { score: number; yFrac: number }[] = [];
for (let i = 0; i < 60; i++) {
  const u1 = rnd(), u2 = rnd();
  const g = Math.sqrt(-2 * Math.log(u1 || 1e-9)) * Math.cos(2 * Math.PI * u2); // Box–Muller
  const score = Math.min(850, Math.max(300, 680 + 70 * g));
  CUSTOMERS.push({ score, yFrac: 0.3 + 0.48 * rnd() });
}

// The five movers: pixel positions for each of the three modes.
const MOVERS = MISSING_IDX.map((idx, k) => ({
  idx,
  bandY: F.y(CUSTOMERS[idx].yFrac),
  shelfX: F.R - 8 - (4 - k) * 16,           // parked at the right edge
  shelfY: F.B - 11,                          // just above the axis
  zeroX: F.x(4 + rnd() * 26),                // x = 0 with small jitter
  medX: F.x(682 + (rnd() - 0.5) * 30),       // median with small jitter
}));

interface Props { mode?: string }

export default function ZeroFill({ mode: mode0 = "raw" }: Props): VNode {
  const [mode, setMode] = useState(mode0);

  const els: VNode[] = [];
  // Legal range 300–850, lightly shaded; 0–300 stays blank.
  els.push(<rect x={F.x(300)} y={F.T} width={F.x(850) - F.x(300)} height={F.B - F.T} style={`fill:${PALETTE.margin};opacity:.3`} />);
  els.push(<text x={F.x(575)} y={F.y(0.93)} text-anchor="middle" style={`font:600 11px var(--font-ui);fill:${PALETTE.marginStroke}`}>possible scores</text>);
  els.push(<text x={F.x(150)} y={F.y(0.93)} text-anchor="middle" style={`font:italic 11px var(--font-ui);fill:${C.INK_SOFT}`}>impossible</text>);
  els.push(<Axes f={F} xTicks={[0, 300, 500, 700, 850]} yTicks={[]} xLabel="credit score" />);

  // 55 customers with a recorded score.
  CUSTOMERS.forEach((c, i) => {
    if (MISSING.has(i)) return;
    els.push(<circle cx={F.x(c.score)} cy={F.y(c.yFrac)} r={4.5} style={`fill:${C.INK_SOFT};fill-opacity:.55`} />);
  });

  // The five missing customers glide between shelf, zero, and median.
  const moverStyle =
    mode === "raw" ? `fill:none;stroke:${C.INK};stroke-width:1.6`
    : mode === "zero" ? `fill:${PALETTE.dwlStroke}`
    : `fill:${PALETTE.marginStroke}`;
  MOVERS.forEach((m) => {
    const x = mode === "raw" ? m.shelfX : mode === "zero" ? m.zeroX : m.medX;
    const y = mode === "raw" ? m.shelfY : m.bandY;
    els.push(
      <g style={`transform:translate(${x}px,${y}px);transition:transform .5s ease`}>
        <circle cx={0} cy={0} r={5.5} style={moverStyle} />
        {mode === "median" && (
          <g>
            <line x1={0} y1={-7} x2={0} y2={-15} style={`stroke:${PALETTE.marginStroke};stroke-width:1.5`} />
            <polygon points="0,-15 7,-12 0,-9" style={`fill:${PALETTE.marginStroke}`} />
          </g>
        )}
      </g>,
    );
  });

  // Mode-specific annotations.
  if (mode === "raw") {
    els.push(<text x={F.R - 40} y={F.B - 28} text-anchor="middle" style={`font:600 10.5px var(--font-ui);fill:${C.INK}`}>missing (?)</text>);
  } else if (mode === "zero") {
    els.push(<text x={F.x(6)} y={F.y(0.14)} text-anchor="start" style={`font:600 10.5px var(--font-ui);fill:${PALETTE.dwlStroke}`}>z ≈ −3.2 after scaling — an invented segment</text>);
  } else {
    els.push(<text x={F.x(500)} y={F.y(0.14)} text-anchor="middle" style={`font:600 10.5px var(--font-ui);fill:${PALETTE.marginStroke}`}>plausible value, and 'was missing' kept as its own column</text>);
  }

  return (
    <div class="graph">
      <div class="graph-sliders">
        <BtnRow
          options={[
            { key: "raw", label: "as recorded" },
            { key: "zero", label: "fill with 0 (the notebook)" },
            { key: "median", label: "median + missing flag (the fix)" },
          ]}
          active={mode}
          onPick={setMode}
        />
      </div>
      <div class="graph-cap">
        Credit scores live between 300 and 850. The notebook fills the gaps with 0 — not a low score, an impossible one.
        After scaling, those zeros form a far-out cluster the model happily learns as a 'mystery segment'. The fix: a
        plausible value from the training rows, plus a flag remembering it was missing.
      </div>
      <svg viewBox="0 0 500 300" width="100%" role="img" aria-label="Credit scores with missing values filled three different ways">{els}</svg>
      <div class="graph-legend">
        <span><i class="gsw" style={`background:${C.INK_SOFT};opacity:.55`} />recorded score</span>
        <span><i class="gsw" style={`background:transparent;border:1.5px solid ${C.INK}`} />missing</span>
        <span><i class="gsw" style={`background:${PALETTE.dwlStroke}`} />filled with 0</span>
        <span><i class="gsw" style={`background:${PALETTE.marginStroke}`} />filled with median</span>
      </div>
      <div class="graph-readout">
        {mode === "raw" && <span class="rd">customers with no score <b>5 / 60</b></span>}
        {mode === "zero" && <span class="rd">impossible customers created <b>5</b></span>}
        {mode === "median" && (
          <>
            <span class="rd">impossible customers created <b>0</b></span>
            <span class="rd">information kept <b>yes</b></span>
          </>
        )}
      </div>
    </div>
  );
}
