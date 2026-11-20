---
title: Heteroskedasticity
week: 12
semester: 1
year: 2
academic_year: "2025-26"
course: Introduction to Econometrics
lecture: "Lecture 12 — Heteroskedasticity: Consequences, WLS & White Correction"
date: 2026-06-13
tags:
  - intro-econometrics
  - heteroskedasticity
  - weighted-least-squares
  - white-correction
  - robust-standard-errors
  - GLS
  - OLS
aliases:
  - Heteroskedasticity
  - Weighted Least Squares
  - WLS
  - White Robust Standard Errors
  - Robust Standard Errors
  - Lecture 12 Intro Metrics
  - Non-constant Error Variance
subject: intro-econometrics
in_scope: true
---

# Heteroskedasticity

> Part of: [[Intro Econometrics]] | Key concepts: [[Heteroskedasticity]], [[Weighted Least Squares]], [[White Correction]], [[Robust Standard Errors]], [[Gauss-Markov Theorem]], [[Classical Assumptions]], [[Generalized Least Squares]]

---

## 📚 Where this lecture sits

> [!info] The thread from the classical model
> The OLS inference machinery — the t-statistics and F-statistics we have leaned on since [[Lec_08-Goodness of Fit & Multicollinearity]] — rests on a quiet but crucial assumption: that every observation's error has the **same variance**. The last lecture ([[Lec_11-Interaction Terms]]) already hinted at the cure when it noted that running **separate regressions** per group lets each group's error variance differ. This lecture confronts that assumption head-on. When ==heteroskedasticity== is present, OLS coefficients are still fine, but the **standard errors are wrong**, and every hypothesis test built on them is invalid. We need either to (a) transform the model so the errors become well-behaved (**WLS**), or (b) keep OLS but compute a corrected standard error that is robust to the problem (**White correction**).

The lecture has three strands:

1. **The diagnosis:** what heteroskedasticity is, where it comes from, exactly which results break (and which survive), and an informal "eyeball" test.
2. **Weighted Least Squares (WLS):** when we *know* the functional form of the variance, transform the model to restore the classical assumptions and recover efficiency.
3. **White robust standard errors:** when we *don't* know the form, keep the OLS estimates but fix the standard-error formula.

---

## Part 0 — Recall: the assumption at stake (A4)

> [!info] The classical assumption of homoskedasticity ^a4-definition
> In the linear model $y_i = \beta_0 + \beta_1 x_{1i} + \dots + \beta_k x_{ki} + u_i$ with $\mathbb{E}[u_i \mid x_i] = 0$, assumption **A4 (homoskedasticity)** states the conditional variance of the error is **constant across all observations**:
> $$\operatorname{Var}(u_i \mid x_i) = \sigma^2 \quad \text{for every } i.$$

==Heteroskedasticity== is precisely the failure of A4: the error variance depends on $i$ — on the level of an explanatory variable, on group membership, or on time:

$$\boxed{\operatorname{Var}(u_i \mid x_i) = \sigma_i^2 \quad (\text{varies with } i)}$$ ^hetero-definition

> [!tip] The classic intuition — returns to education
> When estimating the returns to education, **ability** is unobserved and sits inside the error $u$. At low education levels there is little spread in ability; among the highly educated, ability varies enormously (some have a PhD by talent, some by persistence). So the spread of $u$ — its variance — **grows with the education level**. The variance of the thing we cannot see is itself a function of the thing we can.

---

## Part 1 — Where heteroskedasticity comes from

The error variance can be non-constant for several structurally different reasons. Recognising **which** one you face dictates the fix.

| Pattern | Mechanism | Canonical example |
|---|---|---|
| **Varies with a regressor** | $\operatorname{Var}(u_i)$ rises/falls with an $x$ | Income–consumption: spending is more variable at high income |
| **Differs across groups** | Each subpopulation has its own variance | Wage model: $\operatorname{Var}(u_i)$ differs for men vs women |
| **Changes over time** | Stable vs turbulent periods | Macro models: calm decades vs crisis periods |

