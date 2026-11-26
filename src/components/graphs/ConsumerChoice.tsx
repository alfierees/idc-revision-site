import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, useGlide, SketchGraph, SketchAxes, InkLine, InkCurve, InkDashed, Note, Dot, Ring, ShiftArrow, Toggle, Slider, Presets, curvePoints, fmt, clamp, INK, INK_SOFT, ACCENT, MARKER } from "./sketch";

// Micro I consumer-theory explainers.
//   type: consumer-choice
//   figure: families | slutsky | labor | two-period
// families   — one budget line against five utility families: Cobb-Douglas xy,
//              perfect substitutes x + y, perfect complements min{x, y},
//              quasilinear 4 ln x + y, and concave x² + y² (a corner).
// slutsky    — U = xy, m = 40, p₂ = 1, p₁ falls from 2: A → B (Slutsky line
//              through A) → C, with the Hicks line for comparison.
// labor      — T = 24 hours, U = L·Y or 4√L + Y, budget Y = W(24 − L) + W₀.
// two-period — U = C₁C₂, endowment (I₁, I₂), slope −(1+r)/(1+π).
// Numbers are illustrative, chosen to match the cheat sheet's formulas.

interface Props { figure?: string; family?: string; }

export default function ConsumerChoice({ figure = "families", family = "cd" }: Props): VNode {
  if (figure === "slutsky") return <Slutsky />;
  if (figure === "labor") return <LaborSupply />;
  if (figure === "two-period") return <TwoPeriods />;
  return <Families initialFamily={family} />;
}

// ---------------------------------------------------------------------------
// Utility families and the optimal bundle
// ---------------------------------------------------------------------------

const INCOME = 24;
const FAMILIES = [
  { key: "cd", label: "x·y" },
  { key: "subs", label: "x + y" },
  { key: "comp", label: "min{x, y}" },
  { key: "quasi", label: "4 ln x + y" },
  { key: "concave", label: "x² + y²" },
];

interface Choice { x: number; y: number; utility: number; rule: string; note: string; corner: boolean; }

function bestChoice(family: string, p1: number, p2: number): Choice {
  const m = INCOME;
  if (family === "subs") {
    if (Math.abs(p1 - p2) < 1e-9) return { x: m / (2 * p1), y: m / (2 * p2), utility: m / p1, rule: "p_1 = p_2:\\ \\text{every bundle on the line ties}", note: "Equal prices: the curves lie on top of the budget line, so every point on it is optimal.", corner: false };
    const onlyX = p1 < p2;
    return { x: onlyX ? m / p1 : 0, y: onlyX ? 0 : m / p2, utility: onlyX ? m / p1 : m / p2, rule: `\\tfrac{1}{p_1} = ${fmt(1 / p1, 2)} ${onlyX ? ">" : "<"} \\tfrac{1}{p_2} = ${fmt(1 / p2, 2)}:\\ \\text{all on } ${onlyX ? "x" : "y"}`, note: `Straight-line curves meet a straight budget line at a corner: she buys only the cheaper good, ${onlyX ? "x" : "y"}.`, corner: true };
  }
  if (family === "comp") {
    const k = m / (p1 + p2);
    return { x: k, y: k, utility: k, rule: `x = y = \\frac{m}{p_1 + p_2} = ${fmt(k, 2)}`, note: "No tangency at a kink: she buys on the ray y = x and spends the whole budget.", corner: false };
  }
  if (family === "quasi") {
    let x = (4 * p2) / p1;
    let corner = false;
    if (p1 * x > m) { x = m / p1; corner = true; }
    const y = (m - p1 * x) / p2;
    return { x, y, utility: 4 * Math.log(x) + y, rule: corner ? `\\text{corner: } x = m/p_1 = ${fmt(x, 2)}` : `\\tfrac{4}{x} = \\tfrac{p_1}{p_2} \\Rightarrow x = ${fmt(x, 2)},\\ y = ${fmt(y, 2)}`, note: "Quasilinear: the MRS 4/x pins x from prices alone. Extra income would all go to y.", corner };
  }
  if (family === "concave") {
    const onlyX = p1 <= p2;
    const x = onlyX ? m / p1 : 0, y = onlyX ? 0 : m / p2;
    return { x, y, utility: x * x + y * y, rule: `U(\\tfrac{m}{p_1}, 0) = ${fmt((m / p1) ** 2, 0)}\\ \\text{vs}\\ U(0, \\tfrac{m}{p_2}) = ${fmt((m / p2) ** 2, 0)}`, note: "Curves bowed away from the origin: the tangency (hollow dot) is the worst point on the line. The best is a corner.", corner: true };
  }
  const x = m / (2 * p1), y = m / (2 * p2);
  return { x, y, utility: x * y, rule: `\\tfrac{y}{x} = \\tfrac{p_1}{p_2} \\Rightarrow x = \\tfrac{m}{2p_1} = ${fmt(x, 2)},\\ y = \\tfrac{m}{2p_2} = ${fmt(y, 2)}`, note: "Cobb-Douglas: the highest curve touches the line where MRS = p₁/p₂. Half the income goes on each good.", corner: false };
}

