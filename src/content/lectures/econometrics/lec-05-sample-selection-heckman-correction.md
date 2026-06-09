---
title: Sample Selection & Heckman Correction
week: 5
semester: 2
course: Applied Econometrics
lecture: "Lecture 05 — Wage Equation: Returns to Education & Sample Selection"
instructor: Dr. Aluma Dembo
tags:
  - econometrics
  - sample-selection
  - heckman
  - inverse-mills-ratio
  - consistency
  - endogenous-selection
  - returns-to-education
subject: econometrics
in_scope: true
---
# Sample Selection & Heckman Correction

> Part of: [[Econometrics]]
> **Lecture 05** — Applied Econometrics, Dr. Aluma Dembo
> Key concepts: [[Sample Selection Bias]], [[Heckman Selection Model]], [[Inverse Mills Ratio]], [[Endogenous Selection]], [[Consistency]], [[Mincer Wage Equation]]

---

## 📋 Context: Where We Are

This lecture builds on the IV framework from Week 4. We're still trying to estimate the **returns to education** — how much does an extra year of education increase your wage? — but now we face two new problems:

1. A quick review of **why IV gives consistency but not unbiasedness**
2. A brand-new problem: **sample selection** — your dataset only captures people who chose to be in it

The running dataset throughout is **Mroz (1987)**: PSID 1975 data on married women, with variables including `inlf` (in labour force), `hours`, `educ`, `wage`, `exper`, `kidslt6`, `motheduc`, `fatheduc`, and husband characteristics.

---

## 🔁 Quick Recap: Consistency vs. Unbiasedness

These are two different desirable properties for an estimator and it's easy to confuse them.

