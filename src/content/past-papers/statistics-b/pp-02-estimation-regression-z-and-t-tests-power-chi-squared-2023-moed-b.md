---
title: "Estimation, Regression, Z and t Tests, Power & Chi-Squared (2023 Moed B)"
type: past-paper
status: worked-solution
exam: "Statistics B Final Exam, Moed B 2023"
semester: 2
year: 1
course: "Statistics B"
instructor: unknown
tags:
  - statistics-b
  - past-paper
  - worked-solution
  - multiple-choice
  - estimation
  - hypothesis-testing
  - statistical-power
  - confidence-intervals
  - chi-squared
  - linear-regression
aliases:
  - Statistics B Moed B 2023
  - Stats B Moed B 2023
  - PP02 Statistics B
subject: statistics-b
in_scope: true
---

# Estimation, Regression, Z and t Tests, Power & Chi-Squared (2023 Moed B)

> Part of: [[Statistics B]]
> **Statistics B Final Exam, Moed B 2023**, Statistics B. 20 multiple-choice questions, one correct option each, with an official letter key printed inside the paper.
> Builds on: [[Lec_01-Point Estimation and Sampling Distributions]], [[Lec_02-Point Estimation and the Variance Estimator]], [[Lec_03-Maximum Likelihood Estimation]], [[Lec_04-Hypothesis Testing and the Z Test]], [[Lec_05-Z Tests, t Tests and Two-Sample Tests]], [[Lec_06-Two Sample Tests, Error Types and Power]], [[Lec_07-Tests for Proportions and Variances]], [[Lec_08-Confidence Intervals]], [[Lec_09-Chi-Squared Tests for Goodness of Fit and Independence]], [[Lec_11-Joint Distributions, Correlation and Linear Regression]]
> Reviewed in class: Q1, Q2, Q4 and Q5 in [[Lec_13-Exam Review Session 2]].

> [!info] Source and answer provenance
> The paper prints a **letter-only answer key**. The key has no working, so every explanation below is written for revision. For every question the working was checked to reach the keyed letter. All 20 keyed letters were reproduced, with two caveats:
> - **Q3 and Q13** carry a printed note that *all answers were accepted* (poor psychometric performance). The key still lists B for Q3 and D for Q13. The "best answer" in each is **AI-written, not the official ruling**.
> - Q11 is keyed "can; can". See the warning there for why that is the less obvious reading.
>
> **AI-solved questions (best answer only, official ruling was "all accepted"):** Q3, Q13.

## What this paper tests

