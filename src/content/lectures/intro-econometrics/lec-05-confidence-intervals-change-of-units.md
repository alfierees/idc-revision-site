---
title: Confidence Intervals & Change of Units
week: 5
semester: 1
year: 2
course: "Intro Econometrics"
instructor: "Dr. Aluma Dembo"
lecture: "Lecture 5 — OLS Confidence Intervals and Change of Units"
tags:
  - intro-econometrics
  - confidence-interval
  - standard-error
  - degrees-of-freedom
  - t-distribution
  - normality-assumption
  - change-of-units
  - OLS
aliases:
  - Confidence Intervals
  - Lecture 5 Intro Metrics
  - Change of Units
subject: intro-econometrics
in_scope: true
---

# Confidence Intervals & Change of Units

> Part of: [[Intro Econometrics]] | Key concepts: [[Confidence Interval]], [[Standard Error]], [[Degrees of Freedom]], [[Normality of Errors (A5)]], [[t-Distribution]], [[Critical Value]], [[Change of Variables|Change of Units]], [[Gauss-Markov Theorem]]

---

## Where this lecture sits

> [!info] Estimation to inference
> Up to now the course asked: *given the data, which $\hat\beta$ fits best?* This lecture asks: *how far from $\hat\beta$ could the true $\beta$ plausibly be?* The tool is the **confidence interval**, built from the **standard error** and the **t-distribution**. A second block shows how rescaling $x$ or $y$ changes the estimated coefficients. The same ideas are revised in [[Lec_13-Exam Review]]; worked practice is in [[Assign_01-Interpreting OLS Output & the Birthweight-Smoking Regression]] and [[Assign_03-Change of Variables, Regression Through the Origin & the Housing Model]] (answer keys: [[Assign_01-Solutions (Answer Key)]], [[Assign_03-Solutions (Answer Key)]]).

Short recap of last lecture (the deck opens with it):

- An estimator $\hat\theta$ has a **sampling distribution**; it is **unbiased** if $\mathbb{E}[\hat\theta]=\theta$ and **efficient** if it has the lowest variance among unbiased estimators.
- **[[Gauss-Markov Theorem]]**: if the model is linear and A1 to A4 hold, OLS has the smallest sampling variance of any linear unbiased estimator (BLUE).
- A1: $\mathbb{E}[u]=0$. A2: $\mathbb{E}[u\mid x_k]=0$ (exogeneity). A3: $\mathrm{Cov}(u_i,u_j)=0$ for $i\neq j$. A4: $\mathrm{Var}(u\mid x_k)=\sigma_u^2$ (homoskedasticity).

The new material has four parts:

1. Estimating $\mathrm{Var}(\hat\beta)$ and the idea of degrees of freedom.
2. Adding the normality assumption A5, so $\hat\beta$ has a known shape.
3. Building and interpreting confidence intervals, with two R examples.
4. Change of units.

---

## 1. Estimating the variance of $\hat\beta$

### The plan

1. Use the residuals $\{\hat u_i\}$ to estimate the error variance $\sigma_u^2$.
2. Plug it into $\mathrm{Var}(\hat\beta_1)$ to get the **[[Standard Error]]** of $\hat\beta_1$.
3. Use the standard error to build an interval where $\beta_1$ likely falls.

The variance formulas from last week contain the unknown $\sigma_u^2$:

$$
\mathrm{Var}(\hat\beta_1)=\frac{\sigma_u^2}{\sum (X_i-\bar X)^2}
$$

$$
\mathrm{Var}(\hat\beta_0)=\sigma_u^2\left[\frac{1}{N}+\frac{\bar X^2}{\sum (X_i-\bar X)^2}\right]
$$

### Estimating $\sigma_u^2$

By definition $\sigma_u^2=\mathbb{E}[(u-\mathbb{E}[u])^2]=\mathbb{E}[u^2]$ (since $\mathbb{E}[u]=0$). We replace the unobservable error $u$ by the residual $\hat u$ and the expectation by a sample average:

$$
\boxed{\hat\sigma_u^2=\frac{1}{N-2}\sum_{i=1}^{N}\hat u_i^2}
$$

