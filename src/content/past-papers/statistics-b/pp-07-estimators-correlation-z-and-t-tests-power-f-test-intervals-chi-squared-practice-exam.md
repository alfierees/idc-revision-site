---
title: "Estimators, Correlation, Z and t Tests, Power, F Test, Intervals & Chi-Squared (Practice Exam)"
type: past-paper
status: worked-solution
exam: "Practice Exam, Statistics for Economists II (no year printed)"
semester: 2
year: 1
course: "Statistics B"
instructor: unknown
tags:
  - statistics-b
  - past-paper
  - worked-solution
  - multiple-choice
  - practice-exam
  - unbiased-estimator
  - maximum-likelihood
  - correlation
  - regression
  - hypothesis-testing
  - statistical-power
  - confidence-interval
  - chi-squared
aliases:
  - Statistics B Practice Exam
  - Stats II Practice Exam
  - PP07 Statistics B
subject: statistics-b
in_scope: true
---

# Estimators, Correlation, Z and t Tests, Power, F Test, Intervals & Chi-Squared (Practice Exam)

> Part of: [[Statistics B]]
> **Practice Exam**, Statistics for Economists II (Statistics B). 20 multiple-choice questions, one letter key printed at the end of the paper. No year, date or marks are printed, so none is stated here.
> Builds on: [[Lec_01-Point Estimation and Sampling Distributions]], [[Lec_02-Point Estimation and the Variance Estimator]], [[Lec_03-Maximum Likelihood Estimation]], [[Lec_05-Z Tests, t Tests and Two-Sample Tests]], [[Lec_06-Two Sample Tests, Error Types and Power]], [[Lec_07-Tests for Proportions and Variances]], [[Lec_08-Confidence Intervals]], [[Lec_09-Chi-Squared Tests for Goodness of Fit and Independence]], [[Lec_11-Joint Distributions, Correlation and Linear Regression]]
> The lecturer works these exact questions in [[Lec_12-Exam Review 1]] (Q1 to Q5, Q9 to Q20, then Q6 to Q8) and [[Lec_13-Exam Review Session 2]] (Q6 to Q8, Q13 to Q20). The methods below follow those sessions.

> [!info] Source and answers
> The key is **letters only**, so every working below was written independently and checked against the keyed letter. **All 20 working answers reach the official letter.** Every key letter is kept and marked as official. Three questions have a source quirk, flagged where they occur: Q14 (options a and c are printed identically), Q16 (the lecture slide pools the SDs, the strict arithmetic gives 1.39 not 1.41) and Q20 (a typo in the counts). Formulas are from `Formula sheet extended 2025.pdf`.

## What this paper tests

| Questions | Core idea | Taught in |
|---|---|---|
| Q1 | [[Sampling Distribution]] of a sum | [[Lec_01-Point Estimation and Sampling Distributions]] |
| Q2, Q3 | [[Unbiased Estimator]]: expectation and linear versus non-linear combinations | [[Lec_01-Point Estimation and Sampling Distributions]], [[Lec_02-Point Estimation and the Variance Estimator]] |
| Q4 | [[Consistent Estimator]]: variance goes to 0 | [[Lec_02-Point Estimation and the Variance Estimator]] |
| Q5 | [[Maximum Likelihood Estimator]] from a likelihood table | [[Lec_03-Maximum Likelihood Estimation]] |
| Q6, Q7, Q8 | [[Correlation Coefficient]] and the [[Regression Line]] | [[Lec_11-Joint Distributions, Correlation and Linear Regression]] |
| Q9, Q10, Q11 | [[Single Sample Z Test]], [[Two Samples Z Test]] and which test is allowed | [[Lec_05-Z Tests, t Tests and Two-Sample Tests]] |
| Q12, Q13, Q14 | [[Statistical Power]], one- versus two-tailed tests, [[Type I Error]] and [[Type II Error]] | [[Lec_06-Two Sample Tests, Error Types and Power]] |
| Q15, Q16 | [[Single Sample t Test]], [[Two Independent Samples t Test]] | [[Lec_05-Z Tests, t Tests and Two-Sample Tests]] |
| Q17 | [[F Test for Equality of Variances]] | [[Lec_07-Tests for Proportions and Variances]] |
| Q18, Q19 | [[Confidence Interval]] for a mean and for a proportion, sample size | [[Lec_08-Confidence Intervals]] |
| Q20 | [[Chi-Squared Test for Goodness of Fit]] | [[Lec_09-Chi-Squared Tests for Goodness of Fit and Independence]] |

