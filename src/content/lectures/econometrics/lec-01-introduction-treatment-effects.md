---
title: Introduction & Treatment Effects
week: 1
semester: 2
course: Applied Econometrics
lecture: "Lecture 01 — Introduction, Treatment Effects & Causal Inference"
instructor: Dr. Aluma Dembo
tags:
  - econometrics
  - causal-inference
  - treatment-effects
  - OLS
  - hypothesis-testing
  - panel-data
  - dictator-game
subject: econometrics
in_scope: true
---
# Introduction & Treatment Effects

> Part of: [[Econometrics]]
> **Lecture 01** — Applied Econometrics, Dr. Aluma Dembo
> Key concepts: [[Causal Inference]], [[Treatment Effects]], [[Panel Data]], [[OLS Estimation]], [[Hypothesis Testing]], [[Dummy Variables]]

---

## 📚 Course Context

> [!info] What this course is about
> Applied Econometrics is about **upgrading your toolkit for causal inference** — not just running regressions, but knowing *what to do and why*. The concurrent Data Science course teaches the *how* in R; this course teaches the *why*.
>
> **Prerequisite:** Introduction to Econometrics. OLS, t-tests, F-tests, and the classical assumptions A1–A5 are assumed.

### Types of Datasets

| Type | Description | Example |
|------|-------------|---------|
| **Cross-sectional** | Sample at a fixed point in time | Demographics & wages of every student this semester |
| **Time series** | Single unit measured over time | Per-capita GDP each year |
| **Panel (longitudinal)** | Same cross-section sampled over time | Your HW grades over the semester |
| **Repeated cross-section** | Different cross-sections over time | Metrics grades from each year's cohort |

> [!tip] Why this distinction matters
> The classical OLS assumptions (especially **A3: independent errors**) assume a fresh cross-section. Panel data breaks this — which is why we'll need fixed effects, clustered standard errors, and similar tools later in the course.

---

## 🎯 The Core Problem: Causal Inference

**Research question framing:** Does variation in X (**exogenous**) cause variation in Y (**endogenous**)?

```
        X  ───────▶  Y
    (exogenous)    (endogenous)
```

For this arrow to be **causal**, we need:
1. X varies randomly / exogenously
2. Variation in Y is the *direct* result of variation in X (not through some other channel)

> [!warning] Correlation ≠ Causation
> OLS gives you a *statistical association*. To interpret $\hat{\beta}_1$ as causal, you need to rule out:
> - **Confounders** — other things varying with X that also affect Y
> - **Reverse causality** — Y causing X
> - **Selection** — non-random assignment of X

---

## 💡 Worked Example: Andreoni & Miller (2002) Dictator Game

> [!example] The Setup
> A **dictator** is given tokens and decides how many to keep vs. pass to an anonymous partner. Tokens are worth points; points convert to money at $0.10/point.
>
> Three of the rounds used:
> - **Round A:** 60 tokens. Hold @ 1pt, Pass @ 1pt. (symmetric)
> - **Round B:** 60 tokens. Hold @ **2pts**, Pass @ 1pt. (self-payout is cheap)
> - **Round C:** 60 tokens. Hold @ 1pt, Pass @ **2pts**. (other-payout is cheap)

### The Data (176 subjects, 528 obs)

| Variable | Meaning |
|----------|---------|
| $choice_i$ | Tokens kept for self (0–60) |
| $price.self_i$ | Points per token to self (1 or 2) |
| $price.other_i$ | Points per token to other (1 or 2) |
| $ratio.price.self_i$ | $price.self_i / price.other_i$ ∈ {0.5, 1, 2} |
| $pct.points.self_i$ | Points to self / total points (0 to 1) |

> [!tip] Why `pct.points.self` instead of `choice`?
> `choice` is measured in tokens, but tokens are worth different points in different rounds. To compare behavior across rounds on a common scale, normalize to the **share of points** allocated to self.

### Findings from the Raw Data (Round A only)

- **40.9%** kept everything for themselves
- **33.5%** divided equally
- Only **2.8%** gave more than they kept
- Mean = 45.4, Median = 50, SD = 14.3

