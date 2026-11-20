---
title: "Inflation: Its Causes and Effects"
week: 5
semester: 1
year: 2
academic_year: "2025-26"
course: Macro-Economics II
lecture: "Chapter 5 — Inflation: Its Causes and Effects"
instructor: Alon Cohen
date: 2026-05-17
tags:
  - macro-economics-ii
  - inflation
  - quantity-theory-of-money
  - velocity
  - money-neutrality
  - fisher-effect
  - money-demand
  - classical-dichotomy
  - nominal-interest-rate
  - real-interest-rate
aliases:
  - Chapter 5 Macro II
  - Quantity Theory of Money
  - Fisher Effect
  - Money Neutrality
subject: macro-ii
in_scope: true
---

# Inflation: Its Causes and Effects

> Part of: [[Macro-Economics II]] | Key concepts: [[Quantity Theory of Money]], [[Velocity of Money]], [[Money Neutrality]], [[Fisher Effect]], [[Classical Dichotomy]], [[Nominal Interest Rate]], [[Real Interest Rate]], [[Money Demand]]

---

## 🗺️ What This Chapter Is About

Chapter 5 answers the most fundamental macroeconomic question about money: *why does inflation happen, and what does it do?* The core insight is almost brutally simple — **too much money chasing too few goods**. More precisely, when the central bank grows the money supply faster than the economy grows, prices must rise. The chapter builds from a simple identity (the quantity equation) through money demand with interest rates, to the **classical dichotomy**: in the long run, money only affects nominal variables, not real ones.

> [!info] Where Chapter 5 fits
> Chapter 3 determined **real output** (Y) and the **real interest rate** (r) through the production function and loanable funds market. Chapter 4 explained **money supply** and the monetary system. Chapter 5 now explains **what determines the price level P** and inflation — closing the long-run classical model.

---

## 📐 The Quantity Theory of Money

### Velocity: Where It All Starts

> [!info] Definition: Velocity of Money
> ==Velocity== ($V$) is the **rate at which money circulates** — the number of times the average unit of currency changes hands in a given period. ^velocity-definition

If the economy's nominal GDP is $500bn but there is only $100bn in circulation, each dollar must change hands 5 times on average, so $V = 5$.

More formally, we define velocity using **nominal GDP** ($P \times Y$) as a proxy for total transactions:

$$\boxed{V = \frac{P \times Y}{M}}$$

where $P$ is the price level (GDP deflator), $Y$ is real GDP, and $M$ is the money supply.

> [!tip] Why nominal GDP as the proxy?
> Ideally we'd track every transaction in the economy, but that's unmeasurable. Nominal GDP (the value of *final* goods and services produced) is a reasonable proxy — it captures the size of the economy and thus the volume of "productive" transactions.

### The Quantity Equation

Rearranging the definition of velocity gives us the **quantity equation**:

$$\boxed{M \times V = P \times Y}$$

> [!warning] This is an identity, not a theory
> The quantity equation holds **by definition** — it's just a rearrangement of how we defined V. It becomes a *theory* (the Quantity Theory) only when we make assumptions about what is exogenous and what is constant.

### From Identity to Theory: Making V Constant

The simplest money demand function (ignoring the interest rate for now) is:

$$\left(\frac{M}{P}\right)^d = kY$$

where $k$ is the fraction of nominal income people want to hold as money (exogenous). In equilibrium, $M/P = kY$, which gives $M \times (1/k) = P \times Y$. Since $1/k = V$, this tells us:

- If $k$ is exogenous → $V$ is exogenous and **constant**.
- Empirically, U.S. M2 velocity has been fairly stable over the long run (though it drifts over decades).

With $V$ constant, the quantity equation pins down **nominal GDP** ($P \times Y$) once the central bank sets $M$.

### Growth Rates: Turning the Equation into an Inflation Prediction

For any product of variables, growth rates add approximately (using the calculus approximation that cross-products of small changes are negligible):

$$\frac{\Delta M}{M} + \frac{\Delta V}{V} = \frac{\Delta P}{P} + \frac{\Delta Y}{Y}$$

Since $\Delta V / V = 0$ (velocity constant), and denoting the inflation rate $\pi \equiv \Delta P / P$:

$$\boxed{\pi = \frac{\Delta M}{M} - \frac{\Delta Y}{Y}}$$

