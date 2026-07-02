---
title: Logit & Probit Models
week: 3
semester: 2
course: Introduction to Econometrics
lecture: "Lecture 03 — Women's Labor Supply: Discrete Choice Models"
tags:
  - econometrics
  - discrete-choice
  - logit
  - probit
  - MLE
  - binary-outcome
  - marginal-effects
  - hypothesis-testing
subject: econometrics
in_scope: true
---
# Logit & Probit Models

> Part of: [[Econometrics]]
> **Lecture 03** — Women's Labor Supply: Discrete Choice Models
> Builds on: [[Linear Probability Model]], [[OLS Estimation]], [[Hypothesis Testing]], [[Heteroskedasticity]]
> Key new concepts: [[Logit Model]], [[Probit Model]], [[Maximum Likelihood Estimation]], [[Likelihood Ratio Test]], [[Marginal Effects]]

---

## 📚 1. The Problem: Why Do We Need Logit/Probit?

When our dependent variable is **binary** (0 or 1) — like "employed or not" — we're predicting a **probability**. The simplest approach is the [[Linear Probability Model]] (LPM), which just runs [[OLS Estimation|OLS]] on the binary outcome:

**LPM:**
$$y_i = \beta_0 + \beta_1 x_{1i} + \cdots + \beta_k x_{ki} + u_i \quad \text{where } y_i \in \{0, 1\}$$

The predicted value $\hat{y}_i$ is interpreted as the estimated probability that $y = 1$:

$$\hat{y}_i = \hat{\mathbb{P}}(y_i = 1 \mid \mathbf{x}_i)$$

And each coefficient $\beta_j$ is a **[[Marginal Effects|marginal effect]]** — the change in probability from a one-unit change in $x_j$:

$$\beta_j = \frac{\partial \mathbb{P}(y=1 \mid \mathbf{x})}{\partial x_j}$$

### 🔧 LPM Downsides (why we move to Logit/Probit)

**Downside 1: Predicted probabilities can go outside [0, 1].**
Since LPM is just a straight line, nothing stops it from predicting $\hat{y} = 1.3$ or $\hat{y} = -0.2$. Those aren't valid probabilities.

**Downside 2: The [[Marginal Effects|marginal effect]] is constant.**
In LPM, one extra year of education always changes the probability of employment by exactly the same amount, regardless of whether you already have 5 years or 20 years. In reality, the effect should depend on where you are — if you're already at 95% probability, one more year of school can't add another 5 percentage points.

**Downside 3: [[Heteroskedasticity]] is guaranteed.**
Because $y$ is binary, the variance of the error depends on $\mathbf{x}$, so we always need robust standard errors.

> [!tip] Big Picture
> Logit and Probit fix downsides 1 and 2 by wrapping the linear prediction in a function $G(\cdot)$ that squeezes everything into the (0, 1) range. This also means the marginal effects are no longer constant — they depend on where you are on the curve.

---

## 📚 2. Dot-Product Notation

Before diving into the models, the presentation introduces shorthand notation that makes everything cleaner:

$$\mathbf{x}'\boldsymbol{\beta} \equiv \beta_0 + \beta_1 x_1 + \cdots + \beta_k x_k$$

- $\boldsymbol{\beta}$ is the vector of parameters: $(\beta_0, \beta_1, \ldots, \beta_k)$
- $\mathbf{x}$ is the vector: $(1, x_1, \ldots, x_k)$
- $\mathbf{x}'\boldsymbol{\beta}$ can be any number from $-\infty$ to $+\infty$

So the LPM is simply: $y = \mathbf{x}'\boldsymbol{\beta} + u$

This notation is used throughout everything that follows — whenever you see $\mathbf{x}'\boldsymbol{\beta}$, just think "the linear combination of all the x's and their coefficients."

---

## 📚 3. The Logit and Probit Models

Both models take the same general form:

