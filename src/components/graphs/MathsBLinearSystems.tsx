import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, SketchGraph, SketchAxes, InkLine, Note, Dot, Ring, Slider, fmt, ACCENT, MARKER } from "./sketch";

// Lesson 10: the three possible outcomes of a linear system, using the three
// slide examples. Two lines cross once, never, or are the same line.

const NOTES = [
  "x − y = 7 and x + y = 5. Two different slopes, so the lines cross at exactly one point: (6, −1).",
  "2x − 2y = 13 and x − y = 7. Same slope, different lines. They never meet: no solution.",
  "2x − 2y = 14 and x − y = 7. The first is just twice the second, so it is one line: infinitely many solutions.",
  "Your turn. Change c in 2x − 2y = c. Only c = 14 makes the lines coincide.",
];

const lineThrough = (slope: number, intercept: number) => (x: number) => slope * x + intercept;

export default function MathsBLinearSystems(): VNode {
  const [exploreConstant, setExploreConstant] = useState(13);
  const sketch = useSketch({
    stepCount: NOTES.length,
    domains: [{ xMin: -1, xMax: 11, yMin: -7, yMax: 5 }],
    aspect: 0.8, minHeight: 300, maxHeight: 400, maxWidth: 560, padding: { left: 30, bottom: 28, top: 12, right: 14 },
  });
  const { drawNow, step } = sketch;
  const frame = sketch.frames[0];
  const constant = step === 1 ? 13 : step === 2 ? 14 : exploreConstant;
  const fixedLine = lineThrough(1, -7);
  const movingLine = step === 0 ? lineThrough(-1, 5) : lineThrough(1, -constant / 2);
  const coincide = step !== 0 && constant === 14;

  const TEX = [
    "x - y = 7,\\quad x + y = 5 \\;\\Rightarrow\\; (x, y) = (6, -1)",
    "2x - 2y = 13,\\quad 2x - 2y = 14 \\;\\Rightarrow\\; 13 = 14 \\text{ is impossible}",
    "2x - 2y = 14 \\iff x - y = 7 \\;\\Rightarrow\\; x = 7 + y,\\ y \\text{ free}",
    coincide ? "c = 14:\\ \\text{same line, infinitely many solutions}" : `c = ${fmt(constant, 1)}:\\ \\text{parallel lines, no solution}`,
  ];

  const drawLine = (lineFunction: (x: number) => number, id: string, color: string, width: number, shouldDraw: boolean) => (
    <g clip-path={sketch.clip(0)}>
      <InkLine x1={frame.x(-1)} y1={frame.y(lineFunction(-1))} x2={frame.x(11)} y2={frame.y(lineFunction(11))} id={id} color={color} width={width} draw={shouldDraw} />
    </g>
  );
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]}
      ariaLabel={step === 0 ? "Two lines crossing at (6, -1): one solution." : coincide ? "The two equations are the same line: infinitely many solutions." : "Two parallel lines: no solution."}
      explore={<Slider label="c" value={exploreConstant} min={10} max={18} step={0.5} onInput={setExploreConstant} />}>
      <SketchAxes frame={frame} id="axes" xTicks={[2, 4, 6, 8, 10]} yTicks={[-6, -4, -2, 2, 4]} xLabel="x" yLabel="y" hideZero />
      {drawLine(fixedLine, "fixed", MARKER.blue, coincide ? 5 : 2.5, false)}
      {drawLine(movingLine, `moving-${step}-${constant}`, coincide ? MARKER.green : MARKER.red, 2.3, drawNow(step))}
      {step === 0 && <Dot x={frame.x(6)} y={frame.y(-1)} color={ACCENT} radius={6} />}
      {step === 0 && <Ring x={frame.x(6)} y={frame.y(-1)} id="crossing" color={ACCENT} radius={14} />}
      {step === 0 && <Note x={frame.x(6) + 16} y={frame.y(-1) + 6} text="(6, −1)" color={ACCENT} size={18} />}
      <Note x={frame.left + 8} y={frame.top + 14} text={step === 0 ? "one solution" : coincide ? "infinitely many solutions" : "no solution"} color={step === 0 ? ACCENT : coincide ? MARKER.green : MARKER.red} size={20} />
    </SketchGraph>
  );
}
