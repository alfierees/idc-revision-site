---
title: Statistics Review & OLS Estimation
week: 2
semester: 1
year: 2
academic_year: "2025-26"
course: "Intro Econometrics"
instructor: "Dr. Aluma Dembo"
lecture: "Lecture 02 — Statistics Review & OLS Estimation (two decks)"
tags:
  - intro-econometrics
  - statistics-review
  - expected-value
  - variance
  - covariance
  - correlation
  - iid
  - estimator
  - OLS
  - residuals
  - population-regression-function
  - sample-regression-function
aliases:
  - Lecture 2 Intro Metrics
  - OLS Estimation
subject: intro-econometrics
in_scope: true
---

# Statistics Review & OLS Estimation

> Part of: [[Intro Econometrics]] | Key concepts: [[Expected Value]], [[Variance]], [[Covariance]], [[Correlation]], [[Statistical Independence]], [[IID Sample]], [[Estimator]], [[OLS Estimation]], [[Population Regression Function]], [[Sample Regression Function]], [[Residuals|Residual]]

> [!info] Two decks, one note
> Lecture 2 had two slide decks. **Part 1** (17 slides) is a statistics refresher: the tools needed to say anything about an estimator. **Part 2** (47 slides) introduces the simple regression model and derives the **OLS** formulas from scratch. Later topics (properties of OLS, tests, confidence intervals) are summarised in [[Lec_13-Exam Review]]; practice on this material is in [[Assign_00-R Data Cleaning & Statistics Review]] and [[Assign_01-Interpreting OLS Output & the Birthweight-Smoking Regression]].

---

# Part 1 — Statistics review

## Random and non-random variables

- A **random variable** $X$ has a probability distribution over possible values; what we see are *observations* drawn from that distribution.
- A **non-random variable** takes one value. Convention: capital letters $X, Y, Z$ are random; lower-case $a, b, c$ are non-random. A non-random $a_i$ may change between observations $i$ but is still non-random (it is a fixed, known number for each $i$, e.g. a weight).

## Distribution and density

- **Distribution function:** $F(x) = \Pr(X \le x)$.
- **Density function:** $f(x) = F'(x)$ when the derivative exists.
- Properties: $\int_{-\infty}^{\infty} f(x)\,dx = 1$ and $f(x) \ge 0$.

> [!warning] The slide also writes $0 \le f(x) \le 1$
> That holds for a *probability* (mass), but a density of a continuous variable can exceed 1 (e.g. a narrow normal). Only $f \ge 0$ and total area $=1$ are guaranteed. Treat the upper bound as a slide simplification.

## The Normal distribution

$X \sim N(\mu, \sigma^2)$ has two parameters, mean $\mu$ and variance $\sigma^2$:

$$f(x) = \frac{1}{\sigma\sqrt{2\pi}} \exp\left\{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2\right\}$$

- The **standard normal** $N(0,1)$ has mean 0, standard deviation 1.
- **Standardise:** $Z = \dfrac{X-\mu}{\sigma} \sim N(0,1)$.
- **Theorem:** a *linear transformation of a normal random variable is also normal*. (This is what later lets $\hat\beta$, a linear combination of normal errors, be normal.)

## Expected value (mean)

A location measure: $\mathbb{E}[X] = \int_{-\infty}^{\infty} x f(x)\,dx = \mu_X$. **Linearity** is the property used constantly:

$$\mathbb{E}[a] = a, \qquad \mathbb{E}[aX] = a\,\mathbb{E}[X], \qquad \mathbb{E}[aX + bY + cZ + \cdots] = a\,\mathbb{E}[X] + b\,\mathbb{E}[Y] + c\,\mathbb{E}[Z] + \cdots$$

With non-random weights $a_i$ and random $x_i$:

$$\mathbb{E}\left[\sum x_i\right] = \sum \mathbb{E}[x_i], \qquad \mathbb{E}\left[\sum a_i x_i\right] = \sum a_i\,\mathbb{E}[x_i]$$

> [!tip] Expectation passes through sums and constants
> $\mathbb{E}$ of a sum is the sum of $\mathbb{E}$s **always**, with no conditions. Variance is different (below).

## Variance and standard deviation

$$\text{Var}(X) = \sigma_X^2 = \mathbb{E}\big[(X-\mu)^2\big] = \mathbb{E}[X^2] - \mu^2 = \int (x-\mu)^2 f(x)\,dx$$

