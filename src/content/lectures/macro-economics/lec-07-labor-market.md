---
title: The Labor Market
week: 7
semester: 2
year: 2
course: Macro-Economics
tags:
  - macroeconomics
  - labor-market
  - labor-demand
  - labor-supply
  - utility-maximization
  - income-effect
  - substitution-effect
  - equilibrium
aliases:
  - Labor Market
  - Labour Market
  - Labor Supply and Demand
subject: macro-economics
in_scope: true
---

# The Labor Market

> Part of: [[Macro-Economics]]
> **Lecture 07** — Macro-Economics
> Key concepts: [[Labor Demand]], [[Labor Supply]], [[Static FOC]], [[Income Effect]], [[Substitution Effect]], [[PVLR]], [[Marginal Product of Labor]], [[Real Wage]]

---

## 🗺️ Where This Fits

So far in the short-run model, labor $N$ has been held fixed. This lecture **endogenises** $N$: firms and workers both optimise, and the labor market clears to determine the equilibrium real wage $w^*$ and employment $N^*$.

Adding this completes the short-run general equilibrium:
- **Goods market**: $S = I$ → equilibrium $r^*$
- **Labor market**: $N^S = N^D$ → equilibrium $w^*$, $N^*$
- **Production function**: $Y = A F(K, N^*)$ → equilibrium output $Y^*$

---

## 🧱 Model Assumptions

| Assumption | What it means |
|---|---|
| All workers identical | One type of labour — no skills/heterogeneity (relaxed in extensions) |
| All firms identical | One representative firm |
| Single good produced | Everything is in real terms (no price level complications) |
| Competitive markets | All agents are price-takers; no market power |
| Short run: $K = \bar{K}$ | Capital is fixed for now (will be relaxed in long-run analysis) |
| No frictions | Workers and firms can freely match and separate — no search or bargaining |

---

## 📉 Labor Demand

### The Firm's Problem

Given technology $A$, capital $\bar{K}$, and wage $w$, the firm chooses $N$ to maximise profits:

$$\max_N \Pi = \max_N \left\{ A F(\bar{K}, N) - wN \right\}$$

**First-order condition:**

$$\boxed{A \frac{\partial F(\bar{K}, N)}{\partial N} = w \qquad \Leftrightarrow \qquad \text{MPN} = w}$$

Firms hire workers until the ==**marginal product of labor**== equals the ==**real wage**==.

> [!info] Why MPN = w is the optimum
> - If $\text{MPN} > w$: the last worker produces more than he costs → hire more
> - If $\text{MPN} < w$: the last worker costs more than he produces → fire him
> - Only at $\text{MPN} = w$ is there no profitable deviation

### The Labor Demand Curve

The labor demand curve is the **MPN curve** drawn against the real wage $w$. It slopes **downward** because of diminishing marginal returns to labor: as you hire more workers (holding $\bar{K}$ fixed), the extra output from each additional worker falls.

### Shifts vs. Movements Along

> [!warning] The real wage never shifts the labor demand curve
> The real wage $w$ is endogenous — it is determined in equilibrium. If $w$ changes, the firm moves **along** the demand curve to a new $N$. The curve only shifts when the underlying $\text{MPN}$ changes for a given $N$.

What **does** shift the $N^D$ curve (i.e., changes MPN at every level of $N$)?

$$\text{MPN} = A \frac{\partial F(\bar{K}, N)}{\partial N}$$

| Shifter | Effect | Reason |
|---|---|---|
| $A$ ↑ | $N^D$ shifts **right/up** | Higher TFP → each worker more productive → firm wants more workers at every wage |
| $\bar{K}$ ↑ | $N^D$ shifts **right/up** | Capital-labor complementarity (Property 3): more capital → higher MPN |

---

## 📈 Labor Supply

### Preferences

Workers derive utility from two things:
- ==**Consumption** $C$==: more is better; diminishing marginal utility ($U_C > 0$, $U_{CC} < 0$)
- ==**Leisure** $\ell = 1 - N$==: more is better; diminishing marginal utility
- Equivalently, ==**labor** $N$== is a bad: more is worse ($U_N < 0$); and the last unit is more painful than the one before ($U_{NN} < 0$)

The utility function summarises preferences:
$$U(C, N) \quad \text{or equivalently} \quad U(C, \ell) = U(C, 1-N)$$

Key derivatives:
- $U_C = \frac{\partial U}{\partial C} > 0$ (more consumption is good)
- $U_{CC} < 0$ (diminishing marginal utility)
- $U_N = \frac{\partial U}{\partial N} < 0$ (more work is bad)
- $U_{NN} < 0$ (each extra hour of work is more painful)

