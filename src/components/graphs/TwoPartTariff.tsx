import { useState } from "preact/hooks";
import type { VNode } from "preact";
import {
  useSketch, SketchGraph, SketchAxes, InkLine, InkDashed, Hatch, Note, Dot, Toggle,
  INK, INK_SOFT, MARKER, WASH,
} from "./sketch";

// Ex 5 Q3 two-part tariffs: a big/high consumer (AR₁: p = 20 − 0.5q) and a
// small/low consumer (AR₂: p = 20 − q), MC = 6. Parts (a)–(e) each build up in
// four steps (demand → price → fee → profit) with the solution's exact numbers.
// `part` fixes the graph to one sub-question; omit it for the all-parts toggle.

const QUANTITY_MAX = 40, PRICE_MAX = 21, MARGINAL_COST = 6;
const DEMANDS = [
  { intercept: 20, slope: 0.5, mrSlope: 1, name: "Consumer 1 (big type)" },
  { intercept: 20, slope: 1, mrSlope: 2, name: "Consumer 2 (small type)" },
];
const quantityAt = (consumer: number, price: number) => (DEMANDS[consumer].intercept - price) / DEMANDS[consumer].slope;

type FeeMode = "whole" | "split" | "menu";
interface Part { prices: [number, number]; feeModes: [FeeMode, FeeMode]; outlineRecovery?: boolean; notes: string[]; tex: string[]; }

const SETUP_NOTE = "Two consumer types, one firm with MC = 6.";
const SETUP_TEX = "AR_1: p = 20 - 0.5q_1,\\quad AR_2: p = 20 - q_2,\\quad MC = 6";
const SHARED_B_PRICE = "One contract for both, so the price rises above MC to 9.5.";
const SHARED_B_PRICE_TEX = "p = 9.5 \\;\\Rightarrow\\; q_1 = 21,\\; q_2 = 10.5";
const SHARED_B_FEE = "The fee can't exceed small C2's surplus, so big C1 keeps a rent.";
const SHARED_B_FEE_TEX = "A = \\tfrac12(10.5)(10.5) = 55.125,\\quad \\text{rent}_1 = 110.25 - 55.125 = 55.125";

const PARTS: Record<string, Part> = {
  a: {
    prices: [6, 6], feeModes: ["whole", "whole"],
    notes: [SETUP_NOTE, "(a) Separate contracts: charge each consumer p = MC = 6.", "The fee takes each consumer's whole surplus.", "Profit = 196 + 98 = 294, with no deadweight loss."],
    tex: [SETUP_TEX, "p = MC = 6 \\;\\Rightarrow\\; q_1 = 28,\\; q_2 = 14", "A_1 = \\tfrac12(14)(28) = 196,\\quad A_2 = \\tfrac12(14)(14) = 98", "\\pi = 196 + 98 = 294"],
  },
  b: {
    prices: [9.5, 9.5], feeModes: ["split", "whole"],
    notes: [SETUP_NOTE, `(b) ${SHARED_B_PRICE}`, SHARED_B_FEE, "Pricing above MC earns a margin on every unit but costs a deadweight loss."],
    tex: [SETUP_TEX, SHARED_B_PRICE_TEX, SHARED_B_FEE_TEX, "\\pi = 2(55.125) + 3.5(21 + 10.5) = 220.5"],
  },
  c: {
    prices: [9.5, 9.5], feeModes: ["split", "whole"],
    notes: [SETUP_NOTE, `(c) 100 of each type. ${SHARED_B_PRICE}`, SHARED_B_FEE, "The 1:1 mix is unchanged, so the contract is too. Profit just scales by 100."],
    tex: [SETUP_TEX, SHARED_B_PRICE_TEX, SHARED_B_FEE_TEX, "\\pi = 100 \\times 220.5 = 22{,}050 \\;>\\; 100 \\times 196 = 19{,}600"],
  },
  d: {
    prices: [9.5, 9.5], feeModes: ["split", "whole"], outlineRecovery: true,
    notes: [SETUP_NOTE, `(d) ${SHARED_B_PRICE}`, SHARED_B_FEE, "The most the firm would pay to discriminate: C1's rent plus the deadweight loss."],
    tex: [SETUP_TEX, SHARED_B_PRICE_TEX, SHARED_B_FEE_TEX, "294 - 220.5 = 73.5 = \\underbrace{55.125}_{\\text{rent}} + \\underbrace{18.375}_{\\text{DWL}}"],
  },
  e: {
    prices: [6, 13], feeModes: ["menu", "whole"],
    notes: [SETUP_NOTE, "(e) Hidden types, so offer a menu: the big type gets p = 6, the small type p = 13.", "The big type pays 171.5 and keeps an information rent of 24.5.", "The small type is distorted down to q = 7. No distortion at the top."],
    tex: [SETUP_TEX, "p_1 = 6,\\ q_1 = 28;\\quad p_2 = 13,\\ q_2 = 7", "A_1 = 171.5,\\ \\text{rent}_1 = 24.5;\\quad A_2 = \\tfrac12(7)(7) = 24.5", "\\pi = 171.5 + 24.5 + (13 - 6)(7) = 245"],
  },
};

