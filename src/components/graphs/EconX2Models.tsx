import { useState } from "preact/hooks";
import type { VNode } from "preact";
import {
  useSketch, useGlide, SketchGraph, SketchAxes, InkCurve, InkDashed, Note, Dot, Toggle, Slider,
  curvePoints, fmt, MARKER,
} from "./sketch";

// Intro to Econometrics, 2024 Moed A Part B (Q10 to Q14): four ways to let Y
// depend on X2, and "which plot matches which model".
//   type: econ-x2-models
// Model 1 linear; model 2 two dummies (X2 < 25, X2 > 75) = a step function;
// model 3 the dummies plus their interactions with X2 = a different line in
// each region; model 4 a quadratic. X1 and X3 are set to 0, as in the key's
// Q11 predictions. Steps: one model each → explore (slide X2, read every
// model's prediction and marginal effect).

type Key = "m1" | "m2" | "m3" | "m4";
interface Model { key: Key; label: string; color: string; y: (x: number) => number; me: (x: number) => string; tex: string; }

const L = (x: number) => (x < 25 ? 1 : 0), H = (x: number) => (x > 75 ? 1 : 0);
const MODELS: Model[] = [
  {
    key: "m1", label: "(1) linear", color: MARKER.blue,
    y: (x) => 989.918 - 8.519 * x,
    me: () => "-8.52",
    tex: "\\hat Y = 989.9 - 8.52\\,X2\\quad(\\text{one slope everywhere})",
  },
  {
    key: "m2", label: "(2) dummies", color: MARKER.amber,
    y: (x) => 1082.201 - 651.72 * L(x) - 1305.04 * H(x),
    me: () => "0\\ (\\text{jumps at 25 and 75})",
    tex: "\\hat Y = 1082.2 - 651.7\\,L - 1305.0\\,H\\quad(\\text{three flat levels})",
  },
  {
    key: "m3", label: "(3) + interactions", color: MARKER.green,
    y: (x) => 1640.2766 - 10.8413 * x + L(x) * (-1791.992 + 59.9984 * x) + H(x) * (3931.109 - 55.3324 * x),
    me: (x) => (x < 25 ? "-10.84 + 60.00 = 49.15" : x > 75 ? "-10.84 - 55.33 = -66.17" : "-10.84"),
    tex: "\\hat Y = 1640.3 - 10.84\\,X2 - 1792.0\\,L + 60.0\\,L{\\cdot}X2 + 3931.1\\,H - 55.3\\,H{\\cdot}X2",
  },
  {
    key: "m4", label: "(4) quadratic", color: MARKER.purple,
    y: (x) => -224.93004 + 69.24973 * x - 0.78464 * x * x,
    me: (x) => `69.25 - 2(0.785)X2 = ${fmt(69.24973 - 2 * 0.78464 * x, 2)}`,
    tex: "\\hat Y = -224.9 + 69.25\\,X2 - 0.785\\,X2^2,\\quad X2^* = \\frac{69.25}{2(0.785)} = 44.1",
  },
];

const NOTES = [
  "Model (1): a straight line. The marginal effect of X2 is the same at every X2.",
  "Model (2): dummies for low (X2 < 25) and high (X2 > 75) X2 move only the intercept, so the fit is three flat steps.",
  "Model (3): add each dummy times X2 and every region gets its own slope as well: three separate lines.",
  "Model (4): a squared term. A negative coefficient on X2² gives an upside-down parabola with its top where the derivative is zero.",
  "Your turn. Slide X2 and read each model's prediction and marginal effect.",
];

