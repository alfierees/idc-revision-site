import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, useGlide, SketchGraph, SketchAxes, Note, Dot, Toggle, InkDashed, fmt, ACCENT, MARKER, WASH, INK } from "./sketch";
import type { Domain } from "./sketch";
import { CalcCurve, CalcLine, axisTicks } from "./CalcKit";

// Maths A, Lec 10 to 12: the full function investigation that is Q1 of almost
// every final exam. The facts come first (domain, intercepts, asymptotes, the
// sign of f′, the sign of f″) and the graph is drawn last, through them.
// Each function is a past-paper Q1; every number here was checked against the key.

const cbrt = Math.cbrt;
const pow23 = (x: number) => Math.pow(cbrt(x), 2); // x^(2/3), real for negative x

interface Point { x: number; y: number; label: string; kind: "max" | "min" | "inflection" | "intercept" | "isolated"; }
interface Investigation {
  label: string;
  source: string;
  tex: string;
  f: (x: number) => number;
  d1: (x: number) => number;
  d2: (x: number) => number;
  d1Tex: string;
  d2Tex: string;
  domain: Domain;
  breaks?: number[];
  domainTex: string;
  intercepts: Point[];
  isolated?: Point;
  vertical: number[];
  horizontal: number[];
  asymptoteTex: string;
  d1Edges: number[];
  extrema: Point[];
  extremaTex: string;
  d2Edges: number[];
  inflections: Point[];
  inflectionTex: string;
  start: number;
}