> [!tip] Intuition: the three moves
> - Estimator questions (Q1 to Q5): write down the expectation or variance as a formula in $n$, then ask what happens as $n$ grows.
> - Test questions (Q9 to Q20): first pick the test from what is known (variance known or not, one or two samples, normal or not), then plug in, then compare with the critical value.
> - Concept questions (Q6, Q8, Q11, Q13, Q14): test a statement with a quick example or a limiting case. "Necessarily" means true in every case.

> [!success] Answer key (official, printed at the end of the paper)
> 1 C, 2 A, 3 B, 4 A, 5 B, 6 B, 7 B, 8 C, 9 D, 10 C, 11 D, 12 C, 13 C, 14 C, 15 D, 16 A, 17 C, 18 D, 19 D, 20 A

---

## Q1 — Sum of observations as $n$ grows

**Question.** As the size of the sample increases, the expected value of the sum of observations $Sum = \sum_{i=1}^{n} X_i$ ______ and the variance of the sum of observations ______.

| Option | Text |
|---|---|
| a | Remains the same; increases |
| b | Remains the same; decreases |
| c | Increases; increases |
| d | Increases; decreases |

> [!success] Official answer: C (increases; increases)

For independent observations with mean $\mu$ and variance $\sigma^2$:

$$
E(Sum) = n \cdot \mu, \qquad Var(Sum) = n \cdot \sigma^2
$$

Both grow in proportion to $n$.

- **a, b** are wrong: the expected value of a sum is $n\mu$, so it changes with $n$ (it only stays put for the *average*, where $E(\bar X) = \mu$).
- **d** is wrong: the variance of a sum adds up variances, it does not shrink. It is the variance of the **average**, $\sigma^2/n$, that shrinks.

> [!tip] Intuition
> More terms in a sum means a bigger total and more room for the total to wander. Dividing by $n$ turns the sum into the average, which is where the narrowing comes from.

See [[Lec_01-Point Estimation and Sampling Distributions]]; the lecturer's version is in [[Lec_12-Exam Review 1]].

---

## Q2 — Unbiased estimator for $a$

**Question.** $X$ has the distribution below. Which is an unbiased estimator for the parameter $a$? Each option uses only the first observation $X_1$.

| $X_i$ | $a$ | $2a$ | $3a$ |
|---|---|---|---|
| $p(X_i)$ | 0.4 | 0.2 | 0.4 |

| Option | Estimator |
|---|---|
| a | $\hat\theta = X_1 / 2$ |
| b | $\hat\theta = X_1 / 3$ |
| c | $\hat\theta = 2 X_1$ |
| d | $\hat\theta = 3 X_1$ |

> [!success] Official answer: A ($X_1/2$)

First the expected value of one observation:

$$
E(X_1) = 0.4 \cdot a + 0.2 \cdot 2a + 0.4 \cdot 3a = 0.4a + 0.4a + 1.2a = 2a
$$

An estimator is unbiased when its expectation equals the parameter. So we need $E(\hat\theta) = a$:

| Option | $E(\hat\theta)$ | Equals $a$? |
|---|---|---|
| a $X_1/2$ | $2a/2 = a$ | Yes |
| b $X_1/3$ | $2a/3$ | No |
| c $2X_1$ | $4a$ | No |
| d $3X_1$ | $6a$ | No |

Note the distribution is symmetric around $2a$, so the centre is $2a$, not $a$: the raw observation is a biased estimator of $a$, and the correction is to rescale by $1/2$ (the idea of **bias correction**).

See [[Lec_01-Point Estimation and Sampling Distributions]] and [[Lec_12-Exam Review 1]].

---

## Q3 — Does adding or multiplying keep unbiasedness?

**Question.** $\hat\theta_1$ has $E(\hat\theta_1) = \mu - \sigma^2$. $\hat\theta_2$ has $E(\hat\theta_2) = \mu / \sigma^2$. Then $\hat\theta_1 + S^2$ is ______ an unbiased estimator for $\mu$ and $\hat\theta_2 \cdot S^2$ is ______ an unbiased estimator for $\mu$.

| Option | Text |
|---|---|
| a | Necessarily; necessarily |
| b | Necessarily; not necessarily |
| c | Not necessarily; necessarily |
| d | Not necessarily; not necessarily |

> [!success] Official answer: B (necessarily; not necessarily)

**Sum.** Expectation is linear, and $S^2$ is an unbiased estimator of $\sigma^2$, so $E(S^2) = \sigma^2$:

$$
E(\hat\theta_1 + S^2) = E(\hat\theta_1) + E(S^2) = \mu - \sigma^2 + \sigma^2 = \mu
$$

This needs nothing about how $\hat\theta_1$ and $S^2$ relate, so it holds **necessarily**.

**Product.** In general

$$
E(\hat\theta_2 \cdot S^2) = E(\hat\theta_2) \cdot E(S^2) + Cov(\hat\theta_2, S^2) = \mu + Cov(\hat\theta_2, S^2)
$$

