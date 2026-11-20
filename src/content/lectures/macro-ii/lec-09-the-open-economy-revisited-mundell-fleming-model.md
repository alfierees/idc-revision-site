---
title: "The Open Economy Revisited: The Mundell-Fleming Model and the Exchange-Rate Regime"
week: 9
semester: 1
year: 2
academic_year: "2025-26"
course: Macro-Economics II
lecture: "Chapter 13 — The Open Economy Revisited: The Mundell-Fleming Model and the Exchange-Rate Regime"
instructor: Alon Cohen
date: 2026-05-21
tags:
  - macro-economics-ii
  - mundell-fleming
  - open-economy
  - exchange-rate
  - IS-LM
  - fiscal-policy
  - monetary-policy
  - trade-policy
  - floating-exchange-rate
  - fixed-exchange-rate
  - net-exports
  - country-risk
  - aggregate-demand
aliases:
  - Chapter 13 Macro II
  - Mundell-Fleming Model
  - M-F Model
  - Open Economy IS-LM
subject: macro-ii
in_scope: true
---

# The Open Economy Revisited: The Mundell-Fleming Model and the Exchange-Rate Regime

> Part of: [[Macro-Economics II]] | Key concepts: [[Mundell-Fleming Model]], [[IS* Curve]], [[LM* Curve]], [[Floating Exchange Rate]], [[Fixed Exchange Rate]], [[Net Exports]], [[Country Risk Premium]], [[Aggregate Demand Curve]]

---

## 🗺️ What This Chapter Is About

Chapter 12 showed how the IS-LM model describes a **closed economy** in the short run. **Chapter 13 opens the economy up.** The central tool is the ==Mundell-Fleming model==, which extends IS-LM to a **small open economy with perfect capital mobility**.

The key payoff is a striking set of policy results:

- Under **floating** exchange rates: fiscal policy is *ineffective* at changing output; monetary policy *is* effective.  
- Under **fixed** exchange rates: the results are exactly reversed — fiscal policy works, monetary policy does not.  

Understanding *why* this is true is the real goal of the chapter.

---

## 🌐 The Mundell-Fleming Framework

### Core Assumptions

The Mundell-Fleming model rests on two essential assumptions:

1. **Small open economy with perfect capital mobility:**  
   The country can borrow and lend freely on world financial markets. Because the country is *small*, its own borrowing/lending has negligible effect on the world interest rate $r^*$. Therefore:

$$\boxed{r = r^*}$$

   The domestic interest rate is pinned by the world interest rate — it is ==exogenous== from the country's perspective.

2. **Short run — prices fixed:**  
   Like the standard IS-LM model, Mundell-Fleming takes $\bar{P}$ as given. This means the nominal and real exchange rates move together in the short run (since $\varepsilon = eP/P^*$ and $P,P^*$ are fixed).

> [!warning] Why $r = r^*$ matters so much
> In a closed IS-LM model, the interest rate adjusts to equilibrate the money market *and* the goods market simultaneously. In the Mundell-Fleming model, $r$ is fixed at $r^*$ by international capital flows — so the money market must be cleared by $Y$ alone. This single change reshapes all policy analysis.

---

## 📐 The IS* and LM* Curves

### The IS* Curve — Goods Market Equilibrium

The goods market equilibrium equation adds **net exports** $NX(e)$ to the standard IS identity:

$$\boxed{Y = C(Y-T) + I(r^*) + G + NX(e)}$$

Where:
- $e$ = the **nominal exchange rate** (units of foreign currency per unit of domestic currency; e.g. €/\$). A higher $e$ means the domestic currency is stronger.
- $NX(e)$ is **decreasing** in $e$ — why?
  - A stronger domestic currency (↑$e$) makes domestic goods more expensive abroad → exports fall
  - Foreign goods become cheaper at home → imports rise
  - Both effects reduce $NX$

Since $r^*$ is exogenous, the IS* curve maps equilibrium combinations of $(e, Y)$:

> [!tip] IS* Slope — Intuition
> Higher $e$ → ↓NX → ↓Y. So the IS* curve **slopes downward** in $(e, Y)$ space (exchange rate on vertical axis, output on horizontal axis).

**IS* Shifts:**
| Shock | Direction of IS* shift |
|---|---|
| ↑$G$ (fiscal expansion) | Rightward (↑Y at any $e$) |
| ↓$T$ (tax cut) | Rightward |
| ↑$r^*$ (world rate rises) | Leftward (↓I → ↓Y at any $e$) |
| ↑NX at given $e$ (e.g. import tariff) | Rightward |

### The LM* Curve — Money Market Equilibrium

$$\boxed{\frac{M}{P} = L(r^*, Y)}$$

With $r^*$ exogenous and $M$, $P$ both fixed, the only variable that can equilibrate the money market is $Y$. There is exactly **one** value of $Y$ that clears the money market — regardless of $e$.

> [!info] LM* is Vertical
> The LM* curve is a **vertical line** in $(e, Y)$ space. The level of $Y$ is determined entirely by $M$, $P$, and $r^*$. Exchange rate movements do not affect money demand (money demand reflects liquidity preferences, not preferences for domestic vs. foreign currency).

**LM* Shifts:**
| Shock | Direction of LM* shift |
|---|---|
| ↑$M$ (monetary expansion) | Rightward (↑Y to absorb extra real balances) |
| ↓$M$ | Leftward |
| ↑$r^*$ (world rate rises) | Leftward (↓L → need ↓Y to restore equilibrium) |

**Economic logic for an ↑$M$ shift:**  
$M$↑ → $r < r^*$ → capital outflow → $e$ depreciates → NX↑ → $Y$↑ → $L$↑ → $r$ rises back to $r^*$ ✓

### Equilibrium in the Mundell-Fleming Model

The equilibrium $(e^*, Y^*)$ is the intersection of IS* and LM*:

$$Y^* \text{ determined by LM* (vertical)}, \quad e^* \text{ determined by IS*}$$

---

## 📊 Policy Analysis — Floating Exchange Rates

Under floating rates, $e$ adjusts freely. The central bank does not intervene in the foreign exchange market — $M$ is controlled independently.

### Fiscal Policy (e.g. ↑$G$) — Floating Rates

**Effect on IS*:** Rightward shift (higher $G$ → higher planned expenditure → IS* shifts right)

**But:** LM* is vertical. The rightward shift of IS* raises $e$ (currency appreciates) but leaves $Y$ unchanged.

$$\boxed{\Delta G > 0 \Rightarrow \Delta e > 0, \quad \Delta Y = 0}$$

**Step-by-step intuition:**
1. ↑$G$ temporarily raises $Y$
2. Higher $Y$ → higher demand for money $L$ → upward pressure on domestic $r$
3. $r > r^*$ even briefly → foreign capital flows *in* (chasing higher return)
4. Demand for domestic currency rises → $e$ appreciates
5. Higher $e$ → ↓NX → ↓$Y$ — Y returns to its original level

> [!warning] Complete Crowding Out — Open Economy Style
> In a *closed* economy, fiscal expansion crowds out **investment** (via rising $r$), but $Y$ still rises.  
> In a *small open economy* with floating rates, fiscal expansion crowds out **net exports** (via appreciating $e$), and $Y$ returns to exactly where it started. The multiplier is zero!

**Comparison table:**

| Dimension | Closed Economy (IS-LM) | Small Open, Floating ($M$-$F$) |
|---|---|---|
| Effect of ↑$G$ on $r$ | ↑ | No change (pinned at $r^*$) |
| Effect of ↑$G$ on $I$ | ↓ (crowded out) | No change |
| Effect of ↑$G$ on $NX$ | Slight ↓ | ↓ (fully crowded out) |
| Effect of ↑$G$ on $Y$ | ↑ | No change |

### Monetary Policy (↑$M$) — Floating Rates

**Effect on LM*:** Rightward shift → higher $Y$, lower $e$

$$\boxed{\Delta M > 0 \Rightarrow \Delta e < 0 \text{ (depreciation)}, \quad \Delta Y > 0}$$