Strong bimodal distribution: most subjects are either pure selfish or pure equal-splitters.

![[Lec01_bimodal_giving.png|560]]

> [!example] Why the mean is misleading here
> The data piles up at **two** points — keep everything (60 tokens) and split equally (30 tokens) — with very few people in between. The mean of 45.4 sits in a *valley* where almost no one actually is. This is exactly why a single summary number can hide the real behaviour, and why we model the *response to price* rather than just averaging tokens.

---

## 🔧 Regression Approaches

### Option 1: Continuous Regressor

$$pct.points.self_i = \beta_0 + \beta_1 \cdot ratio.price.self_i + u_i$$

**Null hypothesis:** $H_0: \beta_1 = 0$ (no effect of relative price on behavior)

**Interpretation:**
- $\beta_1 > 0$: when self-tokens pay more, dictators allocate more to self
- $\beta_1 < 0$: dictators compensate by giving *more* to the other when self-tokens pay more

**Results from R:**
```
Estimate Std. Error t value Pr(>|t|)
(Intercept)       0.53090  0.02382  22.286  <2e-16 ***
ratio.price.self  0.17064  0.01801   9.476  <2e-16 ***
Residual std err: 0.258 on 526 df | R² = 0.146
F-stat: 89.79 on 1 and 526 DF, p-value: < 2.2e-16
```

### 📝 t-test Review

Under classical assumptions A1–A5:

$$\hat{t} = \frac{\hat{\beta}_1 - \beta_1}{s.e.(\hat{\beta}_1)} \sim t_{N-M}$$

For $H_0: \beta_1 = 0$: $\hat{t} = \frac{0.1706}{0.01801} = 9.476$

With 526 d.f., the 5% t-critical value ≈ 1.96. Since $9.476 > 1.96$, **reject $H_0$**.

---

### Option 2: Dummy Variables (Categorical)

Since `ratio.price.self` only takes three values {0.5, 1, 2}, treat it as categorical:

$$pct.points.self_i = \beta_0 + \beta_1 \cdot ratio.price.half_i + \beta_2 \cdot ratio.price.two_i + u_i$$

Where:
- $ratio.price.half_i = 1$ if $ratio.price.self_i = 0.5$, else 0
- $ratio.price.two_i = 1$ if $ratio.price.self_i = 2$, else 0
- **Reference category:** ratio = 1 (captured in $\beta_0$)

**Null hypothesis:** $H_0: \beta_1 = \beta_2 = 0$ (joint test → use F-test)

**Results:**
```
Estimate Std. Error t value Pr(>|t|)
(Intercept)        0.75748  0.01923  39.391 <2e-16 ***
ratio.price.half  -0.17855  0.02720  -6.566 1.25e-10 ***
ratio.price.two    0.09605  0.02720   3.532 0.000449 ***
F-statistic: 52.51 on 2 and 525 DF, p-value: < 2.2e-16
```

**Interpretation:**
- $\hat{\beta}_0 = 0.757$: When ratio = 1 (symmetric), dictators keep ~76% of points
- $\hat{\beta}_1 = -0.179$: When self-tokens are cheap (ratio = 0.5), share to self **drops by 17.9pp**
- $\hat{\beta}_2 = +0.096$: When self-tokens are expensive (ratio = 2), share to self **rises by 9.6pp**

### 📝 F-test Review

For joint hypothesis $H_0: \beta_1 = \beta_2 = 0$:
- Restricted model: $pct.points.self_i = \beta_0 + u_i$
- F-stat is a function of RSS in unrestricted vs. restricted models
- Distributed $F_{q, N-M}$ where $q$ = # restrictions
- Here $q=2$, $N-M=525$ → F-critical ≈ 2.62
- $\hat{F} = 52.5 > 2.62$ → **reject $H_0$** at 5%

---

## ⚠️ The Panel Data Problem

Each of the 176 subjects appears **3 times** (once per round). The 528 observations are **not independent**.

### Which assumptions does this violate?

