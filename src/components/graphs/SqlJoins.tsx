import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, SketchGraph, InkLine, InkDashed, Note, Toggle, Slider, MARKER, WASH, INK, INK_SOFT, INK_MUTED } from "./sketch";

// Databases & SQL, Lectures 9 to 11: what each JOIN keeps, on the exam's own
// fish and bicycle tables (fish.bicycle_id is a foreign key to bicycle).
//   type: sql-joins
// Steps: the two tables and their links → CROSS (every pair) → INNER (matches)
// → LEFT (+ fish with no bicycle) → RIGHT (+ bicycles with no fish) → FULL
// OUTER (LEFT UNION RIGHT) → explore (join type, how many fish have NULL, how
// many bicycles nobody rides). Row counts are computed from the data shown.

type Join = "cross" | "inner" | "left" | "right" | "full";
const JOINS: Join[] = ["cross", "inner", "left", "right", "full"];
const LABEL: Record<Join, string> = { cross: "CROSS", inner: "INNER", left: "LEFT", right: "RIGHT", full: "FULL OUTER" };
const FISH = ["Nemo", "Dory", "Wanda", "Gill", "Bubbles", "Bruce"];
const BIKES = ["BMX", "Tandem", "Racer"];

// fish i → bicycle index or null. The last `nulls` fish have NULL; the rest are
// spread in order over the first (3 − unused) bicycles.
function links(nulls: number, unused: number): (number | null)[] {
  const matched = FISH.length - nulls, used = BIKES.length - unused;
  return FISH.map((_, i) => (i < matched ? Math.min(used - 1, Math.floor((i * used) / matched)) : null));
}

function counts(link: (number | null)[]) {
  const pairs = link.filter((b) => b !== null).length;
  const lonelyFish = link.length - pairs;
  const lonelyBikes = BIKES.filter((_, b) => !link.includes(b)).length;
  return { pairs, lonelyFish, lonelyBikes, cross: FISH.length * BIKES.length };
}

function rowCount(join: Join, c: ReturnType<typeof counts>): number {
  return { cross: c.cross, inner: c.pairs, left: c.pairs + c.lonelyFish, right: c.pairs + c.lonelyBikes, full: c.pairs + c.lonelyFish + c.lonelyBikes }[join];
}

function texFor(join: Join | null, c: ReturnType<typeof counts>): string {
  if (!join) return `\\texttt{fish}: ${FISH.length}\\ \\text{rows},\\quad \\texttt{bicycle}: ${BIKES.length}\\ \\text{rows}`;
  if (join === "cross") return `${FISH.length} \\times ${BIKES.length} = ${c.cross}\\ \\text{rows (no ON clause)}`;
  if (join === "inner") return `\\text{matched pairs} = ${c.pairs}`;
  if (join === "left") return `${c.pairs}\\ \\text{matched} + ${c.lonelyFish}\\ \\text{fish with NULL} = ${c.pairs + c.lonelyFish}`;
  if (join === "right") return `${c.pairs}\\ \\text{matched} + ${c.lonelyBikes}\\ \\text{unused bicycle${c.lonelyBikes === 1 ? "" : "s"}} = ${c.pairs + c.lonelyBikes}`;
  return `${c.pairs} + ${c.lonelyFish} + ${c.lonelyBikes} = ${c.pairs + c.lonelyFish + c.lonelyBikes}\\quad(\\text{LEFT} \\cup \\text{RIGHT})`;
}

const NOTES = [
  "fish.bicycle_id is a foreign key to bicycle. Four fish point at a bicycle, two hold NULL, and the Racer has no fish.",
  "CROSS JOIN (or JOIN with no ON / USING): every fish with every bicycle. Always rows × rows, whatever the data.",
  "INNER JOIN keeps only the matching pairs. Each fish has at most one bicycle (the FK points at a unique PK), so no fish appears twice.",
  "LEFT JOIN adds the fish that matched nothing, with NULL in every bicycle column. Every left row appears at least once.",
  "RIGHT JOIN is the mirror: every bicycle, with NULL fish columns for the Racer.",
  "FULL OUTER JOIN keeps both kinds of unmatched rows. MySQL has no FULL OUTER JOIN: write the LEFT JOIN, UNION, then the RIGHT JOIN.",
  "Your turn. Pick a join and change the data. Which counts can you know from the table sizes alone?",
];
const STEP_JOIN: (Join | null)[] = [null, "cross", "inner", "left", "right", "full"];

