import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, useGlide, SketchGraph, SketchAxes, InkCurve, InkDashed, Note, Dot, Arrow, Presets, curvePoints, fmt, INK_MUTED, ACCENT, MARKER } from "./sketch";
import { makeEqualScale } from "./MathsBShared";

// Lesson 2: the logarithm is the inverse of the exponential, so its graph is
// the exponential's graph reflected across the line y = x.

const NOTES = [
  "Start with the exponential y = 2ˣ. It passes through (0, 1) and (1, 2).",
  "An inverse function swaps the roles of x and y. On a graph, that is a reflection across the line y = x.",
  "Reflect one point: (1, 2) on the exponential lands on (2, 1).",
  "Reflect every point and you get the logarithm, y = log₂ x. Its domain is x > 0.",
  "Your turn. Change the base. For 0 < a < 1 both curves fall instead of rise.",
];

export default function MathsBLogInverse(): VNode {
  const [exploreBase, setExploreBase] = useState(2);
  const sketch = useSketch({
    stepCount: NOTES.length,
    domains: [{ xMin: -3.2, xMax: 6, yMin: -3.2, yMax: 6 }],
    aspect: 0.9, minHeight: 320, maxHeight: 440, maxWidth: 560, padding: { left: 30, bottom: 28, top: 14, right: 14 },
  });
  const { show, drawNow, step } = sketch;
  const frame = sketch.frames[0];
  makeEqualScale(frame);
  const { base } = useGlide({ base: step === 4 ? exploreBase : 2 }, false);
  const exponential = (x: number) => base ** x;
  const logarithm = (x: number) => Math.log(x) / Math.log(base);
  const baseLabel = fmt(base, 2);

  const TEX = [
    "y = 2^x",
    "y = f(x) \\iff x = f^{-1}(y)",
    "(1,\\,2) \\;\\longrightarrow\\; (2,\\,1)",
    "y = \\log_2 x \\iff 2^y = x",
    `y = ${baseLabel}^x \\iff x = \\log_{${baseLabel}} y`,
  ];

  const parts: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={[-2, 2, 4]} yTicks={[-2, 2, 4]} xLabel="x" yLabel="y" hideZero />];
  if (show(1)) {
    parts.push(<InkDashed x1={frame.x(-3.2)} y1={frame.y(-3.2)} x2={frame.x(6)} y2={frame.y(6)} id="mirror" color={INK_MUTED} width={1.4} draw={drawNow(1)} />);
    parts.push(<Note x={frame.x(4.7)} y={frame.y(5.25)} text="y = x" color={INK_MUTED} anchor="end" size={17} />);
  }
  parts.push(<g clip-path={sketch.clip(0)}><InkCurve points={curvePoints(frame, exponential, -3.2, 6, 80)} id={`exp-${baseLabel}`} color={MARKER.blue} width={2.6} /></g>);
  parts.push(<Note x={frame.x(base >= 1 ? 1.1 : -2.1)} y={frame.y(5.4)} text={`y = ${baseLabel}ˣ`} color={MARKER.blue} size={18} />);
  if (step === 2) {
    parts.push(<Dot x={frame.x(1)} y={frame.y(2)} color={MARKER.blue} radius={5} />);
    parts.push(<Note x={frame.x(1) - 8} y={frame.y(2) - 8} text="(1, 2)" color={MARKER.blue} anchor="end" size={17} />);
    parts.push(<Arrow x1={frame.x(1)} y1={frame.y(2)} x2={frame.x(2)} y2={frame.y(1)} id="reflect" color={ACCENT} bend={8} draw={drawNow(2)} />);
    parts.push(<Dot x={frame.x(2)} y={frame.y(1)} color={MARKER.green} radius={5} draw={drawNow(2)} delay={450} />);
    parts.push(<Note x={frame.x(2) + 9} y={frame.y(1) + 16} text="(2, 1)" color={MARKER.green} size={17} draw={drawNow(2)} delay={450} />);
  }
  if (show(3)) {
    const logPoints = curvePoints(frame, logarithm, 0.015, 6, 120).filter(([, pixelY]) => pixelY >= frame.top - 30 && pixelY <= frame.bottom + 30);
    parts.push(<g clip-path={sketch.clip(0)}><InkCurve points={logPoints} id={`log-${baseLabel}`} color={MARKER.green} width={2.6} draw={drawNow(3)} /></g>);
    parts.push(<Note x={frame.x(5.9)} y={frame.y(logarithm(5.2)) + (base >= 1 ? 22 : -10)} text={`y = log${base === 2 ? "₂" : ` base ${baseLabel},`} x`} color={MARKER.green} anchor="end" size={18} />);
  }
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]}
      ariaLabel={`Exponential with base ${baseLabel} and its inverse logarithm, reflections of each other across the line y equals x.`}
      explore={<Presets presets={[
        { label: "a = 2", apply: () => setExploreBase(2) },
        { label: "a = e", apply: () => setExploreBase(Math.E) },
        { label: "a = 10", apply: () => setExploreBase(10) },
        { label: "a = 0.5", apply: () => setExploreBase(0.5) },
      ]} />}>
      {parts}
    </SketchGraph>
  );
}
