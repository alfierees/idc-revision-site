---
title: "Estimators, Z and t Tests, Power, Confidence Intervals & Chi-Squared (2025 Moed A)"
type: past-paper
status: worked-solution
exam: "Moed A 2025"
semester: 2
year: 1
course: "Statistics B"
instructor: unknown
tags:
  - statistics-b
  - past-paper
  - worked-solution
  - multiple-choice
  - estimators
  - hypothesis-testing
  - statistical-power
  - confidence-interval
  - chi-squared-test
  - regression
aliases:
  - Statistics B Moed A 2025
  - PP05 Statistics B
  - Statistics for Economics II Moed A 2025
subject: statistics-b
in_scope: true
---

# Moed A 2025 — Worked Solutions

> Part of: [[Statistics B]]
> **Moed A 2025** — Statistics for Economics II (Statistics B)
> Builds on: [[Lec_01-Point Estimation and Sampling Distributions]], [[Lec_02-Point Estimation and the Variance Estimator]], [[Lec_03-Maximum Likelihood Estimation]], [[Lec_04-Hypothesis Testing and the Z Test]], [[Lec_05-Z Tests, t Tests and Two-Sample Tests]], [[Lec_06-Two Sample Tests, Error Types and Power]], [[Lec_07-Tests for Proportions and Variances]], [[Lec_08-Confidence Intervals]], [[Lec_09-Chi-Squared Tests for Goodness of Fit and Independence]], [[Lec_11-Joint Distributions, Correlation and Linear Regression]], [[Lec_12-Exam Review 1]]
> Key concepts: [[Unbiased Estimator]], [[Consistent Estimator]], [[Maximum Likelihood Estimate]], [[Single Sample Z Test]], [[Two Samples Z Test]], [[Two Samples Z Test for Proportions]], [[Single Sample t Test]], [[Two Independent Samples t Test]], [[F Test for Equality of Variances]], [[Statistical Power]], [[Confidence Interval]], [[Chi-Squared Test for Goodness of Fit]], [[Linear Regression]]

> [!warning] No official key: tofes 0 layout, every answer is AI-written
> This is a **tofes 0** (master) paper. Its header reads "Note, in all questions the correct answer is a", so the only official information is that **option a is correct for every question**. There is no official working. Every solution below was solved independently first, then compared with option a. Each one carries the AI-written flag. **All 20 answers agree with option a**.
>
> **AI-solved questions: Q1 to Q20 (all of them).** Check the working before relying on it.

---

## What this paper tests

20 multiple-choice questions that follow the course in order:

1. **Q1 to Q5, estimation.** Standard error of an average, unbiased estimators (a shift or scale correction), consistency from the variance, and maximum likelihood from critical points.
2. **Q6 to Q10, which test and which statistic.** Z for one mean, two means, one proportion and two proportions, and the rule for when Z versus t is allowed.
3. **Q11 to Q13, power and error types.** A numerical power calculation, effect size, and one-tailed versus two-tailed power.
4. **Q14 to Q16, t and F tests.** One-sample t, pooled two-sample t, and the F test for variances.
5. **Q17 to Q19, intervals and chi-squared.** Confidence interval for a proportion, for a mean with the t quantile, and chi-squared goodness of fit.
6. **Q20, regression.** Zero correlation means a flat regression line.

> [!tip] Intuition
> Almost every question is "pick the right formula, plug in, compare with the critical value". The fastest route is the test-selection table in [[Lec_05-Z Tests, t Tests and Two-Sample Tests]]: first ask whether the target is a mean, a proportion or a variance, then whether the variance is known.

---

## Q1 — Standard error of the sample average

*A population has a mean of 50 and a standard deviation of 10. Random samples of size 25 are drawn and the average is computed for each sample. What is the standard deviation of the sampling distribution of the averages?*

a. 2  b. 5  c. 10  d. 50

> [!warning] AI-written answer, consistent with the tofes 0 layout (answer printed first).

The [[Standard Error]] of the sample average is the population standard deviation divided by $\sqrt{n}$:

$$
\text{SD}(\bar X) = \frac{\sigma}{\sqrt{n}} = \frac{10}{\sqrt{25}} = \frac{10}{5} = 2
$$

**Answer: a.**

