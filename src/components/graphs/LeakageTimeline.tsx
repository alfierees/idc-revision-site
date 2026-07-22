import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { Slider, PALETTE, C } from "./plot";

// Target-leakage timeline for the loan-default notebook (1,200 customers,
// 14% default rate). Each of the seven data columns is placed at the moment
// the bank first KNOWS it. Four columns exist on application day; month is a
// warehouse artefact that appears row by row; avg_days_late and
// collections_flag only accrue AFTER the loan is granted — yet the notebook
// trains on them. Drag "today" back to 0 to see the leak.

const W = 500, H = 320;
const L = 112, R = 488, T = 36, B = 284;          // plot box in px
const xOf = (t: number) => L + ((t + 0.5) / 9) * (R - L); // months −0.5..8.5
const LANE_H = (B - T) / 8;
const yOf = (i: number) => T + LANE_H * (i + 0.5); // lane centre, 8 lanes

// The seven feature columns and when the bank first knows their value.
// knowAt is the month at which the column's value (as stored in the table)
// becomes knowable. The outcome lane (default) is drawn separately.
const FEATURES = [
  { name: "income", knowAt: 0 },
  { name: "self_employed", knowAt: 0 },
  { name: "credit_score", knowAt: 0 },
  { name: "loan_amount", knowAt: 0 },
  { name: "month", knowAt: 1 },           // first monthly row lands at month 1
  { name: "avg_days_late", knowAt: 8 },   // final average only known at the end
  { name: "collections_flag", knowAt: 8 },
] as const;

const GHOST = `fill:none;stroke:${C.INK_SOFT};stroke-width:1.5;stroke-dasharray:3 2`;

interface Props { today?: number; }