### The Budget Constraint

Workers can only consume what they earn. In a one-period model with initial wealth $B$:

$$C = w \cdot N + B$$

- $w$ is the real wage (price of each hour of labour in terms of consumption goods)
- $B$ is non-labour wealth (savings, transfers, lottery winnings)
- The constraint holds with equality: there's no reason to throw away money

**Graphically:** in the (Leisure, $C$) space, the budget line has a slope of $-w$. The horizontal intercept is 1 (all leisure, no work); the vertical intercept is $w + B$ (work every hour).

![[l7_budget_leisure.png|500]]
*Consumption–leisure choice: the budget line has slope $-w$ (the price of an hour of leisure) and vertical intercept set by non-labour wealth $B$. The optimum is the tangency where $MRS = w$ — the static FOC.*

### The Optimisation Problem

Choose $C$ and $N$ to maximise utility subject to the budget constraint:

$$\max_{C,N} U(C, N) \quad \text{s.t.} \quad C = wN + B$$

**Solution using Lagrangian** (or substitution):

$$\frac{\partial \mathcal{L}}{\partial C} = U_C - \lambda = 0 \implies U_C = \lambda$$

$$\frac{\partial \mathcal{L}}{\partial N} = U_N + \lambda w = 0 \implies U_N = -\lambda w$$

Divide the second by the first:

$$\boxed{-U_N = w \cdot U_C}$$

This is called the ==**static first-order condition (static FOC)**==.

### Interpreting the Static FOC

The condition says: marginal cost of work = marginal benefit of work.

- **Left side** $(-U_N)$: the "marginal pain" of working one more hour. Since $U_N < 0$, this is positive — it represents how much utility you lose from the extra labour.
- **Right side** ($w \cdot U_C$): the marginal benefit of working one more hour. Working an extra hour earns $w$ additional units of consumption; multiplying by $U_C$ converts this into utility terms.

