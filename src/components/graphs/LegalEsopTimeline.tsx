import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, SketchGraph, SketchAxes, InkLine, InkDashed, Note, Dot, Toggle, Slider, MARKER, WASH, INK, INK_SOFT } from "./sketch";

// Legal & Tax, Lecture 6: an option grant over time.
//   type: legal-esop-timeline
// 4,800 options granted at month 0, 4-year vesting with a 1-year cliff, then
// monthly. Steps: grant → cliff → monthly vesting → leaving (3 / 12 months, for
// cause) → the Section 102 Capital Gain Track clock (24 months from grant) →
// the lecture's tax example → explore (leave month, reason, sale month).

type Reason = "none" | "death" | "cause";
const TOTAL = 4800, CLIFF = 12, FULL = 48, GAIN_PER_OPTION = 10;
const WINDOW: Record<Reason, number> = { none: 3, death: 12, cause: 0 };
const REASON_LABEL: Record<Reason, string> = { none: "Without cause", death: "Death / disability", cause: "For cause" };

const vested = (month: number) => (month < CLIFF ? 0 : Math.min(TOTAL, (TOTAL / 4) + ((Math.floor(month) - CLIFF) * TOTAL) / (FULL - CLIFF) * 0.75));

const NOTES = [
  "1. Grant, month 0: 4,800 options, the strike price fixed today. An option is a right, not an obligation, to buy shares at that price.",
  "2. The cliff: nothing vests in the first 12 months. Leave at month 11 and you leave with nothing.",
  "3. At the cliff a quarter vests at once (1,200), then 100 a month until all 4,800 have vested at month 48.",
  "4. Leaving at month 30 without cause: the 3,000 vested options can be exercised within 3 months; the 1,800 unvested ones expire. Death or disability: 12 months. For cause: everything expires at once.",
  "5. Section 102, Capital Gain Track: the 24-month clock runs from the grant, not from vesting or exercise. Sell (or leave the trustee) before month 24 and the gain is taxed at the marginal rate.",
  "6. The tax event is the sale, not the exercise. Lecture 6: a $100,000 gain held 24 months pays 25% ($25,000); sold earlier it pays up to about 59% ($59,000).",
  "Your turn. Pick when the employee leaves and why, and when the shares are sold.",
];

