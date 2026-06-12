---
title: Consumption and Saving
semester: 2
course: Macro-Economics
tags:
  - macroeconomics
  - consumption
  - saving
  - euler-equation
  - life-cycle-hypothesis
  - permanent-income-hypothesis
  - intertemporal-choice
  - fisher-model
subject: macro-economics
in_scope: true
---

# Consumption and Saving

> Part of: [[Macro-Economics]]
> Key concepts: [[Euler Equation]], [[Life-Cycle Hypothesis]], [[Permanent Income Hypothesis]], [[Intertemporal Choice]], [[Consumption Smoothing]], [[Borrowing Constraints]]

---

## 📊 Why We Care — Stylised Facts

Consumption is ~**67% of US GDP** (FRED, 2025), and the single largest expenditure item in the national accounts. Understanding *how* households decide to consume vs. save is essential to understanding GDP, business cycles, and fiscal policy.

### Components of private consumption

| Category | Lasts | Example |
|---|---|---|
| **Durable goods** | Long | Cars, appliances |
| **Non-durable goods** | Short | Food, clothing |
| **Services** | Intangible | Haircuts, cleaning |

### Cyclical facts (US, 1947–2025)

- **Aggregate $C$**: correlation with GDP ≈ **0.8**; ~0.85× as volatile as GDP.
- **Services $C$**: correlation 0.69; only 0.72× as volatile.
- **Non-durables $C$**: correlation 0.66; 0.77× as volatile.
- **Durables $C$**: correlation 0.58 but **~2.9× as volatile as GDP**.

![[l2_c_cyclical.png|560]]
*Cyclical components of consumption and GDP, USA. Consumption tracks GDP closely (corr ≈ 0.8) but is smoother — the visual signature of consumption smoothing.*

> [!tip] Key puzzle
> Consumption is strongly correlated with income but **not just a constant fraction of it**. Households must be using savings to smooth consumption across periods. We need a theory of **why and how** they smooth.

---

## 📚 The "Old" Keynesian Consumer

### Definitions

- **Marginal propensity to consume (MPC):** $\partial C / \partial Y$ — extra $C$ per extra $Y$.
- **Average propensity to consume (APC):** $C / Y$.

### Keynesian consumption function

$$C_t = \bar{C} + c\,Y_t$$

**Assumption:** MPC ($c$) is constant.

**Predictions:**
1. Consumption is determined by **current** income.
2. Saving rises with current income.

### Why it fails

Under this model, consumption differences must be perfectly correlated with income differences:

$$\frac{C_{t+1} - C_t}{Y_{t+1} - Y_t} = c$$

In the data, that correlation is only **0.4–0.65** across categories. The model also:

- Ignores dependence on **future** income.
- Ignores the **interest rate**.
- Lacks **micro-foundations**.

> [!warning] What's missing
> We need a model of **inter-temporal choice** and **forward-looking behaviour** — Fisher's two-period model.

---

## 💰 Consumption, Saving, and Wealth

### Household saving

$$s = y - c$$

where $s$ = saving (can be negative), $y$ = disposable income, $c$ = consumption.

### Aggregate saving

$$S = Y - C - G$$

### Flow vs. stock

- **Saving** is a flow (per period).
- **Wealth** is a stock. Positive saving *increases* wealth.

---

## 🤔 Why Save or Borrow?

1. **Life-cycle** — save for retirement.
2. **Life-cycle** — borrow against future earnings (e.g. student loans).
3. **Precautionary** — uncertain income → save against downside.
4. **Time discounting** — preferences over today vs. tomorrow.

---

## 🔧 The Two-Period Model — Setup

### Notation

| Exogenous | Endogenous |
|---|---|
| $y$: current income | $c$: current consumption |
| $y^f$: future income | $c^f$: future consumption |
| $a$: initial assets | $a^f$: next-period assets |
| $r$: real interest rate | |
| $\beta \in (0,1]$: discount factor | |

### Preferences — three assumptions

