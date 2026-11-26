---
title: "Cheat Sheet (Lec 1–10)"
subject: principles-of-macro
type: reference
description: "Everything the multiple-choice final asks, in exam order: GDP by value added and expenditure, nominal and real per-capita growth, GDP, GNP and net measures, the savings identity, production and growth accounting, the Solow model, the Golden Rule, poverty traps, loanable funds, bonds and the balance of payments, each with a worked past-paper example."
course: Principles of Macroeconomics
instructor: Dr. Idit Kalisher and Mr. Yosi Ganel
semester: 2
year: 1
order: 1
pinned: true
tags:
  - principles-of-macro
  - exam-prep
  - cheat-sheet
aliases:
  - Principles of Macro Cheat Sheet
---

> **The exam:** about 20 multiple-choice questions (2025 Moed A had 22, two of them bonus questions for reservists and one cancelled), with the course formula sheet. The papers follow the same order every time:
>
> | Questions | Topic | Section |
> |---|---|---|
> | **1 to 6** | A national-accounts story (value added, savings, deficit), real per-capita growth, GDP vs GNP, $S = I + NX$, a shift in saving | §1 to §4, §9 |
> | **7 to 14** | Solow: assumptions, steady state, a change in $s$, poverty traps, the Golden Rule, a capital gift, "will $k$ grow?" | §5 to §8 |
> | **15 to 20** | Balance of payments, three-economists questions, diminishing returns, labour supply | §5, §11 |
>
> The long national-accounts story (Q1) is the one that takes time: do it last if you are slow with it. The Solow questions are mostly one line of reasoning each.

---

## 0. Method picker: what does this question want?

| You see… | Do this | Section |
|---|---|---|
| Firms' sales, purchases, inventories, wages, rent, government spending | Value added firm by firm, plus government at cost, then $Y$ | §1 |
| "Households paid taxes and spent on consumption", "deficit" | $s_P = Y_{net} - T - C$, $s_G = T - G$, $S = s_P + s_G$ | §4 |
| Current GDP in two years, a price change, a population change | Real per capita $= \dfrac{\text{nominal growth}}{\text{price growth}\times\text{population growth}}$ | §2 |
| "Annual average" over several years | $(\text{total factor})^{1/years} - 1$ | §2 |
| Foreign workers here, our workers abroad, depreciation | $GNP = GDP + \text{received} - \text{paid}$; net $= $ gross $-$ depreciation | §3 |
| "Exports exceed imports, so savings…" | $S - I = NX$ | §4 |
| "Households consume more at every income" | Saving falls: supply of funds left, $r$ up, $I$ down | §9 |
| "Opening to trade", world rate vs closed rate | $S$ fixed: world $r$ above means $I$ falls, $NX > 0$ | §9 |
| $MPL$, $MPK$, "real wage" | Partial derivatives; $W/P = MPL$ | §5 |
| Growth of $Y$, $K$, $L$: "productivity growth?" | $\tfrac{\Delta A}{A} = \tfrac{\Delta Y}{Y} - \alpha\tfrac{\Delta K}{K} - (1-\alpha)\tfrac{\Delta L}{L}$ | §5 |
| "Which is a Solow assumption?" | Closed, no government, constant $A$, CRS, fixed $s$, $\delta$ and $n$ | §6 |
| "Will $k$ grow?" with numbers | Compare $s\,f(k)$ with $(\delta + n)k$ | §6 |
| $s$ changes permanently | New $\bar k$, $\bar y$; growth only during the transition | §6 |
| Capital given away or destroyed | $k$ falls, then climbs back to the same $\bar k$ | §6 |
| "Maximise consumption", "Golden Rule" | $f'(k) = \delta + n$; Cobb-Douglas: $s_{GR} = \alpha$ | §7 |
| "Poverty trap" | $s\,f(k) < (\delta + n)k$: low saving keeps $k$ falling or stuck low | §8 |
| A bond, a coupon, a market rate | Price $=$ PV of the cash flows; price and rate move opposite | §10 |
| Imports, aid, dividends, loans, reserves | Each transaction twice; reserves balance the rest | §11 |

---

## 1. Measuring GDP: three approaches (Lec 02 to 04)

Output is measured three ways and they agree: **expenditure** (who used it), **value added** (who produced it), **income** (who earned it).

$$
Y = C + I + G + NX, \qquad NX = EX - IM
$$

$$
VA_{firm} = \text{sales} - \text{purchases from other firms (and imports)} + \Delta\text{inventory}
$$

