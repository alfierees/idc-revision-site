---
title: "Exam Question Playbook"
subject: macro-ii
type: reference
description: "A recipe for each kind of multiple-choice question on the Macro II final, with a past-paper example: direction questions in IS-LM, AD-AS and Mundell-Fleming, Solow steady states and the golden rule, the quantity theory and Fisher, multipliers, solving IS-LM and Mundell-Fleming, and Phillips-curve arithmetic."
course: Macro-Economics II
semester: 1
year: 2
order: 4
tags:
  - macro-ii
  - exam-prep
  - playbook
---

> The final is all multiple choice, so the method is: name the model, name the curve that moves first, follow the chain, then match an option. Draw the graph in the margin every time; options are built from the mistakes on the [[Common Mistakes]] page.

## A. A shock in a closed economy (IS-LM)

1. **Which market does it hit first?** Spending ($G$, $T$, confidence, investment demand) moves **IS**. Money ($M$, $P$, money demand, payment technology) moves **LM**.
2. **Which way?** More spending: IS right. More real money or less money demand: LM right.
3. **Read off $Y$ and $r$**, then the components: $r$ up means $I$ down (crowding out); $Y$ up means $C$ up.
4. **If the central bank holds something fixed**, move the other curve to keep it fixed.

> [!example] 2021 sample Q15
> Fiscal contraction, and the central bank keeps $r$ unchanged. IS shifts left, which would lower $r$; to stop that, the bank must **contract** $M$ (LM left). Output falls by the full Keynesian-cross amount.

## B. Short run to long run (AD-AS and IS-LM together)

1. Short run: the shock moves AD (via IS or LM) or SRAS; prices are sticky, so $Y$ moves.
2. Gap: if $Y < \bar Y$, prices fall over time; if $Y > \bar Y$, they rise.
3. In IS-LM the price change moves **LM** (through $M/P$) until $Y = \bar Y$. In AD-AS it moves **SRAS** along the fixed AD.
4. Long run: $Y = \bar Y$. A demand shock leaves a different $P$ (and, if it moved IS, a different $r$ and output mix). A temporary supply shock leaves nothing changed.

> [!example] 2022 B Q15
> $Y < \bar Y$: prices **decrease**, $M/P$ rises and **LM** shifts right until output is back at normal (answer D).

## C. The small open economy (Mundell-Fleming)

1. Write down the regime. $r = r^*$ always (small, open).
2. Find the curve the shock moves: spending, trade policy, taxes move $IS^*$; $M$, $P$, money demand, the risk premium move $LM^*$.
3. **Floating:** $LM^*$ is vertical and fixes $Y$; the exchange rate does the adjusting. Only $LM^*$ shifts change $Y$.
4. **Fixed:** $e$ cannot move, so the central bank shifts $LM^*$ to wherever $IS^*$ crosses the peg. Only $IS^*$ shifts change $Y$; monetary policy is used up defending the peg.
5. Then $NX$: under floating, $NX$ falls by exactly the fiscal stimulus; a quota leaves $NX$ unchanged.

> [!example] 2021 sample Q19 and Q20
> A quota under floating rates: $IS^*$ right, the currency appreciates, exports fall until $NX$ is back where it was; $Y$ is unchanged. A tax cut under floating rates: same story, $Y$ unchanged.

**Large open economy:** take the closed-economy answer and the small-open answer and land in between. Expansionary fiscal policy: $r$ up a bit, $e$ up a bit, $Y$ up a bit.

## D. Solow: levels, growth rates and the golden rule

1. **"In the steady state, X grows at"**: per effective worker 0; per worker $g$; total $n + g$; $MPK$, $K/Y$ and factor shares 0; the real wage $g$.
2. **"What raises output per worker in the long run?"**: more $s$, less $n$, less $\delta$, better technology raise the **level**; only $g$ raises the growth rate.
3. **Golden rule:** compare $MPK$ with $\delta + n + g$. $MPK$ above: too little capital, saving should rise (consumption falls first, then ends higher). Below: too much capital, saving should fall (consumption rises at once and stays higher).
4. **Numbers:** set $sf(k) = (\delta + n + g)k$ and solve; or $s = (\delta + n + g)K/Y$.

