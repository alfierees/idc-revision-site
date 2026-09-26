import { useState } from "preact/hooks";
import type { VNode } from "preact";
import {
  useSketch, useGlide, SketchGraph, SketchAxes, InkCurve, InkLine, InkDashed, Hatch, Note, Dot, Toggle, Presets,
  curvePoints, fmt, INK, INK_SOFT, ACCENT, MARKER, WASH, Slider,
} from "./sketch";

// Ex 9 Q4: perfect competition, firm and market side by side.
// Firm: C(x) = F + (s/2)x², so MC = s·x and AC = F/x + (s/2)x (F = 12.5, s = 1).
// Market: demand P = K/X (K = 1000, unit-elastic); supply from n firms each at
// P = MC, so X = n·P/s. Short run: n fixed. Long run: entry and exit until
// P = min AC (= 5 at x = 5 with the question's costs, so n = 200/5 = 40).
//   type: competitive-market
//   scenario: short-run | demand-fall | tech | long-run

interface Props { scenario?: string; }

const BASE = { demand: 1000, firms: 10, fixedCost: 12.5, costSlope: 1 };
const DEMAND_FALL = 400;                          // illustrative size of the demand fall
const TECH = { fixedCost: 8, costSlope: 0.7 };    // illustrative lower cost curves

