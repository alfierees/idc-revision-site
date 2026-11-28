import { useMemo, useState } from "preact/hooks";
import type { VNode } from "preact";
import {
  useSketch, SketchGraph, SketchAxes, InkLine, Scatter, Note, Toggle,
  fmt, seededRandom, MARKER, INK_SOFT,
} from "./sketch";

// Intro to Econometrics, Lec 12 and 2026 Moed A Q14 to Q16: spotting
// heteroskedasticity and fixing it with weighted least squares.
//   type: econ-heteroskedasticity
// Simulated data y = 1 + 2x + u with Var(u | x) = σ²·h(x). Steps: the fan
// in the scatter → squared residuals against x (the plot the exam shows) →
// divide everything by √h: the transformed errors have constant spread →
// explore (true variance form against the weight you choose).

type Form = "x" | "x2";
const N = 90;

function simulate(form: Form): { x: number; y: number; z: number }[] {
  const rand = seededRandom(form === "x" ? 11 : 23);
  const out: { x: number; y: number; z: number }[] = [];
  for (let i = 0; i < N; i++) {
    const x = 0.3 + 3.7 * rand();
    const r1 = Math.max(rand(), 1e-9), r2 = rand();
    const z = Math.sqrt(-2 * Math.log(r1)) * Math.cos(2 * Math.PI * r2);
    const sd = form === "x2" ? 1.1 * x : 1.9 * Math.sqrt(x);
    out.push({ x, y: 1 + 2 * x + sd * z, z });
  }
  return out;
}
function ols(points: { x: number; y: number }[]): { b0: number; b1: number } {
  const n = points.length;
  const mx = points.reduce((s, p) => s + p.x, 0) / n, my = points.reduce((s, p) => s + p.y, 0) / n;
  let sxy = 0, sxx = 0;
  for (const p of points) { sxy += (p.x - mx) * (p.y - my); sxx += (p.x - mx) ** 2; }
  const b1 = sxy / sxx;
  return { b0: my - b1 * mx, b1 };
}

const NOTES = [
  "OLS through data whose spread fans out as x grows. The line is still unbiased (A1 and A2 hold), but A4 fails.",
  "Plot the squared residuals against the regressor. They grow with x: the error variance is a function of x. This is the plot in 2026 A Q14.",
  "If Var(u | x) = σ²·h(x), divide every term, the intercept's column of 1s too, by √h. The new errors u/√h have constant variance, and OLS on the new model is WLS: unbiased and efficient again.",
  "Your turn. Pick the true variance form and the weight you divide by. The wrong weight leaves a pattern.",
];

