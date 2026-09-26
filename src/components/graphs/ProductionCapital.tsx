import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { Slider } from "./plot";
import { useSketch, useGlide, SketchGraph, SketchAxes, InkLine, InkCurve, InkDashed, InkBar, Note, Dot, Ring, curvePoints, fmt, clamp, INK_SOFT, ACCENT, MARKER, WASH } from "./sketch";

// Production and capital (Lectures 4, 5, 9 / PS 5).
//   type: production-capital
//   figure: production | user-cost | tasks
// production — Y = A·K^0.3·N^0.7: output rises in N with a flattening slope;
//              MPN = 0.7·A·K^0.3·N^−0.3 falls; a higher A shifts it up.
// user-cost  — optimal future capital where MPK^f = user cost (r + δ)·p_k.
//              Illustrative: MPK^f = 0.3·A^f·K^−0.7, p_k = 1.
// tasks      — PS 5 Q5: each task goes to labour if ψ_N/ψ_K > w/r.
//              Ratios from the solution's cost table: 5, 2, 0.83, 0.5.

interface Props { figure?: string; }

export default function ProductionCapital({ figure = "production" }: Props): VNode {
  if (figure === "user-cost") return <UserCost />;
  if (figure === "tasks") return <TaskAssignment />;
  return <Production />;
}