> [!note] Heteroskedasticity is not "in the model" — it is in the *errors*
> The variance can depend on a variable **exogenously**, even one not included as a regressor. The point is about the spread of the unobserved $u_i$, not about which controls you put in the equation. Adding the variable as a control does not automatically cure it.

---

## Part 2 — The problem: what breaks and what survives

This is the single most important slide of the lecture, and the most common exam trap. Be precise about which results die and which live.

> [!info] Consequences of heteroskedasticity ^consequences
> **What SURVIVES** (the good news):
> - OLS estimators $\hat\beta_j$ are still **unbiased** and **consistent**. Assumptions A1 (linearity) and A2 (mean independence $\mathbb{E}[u\mid x]=0$) are untouched — and unbiasedness rests only on those. The coefficient *point estimates* are fine.
>
> **What BREAKS** (the bad news):
> - The usual formula for $\widehat{\operatorname{Var}}(\hat\beta_j)$ **assumes** constant variance (A4). Under heteroskedasticity it is **biased and inconsistent**.
> - Therefore the standard errors are wrong, so **t-statistics and F-statistics are invalid** — you cannot trust any hypothesis test or confidence interval.
> - **Gauss–Markov no longer holds**, so OLS is **no longer efficient** (not BLUE) — some other linear unbiased estimator has a smaller variance.

> [!warning] The practical reading of R output
> Under heteroskedasticity, in the `summary(ols)` table **only the first column (the coefficient Estimates) is reliable**. The Std. Error, t value, and Pr(>|t|) columns are all built on the broken variance formula and must not be trusted until corrected.

> [!tip] Why unbiasedness survives but efficiency dies — the intuition
> Unbiasedness is a statement about the **average** of $\hat\beta$ over repeated samples; it only needs the error to be mean-zero and independent of $x$ (A1–A2). The error *variance* never enters that argument. Efficiency, by contrast, is about how **tightly** $\hat\beta$ clusters — and that depends entirely on the variance structure. OLS weights every observation equally; when some observations are far noisier than others, equal weighting is wasteful, so a better (smaller-variance) estimator exists.

---

## Part 3 — Detecting it: the "eyeball" test

Since heteroskedasticity lives in the variance of the unobservable $u_i$, we proxy $u_i$ with the **residual** $\hat u_i$ and look at how its squared size moves with a suspect regressor.

> [!example] The eyeball (graphical) test ^eyeball-test
> For $y_i = \beta_0 + \beta_1 x_i + u_i$:
> 1. Estimate the model by OLS to get $\hat\beta_0, \hat\beta_1$.
> 2. Compute the squared residuals $\{\hat u_1^2, \hat u_2^2, \dots, \hat u_N^2\}$. (Squaring because variance is about magnitude, not sign — $\hat u_i^2$ is the natural sample analogue of $\operatorname{Var}(u_i)$ when the mean is zero.)
> 3. **Plot** $\hat u_i^2$ (vertical) against the suspicious exogenous variable $x$.
>
> ```r
> ols <- lm(lwage ~ schooling + age + age_sq, mydata)
> plot(ols$model[,'schooling'], (ols$residuals)^2)
> ```

What the cloud of points tells you:

| Shape of $\hat u_i^2$ vs $x$ | Diagnosis | Implied form |
|---|---|---|
| Flat band, no trend | Homoskedastic | $\operatorname{Var}(u_i) = \sigma_u^2$ |
| Fans **out** as $x$ rises | Increasing variance | $\operatorname{Var}(u_i) = \sigma_u^2\, x_i$ |
| Fans **in** as $x$ rises | Decreasing variance | $\operatorname{Var}(u_i) = \sigma_u^2 / x_i$ |

