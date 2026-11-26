---
title: "National Accounts and Solow Formula Sheet"
subject: principles-of-macro
type: reference
description: "Every formula the multiple-choice final uses, with when it applies: value added, the three savings, S = I + NX, real per-capita growth, GDP, GNP and net measures, Cobb-Douglas and growth accounting, the Solow steady state and Golden Rule, bond prices and the balance of payments."
course: Principles of Macroeconomics
instructor: Dr. Idit Kalisher and Mr. Yosi Ganel
semester: 2
year: 1
order: 2
pinned: true
tags:
  - principles-of-macro
  - exam-prep
  - formula-sheet
aliases:
  - Principles of Macro Formula Sheet
---

> The exam comes with the course's three-page formula sheet ([[Formula Sheet — Solow, Growth Accounting & the Open Economy]]). This page adds **when** each line applies and the trap next to it. Worked examples are on the [[Cheat Sheet (Lec 1–10)]].

## Measuring output

| Quantity | Formula | Watch out |
|---|---|---|
| A firm's value added | $\text{sales} + \Delta\text{inventory} - \text{purchases from firms} - \text{imports}$ | $\Delta$inventory $=$ added $-$ cleared; it can be negative |
| Government value added | $\text{wages} + \text{rent}$ it pays | its purchases from firms are **not** its value added |
| GDP | $\sum VA_{firms} + VA_G$ | $= C + I + G + NX$ |
| Gross investment | new machinery and infrastructure $+\ \Delta$inventory | net $=$ gross $-$ depreciation |
| $G$ (public consumption) | government wages $+$ rent $+$ purchases from firms | all three, unlike $VA_G$ |
| A firm's profit | $VA - \text{wages} - \text{rent} - \text{depreciation}$ | all distributed unless the question says retained |
| Household income | wages $+$ rent $+$ profits from firms and government | $=$ net output when there is no foreign income |

## Savings and the open economy

$$
Y^d = Y_{net} - T - S_b, \qquad s_P = Y^d - C, \qquad s_G = T - G, \qquad S = s_P + s_G + s_B
$$

$$
S = I + NX, \qquad NX = EX - IM, \qquad \text{closed: } S = I
$$

| Sign | Meaning |
|---|---|
| $s_G < 0$ | budget **deficit** of $G - T$ |
| $NX > 0$ | $S > I$: the country lends abroad |
| $NX < 0$ | $S < I$: it borrows from abroad |
| $S$ and $I$ both net | use net output and net investment together, or gross and gross |

## Prices, per capita and growth

$$
RGDP = \frac{GDP}{1 + \pi}, \qquad \text{per capita} = \frac{\text{product}}{\text{population}}
$$

$$
1 + g_{\text{real pc}} = \frac{1 + g_{\text{nominal}}}{(1 + \pi)(1 + g_{\text{pop}})}, \qquad \bar g = (1 + g_{\text{total}})^{1/T} - 1
$$

Prices **falling** 5% means $1 + \pi = 0.95$: real grows faster than nominal.

## GDP, GNP and the net measures

$$
GNP = GDP - NIFF, \qquad NIFF = \text{paid to foreign factors} - \text{received from abroad}
$$

$$
NDP = GDP - \text{depreciation}, \qquad NNP = GNP - \text{depreciation}
$$

$NIFF > 0$ (more paid out than received) makes $GNP < GDP$. Trade does **not** enter the gap between GDP and GNP.

## Production and growth accounting

| Quantity | Cobb-Douglas $Y = AK^{\alpha}L^{1-\alpha}$ |
|---|---|
| $MPL$ | $(1 - \alpha)A\left(\tfrac KL\right)^{\alpha} = (1 - \alpha)\tfrac YL$ |
| $MPK$ | $\alpha A\left(\tfrac LK\right)^{1-\alpha} = \alpha\tfrac YK$ |
| Factor payments | $W/P = MPL$, $R/P = MPK$; labour gets $(1 - \alpha)Y$, capital $\alpha Y$ |
| Per worker | $y = Ak^{\alpha}$, $k = K/L$ |
| Growth accounting | $\tfrac{\Delta Y}{Y} = \tfrac{\Delta A}{A} + \alpha\tfrac{\Delta K}{K} + (1 - \alpha)\tfrac{\Delta L}{L}$ |

More $L$ with $K$ fixed lowers $MPL$; more $K$ with $L$ fixed lowers $MPK$.

## The Solow model

$$
\Delta k = s\,f(k) - (\delta + n)\,k, \qquad \bar k = \left(\frac{sA}{\delta + n}\right)^{\frac{1}{1-\alpha}}, \qquad \bar y = A\bar k^{\alpha}
$$

$$
c = (1 - s)\,y, \qquad \text{Golden Rule: } f'(k_{GR}) = \delta + n, \qquad s_{GR} = \alpha
$$

| Question | Test |
|---|---|
| "Will $k$ increase at $k = \dots$?" | $s\,f(k) > (\delta + n)k$: yes; $<$: no; $=$: steady state |
| Is consumption maximised? | $s = \alpha$ (Cobb-Douglas) |
| Consumption share of output at the Golden Rule | $1 - \alpha$ |
| Steady-state growth | per worker 0; total $K$ and $Y$ grow at $n$ |

## Bonds and present value

$$
P = \sum_{t=1}^{T}\frac{C}{(1 + r)^t} + \frac{FV}{(1 + r)^T}, \qquad C = \text{coupon rate}\times FV
$$

Coupon rate below the market rate: price below face value. Price and market rate move in opposite directions.

## The balance of payments

$$
CA = NX + \text{primary income} + \text{secondary income (transfers)}, \qquad CA + KA + \Delta\text{reserves (as debit)} = 0
$$

| Item | Current account | Capital account |
|---|---|---|
| Exports, imports | $+$, $-$ | |
| Dividends, interest, wages from or to abroad | $+$, $-$ | |
| Aid or remittances sent in cash | $-$ | |
| Aid sent as goods | export $+$, grant $-$ | the loan part $-$ |
| Buying foreign bonds, shares, plants | | $-$ |
| Foreigners investing here, selling foreign assets | | $+$ |
| An export paid next year | export $+$ | trade credit $-$ |

Reserves change by $CA + KA$: a positive total adds to reserves.