It measures how far values of $X$ typically are from the mean. Standard deviation $\sigma = \sqrt{\sigma^2}$ (same units as $X$).

| Property | Statement |
|---|---|
| Constant | $\text{var}(a) = 0$ |
| Scaling | $\text{var}(bX) = b^2\,\text{var}(X)$ |
| Shift and scale | $\text{var}(a + bX) = b^2\,\text{var}(X)$ (adding a constant changes nothing) |
| Sum | $\text{var}(x+y) = \text{var}(x) + \text{var}(y) + 2\,\text{cov}(x,y)$ |
| Difference | $\text{var}(x-y) = \text{var}(x) + \text{var}(y) - 2\,\text{cov}(x,y)$ |
| Three terms | $\text{var}(x+y+z) = \text{var}(x)+\text{var}(y)+\text{var}(z) + 2\text{cov}(x,y) + 2\text{cov}(x,z) + 2\text{cov}(z,y)$ |

> [!warning] Variance of a sum is NOT the sum of variances
> Unlike expectation, $\text{var}(x+y) \ne \text{var}(x)+\text{var}(y)$ in general. They are equal **only when the covariance is zero**. This is why independence (zero covariance) of observations matters so much for the variance of $\bar X$ and of $\hat\beta$.

## Covariance

$$\text{cov}(X,Y) = \mathbb{E}\big[(X-\mathbb{E}[X])(Y-\mathbb{E}[Y])\big] = \mathbb{E}[XY] - \mathbb{E}[X]\,\mathbb{E}[Y]$$

- $\text{cov} > 0$: the variables move together (positive relationship); $\text{cov} < 0$: they move oppositely.
- **Property 1:** the covariance of a random variable with a constant is zero, $\text{cov}(a, X) = 0$. Proof: $\mathbb{E}[(a-a)(X-\mathbb{E}X)] = 0$, or $a\,\mathbb{E}[X] - a\,\mathbb{E}[X] = 0$.
- **Property 2:** for constants $a, b$,

$$\text{var}(aX + bY) = a^2\,\text{var}(X) + b^2\,\text{var}(Y) + 2ab\,\text{cov}(X,Y)$$

## Correlation

A covariance rescaled to be unit-free and bounded:

$$\rho_{X,Y} = \frac{\text{cov}(X,Y)}{\sigma_X \sigma_Y}, \qquad -1 \le \rho_{X,Y} \le 1$$

- $\rho = 1$: perfect positive linear relation; $\rho = -1$: perfect negative; $\rho = 0$: no *linear* relation.
- **Uncorrelated** means $\rho = 0$, which is the same thing as zero covariance.

## Statistical independence

$X$ and $Y$ are **independent** if their joint density is the product of the marginals, $f(x,y) = f(x)\,f(y)$. Equivalently $\mathbb{E}[XY] = \mathbb{E}[X]\,\mathbb{E}[Y]$ (for all functions of them, not just the identity). Plugging into the covariance formula, independence gives $\text{cov}(X,Y) = 0$.

> [!warning] Zero covariance does NOT imply independence
> Independence is the stronger property. The converse fails, as the coin example shows.

### Worked example: uncorrelated but dependent

Flip a coin. $X = 1$ if Head, $X = -1$ if Tail. For $Y$: if Tail, $Y = 0$; if Head, flip again, $Y = 1$ for head and $Y = -1$ for tail.

- $\mathbb{E}[X] = 0.5(1) + 0.5(-1) = 0$ and $\mathbb{E}[Y] = 0.5\cdot 0 + 0.5\,(0.5 - 0.5) = 0$.
- $\mathbb{E}[XY] = \Pr(X{=}1)\cdot 1 \cdot \mathbb{E}[Y \mid X{=}1] + \Pr(X{=}{-1})\cdot(-1)\cdot\mathbb{E}[Y \mid X{=}{-1}] = 0.5\cdot 1\cdot 0 + 0.5\cdot(-1)\cdot 0 = 0$.

So $\text{cov}(X,Y) = 0 - 0\cdot 0 = 0$: uncorrelated. **But** $\Pr(Y = 1 \mid X = 1) = 0.5 \ne \Pr(Y = 1) = 0.25$, so $Y$ depends on $X$ (when $X=-1$, $Y$ is forced to 0).

