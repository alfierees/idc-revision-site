import type { VNode } from "preact";
import { useSketch, SketchGraph, SketchAxes, InkLine, InkDashed, Hatch, Note, Dot, Ring, INK, ACCENT, MARKER, WASH } from "./sketch";

// Micro sample exam 1, open question 2 (the campus coffee monopoly), MC = 0.5Q.
//   part b — two-part tariff on combined demand P = 22 − Q/20: price at MC where
//            demand meets MC: 22 − Q/20 = 0.5Q ⇒ Q = 40, p = 20; fee T = CS = 40;
//            profit 840 − TC(40) = 840 − 400 = 440.
//   part c — one price: MBA demand p = 22 − Q/10 (others choke at 11). With only
//            MBAs: MR = 22 − Q/5 = 0.5Q ⇒ Q = 220/7 ≈ 31.4, p = 132/7 ≈ 18.86.
//            Serving the others too would need p ≤ 11 and Q = 110, where MC = 55.
//   type: coffee-monopoly
//   part: b | c

const PARTS = {
  b: {
    domain: { xMax: 60, yMax: 30 },
    notes: [
      "All students together: demand P = 22 − Q/20. Marginal cost rises: MC = 0.5Q.",
      "A two-part tariff charges the efficient price per coffee: where demand meets MC.",
      "The card fee takes the whole consumer surplus: T = 40.",
      "Profit = revenue 840 minus total cost 400 = 440.",
    ],
    tex: ["P = 22 - \\tfrac{Q}{20},\\quad MC = 0.5Q", "22 - \\tfrac{Q}{20} = 0.5Q \\;\\Rightarrow\\; Q = 40,\\; p = MC = 20", "T = \\tfrac12(22 - 20)(40) = 40", "\\pi = 20(40) + 40 - 0.25(40)^2 = 440"],
  },
  c: {
    domain: { xMax: 120, yMax: 60 },
    notes: [
      "MBA students: p = 22 − Q/10. Everyone else only buys below 11.",
      "Guess: serve only MBAs. Their MR is 22 − Q/5; set it equal to MC = 0.5Q.",
      "Read the price off MBA demand: 18.86, well above 11, so the others buy nothing. The guess holds.",
      "Why not serve everyone? At p = 11 you'd sell 110 coffees, where MC is already 55. Ruinous.",
    ],
    tex: ["p_{MBA} = 22 - \\tfrac{Q}{10},\\quad p_{\\text{others}} = 11 - \\tfrac{Q}{20}", "22 - \\tfrac{Q}{5} = 0.5Q \\;\\Rightarrow\\; Q = \\tfrac{220}{7} \\approx 31.4", "p = 22 - \\tfrac{Q}{10} = \\tfrac{132}{7} \\approx 18.86 > 11", "Q = 110:\\; MC = 55 \\gg p = 11"],
  },
};