The product is unbiased only if the covariance is 0 (for example if the two statistics are independent). The question does not say so, so it is **not necessarily** unbiased.

> [!warning] Why options c and d fail
> c has the two cases swapped. d would need the sum to fail, but linearity of expectation never fails.

> [!tip] Intuition
> Expectation passes through sums for free. It passes through products only when the two pieces are independent. The lecturer labels these "linear" and "non-linear" transformations in [[Lec_12-Exam Review 1]].

---

## Q4 — Consistency from the variances

**Question.** $Var(\hat\theta_1) = \dfrac{\sigma^2}{n} + \dfrac{1}{n-1}$ and $Var(\hat\theta_2) = \dfrac{\sigma^2}{(n-2)^2}$. Based on these variances, $\hat\theta_1$ is ______ estimator and $\hat\theta_2$ is ______ estimator.

| Option | Text |
|---|---|
| a | A consistent; a consistent |
| b | A consistent; an inconsistent |
| c | An inconsistent; a consistent |
| d | An inconsistent; an inconsistent |

> [!success] Official answer: A (consistent; consistent)

The course criterion (formula sheet) is that the variance goes to 0 as $n \to \infty$:

$$
\lim_{n \to \infty} Var(\hat\theta_1) = \lim_{n \to \infty} \left( \frac{\sigma^2}{n} + \frac{1}{n-1} \right) = 0 + 0 = 0
$$

$$
\lim_{n \to \infty} Var(\hat\theta_2) = \lim_{n \to \infty} \frac{\sigma^2}{(n-2)^2} = 0
$$

Both go to 0, so both are consistent. Notice $\hat\theta_2$ shrinks even faster, at rate $1/n^2$. Options b, c and d each declare one estimator inconsistent, but neither variance stays bounded away from 0.

> [!note]
> The question says "based on these variances", so the lecturer's reading is that bias is not the issue, only whether the spread collapses. Compare Moed B 2023 Q4 in [[Lec_13-Exam Review Session 2]], where the variances do **not** go to 0.

See [[Lec_02-Point Estimation and the Variance Estimator]] and [[Lec_12-Exam Review 1]].

---

## Q5 — Maximum likelihood from a likelihood table

**Question.** Based on the likelihood table, which $\hat\theta$ is the maximum likelihood estimator for $\theta$ given the value of $X$?

| | $X = 0$ | $X = 1$ |
|---|---|---|
| $\theta = -1$ | 0 | 1 |
| $\theta = 0$ | 0.5 | 0.5 |
| $\theta = 1$ | 1 | 0 |

| Option | $X = 0$ | $X = 1$ |
|---|---|---|
| a | $-1$ | $1$ |
| b | $1$ | $-1$ |
| c | $1$ | $0$ |
| d | $0$ | $1$ |

> [!success] Official answer: B

For each observed value of $X$, read down that **column** and choose the $\theta$ with the largest likelihood:

- $X = 0$: likelihoods are 0, 0.5, 1 for $\theta = -1, 0, 1$. The maximum is 1, at $\theta = 1$.
- $X = 1$: likelihoods are 1, 0.5, 0 for $\theta = -1, 0, 1$. The maximum is 1, at $\theta = -1$.

So $\hat\theta = 1$ when $X = 0$ and $\hat\theta = -1$ when $X = 1$. That is option **b**.

> [!warning] Common trap
> Option a is the same pairing read along the wrong axis (it picks the *smallest* likelihood). Options c and d use $\theta = 0$, which is never the largest entry in either column.

> [!tip] Intuition
> The MLE answers "which parameter value makes the data I saw least surprising?". You fix the data (the column) and compare parameter values (the rows).

See [[Lec_03-Maximum Likelihood Estimation]] and [[Lec_12-Exam Review 1]].

---

## Q6 — Adding an observation to a perfect correlation

**Question.** Gordon found $r_{x,y} = 1$ on 16 observations, then added a forgotten 17th observation. The new correlation ______ be $r_{x,y} = 1$ and ______ be $r_{x,y} = -1$.

| Option | Text |
|---|---|
| a | Could; could |
| b | Could; could not |
| c | Could not; could |
| d | Could not; could not |

> [!success] Official answer: B (could; could not)

$r_{x,y} = 1$ means all 16 points lie exactly on one **upward-sloping** line.

- **Could be 1:** if the new point also lies on that line, all 17 are still on it.
- **Could not be $-1$:** $r = -1$ needs all 17 points on a **downward-sloping** line. But 16 of them already lie on an upward one (and at least two distinct $x$ values determine the line), so no downward line fits them.

Option a would need the downward case to be possible, c and d wrongly deny that 1 can survive.