export default function LegalEsopTimeline(): VNode {
  const [leave, setLeave] = useState(30);
  const [reason, setReason] = useState<Reason>("none");
  const [sale, setSale] = useState(32);
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMin: 0, xMax: 60, yMin: 0, yMax: 5400 }], maxWidth: 600, aspect: 0.62, minHeight: 300, maxHeight: 380, padding: { left: 50, bottom: 40, top: 22, right: 14 } });
  const { step, show, drawNow } = sketch;
  const frame = sketch.frames[0];
  const exploring = step === NOTES.length - 1;
  const parts: VNode[] = [];

  parts.push(<SketchAxes frame={frame} id="esop-axes" xTicks={[0, 12, 24, 36, 48, 60]} yTicks={[0, 1200, 2400, 3600, 4800]} xLabel="months from grant" yLabel="vested options" formatTick={(v) => v.toLocaleString("en-US")} />);

  // Section 102 zones (from step 5).
  if (show(4)) {
    parts.push(<rect x={frame.x(0)} y={frame.top} width={frame.x(24) - frame.x(0)} height={frame.bottom - frame.top} style={`fill:${WASH.red};opacity:0.55`} />);
    parts.push(<rect x={frame.x(24)} y={frame.top} width={frame.right - frame.x(24)} height={frame.bottom - frame.top} style={`fill:${WASH.green};opacity:0.55`} />);
    parts.push(<InkDashed x1={frame.x(24)} y1={frame.bottom} x2={frame.x(24)} y2={frame.top} id="m24" color={MARKER.green} draw={drawNow(4)} />);
    parts.push(<Note x={frame.x(12)} y={frame.top + 18} anchor="middle" text={sketch.narrow ? "sold: up to ~59%" : "sold here: marginal, up to ~59%"} color={MARKER.red} size={sketch.narrow ? 14 : 16} />);
    parts.push(<Note x={frame.x(42)} y={frame.top + 18} anchor="middle" text={sketch.narrow ? "sold: 25%" : "sold here: 25% capital gain"} color={MARKER.green} size={sketch.narrow ? 14 : 16} />);
  }

  // The vesting staircase.
  const until = step === 0 ? 0 : step === 1 ? CLIFF - 0.01 : 60;
  // After the employee leaves (step 4 and explore), vesting stops: fade the rest.
  const leftAt = show(3) && !(step >= 4 && step <= 5) ? (exploring ? leave : 30) : null;
  const solid: string[] = [], faded: string[] = [];
  for (let m = 0; m <= until; m += 1) {
    const v = vested(m);
    const seg = [`${frame.x(m)},${frame.y(v)}`, `${frame.x(Math.min(m + 1, until))},${frame.y(v)}`];
    if (leftAt === null || m < leftAt) solid.push(...seg);
    if (leftAt !== null && m >= leftAt) faded.push(...seg);
  }
  if (step > 0 && solid.length) parts.push(<polyline points={solid.join(" ")} style={`fill:none;stroke:${MARKER.blue};stroke-width:2.6;stroke-linejoin:round`} />);
  if (step > 0 && faded.length) parts.push(<polyline points={faded.join(" ")} style={`fill:none;stroke:${MARKER.blue};stroke-width:2;stroke-linejoin:round;opacity:0.25`} />);
  parts.push(<Dot x={frame.x(0)} y={frame.y(0)} color={MARKER.blue} radius={5} />);
  parts.push(<Note x={frame.x(0) + 8} y={frame.y(0) - 10} text="grant" color={MARKER.blue} size={16} />);
  parts.push(<InkDashed x1={frame.x(0)} y1={frame.y(TOTAL)} x2={frame.right} y2={frame.y(TOTAL)} id="total" color={INK_SOFT} width={1.2} />);
  parts.push(<Note x={frame.right} y={frame.y(TOTAL) - 6} anchor="end" text="4,800 granted" color={INK_SOFT} size={14} />);

  if (step === 1) {
    parts.push(<InkLine x1={frame.x(CLIFF)} y1={frame.bottom} x2={frame.x(CLIFF)} y2={frame.y(2000)} id="cliff" color={MARKER.red} width={2} draw={drawNow(1)} />);
    parts.push(<Note x={frame.x(CLIFF) + 6} y={frame.y(2000)} text="cliff" color={MARKER.red} size={17} />);
    parts.push(<Dot x={frame.x(11)} y={frame.y(0)} color={MARKER.red} radius={5} />);
    parts.push(<Note x={frame.x(11)} y={frame.y(0) - 14} anchor="middle" text="0 vested" color={MARKER.red} size={15} />);
  }
  if (step === 2) {
    parts.push(<Dot x={frame.x(CLIFF)} y={frame.y(1200)} color={MARKER.blue} radius={5} />);
    parts.push(<Note x={frame.x(CLIFF) + 8} y={frame.y(1200) - 8} text="1,200 at once" color={MARKER.blue} size={16} />);
    parts.push(<Note x={frame.x(34)} y={frame.y(vested(34)) - 14} anchor="end" text="+100 a month" color={MARKER.blue} size={16} />);
  }

  // Leaving.
  const L = exploring ? leave : 30;
  const why: Reason = exploring ? reason : "none";
  if (show(3) && !(step >= 4 && step <= 5)) {
    const v = vested(L);
    const win = WINDOW[why];
    parts.push(<InkLine x1={frame.x(L)} y1={frame.bottom} x2={frame.x(L)} y2={frame.top + 26} id={`leave-${L}`} color={INK} width={1.8} draw={drawNow(3)} />);
    parts.push(<Note x={frame.x(L)} y={frame.top + 22} anchor={L > 45 ? "end" : "middle"} text="leaves" color={INK} size={16} />);
    if (why !== "cause" && v > 0) {
      parts.push(<rect x={frame.x(L)} y={frame.y(v) - 7} width={frame.x(Math.min(60, L + win)) - frame.x(L)} height={14} style={`fill:${WASH.amber};stroke:${MARKER.amber};stroke-width:1`} />);
      parts.push(<Note x={L < 22 ? frame.x(L) + 6 : frame.x(L) - 6} y={frame.y(v) - 12} text={`${v.toLocaleString("en-US")} vested: exercise within ${win} months`} color={MARKER.amber} size={sketch.narrow ? 13 : 15} anchor={L < 22 ? "start" : "end"} />);
    }
    const lost = why === "cause" ? v : 0;
    parts.push(<Note x={frame.x(L) + (L > 30 ? -6 : 6)} y={frame.y(TOTAL) + 22} anchor={L > 30 ? "end" : "start"} text={`${(TOTAL - v + lost).toLocaleString("en-US")} expire`} color={MARKER.red} size={15} />);
  }

  // The lecture's tax example and the explore sale.
  let tex = "\\text{4-year vesting, 1-year cliff, then monthly}";
  if (step === 4) tex = "\\text{Capital Gain Track: 25\\% if sold } \\ge 24 \\text{ months after grant}";
  if (step === 5) {
    tex = "10{,}000 \\times (\\$11 - \\$1) = \\$100{,}000:\\ \\ 25\\% \\to \\$25{,}000,\\quad \\text{early} \\to \\text{up to } \\$59{,}000";
    parts.push(<Dot x={frame.x(26)} y={frame.y(vested(26))} color={MARKER.green} radius={6} />);
    parts.push(<Note x={frame.x(26) + 8} y={frame.y(vested(26)) + 20} text="sale at 26: 25%" color={MARKER.green} size={16} />);
    parts.push(<Dot x={frame.x(18)} y={frame.y(vested(18))} color={MARKER.red} radius={6} />);
    parts.push(<Note x={frame.x(18) - 6} y={frame.y(vested(18)) - 12} anchor="end" text="sale at 18: marginal" color={MARKER.red} size={16} />);
  }
  if (exploring) {
    // Exercise and sale are separate: the vested options are assumed exercised
    // within the window after leaving; the shares can be sold any time later.
    const lapsed = reason === "cause" && sale >= leave;
    const n = lapsed ? 0 : vested(Math.min(sale, leave));
    const rate = sale >= 24 ? 0.25 : 0.59;
    const gain = n * GAIN_PER_OPTION;
    parts.push(<InkLine x1={frame.x(sale)} y1={frame.bottom} x2={frame.x(sale)} y2={frame.top + 30} id={`sale-${sale}`} color={MARKER.purple} width={1.8} />);
    parts.push(<Note x={frame.x(sale) + (sale > 40 ? -6 : 6)} y={frame.bottom - 10} anchor={sale > 40 ? "end" : "start"} text="sale" color={MARKER.purple} size={16} />);
    tex = lapsed
      ? "\\text{Dismissed for cause: every option expired}"
      : `${n.toLocaleString("en-US").replace(",", "{,}")} \\times \\$${GAIN_PER_OPTION} = \\$${gain.toLocaleString("en-US").replace(/,/g, "{,}")}\\ \\text{gain},\\ \\text{tax } ${rate === 0.25 ? "25\\%" : "\\text{up to } 59\\%"} = \\$${Math.round(gain * rate).toLocaleString("en-US").replace(/,/g, "{,}")}`;
  }

  return (
    <SketchGraph
      sketch={sketch}
      note={NOTES[step]}
      tex={tex}
      footnote={exploring ? `Gain assumed $${GAIN_PER_OPTION} per option. ${REASON_LABEL[reason]}: vested options are exercised within ${WINDOW[reason]} months of leaving (exercise is not taxed); the shares can be sold later.` : "Section 102 covers employees and officers only. Consultants and controlling shareholders fall under Section 3(i): taxed at exercise, as ordinary income."}
      ariaLabel="A vesting staircase of 4,800 options over 48 months with a 12-month cliff, the exercise window after leaving, and the 24-month Section 102 line."
      top={exploring ? <Toggle label="Reason for leaving" active={reason} onPick={(key) => setReason(key as Reason)} options={(["none", "death", "cause"] as Reason[]).map((r) => ({ key: r, label: REASON_LABEL[r] }))} /> : undefined}
      explore={
        <div class="graph-sliders">
          <Slider label="Leaves at month" value={leave} min={0} max={60} step={1} onInput={setLeave} />
          <Slider label="Sells at month" value={sale} min={0} max={60} step={1} onInput={setSale} />
        </div>
      }
    >
      {parts}
    </SketchGraph>
  );
}
