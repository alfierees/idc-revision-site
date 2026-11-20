---
title: OLS Estimator Properties
week: 4
semester: 1
year: 2
academic_year: "2025-26"
course: "Intro Econometrics"
instructor: "Dr. Aluma Dembo"
lecture: "Lecture 04 — OLS Estimator: Desirable Statistical Properties"
tags:
  - intro-econometrics
  - OLS
  - sampling-distribution
  - unbiasedness
  - efficiency
  - gauss-markov
  - classical-assumptions
  - homoskedasticity
  - variance-of-estimator
aliases:
  - OLS Properties
  - Lecture 4 Intro Metrics
  - Gauss-Markov and Unbiasedness
subject: intro-econometrics
in_scope: true
---

# OLS Estimator Properties

> Part of: [[Intro Econometrics]] | Key concepts: [[Sampling Distribution]], [[Unbiasedness]], [[Efficiency]], [[Classical Assumptions]], [[Zero Conditional Mean]], [[Homoskedasticity]], [[Gauss-Markov Theorem]], [[Variance of the OLS Estimator]]

---

## Where this lecture sits

> [!info] Recap from the previous lecture
> - [[OLS Estimation]] picks $\hat\beta_0,\hat\beta_1$ to minimise the sum of squared [[Residuals]] $\sum \hat u_i^2$.
> - That gives two **first order conditions (FOCs)**: $\sum \hat u_i = 0$ (residuals sum to zero) and $\sum \hat u_i x_i = 0$ (residuals are uncorrelated with $x$ in the sample).
> - The **theoretical model** $y_i=\beta_0+\beta_1x_i+u_i$ (unobserved errors $u_i$, true line) is not the same thing as the **fitted model** $y_i=\hat\beta_0+\hat\beta_1x_i+\hat u_i$ (residuals $\hat u_i$, estimated line). The two lines differ, so $\hat\beta\neq\beta$ in any given sample.

The question for today: **are OLS estimates the best we can get?** The lecture answers in four steps:

1. What is a **sampling distribution**, and what do **unbiasedness**, **minimum variance** and **efficiency** mean?
2. Which assumptions (A1 and A2) make OLS **unbiased**, with a proof.
3. Which extra assumptions (A3 and A4) give a formula for the **variance** of OLS?
4. The [[Gauss-Markov Theorem]]: under A0 to A4, OLS is the **best linear unbiased estimator (BLUE)**.

---

## 1. The sampling distribution

### Why estimates vary

$\hat\beta_0$ and $\hat\beta_1$ are **functions of the sample** $\{y_i,x_i\}_{i=1}^N$. Draw a different sample from the same population and you get slightly different estimates. The collection of all these estimates is the ==estimator's sampling distribution==: it shows how much the estimate moves purely because of which sample you happened to draw.

