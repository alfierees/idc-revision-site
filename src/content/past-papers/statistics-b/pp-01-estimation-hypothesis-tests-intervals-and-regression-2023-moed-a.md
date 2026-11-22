---
title: "Estimation, Hypothesis Tests, Intervals and Regression (2023 Moed A)"
type: past-paper
status: worked-solution
exam: "2023 Moed A"
semester: 2
year: 1
course: "Statistics B"
instructor: unknown
tags:
  - statistics-b
  - past-paper
  - worked-solution
  - multiple-choice
  - unbiased-estimator
  - consistent-estimator
  - maximum-likelihood
  - correlation
  - linear-regression
  - hypothesis-testing
  - statistical-power
  - confidence-interval
  - chi-squared-test
aliases:
  - Statistics B Moed A 2023
  - PP01 Statistics B
subject: statistics-b
in_scope: true
---

# Moed A 2023 — Worked Solutions

> Part of: [[Statistics B]]
> **Moed A 2023** — Statistics II for Economics (the paper is headed "Statistics II Moed A"). 20 multiple-choice questions with an official letter key printed at the end of the paper.
> Builds on: [[Lec_01-Point Estimation and Sampling Distributions]] · [[Lec_02-Point Estimation and the Variance Estimator]] · [[Lec_03-Maximum Likelihood Estimation]] · [[Lec_04-Hypothesis Testing and the Z Test]] · [[Lec_05-Z Tests, t Tests and Two-Sample Tests]] · [[Lec_06-Two Sample Tests, Error Types and Power]] · [[Lec_07-Tests for Proportions and Variances]] · [[Lec_08-Confidence Intervals]] · [[Lec_09-Chi-Squared Tests for Goodness of Fit and Independence]] · [[Lec_11-Joint Distributions, Correlation and Linear Regression]]
> Exam-style review of the same question types: [[Lec_12-Exam Review 1]]

> [!info] Answer provenance
> The paper prints an **official letter key** (answers only, no working). Every worked solution below was written here and **checked to reach the keyed letter**. All 20 keyed letters were reproduced. The one exception to "single keyed letter" is **Q6**, where the key accepts both **a** and **c**.

> [!warning] AI-solved questions
> **Q6 only.** The official key accepts both a and c, so there is no single official answer. The best answer, derived below, is **a**, and it is written by me, not taken from the lecturer. Check it before relying on it.

---

## What this paper tests

> [!info] One paper, the whole course
> Twenty one-step questions, one or two per lecture. The pattern to learn is **identify the test, compute the statistic, compare with the cutoff**.
> 1. **Q1 to Q5** — properties of estimators: [[Sampling Distribution]] of the average, [[Unbiased Estimator]], [[Consistent Estimator]], and the [[Maximum Likelihood Estimate]] read from a likelihood table.
> 2. **Q6 to Q8** — [[Correlation Coefficient]] and [[Linear Regression]]: what adding a point at the means does, predicting from a line, and the "residuals sum to zero" property.
> 3. **Q9 to Q11, Q15, Q16** — plugging into the test statistic: [[Single Sample Z Test]], [[Single Sample Z Test for Proportion]], [[Single Sample t Test]], [[Two Independent Samples t Test]], plus a Z-versus-t logic question.
> 4. **Q12 to Q14** — [[Statistical Power]], [[Type I Error]] and [[Type II Error]], and what changes them.
> 5. **Q17** — [[F Test for Equality of Variances]].
> 6. **Q18, Q19** — [[Confidence Interval]] for a proportion, and the sample size for a target width.
> 7. **Q20** — [[Chi-Squared Test for Goodness of Fit]].

> [!tip] Tables you need
> The formula sheet supplies the Z table, the t table (Table D), the F table for $\alpha=0.05$ and the chi-squared table. Critical values quoted below are read from those tables.

| Q | Topic | Key letter |
|---|---|---|
| 1 | Average as the sample grows | a |
| 2 | Unbiased estimator of $a$ | d |
| 3 | Unbiased estimator of $\mu$ | a |
| 4 | Consistency from the variance | b |
| 5 | MLE from a likelihood table | d |
| 6 | Correlation after adding a mean point | a and c both accepted |
| 7 | Regression prediction | c |
| 8 | Missing third observation | c |
| 9 | Z statistic for a mean | c |
| 10 | Z statistic for a proportion | a |
| 11 | Z test versus t test | a |
| 12 | Power | d |
| 13 | Power: sample size versus units | a |
| 14 | Sample size and error rates | b |
| 15 | Single sample t test | b |
| 16 | Two samples t test | a |
| 17 | F test | c |
| 18 | CI for a proportion | d |
| 19 | Sample size for a CI | a |
| 20 | Chi-squared goodness of fit | a |

