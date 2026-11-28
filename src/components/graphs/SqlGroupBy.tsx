import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, SketchGraph, InkLine, Note, Slider, MARKER, WASH, INK, INK_SOFT, INK_MUTED } from "./sketch";

// Databases & SQL, Lecture 9: the logical order of execution of a grouped
// query, on a small payment table.
//   type: sql-group-by
//   SELECT customer_id, SUM(amount) AS total
//   FROM payment WHERE amount > 1
//   GROUP BY customer_id HAVING SUM(amount) > 5
//   ORDER BY total DESC;
// Steps: FROM → WHERE (rows) → GROUP BY (buckets) → HAVING (groups) → SELECT
// (one row per group) → ORDER BY → explore (move both thresholds).

const ROWS: [number, number][] = [
  [1, 2.99], [2, 9.99], [4, 3.99], [1, 0.99], [3, 1.99], [4, 0.5], [1, 4.99], [2, 5.99], [4, 2.99],
];
const CUSTOMERS = [1, 2, 3, 4];
const COLOR: Record<number, keyof typeof MARKER> = { 1: "blue", 2: "green", 3: "purple", 4: "amber" };
const CLAUSES = ["FROM", "WHERE", "GROUP BY", "HAVING", "SELECT", "ORDER BY"];

const NOTES = [
  "1. FROM: the source rows. Nothing is filtered or grouped yet.",
  "2. WHERE filters single rows, before any group exists. That is why WHERE cannot use SUM or COUNT.",
  "3. GROUP BY puts the surviving rows into one bucket per customer_id. Now each bucket has a SUM.",
  "4. HAVING filters whole groups by an aggregate. Customer 3's bucket fails and is dropped.",
  "5. SELECT returns one row per remaining bucket: the grouping column and aggregates only.",
  "6. ORDER BY total DESC sorts the output last. It changes the result's order, never the stored data.",
  "Your turn. Move the WHERE and HAVING thresholds and watch which rows and groups survive.",
];

const money = (v: number) => v.toFixed(2);

