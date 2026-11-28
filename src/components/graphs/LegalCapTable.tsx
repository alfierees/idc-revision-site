import { useState } from "preact/hooks";
import type { VNode } from "preact";
import { useSketch, SketchGraph, InkDashed, Note, Toggle, Slider, MARKER, WASH, INK, INK_SOFT, INK_MUTED } from "./sketch";

// Legal & Tax, Lecture 8: a funding round on a cap table.
//   type: legal-cap-table
// Two founders hold 1,000,000 shares. An investor offers $2.5M for 25% fully
// diluted (the lecture's case study). Steps: founders → valuation → the round →
// a 10% pool created pre-money → the same pool post-money → a 2% hire sized
// with S·p/(1−p) → explore (investment, stake, pool, pre/post, hire).

type PoolMode = "pre" | "post";
interface Deal { invest: number; stake: number; pool: number; mode: PoolMode; hire: number; round: boolean }
interface Holder { key: string; label: string; shares: number; color: keyof typeof MARKER }

const FOUNDER = 500_000;
const S0 = 2 * FOUNDER;

function capTable(deal: Deal) {
  const post = deal.invest / deal.stake;
  const pre = post - deal.invest;
  let investor = 0, pool = 0, price = 0;
  if (deal.round) {
    if (deal.pool > 0 && deal.mode === "pre") {
      // The pool sits in the pre-round fully diluted count, so the price falls
      // and only the existing holders pay for it.
      const total = S0 / (1 - deal.stake - deal.pool);
      pool = deal.pool * total;
      investor = deal.stake * total;
      price = pre / (S0 + pool);
    } else {
      price = pre / S0;
      investor = deal.invest / price;
      if (deal.pool > 0) pool = ((S0 + investor) * deal.pool) / (1 - deal.pool);
    }
  }
  const beforeHire = S0 + investor + pool;
  const hire = deal.hire > 0 ? (beforeHire * deal.hire) / (1 - deal.hire) : 0;
  const holders: Holder[] = [
    { key: "a", label: "Founder A", shares: FOUNDER, color: "blue" },
    { key: "b", label: "Founder B", shares: FOUNDER, color: "purple" },
    { key: "pool", label: "Option pool", shares: pool, color: "amber" },
    { key: "inv", label: "Investor", shares: investor, color: "green" },
    { key: "hire", label: "New hire", shares: hire, color: "red" },
  ];
  return { post, pre, price, holders, total: beforeHire + hire, beforeHire, naive: beforeHire * deal.hire };
}

const NOTES = [
  "1. Two founders, 500,000 shares each: 1,000,000 shares, 50% each. The bar's length is the number of shares.",
  "2. The term sheet: $2.5M for 25%, fully diluted. 25% is a share of the company after the money, so post-money = 2.5M / 0.25 = $10M and pre-money = $7.5M.",
  "3. Price per share = pre-money / pre-round shares = $7.50, so the investor gets 333,333 new shares. The founders keep every share but fall to 37.5% each: dilution, a smaller slice of a bigger pie.",
  "4. The investor asks for a 10% option pool created pre-money. It goes into the pre-round count, the price falls to $6.50, the investor still gets exactly 25%, and only the founders pay: 32.5% each.",
  "5. The same 10% pool created post-money: now the investor is diluted too (22.5%). That is why investors want the pool pre-money.",
  "6. Back to the pre-money pool, and a hire at 2%: new shares = S × 0.02 / 0.98, not 2% of S. The naive 30,769 shares give only 1.96% of the new total.",
  "Your turn. Change the cheque, the stake, the pool and when it is created, and size a hire.",
];

const STEP_DEALS: Deal[] = [
  { invest: 2.5e6, stake: 0.25, pool: 0, mode: "pre", hire: 0, round: false },
  { invest: 2.5e6, stake: 0.25, pool: 0, mode: "pre", hire: 0, round: false },
  { invest: 2.5e6, stake: 0.25, pool: 0, mode: "pre", hire: 0, round: true },
  { invest: 2.5e6, stake: 0.25, pool: 0.1, mode: "pre", hire: 0, round: true },
  { invest: 2.5e6, stake: 0.25, pool: 0.1, mode: "post", hire: 0, round: true },
  { invest: 2.5e6, stake: 0.25, pool: 0.1, mode: "pre", hire: 0.02, round: true },
];

