---
title: "Lec 01: Point Estimation and Sampling Distributions"
semester: 2
year: 1
course: "Statistics B"
lecture: 1
tags:
  - statistics-b
  - lecture-notes
  - normal-distribution
  - central-limit-theorem
  - law-of-large-numbers
  - point-estimation
  - sampling-distribution
  - unbiased-estimator
  - consistent-estimator
subject: statistics-b
in_scope: true
---

# Lec 01: Point Estimation and Sampling Distributions

> Part of: [[Statistics B]]
> Key concepts: [[Normal Distribution CDF]], [[Central Limit Theorem]], [[Law of Large Numbers]], [[Population]], [[Random Sample]], [[Parameter]], [[Statistic]], [[Point Estimation]], [[Sampling Distribution]], [[Unbiased Estimator]], [[Consistent Estimator]]

Instructor: Asael Sklar. Deck: *Class 1* of "Statistics for economists II" (175 slides, most of them animation builds of about 60 distinct ideas).

## 1. Course logistics

> [!info] Where the semester goes
> Semester A covered probability, discrete and continuous distributions, expected value and variance, joint distributions, correlation, the normal distribution and linear regression basics (see [[Statistics A]]). Semester B builds the inference half of the "statistics concepts map".

| Block | Classes | Topics |
| --- | --- | --- |
| Point estimation | 1 to 3 | [[Sampling Distribution]] and estimator properties, [[Maximum Likelihood Estimator]] |
| Hypothesis testing | 4 to 10 | tests for the expected value (known and unknown variance), difference in expected values, power and effect size, confidence intervals, goodness of fit and independence, variance ratio |
| Linear regression | 11 to 12 | regression inference |

Later year-2 material on the map: multiple regression, advanced regression, A/B testing, experimental design, machine learning algorithms.

**Grading and logistics**

- Grade is **100% the final exam**: 20 multiple-choice questions.
- Extra credit: one large in-class project (4 points) and one original meme or comic (1 point).
- Weekly exercises are **not graded**; solutions go on Moodle and are solved in the recitations.
- Lectures Monday 15:45 to 17:15, recitations Tuesday 13:45 to 15:15, plus an extra recitation roughly every two weeks (Wednesday) covering earlier material.
- Books: Freedman, Pisani and Purves, *Statistics* (4th ed.); Pishro-Nik, *Introduction to probability, statistics, and random processes* (free at probabilitycourse.com). Neither matches the course perfectly.
- Classes are recorded, but attending is strongly recommended. Slides go on Moodle after class. Exercises include some practical Excel questions.

## 2. Reminder: the normal distribution and its CDF

A normal variable $X \sim N(\mu, \sigma^2)$ has a bell-shaped density $f(X)$ centred at $\mu$. To compute probabilities we need the cumulative distribution function (CDF), but **the normal CDF has no closed form**. The workaround is to standardise and use a table of the standard normal.

> [!tip] The CDF workaround
> To find $P(X < t)$ for a normal $X$: (1) standardise $t$, (2) read $\Phi(Z)$ from the Z table, (3) conclude $P(X < t) = \Phi(Z(t))$.

The standardisation step is

$$
Z(t) = \frac{t - \mu}{\sigma}
$$

and the result is

$$
P(X < t) = \Phi\big(Z(t)\big)
$$

> [!example] Worked example from the slides
> $X \sim N(1, 3^2)$. Find $P(X < 2)$.
> $Z(2) = \dfrac{2 - 1}{3} = \dfrac{1}{3} \approx 0.33$, and from the table $\Phi(0.33) = 0.6293$. So $P(X < 2) \approx 0.6293$.

![[Lec01_standardise_normal.png]]

*Standardising shifts and rescales the axis but leaves the shaded area unchanged: the same probability is read off the standard normal.*

## 3. Reminder: the Central Limit Theorem

> [!info] Central Limit Theorem (CLT)
> Let $X_1, X_2, \dots, X_n$ be independent, identically distributed (i.i.d.) with $E(X_i) = \mu$ and $Var(X_i) = \sigma^2$. For large $n$ both the sum and the average are approximately normal. Rule of thumb: $n \ge 30$.