See [[Lec_11-Joint Distributions, Correlation and Linear Regression]]; the lecturer's note is in [[Lec_13-Exam Review Session 2]].

---

## Q7 — Mean of $Y$ from the regression line

**Question.** A regression of watermelons on bags of fertilizer has slope 34 and intercept 56. The average number of bags was 50. What was the average number of watermelons?

| Option | Value |
|---|---|
| a | 1722 |
| b | 1756 |
| c | 1790 |
| d | 1824 |

> [!success] Official answer: B (1756)

The least-squares line always passes through the point of means $(\bar X, \bar Y)$. Since intercept $a = \bar Y - b \bar X$:

$$
\bar Y = a + b \cdot \bar X = 56 + 34 \cdot 50 = 56 + 1700 = 1756
$$

The other options (1722, 1790, 1824) are not produced by any standard slip I could identify; the question only tests that the fitted line passes through the means.

See [[Lec_11-Joint Distributions, Correlation and Linear Regression]].

---

## Q8 — Zero correlation and the regression line

**Question.** With 30 observations, $r_{x,y} = 0$. Peter fits a regression. Peter will ______ find the intercept is 0 and will ______ find the slope is 0.

| Option | Text |
|---|---|
| a | Necessarily, necessarily |
| b | Necessarily, not necessarily |
| c | Not necessarily, necessarily |
| d | Not necessarily, not necessarily |

> [!success] Official answer: C (intercept not necessarily 0; slope necessarily 0)

The regression slope and intercept are

$$
b = r_{x,y} \cdot \frac{S_Y}{S_X}, \qquad a = \bar Y - b \cdot \bar X
$$

With $r_{x,y} = 0$: $b = 0 \cdot S_Y / S_X = 0$ **necessarily** (provided $S_X > 0$). Then

$$
a = \bar Y - 0 \cdot \bar X = \bar Y
$$

The intercept equals $\bar Y$, which is 0 only if the average of $Y$ happens to be 0. So it is **not necessarily** 0.

> [!tip] Intuition
> No linear link means the best straight-line prediction is a flat line at the average of $Y$. A flat line has slope 0, but it sits at height $\bar Y$, not at 0.

See [[Lec_11-Joint Distributions, Correlation and Linear Regression]], and the simulation in [[Lec_13-Exam Review Session 2]] (a constant-$Y$ dataset has slope near 0 and intercept near its constant).

---

## Q9 — Single sample Z statistic

**Question.** A random sample of 64 students has mean 82. The population standard deviation is 20 and $H_0$: expected value is 74. What is the Z statistic?

| Option | Value |
|---|---|
| a | 2 |
| b | 2.4 |
| c | 2.8 |
| d | 3.2 |

> [!success] Official answer: D (3.2)

$\sigma$ is known, so use the Z test for an expected value:

$$
Z_{\bar X} = \frac{\bar X - \mu_{H_0}}{\sigma / \sqrt{n}} = \frac{82 - 74}{20 / \sqrt{64}} = \frac{8}{2.5} = 3.2
$$

The standard error is $20/8 = 2.5$. A common slip is to divide by $\sigma$ alone (giving $8/20 = 0.4$) or by $\sigma / n$ (giving $8/0.3125 = 25.6$), neither of which is an option.

See [[Lec_05-Z Tests, t Tests and Two-Sample Tests]] and [[Lec_12-Exam Review 1]].

---

## Q10 — Two samples Z statistic

**Question.** 100 economics students average 75; 80 law students average 70. Both populations have standard deviation 10. $H_0$: no difference in expected values. What is the Z statistic?

| Option | Value |
|---|---|
| a | 1.33 |
| b | 2.33 |
| c | 3.33 |
| d | 4.33 |

> [!success] Official answer: C (3.33)

$$
Z_{\bar X - \bar Y} = \frac{(\bar X - \bar Y) - (\mu_X - \mu_Y)_{H_0}}{\sqrt{\dfrac{\sigma_X^2}{n_X} + \dfrac{\sigma_Y^2}{n_Y}}} = \frac{75 - 70 - 0}{\sqrt{\dfrac{100}{100} + \dfrac{100}{80}}} = \frac{5}{\sqrt{2.25}} = \frac{5}{1.5} = 3.33
$$

The two sampling variances add: $1 + 1.25 = 2.25$, square root $1.5$.

See [[Lec_05-Z Tests, t Tests and Two-Sample Tests]] and [[Lec_12-Exam Review 1]].

---

## Q11 — Which two-sample test is allowed?

**Question.** Ben tests whether starting salary differs between 35 dog walkers and 35 engineers. He has each sample's average and standard deviation, but the distribution of salaries is not normal. To test his hypothesis, Ben ______ use a two samples Z test and ______ use a two samples t test.

