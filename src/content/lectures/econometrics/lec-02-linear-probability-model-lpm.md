---
title: Linear Probability Model (LPM)
week: 2
semester: 2
course: Applied Econometrics
lecture: "Lecture 02 — Game Theory & Binary Outcomes (LPM)"
instructor: Dr. Aluma Dembo
tags:
  - econometrics
  - LPM
  - binary-outcomes
  - game-theory
  - ultimatum-game
  - heteroskedasticity
  - robust-standard-errors
subject: econometrics
in_scope: true
---
# Linear Probability Model (LPM)

> Part of: [[Econometrics]]
> **Lecture 02** — Applied Econometrics, Dr. Aluma Dembo
> Previous: [[Lec_01-Introduction & Treatment Effects]] | Next: [[Lec_03-Logit & Probit Models]]
> Key concepts: [[Binary Outcomes]], [[LPM]], [[Heteroskedasticity]], [[Robust Standard Errors]], [[Ultimatum Game]]

---

## 🎯 Motivation — Binary Outcomes

Often the outcome of interest is **binary**: accept/reject, buy/don't buy, employed/unemployed, vote yes/no. We code it as $y_i \in \{0, 1\}$ and ask: *what's the probability $y=1$, and how does it depend on $x$?*

> [!info] Today's agenda
> 1. Motivating example — the **ultimatum game** (Andersen et al. 2011)
> 2. Define the **Linear Probability Model**
> 3. Show $P(y=1 \mid x) = \beta_0 + \beta_1 x$ under A2
> 4. Interpret coefficients
> 5. Identify LPM's two big drawbacks — and how to patch one of them

---

## 💡 Worked Example: The Ultimatum Game

> [!example] The Setup
> **Two players**, one-shot, anonymous:
> - **Proposer** receives a pot $S$ and offers share $p \in [0, 1]$ to the Responder.
> - **Responder** sees the offer and either **accepts** (proposer keeps $(1-p)S$, responder gets $pS$) or **rejects** (both get 0).
>
> Subgame-perfect Nash prediction: proposer offers the smallest positive $p$; responder accepts anything $> 0$. Real humans reject "unfair" offers — a classic violation of pure self-interest.

### Andersen, Ertaç, Gneezy, Hoffman & List (2011)