| If... | Then |
|---|---|
| independent | covariance zero **and** uncorrelated |
| covariance zero (or uncorrelated) | may or may not be independent |

## IID samples

An **iid** (independent, identically distributed) random sample is $N$ draws $X_1, \dots, X_N$ from the same distribution $F$, each independent of the others. Practically:

- every observation has the same mean: $\mathbb{E}[X_i] = \mathbb{E}[X_k]$
- every observation has the same variance: $\text{var}(X_i) = \text{var}(X_k)$
- any two have zero covariance: $\text{cov}(X_i, X_k) = 0$ for $i \ne k$

## Estimators

An **estimator** of a parameter $\theta$ is a function of the random sample, $\hat\theta = G(x_1, \dots, x_N)$, which gives a number for each realised sample. Example: the sample average $\hat\mu = \bar X = \frac{1}{N}\sum X_i$ estimates the population mean.

> [!example] Class average vs university average
> The average height in this class is an *estimate* of the average height at the university. It is generally not identical to the parameter. If the class is a random sample, the sample average is the "best" estimator: **minimum variance and unbiased**.

The sample analogues of each population moment (the "best" estimators):

| Parameter (population, unobserved) | Estimator (sample) |
|---|---|
| $\mathbb{E}[X] = \mu_X$ | $\bar X = \dfrac{1}{N}\sum_i X_i$ |
| $\text{Var}(X) = \mathbb{E}[(X-\mathbb{E}X)^2]$ | $\widehat{\text{Var}}(X) = \hat\sigma_X^2 = \dfrac{1}{N-1}\sum_i (X_i - \bar X)^2$ |
| $\text{Cov}(X,Y) = \mathbb{E}[(X-\mathbb{E}X)(Y-\mathbb{E}Y)]$ | $\widehat{\text{Cov}}(X,Y) = \dfrac{1}{N-1}\sum_i (X_i - \bar X)(Y_i - \bar Y)$ |
| $\rho_{X,Y} = \dfrac{\text{Cov}(X,Y)}{\sigma_X\sigma_Y}$ | $\hat\rho_{X,Y} = \dfrac{\sum_i (X_i-\bar X)(Y_i-\bar Y)}{\sqrt{\sum_i (X_i-\bar X)^2\,\sum_i (Y_i-\bar Y)^2}}$ |

> [!tip] Why $N-1$?
> Dividing by $N-1$ (not $N$) makes the sample variance **unbiased**: the deviations are measured from $\bar X$, not the true $\mu$, which uses up one degree of freedom. The slides state the $N-1$ formula without deriving it.

---

# Part 2 — OLS estimation

## The income-consumption question

We want the effect of income on consumption, and (assuming a causal reading, which the lecture flags with "is this reasonable?") the slope is the **marginal propensity to consume**. Even with data on the whole population, households with the same income do not consume the same amount, so points will not lie on one line.

## Population model, error, and sample

Assume a linear relationship *in the population* (the "theoretical model"):

$$\text{Consumption}_i = \beta_0 + \beta_1\,\text{Income}_i + u_i$$

- $\beta_0 + \beta_1\,\text{Income}$ is the **theoretical line** (impossible to observe, since we cannot gather the whole population).
- $u_i$ is the **random error**: the vertical gap between observation $i$ and the theoretical line. It captures *everything that affects consumption other than income* and varies across individuals.

In practice we have an **iid sample** (the slide shows 10 households with income in thousands and consumption):

| Household | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| Income | 50 | 45 | 70 | 100 | 37 | 75 | 60 | 100 | 37 | 95 |
| Consumption | 40 | 37 | 50 | 60 | 37 | 54 | 58 | 85 | 20 | 93 |

The scatter shows a positive relationship.

## PRF vs SRF

Two different lines, one from the population and one from the sample:

| | **Population Regression Function (PRF)** | **Sample Regression Function (SRF)** |
|---|---|---|
| Model | $y_i = \beta_0 + \beta_1 x_i + u_i$ | $y_i = \hat\beta_0 + \hat\beta_1 x_i + \hat u_i$ |
| Parameters | $\beta_0, \beta_1$: true, **unobserved** | $\hat\beta_0, \hat\beta_1$: **estimates** from OLS |
| Error term | $u_i$: random error, unobserved | $\hat u_i$: residual, computed |
| Fitted line | theoretical line | $\hat y_i = \hat\beta_0 + \hat\beta_1 x_i$ |

