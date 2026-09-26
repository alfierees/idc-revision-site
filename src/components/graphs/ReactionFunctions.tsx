import { useState } from "preact/hooks";
import type { VNode } from "preact";
import {
  useSketch, useGlide, SketchGraph, SketchAxes, InkLine, InkDashed, Note, Dot, Ring, Toggle,
  niceTicks, niceCeil, fmt, clamp, INK, ACCENT, MARKER,
} from "./sketch";

// Any pair of linear best responses, config-driven:
//   type: reaction-functions
//   br1: 25,-0.5          firm 1:  x = 25 − 0.5·y
//   br2: 25,-0.5          firm 2:  y = 25 − 0.5·x
//   kind: quantity | price           (symbols q or p; wording of the notes)
//   points: Stackelberg|The leader moves first and picks its best point on BR₂|25,12.5
//   br1Alt / br2Alt / mainLabel / altLabel   optional second regime (toggle)
// Steps: BR₁ → BR₂ → Nash → one step per extra point → the "best-response
// dance": drag a starting choice and watch the replies zig-zag into Nash.

interface Props {
  br1?: string; br2?: string; kind?: string; points?: string;
  br1Alt?: string; br2Alt?: string; mainLabel?: string; altLabel?: string;
  axisMax?: number;
}

const parsePair = (text: string | undefined, fallback: [number, number]): [number, number] => {
  if (!text) return fallback;
  const [intercept, slope] = String(text).split(",").map(Number);
  return Number.isFinite(intercept) && Number.isFinite(slope) ? [intercept, slope] : fallback;
};

interface ExtraPoint { name: string; note: string; x: number; y: number; }
const parsePoints = (text: string | undefined): ExtraPoint[] => (text ? String(text).split(";") : [])
  .map((chunk) => chunk.split("|"))
  .filter((parts) => parts.length === 3)
  .map(([name, note, coordinates]) => {
    const [x, y] = coordinates.split(",").map(Number);
    return { name: name.trim(), note: note.trim(), x, y };
  });

const POINT_COLORS = [MARKER.red, MARKER.amber, MARKER.purple];