---

## Q1 — The average as the sample grows

**Question.** As the size of the sample increases, the expected value of the average ($\bar X$) _____ and the variance of the average ($\bar X$) _____.

- a. Remains the same; decreases
- b. Remains the same; remains the same
- c. Increases; remains the same
- d. Increases; decreases

> [!success] Official answer — **a**

For an i.i.d. sample with $E(X_i)=\mu$ and $Var(X_i)=\sigma^2$:

$$
E(\bar X)=\mu
$$

$$
Var(\bar X)=\frac{\sigma^2}{n}
$$

The mean of the average is $\mu$ whatever $n$ is, so it **remains the same**. The variance has $n$ in the denominator, so it **decreases** as $n$ grows. This is why the average is both [[Unbiased Estimator|unbiased]] and a [[Consistent Estimator|consistent]] estimator of $\mu$ (see [[Lec_01-Point Estimation and Sampling Distributions]]).

- **b** is wrong: the variance does shrink.
- **c** and **d** are wrong: the expected value does not move with $n$, because the average is unbiased for every $n$.

---

## Q2 — Which estimator is unbiased for $a$?

**Question.** $X$ has the distribution below. Which is an unbiased estimator for the parameter $a$?

| $X_i$ | $-1$ | $0$ | $1$ |
|---|---|---|---|
| $p(X_i)$ | $a$ | $1-2a$ | $a$ |

- a. $\hat\theta = X_1$, the value of the first observation
- b. $\hat\theta = \dfrac{X_1}{2}$
- c. $\hat\theta = |X_1|$
- d. $\hat\theta = \dfrac{|X_1|}{2}$

> [!success] Official answer — **d**

An estimator is [[Unbiased Estimator|unbiased]] for $a$ when its expected value equals $a$. Compute the two expectations that matter.

$$
E(X_1)=(-1)\cdot a+0\cdot(1-2a)+1\cdot a=0
$$

$$
E(|X_1|)=1\cdot a+0\cdot(1-2a)+1\cdot a=2a
$$

| Option | Expected value | Equals $a$? |
|---|---|---|
| a. $X_1$ | $0$ | No (only if $a=0$) |
| b. $X_1/2$ | $0$ | No |
| c. $\lvert X_1\rvert$ | $2a$ | No, it is twice too large |
| **d. $\lvert X_1\rvert/2$** | $2a/2=a$ | **Yes** |

> [!tip] Intuition
> The two outer values $-1$ and $1$ cancel in $X_1$, so the signed value carries no information about $a$. The absolute value turns "outer" into 1 and "centre" into 0, and the probability of "outer" is $2a$. Halving it recovers $a$.

---

## Q3 — Unbiased estimator of $\mu$ from a biased statistic

**Question.** $\hat\theta$ is a statistic with $E(\hat\theta)=\mu+\sigma^2$. Which is an unbiased estimator for $\mu$?

- a. $\hat\theta - S^2$
- b. $\hat\theta + S^2$
- c. $\hat\theta - S$
- d. $\hat\theta + S$

> [!success] Official answer — **a**

The formula sheet gives $S^2$ as an unbiased estimator of $\sigma^2$, so $E(S^2)=\sigma^2$ (see [[Sample Variance]] in [[Lec_02-Point Estimation and the Variance Estimator]]). Use linearity of expectation.

$$
E(\hat\theta-S^2)=E(\hat\theta)-E(S^2)=(\mu+\sigma^2)-\sigma^2=\mu
$$

- **b** gives $\mu+2\sigma^2$.
- **c** and **d** use $S$, the sample standard deviation. $S$ is an estimator of $\sigma$ but its expected value is not $\sigma$, and in any case the bias term here is $\sigma^2$, not $\sigma$. Subtracting $S$ cannot cancel it.

> [!tip] Intuition
> The bias is $\sigma^2$, and we own an unbiased estimator of $\sigma^2$. Subtract it.

---

## Q4 — Consistency from the variance

**Question.** $\hat\theta_1$ and $\hat\theta_2$ estimate $\theta$, with $Var(\hat\theta_1)=\sigma^2\cdot\dfrac{n}{\sqrt n}$ and $Var(\hat\theta_2)=\sigma^2\cdot\dfrac{\sqrt n}{n}$. Based on these variances, $\hat\theta_1$ is _____ and $\hat\theta_2$ is _____.

- a. a consistent; a consistent
- b. an inconsistent; a consistent
- c. a consistent; an inconsistent
- d. an inconsistent; an inconsistent

> [!success] Official answer — **b**

The formula sheet defines a [[Consistent Estimator]] as one whose variance goes to $0$ as $n\to\infty$. Simplify each variance first.