**Step-by-step intuition:**
1. ↑$M$ → excess real balances → downward pressure on $r$
2. $r < r^*$ briefly → domestic investors send capital abroad (seeking higher return)
3. Demand for foreign currency rises → domestic currency depreciates (↓$e$)
4. Lower $e$ → ↑NX → ↑$Y$ → ↑$L$ → $r$ rises back to $r^*$

The transmission mechanism in a small open economy is:

$$M \uparrow \rightarrow e \downarrow \rightarrow NX \uparrow \rightarrow Y \uparrow$$

Compare to the closed economy: $M \uparrow \rightarrow r \downarrow \rightarrow I \uparrow \rightarrow Y \uparrow$

> [!info] "Beggar-Thy-Neighbour" Policy
> Monetary expansion in a small open economy does **not** raise world aggregate demand — it merely diverts demand from foreign to domestic goods by lowering $e$. Income gains at home come at the expense of output losses abroad.

### Trade Policy (e.g. Import Tariff/Quota) — Floating Rates

**Effect on IS*:** Rightward shift (import restriction → ↑NX at any $e$ → IS* right)

**Result:** $e$ appreciates, $Y$ unchanged, and NX ends up *unchanged*.

$$\boxed{\text{Import restriction} \Rightarrow \Delta e > 0, \quad \Delta Y = 0, \quad \Delta NX = 0}$$

**Why does NX not change?**  
There is only one $Y$ that clears the money market. Since $Y$, $C$, $I$, and $G$ are all unchanged, the national income identity $NX = Y - (C + I + G)$ forces $NX$ to remain unchanged. The appreciation exactly offsets the trade restriction.

> [!warning] Import Restrictions Don't Fix Trade Deficits
> Trade restrictions under floating rates: raise $e$, reduce *both* imports (directly) and exports (via appreciation), leaving $NX$ and $Y$ unchanged. You get less trade with the same balance — destroying gains from trade without helping employment overall.

---

## 🔒 Policy Analysis — Fixed Exchange Rates

Under fixed rates, the central bank commits to maintaining $e$ at a pre-announced level $\bar{e}$. To do this, it buys/sells domestic currency in the foreign exchange market — which means it **loses independent control of $M$**.

> [!info] How the CB Defends the Peg
> - If $e$ tends to appreciate above $\bar{e}$: CB sells domestic currency → $M$↑
> - If $e$ tends to depreciate below $\bar{e}$: CB buys domestic currency → $M$↓
> The CB shifts LM* as needed to keep $e = \bar{e}$.

### Fiscal Policy (↑$G$) — Fixed Rates

Under floating rates, ↑$G$ would cause $e$ to appreciate. Under fixed rates, the CB *prevents* this by selling domestic currency (↑$M$), which shifts LM* rightward.

$$\boxed{\Delta G > 0 \Rightarrow \Delta e = 0, \quad \Delta Y > 0}$$

Fiscal policy is **very effective** under fixed rates — the CB's accommodation eliminates the crowding-out of NX that would otherwise occur.

### Monetary Policy (↑$M$) — Fixed Rates

Under floating rates, ↑$M$ would cause $e$ to depreciate. Under fixed rates, the CB must *prevent* this by buying domestic currency (↓$M$), reversing the original expansion.

$$\boxed{\Delta M > 0 \Rightarrow \text{CB must reverse} \Rightarrow \Delta e = 0, \quad \Delta Y = 0}$$

**Monetary policy is completely ineffective under fixed exchange rates.** The attempt to expand the money supply is immediately undone by the exchange rate defence.

### Trade Policy — Fixed Rates

Under floating rates, an import restriction would appreciate $e$ and leave $NX$ unchanged. Under fixed rates, the appreciation is prevented — the CB sells domestic currency (↑$M$, LM* shifts right), and $Y$ rises, as does $NX$.

$$\boxed{\text{Import restriction} \Rightarrow \Delta e = 0, \quad \Delta Y > 0, \quad \Delta NX > 0}$$