function Families({ initialFamily }: { initialFamily: string }): VNode {
  const [family, setFamily] = useState(FAMILIES.some((f) => f.key === initialFamily) ? initialFamily : "cd");
  const [prices, setPrices] = useState({ p1: 2, p2: 2.5 });
  const NOTES = [
    "The budget line px·x + py·y = 24: everything on or under it is affordable.",
    "The indifference map for this utility function: higher curves are better.",
    "",
    "Your turn. Change the prices, or switch the utility function at the top.",
  ];
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMax: 26, yMax: 26 }], aspect: 0.9, maxWidth: 560, padding: { left: 36, bottom: 40, top: 18 } });
  const { show, drawNow, step } = sketch;
  const frame = sketch.frames[0];
  const live = useGlide(step === 3 ? prices : { p1: 2, p2: 2.5 }, false);
  const { p1, p2 } = live;
  const best = bestChoice(family, p1, p2);
  const toX = frame.x, toY = frame.y;

  const levels = (() => {
    if (family === "cd") return [best.utility * 0.45, best.utility, best.utility * 1.7];
    if (family === "subs") return [best.utility - 5, best.utility, best.utility + 5];
    if (family === "comp") return [best.utility - 3, best.utility, best.utility + 3];
    if (family === "quasi") return [best.utility - 4, best.utility, best.utility + 4];
    const tangentScale = INCOME / (p1 * p1 + p2 * p2);
    const tangentUtility = (p1 * tangentScale) ** 2 + (p2 * tangentScale) ** 2;
    return [tangentUtility, (tangentUtility + best.utility) / 2, best.utility];
  })();

  const curveFor = (level: number, index: number, highlight: boolean): VNode | null => {
    const id = `${family}-ic-${index}-${fmt(level, 1)}`;
    const color = highlight ? MARKER.green : MARKER.green;
    const width = highlight ? 2.4 : 1.3;
    if (level <= 0 && family !== "quasi") return null;
    if (family === "comp") {
      return (
        <g>
          <InkLine x1={toX(level)} y1={toY(level)} x2={toX(level)} y2={toY(26)} id={`${id}-v`} color={color} width={width} draw={drawNow(1)} />
          <InkLine x1={toX(level)} y1={toY(level)} x2={toX(26)} y2={toY(level)} id={`${id}-h`} color={color} width={width} draw={drawNow(1)} />
        </g>
      );
    }
    const fn = family === "cd" ? (x: number) => level / x
      : family === "subs" ? (x: number) => level - x
      : family === "quasi" ? (x: number) => level - 4 * Math.log(x)
      : (x: number) => Math.sqrt(Math.max(0, level - x * x));
    const fromX = family === "cd" ? Math.max(0.3, level / 26) : family === "quasi" ? 0.15 : 0;
    const toXValue = family === "concave" ? Math.min(26, Math.sqrt(level)) : family === "subs" ? Math.min(26, level) : 26;
    return <InkCurve points={curvePoints(frame, fn, fromX, toXValue, 90)} id={id} color={color} width={width} dashed={!highlight} draw={drawNow(1)} />;
  };

  const plot: VNode[] = [];
  plot.push(<InkLine x1={toX(0)} y1={toY(INCOME / p2)} x2={toX(INCOME / p1)} y2={toY(0)} id={`budget-${fmt(p1, 2)}-${fmt(p2, 2)}`} color={MARKER.blue} width={2.6} draw={drawNow(0)} />);
  if (show(1)) levels.forEach((level, index) => { const curve = curveFor(level, index, show(2) && Math.abs(level - best.utility) < 1e-6); if (curve) plot.push(curve); });

  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={[0, 5, 10, 15, 20, 25]} yTicks={[5, 10, 15, 20, 25]} xLabel="x" yLabel="y" />];
  drawing.push(<g clip-path={sketch.clip()}>{plot}</g>);
  drawing.push(<Note x={toX(Math.min(INCOME / p1, 25)) - 4} y={toY(0.9)} text="budget" color={MARKER.blue} anchor="end" size={16} />);
  if (show(2)) {
    if (family === "concave") {
      const scale = INCOME / (p1 * p1 + p2 * p2);
      drawing.push(<Dot x={toX(p1 * scale)} y={toY(p2 * scale)} color={MARKER.red} hollow radius={5} />);
      drawing.push(<Note x={toX(p1 * scale) + 10} y={toY(p2 * scale) - 8} text="tangency = worst" color={MARKER.red} size={16} />);
    }
    drawing.push(<Ring x={toX(best.x)} y={toY(best.y)} id={`best-${family}-${step}`} color={ACCENT} draw={drawNow(2)} />);
    drawing.push(<Dot x={toX(best.x)} y={toY(best.y)} color={ACCENT} />);
    drawing.push(<Note x={toX(best.x) + (best.x > 18 ? -12 : 12)} y={toY(best.y) - 12} text={`(${fmt(best.x, 1)}, ${fmt(best.y, 1)})`} color={ACCENT} anchor={best.x > 18 ? "end" : "start"} size={18} />);
  }
  const familyLabel = FAMILIES.find((f) => f.key === family)?.label ?? "";
  const TEX = [
    `${fmt(p1, 2)}x + ${fmt(p2, 2)}y = 24`,
    `U = ${familyLabel.replace("min{x, y}", "\\min\\{x, y\\}").replace("²", "^2").replace("²", "^2").replace("·", "\\cdot ")}`,
    best.rule,
    best.rule,
  ];
  const note = step === 2 ? best.note : NOTES[step];
  return (
    <SketchGraph sketch={sketch} note={note} tex={TEX[step]} footnote="Income 24, illustrative prices."
      ariaLabel={`Budget line and indifference curves for U = ${familyLabel}; the optimal bundle is (${fmt(best.x, 1)}, ${fmt(best.y, 1)}).`}
      top={<Toggle label="Utility function" options={FAMILIES} active={family} onPick={setFamily} />}
      explore={<>
        <div class="graph-sliders">
          <Slider label="price of x" value={prices.p1} min={1} max={4} step={0.5} onInput={(value) => setPrices((state) => ({ ...state, p1: value }))} />
          <Slider label="price of y" value={prices.p2} min={1} max={4} step={0.5} onInput={(value) => setPrices((state) => ({ ...state, p2: value }))} />
        </div>
        <Presets presets={[{ label: "Start", apply: () => setPrices({ p1: 2, p2: 2.5 }) }, { label: "Equal prices", apply: () => setPrices({ p1: 2, p2: 2 }) }, { label: "x cheap", apply: () => setPrices({ p1: 1, p2: 3 }) }, { label: "x dear", apply: () => setPrices({ p1: 3.5, p2: 1.5 }) }]} />
      </>}>
      {drawing}
    </SketchGraph>
  );
}