$$
Var(\hat\theta_1)=\sigma^2\cdot\frac{n}{\sqrt n}=\sigma^2\sqrt n\;\longrightarrow\;\infty
$$

$$
Var(\hat\theta_2)=\sigma^2\cdot\frac{\sqrt n}{n}=\frac{\sigma^2}{\sqrt n}\;\longrightarrow\;0
$$

- $\hat\theta_1$: variance **grows** with $n$, so it is **inconsistent**.
- $\hat\theta_2$: variance shrinks to $0$, so it is **consistent**.

> [!tip] Intuition
> $\frac{n}{\sqrt n}$ and $\frac{\sqrt n}{n}$ look alike but are reciprocals in effect: the first is $\sqrt n$, the second is $1/\sqrt n$. Always simplify the power of $n$ before judging.

---

## Q5 — MLE from a likelihood table

**Question.** From the likelihood table, which $\hat\theta$ is the [[Maximum Likelihood Estimate]] of $\theta$ as a function of the observed $X$?

| | $X=1$ | $X=2$ |
|---|---|---|
| $\theta=4$ | $L(\theta=4\mid x=1)=0.7$ | $L(\theta=4\mid x=2)=0.3$ |
| $\theta=5$ | $L(\theta=5\mid x=1)=0.6$ | $L(\theta=5\mid x=2)=0.4$ |
| $\theta=6$ | $L(\theta=6\mid x=1)=0.8$ | $L(\theta=6\mid x=2)=0.2$ |

- a. $\hat\theta=4$ if $X=1$; $5$ if $X=2$
- b. $\hat\theta=5$ if $X=1$; $4$ if $X=2$
- c. $\hat\theta=6$ if $X=1$; $4$ if $X=2$
- d. $\hat\theta=6$ if $X=1$; $5$ if $X=2$

> [!success] Official answer — **d**

The MLE picks, **for each observed value, the $\theta$ with the largest likelihood**. So read down each *column*, not across a row (see [[Lec_03-Maximum Likelihood Estimation]]).

| Observed | Likelihoods for $\theta=4,5,6$ | Largest | MLE |
|---|---|---|---|
| $X=1$ | $0.7,\ 0.6,\ \mathbf{0.8}$ | $0.8$ | $\hat\theta=6$ |
| $X=2$ | $0.3,\ \mathbf{0.4},\ 0.2$ | $0.4$ | $\hat\theta=5$ |

That is option **d**.

> [!warning] Common trap
> Likelihoods in a column do **not** have to sum to 1 (here $0.7+0.6+0.8=2.1$). Likelihood is not a probability over $\theta$. Compare them only against each other within the same column. Picking the best $X$ for each $\theta$ (reading across a row) answers a different question and gives the wrong mapping.

---

## Q6 — Adding a point at both means

**Question.** Ron computed $r_{x,y}=0.5$ from 20 observations. He added one more observation with standard scores $Z_X=0$ and $Z_Y=0$ and recomputed $r_{x,y}$. Which is necessarily true about the new estimate?

- a. $r_{x,y}=0.5$
- b. $r_{x,y}>0.5$
- c. $r_{x,y}<0.5$
- d. $r_{x,y}\neq0.5$, but we cannot know in which direction

> [!warning] Official key accepts **both a and c**
> The key reads "both a and c were accepted as correct". So the lecturer did not fix a single letter. The working below is mine, and it supports **a** as the exact answer.

> [!warning] AI-written answer, not official. Check before relying on it.

**Setup.** A standard score of $0$ in both variables means the new point sits exactly at $(\bar X,\bar Y)$. Write the estimator from the formula sheet in terms of sums of squares and cross-products.

$$
r_{x,y}=\frac{Cov(X,Y)}{S_X\,S_Y}=\frac{\dfrac{\sum (x_i-\bar x)(y_i-\bar y)}{n-1}}{\sqrt{\dfrac{\sum (x_i-\bar x)^2}{n-1}}\sqrt{\dfrac{\sum (y_i-\bar y)^2}{n-1}}}
$$

The three factors of $\frac1{n-1}$ cancel, leaving a ratio of raw sums.

$$
r_{x,y}=\frac{\sum (x_i-\bar x)(y_i-\bar y)}{\sqrt{\sum (x_i-\bar x)^2}\,\sqrt{\sum (y_i-\bar y)^2}}
$$

**What changes when the new point is added?**

- The means $\bar x,\bar y$ do **not** move, because the new point equals them.
- The new term in each sum is $(\bar x-\bar x)(\bar y-\bar y)=0$, $(\bar x-\bar x)^2=0$ and $(\bar y-\bar y)^2=0$. All three sums are **unchanged**.

