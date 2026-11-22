import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, SketchGraph, Note, Presets, Slider, fmt, ACCENT, MARKER } from "./sketch";
import { AugmentedMatrix } from "./MathsBShared";

// Lesson 12, Example 1: a system with a parameter a. Row reduction without
// dividing by a gives pivots a, a and a − 1, so the outcome flips at a = 0 and
// a = 1. Those two values give no solution; every other value gives one.

const symbolicStart = [["a", "a+1", "1", "a"], ["a", "2a+1", "a+2", "2a"], ["2a", "3a+2", "2a+2", "4a+1"]];
const symbolicMiddle = [["a", "a+1", "1", "a"], ["0", "a", "a+1", "a"], ["0", "a", "2a", "2a+1"]];
const symbolicFinal = [["a", "a+1", "1", "a"], ["0", "a", "a+1", "a"], ["0", "0", "a−1", "a+1"]];
const numericFinal = (parameter: number) => [[parameter, parameter + 1, 1, parameter], [0, parameter, parameter + 1, parameter], [0, 0, parameter - 1, parameter + 1]];
const whenZero = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 0, 1]];

function solutionFor(parameter: number) {
  const z = (parameter + 1) / (parameter - 1);
  const y = (parameter - (parameter + 1) * z) / parameter;
  const x = (parameter - (parameter + 1) * y - z) / parameter;
  return { x, y, z };
}

const NOTES = [
  "A system with a letter in it. The question: for which values of a is there no solution, one solution, or infinitely many?",
  "Eliminate column 1 with R₂ − R₁ and R₃ − 2R₁. No dividing by a yet, because a might be zero.",
  "R₃ − R₂ gives a triangle with pivots a, a and a − 1. The outcome can only change where a pivot is zero.",
  "Try a = 1. The last row reads 0 = 2. No solution.",
  "Try a = 0. Adding row 2 to row 3 leaves 0 = 1. No solution.",
  "Any other a, such as a = 2: all three pivots are non-zero, so there is exactly one solution.",
  "Your turn. Move a and watch the outcome flip at 0 and 1.",
];

export default function MathsBParameterSystem(): VNode {
  const [exploreParameter, setExploreParameter] = useState(2);
  const sketch = useSketch({
    stepCount: NOTES.length,
    domains: [{ xMax: 1, yMax: 1 }],
    aspect: 0.56, minHeight: 215, maxHeight: 255, maxWidth: 520, padding: { left: 8, right: 8, top: 6, bottom: 34 },
  });
  const { step } = sketch;
  const frame = sketch.frames[0];
  const parameter = step === 3 ? 1 : step === 4 ? 0 : step === 5 ? 2 : exploreParameter;
  const isNumeric = step >= 3;
  const hasNoSolution = parameter === 0 || parameter === 1;
  const solution = !hasNoSolution ? solutionFor(parameter) : null;
  const rows: (number | string)[][] = step === 0 ? symbolicStart : step === 1 ? symbolicMiddle : step === 2 ? symbolicFinal : parameter === 0 ? whenZero : numericFinal(parameter);
  const pivots = step === 2 ? ["0,0", "1,1", "2,2"] : isNumeric && !hasNoSolution ? ["0,0", "1,1", "2,2"] : [];

  const outcomeTex = hasNoSolution
    ? `a = ${fmt(parameter)}:\\quad 0 = ${parameter === 1 ? 2 : 1} \\;\\Rightarrow\\; \\text{no solution}`
    : `a = ${fmt(parameter, 1)}:\\quad (x, y, z) = (${fmt(solution!.x, 2)},\\ ${fmt(solution!.y, 2)},\\ ${fmt(solution!.z, 2)})`;
  const TEX = [
    "\\text{no solution? unique? infinitely many?}",
    "R_2 \\to R_2 - R_1,\\quad R_3 \\to R_3 - 2R_1",
    "R_3 \\to R_3 - R_2:\\quad \\text{pivots } a,\\ a,\\ a-1",
    outcomeTex, outcomeTex, outcomeTex, outcomeTex,
  ];
  const verdict = !isNumeric ? "" : hasNoSolution ? "no solution" : "unique solution";
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]}
      ariaLabel={`Row-reduced system for a = ${isNumeric ? fmt(parameter, 1) : "a general value"}. ${verdict}.`}
      explore={<div>
        <Slider label="a" value={exploreParameter} min={-3} max={4} step={0.5} onInput={setExploreParameter} />
        <Presets presets={[{ label: "a = 0", apply: () => setExploreParameter(0) }, { label: "a = 1", apply: () => setExploreParameter(1) }, { label: "a = 2", apply: () => setExploreParameter(2) }]} />
      </div>}>
      <AugmentedMatrix frame={frame} rows={rows} pivots={pivots} badRow={isNumeric && hasNoSolution ? 2 : undefined} />
      {isNumeric && <Note x={(frame.left + frame.right) / 2} y={frame.bottom + 25} text={verdict} color={hasNoSolution ? MARKER.red : ACCENT} anchor="middle" size={20} />}
    </SketchGraph>
  );
}