// ---------------------------------------------------------------------------
// Slutsky decomposition (with Hicks for comparison)
// ---------------------------------------------------------------------------

function Slutsky(): VNode {
  const M = 40, P2 = 1, OLD_P1 = 2;
  const [newPrice, setNewPrice] = useState(1);
  const NOTES = [
    "Start: U = xy, income 40, p₁ = 2, p₂ = 1. She chooses A, half her income on each good.",
    "p₁ falls. The budget line pivots out around the y-intercept, and she moves to C.",
    "The Slutsky line: the new slope, drawn through the OLD bundle A. Its best point is B.",
    "A → B is the substitution effect (towards the cheaper good). B → C is the income effect.",
    "The Hicks line (dashed red) keeps her on the OLD curve instead. It lies below the Slutsky line: Hicks compensation is smaller.",
    "Your turn. Set the new price of good 1, including a rise.",
  ];
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMax: 42, yMax: 42 }], aspect: 0.9, maxWidth: 560, padding: { left: 36, bottom: 40, top: 18 } });
  const { show, drawNow, step } = sketch;
  const frame = sketch.frames[0];
  const toX = frame.x, toY = frame.y;
  const { p1 } = useGlide({ p1: step === 5 ? newPrice : 1 }, false);
  const A = { x: M / (2 * OLD_P1), y: M / (2 * P2) };
  const oldUtility = A.x * A.y;
  const slutskyIncome = p1 * A.x + P2 * A.y;
  const B = { x: slutskyIncome / (2 * p1), y: slutskyIncome / (2 * P2) };
  const C = { x: M / (2 * p1), y: M / (2 * P2) };
  const hicksIncome = Math.sqrt(4 * p1 * P2 * oldUtility);
  const H = { x: hicksIncome / (2 * p1), y: hicksIncome / (2 * P2) };
  const line = (income: number, price: number, id: string, color: string, width: number, draw: boolean, dashed = false): VNode => dashed
    ? <InkDashed x1={toX(0)} y1={toY(income / P2)} x2={toX(income / price)} y2={toY(0)} id={id} color={color} width={width} draw={draw} />
    : <InkLine x1={toX(0)} y1={toY(income / P2)} x2={toX(income / price)} y2={toY(0)} id={id} color={color} width={width} draw={draw} />;
  const curve = (level: number, id: string, color: string, width: number, draw: boolean, dashed = false) =>
    <InkCurve points={curvePoints(frame, (x) => level / x, Math.max(0.5, level / 42), 42, 90)} id={id} color={color} width={width} draw={draw} dashed={dashed} />;

  const plot: VNode[] = [];
  plot.push(line(M, OLD_P1, "old-line", INK_SOFT, 2.2, drawNow(0)));
  plot.push(curve(oldUtility, "old-ic", MARKER.green, 1.6, drawNow(0)));
  if (show(1)) {
    plot.push(line(M, p1, `new-line-${fmt(p1, 2)}`, MARKER.blue, 2.6, drawNow(1)));
    plot.push(curve(C.x * C.y, `new-ic-${fmt(p1, 2)}`, MARKER.green, 1.3, drawNow(1), true));
  }
  if (show(2)) {
    plot.push(line(slutskyIncome, p1, `slutsky-${fmt(p1, 2)}`, MARKER.purple, 2, drawNow(2)));
    plot.push(curve(B.x * B.y, `slutsky-ic-${fmt(p1, 2)}`, MARKER.green, 1.1, drawNow(2), true));
  }
  if (show(4) && step !== 3) plot.push(line(hicksIncome, p1, `hicks-${fmt(p1, 2)}`, MARKER.red, 1.8, drawNow(4), true));

  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={[0, 10, 20, 30, 40]} yTicks={[10, 20, 30, 40]} xLabel="x₁" yLabel="x₂" />];
  drawing.push(<g clip-path={sketch.clip()}>{plot}</g>);
  const label = (point: { x: number; y: number }, text: string, color: string, dx = 10, dy = -10) => [
    <Dot x={toX(point.x)} y={toY(point.y)} color={color} />,
    <Note x={toX(point.x) + dx} y={toY(point.y) + dy} text={text} color={color} size={18} />,
  ];
  drawing.push(...label(A, "A", INK, -18, -8));
  if (show(1)) drawing.push(...label(C, "C", MARKER.blue, 10, -10));
  if (show(2)) drawing.push(...label(B, "B", ACCENT, 8, -10));
  if (show(3) && step !== 4) {
    drawing.push(<ShiftArrow x1={toX(A.x)} y1={toY(A.y) + 14} x2={toX(B.x)} y2={toY(A.y) + 14} id={`sub-${fmt(p1, 2)}-${step}`} color={ACCENT} draw={drawNow(3)} />);
    drawing.push(<ShiftArrow x1={toX(B.x)} y1={toY(Math.min(A.y, B.y, C.y)) + 34} x2={toX(C.x)} y2={toY(Math.min(A.y, B.y, C.y)) + 34} id={`inc-${fmt(p1, 2)}-${step}`} color={MARKER.blue} draw={drawNow(3)} />);
  }
  if (show(4) && step !== 3) drawing.push(...label(H, "H", MARKER.red, -22, 18));

  const TEX = [
    `A = (\\tfrac{40}{4}, \\tfrac{40}{2}) = (10, 20),\\quad U_A = 200`,
    `p_1' = ${fmt(p1, 2)}:\\ C = (${fmt(C.x, 2)}, ${fmt(C.y, 2)})`,
    `m' = p_1'x_1^A + p_2x_2^A = ${fmt(slutskyIncome, 2)}:\\ B = (${fmt(B.x, 2)}, ${fmt(B.y, 2)})`,
    `\\Delta x_1:\\ \\text{sub } ${fmt(B.x - A.x, 2)} + \\text{inc } ${fmt(C.x - B.x, 2)} = ${fmt(C.x - A.x, 2)}`,
    `m^H = ${fmt(hicksIncome, 2)} \\le m' = ${fmt(slutskyIncome, 2)}`,
    `p_1' = ${fmt(p1, 2)}:\\ \\text{sub } ${fmt(B.x - A.x, 2)},\\ \\text{inc } ${fmt(C.x - B.x, 2)},\\ m' - m = ${fmt(slutskyIncome - M, 2)},\\ m^H - m = ${fmt(hicksIncome - M, 2)}`,
  ];
  return (
    <SketchGraph sketch={sketch} note={NOTES[step]} tex={TEX[step]} footnote="U = x₁x₂, income 40, p₂ = 1, old p₁ = 2."
      ariaLabel={`Slutsky decomposition for a change in p1 from 2 to ${fmt(p1, 2)}: substitution ${fmt(B.x - A.x, 2)}, income ${fmt(C.x - B.x, 2)}.`}
      explore={<>
        <div class="graph-sliders"><Slider label="new p₁" value={newPrice} min={0.8} max={4} step={0.1} onInput={setNewPrice} /></div>
        <Presets presets={[{ label: "Fall to 1", apply: () => setNewPrice(1) }, { label: "Rise to 3", apply: () => setNewPrice(3) }]} />
      </>}>
      {drawing}
    </SketchGraph>
  );
}

