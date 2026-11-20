---
title: Classical Theory & National Income
week: 3
semester: 1
year: 2
academic_year: "2025-26"
course: Macro-Economics II
lecture: "Chapter 3 — Introduction & The Classical Theory of National Income"
instructor: Alon Cohen
date: 2026-05-16
tags:
  - macro-economics-ii
  - classical-theory
  - national-income
  - production-function
  - loanable-funds
  - cobb-douglas
  - saving
  - investment
aliases:
  - Classical Theory
  - Chapter 3 Macro II
  - National Income Model
subject: macro-ii
in_scope: true
---

# Classical Theory & National Income

> Part of: [[Macro-Economics II]] | Key concepts: [[Production Function]], [[Loanable Funds Market]], [[Cobb-Douglas]], [[National Saving]], [[Classical Dichotomy]], [[Marginal Product]]

---

## 🗺️ Course Overview

**Lecturer:** Alon Cohen — alonc17@gmail.com  
**TA:** Yosi Ganel — gyosi@runi.ac.il

| Assessment | Weight |
|------------|--------|
| Final exam (25 MCQ) | 70% |
| 8 home quizzes (best 6 × 5%) | 30% |
| Minimum final exam score to pass | 55 |

> [!info] Where Chapter 3 fits
> This chapter reviews the **Classical (long-run) model** of the macroeconomy — the benchmark everything else is measured against. It tells us how output, income, saving, and investment are determined when prices are flexible and factors are fully employed.

---

## 🌐 The Three Dichotomies of Macro

Before diving into the model, it helps to understand the three axes along which macroeconomists organise their thinking:

### 1. Open vs. Closed Economy

| Feature | Closed Economy | Open Economy |
|---------|---------------|--------------|
| Trade in goods | ❌ | ✅ |
| Capital mobility | ❌ | ✅ |
| Currency exchange | ❌ | ✅ |

Chapter 3 focuses on the **closed economy** — a useful simplification that captures the core logic before adding international complications.

### 2. Real vs. Nominal

| Side | Variables | Units |
|------|-----------|-------|
| **Real** | GDP, investment, unemployment, real interest rate | Physical units |
| **Nominal** | Money supply, prices, nominal interest rate | Monetary units |

### 3. Long Run vs. Short Run

> [!info] The Classical Dichotomy
> In the **long run**, the real and nominal sides of the economy are determined **independently** of each other. This separation is called the *classical dichotomy*.

| Time Horizon | Prices | GDP | Nominal/Real link |
|-------------|--------|-----|-------------------|
| **Long run (Classical Theory)** | Flexible | Fixed at potential (supply-determined) | Separate |
| **Short run (Business Cycles)** | Sticky/rigid | Flexible | Joint determination |

> [!tip] Why does this matter?
> In the long run, government policy can't change real output — the economy always returns to its supply-determined potential $\bar{Y}$. Demand-side policies (spending, tax cuts) just shift *who* gets the fixed pie and at what interest rate. This is the core insight of Chapter 3.

---

## 🏭 Supply Side: The Production Function

### The Model

$$\boxed{Y = F(K, L)}$$

where:
- $Y$ = total output (= GDP = national income in a closed economy)
- $K$ = ==capital== — tools, machines, structures used in production
- $L$ = ==labour== — the physical and mental effort of workers
- $F$ = the production technology (the "recipe" turning inputs into output)

### Key Assumptions

1. **Constant Returns to Scale (CRTS):** $F(zK, zL) = zY$ for any $z > 0$  
   → Doubling all inputs exactly doubles output. This is a property of the technology, not an accident.

2. **Technology is fixed** — we are in the short-to-medium run within the classical model.

3. **Inputs are fixed and exogenous at their normal, long-run employment levels:**

$$K = \bar{K}, \quad L = \bar{L}$$

> [!warning] Why are inputs fixed?
> The classical model is a *long-run equilibrium* description. Over long time horizons, capital and labour converge to their normal utilisation rates. Transitory shocks don't change $\bar{K}$ or $\bar{L}$. This is why output is **supply-side determined**.

### Determining GDP

Because inputs are fixed and technology is fixed, output is pinned:

$$\boxed{Y^* = F(\bar{K}, \bar{L})}$$

==This is the key result of the classical model: GDP is supply-side determined, independent of demand-side policy.==

> [!tip] Intuition
> Think of the economy as a factory whose capacity is set by its machines and workers. You can shift around *who* buys the output, but you can't produce more just by wanting more.

---

## 💰 Distribution of National Income

### Factor Markets and the Profit-Maximising Firm

A competitive firm hires labour and rents capital to maximise profit:

$$\max_{K, L} \; P \cdot F(K, L) - W \cdot L - R \cdot K$$

Taking first-order conditions:

$$P \cdot F_L(K, L) = W \implies \text{MPL} \equiv F_L(K, L) = \frac{W}{P}$$

$$P \cdot F_K(K, L) = R \implies \text{MPK} \equiv F_K(K, L) = \frac{R}{P}$$

> [!info] Factor prices in real terms
> $W/P$ = ==real wage== (the wage measured in units of output, not dollars)  
> $R/P$ = ==real rental price of capital==

Each factor is hired up to the point where its **marginal product** (the extra output from one more unit) equals its real price. Beyond that point, the factor costs more than it adds.

### Diminishing Marginal Returns

Both MPL and MPK are **decreasing** functions of the quantity of the factor:

- Each additional worker adds *less* output than the previous one (because they share the same capital).
- Each additional machine adds *less* output than the previous one (because fewer workers operate each machine).

This gives downward-sloping factor demand curves, and the equilibrium real wage/rent is pinned by $\bar{L}$ and $\bar{K}$.

### How is Total Output Distributed?

Using **Euler's Theorem for homogeneous functions**: if $F$ has CRTS, then:

$$\boxed{Y = \text{MPL} \cdot L + \text{MPK} \cdot K}$$

Dividing both sides by $Y$:

$$1 = \underbrace{\frac{\text{MPL} \cdot L}{Y}}_{\text{labour's share}} + \underbrace{\frac{\text{MPK} \cdot K}{Y}}_{\text{capital's share}}$$

This is remarkable: under CRTS and competitive markets, **all of output is exactly exhausted** by paying factors their marginal products. There are no "leftovers."

### The Cobb-Douglas Production Function

The most tractable specific form is:

$$\boxed{Y = A K^\alpha L^{1-\alpha}, \quad 0 < \alpha < 1}$$

> [!info] Factor shares under Cobb-Douglas
> - Capital's share of total income = $\alpha$
> - Labour's share of total income = $1 - \alpha$  
> - In the U.S., labour's share ≈ **70%**, implying $\alpha \approx 0.3$

To verify: $\text{MPL} = (1-\alpha) A K^\alpha L^{-\alpha}$, so $\text{MPL} \cdot L = (1-\alpha)Y$. ✓

| Feature | Formula |
|---------|---------|
| Output | $Y = AK^\alpha L^{1-\alpha}$ |
| MPL | $(1-\alpha) Y / L$ |
| MPK | $\alpha Y / K$ |
| Labour income | $(1-\alpha)Y$ |
| Capital income | $\alpha Y$ |
| Returns to scale | Constant (CRTS) |

---

## 🛒 Demand Side: Components of Aggregate Demand

In a closed economy, all output must be used for one of three things:

$$Y = C + I + G$$

### Consumption: $C = C(Y - T)$

**Keynesian consumption function:**

$$C = A + \text{MPC} \cdot (Y - T)$$

- $Y - T$ = ==disposable income== (income minus net taxes)
- $A$ = autonomous consumption (spending from wealth, not current income)
- $\text{MPC}$ = ==marginal propensity to consume== = the fraction of each extra dollar of disposable income spent on consumption; $0 < \text{MPC} < 1$

> [!tip] Why might C also depend on r?
> In richer models, a higher real interest rate makes future consumption relatively cheaper (saving is rewarded). So $C$ may depend **negatively** on $r$ as well. The simple Keynesian model ignores this.

### Investment: $I = I(r)$

$$I \text{ is a decreasing function of } r$$

- $r$ = ==real interest rate== = nominal interest rate − inflation
- $r$ measures the **real cost of borrowing** (or opportunity cost of internal funds) to finance investment projects
- Firms invest if the expected return on the project exceeds $r$; higher $r$ kills marginal projects

### Government Spending: $G$

$$G = \bar{G}, \quad T = \bar{T} \quad (\text{exogenous})$$

- $G$ = direct government purchases of goods and services (excludes transfer payments like Social Security or unemployment benefits, which merely redistribute income)
- Both $G$ and $T$ are set by policy — they are not model-determined

---

## 💱 Equilibrium: The Loanable Funds Market

### The Equilibrium Condition

Combining supply and demand:

$$\underbrace{Y}_{\text{supply}} = \underbrace{C(Y-T) + I(r) + G}_{\text{demand}}$$

Rearranging:

$$\underbrace{Y - C(Y-T) - G}_{S = \text{national saving}} = I(r)$$

$$\boxed{S = I(r)}$$

The **real interest rate $r$ is the equilibrating price** in the loanable funds market.

### Types of Saving

| Type | Formula | Description |
|------|---------|-------------|
| ==Private saving== | $Y - T - C(Y-T)$ | Income not paid in taxes and not consumed |
| ==Public saving== | $T - G$ | Tax revenue minus government spending |
| ==National saving $S$== | $(Y - T - C) + (T - G) = Y - C - G$ | Private + public |

