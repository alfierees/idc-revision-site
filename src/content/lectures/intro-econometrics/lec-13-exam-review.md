---
title: Exam Review
week: 13
semester: 1
year: 2
academic_year: "2025-26"
course: Introduction to Econometrics
lecture: "Lecture 13 — Final Exam Review: Course Overview & Formula Sheet"
date: 2026-06-14
tags:
  - intro-econometrics
  - exam-review
  - OLS
  - hypothesis-testing
  - F-test
  - formula-sheet
  - revision
aliases:
  - Exam Review
  - Intro Metrics Final Review
  - Course Overview Econometrics
  - Formula Sheet
  - Lecture 13 Intro Metrics
subject: intro-econometrics
in_scope: true
---

# Exam Review

> Part of: [[Intro Econometrics]] | Key concepts: [[OLS Estimation]], [[Gauss-Markov Theorem]], [[F-test]], [[t-test]], [[Confidence Interval]], [[Multicollinearity]], [[Omitted Variable Bias]], [[Heteroskedasticity]], [[Dummy Variable]], [[Interaction Term]]

---

## 📚 What this lecture is

> [!info] A whole-course map, not new material
> Lecture 13 is the **final-exam review**. It does two things: (1) explains how to use the **formula sheet** and the **statistical tables** you are given in the exam, and (2) walks the entire course from first principles — deriving OLS, listing the classical assumptions and what they buy you, the inference machinery (t, F, confidence intervals, $R^2$), the three things that "go wrong" (multicollinearity, irrelevant/omitted variables, heteroskedasticity), and the "fancier" interpretation models (unit changes, regression through the origin, logs, quadratics, dummies, interactions, Chow tests). This note is therefore a **single-sitting revision sheet** for the whole module, with every result reasoned through rather than just listed.

The course splits into three blocks, mirrored in the sections below:

1. **Basic building blocks** — deriving OLS, the sampling distribution of the estimators, t-tests, p-values, confidence intervals, F-tests, goodness-of-fit.
2. **Things that can go wrong** — multicollinearity, including irrelevant variables, omitting relevant variables, heteroskedasticity.
3. **Fancier models** — changing units, regression through the origin, log models, quadratics, categorical dummies, interaction terms, and Chow tests.

---

## Part 0 — Exam mechanics: the formula sheet & tables

> [!warning] Read the table instructions carefully — they cost easy marks
> The exam gives you a **formula sheet** (on Moodle, in the Practice Exam section: OLS formulas, omitted-variable bias, regression through the origin, inference, etc.) **and** statistical tables. You must use the **printed tables**, *not* R's `qt()` / `qf()` quantile functions — the values can differ slightly and the exam expects the table value.

> [!info] Degrees of freedom — the number people get wrong ^df-rule
> Everywhere you read a critical value, you need the right degrees of freedom.
> - **t-distribution:** $df = N - M$, where $N$ = number of observations and $M$ = number of estimated parameters (first-order conditions), **including the intercept** if one is used.
> - **One- vs two-tailed:** use the **1-tailed** column for one-sided tests ($H_1:\ >$ or $<$) and the **2-tailed** column for two-sided tests ($H_1:\ \neq$). Equivalently, a two-sided test at $\alpha$ uses the one-sided critical value at $\alpha/2$.
> - **F-distribution:** **numerator** df $= q$ (number of restrictions); **denominator** df $= N - M$. There is a **separate table for each significance level** ($\alpha = 10\%, 5\%, 1\%$) — pick the right one.

> [!example] Activity 13 (part 1) — reading the F-table ^activity-13
> Model on $N = 30$ observations:
> $$y = \beta_0 + \beta_1 X_1 + \beta_2 X_2 + \beta_3\,LEFT + \beta_4\,RIGHT + u,$$
> where $LEFT, RIGHT$ are dummies for the categorical variable $POSITION \in \{LEFT, MIDDLE, RIGHT\}$ (so $MIDDLE$ is the base category). Test whether $POSITION$ is jointly significant at $\alpha = 5\%$: $H_0:\ \beta_3 = \beta_4 = 0$.
> - **Restrictions** $q = 2$ (two dummies set to zero).
> - **Parameters** $M = 5$ ($\beta_0$ through $\beta_4$), so denominator $df = N - M = 30 - 5 = 25$.
> - Critical value: read the **5% F-table** at numerator $df = 2$, denominator $df = 25$, giving $F_{0.05}(2,\,25) \approx 3.39$.
> - **Decision rule:** reject $H_0$ (POSITION is significant) if the computed $F > 3.39$.