// ---------------------------------------------------------------------------
// Labor supply: leisure against consumption
// ---------------------------------------------------------------------------

const HOURS = 24;

function LaborSupply(): VNode {
  const [kind, setKind] = useState("cd");
  const [target, setTarget] = useState({ wage: 2, lump: 0 });
  const NOTES = [
    "Leisure L on the horizontal axis, consumption Y on the vertical. The endowment is all 24 hours as leisure, with only W₀ to spend.",
    "Each hour of leisure given up buys W of consumption: the budget line Y = W(24 − L) + W₀ has slope −W.",
    "",
    "Your turn. Change the wage and the lump sum W₀, or switch the utility function.",
  ];
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMax: 26, yMax: 70 }], aspect: 0.82, maxWidth: 580, padding: { left: 40, bottom: 44, top: 18 } });
  const { show, drawNow, step } = sketch;
  const frame = sketch.frames[0];
  const toX = frame.x, toY = frame.y;
  const { wage, lump } = useGlide(step === 3 ? target : { wage: 2, lump: 0 }, false);
  const desired = kind === "cd" ? 12 + lump / (2 * wage) : 4 / (wage * wage);
  const leisure = clamp(desired, 0.5, HOURS);
  const hours = HOURS - leisure;
  const consumption = wage * hours + lump;
  const utility = kind === "cd" ? leisure * consumption : 4 * Math.sqrt(leisure) + consumption;
  const indifference = kind === "cd" ? (l: number) => utility / l : (l: number) => utility - 4 * Math.sqrt(l);

  const plot: VNode[] = [];
  if (show(1)) plot.push(<InkLine x1={toX(0)} y1={toY(wage * HOURS + lump)} x2={toX(HOURS)} y2={toY(lump)} id={`labor-budget-${fmt(wage, 2)}-${fmt(lump, 1)}`} color={MARKER.blue} width={2.6} draw={drawNow(1)} />);
  if (show(2)) plot.push(<InkCurve points={curvePoints(frame, indifference, kind === "cd" ? Math.max(0.6, utility / 70) : 0.1, 26, 90)} id={`labor-ic-${kind}-${fmt(utility, 1)}`} color={MARKER.green} width={2.2} draw={drawNow(2)} />);
  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={[0, 6, 12, 18, 24]} yTicks={[10, 20, 30, 40, 50, 60]} xLabel="leisure L (hours)" yLabel="Y" />];
  drawing.push(<g clip-path={sketch.clip()}>{plot}</g>);
  drawing.push(<InkDashed x1={toX(HOURS)} y1={frame.top} x2={toX(HOURS)} y2={frame.bottom} id="time-limit" color={INK_SOFT} width={1.2} dash={4} gap={4} />);
  drawing.push(<Dot x={toX(HOURS)} y={toY(lump)} color={INK} radius={4.5} />);
  drawing.push(<Note x={toX(HOURS) - 6} y={toY(lump) - 44} text="endowment (24, W₀)" color={INK} anchor="end" size={16} />);
  if (show(2)) {
    drawing.push(<Ring x={toX(leisure)} y={toY(consumption)} id={`labor-best-${step}`} color={ACCENT} draw={drawNow(2)} />);
    drawing.push(<Dot x={toX(leisure)} y={toY(consumption)} color={ACCENT} />);
    drawing.push(<Note x={toX(leisure) - 12} y={toY(consumption) - 12} text={`L = ${fmt(leisure, 1)}, Y = ${fmt(consumption, 1)}`} color={ACCENT} anchor={leisure > 14 ? "end" : "start"} size={17} />);
    if (hours > 0.3) {
      drawing.push(<ShiftArrow x1={toX(leisure)} y1={frame.bottom - 12} x2={toX(HOURS)} y2={frame.bottom - 12} id={`hours-${fmt(leisure, 1)}`} color={MARKER.red} />);
      drawing.push(<Note x={(toX(leisure) + toX(HOURS)) / 2} y={frame.bottom - 20} text={`work H = ${fmt(hours, 1)}`} color={MARKER.red} anchor="middle" size={16} />);
    }
  }
  const rule = kind === "cd"
    ? `\\tfrac{Y}{L} = W \\Rightarrow L = 12 + \\tfrac{W_0}{2W} = ${fmt(leisure, 2)},\\ H = ${fmt(hours, 2)}`
    : `\\tfrac{2}{\\sqrt L} = W \\Rightarrow L = \\tfrac{4}{W^2} = ${fmt(desired, 2)}${desired > HOURS ? "\\to 24\\ (\\text{no work})" : ""},\\ H = ${fmt(hours, 2)}`;
  const TEX = [
    `T = 24,\\ W_0 = ${fmt(lump, 1)}`,
    `Y = ${fmt(wage, 2)}(24 - L) + ${fmt(lump, 1)}`,
    rule,
    rule,
  ];
  const note = step === 2
    ? (kind === "cd" ? "U = L·Y: the tangency MRS = Y/L = W. With W₀ = 0 she takes 12 hours of leisure at any wage: labor supply is vertical." : "U = 4√L + Y: MRS = 2/√L = W pins leisure from the wage alone. W₀ changes Y, never the hours.")
    : NOTES[step];
  return (
    <SketchGraph sketch={sketch} note={note} tex={TEX[step]} footnote="24 hours, price of Y = 1. Illustrative wages."
      ariaLabel={`Labor supply: leisure ${fmt(leisure, 1)} hours, work ${fmt(hours, 1)} hours, consumption ${fmt(consumption, 1)}.`}
      top={<Toggle label="Utility function" options={[{ key: "cd", label: "U = L·Y" }, { key: "quasi", label: "U = 4√L + Y" }]} active={kind} onPick={setKind} />}
      explore={<>
        <div class="graph-sliders">
          <Slider label="wage W" value={target.wage} min={0.4} max={2.5} step={0.1} onInput={(value) => setTarget((state) => ({ ...state, wage: value }))} />
          <Slider label="lump sum W₀" value={target.lump} min={0} max={20} step={1} onInput={(value) => setTarget((state) => ({ ...state, lump: value }))} />
        </div>
        <Presets presets={[{ label: "Reset", apply: () => setTarget({ wage: 2, lump: 0 }) }, { label: "Low wage", apply: () => setTarget({ wage: 0.4, lump: 0 }) }]} />
      </>}>
      {drawing}
    </SketchGraph>
  );
}