> [!info] Why does S = I?
> In a closed economy, there's no foreign lending. Every dollar saved domestically must be invested domestically. $r$ adjusts to make the two equal.

### The Loanable Funds Diagram

- **Supply of loanable funds** = national saving $S$ (vertical line if $S$ doesn't depend on $r$; upward-sloping in richer models where higher $r$ encourages saving)
- **Demand for loanable funds** = investment $I(r)$ (downward-sloping in $r$)
- **Equilibrium**: intersection determines $r^*$ and $I^*$

> [!tip] The special role of r
> Because $S = I$ is exactly equivalent to $Y = C + I + G$, the loanable funds market and the goods market **clear simultaneously**. You only need to think about one of them.

---

## 📊 Comparative Statics: What Shifts S and I?

### Shifts in the Saving Curve (leftward = lower S at every r)

**Public saving (fiscal policy):**
- ↑ $G$ → ↓ $S$ (public saving falls)
- ↓ $T$ → ↓ $S$ (private saving rises, but by less than the cut — MPC < 1 — so net effect is ↓ $S$)

**Private saving:**
- Changes in preferences (lower MPC → ↑ private saving)
- Tax laws favouring saving (e.g., IRA accounts → ↑ disposable income)

### Shifts in the Investment Curve (rightward = higher I at every r)

- Technological innovations that require new capital
- Tax laws favouring investment (e.g., investment tax credit)

---

## 🏛️ Case Study: The Reagan Deficits (1980s)

**Policy:** Reagan increased defence spending ($\Delta G > 0$) and cut taxes ($\Delta T < 0$) simultaneously.

**Effect on saving:**

$$S = Y - C(Y-T) - G$$

$$\Delta G > 0 \implies \Delta S < 0 \quad \text{(direct)}$$
$$\Delta T < 0 \implies \Delta C > 0 \implies \Delta S < 0 \quad \text{(indirect, via higher disposable income)}$$

**Both policies reduce national saving.** The saving curve shifts **left**.

**Consequences in the loanable funds model:**
1. ↓ $S$ → saving curve shifts left
2. $r^*$ rises (real interest rate increases)
3. Higher $r^*$ reduces $I$ — investment is **crowded out**

> [!warning] Crowding out
> When government borrowing reduces the pool of saving, private investment falls. Reagan's deficits are a textbook example: the policies stimulated consumption but crowded out investment, with potentially adverse long-run effects on capital accumulation and growth.

---

## 🧮 Policy Exercises: Can Demand Policy Affect Output?

| Policy | Effect on $S$ | Effect on $r$ | Effect on $I$ | Effect on $Y$ |
|--------|-------------|------------|------------|------------|
| ↑ $G$ | ↓ (public saving) | ↑ | ↓ (crowded out) | **Unchanged** |
| ↑ $T$ | ↑ (public saving > ↓ private) | ↓ | ↑ | **Unchanged** |
| Investment tax credit (↑ $I$ demand, $T$ fixed) | Unchanged | ↑ | ↑ in demand, but $I^*$ unchanged if $S$ is fixed | **Unchanged** |

> [!warning] Key conclusion: Demand policy is futile in the long run
> In the classical model, $Y^* = F(\bar{K}, \bar{L})$ regardless of demand. Government attempts to boost output through G or T changes merely reshuffle the composition of demand — they cannot increase total output. This is why the model is called **supply-side determined**.

This conclusion changes dramatically in the short run (where prices are sticky and output is demand-determined), which is why the classical model is not used for business-cycle analysis.

---

## 📋 Summary

1. **Output is supply-determined:** $Y = F(\bar{K}, \bar{L})$ — technology and factor endowments pin GDP in the long run.
2. **Factors are paid their marginal products:** Under CRTS + competition, $\text{MPL} = W/P$ and $\text{MPK} = R/P$, and total output is fully distributed between labour and capital (Euler's theorem).
3. **Cobb-Douglas:** $Y = AK^\alpha L^{1-\alpha}$ gives constant factor shares — capital earns $\alpha$, labour earns $1-\alpha$.
4. **The loanable funds market equilibrates S and I:** The real interest rate $r$ adjusts to equate national saving with investment; it simultaneously clears the goods market.
5. **Fiscal policy changes the composition of demand, not the level of output:** Higher $G$ or lower $T$ reduces saving, raises $r$, and crowds out private investment — real output is unchanged.

---

## 📎 Related Notes

- Next: [[Lec_04-Classical Theory Ch 4]] — money, prices, and the quantity theory
- [[Lec_05-Inflation]] — the nominal side of the classical model
- [[Macro-Economics II]] — subject hub
- Cross-reference: [[Lec_01-Introduction & Treatment Effects]] — Econometrics uses the same concept of supply vs. demand determination