However, the gains are **beggar-thy-neighbour** — demand is shifted from foreign to domestic goods.

---

## 📋 Summary Table: Policy Effects in the Mundell-Fleming Model

| Policy | Floating: $\Delta Y$ | Floating: $\Delta e$ | Floating: $\Delta NX$ | Fixed: $\Delta Y$ | Fixed: $\Delta e$ | Fixed: $\Delta NX$ |
|---|---|---|---|---|---|---|
| Fiscal expansion (↑$G$) | **0** | ↑ | ↓ | **↑** | 0 | 0 |
| Monetary expansion (↑$M$) | **↑** | ↓ | ↑ | **0** | 0 | 0 |
| Import restriction | **0** | ↑ | 0 | **↑** | 0 | ↑ |

> [!tip] The Big Takeaway
> **Floating rates:** Monetary policy works; fiscal policy doesn't.  
> **Fixed rates:** Fiscal policy works; monetary policy doesn't.  
> The regime determines which policy lever you have.

---

## 🌍 Interest Rate Differentials and Country Risk

So far we assumed $r = r^*$ exactly. In reality, countries face different borrowing costs for two reasons:

### 1. Country Risk Premium ($\theta$)

==Country risk== is the risk that a country's borrowers will default due to political or economic instability. Lenders demand a premium $\theta$ (theta):

$$\boxed{r = r^* + \theta}$$

where $\theta \geq 0$ reflects the extra return required to compensate for default risk.

### 2. Expected Exchange Rate Changes

If investors expect a currency to *depreciate*, assets denominated in that currency become less attractive — so lenders demand higher $r$ to compensate.

### Effect of an Increase in $\theta$ in the M-F Model

Substituting $r = r^* + \theta$ into the IS* and LM* equations:

- **IS*** shifts **left**: Higher $r$ → ↓$I$ → ↓$Y$ at any $e$
- **LM*** shifts **right**: Higher $r$ → ↓$L$ (higher opportunity cost of holding money) → $Y$ must *rise* to restore money market equilibrium

$$\boxed{\Delta \theta > 0 \Rightarrow \Delta e < 0 \text{ (depreciation)}, \quad \Delta Y > 0 \text{ (theory)}}$$

**The fall in $e$ is intuitive:** A higher risk premium makes the domestic currency less attractive to hold → capital outflows → $e$ depreciates.

**The rise in $Y$ is counterintuitive** and may not occur in practice:
- The CB may try to prevent depreciation by ↓$M$ (LM* shifts left → ↓$Y$)
- Higher import prices may push up $P$, reducing real balances (↓$M/P$ → LM* left)
- Consumers may increase liquidity demand $L$ in response to uncertainty (→ ↓$Y$)

> [!warning] Self-Fulfilling Crises
> An expected depreciation *causes* a higher risk premium $\theta$ which *causes* actual depreciation. This is a **self-fulfilling prophecy** — currency crises can be driven purely by expectations, not fundamentals.

---

## 📉 Deriving the AD Curve for a Small Open Economy

### Introducing Real Exchange Rate

When prices can change, we must use the ==real exchange rate== $\varepsilon$:

$$\varepsilon = \frac{e \cdot P}{P^*}$$

The IS* and LM* equations become:
$$\text{IS*: } Y = C(Y-T) + I(r^*) + G + NX(\varepsilon)$$
$$\text{LM*: } \frac{M}{P} = L(r^*, Y)$$

### Why the AD Curve Slopes Downward (Open Economy Mechanism)

In the closed IS-LM model, a higher $P$ reduces real balances $(M/P)$, raises $r$, reduces $I$, and lowers $Y$. In the open economy, the mechanism is similar but operates through $\varepsilon$:

$$P \uparrow \rightarrow \frac{M}{P} \downarrow \rightarrow \text{LM* shifts left} \rightarrow \varepsilon \uparrow \rightarrow NX \downarrow \rightarrow Y \downarrow$$

The AD curve therefore still slopes downward in $(P, Y)$ space — but the channel is through **net exports** rather than investment.