- **Government** has no market price, so it is valued at cost: $VA_G = \text{wages} + \text{rent}$ it pays. Its purchases from firms are part of $G$, not of its value added.
- **Inventories:** unsold new goods are investment ($+$); goods sold out of inventory were counted last year ($-$).
- **Imports** of inputs lower value added; **exports** add to it. Switching sales from home to abroad changes nothing.
- **Outsourcing** or a **price change between firms** moves value added between firms; the total stays the same.
- **Transfers** and interest on government bonds are not output: they are negative taxes.

> [!example] Worked: the Shire ([[PP_01|2025 Moed A]] Q1)
> Final firms sold 4,045 using 850 of intermediate goods, cleared 280 from inventory, left 75 unsold. Intermediate firms bought nothing. Government paid 500 wages and 750 rent, and bought 1,500 from firms. Depreciation 100 + 50. Taxes 750, consumption 1,900.
>
> $VA_{final} = 4{,}045 - 850 + (75 - 280) = 2{,}990$, $VA_{int} = 850$, $VA_G = 500 + 750 = 1{,}250$. So $Y = 5{,}090$ and $NDP = 5{,}090 - 150 = 4{,}940$.
>
> $s_P = 4{,}940 - 750 - 1{,}900 = 2{,}290$; $G = 500 + 750 + 1{,}500 = 2{,}750$, so $s_G = 750 - 2{,}750 = -2{,}000$ (a **deficit of 2,000**). $S = 290$, equal to net investment: $645 + (75 - 280) - 150 = 290$.

**Income side:** $GDP = \text{wages} + \text{interest} + \text{rent} + \text{profit} + \text{net taxes on production}$. A firm's profit is its value added minus its wages, rent and depreciation.

---

## 2. Nominal and real, per capita and per year (Lec 04)

$$
RGDP = \frac{GDP}{1 + \pi}, \qquad 1 + g_{\text{real per capita}} = \frac{1 + g_{\text{nominal}}}{(1 + \pi)(1 + g_{\text{population}})}
$$

**Annual average** over $T$ years: $(\text{total growth factor})^{1/T} - 1$, not the total divided by $T$.

> [!example] Worked: Hobbiton ([[PP_01|2025 Moed A]] Q3)
> Nominal GDP rose from 152,448,000 to 158,545,920 (4%), population from 5,500 to 5,720 (4%), and prices **fell** 5% over five years. Nominal per capita: unchanged. Real per capita: $\tfrac{1}{0.95} = 1.0526$ in total, so $1.0526^{1/5} - 1 \approx 1.03\%$ a year. "Population growth equals GDP growth": true.

If every figure is nominal, you **cannot** separate inflation out (sample exam Q11); if you have both nominal and real, the ratio is the price level (sample exam Q3).

---

## 3. GDP, GNP and net measures (Lec 03, 04)

| | Gross | Net (minus depreciation) |
|---|---|---|
| **Domestic** (where it is produced) | GDP | NDP $=$ GDP $-$ depreciation |
| **National** (who produces it) | GNP $=$ GDP $+$ factor income received from abroad $-$ paid abroad | NNP $=$ GNP $-$ depreciation |

> [!example] Worked: Rivendell ([[PP_01|2025 Moed A]] Q4)
> Foreign workers in Rivendell earned 1,240; Rivendell's elves abroad earned 846; depreciation 244. $GNP = GDP + 846 - 1{,}240 = GDP - 394$. $NDP = GDP - 244$. $NNP = GDP - 394 - 244 = GDP - 638$. So GDP is 638 above NNP, and NDP is 394 above NNP.

---

## 4. The savings identity (Lec 03, 09)

$$
\underbrace{(Y - T - C)}_{s_P} + \underbrace{(T - G)}_{s_G} = I + NX \qquad\Longrightarrow\qquad S - I = NX
$$

- **Closed economy:** $S = I$.
- **Export surplus** ($NX > 0$): the country saves more than it invests and lends the rest abroad.
- **Import surplus** ($NX < 0$): it invests more than it saves and borrows from abroad.
- Retained (undistributed) profits are **business saving**, not household income.
- Net investment $=$ gross investment $-$ depreciation.

> [!example] Worked: imports after opening (sample exam Q4)
> Domestic production unchanged, consumption $+50$, investment $+15$, exports 80. From $\Delta Y + IM = \Delta C + \Delta I + EX$: $IM = 50 + 15 + 80 = 145$, and $NX = 80 - 145 = -65$.

---