| Quantity | Definition | Distribution for large $n$ |
| --- | --- | --- |
| Sum | $S = \sum_{i=1}^{n} X_i$ | $S \sim N(n\mu,\ n\sigma^2)$ |
| Average | $\bar{X} = \frac{1}{n}\sum_{i=1}^{n} X_i$ | $\bar{X} \sim N\!\left(\mu,\ \frac{\sigma^2}{n}\right)$ |

> [!example] Worked example
> $E(X) = 2$, $Var(X) = 100$, sample of $n = 30$.
> - Sum: $S \sim N(2 \cdot 30,\ 100 \cdot 30) = N(60,\ 3000)$.
> - Average: $\bar{X} \sim N\!\left(2,\ \frac{100}{30}\right) = N(2,\ 3.33)$.

> [!warning] Variance, not standard deviation
> The second parameter in $N(\cdot,\cdot)$ is the **variance**. The sum's variance grows with $n$ ($n\sigma^2$), the average's shrinks ($\sigma^2/n$). The average's variance is the sum's variance divided by $n^2$.

## 4. Reminder: the Law of Large Numbers

> [!info] Law of Large Numbers (LLN)
> The average of a sample is more likely to be close to the population expected value the larger the sample is: $\bar{X} \to \mu$ as $n \to \infty$.

**Why it follows from the CLT:** $\bar{X} \sim N(\mu, \sigma^2/n)$ and $\sigma^2/n \to 0$ as $n \to \infty$, so the distribution of $\bar{X}$ collapses onto $\mu$. The slides show this with the density of $\bar{X}$ at $N = 30, 300, 3000, 10000$ getting narrower around $\mu$.

![[Lec01_lln_narrowing.png]]