// ---------------------------------------------------------------------------
// Two periods: saver or borrower, interest and inflation
// ---------------------------------------------------------------------------

const ENDOWMENTS: Record<string, { now: number; later: number }> = { saver: { now: 40, later: 10 }, borrower: { now: 10, later: 40 } };

function TwoPeriods(): VNode {
  const [who, setWho] = useState("saver");
  const [target, setTarget] = useState({ rate: 0.1, inflation: 0.3 });
  const NOTES = [
    "r = π, so the real rate is zero: the budget line through the endowment E has slope −1. U = C₁C₂ puts the optimum at C₁ = C₂.",
    "",
    "Inflation rises to 30% with r still 10%. The real rate falls, so the line pivots around E and gets flatter.",
    "Your turn. Change r and π, or switch between a saver and a borrower at the top.",
  ];
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMax: 62, yMax: 62 }], aspect: 0.9, maxWidth: 560, padding: { left: 36, bottom: 40, top: 18 } });
  const { show, drawNow, step } = sketch;
  const frame = sketch.frames[0];
  const toX = frame.x, toY = frame.y;
  const endowment = ENDOWMENTS[who];
  const live = useGlide(step === 3 ? target : { rate: 0.1, inflation: 0.3 }, false);
  const solve = (gross: number) => {
    const wealth = endowment.now + endowment.later / gross;
    return { c1: wealth / 2, c2: (gross * wealth) / 2, wealth, gross };
  };
  const before = solve(1);
  const after = solve((1 + live.rate) / (1 + live.inflation));
  const saver = before.c1 < endowment.now;
  const better = after.c1 * after.c2 > before.c1 * before.c2 + 1e-6;
  const line = (plan: ReturnType<typeof solve>, id: string, color: string, width: number, draw: boolean) =>
    <InkLine x1={toX(0)} y1={toY(endowment.later + plan.gross * endowment.now)} x2={toX(plan.wealth)} y2={toY(0)} id={id} color={color} width={width} draw={draw} />;
  const curve = (level: number, id: string, dashed: boolean, draw: boolean) =>
    <InkCurve points={curvePoints(frame, (c1) => level / c1, Math.max(0.5, level / 62), 62, 90)} id={id} color={MARKER.green} width={dashed ? 1.3 : 2} dashed={dashed} draw={draw} />;

  const plot: VNode[] = [line(before, `tp-old-${who}`, step >= 2 ? INK_SOFT : MARKER.blue, 2.4, drawNow(0)), curve(before.c1 * before.c2, `tp-old-ic-${who}`, step >= 2, drawNow(0))];
  if (show(2)) {
    plot.push(line(after, `tp-new-${who}-${fmt(after.gross, 3)}`, MARKER.blue, 2.6, drawNow(2)));
    plot.push(curve(after.c1 * after.c2, `tp-new-ic-${who}-${fmt(after.gross, 3)}`, false, drawNow(2)));
  }
  const drawing: VNode[] = [<SketchAxes frame={frame} id="axes" xTicks={[0, 10, 20, 30, 40, 50, 60]} yTicks={[10, 20, 30, 40, 50, 60]} xLabel="C₁ (now)" yLabel="C₂" />];
  drawing.push(<g clip-path={sketch.clip()}>{plot}</g>);
  drawing.push(<InkDashed x1={toX(0)} y1={toY(0)} x2={toX(60)} y2={toY(60)} id="diag" color={INK_SOFT} width={1} dash={3} gap={5} />);
  drawing.push(<Dot x={toX(endowment.now)} y={toY(endowment.later)} color={INK} radius={5} />);
  drawing.push(<Note x={toX(endowment.now) + 10} y={toY(endowment.later) - 10} text={`E = (${endowment.now}, ${endowment.later})`} color={INK} size={17} />);
  drawing.push(<Dot x={toX(before.c1)} y={toY(before.c2)} color={step >= 2 ? INK_SOFT : ACCENT} />);
  drawing.push(<Note x={toX(before.c1) - 12} y={toY(before.c2) + 22} text="A" color={step >= 2 ? INK_SOFT : ACCENT} anchor="end" size={19} />);
  if (show(1)) {
    drawing.push(<ShiftArrow x1={toX(endowment.now)} y1={toY(0) - 14} x2={toX(before.c1)} y2={toY(0) - 14} id={`save-${who}`} color={saver ? MARKER.green : MARKER.red} draw={drawNow(1)} />);
    drawing.push(<Note x={(toX(endowment.now) + toX(before.c1)) / 2} y={toY(0) - 22} text={saver ? "saves" : "borrows"} color={saver ? MARKER.green : MARKER.red} anchor="middle" size={17} />);
  }
  if (show(2)) {
    drawing.push(<Ring x={toX(after.c1)} y={toY(after.c2)} id={`tp-b-${step}`} color={ACCENT} draw={drawNow(2)} />);
    drawing.push(<Dot x={toX(after.c1)} y={toY(after.c2)} color={ACCENT} />);
    drawing.push(<Note x={toX(after.c1) + 12} y={toY(after.c2) - 12} text="B" color={ACCENT} size={19} />);
  }
  const realRate = after.gross - 1;
  const TEX = [
    `C_1 + C_2 = ${endowment.now + endowment.later},\\quad A = (${fmt(before.c1, 1)}, ${fmt(before.c2, 1)})`,
    `S = I_1 - C_1 = ${endowment.now} - ${fmt(before.c1, 1)} = ${fmt(endowment.now - before.c1, 1)}`,
    `1 + \\rho = \\tfrac{1.1}{1.3} = ${fmt(after.gross, 3)}:\\ B = (${fmt(after.c1, 1)}, ${fmt(after.c2, 1)}),\\ U\\ ${better ? "\\uparrow" : "\\downarrow"}`,
    `1 + \\rho = \\tfrac{1 + ${fmt(live.rate, 2)}}{1 + ${fmt(live.inflation, 2)}} = ${fmt(after.gross, 3)}\\ (\\rho = ${fmt(realRate * 100, 1)}\\%):\\ U\\ ${better ? "\\uparrow" : Math.abs(after.gross - 1) < 1e-3 ? "=" : "\\downarrow"}`,
  ];
  const note = step === 1
    ? (saver ? "Optimum left of E: she consumes less than her income now, so she is a saver." : "Optimum right of E: he consumes more than his income now, so he is a borrower.")
    : step === 2 ? `${NOTES[2]} ${saver ? "A saver loses: her old bundle is now outside the set." : "A borrower gains: his old bundle is now inside the set."}` : NOTES[step];
  return (
    <SketchGraph sketch={sketch} note={note} tex={TEX[step]} footnote="U = C₁C₂, illustrative incomes."
      ariaLabel={`Two-period choice for a ${who}: before (${fmt(before.c1, 1)}, ${fmt(before.c2, 1)}), after (${fmt(after.c1, 1)}, ${fmt(after.c2, 1)}).`}
      top={<Toggle label="Endowment" options={[{ key: "saver", label: "Saver: E = (40, 10)" }, { key: "borrower", label: "Borrower: E = (10, 40)" }]} active={who} onPick={setWho} />}
      explore={<>
        <div class="graph-sliders">
          <Slider label="nominal rate r" value={target.rate} min={0} max={0.5} step={0.05} onInput={(value) => setTarget((state) => ({ ...state, rate: value }))} />
          <Slider label="inflation π" value={target.inflation} min={0} max={0.5} step={0.05} onInput={(value) => setTarget((state) => ({ ...state, inflation: value }))} />
        </div>
        <Presets presets={[{ label: "Inflation up", apply: () => setTarget({ rate: 0.1, inflation: 0.3 }) }, { label: "Rate up", apply: () => setTarget({ rate: 0.4, inflation: 0.1 }) }]} />
      </>}>
      {drawing}
    </SketchGraph>
  );
}