So the ratio is unchanged and $r_{x,y}$ **stays at 0.5**: answer **a**.

![[PP01_q6_add_mean_point.png|560]]

> [!tip] Intuition
> A point at the centre of the cloud adds no spread and no co-movement in either direction. It cannot strengthen or weaken the linear pattern. The estimate is exactly the same.

**Why c was also accepted (my reading).** $Cov$ and $S_X S_Y$ both have an $n-1$ in them, but a student who treats only the covariance's $n-1$ as changing (19 becomes 20) while keeping the old standard deviations would get $0.5\cdot\tfrac{19}{20}=0.475<0.5$. That shortcut is wrong because $S_X$ and $S_Y$ also shrink when $n$ grows, and the two effects cancel exactly. This is a guess about why the lecturer accepted c, not something stated in the paper.

- **b** is wrong: a mean point cannot raise $r$.
- **d** is wrong: the change is exactly zero, not "some unknown change".

---

## Q7 — Regression prediction

**Question.** A regression of monthly rent on the number of rooms gave slope $750$ and intercept $450$. Predict the rent for a 5-room apartment.

- a. 3000
- b. 3750
- c. 4200
- d. 4950

> [!success] Official answer — **c**

The prediction line from the formula sheet is $\hat Y=b\,X+a$ with slope $b=750$ and intercept $a=450$.

$$
\hat Y = 750\cdot 5+450 = 3750+450 = 4200
$$

- **a** is $750\times4$, the wrong number of rooms.
- **b** forgets the intercept.
- **d** is $750\times 6+450$, one room too many.

See [[Linear Regression]] in [[Lec_11-Joint Distributions, Correlation and Linear Regression]].

---

## Q8 — The missing third observation

**Question.** A regression on three observations gave $\hat Y=4-0.5X$. The first two observations are $(X,Y)=(1,3)$ and $(2,4)$. What must the third be?

- a. $X=3,\ Y=1$
- b. $X=3,\ Y=1.5$
- c. $X=3,\ Y=2$
- d. $X=3,\ Y=2.5$

> [!success] Official answer — **c**

The least-squares line always passes through the point of means $(\bar X,\bar Y)$, and equivalently the **residuals sum to zero** (see [[Least Squares]]). Use the residual form.

Predictions and residuals ($e=Y-\hat Y$) for the two known points:

| $X$ | $Y$ | $\hat Y=4-0.5X$ | Residual $e$ |
|---|---|---|---|
| 1 | 3 | 3.5 | $-0.5$ |
| 2 | 4 | 3.0 | $+1.0$ |
| 3 | ? | 2.5 | $e_3$ |

$$
-0.5+1.0+e_3=0\;\Rightarrow\; e_3=-0.5
$$

$$
Y_3=\hat Y_3+e_3=2.5-0.5=2
$$

**Check by the means.** With $Y_3=2$: $\bar X=\tfrac{1+2+3}{3}=2$ and $\bar Y=\tfrac{3+4+2}{3}=3$. The line at $\bar X=2$ gives $4-0.5\cdot2=3=\bar Y$. It passes through the means, as it must.

![[PP01_q8_residuals_sum_zero.png|560]]

The other options fail the residual test.

| Option | $Y_3$ | $e_3=Y_3-2.5$ | Sum of residuals |
|---|---|---|---|
| a | 1 | $-1.5$ | $-1.0$ |
| b | 1.5 | $-1.0$ | $-0.5$ |
| **c** | **2** | $-0.5$ | **0** |
| d | 2.5 | $0$ | $+0.5$ |

---

## Q9 — Z statistic for a mean

**Question.** A random sample of 100 students has mean $75$. The population standard deviation is $10$ and $H_0:\mu=70$. What is the Z statistic?

- a. 2.5
- b. -2.5
- c. 5
- d. -5

> [!success] Official answer — **c**

The [[Single Sample Z Test]] statistic (known $\sigma$) from the formula sheet is below.

$$
Z_{\bar X}=\frac{\bar X-\mu_{H_0}}{\sigma/\sqrt n}=\frac{75-70}{10/\sqrt{100}}=\frac{5}{1}=5
$$

- **b** and **d** have the wrong sign: $\bar X>\mu_{H_0}$, so $Z$ is positive.
- **a** would need a standard error of $2$ (that is, $n=25$).

---

## Q10 — Z statistic for a proportion

**Question.** In a random sample of 250 workers, $36\%$ were satisfied. Test $H_0:p=0.30$. What is the Z statistic?

- a. 2.07
- b. -2.07
- c. -3.56
- d. 3.56

> [!success] Official answer — **a**