With $K$ explanatory variables ($K+1$ parameters) divide by $N-K-1$ instead. Substituting $\hat\sigma_u^2$ gives the estimated variances $\widehat{\mathrm{Var}}(\hat\beta_1)$ and $\widehat{\mathrm{Var}}(\hat\beta_0)$; the standard error is the square root.

> [!tip] Why not divide by $N$?
> The residuals are not free: they must satisfy equations that the fitted parameters impose. Each parameter we estimate costs one **degree of freedom**, so dividing by the number of *free* residuals ($N-2$) corrects the bias.

### Degrees of freedom

**[[Degrees of Freedom]]** = the number of observations (pieces of information) that are free to vary once a parameter that uses them has been estimated.

> [!example] Heights (slide example)
> Sample of $N=4$ heights $h_1,\dots,h_4$ with known mean $\bar h=1.7$. Then $h_1,h_2,h_3$ can vary freely, but $h_4=4\times 1.7-h_1-h_2-h_3$ is forced. So the sample variance has 3 degrees of freedom: $\hat\sigma_h^2=\tfrac13\sum(h_i-1.7)^2$.

For regression $y=\beta_0+\beta_1x+u$ the OLS first-order conditions are two equations that the residuals must satisfy:

$$
\sum_{i=1}^N \hat u_i=0 \qquad\text{and}\qquad \sum_{i=1}^N \hat u_i x_i=0
$$

Given $\hat u_2,\dots,\hat u_N$ these pin down $\hat u_N$ (from the first) and $\hat u_1$ (from the second). Two residuals are determined, so only $N-2$ are free.

> [!note] Reconstructed from the slides
> The slide shows the two equations being solved for one residual each (slide 19). The summary sentence "two parameters estimated, so two degrees of freedom lost" is the slide's stated conclusion; the step-by-step wording above is mine.

---

## 2. The shape of the sampling distribution: assumption A5

To turn a standard error into an interval we need the *shape* of the distribution of $\hat\beta$. We add a fifth, weak assumption to A1 to A4:

> [!info] A5: normality of the random errors
> For all $i=1,\dots,N$: $u_i\sim N(0,\sigma_u^2)$. See [[Normality of Errors (A5)]].

### Why it makes $\hat\beta$ normal

The key fact: **a linear transformation of normal variables is normal**. Activity 5 practises this: for $W_1,W_2\sim N(0,\sigma_W^2)$ with $\mathrm{Cov}(W_1,W_2)=0$ and $Z=b+k_1W_1+k_2W_2$,

$$
\mathbb{E}[Z]=b \qquad\text{and}\qquad \mathrm{Var}(Z)=(k_1^2+k_2^2)\,\sigma_W^2
$$

> [!note] Reconstructed from the slides
> The slides pose the activity (slides 25 to 27) and leave the answers blank. The two results above are my working: expectation is linear and $\mathbb{E}[W_j]=0$; variance of a sum of uncorrelated terms adds, and constants drop out.

The slope estimator is a linear function of the errors:

$$
\hat\beta_1=\beta_1+\frac{\sum (x_i-\bar x)u_i}{\sum (x_i-\bar x)x_i}=\beta_1+\sum k_i u_i,
\qquad k_i=\frac{x_i-\bar x}{\sum (x_i-\bar x)x_i}
$$

So $\hat\beta_1=\beta_1+k_1u_1+\dots+k_Nu_N$ is a linear transformation of the normal errors, and the same holds for $\hat\beta_0$. Using the (already derived) mean and variance:

$$
\hat\beta_1\sim N\!\left(\beta_1,\ \frac{\sigma_u^2}{\sum (x_i-\bar x)^2}\right)
$$

with $\mathbb{E}[\hat\beta_0]=\beta_0$, $\mathbb{E}[\hat\beta_1]=\beta_1$ (slide 29 leaves these as fill-in boxes).

### Standardising: Z then t

A normal $W\sim N(\mu,\sigma^2)$ standardises to $Z=\frac{W-\mu}{\sigma}\sim N(0,1)$. Applied to the slope:

$$
Z(\hat\beta_1)=\frac{\hat\beta_1-\beta_1}{\sqrt{\sigma_u^2/\sum (x_i-\bar x)^2}}
$$

This needs $\sigma_u^2$, which is unobserved. Replacing it with the estimate $\hat\sigma_u^2$ **changes the distribution from normal to Student's t**:

$$
\boxed{t(\hat\beta_1)=\frac{\hat\beta_1-\beta_1}{\sqrt{\widehat{\mathrm{Var}}(\hat\beta_1)}}\sim t(N-2)}
\qquad
t(\hat\beta_0)=\frac{\hat\beta_0-\beta_0}{\sqrt{\widehat{\mathrm{Var}}(\hat\beta_0)}}\sim t(N-2)
$$

For the intercept the same recipe applies (Activity 5 part 2: divide $\hat\beta_0-\beta_0$ by $\sqrt{\widehat{\mathrm{Var}}(\hat\beta_0)}$ using the $\hat\beta_0$ variance formula above).

| | Standard normal $Z$ | Student's $t(N-2)$ |
|---|---|---|
| Uses | true $\sigma_u^2$ | estimated $\hat\sigma_u^2$ |
| Tails | thinner | "fatter" |
| Large $N$ | | very close to $Z$ |
| Small $N$ | | noticeably wider, reflecting the extra uncertainty from estimating $\sigma_u^2$ |

> [!tip] Intuition
> Estimating the variance adds noise, so we need more room in the tails. The fewer the degrees of freedom, the fatter the tails; with many degrees of freedom the t is almost normal.

---

## 3. Confidence intervals

### Definition

- $\beta$ is fixed but unknown; $\hat\beta\neq\beta$ almost surely. A **[[Confidence Interval]]** is an *interval estimate* (a point estimate is a single $\hat\theta$): a lower bound $L$ and an upper bound $U$ computed from $\hat\beta$.
- Imagine drawing sample after sample. The **95% CI** is the pair $(L,U)$ such that the true parameter lies inside for 95% of samples.
- In general a $1-\alpha$ level CI satisfies

$$
\mathbb{P}(L<\beta<U)=1-\alpha
$$

where $\alpha$ is the **significance level** (usually 5%), $1-\alpha$ the **confidence level** (usually 95%).

> [!warning] Interpreting a CI
> The randomness is in the interval, not in $\beta$. "95%" describes the procedure over repeated samples; for one realised interval, $\beta$ is either in it or not. The slides define it via repeated samples and do not discuss the one-sample reading.

> [!example] Activity 5: the 100% interval
> Since a normal (or t) variable ranges over $(-\infty,\infty)$, the only interval that is 100% certain is $\mathbb{P}(-\infty<\beta_1<\infty)=1$. Useless in practice: higher confidence means a wider interval.

### Deriving the interval for an OLS coefficient

With $M=K+1$ estimated parameters, $t(\hat\beta_1)\sim t(N-M)$ (for simple regression $M=2$). Let $t_{\alpha/2}[N-M]$ be the **[[Critical Value]]** that leaves area $\alpha/2$ in each tail:

$$
\mathbb{P}\Big(-t_{\alpha/2}[N-M]\le t(\hat\beta_1)\le t_{\alpha/2}[N-M]\Big)=1-\alpha
$$

![[Lec05_t_critical_region.png]]

Substitute $t(\hat\beta_1)=\frac{\hat\beta_1-\beta_1}{\sqrt{\widehat{\mathrm{Var}}(\hat\beta_1)}}$ and rearrange the inequality to isolate $\beta_1$:

$$
\mathbb{P}\Big(\hat\beta_1-t_{\alpha/2}[N-M]\sqrt{\widehat{\mathrm{Var}}(\hat\beta_1)}\ \le\ \beta_1\ \le\ \hat\beta_1+t_{\alpha/2}[N-M]\sqrt{\widehat{\mathrm{Var}}(\hat\beta_1)}\Big)=1-\alpha
$$

Compactly:

$$
\boxed{\hat\beta_1\ \pm\ t_{\alpha/2}[N-M]\cdot \mathrm{se}(\hat\beta_1)},\qquad \mathrm{se}(\hat\beta_1)=\sqrt{\widehat{\mathrm{Var}}(\hat\beta_1)}
$$

> [!note] Notation
> The slides write $\sqrt{\widehat{\mathrm{Var}}(\hat\beta_1)}$ throughout; in the R examples the number they plug in (e.g. 0.019) is the **standard error column** of `summary()`, i.e. already the square root.

### Getting the critical value

- From the **t table**: choose the degrees of freedom row ($N-M$) and the column for the significance level. The table is labelled by one-tailed and two-tailed levels; for a two-tailed CI use the two-tailed column ($0.10$, $0.05$, $0.01$ for 90%, 95%, 99%). If your exact df is missing, use the closest value (the slides use 30 for 32).
- In R: `qt(p = 0.975, df = 32)` gives the 95% critical value (use $p=1-\alpha/2$).

| Confidence | $\alpha$ | `qt` argument ($p=1-\alpha/2$) | $t_{\alpha/2}[32]$ (R, slide 52) |
|---|---|---|---|
| 90% | 0.10 | 0.95 | 1.694 |
| 95% | 0.05 | 0.975 | 2.037 |
| 99% | 0.01 | 0.995 | 2.738 |

> [!example] Activity 5 part 3: a hand calculation
> $N=10$, $M=2$ (so 8 degrees of freedom), $\hat\beta_1=16$, $\widehat{\mathrm{Var}}(\hat\beta_1)=4$ so $\mathrm{se}=2$. The two-tailed 5% critical value at 8 df is $2.306$, so the 95% CI is $16\pm 2.306\times 2=16\pm 4.61$, i.e. $(11.39,\ 20.61)$. The common slip is to use the variance (4) instead of its square root (2).

> [!note] Reconstructed from the slides
> The slides set up the problem (slides 45 to 47) and leave the answer box empty. The numbers above are my working with the table value for 8 df.

### What makes a CI wide?

$$
\mathbb{P}\Big(\hat\beta_1-t_{\alpha/2}\,\mathrm{se}\le\beta_1\le\hat\beta_1+t_{\alpha/2}\,\mathrm{se}\Big)=1-\alpha
$$

The interval is **larger** when:

- the **standard error** is larger, or
- the **confidence level** is higher (e.g. 99% rather than 90%).

The *size of the estimate* does not affect the width: the interval is always centred on $\hat\beta_1$.

---

### Example 1: income-consumption model

Model: $\text{Consumption}=\beta_0+\beta_1\text{GDP}+u$. Israeli macro data, yearly 1975 to 2008, per capita in NIS at 2005 prices. $\beta_1$ is the change in consumption per capita when GDP per capita rises by one shekel (the average marginal propensity to consume); $\beta_0$ is consumption at GDP of 0.

![[Lec05_data_income_consumption_scatter.png]]

The relation looks linear. R output (`summary(lm(cons.2005 ~ gdp.2005))`), with the pieces needed for a CI highlighted on the slide: the estimates, the standard errors, and the degrees of freedom.

![[Lec05_data_income_consumption_summary.png]]

| Term | Estimate | Std. error | t value |
|---|---|---|---|
| Intercept | -21894.88752 | 1376.81459 | -15.9 |
| GDP | 0.81547 | 0.01914 | 42.6 |

Residual standard error 1325 on 32 degrees of freedom; $R^2=0.9827$; $F=1815$ on 1 and 32 DF.

> [!warning] Check slide 50 against the data description
> The slide says 34 yearly observations (1975 to 2008) and the output prints "2 observations deleted due to missingness", yet reports 32 degrees of freedom (which equals $N-2$ only if $N=34$). The slides use the printed 32 df, and so do I.

CIs for $\beta_1$ using $\hat\beta_1=0.815$, $\mathrm{se}=0.019$ (slide values, rounded):

| Level | Critical value | Interval |
|---|---|---|
| 90% | 1.694 | $0.815\pm1.694\times0.019 = (0.783,\ 0.847)$ |
| 95% | 2.036 | $(0.776,\ 0.854)$ |
| 99% | 2.738 | $(0.763,\ 0.867)$ |

