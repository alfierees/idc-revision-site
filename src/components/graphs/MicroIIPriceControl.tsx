import { useState } from "preact/hooks";
import type { VNode } from "preact";
import {
  useSketch, useGlide, SketchGraph, SketchAxes, InkLine, InkDashed, Hatch, Note, Dot, Toggle, Slider,
  fmt, MARKER, WASH, INK_SOFT,
} from "./sketch";

// Micro II: partial equilibrium with a quasi-linear consumer and a price control.
//   type: microii-price-control
//   paper: a26 | b23 | b24 | a24   (which past-paper market opens)
// Demand P = A - 2x (from Ax - x^2 + y), supply MC = 2c x (from C = c x^2,
// the f = l^{1/4} k^{1/4} firm). Steps: the market → CS and FS at equilibrium →
// a maximal price (supply is the short side) → a minimal price (demand is the
// short side) → explore any regulated price.

interface Props { paper?: string; }
interface Case { key: string; label: string; source: string; A: number; c: number; ceiling: number; floor: number; }

const CASES: Case[] = [
  { key: "a26", label: "2026 A", source: "2026 Moed A Q2 (also 2023 A Q3, 2023 example Q3)", A: 100, c: 1, ceiling: 100 / 3, floor: 200 / 3 },
  { key: "b23", label: "2023 B / 2025 A", source: "2023 Moed B Q3 and 2025 Moed A Q3", A: 120, c: 2, ceiling: 60, floor: 90 },
  { key: "b24", label: "2024 B / 2025 B", source: "2024 Moed B Q3 and 2025 Moed B Q3", A: 180, c: 2, ceiling: 80, floor: 140 },
  { key: "a24", label: "2024 A", source: "2024 Moed A Q3", A: 60, c: 4, ceiling: 40, floor: 50 },
];

const NOTES = [
  "Demand is marginal utility, P = A − 2x. Supply is marginal cost, MC = 2cx. They cross at the competitive equilibrium.",
  "Consumer surplus (blue) sits between demand and the price, firm surplus (green) between the price and MC. Together they are the largest welfare possible.",
  "A maximal price below p*: firms only supply where MC equals the cap, so supply is the short side. Consumers pay less on fewer units; the red triangle is lost.",
  "A minimal price above p*: consumers only buy where their marginal utility equals the floor, so demand is the short side. Firms earn more per unit on fewer units.",
  "Your turn. Slide the regulated price. Watch which side is short, and where CS (ceilings) or FS (floors) peaks.",
];