| Option | Text |
|---|---|
| a | Can; can |
| b | Can; cannot |
| c | Cannot; can |
| d | Cannot; cannot |

> [!success] Official answer: D (cannot; cannot)

| Test | Requirements | Ben's situation |
|---|---|---|
| Two samples Z | Known population variances, and the sample averages are normal | He only has **sample** standard deviations, so the variances are not known |
| Two samples t | Equal variances, and the populations are normal | The distribution is **not normal** |

Each test fails one requirement, so he can use neither: **cannot; cannot**.

> [!warning] The tempting argument
> "35 observations each, so the Central Limit Theorem makes the averages normal." That fixes the *normality* condition of the Z test, but not the *known variance* condition, and the t test as taught in this course needs the populations themselves to be normal. So option b (Z allowed) is the trap.

See [[Lec_05-Z Tests, t Tests and Two-Sample Tests]], and the requirement table in [[Lec_12-Exam Review 1]].

---

## Q12 — Statistical power

**Question.** 49 observations from a distribution with known $\sigma^2 = 16$. $H_0: \mu = 30$ at $\alpha = 0.05$. What is the power if the true mean is $\mu = 32$?

| Option | $1 - \beta$ |
|---|---|
| a | 0.738 |
| b | 0.838 |
| c | 0.938 |
| d | about 1 |

> [!success] Official answer: C (0.938)

**Step 1: critical value of the sample mean under $H_0$.** $\sigma = 4$, so the standard error is $4/\sqrt{49} = 4/7 \approx 0.571$. A two-tailed test at 5% uses $Z_{crit} = 1.96$:

$$
\bar X_{crit} = Z_{crit} \cdot \frac{\sigma}{\sqrt{n}} + \mu_{H_0} = 1.96 \cdot \frac{4}{7} + 30 = 31.12
$$

**Step 2: standardise that cut-off around the true mean 32.**

$$
Z = \frac{31.12 - 32}{4/7} = -1.54
$$

**Step 3: power is the probability of landing in the rejection region when the truth is 32.**

$$
1 - \beta = 1 - \Phi(-1.54) = 1 - 0.0618 = 0.938
$$

![[PP07_q12_power_z_test.png|640]]

*Theory diagram. The dashed line is the critical value fixed by $H_0$ (blue curve). The shaded part of the true-mean curve (red) to the right of it is the power, 0.938.*

> [!note] The left tail
> A two-tailed test also rejects below $30 - 1.12 = 28.88$. When the truth is 32 that region is about $2 \cdot 10^{-8}$ of the true distribution, so it adds nothing visible. The lecturer uses only the right tail, as above.

Options a and b are too low (they would correspond to a larger standard error or a smaller shift); d overstates, since power is high but not 1. See [[Lec_06-Two Sample Tests, Error Types and Power]] and [[Lec_12-Exam Review 1]].

---

## Q13 — One-tailed versus two-tailed power

**Question.** Same population and sample size. Tommy tests $H_0: \mu = 10$ at $\alpha = 0.05$ and Gerad tests $H_0: \mu \le 10$ at $\alpha = 0.05$. If in the population $\mu > 10$, Tommy's test has ______ statistical power than Gerad's. If $\mu < 10$, Tommy's test has ______ power than Gerad's.

| Option | Text |
|---|---|
| a | More; more |
| b | More; less |
| c | Less; more |
| d | Less; less |

> [!success] Official answer: C (less; more)

Tommy's test is **two-tailed** (rejection regions in both tails, 2.5% each, $Z = \pm 1.96$). Gerad's is **right-tailed** (all 5% in the right tail, $Z = 1.645$).

- **True $\mu > 10$.** Gerad's cut-off, 1.645, is closer to the $H_0$ mean than Tommy's 1.96, so more of the true distribution lies beyond it. Tommy has **less** power.
- **True $\mu < 10$.** Gerad's rejection region is on the wrong side, so he almost never rejects. Tommy still has a left-hand region, so he has **more** power.

> [!example] Numbers, with the truth 2 standard errors from 10 (an illustrative choice)
> Above 10: Gerad $= 1 - \Phi(1.645 - 2) = 0.64$, Tommy $\approx 0.52$. Below 10: Gerad $\approx 0.0001$, Tommy $\approx 0.52$.

![[PP07_q13_one_vs_two_tailed.png|720]]

*Theory diagram on the z-scale. Purple dashed lines are Tommy's two critical values, the green line is Gerad's single critical value. Left panel: truth above 10. Right panel: truth below 10.*

> [!tip] Intuition
> A one-sided test spends its whole 5% on one direction. It is stronger in that direction and blind in the other.

