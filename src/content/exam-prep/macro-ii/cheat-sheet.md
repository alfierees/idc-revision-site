---
title: "Macro II Cheat Sheet"
subject: macro-ii
type: reference
description: "The whole course for the 25-question multiple-choice final, in exam order: the classical long run and money, Solow growth with population and technology, the Keynesian cross and IS-LM, AD-AS, Mundell-Fleming under floating and fixed rates, and the Phillips curve with hysteresis, each with the past-paper question it answers."
course: Macro-Economics II
semester: 1
year: 2
order: 1
pinned: true
tags:
  - macro-ii
  - exam-prep
  - cheat-sheet
aliases:
  - Macro 2 Cheat Sheet
---

> Every final is 25 four-option questions (2026 had 20 plus a bonus), drawn from Mankiw's chapters: the classical model and money (Lectures 3 to 5), Solow growth (no lecture deck, but in every paper), IS-LM and AD-AS (Lectures 6 to 8), Mundell-Fleming (Lecture 9) and aggregate supply with the Phillips curve (Lecture 14). Most questions are "which way does it move", a few are short calculations. The [[Macro II Formula Sheet]] has the formulas alone; the [[Exam Question Playbook]] has a recipe per question type.

## 0. Which model? (read the question, pick the row)

| The question mentions | Model | Section |
|---|---|---|
| "long run", "classical", "neoclassical", saving and investment, $Y$ fixed | classical loanable funds | §1 |
| money growth, velocity, inflation, nominal rate, Fisher | quantity theory | §2 |
| bank balance sheet, reserves, currency ratio | money multiplier | §2 |
| steady state, $k$, saving rate, golden rule, $n$, $g$, AK | Solow / endogenous growth | §3 |
| MPC, planned expenditure, inventories, multiplier | Keynesian cross | §4 |
| interest rate and output, closed economy, short run | IS-LM | §4 |
| price level and output, "returns to the long run", supply shock | AD-AS | §5 |
| exchange rate, small open economy, $r^*$, floating or fixed | Mundell-Fleming | §6 |
| inflation and unemployment, expectations, sacrifice ratio, hysteresis | Phillips curve | §7 |

## 1. The classical long run (Lecture 3)

- Output is set by supply: $\bar Y = F(\bar K, \bar L)$. Factors are paid their marginal products, $W/P = MPL$, $R/P = MPK$. With constant returns, **Euler**: $Y = MPL\cdot L + MPK\cdot K$, so the factor payments use up all output. Cobb-Douglas $Y = AK^\alpha L^{1-\alpha}$: capital's share is $\alpha$, labour's $1-\alpha$, both constant.
- The real wage rises with more capital or better technology, falls with more labour (2025 B Q1).
- Goods market = loanable funds: national saving $S = Y - C(Y - T) - G$ (fixed, vertical) meets investment $I(r)$ (downward). $r$ adjusts.

| Change | Saving | $r$ | $I$ |
|---|---|---|---|
| $G$ up (taxes fixed) | falls by $\Delta G$ | up | down: full crowding out |
| $T$ up | rises by $MPC\cdot\Delta T$ | down | up |
| Investment demand up (technology) | unchanged | up | unchanged (saving is fixed) |
| Households save more | rises | down | up |

2022 B Q1: taxes up by 100 with $MPC = 0.6$: consumption falls by 60, so saving **rises by 60**.

## 2. Money and inflation (Lectures 4 and 5)

- **Quantity equation:** $MV = PY$. In growth rates $\%\Delta M + \%\Delta V = \%\Delta P + \%\Delta Y$, so $\pi = \mu + g_V - g_Y$. With $V$ constant, $\pi = \mu - g_Y$.
- **Fisher:** $i = r + E\pi$; ex post $r = i - \pi$. In the long run $r$ is real (set by $S = I$), so 1 point more money growth is 1 point more inflation and 1 point higher $i$.
- **Money demand:** $M/P = L(i, Y)$. A higher $i$ (more expected inflation) lowers money demand, so **an announced future money increase raises $P$ today** (2022 A Q4, 2025 B Q4).
- **Classical dichotomy / neutrality:** in the long run money changes only nominal variables.
- **Money multiplier:** $M = m\cdot B$ with $m = \dfrac{1 + cr}{cr + rr}$ ($cr$ = currency/deposits, $rr$ = reserves/deposits). $m$ rises when $rr$ falls (e.g. a lower interest rate on reserves, 2026 A Q2). Open-market operations change $B$, not $m$.
- **Bank capital** = assets − liabilities. Deposits **and** the bank's own debt are liabilities (2026 A Q1: $2500 - 1500 = 1000$).

> [!example] 2026 A Q6: solve for $i$ and $P$
> $M/P = 0.6Y - 10000i$, $r = 0.03$, $\bar Y = 1000$, $M = 100$, money growth 1%, no output growth.
> $\pi = 1\%$, so $i = 0.03 + 0.01 = 0.04$. $M/P = 600 - 400 = 200$, so $P = 100/200 = 1/2$.

