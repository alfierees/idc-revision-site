import type { VNode } from "preact";
import { useSketch, SketchGraph, SketchAxes, InkLine, InkDashed, Note, Dot, Ring, fmt, INK, ACCENT, MARKER } from "./sketch";

// Best-response correspondences in a 2×2 game, drawn in the unit square of
// mixing probabilities (p for player 1, q for player 2). Where they cross are
// the Nash equilibria: two pure corners plus one mixed point.
//   type: mixed-strategy-br
//   qStar: 0.3333     player 1 switches from action 2 to action 1 when q > q*
//   pStar: 0.6667     player 2 switches when p > p*
//   action1: Football     action2: Ballet
//   p1Indifference: 2q = 1(1-q)     p2Indifference: 1 \cdot p = 2(1-p)

interface Props { qStar?: number; pStar?: number; action1?: string; action2?: string; p1Indifference?: string; p2Indifference?: string; }

export default function MixedStrategyBR({
  qStar = 1 / 3, pStar = 2 / 3, action1 = "Football", action2 = "Ballet",
  p1Indifference = "2q = 1(1-q)", p2Indifference = "1 \\cdot p = 2(1-p)",
}: Props): VNode {
  const NOTES = [
    `Player 1's best reply: ${action1} (p = 1) once player 2 is likely enough to pick ${action1} (q > ${fmt(qStar, 2)}); ${action2} below that; anything at exactly q*.`,
    `Player 2's best reply: ${action1} (q = 1) once p > ${fmt(pStar, 2)}.`,
    "The best replies cross three times: two pure equilibria and one mixed one.",
  ];
  const TEX = [
    `EU_1(\\text{${action1}}) = EU_1(\\text{${action2}}):\\; ${p1Indifference} \\;\\Rightarrow\\; q^* = ${fmt(qStar, 3)}`,
    `EU_2(\\text{${action1}}) = EU_2(\\text{${action2}}):\\; ${p2Indifference} \\;\\Rightarrow\\; p^* = ${fmt(pStar, 3)}`,
    `\\text{NE}: (0,0),\\ (1,1),\\ (p^*, q^*) = (${fmt(pStar, 2)},\\ ${fmt(qStar, 2)})`,
  ];
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMax: 1, yMax: 1 }], aspect: 0.8, maxWidth: 540, padding: { left: 44, bottom: 44, top: 22, right: 24 } });
  const { show, drawNow, step } = sketch;
  const frame = sketch.frames[0];
  const toX = frame.x, toY = frame.y;
  const ticks = [0, 0.25, 0.5, 0.75, 1];

  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={ticks} yTicks={ticks} xLabel={`p = P(player 1 plays ${action1})`} yLabel={`q = P(player 2 plays ${action1})`} />];
  // player 1: p = 0 for q < q*, any p at q*, p = 1 for q > q*   → drawn in (p, q) space
  const playerOne = [[0, 0, 0, qStar], [0, qStar, 1, qStar], [1, qStar, 1, 1]];
  playerOne.forEach(([p1, q1, p2, q2], index) => drawing.push(<InkLine x1={toX(p1)} y1={toY(q1)} x2={toX(p2)} y2={toY(q2)} id={`br1-${index}`} color={MARKER.blue} width={2.6} delay={index * 350} duration={380} draw={drawNow(0)} />));
  if (show(1)) {
    const playerTwo = [[0, 0, pStar, 0], [pStar, 0, pStar, 1], [pStar, 1, 1, 1]];
    playerTwo.forEach(([p1, q1, p2, q2], index) => drawing.push(<InkLine x1={toX(p1)} y1={toY(q1)} x2={toX(p2)} y2={toY(q2)} id={`br2-${index}`} color={MARKER.red} width={2.6} delay={index * 350} duration={380} draw={drawNow(1)} />));
  }
  drawing.push(<Note x={toX(0.28)} y={toY(qStar) - 10} text="player 1's BR" color={MARKER.blue} anchor="middle" size={18} draw={drawNow(0)} />);
  if (show(1)) drawing.push(<Note x={toX(pStar) + 8} y={toY(0.78)} text="player 2's BR" color={MARKER.red} size={18} draw={drawNow(1)} />);
  if (show(2)) {
    drawing.push(<InkDashed x1={toX(pStar)} y1={toY(qStar)} x2={toX(pStar)} y2={frame.bottom} id="guide-p" color={INK} width={1.1} dash={4} gap={4} draw={drawNow(2)} />);
    [[0, 0, `(${action2}, ${action2})`], [1, 1, `(${action1}, ${action1})`], [pStar, qStar, `mixed (${fmt(pStar, 2)}, ${fmt(qStar, 2)})`]].forEach(([p, q, label], index) => {
      drawing.push(<Ring x={toX(p as number)} y={toY(q as number)} id={`ring-${index}`} color={ACCENT} delay={index * 300} draw={drawNow(2)} />);
      drawing.push(<Dot x={toX(p as number)} y={toY(q as number)} color={index === 2 ? MARKER.green : INK} delay={index * 300} draw={drawNow(2)} />);
      const anchor = (p as number) > 0.5 ? "end" : "start";
      drawing.push(<Note x={toX(p as number) + (anchor === "end" ? -14 : 14)} y={toY(q as number) + ((q as number) > 0.5 ? 26 : -14)} text={label as string} color={index === 2 ? MARKER.green : INK} anchor={anchor} size={18} delay={index * 300 + 200} draw={drawNow(2)} />);
    });
  }

  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]}
      ariaLabel={`Best-response correspondences. Nash equilibria at both pure outcomes and a mixed equilibrium with p = ${fmt(pStar, 2)}, q = ${fmt(qStar, 2)}.`}>
      {drawing}
    </SketchGraph>
  );
}