See [[Lec_06-Two Sample Tests, Error Types and Power]]; the lecturer's pictures are in [[Lec_12-Exam Review 1]] and [[Lec_13-Exam Review Session 2]].

---

## Q14 — Using a t test where a Z test was possible

**Question.** Poly ran a t test for a difference in IQ, then learned the population variance was known, so a Z test at the same significance level was possible. By using a t test instead of a Z test, Poly ______ his probability of a Type I error ($\alpha$) and ______ his probability of a Type II error ($\beta$).

| Option | Text |
|---|---|
| a | Did not change; Increased |
| b | Changed; Decreased |
| c | Did not change; Increased |
| d | Changed; Decreased |

> [!warning] Source quirk
> Options a and c are printed **identically** (and b and d are identical too). The key says **C**, and the lecturer bolds c in [[Lec_12-Exam Review 1]]. Either a or c has the same wording, so the content is the only thing that matters: "did not change; increased".

> [!success] Official answer: C (did not change; increased)

- **$\alpha$ did not change.** Both tests are run at the same significance level, and as long as each test's requirements hold, its probability of a Type I error equals $\alpha$.
- **$\beta$ increased.** When $\sigma$ is known the Z test is the more powerful test: the t test has to estimate $\sigma$ from the sample, so its critical values are larger (fatter tails). A larger critical value makes it harder to reject a false $H_0$, so power falls and $\beta = 1 - \text{power}$ rises.

Options b and d ("changed; decreased") fail on both blanks.

See [[Lec_06-Two Sample Tests, Error Types and Power]] and [[Lec_05-Z Tests, t Tests and Two-Sample Tests]].

---

## Q15 — Single sample t test (kittens and anxiety)

**Question.** Alison tests whether petting kittens **decreases** anxiety. $n = 12$, $\bar X = 8.4$, $SD = 1.3$, normal conditions have expected value 10, single sample t test at $\alpha = 0.05$. What is the test statistic and is it significant?

| Option | Text |
|---|---|
| a | $t = -1.26$, not significant |
| b | $t = -1.26$, significant |
| c | $t = -4.26$, not significant |
| d | $t = -4.26$, significant |

> [!success] Official answer: D ($t = -4.26$, significant)

$$
t_{\bar X} = \frac{\bar X - \mu_{H_0}}{S / \sqrt{n}} = \frac{8.4 - 10}{1.3 / \sqrt{12}} = \frac{-1.6}{0.3753} = -4.26
$$

The test is one-tailed (left) with $n - 1 = 11$ degrees of freedom, so the critical value is $t^{0.05}_{11} = -1.796$. Since $-4.26 < -1.796$, it falls in the rejection region: **significant**. Even a two-tailed test (critical value $\pm 2.201$) would reject.

> [!warning] Common slip
> Forgetting the $\sqrt{n}$ and dividing by $1.3$ alone gives $-1.23$, close to the $-1.26$ distractor. The standard error is the SD **divided by $\sqrt{n}$**.

See [[Lec_05-Z Tests, t Tests and Two-Sample Tests]] and [[Lec_12-Exam Review 1]].

---

## Q16 — Two samples t test (extra recitations)

**Question.** 25 students get extra recitations (average 83, SD 8) and 25 are controls (average 79, SD 12). A two samples t test at $\alpha = 0.05$ tests whether final scores **differ**. What is the test statistic and is it significant?

| Option | Text |
|---|---|
| a | $t = 1.41$, not significant |
| b | $t = 1.41$, significant |
| c | $t = 2.41$, not significant |
| d | $t = 2.41$, significant |

> [!success] Official answer: A ($t = 1.41$, not significant)

The two-samples t test pools the variances (equal-variance assumption), so the pooled variance is

$$
S^2_{pooled} = \frac{(n_X - 1) S_X^2 + (n_Y - 1) S_Y^2}{n_X + n_Y - 2} = \frac{24 \cdot 64 + 24 \cdot 144}{48} = 104
$$

$$
t_{\bar X - \bar Y} = \frac{\bar X - \bar Y}{\sqrt{S^2_{pooled} \left( \dfrac{1}{n_X} + \dfrac{1}{n_Y} \right)}} = \frac{83 - 79}{\sqrt{104 \cdot 0.08}} = \frac{4}{2.884} = 1.39
$$

The test is two-tailed with $25 + 25 - 2 = 48$ degrees of freedom. The critical value is $t^{0.025}_{48} \approx 2.01$. Since $|1.39| < 2.01$, **not significant**. The conclusion matches the key: **A**.