| Property | What it means | OLS when X is endogenous |
|---|---|---|
| **Unbiased** | $\mathbb{E}[\hat{\beta}] = \beta$ — correct on average even in small samples | ❌ Biased (off even in large samples) |
| **Consistent** | As $n \to \infty$, $\hat{\beta} \to \beta$ — converges to truth with enough data | ❌ Inconsistent (bias doesn't shrink) |

> [!info] The key distinction
> - An **unbiased** estimator hits the right target on average every time.
> - A **consistent** estimator might miss in small samples but homes in on the truth as $n$ grows.
> - An estimator can be **biased but consistent** (the bias shrinks as $n$ grows).
> - An estimator can also be **biased and inconsistent** — it converges to the wrong thing permanently.

> [!warning] When OLS is endogenous, more data doesn't help
> If $\text{cov}(x_i, u_i) \neq 0$, OLS is **both biased and inconsistent** — it locks on to the wrong answer no matter how much data you add. IV fixes this: 2SLS is **biased in small samples** (due to first-stage estimation uncertainty) but **consistent** — as $n \to \infty$ it converges to the true $\beta$.

---

## 💼 Returns to Education: The Mincer Wage Equation

The standard model for wages is the **Mincer equation**:

$$\boxed{\log \text{wage}_i = \beta_0 + \beta_1 \text{educ}_i + \beta_2 \text{exper}_i + \beta_3 \text{exper}_i^2 + u_i}$$

- **Log-level model**: a one-unit increase in `educ` changes log wage by $\beta_1$, which approximately equals a $\beta_1 \times 100\%$ change in wage.
- **$\beta_1$** is what we care about: the percentage wage gain from one more year of education.

### The Problem: Omitted Ability Bias

```
        Unobserved Ability
          ↙             ↘
     Education  ───────→  Wage
```

Ability affects both how much education you pursue *and* your wage. It's in $u_i$ and it's correlated with `educ`. This means $\text{cov}(\text{educ}_i, u_i) \neq 0$ — **OLS is biased upward**.

- OLS estimate of returns to education: **10.7%** — likely an overestimate.

---

## 🎓 IV Solution: Father's Education as an Instrument

Use **father's education** (`fatheduc`) as an instrument for the child's education.

```
  Father's Education (z)
          │
          ▼
  Child's Education (x) ────────→ Wage (y)
                                      ↑
                          Unobserved Ability (u) — NOT connected to fatheduc
```

### Checking the two IV conditions:

**Condition 1 — Relevance:** $\text{cov}(\text{fatheduc}, \text{educ}) \neq 0$
- ✅ Testable. Run the first stage: regress `educ` on `fatheduc`. Reject $H_0: \gamma_1 = 0$.
- Interpretation: children whose fathers are more educated tend to get more education themselves.

**Condition 2 — Validity:** $\text{cov}(\text{fatheduc}, u) = 0$
- ❓ **Not directly testable** — requires theoretical argument.
- The concern: father's education might reflect father's ability, which could be inherited. If inherited ability affects the child's wage through a route *other than* the child's education, the exclusion restriction is violated.
- In practice, this instrument is considered **imperfect** — it's useful for illustration but contested in the literature.

### 2SLS Estimation:

**First stage:** $\text{educ}_i = \gamma_0 + \gamma_1 \text{fatheduc}_i + \varepsilon_i$

**Second stage:** $\log \text{wage}_i = \beta_0 + \beta_1 \widehat{\text{educ}}_i + \beta_2 \text{exper}_i + \beta_3 \text{exper}_i^2 + u_i$

2SLS estimate of returns to education: **7%** (lower than OLS's 10.7%, suggesting OLS was indeed biased upward by omitted ability).

> [!tip] Why does IV give a lower estimate here?
> OLS conflated the education effect with the ability effect. By using only the variation in education driven by father's education (which is unrelated to ability), IV isolates the true causal effect of education on wages.

---

## 🔍 Sample Selection

This is the main new concept of the lecture.

### What is sample selection?

**Sample selection** occurs when your dataset is not a representative sample of the population you're trying to study — and this non-representativeness is *systematic*, not random.

The key: you can only observe the outcome variable $y$ for people who end up in your sample ($s_i = 1$). But you want to make inferences about everyone, including those outside the sample ($s_i = 0$).

### Classic examples:

| Context | Who's in the sample ($s=1$) | Who's missing ($s=0$) |
|---|---|---|
| Wages of married women | Women who choose to work | Women who choose not to work |
| Marriage duration | Couples who married and stayed | Couples who never married or divorced early |
| Immigrant wages | People who chose to immigrate | Those who stayed home |

> [!warning] The key issue isn't just missing data
> If you estimated a wage regression only on working women, you'd get the returns to education *for women who chose to work*. But many policy questions are about the **potential wage of non-working women** — which you've excluded from your sample. That potential wage drives their decision of whether to work.

### Why sample selection can bias estimates

Imagine plotting education vs. log-wage for working women. The slope you estimate may not be what the slope would be if all women (working or not) were included:
- If high-education, low-wage women tend *not* to work (e.g. high earners' spouses), the slope of the observed sample is **steeper than reality** → upward bias.
- If low-education women are more likely to work (e.g. financial necessity), the slope of the observed sample is **flatter than reality** → downward bias.

![[Lec05_selection_bias.png|600]]

> [!warning] You only ever see the blue dots
> The grey points (non-working women) are invisible to you — you fit your line using the blue points alone. Because *who works* is correlated with the wage error, the workers-only line (red dashed) has a different slope and intercept from the true population line (green). No amount of extra data on workers fixes this; you're missing a non-random chunk of the population.

---

## 📐 Formalising Sample Selection

Define the selection indicator:
- $s_i = 1$ if observation $i$ is in the sample (we observe $x_i$ and $y_i$)
- $s_i = 0$ if observation $i$ is not in the sample

The true model is $y_i = \beta' x_i + u_i$, but we can only estimate:

$$s_i y_i = \beta' s_i x_i + s_i u_i$$

For OLS to be unbiased, we need $s_i u_i$ to be independent of $s_i x_i$.

### Three types of selection:

| Type | What it means | OLS result |
|---|---|---|
| **Random selection** | $s$ is independent of both $x$ and $u$ (e.g. purely random survey non-response) | ✅ Unbiased |
| **Exogenous selection** | $s$ depends on $x$ but is independent of $u$ (e.g. only including women over 30 in your sample — age is observable) | ✅ Unbiased |
| **Endogenous selection** | $s$ depends on $u$ (selection is driven by unobservables that also affect $y$) | ❌ **Biased** |

> [!info] Why endogenous selection is the dangerous one
> If $\text{cov}(s, u) \neq 0$, then who is selected into your sample is related to unobservable factors that also affect your outcome. For wages: if the unobservable "ambition" affects both the decision to work ($s$) and wage ($y$), then your sample of workers is selected on ambition — it's not representative of all women.

> [!tip] Can you tell from the data if you have selection?
> You can see that observations are missing (you know $s_i = 0$ for some), but **you can't tell from the data alone whether the selection is endogenous**. That's a theoretical question about your model. The test for whether it's causing *bias* is built into the Heckman solution.

---

## 🏆 The Heckman Correction (1976, 1979) — Nobel Prize 2000

James Heckman's solution is a **two-step estimator** that explicitly models the selection process and corrects for its effect on the outcome regression.

### The Setup

Model the selection with a **probit**:

$$s_i = \mathbb{1}[z_i' \gamma + v_i \geq 0]$$

where:
- $z_i$ = a vector of variables that determine selection. Crucially, $z$ must include **at least one variable that affects selection but NOT the outcome** — this is the exclusion restriction for identification.
- $v_i \sim N(0,1)$ is the selection error
- $x$ is a **subset of** $z$ (everything in the wage equation is also in the selection equation, plus extra)

### Key result (you don't need to derive this):

When you estimate the wage equation **only on the selected sample** ($s = 1$), the expected value of $y$ is:

$$\mathbb{E}[y \mid z, s=1] = x'\beta + \rho \lambda(z'\gamma)$$

where:
- $\rho$ = the correlation between the wage error $u$ and the selection error $v$
- $\lambda(\cdot)$ = the **Inverse Mills Ratio** — a function of the standard normal PDF and CDF

> [!info] What is the Inverse Mills Ratio?
> The IMR, $\lambda(a) = \frac{\phi(a)}{\Phi(a)}$, where $\phi$ is the normal PDF and $\Phi$ is the normal CDF. It's essentially a correction term that accounts for the fact that your selected sample is not representative — it represents the expected value of the truncated part of the error term. You don't need to memorise the formula, but you need to understand what it does: it's the omitted variable that causes bias when you run OLS only on the selected sample.

![[Lec05_inverse_mills.png|580]]

> [!tip] How to read the IMR curve
> When the selection index $z'\gamma$ is very negative (few people are selected — severe selection), the correction term $\lambda$ is large: the bias from running OLS on the selected sample is big. As the index rises (almost everyone is selected), $\lambda \to 0$ — there's nothing to correct. Step 2 of Heckman simply adds this $\hat\lambda_i$ as an extra regressor, and the size of its coefficient ($\rho$) tells you how much selection mattered.

> [!warning] Why do we need the extra variable in $z$?
> If $z = x$ (no extra variable), the Heckman model is identified only through the non-linearity of the probit — which is very weak. Adding a variable to $z$ that isn't in $x$ (like children under 6 affecting labour force participation but not the wage itself) gives much stronger identification. This is the Heckman exclusion restriction.

### The Two-Step Procedure:

**Step 1 — Probit selection model (on the full sample):**

$$\mathbb{P}(s_i = 1 \mid z_i) = \Phi(z_i' \gamma)$$

Use the **entire dataset** (including $s_i = 0$ observations) to estimate $\hat{\gamma}$.
Then compute the estimated IMR for each observation with $s_i = 1$:

$$\hat{\lambda}_i = \lambda(z_i' \hat{\gamma})$$

**Step 2 — OLS outcome regression (on the selected sample only, $s=1$):**

$$\log \text{wage}_i = \beta_0 + \beta_1 \text{educ}_i + \beta_2 \text{exper}_i + \beta_3 \text{exper}_i^2 + \rho \hat{\lambda}_i + \text{error}_i$$

The resulting $\hat{\beta}$ estimates are **consistent and normally distributed**.

> [!example] Applied to married women's wages
> The selection equation models whether a woman is in the labour force ($s = \text{inlf}$) as a function of: education, experience, husband's wage, number of young children (`kidslt6`), number of older children (`kidsge6`), non-wife family income.
>
> The exclusion restriction: **children under 6** affect whether a woman works (they make it harder) but are assumed not to affect her hourly wage directly. This gives the extra variable in $z$ needed to identify the model.

### Testing for selection bias:

Test $H_0: \rho = 0$ (the coefficient on $\hat{\lambda}_i$ equals zero).

- If you **reject** $H_0$: there is evidence of endogenous selection. The Heckman correction matters — OLS on the selected sample alone is biased.
- If you **fail to reject** $H_0$: selection may not be a problem (or you lack power to detect it). OLS is fine.

> [!tip] Why two steps instead of one?
> The Heckman approach mirrors 2SLS in spirit: the first step generates a correction term ($\hat{\lambda}$) that represents the selection contamination, then the second step adds it as a control variable so OLS can remove the bias. It's called the "Heckit" model in practice.

---

## 📊 Summary Comparison: OLS vs. 2SLS (IV) vs. Heckman

| Method | Problem addressed | Key assumption | What it fixes |
|---|---|---|---|
| **OLS** | None — baseline | $\text{cov}(x, u) = 0$ | Nothing — breaks with endogeneity or selection |
| **2SLS / IV** | Endogenous regressor | Valid + relevant instrument | Omitted variable bias, reverse causality |
| **Heckman** | Endogenous sample selection | Probit selection model; exclusion restriction | Selection bias from non-random inclusion in sample |

---

## 🎯 Summary

1. **Consistency ≠ unbiasedness**: IV (2SLS) is biased but consistent — it converges to the truth in large samples even when OLS does not.
2. **Sample selection** occurs when who is in your dataset is determined by factors that also affect your outcome. Random or exogenous selection is fine; **endogenous selection** biases OLS.
3. The **Heckman correction** is a two-step procedure:
   - Step 1: Probit for selection on the full sample → get $\hat{\lambda}$ (Inverse Mills Ratio)
   - Step 2: OLS on the selected sample, including $\hat{\lambda}$ as a regressor
4. You need an **exclusion restriction** — a variable in the selection equation that's not in the outcome equation — for identification.
5. **Test for selection bias** by testing whether the coefficient on $\hat{\lambda}$ is significantly different from zero ($H_0: \rho = 0$).

---

## 📎 Related Notes

- Previous: [[Lec_04-Instrumental Variables]] — 2SLS, endogeneity, instrument conditions
- Hub: [[Econometrics]]
- Key concepts: [[Heckman Selection Model]], [[Inverse Mills Ratio]], [[Sample Selection Bias]], [[Endogenous Selection]], [[Consistency]], [[Mincer Wage Equation]]
- Problem set covering this: [[PS_02-Fertility & Education]]
- Next: [[Lec_06-Simultaneous Equations & Time Series]]