![[Lec05_nested_confidence_intervals.png]]

Same estimate, same standard error: only the multiplier grows with confidence. The limiting 100% interval is $(-\infty,\infty)$.

### Example 2: housing prices

Model: $\log(\text{Price})=\beta_0+\beta_1\log(\text{sqrft})+\beta_2\,\text{bdrms}+u$, 88 US apartments (price in dollars, `bdrms` = number of bedrooms, `sqrft` = area in square feet).

Interpretation (log-log and log-level, see [[Lec_13-Exam Review]]):

- $\beta_1$: percentage change in price for a **1% increase in area**, all else equal (an elasticity).
- $\beta_2$: **percentage** change in price from one more bedroom, all else equal (as a proportion; 0.038 is about 3.8%).
- $\beta_0$: log price when $\log(\text{sqrft})=0$ and no bedrooms (area of 1 square foot).

![[Lec05_data_housing_summary.png]]

| Term | Estimate | Std. error | t value | p |
|---|---|---|---|---|
| Intercept | 6.28435 | 0.69758 | 9.009 | 5.18e-14 |
| lsqrft | 0.80826 | 0.09869 | 8.190 | 2.35e-12 |
| bdrms | 0.03811 | 0.03034 | 1.256 | 0.213 |

Residual standard error 0.2035 on 85 df; $R^2=0.5611$, adjusted $R^2=0.5508$; $F=54.34$ on 2 and 85 DF.

The slides use a critical value of **2** (the large-sample approximation to $t_{0.025}[85]\approx1.99$):

| Coefficient | 95% CI (slide, critical value 2) |
|---|---|
| bedrooms $\beta_2$ | $0.03811\pm2\times0.03034 = (-0.0225,\ 0.0987)$ |
| square footage $\beta_1$ | $0.8083\pm2\times0.0987 = (0.611,\ 1.006)$ |

> [!tip] Reading the intervals
> The bedrooms interval **contains 0**, so at 95% we cannot rule out that an extra bedroom has no effect on price once area is controlled for (consistent with $p=0.213$). The area interval is far from 0. This link between "CI contains 0" and hypothesis tests is exactly what the next lecture develops; the slides only say the machinery "will be used to calculate confidence intervals and to conduct simple hypothesis tests".

### Summary of the t results

| Result | Formula |
|---|---|
| Intercept | $t(\hat\beta_0)=\dfrac{\hat\beta_0-\beta_0}{\sqrt{\widehat{\mathrm{Var}}(\hat\beta_0)}}\sim t(N-2)$ |
| Slope | $t(\hat\beta_1)=\dfrac{\hat\beta_1-\beta_1}{\sqrt{\widehat{\mathrm{Var}}(\hat\beta_1)}}\sim t(N-2)$ |
| CI | $\hat\beta\pm t_{\alpha/2}[N-M]\cdot\mathrm{se}(\hat\beta)$ |

---

## 4. Change of units

Question: if we add a constant to, or multiply, $x$ and/or $y$, what happens to the estimated parameters? Start from $y=\beta_0+\beta_1x$ and let $c>0$. Tildes denote the new regression's parameters. The method on every slide: rewrite the new equation in the form $y=a+bx$, then match intercepts and slopes with the original.

### Adding a constant $c$ to $y$

New equation $y+c=\tilde\beta_0+\tilde\beta_1x$, i.e. $y=(\tilde\beta_0-c)+\tilde\beta_1x$. Matching: $\tilde\beta_0-c=\beta_0$ and $\tilde\beta_1=\beta_1$.

$$
\tilde\beta_1=\beta_1,\qquad \tilde\beta_0=\beta_0+c
$$

The line shifts up by $c$; the slope is unchanged.

### Multiplying $y$ by $c$

New equation $cy=\tilde\beta_0+\tilde\beta_1x$, i.e. $y=\frac{\tilde\beta_0}{c}+\frac{\tilde\beta_1}{c}x$. Matching gives

