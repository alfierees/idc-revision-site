---
title: Goodness of Fit & Multicollinearity
week: 8
semester: 1
year: 2
academic_year: "2025-26"
course: Introduction to Econometrics
lecture: "Lecture 08 — Goodness-of-Fit (R-squared) & Multicollinearity"
date: 2026-06-10
tags:
  - intro-econometrics
  - goodness-of-fit
  - r-squared
  - adjusted-r-squared
  - multicollinearity
  - OLS
  - variance-of-estimator
aliases:
  - R-squared and Multicollinearity
  - Lecture 8 Intro Metrics
  - Goodness of Fit
subject: intro-econometrics
in_scope: true
---

# Goodness of Fit & Multicollinearity

> Part of: [[Intro Econometrics]] | Key concepts: [[R-squared]], [[Adjusted R-squared]], [[Total Sum of Squares]], [[Multicollinearity]], [[Variance of the OLS Estimator]], [[F-test]]

---

## 📚 Where this lecture sits

> [!info] The thread from last week
> Last week was about **joint hypothesis testing** with the F-test: build a restricted and an unrestricted model, compare their fit, and ask whether the extra variables in the unrestricted model add anything. This week pushes on the same idea — *how well does a model fit?* — but turns it into a single summary number, ==R-squared==, and then studies a problem that quietly inflates the variance of our estimates: ==multicollinearity==.

The lecture has two halves:

1. **Goodness-of-fit** — defining $R^2$, deriving it from the way OLS splits the variance of $y$, its limitations, and the fix (adjusted $R^2$). Plus a neat re-write of the F-statistic purely in terms of $R^2$.
2. **Multicollinearity** — what happens when the explanatory variables are linearly related to each other. Perfect collinearity makes estimation *impossible*; partial collinearity makes it *imprecise*.

---

## Part 1 — Goodness-of-Fit: the $R^2$ statistic

### The basic idea

Every fitted OLS model splits each observed outcome into two pieces:

$$y_i = \underbrace{\hat{y}_i}_{\text{explained by the model}} + \underbrace{\hat{u}_i}_{\text{residual (unexplained)}}$$

where $\hat{y}_i = \hat\beta_0 + \hat\beta_1 x_{1i} + \dots + \hat\beta_K x_{Ki}$ is the predicted value. A **good** model makes the explained part big and the residual part small. $R^2$ turns "big" and "small" into a percentage.

> [!tip] The intuition in one line
> $R^2$ = the fraction of the variance in $y$ that the model accounts for. The closer to 1, the more of the ups-and-downs in $y$ your $x$'s capture.

### Two algebraic properties of OLS we need

To define $R^2$ cleanly we first need two facts that fall straight out of the OLS first-order conditions (FOCs). Recall that minimising $\sum \hat u_i^2$ gives $K+1$ FOCs:

$$\sum_{i=1}^{n}\hat u_i = 0, \qquad \sum_{i=1}^{n}\hat u_i x_{1i} = 0, \quad \dots, \quad \sum_{i=1}^{n}\hat u_i x_{Ki} = 0$$

The very first one — $\sum \hat u_i = 0$ — comes from the intercept $\hat\beta_0$, and it is the workhorse of everything below.

> [!note] Property (1): the predicted values have the same mean as $y$ ^prop1
> $$\frac{1}{N}\sum_{i} y_i = \frac{1}{N}\sum_i \hat y_i$$
> **Derivation:** sum $y_i = \hat y_i + \hat u_i$ over all $i$ and divide by $N$:
> $$\frac1N\sum y_i = \frac1N\sum \hat y_i + \frac1N\sum \hat u_i.$$
> The last term is zero by the intercept FOC ($\sum \hat u_i = 0$), so $\bar y = \bar{\hat y}$. The regression line passes through the point of sample means.

> [!note] Property (2): predicted values and residuals are uncorrelated ^prop2
> $$\operatorname{cov}(\hat y_i, \hat u_i) = 0$$
> **Derivation sketch:** write $\operatorname{cov}(\hat y_i,\hat u_i) = \frac{1}{N-1}\sum(\hat y_i - \bar{\hat y})\hat u_i$. Substituting $\hat y_i = \hat\beta_0 + \hat\beta_1 x_{1i}+\dots$ and pulling the constants out of the sum, *every* term becomes one of the FOC sums ($\sum \hat u_i = 0$, $\sum x_{ji}\hat u_i = 0$), all of which equal zero. Hence the covariance is exactly zero — by construction, not by luck.