---

# 1. Basic Building Blocks

## 1.1 The population model and the sample

> [!info] The data-generating process (DGP) ^dgp
> We assume a **population model**
> $$y = \beta_0 + \beta_1 x + u,$$
> with outcome $y$, explanatory variable $x$, random error $u$ (everything else that affects $y$), intercept $\beta_0$, and slope $\beta_1$ (the effect of $x$ on $y$). For a random sample of size $n$, observation $i$ obeys $y_i = \beta_0 + \beta_1 x_i + u_i$.

We observe $\{y_i\}$ and $\{x_i\}$ but **never** the $\{u_i\}$ or the true $\beta$'s, so $\beta_1$ cannot be recovered exactly — it must be **estimated**.

## 1.2 Deriving the OLS estimators

> [!info] OLS minimises the sum of squared residuals ^ols-objective
> Define the **residual** $\hat u_i = y_i - (\hat\beta_0 + \hat\beta_1 x_i)$ — the gap between the observed $y_i$ and the fitted value. (Distinguish it from the unobservable **error** $u_i$, which is the gap from the *true* line.) OLS chooses $\hat\beta_0, \hat\beta_1$ to solve
> $$\min_{\hat\beta_0,\hat\beta_1}\ \sum_{i=1}^{n}\hat u_i^2 = \min_{\hat\beta_0,\hat\beta_1}\ \sum_{i=1}^{n}\big(y_i - \hat\beta_0 - \hat\beta_1 x_i\big)^2.$$

The two first-order conditions (FOCs) are:

$$\frac{\partial}{\partial\hat\beta_0}:\ -2\sum_i \hat u_i = 0 \;\Rightarrow\; \sum_i \hat u_i = 0,\qquad
\frac{\partial}{\partial\hat\beta_1}:\ -2\sum_i x_i\hat u_i = 0 \;\Rightarrow\; \sum_i x_i\hat u_i = 0.$$

Two equations, two unknowns. Solving FOC (1) gives two facts that recur throughout the course:

> [!tip] Two results that fall straight out of FOC (1) ^foc1-results
> - **The fitted line passes through the sample means:** $\bar y = \hat\beta_0 + \hat\beta_1\bar x$.
> - **The intercept is pinned down by the slope:** $\boxed{\hat\beta_0 = \bar y - \hat\beta_1\bar x}$.

Substituting back and using FOC (2) gives the slope:

$$\boxed{\hat\beta_1 = \frac{\sum_i (x_i-\bar x)(y_i-\bar y)}{\sum_i (x_i-\bar x)^2} = \frac{s_{xy}}{s_{xx}}}$$ ^slope-formula

> [!note] Reading the slope formula
> $\hat\beta_1$ is the **sample covariance of $x$ and $y$ divided by the sample variance of $x$**. Positive covariance ⇒ positive slope. This is the single most important formula in the course: nearly every later result (OVB, regression through the origin, the WLS transformations) is a manipulation of it.

**Multivariate case.** For $y_i = \hat\beta_0 + \hat\beta_1 x_{1i} + \dots + \hat\beta_K x_{Ki} + \hat u_i$, OLS gives $K+1$ FOCs of the same shape: $\sum_i \hat u_i = 0$ and $\sum_i \hat u_i x_{ji} = 0$ for each regressor $j$. The residuals are mechanically orthogonal to every regressor.

## 1.3 Sampling distribution & the variance of the estimators

> [!info] Variance of the OLS estimators ^var-betahat
> **Single-variable model:**
> $$\operatorname{Var}(\hat\beta_1) = \frac{\sigma_u^2}{\sum_i (x_i-\bar x)^2}$$
> $$\operatorname{Var}(\hat\beta_0) = \sigma_u^2\left[\frac{1}{N} + \frac{\bar x^2}{\sum_i (x_i-\bar x)^2}\right]$$
> **Multivariate model** (coefficient $j$):
> $$\boxed{\operatorname{Var}(\hat\beta_j) = \frac{\sigma_u^2}{(1-R_j^2)\sum_i (x_{ji}-\bar x_j)^2}}$$
> where $R_j^2$ is the $R^2$ from regressing $x_j$ on **all the other** regressors. The unknown error variance is estimated from the residuals:
> $$\hat\sigma_u^2 = \frac{1}{N-M}\sum_{i=1}^{N}\hat u_i^2 \qquad (M = \text{number of parameters}).$$

