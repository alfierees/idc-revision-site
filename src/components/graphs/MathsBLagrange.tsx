import { useMemo, useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, useGlide, SketchGraph, SketchAxes, InkLine, Note, Dot, Ring, ShiftArrow, Presets, fmt, clamp, ACCENT, MARKER } from "./sketch";
import { contourPath } from "./MathsBShared";

// Lessons 8 and 9: Lagrange multipliers. Maximise f = xy on the line x + y = k.
// At the best point a level curve just touches the constraint, so the two
// gradients are parallel, and λ measures what one more unit of k is worth.

const objective = (x: number, y: number) => x * y;
const LEVELS = [4, 9, 16, 25, 36];
const GRADIENT_SCALE = 0.3;

const NOTES = [
  "Maximise f = xy, but only on the line x + y = 8. You must stay on the constraint.",
  "The level curves of f rise toward the top right. We want the highest one the line still reaches.",
  "At (2, 6) the line crosses a level curve. The gradients point different ways, so sliding along the line still raises f.",
  "At (4, 4) the level curve just touches the line. The gradients are parallel: ∇f = λ∇g, with λ = 4.",
  "Relax the constraint to k = 9. The best f rises from 16 to 20.25, a gain of 4.25, close to λ = 4. That is the shadow price.",
  "Your turn. Drag the point along the line, or change k.",
];

export default function MathsBLagrange(): VNode {
  const [exploreX, setExploreX] = useState(4);
  const [exploreBudget, setExploreBudget] = useState(8);
  const sketch = useSketch({
    stepCount: NOTES.length,
    domains: [{ xMax: 10, yMax: 10 }],
    aspect: 0.92, minHeight: 320, maxHeight: 440, maxWidth: 540, padding: { left: 30, bottom: 30, top: 12, right: 14 },
  });
  const { show, drawNow, step, dragging } = sketch;
  const frame = sketch.frames[0];
  const targetBudget = step === 4 ? 9 : step === 5 ? exploreBudget : 8;
  const targetX = step === 2 ? 2 : step === 4 ? 4.5 : step === 5 ? clamp(exploreX, 0.4, exploreBudget - 0.4) : 4;
  const { budget, pointX } = useGlide({ budget: targetBudget, pointX: targetX }, dragging !== null);
  const pointY = budget - pointX;
  const value = objective(pointX, pointY);
  const bestValue = budget * budget / 4;
  const isTangent = Math.abs(pointX - pointY) < 0.08;
  const contourPaths = useMemo(() => LEVELS.map((level) => contourPath(frame, objective, level)), [sketch.width, sketch.height]);
  const activeContour = useMemo(() => contourPath(frame, objective, Math.max(value, 0.05), 100), [sketch.width, sketch.height, fmt(value, 2)]);

  const TEX = [
    "\\max\\ f = xy \\quad \\text{s.t.}\\quad g = x + y = 8",
    "f(x, y) = xy = c",
    "\\nabla f(2,6) = (6,\\,2),\\quad \\nabla g = (1,\\,1)",
    "\\nabla f(4,4) = (4,\\,4) = 4\\,(1,\\,1) = \\lambda\\,\\nabla g",
    "f^*(9) - f^*(8) = 20.25 - 16 = 4.25 \\approx \\lambda = 4",
    `(x, y) = (${fmt(pointX, 1)},\\, ${fmt(pointY, 1)}):\\ f = ${fmt(value, 2)},\\quad \\text{best on } x+y=${fmt(budget, 1)}:\\ ${fmt(bestValue, 2)}`,
  ];

  const parts: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={[2, 4, 6, 8]} yTicks={[2, 4, 6, 8]} xLabel="x" yLabel="y" hideZero />];
  if (show(1)) {
    parts.push(<g clip-path={sketch.clip(0)} class={drawNow(1) ? "sk-fade" : undefined}>{contourPaths.map((path) => <path d={path} style={`fill:none;stroke:${MARKER.blue};stroke-width:1.3;opacity:0.45`} />)}</g>);
  }
  parts.push(<InkLine x1={frame.x(Math.max(0, budget - 10))} y1={frame.y(Math.min(10, budget))} x2={frame.x(Math.min(10, budget))} y2={frame.y(Math.max(0, budget - 10))} id={`constraint-${fmt(budget, 1)}`} color={MARKER.red} width={2.5} />);
  parts.push(<Note x={frame.x(budget) - 3} y={frame.y(0.42)} text={`x + y = ${fmt(budget, 1)}`} color={MARKER.red} anchor="end" size={17} />);
  if (show(2)) {
    parts.push(<g clip-path={sketch.clip(0)}><path d={activeContour} style={`fill:none;stroke:${ACCENT};stroke-width:2.4;stroke-linecap:round`} /></g>);
    const originX = frame.x(pointX), originY = frame.y(pointY);
    const gradientEndX = frame.x(pointX + pointY * GRADIENT_SCALE), gradientEndY = frame.y(pointY + pointX * GRADIENT_SCALE);
    const constraintEndX = frame.x(pointX + 0.75), constraintEndY = frame.y(pointY + 0.75);
    parts.push(<ShiftArrow x1={originX} y1={originY} x2={gradientEndX} y2={gradientEndY} id={`grad-f-${step}`} color={MARKER.green} draw={drawNow(step)} />);
    parts.push(<ShiftArrow x1={originX} y1={originY} x2={constraintEndX} y2={constraintEndY} id={`grad-g-${step}`} color={MARKER.red} draw={drawNow(step)} />);
    parts.push(<Note x={gradientEndX + 5} y={gradientEndY + (isTangent ? -3 : 4)} text="∇f" color={MARKER.green} size={18} />);
    if (!isTangent) parts.push(<Note x={constraintEndX + 5} y={constraintEndY + 12} text="∇g" color={MARKER.red} size={18} />);
    parts.push(<Dot x={originX} y={originY} color={ACCENT} radius={5} />);
    if (isTangent) parts.push(<Ring x={originX} y={originY} id={`best-${step}`} color={MARKER.green} radius={13} draw={drawNow(step)} />);
    parts.push(<Note x={frame.right - 3} y={frame.top + 13} text={`f = ${fmt(value, 2)}`} color={ACCENT} anchor="end" size={19} />);
  }
  if (step === 5) {
    const handleX = clamp(exploreX, 0.4, exploreBudget - 0.4);
    parts.push(sketch.handle({ key: "point", x: handleX, y: exploreBudget - handleX, axis: "xy", hint: "none", onDrag: (dataX, dataY) => setExploreX(Math.round(clamp((dataX - dataY + exploreBudget) / 2, 0.4, exploreBudget - 0.4) * 10) / 10) }));
  }
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} footnote="Illustrative function, chosen to show the method."
      ariaLabel={`Level curves of xy and the constraint x plus y equals ${fmt(budget, 1)}. At (${fmt(pointX, 1)}, ${fmt(pointY, 1)}) f is ${fmt(value, 2)}; the constrained maximum is ${fmt(bestValue, 2)}.`}
      explore={<Presets presets={[
        { label: "k = 6", apply: () => { setExploreBudget(6); setExploreX(3); } },
        { label: "k = 8", apply: () => { setExploreBudget(8); setExploreX(4); } },
        { label: "k = 10", apply: () => { setExploreBudget(10); setExploreX(5); } },
        { label: "Off-centre", apply: () => setExploreX(Math.max(0.6, exploreBudget * 0.2)) },
      ]} />}>
      {parts}
    </SketchGraph>
  );
}