### Partitioning the variance

Because the predicted values and residuals have zero covariance, the variance of $y$ splits cleanly:

$$\operatorname{var}(y_i) = \operatorname{var}(\hat y_i) + \operatorname{var}(\hat u_i) + 2\underbrace{\operatorname{cov}(\hat y_i, \hat u_i)}_{=\,0}$$

Multiplying the sample-variance version through by $N-1$ gives the **sum-of-squares decomposition**:

$$\boxed{\underbrace{\sum_{i}(y_i - \bar y)^2}_{\text{TSS}} = \underbrace{\sum_i(\hat y_i - \bar y)^2}_{\text{MSS}} + \underbrace{\sum_i \hat u_i^2}_{\text{RSS}}}$$

| Term | Name | Meaning |
|------|------|---------|
| **TSS** — Total Sum of Squares | $\sum(y_i-\bar y)^2$ | Total variation in the outcome |
| **MSS** — Model Sum of Squares | $\sum(\hat y_i-\bar y)^2$ | Variation the model **explains** |
| **RSS** — Residual Sum of Squares | $\sum \hat u_i^2$ | Variation the model **leaves unexplained** |

> [!warning] Where Property (1) sneaks in
> The MSS term is centred on $\bar y$, not $\bar{\hat y}$. We are only allowed to do that because Property (1) told us $\bar{\hat y} = \bar y$. Without it, the cross-term wouldn't vanish and the tidy decomposition would fall apart.

### Defining $R^2$

Divide the decomposition through by $\operatorname{var}(y_i)$ (equivalently by TSS):

$$1 = \frac{\operatorname{var}(\hat y_i)}{\operatorname{var}(y_i)} + \frac{\operatorname{var}(\hat u_i)}{\operatorname{var}(y_i)}$$

The first fraction is the explained share — that's $R^2$:

$$\boxed{R^2 = \frac{\operatorname{var}(\hat y_i)}{\operatorname{var}(y_i)} = \frac{\text{MSS}}{\text{TSS}} = 1 - \frac{\text{RSS}}{\text{TSS}}}$$ ^r-squared-def

Because the two shares add to 1 and both are non-negative, $0 \le R^2 \le 1$ and we can read it as a percentage: *how much of the variance in the dependent variable the model explains.*

> [!example] Reading $R^2$ in practice
> **Income–consumption model:** $R^2 = 0.983$ → income explains **98.3%** of the variance in consumption; only 1.7% is unexplained.
> **Housing prices** (`price ~ bdrms + sqrft`): $R^2 = 0.632$ → area and bedrooms explain **63.2%** of the variance in apartment prices; 36.8% is left to everything else.

```
Call: lm(formula = price ~ bdrms + sqrft, data = mydata)
Coefficients:
              Estimate Std. Error t value Pr(>|t|)
(Intercept) -19315.00   31046.62  -0.622    0.536
bdrms        15198.19    9483.52   1.603    0.113
sqrft          128.44      13.82   9.291  1.4e-14 ***
Multiple R-squared:  0.6319,  Adjusted R-squared:  0.6233
F-statistic: 72.96 on 2 and 85 DF,  p-value: < 2.2e-16
```

### The boundary cases

> [!info] When is $R^2 = 0$ or $R^2 = 1$?
> - $R^2 = 1$ ⟺ **all residuals are zero**, i.e. every point lies exactly on the regression surface. Random error always exists, so this never truly happens — not even if you observed the entire population.
> - $R^2 = 0$ ⟺ the model has **no explanatory power at all**: the $x$'s tell you nothing about $y$. A model without meaning.

### Why $R^2$ can mislead

> [!warning] $R^2$ depends on the variance of the outcome
> $R^2$ is sensitive to how spread-out $y$ is. If $\operatorname{var}(y)$ is large, $R^2$ can look *small* even when the model fits well; if $y$ is a smooth fiscal aggregate it can look *huge*.
> - **Wage models** rarely break ~50% — individual wages are noisy.
> - **Fiscal series** (GDP, consumption, investment, demand) routinely exceed 90% — they move slowly and predictably.
>
> ⟹ You may only compare $R^2$ across models if the **outcome variable is identical**. A model of $y$ and a model of $\log y$ are *not* comparable on $R^2$.

