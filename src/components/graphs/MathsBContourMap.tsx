import { useMemo, useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, SketchGraph, SketchAxes, Note, Toggle, Slider, fmt, ACCENT, INK_MUTED, MARKER } from "./sketch";
import { contourPath, makeEqualScale } from "./MathsBShared";

// Lessons 4 and 5: a surface z = f(x, y) read from above. Cutting it with the
// plane z = c gives a level curve; for a utility function that curve is an
// indifference curve.

type SurfaceKey = "bowl" | "utility" | "saddle";
const SURFACES: Record<SurfaceKey, { label: string; tex: string; surface: (x: number, y: number) => number; domain: { xMin: number; xMax: number; yMin: number; yMax: number }; levels: number[]; range: [number, number]; ticks: number[]; shape: string }> = {
  bowl: { label: "Bowl x² + y²", tex: "x^2 + y^2", surface: (x, y) => x * x + y * y, domain: { xMin: -3.4, xMax: 3.4, yMin: -3.4, yMax: 3.4 }, levels: [1, 2, 4, 6, 9], range: [0.5, 10], ticks: [-2, 2], shape: "circles" },
  utility: { label: "Utility xy", tex: "xy", surface: (x, y) => x * y, domain: { xMin: 0, xMax: 7, yMin: 0, yMax: 7 }, levels: [2, 4, 8, 12, 18], range: [1, 24], ticks: [2, 4, 6], shape: "indifference curves" },
  saddle: { label: "Saddle x² − y²", tex: "x^2 - y^2", surface: (x, y) => x * x - y * y, domain: { xMin: -3.4, xMax: 3.4, yMin: -3.4, yMax: 3.4 }, levels: [-4, -2, 0, 2, 4], range: [-6, 6], ticks: [-2, 2], shape: "hyperbolas" },
};

export default function MathsBContourMap({ mode = "bowl" }: { mode?: string }): VNode {
  const [surfaceKey, setSurfaceKey] = useState<SurfaceKey>(mode in SURFACES ? (mode as SurfaceKey) : "bowl");
  const config = SURFACES[surfaceKey];
  const [exploreLevel, setExploreLevel] = useState(config.levels[2]);
  const NOTES = [
    "Look at the surface from above and slice it with one horizontal plane z = c. The cut is a level curve.",
    "Slice at another height and you get another curve. Every point on one curve has the same z.",
    `The whole family of slices is a contour map, here made of ${config.shape}.`,
    "Your turn. Move the slicing height, or switch surface.",
  ];
  const sketch = useSketch({
    stepCount: NOTES.length,
    domains: [config.domain],
    aspect: 0.92, minHeight: 310, maxHeight: 420, maxWidth: 520, padding: { left: 30, bottom: 30, top: 12, right: 14 },
  });
  const { show, step } = sketch;
  const frame = sketch.frames[0];
  makeEqualScale(frame);
  const firstLevel = config.levels[2], secondLevel = config.levels[3];
  const activeLevel = step === 3 ? exploreLevel : step === 1 ? secondLevel : firstLevel;
  const sizeKey = `${surfaceKey}-${sketch.width}-${sketch.height}`;
  const levelPaths = useMemo(() => config.levels.map((level) => contourPath(frame, config.surface, level)), [sizeKey]);
  const activePath = useMemo(() => contourPath(frame, config.surface, activeLevel, 110), [sizeKey, activeLevel]);
  const visibleLevels = config.levels.map((level, index) => ({ level, path: levelPaths[index] })).filter(({ level }) => show(2) || (step === 1 && level === firstLevel));

  const TEX = [
    `${config.tex} = ${fmt(firstLevel)}`,
    `${config.tex} = ${fmt(secondLevel)}`,
    `${config.tex} = c,\\quad c \\in \\{${config.levels.join(",\\ ")}\\}`,
    `${config.tex} = ${fmt(activeLevel)}`,
  ];
  const pickSurface = (key: string) => {
    const nextKey = key as SurfaceKey;
    setSurfaceKey(nextKey);
    setExploreLevel(SURFACES[nextKey].levels[2]);
  };
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]}
      ariaLabel={`Contour map of z equals ${config.label}, with the level curve z = ${fmt(activeLevel)} highlighted.`}
      top={<Toggle label="Surface" active={surfaceKey} onPick={pickSurface} options={(Object.keys(SURFACES) as SurfaceKey[]).map((key) => ({ key, label: SURFACES[key].label }))} />}
      explore={<Slider label="Height c" value={exploreLevel} min={config.range[0]} max={config.range[1]} step={0.5} onInput={setExploreLevel} />}>
      <SketchAxes frame={frame} id={`axes-${surfaceKey}`} xTicks={config.ticks} yTicks={config.ticks} xLabel="x" yLabel="y" hideZero />
      <g clip-path={sketch.clip(0)}>
        {visibleLevels.map(({ path }) => <path d={path} style={`fill:none;stroke:${MARKER.blue};stroke-width:1.4;opacity:0.5;stroke-linecap:round`} />)}
        <path d={activePath} class="sk-fade" key={`${surfaceKey}-${activeLevel}`} style={`fill:none;stroke:${ACCENT};stroke-width:3;stroke-linecap:round`} />
      </g>
      <Note x={frame.right - 4} y={frame.top + 13} text={`z = ${fmt(activeLevel)}`} color={ACCENT} anchor="end" size={19} />
      {show(2) && step === 2 && <Note x={frame.left + 5} y={frame.bottom - 7} text="seen from above" color={INK_MUTED} size={16} />}
    </SketchGraph>
  );
}