export default function CoffeeMonopoly({ part = "b" }: { part?: string }): VNode {
  const config = part === "c" ? PARTS.c : PARTS.b;
  const sketch = useSketch({ stepCount: config.notes.length, domains: [config.domain], maxWidth: 640, padding: { left: 40, bottom: 44, top: 22 } });
  const { show, drawNow, step } = sketch;
  const frame = sketch.frames[0];
  const toX = frame.x, toY = frame.y;
  const drawing: VNode[] = [];
  const plot: VNode[] = [];

  if (part !== "c") {
    drawing.push(<SketchAxes frame={frame} id="axes" xTicks={[0, 10, 20, 30, 40, 50, 60]} yTicks={[5, 10, 15, 20, 25, 30]} xLabel="coffees Q" yLabel="P" />);
    if (show(2)) plot.push(<Hatch points={[[toX(0), toY(22)], [toX(0), toY(20)], [toX(40), toY(20)]]} id={`${sketch.uid}-fee`} wash={WASH.green} ink={MARKER.green} gap={5} draw={drawNow(2)} />);
    plot.push(<InkLine x1={toX(0)} y1={toY(22)} x2={toX(60)} y2={toY(19)} id="demand" color={MARKER.blue} width={2.4} draw={drawNow(0)} />);
    plot.push(<InkLine x1={toX(0)} y1={toY(0)} x2={toX(60)} y2={toY(30)} id="mc" color={MARKER.red} width={2.3} delay={300} draw={drawNow(0)} />);
    if (show(1)) {
      plot.push(<InkDashed x1={toX(40)} y1={toY(20)} x2={toX(40)} y2={frame.bottom} id="q" color={INK} width={1.2} dash={4} gap={4} draw={drawNow(1)} />);
      plot.push(<InkDashed x1={frame.left} y1={toY(20)} x2={toX(40)} y2={toY(20)} id="p" color={INK} width={1.2} dash={4} gap={4} draw={drawNow(1)} />);
    }
    drawing.push(<g clip-path={sketch.clip()}>{plot}</g>);
    drawing.push(<Note x={toX(56)} y={toY(19.2) - 10} text="demand" color={MARKER.blue} anchor="end" size={18} draw={drawNow(0)} />);
    drawing.push(<Note x={toX(50)} y={toY(25) - 8} text="MC = 0.5Q" color={MARKER.red} anchor="end" size={18} draw={drawNow(0)} />);
    if (show(1)) {
      drawing.push(<Ring x={toX(40)} y={toY(20)} id="ring" color={ACCENT} draw={drawNow(1)} />);
      drawing.push(<Note x={toX(40) + 12} y={toY(20) + 24} text="Q = 40, p = 20" color={INK} size={18} delay={300} draw={drawNow(1)} />);
    }
    if (show(2)) drawing.push(<Note x={toX(12)} y={toY(21) - 12} text="card fee T = 40" color={MARKER.green} size={18} draw={drawNow(2)} />);
  } else {
    drawing.push(<SketchAxes frame={frame} id="axes" xTicks={[0, 20, 40, 60, 80, 100, 120]} yTicks={[10, 20, 30, 40, 50, 60]} xLabel="coffees Q" yLabel="P" />);
    plot.push(<InkLine x1={toX(0)} y1={toY(22)} x2={toX(120)} y2={toY(10)} id="mba" color={MARKER.purple} width={2.4} draw={drawNow(0)} />);
    plot.push(<InkLine x1={toX(0)} y1={toY(11)} x2={toX(120)} y2={toY(5)} id="others" color={MARKER.grey} width={1.8} delay={300} draw={drawNow(0)} />);
    if (show(1)) {
      plot.push(<InkDashed x1={toX(0)} y1={toY(22)} x2={toX(110)} y2={toY(0)} id="mr" color={MARKER.blue} width={1.9} draw={drawNow(1)} />);
      plot.push(<InkLine x1={toX(0)} y1={toY(0)} x2={toX(120)} y2={toY(60)} id="mc" color={MARKER.red} width={2.3} delay={250} draw={drawNow(1)} />);
    }
    if (show(2)) {
      plot.push(<InkDashed x1={toX(220 / 7)} y1={toY(110 / 7)} x2={toX(220 / 7)} y2={toY(132 / 7)} id="up" color={INK} width={1.2} dash={4} gap={4} draw={drawNow(2)} />);
      plot.push(<InkDashed x1={toX(220 / 7)} y1={toY(132 / 7)} x2={frame.left} y2={toY(132 / 7)} id="left" color={INK} width={1.2} dash={4} gap={4} delay={250} draw={drawNow(2)} />);
    }
    if (show(3)) plot.push(<InkDashed x1={toX(110)} y1={toY(11)} x2={toX(110)} y2={toY(55)} id="gap" color={MARKER.red} width={2} dash={5} gap={3} draw={drawNow(3)} />);
    drawing.push(<g clip-path={sketch.clip()}>{plot}</g>);
    drawing.push(<Note x={toX(118)} y={toY(10.2) - 10} text="MBA demand" color={MARKER.purple} anchor="end" size={18} draw={drawNow(0)} />);
    drawing.push(<Note x={toX(118)} y={toY(5.1) + 22} text="others (choke at 11)" color={MARKER.grey} anchor="end" size={17} draw={drawNow(0)} />);
    if (show(1)) {
      drawing.push(<Note x={toX(96)} y={toY(48) - 8} text="MC = 0.5Q" color={MARKER.red} anchor="end" size={18} draw={drawNow(1)} />);
      drawing.push(<Ring x={toX(220 / 7)} y={toY(110 / 7)} id="ring" color={ACCENT} draw={drawNow(1)} />);
    }
    if (show(2)) {
      drawing.push(<Dot x={toX(220 / 7)} y={toY(132 / 7)} color={INK} draw={drawNow(2)} />);
      drawing.push(<Note x={frame.left + 6} y={toY(132 / 7) - 8} text="p = 18.86" color={INK} size={19} delay={350} draw={drawNow(2)} />);
    }
    if (show(3)) {
      drawing.push(<Dot x={toX(110)} y={toY(11)} color={MARKER.grey} draw={drawNow(3)} />);
      drawing.push(<Dot x={toX(110)} y={toY(55)} color={MARKER.red} draw={drawNow(3)} />);
      drawing.push(<Note x={toX(110) - 10} y={toY(34)} text="MC 55 vs p 11" color={MARKER.red} anchor="end" size={18} delay={300} draw={drawNow(3)} />);
    }
  }

  return (
    <SketchGraph sketch={sketch} note={config.notes[step]} tex={config.tex[step]} ariaLabel={part === "c" ? "Coffee monopoly: serving only MBA students at 18.86." : "Coffee two-part tariff: price 20 per coffee and a card fee of 40."}>
      {drawing}
    </SketchGraph>
  );
}
