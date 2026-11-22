import { useMemo, useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, useGlide, SketchGraph, SketchAxes, InkCurve, InkLine, Note, Dot, Presets, curvePoints, fmt, clamp, ACCENT, MARKER } from "./sketch";
import { contourPath } from "./MathsBShared";

// Lessons 5 and 6: a partial derivative is an ordinary slope on a slice of the
// surface. Hold y fixed, and z = x² + y² becomes a parabola in x whose tangent
// slope is ∂z/∂x = 2x.

const surface = (x: number, y: number) => x * x + y * y;
const LEVELS = [1, 2, 4, 6, 9];

const NOTES = [
  "The surface z = x² + y², seen from above as a contour map.",
  "To take the partial derivative in x, freeze y. Here we cut along the line y = 1.",
  "That cut is a plain one-variable curve: z = x² + 1.",
  "Its slope at x = 1 is the partial derivative: ∂z/∂x = 2x = 2.",
  "Your turn. Drag the point along the slice, or move the cut. The slope 2x ignores y.",
];

export default function MathsBPartialSlice(): VNode {
  const [exploreX, setExploreX] = useState(1);
  const [exploreY, setExploreY] = useState(1);
  const sketch = useSketch({
    stepCount: NOTES.length,
    domains: [{ xMin: -3, xMax: 3, yMin: -3, yMax: 3 }, { xMin: -3, xMax: 3, yMin: 0, yMax: 13 }],
    aspect: 0.9, minHeight: 250, maxHeight: 320, maxWidth: 760, padding: { left: 32, bottom: 30, top: 12, right: 14 },
    panelTitles: ["From above", "The slice: z against x"],
  });
  const { show, drawNow, step, dragging } = sketch;
  const [mapFrame, sliceFrame] = sketch.frames;
  const { fixedY, pointX } = useGlide({ fixedY: step === 4 ? exploreY : 1, pointX: step === 4 ? exploreX : 1 }, dragging !== null);
  const pointZ = surface(pointX, fixedY), slope = 2 * pointX;
  const contourPaths = useMemo(() => LEVELS.map((level) => contourPath(mapFrame, surface, level)), [sketch.width, sketch.height]);
  const tangentReach = 1.1;

  const TEX = [
    "z = x^2 + y^2",
    "y = 1 \\text{ held constant}",
    "z = x^2 + 1",
    "\\frac{\\partial z}{\\partial x} = 2x,\\quad \\frac{\\partial z}{\\partial x}\\Big|_{(1,1)} = 2",
    `y = ${fmt(fixedY, 1)}:\\quad z = x^2 + ${fmt(fixedY * fixedY, 2)},\\quad \\frac{\\partial z}{\\partial x}\\Big|_{x=${fmt(pointX, 1)}} = ${fmt(slope, 1)}`,
  ];

  const mapParts: VNode[] = [<SketchAxes frame={mapFrame} id="map-axes" xTicks={[-2, 2]} yTicks={[-2, 2]} xLabel="x" yLabel="y" hideZero />];
  mapParts.push(<g clip-path={sketch.clip(0)}>{contourPaths.map((path) => <path d={path} style={`fill:none;stroke:${MARKER.blue};stroke-width:1.4;opacity:0.55`} />)}</g>);
  if (show(1)) {
    mapParts.push(<InkLine x1={mapFrame.x(-3)} y1={mapFrame.y(fixedY)} x2={mapFrame.x(3)} y2={mapFrame.y(fixedY)} id={`cut-${fmt(fixedY, 2)}`} color={ACCENT} width={2.4} draw={drawNow(1)} />);
    mapParts.push(<Note x={mapFrame.right - 3} y={mapFrame.y(fixedY) - 7} text={`y = ${fmt(fixedY, 1)}`} color={ACCENT} anchor="end" size={17} />);
  }
  if (show(3)) mapParts.push(<Dot x={mapFrame.x(pointX)} y={mapFrame.y(fixedY)} color={MARKER.green} radius={5} />);

  const sliceParts: VNode[] = [<SketchAxes frame={sliceFrame} id="slice-axes" xTicks={[-2, 2]} yTicks={[4, 8, 12]} xLabel="x" yLabel="z" hideZero />];
  if (show(2)) {
    sliceParts.push(<g clip-path={sketch.clip(1)}><InkCurve points={curvePoints(sliceFrame, (x) => surface(x, fixedY), -3, 3, 60)} id={`slice-${fmt(fixedY, 2)}`} color={ACCENT} width={2.5} draw={drawNow(2)} /></g>);
  }
  if (show(3)) {
    sliceParts.push(<g clip-path={sketch.clip(1)}><InkLine x1={sliceFrame.x(pointX - tangentReach)} y1={sliceFrame.y(pointZ - slope * tangentReach)} x2={sliceFrame.x(pointX + tangentReach)} y2={sliceFrame.y(pointZ + slope * tangentReach)} id="tangent" color={MARKER.green} width={2.3} draw={drawNow(3)} /></g>);
    sliceParts.push(<Dot x={sliceFrame.x(pointX)} y={sliceFrame.y(pointZ)} color={MARKER.green} radius={5} />);
    sliceParts.push(<Note x={sliceFrame.left + 6} y={sliceFrame.top + 13} text={`slope = ${fmt(slope, 1)}`} color={MARKER.green} size={18} />);
  }
  if (step === 4) {
    sliceParts.push(sketch.handle({ key: "x", panel: 1, x: exploreX, y: surface(exploreX, exploreY), axis: "x", hint: "none", onDrag: (dataX) => setExploreX(Math.round(clamp(dataX, -2.6, 2.6) * 10) / 10) }));
  }
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]}
      ariaLabel={`Slice of z = x squared plus y squared at y = ${fmt(fixedY, 1)}. At x = ${fmt(pointX, 1)} the partial derivative in x is ${fmt(slope, 1)}.`}
      explore={<Presets presets={[
        { label: "Cut y = 0", apply: () => setExploreY(0) },
        { label: "Cut y = 1", apply: () => setExploreY(1) },
        { label: "Cut y = 2", apply: () => setExploreY(2) },
        { label: "x = −2", apply: () => setExploreX(-2) },
      ]} />}>
      <g>{mapParts}</g>
      <g>{sliceParts}</g>
    </SketchGraph>
  );
}