const formatPrice = (price: number) => (price % 1 === 0 ? String(price) : String(price));

export default function TwoPartTariff({ part }: { part?: string }): VNode {
  const isFixed = typeof part === "string" && part in PARTS;
  const [activePart, setActivePart] = useState(isFixed ? (part as string) : "a");
  const [showMarginalRevenue, setShowMarginalRevenue] = useState(false);
  const config = PARTS[activePart];
  const sketch = useSketch({
    stepCount: 4,
    domains: [{ xMax: QUANTITY_MAX, yMax: PRICE_MAX }, { xMax: QUANTITY_MAX, yMax: PRICE_MAX }],
    aspect: 0.75,
    minHeight: 240,
    maxHeight: 320,
    padding: { left: 34, bottom: 38, top: 16 },
    panelTitles: DEMANDS.map((demand) => demand.name),
    maxWidth: 720,
  });
  const { show, drawNow } = sketch;

  const panel = (consumer: number): VNode => {
    const frame = sketch.frames[consumer];
    const toX = frame.x, toY = frame.y;
    const demand = DEMANDS[consumer];
    const price = config.prices[consumer];
    const quantity = quantityAt(consumer, price);
    const efficientQuantity = quantityAt(consumer, MARGINAL_COST);
    const feeMode = config.feeModes[consumer];
    const id = `${sketch.uid}-${activePart}-${consumer}`;
    const parts: VNode[] = [
      <SketchAxes frame={frame} id={`axes-${consumer}`} xTicks={[0, 10, 20, 30, 40]} yTicks={[6, 10, 15, 20]} xLabel="q" yLabel="p" />,
    ];
    const plot: VNode[] = [];

    if (show(2)) {
      if (feeMode === "split") {
        const smallQuantity = quantityAt(1, price);
        plot.push(<Hatch points={[[toX(0), toY(20)], [toX(0), toY(price)], [toX(smallQuantity), toY(price)]]} id={`${id}-fee`} wash={WASH.blue} ink={MARKER.blue} draw={drawNow(2)} />);
        plot.push(<Hatch points={[[toX(0), toY(20)], [toX(smallQuantity), toY(price)], [toX(quantity), toY(price)]]} id={`${id}-rent`} wash={WASH.amber} ink={MARKER.amber} angle={-1} delay={300} draw={drawNow(2)} />);
        plot.push(<InkDashed x1={toX(0)} y1={toY(20)} x2={toX(20)} y2={toY(0)} id={`${id}-ar2-ghost`} color={MARKER.blue} width={1.3} dash={6} gap={5} draw={drawNow(2)} />);
      } else {
        plot.push(<Hatch points={[[toX(0), toY(20)], [toX(0), toY(price)], [toX(quantity), toY(price)]]} id={`${id}-fee`} wash={WASH.blue} ink={MARKER.blue} draw={drawNow(2)} />);
      }
    }
    if (show(3) && price > MARGINAL_COST) {
      plot.push(<Hatch points={[[toX(0), toY(price)], [toX(quantity), toY(price)], [toX(quantity), toY(MARGINAL_COST)], [toX(0), toY(MARGINAL_COST)]]} id={`${id}-margin`} wash={WASH.green} ink={MARKER.green} angle={-1} draw={drawNow(3)} />);
      plot.push(<Hatch points={[[toX(quantity), toY(price)], [toX(quantity), toY(MARGINAL_COST)], [toX(efficientQuantity), toY(MARGINAL_COST)]]} id={`${id}-dwl`} wash={WASH.red} ink={MARKER.red} gap={5} delay={300} draw={drawNow(3)} />);
    }
    if (showMarginalRevenue) {
      plot.push(<InkDashed x1={toX(0)} y1={toY(20)} x2={toX(20 / demand.mrSlope)} y2={toY(0)} id={`${id}-mr`} color={MARKER.purple} width={1.8} />);
    }
    plot.push(<InkDashed x1={toX(0)} y1={toY(MARGINAL_COST)} x2={frame.right} y2={toY(MARGINAL_COST)} id={`mc-${consumer}`} color={MARKER.grey} draw={drawNow(0)} />);
    if (show(1)) {
      plot.push(<InkLine x1={toX(0)} y1={toY(price)} x2={frame.right} y2={toY(price)} id={`${id}-price`} color={INK_SOFT} width={1.6} draw={drawNow(1)} />);
      plot.push(<InkDashed x1={toX(quantity)} y1={toY(price)} x2={toX(quantity)} y2={frame.bottom} id={`${id}-q`} color={MARKER.green} width={1.3} dash={4} gap={4} delay={400} draw={drawNow(1)} />);
    }
    plot.push(<InkLine x1={toX(0)} y1={toY(20)} x2={toX(20 / demand.slope)} y2={toY(0)} id={`ar-${consumer}`} color={INK} width={2.4} duration={800} draw={drawNow(0)} />);
    parts.push(<g clip-path={sketch.clip(consumer)}>{plot}</g>);

    const labelQuantity = (20 / demand.slope) * 0.86;
    parts.push(<Note x={toX(labelQuantity) + 8} y={toY(20 - demand.slope * labelQuantity) + 4} text={`AR${consumer + 1}`} color={INK} size={19} draw={drawNow(0)} />);
    parts.push(<Note x={frame.right - 2} y={toY(MARGINAL_COST) - 7} text="MC = 6" color={MARKER.grey} anchor="end" size={17} draw={drawNow(0)} />);
    if (show(1)) {
      if (price !== MARGINAL_COST) parts.push(<Note x={frame.right - 2} y={toY(price) - 7} text={`p = ${formatPrice(price)}`} color={INK_SOFT} anchor="end" size={18} draw={drawNow(1)} />);
      parts.push(<Dot x={toX(quantity)} y={toY(price)} color={INK} radius={4} draw={drawNow(1)} />);
      parts.push(<Note x={toX(quantity)} y={frame.bottom + 31} text={`q = ${Math.round(quantity * 100) / 100}`} color={MARKER.green} anchor="middle" size={17} delay={400} draw={drawNow(1)} />);
    }
    if (show(2)) {
      const feeLabelY = toY((20 + price) / 2) + 5;
      if (feeMode === "split") {
        parts.push(<Note x={toX(2)} y={feeLabelY + 4} text="fee" color={MARKER.blue} size={18} draw={drawNow(2)} />);
        parts.push(<Note x={toX(quantityAt(1, price) * 0.75 + 2)} y={toY(price) - 6} text="rent" color={MARKER.amber} size={18} delay={300} draw={drawNow(2)} />);
      } else if (feeMode === "menu") {
        parts.push(<Note x={toX(2.5)} y={feeLabelY} text="fee 171.5 + rent 24.5" color={MARKER.blue} size={17} draw={drawNow(2)} />);
      } else {
        parts.push(<Note x={toX(2)} y={feeLabelY} text="fee" color={MARKER.blue} size={18} draw={drawNow(2)} />);
      }
    }
    if (show(3) && price > MARGINAL_COST) {
      parts.push(<Note x={toX(quantity * 0.45)} y={(toY(price) + toY(MARGINAL_COST)) / 2 + 6} text="margin" color={MARKER.green} anchor="middle" size={17} draw={drawNow(3)} />);
    }
    if (show(3) && config.outlineRecovery && consumer === 0) {
      const smallQuantity = quantityAt(1, price);
      const corners: [number, number][] = [[toX(0), toY(20)], [toX(smallQuantity), toY(price)], [toX(quantity), toY(price)]];
      corners.forEach((corner, index) => {
        const next = corners[(index + 1) % corners.length];
        parts.push(<InkDashed x1={corner[0]} y1={corner[1]} x2={next[0]} y2={next[1]} id={`${id}-recover-${index}`} color={MARKER.red} width={2} dash={5} gap={4} delay={400} draw={drawNow(3)} />);
      });
    }
    return <g>{parts}</g>;
  };

  return (
    <SketchGraph
      sketch={sketch}
      note={config.notes[sketch.step]}
      tex={config.tex[sketch.step]}
      ariaLabel={`Two-part tariff, part ${activePart}: two consumers with MC = 6. Per-unit prices ${config.prices.join(" and ")}.`}
      top={
        <div class="sk-top-row">
          {!isFixed && (
            <Toggle
              label="Part"
              options={Object.keys(PARTS).map((key) => ({ key, label: `Part ${key}` }))}
              active={activePart}
              onPick={(key) => { setActivePart(key); sketch.setStep(0); }}
            />
          )}
          <Toggle label="Overlay" options={[{ key: "mr", label: showMarginalRevenue ? "Hide MR" : "Show MR" }]} active="" onPick={() => setShowMarginalRevenue(!showMarginalRevenue)} />
        </div>
      }
    >
      {panel(0)}
      {panel(1)}
    </SketchGraph>
  );
}
