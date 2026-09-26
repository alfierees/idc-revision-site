import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { Slider } from "./plot";
import {
  useSketch, useGlide, SketchGraph, SketchAxes, InkLine, InkDashed, Note, Dot, Ring, Presets,
  niceTicks, fmt, INK, ACCENT, MARKER,
} from "./sketch";

// Differentiated Bertrand in (p₁, p₂) space. Demand q_i = α − βp_i + γp_j with
// zero cost, so BR_i: p_i = (α + γp_j)/(2β). Best responses slope UP (prices are
// strategic complements) and cross at the symmetric Nash price α/(2β − γ).
// Steps: BR₁ → BR₂ → Nash → explore (α, γ sliders, presets).

interface Props { alpha?: number; gamma?: number; beta?: number; }

const NOTES = [
  "Firm 1's best response: if firm 2 raises its price, firm 1 can raise its own too.",
  "Firm 2's best response slopes up as well. Prices are strategic complements.",
  "The Nash equilibrium is where both firms are best-responding.",
  "Your turn. Make the goods closer substitutes (raise γ) and watch prices fall.",
];

export default function BertrandDiffReaction({ alpha: initialAlpha = 168, gamma: initialGamma = 1, beta = 2 }: Props): VNode {
  const [target, setTarget] = useState({ alpha: initialAlpha, gamma: initialGamma });
  const shown = useGlide(target, false);
  const gamma = Math.min(shown.gamma, 2 * beta - 0.2);
  const nashPrice = shown.alpha / (2 * beta - gamma);
  const axisMax = Math.ceil(Math.max((target.alpha / (2 * beta - Math.min(target.gamma, 2 * beta - 0.2))) * 1.7, target.alpha / (2 * beta)) / 10) * 10;
  const sketch = useSketch({
    stepCount: NOTES.length,
    domains: [{ xMax: axisMax, yMax: axisMax }],
    aspect: 0.82,
    maxHeight: 440,
    maxWidth: 560,
    padding: { left: 40, bottom: 40, top: 20 },
  });
  const { show, drawNow, step } = sketch;
  const frame = sketch.frames[0];
  const toX = frame.x, toY = frame.y;

  const firmOneLine = (price1: number) => (2 * beta * price1 - shown.alpha) / Math.max(gamma, 0.01); // p₂ as a function of p₁ on BR₁
  const firmTwoLine = (price1: number) => (shown.alpha + gamma * price1) / (2 * beta);
  const quantityEach = shown.alpha - beta * nashPrice + gamma * nashPrice;
  const profitEach = nashPrice * quantityEach;
  const brOneStart = shown.alpha / (2 * beta);
  const brOneEnd = gamma > 0.01 ? Math.min(axisMax, (shown.alpha + gamma * axisMax) / (2 * beta)) : brOneStart;

  const TEX = [
    `BR_1:\\; p_1 = \\frac{${fmt(shown.alpha)} + ${fmt(gamma, 2)}\\,p_2}{${fmt(2 * beta)}}`,
    `BR_2:\\; p_2 = \\frac{${fmt(shown.alpha)} + ${fmt(gamma, 2)}\\,p_1}{${fmt(2 * beta)}}`,
    `p^* = \\frac{\\alpha}{2\\beta - \\gamma} = \\frac{${fmt(shown.alpha)}}{${fmt(2 * beta - gamma, 2)}} = ${fmt(nashPrice)},\\quad q^* = ${fmt(quantityEach)},\\quad \\pi^* = ${fmt(profitEach, 0)}`,
    `p^* = ${fmt(nashPrice)},\\quad \\pi^* = ${fmt(profitEach, 0)}`,
  ];

  const ticks = niceTicks(0, axisMax, sketch.narrow ? 4 : 5);
  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={ticks} yTicks={ticks} xLabel="p₁" yLabel="p₂" />];
  const plot: VNode[] = [];
  plot.push(<InkLine x1={toX(brOneStart)} y1={toY(0)} x2={toX(brOneEnd)} y2={toY(gamma > 0.01 ? Math.min(axisMax, firmOneLine(brOneEnd)) : axisMax)} id="br1" color={MARKER.blue} width={2.4} duration={800} draw={drawNow(0)} />);
  if (show(1)) plot.push(<InkLine x1={toX(0)} y1={toY(firmTwoLine(0))} x2={toX(axisMax)} y2={toY(firmTwoLine(axisMax))} id="br2" color={MARKER.green} width={2.4} duration={800} draw={drawNow(1)} />);
  if (show(2)) {
    plot.push(<InkDashed x1={toX(nashPrice)} y1={toY(nashPrice)} x2={toX(nashPrice)} y2={frame.bottom} id="nash-x" color={INK} width={1.2} dash={4} gap={4} draw={drawNow(2)} />);
    plot.push(<InkDashed x1={toX(nashPrice)} y1={toY(nashPrice)} x2={frame.left} y2={toY(nashPrice)} id="nash-y" color={INK} width={1.2} dash={4} gap={4} draw={drawNow(2)} />);
  }
  drawing.push(<g clip-path={sketch.clip()}>{plot}</g>);
  const brOneLabelY = gamma > 0.01 ? Math.min(axisMax * 0.92, firmOneLine(brOneEnd)) : axisMax * 0.92;
  drawing.push(<Note x={toX(gamma > 0.01 ? (shown.alpha + gamma * brOneLabelY) / (2 * beta) : brOneStart) + 10} y={toY(brOneLabelY) + 6} text="BR₁" color={MARKER.blue} size={20} draw={drawNow(0)} />);
  if (show(1)) drawing.push(<Note x={toX(axisMax * 0.88)} y={toY(firmTwoLine(axisMax * 0.88)) - 12} text="BR₂" color={MARKER.green} anchor="middle" size={20} draw={drawNow(1)} />);
  if (show(2)) {
    drawing.push(<Ring x={toX(nashPrice)} y={toY(nashPrice)} id="ring-nash" color={ACCENT} draw={drawNow(2)} />);
    drawing.push(<Dot x={toX(nashPrice)} y={toY(nashPrice)} color={INK} draw={drawNow(2)} />);
    drawing.push(<Note x={toX(nashPrice) + 16} y={toY(nashPrice) + 22} text={`Nash p* = ${fmt(nashPrice)}`} color={INK} size={18} delay={300} draw={drawNow(2)} />);
  }

  const update = (changes: Partial<typeof target>) => setTarget((current) => ({ ...current, ...changes }));

  return (
    <SketchGraph
      sketch={sketch}
      note={NOTES[step]}
      tex={TEX[step]}
      ariaLabel={`Differentiated Bertrand best responses. Nash price ${fmt(nashPrice)} each.`}
      explore={<>
        <div class="graph-sliders">
          <Slider label="market size α" value={target.alpha} min={100} max={240} step={10} onInput={(value) => update({ alpha: value })} />
          <Slider label="substitutability γ" value={target.gamma} min={0} max={3.5} step={0.25} onInput={(value) => update({ gamma: value })} />
        </div>
        <Presets presets={[
          { label: "Unrelated goods (γ = 0)", apply: () => update({ gamma: 0 }) },
          { label: "Near-perfect substitutes", apply: () => update({ gamma: 3.5 }) },
          { label: "Reset", apply: () => setTarget({ alpha: initialAlpha, gamma: initialGamma }) },
        ]} />
      </>}
    >
      {drawing}
    </SketchGraph>
  );
}
