import { useState } from "preact/hooks";
import type { VNode } from "preact";
import {
  useSketch, SketchGraph, SketchAxes, InkBar, InkDashed, Note, Presets, Toggle, Slider,
  niceTicks, fmt, MARKER, WASH, ACCENT,
} from "./sketch";
import { binomialPmf, geometricPmf, poissonPmf, hypergeometricPmf } from "./StatsKit";

// Statistics A, Lec 06 and 07: the four named discrete shapes the exam uses
// (Q9 to Q12 of every paper). Bars are the PMF; then E(X) as the balance point;
// then one SD either side; then explore the parameters and pick a value k.

type Dist = "binomial" | "geometric" | "poisson" | "hypergeometric";
interface Props { dist?: string; n?: number; p?: number; lambda?: number; N?: number; D?: number; k?: number; }

const LABELS: Record<Dist, string> = { binomial: "Binomial", geometric: "Geometric", poisson: "Poisson", hypergeometric: "Hypergeometric" };
const STORY: Record<Dist, string> = {
  binomial: "Successes in n independent tries, each with chance p.",
  geometric: "Tries until the FIRST success (counting it), chance p each try.",
  poisson: "Events in a fixed interval at rate λ. Rescale λ to the interval asked.",
  hypergeometric: "Successes in a sample of n drawn WITHOUT replacement from N items, D of them successes.",
};

interface Params { n: number; p: number; lambda: number; N: number; D: number; }

function describe(dist: Dist, { n, p, lambda, N, D }: Params) {
  if (dist === "binomial") {
    const ks = Array.from({ length: n + 1 }, (_, k) => k);
    return { ks, pmf: (k: number) => binomialPmf(k, n, p), mean: n * p, variance: n * p * (1 - p),
      name: `B(${n},\\ ${fmt(p, 2)})`, formula: (k: number) => `\\binom{${n}}{${k}}(${fmt(p, 2)})^{${k}}(${fmt(1 - p, 2)})^{${n - k}}`,
      meanTex: `np = ${fmt(n * p, 3)}`, varTex: `np(1-p) = ${fmt(n * p * (1 - p), 3)}` };
  }
  if (dist === "geometric") {
    let kMax = 1;
    while ((1 - p) ** kMax > 0.01 && kMax < 40) kMax++;
    const ks = Array.from({ length: kMax }, (_, index) => index + 1);
    return { ks, pmf: (k: number) => geometricPmf(k, p), mean: 1 / p, variance: (1 - p) / (p * p),
      name: `G(${fmt(p, 2)})`, formula: (k: number) => `(${fmt(1 - p, 2)})^{${k - 1}} \\cdot ${fmt(p, 2)}`,
      meanTex: `\\tfrac1p = ${fmt(1 / p, 3)}`, varTex: `\\tfrac{1-p}{p^2} = ${fmt((1 - p) / (p * p), 3)}` };
  }
  if (dist === "poisson") {
    const kMax = Math.ceil(lambda + 4 * Math.sqrt(lambda) + 2);
    const ks = Array.from({ length: kMax + 1 }, (_, k) => k);
    return { ks, pmf: (k: number) => poissonPmf(k, lambda), mean: lambda, variance: lambda,
      name: `P(${fmt(lambda, 2)})`, formula: (k: number) => `e^{-${fmt(lambda, 2)}}\\frac{${fmt(lambda, 2)}^{${k}}}{${k}!}`,
      meanTex: `\\lambda = ${fmt(lambda, 3)}`, varTex: `\\lambda = ${fmt(lambda, 3)}` };
  }
  const sample = Math.min(n, N);
  const low = Math.max(0, sample - (N - D)), high = Math.min(sample, D);
  const ks = Array.from({ length: high - low + 1 }, (_, index) => low + index);
  const share = D / N;
  const variance = ((N - sample) / Math.max(1, N - 1)) * sample * share * (1 - share);
  return { ks, pmf: (k: number) => hypergeometricPmf(k, N, D, sample), mean: sample * share, variance,
    name: `HG(${N},\\ ${D},\\ ${sample})`, formula: (k: number) => `\\frac{\\binom{${D}}{${k}}\\binom{${N - D}}{${sample - k}}}{\\binom{${N}}{${sample}}}`,
    meanTex: `n\\tfrac{D}{N} = ${fmt(sample * share, 3)}`, varTex: `\\tfrac{N-n}{N-1}\\,n\\tfrac DN\\left(1-\\tfrac DN\\right) = ${fmt(variance, 3)}` };
}