> [!tip] Review: the sample mean
> The first estimator you met is $\bar x$ for the population mean $\mu$. Take a sample of size $N$, compute $\bar x$, repeat $R$ times: the histogram of the $R$ averages is the sampling distribution of $\bar x$. (If $x$ is normal with unknown variance, $\bar x$ standardised has a Student's t distribution.)

### The simulation in the lecture

The slides run a demonstration in R (the lecturer stresses you do **not** need to know the code):

| Step | What is done |
|---|---|
| 1 | Generate a "population" of 1 million observations: $X\sim U[0,5]$, $Y=1+0.5X+U$ with $U\sim N(0,1)$. True values: $\beta_0=1$, $\beta_1=0.5$. |
| 2 | Take 1,000 samples, each of size $N=50$. |
| 3 | In each sample, run the regression and save $\hat\beta_0,\hat\beta_1$. |
| 4 | Plot histograms of the 1,000 estimates of each. |

The histograms are bell-shaped and centred on the true values: the average of the estimates is about 1 for the intercept and about 0.5 for the slope, even though any single estimate can be well off.

> [!note] Reconstructed from the slides
> The figure below is **my re-run** of the same data generating process with a fresh random seed (the slide's own histograms are an image of the lecturer's run). It reproduces the same picture: means of the 1,000 estimates are about 0.995 and 0.504, with spread (standard deviation) about 0.28 for the intercept and 0.10 for the slope.

![[Lec04_simulated_beta_sampling.png]]

---

## 2. Properties of an estimator

An **estimator** is a recipe (function) that turns any sample into an estimate. Many recipes can target the same parameter. For the population mean $\mu$ the slides list:

- **Sample average**: $\hat\mu=\bar x=\frac1N\sum x_i$
- **Silly estimator 1**: $\hat\mu'=\text{median}\{x_i\}$
- **Silly estimator 2**: $\hat\mu''=\frac12\left(\max\{x_i\}-\min\{x_i\}\right)$

To compare recipes we look at two moments of the sampling distribution of $\hat\theta$:

| Moment | Property it measures |
|---|---|
| Expected value $\mathbb E[\hat\theta]$ | [[Unbiasedness]] |
| Variance $\text{var}(\hat\theta)$ | **Minimum variance** |
| Both together | [[Efficiency]] |

### Unbiasedness

$\hat\theta$ is an ==unbiased estimator== of $\theta$ if the mean of its sampling distribution equals the true parameter:

$$\mathbb E[\hat\theta]=\theta$$

- If $\mathbb E[\hat\theta]>\theta$ the estimator is **biased upwards**; if $\mathbb E[\hat\theta]<\theta$ it is **biased downwards**.
- Any single estimate can be wrong; unbiased means **right on average** (the average mistake is zero).

![[Lec04_biased_vs_unbiased.png]]

### Minimum variance and efficiency

- An estimator has ==minimum variance== if its sampling variance is less than or equal to that of any other estimator in the comparison class. Low variance means estimates from different samples cluster tightly, so a single estimate is likely to be close to its own mean.
- ==Efficiency== combines both: an **efficient estimator** has the minimum variance **among all unbiased estimators**. Unbiasedness is a **necessary condition** for efficiency. Between two unbiased estimators, the efficient one is the one with the lower variance.

> [!question] The slides pose these questions without answering them
> *Why is minimum variance important?* Because you only ever see one sample. With a high-variance estimator your one estimate could be far from the truth even though it is right on average.
> *Bias versus minimum variance?* The slides leave this open. It is a genuine trade-off (a slightly biased estimator with much lower variance can land closer to the truth), but **this course restricts attention to unbiased estimators and picks the lowest variance among them**.

### Activity 4, part 1: four estimators

True value $\theta=0$. Legend of the four sampling distributions: Red (mean 0, variance 0.2), Green (mean 0, variance 1), Blue (mean 0, variance 2), Purple (mean $-2$, variance 0.5).

![[Lec04_four_estimators.png]]

> [!note] Reconstructed from the slides
> The slide asks the questions; the answers below are mine, read off the legend (I redrew the plot from the legend values).

| Question | Answer | Why |
|---|---|---|
| a) Unbiased? | **Red, Green, Blue** | Their means equal the true $\theta=0$. |
| b) Biased? | **Purple** | Mean is $-2\neq0$ (biased downwards). |
| c) Lowest variance? | **Red** (0.2) | Narrowest curve. Note Purple (0.5) has lower variance than Green and Blue but is biased. |
| d) Better of Green or Blue? | **Green** | Both are unbiased; Green has variance 1 versus 2, so Green is the more efficient of the two. |

Among the four, **Red is the efficient estimator**: unbiased with the smallest variance. Purple shows that low variance alone is not enough.

---

## 3. When is OLS unbiased? Assumptions A1 and A2

OLS is not automatically efficient: it needs assumptions about the data. All of them concern the **random error** $u$, because:

- $u$ is a random variable whose realised values are **unobserved**.
- We cannot make assumptions about $x$ and $y$ (they are observed) or about $\beta_0,\dots,\beta_K$ (they are fixed numbers, not random).

> [!warning] Check the assumptions before you estimate
> If the assumptions are reasonable for your sample you can use OLS. If not, a different method is needed.

### Assumption 1 (A1): errors have mean zero

$$\mathbb E[u_i]=0\quad\text{for all } i \text{ in the population}$$