function Production(): VNode {
  const [target, setTarget] = useState({ productivity: 1, workers: 1 });
  const NOTES = [
    "Output rises with labour: more workers, more output (positive marginal product).",
    "But each extra worker adds less: the slope (MPN) flattens. Diminishing returns.",
    "Plot that slope: the MPN curve slopes down.",
    "Higher TFP (or more capital) makes every worker more productive: MPN shifts up.",
    "Your turn. Drag the number of workers, or change TFP.",
  ];
  const sketch = useSketch({
    stepCount: NOTES.length,
    domains: [{ xMax: 2, yMax: 3.2 }, { xMax: 2, yMax: 2.5 }],
    aspect: 0.82, minHeight: 240, maxHeight: 320, maxWidth: 760, padding: { left: 40, bottom: 40, top: 16 },
    panelTitles: ["Output Y = A·K^0.3·N^0.7", "Marginal product of labour"],
  });
  const { show, drawNow, step } = sketch;
  const current = useGlide(step === 4 ? target : { productivity: step >= 3 ? 1.3 : 1, workers: 1 }, false);
  const [left, right] = sketch.frames;
  const capital = 2;
  const output = (productivity: number) => (workers: number) => productivity * Math.pow(capital, 0.3) * Math.pow(Math.max(workers, 1e-6), 0.7);
  const marginal = (productivity: number) => (workers: number) => 0.7 * productivity * Math.pow(capital, 0.3) * Math.pow(Math.max(workers, 1e-6), -0.3);
  const tangent = (at: number, id: string, color: string, draw: boolean) => {
    const slope = marginal(current.productivity)(at), run = 0.35;
    return <InkLine x1={left.x(at - run)} y1={left.y(output(current.productivity)(at) - slope * run)} x2={left.x(at + run)} y2={left.y(output(current.productivity)(at) + slope * run)} id={id} color={color} width={1.8} draw={draw} />;
  };
  const TEX = [
    `Y = A K^{0.3} N^{0.7},\\; K = ${capital}`,
    `MPN(0.5) = ${fmt(marginal(1)(0.5), 2)},\\quad MPN(1.5) = ${fmt(marginal(1)(1.5), 2)}`,
    "MPN = \\frac{\\partial Y}{\\partial N} = 0.7\\,A K^{0.3} N^{-0.3}",
    "A: 1 \\to 1.3 \\Rightarrow MPN \\text{ shifts up}",
    `N = ${fmt(current.workers, 2)}:\\; Y = ${fmt(output(current.productivity)(current.workers), 2)},\\; MPN = ${fmt(marginal(current.productivity)(current.workers), 2)}`,
  ];
  const leftParts: VNode[] = [<SketchAxes frame={left} id="left-axes" xTicks={[0, 0.5, 1, 1.5, 2]} yTicks={[1, 2, 3]} xLabel="N" yLabel="Y" />];
  if (step >= 3) leftParts.push(<InkCurve points={curvePoints(left, output(1), 0, 2, 50)} id="y-old" color={MARKER.blue} width={1.3} dashed />);
  leftParts.push(<InkCurve points={curvePoints(left, output(current.productivity), 0, 2, 60)} id="y" color={MARKER.blue} width={2.5} draw={drawNow(0)} />);
  if (show(1) && step < 4) {
    leftParts.push(tangent(0.5, "tangent-low", MARKER.red, drawNow(1)));
    leftParts.push(tangent(1.5, "tangent-high", MARKER.red, drawNow(1)));
    leftParts.push(<Note x={left.x(0.5) - 6} y={left.y(output(current.productivity)(0.5)) - 12} text="steep" color={MARKER.red} anchor="end" size={17} draw={drawNow(1)} />);
    leftParts.push(<Note x={left.x(1.5) + 6} y={left.y(output(current.productivity)(1.5)) + 22} text="flatter" color={MARKER.red} size={17} draw={drawNow(1)} />);
  }
  if (step === 4) leftParts.push(tangent(current.workers, `tangent-live`, ACCENT, false), <Dot x={left.x(current.workers)} y={left.y(output(current.productivity)(current.workers))} color={ACCENT} />);
  const rightParts: VNode[] = [<SketchAxes frame={right} id="right-axes" xTicks={[0, 0.5, 1, 1.5, 2]} yTicks={[0.5, 1, 1.5, 2, 2.5]} xLabel="N" yLabel="MPN" />];
  if (show(2)) {
    if (step >= 3) rightParts.push(<InkCurve points={curvePoints(right, marginal(1), 0.15, 2, 50)} id="mpn-old" color={MARKER.green} width={1.3} dashed />);
    rightParts.push(<g clip-path={sketch.clip(1)}><InkCurve points={curvePoints(right, marginal(current.productivity), 0.15, 2, 60)} id="mpn" color={MARKER.green} width={2.5} draw={drawNow(2)} /></g>);
    rightParts.push(<Note x={right.x(1.9)} y={right.y(marginal(current.productivity)(1.9)) - 10} text={step >= 3 ? "MPN (higher A)" : "MPN"} color={MARKER.green} anchor="end" size={18} />);
    if (step === 4) rightParts.push(<Dot x={right.x(current.workers)} y={right.y(marginal(current.productivity)(current.workers))} color={ACCENT} />);
  }
  if (step === 4) leftParts.push(sketch.handle({ key: "workers", x: current.workers, y: 0, axis: "x", hint: "above", onDrag: (dataX) => setTarget((state) => ({ ...state, workers: clamp(Math.round(dataX * 20) / 20, 0.2, 2) })) }));
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} footnote="Illustrative: K = 2."
      ariaLabel="Production function with diminishing returns and the downward-sloping marginal product of labour."
      explore={<div class="graph-sliders"><Slider label="TFP A" value={target.productivity} min={0.6} max={1.5} step={0.05} onInput={(value) => setTarget((state) => ({ ...state, productivity: value }))} /></div>}>
      <g>{leftParts}</g>
      <g>{rightParts}</g>
    </SketchGraph>
  );
}