export default function SqlJoins(): VNode {
  const [pick, setPick] = useState<Join>("inner");
  const [nulls, setNulls] = useState(2);
  const [unused, setUnused] = useState(1);
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMin: 0, xMax: 1, yMin: 0, yMax: 1 }], maxWidth: 560, aspect: 0.86, minHeight: 340, maxHeight: 380, padding: { left: 6, right: 6, top: 8, bottom: 6 } });
  const { step } = sketch;
  const frame = sketch.frames[0];
  const exploring = step === NOTES.length - 1;
  const join = exploring ? pick : STEP_JOIN[step];
  const link = exploring ? links(nulls, unused) : links(2, 1);
  const c = counts(link);

  const W = frame.right - frame.left;
  const tableW = Math.min(200, Math.floor((W - 56) / 2));
  const fishX = frame.left, bikeX = frame.right - tableW;
  const titleY = frame.top + 14, headY = frame.top + 22, rowH = 25;
  const rowY = (i: number) => headY + 22 + i * rowH;            // top of row i
  const midY = (i: number) => rowY(i) + rowH / 2;
  const tableBottom = rowY(FISH.length);

  const keepFish = (i: number) => join === null || join === "cross" || link[i] !== null || join === "left" || join === "full";
  const keepBike = (b: number) => join === null || join === "cross" || link.includes(b) || join === "right" || join === "full";
  const fishWash = (i: number) => (join === null || join === "cross" ? "none" : link[i] !== null ? WASH.green : keepFish(i) ? WASH.amber : "none");
  const bikeWash = (b: number) => (join === null || join === "cross" ? "none" : link.includes(b) ? WASH.green : keepBike(b) ? WASH.amber : "none");

  const cell = (x: number, y: number, w: number, text: string, opts: { bold?: boolean; color?: string; mono?: boolean } = {}) => (
    <text x={x + w / 2} y={y + rowH / 2 + 4} text-anchor="middle"
      style={`font:${opts.bold ? 600 : 400} 12.5px var(${opts.mono ? "--font-mono" : "--font-ui"});fill:${opts.color ?? INK}`}>{text}</text>
  );

  const fishColW = [tableW * 0.52, tableW * 0.48];
  const bikeColW = [tableW * 0.42, tableW * 0.58];
  const parts: VNode[] = [];

  // Table titles and headers.
  parts.push(<text x={fishX} y={titleY} style={`font:700 13px var(--font-mono);fill:${INK}`}>fish</text>);
  parts.push(<text x={bikeX} y={titleY} style={`font:700 13px var(--font-mono);fill:${INK}`}>bicycle</text>);
  parts.push(<rect x={fishX} y={headY} width={tableW} height={22} style={`fill:${WASH.grey}`} />);
  parts.push(<rect x={bikeX} y={headY} width={tableW} height={22} style={`fill:${WASH.grey}`} />);
  parts.push(<text x={fishX + fishColW[0] / 2} y={headY + 15} text-anchor="middle" style={`font:600 11.5px var(--font-mono);fill:${INK_SOFT}`}>name</text>);
  parts.push(<text x={fishX + fishColW[0] + fishColW[1] / 2} y={headY + 15} text-anchor="middle" style={`font:600 11.5px var(--font-mono);fill:${MARKER.blue}`}>bicycle_id</text>);
  parts.push(<text x={bikeX + bikeColW[0] / 2} y={headY + 15} text-anchor="middle" style={`font:600 11.5px var(--font-mono);fill:${MARKER.blue}`}>bicycle_id</text>);
  parts.push(<text x={bikeX + bikeColW[0] + bikeColW[1] / 2} y={headY + 15} text-anchor="middle" style={`font:600 11.5px var(--font-mono);fill:${INK_SOFT}`}>{tableW < 170 ? "desc." : "description"}</text>);

  FISH.forEach((name, i) => {
    const kept = keepFish(i);
    const y = rowY(i);
    parts.push(
      <g style={`opacity:${kept ? 1 : 0.32};transition:opacity 350ms`}>
        <rect x={fishX} y={y} width={tableW} height={rowH} style={`fill:${fishWash(i)};stroke:${INK_MUTED};stroke-width:0.6`} />
        {cell(fishX, y, fishColW[0], name)}
        {cell(fishX + fishColW[0], y, fishColW[1], link[i] === null ? "NULL" : String(link[i]! + 1), { mono: true, color: link[i] === null ? MARKER.amber : MARKER.blue, bold: true })}
      </g>,
    );
    if (!kept) parts.push(<InkLine x1={fishX + 4} y1={midY(i)} x2={fishX + tableW - 4} y2={midY(i)} id={`fx${i}`} color={MARKER.grey} width={1.2} />);
  });
  BIKES.forEach((desc, b) => {
    const kept = keepBike(b);
    const y = rowY(b);
    parts.push(
      <g style={`opacity:${kept ? 1 : 0.32};transition:opacity 350ms`}>
        <rect x={bikeX} y={y} width={tableW} height={rowH} style={`fill:${bikeWash(b)};stroke:${INK_MUTED};stroke-width:0.6`} />
        {cell(bikeX, y, bikeColW[0], String(b + 1), { mono: true, color: MARKER.blue, bold: true })}
        {cell(bikeX + bikeColW[0], y, bikeColW[1], desc)}
      </g>,
    );
    if (!kept) parts.push(<InkLine x1={bikeX + 4} y1={midY(b)} x2={bikeX + tableW - 4} y2={midY(b)} id={`bx${b}`} color={MARKER.grey} width={1.2} />);
  });

  // Links between the tables.
  const gapL = fishX + tableW + 3, gapR = bikeX - 3;
  if (join === "cross") {
    FISH.forEach((_, i) => BIKES.forEach((_, b) => parts.push(
      <line x1={gapL} y1={midY(i)} x2={gapR} y2={midY(b)} style={`stroke:${MARKER.purple};stroke-width:1.1;opacity:0.55`} />,
    )));
  } else {
    link.forEach((b, i) => {
      if (b === null) return;
      parts.push(<InkLine x1={gapL} y1={midY(i)} x2={gapR} y2={midY(b)} id={`l${i}-${b}-${nulls}-${unused}`} color={join ? MARKER.green : INK_SOFT} width={join ? 2 : 1.4} />);
    });
    if (join === "left" || join === "full") link.forEach((b, i) => {
      if (b !== null) return;
      parts.push(<InkDashed x1={gapL} y1={midY(i)} x2={gapL + 18} y2={midY(i)} id={`nl${i}`} color={MARKER.amber} width={1.6} dash={4} gap={3} />);
      parts.push(<Note x={gapL + 21} y={midY(i) + 5} text="NULL" color={MARKER.amber} size={14} />);
    });
    if (join === "right" || join === "full") BIKES.forEach((_, b) => {
      if (link.includes(b)) return;
      parts.push(<InkDashed x1={gapR - 18} y1={midY(b)} x2={gapR} y2={midY(b)} id={`nr${b}`} color={MARKER.amber} width={1.6} dash={4} gap={3} />);
      parts.push(<Note x={gapR - 21} y={midY(b) + 5} text="NULL" color={MARKER.amber} size={14} anchor="end" />);
    });
  }

  // Result line and Venn diagram under the tables.
  const resultY = tableBottom + 34;
  if (join) {
    parts.push(<Note x={fishX} y={resultY} text={`${LABEL[join]} JOIN`} color={INK} size={19} />);
    parts.push(<Note x={fishX} y={resultY + 30} text={`${rowCount(join, c)} rows`} color={join === "cross" ? MARKER.purple : MARKER.green} size={26} />);
  }
  const vennR = 26, vennCy = tableBottom + 48, vennCx = frame.right - vennR * 2.4;
  const lx = vennCx - vennR * 0.55, rx = vennCx + vennR * 0.55;
  if (join && join !== "cross") {
    const id = `${sketch.uid}-venn`;
    const leftOnly = join === "left" || join === "full", rightOnly = join === "right" || join === "full";
    parts.push(
      <g>
        <defs><clipPath id={id}><circle cx={lx} cy={vennCy} r={vennR} /></clipPath></defs>
        {leftOnly && <circle cx={lx} cy={vennCy} r={vennR} style={`fill:${WASH.amber}`} />}
        {rightOnly && <circle cx={rx} cy={vennCy} r={vennR} style={`fill:${WASH.amber}`} />}
        <circle cx={rx} cy={vennCy} r={vennR} clip-path={`url(#${id})`} style="fill:var(--color-card)" />
        <circle cx={rx} cy={vennCy} r={vennR} clip-path={`url(#${id})`} style={`fill:${WASH.green};stroke:none`} />
        <circle cx={lx} cy={vennCy} r={vennR} style={`fill:none;stroke:${INK};stroke-width:1.4`} />
        <circle cx={rx} cy={vennCy} r={vennR} style={`fill:none;stroke:${INK};stroke-width:1.4`} />
        <text x={lx - vennR * 0.45} y={vennCy + vennR + 15} text-anchor="middle" style={`font:600 11px var(--font-mono);fill:${INK_SOFT}`}>fish</text>
        <text x={rx + vennR * 0.45} y={vennCy + vennR + 15} text-anchor="middle" style={`font:600 11px var(--font-mono);fill:${INK_SOFT}`}>bicycle</text>
      </g>,
    );
  }

  const known: Record<Join, string> = {
    cross: "known from sizes alone",
    inner: "needs the data",
    left: "needs the data in general (here each fish matches at most one bicycle, so it equals the fish count)",
    right: "needs the data",
    full: "needs the data",
  };
  const note = exploring ? `Your turn. ${LABEL[pick]} JOIN gives ${rowCount(pick, c)} rows: ${known[pick]}.` : NOTES[step];

  return (
    <SketchGraph
      sketch={sketch}
      note={note}
      tex={texFor(join, c)}
      footnote="Green rows are matched, amber rows are kept with NULLs on the other side, grey rows are dropped. The 2024 papers use the same two tables with 6 fish and 3 bicycles."
      ariaLabel={`Two tables, fish (6 rows) and bicycle (3 rows). ${join ? `${LABEL[join]} JOIN returns ${rowCount(join, c)} rows.` : ""}`}
      top={exploring ? <Toggle label="Join" active={pick} onPick={(key) => setPick(key as Join)} options={JOINS.map((j) => ({ key: j, label: LABEL[j] }))} /> : undefined}
      explore={
        <div class="graph-sliders">
          <Slider label="fish with NULL bicycle_id" value={nulls} min={0} max={4} step={1} onInput={setNulls} />
          <Slider label="bicycles nobody rides" value={unused} min={0} max={2} step={1} onInput={setUnused} />
        </div>
      }
    >
      {parts}
    </SketchGraph>
  );
}