- The average error in the **population** is zero. This is weak: any non-zero average can be absorbed into the intercept, so the true line passes through the middle of the cloud of observations.
- Careful: it is about the **unobserved errors** $u_i$, not the residuals $\hat u_i$, and the **sample** average $\frac1n\sum u_i$ is not necessarily 0.

### Assumption 2 (A2): zero conditional mean

$$\mathbb E[u_i\mid x_i]=0\quad\text{for all } i\text{ in the population}$$

- The explanatory variable carries **no information** about the error. For every regressor $k$: $\mathbb E[u_i\mid x_{ki}]=\mathbb E[u_i]=0$.
- This is **the most important and most demanding** assumption. See [[Zero Conditional Mean]].

> [!example] Wage regression and TOEFL (slide 34)
> Model: $\text{hourly}=\beta_0+\beta_1\cdot\text{schooly}+u$. The error $u$ bundles intelligence, luck, motivation and so on. Let $\text{toefl}$ (a TOEFL exam score) be one component of $u$.
> A2 says $\mathbb E[\text{toefl}\mid\text{schooly}=10]=\mathbb E[\text{toefl}\mid\text{schooly}=15]$: knowing someone has 10 versus 15 years of schooling tells you nothing about their expected English score.
> If in reality $\mathbb E[\text{toefl}\mid \text{schooly}=10]<\mathbb E[\text{toefl}\mid\text{schooly}=15]$, then $\mathbb E[u\mid x]\neq0$ and A2 fails. In an English-speaking country A2 might hold; elsewhere we should worry.

- A2 **cannot be tested directly**, because the components of $u$ are unobserved. There are methods for when we suspect it fails (later in the course). This is the same idea as [[Omitted Variable Bias]].

### A1 and A2 imply zero covariance

**Proposition:** if A1 and A2 hold, then $\text{Cov}(x,u)=0$.

$$\text{Cov}(x,u)=\mathbb E[u\cdot x]-\mathbb E[x]\cdot\mathbb E[u]=0-\mathbb E[x]\cdot 0=0$$

The first term is zero because A2 implies $\mathbb E[u\cdot x]=0$ (marked with a star on the slide), the second because $\mathbb E[u]=0$ by A1.

> [!note] Reconstructed from the slides
> The slide writes the first step as $\mathbb E[u\mid x]=\mathbb E[u\cdot x]/\mathbb E[x]=0$. The standard justification is the law of iterated expectations: $\mathbb E[ux]=\mathbb E\big[x\,\mathbb E[u\mid x]\big]=\mathbb E[x\cdot 0]=0$.

### Example: A1 holds but A2 fails (slide 37)

True model $y_i=1+0.5x_i+u_i$ with $x_i\in\{1,10\}$ equally likely, and

$$u_i=\begin{cases}3.5 & \text{if } x_i=1\\ -3.5 & \text{if } x_i=10\end{cases}$$

The errors average to zero overall (so A1 holds) but $\mathbb E[u\mid x=1]=3.5$ and $\mathbb E[u\mid x=10]=-3.5$ (so A2 fails). All the observations at $x=1$ sit above the true line and all at $x=10$ sit below it, so OLS tilts the wrong way.

![[Lec04_a1_not_a2.png]]

> [!note] Reconstructed from the slides
> The slide only shows the two clusters and the true line. The OLS line in my figure is computed from the two group means, $(1,\,5)$ and $(10,\,2.5)$: slope $=-0.28$ versus the true $+0.5$. This is the bias that a violated A2 causes.

### Activity 4, part 2: link to the FOCs

> [!note] Reconstructed from the slides
> a) The two OLS first order conditions are $\sum_{i=1}^N\hat u_i=0$ and $\sum_{i=1}^N x_i\hat u_i=0$.
> b) They are the **sample versions** of A1 and A2: $\sum\hat u_i=0$ mirrors $\mathbb E[u]=0$, and $\sum x_i\hat u_i=0$ mirrors $\mathbb E[u\cdot x]=0$ (which follows from A2). OLS **forces** these to hold in the sample by construction. A1 and A2 are the claim that they also hold for the true errors in the population.

