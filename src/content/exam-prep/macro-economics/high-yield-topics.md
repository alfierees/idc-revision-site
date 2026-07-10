---
title: "High-Yield Topics — What the Exams Actually Test"
subject: macro-economics
type: reference
description: "Frequency analysis of all five available past papers — which topics come up in how many exams, in what form (derivation, calculation, discussion), which past-paper questions test them, and which problem sets and lectures train them. Use this to prioritise revision ruthlessly."
course: "Macro-Economics I — Intermediate Macro"
semester: 2
year: 2
order: 2
pinned: true
tags:
  - macroeconomics
  - exam-prep
  - reference
  - high-yield
  - past-paper
aliases:
  - High-Yield Topics
  - High Yield Topics
  - Topic Frequency Analysis
in_scope: true
---

> [!info] How this list was built
> Every question in the five available papers — [[Sample Exam 2026]] (20 MCQs), [[Moed A 2023-24]], [[Moed B 2023-24]], [[Moed A 2025]] and [[Moed B 2025]] (each 6 short + 2 long questions, plus a Miluim question in 2025) — was tagged by topic and counted. The counts below are honest: a topic listed at "5/5" genuinely appears in all five papers. The two **long questions** (32 points each on the Moed papers, ~64% of the grade) are flagged separately, because that's where the exam is won or lost.

## The scoreboard

| Topic | Papers | Long Q? | Typical format |
|---|---|---|---|
| Two-period consumption & Euler equation | **5/5** | **Yes — a long Q in all four Moed papers** | Full derivation (Lagrangian → Euler → solve → comparative statics) |
| Production function & TFP accounting | **5/5** | Yes (inside [[Moed A 2023-24\|Moed A 2024]] Q7 and [[Moed A 2025]] Q8) | Calculation (back out $A$, $\alpha$, wage) + discussion twists |
| Investment & user cost of capital | **5/5** | Yes (inside both 2025 long Qs) | Calculation — solve the one unknown in $MPK^f =$ user cost |
| Labor supply & taxes (static FOC) | **4/5** | **Yes — the second long Q in both Moed B papers** | Derivation of $N(w)$ + income-vs-substitution discussion |
| Public debt dynamics | **4/5** | No — but a guaranteed short Q | Calculation (forecast $\Delta b$) or qualitative sign-reading |
| Goods-market equilibrium (S/I shifts) | **4/5** | Yes (as final parts of long Qs) | Discussion — shift curves, sign $r$, $S$, $I$ |
| Unemployment flows & steady state | **4/5** | No | Calculation ($u$, $f$, $d$, $u^{ss} = \frac{d}{d+f}$) |
| Inflation measurement (CPI vs deflator) | **3/5** | No | Calculation from a 3-good table |
| Inequality, polarization & SBTC | **2/5** + Miluim | No | Pure discussion (stylized facts) |
| Task-based production / robots | **2/5** | No | Short calculation or MCQ (sign of $\partial MPR/\partial N$) |
| GDP vs GNP vs NFP | **2/5** | No | Discussion (sign each aggregate) |
| PPP GDP comparisons | **2/5** | No | Calculation (convert, then growth rates) |
| Liquidity constraints & the MPC | **2/5** | No | Discussion (stylized facts) |
| Business cycles (trend vs cyclical) | 1/5 (Miluim only) | No | Discussion |

> [!warning] The big four
> **Two-period consumption, production/TFP, investment/user cost, and labor supply with taxes** account for both long questions on every Moed paper — roughly **64 of 100 points** each sitting. If time is short, drill these four until you can re-derive them from a blank page. Everything else is short-question material worth 6 points a pop.

---

## Tier 1 — appears in every paper

### Two-period consumption & the Euler equation — 5/5 papers

The single most-tested topic. **Every Moed paper's first long question (32 pts) is a two-period (or three-period) consumption derivation**, always the same recipe: write the problem → Lagrangian → FOCs → Euler equation → substitute into the lifetime budget → solve for $c_0$ → comparative statics.

$$u'(c_t) = \beta(1+r)\,u'(c_{t+1})$$

| Where it's tested | The twist |
|---|---|
| [[Moed A 2023-24\|Moed A 2024]] Q8 (long) | Consumption tax $\tau_0, \tau_1$ in the budget; log utility makes expenditure $\left(1+\tau_0\right)c_0$ invariant to $\tau_0$ |
| [[Moed B 2023-24\|Moed B 2024]] Q7 (long) | CRRA utility; can a lower $\beta$ cause a recession? (No — $C$ moves the wrong way) |
| [[Moed A 2025]] Q7 (long) | Mandatory retirement saving; optimal $\tau = \frac{\beta}{1+\beta}$; heterogeneous $\beta$ |
| [[Moed B 2025]] Q7 (long) | Three periods, cake-eating (assets only, no income); higher $r$ leaves $c_0$ unchanged under log |
| [[Moed B 2025]] Q4 (short) | Read $\sigma$ (slope) and $\beta$ (where growth $=1$) off a consumption-growth vs $r$ figure |
| [[Sample Exam 2026]] Q11, Q18 | MCQ versions: role of $\beta$ under CRRA; $r$-rise with log utility and only assets |