## 3. Solow growth (no deck, in every paper)

Per effective worker ($k = K/(EL)$, $y = f(k)$):

$$\Delta k = s f(k) - (\delta + n + g)k,\qquad \text{steady state: } s f(k^*) = (\delta + n + g)k^*.$$

| Variable in the steady state | Growth rate |
|---|---|
| $k$, $y$ per **effective** worker | 0 |
| capital and output per **worker** ($K/L$, $Y/L$), the real wage | $g$ |
| total capital $K$ and output $Y$ | $n + g$ |
| rental rate $MPK$, the capital-output ratio, factor shares | 0 (constant) |

- **Level vs growth:** a higher $s$ (or lower $n$, lower $\delta$) raises the **level** of $k^*$ and $y^*$, not the long-run growth rate. Only technology $g$ sustains growth in living standards. A lower budget deficit raises saving: level up, growth unchanged (Sample Q5).
- **Saving more:** consumption falls at once, then rises; it ends higher only if we started below the golden rule.
- **Golden rule:** consumption per worker is maximal where $MPK = \delta + n + g$ (or $MPK - \delta = n + g$). With $y = k^\alpha$ the golden-rule saving rate is $s = \alpha$ (2022 A Q5, 2022 B Q4). If $MPK - \delta > n + g$, the economy has **too little** capital: raise saving (2021 B Q6).
- **Steady-state arithmetic:** $s = (\delta + n + g)\dfrac{K}{Y}$. 2024 A Q20: $3\times(4\% + 4\%) = 24\%$.
- On the Solow diagram with $n = g = 0$, $sf(k^*)/k^* = \delta$ (2025 A Q4: AB/OA is the depreciation rate).
- **Endogenous growth (AK):** $Y = AK$ has a constant return to capital, so $\Delta K/K = sA - \delta$: saving changes the **growth rate**. Growth is permanent if $sA > \delta$ (2024 B Q17). Only endogenous growth lets the saving rate move long-run growth (2022 B Q8).
- Institutions (Acemoglu, Johnson and Robinson): settlers who stayed built property-rights institutions; extractive ones elsewhere.

## 4. The Keynesian cross and IS-LM (Lectures 7 and 8)

**Keynesian cross:** $PE = C(Y - T) + I + G$, equilibrium $Y = PE$.
- Above equilibrium output exceeds planned spending: **unplanned inventories pile up**, firms cut output (2022 A Q11).
- Multipliers: $\dfrac{\Delta Y}{\Delta G} = \dfrac{1}{1 - MPC}$, $\dfrac{\Delta Y}{\Delta T} = \dfrac{-MPC}{1 - MPC}$, balanced budget ($\Delta G = \Delta T$) $= 1$.
- A tax cut of 1 raises spending by $MPC$ at first, then by $MPC/(1 - MPC)$ (2022 B Q11: 0.75 and 3).

**IS** (goods): $Y = C(Y - T) + I(r) + G$, slopes **down** (lower $r$, more $I$, more $Y$). Shifts with $G$, $T$, confidence.
**LM** (money): $M/P = L(r, Y)$, slopes **up** (higher $Y$, more money demand; with $M/P$ fixed, $r$ must rise). Shifts with $M$, $P$, money demand.

| Shock | Curve | $Y$ | $r$ |
|---|---|---|---|
| $G$ up or $T$ down | IS right | up (less than the cross: crowding out) | up |
| $M$ up | LM right | up | down |
| money demand up (preference for cash) | LM left | down | up |
| $P$ down | LM right | up | down |
| consumer or investor pessimism | IS left | down | down |

- **Crowding out:** the IS-LM rise in $Y$ is smaller than the Keynesian-cross shift because $r$ rises. Sample Q14: multiplier 4, cross shift $4\times 100 = 400$, actual 300, so 100 of output and $100\times(1-0.75)= 25$ of investment crowded out.
- Monetary policy is strong when money demand is interest-**inelastic** (steep LM) and investment is interest-**elastic** (flat IS).
- **Central bank targeting $r$** must move $M$ with every IS shock, so IS shifts hit $Y$ at the full cross multiplier; **fixed $M$** lets $r$ absorb part of it.
- **Liquidity preference:** with excess money supply, people buy bonds, bond prices rise, $r$ falls.

> [!example] 2025 B Q19: solving IS-LM
> $C = 120 + 0.5(Y - T)$, $I = 100 - 10r$, $G = 50$, $T = 40$, $L = Y - 20r$, $M = 600$, $P = 2$.
> IS: $Y = 500 - 20r$. LM: $Y = 300 + 20r$. So $r = 5$, $Y = 400$.

## 5. AD-AS: short run to long run (Lecture 6)