> [!example] Tangency condition
> This is the same as saying the indifference curve is tangent to the budget line:
> $$\text{MRS}_{C,\ell} = w$$
> The MRS (how much consumption you'd give up for an extra unit of leisure) equals the opportunity cost of leisure (the real wage).

---

## 💰 Income and Substitution Effects

### Pure Income Effect (Wealth Shock)

Suppose $B$ increases (you win the lottery), with $w$ unchanged.

The budget line shifts out **parallel** (same slope, higher intercept). The worker is richer:
- Buys more consumption $C$
- Takes more leisure $\ell$ (i.e., works **less**)

> [!tip] Why work less when richer?
> Leisure is a normal good. If you can afford more of everything, you'll take more leisure — just as you'd buy more of any good when your income rises.

### Substitution Effect (Wage Change)

Suppose $w$ rises. The budget line **rotates**: steeper slope, same intercept at $\ell = 1$, $C = B$.

- **Substitution effect alone**: leisure just got more expensive (costs $w$ per hour). Work more, take less leisure.
- **Income effect**: higher $w$ makes you richer → work less, take more leisure.

The two effects work in **opposite directions**, so the net effect of $w$ on $N^S$ is ambiguous.

| Effect | Direction of N^S |
|---|---|
| Substitution (higher price of leisure) | ↑ |
| Income (richer, want more leisure) | ↓ |

> [!info] Our assumption: substitution dominates
> We assume the substitution effect is larger, so the labour supply curve slopes **upward**: higher real wages lead to more hours worked. This rules out the "backward-bending" labour supply curve region seen in some empirical work on very high earners.

---

## ↔️ Labor Supply Curve Shifters

Changes in the **current real wage** cause a movement **along** the $N^S$ curve — not a shift. What *shifts* $N^S$?

| Shifter | Direction | Reason |
|---|---|---|
| Population / participation ↑ | Right | More people available to work at any given wage |
| ==**PVLR**== ↑ (from non-wage source) | Left | Higher lifetime wealth → demand more leisure → work less. PVLR = Present Value of Lifetime Resources |
| Future wages ↑ (expected) | Left | Higher expected future income raises current PVLR → income effect dominates |

> [!info] What is PVLR?
> The **Present Value of Lifetime Resources** (PVLR) is the total wealth a worker has — including the present value of all future labour income and non-labour income. It's what determines consumption-smoothing. Anything that raises PVLR (other than the current wage) shifts the labour supply curve left.

---

## ⚖️ Equilibrium in the Labor Market

An equilibrium requires three conditions to hold simultaneously:

1. **Households** optimise: static FOC $-U_N = w \cdot U_C$
2. **Firms** optimise: $\text{MPN} = w$
3. **Market clearing**: $N^S = N^D$

The equilibrium $(N^*, w^*)$ is the crossing point of the supply and demand curves.

![[l7_labor_equilibrium.png|500]]
*Labor-market equilibrium: upward-sloping $N^S$ (substitution effect dominates) meets the downward-sloping $N^D$ (= MPN) at $(N^*, w^*)$.*

---

## 💥 Shock Analysis

### Example 1 — Negative Temporary TFP Shock ($A \downarrow$)

**Scenario:** TFP falls this period, expected to return to normal next period.

- **$N^D$ shifts**: Yes, **left/down** — MPN falls for every $N$ when $A$ falls.
- **$N^S$ shifts**: No — labor supply depends on the current wage and PVLR. The current wage is endogenous (it will fall, but that's a movement along the curve). PVLR barely changes for a temporary shock.

**New equilibrium:** lower $N^*$, lower $w^*$.

**Output:** $Y = AF(\bar{K}, N^*)$ → falls through *both* channels (lower $A$ and lower $N$).

![[l7_labor_shocks.png|640]]
*Left: a negative TFP shock shifts $N^D$ left (MPN falls) → lower $N$ and lower $w$. Right: a permanent population increase shifts $N^S$ right (short run) → higher $N$ but lower $w$.*

> [!tip] Recession interpretation
> This is a stylised model of a recession: a negative productivity shock reduces employment, wages, and output. This motivates RBC models where business cycles are driven by TFP fluctuations.

### Example 2 — Permanent Population Increase

**Short run (K fixed):**

- **$N^S$ shifts**: Yes, **right** — more workers available at any wage.
  - Additionally: the permanent increase also lowers expected future wages (more labour supply forever), lowering PVLR, which further shifts $N^S$ right.
- **$N^D$ shifts**: No — MPK and $A$ are unchanged.

**Short-run equilibrium:** higher $N^*$, lower $w^*$.

**Output:** $Y = AF(\bar{K}, N^*)$ → rises (more workers). But **labour productivity** $Y/N$ falls (we slide down the diminishing-returns MPN curve — each worker produces less).

**Long run (K can adjust):**

More workers in the future means future MPK is higher (complementarity!). Firms will therefore invest more, raising $K$. As $K$ rises:

- $N^D$ shifts **right** (higher $K$ raises MPN for every $N$)
- The wage rises back toward its original level

**Long-run equilibrium:** higher $N$, higher $K$, higher $Y$ — but $K/N$ and $Y/N$ return to initial levels (under CRS). Growth in *per-capita* output requires TFP growth, not just more inputs.

> [!success] Key long-run result
> Capital and labour are complements. A permanent increase in labour supply eventually induces more capital accumulation, which in turn raises labour demand. The economy scales up, but living standards (output per worker) are unchanged unless TFP grows. This foreshadows growth theory.

---

## 🎯 Summary

1. **Labor demand** $N^D$: the MPN curve. Firms hire until $\text{MPN} = w$. Shifts right with higher $A$ or $\bar{K}$.
2. **Labor supply** $N^S$: workers maximise utility from $C$ and leisure. The **static FOC** is $-U_N = w \cdot U_C$.
3. **Wage effects on $N^S$**: ambiguous — substitution (work more) vs. income (work less) effects. We assume substitution dominates → upward-sloping $N^S$.
4. **$N^S$ shifters**: population, PVLR (from non-wage sources), future wages. Current wage only causes movement along.
5. **Equilibrium**: $N^S = N^D$ at $(N^*, w^*)$. Then use $Y = AF(\bar{K}, N^*)$.
6. **Negative TFP shock**: $N^D$ shifts left → lower $N$, $w$, and $Y$.
7. **Permanent population increase** (short run): $N^S$ shifts right → higher $N$, lower $w$, higher $Y$, lower $Y/N$.
8. **Long-run adjustment**: higher $N^f$ → higher MPK$^f$ → more investment → higher $K$ → $N^D$ shifts right → wages recover. CRS means $Y/N$ returns to baseline; TFP growth needed to raise living standards.

---

## 📎 Related Notes

- Built on: [[Lec_04-Production]] — MPN from the production function
- Built on: [[Lec_05-Investment]] — firm optimisation, complementarity of K and N
- Built on: [[Lec_06-Equilibrium in the Goods Market]] — the goods market sets $r$; this sets $w$ and $N$
- Future: [[Growth Models]] — long-run equilibrium with capital and labour jointly determined
- Future: [[Unemployment]] — relaxing the no-frictions assumption