### Why assumptions are needed: the big picture (slide 39)

The population **data generating function** produces unobserved errors $\{u_i\}$ and observed regressors $\{x_i\}$. The theoretical model $y=\beta_0+\beta_1x+u$ then produces $\{y_i\}$. From the observed $\{x_i\},\{y_i\}$ we minimise squared residuals to get $\hat\beta_0,\hat\beta_1$.

| Derived from the observed sample (FOCs) | Assumptions on the population |
|---|---|
| $\sum\hat u_i=0$ | A1: $\mathbb E[u]=0$ |
| $\sum x_i\hat u_i=0$ | A2: $\mathbb E[u\mid x]=0\Rightarrow\mathbb E[u\cdot x]=0$ |

The FOCs let us **compute** the estimates; A1 and A2 **guarantee they are unbiased** relative to the true parameters. Two more assumptions are needed for efficiency.

---

## 4. Proof of unbiasedness

We work **conditional on the sample of regressors** $\mathbf X=\{X_i\}_{i=1}^N$ and show $\mathbb E[\hat\beta_1-\beta_1\mid\mathbf X]=0$.

### Slope

**Step 1: distance between estimate and parameter.** Substitute $Y_i=\beta_0+\beta_1X_i+u_i$ into the OLS formula:

$$\hat\beta_1=\frac{\sum(X_i-\bar X)Y_i}{\sum(X_i-\bar X)X_i}=\frac{\sum(X_i-\bar X)(\beta_0+\beta_1X_i+u_i)}{\sum(X_i-\bar X)X_i}$$

Split into three terms. The $\beta_0$ term vanishes because **deviations from the average sum to zero**, $\sum(X_i-\bar X)=0$. The $\beta_1$ term cancels with the denominator to leave $\beta_1$:

$$\hat\beta_1=\beta_1+\frac{\sum(X_i-\bar X)u_i}{\sum(X_i-\bar X)X_i}$$

$$\hat\beta_1-\beta_1=\frac{\sum(X_i-\bar X)u_i}{\sum(X_i-\bar X)X_i}$$

**Step 2: take the conditional expectation.** The denominator is **non-random** given $\mathbf X$, so it leaves the expectation; the expectation of a sum is the sum of expectations:

$$\mathbb E[\hat\beta_1-\beta_1\mid\mathbf X]=\frac{\sum\mathbb E\big[(X_i-\bar X)u_i\mid\mathbf X\big]}{\sum(X_i-\bar X)X_i}=\frac{\sum X_i\,\mathbb E[u_i\mid\mathbf X]-\bar X\sum\mathbb E[u_i\mid\mathbf X]}{\sum(X_i-\bar X)X_i}$$

By A2, $\mathbb E[u_i\mid\mathbf X]=\mathbb E[u_i]$, and by A1 this is $0$, so the numerator is $0$:

$$\mathbb E[\hat\beta_1-\beta_1\mid\mathbf X]=0\quad\Longrightarrow\quad\mathbb E[\hat\beta_1]=\beta_1$$

> [!success] Result
> Under **A1 and A2**, the OLS slope estimator is unbiased. The proof only used these two assumptions.

### Intercept

Start from $\hat\beta_0=\bar Y-\hat\beta_1\bar X$. Substituting $Y_i=\beta_0+\beta_1X_i+u_i$ and averaging:

$$\hat\beta_0=\beta_0+\frac1N\sum u_i-(\hat\beta_1-\beta_1)\bar X$$

Now plug in the slope result $\hat\beta_1-\beta_1=\frac{\sum(X_i-\bar X)u_i}{\sum(X_i-\bar X)X_i}$ and collect the coefficient on each $u_i$:

$$\hat\beta_0-\beta_0=\sum_i\left[\frac1N-\frac{(X_i-\bar X)\,\bar X}{\sum(X_i-\bar X)X_i}\right]u_i$$

**Activity 4, part 3 (the exercise left blank on slide 46):** conditional on $\mathbf X$, the bracket is a constant, so

