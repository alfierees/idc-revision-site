---
title: "Exam Question Playbook"
subject: principles-of-macro
type: reference
description: "A step-by-step routine for each kind of question the multiple-choice final asks: the national-accounts story, per-capita growth, GDP vs GNP, savings and trade, loanable-funds shifts, every Solow question type, the Golden Rule, three-economists questions and the balance of payments."
course: Principles of Macroeconomics
instructor: Dr. Idit Kalisher and Mr. Yosi Ganel
semester: 2
year: 1
order: 4
tags:
  - principles-of-macro
  - exam-prep
  - playbook
---

> Each play is the routine for one question type, with the past-paper question it comes from. The formulas are on the [[National Accounts and Solow Formula Sheet]]; the question numbers are on the [[Past Paper Topic Map]].

## A. The national-accounts story (Q1, the long one)

1. **Make a table**, one column per firm type plus the government: sales, purchases, inventory added, inventory cleared, imports, exports, wages, rent, depreciation.
2. **Value added** per firm: sales $+$ exports $-$ purchases $-$ imports $+$ (added $-$ cleared). Government: wages $+$ rent.
3. $Y = \sum VA$. Net output $= Y -$ total depreciation.
4. **Profit** per firm $= VA -$ wages $-$ rent $-$ depreciation.
5. **Savings:** $s_P = Y_{net} - T - C$; $G =$ government wages $+$ rent $+$ purchases; $s_G = T - G$; $S = s_P + s_G$.
6. **Check:** $S = $ net investment $+ NX$, where net investment $=$ new machinery $+ \Delta$inventory $-$ depreciation. If it does not match, a number is in the wrong column.
7. Only then read the options: most are one wrong line each (profit vs value added, gross vs net).

From [[PP_01|2025 Moed A]] Q1 (the Shire): savings 290, deficit 2,000.

## B. Nominal and real per-capita growth (Q3)

1. Write the **three factors**: $1 + g_{nominal}$, $1 + \pi$ (a fall of 5% is 0.95), $1 + g_{pop}$.
2. Nominal per capita $= \tfrac{1 + g_{nominal}}{1 + g_{pop}}$; real per capita divides by $1 + \pi$ too.
3. "Annually, on average": take the $T$-th root of the total factor.
4. Statements about population "offsetting" GDP: compare the two growth factors directly.

From [[PP_02|2025 Moed B]] Q6: GDP $+4\%$, population $+4\%$, prices $-4\%$: nominal per capita unchanged, real per capita up because prices fell.

## C. GDP, GNP and net measures (Q4)

1. Find **received** (our people abroad) and **paid** (foreigners here).
2. $GNP = GDP + \text{received} - \text{paid}$.
3. Subtract depreciation for the net version of each.
4. Write all four relative to GDP (e.g. $GNP = GDP - 394$) and compare the options.

**Definitions in words:** domestic $=$ where, regardless of nationality; national $=$ who, regardless of location; net $=$ minus depreciation.

## D. Savings and trade in words (Q5)

Write $S - I = NX$ and read each option against it. "Exports exceed imports" means $S > I$. GDP vs GNP is about factor income, not trade, so an option linking them is a trap.

## E. Opening a closed economy (Q2)

1. Saving does not depend on $r$: the supply of funds is vertical at $S$.
2. Compare the **world rate** with the closed-economy rate.
3. World above closed: investment falls below $S$, the surplus is lent abroad, $NX > 0$.
4. World below closed: investment rises above $S$, the gap is borrowed, $NX < 0$.
5. Equal rates: no net lending, but trade can still happen ($NX = 0$ does not mean no trade).

## F. A shift in consumption or in demand for funds (Q6)

| Shift | $S$ | $r$ | $I$ |
|---|---|---|---|
| Consume more at every income | down | up | down |
| Consume less | up | down | up |
| Investment demand rises, saving fixed | unchanged | up | **unchanged** (pinned by $S$) |

From the [[PP_03|practice questions]] Q14: more demand for funds with vertical saving: $r$ rises, investment unchanged.

## G. Solow in words (Q7 to Q13)

Read the stem for **what is the same** between economies and **what changed**:

| The stem says | Answer |
|---|---|
| Same function, $n$, $\delta$, different steady states | different saving rates |
| $s$ changes permanently | permanent change in $k$, $y$ levels; no lasting change in growth |
| Capital lost or gifted away | temporary fall, then back to the same $\bar k$ |
| Capital gift received | temporary rise, then back |
| Emigrants take their share of capital | nothing changes per worker |
| Negative capital accumulation | saving below $(\delta + n)k$ |

> [!tip] The capital-gift race ([[PP_01|2025 Moed A]] Q13)
> Two identical economies give away the same share of capital, $n_1 > n_2$, no depreciation. Both fall, then return. **Economy 2 recovers faster**: at the same $k$, $\Delta k = s f(k) - nk$ is larger when $n$ is smaller, so less of its saving goes to equipping new workers.

## H. "Will $k$ grow?" with numbers (Q14)

1. $y = A k^{\alpha}$ at the given $k$ (square roots and fourth roots: the numbers are chosen to be clean).
2. $sy$ against $(\delta + n)k$.
3. Bigger saving: $k$ grows (living standards rise). Smaller: $k$ falls. Equal: steady state.
4. Ignore options that argue from "output per worker is less than 1" or "$k$ is at its highest": only the comparison counts.

```graph
type: macro-k-check
paper: b25
```

## I. The Golden Rule and three economists (Q11, Q17)

1. With Cobb-Douglas, **$s_{GR} = \alpha$**, the exponent on $k$. Nothing else in the question matters for the rate.
2. Compare each economist's claim with $\alpha$. Anyone who uses $\delta + n$ as the saving rate is wrong.
3. "More saving always means more consumption": wrong past $\alpha$.
4. At the Golden Rule, consumption is $1 - \alpha$ of each unit of output.

From [[PP_02|2025 Moed B]] Q14: $y = 25k^{0.2}$, $s = 10\%$. $s_{GR} = 0.2$, double the current rate (A right); at $k = 32$, $sy = 5 > 0.06\cdot32 = 1.92$, so $k$ is growing (B right).

## J. Diminishing returns and the labour market (Q19, Q20)

| Stem | Answer |
|---|---|
| More capital, slower growth | diminishing returns to capital |
| Lower $MPK$ in A, same function, both in steady state | A has higher $k$ |
| Fewer workers, $K$ fixed | $k$ up, total $Y$ down, $MPL$ up |
| Lower $MPL$ | more labour (or less capital) |

## K. The balance of payments (Q15, Q18)

1. **Current account:** exports $-$ imports $+$ income received $-$ income paid $+$ transfers received $-$ transfers sent.
2. **Capital account:** foreign money coming in ($+$) minus our money going out ($-$): bonds, shares, plants, loans.
3. Goods sent as aid: an **export**, offset by a transfer (grant) in the current account or a loan in the capital account.
4. An export paid next year: the full export now, the unpaid half as a capital outflow (credit given).
5. Reserves change $= CA + KA$. Positive: reserves rise.

From the [[PP_04|sample exam]] Q18: $CA = 150 - 80 + 20 - 15 = 75$; capital $= 30 - 10 = 20$; reserves rise by 95.