function UserCost(): VNode {
  const initial = { rate: 0.05, depreciation: 0.1, productivity: 1 };
  const [target, setTarget] = useState(initial);
  const NOTES = [
    "The marginal product of future capital falls as the stock grows (diminishing returns).",
    "The user cost of capital: interest forgone plus depreciation, per unit, and it doesn't depend on K.",
    "Invest until they're equal: MPKᶠ = user cost sets the optimal Kᶠ.",
    "Your turn. Raise r or δ (the line moves up: less capital) or Aᶠ (the curve moves out: more).",
  ];
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMax: 8, yMax: 0.6 }], maxWidth: 620, padding: { left: 44, bottom: 44, top: 22 } });
  const { show, drawNow, step } = sketch;
  const current = useGlide(step === 3 ? target : initial, false);
  const frame = sketch.frames[0];
  const toX = frame.x, toY = frame.y;
  const marginalProduct = (capital: number) => 0.3 * current.productivity * Math.pow(Math.max(capital, 1e-6), -0.7);
  const userCost = current.rate + current.depreciation;
  const optimal = Math.pow((0.3 * current.productivity) / userCost, 1 / 0.7);
  const TEX = [
    "MPK^f = 0.3\\,A^f (K^f)^{-0.7}",
    `uc = (r + \\delta)\\,p_k = (${fmt(current.rate, 2)} + ${fmt(current.depreciation, 2)}) \\times 1 = ${fmt(userCost, 2)}`,
    `MPK^f = uc \\;\\Rightarrow\\; K^{f*} = \\left(\\tfrac{0.3 A^f}{uc}\\right)^{1/0.7} = ${fmt(optimal, 2)}`,
    `uc = ${fmt(userCost, 2)},\\; A^f = ${fmt(current.productivity, 2)}:\\; K^{f*} = ${fmt(optimal, 2)}`,
  ];
  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={[0, 2, 4, 6, 8]} yTicks={[0.1, 0.2, 0.3, 0.4, 0.5, 0.6]} xLabel="future capital Kᶠ" yLabel="$ per unit" />];
  const plot: VNode[] = [<InkCurve points={curvePoints(frame, marginalProduct, 0.3, 8, 60)} id="mpk" color={MARKER.green} width={2.5} draw={drawNow(0)} />];
  if (show(1)) plot.push(<InkDashed x1={frame.left} y1={toY(userCost)} x2={frame.right} y2={toY(userCost)} id="user-cost" color={MARKER.red} width={2.2} draw={drawNow(1)} />);
  if (show(2)) plot.push(<InkDashed x1={toX(optimal)} y1={toY(userCost)} x2={toX(optimal)} y2={frame.bottom} id="k-guide" color={INK_SOFT} width={1.2} dash={4} gap={4} draw={drawNow(2)} />);
  drawing.push(<g clip-path={sketch.clip()}>{plot}</g>);
  drawing.push(<Note x={toX(7.8)} y={toY(marginalProduct(7.8)) - 10} text="MPKᶠ" color={MARKER.green} anchor="end" size={19} draw={drawNow(0)} />);
  if (show(1)) drawing.push(<Note x={frame.right - 4} y={toY(userCost) - 8} text="user cost (r + δ)pₖ" color={MARKER.red} anchor="end" size={17} draw={drawNow(1)} />);
  if (show(2)) {
    drawing.push(<Ring x={toX(optimal)} y={toY(userCost)} id="ring" color={ACCENT} draw={drawNow(2)} />);
    drawing.push(<Note x={toX(optimal)} y={frame.bottom + 33} text={`Kᶠ* = ${fmt(optimal, 2)}`} color={ACCENT} anchor="middle" size={17} draw={drawNow(2)} />);
  }
  const update = (changes: Partial<typeof target>) => setTarget((state) => ({ ...state, ...changes }));
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} footnote="Illustrative functional form, pₖ = 1."
      ariaLabel={`Optimal capital where MPK equals user cost ${fmt(userCost, 2)}: K = ${fmt(optimal, 2)}.`}
      explore={<div class="graph-sliders">
        <Slider label="interest rate r" value={target.rate} min={0} max={0.2} step={0.01} onInput={(value) => update({ rate: value })} />
        <Slider label="depreciation δ" value={target.depreciation} min={0.02} max={0.25} step={0.01} onInput={(value) => update({ depreciation: value })} />
        <Slider label="future TFP Aᶠ" value={target.productivity} min={0.6} max={1.6} step={0.05} onInput={(value) => update({ productivity: value })} />
      </div>}>
      {drawing}
    </SketchGraph>
  );
}