export default function MicroIIPriceControl({ paper = "a26" }: Props): VNode {
  const start = CASES.find((c) => c.key === paper) ?? CASES[0];
  const [pick, setPick] = useState(start.key);
  const chosen = CASES.find((c) => c.key === pick) ?? start;
  const { A, c } = chosen;
  const xStar = A / (2 + 2 * c);
  const pStar = 2 * c * xStar;
  const [priceTarget, setPriceTarget] = useState(Math.round(chosen.ceiling));
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMin: 0, xMax: A / 2, yMax: A * 1.02 }], maxWidth: 640, padding: { left: 48, bottom: 42, top: 18 } });
  const { step, show, drawNow, narrow } = sketch;
  const frame = sketch.frames[0];
  const exploring = step === NOTES.length - 1;

  const regulated = step === 2 ? chosen.ceiling : step === 3 ? chosen.floor : exploring ? priceTarget : pStar;
  const shown = useGlide({ price: regulated }, false);
  const price = shown.price;
  const binding = show(2) && Math.abs(price - pStar) > 1e-6;
  // Quantity traded: the short side of the market.
  const qty = !binding ? xStar : price < pStar ? price / (2 * c) : (A - price) / 2;
  const cs = (A - price) * qty - qty * qty;
  const fs = price * qty - c * qty * qty;
  const welfare = cs + fs;
  const wStar = A * xStar - (1 + c) * xStar * xStar;
  const dwl = wStar - welfare;
  const csPeak = (c * A) / (1 + 2 * c);
  const fsPeak = (A * (1 + c)) / (2 + c);

  const P = (x: number, y: number): [number, number] => [frame.x(x), frame.y(y)];
  const demandAt = (x: number) => A - 2 * x;
  const mcAt = (x: number) => 2 * c * x;
  const drawing: VNode[] = [
    <SketchAxes frame={frame} id={`pc-axes-${pick}`} xTicks={[0, Math.round(xStar), Math.round(A / 2)]} yTicks={[0, Math.round(pStar), A]} xLabel="x" yLabel="p" />,
  ];

  if (show(1)) {
    const csShape: [number, number][] = qty > 0 ? [P(0, A), P(qty, demandAt(qty)), P(qty, price), P(0, price)] : [];
    const fsShape: [number, number][] = qty > 0 ? [P(0, 0), P(qty, mcAt(qty)), P(qty, price), P(0, price)] : [];
    drawing.push(<Hatch points={csShape} id={`pc-cs-${pick}`} wash={WASH.blue} ink={MARKER.blue} draw={drawNow(1)} />);
    drawing.push(<Hatch points={fsShape} id={`pc-fs-${pick}`} wash={WASH.green} ink={MARKER.green} angle={-1} draw={drawNow(1)} />);
    if (binding && qty < xStar - 1e-6) {
      drawing.push(<Hatch points={[P(qty, demandAt(qty)), P(xStar, pStar), P(qty, mcAt(qty))]} id={`pc-dwl-${pick}`} wash={WASH.red} ink={MARKER.red} gap={5} />);
    }
  }

  drawing.push(<InkLine x1={frame.x(0)} y1={frame.y(A)} x2={frame.x(A / 2)} y2={frame.y(0)} id={`pc-d-${pick}`} color={MARKER.blue} width={2.6} draw={drawNow(0)} />);
  const mcTopX = Math.min(A / 2, A / (2 * c));
  drawing.push(<InkLine x1={frame.x(0)} y1={frame.y(0)} x2={frame.x(mcTopX)} y2={frame.y(mcAt(mcTopX))} id={`pc-s-${pick}`} color={MARKER.green} width={2.6} draw={drawNow(0)} />);
  drawing.push(<Note x={frame.x(A * 0.05) + 6} y={frame.y(demandAt(A * 0.05)) - 6} text="D = MU" color={MARKER.blue} size={17} />);
  drawing.push(<Note x={frame.x(mcTopX) - 4} y={frame.y(mcAt(mcTopX)) + 18} text="S = MC" color={MARKER.green} size={17} anchor="end" />);
  drawing.push(<Dot x={frame.x(xStar)} y={frame.y(pStar)} color={MARKER.purple} radius={5} />);
  if (!narrow) drawing.push(<Note x={frame.x(xStar) + 8} y={frame.y(pStar) - 8} text={`(${fmt(xStar, 1)}, ${fmt(pStar, 1)})`} color={MARKER.purple} size={15} />);

  if (binding) {
    drawing.push(<InkDashed x1={frame.left} y1={frame.y(price)} x2={frame.right} y2={frame.y(price)} id={`pc-price-${pick}-${step}`} color={MARKER.amber} width={1.8} draw={drawNow(step)} />);
    drawing.push(<Note x={frame.right - 4} y={frame.y(price) - 7} text={price < pStar ? "maximal price" : "minimal price"} color={MARKER.amber} size={16} anchor="end" />);
    drawing.push(<InkDashed x1={frame.x(qty)} y1={frame.bottom} x2={frame.x(qty)} y2={frame.y(Math.max(price, demandAt(qty)))} id={`pc-q-${pick}-${step}`} color={INK_SOFT} width={1.2} />);
    drawing.push(<Dot x={frame.x(qty)} y={frame.y(price)} color={MARKER.amber} radius={5} />);
  }

  const side = !binding ? "" : price < pStar ? `\\text{supply short: } 2\\cdot${fmt(c, 0)}x = ${fmt(price, 1)}` : `\\text{demand short: } ${A} - 2x = ${fmt(price, 1)}`;
  const tally = `x = ${fmt(qty, 2)},\\ CS = ${fmt(cs, 1)},\\ FS = ${fmt(fs, 1)},\\ W = ${fmt(welfare, 1)}`;
  const TEX = [
    `${A} - 2x = ${fmt(2 * c, 0)}x \\Rightarrow x^* = ${fmt(xStar, 2)},\\ p^* = ${fmt(pStar, 2)}`,
    `CS = ${fmt(A * xStar - xStar * xStar - pStar * xStar, 1)},\\ FS = ${fmt(pStar * xStar - c * xStar * xStar, 1)},\\ W^* = ${fmt(wStar, 1)}`,
    `${side};\\ ${tally},\\ DWL = ${fmt(dwl, 1)}`,
    `${side};\\ ${tally},\\ DWL = ${fmt(dwl, 1)}`,
    binding ? `${side};\\ ${tally}` : `\\text{not binding: } ${tally}`,
  ];

  const choose = (key: string) => {
    const next = CASES.find((k) => k.key === key) ?? CASES[0];
    setPick(next.key);
    setPriceTarget(Math.round(next.ceiling));
  };

  return (
    <SketchGraph
      sketch={sketch}
      note={NOTES[step]}
      tex={TEX[step]}
      footnote={`${chosen.source}: utility ${A}x − x² + y, cost C(x) = ${c === 1 ? "" : c}x². The ceiling that maximises CS is ${fmt(csPeak, 2)}; the floor that maximises FS is ${fmt(fsPeak, 2)}.`}
      ariaLabel={`Price control in the market from ${chosen.source}. Equilibrium x = ${fmt(xStar, 1)}, p = ${fmt(pStar, 1)}. At a regulated price of ${fmt(price, 1)} the quantity traded is ${fmt(qty, 1)}, consumer surplus ${fmt(cs, 1)} and firm surplus ${fmt(fs, 1)}.`}
      top={<Toggle label="Past-paper market" active={pick} onPick={choose} options={CASES.map((k) => ({ key: k.key, label: k.label }))} />}
      explore={<div class="graph-sliders">
        <Slider label="regulated price" value={priceTarget} min={0} max={A} step={1} onInput={setPriceTarget} />
      </div>}
    >
      {drawing}
    </SketchGraph>
  );
}
