import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { BtnRow, C } from "./plot";

// Why a random row-level split measures recognition, not prediction.
// In the loan-default notebook each of the 1,200 customers appears as 3–8
// nearly identical monthly rows, all carrying the same outcome. Here: 12
// customers, 63 rows. Split by row (the notebook's choice) and almost every
// customer straddles TRAIN and TEST; split by customer and the test set holds
// genuine strangers.

const ROWS_PER_CUSTOMER = [4, 6, 3, 8, 5, 4, 7, 3, 6, 5, 4, 8]; // 63 chips
const CHIPS = ROWS_PER_CUSTOMER.flatMap((n, c) =>
  Array.from({ length: n }, (_, k) => ({ c, k }))
);
const hue = (c: number) => `hsl(${c * 30}, 45%, 55%)`;
const TEST_CUSTOMERS = [2, 7, 10]; // 3+3+4 = 10 rows, ≈ the same 20% held out

// Box geometry (px). TRAIN is wider because it holds ~80% of the rows.
const TRAIN = { x: 10, y: 14, w: 308, h: 316, cols: 8 };
const TEST = { x: 332, y: 14, w: 158, h: 316, cols: 4 };
const slotXY = (box: typeof TRAIN, slot: number) => {
  const col = slot % box.cols, row = Math.floor(slot / box.cols);
  const pitch = (box.w - 28) / box.cols;
  return { x: box.x + 14 + (col + 0.5) * pitch, y: 66 + row * 32 };
};

type Mode = "row" | "customer";

interface Props { mode?: Mode; }

export default function SplitShuffler({ mode: m0 = "row" }: Props): VNode {
  const [mode, setMode] = useState<Mode>(m0);

  const inTest = (c: number, k: number) =>
    mode === "row" ? (c * 7 + k * 13) % 5 === 0 : TEST_CUSTOMERS.includes(c);

  // One pass in customer order: same-coloured chips take consecutive slots,
  // so each customer's rows sit together inside whichever box they land in.
  let trainSlot = 0, testSlot = 0;
  const placed = CHIPS.map(({ c, k }) => {
    const test = inTest(c, k);
    const { x, y } = test ? slotXY(TEST, testSlot++) : slotXY(TRAIN, trainSlot++);
    return { c, test, x, y };
  });

  // Customers whose rows appear on BOTH sides of the split.
  const straddlers = new Set<number>();
  for (let c = 0; c < 12; c++) {
    const mine = placed.filter((p) => p.c === c);
    if (mine.some((p) => p.test) && mine.some((p) => !p.test)) straddlers.add(c);
  }

  const trainN = placed.filter((p) => !p.test).length;
  const testN = placed.length - trainN;

  return (
    <div class="graph">
      <div class="graph-sliders">
        <BtnRow
          options={[
            { key: "row", label: "Split by row (the notebook)" },
            { key: "customer", label: "Split by customer (the fix)" },
          ]}
          active={mode}
          onPick={(k) => setMode(k as Mode)}
        />
      </div>
      <div class="graph-cap">Each customer appears as 3–8 nearly identical rows, all carrying the same outcome. Split by row and almost every customer lands on both sides — the model isn&rsquo;t asked to predict strangers, it&rsquo;s asked to recognise people it memorised. Split by customer and the exam is honest.</div>
      <svg viewBox="0 0 500 340" width="100%" role="img" aria-label="Train/test split shown as coloured chips per customer">
        <rect x={TRAIN.x} y={TRAIN.y} width={TRAIN.w} height={TRAIN.h} rx={10} style={`fill:none;stroke:${C.RULE};stroke-width:1.5`} />
        <rect x={TEST.x} y={TEST.y} width={TEST.w} height={TEST.h} rx={10} style={`fill:none;stroke:${C.RULE};stroke-width:1.5`} />
        <text x={TRAIN.x + 14} y={38} text-anchor="start" style={`font:600 12px var(--font-ui);fill:${C.INK_SOFT};letter-spacing:.08em`}>TRAIN (80%)</text>
        <text x={TEST.x + 14} y={38} text-anchor="start" style={`font:600 12px var(--font-ui);fill:${C.INK_SOFT};letter-spacing:.08em`}>TEST (20%)</text>
        <text x={TRAIN.x + TRAIN.w - 12} y={38} text-anchor="end" style={`font:10px var(--font-ui);fill:${C.INK_SOFT}`}>{trainN} rows</text>
        <text x={TEST.x + TEST.w - 12} y={38} text-anchor="end" style={`font:10px var(--font-ui);fill:${C.INK_SOFT}`}>{testN} rows</text>
        {placed.map(({ c, x, y }) => (
          <g style={`transform:translate(${x}px,${y}px);transition:transform .5s ease`}>
            {mode === "row" && straddlers.has(c) && (
              <circle r={10.5} style={`fill:none;stroke:${C.ACCENT};stroke-width:2`} />
            )}
            <circle r={7} style={`fill:${hue(c)}`} />
          </g>
        ))}
      </svg>
      <div class="graph-legend">
        <span><i class="gsw" style="background:hsl(210, 10%, 60%)" />one chip = one monthly row</span>
        <span><i class="gsw" style={`background:${hue(3)}`} />same colour = same customer</span>
        <span><i class="gsw" style="background:var(--color-accent)" />ring = customer on both sides</span>
      </div>
      <div class="graph-readout">
        <span class="rd">customers with rows in BOTH boxes <b>{straddlers.size} / 12</b></span>
        <span class="rd">what the test set measures <b>{mode === "row" ? "recognition" : "prediction"}</b></span>
      </div>
    </div>
  );
}