- **AD** comes from IS-LM: a lower $P$ raises $M/P$, LM shifts right, $Y$ rises. A change in $P$ is a movement **along** AD; anything else that moves IS or LM shifts AD.
- **LRAS** vertical at $\bar Y$. **SRAS** horizontal (prices fixed) in Lecture 6, upward $Y = \bar Y + \alpha(P - EP)$ in Lecture 14.
- **Demand shock:** short run, $Y$ moves; long run, prices adjust and $Y$ returns to $\bar Y$; only $P$ changed. In IS-LM language: with $Y < \bar Y$, $P$ falls, $M/P$ rises, LM shifts right until $Y = \bar Y$ (Sample Q11).
- **Supply shock** (oil, drought, wage push): SRAS up, stagflation. With no policy it returns; **accommodating** with more $M$ keeps $Y$ at $\bar Y$ but keeps $P$ high.
- **Stabilisation:** for a demand shock, the central bank can restore both $Y$ and $P$ (move AD back). For a supply shock it must pick one. A money-demand fall is like a monetary expansion, so both a price-targeting and an output-targeting central bank cut $M$ (2026 A Q7).

## 6. Mundell-Fleming: the small open economy (Lecture 9)

$r = r^*$ (perfect capital mobility). $e$ = foreign currency per unit of home currency, so **$e$ up = appreciation**, and $NX(e)$ falls as $e$ rises.

$$IS^*: Y = C(Y - T) + I(r^*) + G + NX(e),\qquad LM^*: \frac{M}{P} = L(r^*, Y)\ \ (\text{vertical}).$$

| Policy | Floating rate | Fixed rate |
|---|---|---|
| Fiscal expansion | $e$ up, $Y$ unchanged, $NX$ down by $\Delta G$ | $Y$ up, $M$ rises to hold $e$ |
| Monetary expansion | $e$ down, $Y$ up | impossible: $M$ must return, nothing changes |
| Import quota / tariff | $e$ up, $Y$ and $NX$ unchanged (imports and exports both lower) | $Y$ up, $NX$ up |
| Lower $P$ | $LM^*$ right, $e$ down, $Y$ up | central bank must cut $M$ |
| Higher risk premium $\theta$ ($r = r^* + \theta$) | money demand down, $LM^*$ right: $e$ down, $Y$ up (in the model) | central bank must cut $M$ to defend $e$ |

- Under a fixed rate, defending the peg means buying (selling) home currency when it is weak (strong); that changes $M$.
- **Large open economy:** in between. A fiscal expansion raises $r$ partly and appreciates partly; a monetary expansion lowers $r$ (more $I$) and depreciates (more $NX$).
- Expected depreciation acts like a higher risk premium: the currency weakens today.

> [!example] 2024 A Q13: a full Mundell-Fleming solution
> $LM^*: Y = 200r - 200 + 2M/P$; $IS^*: Y = 400 + 3G - 2T + 3NX - 200r$; $NX = 200 - 100e$; $r^* = 2.5$, $M = 100$, $P = 1$, $P^* = 1/6$, $G = T = 100$.
> LM* gives $Y = 500$. IS*: $500 = 600 - 300e$, so $e = 1/3$. The real exchange rate is $e\cdot P/P^* = (1/3)\cdot 6 = 2$.

## 7. Aggregate supply and the Phillips curve (Lecture 14)

- **Sticky-price model:** a fraction $s$ of firms set prices in advance. $Y = \bar Y + \alpha(P - EP)$ with $\alpha = \dfrac{s}{(1 - s)a}$. More sticky firms: flatter SRAS, bigger and longer output effects. High inflation makes firms change prices more often ($s$ falls), so SRAS gets **steeper** (2021 A Q25).
- **Phillips curve:** $\pi = E\pi - \beta(u - u^n) + \nu$. With adaptive expectations $E\pi = \pi_{-1}$.
- Demand-pull inflation: AD right. Cost-push: $\nu > 0$, SRAS up.
- **Long run:** $\pi = E\pi$, so $u = u^n$: the long-run Phillips curve is vertical (no long-run trade-off).
- **Okun's law:** each point of cyclical unemployment costs about 2% of GDP (Lecture 14: $\Delta u \approx -\tfrac12\%\Delta Y$).
- **Sacrifice ratio** = % of a year's GDP lost per point of disinflation $= 2/\beta$ with Okun's 2. Rational expectations and a credible announcement lower it.
- **Hysteresis:** $u^n$ follows past unemployment, so a recession raises normal unemployment for years.

> [!example] 2022 A Q24: hysteresis
> $u^n_t = 0.5u_{t-1} + 0.5u_{t-2}$, $\pi = \pi_{-1} - 0.4(u - u^n)$, start $u = u^n = 4$, cut inflation by 2 in period 1 and hold it.
> Period 1: $-2 = -0.4(u_1 - 4)$, so $u_1 = 9$. Period 2: $u_2 = u^n_2 = 0.5(9) + 0.5(4) = 6.5$. Period 3: $u^n_3 = 0.5(6.5) + 0.5(9) = 7.75$.
