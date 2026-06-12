---
title: Equilibrium in the Goods Market
week: 6
semester: 2
year: 2
course: Macro-Economics
tags:
  - macroeconomics
  - goods-market
  - equilibrium
  - savings-investment
  - real-interest-rate
  - crowding-out
  - supply-shocks
aliases:
  - Goods Market Equilibrium
  - S=I
  - Savings equals Investment
subject: macro-economics
in_scope: true
---

# Equilibrium in the Goods Market

> Part of: [[Macro-Economics]]
> **Lecture 06** — Macro-Economics
> Key concepts: [[Real Interest Rate]], [[Savings-Investment Equilibrium]], [[Supply Shock]], [[Crowding Out]], [[Partial vs General Equilibrium]]

---

## 🗺️ Where This Fits

We now have all three building blocks:
- **Supply** ($Y$): from the [[Lec_04-Production|production model]]
- **Consumption demand** ($C$): from Lec 02
- **Investment demand** ($I$): from [[Lec_05-Investment]]

This lecture combines them to find **equilibrium**: the price that clears the goods market and what happens when the economy is hit by a shock.

---

## ⚖️ The Equilibrium Condition

In a **closed economy** with exogenous government spending $G$, the goods market clears when:

$$\boxed{Y = C + I + G}$$

But what is the *price* that does the clearing? In a standard supply/demand model, it's the price of the good. Here, we've normalised $P=1$, so the relevant price is the ==**real interest rate $r$**==.

### Rewriting as S = I

Rearrange the equilibrium condition:

$$Y - C - G = I$$

The left-hand side is ==**national savings** $S$==: income not consumed by households or government.

$$\boxed{S = I}$$

This is equivalent to goods market equilibrium. The real interest rate $r$ adjusts until savings equals investment.

---

## 🔄 How r Clears the Market

### Effect of r on Savings

From the Lec 02 consumption/saving model:
- **Borrowers** (current period spending > income): both income and substitution effects push toward *more* saving when $r$ rises → $S \uparrow$
- **Lenders** (current saving > zero): effects partially offset — the income effect makes them richer (good), the substitution effect pushes toward more saving. **Key assumption**: substitution effect dominates.

**Result**: The savings curve $S(r)$ slopes **upward** — higher $r$ → more savings.

### Effect of r on Investment

From [[Lec_05-Investment]]: higher $r$ raises the user cost of capital → optimal $K^f$ falls → less investment.

**Result**: The investment curve $I(r)$ slopes **downward** — higher $r$ → less investment.

---

## 📈 The S-I Diagram

The equilibrium real interest rate $r^*$ is where $S = I$. The left panel below shows the baseline; the other two preview the shock analysis that follows.

![[l6_si_shocks.png|720]]
*Left: $S$ slopes up and $I$ slopes down in $r$; their crossing sets $r^*$. Middle: a transitory rise in current $A$ shifts $S$ right → $r$ falls. Right: a rise in future $A^f$ shifts $I$ right and $S$ left → $r$ rises unambiguously.*

Every point on the $S$ curve satisfies the household's Euler equation (optimal given $r$). Every point on the $I$ curve satisfies the firm's optimality condition (MPK = user cost). The crossing point $r^*$ is the **general equilibrium** — both sides optimise simultaneously.

> [!info] What sets Y in this model?
> Output $Y$ is determined **entirely by the production function** (supply side): $Y = AF(\bar{K}, N)$.
> The goods market equilibrium determines the *split* of that $Y$ between $C$, $I$, and $G$ — and the real interest rate $r^*$ that achieves this split. Demand alone cannot change output (see below).

---

## 💥 Analysing Shocks

A ==**shock**== is an unexpected change in an exogenous variable. The procedure for any shock is:

1. Does the **I curve** shift? If so, which direction and why?
2. Does the **S curve** shift? If so, which direction and why?
3. What is the new equilibrium $r^*$, $S^* = I^*$?
4. What else changes ($Y$, $C$)?

We hold $K$ fixed in the current period (it takes time to build capital) and $N$ fixed for now (labor market in Lec 07).

---

### Example 1 — Transitory Shock to Current $A$

**Scenario:** Current TFP $A$ jumps up unexpectedly, but is expected to return to normal next period.

| Curve | Shifts? | Direction | Reason |
|---|---|---|---|
| $I$ | **No** | — | Investment depends on *future* $A^f$, which hasn't changed. No reason to alter the optimal capital for next period. |
| $S$ | **Yes** | → Right | Higher $A$ raises current $Y$ (more output). Extra income is temporary, so consumers smooth — they save most of it. $S$ shifts right. |

