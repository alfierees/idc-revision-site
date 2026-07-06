---
title: "Sample Exam 3 — Worked Solutions"
type: past-paper
status: worked-solution
exam: "Sample Exam 3 (practice)"
semester: 2
year: 2
course: "Micro 3 — Advanced Microeconomics"
instructor: Ido Eisdorfer
tags:
  - microeconomics
  - past-paper
  - worked-solution
  - bundling
  - adverse-selection
  - moral-hazard
  - price-discrimination
  - cournot-competition
  - stackelberg-model
  - bertrand-competition
  - double-marginalization
  - two-part-tariff
  - lerner-index
  - merger-analysis
aliases:
  - Sample Exam 3 Solutions
  - Micro 3 Practice Exam 3
  - PP03 Micro
subject: micro
in_scope: true
---

# Sample Exam 3 — Worked Solutions

> Part of: [[Microeconomics]]
> **Sample Exam 3** (practice) — Micro 3 — Advanced Microeconomics | Tyomkin School of Economics, Reichman University
> Builds on: [[Topic 1 - Asymmetric Information]] · [[Topic 2 - Equilibrium in Different Market Structures]] · [[Topic 4 - Price Competition with Complementary Goods]]
> Key concepts: [[_Micro Concepts#Bundling|Bundling]], [[_Micro Concepts#Adverse Selection|Adverse Selection]], [[_Micro Concepts#Moral Hazard|Moral Hazard]], [[_Micro Concepts#Price Discrimination|Price Discrimination]], [[_Micro Concepts#Consumer Surplus|Consumer Surplus]], [[_Micro Concepts#Lerner Index|Lerner Index]], [[_Micro Concepts#Cournot Competition|Cournot Competition]], [[_Micro Concepts#Stackelberg Model|Stackelberg Model]], [[_Micro Concepts#Bertrand Competition|Bertrand Competition]], [[_Micro Concepts#Double Marginalization|Double Marginalization]], [[_Micro Concepts#Two-Part Tariff|Two-Part Tariff]]

> [!success] Official solutions provided — and checked
> Unlike PP01/PP02, this paper came **with** an official solutions document. **Every number below has been verified against it and re-derived programmatically** (all pass). The only genuine ambiguity — Open Q1's contradictory cost line — is flagged and resolved the way the official key does (constant $MC = c$).

---

## 🧰 What this paper tests

> [!info] One paper, the whole second half of Micro 3
> Six MC questions and two long open questions sweep monopoly pricing, insurance, and **oligopoly/vertical structure**:
> 1. **Q1, Q4** — monopoly price tools: [[_Micro Concepts#Bundling|bundling]] and [[_Micro Concepts#Price Discrimination|price discrimination]] (here PD with a fixed cost). Start from **MR = MC** in each channel.
> 2. **Q2, Q3** — [[_Micro Concepts#Adverse Selection|adverse selection]] vs [[_Micro Concepts#Moral Hazard|moral hazard]]: deductibles trade one off against the other; low switching is *soft* evidence on benefit-package distortion.
> 3. **Q5, Open Q1, Open Q2-F** — **merger analysis**: compare merged-monopoly output/profit to the pre-merger benchmark, and the benchmark matters (Cournot < Stackelberg < Bertrand).
> 4. **Open Q2-A→E** — one demand curve, four structures: [[_Micro Concepts#Monopoly|monopoly]], [[_Micro Concepts#Stackelberg Model|Stackelberg]], [[_Micro Concepts#Double Marginalization|vertical separation]], and the [[_Micro Concepts#Two-Part Tariff|two-part tariff]] that restores efficiency.

---

# Part A — Multiple Choice

## Q1 — Bundling vs. separate selling

**Setup:** monopolist sells $X$ and $Y$; **40** Type-1, **40** Type-2, **20** Type-3 consumers, each unit costs **\$30**. WTP:

| Type | $X$ | $Y$ |
|---|---|---|
| 1 (×40) | 100 | 20 |
| 2 (×40) | 20 | 100 |
| 3 (×20) | 60 | 60 |

**Separate selling** ($MC=30$). For product $X$: $p=100$ → only Type 1 (40) → $(70)(40)=\mathbf{2800}$; $p=60$ → 60 buyers → $1800$; $p=20$ → loss. Best $X=2800$; by symmetry $Y=2800$. **Separate $= 5600$.**

**Pure [[_Micro Concepts#Bundling|bundling]].** Bundle reservation value is the *sum* of each type's WTP:

$$\begin{gathered}
v_1 = 100+20 = 120,\quad v_2 = 20+100 = 120, \\
v_3 = 60+60 = 120.
\end{gathered}$$

Everyone values the bundle at **exactly 120**; bundle cost $=60$. Price at 120, sell to all 100: $\pi = (120-60)(100) = \mathbf{6000}$.

> [!success] Answer — **B.** Separate **5,600**, bundle **6,000**

![[PP03_q1_bundling.png|680]]

> [!tip] Why bundling wins — it kills WTP dispersion
> Separate prices can't capture the spread (love-$X$ vs love-$Y$). Bundling **collapses the negatively-correlated tastes** to a common \$120, so a single bundle price extracts the whole market. Classic Stigler result.

---

## Q2 — Deductibles: moral hazard vs adverse selection

**Setup:** *"Insurance with a deductible may reduce moral hazard but worsen adverse selection."* Best explanation?

> [!success] Answer — **B.** A deductible reduces over-utilisation but may discourage high-risk individuals from buying.
> - **[[_Micro Concepts#Moral Hazard|Moral hazard]] ↓** — the deductible restores a positive marginal price of care, pulling consumption back toward efficient.
> - **[[_Micro Concepts#Adverse Selection|Adverse selection]] ↑** — a deductible is most costly *in expectation* to high-risk people, who are exactly the ones a pooling insurer wants to keep; they're the most likely to drop out.

> [!warning] Distractors
> **A** has the moral-hazard sign backwards; **C** overclaims ("eliminates"); **D** is just false.

---

## Q3 — Low switching ⇒ weak benefit-package distortion?

**Setup:** *"Very few switches between Israeli health funds suggests benefit-package adverse selection isn't significant."* Best evaluation?

> [!success] Answer — **C.** Generally reasonable.
> If funds were distorting packages to cream-skim, you'd see risk groups sorting across funds and **more** switching. Little switching is **consistent** with weak distortion — but it's **indirect** evidence, not proof.

> [!warning] Why A, B, D overreach
> **A** ("necessarily true… identical services") and **B** ("necessarily false… always exists") both claim a certainty the data can't deliver; **D** invents a zero-switching-cost knife-edge that isn't required for [[_Micro Concepts#Adverse Selection|adverse selection]].

---

## Q4 — Price discrimination with a fixed cost

**Setup:** demands $p_1 = 22 - q_1$, $p_2 = 8 - q_2$; $MC = 2$, $F = 99$ (paid only if output > 0).

**With [[_Micro Concepts#Price Discrimination|price discrimination]]** ($MR_i = MC$):

$$\text{M1: } q_1=10,\ p_1=12;\qquad \text{M2: } q_2=3,\ p_2=5.$$
$$\begin{gathered}
CS_D = \tfrac12(10)(10) + \tfrac12(3)(3) = 50 + 4.5 = 54.5, \\
\pi = 100+9-99 = 10 > 0.
\end{gathered}$$

**Without PD** (one price): serving M2 needs $p\le 8$, but $(p-2)[(22-p)+(8-p)]$ peaks at $p=8.5$ — above M2's choke. So the firm **drops M2** and prices as a M1 monopolist: $p=12,\ q_1=10,\ q_2=0$, giving $CS_U = 50$.

> [!success] Answer — **A.** Consumer surplus is **lower** without PD ($54.5 \to 50$).

![[PP03_q4_pd_fixed_cost.png|680]]

> [!warning] The trick is the fixed cost
> M1 is identical in both regimes, so **D** (price 1) and **B** (total $Q$: 13 vs 10) and **C** (M2 qty: 3 vs 0) are all wrong. $F=99$ is what makes M2 unreachable under a single price — so PD is what makes the small market worth serving, *raising* welfare.

---

## Q5 — Cournot merger & consumer surplus

**Setup:** two [[_Micro Concepts#Cournot Competition|Cournot]] firms, $MC=k$, demand $p=100-Q$. Merge → monopoly with $MC=0$. CS rises as long as approximately?

$$\begin{gathered}
Q_C = \frac{2(100-k)}{3},\quad CS_C = \tfrac12 Q_C^2 = \frac{2(100-k)^2}{9}; \\
Q_M = 50,\quad CS_M = 1250.
\end{gathered}$$
$$\begin{aligned}
1250 > \frac{2(100-k)^2}{9} &\Rightarrow (100-k)^2 < 5625 \\
&\Rightarrow 100-k < 75 \Rightarrow \boxed{k > 25}.
\end{aligned}$$

> [!success] Answer — **E.** The condition is $k>25$, which is **not listed**.

![[PP03_q5_cournot_merger_cs.png|680]]

> [!tip] The economics
> A merger removes a competitor (**−**, output ↓) but cuts $MC$ to 0 (**+**, output ↑). When pre-merger cost $k$ is **high**, the efficiency gain dominates and consumers win. Option A ($k<25$) has it exactly backwards.

---

## Q6 — The Lerner Index

**Setup:** $L = \dfrac{p-MC}{p}$. Which of (1) MC↓ ⇒ L↓, (2) lower $|\varepsilon|$ ⇒ L↑, (3) competitive firm has $L=0$ are correct?

> [!success] Answer — **B.** Only statements **2 and 3**.
> - **(1) False** — at the optimum $L = -1/\varepsilon$, pinned by [[_Micro Concepts#Elasticity|elasticity]], not mechanically by $MC$.
> - **(2) True** — $L = -1/\varepsilon$, so smaller $|\varepsilon|$ ⇒ larger $L$.
> - **(3) True** — perfect competition: $p=MC \Rightarrow L=0$.

> [!tip] One identity
> $$L = \frac{p-MC}{p} = -\frac{1}{\varepsilon}.$$ See [[_Micro Concepts#Lerner Index|Lerner Index]].

---

# Part B — Open Questions

## Open Q1 — Cournot, mergers & benchmarks

**Setup:** two identical [[_Micro Concepts#Cournot Competition|Cournot]] firms, $MC=c$, demand $P = 120 - Q$.

> [!warning] A contradiction in the question
> The prompt writes "marginal cost $c$ **(i.e. $TC=\tfrac12 Q_C^2$)**", but $TC=\tfrac12 Q^2$ implies $MC=Q$, not constant $c$. The **official key treats $MC = c$ as constant** and ignores the quadratic aside, so we follow that throughout.

**(a) Cournot equilibrium.** FOC $120 - c - 2q_i - q_j = 0$, symmetry:
$$\boxed{q_1^*=q_2^*=\frac{120-c}{3}},\qquad \boxed{Q_C = \frac{2(120-c)}{3}}.$$

**(b) Merger approved on an output test.** Merged monopoly, $MC=0$: $Q_M = 60$.
$$60 > \frac{2(120-c)}{3} \Rightarrow 180 > 240 - 2c \Rightarrow \boxed{c > 30}.$$

**(c) Merger approved on a profit test.** $\Pi^C = \frac{2(120-c)^2}{9}$; merged $\Pi^M = 60\cdot60 = 3600$.
$$\begin{aligned}
3600 > \frac{2(120-c)^2}{9} &\Rightarrow (120-c)^2 < 16200 \\
&\Rightarrow \boxed{c > 120 - 90\sqrt2 \approx -7.28}.
\end{aligned}$$
> [!success] Since $c\ge 0$, the profit test is **always satisfied** — on profit grounds the merger is always approved.

**(d) Bertrand benchmark.** [[_Micro Concepts#Bertrand Competition|Bertrand]] ⇒ $P=c,\ Q_B = 120-c$.
$$60 > 120 - c \Rightarrow \boxed{c > 60}.$$
> [!tip] Bertrand already produces more output than Cournot, so the output test tightens ($c>30 \to c>60$).

---

## Open Q2 — Four ways to organise one market

**Setup:** $P = 120 - Q$, constant $MC = c$, $0<c<120$. Let $a \equiv 120 - c$.

**Part A — [[_Micro Concepts#Monopoly|Integrated monopoly]].** Profit is $\pi = (P-c)Q = (120-Q-c)Q = (a-Q)Q$. Setting $MR=MC$, i.e. $\frac{d}{dQ}[(a-Q)Q] = a - 2Q = 0$:
$$\begin{gathered}
Q_M = \frac{a}{2},\quad P_M = 120-\frac a2 = 60+\frac{c}{2}, \\
\pi_M = \Big(a-\frac a2\Big)\frac a2 = \boxed{\frac{a^2}{4}}.
\end{gathered}$$

**Part B — [[_Micro Concepts#Stackelberg Model|Stackelberg]].** Follower maximises $(a-q_1-q_2)q_2 \Rightarrow a-q_1-2q_2=0 \Rightarrow q_2 = \frac{a-q_1}{2}$. Substitute into the leader's profit; the price margin simplifies, $a-q_1-q_2 = a-q_1-\frac{a-q_1}{2} = \frac{a-q_1}{2}$, so $\pi_1 = \frac{a-q_1}{2}q_1$. FOC $\frac{a-2q_1}{2}=0 \Rightarrow q_1 = \frac a2$, hence $q_2 = \frac{a}{4}$. At the solution the common margin is $P-c = a - Q_S = a-\frac{3a}{4} = \frac a4$:
$$\begin{gathered}
Q_S = \frac{3a}{4},\quad P_S = 30+\frac{3c}{4}, \\
\pi_1^S = \tfrac a4\cdot\tfrac a2 = \frac{a^2}{8},\quad \pi_2^S = \tfrac a4\cdot\tfrac a4 = \frac{a^2}{16},\quad \Pi_S = \frac{3a^2}{16}.
\end{gathered}$$
The leader produces **twice** the follower and earns **double** — first-mover advantage.

**Part C — [[_Micro Concepts#Vertical Relations|Vertical separation]].** The retailer buys at wholesale price $w$ and maximises $(120-Q-w)Q \Rightarrow Q(w) = \frac{120-w}{2}$ — this *is* the demand the producer faces. The producer (with $MC=c$) then maximises $(w-c)Q(w) = \frac{(w-c)(120-w)}{2}$; FOC $120 - 2w + c = 0 \Rightarrow w^* = \frac{120+c}{2}$. Feeding back, $w^*-c = \frac a2$ and $Q_V = \frac{120-w^*}{2} = \frac{a}{4}$:
$$\begin{gathered}
Q_V = \frac{a}{4},\quad P_V = 120-\frac a4 = 90+\frac{c}{4}, \\
\pi_U = (w^*-c)Q_V = \tfrac a2\cdot\tfrac a4 = \frac{a^2}{8}, \\
\pi_R = (P_V-w^*)Q_V = \tfrac a4\cdot\tfrac a4 = \frac{a^2}{16}, \\
\Pi_V = \frac{3a^2}{16}.
\end{gathered}$$
> [!warning] [[_Micro Concepts#Double Marginalization|Double marginalisation]]: output collapses to $\frac{a}{4}$ — **half** the integrated quantity — because two markups (producer's, then retailer's) stack.

**Part D — Ranking.**

| Structure | Quantity | Price | Total profit |
|---|---|---|---|
| Monopoly | $a/2$ | $60+c/2$ | $a^2/4$ |
| Stackelberg | $3a/4$ | $30+3c/4$ | $3a^2/16$ |
| Vertical sep. | $a/4$ | $90+c/4$ | $3a^2/16$ |

$$Q_S > Q_M > Q_V,\qquad P_S < P_M < P_V,\qquad \Pi_M > \Pi_S = \Pi_V.$$

![[PP03_open2_structure_ranking.png|720]]

> [!tip] Intuition
> Stackelberg = strategic rivalry (most output, lowest price). Vertical separation = double marginalisation (least output, highest price). Integrated monopoly avoids both, so it **maximises total profit**. Note $\Pi_S = \Pi_V$ — equal profit via opposite quantity/price paths.

**Part E — [[_Micro Concepts#Two-Part Tariff|Two-part tariff]] $(w,F)$.** Set $\boxed{w = c}$: the retailer faces true cost, picks the integrated quantity $Q = \frac{a}{2}$, restoring profit $\frac{a^2}{4}$. The producer earns the fee $F$.
$$\begin{gathered}
\text{Both participate if } \boxed{\frac{a^2}{8} \le F \le \frac{3a^2}{16}} \\
\Big(\text{retailer keeps} \ge \tfrac{a^2}{16},\ \text{producer beats} \tfrac{a^2}{8}\Big).
\end{gathered}$$
> [!success] The two-part tariff reproduces the Part-A integrated outcome — double marginalisation is a *contracting* failure, not a technological one.

**Part F — Merger from a Stackelberg benchmark.** Merged $Q_{\text{merger}} = 60$.
$$60 > Q_S = \frac{3(120-c)}{4} \Rightarrow 240 > 360 - 3c \Rightarrow \boxed{c > 40}.$$
Under pre-merger Bertrand ($Q_B = 120 - c$): $60 > 120 - c \Rightarrow \boxed{c > 60}$.
> [!tip] More competitive benchmark ⇒ stricter test: Cournot $c>30$ < Stackelberg $c>40$ < Bertrand $c>60$.

---

## 🎯 One-page recap

| Q | Topic | Tool | Answer |
|---|---|---|---|
| **Q1** | Bundling | Bundle WTP all = 120 | **B** — 5,600 / 6,000 |
| **Q2** | Insurance | Deductible: MH ↓, AS ↑ | **B** |
| **Q3** | Adverse selection | Low switching = soft evidence | **C** |
| **Q4** | Price discrimination | PD opens M2 ($F=99$) | **A** — CS 54.5 > 50 |
| **Q5** | Cournot merger | $CS$ rises iff $k>25$ | **E** |
| **Q6** | Lerner index | $L=-1/\varepsilon$ | **B** — (2)&(3) |
| **Open 1a** | Cournot | $MR=MC$ | $q=\frac{120-c}{3}$ |
| **Open 1b** | Merger (output) | $60 > \frac{2(120-c)}{3}$ | $c>30$ |
| **Open 1c** | Merger (profit) | $3600 > \frac{2(120-c)^2}{9}$ | always ($c\ge0$) |
| **Open 1d** | Bertrand | $60 > 120-c$ | $c>60$ |
| **Open 2a–c** | M / S / V | $MR=MC$ etc. | $Q_S>Q_M>Q_V$ |
| **Open 2d** | Ranking | — | $\Pi_M>\Pi_S=\Pi_V$ |
| **Open 2e** | Two-part tariff | $w=c$ | $\frac{a^2}{8}\le F\le\frac{3a^2}{16}$ |
| **Open 2f** | Merger (Stackelberg) | $60 > \frac{3(120-c)}{4}$ | $c>40$; Bertrand $c>60$ |

> [!tip] Exam reflexes
> - **Bundling** → bundle WTP = sum; negatively-correlated tastes ⇒ bundling beats separate selling.
> - **Deductible** → reduces moral hazard, worsens adverse selection.
> - **PD + fixed cost** → discrimination can *raise* welfare by opening a small market.
> - **Merger output test** → threshold rises Cournot → Stackelberg → Bertrand.
> - **Vertical separation** → double marginalisation halves output; two-part tariff with $w=MC$ restores efficiency.
> - **Lerner** → $L=(p-MC)/p=-1/\varepsilon$.

---

## 📎 Related Notes

- [[Topic 1 - Asymmetric Information]] — adverse selection, moral hazard, deductibles (Q2–Q3)
- [[Topic 2 - Equilibrium in Different Market Structures]] — bundling, price discrimination, monopoly (Q1, Q4, Open Q2-A)
- [[Topic 4 - Price Competition with Complementary Goods]] — Cournot, Stackelberg, Bertrand, vertical relations (Q5, Open Q1–Q2)
- Sister papers: [[PP_01-Sample Exam 1]] · [[PP_02-Sample Exam 2]]
- Concepts: [[_Micro Concepts#Double Marginalization|Double Marginalization]] · [[_Micro Concepts#Two-Part Tariff|Two-Part Tariff]] · [[_Micro Concepts#Stackelberg Model|Stackelberg Model]] · [[_Micro Concepts#Lerner Index|Lerner Index]]
- Hub: [[Microeconomics]]
