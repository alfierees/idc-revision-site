import type { VNode } from "preact";
import { useSketch, SketchGraph, InkLine, Note, Toggle, INK_SOFT, ACCENT } from "./sketch";
import { useState } from "preact/hooks";

// Why a random row-level split measures recognition, not prediction.
// In the loan-default notebook each of the 1,200 customers appears as 3–8
// nearly identical monthly rows, all carrying the same outcome. Here: 12
// customers, 63 rows. Split by row (the notebook's choice) and almost every
// customer straddles TRAIN and TEST; split by customer and the test set holds
// genuine strangers.

const ROWS_PER_CUSTOMER = [4, 6, 3, 8, 5, 4, 7, 3, 6, 5, 4, 8]; // 63 rows
const CHIPS = ROWS_PER_CUSTOMER.flatMap((rows, customer) => Array.from({ length: rows }, (_, row) => ({ customer, row })));
const TEST_CUSTOMERS = [2, 7, 10]; // 3 + 3 + 4 = 10 rows ≈ the same 20% held out
const hue = (customer: number) => `hsl(${customer * 30}, 48%, 55%)`;

type Mode = "row" | "customer";

const NOTES = [
  "63 monthly rows from 12 customers. Same colour = same customer: nearly identical rows, same outcome.",
  "The notebook splits by row: 80% train, 20% test, at random.",
  "Almost every customer now sits on both sides. The test isn't about strangers: the model has already seen these people.",
  "Split by customer instead: everything about a person lands on one side. Now the test measures prediction.",
];

export default function SplitShuffler(): VNode {
  const [exploreMode, setExploreMode] = useState<Mode>("row");
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMax: 1, yMax: 1 }], aspect: 0.62, minHeight: 260, maxHeight: 380, maxWidth: 680, padding: { left: 6, right: 6, top: 6, bottom: 6 } });
  const { step, drawNow } = sketch;
  const mode: Mode = step === 3 ? "customer" : exploreMode === "customer" && step >= 1 ? exploreMode : "row";
  const split = step >= 1;
  const width = sketch.width, height = sketch.height;
  const trainBox = { x: 8, y: 34, w: width * 0.62 - 12, cols: sketch.narrow ? 6 : 8 };
  const testBox = { x: width * 0.62 + 4, y: 34, w: width * 0.38 - 12, cols: sketch.narrow ? 3 : 4 };
  const poolBox = { x: 8, y: 34, w: width - 16, cols: sketch.narrow ? 9 : 13 };
  const chipRadius = Math.min(8, width / 70);
  const slot = (box: typeof trainBox, index: number) => {
    const pitch = box.w / box.cols;
    return { x: box.x + (index % box.cols + 0.5) * pitch, y: box.y + 26 + Math.floor(index / box.cols) * (chipRadius * 2 + 10) };
  };
  const inTest = (customer: number, row: number) => (mode === "row" ? (customer * 7 + row * 13) % 5 === 0 : TEST_CUSTOMERS.includes(customer));
  let trainIndex = 0, testIndex = 0, poolIndex = 0;
  const placed = CHIPS.map(({ customer, row }) => {
    const test = split && inTest(customer, row);
    const position = !split ? slot(poolBox, poolIndex++) : test ? slot(testBox, testIndex++) : slot(trainBox, trainIndex++);
    return { customer, test, ...position };
  });
  const straddlers = new Set<number>();
  for (let customer = 0; customer < ROWS_PER_CUSTOMER.length; customer++) {
    const rows = placed.filter((chip) => chip.customer === customer);
    if (rows.some((chip) => chip.test) && rows.some((chip) => !chip.test)) straddlers.add(customer);
  }
  const boxOutline = (box: { x: number; y: number; w: number }, id: string, label: string, count: number) => {
    const bottom = height - 8;
    const lines = [[box.x, box.y, box.x + box.w, box.y], [box.x + box.w, box.y, box.x + box.w, bottom], [box.x + box.w, bottom, box.x, bottom], [box.x, bottom, box.x, box.y]];
    return [
      ...lines.map(([x1, y1, x2, y2], side) => <InkLine x1={x1} y1={y1} x2={x2} y2={y2} id={`${id}-${side}`} color={INK_SOFT} width={1.5} />),
      <Note x={box.x + 8} y={box.y - 8} text={label} color={INK_SOFT} size={18} />,
      <text x={box.x + box.w - 6} y={box.y - 10} text-anchor="end" class="sk-tick">{count} rows</text>,
    ];
  };
  const drawing: VNode[] = split
    ? [...boxOutline(trainBox, "train", "TRAIN (80%)", placed.filter((chip) => !chip.test).length), ...boxOutline(testBox, "test", "TEST (20%)", placed.filter((chip) => chip.test).length)]
    : boxOutline(poolBox, "pool", "all 63 rows", 63);
  placed.forEach(({ customer, x, y }) => drawing.push(
    <g style={`transform:translate(${x}px,${y}px);transition:transform .55s ease`}>
      {mode === "row" && step >= 2 && straddlers.has(customer) && <circle r={chipRadius + 3.5} style={`fill:none;stroke:${ACCENT};stroke-width:2`} />}
      <circle r={chipRadius} style={`fill:${hue(customer)}`} />
    </g>,
  ));
  const tex = !split ? "12 \\text{ customers},\\; 63 \\text{ rows}" : `\\text{customers on both sides: } ${straddlers.size} / 12 \\;\\Rightarrow\\; \\text{the test measures ${mode === "row" ? "recognition" : "prediction"}}`;
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={tex} ariaLabel={`Train/test split by ${mode}: ${straddlers.size} of 12 customers have rows on both sides.`}
      top={step >= 1 && step < 3 ? <Toggle label="Split" options={[{ key: "row", label: "Split by row (the notebook)" }, { key: "customer", label: "Split by customer (the fix)" }]} active={mode} onPick={(key) => setExploreMode(key as Mode)} /> : undefined}>
      {drawing}
      {step >= 2 && mode === "row" && <Note x={width / 2} y={height - 16} text="ring = customer on both sides" color={ACCENT} anchor="middle" size={17} draw={drawNow(2)} />}
    </SketchGraph>
  );
}