export default function EconX2Models(): VNode {
  const [x2, setX2] = useState(50);
  const [focus, setFocus] = useState<Key>("m4");
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMin: 0, xMax: 100, yMin: -1300, yMax: 1900 }], maxWidth: 620, aspect: 0.72, padding: { left: 52, bottom: 40, top: 18 } });
  const { step, show, drawNow, narrow } = sketch;
  const frame = sketch.frames[0];
  const exploring = step === NOTES.length - 1;
  const g = useGlide({ x: x2 }, false);
  const active: Key = exploring ? focus : MODELS[Math.min(step, 3)].key;

  const drawing: VNode[] = [
    <SketchAxes frame={frame} id="x2-axes" xTicks={[0, 25, 50, 75, 100]} yTicks={[-1000, 0, 1000]} xLabel="X2" yLabel="Ŷ" />,
    <InkDashed x1={frame.x(25)} y1={frame.top} x2={frame.x(25)} y2={frame.bottom} id="x2-cut25" color="var(--color-ink-muted)" width={1} dash={3} gap={5} />,
    <InkDashed x1={frame.x(75)} y1={frame.top} x2={frame.x(75)} y2={frame.bottom} id="x2-cut75" color="var(--color-ink-muted)" width={1} dash={3} gap={5} />,
  ];
  const segments: [number, number][] = [[0, 24.999], [25.001, 74.999], [75.001, 100]];
  MODELS.forEach((m, i) => {
    if (!show(i)) return;
    const bold = m.key === active;
    const pieces = m.key === "m2" || m.key === "m3" ? segments : [[0, 100] as [number, number]];
    pieces.forEach(([a, b], j) => {
      drawing.push(
        <g style={`opacity:${bold ? 1 : 0.28}`}>
          <InkCurve points={curvePoints(frame, m.y, a, b, 50)} id={`x2-${m.key}-${j}`} color={m.color} width={bold ? 3 : 2} draw={drawNow(i)} />
        </g>,
      );
    });
    if (bold && !narrow && !exploring) {
      const labelX = m.key === "m4" ? 44 : m.key === "m1" ? 88 : 50;
      drawing.push(<Note x={frame.x(labelX)} y={frame.y(m.y(labelX)) - 12} text={m.label} color={m.color} size={17} anchor="middle" draw={drawNow(i)} />);
    }
  });
  if (step === 3) drawing.push(<Dot x={frame.x(44.13)} y={frame.y(MODELS[3].y(44.13))} color={MARKER.purple} radius={6} />);
  if (exploring) {
    drawing.push(<InkDashed x1={frame.x(g.x)} y1={frame.top} x2={frame.x(g.x)} y2={frame.bottom} id="x2-slider" color={MARKER.red} width={1.6} dash={5} gap={4} />);
    for (const m of MODELS) drawing.push(<Dot x={frame.x(g.x)} y={frame.y(m.y(g.x))} color={m.color} radius={m.key === focus ? 6.5 : 4} />);
  }

  const fm = MODELS.find((m) => m.key === focus)!;
  const TEX = [
    MODELS[0].tex, MODELS[1].tex, MODELS[2].tex, MODELS[3].tex,
    `X2 = ${fmt(x2, 0)}:\\ \\hat Y_{${fm.label.slice(1, 2)}} = ${fmt(fm.y(x2), 2)},\\quad \\frac{\\partial \\hat Y}{\\partial X2} = ${fm.me(x2)}`,
  ];

  return (
    <SketchGraph
      sketch={sketch}
      note={NOTES[step]}
      tex={TEX[step]}
      footnote="2024 Moed A Part B, N = 117. X1 and X3 set to 0, as in the key's Q11 predictions (831.28 at 20, 1098.27 at 50, 277.78 at 80 for model 3)."
      ariaLabel="Four fitted models of Y on X2: a falling line, three flat steps, three separate lines, and an upside-down parabola peaking at X2 = 44.1."
      top={exploring ? <Toggle label="Model" active={focus} onPick={(key) => setFocus(key as Key)} options={MODELS.map((m) => ({ key: m.key, label: m.label }))} /> : undefined}
      explore={<div class="graph-sliders">
        <Slider label="X2" value={x2} min={0} max={100} step={1} onInput={setX2} />
      </div>}
    >
      {drawing}
    </SketchGraph>
  );
}