export default function CompetitiveMarket({ scenario = "short-run" }: Props): VNode {
  const [longRunShock, setLongRunShock] = useState<"demand" | "tech">("demand");
  const shock = scenario === "demand-fall" ? "demand" : scenario === "tech" ? "tech" : scenario === "long-run" ? longRunShock : "none";
  const isLongRun = scenario === "long-run";
  const hasShockStep = shock !== "none";
  const [explore, setExplore] = useState({ demand: BASE.demand, firms: BASE.firms });

  const NOTES = [
    "Each firm: marginal cost MC = x rises; average cost AC is U-shaped.",
    "The market: demand P = 1000/X, and supply from 10 firms, each producing where P = MC.",
    "They cross at P = 10. Each firm produces 10 and makes a profit of 37.5.",
    ...(hasShockStep ? [
      isLongRun
        ? shock === "demand"
          ? "Long run after a demand fall: firms exit until price is back at min AC = 5. Price unchanged, fewer firms."
          : "Long run after a cost cut: entry drives price down to the new, lower min AC. Price falls for good."
        : shock === "demand"
          ? "Demand falls. With 10 firms locked in, price falls; each firm slides down its MC, producing less at a loss."
          : "Technology lowers MC and AC. Supply shifts right: price falls, output rises, profit per firm rises.",
    ] : []),
    "Your turn. Change demand and the number of firms.",
  ];
  const shockStep = 3, exploreStep = NOTES.length - 1;

  const sketch = useSketch({
    stepCount: NOTES.length,
    domains: [{ xMax: 16, yMax: 16 }, { xMax: 260, yMax: 25 }],
    aspect: 0.82, minHeight: 250, maxHeight: 330, maxWidth: 760,
    padding: { left: 40, bottom: 40, top: 16 },
    panelTitles: ["Each firm", "The market"],
  });
  const { show, drawNow, step } = sketch;
  const [firmFrame, marketFrame] = sketch.frames;

  const afterShock = step >= shockStep && hasShockStep;
  const onExplore = step === exploreStep;
  const costs = (shock === "tech" && afterShock) ? TECH : BASE;
  const target = onExplore
    ? { demand: explore.demand, firms: explore.firms, fixedCost: costs.fixedCost, costSlope: costs.costSlope }
    : { demand: shock === "demand" && afterShock ? DEMAND_FALL : BASE.demand, firms: BASE.firms, fixedCost: costs.fixedCost, costSlope: costs.costSlope };
  const shown = useGlide(target, false);

  const averageCost = (output: number, fixedCost = shown.fixedCost, slope = shown.costSlope) => fixedCost / output + (slope / 2) * output;
  const minAverageOutput = Math.sqrt((2 * shown.fixedCost) / shown.costSlope);
  const minAverage = averageCost(minAverageOutput);
  // long run: n adjusts so that price = min AC
  const longRunFirms = shown.demand / minAverage / minAverageOutput;
  const firmsShown = isLongRun && afterShock && !onExplore ? longRunFirms : shown.firms;
  const marketOutput = Math.sqrt((shown.demand * firmsShown) / shown.costSlope);
  const price = shown.demand / marketOutput;
  const firmOutput = price / shown.costSlope;
  const profit = price * firmOutput - shown.fixedCost - (shown.costSlope / 2) * firmOutput * firmOutput;

  const TEX = [
    `MC = ${fmt(shown.costSlope, 2)}x,\\quad AC = \\tfrac{${fmt(shown.fixedCost)}}{x} + ${fmt(shown.costSlope / 2, 2)}x`,
    `P = \\tfrac{${fmt(shown.demand, 0)}}{X},\\quad X = ${fmt(firmsShown, 1)}\\cdot \\tfrac{P}{${fmt(shown.costSlope, 2)}}`,
    `P = ${fmt(price, 2)},\\; x = ${fmt(firmOutput, 2)},\\; X = ${fmt(marketOutput, 1)},\\; \\pi = ${fmt(profit, 2)}`,
    ...(hasShockStep ? [isLongRun
      ? `P = \\min AC = ${fmt(minAverage, 2)},\\; x = ${fmt(minAverageOutput, 2)},\\; n = \\tfrac{X}{x} = ${fmt(longRunFirms, 1)}`
      : `P = ${fmt(price, 2)},\\; x = ${fmt(firmOutput, 2)},\\; \\pi = ${fmt(profit, 2)}`] : []),
    `n = ${fmt(firmsShown, 0)}:\\; P = ${fmt(price, 2)},\\; \\pi = ${fmt(profit, 2)}\\; (\\min AC = ${fmt(minAverage, 2)})`,
  ];

  // ---- firm panel ----
  const firmParts: VNode[] = [<SketchAxes frame={firmFrame} id="firm-axes" xTicks={[0, 4, 8, 12, 16]} yTicks={[4, 8, 12, 16]} xLabel="x" yLabel="$" />];
  const firmPlot: VNode[] = [];
  const firmX = firmFrame.x, firmY = firmFrame.y;
  if (show(2)) {
    const low = Math.min(price, averageCost(firmOutput)), high = Math.max(price, averageCost(firmOutput));
    const isProfit = price >= averageCost(firmOutput);
    firmPlot.push(<Hatch points={[[firmX(0), firmY(high)], [firmX(firmOutput), firmY(high)], [firmX(firmOutput), firmY(low)], [firmX(0), firmY(low)]]} id={`${sketch.uid}-profit-${isProfit}`} wash={isProfit ? WASH.green : WASH.red} ink={isProfit ? MARKER.green : MARKER.red} angle={isProfit ? -1 : 1} draw={drawNow(2)} />);
  }
  if (afterShock && shock === "tech") {
    firmPlot.push(<InkCurve points={curvePoints(firmFrame, (output) => averageCost(output, BASE.fixedCost, BASE.costSlope), 0.8, 16, 50)} id="ac-old" color={MARKER.blue} width={1.3} dashed />);
    firmPlot.push(<InkDashed x1={firmX(0)} y1={firmY(0)} x2={firmX(16)} y2={firmY(16)} id="mc-old" color={MARKER.green} width={1.3} />);
  }
  firmPlot.push(<InkLine x1={firmX(0)} y1={firmY(0)} x2={firmX(16)} y2={firmY(16 * shown.costSlope)} id="mc" color={MARKER.green} width={2.3} draw={drawNow(0)} />);
  firmPlot.push(<InkCurve points={curvePoints(firmFrame, (output) => averageCost(output), 0.8, 16, 60)} id="ac" color={MARKER.blue} width={2.3} draw={drawNow(0)} />);
  if (show(2)) {
    firmPlot.push(<InkDashed x1={firmFrame.left} y1={firmY(price)} x2={firmFrame.right} y2={firmY(price)} id="firm-price" color={INK} width={1.6} draw={drawNow(2)} />);
    firmPlot.push(<InkDashed x1={firmX(firmOutput)} y1={firmY(price)} x2={firmX(firmOutput)} y2={firmFrame.bottom} id="firm-x" color={MARKER.green} width={1.2} dash={4} gap={4} draw={drawNow(2)} />);
  }
  firmParts.push(<g clip-path={sketch.clip(0)}>{firmPlot}</g>);
  firmParts.push(<Note x={firmX(13.5)} y={firmY(13.5 * shown.costSlope) - 8} text="MC" color={MARKER.green} anchor="end" size={18} draw={drawNow(0)} />);
  firmParts.push(<Note x={firmX(15.5)} y={firmY(averageCost(15.5)) + 20} text="AC" color={MARKER.blue} anchor="end" size={18} draw={drawNow(0)} />);
  if (show(2)) {
    firmParts.push(<Dot x={firmX(firmOutput)} y={firmY(price)} color={INK} radius={4} />);
    firmParts.push(<Note x={firmFrame.left + 6} y={firmY(price) - 7} text={`P = ${fmt(price, 1)}`} color={INK} size={17} />);
    if (isLongRun && afterShock) firmParts.push(<Note x={firmX(minAverageOutput) + 8} y={firmY(minAverage) + 20} text="min AC" color={MARKER.red} size={17} draw={drawNow(shockStep)} />);
  }

  // ---- market panel ----
  const marketParts: VNode[] = [<SketchAxes frame={marketFrame} id="market-axes" xTicks={[0, 50, 100, 150, 200, 250]} yTicks={[5, 10, 15, 20, 25]} xLabel="X" yLabel="P" />];
  const marketPlot: VNode[] = [];
  const marketX = marketFrame.x, marketY = marketFrame.y;
  if (afterShock && shock === "demand" && !onExplore) marketPlot.push(<InkCurve points={curvePoints(marketFrame, (output) => BASE.demand / output, 30, 260, 50)} id="demand-old" color={MARKER.blue} width={1.3} dashed />);
  if (afterShock && shock === "tech" && !isLongRun) marketPlot.push(<InkDashed x1={marketX(0)} y1={marketY(0)} x2={marketX(260)} y2={marketY((BASE.costSlope * 260) / BASE.firms)} id="supply-old" color={MARKER.amber} width={1.3} />);
  if (show(1)) {
    marketPlot.push(<InkCurve points={curvePoints(marketFrame, (output) => shown.demand / output, 20, 260, 60)} id="demand" color={MARKER.blue} width={2.3} draw={drawNow(1)} />);
    marketPlot.push(<InkLine x1={marketX(0)} y1={marketY(0)} x2={marketX(260)} y2={marketY((shown.costSlope * 260) / firmsShown)} id="supply" color={MARKER.amber} width={2.3} delay={300} draw={drawNow(1)} />);
  }
  if (isLongRun && afterShock) marketPlot.push(<InkDashed x1={marketFrame.left} y1={marketY(minAverage)} x2={marketFrame.right} y2={marketY(minAverage)} id="lr-supply" color={MARKER.red} width={1.8} draw={drawNow(shockStep)} />);
  if (show(2)) marketPlot.push(<InkDashed x1={marketX(marketOutput)} y1={marketY(price)} x2={marketX(marketOutput)} y2={marketFrame.bottom} id="market-x" color={INK} width={1.2} dash={4} gap={4} draw={drawNow(2)} />);
  marketParts.push(<g clip-path={sketch.clip(1)}>{marketPlot}</g>);
  if (show(1)) {
    marketParts.push(<Note x={marketX(250)} y={marketY(shown.demand / 250) - 8} text="D" color={MARKER.blue} anchor="end" size={18} draw={drawNow(1)} />);
    marketParts.push(<Note x={marketX(Math.min(250, (22 * firmsShown) / shown.costSlope))} y={marketY(Math.min(22, (250 * shown.costSlope) / firmsShown)) + 18} text={`S (n = ${fmt(firmsShown, 0)})`} color={MARKER.amber} anchor="end" size={17} draw={drawNow(1)} />);
  }
  if (show(2)) {
    marketParts.push(<Dot x={marketX(marketOutput)} y={marketY(price)} color={ACCENT} />);
    marketParts.push(<Note x={marketX(marketOutput) + 10} y={marketY(price) - 10} text={`P = ${fmt(price, 1)}`} color={ACCENT} size={17} />);
  }
  if (isLongRun && afterShock) marketParts.push(<Note x={marketFrame.left + 6} y={marketY(minAverage) + 20} text="long-run supply" color={MARKER.red} size={17} draw={drawNow(shockStep)} />);

  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]}
      ariaLabel={`Competitive firm and market. Price ${fmt(price, 1)}, each firm produces ${fmt(firmOutput, 1)}, profit ${fmt(profit, 1)}.`}
      footnote={shock !== "none" ? "The size of the shock is illustrative; the question asks only for directions." : undefined}
      top={isLongRun ? <Toggle label="Shock" options={[{ key: "demand", label: "After a demand fall" }, { key: "tech", label: "After a cost cut" }]} active={longRunShock} onPick={(key) => setLongRunShock(key as "demand" | "tech")} /> : undefined}
      explore={<>
        <div class="graph-sliders">
          <Slider label="demand level K" value={explore.demand} min={300} max={1400} step={50} onInput={(value) => setExplore((current) => ({ ...current, demand: value }))} />
          <Slider label="number of firms n" value={explore.firms} min={2} max={60} step={1} onInput={(value) => setExplore((current) => ({ ...current, firms: value }))} />
        </div>
        <Presets presets={[
          { label: "Question (a): n = 10", apply: () => setExplore({ demand: BASE.demand, firms: 10 }) },
          { label: "Long run: n = 40", apply: () => setExplore({ demand: BASE.demand, firms: 40 }) },
        ]} />
        <p class="sk-footnote" style={`color:${INK_SOFT}`}>Profit per firm right now: {fmt(profit, 2)} ({profit > 0.05 ? "firms would enter" : profit < -0.05 ? "firms would exit" : "long-run equilibrium"}).</p>
      </>}>
      <g>{firmParts}</g>
      <g>{marketParts}</g>
    </SketchGraph>
  );
}