> [!tip] What drives precision — read the variance formula
> $\operatorname{Var}(\hat\beta_j)$ is **larger** (less precise estimate) when: the error variance $\sigma_u^2$ is large; there is little spread in $x_j$ (small $\sum (x_{ji}-\bar x_j)^2$); or $x_j$ is highly explained by the other regressors ($R_j^2 \to 1$, i.e. **multicollinearity**). This one expression already foreshadows Part 2.

## 1.4 Properties of estimators & the classical assumptions

> [!info] Three properties ^estimator-properties
> - **Sampling distribution:** how variation across samples translates into variation in $\hat\theta$.
> - **Unbiased:** $\mathbb{E}[\hat\theta] = \theta$ — on average, dead on.
> - **Efficient:** has the **smallest variance** among all unbiased estimators.

> [!info] The five classical assumptions ^classical-assumptions
> - **A1** — mean-zero errors: $\mathbb{E}[u] = 0$.
> - **A2** — exogeneity: $\mathbb{E}[u \mid x_k] = 0$ for all regressors $k$.
> - **A3** — no autocorrelation: $\operatorname{Cov}(u_i, u_j) = 0$ for $i \neq j$.
> - **A4** — homoskedasticity: $\operatorname{Var}(u \mid x_k) = \sigma^2$ (constant).
> - **A5** — normality: $u_i \sim N(0, \sigma_u^2)$.

> [!info] What each bundle of assumptions buys you ^assumption-payoffs
> | Result | Needs | Statement |
> |---|---|---|
> | **Unbiasedness** | A1 + A2 | $\mathbb{E}[\hat\beta_j] = \beta_j$ |
> | **Gauss–Markov (BLUE)** | A1–A4 | OLS has the **minimum variance** of all linear unbiased estimators |
> | **Normality of $\hat\beta$** | A1–A5 | $\hat\beta_1 \sim N\big(\beta_1, \operatorname{Var}(\hat\beta_1)\big)$, enabling exact t/F inference |

> [!tip] Why this table is the spine of the course
> Each "problem" in Part 2 is best understood as **which assumption fails and therefore which property is lost**: omitted variables kill **A2** (so biased); heteroskedasticity kills **A4** (still unbiased, but no longer efficient and SEs wrong). Memorise *which assumption → which casualty*.

---

## 1.5 Simple hypothesis testing — the t-test

> [!info] Standardising the estimator into a t-statistic ^t-stat
> Because $\hat\beta_1$ is normal, subtracting its mean and dividing by its standard deviation gives a standard normal; replacing the unknown $\sigma_u^2$ by $\hat\sigma_u^2$ turns it into a **t-distribution with $N-M$ df**:
> $$\boxed{t(\hat\beta_1) = \frac{\hat\beta_1 - \beta_1}{\operatorname{s.e.}(\hat\beta_1)} \sim t_{N-M}}$$

> [!info] The four steps of a t-test ^t-test-steps
> 1. **State $H_0$ and $H_1$.** A claim about one parameter; two-sided ($=$ vs $\neq$) or one-sided ($\leq$ vs $>$). **$H_0$ always contains the equality.**
> 2. **Compute the test statistic under $H_0$:** $t(\hat\beta_1) = \dfrac{\hat\beta_1 - b}{\operatorname{s.e.}(\hat\beta_1)}$, plugging in the value $b$ that $H_0$ asserts.
> 3. **Find the critical value** from the t-table at significance $\alpha$ and $df = N-M$ (use $\alpha/2$ for two-sided).
> 4. **Decide:** reject $H_0$ if the statistic is **more extreme** than the critical value.

| | Two-sided test | One-sided test (right) |
|---|---|---|
| Hypotheses | $H_0:\beta_1 = b$ vs $H_1:\beta_1 \neq b$ | $H_0:\beta_1 \leq b$ vs $H_1:\beta_1 > b$ |
| Critical value | $t_{\alpha/2}(df)$ | $t_{\alpha}(df)$ |
| Reject if | $|t(\hat\beta_1)| \geq t_{\alpha/2}(df)$ | $t(\hat\beta_1) \geq t_{\alpha}(df)$ |
| Rejection region | both tails ($\alpha/2$ each) | one tail ($\alpha$) |