export default function EconHeteroskedasticity(): VNode {
  const [truth, setTruth] = useState<Form>("x2");
  const [weight, setWeight] = useState<Form>("x2");
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMin: 0, xMax: 4.2, yMax: 1 }], maxWidth: 600, aspect: 0.66, padding: { left: 48, bottom: 40, top: 18 } });
  const { step, drawNow } = sketch;
  const exploring = step === NOTES.length - 1;
  const form: Form = exploring ? truth : "x2";
  const wForm: Form = exploring ? weight : "x2";
  const data = useMemo(() => simulate(form), [form]);
  const fit = useMemo(() => ols(data), [data]);
  const base = sketch.frames[0];

  const view = step === 0 ? "scatter" : step === 1 ? "sq" : "wls";
  let yMin = 0, yMax = 1, yTicks: number[] = [];
  let pts: [number, number][] = [];
  if (view === "scatter") {
    yMin = -6; yMax = 18; yTicks = [-5, 0, 5, 10, 15];
    pts = data.map((p) => [p.x, p.y]);
  } else if (view === "sq") {
    const sq = data.map((p) => (p.y - fit.b0 - fit.b1 * p.x) ** 2);
    yMax = Math.max(...sq) * 1.05; yTicks = [0, Math.round(yMax / 2 / 10) * 10 || 5];
    pts = data.map((p, i) => [p.x, sq[i]]);
  } else {
    yMin = -5; yMax = 5; yTicks = [-4, -2, 0, 2, 4];
    const sdTrue = (x: number) => (form === "x2" ? 1.1 * x : 1.9 * Math.sqrt(x));
    const root = (x: number) => (wForm === "x2" ? x : Math.sqrt(x));
    pts = data.map((p) => [p.x, (sdTrue(p.x) * p.z) / root(p.x)]);
  }
  const frame = {
    ...base, yMin, yMax,
    y: (value: number) => base.bottom - ((value - yMin) / (yMax - yMin)) * (base.bottom - base.top),
  };

  const drawing: VNode[] = [
    <SketchAxes frame={frame} id={`het-axes-${view}`} xTicks={[0, 1, 2, 3, 4]} yTicks={yTicks} xLabel="x" yLabel={view === "scatter" ? "y" : view === "sq" ? "û²" : "u/√h"} />,
    <Scatter points={pts.map(([x, y]) => [frame.x(x), frame.y(Math.max(yMin, Math.min(yMax, y)))])} color={view === "wls" ? MARKER.green : MARKER.blue} radius={3} opacity={0.6} draw />,
  ];
  if (view === "scatter") {
    drawing.push(<InkLine x1={frame.x(0)} y1={frame.y(fit.b0)} x2={frame.x(4.2)} y2={frame.y(fit.b0 + fit.b1 * 4.2)} id="het-ols" color={MARKER.red} width={2.6} draw={drawNow(0)} />);
    drawing.push(<Note x={frame.x(3.3)} y={frame.y(fit.b0 + fit.b1 * 3.3) + 26} text="OLS" color={MARKER.red} size={17} />);
  }
  if (view === "wls") {
    drawing.push(<InkLine x1={frame.x(0)} y1={frame.y(0)} x2={frame.x(4.2)} y2={frame.y(0)} id="het-zero" color={INK_SOFT} width={1.2} />);
  }

  const hTex = (f: Form) => (f === "x2" ? "x^2" : "x");
  const TEX = [
    `\\hat y = ${fmt(fit.b0, 2)} + ${fmt(fit.b1, 2)}\\,x\\quad(\\text{true: } 1 + 2x),\\quad \\operatorname{Var}(u \\mid x) = \\sigma^2 x^2`,
    `\\hat u_i^2 \\text{ rises with } x_i \\Rightarrow \\operatorname{Var}(u \\mid x) \\text{ depends on } x \\Rightarrow \\text{A4 fails}`,
    `h = x^2,\\ \\sqrt h = x:\\quad \\frac{y}{x} = \\beta_0\\frac{1}{x} + \\beta_1 + \\frac{u}{x},\\quad \\operatorname{Var}\\!\\left(\\tfrac{u}{x}\\right) = \\sigma^2`,
    `\\text{true } h = ${hTex(form)},\\ \\text{divide by } \\sqrt{${hTex(wForm)}}:\\ \\operatorname{Var}\\!\\left(\\tfrac{u}{\\sqrt{${hTex(wForm)}}}\\right) = \\sigma^2${form === wForm ? "" : "\\," + (form === "x2" ? "x" : "\\tfrac{1}{x}")}`,
  ];

  return (
    <SketchGraph
      sketch={sketch}
      note={NOTES[step]}
      tex={TEX[step]}
      footnote="Simulated data, 90 points. With the right weight the transformed errors sit in a band of constant width around 0."
      ariaLabel="Heteroskedastic scatter with an OLS line, squared residuals growing with x, and the WLS-transformed errors with constant spread."
      top={exploring ? <div>
        <Toggle label="True variance" active={truth} onPick={(key) => setTruth(key as Form)} options={[{ key: "x", label: "Var ∝ x" }, { key: "x2", label: "Var ∝ x²" }]} />
        <Toggle label="Divide by" active={weight} onPick={(key) => setWeight(key as Form)} options={[{ key: "x", label: "√x" }, { key: "x2", label: "x" }]} />
      </div> : undefined}
    >
      {drawing}
    </SketchGraph>
  );
}