export default function ReactionFunctions(props: Props): VNode {
  const hasAlt = Boolean(props.br1Alt && props.br2Alt);
  const [regime, setRegime] = useState<"main" | "alt">("main");
  const main1 = parsePair(props.br1, [25, -0.5]), main2 = parsePair(props.br2, [25, -0.5]);
  const alt1 = parsePair(props.br1Alt, main1), alt2 = parsePair(props.br2Alt, main2);
  const active1 = regime === "main" ? main1 : alt1, active2 = regime === "main" ? main2 : alt2;
  const extraPoints = regime === "main" ? parsePoints(props.points) : [];
  const isPrice = props.kind === "price";
  const symbolX = isPrice ? "p_1" : "q_1", symbolY = isPrice ? "p_2" : "q_2";

  const [dance, setDance] = useState({ start: 0 });
  const shown = useGlide({ a1: active1[0], b1: active1[1], a2: active2[0], b2: active2[1] }, false);
  const nashX = (shown.a1 + shown.b1 * shown.a2) / (1 - shown.b1 * shown.b2);
  const nashY = shown.a2 + shown.b2 * nashX;

  const nashAt = (first: [number, number], second: [number, number]) => {
    const x = (first[0] + first[1] * second[0]) / (1 - first[1] * second[1]);
    return [x, second[0] + second[1] * x];
  };
  const [mainNashX, mainNashY] = nashAt(main1, main2), [altNashX, altNashY] = nashAt(alt1, alt2);
  const axisMax = props.axisMax ?? niceCeil(Math.max(
    main1[0], main2[0], mainNashX * 1.8, mainNashY * 1.8,
    ...(hasAlt ? [alt1[0], alt2[0], altNashX * 1.6, altNashY * 1.6] : []),
    ...extraPoints.map((point) => Math.max(point.x, point.y) * 1.3),
  ));

  const complements = active1[1] > 0;
  const NOTES = [
    `Firm 1's best response: ${complements ? "when firm 2 raises its choice, firm 1 raises its own too" : "the more firm 2 does, the less firm 1 wants to do"}.`,
    `Firm 2's best response. ${complements ? "Both slope up: strategic complements." : "Both slope down: strategic substitutes."}`,
    "Nash equilibrium: each firm is best-responding to the other, where the lines cross.",
    ...extraPoints.map((point) => point.note),
    "Your turn. Drag firm 1's starting choice and watch best responses zig-zag to Nash.",
  ];
  const stepCount = NOTES.length;

  const sketch = useSketch({
    stepCount,
    domains: [{ xMax: axisMax, yMax: axisMax }],
    aspect: 0.82,
    maxHeight: 440,
    maxWidth: 560,
    padding: { left: 44, bottom: 40, top: 20 },
  });
  const { show, drawNow, step } = sketch;
  const frame = sketch.frames[0];
  const toX = frame.x, toY = frame.y;
  const danceStep = stepCount - 1;

  const linear = (symbol: string, intercept: number, slope: number, other: string) =>
    `${symbol} = ${fmt(intercept, 3)} ${slope < 0 ? "-" : "+"} ${fmt(Math.abs(slope), 3)}\\,${other}`;
  const TEX = [
    `BR_1:\\; ${linear(symbolX, shown.a1, shown.b1, symbolY)}`,
    `BR_2:\\; ${linear(symbolY, shown.a2, shown.b2, symbolX)}`,
    `${symbolX}^* = ${fmt(nashX, 2)},\\quad ${symbolY}^* = ${fmt(nashY, 2)}`,
    ...extraPoints.map((point) => `\\text{${point.name}}:\\; (${fmt(point.x, 2)},\\ ${fmt(point.y, 2)})`),
    `\\text{start } ${symbolX} = ${fmt(dance.start, 1)} \\;\\to\\; (${fmt(nashX, 2)},\\ ${fmt(nashY, 2)})`,
  ];

  // Best-response line 1 is x as a function of y: sample y across the axis.
  const lineOne = (): [number, number, number, number] => {
    const yStart = 0, yEnd = axisMax;
    return [shown.a1 + shown.b1 * yStart, yStart, shown.a1 + shown.b1 * yEnd, yEnd];
  };
  const lineTwo = (): [number, number, number, number] => [0, shown.a2, axisMax, shown.a2 + shown.b2 * axisMax];
  const [one1x, one1y, one2x, one2y] = lineOne();
  const [two1x, two1y, two2x, two2y] = lineTwo();

  const ticks = niceTicks(0, axisMax, sketch.narrow ? 4 : 5);
  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={ticks} yTicks={ticks} xLabel={isPrice ? "p₁" : "q₁"} yLabel={isPrice ? "p₂" : "q₂"} />];
  const plot: VNode[] = [];
  plot.push(<InkLine x1={toX(one1x)} y1={toY(one1y)} x2={toX(one2x)} y2={toY(one2y)} id="br1" color={MARKER.blue} width={2.4} duration={800} draw={drawNow(0)} />);
  if (show(1)) plot.push(<InkLine x1={toX(two1x)} y1={toY(two1y)} x2={toX(two2x)} y2={toY(two2y)} id="br2" color={MARKER.green} width={2.4} duration={800} draw={drawNow(1)} />);
  if (show(2) && step !== danceStep) {
    plot.push(<InkDashed x1={toX(nashX)} y1={toY(nashY)} x2={toX(nashX)} y2={frame.bottom} id="nash-x" color={INK} width={1.2} dash={4} gap={4} draw={drawNow(2)} />);
    plot.push(<InkDashed x1={toX(nashX)} y1={toY(nashY)} x2={frame.left} y2={toY(nashY)} id="nash-y" color={INK} width={1.2} dash={4} gap={4} draw={drawNow(2)} />);
  }
  // the best-response dance: from (start, 0), firm 2 replies, firm 1 replies, ...
  if (step === danceStep) {
    let currentX = dance.start, currentY = 0;
    const path: string[] = [`M${toX(currentX)},${toY(currentY)}`];
    for (let round = 0; round < 10; round++) {
      currentY = shown.a2 + shown.b2 * currentX;          // firm 2 replies (vertical move)
      path.push(`L${toX(currentX)},${toY(currentY)}`);
      currentX = shown.a1 + shown.b1 * currentY;          // firm 1 replies (horizontal move)
      path.push(`L${toX(currentX)},${toY(currentY)}`);
    }
    plot.push(<path d={path.join(" ")} class="sk-fade" style={`fill:none;stroke:${ACCENT};stroke-width:1.8;stroke-dasharray:5 4;stroke-linejoin:round`} />);
  }
  drawing.push(<g clip-path={sketch.clip()}>{plot}</g>);

  const labelOneY = axisMax * 0.9;
  drawing.push(<Note x={toX(shown.a1 + shown.b1 * labelOneY) + 10} y={toY(labelOneY) + 6} text="BR₁" color={MARKER.blue} size={20} draw={drawNow(0)} />);
  // BR₂ is labelled at its left end, leaving the right-hand side free for extra points
  if (show(1)) drawing.push(<Note x={toX(axisMax * 0.04)} y={toY(shown.a2 + shown.b2 * axisMax * 0.04) - 12} text="BR₂" color={MARKER.green} size={20} draw={drawNow(1)} />);
  if (show(2)) {
    drawing.push(<Ring x={toX(nashX)} y={toY(nashY)} id="ring-nash" color={ACCENT} draw={drawNow(2)} />);
    drawing.push(<Dot x={toX(nashX)} y={toY(nashY)} color={INK} draw={drawNow(2)} />);
    drawing.push(<Note x={toX(nashX) + 16} y={toY(nashY) - 12} text={`Nash (${fmt(nashX, 1)}, ${fmt(nashY, 1)})`} color={INK} size={18} delay={300} draw={drawNow(2)} />);
  }
  extraPoints.forEach((point, index) => {
    const pointStep = 3 + index;
    if (!show(pointStep) || step === danceStep) return;
    const color = POINT_COLORS[index % POINT_COLORS.length];
    drawing.push(<Dot x={toX(point.x)} y={toY(point.y)} color={color} draw={drawNow(pointStep)} />);
    drawing.push(<Note x={toX(point.x) + 10} y={toY(point.y) + 22} text={`${point.name} (${fmt(point.x, 2)}, ${fmt(point.y, 2)})`} color={color} size={18} delay={300} draw={drawNow(pointStep)} />);
  });
  if (step === danceStep) {
    drawing.push(<Dot x={toX(nashX)} y={toY(nashY)} color={INK} />);
    drawing.push(sketch.handle({
      key: "start", x: dance.start, y: 0, axis: "x", hint: "above",
      onDrag: (dataX) => setDance({ start: clamp(dataX, 0, axisMax) }),
    }));
  }

  return (
    <SketchGraph
      sketch={sketch}
      note={NOTES[step]}
      tex={TEX[step]}
      ariaLabel={`Best-response functions. Nash equilibrium at ${fmt(nashX, 2)} and ${fmt(nashY, 2)}.`}
      top={hasAlt ? (
        <Toggle
          label="Scenario"
          options={[{ key: "main", label: props.mainLabel ?? "Scenario A" }, { key: "alt", label: props.altLabel ?? "Scenario B" }]}
          active={regime}
          onPick={(key) => { setRegime(key as "main" | "alt"); sketch.setStep(0); }}
        />
      ) : undefined}
    >
      {drawing}
    </SketchGraph>
  );
}
