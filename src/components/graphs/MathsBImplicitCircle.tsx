import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, useGlide, SketchGraph, SketchAxes, InkCurve, InkLine, InkDashed, Note, Dot, Presets, fmt, ACCENT, INK, MARKER } from "./sketch";

// Lesson 4: implicit differentiation on x² + y² = 25. The circle is not a
// function of x, yet every point has a slope, y′ = −x/y.

const RADIUS = 5;
const angleOf = (x: number, y: number) => Math.atan2(y, x);
const UPPER_ANGLE = angleOf(3, 4), LOWER_ANGLE = angleOf(3, -4);

const NOTES = [
  "x² + y² = 25 is a circle. At x = 3 there are two y values, so y is not a function of x.",
  "Differentiate both sides, treating y as a function of x: 2x + 2y·y′ = 0, so y′ = −x/y.",
  "At the top point (3, 4), the tangent slope is −3/4.",
  "At the bottom point (3, −4), the same formula gives +3/4.",
  "The tangent is perpendicular to the radius: slopes 4/3 and −3/4 multiply to −1.",
  "Your turn. Drag the point around the circle.",
];

export default function MathsBImplicitCircle(): VNode {
  const [exploreAngle, setExploreAngle] = useState(UPPER_ANGLE);
  const sketch = useSketch({
    stepCount: NOTES.length,
    domains: [{ xMin: -7.5, xMax: 7.5, yMin: -7.5, yMax: 7.5 }],
    aspect: 0.92, minHeight: 320, maxHeight: 430, maxWidth: 520, padding: { left: 24, bottom: 24, top: 12, right: 14 },
  });
  const { show, drawNow, step, dragging } = sketch;
  const frame = sketch.frames[0];
  const targetAngle = step === 3 ? LOWER_ANGLE : step === 5 ? exploreAngle : UPPER_ANGLE;
  const { angle } = useGlide({ angle: targetAngle }, dragging !== null);
  const pointX = RADIUS * Math.cos(angle), pointY = RADIUS * Math.sin(angle);
  const slope = Math.abs(pointY) < 0.02 ? Infinity : -pointX / pointY;
  const slopeLabel = Number.isFinite(slope) ? fmt(slope, 2) : "\\text{undefined}";
  const directionX = -Math.sin(angle), directionY = Math.cos(angle);
  const reach = 3.6;

  const TEX = [
    "x^2 + y^2 = 25 \\;\\Rightarrow\\; y = \\pm\\sqrt{25 - x^2}",
    "2x + 2y\\,y' = 0 \\;\\Rightarrow\\; y' = -\\dfrac{x}{y}",
    "y'(3,4) = -\\dfrac{3}{4}",
    "y'(3,-4) = -\\dfrac{3}{-4} = \\dfrac{3}{4}",
    "\\frac{4}{3}\\times\\left(-\\frac{3}{4}\\right) = -1",
    `(x, y) = (${fmt(pointX, 2)},\\, ${fmt(pointY, 2)}):\\quad y' = ${slopeLabel}`,
  ];

  const circlePoints: [number, number][] = Array.from({ length: 73 }, (_, index) => {
    const pointAngle = (index / 72) * Math.PI * 2;
    return [frame.x(RADIUS * Math.cos(pointAngle)), frame.y(RADIUS * Math.sin(pointAngle))];
  });
  const parts: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={[-5, 5]} yTicks={[-5, 5]} xLabel="x" yLabel="y" hideZero />];
  parts.push(<InkCurve points={circlePoints} id="circle" color={MARKER.blue} width={2.5} />);
  if (step === 0) {
    parts.push(<InkDashed x1={frame.x(3)} y1={frame.y(-6.6)} x2={frame.x(3)} y2={frame.y(6.6)} id="vertical" color={MARKER.red} width={1.5} />);
    parts.push(<Dot x={frame.x(3)} y={frame.y(4)} color={MARKER.red} radius={5} />);
    parts.push(<Dot x={frame.x(3)} y={frame.y(-4)} color={MARKER.red} radius={5} />);
    parts.push(<Note x={frame.x(3) + 9} y={frame.y(4) - 7} text="(3, 4)" color={MARKER.red} size={17} />);
    parts.push(<Note x={frame.x(3) + 9} y={frame.y(-4) + 19} text="(3, −4)" color={MARKER.red} size={17} />);
  }
  if (show(1)) {
    parts.push(<g clip-path={sketch.clip(0)}><InkLine x1={frame.x(pointX - reach * directionX)} y1={frame.y(pointY - reach * directionY)} x2={frame.x(pointX + reach * directionX)} y2={frame.y(pointY + reach * directionY)} id={`tangent-${step}`} color={ACCENT} width={2.4} draw={drawNow(1)} /></g>);
    parts.push(<Dot x={frame.x(pointX)} y={frame.y(pointY)} color={ACCENT} radius={5} />);
  }
  if (step === 4) {
    parts.push(<InkLine x1={frame.x(0)} y1={frame.y(0)} x2={frame.x(pointX)} y2={frame.y(pointY)} id="radius" color={MARKER.green} width={2.2} draw={drawNow(4)} />);
    parts.push(<Note x={frame.x(pointX / 2) - 8} y={frame.y(pointY / 2) - 4} text="radius" color={MARKER.green} anchor="end" size={17} draw={drawNow(4)} />);
  }
  if (step >= 2 && step <= 4) {
    parts.push(<Note x={frame.x(pointX) + 10} y={frame.y(pointY) + (pointY > 0 ? -10 : 22)} text={`slope ${step === 3 ? "+3/4" : "−3/4"}`} color={ACCENT} size={18} />);
  }
  if (step === 5) {
    parts.push(sketch.handle({ key: "point", x: RADIUS * Math.cos(exploreAngle), y: RADIUS * Math.sin(exploreAngle), axis: "xy", hint: "none", onDrag: (dataX, dataY) => setExploreAngle(angleOf(dataX, dataY)) }));
    parts.push(<Note x={frame.left + 4} y={frame.top + 12} text="drag the point" color={INK} size={17} />);
  }
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]}
      ariaLabel={`Circle of radius 5 with the tangent at (${fmt(pointX, 2)}, ${fmt(pointY, 2)}); slope ${Number.isFinite(slope) ? fmt(slope, 2) : "undefined"}.`}
      explore={<Presets presets={[
        { label: "(3, 4)", apply: () => setExploreAngle(UPPER_ANGLE) },
        { label: "(5, 0): vertical", apply: () => setExploreAngle(0) },
        { label: "(0, 5): flat", apply: () => setExploreAngle(Math.PI / 2) },
      ]} />}>
      {parts}
    </SketchGraph>
  );
}