1. **More is better:** $u'(c) > 0$.
2. **Diminishing marginal utility:** $u''(c) < 0$.
3. **Impatience:** today's utility weighted more than tomorrow's via $\beta$.

Plus the technical conditions $\lim_{c \to 0} u'(c) = \infty$ and $\lim_{c \to \infty} u'(c) = 0$.

### Objective — lifetime utility

$$U(c, c^f) = u(c) + \beta\,u(c^f)$$

### Budget constraint — two equivalent forms

**Sequential (flow):**
$$c + a^f = y + a, \qquad c^f = y^f + (1+r)a^f$$

**Lifetime (PVLR):**
$$\boxed{c + \frac{c^f}{1+r} = a + y + \frac{y^f}{1+r} \equiv \text{PVLR}}$$

where **PVLR = Present Value of Lifetime Resources**.

> [!tip] Why these are equivalent
> Solve the first-period constraint for $a^f$, substitute into the second, divide by $(1+r)$. The sequential form shows cash flows each period; the lifetime form shows the single lifetime budget line.

---

## 🎯 The Euler Equation

### Setting up the Lagrangian

$$\mathcal{L} = u(c) + \beta u(c^f) + \lambda\Bigl[\text{PVLR} - c - \tfrac{c^f}{1+r}\Bigr]$$

**FOCs** give $u'(c) = \lambda$ and $\beta u'(c^f) = \lambda/(1+r)$. Combining:

$$\boxed{u'(c) = \beta(1+r)\,u'(c^f)}$$

This is the **Euler equation** — a necessary condition for an optimal consumption plan.

### Interpretation

Consider saving $\varepsilon$ more today:

- **Cost:** lose $\varepsilon \cdot u'(c)$ in utility now.
- **Benefit:** gain $\beta(1+r)\varepsilon \cdot u'(c^f)$ in utility tomorrow.

At the optimum the two are equal. If they're not, reallocate until they are.

### Consumption-saving trade-off

| Condition | Implication |
|---|---|
| $\beta(1+r) = 1$ | $c = c^f$ (perfect smoothing) — the market rate just offsets impatience |
| $\beta(1+r) > 1$ | $c < c^f$ — market over-compensates for impatience → save |
| $\beta(1+r) < 1$ | $c > c^f$ — impatience dominates → borrow / front-load |

### General (T-period) form

$$u'(c_t) = \beta(1+r)\,u'(c_{t+1})$$

---

## 📈 Graphical Picture

- **Budget line** in $(c, c^f)$ space: slope $-(1+r)$, passes through the endowment $(y, y^f)$.
- **Indifference curves:** convex, slope $-\tfrac{1}{\beta}\tfrac{u'(c)}{u'(c^f)}$ = MRS.
- **Optimum:** tangency where $\text{MRS} = -(1+r)$ — exactly the Euler equation.

![[l2_budget_tangency.png|520]]
*The optimum is where the highest reachable indifference curve is tangent to the budget line — the slope condition $MRS = 1+r$ is precisely the Euler equation. The consumer can choose any point on the budget line through the endowment by borrowing or lending.*

> [!info] Jensen meets economics
> A concave utility function means the **utility of the average** exceeds the **average of the utilities** — i.e. smoothed consumption is preferred to volatile consumption with the same mean. This is the mathematical core of the consumption-smoothing motive.

---

## 🔩 Comparative Statics

### The discount factor $\beta$

Higher $\beta$ ⇒ more patient ⇒ $u'(c)/u'(c^f)$ must rise ⇒ **lower $c$, higher $c^f$** (save more).

$\beta$ appears in the Euler equation but not the budget constraint — a pure preference shift.

### The interest rate $r$ — the ambiguous case

$r$ affects **both** the budget constraint (via PVLR) **and** the Euler equation. Two effects:

| Effect | Direction |
|---|---|
| **Substitution effect** — current $c$ gets relatively more expensive | $c \downarrow$ |
| **Income effect (borrower)** — PVLR falls | $c \downarrow$ |
| **Income effect (lender)** — PVLR rises | $c \uparrow$ |