$$
\tilde\beta_1=c\,\beta_1,\qquad \tilde\beta_0=c\,\beta_0
$$

Both the intercept and the slope are scaled by $c$.

### Adding a constant $c$ to $x$

New equation $y=\tilde\beta_0+\tilde\beta_1(x+c)=(\tilde\beta_0+\tilde\beta_1c)+\tilde\beta_1x$. Matching: $\tilde\beta_0+\tilde\beta_1c=\beta_0$ and $\tilde\beta_1=\beta_1$.

$$
\tilde\beta_1=\beta_1,\qquad \tilde\beta_0=\beta_0-\beta_1c
$$

The slope is unchanged; the intercept adjusts (the line shifts horizontally). The slide leaves the summary boxes for this case blank; the answer is this derivation (slide 70).

### Multiplying $x$ by $c$

New equation $y=\tilde\beta_0+\tilde\beta_1(cx)$. Matching: $\tilde\beta_0=\beta_0$ and $c\,\tilde\beta_1=\beta_1$.

$$
\tilde\beta_1=\frac{\beta_1}{c},\qquad \tilde\beta_0=\beta_0
$$

![[Lec05_change_of_units.png]]

### Summary table

| Change | Slope $\tilde\beta_1$ | Intercept $\tilde\beta_0$ |
|---|---|---|
| $y\to y+c$ | $\beta_1$ | $\beta_0+c$ |
| $y\to c\,y$ | $c\,\beta_1$ | $c\,\beta_0$ |
| $x\to x+c$ | $\beta_1$ | $\beta_0-\beta_1c$ |
| $x\to c\,x$ | $\beta_1/c$ | $\beta_0$ |

> [!warning] Common mistakes
> - Rescaling **$y$** scales the slope **up** by $c$; rescaling **$x$** scales it **down** by $1/c$ (a regressor in thousands of shekels gets a slope 1000 times larger than one in shekels).
> - Adding a constant to $x$ changes only the **intercept** (not the slope), and by $-\beta_1c$, not $+\beta_1c$.
> - The slides state that the change of variables affects the **estimators and their standard errors** in the same way as above: a coefficient scaled by $c$ has its standard error scaled by $c$, so t statistics and CIs transform consistently (a CI in new units is the old CI rescaled). The slides assert this without proof.

> [!tip] Check with units
> If $y$ is in dollars and $x$ in metres, $\beta_1$ is dollars per metre. Switch $x$ to centimetres ($c=100$) and the slope must be 100 times smaller to describe the same relationship: $\beta_1/c$.

---

## Summary

- Estimate $\sigma_u^2$ by $\hat\sigma_u^2=\frac{1}{N-K-1}\sum\hat u_i^2$; the divisor reflects **degrees of freedom** lost to estimated parameters.
- The **standard error** is the square root of the estimated variance of $\hat\beta$.
- With A5 (normal errors) $\hat\beta$ is normal; standardising with the *estimated* variance gives $t(\hat\beta)\sim t(N-M)$, with fatter tails than the normal.
- A **$(1-\alpha)$ CI** is $\hat\beta\pm t_{\alpha/2}[N-M]\cdot\mathrm{se}(\hat\beta)$. It widens with a larger standard error or a higher confidence level; it is always centred on $\hat\beta$.
- Practical reading: take estimate and standard error from `summary()`, get $t$ from the table or `qt`.
- **Change of units** rules: $y+c$ shifts the intercept; $cy$ scales both; $x+c$ changes only the intercept ($-\beta_1c$); $cx$ divides the slope by $c$.

## Related notes

- [[Intro Econometrics]] (course hub)
- [[Lec_08-Goodness of Fit & Multicollinearity]]
- [[Lec_13-Exam Review]] (covers CIs, t tests and units across the whole course)
- [[Assign_01-Interpreting OLS Output & the Birthweight-Smoking Regression]], [[Assign_03-Change of Variables, Regression Through the Origin & the Housing Model]]
- Previous: [[Lec_04-OLS Estimator Properties]] — unbiasedness, variance and the classical assumptions
- Next: [[Lec_06-Hypothesis Tests & p-values]] — t tests and p-values