## 5. Production, factor markets and growth accounting (Lec 05)

$$
Y = AK^{\alpha}L^{1-\alpha}, \qquad MPL = \frac{\partial Y}{\partial L} = (1-\alpha)\frac{Y}{L}, \qquad MPK = \frac{\partial Y}{\partial K} = \alpha\frac{Y}{K}
$$

- **Diminishing returns** to each input: more $K$ with $L$ fixed raises $Y$ by less and less. That is why a capital-rich economy grows more slowly (2025 A Q19), and why poor countries can catch up.
- **Constant returns to scale:** doubling both inputs doubles output.
- Competitive markets: $W/P = MPL$ (labour demand is the $MPL$ curve) and $R/P = MPK$. Capital supply is fixed in the short run.
- **Factor shares** for Cobb-Douglas: labour gets $1 - \alpha$ of output, capital $\alpha$.
- Less labour with $K$ fixed (2025 A Q20): **more capital per worker, lower total output**.

**Growth accounting:**

$$
\frac{\Delta Y}{Y} = \frac{\Delta A}{A} + \alpha\frac{\Delta K}{K} + (1 - \alpha)\frac{\Delta L}{L}
$$

> [!example] Worked: the residual
> $\alpha = 0.3$, output grows 4%, capital 5%, labour 2%. Productivity growth $= 4 - 0.3(5) - 0.7(2) = 4 - 1.5 - 1.4 = 1.1\%$.

---

## 6. The Solow model (Lec 06)

**Assumptions** (asked in every paper): a small **closed** economy with **no government**, competitive markets, **constant technology** $A$, **constant returns to scale** with diminishing returns to each input, a **fixed saving rate** $s$ ($S = sY$), a constant depreciation rate $\delta$, labour growing at $n$.

Per worker, $k = K/L$ and $y = f(k) = Ak^{\alpha}$:

$$
\Delta k = s\,f(k) - (\delta + n)\,k
$$

Saving per worker builds capital; $(\delta + n)k$ is what it takes to replace worn-out capital and equip new workers (capital dilution).

**Steady state:** $\Delta k = 0$, so $s\,f(\bar k) = (\delta + n)\bar k$:

$$
\bar k = \left(\frac{sA}{\delta + n}\right)^{\frac{1}{1-\alpha}}
$$

In steady state $k$, $y$ and $c$ per worker are constant; total output grows at $n$. Below $\bar k$, $k$ rises; above it, $k$ falls.

> [!example] Worked: "will $k$ increase?" ([[PP_01|2025 Moed A]] Q14)
> $Y = 10K^{0.5}L^{0.5}$, $s = 5\%$, $\delta = 3\%$, $n = 2\%$, $k = 100$. $y = 10\sqrt{100} = 100$, $sy = 5$, $(\delta + n)k = 0.05\cdot100 = 5$. $\Delta k = 0$: **already in steady state**, $k$ stays constant.

```graph
type: macro-k-check
paper: a25
```

Switch the question at the top: the same check answers 2025 Moed B Q5, practice Q13 and sample Q16.

| Shock | Short run | New steady state |
|---|---|---|
| $s$ rises permanently | $k$, $y$ grow for a while | **higher** $\bar k$, $\bar y$; growth back to 0 |
| $s$ falls permanently | $k$, $y$ fall | lower $\bar k$, $\bar y$ |
| Capital given away or destroyed | $k$ drops below $\bar k$ | climbs back to the **same** $\bar k$ |
| $n$ rises | more dilution | lower $\bar k$ |
| Same $A$, $\alpha$, $n$, $\delta$, different steady states | | only $s$ can explain it; the starting $k$ does not matter |

```graph
type: solow-model
figure: savings-shift
```

---

## 7. The Golden Rule (Lec 07)

Steady-state consumption per worker is $c^* = f(k^*) - (\delta + n)k^*$. It is largest where

$$
f'(k_{GR}) = \delta + n, \qquad s_{GR} = \frac{(\delta + n)k_{GR}}{f(k_{GR})}, \qquad \text{Cobb-Douglas: } \boxed{s_{GR} = \alpha}
$$

> [!example] Worked: three economists ([[PP_01|2025 Moed A]] Q17)
> $y = k^{0.4}$, $\delta = 7\%$, $n = 3\%$. A says 10% (because $\delta + n = 10\%$), B says 40%, C says more saving always means more consumption. $s_{GR} = \alpha = 0.4$: **only B is right**. Saving above $\alpha$ lowers long-run consumption.