- b (5) divides by $n/5$ or similar; it is not $\sigma/\sqrt{n}$.
- c (10) is $\sigma$ itself: the spread of **one observation**, not of an average.
- d (50) is the mean, which is the centre of the sampling distribution, not its spread.

See [[Lec_01-Point Estimation and Sampling Distributions]] ([[Sampling Distribution of the Average]]).

---

## Q2 — Unbiased estimator for $a$

*$X$ takes values $-2, 1, 4$ with probabilities $a,\ 1-3a,\ 2a$. $\bar X$ is the average of 30 observations. Which is an unbiased estimator for $a$?*

a. $\dfrac{\bar X - 1}{3}$  b. $3\bar X$  c. $1 - 3\bar X$  d. $\dfrac{\bar X + 2}{3}$

> [!warning] AI-written answer, consistent with the tofes 0 layout (answer printed first).

An [[Unbiased Estimator]] has expected value equal to the parameter. First find $E(\bar X) = E(X)$:

$$
E(X) = (-2)(a) + (1)(1-3a) + (4)(2a) = -2a + 1 - 3a + 8a = 1 + 3a
$$

Solve for $a$:

$$
a = \frac{E(X) - 1}{3}
$$

Replace $E(X)$ by $\bar X$, whose expected value is $E(X)$. Then $E\!\left(\frac{\bar X - 1}{3}\right) = \frac{1 + 3a - 1}{3} = a$.

**Answer: a.**

- b: $E(3\bar X) = 3 + 9a \ne a$.
- c: $E(1 - 3\bar X) = 1 - 3 - 9a = -2 - 9a \ne a$.
- d: $E\!\left(\frac{\bar X + 2}{3}\right) = \frac{3 + 3a}{3} = 1 + a \ne a$.

> [!tip] Intuition
> The sample size (30) is a distractor: unbiasedness does not depend on $n$. Just invert "$E(X)$ as a function of $a$".

See [[Lec_01-Point Estimation and Sampling Distributions]] and [[Lec_02-Point Estimation and the Variance Estimator]].

---

## Q3 — Bias correction by scaling

*$E(\hat\theta) = \theta/4$ and $\text{Var}(\hat\theta) = \theta/n$. Which is an unbiased estimator for $\theta$?*

a. $4\hat\theta$  b. $\hat\theta/4$  c. $\hat\theta/2$  d. $2\hat\theta$

> [!warning] AI-written answer, consistent with the tofes 0 layout (answer printed first).

Multiplying by a constant multiplies the expected value by the same constant:

$$
E(4\hat\theta) = 4\cdot\frac{\theta}{4} = \theta
$$

**Answer: a.**

- b: $E(\hat\theta/4) = \theta/16$.
- c: $E(\hat\theta/2) = \theta/8$.
- d: $E(2\hat\theta) = \theta/2$.

The variance is irrelevant to bias. See [[Lec_02-Point Estimation and the Variance Estimator]].

---

## Q4 — Consistency from the variance

*$\text{Var}(\hat\theta_1) = \dfrac{\sigma^2+1}{\sqrt n}$ and $\text{Var}(\hat\theta_2) = \dfrac{\sigma^2}{n+1}$. Based on these variances, $\hat\theta_1$ is ___ and $\hat\theta_2$ is ___.*

a. consistent; consistent  b. inconsistent; consistent  c. consistent; inconsistent  d. inconsistent; inconsistent

> [!warning] AI-written answer, consistent with the tofes 0 layout (answer printed first).

A [[Consistent Estimator]] must have a bias and a variance that both go to 0 as $n\to\infty$. The question says to judge by the variances, so check that both go to 0:

$$
\lim_{n\to\infty}\frac{\sigma^2+1}{\sqrt n} = 0
\qquad\text{and}\qquad
\lim_{n\to\infty}\frac{\sigma^2}{n+1} = 0
$$

Both go to 0, so both are consistent. $\hat\theta_1$ converges **more slowly** (rate $1/\sqrt n$ rather than $1/n$), but speed does not matter for consistency.

**Answer: a.**

> [!note] Assumption
> The question gives no bias term, so I take both estimators as unbiased (or asymptotically unbiased). Only the variance is stated, and that is what the question asks us to use. See [[Lec_12-Exam Review 1]] Q4 for the same pattern.