For the [[Single Sample Z Test for Proportion]], the standard error uses the **hypothesised** proportion $p_{H_0}$, not $\hat p$.

$$
Z_{\hat p}=\frac{\hat p-p_{H_0}}{\sqrt{\dfrac{p_{H_0}(1-p_{H_0})}{n}}}=\frac{0.36-0.30}{\sqrt{\dfrac{0.30\cdot0.70}{250}}}=\frac{0.06}{0.02898}=2.07
$$

**Requirement check:** $n\,p_{H_0}=75\ge5$ and $n(1-p_{H_0})=175\ge5$, so the normal approximation holds.

- **b** has the wrong sign.
- **c** and **d** have a magnitude of $3.56$, which does not arise from the correct standard error $0.02898$. The statistic would need a standard error of about $0.017$.

---

## Q11 — Z test versus t test

**Question.** A researcher tests whether the average weight of a sample of 40 individuals differs from the population expected value. The population standard deviation is $20$, and so is the sample standard deviation. He runs both a Z test and a t test at $\alpha=0.05$. Which is **not possible**?

- a. The Z test fails to reject $H_0$ while the t test rejects it.
- b. The Z test rejects $H_0$ while the t test fails to reject it.
- c. Both reject $H_0$.
- d. Both fail to reject $H_0$.

> [!success] Official answer — **a**

**Same statistic.** Because $S=\sigma=20$, the two test statistics are identical.

$$
Z=\frac{\bar X-\mu_{H_0}}{\sigma/\sqrt n}=\frac{\bar X-\mu_{H_0}}{20/\sqrt{40}}=t
$$

**Different cutoffs.** For a two-sided test at $\alpha=0.05$:

- Z cutoff: $1.96$.
- t cutoff, $df=n-1=39$: about $2.02$ (Table D gives $2.021$ for $df=40$). See [[Lec_05-Z Tests, t Tests and Two-Sample Tests]].

The t distribution has fatter tails, so its cutoff is **further out**.

![[PP01_q11_z_vs_t_cutoffs.png|560]]

With one shared statistic $T$:

| Statistic $\lvert T\rvert$ | Z test | t test | Matching option |
|---|---|---|---|
| below 1.96 | fail to reject | fail to reject | d |
| between 1.96 and 2.02 | **reject** | fail to reject | b |
| above 2.02 | reject | reject | c |

The pattern "Z fails but t rejects" would need $\lvert T\rvert<1.96$ **and** $\lvert T\rvert>2.02$ at once. It is impossible, so **a** is the "not possible" option.

> [!tip] Intuition
> The t test is the more cautious one because it admits extra uncertainty from estimating $\sigma$. It can only be *harder* to reject than Z, never easier.

---

## Q12 — Power when the true mean is 10

**Question.** A sample of 64 observations comes from a distribution with known $SD=2$. Test $H_0:\mu=8$ at $\alpha=0.05$. What is the power if the true mean is $\mu=10$?

- a. $1-\beta=0.62$
- b. $1-\beta=0.73$
- c. $1-\beta=0.85$
- d. $1-\beta\cong1$

> [!success] Official answer — **d**

Use the power calculation from the formula sheet ([[Statistical Power]], [[Lec_06-Two Sample Tests, Error Types and Power]]).

**Step 1: standard error.**

$$
\frac{\sigma}{\sqrt n}=\frac{2}{\sqrt{64}}=0.25
$$

**Step 2: critical average under $H_0$.** The problem does not say one-sided or two-sided, so take the two-sided test and the upper cutoff $Z_{crit}=1.96$.

$$
\bar X_{crit}=Z_{crit}\cdot\frac{\sigma}{\sqrt n}+\mu_{H_0}=1.96\cdot0.25+8=8.49
$$

**Step 3: how many standard errors is this below the true mean 10?**

$$
Z_{\bar X_{crit}}=\frac{8.49-10}{0.25}=-6.04
$$

**Step 4: power.**

$$
1-\beta=1-\Phi(-6.04)\approx1-0.0000000008\approx1
$$

The true mean $10$ lies $2/0.25=8$ standard errors above $H_0$, far beyond the cutoff, so rejection is almost certain.

![[PP01_q12_power_far_alternative.png|600]]

Using the one-sided cutoff $1.645$ would give $\bar X_{crit}=8.41$ and $Z=-6.36$, the same answer. Either way the power is about $1$.

> [!tip] Intuition
> The options a to c are all "ordinary" power values. A shortcut is to compute the effect size $d=\dfrac{\mu_{H_1}-\mu_{H_0}}{\sigma}=\dfrac{10-8}{2}=1$. With $n=64$, the effect is $1\cdot\sqrt{64}=8$ standard errors. Eight standard errors is enormous, so the answer must be about 1.