---

## Adjusted $R^2$ — comparing models of different size

> [!warning] The mechanical flaw in $R^2$
> Adding **any** regressor — even pure noise — weakly *increases* $R^2$. Why? The new variable can only shrink the RSS (OLS will set its coefficient to 0 in the worst case, never making the fit worse). So $R^2$ rewards throwing variables at the model, which is not what we want.

The fix penalises the model for each extra parameter, using degrees of freedom:

$$\boxed{\bar{R}^2 = 1 - \frac{\text{RSS}/(N-K-1)}{\text{TSS}/(N-1)} = 1 - (1-R^2)\,\frac{N-1}{N-K-1}}$$ ^adj-r-squared

> [!tip] How to read it
> Adjusted $R^2$ rises **only if a new variable improves fit by more than would be expected from a random regressor**. If you add junk, $\bar R^2$ *falls* even though $R^2$ rises. It is the right tool for choosing between models with **different numbers of explanatory variables**.

> [!example] Simulation: adding a noise variable
> True model $y = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + u$. Now add an unrelated noise variable $Z \sim N(0,5)$:
> - $R^2$ **increases** (mechanically, as always)
> - Adjusted $R^2$ **decreases** — correctly flagging that $Z$ added nothing.

> [!warning] Limits that apply to *both* measures
> Neither $R^2$ nor $\bar R^2$ can compare models with **different outcome variables** or models with **no intercept**. Adjusted $R^2$ buys you only one extra thing: comparison across **different numbers of regressors**.

| | $R^2$ | Adjusted $R^2$ |
|---|---|---|
| Range | $[0,1]$ | Can be negative |
| Adding a regressor | Never decreases | Decreases if the variable is useless |
| Compare different # of regressors? | ❌ No | ✅ Yes |
| Compare different outcome variables? | ❌ No | ❌ No |
| Compare models without intercept? | ❌ No | ❌ No |
| Best use | Single-model fit summary | Model selection |

---

## The F-statistic, rewritten in terms of $R^2$

The F-test for $q$ restrictions started life as a ratio of residual sums of squares:

$$F = \frac{(\text{RSS}_R - \text{RSS}_{UR})/q}{\text{RSS}_{UR}/(N-M)}$$

Divide numerator and denominator by $(N-1)\operatorname{var}(Y)$ and use $\dfrac{\text{RSS}}{N-1} = \operatorname{var}(\hat u_i)$ together with $\dfrac{\operatorname{var}(\hat u_i)}{\operatorname{var}(Y)} = 1 - R^2$:

$$\boxed{F = \frac{(R^2_{UR} - R^2_R)/q}{(1 - R^2_{UR})/(N-M)}}$$ ^f-in-r2

> [!warning] The hidden assumption
> This clean form assumes $\operatorname{var}(Y)$ is **identical** in the restricted and unrestricted models. That holds when the restriction is $\beta_j = 0$ (same dependent variable), but **fails** for restrictions of the form $H_0: \beta_j = b$ with $b \ne 0$ — there you must go back to the RSS version.

### Testing whether the whole model is significant

A special case: does the model as a whole explain *anything*? Restrict every slope to zero.

- **Unrestricted:** $y_i = \beta_0 + \beta_1 x_1 + \dots + \beta_k x_k + u_i$
- **Restricted:** $y_i = \beta_0 + u_i$ (so $R^2_R = 0$)
- **Null:** $H_0: \beta_1 = \beta_2 = \dots = \beta_k = 0$

Plugging $R^2_R = 0$ into the formula:

$$F = \frac{R^2_{UR}/(M-1)}{(1-R^2_{UR})/(N-M)}$$

This is exactly the **F-statistic printed at the bottom of every `lm` summary**. A small p-value means at least one regressor matters.

> [!example] Wage model — overall significance
> `ln_wage ~ s + exp + IQ_test + age + hours`: $R^2 = 0.301$, F = 46.02 on 5 and 534 df, p < 2.2e-16. The model is jointly highly significant — reject $H_0$ that none of the variables explain wages.

---

## Part 2 — Multicollinearity

==Multicollinearity== is a **linear relationship among the explanatory variables themselves**. It comes in two flavours, with very different consequences.

