import { useId, useRef, useState } from "preact/hooks";
import type { VNode } from "preact";
import { makeFrame, PALETTE, C, Slider } from "./plot";
import { InkLine, InkDashed, Hatch, Note, Arrow, Ring, Tex, Steps, useWidth, useGlide, useFresh, fmt, coef } from "./sketch";

// Linear-demand monopoly, P = a − bQ with constant MC, built up step by step in
// the sketch style: demand → MR → MC → MR = MC → price off demand → welfare,
// then an explore step with draggable MC / demand handles and presets.
// The single most reusable micro picture.

interface Props { a?: number; b?: number; mc?: number; }

const Q_MAX = 120, P_MAX = 120;
const WASH = { cs: "rgba(55,138,221,0.14)", pi: "rgba(29,158,117,0.14)", dwl: "rgba(226,75,74,0.16)" };

const NOTES = [
  "Start with demand: the price buyers will pay at each quantity.",
  "Marginal revenue falls twice as fast as demand.",
  "Marginal cost is flat here.",
  "The monopolist produces where MR = MC.",
  "Then it charges what buyers will pay: read p* off demand, not MR.",
  "Output is lower than in a competitive market. The red wedge is deadweight loss.",
  "Your turn. Drag MC or the top of demand, or try a preset.",
];