> [!warning] The keyed 1.41 versus the strict 1.39
> The lecture slide ([[Lec_12-Exam Review 1]]) averages the two **standard deviations**, $(8 + 12)/2 = 10$, and squares that, so it uses a pooled variance of $100$. That gives $4 / \sqrt{100 \cdot 0.08} = 1.414$, the printed $1.41$. The correct pooled **variance** is $104$ (the average of the **variances** $64$ and $144$), giving $t \approx 1.39$. The letter is unchanged: $1.39$ and $1.41$ are both not significant. In your own working, pool variances, not standard deviations. [[Lec_13-Exam Review Session 2]] notes the same discrepancy.

> [!tip] Why not c or d
> $2.41$ cannot come from the data: it would need a standard error near $1.66$, much smaller than the actual $2.88$.

See [[Lec_05-Z Tests, t Tests and Two-Sample Tests]] and [[Pooled Variance]].

---

## Q17 — F test for equality of variances

**Question.** Group 1 has 16 observations and SD 2.5. Group 2 has 10 observations and SD 1.2. An F test for equality of variances is run. What $F$ statistic is found and is $H_0$ rejected?

| Option | Text |
|---|---|
| a | $F = 2.08$, $H_0$ rejected |
| b | $F = 2.08$, $H_0$ not rejected |
| c | $F = 4.34$, $H_0$ rejected |
| d | $F = 4.34$, $H_0$ not rejected |

> [!success] Official answer: C ($F = 4.34$, $H_0$ rejected)

Put the larger variance on top (the F test compares **variances**, so square the SDs):

$$
F_{observed} = \frac{S_X^2}{S_Y^2} = \frac{2.5^2}{1.2^2} = \frac{6.25}{1.44} = 4.34
$$

The degrees of freedom are $16 - 1 = 15$ (numerator) and $10 - 1 = 9$ (denominator). The lecturer compares with $F^{crit}_{15,9} = 3.01$ ([[Lec_12-Exam Review 1]]); a strict two-tailed test at 5% uses about $3.77$ ([[Lec_13-Exam Review Session 2]] quotes that). Either way $4.34$ is larger, so $H_0$ (equal variances) is **rejected**.

> [!warning] The $2.08$ trap
> $2.08 = 2.5/1.2$ is the ratio of the **standard deviations**. Forgetting to square gives options a and b. The test statistic is the ratio of variances.

See [[Lec_07-Tests for Proportions and Variances]].

---

## Q18 — 95% confidence interval for an expected value

**Question.** A fisherman weighs 51 cod. Average weight 44.27 kg, sample standard deviation 8.7. What is the 95% confidence interval for the expected weight?

| Option | Interval |
|---|---|
| a | $43.94 \le \mu \le 44.60$ |
| b | $43.14 \le \mu \le 45.40$ |
| c | $41.88 \le \mu \le 46.66$ |
| d | $41.82 \le \mu \le 46.72$ |

> [!success] Official answer: D ($41.82 \le \mu \le 46.72$)

The population variance is unknown (only $S = 8.7$), so use the **t** critical value with $n - 1 = 50$ degrees of freedom, $t^{0.975}_{50} = 2.009$:

$$
\bar X \pm t^{1-\alpha/2}_{n-1} \cdot \frac{S_X}{\sqrt{n}} = 44.27 \pm 2.009 \cdot \frac{8.7}{\sqrt{51}} = 44.27 \pm 2.009 \cdot 1.218 = 44.27 \pm 2.447
$$

$$
41.82 \le \mu \le 46.72
$$

> [!warning] Why option c is the tempting wrong one
> Using $Z = 1.96$ instead of $t = 2.009$ gives half-width $1.96 \cdot 1.218 = 2.39$, so $41.88 \le \mu \le 46.66$: option c. With an unknown variance and $n = 51$ the t value is the right one. Option a has a half-width of 0.33, which is about what you get by dividing by $n$ rather than $\sqrt{n}$; option b has half-width 1.13, which I could not reproduce from a single slip.

See [[Lec_08-Confidence Intervals]] and [[Lec_12-Exam Review 1]].

---

## Q19 — Sample size for a proportion interval

**Question.** Jonathan wants a 95% confidence interval for the proportion of people who like cheese with **at most a width of 3%**. What sample size does he need?

| Option | $n$ |
|---|---|
| a | 1269 |
| b | 2269 |
| c | 3269 |
| d | 4269 |

> [!success] Official answer: D (4269)

"Width" is the **full** width of the interval, $2 \cdot Z_{1-\alpha/2} \cdot \sqrt{p(1-p)/n}$. No estimate of $p$ is given, so use the worst case $p = 0.5$, which makes $p(1-p) = 0.25$ as large as possible and so covers every true proportion:

$$
2 \cdot 1.96 \cdot \sqrt{\frac{0.5 \cdot 0.5}{n}} = \frac{1.96}{\sqrt{n}} \le 0.03
$$