export default function LeakageTimeline({ today: t0 = 0 }: Props): VNode {
  const [today, setToday] = useState(t0);

  const els: VNode[] = [];

  // --- axis: months 0..8 along the bottom ---
  els.push(<line x1={L} y1={B} x2={R} y2={B} style={`stroke:${C.INK_SOFT};stroke-width:1`} />);
  for (let m = 0; m <= 8; m++) {
    els.push(<line x1={xOf(m)} y1={B} x2={xOf(m)} y2={B + 4} style={`stroke:${C.INK_SOFT};stroke-width:1`} />);
    els.push(<text x={xOf(m)} y={B + 16} text-anchor="middle" style={`font:11px var(--font-ui);fill:${C.INK_SOFT}`}>{m}</text>);
  }
  els.push(<text x={(L + R) / 2} y={B + 30} text-anchor="middle" style={`font:11px var(--font-ui);fill:${C.INK_SOFT}`}>months since the application</text>);

  // --- lane labels (7 features + the outcome) ---
  [...FEATURES.map((f) => f.name), "default"].forEach((name, i) => {
    els.push(<text x={L - 8} y={yOf(i) + 3.5} text-anchor="end" style={`font:11px var(--font-ui);fill:${C.INK}`}>{name}</text>);
  });

  // --- bold application-day line at t = 0 ---
  els.push(<line x1={xOf(0)} y1={20} x2={xOf(0)} y2={B} style={`stroke:${C.INK};stroke-width:2`} />);
  els.push(<text x={xOf(0) + 6} y={14} text-anchor="start" style={`font:600 10px var(--font-ui);fill:${C.INK}`}>application day — the decision is made HERE</text>);

  // --- "today" dashed accent line ---
  els.push(<line x1={xOf(today)} y1={20} x2={xOf(today)} y2={B} style={`stroke:${C.ACCENT};stroke-width:1.5;stroke-dasharray:5 3`} />);

  // Helper: a group that fades between known and not-yet-known.
  const fade = (known: boolean, children: VNode | VNode[]) => (
    <g style={`opacity:${known ? 1 : 0.3};transition:opacity .4s ease`}>{children}</g>
  );

  // --- decision-day chips: income, self_employed, credit_score, loan_amount ---
  for (let i = 0; i < 4; i++) {
    els.push(fade(true, <circle cx={xOf(0)} cy={yOf(i)} r={5.5} style={`fill:${PALETTE.marginStroke}`} />));
  }

  // --- month lane: small grey chips at t = 1..8, each knowable at its own month ---
  for (let m = 1; m <= 8; m++) {
    const known = today >= m;
    els.push(fade(known,
      known
        ? <circle cx={xOf(m)} cy={yOf(4)} r={3.5} style={`fill:${C.INK_SOFT}`} />
        : <circle cx={xOf(m)} cy={yOf(4)} r={3.5} style={GHOST} />
    ));
  }

  // --- accruing bars: avg_days_late (0.5→8) and collections_flag (2→8) ---
  const bar = (lane: number, start: number) => {
    const y = yOf(lane) - 6, h = 12;
    const solidEnd = Math.min(Math.max(today, start), 8);
    const out: VNode[] = [];
    if (today > start) {
      out.push(<rect x={xOf(start)} y={y} width={xOf(solidEnd) - xOf(start)} height={h} rx={6}
        style={`fill:${PALETTE.margin};stroke:${PALETTE.marginStroke};stroke-width:1`} />);
    }
    if (solidEnd < 8) {
      out.push(fade(false,
        <rect x={xOf(solidEnd)} y={y} width={xOf(8) - xOf(solidEnd)} height={h} rx={6} style={GHOST} />
      ));
    }
    return out;
  };
  els.push(...bar(5, 0.5)); // avg_days_late accrues as payments happen
  els.push(...bar(6, 2));   // collections_flag can only trip after arrears build

  // --- outcome diamond at t = 8 on the default lane ---
  const dx = xOf(8), dy = yOf(7);
  const diamond = `M ${dx} ${dy - 7} L ${dx + 7} ${dy} L ${dx} ${dy + 7} L ${dx - 7} ${dy} Z`;
  const outcomeKnown = today >= 8;
  els.push(fade(outcomeKnown,
    <path d={diamond} style={outcomeKnown
      ? `fill:${PALETTE.dwlStroke}`
      : `fill:none;stroke:${PALETTE.dwlStroke};stroke-width:1.5;stroke-dasharray:3 2`} />
  ));
  els.push(<text x={dx - 17} y={dy + 3.5} text-anchor="end" style={`font:10px var(--font-ui);fill:${C.INK_SOFT}`}>the outcome</text>);

  // --- annotate the not-yet-known group, once ---
  if (today < 8) {
    els.push(<text x={R - 2} y={T + 12} text-anchor="end" style={`font:italic 10px var(--font-ui);fill:${C.INK_SOFT}`}>does not exist yet</text>);
  }

  // --- the leak, called out in red when today sits exactly on decision day ---
  if (today === 0) {
    const ring = (lane: number, start: number) => (
      <rect x={xOf(start) - 8} y={yOf(lane) - 13} width={xOf(8) - xOf(start) + 18} height={26} rx={13}
        style={`fill:none;stroke:${PALETTE.dwlStroke};stroke-width:1.5`} />
    );
    els.push(ring(5, 0.5));
    els.push(ring(6, 2));
    els.push(<circle cx={dx} cy={dy} r={12} style={`fill:none;stroke:${PALETTE.dwlStroke};stroke-width:1.5`} />);
    els.push(<text x={xOf(0.5)} y={yOf(5) - 16} text-anchor="start" style={`font:italic 600 10px var(--font-ui);fill:${PALETTE.dwlStroke}`}>in the notebook&#39;s training data anyway</text>);
  }

  const knowable = FEATURES.filter((f) => f.knowAt <= today).length;
  const state = today === 0
    ? "this is the leak"
    : today >= 8
      ? "everything is knowable — but the loan is already over"
      : "the decision is behind you; the data is still accruing";

  return (
    <div class="graph">
      <div class="graph-sliders">
        <Slider label="today" value={today} min={0} max={8} step={0.5} onInput={setToday} />
      </div>
      <div class="graph-cap">Every column, placed at the moment the bank first knows it. Drag &lsquo;today&rsquo; to the application day: the two columns the model leans on hardest sit on the far side of the line — the model is reading tomorrow&rsquo;s newspaper.</div>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img" aria-label="Timeline of when each data column becomes knowable">{els}</svg>
      <div class="graph-legend">
        <span><i class="gsw" style={`background:${PALETTE.marginStroke}`} />knowable now</span>
        <span><i class="gsw" style={`background:${C.RULE}`} />does not exist yet</span>
        <span><i class="gsw" style={`background:${PALETTE.dwlStroke}`} />the outcome</span>
      </div>
      <div class="graph-readout">
        <span class="rd">knowable today <b>{knowable}</b> of 7 columns</span>
        <span class="rd">used by the model but unknowable on decision day <b>2</b></span>
        <span class="rd">{state}</span>
      </div>
    </div>
  );
}
