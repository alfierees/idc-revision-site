import type { VNode } from "preact";
import { useSketch, SketchGraph, SketchAxes, InkLine, InkDashed, Note, Dot, Ring, INK, ACCENT, MARKER } from "./sketch";

// Micro sample exam 1, Q4: a firm with MC = Q (total output) sells to the
// public (P = 100 − X, so MR = 100 − 2X) and to the government, which pays a
// flat 50 per unit for up to 10 units. The government channel pays 50 while
// MC < 50, so the firm fills it; then MR_public = MC with MC = X_pub + 10:
//   100 − 2X = X + 10 ⇒ X_pub = 30, P_pub = 70, Q = 40, MC = 40 (< 50 ✓).

const NOTES = [
  "The public: demand P = 100 − X, so MR = 100 − 2X.",
  "The government pays a flat 50 a unit, for up to 10 units. That beats MC while MC < 50, so fill it: 10 units.",
  "With the government's 10 units already made, MC for the public is X + 10. Set MR = MC.",
  "Read the public price off demand: 70. Check: total Q = 40, MC = 40 < 50, so filling the cap was right.",
];
const TEX = [
  "P = 100 - X,\\quad MR_{\\text{pub}} = 100 - 2X",
  "X_{\\text{gov}} = 10 \\text{ at } 50",
  "100 - 2X = X + 10 \\;\\Rightarrow\\; X_{\\text{pub}} = 30",
  "P_{\\text{pub}} = 70,\\quad Q = 40,\\quad MC = 40 < 50 \\;\\checkmark",
];

export default function GovernmentChannel(): VNode {
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMax: 100, yMax: 100 }], maxWidth: 640, padding: { left: 40, bottom: 44, top: 22 } });
  const { show, drawNow, step } = sketch;
  const frame = sketch.frames[0];
  const toX = frame.x, toY = frame.y;
  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={[0, 20, 40, 60, 80, 100]} yTicks={[20, 40, 60, 80, 100]} xLabel="public quantity X" yLabel="P" />];
  const plot: VNode[] = [
    <InkLine x1={toX(0)} y1={toY(100)} x2={toX(100)} y2={toY(0)} id="demand" color={MARKER.blue} width={2.4} draw={drawNow(0)} />,
    <InkDashed x1={toX(0)} y1={toY(100)} x2={toX(50)} y2={toY(0)} id="mr" color={MARKER.purple} width={1.9} draw={drawNow(0)} />,
  ];
  if (show(1)) plot.push(<InkDashed x1={frame.left} y1={toY(50)} x2={frame.right} y2={toY(50)} id="gov" color={MARKER.green} width={2} draw={drawNow(1)} />);
  if (show(2)) plot.push(<InkLine x1={toX(0)} y1={toY(10)} x2={toX(90)} y2={toY(100)} id="mc" color={MARKER.red} width={2.3} draw={drawNow(2)} />);
  if (show(3)) {
    plot.push(<InkDashed x1={toX(30)} y1={toY(40)} x2={toX(30)} y2={toY(70)} id="up" color={INK} width={1.3} dash={4} gap={4} draw={drawNow(3)} />);
    plot.push(<InkDashed x1={toX(30)} y1={toY(70)} x2={frame.left} y2={toY(70)} id="left" color={INK} width={1.3} dash={4} gap={4} delay={250} draw={drawNow(3)} />);
  }
  drawing.push(<g clip-path={sketch.clip()}>{plot}</g>);
  drawing.push(<Note x={toX(84)} y={toY(16) - 10} text="public demand" color={MARKER.blue} anchor="middle" size={18} draw={drawNow(0)} />);
  drawing.push(<Note x={toX(44) + 8} y={toY(12)} text="MR" color={MARKER.purple} size={18} draw={drawNow(0)} />);
  if (show(1)) drawing.push(<Note x={frame.right - 4} y={toY(50) - 8} text="government pays 50 (max 10 units)" color={MARKER.green} anchor="end" size={17} draw={drawNow(1)} />);
  if (show(2)) {
    drawing.push(<Note x={toX(70)} y={toY(80) + 4} text="MC = X + 10" color={MARKER.red} size={18} draw={drawNow(2)} />);
    drawing.push(<Ring x={toX(30)} y={toY(40)} id="ring" color={ACCENT} draw={drawNow(2)} />);
    drawing.push(<Note x={toX(30) + 14} y={toY(40) + 22} text="MR = MC at X = 30" color={ACCENT} size={17} delay={300} draw={drawNow(2)} />);
  }
  if (show(3)) {
    drawing.push(<Dot x={toX(30)} y={toY(70)} color={INK} draw={drawNow(3)} />);
    drawing.push(<Note x={frame.left + 6} y={toY(70) - 8} text="P = 70" color={INK} size={19} delay={400} draw={drawNow(3)} />);
  }
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} ariaLabel="Selling to the government at 50 up to 10 units and to the public at 70 for 30 units.">
      {drawing}
    </SketchGraph>
  );
}
