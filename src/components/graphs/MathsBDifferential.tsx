import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, useGlide, SketchGraph, Hatch, InkLine, Note, Slider, fmt, INK, MARKER, WASH } from "./sketch";

// Lesson 6: the total differential dz = f′x dx + f′y dy, seen as area. For
// z = xy the exact change is the two strips plus a tiny corner, dx·dy, which
// is what the differential leaves out.

const BASE_X = 6, BASE_Y = 4;
const NOTES = [
  "Take z = xy as the area of a rectangle, with x = 6 and y = 4. So z = 24.",
  "Grow both sides: dx = 2 and dy = 1.5. The exact change in area is 20.",
  "The differential counts the two strips: y·dx + x·dy = 8 + 9 = 17.",
  "It misses only the corner, dx·dy = 3. That is the whole error.",
  "Shrink the steps to a quarter. The strips shrink in proportion, but the corner almost vanishes.",
  "Your turn. Change the step size and compare the estimate with the exact change.",
];

export default function MathsBDifferential(): VNode {
  const [exploreStep, setExploreStep] = useState(1);
  const sketch = useSketch({
    stepCount: NOTES.length,
    domains: [{ xMin: -0.6, xMax: 9, yMin: -0.6, yMax: 6.4 }],
    aspect: 0.72, minHeight: 280, maxHeight: 400, maxWidth: 600, padding: { left: 16, bottom: 16, top: 12, right: 16 },
  });
  const { show, drawNow, step } = sketch;
  const frame = sketch.frames[0];
  const targetScale = step === 0 ? 0 : step === 4 ? 0.25 : step === 5 ? exploreStep : 1;
  const { scale } = useGlide({ scale: targetScale }, false);
  const changeX = 2 * scale, changeY = 1.5 * scale;
  const stripX = BASE_Y * changeX, stripY = BASE_X * changeY, corner = changeX * changeY;
  const estimate = stripX + stripY, exact = estimate + corner;
  const percentError = exact > 0 ? (corner / exact) * 100 : 0;

  const TEX = [
    "z = xy = 6 \\times 4 = 24",
    "\\Delta z = (8)(5.5) - 24 = 20",
    "dz = y\\,dx + x\\,dy = 4(2) + 6(1.5) = 17",
    "\\Delta z - dz = dx\\,dy = 2 \\times 1.5 = 3",
    `dx = ${fmt(changeX, 2)},\\ dy = ${fmt(changeY, 3)}:\\quad dz = ${fmt(estimate, 2)},\\ \\Delta z = ${fmt(exact, 3)}`,
    `dz = ${fmt(estimate, 2)},\\quad \\Delta z = ${fmt(exact, 2)},\\quad \\text{error } ${fmt(percentError, 1)}\\%`,
  ];

  const left = frame.x(0), baseRight = frame.x(BASE_X), fullRight = frame.x(BASE_X + changeX);
  const bottom = frame.y(0), baseTop = frame.y(BASE_Y), fullTop = frame.y(BASE_Y + changeY);
  const rectangle = (x1: number, y1: number, x2: number, y2: number): [number, number][] => [[x1, y1], [x2, y1], [x2, y2], [x1, y2]];
  const parts: VNode[] = [
    <Hatch points={rectangle(left, baseTop, baseRight, bottom)} id="base" wash={WASH.grey} ink={MARKER.grey} gap={13} />,
    <InkLine x1={left} y1={bottom} x2={baseRight} y2={bottom} id="bottom" color={INK} width={1.8} />,
    <InkLine x1={left} y1={bottom} x2={left} y2={baseTop} id="left" color={INK} width={1.8} />,
    <Note x={(left + baseRight) / 2} y={(baseTop + bottom) / 2 + 6} text="z = xy = 24" color={INK} anchor="middle" size={20} />,
    <Note x={(left + baseRight) / 2} y={bottom + 2} text="x = 6" color={INK} anchor="middle" size={16} />,
    <Note x={left + 5} y={(baseTop + bottom) / 2 - 22} text="y = 4" color={INK} size={16} />,
  ];
  if (show(1) && scale > 0.01) {
    parts.push(<Hatch points={rectangle(baseRight, baseTop, fullRight, bottom)} id="strip-x" wash={WASH.blue} ink={MARKER.blue} gap={9} draw={drawNow(1)} />);
    parts.push(<Hatch points={rectangle(left, fullTop, baseRight, baseTop)} id="strip-y" wash={WASH.green} ink={MARKER.green} gap={9} draw={drawNow(1)} />);
    parts.push(<Hatch points={rectangle(baseRight, fullTop, fullRight, baseTop)} id="corner" wash={WASH.red} ink={MARKER.red} gap={5} draw={drawNow(1)} />);
  }
  if (show(2) && scale > 0.2) {
    parts.push(<Note x={(baseRight + fullRight) / 2} y={(baseTop + bottom) / 2 + 6} text={fmt(stripX, 1)} color={MARKER.blue} anchor="middle" size={18} />);
    parts.push(<Note x={(left + baseRight) / 2} y={(fullTop + baseTop) / 2 + 6} text={fmt(stripY, 1)} color={MARKER.green} anchor="middle" size={18} />);
  }
  if (show(3) && step !== 4 && scale > 0.3) {
    parts.push(<Note x={(baseRight + fullRight) / 2} y={(fullTop + baseTop) / 2 + 6} text={fmt(corner, 1)} color={MARKER.red} anchor="middle" size={18} draw={drawNow(3)} />);
  }
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]}
      ariaLabel={`Rectangle area change: differential estimate ${fmt(estimate, 2)}, exact change ${fmt(exact, 2)}, the difference is the corner ${fmt(corner, 2)}.`}
      explore={<Slider label="Step size" value={exploreStep} min={0.1} max={1.3} step={0.1} onInput={setExploreStep} suffix="×" />}>
      {parts}
    </SketchGraph>
  );
}