$$\mathbb E[\hat\beta_0-\beta_0\mid\mathbf X]=\sum_i\left[\frac1N-\frac{(X_i-\bar X)\,\bar X}{\sum(X_i-\bar X)X_i}\right]\mathbb E[u_i\mid\mathbf X]=0$$

because $\mathbb E[u_i\mid\mathbf X]=\mathbb E[u_i]=0$ by A2 and A1. Hence $\mathbb E[\hat\beta_0]=\beta_0$.

> [!note] Reconstructed from the slides
> Slide 46 (the answer to part 3) is an empty box in the deck, so the last step above is my completion, following the slope proof.

---

## 5. Efficiency: A3, A4 and the Gauss-Markov Theorem

Unbiasedness only needed A1 and A2. For minimum variance we add two more assumptions.

### Assumption 3 (A3): no serial correlation

$$\text{Cov}(u_i,u_j)=0\quad\text{for all } i\neq j$$

Errors of different observations are independent of one another. See [[Serial Correlation]].

- **Cross-sectional data**: weak and unrestrictive, it follows directly from an **iid random sample**.
- **Time series data**: problematic (errors are often correlated over time). The lecturer says time series methods come next semester.

### Assumption 4 (A4): homoskedasticity

$$\text{Var}(u\mid x)=\sigma^2$$

The variance of the error is **the same for every value of the explanatory variables**. When it varies with $x$, the model is heteroskedastic: $\text{Var}(u\mid x)=\sigma^2(x)$. See [[Homoskedasticity]] and [[Heteroskedasticity]].

![[Lec04_homo_vs_heteroskedasticity.png]]

> [!example] Income and consumption (slide 55)
> Low-income households have a small spread of consumption around the line (small error variance); high-income households have a large spread (large error variance). So A4 usually does **not** hold in this income-consumption context. The lecturer says heteroskedasticity-robust estimation comes at the end of the semester; see [[Lec_12-Heteroskedasticity]].

> [!note] Reconstructed from the slides
> The scatterplots on slides 54 and 55 are schematic. The pair of panels above is my own simulated illustration of the same idea, not data from the deck.

### The classical assumptions together

| Label | Assumption | How reasonable? (slide 56) |
|---|---|---|
| A0 | The relationship is **linear** in the parameters | (the model itself) |
| A1 | $\mathbb E[u]=0$ | Almost always true |
| A2 | $\mathbb E[u\mid x]=0$ | **Most restrictive**; often fails in economic models, but there are remedies |
| A3 | $\text{Cov}(u_i,u_j)=0,\ i\neq j$ | Depends on how the data were sampled; can be fixed |
| A4 | $\text{Var}(u\mid x)=\sigma^2$ | Usually holds; if not, it can be fixed |

See [[Classical Assumptions]].

### Variance of the slope estimator

Conditional on $\mathbf X$, start from $\hat\beta_1=\beta_1+\frac{\sum(X_i-\bar X)u_i}{\sum(X_i-\bar X)^2}$ (the denominator $\sum(X_i-\bar X)X_i$ equals $\sum(X_i-\bar X)^2$).

$$\text{Var}(\hat\beta_1\mid\mathbf X)=\text{Var}\left(\frac{\sum(X_i-\bar X)u_i}{\sum(X_i-\bar X)^2}\,\Big|\,\mathbf X\right)$$

Each step and the assumption it uses:

1. **Adding a constant ($\beta_1$) does not change the variance**, so it drops out.
2. The denominator is a **constant**, so it is squared and pulled outside the variance.
3. **A3** (errors uncorrelated): the variance of the sum is the sum of the variances.
4. **A2**: the $X$'s are fixed given $\mathbf X$, so $(X_i-\bar X)$ comes out of the variance squared.
5. **A4**: $\text{Var}(u_i\mid\mathbf X)=\sigma_u^2$ for every $i$, so it factors out of the sum.
6. Cancel the common term $\sum(X_i-\bar X)^2$ in numerator and denominator.

$$\text{Var}(\hat\beta_1\mid\mathbf X)=\frac{\sum(X_i-\bar X)^2\,\sigma_u^2}{\left(\sum(X_i-\bar X)^2\right)^2}=\frac{\sigma_u^2}{\sum(X_i-\bar X)^2}$$