**Equilibrium result:**
- $r^*$ **falls** (supply of savings exceeds demand for investment at old $r^*$)
- $S$ and $I$ both **increase** (investment rises because $r$ fell — even though the $I$ curve itself didn't move)
- $Y$, $C$, and $I$ all **increase**

> [!warning] Partial vs. general equilibrium — this is a key exam distinction
> At first glance, a rise in current $A$ seems to have no direct effect on investment (the $I$ curve doesn't shift). But in **general equilibrium**, $r$ falls, and that lower $r$ induces *more* investment. This is called the **general equilibrium effect** — you must trace through the market-clearing mechanism, not just the direct effect.

> [!tip] "Supply shock" terminology
> This is called a **supply shock**: $K$ and $N$ are unchanged, $A$ increases → the economy simply produces more. In short-run macroeconomics, supply shocks move $Y$, $C$, $I$, and $r$ all in predictable directions. This is a building block of Real Business Cycle theory.

---

### Example 2 — Transitory Shock to Future $A^f$

**Scenario:** Agents learn *today* that $A^f$ will be higher *next* period (then returns to normal).

| Curve | Shifts? | Direction | Reason |
|---|---|---|---|
| $I$ | **Yes** | → Right | MPK$^f$ increases; user cost unchanged. Firms want more capital for next period → invest more at every $r$. |
| $S$ | **Yes** | → Left | Current output $Y$ is unchanged, but agents expect higher future income. To smooth consumption, they increase current $C$ and reduce current savings. |

**Equilibrium result:**
- $r^*$ **rises** unambiguously (both shifts push $r$ up)
- Effects on $I$, $S$, and $C$ are **ambiguous**: the direct effects (more $I$, less $S$) may be partially reversed by the higher $r$ (which discourages investment and encourages saving)

> [!example] Two possible outcomes
> **Option 1**: Investment increases net — the rightward shift of $I$ outweighs the rise in $r$.
> **Option 2**: Investment falls net — the rise in $r$ dominates and pushes back against the original investment increase.
> Both are consistent with the model. The outcome depends on the elasticities of $S$ and $I$ with respect to $r$.

> [!note] $I$ and $C$ move in opposite directions here
> The future boom creates a *scramble for current resources*: firms want more capital (↑$I$), households want more current consumption (↓$S$). Since $Y$ is fixed, the higher $r$ rations between these competing demands. This is a taste of the **crowding out** mechanism.

---

## 🏛️ Crowding Out and Government Spending

The analysis has an important implication for **fiscal policy**:

- Output $Y$ is determined by the production function. The goods market equilibrium determines how $Y$ is *allocated* between $C$, $I$, and $G$.
- If the government increases $G$ without changing $Y$, something else must give: $C + I$ must fall.
- The mechanism: $G$ ↑ → $S = Y - C - G$ falls → $S$ curve shifts left → $r$ ↑ → $I$ falls.

This is ==**crowding out**==: government spending "crowds out" private investment by raising the real interest rate.

> [!warning] Demand can't change output (in this model)
> Since $Y$ is supply-determined, changes in $G$, $C$-preferences, or investor confidence **alone** cannot change GDP — they only change the composition of spending and the equilibrium $r$. This changes in later models when we allow $N$ to vary (Lec 07) or introduce nominal rigidities (IS-LM).

---

## 🔑 Key Takeaways from the Shock Analysis

| Shock | $I$ curve | $S$ curve | $r^*$ | $Y$ | $C$ | $I$ |
|---|---|---|---|---|---|---|
| Transitory ↑ current $A$ | unchanged | → right | ↓ | ↑ | ↑ | ↑ |
| Transitory ↑ future $A^f$ | → right | ← left | ↑ | unchanged | ambiguous | ambiguous |
| ↑ $G$ (fiscal expansion) | unchanged | ← left | ↑ | unchanged | ↓ | ↓ |

---

## 🎯 Summary

1. **Goods market equilibrium** $Y = C + I + G$ is equivalent to $S = I$. The real interest rate $r$ is the price that clears the market.
2. **$S$ slopes upward** in $r$ (substitution effect dominates). **$I$ slopes downward** in $r$ (user cost rises).
3. **Output is supply-determined**: $Y = AF(\bar{K}, N)$. The goods market only determines how $Y$ is split across uses and what $r$ achieves that split.
4. **Transitory current $A$ shock**: shifts $S$ right → $r$ falls, all expenditure components rise. A textbook supply shock.
5. **Transitory future $A^f$ shock**: shifts both $I$ right and $S$ left → $r$ unambiguously rises; other effects are ambiguous.
6. **Crowding out**: ↑ $G$ → ↑ $r$ → ↓ $I$. Private investment is squeezed out by public spending.
7. **Next step**: allowing $N$ to vary (Lec 07) adds another margin of adjustment and lets output respond to more shocks.

---

## 📎 Related Notes

- Built on: [[Lec_02-Consumption and Saving]], [[Lec_04-Production]], [[Lec_05-Investment]]
- Next: [[Lec_07-Labor Market]] — adds the labour market to complete the short-run general equilibrium
- Future: [[Fiscal Policy]] — full analysis of government spending and crowding out
- Future: [[Real Business Cycles]] — supply shocks as the driver of fluctuations
