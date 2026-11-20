---
title: "AS-AD Model & Economic Fluctuations"
week: 6
semester: 1
year: 2
academic_year: "2025-26"
course: Macro-Economics II
lecture: "Chapter 10 — Introduction to Economic Fluctuations & the AS-AD Model"
instructor: Alon Cohen
date: 2026-05-18
tags:
  - macro-economics-ii
  - aggregate-demand
  - aggregate-supply
  - business-cycle
  - SRAS
  - LRAS
  - okuns-law
  - price-stickiness
  - supply-shocks
  - demand-shocks
  - stabilization-policy
  - classical-dichotomy
aliases:
  - Chapter 10 Macro II
  - AS-AD Model
  - Aggregate Supply Aggregate Demand
  - Economic Fluctuations Macro II
subject: macro-ii
in_scope: true
---

# AS-AD Model & Economic Fluctuations

> Part of: [[Macro-Economics II]] | Key concepts: [[Aggregate Demand]], [[Short-Run Aggregate Supply]], [[Long-Run Aggregate Supply]], [[Okun's Law]], [[Price Stickiness]], [[Supply Shock]], [[Demand Shock]], [[Stabilization Policy]], [[Classical Dichotomy]]

---

## 🗺️ What This Chapter Is About

Chapters 3–9 built the **classical model** of the economy — a long-run world where prices are perfectly flexible, output is pinned by technology and factor supplies, and monetary policy only determines the price level. But this world cannot explain *recessions*. The real economy fluctuates dramatically in the short run: GDP collapses, unemployment spikes, and monetary or fiscal policy actually seems to matter.

Chapter 10 introduces the **AS-AD framework** — the central tool for thinking about short-run fluctuations. The key insight is a single assumption: **in the short run, many prices are sticky**. Once you accept price stickiness, demand shocks can change real output (not just prices), and both fiscal and monetary policy regain traction. The chapter bridges the classical long run with the Keynesian short run, showing how the economy transitions between them as prices gradually "unstick."

> [!info] Big picture: two worlds
> | Dimension | Long Run | Short Run |
> |---|---|---|
> | Prices | Flexible | Sticky (predetermined) |
> | Output | Determined by supply (K, L, tech) | Determined by demand |
> | Monetary policy effect | Only prices | Real output and employment |
> | Equilibrating mechanism | Price adjustment | Quantity adjustment |

---

## 📊 Business Cycle Facts

### GDP, Consumption, and Investment

==The business cycle== refers to the short-run fluctuations in economic activity around its long-run trend. Key empirical regularities:

- **Real GDP** averages 3–3.5% annual growth in the long run, but fluctuates substantially year-to-year.
- **Consumption** fluctuates *less* than GDP — households smooth spending over time (consumption smoothing / permanent income hypothesis).
- **Investment** fluctuates *more* than GDP — firms cut capital expenditure sharply when demand is uncertain.

> [!tip] Why is investment so volatile?
> Investment spending is inherently forward-looking and discretionary. A firm can delay a factory build far more easily than households can cut food spending. This is why recessions hit capital goods industries (construction, machinery) especially hard.

### Unemployment and Okun's Law

==Okun's Law== describes the empirical negative relationship between GDP growth and changes in unemployment: ^okuns-law

$$\boxed{\Delta u \approx -\frac{1}{2} \Delta Y\%}$$

Or equivalently: every 2 percentage points of GDP growth above the long-run average reduces the unemployment rate by roughly 1 percentage point.

> [!info] Okun's Rule of Thumb
> $\%\Delta Y \approx 3 - 2 \Delta u$
> - If $\Delta u = 0$: economy grows at its trend rate (~3%)
> - If $\Delta u = +1\%$: GDP growth is ~1% (below trend)
> - If $\Delta u = -1\%$: GDP growth is ~5% (above trend)

> [!example] Okun's Law during COVID-19
> In 2020 (U.S.):
> - Unemployment rate rose from ~3.7% to ~8.1% → $\Delta u = +4.4\%$
> - Real GDP growth: **-3.5%**
> - Implied Okun ratio: $3.5 / 4.4 \approx 0.8$ — lower than the typical coefficient of ~2, because the pandemic disruption was sudden and unusual (many layoffs happened before output fully adjusted). An extreme outlier year, not a breakdown of the relationship.

---

## 🕰️ Time Horizons: Long Run vs. Short Run

### Why Prices Are Sticky in the Short Run

The classical model assumes prices adjust instantly to clear all markets. In reality, many prices are slow to move because of:

- **Menu costs** — literally the cost of reprinting menus, updating software, renegotiating contracts.
- **Customer relations** — frequent price changes alienate customers and signal instability.
- **Wage contracts** — labour agreements (union contracts, multi-year employment deals) fix nominal wages for months or years.
- **Social norms** — norms of "fairness" make firms reluctant to cut wages even when labour markets are slack.

> [!warning] Stickiness is temporary
> Price rigidity *gradually dissolves* in the long run. A firm may keep prices fixed this quarter, but after a year of excess demand (or supply), renegotiates contracts and updates prices. The distinction between SR and LR is therefore a matter of *time horizon*, not kind.

### Recap: Classical Theory (Long Run)

From Chapters 3–9, the classical model implies:

1. **Output** is supply-determined: $\bar{Y} = F(K, L)$ — the full-employment level of output.
2. **Changes in aggregate demand** (shifts in C, I, G) only change *prices*, not *quantities* (the "crowding out" result from Chapter 3).
3. **Money is neutral** — the central bank controls the price level but not real output.

This all holds in the **long run with flexible prices**. The AS-AD model generalises it to the short run.

---

## 📉 Aggregate Demand (AD)

### The AD Curve

==Aggregate demand== shows the relationship between the **price level** $P$ and the **quantity of output demanded** $Y$ by all sectors of the economy.

For this introductory chapter, we derive AD from the **quantity equation**:

$$MV = PY$$

Solving for $Y$:

$$Y = \frac{MV}{P}$$

For fixed $M$ and $V$, this is a **hyperbola in P-Y space** — as $P$ rises, $Y$ falls. This is the downward-sloping AD curve. ^ad-curve

> [!tip] Intuition for the downward slope
> A higher price level reduces **real money balances** ($M/P$). With less purchasing power in the monetary system, people demand fewer goods and services → lower output demanded.
>
> More formally: $M/P$ must equal money demand $kY$ (where $k = 1/V$). If $P$ rises and $M$ is fixed, $M/P$ falls, so $kY$ must fall → $Y$ falls.

### Shifting the AD Curve

The AD curve shifts when $M$ or $V$ changes (holding $P$ constant):

| Shift | Cause | Direction |
|---|---|---|
| $M$ increases | Fed buys bonds (expansionary monetary policy) | Rightward |
| $M$ decreases | Fed sells bonds (contractionary monetary policy) | Leftward |
| $V$ increases | Financial innovation, lower money demand | Rightward |
| $V$ decreases | Recession panic, more precautionary saving | Leftward |
| $G$ increases | Fiscal expansion (note: works through different channel in later chapters) | Rightward |

---

## 📈 Aggregate Supply: Long Run (LRAS)

==Long-Run Aggregate Supply (LRAS)== is determined by the production function: ^lras

$$\bar{Y} = F(\bar{K}, \bar{L})$$

Since $\bar{Y}$ depends on technology and factor supplies (not the price level), the **LRAS curve is vertical** at $\bar{Y}$ — the **natural level of output** (also called potential or full-employment output).

> [!info] Why vertical?
> This is just the classical dichotomy again: in the long run, real variables (output, employment) are determined by real forces (technology, capital, labour). Nominal variables like $P$ don't affect them.

> [!warning] Full employment ≠ zero unemployment
> "Full employment" means unemployment equals its **natural rate** (frictional + structural unemployment). The LRAS is at the *natural* level of output, which corresponds to some positive unemployment rate.

### Long-Run Effects of Policy (Classical Results Restored)

In the long run, AD shifts only affect $P$, not $Y$:

**Monetary expansion ($\uparrow M$):**
- AD shifts right → $P$ rises → in LR, economy stays at $\bar{Y}$ with higher price level.
- Result: inflation, no permanent output gain.

**Fiscal expansion ($\uparrow G$):**
- AD shifts right → $P$ rises → in LR, economy stays at $\bar{Y}$.
- Result: higher price level, **crowding out** of investment (same as Chapter 3).

---

## 📉 Aggregate Supply: Short Run (SRAS)

### The Horizontal SRAS Curve

In the introductory model (Chapters 10–12), we make the simplest sticky-price assumption: **all prices are fully fixed in the short run** at a predetermined level $\bar{P}$.

This gives a **horizontal SRAS curve** at $\bar{P}$:

$$P = \bar{P} \quad \text{(for all } Y \text{ in the short run)}$$

> [!info] Interpretation
> Firms are willing to supply *whatever quantity is demanded* at the fixed price $\bar{P}$. Output is therefore demand-determined in the short run — the AD curve tells you where you end up on the SRAS curve.

> [!tip] How can firms produce above $\bar{Y}$ temporarily?
> - Ask workers to work overtime (higher labour input)
> - Use machinery more intensively (higher capital utilisation)
> These are unsustainable — overtime is costly, machines wear out faster — which is why output above $\bar{Y}$ cannot persist in the long run.

### Short-Run Effects of Demand Shocks

When AD increases (e.g. from $\uparrow M$ or $\uparrow G$):
- With sticky prices, firms see higher demand and **increase output** (moving right along SRAS).
- Output rises above $\bar{Y}$; unemployment falls below its natural rate.

When AD decreases (e.g. from $\downarrow V$):
- Firms see lower demand and **cut output** (moving left along SRAS).
- Output falls below $\bar{Y}$; unemployment rises above its natural rate → **recession**.

---

## 🔄 From Short Run to Long Run: The Adjustment Mechanism

The economy self-corrects over time through **price adjustment**. Prices are the bridge between the SR equilibrium and the LR equilibrium.

### The Key Rule

$$
\begin{cases}
Y > \bar{Y} & \Rightarrow \text{upward pressure on prices} \rightarrow P \uparrow \\
Y < \bar{Y} & \Rightarrow \text{downward pressure on prices} \rightarrow P \downarrow \\
Y = \bar{Y} & \Rightarrow \text{prices stable} \rightarrow P \text{ stays constant}
\end{cases}
$$

### Why Prices Move: The Cost Channel

**When $Y > \bar{Y}$ (boom):**
- Workers are scarce → firms pay overtime premiums.
- Machines run hot → wear and tear costs rise.
- Rising input costs → firms eventually raise prices.
- Higher $P$ → lower $M/P$ → lower demand → $Y$ falls back to $\bar{Y}$.

**When $Y < \bar{Y}$ (recession):**
- Workers are abundant → wage pressure falls.
- Firms are not selling as much → they under-utilise capacity and lay off workers.
- Downward pressure on wages and input costs → eventually, prices fall.
- Lower $P$ → higher $M/P$ → higher demand → $Y$ rises back to $\bar{Y}$.

### Full SR → LR Adjustment Path: Expansionary Monetary Shock

> [!example] Increase in money supply $\Delta M > 0$
>
> **Step 1 (Initial):** Economy at point A: $(P_1, \bar{Y})$ — LR equilibrium.
>
> **Step 2 (Short run):** Fed increases $M$ → AD shifts right → at fixed $\bar{P}$, output jumps to $Y_2 > \bar{Y}$. Economy at point B: $(P_1, Y_2)$.
>
> **Step 3 (Transition):** $Y > \bar{Y}$ → costs rise → firms raise prices gradually.
>
> **Step 4 (Long run):** Higher $P$ reduces real balances → quantity demanded falls back → economy returns to $\bar{Y}$ at new higher price level $P_2$. Economy at point C: $(P_2, \bar{Y})$.
>
> **Net effect:** $\Delta P > 0$, $\Delta Y = 0$ in the long run. Money is neutral in the LR, as the classical model predicts.

| Point | Location | Price | Output | Notes |
|---|---|---|---|---|
| A | Initial LR eq | $P_1$ | $\bar{Y}$ | Classical LR equilibrium |
| B | SR eq post-shock | $P_1$ | $Y_2 > \bar{Y}$ | Boom — prices still sticky |
| C | New LR eq | $P_2 > P_1$ | $\bar{Y}$ | Prices rise, output restored |

---

## ⚡ Shocks

==Shocks== are exogenous changes to aggregate demand or supply that temporarily push the economy away from full employment. ^shocks-definition

### Demand Shocks

A **demand shock** shifts the AD curve. Examples:

| Shock | Direction | Mechanism |
|---|---|---|
| Fed increases $M$ | Positive (AD right) | More real balances → more spending |
| $V$ falls (panic, less spending) | Negative (AD left) | Less spending per dollar |
| Fiscal stimulus ($\uparrow G$) | Positive (AD right) | Direct government spending |
| Consumer confidence collapses | Negative (AD left) | Households cut $C$ |

> [!example] Negative demand shock: Fall in velocity $V$
> If the Fed holds $M$ constant but $V$ falls (e.g. people hoard cash during a financial crisis):
> - $MV$ falls → AD shifts left.
> - With sticky prices, output falls to $Y_2 < \bar{Y}$ → recession.
> - Over time, $P$ falls → real balances rise → demand recovers → $Y$ returns to $\bar{Y}$.
> - LR result: lower price level, same output. (Self-correcting — but slowly.)

### Supply Shocks

A **supply shock** (also called a ==price shock==) changes production costs and shifts the SRAS curve. ^supply-shocks

**Adverse supply shocks** push SRAS *up* (higher prices at every output level):
- Commodity price spikes (oil, food)
- New environmental regulations raising compliance costs
- Wage increases from unionisation
- Natural disasters destroying capital

**Favourable supply shocks** push SRAS *down*:
- Technological breakthroughs reducing production costs
- Cheaper energy
- Improved logistics

> [!example] The 1970s Oil Shocks
> **Context:** OPEC reduced oil supply in the early 1970s. Oil prices rose +11% (1973), +68% (1974), +16% (1975).
>
> **Mechanism:**
> 1. Higher oil prices → higher production costs for virtually every firm → SRAS shifts *up*.
> 2. At the new higher price level, firms produce less → output falls below $\bar{Y}$ → unemployment rises.
> 3. The economy moves from A to B: higher $P$ *and* lower $Y$ simultaneously — **stagflation**.
>
> **Resolution (without policy):** Eventually prices fall gradually → economy returns toward $\bar{Y}$ (self-correcting).
>
> **Resolution (with monetary accommodation):** The Fed could increase $M$ to shift AD right → output restored, but price level permanently higher (more inflation baked in). This is the **accommodation trade-off**.

---

## 🏛️ Stabilisation Policy

==Stabilisation policy== refers to government actions (monetary or fiscal) aimed at **reducing the severity of short-run economic fluctuations** — smoothing the business cycle around its trend. ^stabilisation-policy

### Responding to Adverse Supply Shocks: The Policy Dilemma

When an adverse supply shock hits (SRAS shifts up), policymakers face a painful choice:

| Option | Action | Result |
|---|---|---|
| **Do nothing** | Let automatic adjustment work | Output stays low until prices fall; slow and painful |
| **Accommodate** (expansionary) | $\uparrow M$ → AD shifts right | Output restored quickly, but price level permanently higher |
| **Fight inflation** (contractionary) | $\downarrow M$ → AD shifts left | Price level stabilised, but deeper recession in SR |

> [!warning] The Accommodation Trade-off
> Accommodating a supply shock with monetary expansion validates the higher price level permanently. This can entrench inflationary expectations, potentially leading to a **wage-price spiral**. The 1970s Fed repeatedly accommodated oil price shocks → persistent stagflation. The Volcker disinflation of 1979-82 deliberately chose the painful contractionary path to restore price stability.

> [!tip] Why stabilisation is hard in practice
> - Policymakers don't know whether a shock is temporary or permanent.
> - Lags between policy decisions and economic effects mean you might be "stimulating" an economy that has already recovered.
> - Distinguishing supply shocks from demand shocks in real time is notoriously difficult.

---

## 📝 Summary

| Concept | Key Point |
|---|---|
| **Business cycle** | GDP averages ~3% growth; consumption less volatile, investment more volatile than GDP |
| **Okun's Law** | $\%\Delta Y \approx 3 - 2\Delta u$; 1pp rise in $u \approx 2pp$ fall in growth |
| **Long run** | Prices flexible; output = $\bar{Y}$; classical model applies; LRAS vertical |
| **Short run** | Prices sticky; output demand-determined; SRAS horizontal |
| **AD curve** | Downward sloping; from $MV = PY$; shifts right with $\uparrow M$ or $\uparrow V$ |
| **LRAS** | Vertical at $\bar{Y}$; classical dichotomy; AD shifts only affect $P$ in LR |
| **SRAS** | Horizontal at $\bar{P}$; AD shifts affect both $P$ and $Y$ in SR |
| **SR→LR transition** | Automatic price adjustment restores $\bar{Y}$; speed depends on price flexibility |
| **Demand shocks** | Shift AD; SR: $\Delta Y$; LR: only $\Delta P$ |
| **Supply shocks** | Shift SRAS; cause stagflation if adverse; can be accommodated at cost of higher $P$ |
| **Stabilisation policy** | Use $M$ or $G$ to offset shocks; trade-off between speed of recovery and price stability |

---

## 🔗 Related Notes

- [[Lec_03-Classical Theory & National Income]] — the full-employment model this chapter generalises
- [[Lec_04-The Monetary System]] — money supply mechanics behind AD shifts
- [[Lec_05-Inflation]] — quantity theory underpins the AD derivation here
- [[Lec_07-AS-AD Model Continued]] — Chapters 11–12 develop AD theory more rigorously (IS-LM)
- [[Macro-Economics II]] — subject hub