### Variance of the intercept estimator

Stated without proof (the slide calls it "a nice exercise to try practising at home"; all four assumptions are used):

$$\text{Var}(\hat\beta_0)=\mathbb E\Big[\big(\hat\beta_0-\mathbb E[\hat\beta_0]\big)^2\Big]=\sigma_u^2\left[\frac1N+\frac{\bar X^2}{\sum(X_i-\bar X)^2}\right]$$

### What drives the variance of OLS

The variance formulas have the error variance $\sigma_u^2$ on top and the sample variation in $X$, $\sum(X_i-\bar X)^2$, below:

| Driver | Effect on estimator variance |
|---|---|
| Larger variance of the random error $\sigma_u^2$ | **Larger** (noisier data, less precise estimates) |
| Larger spread of the $X_i$ in the sample | **Smaller** (more variation in $x$ identifies the slope better) |
| Larger sample size $N$ | **Smaller** (more terms in $\sum(X_i-\bar X)^2$; also $1/N$ in the intercept formula) |

More on how this variance changes with correlated regressors in [[Lec_08-Goodness of Fit & Multicollinearity]]. See [[Variance of the OLS Estimator]].

### The Gauss-Markov Theorem

> [!important] Gauss-Markov Theorem
> If the relationship is **linear** (A0) and **A1 to A4 hold**, then the OLS estimators have the **minimum sampling variance of any unbiased estimator**. In other words, OLS is the **Best Linear Unbiased Estimator (BLUE)**.

- The lecture proves unbiasedness (section 4) and derives the variance (section 5), but **not** the final step that this variance is the minimum. That proof needs linear algebra and is in the course textbook's appendix.
- The slides prove it for the single-regressor case; the theorem holds for multiple regression as well.
- See [[Gauss-Markov Theorem]].

> [!tip] How to remember what each assumption buys
> - **A0 + A1 + A2** $\Rightarrow$ OLS is **unbiased** (slope and intercept).
> - **A3 + A4** (on top) $\Rightarrow$ the variance has the clean form $\sigma_u^2/\sum(X_i-\bar X)^2$ and OLS has the **smallest** variance among unbiased linear estimators: **BLUE**.
> - If A4 fails, OLS stays unbiased but is no longer efficient and the usual variance formula is wrong (fix: robust standard errors, see [[Lec_12-Heteroskedasticity]]).

---

## 6. Looking ahead (slide 62)

The next lectures use these results for inference:

- Estimate $\sigma_u^2$ and plug it into $\text{Var}(\hat\beta_1)$ to get the **standard error** of $\hat\beta_1$.
- Use the standard error to build a [[Confidence Interval]] in which the true $\beta_1$ probably lies.
- Use that to test hypotheses, for example whether $\beta_1$ is statistically different from 0 ([[t-test]]).

---

## Quick revision checklist

- [ ] State the definition of an unbiased estimator and of an efficient estimator.
- [ ] Explain why a single estimate can be wrong even if the estimator is unbiased.
- [ ] Write A0 to A4 and say which one drives unbiasedness (A1, A2) and which drive the variance formula (A3, A4).
- [ ] Reproduce the slope unbiasedness proof: substitute, use $\sum(X_i-\bar X)=0$, take $\mathbb E[\cdot\mid\mathbf X]$, apply A2 then A1.
- [ ] Write $\text{Var}(\hat\beta_1)$ and say how $\sigma_u^2$, the spread of $X$ and $N$ affect it.
- [ ] Give an example where A2 fails (omitted TOEFL-like variable correlated with schooling).
- [ ] Explain what Gauss-Markov says and what it does not say (it needs A1 to A4).

> [!info] Related notes
> Course-wide revision of unbiasedness, the classical assumptions and testing: [[Lec_13-Exam Review]]. Applied practice with OLS output: [[Assign_01-Interpreting OLS Output & the Birthweight-Smoking Regression]].

- Previous: [[Lec_03-Nonlinear Models with OLS]] — logs and nonlinear functional forms
- Next: [[Lec_05-Confidence Intervals & Change of Units]] — confidence intervals and change of units