| Assumption | Statement | Violated? |
|-----------|-----------|-----------|
| **A1** | $\mathbb{E}[u_i] = 0$ | ❌ Not violated |
| **A2** | $\mathbb{E}[u_i \| x] = 0$ | ❌ Not violated |
| **A3** | $\text{Cov}(u_i, u_j) = 0$ for $i \neq j$ | ✅ **Violated** |
| **A4** | $\text{Var}(u_i \| x) = \sigma^2$ | ✅ **Likely violated** (errors correlated within individual) |
| **A5** | Normality of errors | ❌ Not directly |

> [!warning] Consequence
> Standard errors will be **wrong** (usually too small). t-stats and F-stats will look more significant than they really are. We'll fix this later with clustered SEs / fixed effects (week 10).

### Quick-and-dirty fix: Subsample

Randomly pick **1 observation per subject** → 172 obs, all independent.

With fewer obs, $\hat{\beta}_2$ (ratio=2 dummy) is no longer individually significant, but the **joint F-test still rejects** — the effect is real.

> [!tip] Sensitivity via resampling ***
> You can repeat the random sub-sampling 1,000 times and check how the F-stat is distributed. In the data, 99.9% of subsamples have F > critical value → robust conclusion. (Not examinable — general knowledge.)

---

## 🧩 Extending the Analysis: Controlling for Income

The full experiment has **8 rounds** varying both price ratio *and* total income (40, 60, 75, 80, 100 tokens).

```
  ratio.price.self ─┐
                    ├──▶  pct.points.self
  income ───────────┘
```

**Research question:** Does income affect behavior?

### Approach 1: Full data + control variable

$$pct.points.self_{it} = \beta_0 + \beta_1 \cdot ratio.price.self_{it} + \beta_2 \cdot income_{it}$$

$\beta_2$ = marginal effect of +1 token of income, **holding price ratio constant**.

Result: $\hat{\beta}_2 = 0.00246$, highly significant (t ≈ 6.5) but economically small relative to the price effect.

### Approach 2: Subsample where price ratio = 1

Restrict to rounds 7, 8, 11 (all with ratio = 1). Regress `pct.points.self` on `income` alone.

Result: $\hat{\beta}_2 = 0.0003$, **not significant** (p = 0.63). Treating income as categorical gives the same null.

![[Lec01_continuous_vs_dummy.png|560]]

> [!tip] Continuous slope vs. flexible dummies
> The red line is the **continuous** model — it forces one straight-line slope across all three price ratios. The blue diamonds are the **dummy** model, which lets each ratio level take its own value (they're just the group means). Here the points sit close to the line, so the linear assumption is reasonable — but the dummy model is more flexible and would reveal any non-linearity (a level sitting off the line). With only three discrete values, dummies cost little and protect you from mis-specifying the functional form.

> [!success] Key causal-inference lesson
> **The two approaches give similar answers only when the regression is correctly specified.** Controlling (Approach 1) and subsampling (Approach 2) are two ways to isolate the effect of one variable while holding another constant — which strategy you use depends on sample size and which assumption you trust more.

---

## 🎯 Summary — What Lecture 1 Teaches

1. **Applied econometrics = causal inference.** The regression coefficient is only causal if you've ruled out confounders and reverse causality.
2. **Build the causal diagram first.** It tells you what to control for.
3. **Categorical regressors** (dummies) are more flexible than forcing a continuous functional form — use dummies when the variable takes few discrete values.
4. **Panel data breaks A3 & A4.** Naive OLS gives wrong SEs. Quick fix: subsample. Proper fix: comes later.
5. **To isolate the effect of X, either control for confounders explicitly, or subsample to rounds where only X varies.**

---

## 📎 Related Notes

- Next lecture: [[Lec_02-Linear Probability Model (LPM)]]
- Later: [[Lec_03-Logit & Probit Models]] — when the outcome is binary
- Foundational: [[OLS Estimation]], [[Hypothesis Testing]], [[Classical Assumptions A1-A5]]
- Coming up: [[Panel Data]], [[Fixed Effects]], [[Clustered Standard Errors]]