| Economy Type | Transmission of ↑$P$ to ↓$Y$ |
|---|---|
| Closed (IS-LM) | ↓$(M/P)$ → ↑$r$ → ↓$I$ → ↓$Y$ |
| Small open (M-F) | ↓$(M/P)$ → LM* left → ↑$\varepsilon$ → ↓$NX$ → ↓$Y$ |

### Short Run to Long Run

If $Y < \bar{Y}$ (below full employment): downward pressure on prices → $P$↓ → ↑$(M/P)$ → LM* right → ↓$\varepsilon$ → ↑NX → $Y$↑ back to $\bar{Y}$

If $Y > \bar{Y}$: upward pressure on prices → $P$↑ → reverse of above → $Y$↓ back to $\bar{Y}$

---

## 🏦 Large Open Economy

Most countries — including the U.S. — are neither fully closed nor truly small open. A **large open economy** sits between the two extremes.

### Three-Equation System

$$\frac{M}{P} = L(r, Y) \quad \text{(LM — same as closed)}$$
$$Y = C(Y-T) + I(r) + G + NX(e) \quad \text{(IS — same as MF)}$$
$$NX(e) = CF(r) \quad \text{(Balance of payments)}$$

Key difference from small-open: $r$ is **endogenous** (not pinned at $r^*$). The country is large enough to affect world financial markets.

The third equation equates net exports (demand for domestic currency) with capital outflows $CF(r)$ (supply of domestic currency):
- ↓$e$ → ↑NX → more demand for domestic currency
- ↓$r$ → ↑CF → more supply of domestic currency (capital flows out)

Substituting NX = CF(r) into the IS equation: $Y = C(Y-T) + I(r) + G + CF(r)$ — looks just like a closed-economy IS curve (both $I$ and $CF$ fall with $r$).

### Rule of Thumb for Large Open Economy

> [!tip] Large Economy Heuristic
> A large open economy behaves as an **average** of a closed economy and a small open economy:
> - **Interest rate:** moves in the *same direction* as in a closed economy (fiscal expansion → ↑r)
> - **Exchange rate:** moves in the *same direction* as in a small open economy (fiscal expansion → ↑e, appreciation)
> - **Output:** between the closed-economy and small-open-economy outcomes

---

## 📝 Summary

The Mundell-Fleming model is the IS-LM model adapted for a small open economy under the key assumption $r = r^*$:

**The IS* curve** (downward sloping in $e$-$Y$ space) describes goods market equilibrium: $Y = C(Y-T) + I(r^*) + G + NX(e)$.

**The LM* curve** (vertical in $e$-$Y$ space) describes money market equilibrium: $M/P = L(r^*, Y)$. It is vertical because $Y$ alone can equilibrate the money market.

**Policy effectiveness depends on the exchange rate regime:**
- **Floating rates:** Monetary policy works (↑$M$ → ↓$e$ → ↑NX → ↑$Y$). Fiscal policy fails (↑$G$ → ↑$e$ → ↓NX → no change in $Y$).
- **Fixed rates:** Fiscal policy works (CB accommodates by ↑$M$). Monetary policy fails (any ↑$M$ must be immediately reversed to defend peg).

**Interest rate differentials:** Country risk premium $\theta$ raises $r = r^* + \theta$, depreciates $e$, and ambiguously affects $Y$.

**AD curve:** In an open economy, ↑$P$ reduces $(M/P)$, shifts LM* left, appreciates $\varepsilon$, reduces NX, and lowers $Y$ — giving the standard downward-sloping AD curve through a different channel than the closed economy.

---

## 🔗 Related Notes

- [[Lec_07-Aggregate Demand I & the IS-LM Model]] — Foundation: the IS and LM curves in a closed economy
- [[Lec_08-Aggregate Demand II & Applying the IS-LM Model]] — Policy analysis with IS-LM (closed economy baseline)
- [[Lec_06-AS-AD Model & Economic Fluctuations]] — The AD-AS framework this feeds into
- [[Macro-Economics II]] — Subject hub
