import { useMemo, useState } from "preact/hooks";
import type { VNode } from "preact";
import { Slider } from "./plot";
import { useSketch, SketchGraph, SketchAxes, InkCurve, Note, Dot, Scatter, Presets, curvePoints, fmt, MARKER, INK_SOFT, ACCENT } from "./sketch";
import { normalSampler } from "./stats";

// Bias–variance and polynomial degree (ML Lectures 2 and 4), simulated.
// 15 training points from y = sin(1.5πx) + noise on [0, 1], and 200 fresh test
// points from the same process. Fit a degree-d polynomial by least squares
// (optionally with a ridge penalty λ) and compare training and test error.

const truth = (x: number) => Math.sin(1.5 * Math.PI * x);
const draw = normalSampler(1618);
const TRAIN = Array.from({ length: 15 }, (_, index) => { const x = (index + 0.5) / 15; return { x, y: truth(x) + draw() * 0.25 }; });
const TEST = Array.from({ length: 200 }, (_, index) => { const x = ((index * 0.6180339887) % 1); return { x, y: truth(x) + draw() * 0.25 }; });

// Fit on x scaled to [−1, 1] for numerical stability; solve (XᵀX + λI)β = Xᵀy.
function fitPolynomial(degree: number, ridge: number) {
  const size = degree + 1;
  const scaled = (x: number) => 2 * x - 1;
  const matrix = Array.from({ length: size }, () => new Array(size).fill(0));
  const vector = new Array(size).fill(0);
  for (const point of TRAIN) {
    const powers = Array.from({ length: size }, (_, power) => Math.pow(scaled(point.x), power));
    for (let row = 0; row < size; row++) {
      vector[row] += powers[row] * point.y;
      for (let column = 0; column < size; column++) matrix[row][column] += powers[row] * powers[column];
    }
  }
  for (let index = 1; index < size; index++) matrix[index][index] += ridge + 1e-9;
  // Gaussian elimination with partial pivoting
  for (let pivot = 0; pivot < size; pivot++) {
    let best = pivot;
    for (let row = pivot + 1; row < size; row++) if (Math.abs(matrix[row][pivot]) > Math.abs(matrix[best][pivot])) best = row;
    [matrix[pivot], matrix[best]] = [matrix[best], matrix[pivot]];
    [vector[pivot], vector[best]] = [vector[best], vector[pivot]];
    for (let row = pivot + 1; row < size; row++) {
      const factor = matrix[row][pivot] / matrix[pivot][pivot];
      for (let column = pivot; column < size; column++) matrix[row][column] -= factor * matrix[pivot][column];
      vector[row] -= factor * vector[pivot];
    }
  }
  const coefficients = new Array(size).fill(0);
  for (let row = size - 1; row >= 0; row--) {
    let total = vector[row];
    for (let column = row + 1; column < size; column++) total -= matrix[row][column] * coefficients[column];
    coefficients[row] = total / matrix[row][row];
  }
  const predict = (x: number) => coefficients.reduce((total, coefficient, power) => total + coefficient * Math.pow(scaled(x), power), 0);
  const meanSquared = (points: { x: number; y: number }[]) => points.reduce((total, point) => total + (predict(point.x) - point.y) ** 2, 0) / points.length;
  return { predict, trainError: meanSquared(TRAIN), testError: meanSquared(TEST) };
}

const DEGREES = Array.from({ length: 13 }, (_, degree) => degree);
const CURVES = DEGREES.map((degree) => fitPolynomial(degree, 0));

const NOTES = [
  "15 training points from a smooth curve plus noise (simulated).",
  "Degree 1, a straight line: too simple. High bias, it misses the shape (underfitting).",
  "Degree 3: follows the real shape without chasing the noise.",
  "Degree 12: threads every training point, wiggling wildly between them. High variance (overfitting).",
  "Training error only ever falls with complexity; error on new data is U-shaped. Pick the bottom.",
  "Your turn. Change the degree, then add a ridge penalty λ to tame the wiggles.",
];