const FUNCTIONS: Record<string, Investigation> = {
  square: {
    label: "(1 + 2/x)²", source: "2021 Moed A Q1",
    tex: "f(x) = \\left(1 + \\tfrac{2}{x}\\right)^2,\\ f(0) = 2",
    f: (x) => (x === 0 ? NaN : (1 + 2 / x) ** 2),
    d1: (x) => (-4 * (x + 2)) / x ** 3,
    d2: (x) => (8 * (x + 3)) / x ** 4,
    d1Tex: "f'(x) = -\\frac{4(x+2)}{x^3}", d2Tex: "f''(x) = \\frac{8(x+3)}{x^4}",
    domain: { xMin: -8, xMax: 6, yMin: -0.6, yMax: 4.4 }, breaks: [0],
    domainTex: "\\text{all } x \\text{ (with } f(0)=2\\text{)},\\quad x\\text{-intercept } (-2, 0)",
    intercepts: [{ x: -2, y: 0, label: "(-2, 0)", kind: "intercept" }],
    isolated: { x: 0, y: 2, label: "f(0) = 2", kind: "isolated" },
    vertical: [0], horizontal: [1],
    asymptoteTex: "\\lim_{x\\to0^\\pm} f = \\infty \\Rightarrow x = 0,\\qquad \\lim_{x\\to\\pm\\infty} f = 1 \\Rightarrow y = 1",
    d1Edges: [-2, 0],
    extrema: [{ x: -2, y: 0, label: "min (-2, 0)", kind: "min" }],
    extremaTex: "f' = 0 \\text{ at } x=-2:\\ \\text{min } (-2, 0)",
    d2Edges: [-3, 0],
    inflections: [{ x: -3, y: 1 / 9, label: "(-3, 1/9)", kind: "inflection" }],
    inflectionTex: "f'' = 0 \\text{ at } x=-3:\\ \\text{inflection } \\left(-3, \\tfrac19\\right)",
    start: 2,
  },
  cusp: {
    label: "x^(4/3) − 2x^(2/3) − 3", source: "2021 Moed B Q1",
    tex: "f(x) = x^{4/3} - 2x^{2/3} - 3",
    f: (x) => pow23(x) ** 2 - 2 * pow23(x) - 3,
    d1: (x) => (x === 0 ? NaN : ((4 / 3) * (pow23(x) - 1)) / cbrt(x)),
    d2: (x) => (x === 0 ? NaN : (4 / 9) * (pow23(x) + 1) / Math.pow(Math.abs(x), 4 / 3)),
    d1Tex: "f'(x) = \\frac{4\\left(x^{2/3} - 1\\right)}{3\\sqrt[3]{x}}", d2Tex: "f''(x) = \\frac{4\\left(x^{2/3}+1\\right)}{9\\,x^{4/3}} > 0",
    domain: { xMin: -6.6, xMax: 6.6, yMin: -5, yMax: 3.5 },
    domainTex: "\\text{all } x,\\quad (0, -3),\\ (\\pm 3\\sqrt3, 0) \\approx (\\pm5.2, 0)",
    intercepts: [{ x: 0, y: -3, label: "(0, -3)", kind: "intercept" }, { x: -Math.sqrt(27), y: 0, label: "", kind: "intercept" }, { x: Math.sqrt(27), y: 0, label: "", kind: "intercept" }],
    vertical: [], horizontal: [],
    asymptoteTex: "\\text{continuous everywhere, } \\lim_{x\\to\\pm\\infty} f = \\infty:\\ \\text{no asymptotes}",
    d1Edges: [-1, 0, 1],
    extrema: [
      { x: -1, y: -4, label: "min (-1, -4)", kind: "min" },
      { x: 0, y: -3, label: "max, cusp", kind: "max" },
      { x: 1, y: -4, label: "min (1, -4)", kind: "min" },
    ],
    extremaTex: "f'=0 \\text{ at } \\pm1 \\text{ (min, } -4),\\ \\ f' \\text{ undefined at } 0 \\text{ (cusp max)}",
    d2Edges: [0],
    inflections: [],
    inflectionTex: "f'' > 0 \\text{ for all } x \\neq 0:\\ \\text{concave up, no inflection}",
    start: 2.5,
  },
  hyperbola: {
    label: "(x + 3)/(x + 2)", source: "2023 Moed B Q3",
    tex: "f(x) = \\frac{x+3}{x+2} = 1 + \\frac{1}{x+2}",
    f: (x) => (x === -2 ? NaN : (x + 3) / (x + 2)),
    d1: (x) => -1 / (x + 2) ** 2,
    d2: (x) => 2 / (x + 2) ** 3,
    d1Tex: "f'(x) = -\\frac{1}{(x+2)^2} < 0", d2Tex: "f''(x) = \\frac{2}{(x+2)^3}",
    domain: { xMin: -7, xMax: 4, yMin: -3.5, yMax: 5.5 }, breaks: [-2],
    domainTex: "x \\neq -2,\\quad (-3, 0),\\ \\left(0, \\tfrac32\\right)",
    intercepts: [{ x: -3, y: 0, label: "(-3, 0)", kind: "intercept" }, { x: 0, y: 1.5, label: "(0, 3/2)", kind: "intercept" }],
    vertical: [-2], horizontal: [1],
    asymptoteTex: "\\lim_{x\\to-2^\\pm} f = \\pm\\infty \\Rightarrow x=-2,\\qquad \\lim_{x\\to\\pm\\infty} f = 1 \\Rightarrow y=1",
    d1Edges: [-2],
    extrema: [],
    extremaTex: "f' < 0 \\text{ on each side of } -2:\\ \\text{decreasing, no extrema}",
    d2Edges: [-2],
    inflections: [],
    inflectionTex: "\\cap \\text{ for } x<-2,\\ \\cup \\text{ for } x>-2:\\ \\text{no inflection (} -2 \\notin \\text{domain)}",
    start: 1,
  },
  shifted: {
    label: "x(x + 1)^(2/3)", source: "2025 Moed A Q3",
    tex: "f(x) = x\\,(x+1)^{2/3}",
    f: (x) => x * pow23(x + 1),
    d1: (x) => (x === -1 ? NaN : (5 * x + 3) / (3 * cbrt(x + 1))),
    d2: (x) => (x === -1 ? NaN : (10 * x + 12) / (9 * Math.pow(Math.abs(x + 1), 4 / 3))),
    d1Tex: "f'(x) = \\frac{5x+3}{3\\sqrt[3]{x+1}}", d2Tex: "f''(x) = \\frac{10x+12}{9\\,(x+1)^{4/3}}",
    domain: { xMin: -2.3, xMax: 0.8, yMin: -2.8, yMax: 1.4 },
    domainTex: "\\text{all } x,\\quad (-1, 0),\\ (0, 0)",
    intercepts: [{ x: 0, y: 0, label: "(0, 0)", kind: "intercept" }],
    vertical: [], horizontal: [],
    asymptoteTex: "\\text{continuous everywhere, } \\lim_{x\\to\\pm\\infty} f = \\pm\\infty:\\ \\text{no asymptotes}",
    d1Edges: [-1, -0.6],
    extrema: [
      { x: -1, y: 0, label: "max, cusp", kind: "max" },
      { x: -0.6, y: -0.6 * pow23(0.4), label: "min x = -3/5", kind: "min" },
    ],
    extremaTex: "f' \\text{ undefined at } -1 \\text{ (cusp max)},\\ \\ f'=0 \\text{ at } -\\tfrac35 \\text{ (min)}",
    d2Edges: [-1.2, -1],
    inflections: [{ x: -1.2, y: -1.2 * pow23(-0.2), label: "x = -1.2", kind: "inflection" }],
    inflectionTex: "f''=0 \\text{ at } x=-1.2:\\ \\text{the only inflection}",
    start: 0.4,
  },
  root: {
    label: "∛x² · (x − 10)", source: "2019 Moed B Q1",
    tex: "f(x) = \\sqrt[3]{x^2}\\,(x-10)",
    f: (x) => pow23(x) * (x - 10),
    d1: (x) => (x === 0 ? NaN : (5 * (x - 4)) / (3 * cbrt(x))),
    d2: (x) => (x === 0 ? NaN : (5 * (2 * x + 4)) / (9 * Math.pow(Math.abs(x), 4 / 3))),
    d1Tex: "f'(x) = \\frac{5(x-4)}{3\\sqrt[3]{x}}", d2Tex: "f''(x) = \\frac{10(x+2)}{9\\,x^{4/3}}",
    domain: { xMin: -3.5, xMax: 12, yMin: -33, yMax: 13 },
    domainTex: "\\text{all } x,\\quad (0, 0),\\ (10, 0)",
    intercepts: [{ x: 10, y: 0, label: "(10, 0)", kind: "intercept" }],
    vertical: [], horizontal: [],
    asymptoteTex: "\\text{continuous everywhere, } \\lim_{x\\to\\pm\\infty} f = \\pm\\infty:\\ \\text{no asymptotes}",
    d1Edges: [0, 4],
    extrema: [
      { x: 0, y: 0, label: "max, cusp", kind: "max" },
      { x: 4, y: pow23(4) * -6, label: "min (4, -15.1)", kind: "min" },
    ],
    extremaTex: "f' \\text{ undefined at } 0 \\text{ (cusp max)},\\ \\ f'=0 \\text{ at } 4 \\text{ (min } -15.1)",
    d2Edges: [-2, 0],
    inflections: [{ x: -2, y: pow23(-2) * -12, label: "(-2, -19.0)", kind: "inflection" }],
    inflectionTex: "f''=0 \\text{ at } x=-2:\\ \\cap \\text{ before, } \\cup \\text{ after}",
    start: 7,
  },
  piecewise: {
    label: "x² + 2x | √x", source: "2022 Moed A Q1, 2025 Moed B Q3",
    tex: "f(x) = \\begin{cases} x^2+2x & x<0 \\\\ \\sqrt{x} & x \\ge 0 \\end{cases}",
    f: (x) => (x < 0 ? x * x + 2 * x : Math.sqrt(x)),
    d1: (x) => (x < 0 ? 2 * x + 2 : x === 0 ? NaN : 1 / (2 * Math.sqrt(x))),
    d2: (x) => (x < 0 ? 2 : x === 0 ? NaN : -1 / (4 * Math.pow(x, 1.5))),
    d1Tex: "f'(x) = 2x+2 \\ (x<0),\\quad \\frac{1}{2\\sqrt x}\\ (x>0)", d2Tex: "f''(x) = 2\\ (x<0),\\quad -\\frac{1}{4\\sqrt{x^3}}\\ (x>0)",
    domain: { xMin: -3.2, xMax: 5, yMin: -1.6, yMax: 4 },
    domainTex: "\\text{all } x,\\ \\text{continuous at the seam},\\quad (-2, 0),\\ (0, 0)",
    intercepts: [{ x: -2, y: 0, label: "(-2, 0)", kind: "intercept" }, { x: 0, y: 0, label: "(0, 0)", kind: "intercept" }],
    vertical: [], horizontal: [],
    asymptoteTex: "\\text{continuous everywhere, both ends} \\to \\infty:\\ \\text{no asymptotes}",
    d1Edges: [-1, 0],
    extrema: [{ x: -1, y: -1, label: "min (-1, -1)", kind: "min" }],
    extremaTex: "f'=0 \\text{ at } -1 \\text{ (min)};\\ \\text{at } 0 \\text{ slopes } 2 \\text{ and } \\infty \\text{: no extremum}",
    d2Edges: [0],
    inflections: [{ x: 0, y: 0, label: "inflection (0, 0)", kind: "inflection" }],
    inflectionTex: "\\cup \\text{ for } x<0,\\ \\cap \\text{ for } x>0,\\ f \\text{ continuous: inflection } (0,0)",
    start: 2,
  },
};