> [!tip] Intuition: the "excess money" formula
> The economy needs some money growth just to *finance* real growth in output — that amount is $\Delta Y / Y$. Any money growth **above** that is "excess" and translates directly into inflation. If the money supply grows 8% and real GDP grows 3%, inflation is 5%.

### Money Neutrality

> [!info] Definition: Money Neutrality
> ==Money neutrality== is the principle that changes in the money supply affect **only nominal variables** (prices, nominal wages, nominal GDP) and not **real variables** (real GDP, real wages, employment). ^money-neutrality

This follows directly from the quantity theory: when $M$ goes up, $P$ goes up proportionally, but $Y$ (determined by K, L, and technology from Chapter 3) is unchanged.

> [!example] Worked example — applying the quantity theory
> **Setup:** $V$ is constant; $\Delta M/M = 5\%$ per year; $\Delta Y/Y = 2\%$ per year; $r = 4\%$.
>
> **(a) Find π and i:**
> $\pi = 5\% - 2\% = 3\%$
> $i = r + \pi = 4\% + 3\% = 7\%$
>
> **(b) Fed raises money growth by 2pp:**
> $\pi$ rises by 2pp → $i$ rises by 2pp (Fisher effect, see below).
>
> **(c) Real growth falls to 1%:**
> If Fed does nothing, $\pi = 5\% - 1\% = 4\%$ (up 1pp). To keep $\pi$ constant at 3%, the Fed must *reduce* money growth by 1pp to 4%.

### International Evidence

The cross-country data strongly support the quantity theory:
- Countries with very high money growth (e.g. Belarus, DRC, Argentina) have very high inflation.
- In the long run, a country's inflation trend closely tracks its money growth trend.
- This is one of the most robust empirical regularities in macroeconomics.

> [!warning] Long-run vs. short-run
> The quantity theory works well as a **long-run** theory. In the short run, velocity can shift and output can respond to money shocks — the classical model is not a good description of business cycles.

---

## 💹 The Fisher Effect: Money, Interest Rates, and Inflation

### Real vs. Nominal Interest Rates

When you earn interest on a deposit, you care not just about the *number* of dollars you receive (the nominal return) but about how much *stuff* you can buy with them (the real return). The two are linked by inflation:

$$\boxed{r = i - \pi}$$

or equivalently (using *expected* inflation since the real rate must be agreed ex-ante):

$$i = r + E\pi$$

> [!info] Definition: Fisher Equation
> ==The Fisher equation== states that the **nominal interest rate** equals the **real interest rate** plus **expected inflation**. ^fisher-equation

### Why Inflation Raises Nominal Rates One-for-One

From Chapter 3, the real interest rate $r$ is determined by the loanable funds market (savings and investment). Neither savings nor investment depend on nominal variables, so $r$ is pinned down in the real sector and is **independent of money or inflation** in the long run.

Therefore, if $\pi$ rises by 1pp, the only way the Fisher equation can remain in equilibrium is if $i$ also rises by 1pp. This is the **Fisher effect**.

> [!tip] Intuition
> Lenders demand compensation for the erosion of purchasing power. If inflation is higher, they will only lend at a higher nominal rate. Borrowers are willing to pay the higher rate because they also benefit from repaying in devalued dollars. So both sides agree to incorporate expected inflation into the nominal rate, leaving the real rate unchanged.

**Empirical support:** Cross-country data show a near one-for-one relationship between inflation and nominal interest rates. The U.S. time series shows the same pattern with some deviation in the early 1980s — when Reagan's tax cuts and increased government spending reduced national saving, pushing $r$ up as well.

---

## 💰 Money Demand with the Interest Rate

### The Full Money Demand Function

The simple quantity theory assumed $(M/P)^d = kY$ — demand for real money balances depends only on income. But this ignores a crucial variable: the **nominal interest rate $i$**.

Holding money means *not* holding interest-earning assets (bonds, deposits). The **opportunity cost of holding money** is the nominal interest rate $i$. The higher $i$, the less money people want to hold.

> [!info] Definition: Money Demand Function
> $$\left(\frac{M}{P}\right)^d = L(i, Y)$$
> Money demand increases with income $Y$ and decreases with the nominal interest rate $i$. ("L" stands for *liquidity*, since money is the most liquid asset.) ^money-demand-function

By the Fisher effect, $i = r + E\pi$, so money demand also depends *negatively on expected inflation*:

$$\left(\frac{M}{P}\right)^d = L(r + E\pi,\ Y)$$

> [!tip] Why expected, not actual, inflation?
> People decide how much money to hold *before* they know what inflation will be. So it is the *expectation* of future inflation that determines the opportunity cost of holding money today.

### Comparison: Simple vs. Full Money Demand

| Feature | Simple (Quantity Theory) | Full Model |
|---------|--------------------------|------------|
| **Variables** | $(M/P)^d = kY$ | $(M/P)^d = L(i, Y)$ |
| **Effect of $i$** | None (ignored) | Negative |
| **Effect of $E\pi$** | None (ignored) | Negative (via Fisher) |
| **When useful** | Long-run trends | More complete picture |

---

## ⚖️ Money Market Equilibrium & Classical Dichotomy

### Equilibrium Condition

Setting money supply equal to money demand:

$$\frac{M}{P} = L(r + E\pi,\ Y)$$

This single equation, along with:
- $Y = F(K, L)$ — production function determines real GDP
- $S = I$ — loanable funds market determines $r$
- Central bank sets $M$

…determines the **price level $P$**.

### The Classical Dichotomy

| Variable | Type | Determined by |
|----------|------|---------------|
| $M$ | Nominal | Central bank (exogenous) |
| $r$ | Real | Loanable funds market ($S = I$) |
| $Y$ | Real | Production function $F(K, L)$ |
| $P$ | Nominal | Money market equilibrium: $M/P = L(r + E\pi, Y)$ |
| $i$ | Nominal | Fisher equation: $i = r + \pi$ |

> [!info] Definition: Classical Dichotomy
> ==The classical dichotomy== is the separation of real and nominal variables in the classical model. Real variables (Y, r) are determined without any reference to money or prices; then the money market pins down all nominal variables (P, i). ^classical-dichotomy

This is the long-run justification for **money neutrality**: once real variables are determined by the real sector, all that money does is set the price level.

### How P Responds to Changes in M and Eπ

**Case 1: ΔM (money supply increases)**
- $r$, $Y$, and $E\pi$ are all unchanged (determined elsewhere).
- The only way to restore $M/P = L(r + E\pi, Y)$ is for $P$ to rise by the same proportion as $M$.
- Expected future price changes are unaffected → $E\pi$ unchanged → $i$ unchanged.

**Case 2: ΔEπ (expected inflation rises)**
- Even before $M$ changes, $i = r + E\pi$ rises.
- Higher $i$ reduces money demand → people try to spend their money → $P$ rises *now*.
- The price level adjusts immediately to changes in *expectations* about future money.

> [!example] E.g., Fed announces it will increase M next year
> Rational households update $E\pi$ upward today. This raises $i$ today. Lower money demand at current $M$ and $Y$ means there's an "excess supply" of money → people spend it → $P$ rises immediately, *before* M has even changed.

> [!warning] Common mistake: confusing levels and rates of change
> The quantity theory says a *one-time* increase in $M$ causes a *one-time* increase in $P$ (same %). It does NOT cause a perpetual rise in inflation unless $M$ keeps growing faster than $Y$. Inflation is a sustained *rate of change*, not a price level shift.

---

## 📋 Summary

| Concept | Key Result |
|---------|-----------|
| **Quantity equation** | $MV = PY$ — an identity, always true |
| **Quantity theory** | $V$ constant → $\pi = \Delta M/M - \Delta Y/Y$ |
| **Money neutrality** | $\Delta M$ affects only $P$, not $Y$ or $r$ |
| **Fisher effect** | $\Delta\pi$ → equal $\Delta i$ (one-for-one), $r$ unchanged |
| **Money demand** | $(M/P)^d = L(i, Y)$; falls with $i$, rises with $Y$ |
| **Classical dichotomy** | Real sector determines real vars; money market pins nominal vars |
| **P responds to $E\pi$** | Higher expected inflation → lower money demand → $P$ rises now |

> [!tip] One-line summary
> In the long run, the central bank controls inflation by controlling money growth; everything else (real GDP, real rates) is determined by the real economy and is unaffected by how much money is printed.

---

## 🔗 Related Notes

- [[Lec_03-Classical Theory & National Income]] — where $Y$ and $r$ are determined (the real side)
- [[Lec_04-The Monetary System]] — how $M$ is created by the banking system
- [[Macro-Economics II]] — subject hub