> [!warning] Course convention
> For a **borrower**, substitution and income effects both push $c$ down — unambiguous.
> For a **lender**, they oppose — ambiguous. **Unless told otherwise, assume $r \uparrow \Rightarrow c \downarrow$.**

---

## 🔁 Generalisation to $T$ Periods

**PVLR:**
$$\text{PVLR}_0 = a + y_0 + \frac{y_1}{1+r} + \frac{y_2}{(1+r)^2} + \dots + \frac{y_T}{(1+r)^T}$$

**Budget:**
$$\sum_{t=0}^{T} \frac{c_t}{(1+r)^t} = \text{PVLR}_0$$

**Utility:**
$$U = \sum_{t=0}^{T} \beta^t u(c_t)$$

**Euler:**
$$u'(c_t) = \beta(1+r)\,u'(c_{t+1})$$

---

## 👶➡️🧓 The Life-Cycle Hypothesis (Modigliani)

### Stylised setup

Assume $r = 0$, $\beta = 1$, $a = 0$, constant income $y$ for $N$ working periods, zero income for $T - N$ retirement periods.

Because $\beta(1+r) = 1$, the Euler equation gives **perfect smoothing**: $c_t = \bar{c}$ for all $t$.

**PVLR** $= N \cdot y$, and with $r = 0$:

$$\bar{c} = \frac{N\,y}{T}$$

**Implications:**

| Phase | Income | Consumption | Saving |
|---|---|---|---|
| Working ($t \le N$) | $y$ | $Ny/T$ | $y - Ny/T > 0$ |
| Retirement ($t > N$) | $0$ | $Ny/T$ | $-Ny/T < 0$ |

![[l2_lifecycle_profile.png|560]]
*The life-cycle picture: income is high during working years then drops at retirement, but consumption is held flat (smoothed) across the whole life. The gaps are saving (working years) and dissaving (retirement).*

**Wealth profile:** rises during working years, peaks at retirement, then depletes toward zero at death. This hump-shape is seen clearly in Survey of Consumer Finances (US), StatCan, and IFS (UK) data.

![[l2_lch_data_us.png|520]]
*Hump-shaped wealth by age, US Survey of Consumer Finances — wealth accumulates through working life, peaks near retirement, then is drawn down, exactly as the LCH predicts.*

### Consumption vs. expenditure

Banks, Blundell & Tanner (1998) found a "retirement-savings puzzle": **expenditure** drops sharply at retirement. Aguiar & Hurst (2005) resolved this — what falls is work-related expenditure (food spending, clothing) while **time spent on home production** rises to substitute. True *consumption* stays smooth.

> [!tip] Expenditure ≠ consumption
> When households retire they buy fewer prepared meals and more raw ingredients and cook themselves. Measured spending falls but welfare-relevant consumption is roughly flat — as the LCH predicts.

---

## 📉 The Permanent Income Hypothesis (Friedman)

**Permanent income** $y^p$: the hypothetical constant income stream that has the same PVLR as the actual (variable) income stream.

> [!success] Core claim
> Consumption depends on **permanent income** (i.e., PVLR), not current income alone.

### Predictions for income shocks

| Shock type | Expected? | $\Delta c$ today | $\Delta s$ today |
|---|---|---|---|
| **Expected** rise in $y$ | Yes | 0 | $+$ (whole rise saved until realised) |
| **Unexpected temporary** rise in $y$ | No | Small $+$ (split over $T$ periods) | $+$ (most of shock saved) |
| **Unexpected permanent** rise in $y$ | No | $+\Delta y$ (full MPC ≈ 1) | 0 |
| **Unexpected future** rise in $y$ | No | $+$ (borrow against it) | $-$ |

> [!warning] Key subtlety
> Consumption re-optimises when **new information arrives**, not when the income change actually happens. An anticipated raise has *already* been priced into today's consumption — no smoothing response when it arrives.