> [!info] Significance testing & p-values ^p-value
> **Significance testing** is the special two-sided case $H_0:\beta_k = 0$ vs $H_1:\beta_k \neq 0$. The statistic $t(\hat\beta_k) = \hat\beta_k/\operatorname{s.e.}(\hat\beta_k)$ is what R prints. The **p-value** answers: *"if $H_0$ were true, what is the probability of seeing a t-statistic at least as extreme as the one we got?"* — formally $p = \mathbb{P}(|T_{df}| \geq |t(\hat\beta_k)|)$. It is the **lowest significance level at which you would still reject**. Small p ⇒ reject.

---

## 1.6 Confidence intervals

> [!info] The CI of an OLS estimator ^conf-interval
> A $1-\alpha$ confidence interval satisfies $\mathbb{P}(L < \theta < U) = 1-\alpha$. Inverting the t-statistic gives
> $$\boxed{\hat\beta_1 \pm t_{\alpha/2}(df)\cdot \operatorname{s.e.}(\hat\beta_1)}$$
> with, for the single-variable model, $\operatorname{s.e.}(\hat\beta_1) = \sqrt{\hat\sigma_u^2/\sum_i(x_i-\bar x)^2}$.

> [!tip] The CI ⇔ two-sided test duality ^ci-test-duality
> A two-sided test of $H_0:\beta_1 = b$ at level $\alpha$ and the $1-\alpha$ CI are **the same test**:
> $$\text{Reject } H_0 \iff b \text{ lies OUTSIDE the } 1-\alpha \text{ confidence interval.}$$
> So you can do a two-sided test just by checking whether the hypothesised value sits in the interval. (A common exam shortcut.)

---

## 1.7 Multiple hypothesis testing — the F-test

> [!info] The five steps of an F-test ^f-test-steps
> 1. **State $H_0$, $H_1$** — a claim about **any number** of parameters and how they relate; $H_0$ contains the equalities.
> 2. **Write the unrestricted model** (the full model).
> 3. **Write the restricted model** — the model *assuming $H_0$ is true*. This may create a **new dependent variable** (if $H_0:\beta_j = b,\ b\neq 0$) or a **new explanatory variable** (if $H_0:\beta_j = k\beta_i$).
> 4. **Compute the F-statistic** from the two residual sums of squares.
> 5. **Decide** against the F-table critical value.

> [!info] The F-statistic ^f-stat
> $$\boxed{F = \frac{(RSS_R - RSS_{UR})/q}{RSS_{UR}/(N-M)} \sim F_{q,\,N-M}}$$
> - $RSS_R$, $RSS_{UR}$ — residual sums of squares of the **restricted** and **unrestricted** models.
> - $q$ — number of restrictions in $H_0$ (numerator df).
> - $N - M$ — df of the unrestricted model ($M$ = parameters/FOCs there).
> Imposing a restriction can only *raise* RSS, so $RSS_R \geq RSS_{UR}$ and $F \geq 0$. A **large** $F$ means the restriction hurt the fit a lot ⇒ reject.

> [!tip] How F and t relate ^f-vs-t
> When $q = 1$ (a single restriction) the two tests are equivalent, via
> $$F_{1,\,N-M} = \big(t_{N-M}\big)^2.$$
> For a **joint** test (e.g. $H_0:\beta_1=\beta_2=\beta_3=0$): if every coefficient is *separately* significant on its t-test, the joint F-test will be significant too — but the converse can fail (joint significance with individually-insignificant coefficients is the classic **multicollinearity** signature).

---

## 1.8 Goodness-of-fit: $R^2$ and the model-significance F-test

> [!info] $R^2$ ^r-squared
> $$R^2 = \frac{\operatorname{Var}(\hat Y_i)}{\operatorname{Var}(Y_i)} = 1 - \frac{\operatorname{Var}(\hat u_i)}{\operatorname{Var}(Y_i)}$$
> — the fraction of the variance in $y$ the model explains. Closer to 1 is "better fit." To compare models with **different numbers of regressors**, use **adjusted $R^2$**, which penalises extra variables.

> [!info] The model-significance (overall-F) test ^model-f-test
> Tests whether the regressors *jointly* explain anything: $H_0:\beta_1=\beta_2=\dots=\beta_k = 0$. The restricted model is just $y_i = \beta_0 + u_i$ (so $R_R^2 = 0$), and the F-statistic can be written purely in $R^2$ terms:
> $$F = \frac{R_{UR}^2/(M-1)}{(1-R_{UR}^2)/(N-M)} \sim F_{M-1,\,N-M}.$$
> This is the "F-statistic" line at the bottom of R's `summary()`.