export default function SqlGroupBy(): VNode {
  const [whereMin, setWhereMin] = useState(1);
  const [havingMin, setHavingMin] = useState(5);
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMin: 0, xMax: 1, yMin: 0, yMax: 1 }], maxWidth: 560, aspect: 0.66, minHeight: 330, maxHeight: 360, padding: { left: 6, right: 6, top: 8, bottom: 6 } });
  const { step } = sketch;
  const frame = sketch.frames[0];
  const exploring = step === NOTES.length - 1;
  const wMin = exploring ? whereMin : 1, hMin = exploring ? havingMin : 5;
  const at = (s: number) => exploring || step >= s;

  const passWhere = ROWS.map(([, amount]) => !at(1) || amount > wMin);
  const sums: Record<number, number> = {};
  CUSTOMERS.forEach((cust) => { sums[cust] = ROWS.reduce((t, [c, a], i) => t + (c === cust && passWhere[i] ? a : 0), 0); });
  const hasRows = (cust: number) => ROWS.some(([c], i) => c === cust && passWhere[i]);
  const groups = CUSTOMERS.filter(hasRows);
  const passHaving = (cust: number) => !at(3) || sums[cust] > hMin;

  const W = frame.right - frame.left;
  const tableW = Math.min(170, Math.floor(W * 0.4));
  const outW = Math.min(150, Math.floor(W * 0.34));
  const tx = frame.left, ox = frame.right - outW;
  const headY = frame.top + 22, rowH = 23, gap = 9;
  const colW = [tableW * 0.5, tableW * 0.5];

  // Row positions: source order before GROUP BY, then bucketed by customer.
  const rowTop: number[] = [];
  if (!at(2)) ROWS.forEach((_, i) => { rowTop[i] = headY + 22 + i * rowH; });
  else {
    let y = headY + 22;
    groups.forEach((cust) => {
      ROWS.forEach(([c], i) => { if (c === cust && passWhere[i]) { rowTop[i] = y; y += rowH; } });
      y += gap;
    });
    ROWS.forEach((_, i) => { if (!passWhere[i]) { rowTop[i] = y; y += rowH; } });
  }
  const bucketMid = (cust: number) => {
    const ys = ROWS.map((r, i) => (r[0] === cust && passWhere[i] ? rowTop[i] : null)).filter((v): v is number => v !== null);
    return (Math.min(...ys) + Math.max(...ys) + rowH) / 2;
  };

  const parts: VNode[] = [];
  const text = (x: number, y: number, s: string, opts: { color?: string; weight?: number; size?: number; anchor?: string; mono?: boolean } = {}) => (
    <text x={x} y={y} text-anchor={opts.anchor ?? "middle"} style={`font:${opts.weight ?? 400} ${opts.size ?? 12.5}px var(${opts.mono ? "--font-mono" : "--font-ui"});fill:${opts.color ?? INK}`}>{s}</text>
  );

  parts.push(text(tx, frame.top + 14, "payment", { weight: 700, size: 13, anchor: "start", mono: true }));
  parts.push(<rect x={tx} y={headY} width={tableW} height={22} style={`fill:${WASH.grey}`} />);
  parts.push(text(tx + colW[0] / 2, headY + 15, tableW < 150 ? "cust_id" : "customer_id", { weight: 600, size: 11.5, color: INK_SOFT, mono: true }));
  parts.push(text(tx + colW[0] + colW[1] / 2, headY + 15, "amount", { weight: 600, size: 11.5, color: INK_SOFT, mono: true }));

  ROWS.forEach(([cust, amount], i) => {
    const dropped = !passWhere[i] || (at(2) && !passHaving(cust));
    const wash = at(2) && passWhere[i] ? WASH[COLOR[cust]] : "none";
    parts.push(
      <g style={`transform:translate(0px,${rowTop[i]}px);transition:transform 480ms ease, opacity 350ms;opacity:${dropped ? 0.3 : 1}`}>
        <rect x={tx} y={0} width={tableW} height={rowH} style={`fill:${wash};stroke:${INK_MUTED};stroke-width:0.6`} />
        {text(tx + colW[0] / 2, rowH / 2 + 4, String(cust), { mono: true, weight: 600, color: at(2) ? MARKER[COLOR[cust]] : INK })}
        {text(tx + colW[0] + colW[1] / 2, rowH / 2 + 4, money(amount), { mono: true, color: at(1) && !passWhere[i] ? MARKER.red : INK })}
        {at(1) && !passWhere[i] && <line x1={tx + 4} y1={rowH / 2} x2={tx + tableW - 4} y2={rowH / 2} style={`stroke:${MARKER.red};stroke-width:1.3`} />}
      </g>,
    );
  });

  // Bucket sums beside the table.
  if (at(2)) groups.forEach((cust) => {
    const failed = at(3) && !passHaving(cust);
    parts.push(<Note x={tx + tableW + 8} y={bucketMid(cust) + 5} text={`SUM ${money(sums[cust])}`} color={failed ? MARKER.red : MARKER[COLOR[cust]]} size={15} />);
    if (failed) parts.push(<InkLine x1={tx + 2} y1={bucketMid(cust)} x2={tx + tableW + 8 + 72} y2={bucketMid(cust)} id={`hv${cust}-${hMin}-${wMin}`} color={MARKER.red} width={1.6} />);
  });

  // The output table.
  if (at(4)) {
    const kept = groups.filter((cust) => passHaving(cust));
    const ordered = at(5) ? [...kept].sort((a, b) => sums[b] - sums[a]) : kept;
    const oy = headY;
    const ocol = [outW * 0.5, outW * 0.5];
    parts.push(text(ox, frame.top + 14, "result", { weight: 700, size: 13, anchor: "start", mono: true }));
    parts.push(<rect x={ox} y={oy} width={outW} height={22} style={`fill:${WASH.grey}`} />);
    parts.push(text(ox + ocol[0] / 2, oy + 15, outW < 140 ? "cust_id" : "customer_id", { weight: 600, size: 11, color: INK_SOFT, mono: true }));
    parts.push(text(ox + ocol[0] + ocol[1] / 2, oy + 15, "total", { weight: 600, size: 11, color: INK_SOFT, mono: true }));
    kept.forEach((cust) => {
      const y = oy + 22 + ordered.indexOf(cust) * rowH;
      parts.push(
        <g style={`transform:translate(0px,${y}px);transition:transform 480ms ease`}>
          <rect x={ox} y={0} width={outW} height={rowH} style={`fill:${WASH[COLOR[cust]]};stroke:${INK_MUTED};stroke-width:0.6`} />
          {text(ox + ocol[0] / 2, rowH / 2 + 4, String(cust), { mono: true, weight: 600, color: MARKER[COLOR[cust]] })}
          {text(ox + ocol[0] + ocol[1] / 2, rowH / 2 + 4, money(sums[cust]), { mono: true })}
        </g>,
      );
    });
    if (kept.length === 0) parts.push(text(ox + outW / 2, oy + 40, "(empty set)", { color: INK_SOFT, size: 12 }));
    parts.push(<Note x={ox} y={oy + 22 + Math.max(1, kept.length) * rowH + 24} text={`${kept.length} row${kept.length === 1 ? "" : "s"}`} color={INK} size={18} />);
  }

  const current = exploring ? -1 : Math.min(step, CLAUSES.length - 1);
  const tex = CLAUSES.map((cl, i) => (i === current ? `\\textcolor{${MARKER.red}}{\\textbf{${cl}}}` : `\\text{${cl}}`)).join(" \\to ");

  return (
    <SketchGraph
      sketch={sketch}
      note={NOTES[step]}
      tex={tex}
      footnote={`SELECT customer_id, SUM(amount) AS total FROM payment WHERE amount > ${money(wMin)} GROUP BY customer_id HAVING SUM(amount) > ${money(hMin)} ORDER BY total DESC;`}
      ariaLabel="A payment table passing through WHERE, GROUP BY, HAVING, SELECT and ORDER BY, in that order."
      explore={
        <div class="graph-sliders">
          <Slider label="WHERE amount >" value={wMin} min={0} max={6} step={0.5} onInput={setWhereMin} />
          <Slider label="HAVING SUM(amount) >" value={havingMin} min={0} max={16} step={1} onInput={setHavingMin} />
        </div>
      }
    >
      {parts}
    </SketchGraph>
  );
}