*Illustration drawn with $\mu = 2$, $\sigma = 10$ (the earlier example's values); the slides use a generic $\mu$.*

> [!tip] LLN as estimation
> The LLN is the first estimation idea: to learn an unknown expected value, take a large enough sample and compute its average. **Estimation** means using a value from a random sample to learn the value of a population parameter.

## 5. Population, sample and point estimation

| Term | Meaning | Examples |
| --- | --- | --- |
| [[Population]] | The entire set of individuals, items or data points we want to describe | all US voters; this class |
| [[Random Sample]] | A randomly selected subset of the population. "Random" refers to **which** individuals end up in the sample | people who answered a survey |
| [[Parameter]] | A number describing the population | expected value, variance, maximum, 56th percentile of the population |
| [[Statistic]] | A number describing the random sample | sample average, sample variance, sample maximum, 56th percentile of the sample |

> [!info] Point estimation
> **Point estimation** is estimating the value of a population parameter from a sample statistic computed on a random sample. The statistic used is the **estimator**; the parameter is the **estimated parameter**.

> [!example] Polls and the in-class demo
> News polls are point estimates. In an election poll the population is the voters, the parameter is the proportion voting for a given candidate, the sample is the people who answered the survey, and the estimator is the proportion of respondents who say they will vote for that candidate. (The slides show an Israeli seats poll bar chart as the example.)
> In class the lecturer asked "Did you serve in the IDF?": population is this class, parameter is the proportion who served, and the estimate was formed from a random sample of 5 students and then a random sample of 20, to compare how stable the estimates are.

### Mathematical definitions and notation

- **Population:** the set of values of $N$ observations, each written $x_i$. A population is described by its distribution. Example: adult human height is distributed $N(165,\ 7.5^2)$.
- **Sample:** $n$ observations drawn from the same population, written $X_1, X_2, \dots, X_n$. They are $n$ i.i.d. random variables, and when $n \ge 30$ the CLT applies. Mathematically a sample is a random vector $\mathbf{X} = (X_1, X_2, \dots, X_n)$.
- The probability of a particular sample is the joint probability, which factorises because the observations are independent:

$$
P(\mathbf{X}) = P(X_1 = x_1)\cdot P(X_2 = x_2)\cdots P(X_n = x_n)
$$

> [!warning] Lowercase $x_i$ versus capital $X_i$
> $x_i$ is a **value** (a possible value of $X$; the population is $x_1, \dots, x_N$). $X_i$ is the $i$-th **observation in a sample**, a random variable that takes a different value in each sample. A specific observed sample looks like $(X_1 = x_{243},\ X_2 = x_{6503},\ \dots,\ X_n = x_{92})$: the indices are arbitrary population members.

## 6. Statistics and the sampling distribution

A **statistic** is a function $T(\mathbf{X})$ of the sample vector. Examples from the slides:

| Statistic | Formula |
| --- | --- |
| Average | $T(\mathbf{X}) = \frac{\sum X_i}{n} = \bar{X}$ |
| Variance (biased) | $T(\mathbf{X}) = \frac{\sum (X_i - \bar{X})^2}{n}$ |
| Variance (unbiased) | $T(\mathbf{X}) = \frac{\sum (X_i - \bar{X})^2}{n-1} = S^2$ |
| Sum | $T(\mathbf{X}) = \sum X_i$ |
| Maximum / minimum | $T(\mathbf{X}) = \max(X_i)$ and $\min(X_i)$ |
| First / third observation | $T(\mathbf{X}) = X_1$, $T(\mathbf{X}) = X_3$ |

> [!note] Slide typo
> The slide lists the minimum with the formula "Max". It should read $\min(X_i)$.

> [!info] Sampling distribution
> Because the sample is a random vector, **every statistic is itself a random variable and has a distribution**. The distribution of a statistic (all its possible values and their probabilities, or its density) is its [[Sampling Distribution]]. The CLT results above are sampling distributions of the sum and the average. The lecturer pointed to an interactive demo at stapplet.com/sampdist.html.

**Convention.** An arbitrary population parameter is written $\theta$ (theta). A statistic used to estimate it is an **estimator**, marked $\hat{\theta}$. The value the estimator takes in the sample is a **point estimate** of $\theta$.

## 7. What makes a statistic useful?

A statistic is useful if it is a good estimator of the parameter we want. Two key properties this lecture (the slides leave room for more, "..."):

| Property | Definition | Intuition |
| --- | --- | --- |
| [[Unbiased Estimator]] | $E(\hat{\theta}) = \theta$ | On average the estimator hits the target. Aiming at the bullseye with no systematic offset. |
| [[Consistent Estimator]] | $Var(\hat{\theta}) \xrightarrow{n \to \infty} 0$ | More accurate for larger samples: the sampling distribution tightens. |

![[Lec01_bias_and_spread.png]]

*Bias is about the centre of the sampling distribution; consistency is about its spread shrinking with $n$.*

> [!note] Reconstructed from the slides
> The slides state the consistency condition as "$Var(\hat{\theta}) \to 0$ as $n \to \infty$" and say that a consistent estimator is more accurate for larger samples (small $n$ versus larger $n$ pictures). Strictly, consistency also requires the estimator to be centred on, or converge to, the right value; the lecture uses the variance condition together with unbiasedness. Treat "unbiased and variance going to 0" as the working test for the examples below.

### Example 1: the average $\bar{X}$

**Unbiased?** Use linearity of expectation and that each $E(X_i) = \mu$:

$$
E(\bar{X}) = E\!\left(\frac{\sum X_i}{n}\right) = \frac{\sum E(X_i)}{n} = \frac{\sum \mu}{n} = \frac{n\mu}{n} = \mu
$$

Yes: the average is an unbiased estimator of the expected value.

**Consistent?** From the CLT/LLN, $Var(\bar{X}) = \frac{\sigma^2}{n}$, and

$$
\lim_{n \to \infty} \frac{\sigma^2}{n} = 0
$$

Yes: the average is a consistent estimator of the expected value.

### Example 2: the third observation $X_3$

- **Unbiased?** $E(X_3) = \mu$. Yes.
- **Consistent?** $Var(X_3) = \sigma^2$ no matter how big $n$ is, so $\lim_{n\to\infty} \sigma^2 = \sigma^2 \ne 0$. **Not consistent.**

> [!warning] Unbiased is not enough
> $X_3$ is right on average but one noisy draw never improves with more data. Extra observations are simply ignored. Always check both properties.

### Example 3: the sum of the first three observations

$$
E(X_1 + X_2 + X_3) = \mu + \mu + \mu = 3\mu \ne \mu
$$

So $X_1 + X_2 + X_3$ is a **biased** estimator of $\mu$.

### Fixing an estimator

The bias here is a linear transformation of the target, so a corrective linear transformation repairs it: divide by 3.

$$
E\!\left(\frac{X_1 + X_2 + X_3}{3}\right) = \frac{\mu + \mu + \mu}{3} = \frac{3\mu}{3} = \mu
$$

> [!tip] General recipe
> If $E(\hat{\theta}) = a + b\,\theta$ with known constants $a$ and $b \ne 0$, then $\dfrac{\hat{\theta} - a}{b}$ is unbiased for $\theta$.

### Example 4: finding an unbiased estimator from a distribution

$X$ takes the values 0, 1, 2, 3 with probabilities that depend on the parameter $\theta$. Reading the slide's calculation, the probabilities are

| $x$ | 0 | 1 | 2 | 3 |
| --- | --- | --- | --- | --- |
| $P(X = x)$ | $\theta/4$ | $1/4$ | $(6 - 3\theta)/8$ | $\theta/8$ |

(These sum to 1 for every $\theta$.) Is $X_1$ unbiased for $\theta$?

$$
E(X_1) = 0\cdot\frac{\theta}{4} + 1\cdot\frac{1}{4} + 2\cdot\frac{6 - 3\theta}{8} + 3\cdot\frac{\theta}{8}
= \frac{1}{4} + \frac{6}{4} - \frac{6\theta}{8} + \frac{3\theta}{8}
= \frac{7}{4} - \frac{3}{8}\theta
$$

This is not $\theta$, so $X_1$ is biased. But $E(X_1)$ is a linear function of $\theta$, so we can invert it: subtract $\frac{7}{4}$ and divide by $-\frac{3}{8}$:

$$
\hat{\theta} = \left(X_1 - \frac{7}{4}\right)\cdot\left(-\frac{8}{3}\right)
$$

Check:

$$
E(\hat{\theta}) = \left(E(X_1) - \frac{7}{4}\right)\cdot\left(-\frac{8}{3}\right)
= \left(-\frac{3}{8}\theta\right)\cdot\left(-\frac{8}{3}\right) = \theta
$$

So $\hat{\theta}$ is an unbiased estimator of $\theta$.

> [!note] Reconstructed from the slides
> The distribution table sits in an image I could not render, so the probabilities above are read back from the slide's expectation line. The slide's first check line shows the multiplier as $+\frac{8}{3}$ in one build; the consistent final version is $-\frac{8}{3}$, which is what makes the check equal $\theta$.

## 8. Summary

- Normal CDF has no formula: standardise with $Z = \frac{t - \mu}{\sigma}$ and read $\Phi(Z)$, e.g. $X \sim N(1, 3^2)$ gives $P(X < 2) = \Phi(0.33) = 0.6293$.
- CLT: $S \sim N(n\mu, n\sigma^2)$ and $\bar{X} \sim N(\mu, \sigma^2/n)$, rule of thumb $n \ge 30$. LLN: $\bar{X} \to \mu$ because $\sigma^2/n \to 0$.
- A **parameter** describes the population, a **statistic** a sample. **Point estimation** uses a statistic (estimator $\hat{\theta}$) to estimate a parameter $\theta$.
- A sample is an i.i.d. random vector, so every statistic is a random variable with a **sampling distribution**.
- Good estimators: **unbiased** ($E(\hat{\theta}) = \theta$) and **consistent** ($Var(\hat{\theta}) \to 0$ as $n \to \infty$).
- $\bar{X}$: unbiased and consistent. $X_3$: unbiased, not consistent. $X_1+X_2+X_3$: biased by a factor of 3, fixed by dividing by 3. A linearly biased estimator can be corrected with a linear transformation.
- Next: Tuesday recitation on Exercise 1.

## Related notes

- [[Statistics B]] (course hub), [[Statistics A]] (normal distribution, CLT, expected value and variance)
- [[Normal Distribution CDF]], [[Central Limit Theorem]], [[Law of Large Numbers]], [[Sampling Distribution]], [[Unbiased Estimator]], [[Consistent Estimator]]