> [!example] 2021 sample Q3
> $y = k^{0.5}$: the golden-rule saving rate is $\alpha = 0.5$, so a country saving less should raise it to **50%**.

> [!example] 2021 B Q6 (Freedonia)
> $MPK = 15\%$, $\delta = 7\%$, $n + g = 4\%$: $MPK - \delta = 8\% > 4\%$, so capital is **below** the golden rule. Advise policies that raise saving (cut taxes on saving, reduce the deficit).

## E. Money, inflation and interest rates

1. **Growth rates of $MV = PY$**: $\pi = \mu + g_V - g_Y$.
2. **Fisher**: $i = r + E\pi$. In the long run $r$ is set by saving and investment, so a money-growth change moves $i$ one for one.
3. **Money demand $L(i, Y)$**: an expected rise in inflation raises $i$, lowers real money demand, and with $M$ fixed today **raises $P$ today**.
4. **A tax break on saving**: saving up, $r$ down, and so $i$ down for given money growth (2022 A Q3).

> [!example] 2022 B Q2
> $M/P = kY$, $M$ grows 10%, $Y$ grows 3%, $k$ constant: $\pi = 10\% - 3\% = 7\%$.

## F. Keynesian cross and multipliers

| Asked | Use |
|---|---|
| $G$ needed to close a gap $\Delta Y$ | $\Delta G = \Delta Y(1 - MPC)$ (2021 A Q10: $400\times 0.2 = 80$) |
| $T$ cut needed | $\Delta T = -\Delta Y(1 - MPC)/MPC$ (2024 A Q2) |
| Balanced-budget change | $\Delta Y = \Delta G$ |
| Output above equilibrium | unplanned inventory build-up, firms cut production |
| Investment crowded out | $\Delta I = \Delta Y(1 - MPC) - \Delta G$ |

## G. Solving IS-LM and Mundell-Fleming with numbers

1. **IS:** substitute $C$, $I$, $G$, $T$ into $Y = C + I + G$ and write $Y$ as a function of $r$.
2. **LM:** set money demand equal to $M/P$; write $Y$ as a function of $r$.
3. Equate and solve; check by plugging $r$ into both.
4. **Required $\Delta M$ for a target $r$**: find $Y$ from IS at the target $r$, then $M/P = L(r, Y)$, then $M$.
5. **Mundell-Fleming:** set $r = r^*$ first; LM* gives $Y$; IS* gives $NX$; $NX(e)$ gives $e$. Real rate $= eP/P^*$.

> [!example] 2026 A Q9
> IS $Y = 1700 - 100r$, $L = Y - 100r$, $M = 1000$, $P = 2$. Now: $r = 6$, $Y = 1100$. Target $r = 4$: $Y = 1300$, $L = 900$, so $M = 1800$: **raise $M$ by 800**.

## H. Phillips curve arithmetic

1. Write $\pi_t - \pi_{t-1} = -\beta(u_t - u^n) + \nu$.
2. Disinflation by $x$ points in one period: $u - u^n = x/\beta$. Okun: GDP falls by $2(u - u^n)$%.
3. Sacrifice ratio $= 2/\beta$.
4. Hysteresis: compute $u^n$ each period from the rule; when inflation is held constant, $u_t = u^n_t$.
5. Steady unemployment below $u^n$: inflation rises by $\beta(u^n - u)$ every period.

> [!example] 2021 sample Q24
> $\beta = 0.5$: one point of disinflation needs 2 points of cyclical unemployment, which costs $2\times 2 = 4\%$ of GDP. Sacrifice ratio **4**.

## I. "Two central banks" questions

| Shock | Price-level target | Output target |
|---|---|---|
| Demand falls (AD left) | raise $M$ | raise $M$ (same: no trade-off) |
| Money demand falls (LM right) | cut $M$ | cut $M$ |
| Adverse supply shock | cut $M$ (deeper recession) | raise $M$ (higher prices) |

## J. Elimination tricks

- If two options say the same thing in different words, both are right or both wrong (2022 A Q11 has two identical correct options).
- "Movement along" vs "shift": a change in a variable on the axes is a movement along (P on AD, e on IS*); anything else shifts.
- "Increase the level, not the growth rate" is the answer to almost every Solow policy question except technology.
- "No change in output" is the answer to almost every floating-rate fiscal or trade question.