const NOTES = [
  "Domain and intercepts first: where does the function live, and where does it cross the axes?",
  "Asymptotes: a vertical one where the function blows up, a horizontal one where it settles at ±∞.",
  "The sign of f′ (top strip): rising or falling. Every critical point is a candidate for an extremum.",
  "The sign of f″ (bottom strip): ∪ or ∩. An inflection needs a sign change at a point where f is continuous.",
  "Only now draw the graph, through every fact above. It cannot contradict any of them.",
  "Your turn. Drag along the curve and watch the tangent; switch function at the top.",
];

export default function CalcInvestigation({ fn }: { fn?: string }): VNode {
  const [key, setKey] = useState(FUNCTIONS[fn ?? ""] ? (fn as string) : "square");
  const spec = FUNCTIONS[key];
  const [dragged, setDragged] = useState(spec.start);
  const sketch = useSketch({ stepCount: NOTES.length, domains: [spec.domain], aspect: 0.7, minHeight: 300, maxHeight: 440, padding: { bottom: 74 } });
  const { step, show, drawNow, narrow } = sketch;
  const frame = sketch.frames[0];
  const exploring = step === NOTES.length - 1;
  const xMin = spec.domain.xMin ?? 0, xMax = spec.domain.xMax;
  const avoid = (x: number) => {
    let value = Math.max(xMin + 0.05, Math.min(xMax - 0.05, x));
    for (const point of [...spec.vertical, ...spec.extrema.filter((e) => !Number.isFinite(spec.d1(e.x))).map((e) => e.x), ...(key === "piecewise" ? [0] : [])]) {
      if (Math.abs(value - point) < 0.04) value = point + (value < point ? -0.04 : 0.04);
    }
    return value;
  };
  const { x: glided } = useGlide({ x: dragged }, true);
  const pointX = avoid(glided);
  const pointY = spec.f(pointX);
  const slope = spec.d1(pointX);

  const strip = (row: number, edges: number[], sign: (x: number) => number, plus: string, minus: string) => {
    const cuts = [xMin, ...edges.filter((edge) => edge > xMin && edge < xMax), xMax];
    const top = frame.bottom + 26 + row * 20;
    return cuts.slice(0, -1).map((edge, index) => {
      const next = cuts[index + 1];
      const positive = sign((edge + next) / 2) > 0;
      const color = positive ? MARKER.green : MARKER.red;
      const width = frame.x(next) - frame.x(edge) - 1;
      return (
        <g>
          <rect x={frame.x(edge)} y={top} width={Math.max(0, width)} height={15} rx={2} style={`fill:${positive ? WASH.green : WASH.red};stroke:${color};stroke-width:1`} />
          {width > 22 && <text x={(frame.x(edge) + frame.x(next)) / 2} y={top + 12} text-anchor="middle" class="sk-tick" style={`fill:${color};font-weight:700`}>{positive ? plus : minus}</text>}
        </g>
      );
    });
  };

  const parts: VNode[] = [
    <SketchAxes frame={frame} id={`inv-axes-${key}`} xTicks={axisTicks(xMin, xMax, narrow ? 5 : 8)} yTicks={axisTicks(spec.domain.yMin ?? 0, spec.domain.yMax, 5)} xLabel="x" yLabel="y" />,
  ];
  if (show(1)) {
    spec.vertical.forEach((x, index) => parts.push(<InkDashed x1={frame.x(x)} y1={frame.top} x2={frame.x(x)} y2={frame.bottom} id={`inv-va-${key}-${index}`} color={MARKER.purple} width={1.8} dash={6} gap={5} draw={drawNow(1)} />));
    spec.horizontal.forEach((y, index) => parts.push(<InkDashed x1={frame.left} y1={frame.y(y)} x2={frame.right} y2={frame.y(y)} id={`inv-ha-${key}-${index}`} color={MARKER.purple} width={1.8} dash={6} gap={5} draw={drawNow(1)} />));
    if (!spec.vertical.length && !spec.horizontal.length) parts.push(<Note x={frame.right - 4} y={frame.top + 16} text="no asymptotes" color={MARKER.purple} anchor="end" size={16} draw={drawNow(1)} />);
  }
  if (show(4)) parts.push(<CalcCurve sketch={sketch} frame={frame} value={spec.f} from={xMin} to={xMax} breaks={spec.breaks} id={`inv-curve-${key}`} color={ACCENT} width={2.6} draw={drawNow(4)} samples={260} />);
  if (show(2)) parts.push(...strip(0, spec.d1Edges, spec.d1, "f′ + ↗", "f′ − ↘"));
  if (show(3)) parts.push(...strip(1, spec.d2Edges, spec.d2, "∪", "∩"));
  for (const point of spec.intercepts) {
    parts.push(<Dot x={frame.x(point.x)} y={frame.y(point.y)} color={INK} radius={4.5} />);
    if (point.label && !show(2)) parts.push(<Note x={frame.x(point.x) + 6} y={frame.y(point.y) - 9} text={point.label} color={INK} size={15} />);
  }
  if (spec.isolated) {
    parts.push(<Dot x={frame.x(spec.isolated.x)} y={frame.y(spec.isolated.y)} color={INK} radius={4.5} />);
    parts.push(<Note x={frame.x(spec.isolated.x) + 8} y={frame.y(spec.isolated.y) + 5} text={spec.isolated.label} color={INK} size={15} />);
  }
  if (show(2)) for (const point of spec.extrema) {
    const color = point.kind === "max" ? MARKER.red : MARKER.green;
    parts.push(<Dot x={frame.x(point.x)} y={frame.y(point.y)} color={color} radius={5.5} draw={drawNow(2)} />);
    parts.push(<Note x={frame.x(point.x)} y={frame.y(point.y) + (point.kind === "max" ? -12 : 24)} text={narrow ? point.kind : point.label} color={color} anchor="middle" size={15} draw={drawNow(2)} />);
  }
  if (show(3)) for (const point of spec.inflections) {
    parts.push(<Dot x={frame.x(point.x)} y={frame.y(point.y)} color={MARKER.amber} radius={5.5} hollow draw={drawNow(3)} />);
    parts.push(<Note x={frame.x(point.x) - 8} y={frame.y(point.y) - 10} text={narrow ? "infl." : point.label} color={MARKER.amber} anchor="end" size={15} draw={drawNow(3)} />);
  }
  if (exploring && Number.isFinite(pointY)) {
    if (Number.isFinite(slope)) parts.push(<CalcLine sketch={sketch} frame={frame} x0={pointX} y0={pointY} slope={slope} id="inv-tangent" color={MARKER.blue} width={1.7} />);
    parts.push(sketch.handle({ key: "inv-point", x: pointX, y: pointY, axis: "x", hint: "above", onDrag: (dataX) => setDragged(avoid(dataX)) }));
  }

  const TEX = [
    `${spec.tex}:\\quad ${spec.domainTex}`,
    spec.asymptoteTex,
    `${spec.d1Tex}\\qquad ${spec.extremaTex}`,
    `${spec.d2Tex}\\qquad ${spec.inflectionTex}`,
    `${spec.tex}\\quad (\\text{${spec.source}})`,
    `x = ${fmt(pointX, 2)}:\\ f = ${fmt(pointY, 2)},\\ f' = ${Number.isFinite(slope) ? fmt(slope, 2) : "\\text{undefined}"},\\ f'' ${spec.d2(pointX) > 0 ? "> 0\\ (\\cup)" : "< 0\\ (\\cap)"}`,
  ];

  return (
    <SketchGraph
      sketch={sketch}
      note={NOTES[step]}
      tex={TEX[step]}
      ariaLabel={`Function investigation of ${spec.label} from ${spec.source}.`}
      top={<Toggle label="Function" active={key} onPick={(next) => { setKey(next); setDragged(FUNCTIONS[next].start); }} options={Object.entries(FUNCTIONS).map(([option, value]) => ({ key: option, label: value.label }))} />}
    >
      {parts}
    </SketchGraph>
  );
}