const int = (v: number) => Math.round(v).toLocaleString("en-US");
const pct = (v: number) => `${(Math.round(v * 1000) / 10).toFixed(1)}%`;
const millions = (v: number) => `$${(Math.round(v / 1e4) / 100).toLocaleString("en-US", { maximumFractionDigits: 2 })}M`;

export default function LegalCapTable(): VNode {
  const [invest, setInvest] = useState(2.5);
  const [stake, setStake] = useState(25);
  const [pool, setPool] = useState(10);
  const [mode, setMode] = useState<PoolMode>("pre");
  const [hire, setHire] = useState(2);
  const sketch = useSketch({ stepCount: NOTES.length, domains: [{ xMin: 0, xMax: 1, yMin: 0, yMax: 1 }], maxWidth: 600, aspect: 0.62, minHeight: 340, maxHeight: 380, padding: { left: 6, right: 6, top: 8, bottom: 6 } });
  const { step } = sketch;
  const frame = sketch.frames[0];
  const exploring = step === NOTES.length - 1;
  const deal: Deal = exploring
    ? { invest: invest * 1e6, stake: stake / 100, pool: pool / 100, mode, hire: hire / 100, round: true }
    : STEP_DEALS[step];
  const t = capTable(deal);
  const showValuation = exploring || step >= 1;

  const W = frame.right - frame.left;
  const x0 = frame.left;
  const parts: VNode[] = [];
  const text = (x: number, y: number, s: string, opts: { color?: string; weight?: number; size?: number; anchor?: string; mono?: boolean } = {}) => (
    <text x={x} y={y} text-anchor={opts.anchor ?? "start"} style={`font:${opts.weight ?? 400} ${opts.size ?? 12.5}px var(${opts.mono ? "--font-mono" : "--font-ui"});fill:${opts.color ?? INK}`}>{s}</text>
  );
  // A bar segment that glides: a unit rect scaled and moved by a CSS transform.
  const seg = (x: number, y: number, w: number, h: number, fill: string, key: string) => (
    <rect key={key} x={0} y={0} width={1} height={h} style={`fill:${fill};transform:translate(${x}px,${y}px) scaleX(${Math.max(0, w)});transform-origin:0 0;transition:transform 520ms ease`} />
  );

  // Valuation bar: pre-money + investment = post-money (full width = post-money).
  const vy = frame.top + 22, vh = 26;
  parts.push(text(x0, frame.top + 14, "Valuation", { weight: 700, size: 13 }));
  if (showValuation) {
    const preW = (t.pre / t.post) * W;
    parts.push(seg(x0, vy, preW, vh, WASH.grey, "v-pre"));
    parts.push(seg(x0 + preW, vy, W - preW, vh, WASH.green, "v-inv"));
    parts.push(<rect x={x0} y={vy} width={W} height={vh} style={`fill:none;stroke:${INK_MUTED};stroke-width:0.8`} />);
    parts.push(<line x1={x0 + preW} y1={vy} x2={x0 + preW} y2={vy + vh} style={`stroke:${INK_SOFT};stroke-width:1;transition:all 520ms`} />);
    parts.push(text(x0 + 6, vy + 17, `pre ${millions(t.pre)}`, { size: 12, weight: 600 }));
    parts.push(text(x0 + W - 6, vy + 17, sketch.narrow ? `post ${millions(t.post)}` : `+ ${millions(deal.invest)} = ${millions(t.post)} post`, { size: 12, weight: 600, anchor: "end", color: MARKER.green }));
  } else {
    parts.push(text(x0, vy + 17, "no round yet", { size: 12, color: INK_SOFT }));
  }

  // Shares bar: length proportional to the fully diluted share count.
  const sy = frame.top + 92, sh = 34;
  const scaleMax = exploring ? Math.max(1.6e6, t.total * 1.03) : 1.6e6;
  const px = (shares: number) => (shares / scaleMax) * W;
  parts.push(text(x0, sy - 8, `Shares, fully diluted: ${int(t.total)}`, { weight: 700, size: 13 }));
  let cursor = x0;
  t.holders.forEach((h) => {
    const w = px(h.shares);
    parts.push(seg(cursor, sy, w, sh, WASH[h.color], `s-${h.key}`));
    if (w > 1) parts.push(<rect x={cursor} y={sy} width={w} height={sh} style={`fill:none;stroke:${MARKER[h.color]};stroke-width:1;transition:all 520ms`} />);
    if (w > 40) parts.push(<g style="pointer-events:none">{text(cursor + w / 2, sy + 22, pct(h.shares / t.total), { anchor: "middle", weight: 700, size: 12, color: MARKER[h.color] })}</g>);
    cursor += w;
  });
  if (deal.hire > 0 && !exploring) {
    const nx = x0 + px(t.beforeHire + t.naive);
    parts.push(<InkDashed x1={nx} y1={sy - 4} x2={nx} y2={sy + sh + 6} id="naive" color={MARKER.red} width={1.5} />);
  }

  // The table.
  const ty = sy + sh + 26, rowH = 21;
  const cols = [0, 0.34, 0.6, 0.8].map((f) => x0 + f * W);
  const heads = ["holder", "shares", "%", t.price ? "value" : ""];
  heads.forEach((hd, i) => parts.push(text(i === 0 ? cols[i] : cols[i] + (i === 3 ? W * 0.2 : W * 0.2), ty, hd, { size: 11.5, weight: 600, color: INK_SOFT, anchor: i === 0 ? "start" : "end" })));
  const rows = t.holders.filter((h) => h.shares > 0);
  rows.forEach((h, r) => {
    const y = ty + (r + 1) * rowH;
    parts.push(<rect x={x0} y={y - 14} width={W} height={rowH - 2} style={`fill:${r % 2 ? "none" : WASH.grey};opacity:0.5`} />);
    parts.push(text(cols[0] + 4, y, h.label, { weight: 600, color: MARKER[h.color], size: 12.5 }));
    parts.push(text(cols[1] + W * 0.2, y, int(h.shares), { mono: true, anchor: "end", size: 12 }));
    parts.push(text(cols[2] + W * 0.2, y, pct(h.shares / t.total), { mono: true, anchor: "end", size: 12 }));
    if (t.price) parts.push(text(cols[3] + W * 0.2, y, millions(h.shares * t.price), { mono: true, anchor: "end", size: 12 }));
  });
  const below = ty + (rows.length + 1) * rowH + 6;
  if (t.price) parts.push(<Note x={x0} y={below + 14} text={`price per share $${t.price.toFixed(2)}`} color={INK} size={17} />);
  if (deal.hire > 0) {
    const correct = t.total - t.beforeHire;
    parts.push(<Note x={sketch.narrow ? x0 : x0 + W} y={sketch.narrow ? below + 36 : below + 14} anchor={sketch.narrow ? "start" : "end"} text={`hire: ${int(correct)} shares (naive ${int(t.naive)} gives ${(100 * t.naive / (t.beforeHire + t.naive)).toFixed(2)}%)`} color={MARKER.red} size={sketch.narrow ? 13 : 15} />);
  }

  const tex = !showValuation
    ? "\\text{Ownership} = \\dfrac{\\text{shares held}}{\\text{total shares}}"
    : step === 1
      ? "\\text{Post} = \\dfrac{\\text{Investment}}{\\text{Investor \\%}},\\quad \\text{Pre} = \\text{Post} - \\text{Investment}"
      : deal.hire > 0 && !exploring
        ? "N = \\dfrac{S\\,p}{1-p} = \\dfrac{S \\times 0.02}{0.98}"
        : "\\text{Price per share} = \\dfrac{\\text{Pre-money}}{\\text{pre-round fully diluted shares}}";

  return (
    <SketchGraph
      sketch={sketch}
      note={NOTES[step]}
      tex={tex}
      footnote="The pool created pre-money counts in the pre-round shares, so the founders bear all of its dilution. Deals are negotiated on fully diluted shares."
      ariaLabel="A cap table for two founders, an investor, an option pool and a new hire, with the valuation bar above."
      top={exploring ? <Toggle label="Pool created" active={mode} onPick={(key) => setMode(key as PoolMode)} options={[{ key: "pre", label: "Pool pre-money" }, { key: "post", label: "Pool post-money" }]} /> : undefined}
      explore={
        <div class="graph-sliders">
          <Slider label="Investment" value={invest} min={0.5} max={5} step={0.5} onInput={setInvest} suffix="M" />
          <Slider label="Investor's stake" value={stake} min={5} max={40} step={1} onInput={setStake} suffix="%" />
          <Slider label="Option pool" value={pool} min={0} max={20} step={1} onInput={setPool} suffix="%" />
          <Slider label="New hire target" value={hire} min={0} max={5} step={0.5} onInput={setHire} suffix="%" />
        </div>
      }
    >
      {parts}
    </SketchGraph>
  );
}