const TASK_RATIOS = [5, 2, 100 / 120, 0.5]; // ψ_N/ψ_K from the solution's cost table (e.g. task 3: 16.67/20)

function TaskAssignment(): VNode {
  const [threshold, setThreshold] = useState(1.25);
  const NOTES = [
    "Each task can be done by labour or by capital. The bar is how much better labour is at it: ψ_N/ψ_K.",
    "Part 1: w/r = 1. Tasks where labour's edge beats the wage–rental ratio go to labour: tasks 1 and 2.",
    "Part 2: capital gets cheaper, w/r = 1.25. The threshold rises, but it still sits between tasks 2 and 3: no task switches.",
    "Your turn. Drag the w/r threshold.",
  ];
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMax: 4, yMax: 5.8 }], maxWidth: 620, padding: { left: 44, bottom: 44, top: 22 } });
  const { show, drawNow, step } = sketch;
  const frame = sketch.frames[0];
  const toX = frame.x, toY = frame.y;
  const line = step === 1 ? 1 : step === 2 ? 1.25 : step === 3 ? threshold : null;
  const TEX = [
    "\\text{labour if } \\frac{\\psi_N}{\\psi_K} > \\frac{w}{r}",
    "\\tfrac{w}{r} = \\tfrac{100}{100} = 1:\\; \\text{labour } \\{1, 2\\},\\; \\text{capital } \\{3, 4\\}",
    "\\tfrac{w}{r} = \\tfrac{100}{80} = 1.25:\\; \\text{same split}",
    `\\tfrac{w}{r} = ${fmt(threshold, 2)}:\\; \\text{labour } \\{${TASK_RATIOS.map((ratio, index) => (ratio > threshold ? index + 1 : null)).filter(Boolean).join(", ") || "\\text{none}"}\\}`,
  ];
  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" yTicks={[1, 2, 3, 4, 5]} yLabel="ψ_N / ψ_K" />];
  TASK_RATIOS.forEach((ratio, index) => {
    const toLabour = line === null ? null : ratio > line;
    const color = toLabour === null ? MARKER.grey : toLabour ? MARKER.green : MARKER.red;
    const wash = toLabour === null ? WASH.grey : toLabour ? WASH.green : WASH.red;
    drawing.push(<InkBar frame={frame} fromX={index + 0.2} toX={index + 0.8} value={ratio} id={`${sketch.uid}-task-${index}-${toLabour}`} color={color} wash={wash} delay={index * 200} draw={drawNow(0)} />);
    drawing.push(<Note x={toX(index + 0.5)} y={toY(ratio) - 8} text={fmt(ratio, 2)} color={INK_SOFT} anchor="middle" size={18} />);
    drawing.push(<text x={toX(index + 0.5)} y={frame.bottom + 16} text-anchor="middle" class="sk-tick">{`Task ${index + 1}`}</text>);
  });
  if (line !== null) {
    drawing.push(<InkDashed x1={frame.left} y1={toY(line)} x2={frame.right} y2={toY(line)} id={`threshold-${step}`} color={ACCENT} width={2} draw={step !== 3 && drawNow(step)} />);
    drawing.push(<Note x={frame.right - 4} y={toY(line) - 8} text={`w/r = ${fmt(line, 2)}`} color={ACCENT} anchor="end" size={18} />);
    drawing.push(<Note x={toX(0.3)} y={frame.top + 10} text="green: labour · red: capital" color={INK_SOFT} size={17} />);
  }
  if (step === 3) drawing.push(sketch.handle({ key: "threshold", x: 3.9, y: threshold, axis: "y", hint: "left", onDrag: (_dataX, dataY) => setThreshold(clamp(Math.round(dataY * 20) / 20, 0.2, 5.5)) }));
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} ariaLabel="Task assignment: tasks 1 and 2 to labour, 3 and 4 to capital at w/r of 1 or 1.25.">
      {drawing}
    </SketchGraph>
  );
}