export default function BiasVariance(): VNode {
  const [explore, setExplore] = useState({ degree: 12, ridge: 0 });
  const sketch = useSketch({
    stepCount: NOTES.length,
    domains: [{ xMax: 1, yMin: -1.9, yMax: 1.9 }, { xMax: 12, yMax: 0.35 }],
    aspect: 0.82, minHeight: 250, maxHeight: 320, maxWidth: 760, padding: { left: 40, bottom: 40, top: 16 },
    panelTitles: ["The fit", "Error by degree"],
  });
  const { show, drawNow, step } = sketch;
  const [fitFrame, errorFrame] = sketch.frames;
  const degree = step === 1 ? 1 : step === 2 ? 3 : step === 3 || step === 4 ? 12 : step === 5 ? explore.degree : 0;
  const ridge = step === 5 ? explore.ridge : 0;
  const model = useMemo(() => fitPolynomial(degree, ridge), [degree, ridge]);
  const bestDegree = DEGREES.reduce((best, candidate) => (CURVES[candidate].testError < CURVES[best].testError ? candidate : best), 1);

  const TEX = [
    "y = \\sin(1.5\\pi x) + \\varepsilon",
    ...[1, 3, 12].map((shown) => `d = ${shown}:\\; \\text{train MSE } ${fmt(CURVES[shown].trainError, 3)},\\; \\text{test MSE } ${fmt(CURVES[shown].testError, 3)}`),
    `\\text{best test error at } d = ${bestDegree}`,
    `d = ${degree},\\; \\lambda = ${fmt(ridge, 3)}:\\; \\text{train } ${fmt(model.trainError, 3)},\\; \\text{test } ${fmt(model.testError, 3)}`,
  ];
  const fitParts: VNode[] = [<SketchAxes frame={fitFrame} id="fit-axes" xTicks={[0, 0.5, 1]} yTicks={[-1, 0, 1]} hideZero={false} />];
  fitParts.push(<InkCurve points={curvePoints(fitFrame, truth, 0, 1, 50)} id="truth" color={MARKER.green} width={1.4} dashed />);
  fitParts.push(<Scatter points={TRAIN.map((point) => [fitFrame.x(point.x), fitFrame.y(point.y)])} color={INK_SOFT} radius={3.5} opacity={0.85} draw={drawNow(0)} />);
  if (degree > 0) fitParts.push(<g clip-path={sketch.clip(0)}><InkCurve points={curvePoints(fitFrame, model.predict, 0, 1, 120)} id={`fit-${degree}-${ridge}`} color={ACCENT} width={2.4} draw={drawNow(step)} /></g>);
  fitParts.push(<Note x={fitFrame.right - 4} y={fitFrame.top + 10} text={degree > 0 ? `degree ${degree}` : "truth (dashed)"} color={degree > 0 ? ACCENT : MARKER.green} anchor="end" size={19} />);

  const errorParts: VNode[] = [<SketchAxes frame={errorFrame} id="error-axes" xTicks={[0, 3, 6, 9, 12]} yTicks={[0.1, 0.2, 0.3]} xLabel="degree" yLabel="MSE" />];
  if (show(4)) {
    const clip = (value: number) => Math.min(value, 0.35);
    errorParts.push(<InkCurve points={DEGREES.slice(1).map((shown) => [errorFrame.x(shown), errorFrame.y(clip(CURVES[shown].trainError))] as [number, number])} id="train-error" color={MARKER.blue} width={2.2} draw={drawNow(4)} />);
    errorParts.push(<InkCurve points={DEGREES.slice(1).map((shown) => [errorFrame.x(shown), errorFrame.y(clip(CURVES[shown].testError))] as [number, number])} id="test-error" color={MARKER.red} width={2.2} delay={300} draw={drawNow(4)} />);
    errorParts.push(<Note x={errorFrame.x(11.5)} y={errorFrame.y(clip(CURVES[11].trainError)) - 8} text="training" color={MARKER.blue} anchor="end" size={17} />);
    errorParts.push(<Note x={errorFrame.x(8)} y={errorFrame.y(clip(CURVES[8].testError)) - 12} text="new data" color={MARKER.red} anchor="middle" size={17} />);
    errorParts.push(<Dot x={errorFrame.x(bestDegree)} y={errorFrame.y(clip(CURVES[bestDegree].testError))} color={MARKER.green} />);
    if (degree > 0) errorParts.push(<Dot x={errorFrame.x(degree)} y={errorFrame.y(clip(model.testError))} color={ACCENT} radius={4} />);
  } else {
    errorParts.push(<Note x={(errorFrame.left + errorFrame.right) / 2} y={(errorFrame.top + errorFrame.bottom) / 2} text="(step 5)" color={INK_SOFT} anchor="middle" size={18} />);
  }
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} footnote="Simulated: 15 training points, 200 test points."
      ariaLabel={`Polynomial degree ${degree}: training error ${fmt(model.trainError, 3)}, test error ${fmt(model.testError, 3)}. Best test error at degree ${bestDegree}.`}
      explore={<>
        <div class="graph-sliders">
          <Slider label="degree d" value={explore.degree} min={1} max={12} step={1} onInput={(value) => setExplore((state) => ({ ...state, degree: value }))} />
          <Slider label="ridge λ" value={explore.ridge} min={0} max={0.1} step={0.005} onInput={(value) => setExplore((state) => ({ ...state, ridge: value }))} />
        </div>
        <Presets presets={[{ label: "Overfit, no penalty", apply: () => setExplore({ degree: 12, ridge: 0 }) }, { label: "Overfit + ridge", apply: () => setExplore({ degree: 12, ridge: 0.01 }) }, { label: "Just right", apply: () => setExplore({ degree: bestDegree, ridge: 0 }) }]} />
      </>}>
      <g>{fitParts}</g>
      <g>{errorParts}</g>
    </SketchGraph>
  );
}