> [!note] Why "eyeball"
> This is an informal visual diagnostic, not a formal hypothesis test (formal tests like Breusch–Pagan or White's test exist but are not the focus here). It tells you both **whether** there is a problem and, crucially, **what functional form** the variance might take — which is exactly the input WLS needs.

---

## Part 4 — Weighted Least Squares (known variance form)

> [!info] The strategy ^wls-strategy
> If we **know** the functional form of the error variance — that it is $\sigma^2$ times a known function $h(x_i) \equiv h_i$ of the regressors — we can **transform the model** so the transformed errors are homoskedastic, then run OLS on the transformed model. This is ==Weighted Least Squares (WLS)==.

### The transformation

Suppose
$$\operatorname{Var}(u_i \mid x_i) = \sigma^2 h(x_i) \equiv \sigma^2 h_i, \qquad h_i > 0.$$

Divide **every term** of the original equation by $\sqrt{h_i}$:

$$\frac{y_i}{\sqrt{h_i}} = \beta_0 \frac{1}{\sqrt{h_i}} + \beta_1 \frac{x_{1i}}{\sqrt{h_i}} + \dots + \beta_k \frac{x_{ki}}{\sqrt{h_i}} + \frac{u_i}{\sqrt{h_i}}.$$

Rewrite as a new starred model $(*)$ with transformed variables $y_i^* = y_i/\sqrt{h_i}$, $x_{ji}^* = x_{ji}/\sqrt{h_i}$, and $u_i^* = u_i/\sqrt{h_i}$:

$$(*)\qquad y_i^* = \beta_0 x_{0i}^* + \beta_1 x_{1i}^* + \dots + \beta_k x_{ki}^* + u_i^*.$$ ^wls-transformed

> [!note] The coefficients are the *same* $\beta$'s
> The transformation does not change what we are estimating — the $\beta_j$ in model $(*)$ are the **same** structural parameters as in the original. We have only re-weighted the observations. (Note the constant becomes a genuine regressor $x_{0i}^* = 1/\sqrt{h_i}$ — the transformed model often has **no ordinary intercept**.)

### Why the transformed error is homoskedastic — the derivation

This is the heart of the lecture; the exam can ask you to reproduce it.

**Mean zero is preserved.** Since $\sqrt{h_i}$ is a function of $x_i$ alone (treated as fixed given $x$):
$$\mathbb{E}[u_i^*] = \mathbb{E}\!\left[\frac{u_i}{\sqrt{h_i}}\right] = \frac{1}{\sqrt{h_i}}\,\mathbb{E}[u_i] = 0,$$
$$\mathbb{E}[u_i^* \mid x_i^*] = \frac{1}{\sqrt{h_i}}\,\mathbb{E}[u_i \mid x_i] = 0.$$

**The variance becomes constant.** Because the conditional mean is zero, $\operatorname{Var}(u_i^* \mid x_i^*) = \mathbb{E}[u_i^{*2}\mid x_i^*]$, and $h_i$ pulls out of the expectation as a constant:

$$\operatorname{Var}(u_i^* \mid x_i^*) = \mathbb{E}\!\left[\frac{u_i^2}{h_i} \,\Big|\, x_i\right] = \frac{1}{h_i}\,\mathbb{E}[u_i^2 \mid x_i] = \frac{1}{h_i}\operatorname{Var}(u_i \mid x_i) = \frac{1}{h_i}\,\sigma^2 h_i = \sigma^2.$$ ^wls-derivation

> [!info] The payoff
> In model $(*)$ the errors $u_i^*$ satisfy **all** the classical assumptions, including A4 ($\operatorname{Var}(u_i^*\mid x_i^*)=\sigma^2$, constant). Gauss–Markov therefore applies to $(*)$: the OLS estimates of $(*)$ are **efficient (BLUE)** and their standard errors are **unbiased**. The WLS estimates differ numerically from the original OLS estimates — but **both are unbiased**; WLS is simply the more *efficient* of the two.

### Worked WLS examples — picking the right divisor

The whole trick is matching the divisor to the assumed variance form so that the leftover variance collapses to a constant $\sigma_u^2$.

> [!example] Example 1 — $\operatorname{Var}(u_i\mid x_i) = \sigma_u^2\, x_i$
> The variance is proportional to $x_i$, so $h_i = x_i$ and we **divide by $\sqrt{x_i}$**. Checking the transformed variance:
> $$\operatorname{Var}\!\left(\frac{u_i}{\sqrt{x_i}}\right) = \mathbb{E}\!\left[\frac{u_i^2}{x_i}\right] = \frac{1}{x_i}\operatorname{Var}(u_i) = \frac{\sigma_u^2 x_i}{x_i} = \sigma_u^2. \checkmark$$
> (The original slide writes the proportional-to-$x_i^2$ shorthand $kx_i^2$; the operative case here divides by the square root of the variance factor.)

> [!example] Example 2 — $\operatorname{Var}(u_i\mid x_i) = \sigma_u^2\, x_i^2$
> The variance is proportional to $x_i^2$, so **divide by $x_i$** (i.e. $\sqrt{h_i} = x_i$). The corrected model is
> $$\frac{y_i}{x_i} = \frac{\beta_0}{x_i} + \beta_1 + \frac{u_i}{x_i}.$$
> Notice $\beta_1$ now appears as the **intercept** of the new model, and $1/x_i$ is the single slope variable. Transformed variance:
> $$\operatorname{Var}\!\left(\frac{u_i}{x_i}\right) = \mathbb{E}\!\left[\frac{u_i^2}{x_i^2}\right] = \frac{\operatorname{Var}(u_i)}{x_i^2} = \frac{\sigma_u^2 x_i^2}{x_i^2} = \sigma_u^2. \checkmark$$

> [!example] Example 3 — $\operatorname{Var}(u_i\mid x_i) = \sigma_u^2 / x_i$
> Here variance *falls* with $x_i$, so we **multiply by $\sqrt{x_i}$** (equivalently $h_i = 1/x_i$). The corrected model:
> $$y_i\sqrt{x_i} = \beta_0\sqrt{x_i} + \beta_1 x_i\sqrt{x_i} + u_i\sqrt{x_i}.$$
> Transformed variance:
> $$\operatorname{Var}\!\left(u_i\sqrt{x_i}\right) = x_i\,\mathbb{E}[u_i^2] = x_i \operatorname{Var}(u_i) = x_i \cdot \frac{\sigma_u^2}{x_i} = \sigma_u^2. \checkmark$$

> [!tip] The unifying rule ^wls-rule
> $$\boxed{\text{Divide every term by } \sqrt{h_i}, \text{ where } \operatorname{Var}(u_i\mid x_i) = \sigma^2 h_i.}$$
> You are scaling each observation by the inverse of its error's standard deviation, so noisy and quiet observations end up equally reliable. After the division, **always verify** the leftover variance reduces to a constant.

### WLS as re-weighting — the deeper view

> [!info] WLS minimises a *weighted* sum of squared residuals ^wls-objective
> Equivalently, WLS solves
> $$\hat\beta_{WLS} = \arg\min_{\hat\beta}\ \sum_i \frac{\hat u_i^2}{\operatorname{Var}(u_i)}.$$
> Each observation is weighted by the **inverse of its error variance**. OLS weights every observation equally; WLS **down-weights** observations with high $\operatorname{Var}(u_i)$.

> [!tip] Why inverse-variance weighting is the right thing
> An observation with a large error variance is **less reliable** — its $y$ carries more noise about the true line. Trusting it as much as a precise observation throws away information. Inverse-variance weighting gives each observation exactly the say it deserves. OLS is the **special case** of WLS where all variances are equal; and WLS is itself a special case of ==Generalized Least Squares (GLS)== (not covered in this course).

---

## Part 5 — White robust standard errors (unknown variance form)

> [!info] When you *don't* know the form ^white-strategy
> WLS needs you to know $h(x_i)$ — and to have $h_i > 0$ for all $i$. Often you suspect heteroskedasticity but cannot specify its shape (or the implied weights come out negative). The ==White correction== keeps the ordinary OLS estimates and only **replaces the standard-error formula** with one that remains valid under arbitrary heteroskedasticity. These are also called ==robust== or ==heteroskedasticity-consistent== standard errors.

### Where the usual formula fails — the Lecture 4 derivation revisited

Recall for the single-regressor model the slope error decomposes as
$$\hat\beta_1 = \beta_1 + \frac{\sum_i (X_i - \bar X)u_i}{\sum_i (X_i - \bar X)^2}.$$

Taking the variance (the constant $\beta_1$ drops; the denominator is a constant so it squares and pulls out; A2 lets the $X$'s be treated as fixed):

$$\operatorname{Var}(\hat\beta_1) = \frac{\operatorname{Var}\!\big(\sum_i (X_i-\bar X)u_i\big)}{\big(\sum_i (X_i-\bar X)^2\big)^2} = \frac{\sum_i (X_i-\bar X)^2 \operatorname{Var}(u_i)}{\big(\sum_i (X_i-\bar X)^2\big)^2}.$$ ^white-stuck-point

> [!warning] This is exactly as far as you can go without A4
> Getting from the sum's variance to the **sum of the variances** uses **A3** (errors uncorrelated across observations). The step that we *cannot* take without **A4** is replacing every $\operatorname{Var}(u_i)$ with a single common $\sigma_u^2$. Under homoskedasticity that substitution collapses the numerator to $\sigma_u^2 \sum (X_i-\bar X)^2$ and yields the familiar $\sigma_u^2 / \sum(X_i-\bar X)^2$. Under heteroskedasticity each $\operatorname{Var}(u_i)$ is different, so the clean formula is simply **wrong**.

### White's fix — plug in the squared residuals

White's insight: we cannot know each $\operatorname{Var}(u_i)$, but we can **estimate** it observation-by-observation with the squared residual $\hat u_i^2$. For coefficient $j$ in the multiple-regression model:

$$\boxed{\widehat{\operatorname{Var}}(\hat\beta_j) = \frac{\sum_{i=1}^{n} \hat r_{ij}^2\, \hat u_i^2}{\left(\sum_{i=1}^{n} \hat r_{ij}^2\right)^2}}$$ ^white-formula

where $\hat r_{ij}$ are the residuals from regressing $x_j$ on **all the other** regressors (the part of $x_j$ orthogonal to the rest), and $\hat u_i$ are the residuals from the main regression of $y$ on the $x$'s.

> [!note] What White's correction does and does not do ^white-tradeoff
> - It **does not change the coefficient estimates** — the model still has heteroskedasticity, so OLS is still **not efficient**.
> - It **does** produce a standard error that **accounts for** the heteroskedasticity, hence is unbiased/consistent — so the t- and F-tests become **valid** again.
> - Trade-off versus WLS: White is robust and assumption-light but leaves you with inefficient estimates; WLS restores efficiency but demands you know (and correctly specify) the variance form.

### Doing it in R

> [!example] The `coeftest` workflow
> ```r
> ols <- lm(lwage ~ schooling + age + age_sq, mydata)
> coeftest(ols, vcov = hccm, type = "hc0")   # libraries: car, zoo, lmtest
> ```
> The output looks like `summary(ols)`, but:
> - The **Estimate** column is **identical** to plain OLS (coefficients unchanged).
> - The **Std. Error** column is recomputed robustly, so the **t-statistic and p-value** columns differ.
> - `type = "hc0"` selects one of several flavours of the correction (hc0, hc1, hc3, …) that differ in small-sample degrees-of-freedom adjustments.

---

## Part 6 — Heteroskedasticity across groups

> [!info] When the groups themselves have different variances ^group-hetero
> If the heteroskedasticity is **between groups** (men vs women) or **time periods** (calm vs crisis), the cleanest fix is to **estimate a separate regression for each group**. This directly allows each group its own error variance.

This ties back to the two versions of the [[Lec_11-Interaction Terms#Part 4 — Chow tests do two groups share one regression|Chow test]]:

| | Pooled with dummies/interactions | Separate regressions per group |
|---|---|---|
| Error variance assumption | **Common** across groups | **Group-specific** (each estimated separately) |
| Under homoskedasticity | Identical results | Identical results |
| Under group heteroskedasticity | Inefficient | **Preferred** — yields efficient coefficient estimates |

> [!tip] The Chow connection, sharpened
> Under homoskedasticity the dummy-version and separate-regression versions of the Chow test are **identical**. The moment the groups differ in error variance, the **separate-regression version is preferred** because each regression uses its own variance and so produces efficient estimates — the pooled-dummy version is stuck with one common variance.

---

## Part 7 — WLS vs White: the decision

> [!info] WLS summary
> - **Requires** knowing the functional form of $\operatorname{Var}(u_i)$, with positive weights $h_i > 0$.
> - The **coefficient estimates change** (different from OLS), and so does $R^2$.
> - The **standard errors and hypothesis tests change**.
> - The estimates are **efficient (BLUE)**.

> [!info] White correction summary
> - **No need** to know the functional form of $\operatorname{Var}(u_i)$.
> - The **coefficient estimates do not change**, so neither does $R^2$.
> - The **standard errors and hypothesis tests change**.
> - The estimates are **not efficient**.

> [!tip] Which to use — the practical rule ^which-to-use
> | Use WLS when… | Use White when… |
> |---|---|
> | You "know" the variance is proportional to a known individual-level variable $h_i$ | You don't know the functional form of the variance |
> | $h_i > 0$ for all $i$ | Weights would be negative / form unknown |
> | You want efficient (BLUE) estimates | You don't mind inefficient estimates, just want valid tests |
>
> In modern applied practice White/robust standard errors are the default workhorse precisely because they ask so little: you rarely know the true variance form, and getting *valid inference* usually matters more than squeezing out the last drop of efficiency.

---

## 🧪 Practice exam — model choice, OVB and assumptions

This question appeared on the slides as a worked exam item (medium/high difficulty). It revisits A2/A4 and omitted-variable reasoning — good integrative revision.

> [!example] Setup
> Researchers believed $X$ and $Z$ alone explain $Y$ (all of $X,Y,Z$ strictly positive):
> $$\text{(1)}\quad \ln Y = \gamma_0 + \gamma_1 X + \gamma_2 Z + u$$
> A researcher suspects $X^2$ also matters and estimates by OLS:
> $$\text{(2)}\quad \ln Y = \beta_0 + \beta_1 X + \beta_2 Z + \beta_3 X^2 + u$$
> $$\text{(3)}\quad \ln Y = \beta_0 + \beta_1 X + \beta_2 Z + \beta_3 \ln X^2 + u$$

**1(a) — On which number did the researcher conclude $X^2$ affects the outcome?** The **p-value of $\hat\beta_3$**, here $5.18\times10^{-7}$. It is far below 5%, so the coefficient is **significant** and the variable is relevant.

**1(b) — On which numbers did the researcher conclude model (3) beats model (2)?** The **$R^2$ values**: $R^2_{(3)} = 0.7778 > R^2_{(2)} = 0.7713$ (the RSSs are equally acceptable). Model (3) explains more variation, so the $\ln X^2$ specification fits better.

> [!note] 2 — If $Z$ and $\ln X^2$ are correlated, which assumption does model (1) violate? (assume model 3 is the true DGF)
> If model (3) is true, model (1) **omits** the relevant regressor $\ln X^2$, which is absorbed into the error $u$. Since $Z$ and $\ln X^2$ are correlated, the error in model (1) is now correlated with the included regressor $Z$: $\operatorname{cov}(u, Z) \neq 0$. This violates **A2** — answer **(ii)**, $\mathbb{E}[u_i \mid x_{1i},\dots,x_{Ki}] = 0$. Note it is **A2 that fails, not A4** (this is an omitted-variable/endogeneity problem, not a variance problem) — a deliberate trap in a heteroskedasticity lecture.

> [!tip] 3 — If $Z$ and $\ln X^2$ are *un*correlated, how do $\hat\gamma_2$ and $\beta_2$ compare?
> Omitting $\ln X^2$ normally biases the other coefficients (OVB), so we'd expect $\mathbb{E}[\hat\gamma_2]\neq\beta_2$. **But** OVB only transmits through **correlation** between the omitted and included regressors. If $Z \perp \ln X^2$, dropping $\ln X^2$ does **not** bias the coefficient on $Z$: $\mathbb{E}[\hat\gamma_2] = \beta_2$ — answer **(iii)**.

---

## 📝 Summary

1. ==Heteroskedasticity== is the failure of assumption A4: the conditional error variance $\operatorname{Var}(u_i\mid x_i)=\sigma_i^2$ **varies across observations** instead of being a constant $\sigma^2$. It arises when the variance moves with a regressor, differs across groups, or changes over time.
2. **Consequences:** OLS coefficients stay **unbiased and consistent** (A1, A2 untouched), but the usual variance estimate is **biased**, so **t- and F-tests are invalid** and OLS is **no longer efficient** (Gauss–Markov fails). In R output, only the **Estimate** column is trustworthy.
3. **Detection:** the informal **eyeball test** — plot squared residuals $\hat u_i^2$ against a suspect regressor. A fanning pattern signals heteroskedasticity and even suggests the functional form.
4. **Weighted Least Squares (WLS)** — when the variance form $\operatorname{Var}(u_i)=\sigma^2 h_i$ is **known**: divide every term by $\sqrt{h_i}$. The transformed errors satisfy A4 ($\operatorname{Var}(u_i^*)=\sigma^2$), so the estimates become **efficient (BLUE)** with valid standard errors. The boxed rule: $\text{divide by }\sqrt{h_i}$; always verify the leftover variance collapses to a constant.
5. WLS is **inverse-variance weighting**: $\hat\beta_{WLS}=\arg\min\sum \hat u_i^2/\operatorname{Var}(u_i)$. Noisy (high-variance) observations get **less** weight because they are less reliable. OLS is the equal-weight special case; WLS is a special case of **GLS**.
6. **White / robust standard errors** — when the form is **unknown** (or weights would be negative): keep OLS estimates, replace the standard error with $\widehat{\operatorname{Var}}(\hat\beta_j)=\sum \hat r_{ij}^2 \hat u_i^2 / (\sum \hat r_{ij}^2)^2$, plugging $\hat u_i^2$ in for each unknown $\operatorname{Var}(u_i)$. **Coefficients and $R^2$ unchanged** (still inefficient), but tests become **valid**. In R: `coeftest(ols, vcov = hccm, type = "hc0")`.
7. **Across groups/time**, estimate **separate regressions** per group — this lets each group keep its own variance and is the **preferred** Chow-test version under heteroskedasticity.
8. **Choosing:** WLS for efficiency when you trust the variance form; White when you don't — robust SEs are the modern default because valid inference usually beats squeezing out efficiency.

---

## 📎 Related Notes

- Previous: [[Lec_11-Interaction Terms]] — separate-group regressions and the Chow test, whose efficiency argument this lecture completes
- Foundational: [[Lec_08-Goodness of Fit & Multicollinearity]] — the t- and F-tests that heteroskedasticity invalidates, and the auxiliary-regression residuals $\hat r_{ij}$ reused in White's formula
- Earlier: Lecture 4 — the slope-variance derivation $\operatorname{Var}(\hat\beta_1)$ that White's correction picks up where homoskedasticity is dropped
- Concepts: [[Heteroskedasticity]], [[Weighted Least Squares]], [[White Correction]], [[Robust Standard Errors]], [[Generalized Least Squares]], [[Gauss-Markov Theorem]], [[Classical Assumptions]], [[Chow Test]], [[Omitted Variable Bias]]
- Hub: [[Intro Econometrics]]