$$
\sqrt{n} \ge \frac{1.96}{0.03} = 65.33 \quad \Rightarrow \quad n \ge 4268.44
$$

Always round **up** (a smaller sample would exceed the 3% width), so $n = 4269$.

> [!tip] Intuition
> Equivalent form: half-width $0.015$, so $n = 1.96^2 \cdot 0.25 / 0.015^2 = 4268.4$. Reading "3%" as the half-width instead (margin of error 0.03) would give about $1067$, which is not an option, so the full-width reading is the intended one.

See [[Lec_08-Confidence Intervals]] and [[Lec_12-Exam Review 1]].

---

## Q20 — Chi-squared goodness of fit

**Question.** Montgomery claims 6% of people are widowed, 58% married and 34% single. Anne samples 100 people and finds 13 widowed, 50 "single" and 37 single. A $\chi^2$ goodness-of-fit test at $\alpha = 0.05$: what statistic, and is $H_0$ rejected?

| Option | Text |
|---|---|
| a | $\chi^2 = 9.53$, $H_0$ rejected |
| b | $\chi^2 = 9.53$, $H_0$ not rejected |
| c | $\chi^2 = 5.45$, $H_0$ rejected |
| d | $\chi^2 = 5.45$, $H_0$ not rejected |

> [!success] Official answer: A ($\chi^2 = 9.53$, $H_0$ rejected)

> [!warning] Source typo and assumption
> The question prints "50 were single and 37 were single". The three groups must be widowed, married and single, so I treat it as **13 widowed, 50 married, 37 single** (the counts add to 100). This matches the lecturer's working in [[Lec_12-Exam Review 1]] and [[Lec_13-Exam Review Session 2]]. If the second "single" were taken as a literal swap (37 married, 50 single) the statistic would be $23.30$, which is not an option, so the assumption is the consistent one.

Expected counts under $H_0$ with $n = 100$: $6$, $58$, $34$.

$$
\chi^2 = \sum \frac{(O_i - E_i)^2}{E_i} = \frac{(13 - 6)^2}{6} + \frac{(50 - 58)^2}{58} + \frac{(37 - 34)^2}{34} = 8.17 + 1.10 + 0.26 = 9.53
$$

Degrees of freedom $= k - 1 = 3 - 1 = 2$, so the critical value is $\chi^2_{2} = 5.991$. Since $9.53 > 5.991$, **reject** $H_0$: the data are not consistent with Montgomery's claim.

![[PP07_q20_chi2_df2.png|640]]

*Theory diagram of the $\chi^2$ distribution with 2 degrees of freedom. The shaded 5% rejection region starts at 5.991 and the observed 9.53 lies inside it.*

> [!tip] Intuition
> Most of the statistic comes from the widowed group, where 13 were seen against 6 expected. One cell far off its expected count is enough to push the total past the critical value.

See [[Lec_09-Chi-Squared Tests for Goodness of Fit and Independence]].

---

## Answer check against the official key

| Q | Topic | My working | Official | Match |
|---|---|---|---|---|
| 1 | Sum of observations | increases; increases | C | Yes |
| 2 | Unbiased estimator | $X_1/2$ | A | Yes |
| 3 | Sum and product | necessarily; not necessarily | B | Yes |
| 4 | Consistency | both consistent | A | Yes |
| 5 | MLE table | 1 at $X=0$, $-1$ at $X=1$ | B | Yes |
| 6 | Perfect correlation | could; could not | B | Yes |
| 7 | Regression mean | 1756 | B | Yes |
| 8 | Zero correlation | intercept not necessarily; slope necessarily | C | Yes |
| 9 | Z statistic | 3.2 | D | Yes |
| 10 | Two samples Z | 3.33 | C | Yes |
| 11 | Test requirements | cannot; cannot | D | Yes |
| 12 | Power | 0.938 | C | Yes |
| 13 | One vs two tailed | less; more | C | Yes |
| 14 | Z vs t | did not change; increased | C | Yes |
| 15 | Single sample t | $-4.26$, significant | D | Yes |
| 16 | Two samples t | 1.39 (key prints 1.41), not significant | A | Yes (letter) |
| 17 | F test | 4.34, rejected | C | Yes |
| 18 | CI for a mean | 41.82 to 46.72 | D | Yes |
| 19 | Sample size | 4269 | D | Yes |
| 20 | Chi-squared | 9.53, rejected | A | Yes |

## Related notes

- Hub: [[Statistics B]]
- Exam-review sessions that work these questions: [[Lec_12-Exam Review 1]], [[Lec_13-Exam Review Session 2]]
- Test-selection recap: [[Lec_10-Extra Credit Project and Test Selection Recap]]