| Questions | Core idea | Where it is taught |
|---|---|---|
| Q1 to Q5 | [[Sampling Distribution]] of the mean, [[Unbiased Estimator]], [[Consistent Estimator]], [[Maximum Likelihood Estimator]] | [[Lec_01-Point Estimation and Sampling Distributions]], [[Lec_02-Point Estimation and the Variance Estimator]], [[Lec_03-Maximum Likelihood Estimation]] |
| Q6 to Q8 | [[Pearson Correlation]], [[Linear Regression Line]], regression of X on Y versus Y on X | [[Lec_11-Joint Distributions, Correlation and Linear Regression]] |
| Q9, Q10 | [[Z Test for a Proportion]], [[Two-Proportion Z Test]] | [[Lec_07-Tests for Proportions and Variances]] |
| Q11, Q16, Q17 | Choosing between [[Z Test]] and [[t Test]], one-sample and [[Two-Sample t Test]] | [[Lec_04-Hypothesis Testing and the Z Test]], [[Lec_05-Z Tests, t Tests and Two-Sample Tests]], [[Lec_06-Two Sample Tests, Error Types and Power]] |
| Q12 to Q15 | [[Statistical Power]], [[Type II Error]], [[Effect Size]] (Cohen's d) | [[Lec_06-Two Sample Tests, Error Types and Power]] |
| Q18, Q19 | [[Confidence Interval]] for a mean and its link to two-sided tests | [[Lec_08-Confidence Intervals]] |
| Q20 | [[Chi-Squared Test of Independence]] | [[Lec_09-Chi-Squared Tests for Goodness of Fit and Independence]] |

> [!tip] Intuition: the habit that wins this paper
> Write down which distribution the statistic lives under, plug in, compare with the critical value. For the conceptual questions (Q1, Q4, Q6, Q14) ask "what changes when $n$ grows?" first.

## Answer key at a glance

| Q | Key | Q | Key | Q | Key | Q | Key |
|---|---|---|---|---|---|---|---|
| 1 | A | 6 | C | 11 | A | 16 | C |
| 2 | C | 7 | A | 12 | B | 17 | D |
| 3 | B (all accepted) | 8 | C | 13 | D (all accepted) | 18 | A |
| 4 | D | 9 | B | 14 | B | 19 | D |
| 5 | B | 10 | B | 15 | A | 20 | A |

---

## Q1 — What is the same for samples of 10 and 100

Kim samples 10 poodles and Beth samples 100. Each computes the average friendliness. Which is **necessarily the same** for both?

- a. The expected value of the average
- b. The variance of the average
- c. The standard deviation of the average
- d. The shape of the distribution of the average

> [!success] Official answer: A

For any sample size,

$$
E(\bar{X}) = \mu
$$

The spread depends on $n$:

$$
Var(\bar{X}) = \frac{\sigma^2}{n}, \qquad SD(\bar{X}) = \frac{\sigma}{\sqrt{n}}
$$

- **a. Correct.** The sample mean is an [[Unbiased Estimator]] of $\mu$ at every $n$, so its centre does not move.
- **b. Wrong.** $\sigma^2/10$ versus $\sigma^2/100$.
- **c. Wrong.** $\sigma/\sqrt{10}$ versus $\sigma/10$.
- **d. Wrong.** The shape approaches the normal as $n$ grows (Central Limit Theorem). If the population is not normal, the $n = 10$ shape is not the same as the $n = 100$ shape.

> [!tip] Intuition
> Bigger samples tighten the cloud of possible averages around the same centre. See [[Lec_01-Point Estimation and Sampling Distributions]]; reviewed in [[Lec_13-Exam Review Session 2]].

---

## Q2 — Unbiased estimator for a

$X$ takes the value $0$ or $a$, each with probability $0.5$. Which is an unbiased estimator of $a$?

- a. $\hat{\theta} = X_1/2$
- b. $\hat{\theta} = X_1$
- c. $\hat{\theta} = 2X_1$
- d. $\hat{\theta} = 3X_1$

> [!success] Official answer: C

$$
E(X_1) = 0 \cdot 0.5 + a \cdot 0.5 = 0.5a
$$

An estimator is unbiased when $E(\hat{\theta}) = a$. Scale by the reciprocal of $0.5$:

$$
E(2X_1) = 2 \cdot 0.5a = a
$$

| Option | Expected value | Unbiased? |
|---|---|---|
| a. $X_1/2$ | $0.25a$ | No |
| b. $X_1$ | $0.5a$ | No |
| c. $2X_1$ | $a$ | **Yes** |
| d. $3X_1$ | $1.5a$ | No |

> [!tip] Intuition
> $X_1$ is only $a$ half the time and $0$ the other half, so on average it undershoots by a factor of two. Doubling it fixes the average, even though any single draw is $0$ or $2a$. See [[Lec_01-Point Estimation and Sampling Distributions]] (finding an unbiased estimator from a distribution).

---

## Q3 — Fixing a biased statistic

$\hat{\theta}$ has

$$
E(\hat{\theta}) = \frac{2\sigma}{n} + 1
$$

Which is an unbiased estimator for $\sigma$?

- a. $\hat{\theta}(2n - 1)$
- b. $(\hat{\theta} - 1)\cdot \dfrac{n}{2}$
- c. $\hat{\theta}\cdot \dfrac{n}{2} - 1$
- d. $(\hat{\theta} - 1)\cdot 2n$

> [!warning] Official ruling: all answers accepted
> The paper notes all answers were accepted because of poor psychometric performance. The key still lists B. The reasoning below is **AI-written, not official**: it shows B is the mathematically correct option.

First undo the $+1$, then undo the factor $2/n$:

$$
E(\hat{\theta} - 1) = \frac{2\sigma}{n}
$$

$$
E\left((\hat{\theta} - 1)\cdot \frac{n}{2}\right) = \frac{n}{2}\cdot\frac{2\sigma}{n} = \sigma
$$

| Option | Expected value | Unbiased for $\sigma$? |
|---|---|---|
| a. $\hat{\theta}(2n-1)$ | $(2n-1)\left(\frac{2\sigma}{n} + 1\right)$, depends on $n$ in a messy way | No |
| b. $(\hat{\theta}-1)\,n/2$ | $\sigma$ | **Yes** |
| c. $\hat{\theta}\,n/2 - 1$ | $\sigma + n/2 - 1$ | No |
| d. $(\hat{\theta}-1)\,2n$ | $4\sigma$ | No |

> [!tip] Intuition
> This is the "fixing an estimator" move from [[Lec_01-Point Estimation and Sampling Distributions]]: subtract the constant bias first, then rescale by the reciprocal of the coefficient on the parameter.

---

## Q4 — Consistency from the variance

$Var(\hat{\theta}_1) = \sigma^2/10$ and $Var(\hat{\theta}_2) = \sigma^2 \cdot n$. Then $\hat{\theta}_1$ is ___ estimator and $\hat{\theta}_2$ is ___ estimator.

- a. A consistent; a consistent
- b. A consistent; an inconsistent
- c. An inconsistent; a consistent
- d. An inconsistent; an inconsistent

> [!success] Official answer: D

The course test for a [[Consistent Estimator]] is that the variance goes to $0$ as $n \to \infty$ (for an unbiased estimator):

$$
\lim_{n\to\infty} \frac{\sigma^2}{10} = \frac{\sigma^2}{10} \neq 0
$$

$$
\lim_{n\to\infty} \sigma^2 n = \infty \neq 0
$$

Neither variance shrinks, so **both are inconsistent**.

![[PP02_q4_variance_vs_n.png|640]]

*Illustrative picture with $\sigma^2 = 1$: estimator 1 stays flat at $0.1$, estimator 2 grows linearly in $n$. Neither heads to zero.*

- **a, b, c wrong.** The first has a variance that is a constant not involving $n$, so more data never helps it. Only a variance of the form "something over $n$" would give consistency.

> [!tip] Intuition
> A consistent estimator must get better with more data. The first ignores $n$ entirely; the second gets worse. See [[Lec_02-Point Estimation and the Variance Estimator]]; reviewed in [[Lec_13-Exam Review Session 2]].

---

## Q5 — Reading the maximum from the log-likelihood

The derivative and second derivative of $\ln L(\theta \mid x)$ give two critical points: a **maximum** at $\theta = 3x$ and a **minimum** at $\theta = x - 1$. Which is the [[Maximum Likelihood Estimator]]?

- a. $x - 1$
- b. $3x$
- c. $3x - 1$
- d. $3(x - 1)$

> [!success] Official answer: B

The MLE is the value of $\theta$ that **maximises** the likelihood. The second-derivative test labels $\theta = 3x$ as the maximum, so

$$
\hat{\theta} = 3x
$$

The point $\theta = x - 1$ is a minimum, which is the least likely value, so option a is the opposite of what is wanted. Options c and d are not critical points at all. See [[Lec_03-Maximum Likelihood Estimation]]; reviewed in [[Lec_13-Exam Review Session 2]].

---

## Q6 — Correlation on a subsample

Davy found $r_{x,y} = 1$ on 20 observations; Dawn found $r_{x,y} = 0.8$ on 20. Each recomputes on 10 of their observations (with $S_x S_y \neq 0$). Davy's new $r$ will ___ be 1 and Dawn's will ___ be 0.8.

- a. Necessarily, necessarily
- b. Not necessarily, necessarily
- c. Necessarily, not necessarily
- d. Not necessarily, not necessarily

> [!success] Official answer: C

- **Davy: necessarily.** $r = 1$ means every point lies exactly on one upward-sloping line. Any 10 of those points still lie on that line, and with $S_x S_y \neq 0$ the subsample correlation is again $1$.
- **Dawn: not necessarily.** An $r$ of $0.8$ is an average of how well the points hug a line. Dropping 10 points can drop the noisiest ones (r rises) or the most extreme ones (r falls), so $0.8$ is not preserved.

> [!tip] Intuition
> A perfect line is a property of every subset. A "mostly linear" cloud is a property of the specific set of points. See [[Lec_11-Joint Distributions, Correlation and Linear Regression]] (properties of $r_{x,y}$).

---

## Q7 — Slope from the means and the intercept

The average lines of code is $\bar{X} = 31$, the average salary is $\bar{Y} = 120{,}000$, and the intercept is $151{,}000$. What is the slope?

- a. $-1000$
- b. $-500$
- c. $500$
- d. $1000$

> [!success] Official answer: A

The least-squares line passes through $(\bar{X}, \bar{Y})$, so the intercept is

$$
a = \bar{Y} - b\bar{X}
$$

$$
151000 = 120000 - 31b
$$

$$
b = \frac{120000 - 151000}{31} = -1000
$$

> [!tip] Intuition
> The line always runs through the point of means. Starting at $\bar{X} = 31$ with $120{,}000$, going back to $X = 0$ lifts the line to $151{,}000$, which only happens if the slope is negative (so c and d are out). Only $-1000$ gives the required rise of $31{,}000$ over $31$ units. See [[Lec_11-Joint Distributions, Correlation and Linear Regression]] (the line and the meaning of $a$ and $b$).

---

## Q8 — Regressing X on Y

The line predicting Y from X is $\hat{Y} = 2 + 0.5X$, with $\bar{X} = 5$, and in standard scores $\hat{Z}_Y = 0.5 Z_X$. What is the line predicting X from Y?

- a. $\hat{X} = 2 + 0.5Y$
- b. $\hat{X} = 2 + 2Y$
- c. $\hat{X} = 2.75 + 0.5Y$
- d. $\hat{X} = 2.75 + 2Y$

> [!success] Official answer: C

**Step 1, correlation and spreads.** In standard scores the slope is the correlation, so $r = 0.5$. The raw slope is

$$
b_{Y \text{ on } X} = r\frac{S_y}{S_x} = 0.5 \;\Rightarrow\; \frac{S_y}{S_x} = 1
$$

**Step 2, slope of X on Y.**

$$
b_{X \text{ on } Y} = r\frac{S_x}{S_y} = 0.5 \cdot 1 = 0.5
$$

**Step 3, mean of Y** from the first line:

$$
\bar{Y} = 2 + 0.5 \cdot 5 = 4.5
$$

**Step 4, intercept** from the point of means:

$$
a = \bar{X} - 0.5\bar{Y} = 5 - 0.5 \cdot 4.5 = 2.75
$$

$$
\hat{X} = 2.75 + 0.5Y
$$

> [!warning] Trap
> Do not invert the slope ($1/0.5 = 2$, options b and d). Regression is **not symmetric**: the X-on-Y slope is $r S_x/S_y$, not $1/b$. They coincide only when $r = \pm 1$. Option a keeps the intercept $2$ from the wrong line.

See [[Lec_11-Joint Distributions, Correlation and Linear Regression]] (regression is not symmetrical).

---

## Q9 — Z statistic for one proportion

In a sample of 900 dogs, $\hat{p} = 0.04$. Test $H_0: p = 0.05$. What is the Z statistic?

- a. $-2.06$
- b. $-1.38$
- c. $1.38$
- d. $2.06$

> [!success] Official answer: B

Under $H_0$ the standard error uses the **hypothesised** proportion:

$$
Z = \frac{\hat{p} - p_0}{\sqrt{\dfrac{p_0(1 - p_0)}{n}}} = \frac{0.04 - 0.05}{\sqrt{\dfrac{0.05 \cdot 0.95}{900}}}
$$

$$
\sqrt{\frac{0.0475}{900}} = 0.007265, \qquad Z = \frac{-0.01}{0.007265} = -1.376 \approx -1.38
$$

- **c** has the wrong sign: the sample proportion is below $p_0$.
- **a, d** (magnitude $2.06$) do not match this calculation. Using $\hat{p}$ in the standard error instead would give $-1.53$, so they are not even that slip; treat them as distractors.

See [[Lec_07-Tests for Proportions and Variances]].

---

## Q10 — Z statistic for two proportions

Israel: $\hat{p}_1 = 0.28$ of 50. Europe: $\hat{p}_2 = 0.18$ of 50. $H_0$: no difference in the proportions. Z statistic?

- a. $0.19$
- b. $1.19$
- c. $2.19$
- d. $3.19$

> [!success] Official answer: B

Under $H_0$ use the **pooled** proportion. The group sizes are equal, so it is the simple average:

$$
\hat{p} = \frac{0.28 + 0.18}{2} = 0.23
$$

$$
Z = \frac{\hat{p}_1 - \hat{p}_2}{\sqrt{\hat{p}(1-\hat{p})\left(\dfrac{1}{50} + \dfrac{1}{50}\right)}} = \frac{0.10}{\sqrt{0.23 \cdot 0.77 \cdot 0.04}}
$$

$$
\sqrt{0.007084} = 0.08417, \qquad Z = \frac{0.10}{0.08417} = 1.188 \approx 1.19
$$

> [!tip] Intuition
> A $10$ percentage-point gap sounds big, but with only 50 companies per group the standard error is about $8.4$ points, so the gap is about 1.2 standard errors: not significant at the usual levels. See [[Lec_07-Tests for Proportions and Variances]].

---

## Q11 — Which test can Dan use

Dan treats 40 lawns with fertilizer and measures greenness. Prior tests show greenness is normal with $\mu = 32$ and variance $16$. To test whether fertilizer makes lawns greener, Dan ___ use a Z test and ___ use a t test.

- a. Can; can
- b. Can; cannot
- c. Cannot; can
- d. Cannot; cannot

> [!success] Official answer: A

- **Z test: can.** The population is normal with a **known** variance ($\sigma = 4$), so the Z test applies.
- **t test: can.** With 40 sample observations Dan can compute the sample standard deviation $S$ and form $t = (\bar{X} - 32)/(S/\sqrt{40})$, which is valid for normal data. It is less efficient than the Z test (it throws away the known $\sigma$) but it is still a legitimate test.

> [!warning] Why not "can; cannot"?
> The tempting answer is b, on the reasoning "the variance is known, so you would never use t". The question asks what he **can** do, not what he **should** do, and the key follows the "can" wording. Official key is kept as A.

See [[Lec_05-Z Tests, t Tests and Two-Sample Tests]].

---

## Q12 — Power of a Z test

$n = 100$, known $SD = 5$, $H_0: \mu = 40$ at $\alpha = 0.05$ (two-sided). Power when the true mean is $41$?

- a. $0.44$
- b. $0.52$
- c. $0.67$
- d. $0.85$

> [!success] Official answer: B

**Step 1, standard error.**

$$
SE = \frac{5}{\sqrt{100}} = 0.5
$$

**Step 2, critical value for the sample mean** (two-sided, $z = 1.96$):

$$
\bar{X}_{crit} = 40 + 1.96 \cdot 0.5 = 40.98
$$

**Step 3, power**: the probability under $\mu = 41$ of landing in the rejection region (the tiny left tail at $39.02$ is negligible):

$$
1 - \beta = P(\bar{X} > 40.98 \mid \mu = 41) = P\left(Z > \frac{40.98 - 41}{0.5}\right) = P(Z > -0.04) \approx 0.516 \approx 0.52
$$

![[PP02_q12_power_mu41.png|640]]

*The shaded area under the true-mean curve beyond the critical value is the power, about 0.52.*

> [!tip] Intuition
> The true mean $41$ is two standard errors above $40$, but the critical value sits $1.96$ standard errors above $40$, so the critical value is almost exactly at the centre of the true distribution: power is close to one half. See [[Lec_06-Two Sample Tests, Error Types and Power]].

---

## Q13 — What increases power

A study has power $0.85$. Which factor can **increase** power?

- a. Decreasing the sample size
- b. Decreasing the significance level $\alpha$
- c. Increasing the variability in the population
- d. Increasing the effect size

> [!warning] Official ruling: all answers accepted
> The paper notes all answers were accepted. The key lists D. The reasoning below is **AI-written, not official**.

| Option | Effect on power | Why |
|---|---|---|
| a. Smaller $n$ | Lowers it | $SE = \sigma/\sqrt{n}$ rises, so the two distributions overlap more |
| b. Smaller $\alpha$ | Lowers it | A stricter critical value moves right, raising $\beta$ |
| c. More variability | Lowers it | $\sigma$ up means $SE$ up, so more overlap |
| d. Larger effect size | **Raises it** | The true mean moves further from $H_0$, so overlap shrinks |

Only d raises power, so D is the best answer.

> [!tip] Intuition
> Power rises with bigger $n$, bigger $\alpha$, smaller $\sigma$ and a bigger effect. Three of the four options here push the wrong way.

---

## Q14 — Rejection probability when $H_0$ is false

If $H_0$ is false, the probability of rejecting it is ___ than $\alpha$ and ___ to the probability of a Type II error $\beta$.

- a. Greater than; equal to
- b. Greater than; not necessarily equal to
- c. Smaller than; equal to
- d. Smaller than; not necessarily equal to

> [!success] Official answer: B

When $H_0$ is false, the probability of rejecting is the power $1 - \beta$. A sensible test has power above $\alpha$ (it rejects a false null more often than a true one), so **greater than** $\alpha$.

Power and $\beta$ are complements, $1 - \beta$ versus $\beta$. They add to $1$ but are **not necessarily equal**: they are equal only in the special case $\beta = 0.5$ (as in Q12, where power was about $0.52$, close but not equal).

See [[Lec_06-Two Sample Tests, Error Types and Power]].

---

## Q15 — Cohen's d

Anxiety scores had an expected value $40$ before the technique and $30$ after. Population standard deviation $20$. Effect size?

- a. $0.50$
- b. $0.75$
- c. $1.00$
- d. $1.25$

> [!success] Official answer: A

$$
d = \frac{|\mu_1 - \mu_0|}{\sigma} = \frac{|30 - 40|}{20} = 0.50
$$

The effect is half a standard deviation: a medium effect by Cohen's convention. See [[Lec_06-Two Sample Tests, Error Types and Power]].

---

## Q16 — One-sample t test

$n = 15$, $\bar{X} = 67.4$, $SD = 12.3$, $H_0: \mu = 61$, two-sided, $\alpha = 0.05$. Test statistic and significance?

- a. $t = 1.015$, not significant
- b. $t = 1.015$, significant
- c. $t = 2.015$, not significant
- d. $t = 2.015$, significant

> [!success] Official answer: C

$$
t = \frac{\bar{X} - \mu_0}{S/\sqrt{n}} = \frac{67.4 - 61}{12.3/\sqrt{15}} = \frac{6.4}{3.176} = 2.015
$$

Degrees of freedom: $n - 1 = 14$. The two-sided critical value at $\alpha = 0.05$ is $t_{14,\,0.975} = 2.145$.

$$
|2.015| < 2.145 \;\Rightarrow\; H_0 \text{ not rejected}
$$

> [!warning] Trap
> $2.015$ is bigger than the normal critical value $1.96$, so using the Z table would wrongly say "significant" (option d). With a small sample you must use the $t$ table with $14$ degrees of freedom. See [[Lec_05-Z Tests, t Tests and Two-Sample Tests]].

---

## Q17 — Two-sample t test

Repellent A: $n = 20$, mean $24$, $SD = 5$. Repellent B: $n = 20$, mean $20$, $SD = 4$. Two-sided, $\alpha = 0.05$.

- a. $1.81$, not significant
- b. $1.81$, significant
- c. $2.79$, not significant
- d. $2.79$, significant

> [!success] Official answer: D

Equal group sizes, so the pooled variance is the simple average of the two variances:

$$
S_p^2 = \frac{25 + 16}{2} = 20.5
$$

$$
t = \frac{24 - 20}{\sqrt{S_p^2\left(\dfrac{1}{20} + \dfrac{1}{20}\right)}} = \frac{4}{\sqrt{20.5 \cdot 0.1}} = \frac{4}{1.4318} = 2.79
$$

Degrees of freedom: $20 + 20 - 2 = 38$. The two-sided critical value is about $2.024$.

$$
2.79 > 2.024 \;\Rightarrow\; H_0 \text{ rejected (significant)}
$$

> [!tip] Intuition
> Sanity check by hand: a $4$-point gap over a standard error of about $1.43$ is nearly $2.8$ standard errors, well beyond the critical value. See [[Lec_06-Two Sample Tests, Error Types and Power]].

---

## Q18 — Confidence interval with known $\sigma$

$n = 24$, $\bar{X} = 612$, known $\sigma = 100$. 95% confidence interval for $\mu$?

- a. $571.99 \le \mu \le 652.01$
- b. $581.99 \le \mu \le 642.01$
- c. $591.99 \le \mu \le 632.01$
- d. $601.99 \le \mu \le 622.01$

> [!success] Official answer: A

Known $\sigma$, so use the $z$ critical value $1.96$:

$$
\bar{X} \pm 1.96\cdot\frac{\sigma}{\sqrt{n}} = 612 \pm 1.96\cdot\frac{100}{\sqrt{24}}
$$

$$
\frac{100}{\sqrt{24}} = 20.41, \qquad 1.96 \cdot 20.41 = 40.01
$$

$$
571.99 \le \mu \le 652.01
$$

The other options have half-widths of $30$, $20$ and $10$, which are far too narrow for this standard error. See [[Lec_08-Confidence Intervals]].

---

## Q19 — Confidence interval and the two tests

Manny's 95% confidence interval for mean running speed is $80 \le \mu \le 90$ km/h (35 horses). Jo tests "horses run faster than 75 km/h" ($\alpha = 0.05$, one-sided). Riky tests "speed differs from 75 km/h" ($\alpha = 0.05$, two-sided). Whose test is significant?

- a. Jo
- b. Riky
- c. Neither
- d. Both

> [!success] Official answer: D

A 95% interval and a two-sided $\alpha = 0.05$ test are two views of the same evidence ([[Lec_08-Confidence Intervals]], test-interval duality).

![[PP02_q19_ci_excludes_75.png|640]]

*The value 75 lies below the whole interval, so it is rejected.*

- **Riky (two-sided).** $75$ is outside $[80, 90]$, so reject $H_0: \mu = 75$.
- **Jo (one-sided, "faster than 75").** The sample mean is about $85$, on the correct side of $75$, and the two-sided rejection is already beyond $1.96$ standard errors. The one-sided test at $\alpha = 0.05$ needs only $1.645$, so it is **also** significant.

> [!note] Typo in the source
> The printed interval reads "$80\,km/h \le \mu \le 90\,mk/h$". The second unit is a typo for km/h and does not change the answer.

---

## Q20 — Chi-squared test of independence

Morin samples 100 people. Counts: BA and cannabis $26$; BA and no cannabis $18$; no BA and cannabis $24$; no BA and no cannabis $32$. Test independence at $\alpha = 0.05$.

- a. $\chi^2 = 2.6$, $H_0$ not rejected
- b. $\chi^2 = 2.6$, $H_0$ rejected
- c. $\chi^2 = 4.6$, $H_0$ not rejected
- d. $\chi^2 = 4.6$, $H_0$ rejected

> [!success] Official answer: A

**Observed table with totals**

| | Cannabis | No cannabis | Total |
|---|---|---|---|
| BA | 26 | 18 | 44 |
| No BA | 24 | 32 | 56 |
| Total | 50 | 50 | 100 |

**Expected counts** (row total times column total over $100$):

| | Cannabis | No cannabis |
|---|---|---|
| BA | $44 \cdot 50/100 = 22$ | $22$ |
| No BA | $56 \cdot 50/100 = 28$ | $28$ |

**Statistic.** Every cell deviates by $4$ from its expectation:

$$
\chi^2 = \frac{(26-22)^2}{22} + \frac{(18-22)^2}{22} + \frac{(24-28)^2}{28} + \frac{(32-28)^2}{28} = \frac{16}{22}\cdot 2 + \frac{16}{28}\cdot 2 = 1.4545 + 1.1429 = 2.597 \approx 2.6
$$

**Decision.** Degrees of freedom $(2-1)(2-1) = 1$, critical value $\chi^2_{1,\,0.95} = 3.84$.

$$
2.6 < 3.84 \;\Rightarrow\; H_0 \text{ not rejected}
$$

![[PP02_q20_chi2_df1.png|640]]

*The observed statistic lands to the left of the 5% critical value, so there is no evidence of dependence.*

See [[Lec_09-Chi-Squared Tests for Goodness of Fit and Independence]].

---

## Recap

| Q | Tool | One-line answer |
|---|---|---|
| 1 | Sampling distribution | Only $E(\bar{X}) = \mu$ is free of $n$ (A) |
| 2 | Unbiasedness | $E(2X_1) = a$ (C) |
| 3 | Fixing bias | $(\hat{\theta} - 1)\,n/2$ (B, all accepted) |
| 4 | Consistency | Neither variance goes to $0$ (D) |
| 5 | MLE | The maximiser, $3x$ (B) |
| 6 | Correlation | Perfect line survives subsampling, $0.8$ need not (C) |
| 7 | Regression line | $b = (120000 - 151000)/31 = -1000$ (A) |
| 8 | Reverse regression | Slope $0.5$, intercept $2.75$ (C) |
| 9 | Z, one proportion | $-1.38$ (B) |
| 10 | Z, two proportions | $1.19$ (B) |
| 11 | Test choice | Z and t both usable (A) |
| 12 | Power | $P(Z > -0.04) = 0.52$ (B) |
| 13 | Power drivers | Larger effect size (D, all accepted) |
| 14 | Power vs $\alpha$, $\beta$ | Greater than $\alpha$, not necessarily equal to $\beta$ (B) |
| 15 | Cohen's d | $10/20 = 0.50$ (A) |
| 16 | One-sample t | $2.015 < 2.145$, not significant (C) |
| 17 | Two-sample t | $2.79 > 2.024$, significant (D) |
| 18 | CI, known $\sigma$ | $612 \pm 40.01$ (A) |
| 19 | CI and tests | 75 outside the interval, both significant (D) |
| 20 | Chi-squared independence | $2.6 < 3.84$, not rejected (A) |

## Related notes

- [[Statistics B]]
- [[Lec_12-Exam Review 1]] and [[Lec_13-Exam Review Session 2]]