$$\mathbb{P}(y = 1 \mid \mathbf{x}) = G(\mathbf{x}'\boldsymbol{\beta})$$

The function $G(\cdot)$ takes the linear prediction (which can be any number) and maps it to a probability between 0 and 1. The **only difference** between [[Logit Model|Logit]] and [[Probit Model|Probit]] is which $G$ function they use.

### 🔧 Logit Model

Uses the CDF of the **logistic distribution**:

$$G(\mathbf{x}'\boldsymbol{\beta}) = \frac{\exp(\mathbf{x}'\boldsymbol{\beta})}{1 + \exp(\mathbf{x}'\boldsymbol{\beta})}$$

### 🔧 Probit Model

Uses the CDF of the **standard normal distribution** (Φ):

$$G(\mathbf{x}'\boldsymbol{\beta}) = \Phi(\mathbf{x}'\boldsymbol{\beta}) = \int_{-\infty}^{\mathbf{x}'\boldsymbol{\beta}} \varphi(v) \, dv$$

where $\varphi(v) = (2\pi)^{-1/2} \exp(-v^2 / 2)$ is the standard normal PDF.

### 🎯 Properties of G (both models share these)

1. $G$ is **increasing** — higher $\mathbf{x}'\boldsymbol{\beta}$ always means higher probability
2. $G(\mathbf{x}'\boldsymbol{\beta}) \to 0$ as $\mathbf{x}'\boldsymbol{\beta} \to -\infty$
3. $G(\mathbf{x}'\boldsymbol{\beta}) \to 1$ as $\mathbf{x}'\boldsymbol{\beta} \to +\infty$
4. **Steepest slope at $\mathbf{x}'\boldsymbol{\beta} = 0$** (where probability = 0.5)
5. **Symmetric:** $G(\mathbf{x}'\boldsymbol{\beta}) = 1 - G(-\mathbf{x}'\boldsymbol{\beta})$

Both produce an S-shaped curve. In practice, Logit and Probit give very similar results. The key is that they both solve the LPM problems: predictions are always valid probabilities, and the effect of a variable depends on where you are on the curve.

![[Lec03_scurve.png|580]]

> [!example] Why the S-shape fixes everything
> The logit and probit curves (blue and purple) are almost on top of each other — flattening out as they approach 0 and 1 so a probability can *never* escape the unit interval. The LPM line (red) just keeps going, sailing into the shaded "impossible" zones. The curves are steepest at $\mathbf{x}'\boldsymbol{\beta}=0$ (where $P=0.5$), which is exactly why the marginal effect is largest in the middle and smallest at the extremes.

---

## 💡 Worked Example 1: Why the S-shape Matters

Imagine a simple model: $\mathbb{P}(\text{employed} = 1) = G(\beta_0 + \beta_1 \cdot \text{schooly})$

Suppose $\beta_0 = -2$ and $\beta_1 = 0.2$ (using [[Logit Model|Logit]]).

| Years of education | $\mathbf{x}'\boldsymbol{\beta}$ | $G(\mathbf{x}'\boldsymbol{\beta})$ = Predicted Prob | Change from prev |
|---|---|---|---|
| 5 | $-2 + 0.2(5) = -1.0$ | $\frac{e^{-1}}{1+e^{-1}} = 0.269$ | — |
| 10 | $-2 + 0.2(10) = 0.0$ | $\frac{e^{0}}{1+e^{0}} = 0.500$ | +0.231 |
| 15 | $-2 + 0.2(15) = 1.0$ | $\frac{e^{1}}{1+e^{1}} = 0.731$ | +0.231 |
| 20 | $-2 + 0.2(20) = 2.0$ | $\frac{e^{2}}{1+e^{2}} = 0.881$ | +0.150 |
| 25 | $-2 + 0.2(25) = 3.0$ | $\frac{e^{3}}{1+e^{3}} = 0.953$ | +0.072 |

Notice: the same 5-year jump in education produces a **smaller probability change** once you're already at a high probability. That's the whole point — the effect **diminishes at the extremes**. An LPM would have said +0.231 every time, eventually predicting probabilities above 1.

![[Lec03_diminishing_me.png|580]]

> [!tip] The staircase makes it concrete
> Each green bar is the probability gain from five more years of school. Going 5→10 and 10→15 both add +0.231 (you're climbing the steep middle of the curve), but 20→25 adds only +0.072 — you've reached the flat top where there's little room left to grow. This non-constant step is the marginal effect $g(\mathbf{x}'\boldsymbol{\beta})\cdot\beta$ in action.

---

## 📚 4. Estimation: [[Maximum Likelihood Estimation]] (MLE)

### Why not [[OLS Estimation|OLS]]?

OLS works by minimizing the sum of squared residuals, but this relies on the model being **linear in the parameters**. In Logit/Probit, $\hat{y}_i = G(\beta_0 + \beta_1 x_{1i} + \cdots)$ — the $G$ function wraps around the parameters, so the model is **non-linear**. We cannot use OLS.

### The MLE idea (general intuition)

Instead of minimizing squared errors, MLE asks: **what parameter values make the data we actually observed most likely?**

**Step 1:** For each observation, write down the probability of observing that particular $y_i$ given the x's and the parameters:

$$f(y_i \mid \mathbf{x}_i; \boldsymbol{\beta}) = G(\mathbf{x}_i'\boldsymbol{\beta})^{y_i} \cdot [1 - G(\mathbf{x}_i'\boldsymbol{\beta})]^{1-y_i}$$

This is clever — when $y_i = 1$, this equals $G(\mathbf{x}_i'\boldsymbol{\beta})$, and when $y_i = 0$, this equals $1 - G(\mathbf{x}_i'\boldsymbol{\beta})$. So it always gives the probability of what actually happened.

**Step 2:** Assuming observations are independent, the likelihood of the entire sample is the product:

$$\mathcal{L}(\boldsymbol{\beta}) = \prod_{i=1}^{n} f(y_i \mid \mathbf{x}_i; \boldsymbol{\beta})$$

**Step 3:** Take the log (products become sums, which are easier to work with):

$$\log \mathcal{L}(\boldsymbol{\beta}) = \sum_{i=1}^{n} \left[ y_i \cdot \log G(\mathbf{x}_i'\boldsymbol{\beta}) + (1 - y_i) \cdot \log(1 - G(\mathbf{x}_i'\boldsymbol{\beta})) \right]$$

**Step 4:** Find the $\hat{\boldsymbol{\beta}}$ that maximizes this (done numerically by computer — the R command is `glm`).

> [!tip] Big Picture
> You don't need to be able to derive the MLE by hand. The key takeaway is: OLS doesn't work here because the model is non-linear, so we use MLE instead, which finds the parameters that make the observed data most probable. In R, `glm` handles this for you.

---

## 📚 5. Interpreting Coefficients & [[Marginal Effects]]

This is the most important section for practical use.

### ⚠️ Key rule: Raw coefficients ≠ marginal effects

In LPM, the coefficient $\beta_j$ directly tells you the [[Marginal Effects|marginal effect]]. In Logit/Probit, **it does not**. The raw coefficients only tell you the **direction** (sign) of the effect, not the magnitude.

### 🔧 The Marginal Effect Formula

For a continuous variable $x_j$:

$$\frac{\partial \mathbb{P}(y = 1 \mid \mathbf{x})}{\partial x_j} = g(\mathbf{x}'\boldsymbol{\beta}) \cdot \beta_j$$

where $g(z) = dG(z)/dz$ is the **derivative** of $G$ — i.e., the PDF corresponding to the CDF $G$.

- **[[Logit Model|Logit]]:** $g$ is the logistic PDF → in R: `dlogis()`
- **[[Probit Model|Probit]]:** $g$ is the standard normal PDF → in R: `dnorm()`

### Why does the marginal effect depend on x?

Because $g(\mathbf{x}'\boldsymbol{\beta})$ is a "scaling factor" that depends on where you are on the S-curve. At the middle of the curve ($\mathbf{x}'\boldsymbol{\beta} \approx 0$), the slope is steepest, so $g$ is largest and the marginal effect is biggest. At the extremes, $g$ is small, so the marginal effect shrinks.

### 📝 Standard protocol: evaluate at the mean

Since the marginal effect depends on all x values, we need to pick a specific point to evaluate it. The standard approach is to use the **sample averages** $\bar{x}_1, \bar{x}_2, \ldots, \bar{x}_k$:

$$\text{Marginal effect of } x_j = g(\hat{\beta}_0 + \hat{\beta}_1 \bar{x}_1 + \cdots + \hat{\beta}_k \bar{x}_k) \cdot \hat{\beta}_j$$

This gives the marginal effect **for the average person in the sample**.

---

## 💡 Worked Example 2: Computing Marginal Effects (using presentation data)

The presentation gives us the [[Probit Model|Probit]] coefficient estimates for women's employment:

| Variable | Probit $\hat{\beta}$ |
|---|---|
| Intercept | (not shown, but implied) |
| schooly | 0.073 |
| chld0_17 | -0.086 |
| arab | -1.096 |
| married | -0.042 |
| age25_34 | 0.346 |
| age35_44 | 0.578 |
| age45_54 | 0.441 |
| age55_65 | -0.163 |

The presentation shows that the **[[Marginal Effects|marginal effect]] of schooly in the Probit model = 0.025**.

Let's verify the logic. Suppose that when we plug in the sample averages, we get $\mathbf{\bar{x}}'\hat{\boldsymbol{\beta}} = z^*$. Then:

$$\text{ME of schooly} = \varphi(z^*) \cdot \hat{\beta}_{\text{schooly}} = \varphi(z^*) \cdot 0.073 = 0.025$$

Solving: $\varphi(z^*) = 0.025 / 0.073 = 0.342$

Since the standard normal PDF peaks at $\varphi(0) = 0.399$, a value of 0.342 is consistent with $z^*$ being somewhat away from zero — meaning the average woman in the sample has a predicted probability somewhat above or below 0.5. This all checks out.

### 📝 Step-by-step recipe for computing marginal effects:

1. **Get the coefficient estimates** $\hat{\beta}_0, \hat{\beta}_1, \ldots, \hat{\beta}_k$ from R output
2. **Calculate sample means** of all explanatory variables: $\bar{x}_1, \bar{x}_2, \ldots, \bar{x}_k$
3. **Compute the linear prediction at the mean:** $\mathbf{\bar{x}}'\hat{\boldsymbol{\beta}} = \hat{\beta}_0 + \hat{\beta}_1 \bar{x}_1 + \cdots + \hat{\beta}_k \bar{x}_k$
4. **Evaluate the scaling factor:**
   - Probit: $g = \varphi(\mathbf{\bar{x}}'\hat{\boldsymbol{\beta}})$ using `dnorm()` in R
   - Logit: $g = $ `dlogis()` evaluated at $\mathbf{\bar{x}}'\hat{\boldsymbol{\beta}}$
5. **Multiply:** Marginal effect of $x_j$ = $g \times \hat{\beta}_j$

### Comparing marginal effects across all three models

From the presentation (slide 35), evaluated at sample means:

| Variable | LPM | Logit | Probit |
|---|---|---|---|
| schooly | 0.021 | 0.032 | 0.025 |
| chld0_17 | -0.026 | -0.038 | -0.029 |
| arab | -0.397 | -0.444 | -0.376 |
| married | -0.011 | -0.018 | -0.014 |
| age25_34 | 0.107 | 0.149 | 0.119 |
| age35_44 | 0.167 | 0.248 | 0.198 |
| age45_54 | 0.128 | 0.186 | 0.151 |
| age55_65 | -0.055 | -0.068 | -0.056 |

Key observations:
- All three models agree on the **direction** of every effect
- The **magnitudes** are similar but not identical — Logit tends to give slightly larger marginal effects, Probit is in between
- In LPM, the marginal effect IS the coefficient; in Logit/Probit, the marginal effect is $g(\mathbf{\bar{x}}'\hat{\boldsymbol{\beta}}) \cdot \hat{\beta}_j$
- **You CAN compare marginal effects across models** (unlike raw coefficients)

### 💡 Interpreting the marginal effects (in plain English):

- **schooly = 0.025 (Probit):** For the average woman in the sample, one additional year of education increases the probability of employment by 2.5 percentage points.
- **arab = -0.376 (Probit):** At the sample averages, an Arab woman is 37.6 percentage points less likely to be employed than a non-Arab woman, holding all else equal.
- **chld0_17 = -0.029 (Probit):** Each additional child under 17 decreases the probability of employment by 2.9 percentage points for the average woman.

---

## 📚 6. Coefficients vs. Marginal Effects — Why You Can't Compare Raw Coefficients

This is a really important conceptual point. Look at the raw coefficients:

| Variable | LPM | Logit | Probit |
|---|---|---|---|
| schooly | 0.021 | 0.128 | 0.073 |
| arab | -0.397 | -1.794 | -1.096 |

The Logit coefficient for schooly (0.128) is 6x larger than the LPM coefficient (0.021). Does that mean Logit thinks education matters more? **No!**

The reason is that in LPM, the coefficient IS the [[Marginal Effects|marginal effect]] ($\beta_j$ directly). But in Logit/Probit, the coefficient gets **multiplied by the scaling factor** $g(\cdot)$ before it becomes a marginal effect. The scaling factor is always less than 1, which shrinks it back down. The different models are on different "scales."

> [!warning] Rule
> Compare **signs** across models. Compare **[[Marginal Effects|marginal effects]]** across models. Never compare raw coefficient **magnitudes** across models.

---

## 📚 7. [[Hypothesis Testing]]: The [[Likelihood Ratio Test]] (LR Test)

In [[OLS Estimation|OLS]], we use the [[F-test]] for joint hypothesis testing. In Logit/Probit ([[Maximum Likelihood Estimation|MLE]]), we use the **[[Likelihood Ratio Test]]** instead.

### 🔧 The LR Test Statistic

$$LR = 2[\log \mathcal{L}_{UR} - \log \mathcal{L}_{R}]$$

where:
- $\log \mathcal{L}_{UR}$ = log-likelihood of the **unrestricted** model (full model)
- $\log \mathcal{L}_{R}$ = log-likelihood of the **restricted** model (under $H_0$)

The LR statistic follows a **chi-squared distribution** with $q$ degrees of freedom, where $q$ is the number of restrictions:

$$LR \sim \chi^2(q)$$

If $LR > \chi^2_\alpha(q)$ (the critical value), reject $H_0$.

### 📝 Key intuition:

The log-likelihood measures how well the model fits the data. If removing variables (imposing restrictions) makes the fit much worse, the LR statistic will be large and we reject $H_0$ — those variables matter.

---

## 💡 Worked Example 3: Testing Overall Model Significance

**Hypothesis:** $H_0: \beta_1 = \beta_2 = \beta_3 = \beta_4 = \delta_1 = \delta_2 = \delta_3 = \delta_4 = 0$

This tests whether ALL explanatory variables are jointly insignificant (like the [[F-test]] for overall significance in [[OLS Estimation|OLS]]).

**Restricted model:** $\text{employed}_i = G(\beta_0)$ — just an intercept, no explanatory variables.

**Unrestricted model:** The full model with all 8 variables.

**Steps:**
1. Estimate the full model → get $\log \mathcal{L}_{UR}$
2. Estimate the restricted model (intercept only) → get $\log \mathcal{L}_{R}$
3. Compute: $LR = 2[\log \mathcal{L}_{UR} - \log \mathcal{L}_{R}]$
4. Compare to $\chi^2_{0.05}(8)$ (8 restrictions, 5% significance)
5. The presentation tells us: **we reject $H_0$** — the variables are jointly significant.

---

## 💡 Worked Example 4: Testing for No Age Effect

**Hypothesis:** $H_0: \delta_1 = \delta_2 = \delta_3 = \delta_4 = 0$ (all age dummies are zero)

**Restricted model:** Drop all four age dummies:
$$\text{employed}_i = G(\beta_0 + \beta_1 \text{schooly}_i + \beta_2 \text{chld017}_i + \beta_3 \text{arab}_i + \beta_4 \text{married}_i)$$

**Unrestricted model:** Full model with all variables including age dummies.

**Steps:**
1. Estimate both models
2. $LR = 2[\log \mathcal{L}_{UR} - \log \mathcal{L}_{R}]$
3. Compare to $\chi^2_{0.05}(4)$ since we have $q = 4$ restrictions
4. The presentation tells us: **we reject $H_0$** — age significantly affects employment.

**In R:** Use `lrtest()` to compare two nested models.

---

## 📚 8. Analogy: [[Likelihood Ratio Test|LR Test]] vs. [[F-test]]

| Feature | [[F-test]] ([[OLS Estimation\|OLS]]) | [[Likelihood Ratio Test\|LR Test]] ([[Maximum Likelihood Estimation\|MLE]]) |
|---|---|---|
| Used with | [[Linear Probability Model\|LPM]] / OLS regression | [[Logit Model\|Logit]] / [[Probit Model\|Probit]] |
| Compares | SSR of restricted vs unrestricted | Log-likelihood of restricted vs unrestricted |
| Test statistic | $F = \frac{(SSR_R - SSR_{UR})/q}{SSR_{UR}/(n-k-1)}$ | $LR = 2[\log \mathcal{L}_{UR} - \log \mathcal{L}_R]$ |
| Distribution | $F(q, n-k-1)$ | $\chi^2(q)$ |
| Logic | Do restrictions make SSR much worse? | Do restrictions make likelihood much worse? |

The intuition is the same: if restricting the model makes the fit significantly worse, those restrictions (the null hypothesis) should be rejected.

---

## 📚 9. R Commands Quick Reference

| Task | R Code |
|---|---|
| Estimate [[Probit Model\|Probit]] | `glm(y ~ x1 + x2, family = binomial(link = "probit"), data = df)` |
| Estimate [[Logit Model\|Logit]] | `glm(y ~ x1 + x2, family = binomial(link = "logit"), data = df)` |
| Logistic CDF (G for Logit) | `plogis(xb)` |
| Logistic PDF (g for Logit) | `dlogis(xb)` |
| Normal CDF (G for Probit) | `pnorm(xb)` |
| Normal PDF (g for Probit) | `dnorm(xb)` |
| Predicted probability | `predict(model, type = "response")` |
| [[Likelihood Ratio Test\|LR test]] | `lrtest(unrestricted_model, restricted_model)` |

---

## 🎯 10. Summary: The Complete Picture

**When do we use Logit/Probit?** When our dependent variable is binary (0/1). They fix the [[Linear Probability Model|LPM]]'s problems of unbounded predictions and constant [[Marginal Effects|marginal effects]].

**What's the model?** $\mathbb{P}(y=1 \mid \mathbf{x}) = G(\mathbf{x}'\boldsymbol{\beta})$, where $G$ is either the logistic CDF ([[Logit Model|Logit]]) or the standard normal CDF ([[Probit Model|Probit]]).

**How do we estimate?** [[Maximum Likelihood Estimation|MLE]], not [[OLS Estimation|OLS]], because the model is non-linear. In R: `glm()`.

**How do we interpret?** The sign of $\hat{\beta}_j$ tells direction. The [[Marginal Effects|marginal effect]] is $g(\mathbf{\bar{x}}'\hat{\boldsymbol{\beta}}) \cdot \hat{\beta}_j$, evaluated at sample means.

**How do we test hypotheses?** The [[Likelihood Ratio Test]] replaces the [[F-test]]. $LR = 2[\log \mathcal{L}_{UR} - \log \mathcal{L}_R] \sim \chi^2(q)$.

**Logit vs Probit?** In practice they give very similar results. The choice rarely matters — use whichever your instructor prefers.

**What carries forward:** Many econometric models use binary/discrete outcomes. Panel data models (fixed effects logit), instrumental variables with binary outcomes, and treatment effect estimation all build on these foundations. Getting comfortable with the logic of $G(\mathbf{x}'\boldsymbol{\beta})$ and [[Marginal Effects|marginal effects]] here will pay off repeatedly.