### Perfect multicollinearity — estimation is impossible

> [!warning] Definition
> One regressor is an **exact linear function** of one or more others, e.g. $x_1 = 5x_2$, or $x_1 = -x_2$, or $x_1 = x_2 + x_3 + x_4$. Then OLS **cannot** be estimated.

Crucially, this is about *linear* dependence only. Variables can be strongly — even perfectly — correlated in a **non-linear** way and still be fine:

- $\operatorname{cor}(x_1, x_2) = 0.57$ → fine
- $x_2 = x_1^2$ → fine (a quadratic is not a *linear* transformation)

> [!example] Where it really comes from: misspecification
> Perfect collinearity is almost always a modelling mistake, such as:
> - the same variable entered twice in different units (age in months **and** age in years),
> - two variables linked by an exact identity (age in years **and** year of birth).
>
> R's `lm` silently drops one of the offending variables and reports `NA`:
> ```
> Coefficients: (1 not defined because of singularities)
>             Estimate Std. Error t value  Pr(>|t|)
> educ        0.058048   0.006694   8.672   < 2e-16 ***
> age         0.024560   0.004878   5.035   6.2e-07 ***
> y_birth           NA         NA      NA        NA
> ```

> [!note] Why it breaks — the FOC argument ^perfect-collinearity-proof
> Suppose $x_1 = -x_2$. The OLS FOCs include
> $$\sum \hat u_i x_{1i} = 0 \quad\text{and}\quad \sum \hat u_i x_{2i} = 0.$$
> Substituting $x_{1i} = -x_{2i}$ into the first gives $-\sum \hat u_i x_{2i} = 0$ — which is just the **negative of the second FOC**, carrying no new information. We are left with $K$ independent equations for $K+1$ unknowns: an underdetermined system with **infinitely many solutions**. No unique $\hat\beta$ exists.

### Partial multicollinearity — estimation is possible but imprecise

When the $x$'s are correlated but **not perfectly**, none of the Gauss–Markov assumptions break. OLS stays **BLUE** (unbiased, minimum variance among linear unbiased estimators). The catch:

> [!warning] The cost of partial collinearity
> The estimator's variance — though still minimal in the BLUE sense — is **larger** the more the regressors are correlated. Bigger variance ⟹ bigger standard errors ⟹ smaller t-stats ⟹ harder to find anything "significant", even when the true effect is real.

#### The variance-of-the-estimator formula

In a **single**-variable regression:

$$\operatorname{var}(\hat\beta_1) = \frac{\sigma_u^2}{\sum_i (x_{1i} - \bar x_1)^2}$$

In a **multivariate** regression the formula gains one extra factor:

$$\boxed{\operatorname{var}(\hat\beta_j) = \frac{\sigma_u^2}{(1 - R_j^2)\sum_i (x_{ji} - \bar x_j)^2}}$$ ^var-beta-j

where $R_j^2$ is the $R^2$ from regressing $x_j$ on **all the other** explanatory variables:

$$x_{ji} = \tilde\beta_0 + \tilde\beta_1 x_{1i} + \dots + \tilde\beta_{k-1} x_{ki} + \tilde u_i \quad(\text{omitting } x_j)$$

> [!tip] How to read each piece of the formula
> - $\sigma_u^2$ ↑ → more noise in $y$ → larger variance.
> - $\sum(x_{ji}-\bar x_j)^2$ ↑ → **more spread** in the regressor → *smaller* variance (more leverage to identify the slope).
> - $R_j^2$ ↑ → $x_j$ is well explained by the other regressors (high collinearity) → $(1-R_j^2)$ shrinks → variance **explodes**. This is the multicollinearity penalty. $1/(1-R_j^2)$ is the **Variance Inflation Factor**.