The island (Lec 07): $Y = 4K^{0.5}L^{0.5}$, $n + \delta = 7\%$, saves 20%. $s_{GR} = 0.5$, so it saves too little to maximise consumption.

---

## 8. Poverty traps (Lec 07)

A poverty trap is a self-reinforcing cycle of **low income, low saving, low investment**: $s\,f(k) < (\delta + n)k$, so capital per worker does not grow.

> [!example] Worked: Economia and Stagnatia (Lec 07)
> Both $y = k^{0.4}$, $n + \delta = 0.08$, $k_0 = 1.5$. Economia saves 30%: $\Delta k = 0.3(1.5)^{0.4} - 0.12 = 0.233 > 0$, it grows towards $k^* \approx 9.05$. Stagnatia saves 10%: $\Delta k = 0.1(1.5)^{0.4} - 0.12 = -0.002 < 0$, it slides to $k^* \approx 1.45$.

Aid can lift $k$ for a while, but without enough saving and good institutions the economy falls back. South Korea and Niger started alike in the 1960s; institutions, trade, education and saving made the difference.

---

## 9. The market for loanable funds (Lec 08, 09)

Supply $=$ saving ($s_P + s_B + s_G$), rising with $r$; demand $=$ investment, falling with $r$. Equilibrium: $S = I$.

| Change | Shift | $r$ | $I$ |
|---|---|---|---|
| Households consume more at every income | supply left | up | down |
| Households consume less | supply right | down | **up** |
| Government deficit rises | supply left (public saving falls; household saving recovers part) | up | down (crowding out) |
| **Open** economy, world $r$ above the closed rate | | world $r$ | falls, $S > I$, $NX > 0$ |
| Open economy, world $r$ below | | world $r$ | rises, $S < I$, $NX < 0$ |

```graph
type: loanable-funds
figure: open-economy
```

Higher rates in a small economy pull in foreign money: the currency appreciates, imports rise and exports fall.

---

## 10. Bonds and present value (Lec 08)

$$
\text{Price} = \sum_{t=1}^{T}\frac{C}{(1 + r)^t} + \frac{FV}{(1 + r)^T}, \qquad C = i\cdot FV
$$

> [!example] Worked: Lec 08
> 3 years, 8% coupon on 1,000, market rate 10%: $\tfrac{80}{1.1} + \tfrac{80}{1.1^2} + \tfrac{1{,}080}{1.1^3} = 950.27$, below face value. At 5%: 1,081.70, above.

**Bond prices and interest rates move in opposite directions.** A higher $r$ lowers the PV of a project's cash flows, so NPV falls and investment falls.

---

## 11. The balance of payments (Lec 09, 10)

| Account | Item | Debit (money out) | Credit (money in) |
|---|---|---|---|
| Current | Goods and services | imports | exports |
| Current | Primary income | wages, interest, dividends paid abroad | received from abroad |
| Current | Secondary income (transfers) | aid and remittances sent | received |
| Capital | Investment and loans | investing or lending abroad | foreign investment and loans here |
| Reserves | Foreign currency | **increase** | **decrease** |

Every transaction is entered twice, so the balance of payments **always sums to zero**: reserves move by (current account + capital account). A current account deficit with a zero capital account is paid for out of reserves.

> [!example] Worked: aid in goods ([[PP_01|2025 Moed A]] Q18)
> Dividends in 250, interest out 160, goods imports 356, service exports 675. Medical aid of 594 sent **as goods**: an export of 594, with half (297) a grant and half (297) a loan. Bonds bought abroad 254, shares abroad sold 223, an R&D centre abroad 856.
>
> $CA = 250 - 160 - 356 + 675 + 594 - 297 = 706$. Capital $= -254 + 223 - 856 - 297 = -1{,}184$. Reserves change $= 706 - 1{,}184 = -478$: **reserves fell by 478**.

---

## 12. Consumption, investment and the exchange rate (Lec 10)

- $MPC + MPS = 1$; $C = C_0 + c_1Y^d - c_2r$.
- **Life-cycle hypothesis** (Modigliani): smooth consumption over a lifetime; the young borrow, the middle-aged save, retirees dissave.
- **Permanent income hypothesis** (Friedman): consumption follows long-run income, so **temporary** tax cuts change it little.
- **Malthusian trap:** higher income raises population, which pulls income per person back down (most of history before the Industrial Revolution).
- **Real exchange rate** $= \dfrac{eP_f}{P_d}$: a real depreciation raises exports and lowers imports.