const NOTES = [
  "Each bar is P(X = k). The bars add up to 1.",
  "The expected value is the balance point of the bars.",
  "One standard deviation either side of the mean: the typical spread.",
  "Your turn. Change the parameters, and slide k to read off P(X = k).",
];

export default function StatsDiscreteDist(props: Props): VNode {
  const startDist = (Object.keys(LABELS).includes(props.dist ?? "") ? props.dist : "binomial") as Dist;
  const initial: Params = { n: props.n ?? 20, p: props.p ?? 0.25, lambda: props.lambda ?? 4, N: props.N ?? 50, D: props.D ?? 10 };
  const [dist, setDist] = useState<Dist>(startDist);
  const [params, setParams] = useState<Params>(initial);
  const [pick, setPick] = useState(props.k ?? 3);
  const spec = describe(dist, params);
  const kFirst = spec.ks[0], kLast = spec.ks[spec.ks.length - 1];
  const probabilities = spec.ks.map(spec.pmf);
  const top = Math.max(...probabilities);
  const yMax = top * 1.25;
  const sketch = useSketch({
    stepCount: NOTES.length,
    domains: [{ xMin: kFirst - 0.7, xMax: kLast + 0.7, yMax }],
    padding: { left: 46, bottom: 46, top: 22 },
    aspect: 0.55,
  });
  const frame = sketch.frames[0];
  const { step, narrow } = sketch;
  const show = sketch.show, drawNow = sketch.drawNow;
  const exploring = step === NOTES.length - 1;
  const k = Math.min(kLast, Math.max(kFirst, Math.round(pick)));
  const sd = Math.sqrt(spec.variance);
  const pK = spec.pmf(k);
  const cumulative = spec.ks.filter((value) => value <= k).reduce((sum, value) => sum + spec.pmf(value), 0);
  const halfWidth = spec.ks.length > 30 ? 0.42 : 0.34;

  const bars: VNode[] = spec.ks.map((value, index) => {
    const highlighted = exploring && value === k;
    return <InkBar frame={frame} fromX={value - halfWidth} toX={value + halfWidth} value={probabilities[index]} id={`${sketch.uid}-bar-${dist}-${value}`}
      color={highlighted ? MARKER.red : MARKER.blue} wash={highlighted ? WASH.red : WASH.blue} delay={Math.min(index, 24) * 30} draw={drawNow(0)} />;
  });
  const drawing: VNode[] = [];
  const labelEvery = Math.ceil(spec.ks.length / (narrow ? 6 : 12));
  drawing.push(<SketchAxes frame={frame} id="pmf-axes" xTicks={spec.ks.filter((value, index) => index % labelEvery === 0)} yTicks={niceTicks(0, yMax, 4)} formatTick={(value) => fmt(value, 3)} xLabel="k" />);
  drawing.push(<g clip-path={sketch.clip()}>{bars}</g>);
  if (show(1)) {
    drawing.push(<InkDashed x1={frame.x(spec.mean)} y1={frame.top} x2={frame.x(spec.mean)} y2={frame.bottom} id={`mean-${dist}`} color={ACCENT} width={2} dash={6} gap={4} draw={drawNow(1)} />);
    drawing.push(<Note x={frame.x(spec.mean) + 6} y={frame.top + 12} text={`E(X) = ${fmt(spec.mean, 2)}`} color={ACCENT} size={17} draw={drawNow(1)} />);
  }
  if (step === 2) {
    const left = Math.max(frame.left, frame.x(spec.mean - sd)), right = Math.min(frame.right, frame.x(spec.mean + sd));
    const y = frame.top + 34;
    drawing.push(<InkDashed x1={left} y1={y} x2={right} y2={y} id={`sd-${dist}`} color={MARKER.purple} width={2.2} dash={4} gap={3} draw={drawNow(2)} />);
    drawing.push(<InkDashed x1={left} y1={y - 6} x2={left} y2={y + 6} id={`sd-l-${dist}`} color={MARKER.purple} width={2} draw={drawNow(2)} />);
    drawing.push(<InkDashed x1={right} y1={y - 6} x2={right} y2={y + 6} id={`sd-r-${dist}`} color={MARKER.purple} width={2} draw={drawNow(2)} />);
    if (!narrow) drawing.push(<Note x={right + 6} y={y + 5} text={`± SD = ${fmt(sd, 2)}`} color={MARKER.purple} size={16} draw={drawNow(2)} />);
  }
  if (exploring) drawing.push(<Note x={frame.x(k)} y={frame.y(pK) - 8} text={fmt(pK, 4)} color={MARKER.red} anchor="middle" size={16} />);

  const TEX = [
    `X \\sim ${spec.name}:\\quad P(X = k) = ${spec.formula(Math.max(kFirst, Math.min(kLast, Math.round(spec.mean))))} \\ \\text{(at } k = ${Math.max(kFirst, Math.min(kLast, Math.round(spec.mean)))}\\text{)}`,
    `E(X) = ${spec.meanTex}`,
    `Var(X) = ${spec.varTex},\\quad SD(X) = ${fmt(sd, 3)}`,
    `P(X = ${k}) = ${spec.formula(k)} = \\textcolor{${MARKER.red}}{${fmt(pK, 4)}},\\quad P(X \\le ${k}) = ${fmt(cumulative, 4)}`,
  ];

  const update = (changes: Partial<Params>) => setParams((current) => ({ ...current, ...changes }));
  const sliders: Record<Dist, VNode> = {
    binomial: <>
      <Slider label="tries n" value={params.n} min={1} max={60} step={1} onInput={(value) => update({ n: value })} />
      <Slider label="chance p" value={params.p} min={0.01} max={0.99} step={0.01} onInput={(value) => update({ p: value })} />
    </>,
    geometric: <Slider label="chance p" value={params.p} min={0.05} max={0.95} step={0.01} onInput={(value) => update({ p: value })} />,
    poisson: <Slider label="rate λ" value={params.lambda} min={0.25} max={20} step={0.25} onInput={(value) => update({ lambda: value })} />,
    hypergeometric: <>
      <Slider label="population N" value={params.N} min={5} max={100} step={1} onInput={(value) => update({ N: value, D: Math.min(params.D, value), n: Math.min(params.n, value) })} />
      <Slider label="successes D" value={params.D} min={1} max={params.N} step={1} onInput={(value) => update({ D: value })} />
      <Slider label="sample n" value={Math.min(params.n, params.N)} min={1} max={params.N} step={1} onInput={(value) => update({ n: value })} />
    </>,
  };
  const presets: Record<Dist, { label: string; apply: () => void }[]> = {
    binomial: [{ label: "Guessing 20 MCQs: B(20, 0.25)", apply: () => update({ n: 20, p: 0.25 }) }, { label: "B(32, 0.5)", apply: () => update({ n: 32, p: 0.5 }) }],
    geometric: [{ label: "Tom's job hunt: G(0.2)", apply: () => update({ p: 0.2 }) }, { label: "Wait for a six: G(1/6)", apply: () => update({ p: 1 / 6 }) }],
    poisson: [{ label: "Colds: P(4)", apply: () => update({ lambda: 4 }) }, { label: "Taxis in 15 min: P(0.75)", apply: () => update({ lambda: 0.75 }) }],
    hypergeometric: [{ label: "Damaged cars: HG(50, 10, 10)", apply: () => update({ N: 50, D: 10, n: 10 }) }, { label: "Red balls: HG(10, 6, 3)", apply: () => update({ N: 10, D: 6, n: 3 }) }],
  };

  return (
    <SketchGraph
      sketch={sketch}
      note={step === 0 ? `${STORY[dist]} ${NOTES[0]}` : NOTES[step]}
      tex={TEX[step]}
      ariaLabel={`${LABELS[dist]} distribution. Expected value ${fmt(spec.mean, 2)}, variance ${fmt(spec.variance, 2)}. P(X = ${k}) = ${fmt(pK, 4)}.`}
      top={<Toggle label="Distribution" active={dist} onPick={(key) => { setDist(key as Dist); setParams(initial); }} options={(Object.keys(LABELS) as Dist[]).map((key) => ({ key, label: LABELS[key] }))} />}
      explore={<>
        <div class="graph-sliders">
          {sliders[dist]}
          <Slider label="value k" value={k} min={kFirst} max={kLast} step={1} onInput={(value) => setPick(value)} />
        </div>
        <Presets presets={presets[dist]} />
      </>}
    >
      {drawing}
    </SketchGraph>
  );
}