> [!example] Activity 8 — the two extremes of $R_j^2$
> Model $y_i = \beta_0 + \beta_1 x_{1i} + \beta_2 x_{2i} + u_i$.
> - **$R_1^2 = 1$:** $x_1$ is a perfect linear function of $x_2$ — *perfect* multicollinearity. $(1-R_1^2)=0$, so $\operatorname{var}(\hat\beta_1)$ is **undefined** (division by zero). This matches the "impossible to estimate" result above.
> - **$R_1^2 = 0$:** zero collinearity between $x_1$ and $x_2$. The variance of $\hat\beta_1$ is **the same** as in the simple regression $y_i = \beta_0 + \beta_1 x_{1i} + u_i$ (only the error's standard deviation may differ).

> [!info] The classic bias–variance / fit–precision trade-off
> Adding regressors tends to **raise $R_j^2$** for the variables already in the model (they get more correlated company), so each estimate's variance climbs and its significance falls — even as the overall model fit ($R^2$) improves. More variables = better fit but noisier individual coefficients.

#### Rule of thumb and diagnosis

> [!tip] Spotting partial multicollinearity
> $R_j^2$ lives in $[0,1]$. Exactly 0 or exactly 1 are both rare. The practical danger zone is **$R_j^2$ close to 1** — rule of thumb **> 0.75–0.8**. Diagnosis is cheap: **before** running the regression, inspect the **correlation matrix** of the explanatory variables.

---

## 💡 Worked example: parental education in a wage regression

> [!example] The model
> $$\ln(\text{wage}_i) = \beta_0 + \beta_E\,\text{educ}_i + \beta_A\,\text{age}_i + \beta_X\,\text{exper}_i + \beta_Q\,\text{IQ}_i + \beta_M\,\text{meduc}_i + \beta_F\,\text{feduc}_i + u_i$$
> where `meduc`/`feduc` are mother's/father's years of schooling. Question: *does family background affect wages?*

**Step 1 — the full regression.** Both parental-education coefficients look **insignificant**:

```
             Estimate Std. Error t value Pr(>|t|)
educ         0.042323   0.009237   4.582  5.5e-06 ***
age          0.016799   0.005709   2.943  0.00337 **
exper        0.015232   0.004584   3.323  0.00094 ***
IQ           0.005082   0.001188   4.279  2.2e-05 ***
meduc        0.017660   0.009823   1.798  0.07267 .
feduc        0.001900   0.009325   0.204  0.83859
Multiple R-squared:  0.1965,  Adjusted R-squared:  0.1891
```

It is tempting to drop both and conclude "family background doesn't matter." **Don't** — test them jointly first.

**Step 2 — the joint F-test.** $H_0:\beta_M = \beta_F = 0$, via `anova(full, restricted)`:

```
Model 1: lwage ~ educ + age + exper + IQ + meduc + feduc
Model 2: lwage ~ educ + age + exper + IQ
  Res.Df    RSS Df Sum of Sq      F  Pr(>F)
1    655 90.381
2    657 92.283 -2   -1.9017 6.8908 0.00109 **
```

The joint test **rejects** at 1%. So we **cannot** remove both — together they matter, even though neither is individually significant.

> [!warning] The t-test vs F-test contradiction — and its cause
> Each *individual* t-test says "insignificant"; the *joint* F-test says "significant." This is the textbook fingerprint of **multicollinearity**. The correlation matrix reveals why:
> ```
>        feduc meduc
> feduc   1.00  0.88
> meduc   0.88  1.00
> ```
> Mother's and father's education are correlated at **0.88**. Each inflates the other's standard error (via the $1/(1-R_j^2)$ factor), drowning their individual t-stats — yet jointly they clearly explain wages.

**Step 3 — confirm by dropping one.** Remove `feduc` and `meduc` jumps to significant; remove `meduc` and `feduc` jumps to significant. Each only looked weak because of the *other's* presence.

> [!success] The practical conclusion
> Don't include two near-identical regressors. Use **only `meduc`, or only `feduc`, or their average** as a single "parental education" measure. The clean result: **each year of a parent's education raises the child's wage by ~2%.**

---

## 🧪 Practice exam: the income–consumption model

> [!example] Setup
> $$\text{CONS}_i = \beta_0 + \beta_1\,\text{INC}_i + u_i$$
> 34 yearly observations. $\overline{\text{INC}} = 70{,}941.9$, $\overline{\text{CONS}} = 35{,}956.1$. Estimates: $\hat\beta_0 = -2189\ (se\ 1377)$, $\hat\beta_1 = 0.8155\ (se\ 0.01914)$, $R^2 = 0.983$, $df = 32$.

**Q1 — Predicted consumption at average income?**
By Property (1), the OLS line passes through the sample means. So at $\text{INC} = \overline{\text{INC}}$ the prediction is exactly $\overline{\text{CONS}} = \mathbf{35{,}956.09}$ — no arithmetic needed.

**Q2 — Does the line pass through the origin?** $H_0:\beta_0 = 0$ vs $H_1:\beta_0\ne 0$.
$$\hat t = \frac{-2189}{1377} = -15.9, \qquad t_{crit}(df{=}30,\,5\%,\text{two-sided}) = 2.042.$$
$|-15.9| > 2.042$ ⟹ **reject** $H_0$: the intercept is significantly non-zero, so the line does **not** pass through the origin.

**Q3 — Is the marginal propensity to consume below 90%?** One-sided: $H_0:\beta_1 \ge 0.9$ vs $H_1:\beta_1 < 0.9$.
$$\hat t = \frac{0.8155 - 0.9}{0.01914} = -4.415, \qquad t_{crit}(\text{one-sided},\,5\%) = 1.697.$$
$-4.415 < -1.697$ ⟹ **reject** $H_0$: the MPC is significantly **less than 0.9**.

**Q4 — Re-estimate in NIS instead of USD** (exchange rate 3.5 NIS/USD), so **both** variables are scaled by 3.5: $\text{CONS}\_1 = \alpha_0 + \alpha_1\,\text{INC}\_1 + u$.

> [!tip] Scaling both sides leaves the slope (and its se) unchanged
> Multiplying $x$ and $y$ by the *same* constant $c$ cancels in the slope: $\hat\alpha_1 = \dfrac{\operatorname{cov}(cy, cx)}{\operatorname{var}(cx)} = \dfrac{c^2\operatorname{cov}(y,x)}{c^2\operatorname{var}(x)} = \hat\beta_1$.
> So $\hat\alpha_1 = \hat\beta_1 = \mathbf{0.8155}$ and $se(\hat\alpha_1) = se(\hat\beta_1) = \mathbf{0.01914}$ — **both identical**. (Only the *intercept* rescales: $\hat\alpha_0 = 3.5\,\hat\beta_0$.)

---

## 📝 Summary

1. **OLS splits every $y_i$** into a predicted part $\hat y_i$ and a residual $\hat u_i$. Two FOC-driven properties — $\bar{\hat y} = \bar y$ and $\operatorname{cov}(\hat y,\hat u)=0$ — let us split the variance: **TSS = MSS + RSS**.
2. **$R^2 = \text{MSS}/\text{TSS} = 1 - \text{RSS}/\text{TSS}$** is the share of variance explained, $\in[0,1]$. It depends on $\operatorname{var}(y)$, so only compare it across models with the **same outcome**.
3. **$R^2$ always rises when you add a variable**, even noise. **Adjusted $R^2$** penalises extra parameters and is the right tool for comparing models of **different size** (but still not different outcomes / no-intercept models).
4. **The F-statistic** can be written purely in $R^2$: $F = \frac{(R^2_{UR}-R^2_R)/q}{(1-R^2_{UR})/(N-M)}$, valid when $\operatorname{var}(Y)$ is unchanged. Setting $R^2_R=0$ gives the **overall model significance** test reported by `lm`.
5. **Perfect multicollinearity** (exact linear dependence) makes the FOCs redundant → no unique solution → estimation impossible. It's almost always a **misspecification**.
6. **Partial multicollinearity** keeps OLS unbiased but **inflates variance** via $\operatorname{var}(\hat\beta_j) = \frac{\sigma_u^2}{(1-R_j^2)\sum(x_{ji}-\bar x_j)^2}$. High $R_j^2$ (rule of thumb > 0.75–0.8) → tiny t-stats. The tell-tale sign is **insignificant t-tests but a significant joint F-test** (the parental-education example). Diagnose with the correlation matrix; fix by combining or dropping redundant regressors.

---

## 📎 Related Notes

- Previous: [[Lec_07-Multiple Hypothesis Tests]] — joint hypotheses and the F-test that this lecture re-expresses through $R^2$
- Next: [[Lec_09-Model Misspecification & Quadratics]], then [[Lec_10-Dummy Variables]] and [[Lec_12-Heteroskedasticity]]
- Foundational: [[F-test]], [[OLS Estimation]], [[Variance of the OLS Estimator]], [[Gauss-Markov Theorem]]
- Concepts: [[R-squared]], [[Adjusted R-squared]], [[Multicollinearity]], [[Total Sum of Squares]]
- Hub: [[Intro Econometrics]]