---

## Q5 — Maximum likelihood from critical points

*The first and second derivatives of $\ln L(\theta\mid x)$ show a **maximum** at $\theta = x-1$ and a **minimum** at $\theta = 2x$. What is the maximum likelihood estimator?*

a. $x-1$  b. $2x$  c. $2x-1$  d. $2(x-1)$

> [!warning] AI-written answer, consistent with the tofes 0 layout (answer printed first).

The [[Maximum Likelihood Estimate]] is the value of $\theta$ that **maximises** the likelihood, and $\ln$ is increasing, so it maximises the [[Log-Likelihood]] too. The second derivative test says a maximum has a negative second derivative, which the question has already told us is at $\theta = x-1$. The point $\theta = 2x$ is a minimum, the opposite of what we want.

**Answer: a.** $\hat\theta = x - 1$.

- b: the minimum, the worst point.
- c and d: combinations of the two critical points that are neither of them.

See [[Lec_03-Maximum Likelihood Estimation]].

---

## Q6 — Single sample Z statistic

*Claim: mean weight 120 g. $n = 64$, $\bar X = 126$, known $\sigma = 16$. What is the Z statistic?*

a. 3.00  b. 2.00  c. 1.50  d. $-3.00$

> [!warning] AI-written answer, consistent with the tofes 0 layout (answer printed first).

With $\sigma$ known, use the [[Single Sample Z Test]]:

$$
Z = \frac{\bar X - \mu_{H_0}}{\sigma/\sqrt n} = \frac{126 - 120}{16/\sqrt{64}} = \frac{6}{2} = 3.00
$$

**Answer: a.** Option d has the right size but the wrong sign: the sample average is **above** the claim, so Z is positive.

See [[Lec_04-Hypothesis Testing and the Z Test]].

---

## Q7 — Two samples Z statistic

*Country A: $n = 40$, mean 15, $\sigma = 6$. Country B: $n = 35$, mean 18, $\sigma = 6$. Z statistic for "the countries differ"?*

a. $-2.16$  b. $-1.54$  c. $-0.98$  d. $-3.46$

> [!warning] AI-written answer, consistent with the tofes 0 layout (answer printed first).

Use the [[Two Samples Z Test]], with known and equal $\sigma$ and $H_0:\ \mu_A - \mu_B = 0$:

$$
Z = \frac{(\bar X_A - \bar X_B) - 0}{\sigma\sqrt{\frac{1}{n_A}+\frac{1}{n_B}}}
= \frac{15 - 18}{6\sqrt{\frac{1}{40}+\frac{1}{35}}}
= \frac{-3}{6\,(0.2315)} = \frac{-3}{1.389} \approx -2.16
$$

**Answer: a.** The difference is negative because A is the first sample and has the smaller mean. Options b, c and d do not equal the computed value.

See [[Lec_05-Z Tests, t Tests and Two-Sample Tests]].

---

## Q8 — Single sample Z test for a proportion

*400 voters, 58% plan to vote. $H_0$: $p = 0.5$. Z statistic?*

a. 3.2  b. 2.2  c. 1.2  d. 4.2

> [!warning] AI-written answer, consistent with the tofes 0 layout (answer printed first).

For the [[Single Sample Z Test for Proportion]] the standard error uses the **null** proportion, $p_0 = 0.5$, not $\hat p$:

$$
Z = \frac{\hat p - p_0}{\sqrt{p_0(1-p_0)/n}} = \frac{0.58 - 0.50}{\sqrt{0.25/400}} = \frac{0.08}{0.025} = 3.2
$$

**Answer: a.** Options b, c and d do not equal the computed value.

See [[Lec_07-Tests for Proportions and Variances]].

---

## Q9 — Two proportions Z test

*New interface: $n = 90$, 40% retained. Old: $n = 110$, 55% retained. $H_0$: equal proportions. Z statistic and significance at 5% (two-tailed)?*

a. $Z = -2.11$, significant  b. $Z = -2.11$, not significant  c. $Z = -1.11$, significant  d. $Z = -1.11$, not significant

> [!warning] AI-written answer, consistent with the tofes 0 layout (answer printed first).

Under $H_0$ the two groups share one proportion, estimated by the [[Pooled Proportion]]:

$$
\hat p = \frac{0.40(90) + 0.55(110)}{200} = \frac{36 + 60.5}{200} = 0.4825
$$

Then:

$$
Z = \frac{0.40 - 0.55}{\sqrt{\hat p(1-\hat p)\left(\frac{1}{90}+\frac{1}{110}\right)}}
= \frac{-0.15}{\sqrt{0.4825\,(0.5175)\,(0.020202)}}
= \frac{-0.15}{0.07103} \approx -2.11
$$

The critical values for a two-tailed 5% test are $\pm 1.96$. Since $|-2.11| > 1.96$, we **reject** $H_0$: the difference is significant.

**Answer: a.**

- b: right statistic, wrong conclusion. $2.11 > 1.96$, so it is significant.
- c and d: wrong statistic ($-1.11$ is inside $\pm 1.96$, so c is also internally inconsistent).

See [[Lec_07-Tests for Proportions and Variances]] ([[Two Samples Z Test for Proportions]]).

---

## Q10 — Which test is allowed

*Lifetimes of 120 batteries, population normal, **variance unknown**, tested against 12 hours. Emily ___ use a one-sample Z test and ___ use a one-sample t test.*

a. Cannot; can  b. Can; can  c. Can; cannot  d. Cannot; cannot

> [!warning] AI-written answer, consistent with the tofes 0 layout (answer printed first).

The Z test requires a **known** population variance. Here it is unknown, so Z is **not allowed**, however large $n = 120$ is. The t test needs normality (given) and an unknown variance estimated by the sample standard deviation: it **can** be used.

**Answer: a.** The lecturer's rule (see [[Lec_12-Exam Review 1]] Q11): "variance known or not" decides Z versus t. A large sample does not turn an estimated $\sigma$ into a known one.

> [!tip] Intuition
> With $n = 120$ the t and normal distributions are almost identical, so in practice the answers match. But the exam asks which test is **allowed**, and the answer is determined by the assumptions.

See [[Lec_05-Z Tests, t Tests and Two-Sample Tests]] ([[Single Sample t Test]]).

---

## Q11 — Power of a Z test

*$n = 36$, known SD $= 4$, $H_0: \mu = 60$, $\alpha = 0.05$. The true mean is $61.6$. What is the power?*

a. 0.67  b. 0.54  c. 0.42  d. 0.89

> [!warning] AI-written answer, consistent with the tofes 0 layout (answer printed first).

[[Statistical Power]] is $1-\beta$: the probability of rejecting $H_0$ when it is false. The test is two-tailed (the wording is "test $H_0: \mu = 60$", no direction).

**Step 1. Standard error.**

$$
\text{SE} = \frac{4}{\sqrt{36}} = \frac{4}{6} = 0.667
$$

**Step 2. Critical value (in units of $\bar X$).** The upper cutoff under $H_0$:

$$
\bar X_{crit} = 60 + 1.96(0.667) = 61.31
$$

**Step 3. Probability of exceeding it when the true mean is 61.6.**

$$
P(\bar X > 61.31 \mid \mu = 61.6) = P\!\left(Z > \frac{61.31 - 61.6}{0.667}\right) = P(Z > -0.44) = 0.67
$$

The lower rejection region (below 58.69) is more than 4 standard errors from 61.6 and adds essentially nothing.

**Answer: a.** $1-\beta = 0.67$.

![[PP05_q11_power_mu61_6.png|640]]

The red area (right of the dashed critical value, under the curve centred at 61.6) is the power. The sliver of the blue curve to the right of the line is $\alpha/2$.

- b, c, d: none matches the calculation above.

See [[Lec_06-Two Sample Tests, Error Types and Power]].

---

## Q12 — Effect size, $\beta$ and $\alpha$

*Leo and Maya each use $n = 25$ per group and the same $\alpha$. Leo's true effect size is $d = 0.6$; Maya's is $d = 0.15$. Which statement is correct?*

a. $\beta$ is smaller in Leo's test  b. $\beta$ is larger in Leo's test  c. $\alpha$ is larger in Leo's test  d. $\alpha$ is smaller in Leo's test

> [!warning] AI-written answer, consistent with the tofes 0 layout (answer printed first).