- **Trained by:** [[ps-2\|PS2]] (both questions — mini life-cycle model, log-utility plan) — plus the goods-market follow-ups in [[ps-4\|PS4]].
- **Lecture:** [[Lec_02-Consumption and Saving]].
- **Know cold:** the log-utility signature ($c_0$ = fixed fraction of lifetime wealth, income and substitution effects on $c_0$ cancel exactly) and the CRRA generalisation $\frac{c_{t+1}}{c_t} = \left[\beta(1+r)\right]^{1/\sigma}$.

### Production function & TFP accounting — 5/5 papers

Shows up **at least once in every paper**, usually twice. Two moves cover almost every variant: (1) invert Cobb-Douglas to read TFP off as the residual, $A = Y / \left(K^{\alpha}N^{1-\alpha}\right)$; (2) recover a missing $\alpha$ from a factor share ($\alpha = \frac{RK}{Y}$ or $1-\alpha = \frac{wN}{Y}$).

| Where it's tested | The twist |
|---|---|
| [[Moed A 2023-24\|Moed A 2024]] Q7 (long) | UK data: build total hours, back out TFP for three years, then feed it into the labor-market and investment models |
| [[Moed A 2023-24\|Moed A 2024]] Q4 (short) | **Additive** production function $AK^{\alpha} + N^{1-\alpha}$ — $A$ drops out of $MPN$, so no labor-demand effect |
| [[Moed B 2023-24\|Moed B 2024]] Q3 (short) | $\alpha$ is missing — recover it from the capital income share $\frac{RK}{Y}$ |
| [[Moed A 2025]] Q1 (short) | TFP vs capital in a two-country ratio: $8\times$ capital only buys $8^{1/3} = 2\times$ output |
| [[Moed A 2025]] Q8 (long, parts 1–2) | Compute TFP both periods; sign the change without computing (output outgrew both inputs) |
| [[Moed B 2025]] Q3 (short) | Get $\alpha$ from the labor share, then TFP level, growth ($=0$ under proportional scaling by CRS) and the wage |
| [[Sample Exam 2026]] Q1, Q19 | MCQ versions: growth-accounting comparison; deflator/labor-share claims |

- **Trained by:** [[ps-3\|PS3]] (all four questions — Cobb-Douglas proofs, labor shares, implied TFP, growth accounting).
- **Lecture:** [[Lec_04-Production]].
- **Know cold:** $MPK = \alpha\frac{Y}{K}$, $MPN = (1-\alpha)\frac{Y}{N}$, and *always differentiate the function actually given* — the additive-form trap in Moed A 2024 Q4 punishes Cobb-Douglas autopilot.

### Investment & the user cost of capital — 5/5 papers

Every paper has a question that reduces to **"future MPK = user cost, solve for the one unknown"**. The examiners rotate which variable is missing: the tax rate, the depreciation rate, future TFP, or the direction of a price effect.

$$MPK^{f} = \frac{(1+r)p_k - (1-\delta)p_k^{f}}{1-\tau_K}, \qquad K_{t+1} = (1-\delta)K_t + I_t$$

| Where it's tested | The unknown |
|---|---|
| [[Moed A 2023-24\|Moed A 2024]] Q3 (short) | Signs: $p_K\uparrow \Rightarrow I\downarrow$; $p_K^f\uparrow \Rightarrow I\uparrow$ (label the two lines) |
| [[Moed B 2023-24\|Moed B 2024]] Q4 (short) | $\tau_K$ that keeps capital constant (then $I = \delta K$) |
| [[Moed A 2025]] Q8 (long, part 3) | $\delta$, then investment from capital accumulation |
| [[Moed B 2025]] Q1 (short) | Future TFP $A^f$ — build $K^f$ from $K$ and $I$ first |
| [[Sample Exam 2026]] Q7, Q14, Q20 | MCQ versions: backing out $\delta$ and $I$; TFP shock on investment vs labor demand; capital-tax rise |

- **Trained by:** [[ps-4\|PS4]] Q1 (workforce size and optimal investment) and Q3 (taxes and their use); also [[ps-6\|PS6]].
- **Lecture:** [[Lec_05-Investment]].

---

## Tier 2 — a near-guaranteed question