export default function MonopolyCsDwl({ a: a0 = 100, b: b0 = 1, mc: mc0 = 20 }: Props): VNode {
  const [plotRef, W] = useWidth(680);
  const svgRef = useRef<SVGSVGElement>(null);
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const [step, setStep] = useState(0);
  const [target, setTarget] = useState({ a: a0, b: b0, mc: mc0 });
  const [drag, setDrag] = useState<null | "a" | "mc">(null);
  const v = useGlide(target, drag !== null);
  const fresh = useFresh(step);

  const H = Math.round(Math.max(270, Math.min(400, W * 0.68)));
  const f = makeFrame({ w: W, h: H, qMax: Q_MAX, pMax: P_MAX, padL: 40, padB: 40, padT: 18, padR: 16 });
  const narrow = W < 440;

  const { a, b } = v;
  const mc = Math.min(v.mc, a - 5);
  const Qm = (a - mc) / (2 * b), Pm = a - b * Qm, Qc = (a - mc) / b;
  const CS = 0.5 * (a - Pm) * Qm, PI = (Pm - mc) * Qm, DWL = 0.5 * (Pm - mc) * (Qc - Qm);

  const X = f.x, Y = f.y;
  const show = (k: number) => step >= k;
  const draw = (k: number) => fresh && step === k;
  const qEnd = Math.min(Q_MAX, a / b);

  // ---- equations, live with the current numbers ----
  const bTimes = (n: number) => (Math.abs(b - 1) < 1e-6 ? fmt(n) : `${fmt(b)}\\times${fmt(n)}`);
  const welfare = `\\color{${PALETTE.feeStroke}}{\\text{CS}} = ${fmt(CS)},\\quad \\color{${PALETTE.marginStroke}}{\\pi} = ${fmt(PI)},\\quad \\color{${PALETTE.dwlStroke}}{\\text{DWL}} = \\tfrac12(p^*-MC)(Q_c-Q^*) = ${fmt(DWL)}`;
  const TEX = [
    `P = ${fmt(a)} - ${coef(b)}Q`,
    `MR = \\frac{d(PQ)}{dQ} = ${fmt(a)} - ${coef(2 * b)}Q`,
    `MC = ${fmt(mc)}`,
    `${fmt(a)} - ${coef(2 * b)}Q = ${fmt(mc)} \\;\\Rightarrow\\; Q^* = ${fmt(Qm)}`,
    `p^* = ${fmt(a)} - ${bTimes(Qm)} = ${fmt(Pm)}`,
    welfare,
    `Q^* = ${fmt(Qm)},\\quad p^* = ${fmt(Pm)},\\quad \\color{${PALETTE.dwlStroke}}{\\text{DWL}} = ${fmt(DWL)}`,
  ];

  // ---- dragging ----
  const priceAt = (clientY: number) => {
    const r = svgRef.current!.getBoundingClientRect();
    return ((f.B - (clientY - r.top)) / (f.B - f.T)) * P_MAX;
  };
  const onMove = (e: PointerEvent) => {
    if (!drag) return;
    const p = Math.round(priceAt(e.clientY));
    if (drag === "mc") setTarget((t) => ({ ...t, mc: Math.max(0, Math.min(t.a - 10, p)) }));
    else setTarget((t) => ({ ...t, a: Math.max(40, Math.min(P_MAX, p)), mc: Math.min(t.mc, Math.max(40, Math.min(P_MAX, p)) - 10) }));
  };
  const grab = (which: "a" | "mc") => (e: PointerEvent) => {
    (e.currentTarget as Element).setPointerCapture(e.pointerId);
    setDrag(which);
  };

  // ---- the drawing ----
  const els: VNode[] = [];
  const tickStep = narrow ? 40 : 20;
  // axes
  els.push(<InkLine x1={f.L} y1={f.B} x2={f.R + 6} y2={f.B} id="ax-x" color={C.INK_SOFT} w={1.6} />);
  els.push(<InkLine x1={f.L} y1={f.B} x2={f.L} y2={f.T - 6} id="ax-y" color={C.INK_SOFT} w={1.6} />);
  for (let t = 0; t <= Q_MAX; t += tickStep) {
    els.push(<text x={X(t)} y={f.B + 16} text-anchor="middle" class="sk-tick">{t}</text>);
    if (t > 0) els.push(<text x={f.L - 7} y={Y(t) + 4} text-anchor="end" class="sk-tick">{t}</text>);
  }
  els.push(<Note x={f.L + 6} y={f.T + 8} text="P" color={C.INK_SOFT} size={18} />);
  els.push(<Note x={f.R} y={f.B - 8} text="Q" color={C.INK_SOFT} size={18} anchor="end" />);

  const plot: VNode[] = [];
  // welfare areas sit under the ink
  if (show(5)) {
    plot.push(<Hatch pts={[[X(0), Y(a)], [X(0), Y(Pm)], [X(Qm), Y(Pm)]]} id={`${uid}-cs`} wash={WASH.cs} ink={PALETTE.feeStroke} draw={draw(5)} />);
    plot.push(<Hatch pts={[[X(0), Y(Pm)], [X(Qm), Y(Pm)], [X(Qm), Y(mc)], [X(0), Y(mc)]]} id={`${uid}-pi`} wash={WASH.pi} ink={PALETTE.marginStroke} angle={-1} delay={250} draw={draw(5)} />);
    plot.push(<Hatch pts={[[X(Qm), Y(Pm)], [X(Qm), Y(mc)], [X(Qc), Y(mc)]]} id={`${uid}-dwl`} wash={WASH.dwl} ink={PALETTE.dwlStroke} gap={5} delay={500} draw={draw(5)} />);
  }
  if (show(2)) plot.push(<InkDashed x1={X(0)} y1={Y(mc)} x2={f.R} y2={Y(mc)} id="mc" color={PALETTE.mc} draw={draw(2)} />);
  if (show(1)) plot.push(<InkDashed x1={X(0)} y1={Y(a)} x2={X(a / (2 * b))} y2={Y(0)} id="mr" color={PALETTE.mr} w={2} draw={draw(1)} />);
  plot.push(<InkLine x1={X(0)} y1={Y(a)} x2={X(qEnd)} y2={Y(a - b * qEnd)} id="demand" color={C.INK} w={2.6} dur={800} draw={draw(0)} />);
  // MR = MC and the quantity it sets
  if (show(3)) {
    plot.push(<InkDashed x1={X(Qm)} y1={Y(mc)} x2={X(Qm)} y2={f.B} id="q-guide" color={PALETTE.marginStroke} w={1.4} dash={5} gap={4} delay={300} draw={draw(3)} />);
  }
  // price read off demand
  if (show(4)) {
    plot.push(<InkDashed x1={X(Qm)} y1={Y(mc)} x2={X(Qm)} y2={Y(Pm)} id="p-up" color={C.INK} w={1.4} dash={5} gap={4} draw={draw(4)} />);
    plot.push(<InkDashed x1={X(Qm)} y1={Y(Pm)} x2={f.L} y2={Y(Pm)} id="p-left" color={C.INK} w={1.4} dash={5} gap={4} delay={260} draw={draw(4)} />);
  }
  els.push(
    <g clip-path={`url(#${uid}-plot)`}>{plot}</g>,
  );

  // labels on top
  els.push(<Note x={X(qEnd) - 4} y={Y(a - b * qEnd) - 10} text="D" color={C.INK} anchor="end" size={21} draw={draw(0)} />);
  if (show(1)) els.push(<Note x={X(a / (2 * b)) + 6} y={Y(0) - 12} text="MR" color={PALETTE.mr} size={20} draw={draw(1)} />);
  if (show(2)) els.push(<Note x={step === 6 ? f.R - 36 : f.R - 2} y={Y(mc) - 8} text={`MC = ${fmt(mc)}`} color={PALETTE.mc} anchor="end" size={18} draw={draw(2)} />);
  if (show(3)) {
    els.push(<Ring x={X(Qm)} y={Y(mc)} id="ring-mrmc" color={C.ACCENT} draw={draw(3)} />);
    if (!narrow) els.push(<Note x={X(Qm) + 16} y={Y(mc) + 22} text="MR = MC" color={C.ACCENT} size={19} delay={300} draw={draw(3)} />);
    els.push(<Note x={X(Qm)} y={f.B + 32} text={`Q* = ${fmt(Qm)}`} color={PALETTE.marginStroke} anchor="middle" size={18} delay={500} draw={draw(3)} />);
  }
  if (show(4)) {
    els.push(<circle cx={X(Qm)} cy={Y(Pm)} r={4} style={`fill:${C.INK}`} class={draw(4) ? "sk-fade" : undefined} />);
    els.push(<Note x={f.L + 6} y={Y(Pm) - 8} text={`p* = ${fmt(Pm)}`} color={C.INK} size={19} delay={450} draw={draw(4)} />);
    if (step === 4) {
      const nx = X(Qm) + 58, ny = Y(mc) - 34;
      els.push(<Note x={nx} y={ny} text="not this height!" color={PALETTE.dwlStroke} size={18} delay={700} draw={draw(4)} />);
      els.push(<Arrow x1={nx - 4} y1={ny - 4} x2={X(Qm) + 8} y2={Y(mc) - 6} id="arr-not" color={PALETTE.dwlStroke} bend={-14} delay={800} draw={draw(4)} />);
    }
  }
  if (show(5)) {
    els.push(<Note x={X(Qm * 0.3)} y={(Y(a) + 2 * Y(Pm)) / 3 + 6} text="CS" color={PALETTE.feeStroke} anchor="middle" size={20} draw={draw(5)} />);
    els.push(<Note x={X(Qm * 0.5)} y={(Y(Pm) + Y(mc)) / 2 + 6} text="profit" color={PALETTE.marginStroke} anchor="middle" size={20} delay={250} draw={draw(5)} />);
    els.push(<Note x={X(Qm + (Qc - Qm) * 0.3)} y={Y(mc) - (Y(mc) - Y(Pm)) * 0.3 + 4} text="DWL" color={PALETTE.dwlStroke} anchor="middle" size={18} delay={500} draw={draw(5)} />);
  }
  // drag handles in the explore step
  if (step === 6) {
    const hx = f.R - 18;
    els.push(
      <g class={`sk-handle${drag === "mc" ? " sk-handle-on" : ""}`} onPointerDown={grab("mc")} onPointerMove={onMove} onPointerUp={() => setDrag(null)} onPointerCancel={() => setDrag(null)}>
        <circle class="sk-hit" cx={hx} cy={Y(mc)} r={18} />
        <circle class="sk-ring" cx={hx} cy={Y(mc)} r={9} style={`stroke:${C.ACCENT}`} />
        <circle cx={hx} cy={Y(mc)} r={5} style={`fill:${C.ACCENT}`} />
      </g>,
    );
    els.push(
      <g class={`sk-handle${drag === "a" ? " sk-handle-on" : ""}`} onPointerDown={grab("a")} onPointerMove={onMove} onPointerUp={() => setDrag(null)} onPointerCancel={() => setDrag(null)}>
        <circle class="sk-hit" cx={X(0)} cy={Y(a)} r={18} />
        <circle class="sk-ring" cx={X(0)} cy={Y(a)} r={9} style={`stroke:${C.ACCENT}`} />
        <circle cx={X(0)} cy={Y(a)} r={5} style={`fill:${C.ACCENT}`} />
      </g>,
    );
    if (!drag) {
      els.push(narrow
        ? <Note x={hx - 14} y={Y(mc) + 26} text="drag" color={C.ACCENT} anchor="end" size={17} />
        : <Note x={hx} y={Y(mc) + 30} text="drag" color={C.ACCENT} anchor="middle" size={17} />);
      els.push(<Note x={X(0) + 16} y={Y(a) + 5} text="drag" color={C.ACCENT} size={17} />);
    }
  }

  const preset = (t: Partial<typeof target>) => setTarget((cur) => ({ ...cur, ...t }));

  return (
    <div class="sk">
      <p class="sk-note" key={step}>{NOTES[step]}</p>
      <div class="sk-eq"><Tex tex={TEX[step]} /></div>
      <div class="sk-plot" ref={plotRef}>
        <svg
          ref={svgRef}
          width={W} height={H} viewBox={`0 0 ${W} ${H}`}
          role="img"
          aria-label={`Monopoly diagram. Demand P = ${fmt(a)} minus ${fmt(b)}Q, MC = ${fmt(mc)}. Q* = ${fmt(Qm)}, p* = ${fmt(Pm)}, deadweight loss ${fmt(DWL)}.`}
        >
          <defs><clipPath id={`${uid}-plot`}><rect x={f.L} y={f.T - 8} width={f.R - f.L + 8} height={f.B - f.T + 8} /></clipPath></defs>
          {els}
        </svg>
      </div>
      {step === 6 && (
        <div class="sk-explore">
          <div class="graph-sliders">
            <Slider label="intercept a" value={target.a} min={40} max={120} step={5} onInput={(n) => preset({ a: n, mc: Math.min(target.mc, n - 10) })} />
            <Slider label="slope b" value={target.b} min={0.5} max={2} step={0.25} onInput={(n) => preset({ b: n })} />
            <Slider label="MC" value={target.mc} min={0} max={target.a - 10} step={5} onInput={(n) => preset({ mc: n })} />
          </div>
          <div class="sk-presets" role="group" aria-label="Presets">
            <button type="button" class="sk-chip" onClick={() => preset({ mc: 50 })}>Costs rise (MC 50)</button>
            <button type="button" class="sk-chip" onClick={() => preset({ b: 2 })}>Steeper demand</button>
            <button type="button" class="sk-chip" onClick={() => preset({ mc: 0 })}>Free to produce</button>
            <button type="button" class="sk-chip" onClick={() => setTarget({ a: a0, b: b0, mc: mc0 })}>Reset</button>
          </div>
        </div>
      )}
      <Steps step={step} count={NOTES.length} onStep={setStep} label={`Step ${step + 1} of ${NOTES.length}`} />
    </div>
  );
}