### Worked example (two periods, $\beta(1+r) = 1$)

Optimal plan: $c = \tfrac{1+r}{2+r}\bigl[y_0 + \tfrac{y_1}{1+r}\bigr]$.

For a shock $x$ to income:

| Shock | Change in $c$ today |
|---|---|
| One-off in period 0 | $\tfrac{1+r}{2+r}x$ |
| One-off in period 1 | $\tfrac{1}{2+r}x$ |
| Permanent | $x$ (full pass-through) |

### Log-utility example, $\beta(1+r) \neq 1$

With $u(c) = \ln c$, Euler gives $c_1 = \beta(1+r) c_0$, and substituting:

$$c_0 = \frac{1}{1+\beta}\left[y_0 + \frac{y_1}{1+r}\right]$$

---

## 🚧 Excess Sensitivity and Borrowing Constraints

### The puzzle

Micro-data studies find consumption is **too sensitive** to current-income changes relative to the PIH benchmark.

### Candidate explanations

1. **"Rule of thumb" consumers** — a fraction just spend current income.
2. **Myopia / short horizons**.
3. **Consumption vs. expenditure** measurement issues.
4. **Borrowing constraints** — can't borrow to smooth.

### Borrowing constraint mechanics

If the household wants to borrow but can't, the Euler equation becomes:

$$u'(c) > \beta(1+r)\,u'(c^f)$$

Current consumption is **below** the unconstrained optimum. Extra income today goes straight into consumption (high MPC) until the constraint no longer binds.

![[l2_borrowing_constraint.png|520]]
*A borrower who would like to consume past the endowment cannot, so the household is stuck at $c = y$ — at that point $u'(c) > \beta(1+r)u'(c^f)$, and any extra current income is spent immediately (high MPC).*

> [!tip] Policy relevance
> Borrowing-constrained households respond strongly to **temporary fiscal transfers** — this is why stimulus checks work even though PIH says they shouldn't. Targeting transfers to the constrained maximises stimulus per dollar.

### "Wealthy hand-to-mouth" (Kaplan & Violante, 2014)

Not just the poor. Roughly **20% of US households** have illiquid assets (housing, retirement accounts) but little liquid wealth — they *behave* as hand-to-mouth despite being rich. In France, Germany, Italy and Spain, the **wealthy HtM outnumber the poor HtM by 3-to-1**.

Implications:
- Borrowing frictions ≠ poverty.
- The MPC out of transitory income shocks can be high even in non-poor households.
- Fiscal multipliers depend on the share of HtM consumers in the economy.

---

## 🎯 Summary — What This Lecture Teaches

1. **Stylised facts:** $C$ is large, correlated with $Y$, and smoother than $Y$ (except durables).
2. **Old Keynesian $C = \bar{C} + cY$ is too simple** — no role for future income, interest rates, or micro-foundations.
3. **Inter-temporal optimisation** delivers the **Euler equation** $u'(c) = \beta(1+r)u'(c^f)$ — the central equation of consumption theory.
4. **Life-cycle hypothesis:** save during working years, dissave in retirement → hump-shaped wealth profile (confirmed in data).
5. **Permanent income hypothesis:** consumption tracks PVLR; anticipated income changes don't move $c$; information arrival does.
6. **$r$ has ambiguous effects** — substitution vs. income. Convention: $r \uparrow \Rightarrow c \downarrow$.
7. **Borrowing constraints** explain excess sensitivity and give fiscal policy a transmission channel — relevant for the wealthy-HtM population, not just the poor.

---

## 📎 Related Notes

- Foundational: [[Intertemporal Choice]], [[Present Value]], [[Utility Maximisation]]
- Companion: [[Lec_01-Data Review]] — stylised macro facts
- Future applications: [[Fiscal Policy]], [[Ricardian Equivalence]], [[New Keynesian Models]]
- Key references in lecture: Banks, Blundell & Tanner (1998); Aguiar & Hurst (2005); Kaplan & Violante (2014)