### Labor supply & taxes (the static FOC) — 4/5 papers

Missing only from Moed A 2024. **The second long question on both Moed B papers** is a labor-supply derivation, and the sample exam has two MCQs on it. One condition does everything:

$$-U_N = \frac{1-\tau_N}{1+\tau_C}\,w\,U_C$$

Recipe: plug in the given $U$, substitute the budget constraint, solve for $N(w)$ — then discuss income vs substitution effects.

| Where it's tested | The twist |
|---|---|
| [[Moed B 2023-24\|Moed B 2024]] Q8 (long) | Laffer curve: revenue $\tau_N(1-\tau_N)^{1/\psi}w^{1+1/\psi}$; wage adjustment; revenue recycled into TFP raises the peak rate |
| [[Moed A 2025]] Q3 (short) | With $\ln(C)$ utility and $C = (1-\tau_N)wN$, the tax **cancels out** of labor supply |
| [[Moed B 2025]] Q8 (long) | Perfectly inelastic supply $N = (1/\theta)^{1/(1+\psi)}$; TFP vs $\theta$ shocks and the investment follow-on |
| [[Sample Exam 2026]] Q3, Q15 | MCQ versions: log-power utility; slope of the supply curve under CRRA |

- **Trained by:** [[ps-5\|PS5]] Q1–Q3 and [[ps-6\|PS6]] Q1–Q2, Q4–Q5 (the whole set is built on this FOC).
- **Lectures:** [[Lec_07-Labor Market]], [[Lec_10-Fiscal Policy]].
- **Know cold:** with log consumption utility, income and substitution effects **cancel exactly** — that one fact answers three of the six questions above.

### Public debt dynamics — 4/5 papers

Missing only from Moed A 2025. Always a short question, in one of two flavours: **qualitative** (map a shock onto the signs of $d$, $g$, $r$) or **numerical forecast** — where $r$ and $g$ are never handed to you directly.

$$\Delta b_t = d_t + \frac{r-g}{1+g}\,b_{t-1}$$

| Where it's tested | The twist |
|---|---|
| [[Moed A 2023-24\|Moed A 2024]] Q1 | Qualitative: war raises $d$, lowers $g$, raises $r$ — all push $b$ up |
| [[Moed B 2023-24\|Moed B 2024]] Q2 | Get $r$ from Fisher ($r = i - \pi^e$), $g$ from 20-year compound growth, then plug in |
| [[Moed B 2025]] Q2 | Same trick plus forecast GDP and the debt *stock* (ratio × GDP) |
| [[Sample Exam 2026]] Q12 | MCQ version of the forecast |

- **Trained by:** [[ps-6\|PS6]] Q3 (simple public debt dynamics).
- **Lecture:** [[Lec_10-Fiscal Policy]].
- **Know cold:** the compound-growth back-out $g = \left(\frac{Y_T}{Y_0}\right)^{1/T} - 1$ — it appears every time.

### Goods-market equilibrium (S and I curves) — 4/5 papers

Rarely a standalone question, but it's the **closing act of most long questions** and gets two dedicated shorts. The drill: shift each curve separately, then read off which of $r$, $S$, $I$ is pinned down and which is ambiguous.

| Where it's tested | The configuration |
|---|---|
| [[Moed B 2023-24\|Moed B 2024]] Q5 | Pessimism about future TFP: $S$ right, $I$ left → $r$ falls for sure, quantities ambiguous; $Y$ fixed forces $C$ and $I$ opposite |
| [[Moed B 2025]] Q6 | Optimistic firms + pessimistic consumers: both curves right → quantities rise, $r$ ambiguous |
| [[Moed A 2023-24\|Moed A 2024]] Q8 (part 5) | Consumption-tax revenue spent now vs later: timing decides whether $S$ shifts |
| [[Moed B 2023-24\|Moed B 2024]] Q7 (part 5) | Lower $\beta$: $S$ left, $I$ fixed → $r$ up, $I$ down |
| [[Sample Exam 2026]] Q16, Q20 | MCQ versions |

- **Trained by:** [[ps-4\|PS4]] Q2–Q3, [[ps-6\|PS6]] Q1.
- **Lecture:** [[Lec_06-Equilibrium in the Goods Market]].
- **Know cold:** the meta-rule — curves shifting in *opposite* directions pin the **price** ($r$) and leave quantities ambiguous; shifting the *same* way pin the **quantity** and leave $r$ ambiguous.

### Unemployment flows & steady state — 4/5 papers

Missing only from Moed B 2024. Pure plug-in territory once you dodge the classic denominator traps.

$$u = \frac{U}{U+E}, \qquad u^{ss} = \frac{d}{d+f}, \qquad E_{t+1} = (1-d)E_t + fU_t$$