---

## Q13 — Max or Worton: how to raise power

**Question.** The planned experiment has power $1-\beta=0.4$ with a sample of $30$. **Max** says: increase the sample size, which shrinks the variance of the sampling distribution and raises power. **Worton** says: measure height in meters instead of centimeters, which reduces the population variance and raises power. Who is correct?

- a. Only Max
- b. Only Worton
- c. Both
- d. Neither

> [!success] Official answer — **a**

**Max is right.** A larger $n$ shrinks the standard error $\sigma/\sqrt n$, so the sampling distributions under $H_0$ and $H_1$ overlap less and power rises.

**Worton is wrong.** Changing units rescales *everything* by the same factor, including the distance between the two hypothesised means. The numerical variance falls, but so does the gap $\mu_{H_1}-\mu_{H_0}$. The standardised effect size (Cohen's d) is unchanged:

$$
d=\frac{\mu_{H_1}-\mu_{H_0}}{\sigma_X}
$$

Dividing both top and bottom by $100$ (cm to m) leaves $d$ untouched, so the power is untouched. See [[Cohen's d]] in [[Lec_06-Two Sample Tests, Error Types and Power]].

> [!tip] Intuition
> Power depends on the *signal-to-noise ratio*, not on the unit you write the numbers in. Changing units changes both signal and noise equally.

---

## Q14 — Sample size, $\alpha$ and $\beta$

**Question.** In a hypothesis test, increasing the sample size _____ the probability of Type I error ($\alpha$) and _____ the probability of Type II error ($\beta$).

- a. Decreases; decreases
- b. Does not change; decreases
- c. Decreases; does not change
- d. Does not change; does not change

> [!success] Official answer — **b**

- **$\alpha$ does not change.** $\alpha$ is the significance level the researcher *chooses*, and the critical value is set to match it. A larger sample does not alter that choice. The cutoff in terms of $\bar X$ moves, but the probability of a false rejection stays $\alpha$.
- **$\beta$ decreases.** A larger $n$ narrows both sampling distributions, so for a fixed true alternative there is less overlap, fewer false non-rejections, and so $\beta$ falls (power $1-\beta$ rises, as in Q13).

Options a and c wrongly let $\alpha$ move; option d wrongly keeps $\beta$ fixed. See [[Type I Error]] and [[Type II Error]].

---

## Q15 — Single sample t test (baking powder)

**Question.** Hanah baked 10 cakes with the new powder: $\bar X=11.7$ cm, $SD=2$. The standard powder is normally distributed with expected value $10$ cm. A single sample t test is run at $\alpha=0.01$. What is the test statistic and is it significant?

- a. $t=2.69$, significant
- b. $t=2.69$, not significant
- c. $t=3.17$, not significant
- d. $t=3.17$, significant

> [!success] Official answer — **b**

The [[Single Sample t Test]] statistic from the formula sheet:

$$
t_{\bar X}=\frac{\bar X-\mu_{H_0}}{S_X/\sqrt n}=\frac{11.7-10}{2/\sqrt{10}}=\frac{1.7}{0.6325}=2.69
$$

with $df=n-1=9$.

**Cutoff from Table D at $\alpha=0.01$, $df=9$:**

| Test version | Tail probability | Critical $t$ |
|---|---|---|
| One-sided ("works better") | $0.01$ | $2.821$ |
| Two-sided | $0.005$ per tail | $3.250$ |

$2.69<2.821$ and $2.69<3.250$, so the result is **not significant** whichever version you use. The statement "works better" suggests a one-sided test, and the conclusion is the same either way.

> [!tip] Intuition
> A $1\%$ level is strict, and with only $10$ cakes the t distribution has heavy tails. An effect of $1.7$ cm against a standard error of $0.63$ cm is not enough to pass.

- **a** has the right statistic but the wrong verdict.
- **c** and **d** have a statistic of $3.17$, which does not follow from the data given.

---

## Q16 — Two samples t test (incomes)

**Question.** Group A: $n=30$, mean $\$50{,}000$, $SD=\$8{,}000$. Group B: $n=30$, mean $\$55{,}000$, $SD=\$10{,}000$. A two samples t test at $\alpha=0.05$ tests whether income differs. What is the statistic and is it significant?

- a. $2.14$, significant
- b. $2.14$, not significant
- c. $3.04$, not significant
- d. $3.04$, significant

> [!success] Official answer — **a**

Use the [[Two Independent Samples t Test]] with [[Pooled Variance]] from the formula sheet.

**Step 1: pooled variance.** With equal group sizes it is the plain average of the two variances.

$$
S^2_{pooled}=\frac{(n_X-1)S_X^2+(n_Y-1)S_Y^2}{n_X+n_Y-2}=\frac{29\cdot64{,}000{,}000+29\cdot100{,}000{,}000}{58}=82{,}000{,}000
$$

**Step 2: statistic.**

$$
t=\frac{\bar X-\bar Y}{\sqrt{S^2_{pooled}\left(\dfrac1{n_X}+\dfrac1{n_Y}\right)}}=\frac{50{,}000-55{,}000}{\sqrt{82{,}000{,}000\cdot\dfrac{2}{30}}}=\frac{-5{,}000}{2{,}338}=-2.14
$$

The statistic is $-2.14$ (a magnitude of $2.14$; the sign only reflects the order of the groups).

**Step 3: cutoff.** $df=30+30-2=58$. Two-sided $\alpha=0.05$ puts $0.025$ in each tail. Table D gives $2.000$ for $df=60$ (and $2.009$ for $df=50$), so the cutoff is about $2.00$.

$$
\lvert -2.14\rvert=2.14>2.00\;\Rightarrow\;\text{reject }H_0
$$

The difference is **significant**. See [[Lec_05-Z Tests, t Tests and Two-Sample Tests]] and [[Lec_06-Two Sample Tests, Error Types and Power]].

> [!tip] Intuition
> With equal group sizes, the pooled and unpooled standard errors coincide: $\sqrt{\frac{64{,}000{,}000}{30}+\frac{100{,}000{,}000}{30}}=2{,}338$ as well.

- **b** has the right statistic but the wrong verdict ($2.14>2.00$).
- **c** and **d** use a statistic of $3.04$, which does not follow from the numbers.

---

## Q17 — F test for equality of variances

**Question.** Group 1 has $21$ observations with $SD=4.5$. Group 2 has $20$ observations with $SD=2.1$. What is the $F$ statistic and is $H_0$ (equal variances) rejected?

- a. $F=2.14$, $H_0$ rejected
- b. $F=2.14$, $H_0$ not rejected
- c. $F=4.59$, $H_0$ rejected
- d. $F=4.59$, $H_0$ not rejected

> [!success] Official answer — **c**

The [[F Test for Equality of Variances]] puts the **larger variance on top** (as $X$):

$$
F=\frac{S_X^2}{S_Y^2}=\frac{4.5^2}{2.1^2}=\frac{20.25}{4.41}=4.59
$$

with $F\sim F(n_X-1,\,n_Y-1)=F(20,\,19)$. The group with $SD=4.5$ has the larger variance, so it is $X$, and its degrees of freedom $21-1=20$ come first.

**Cutoff.** The formula sheet's F table is for $\alpha=0.05$. In the table, $d_1=20$ and $d_2=19$ gives $2.16$. A strictly two-tailed test would use the $2.5\%$ upper-tail point, about $2.51$. See [[Lec_07-Tests for Proportions and Variances]].

$$
4.59>2.16\;(\text{and also}>2.51)\;\Rightarrow\;\text{reject }H_0
$$

The conclusion holds with either cutoff.

> [!warning] Trap in the options
> $2.14$ is $4.5/2.1$, the **ratio of the standard deviations**. The F statistic is a ratio of **variances**, so the standard deviations must be squared first. That error is how $2.14$ arises in options a and b.

---

## Q18 — Confidence interval for a proportion

**Question.** A marketer surveyed $150$ people and $30\%$ said they like hiking. What is the $95\%$ confidence interval for the proportion who like hiking?

- a. $0.04\le p\le0.56$
- b. $0.18\le p\le0.42$
- c. $0.28\le p\le0.32$
- d. $0.23\le p\le0.37$

> [!success] Official answer — **d**

The [[Confidence Interval]] for a proportion (formula sheet) uses $\hat p$ in the standard error, unlike the test, which uses $p_{H_0}$.

$$
\hat p\pm Z_{1-\alpha/2}\sqrt{\frac{\hat p(1-\hat p)}{n}}
$$

**Standard error:**

$$
SE=\sqrt{\frac{0.30\cdot0.70}{150}}=\sqrt{0.0014}=0.0374
$$

**Margin of error:**

$$
1.96\cdot0.0374=0.0733
$$

**Interval:**

$$
0.30\pm0.0733\;\Rightarrow\;0.227\le p\le0.373
$$

Rounded, that is $0.23\le p\le0.37$: option **d**.

| Option | Half-width | Verdict |
|---|---|---|
| a | $0.26$ | Far too wide |
| b | $0.12$ | Too wide |
| c | $0.02$ | Far too narrow |
| **d** | **$0.07$** | **Matches $0.0733$** |

See [[Lec_08-Confidence Intervals]] for what sets the width.

---

## Q19 — Sample size for a target interval width

**Question.** George wants a $95\%$ confidence interval for the expected length of a departmental meeting that is **at most $5$ minutes wide**. $\sigma=10$ minutes is known. How many meetings must he sample?

- a. 62
- b. 52
- c. 42
- d. 32

> [!success] Official answer — **a**

The interval is $\bar X\pm Z_{1-\alpha/2}\,\dfrac{\sigma}{\sqrt n}$, so its **total width** is **twice** the margin of error.

$$
\text{width}=2\cdot Z_{1-\alpha/2}\cdot\frac{\sigma}{\sqrt n}\le5
$$

$$
2\cdot1.96\cdot\frac{10}{\sqrt n}\le5\;\Rightarrow\;\sqrt n\ge\frac{2\cdot1.96\cdot10}{5}=7.84
$$

$$
n\ge7.84^2=61.47
$$

Round **up** (a sample cannot be fractional and rounding down would give a wider interval): $n=62$.

**Check on the neighbours.** With $n=52$ the width is $2\cdot1.96\cdot10/\sqrt{52}=5.44>5$, which fails. Larger $n$ is needed, so only 62 passes.

> [!warning] Common slip
> Using the margin of error ($\pm5$, so $2.5$ per side confused with $5$ per side) gives $n=(1.96\cdot10/5)^2\approx15$. The question says the *whole interval* is at most $5$ wide, so the margin of error is $2.5$.

---

## Q20 — Chi-squared goodness of fit (law firm)

**Question.** A firm claims $65\%$ of clients are acquitted, $20\%$ only fined, $15\%$ imprisoned. Keren sampled $100$ past clients: $48$ acquitted, $24$ fined, $28$ imprisoned. Using a $\chi^2$ goodness of fit test at $\alpha=0.05$, what statistic and verdict?

- a. $\chi^2=16.51$, $H_0$ rejected
- b. $\chi^2=16.51$, $H_0$ not rejected
- c. $\chi^2=6.05$, $H_0$ rejected
- d. $\chi^2=6.05$, $H_0$ not rejected

> [!success] Official answer — **a**

[[Chi-Squared Test for Goodness of Fit]] (see [[Lec_09-Chi-Squared Tests for Goodness of Fit and Independence]]). $H_0$: the firm's claimed proportions are correct.

**Expected counts** $E_i=N\cdot p_{i\mid H_0}$ with $N=100$:

| Outcome | Observed $O_i$ | Expected $E_i$ | $\dfrac{(O_i-E_i)^2}{E_i}$ |
|---|---|---|---|
| Acquitted | 48 | 65 | $\dfrac{(-17)^2}{65}=4.446$ |
| Fined | 24 | 20 | $\dfrac{4^2}{20}=0.800$ |
| Imprisoned | 28 | 15 | $\dfrac{13^2}{15}=11.267$ |
| **Total** | 100 | 100 | $\mathbf{16.51}$ |

**Requirement:** every $E_i\ge5$ (smallest is $15$). Satisfied.

**Degrees of freedom:** number of categories minus one, $3-1=2$.

**Critical value:** chi-squared table, $\alpha=0.05$ upper tail, $df=2$: $5.991$.

$$
16.51>5.991\;\Rightarrow\;\text{reject }H_0
$$

The sample contradicts the firm's claim, mostly through the imprisoned category ($28$ observed versus $15$ expected).

![[PP01_q20_chi2_rejection.png|600]]

> [!warning] Options b, c and d
> Option **b** has the right statistic and the wrong verdict ($16.51$ is far above the cutoff). Options **c** and **d** use $6.05$, which does not come from the data. Note that option c would be a *rejection* too, since $6.05>5.991$, so option d ("$6.05$, not rejected") is internally inconsistent with the table.

---

## Answer key summary

| Q | Official key | Reproduced by working |
|---|---|---|
| 1 | a | a |
| 2 | d | d |
| 3 | a | a |
| 4 | b | b |
| 5 | d | d |
| 6 | a and c both accepted | a (AI-written, see Q6) |
| 7 | c | c |
| 8 | c | c |
| 9 | c | c |
| 10 | a | a |
| 11 | a | a |
| 12 | d | d |
| 13 | a | a |
| 14 | b | b |
| 15 | b | b |
| 16 | a | a |
| 17 | c | c |
| 18 | d | d |
| 19 | a | a |
| 20 | a | a |

> [!tip] Method summary
> Before any calculation, name the test: known $\sigma$ means Z, unknown $\sigma$ means t, two groups means two-sample, a proportion means the $p_{H_0}$-based Z, variances means F, categories means chi-squared. Then plug in, compare with the table cutoff, and sanity-check the sign and size against the options.