The SRF is an **estimator** of the PRF. We want it unbiased with minimum variance, but the two lines will not coincide exactly (a different sample gives a different SRF). The whole course is about using a sample to draw conclusions about the population: how to compute $\hat\beta_0, \hat\beta_1$, why they are "best" under certain assumptions (you must *understand* the proof for the exam, not write it), and what the estimates say about the unobserved $\beta$s.

### Terminology

- $y$: dependent / outcome / endogenous variable. $x$: independent / explanatory / exogenous variable.
- $\beta_0$: intercept of the theoretical model. $\beta_1$: slope, the change in $y$ for a one-unit change in $x$ **holding the error fixed** (all else fixed).
- $u$: anything affecting $y$ other than $x$; its sign puts the observation above or below the line.
- $\hat y_i = \hat\beta_0 + \hat\beta_1 x_i$: the **predicted value**, a point on the SRF.
- **Residual:** $\hat u_i = y_i - \hat y_i = y_i - \hat\beta_0 - \hat\beta_1 x_i$: observed minus predicted. It is an *estimate* of the error $u_i$.

> [!example] Activity 2 (part 1): computing residuals
> Suppose $\hat\beta_0 = 5$ and $\hat\beta_1 = 0.85$.
> - Household 10 (income 95, consumption 93): $\hat u_{10} = 93 - 5 - 0.85\cdot 95 = 93 - 85.75 = \mathbf{2.25}$.
> - Household 9 (income 37, consumption 20): $\hat u_{9} = 20 - 5 - 0.85\cdot 37 = 20 - 36.45 = \mathbf{-16.45}$.
>
> (The slide writes the intermediate step as "$93 - 5 + 85.75$", a sign slip; the answers 2.25 and -16.45 are right.) Positive residual: point above the line.

> [!note] Reconstructed from the slides: Activity 2 (part 2), counting solutions
> The slides pose three questions on four data points; the answer slides are mostly diagrams, so the reasoning below is mine.
> 1. Know $\hat\beta_0, \hat\beta_1$: each residual $\hat u_i = y_i - \hat\beta_0 - \hat\beta_1 x_i$ is then pinned down, so **one** value per observation.
> 2. Know two residuals: two points on a line (both observed points shifted by known amounts) determine the line uniquely, so **one** $(\hat\beta_0, \hat\beta_1)$ pair.
> 3. Know only $\hat\beta_1$: the slope is fixed but the intercept is free, so **infinitely many** $(\hat u, \hat\beta_0)$ combinations (a family of parallel lines).
>
> A line is determined by slope and intercept, or a point and a slope, or two points.

![[Lec02_srf_residuals.png]]
*Theory diagram built from the slide's 10-household sample: the orange line is the slide's trial line, the blue line is the OLS line I computed ($\hat\beta_0 \approx 1.19$, $\hat\beta_1 \approx 0.78$, which the lecture does not state). Thin blue segments are the OLS residuals. The OLS line passes through the sample means (red cross).*

## Choosing the line: why squares

Two decisions define an estimator: **(1)** how to measure the distance of each point from the line, and **(2)** how to aggregate across observations.

- **Sum of residuals** $\min \sum \hat u_i$: fails, because points below the line have negative residuals, so the minimiser is a line far from the data.
- **Absolute value of the sum** $\min \left|\sum \hat u_i\right|$: fails, because *many different lines* give exactly zero (positives and negatives cancel), so it does not identify one line. The slides show two different lines each with zero residual sum.
- **Sum of squared residuals** $\min \sum \hat u_i^2$: no cancellation, and it penalises large misses heavily. This is **OLS**:
  - *Ordinary*: the simplest method to calculate
  - *Least*: because we minimise
  - *Squares*: because we use the squared residuals