| Where it's tested | The trap |
|---|---|
| [[Moed A 2023-24\|Moed A 2024]] Q2 | "Is this a steady state?" — check whether $E_{t+1} = E_t$, don't just quote $u^{ss}$ |
| [[Moed A 2025]] Q5 | "Not employed" ≠ unemployed — back out the labor force from the participation rate first |
| [[Moed B 2025]] Q5 | $f$ divides by last month's **unemployed**, $d$ by last month's **employed** |
| [[Sample Exam 2026]] Q5 | MCQ version with participation data |

- **Trained by:** [[ps-5\|PS5]] Q4 (steady-state unemployment flows).
- **Lecture:** [[Lec_08-Labor Market Data, Participation & Unemployment]].

---

## Tier 3 — shorter odds, cheap points

### Inflation measurement: CPI vs deflator — 3/5 papers

A three-good table (one good never consumed), compute both measures, explain the gap. [[Moed A 2023-24\|Moed A 2024]] Q6 (robots drag the deflator negative while the CPI rises), [[Moed A 2025]] Q6 (PCE deflator vs CPI: changing vs fixed basket), [[Sample Exam 2026]] Q6. Rules: strip non-consumption goods out of the CPI (but **not** the GDP deflator); deflator = changing quantities, CPI = frozen basket. Trained by [[ps-1\|PS1]] Q2, Q3 and Q7; lecture [[Lec_01-Data Review]].

### Inequality, polarization & SBTC — 2/5 papers + Miluim

Pure "discussed in class" material, zero algebra: [[Moed A 2023-24\|Moed A 2024]] Q5 (90/10, 90/50, 50/10 ratios; polarization = rising 90/50 with falling 50/10) and the [[Moed B 2025]] Miluim question (SBTC is monotone, so it explains the college premium but **not** U-shaped polarization). Trained by [[ps-5\|PS5]]; lecture [[Lec_09-Inequality & Polarization]].

### Task-based production & robots — 2/5 papers

[[Moed A 2025]] Q2 (immigration lowers robot demand — $[R+N]$ makes them substitutes) and [[Sample Exam 2026]] Q2 and Q17 (productivity vs displacement effects). The move: check the sign of the cross-partial. Trained by [[ps-5\|PS5]] Q5; lecture [[Lec_09-Inequality & Polarization]].

### GDP vs GNP vs NFP — 2/5 papers

[[Moed A 2025]] Q4 (Ukrainian emigration: GDP falls, GNP flat, NFP rises) and [[Sample Exam 2026]] Q4. Anchor: $GNP = GDP + NFP$ — GDP is *where* production happens, GNP is *who* earns. Trained by [[ps-1\|PS1]]; lecture [[Lec_01-Data Review]].

### PPP comparisons — 2/5 papers

[[Moed B 2023-24\|Moed B 2024]] Q6 (PPP GDP per capita growth and catch-up) and [[Sample Exam 2026]] Q10. Formula: $GDP^{PPP} = \frac{GDP^{local}}{P^{local}} \times P^{US}$, then per-capita, then growth. Trained by [[ps-1\|PS1]] Q5; lecture [[Lec_01-Data Review]].

### Liquidity constraints & the MPC — 2/5 papers

[[Moed B 2023-24\|Moed B 2024]] Q1 and [[Sample Exam 2026]] Q9: constraints fall with income; constrained households have the **highest MPC**; the top-quintile exception is the "wealthy hand-to-mouth". Lecture [[Lec_02-Consumption and Saving]].

### Efficient factor allocation across firms — 1/5 papers

[[Sample Exam 2026]] Q8 only, so far: allocate a fixed factor across firms by equalising marginal products. Trained by [[ps-7\|PS7]] (both questions — optimal allocation of capital, and two factors under constant returns); lecture [[Lec_04-Production]]. New material since the last problem set, so treat it as live for 2026 despite the thin past-paper record.

### Business cycles: trend vs cyclical — 1/5 (Miluim only)

[[Moed A 2025]] Miluim: trend = expected path, cyclical = deviations; non-durables/services consumption is smoother than income, evidencing consumption smoothing. Low priority unless Miluim-eligible.

---

> [!tip] Reading the format
> The four Moed papers are **open-notes** (formula sheet attached — see the [[Macro Equation Sheet]]) with 6 shorts (6 pts) + 2 longs (32 pts). The [[Sample Exam 2026]] is the 20-question **MCQ dress rehearsal** for the 2026 format — same toolkit, but distractors punish sign errors and dropped denominators rather than rewarding partial derivations. Revise for the long-question derivations first; MCQ speed comes free once the derivations are automatic.

Next step: turn these frequencies into a schedule — see the [[Macro Revision Plan]].
