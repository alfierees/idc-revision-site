import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, SketchGraph, SketchAxes, InkCurve, InkDashed, Note, Dot, Ring, Presets, curvePoints, fmt, clamp, INK, ACCENT, MARKER } from "./sketch";

// Lesson 1: finding the global extremum of f(x) = x³ + 3x² − 9x − 7 without
// graphing. Candidates are the critical points inside the interval plus the
// ends, and an open end can stop a maximum from existing at all.

const cubic = (x: number) => x ** 3 + 3 * x ** 2 - 9 * x - 7;
const CRITICAL_POINTS = [-3, 1];

const NOTES = [
  "f(x) = x³ + 3x² − 9x − 7. Where are its highest and lowest values? It depends on the domain.",
  "Step 1: find the critical points. f′(x) = 3(x + 3)(x − 1) = 0 at x = −3 and x = 1.",
  "Take the closed interval [−2, 2]. Only x = 1 is inside it. Step 2: evaluate the ends too.",
  "Step 3: compare the candidates. The highest is the global max, the lowest is the global min.",
  "Now [−2, 4). The curve climbs toward 69 at x = 4, but x = 4 is excluded, so there is no global max.",
  "Your turn. Drag either end of the interval and watch which candidate wins.",
];

export default function MathsBGlobalExtrema(): VNode {
  const [exploreStart, setExploreStart] = useState(-2);
  const [exploreEnd, setExploreEnd] = useState(2);
  const sketch = useSketch({
    stepCount: NOTES.length,
    domains: [{ xMin: -5, xMax: 5, yMin: -25, yMax: 75 }],
    aspect: 0.7, minHeight: 300, maxHeight: 420, padding: { left: 40, bottom: 34, top: 18 },
  });
  const { show, drawNow, step } = sketch;
  const frame = sketch.frames[0];
  const intervalStart = step === 5 ? exploreStart : -2;
  const intervalEnd = step === 4 ? 4 : step === 5 ? exploreEnd : 2;
  const endIsOpen = step === 4;
  const insideCritical = CRITICAL_POINTS.filter((point) => point > intervalStart && point < intervalEnd);
  const candidates = [intervalStart, ...insideCritical, ...(endIsOpen ? [] : [intervalEnd])];
  const candidateValues = candidates.map(cubic);
  const highest = Math.max(...candidateValues), lowest = Math.min(...candidateValues);
  const maxPoint = candidates[candidateValues.indexOf(highest)], minPoint = candidates[candidateValues.indexOf(lowest)];
  const hasNoMax = endIsOpen && cubic(intervalEnd) > highest;

  const TEX = [
    "f(x) = x^3 + 3x^2 - 9x - 7",
    "f'(x) = 3x^2 + 6x - 9 = 3(x+3)(x-1) = 0",
    "f(-2) = 15,\\quad f(1) = -12,\\quad f(2) = -5",
    "\\max_{[-2,2]} f = 15 \\text{ at } x=-2,\\quad \\min_{[-2,2]} f = -12 \\text{ at } x=1",
    "\\text{on } [-2,4):\\ \\min f = -12,\\ \\text{no global max } (f \\to 69)",
    `\\text{on } [${fmt(intervalStart)}, ${fmt(intervalEnd)}]:\\ \\max = ${fmt(highest)} \\text{ at } x=${fmt(maxPoint)},\\ \\min = ${fmt(lowest)} \\text{ at } x=${fmt(minPoint)}`,
  ];

  const parts: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={[-4, -2, 2, 4]} yTicks={[-20, 20, 40, 60]} xLabel="x" yLabel="y" hideZero />];
  parts.push(<g clip-path={sketch.clip(0)}><InkCurve points={curvePoints(frame, cubic, -5, 5, 90)} id="cubic" color={MARKER.grey} width={1.8} /></g>);
  if (show(2)) {
    parts.push(<g clip-path={sketch.clip(0)}><InkCurve points={curvePoints(frame, cubic, intervalStart, intervalEnd, 60)} id={`active-${intervalStart}-${intervalEnd}`} color={MARKER.blue} width={3} draw={drawNow(2) || drawNow(4)} /></g>);
    for (const end of [intervalStart, intervalEnd]) {
      parts.push(<InkDashed x1={frame.x(end)} y1={frame.bottom} x2={frame.x(end)} y2={frame.y(clamp(cubic(end), -25, 75))} id={`end-${end}`} color={MARKER.blue} width={1.3} />);
    }
  }
  if (show(1) && step < 5) {
    for (const point of CRITICAL_POINTS) {
      const isInside = !show(2) || (point > intervalStart && point < intervalEnd);
      parts.push(<Dot x={frame.x(point)} y={frame.y(cubic(point))} color={isInside ? ACCENT : MARKER.grey} radius={5} draw={drawNow(1)} />);
      if (step === 1) parts.push(<Note x={frame.x(point)} y={frame.y(cubic(point)) + (point < 0 ? -12 : 24)} text={`x = ${point}`} color={ACCENT} anchor="middle" size={17} draw={drawNow(1)} />);
    }
  }
  if (show(2)) {
    parts.push(<Dot x={frame.x(intervalStart)} y={frame.y(cubic(intervalStart))} color={MARKER.blue} radius={5} />);
    if (endIsOpen) parts.push(<Dot x={frame.x(intervalEnd)} y={frame.y(cubic(intervalEnd))} color={MARKER.red} radius={5} hollow />);
    else parts.push(<Dot x={frame.x(intervalEnd)} y={frame.y(cubic(intervalEnd))} color={MARKER.blue} radius={5} />);
  }
  if (step >= 3) {
    if (!hasNoMax) {
      parts.push(<Ring x={frame.x(maxPoint)} y={frame.y(highest)} id={`max-${maxPoint}`} color={MARKER.green} radius={12} draw={drawNow(step)} />);
      parts.push(<Note x={frame.x(maxPoint) + 15} y={frame.y(highest) - 6} text="max" color={MARKER.green} size={18} />);
    } else {
      parts.push(<Note x={frame.x(intervalEnd) - 8} y={frame.y(cubic(intervalEnd)) + 4} text="not included" color={MARKER.red} anchor="end" size={17} draw={drawNow(4)} />);
    }
    parts.push(<Ring x={frame.x(minPoint)} y={frame.y(lowest)} id={`min-${minPoint}`} color={MARKER.purple} radius={12} draw={drawNow(step)} />);
    parts.push(<Note x={frame.x(minPoint)} y={frame.y(lowest) + 27} text="min" color={MARKER.purple} anchor="middle" size={18} />);
  }
  if (step === 5) {
    parts.push(sketch.handle({ key: "start", x: exploreStart, y: cubic(exploreStart), axis: "x", hint: "none", onDrag: (dataX) => setExploreStart(Math.round(clamp(dataX, -4.5, exploreEnd - 0.5) * 10) / 10) }));
    parts.push(sketch.handle({ key: "end", x: exploreEnd, y: cubic(exploreEnd), axis: "x", hint: "none", onDrag: (dataX) => setExploreEnd(Math.round(clamp(dataX, exploreStart + 0.5, 4.2) * 10) / 10) }));
    parts.push(<Note x={frame.left + 8} y={frame.top + 12} text="drag the two ends" color={INK} size={17} />);
  }

  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]}
      ariaLabel={`Cubic on the interval from ${fmt(intervalStart)} to ${fmt(intervalEnd)}: lowest value ${fmt(lowest)}${hasNoMax ? ", no global maximum" : `, highest value ${fmt(highest)}`}.`}
      explore={<Presets presets={[
        { label: "[−2, 2]", apply: () => { setExploreStart(-2); setExploreEnd(2); } },
        { label: "[−4, 2]", apply: () => { setExploreStart(-4); setExploreEnd(2); } },
        { label: "[0, 3]", apply: () => { setExploreStart(0); setExploreEnd(3); } },
      ]} />}>
      {parts}
    </SketchGraph>
  );
}