Ran the ultimatum game in rural India with **stakes varied from 20 Rs up to 20,000 Rs** (roughly a year's income) to test whether "irrational" rejection persists when money actually matters.

| Variable | Meaning |
|----------|---------|
| $accept_i \in \{0,1\}$ | Did the responder accept? |
| $percent\_offer_i \in [0,1]$ | Share of the pie offered |
| $stakes\_2, stakes\_3, stakes\_4$ | Dummies for 200 / 2,000 / 20,000 Rs (ref = 20 Rs) |

**Research question:** Does the probability of acceptance rise with the offer, and does it change when the stakes are large?

---

## 🔧 The Linear Probability Model

For a binary $y_i \in \{0,1\}$, run OLS directly:

$$y_i = \beta_0 + \beta_1 x_i + u_i$$

The magic: under assumption **A2** ($\mathbb{E}[u_i \mid x_i] = 0$), the fitted value *is* a conditional probability.

### 📝 Proof — $\hat{y}$ is an estimate of $P(y=1 \mid x)$

Take conditional expectations of both sides:

$$\mathbb{E}[y_i \mid x_i] = \beta_0 + \beta_1 x_i + \underbrace{\mathbb{E}[u_i \mid x_i]}_{=0 \text{ by A2}} = \beta_0 + \beta_1 x_i$$

Since $y_i$ is binary:

$$\mathbb{E}[y_i \mid x_i] = 1 \cdot P(y_i = 1 \mid x_i) + 0 \cdot P(y_i = 0 \mid x_i) = P(y_i = 1 \mid x_i)$$

Therefore:

$$\boxed{P(y_i = 1 \mid x_i) = \beta_0 + \beta_1 x_i}$$

So $\hat{\beta}_0 + \hat{\beta}_1 x$ estimates the **conditional probability** of acceptance.

---

## 📝 Interpreting LPM Coefficients

### Continuous regressor

$$\beta_1 = \frac{\partial P(y=1 \mid x)}{\partial x}$$

A one-unit increase in $x$ changes the probability of $y=1$ by $\beta_1$ — in **percentage points**, not percent.

### Dummy regressor

If $d \in \{0, 1\}$, then $\beta_d$ = difference in $P(y=1)$ between the treatment and reference group.

### Andersen et al. results

$$\widehat{accept}_i = \hat{\beta}_0 + 0.583 \cdot percent\_offer_i + \hat{\beta}_2 \cdot stakes\_2 + \hat{\beta}_3 \cdot stakes\_3 + 0.392 \cdot stakes\_4$$

**Interpretation:**
- $\hat{\beta}_1 = 0.583$: a 10 percentage-point larger offer raises acceptance probability by **5.83 pp**.
- $\hat{\beta}_4 = 0.392$: at the 20,000 Rs stakes, acceptance probability is **39.2 pp higher** than in the 20 Rs reference group — people are far more accepting when rejecting is very costly.

> [!success] Key finding
> High stakes **do** change behaviour — responders are much more willing to accept low offers when the amount at stake is meaningful. The "fairness" penalty shrinks as money grows.

---

## ⚠️ LPM Drawback #1 — Unbounded Predictions

Probabilities must lie in $[0, 1]$. OLS has no such constraint: $\hat{y}$ can be **negative** or **greater than 1**.

In Andersen et al., the max fitted value is **1.1943** — a "probability" of 119%, which is nonsense.

![[Lec02_lpm_unbounded.png|560]]

> [!warning] Why this happens
> LPM fits a straight line through a cloud of 0s and 1s. Extend the line far enough and it leaves the unit interval. The more extreme $x$ gets, the more often this happens. In the shaded regions the model predicts probabilities below 0 or above 1 — exactly the 119% fitted value Andersen et al. hit.

This is the motivation for **[[Lec_03-Logit & Probit Models]]** (next lecture), which squash $\hat{y}$ into $[0,1]$ via the logistic / normal CDF.

---

## ⚠️ LPM Drawback #2 — Built-in Heteroskedasticity

### 📝 Proof — $\text{Var}(u \mid x) = p(x)(1 - p(x))$

Since $y \in \{0,1\}$, $u = y - p(x)$ is also binary, taking:
- $u = 1 - p(x)$ with probability $p(x)$
- $u = -p(x)$ with probability $1 - p(x)$

Then $\mathbb{E}[u \mid x] = 0$ (by A2), and:

$$\text{Var}(u \mid x) = \mathbb{E}[u^2 \mid x] = (1-p(x))^2 \cdot p(x) + p(x)^2 \cdot (1-p(x))$$

$$= p(x)(1-p(x))\bigl[(1-p(x)) + p(x)\bigr] = \boxed{p(x)\bigl(1-p(x)\bigr)}$$

> [!warning] What this violates
> Since $\text{Var}(u \mid x)$ depends on $x$ through $p(x)$, assumption **A4** (homoskedasticity) is **always** violated in LPM. The classical OLS standard errors are wrong — usually too small.

### The shape of the variance

| $p(x)$ | $\text{Var}(u \mid x)$ |
|--------|-----------------------|
| 0.1 | 0.09 |
| 0.3 | 0.21 |
| 0.5 | **0.25** (max) |
| 0.7 | 0.21 |
| 0.9 | 0.09 |

Variance is largest when $p(x) = 0.5$ (maximum uncertainty) and shrinks toward the extremes.

![[Lec02_variance_frown.png|560]]

> [!tip] Reading the frown
> The error variance traces an inverted parabola in $p(x)$ — it has to, because a coin near 50/50 is the least predictable while one near 0 or 1 is nearly certain. Because the height of this curve changes with $x$, the homoskedasticity assumption (A4) is broken *by construction* in every LPM, which is why robust standard errors are non-negotiable.

---

## 🔧 Fix: Robust (Heteroskedasticity-Consistent) Standard Errors

$\hat{\beta}$ from OLS is still **unbiased** — it's just the standard errors that are wrong. Compute **HC/"sandwich" standard errors** instead:

- In R base: `lmtest::coeftest(m, vcov = sandwich::vcovHC(m, type = "HC1"))`
- Cleaner: `fixest::feols(accept ~ percent_offer + factor(stakes), data = df, se = "hetero")`

> [!tip] Rule of thumb
> **Always** report robust SEs for LPM. It costs you nothing and repairs the one assumption the model definitionally breaks.

---

## 🎯 Summary — What Lecture 2 Teaches

1. **Binary outcomes** $\Rightarrow$ the OLS fitted value is a conditional probability (under A2).
2. **LPM coefficients** are marginal effects on $P(y=1)$, measured in **percentage points**.
3. **Empirical lesson:** Andersen et al. show fairness preferences survive small stakes but weaken sharply at life-changing amounts.
4. **Drawback 1 (fatal-ish):** $\hat{y}$ can leave $[0,1]$ — motivates logit/probit.
5. **Drawback 2 (fixable):** errors are always heteroskedastic with $\text{Var}(u \mid x) = p(x)(1-p(x))$ — use robust SEs.

---

## 📎 Related Notes

- Previous: [[Lec_01-Introduction & Treatment Effects]]
- Next: [[Lec_03-Logit & Probit Models]] — fixes the $\hat{y} \notin [0,1]$ problem
- Foundational: [[OLS Estimation]], [[Classical Assumptions A1-A5]], [[Hypothesis Testing]]
- Related: [[Heteroskedasticity]], [[Robust Standard Errors]], [[Game Theory]]