- $\alpha$ is **chosen by the researcher** and both used the same one, so $\alpha$ is equal for Leo and Maya. This rules out c and d.
- A larger effect size ([[Cohen's d]]) means the true sampling distribution sits further from the null one, so there is more overlap-free area beyond the critical value. Power rises and $\beta = 1 - \text{power}$ **falls**.

**Answer: a.** Leo's $\beta$ is smaller.

> [!example] Check with numbers (my own calculation)
> With a two-tailed two-sample t test at $\alpha = 0.05$ and $n = 25$ per group, the power is about **0.55** for $d = 0.6$ and about **0.07** for $d = 0.15$. So $\beta \approx 0.45$ for Leo and $\beta \approx 0.93$ for Maya.

See [[Lec_06-Two Sample Tests, Error Types and Power]] and [[Lec_12-Exam Review 1]] Q12.

---

## Q13 — One-tailed versus two-tailed power

*Priya runs a one-tailed t test ($\alpha = .05$) predicting a **decrease**; Omar runs a two-tailed test on the same data. The true mean really **is** lower after training. Priya's test has ___ power compared with Omar's.*

a. More  b. Less  c. The same  d. Cannot be determined

> [!warning] AI-written answer, consistent with the tofes 0 layout (answer printed first).

A one-tailed test puts the whole 5% in the tail where the effect lies, so its critical value is **closer to the centre** ($-1.645$ rather than $-1.96$ in the Z case). The true effect, which lies in that direction, passes the lower bar more often, so the power is **larger**.

**Answer: a.**

> [!warning] Condition that makes this work
> The question states the true mean is lower, i.e. **in the predicted direction**. If the effect were in the opposite direction, the one-tailed test would have almost no power. That is why "cannot be determined" (d) is wrong here: the direction is given.

See [[Lec_12-Exam Review 1]] Q13 and [[Lec_06-Two Sample Tests, Error Types and Power]].

---

## Q14 — Single sample t test

*Coffee blend and e-mails: $n = 12$, $\bar X = 54.2$, $S = 5.1$, $\mu_0 = 50$, two-tailed, $\alpha = 0.05$, normal population. Test statistic and conclusion?*

a. $t = 2.85$, significant  b. $t = 2.85$, not significant  c. $t = 2.15$, significant  d. $t = 2.15$, not significant

> [!warning] AI-written answer, consistent with the tofes 0 layout (answer printed first).

The variance is unknown, so use the [[Single Sample t Test]] with $n-1 = 11$ [[Degrees of Freedom]]:

$$
t = \frac{\bar X - \mu_0}{S/\sqrt n} = \frac{54.2 - 50}{5.1/\sqrt{12}} = \frac{4.2}{1.472} \approx 2.85
$$

The two-tailed 5% critical value for $t_{11}$ is $\pm 2.201$. Since $2.85 > 2.201$, reject $H_0$: significant.

**Answer: a.**

![[PP05_q14_t11_rejection.png|640]]

The statistic falls inside the right-hand rejection region.

- b: right statistic, wrong conclusion.
- c, d: wrong statistic (2.15 would be just under 2.201, so d is internally consistent but does not match the data).

See [[Lec_05-Z Tests, t Tests and Two-Sample Tests]].

---

## Q15 — Two sample t test (pooled)

*New OS: $n = 28$, mean 11.5, SD 1.9. Old OS: $n = 26$, mean 10.8, SD 2.0. Two-sample t test at $\alpha = 0.05$.*

a. $t = 1.32$, not significant  b. $t = 1.32$, significant  c. $t = 2.32$, not significant  d. $t = 2.32$, significant

> [!warning] AI-written answer, consistent with the tofes 0 layout (answer printed first).

Assume equal variances and use the [[Two Independent Samples t Test]]. The [[Pooled Variance]] weights by degrees of freedom:

$$
S^2_{pooled} = \frac{(28-1)(1.9)^2 + (26-1)(2.0)^2}{28 + 26 - 2} = \frac{27(3.61) + 25(4)}{52} = \frac{97.47 + 100}{52} = 3.797
$$

so $S_{pooled} = 1.949$. Then:

$$
t = \frac{11.5 - 10.8}{1.949\sqrt{\frac{1}{28}+\frac{1}{26}}} = \frac{0.7}{1.949\,(0.2723)} = \frac{0.7}{0.5307} \approx 1.32
$$

Degrees of freedom $= 52$, two-tailed critical value $\approx 2.007$. Since $1.32 < 2.007$, **do not reject** $H_0$.

**Answer: a.**

- b: right statistic, but 1.32 is below the critical value.
- c and d: the statistic is wrong (2.32 would exceed 2.007).

See [[Lec_05-Z Tests, t Tests and Two-Sample Tests]] and [[Lec_06-Two Sample Tests, Error Types and Power]].

---

## Q16 — F test for equality of variances

*Program 1: $n = 16$, SD 6.3. Program 2: $n = 15$, SD 6.0. $H_0$: equal variances, $\alpha = 0.05$.*

a. $F = 1.10$, not rejected  b. $F = 1.10$, rejected  c. $F = 2.6$, not rejected  d. $F = 2.6$, rejected

> [!warning] AI-written answer, consistent with the tofes 0 layout (answer printed first).

The [[F Test for Equality of Variances]] statistic is the ratio of the sample variances, with the larger on top:

$$
F = \frac{S_1^2}{S_2^2} = \frac{6.3^2}{6.0^2} = \frac{39.69}{36} = 1.1025 \approx 1.10
$$

The degrees of freedom are $(n_1 - 1,\ n_2 - 1) = (15, 14)$. For a two-tailed 5% test the upper critical value is $F_{0.975}(15,14) \approx 2.95$. Since $1.10 < 2.95$, **do not reject** $H_0$.

**Answer: a.**

- b: right statistic, wrong decision.
- c and d: the statistic 2.6 does not match the data.

See [[Lec_07-Tests for Proportions and Variances]].

---

## Q17 — Confidence interval for a proportion

*200 adults, 44% watch documentaries. 95% confidence interval for $p$?*

a. $0.37 \le p \le 0.51$  b. $0.28 \le p \le 0.60$  c. $0.40 \le p \le 0.48$  d. $0.26 \le p \le 0.62$

> [!warning] AI-written answer, consistent with the tofes 0 layout (answer printed first).

A [[Confidence Interval]] for a proportion is $\hat p \pm z\sqrt{\hat p(1-\hat p)/n}$, with $z = 1.96$:

$$
\text{SE} = \sqrt{\frac{0.44(0.56)}{200}} = \sqrt{0.001232} = 0.0351
$$

$$
\text{margin} = 1.96(0.0351) = 0.0688
$$

$$
0.44 \pm 0.0688 \;\Rightarrow\; 0.371 \le p \le 0.509
$$

**Answer: a.** $0.37 \le p \le 0.51$.

- b and d: margins about 0.16 to 0.18, too wide (would need a much smaller sample).
- c: margin 0.04 is only about 1.14 standard errors, so it is too narrow for 95%.

See [[Lec_08-Confidence Intervals]].

---

## Q18 — Confidence interval for a mean (t quantile)

*25 participants, mean 8900 steps, sample SD 1200, normal. 99% confidence interval for the expected value?*

a. $8229 \le \mu \le 9571$  b. $8480 \le \mu \le 9320$  c. $8000 \le \mu \le 9800$  d. $7900 \le \mu \le 9900$

> [!warning] AI-written answer, consistent with the tofes 0 layout (answer printed first).

The variance is unknown and $n$ is small, so use the t quantile with $n - 1 = 24$ degrees of freedom, $t_{0.995,\,24} = 2.797$:

$$
\text{SE} = \frac{1200}{\sqrt{25}} = 240
$$

$$
\text{margin} = 2.797(240) = 671.3
$$

$$
8900 \pm 671.3 \;\Rightarrow\; 8229 \le \mu \le 9571
$$

**Answer: a.**

- b: margin 420 is $1.75$ standard errors, too narrow for 99%.
- c: margin 900 is $3.75$ standard errors, wider than needed.
- d: margin 1000 is $4.17$ standard errors, wider still.

> [!tip] Intuition
> The $t$ quantile (2.797) is bigger than the Z quantile (2.576) because estimating $\sigma$ adds uncertainty. Using 2.576 would give $\pm 618$, which matches none of the options.

See [[Lec_08-Confidence Intervals]] and [[Student's t Distribution]].

---

## Q19 — Chi-squared goodness of fit

*Theory: 25% innovators, 50% majority adopters, 25% laggards. Observed among 200 purchasers: 20, 140, 40. $\alpha = 0.05$.*

a. $\chi^2 = 36.0$, rejected  b. $\chi^2 = 36.0$, did not reject  c. $\chi^2 = 3.6$, rejected  d. $\chi^2 = 3.6$, did not reject

> [!warning] AI-written answer, consistent with the tofes 0 layout (answer printed first).

The expected counts under the theory are $200 \times (0.25, 0.50, 0.25) = (50, 100, 50)$. Use the [[Chi-Squared Test for Goodness of Fit]]:

| Category | Observed | Expected | $(O-E)^2/E$ |
|---|---|---|---|
| Innovators | 20 | 50 | $(-30)^2/50 = 18$ |
| Majority adopters | 140 | 100 | $40^2/100 = 16$ |
| Laggards | 40 | 50 | $(-10)^2/50 = 2$ |

$$
\chi^2 = 18 + 16 + 2 = 36.0
$$

There are $3 - 1 = 2$ degrees of freedom, and the 5% critical value is $5.99$. Since $36.0 > 5.99$, **reject** the claimed distribution.

**Answer: a.**

![[PP05_q19_chi2_df2.png|640]]

The statistic is far into the rejection region.

- b: right statistic but the wrong conclusion.
- c and d: 3.6 does not match the computed 36.0, and c also contradicts itself (3.6 is below 5.99, so it would not reject).

See [[Lec_09-Chi-Squared Tests for Goodness of Fit and Independence]].

---

## Q20 — Zero correlation and the regression line

*The correlation between shoe size and math ability is exactly 0. A simple regression predicts math ability from shoe size. A has shoe size 44, B has 36. A's predicted math ability will be ___ B's predicted reaction time.*

a. Equal to  b. Higher than  c. Lower than  d. Impossible to know

> [!warning] AI-written answer, consistent with the tofes 0 layout (answer printed first).

> [!note] Source typo
> The question ends "B's predicted **reaction time**" but the variable is **math ability**. I read it as "B's predicted math ability".

The regression slope is $b = r\,\dfrac{S_Y}{S_X}$. With $r = 0$ the slope is 0, so the fitted line is flat at $\bar Y$ and every participant gets the same prediction, $\hat Y = \bar Y$, regardless of shoe size.

**Answer: a.** Equal to.

- b and c: need a nonzero slope (positive or negative correlation).
- d: the information **is** enough, because $r = 0$ fixes the slope.

See [[Lec_11-Joint Distributions, Correlation and Linear Regression]] ([[Linear Regression]], [[Correlation Coefficient]]).

---

## Recap table

| Q | Topic | Result | Answer |
|---|---|---|---|
| 1 | Standard error of the average | $10/5 = 2$ | a |
| 2 | Unbiased estimator for $a$ | $(\bar X - 1)/3$ | a |
| 3 | Bias correction | $4\hat\theta$ | a |
| 4 | Consistency | both variances go to 0 | a |
| 5 | MLE | the maximum, $x-1$ | a |
| 6 | One-sample Z | 3.00 | a |
| 7 | Two-sample Z | $-2.16$ | a |
| 8 | One-proportion Z | 3.2 | a |
| 9 | Two-proportion Z | $-2.11$, significant | a |
| 10 | Z versus t | Z cannot (variance unknown), t can | a |
| 11 | Power | 0.67 | a |
| 12 | Effect size and $\beta$ | Leo's $\beta$ smaller | a |
| 13 | One-tailed power | more | a |
| 14 | One-sample t | 2.85, significant | a |
| 15 | Two-sample t | 1.32, not significant | a |
| 16 | F test | 1.10, not rejected | a |
| 17 | CI for a proportion | $0.37$ to $0.51$ | a |
| 18 | CI for a mean (t) | $8229$ to $9571$ | a |
| 19 | Chi-squared goodness of fit | 36.0, rejected | a |
| 20 | Zero correlation | equal predictions | a |

## Related notes

- Hub: [[Statistics B]]
- Review session covering the same patterns: [[Lec_12-Exam Review 1]], [[Lec_13-Exam Review Session 2]]
- Course recap on picking the test: [[Lec_10-Extra Credit Project and Test Selection Recap]]