---

# 2. Things That Can Go Wrong

> [!info] The master summary ^problems-summary
> | Problem | Assumption hit | Bias? | Efficiency / SEs | Fix |
> |---|---|---|---|---|
> | **Multicollinearity** | none (data issue) | **Unbiased** | High variance, big SEs | More data / drop a collinear var / accept it |
> | **Irrelevant variable** | none | **Unbiased** | Higher variance only | Drop it (after checking it's not collinearity) |
> | **Omitted relevant variable** | **A2** | **Biased** | SEs also unreliable | Add the variable (need its data) |
> | **Heteroskedasticity** | **A4** | **Unbiased** | Not efficient; SEs wrong | WLS (known form) or White (unknown) |

## 2.1 Multicollinearity

> [!info] Definition ^multicollinearity
> A linear relationship among the explanatory variables.
> - **Perfect:** an exact linear transformation exists, e.g. $x_{1i} = 5x_{2i}$ for all $i$ — OLS **cannot be computed** (the model is not identified).
> - **Partial:** a strong but not exact linear relation, e.g. $x_{1i}\sim N(x_{2i},1)$.

> [!warning] The effect — inflated variance ^multicollinearity-effect
> Recall $\operatorname{Var}(\hat\beta_j) = \dfrac{\sigma_u^2}{(1-R_j^2)\sum_i(x_{ji}-\bar x_j)^2}$. High collinearity ⇒ $R_j^2$ high ⇒ $(1-R_j^2)$ small ⇒ **variance blows up**. You can't disentangle the separate effects of the collinear variables. Estimates stay **unbiased**, just imprecise.

> [!tip] Detecting partial multicollinearity ^multicollinearity-detect
> Tell-tale signs when $X$ and $Z$ are partially collinear:
> - With **both** in the model: **neither** is significant.
> - With **only $X$**: it *is* significant, and **adjusted $R^2$ barely changes** versus the both-in model.
> - With **only $Z$**: same story.
> - **Rule of thumb:** $\operatorname{cor}(X,Z)$ is high (above ~0.7).
> This doesn't always occur under partial collinearity, but when it does it is a strong indicator.

## 2.2 Including an irrelevant variable

> [!info] Consequence — noise, not bias ^irrelevant-var
> Adding a variable that doesn't belong leaves OLS **unbiased** (A1–A2 intact). The only cost is **higher variance** of the estimates. It's easy to spot (the coefficient is insignificant) and easy to fix (drop it and re-estimate).

> [!warning] Don't confuse "irrelevant" with "collinear" ^irrelevant-vs-collinear
> A *seemingly* irrelevant variable (small t-stat) might actually be **collinear** with another regressor — multicollinearity also produces small t-stats. **Before** dropping a variable, check the **correlation matrix** of the regressors and run an **F-test** for joint significance. Drop only if it's genuinely irrelevant.

## 2.3 Omitting a relevant variable (OVB)

> [!info] How the bias arises ^ovb-mechanism
> Suppose the true DGP (satisfying A1–A4) is $y_i = \tilde\beta_0 + \tilde\beta_1 x_{1i} + \tilde\beta_2 x_{2i} + \tilde u_i$, but you estimate $y_i = \beta_0 + \beta_1 x_{1i} + u_i$. The dropped $x_2$ folds into the error. If $x_1$ and $x_2$ are **correlated**, the error is now correlated with $x_1$ — this **violates A2**, and $\hat\beta_1$ becomes **biased**.

> [!info] The bias formula and its sign ^ovb-formula
> $$\boxed{\text{bias} = \tilde\beta_2 \cdot \frac{S_{12}}{S_{11}}}$$
> where $\tilde\beta_2$ is the true effect of the omitted variable and $S_{12}$ is the sample covariance between $x_1$ and $x_2$ ($S_{11}$ the variance of $x_1$, always $> 0$). The **sign** of the bias:
>
> | | $S_{12} > 0$ | $S_{12} < 0$ |
> |---|---|---|
> | $\tilde\beta_2 > 0$ | biased **up** | biased **down** |
> | $\tilde\beta_2 < 0$ | biased **down** | biased **up** |
>
> Special cases: if $S_{12}=0$ ($x_1\perp x_2$) ⇒ **no bias**; if $\tilde\beta_2 = 0$ ⇒ the omitted variable was irrelevant anyway. With several omitted variables the direction is generally **indeterminate**.

> [!tip] Bias vs variance — the modelling rule ^bias-variance
> Omitting a relevant variable **biases** the estimates (a serious, hard-to-detect, hard-to-fix problem); including an irrelevant one only **raises variance** (mild). Since **we always prefer unbiasedness over minimal variance**, the rule of thumb is: **add any plausibly relevant regressor.** A small variance cost is worth avoiding bias.

## 2.4 Heteroskedasticity

> [!info] Definition and consequences ^heteroskedasticity
> A4 fails: $\operatorname{Var}(u_i)$ is not constant. Then **OLS stays unbiased** (A1, A2 hold) **but** the usual SE formula (which assumes constant variance) is **biased**, so **t- and F-tests are invalid**, and Gauss–Markov fails so OLS is **not efficient**. In R output, only the coefficient **Estimate** column is trustworthy.

> [!info] The two fixes ^hetero-fixes
> | | **Weighted Least Squares (WLS)** | **White correction** |
> |---|---|---|
> | Needs the variance form? | **Yes** — know $h_i>0$ with $\operatorname{Var}(u_i)=\sigma^2 h_i$ | **No** |
> | Coefficients change? | **Yes** (and $R^2$ changes) | **No** ($R^2$ unchanged) |
> | SEs / tests change? | Yes | Yes |
> | Efficient (BLUE)? | **Yes** | **No** |
>
> **WLS:** divide every term by $\sqrt{h_i}$ so the transformed errors satisfy A4 (verify the leftover variance collapses to a constant). **White:** keep OLS, plug each unknown $\operatorname{Var}(u_i)$ with the squared residual $\hat u_i^2$ to get a robust SE. Across **groups/time**, run **separate regressions** so each keeps its own variance.

See [[Lec_12-Heteroskedasticity]] for the full derivations.

---

# 3. Fancier Models (Interpretation)

## 3.1 Changing units of measurement

> [!info] What rescaling does to the estimates ^unit-changes
> | Transformation | Intercept $\hat\beta_0$ | Slope $\hat\beta_1$ |
> |---|---|---|
> | Add constant $c$ to $y$ | $+c$ | unchanged |
> | Multiply $y$ by $c$ | $\times c$ | $\times c$ |
> | Add constant $c$ to $x$ | $-c\hat\beta_1$ | unchanged |
> | Multiply $x$ by $c$ | unchanged | $\div c$ |
>
> Standard errors scale **the same way** as their coefficients, so **t-statistics and significance are unaffected** by a change of units.

> [!example] Method for "multiply $y$ by $c$" derivations ^unit-method
> To find how new coefficients $(\tilde\beta_0,\tilde\beta_1)$ relate to the originals: (1) rearrange the rescaled equation into $y = a + bx$ form; (2) match $a = \beta_0$; (3) match $b = \beta_1$. E.g. $y\cdot c = \tilde\beta_0 + \tilde\beta_1 x$ rearranges to $y = \tilde\beta_0/c + (\tilde\beta_1/c)x$, so $\tilde\beta_0 = \beta_0 c$ and $\tilde\beta_1 = \beta_1 c$.

## 3.2 Regression through the origin

> [!info] No-intercept slope ^through-origin
> Forcing $\beta_0 = 0$ gives $\tilde\beta_1 = \dfrac{\sum_i x_i y_i}{\sum_i x_i^2}$ (versus the usual $\hat\beta_1 = \dfrac{\sum_i(x_i-\bar x)y_i}{\sum_i(x_i-\bar x)^2}$).
> - The two coincide **only if $\bar x = 0$**.
> - Regression through the origin is **unbiased only if the true intercept is genuinely zero** ($\beta_0 = 0$). Forcing it otherwise reintroduces bias.

## 3.3 Logarithms — marginal effect, rate of change, elasticity

> [!info] The three economic moments ^log-moments
> - **Marginal effect:** $\dfrac{dy}{dx} = \dfrac{\Delta y}{\Delta x}$ (units of $y$ per unit of $x$).
> - **Rate of change:** $\dfrac{\Delta y/\Delta x}{y} = \dfrac{\Delta y}{\Delta x}\cdot\dfrac{1}{y}$ (% change in $y$ per unit of $x$).
> - **Elasticity:** $\dfrac{\Delta y}{\Delta x}\cdot\dfrac{x}{y}$ (% change in $y$ per **% change** in $x$).

> [!info] Slope interpretation by model ^log-interpretation
> | Model | Equation | Interpretation of $\hat\beta_1$ |
> |---|---|---|
> | **Level–level** | $y = \hat\beta_0 + \hat\beta_1 x$ | $x\uparrow 1$ unit ⇒ $y\uparrow \hat\beta_1$ **units** |
> | **Log–level** | $\ln y = \hat\beta_0 + \hat\beta_1 x$ | $x\uparrow 1$ unit ⇒ $y\uparrow 100\hat\beta_1$ **percent** |
> | **Log–log** | $\ln y = \hat\beta_0 + \hat\beta_1\ln x$ | $x\uparrow 1$ percent ⇒ $y\uparrow \hat\beta_1$ **percent** (elasticity; no $\times100$) |
> | **Level–log** | $y = \hat\beta_0 + \hat\beta_1\ln x$ | $x\uparrow 1$ percent ⇒ $y\uparrow \hat\beta_1/100$ **units** |

> [!note] Full moment table — every model has all three moments ^log-moment-table
> | Model | Marginal effect | Rate of change | Elasticity |
> |---|---|---|---|
> | Level–level | $\hat\beta_1$ | $\hat\beta_1\dfrac{1}{y}$ | $\hat\beta_1\dfrac{x}{y}$ |
> | Log–level | $\hat\beta_1 y$ | $\hat\beta_1$ | $\hat\beta_1 x$ |
> | Log–log | $\hat\beta_1\dfrac{y}{x}$ | $\hat\beta_1\dfrac{1}{x}$ | $\hat\beta_1$ |

## 3.4 Quadratic terms

> [!info] Capturing a turning point ^quadratic
> Adding $x^2$ makes the relation **parabolic**: the effect of $x$ on $y$ rises then falls (if the coefficient on $x^2$ is **negative**) or falls then rises (if **positive**). Use it when you expect the relationship to **change direction**. Test relevance by the **significance of the squared term's coefficient**. **Rule:** as a general rule, **don't drop the un-squared (linear) term** even if it's insignificant — keep the hierarchy.

## 3.5 Categorical variables (dummies)

> [!info] A single dummy shifts the intercept ^dummy
> For $y_i = \beta_0 + \beta_1 x_i + \beta_2\,is.A_i + u_i$ where $is.A_i\in\{0,1\}$:
> - Not in A: $y_i = \beta_0 + \beta_1 x_i + u_i$.
> - In A: $y_i = (\beta_0 + \beta_2) + \beta_1 x_i + u_i$.
> Same **slope**, intercept shifted by $\beta_2$. So $\beta_2$ is the **A-vs-not-A difference**, holding $x$ fixed.

> [!info] Representing a $K$-category variable ^dummy-categorical
> For a variable with $K$ categories, create **$K-1$ dummies**; the left-out category is the **base (control)**, where all dummies $=0$. Each dummy's coefficient is the **effect relative to the base**. E.g. for $\{B, C, D\}$ with $D$ the base: $y_i = \beta_0 + \beta_1 x_i + \beta_2\,is.B_i + \beta_3\,is.C_i + u_i$ — each group gets its own intercept.

> [!warning] Test categorical significance jointly with an F-test ^dummy-ftest
> To ask "does the **whole** categorical variable matter?" test all its dummies together: $H_0:\beta_2 = \beta_3 = 0$ via an **F-test** (not separate t-tests). A single binary category can be tested with a **t-test** on its one dummy. Including all $K$ dummies *and* an intercept is the **dummy-variable trap** (perfect multicollinearity) — always omit one.

> [!tip] Ordinal categories ⇒ stepwise intercepts ^ordinal-dummy
> For an ordered category (Left / Center / Right with Right as base), $y_i = \beta_0 + \beta_1\,is.Left_i + \beta_2\,is.Center_i + u_i$ gives each level its own intercept, producing a **stepwise** pattern across the ordered groups.

## 3.6 Interaction terms & Chow tests

> [!info] Interaction = different slopes per group ^interaction
> $$y_i = \beta_0 + \beta_1 x_i + \beta_2\,male_i + \beta_3 (x_i\cdot male_i) + u_i.$$
> - Women ($male=0$): intercept $\beta_0$, slope $\beta_1$.
> - Men ($male=1$): intercept $\beta_0+\beta_2$, slope $\beta_1+\beta_3$.
> The **dummy** $\beta_2$ shifts the intercept; the **interaction** $\beta_3$ changes the **slope**. So interactions let the marginal effect of $x$ differ by group.

> [!info] Chow test — do two groups share one regression? ^chow
> **Version 1 (dummies/interactions).** Unrestricted: $y_i = \beta_0 + \beta_1 x_i + \beta_2\,man_i + \beta_3 (x_i\,man_i) + u_i$. Restricted: $y_i = \beta_0 + \beta_1 x_i + u_i$. Standard F-test with
> $$F = \frac{(RSS_R - RSS_{UR})/q}{RSS_{UR}/(N-M)} \sim F_{q,\,N-M}.$$
> Reject if the intercept differs ($\beta_2\neq0$), the slope differs ($\beta_3\neq0$), or both.
>
> **Version 2 (separate regressions).** Fit the model separately for each group ($RSS_m$, $RSS_f$). The unrestricted RSS is their sum:
> $$F = \frac{\big(RSS_R - (RSS_m + RSS_f)\big)/q}{(RSS_m + RSS_f)/(N-M)} \sim F_{q,\,N-M},$$
> testing $H_0:\ \beta_0^m=\beta_0^f,\ \beta_1^m=\beta_1^f$. Under homoskedasticity the two versions agree; under **group heteroskedasticity** the separate-regression version is **preferred** (each group keeps its own variance).

---

## 📝 Summary — the one-page recap

1. **OLS** minimises $\sum\hat u_i^2$, giving $\hat\beta_1 = s_{xy}/s_{xx}$ and $\hat\beta_0 = \bar y - \hat\beta_1\bar x$; the fitted line passes through $(\bar x,\bar y)$ and residuals are orthogonal to the regressors.
2. The **classical assumptions** map cleanly to properties: **A1+A2 ⇒ unbiased**; **A1–A4 ⇒ Gauss–Markov (BLUE)**; **A1–A5 ⇒ normal $\hat\beta$**, which powers exact t/F inference.
3. **t-test** ($t = (\hat\beta-b)/\operatorname{s.e.}$, $df=N-M$): one statistic per restriction; two-sided uses $\alpha/2$. A **CI** $\hat\beta \pm t_{\alpha/2}\operatorname{s.e.}$ is the dual of the two-sided test — reject iff $b$ lies outside it. The **p-value** is the smallest $\alpha$ that rejects.
4. **F-test** ($F = \tfrac{(RSS_R-RSS_{UR})/q}{RSS_{UR}/(N-M)}$): for **joint** restrictions; restricted model embeds $H_0$ (new $y$ or new $x$). $F_{1,df}=t_{df}^2$. The **overall-F** ($H_0$: all slopes zero) tests model significance and can be written in $R^2$.
5. **Things that go wrong:** multicollinearity (unbiased, inflated variance, joint-sig-but-individually-insig), irrelevant variable (unbiased, more variance — check it's not collinearity before dropping), **omitted variable (biased via A2**, $\text{bias}=\tilde\beta_2 S_{12}/S_{11}$ — prefer unbiasedness, so include relevant vars), and **heteroskedasticity (A4 fails** → unbiased but inefficient with wrong SEs → WLS if form known, White if not).
6. **Fancier models:** unit changes scale coefficients but not t-stats; regression through the origin is unbiased only if $\beta_0=0$; **logs** give level/percent/elasticity readings; **quadratics** capture turning points (keep the linear term); **dummies** ($K-1$ of them, one base category) shift intercepts and are tested jointly by F; **interactions** change slopes; **Chow tests** check whether two groups share one regression.
7. **Exam mechanics:** use the **printed tables**, get **df right** ($t$: $N-M$; $F$: $q$ over $N-M$), pick the table matching $\alpha$, and watch the one- vs two-tailed distinction.

---

## 📎 Related Notes

- Covers/integrates: [[Lec_08-Goodness of Fit & Multicollinearity]], [[Lec_10-Dummy Variables]], [[Lec_11-Interaction Terms]], [[Lec_12-Heteroskedasticity]]
- Concepts: [[OLS Estimation]], [[Classical Assumptions]], [[Gauss-Markov Theorem]], [[t-test]], [[F-test]], [[Confidence Interval]], [[p-value]], [[R-squared]], [[Adjusted R-squared]], [[Multicollinearity]], [[Omitted Variable Bias]], [[Heteroskedasticity]], [[Weighted Least Squares]], [[White Correction]], [[Dummy Variable]], [[Base Category]], [[Dummy Variable Trap]], [[Interaction Term]], [[Chow Test]], [[Elasticity]], [[Regression Through the Origin]]
- Hub: [[Intro Econometrics]]