![[Lec02_zero_sum_residuals.png]]
*Theory diagram (my toy data, not the slide's): two quite different lines, both with residuals summing to exactly zero, so "sum of residuals" cannot pick a line.*

> [!note] Other loss functions exist
> Instead of squaring we could use the absolute value of each residual, etc. Different functions yield *different* estimators; OLS is just the standard one.

## Deriving the OLS estimators

$$\min_{\hat\beta_0,\hat\beta_1} \sum_{i=1}^{N} \hat u_i^2 = \min_{\hat\beta_0,\hat\beta_1} \sum_{i=1}^{N} \big(y_i - \hat\beta_0 - \hat\beta_1 x_i\big)^2$$

The data are fixed; we search over $\hat\beta_0, \hat\beta_1$. To minimise: take the partial derivative with respect to each, set both to zero, solve.

**Partial derivative w.r.t. $\hat\beta_0$** (chain rule on each squared term, inner derivative $-1$):

$$\frac{\partial}{\partial\hat\beta_0}\sum \hat u_i^2 = -2\sum \big(y_i - \hat\beta_0 - \hat\beta_1 x_i\big) = -2\sum \hat u_i$$

**Partial derivative w.r.t. $\hat\beta_1$** (inner derivative $-x_i$):

$$\frac{\partial}{\partial\hat\beta_1}\sum \hat u_i^2 = -2\sum x_i\big(y_i - \hat\beta_0 - \hat\beta_1 x_i\big) = -2\sum x_i\hat u_i$$

### The first order conditions (FOCs)

$$\text{(1)}\quad \sum_i \hat u_i = 0 \qquad\qquad \text{(2)}\quad \sum_i x_i \hat u_i = 0$$

Two equations, two unknowns.

> [!info] What the FOCs say
> (1) residuals sum to zero (so they average zero); (2) residuals are **uncorrelated with $x$** in the sample. These two facts reappear in every later lecture.

### Solving FOC (1): the intercept

$$0 = \sum (y_i - \hat\beta_0 - \hat\beta_1 x_i) = N\bar y - N\hat\beta_0 - N\hat\beta_1\bar x \;\Rightarrow\; \boxed{\hat\beta_0 = \bar y - \hat\beta_1 \bar x}$$

Two consequences: this gives the intercept as a function of the slope and the data, and the **regression line passes through the sample means**, $\bar y = \hat\beta_0 + \hat\beta_1\bar x$.

### Solving FOC (2): the slope

Substitute $\hat\beta_0 = \bar y - \hat\beta_1\bar x$ into $\sum x_i\hat u_i = 0$:

$$0 = \sum x_i\big(y_i - \bar y + \hat\beta_1\bar x - \hat\beta_1 x_i\big) = \sum x_i (y_i - \bar y) - \hat\beta_1 \sum x_i (x_i - \bar x)$$

$$\Rightarrow\; \hat\beta_1 = \frac{\sum x_i (y_i - \bar y)}{\sum x_i (x_i - \bar x)}$$

The slide then notes (and refers to HW0 / the stats review) that numerator and denominator can be rewritten with $(x_i - \bar x)$, because $\sum \bar x\,(y_i - \bar y) = 0$ and $\sum \bar x\,(x_i - \bar x) = 0$:

$$\boxed{\hat\beta_1 = \frac{\sum (y_i - \bar y)(x_i - \bar x)}{\sum (x_i - \bar x)^2} = \frac{\widehat{\text{Cov}}(y,x)}{\widehat{\text{Var}}(x)} = \frac{S_{xy}}{S_{xx}}}$$

> [!tip] Reading the slope formula
> The slope is the **sample covariance of $x$ and $y$ divided by the sample variance of $x$**. Positive covariance means a positive slope. (The $\frac{1}{N-1}$ factors cancel in the ratio.)

### OLS summary

| Estimator | Formula |
|---|---|
| Intercept | $\hat\beta_0 = \bar y - \hat\beta_1\bar x$ |
| Slope | $\hat\beta_1 = \dfrac{\sum (x_i-\bar x)(y_i-\bar y)}{\sum (x_i-\bar x)^2} = \dfrac{S_{xy}}{S_{xx}}$ |
| Fitted value | $\hat y_i = \hat\beta_0 + \hat\beta_1 x_i$ |
| Residual | $\hat u_i = y_i - \hat y_i$ |

## Statistical vs economic modelling

If we flip the model to $x_i = \alpha_0 + \alpha_1 y_i + v_i$, the same method gives

$$\hat\alpha_1 = \frac{\sum (y_i-\bar y)(x_i-\bar x)}{\sum (y_i-\bar y)^2} = \frac{S_{xy}}{S_{yy}}$$

Both are valid *statistical* estimators, but only one has economic meaning. **The computer cannot tell which variable causes which: that is the economist's job.** (Recall Lecture 1: correlation is not causation.)

## Example: US consumption vs GDP

Data: real personal consumption expenditure (**Cons**) and real GDP, both in billions of 2012 dollars, 75 quarterly observations 2002 to 2020. Model: $\text{Cons}_t = \beta_0 + \beta_1\,\text{GDP}_t + u_t$.

![[Lec02_data_gdp_consumption.png]]
*Real data (cropped from slide 43): consumption against GDP is almost perfectly linear.*

**By hand in R** (from `cov()` and `var()` output on the slide):

$$\hat\beta_1 = \frac{S_{xy}}{S_{xx}} = \frac{1\,894\,662}{2\,552\,852} = 0.7422$$

Or with `lm(Consumption ~ GDP, data = FRED.data)`, which reports:

| Coefficient | Estimate |
|---|---|
| (Intercept) $\hat\beta_0$ | $-957.37$ |
| GDP $\hat\beta_1$ | $0.7422$ |

Fitted model: $\widehat{\text{Cons}} = -957.37 + 0.742\cdot\text{GDP}$.

> [!example] Interpretation (Activity 2 part 4)
> - **Slope:** one extra billion (2012) dollars of GDP goes with **742 million** more consumption; equivalently, 74.2 cents of each dollar of income go to consumption, or 74.2% of income is consumed (the marginal propensity to consume).
> - **Intercept:** when GDP is zero, predicted consumption is $-957.37$ billion. Not interesting: GDP of zero is far outside the data (an extrapolation), and negative consumption is meaningless.

### The flipped regression

`lm(GDP ~ Consumption)` gives intercept $1339.711$ and slope $1.343$: the "computer doesn't know which is the correct model".

> [!note] Reconstructed check (not on the slides)
> $1\,894\,662 / 1\,410\,870 \approx 1.343$ matches the flipped slope ($S_{yy}=1\,410\,870$ from the `var(Consumption)` output). Note $1.343 \ne 1/0.7422 = 1.347$: the flipped slope is *not* the reciprocal of the original, since $\hat\beta_1\hat\alpha_1 = S_{xy}^2/(S_{xx}S_{yy}) = r^2 < 1$ (here about 0.997, so close).

---

## Comparison: PRF vs SRF vs the two regressions

| Idea | Population | Sample |
|---|---|---|
| Line | $\beta_0 + \beta_1 x$ | $\hat\beta_0 + \hat\beta_1 x$ |
| Gap from line | error $u$ (unobserved) | residual $\hat u$ (computed) |
| Known? | never | always, from data |

## Summary

- **Stats toolkit:** $\mathbb{E}$ is linear; $\text{var}(\text{sum})$ needs covariance terms; $\rho = \text{cov}/(\sigma_X\sigma_Y)$ in $[-1,1]$; independent $\Rightarrow$ uncorrelated but **not** the reverse.
- **iid sample:** same mean and variance, zero pairwise covariance. Estimators are functions of the sample; moments are estimated by sample averages ($N-1$ for variance and covariance).
- **Model:** PRF $y = \beta_0 + \beta_1 x + u$ (unobserved); SRF $y = \hat\beta_0 + \hat\beta_1 x + \hat u$ (estimated).
- **OLS** minimises $\sum \hat u_i^2$ (not $\sum \hat u_i$, which cancels). FOCs: $\sum\hat u_i = 0$ and $\sum x_i\hat u_i = 0$.
- **Solution:** $\hat\beta_1 = S_{xy}/S_{xx}$, $\hat\beta_0 = \bar y - \hat\beta_1\bar x$; the line passes through $(\bar x, \bar y)$.
- Regression is statistical; **which variable is $y$ is an economic choice**.

## Related notes

- [[Intro Econometrics]] (hub)
- [[Lec_13-Exam Review]]: whole-course review covering OLS properties, tests and confidence intervals
- [[Lec_08-Goodness of Fit & Multicollinearity]]: uses the FOCs and the SSR/TSS decomposition built here
- [[Assign_00-R Data Cleaning & Statistics Review]] and [[Assign_01-Interpreting OLS Output & the Birthweight-Smoking Regression]]
- Concepts: [[Expected Value]], [[Variance]], [[Covariance]], [[Correlation]], [[Estimator]], [[OLS Estimation]], [[Residuals|Residual]]
- Previous: [[Lec_01-Introduction & Causal Inference]] — causal effect, confounders, the regression model
- Next: [[Lec_03-Nonlinear Models with OLS]] — logs and nonlinear functional forms
