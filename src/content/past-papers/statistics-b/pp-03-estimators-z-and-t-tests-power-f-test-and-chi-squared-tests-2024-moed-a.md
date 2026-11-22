---
title: "Estimators, Z and t Tests, Power, F Test and Chi-Squared Tests (2024 Moed A)"
type: past-paper
status: worked-solution
exam: "Statistics B Final Exam, Moed A 2024"
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
  - power
  - confidence-intervals
  - chi-squared
aliases:
  - Statistics B Moed A 2024
  - Stats B Exam 2024 Moed A
  - PP03 Statistics B
subject: statistics-b
in_scope: true
---

# Estimators, Z and t Tests, Power, F Test and Chi-Squared Tests (2024 Moed A)

> Part of: [[Statistics B]]
> **Statistics B Final Exam, Moed A 2024.** 20 multiple-choice questions, four options each, with an official letter key printed at the end of the paper (letters only, no working).
> Builds on: [[Lec_01-Point Estimation and Sampling Distributions]], [[Lec_02-Point Estimation and the Variance Estimator]], [[Lec_03-Maximum Likelihood Estimation]], [[Lec_04-Hypothesis Testing and the Z Test]], [[Lec_05-Z Tests, t Tests and Two-Sample Tests]], [[Lec_06-Two Sample Tests, Error Types and Power]], [[Lec_07-Tests for Proportions and Variances]], [[Lec_08-Confidence Intervals]], [[Lec_09-Chi-Squared Tests for Goodness of Fit and Independence]], [[Lec_11-Joint Distributions, Correlation and Linear Regression]]

> [!info] Source and how the answers were built
> The official key gives **letters only**. For every question the working below was written for revision and checked to reach the keyed letter. The formulas follow the extended formula sheet. Where a question was marked "all answers accepted" the keyed letter is still shown, and the best answer is labelled as AI-written.

> [!warning] AI-solved questions: Q7 and Q14
> The paper states that **all answers were accepted** for Q7 (low psychometric performance) and Q14 (mistakes in the question). The official key still prints a letter for both. The reasoning for the best answer in each is AI-written, not official. Check before relying on it.

> [!warning] One keyed value that does not reproduce: Q15
> The key says C (t = 3.12, significant). Using the formula-sheet pooled t test, the statistic is about 4.36, not 3.12. The **official letter C is kept**, and the check is shown in Q15.

## What this paper tests

| Questions | Core idea | Where it is taught |
|---|---|---|
| 1 | Variance of an average of averages | [[Lec_01-Point Estimation and Sampling Distributions]] |
| 2, 3, 4 | [[Unbiased Estimator]] and [[Consistent Estimator]] | [[Lec_01-Point Estimation and Sampling Distributions]], [[Lec_02-Point Estimation and the Variance Estimator]] |
| 5 | [[Maximum Likelihood Estimator]] from a [[Likelihood Table]] | [[Lec_03-Maximum Likelihood Estimation]] |
| 6, 7 | [[Covariance]], [[Correlation Coefficient]], effect of an [[Outlier]] on the [[Regression Slope]] | [[Lec_11-Joint Distributions, Correlation and Linear Regression]] |
| 8, 9, 10, 11, 14, 15 | Test statistics: [[Z Test]], [[t Test]], [[Two-Sample Z Test]], [[Two-Sample t Test]], [[Proportion Z Test]] | [[Lec_04-Hypothesis Testing and the Z Test]], [[Lec_05-Z Tests, t Tests and Two-Sample Tests]], [[Lec_06-Two Sample Tests, Error Types and Power]], [[Lec_07-Tests for Proportions and Variances]] |
| 12, 13 | [[Statistical Power]], [[Type I Error]], [[Type II Error]], [[Cohen's d]] | [[Lec_06-Two Sample Tests, Error Types and Power]] |
| 16 | [[F Test for Equality of Variances]] | [[Lec_07-Tests for Proportions and Variances]] |
| 17, 18 | [[Confidence Interval]] and its link to a two-sided test | [[Lec_08-Confidence Intervals]] |
| 19, 20 | [[Chi-Squared Goodness of Fit]] and [[Chi-Squared Test of Independence]] | [[Lec_09-Chi-Squared Tests for Goodness of Fit and Independence]] |

> [!tip] Intuition: one move per question
> Almost every question is "pick the right formula from the sheet, plug in, compare with the [[Critical Value]]". The traps are (1) using the wrong standard error, (2) using $t$ when $\sigma$ is known or $Z$ when it is not, and (3) one-tailed versus two-tailed cut-offs.

## Official key

| Q | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| Key | A | C | B | A | D | A | C | C | A | C |

| Q | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 |
|---|---|---|---|---|---|---|---|---|---|---|
| Key | B | D | C | A | C | C | C | D | C | B |

---

## Q1 — Variance of an average of averages

Salaries have variance $1{,}000{,}000$. Every company has 10 departments of 20 workers. Andreas averages each department (20 workers). Katheryn averages those 10 department averages. What is the variance of Katheryn's averages?

a. 5,000
b. 50,000
c. 100,000
d. 1,000,000

> [!success] Answer: A (5,000)

Work in two steps, using $Var(\bar X)=\dfrac{\sigma^2}{n}$ from the [[Sampling Distribution of the Mean]].

Andreas's department averages each use 20 workers:

$$
Var(\text{department average}) = \frac{1{,}000{,}000}{20} = 50{,}000
$$

Katheryn then averages 10 independent department averages:

$$
Var(\text{company average}) = \frac{50{,}000}{10} = 5{,}000
$$

> [!tip] Intuition
> The average of equal-sized group averages is just the average of all $20 \times 10 = 200$ workers, so the answer is $\dfrac{1{,}000{,}000}{200}=5{,}000$ directly.

- **b** is the variance after only the first step. **c** divides by 10 only. **d** is the variance of a single salary, so no averaging at all.

---

## Q2 — Unbiased estimator for a

$X$ takes the values 2, 4, 8 with probabilities $a$, $a$, $1-2a$. $\bar X$ is the average of 30 observations. Which is an unbiased estimator for $a$?

a. $8-\bar X\cdot 10$
b. $10-\bar X\cdot 8$
c. $\dfrac{8-\bar X}{10}$
d. $\dfrac{10-\bar X}{8}$

> [!success] Answer: C

An estimator is unbiased when its expected value equals the parameter. First find $E(X)$ as a function of $a$:

$$
E(X)=2a+4a+8(1-2a)=8-10a
$$

Since $E(\bar X)=E(X)$, solve for $a$:

$$
a=\frac{8-E(X)}{10}
$$

Replacing $E(X)$ by $\bar X$ gives the estimator $\dfrac{8-\bar X}{10}$. Check: $E\!\left(\dfrac{8-\bar X}{10}\right)=\dfrac{8-(8-10a)}{10}=a$.

- **a, b, d** each fail the check. For example a: $E(8-10\bar X)=8-10(8-10a)=100a-72\neq a$.
- The sample size 30 is a distractor: $E(\bar X)$ does not depend on $n$.

---

## Q3 — Unbiased estimator for theta

$E(\hat\theta)=\dfrac{\theta}{3}$ and $Var(\hat\theta)=5\theta$. Which is an unbiased estimator for $\theta$?

a. $5\hat\theta$
b. $3\hat\theta$
c. $\dfrac{\hat\theta}{5}$
d. $\dfrac{\hat\theta}{3}$

> [!success] Answer: B (3 times theta hat)

Use $E(b\hat\theta)=b\,E(\hat\theta)$. We need $b\cdot\dfrac{\theta}{3}=\theta$, so $b=3$:

$$
E(3\hat\theta)=3\cdot\frac{\theta}{3}=\theta
$$

- The variance is irrelevant to **bias**. It only matters for consistency and efficiency.
- **a** gives $\dfrac{5\theta}{3}$, **c** gives $\dfrac{\theta}{15}$, **d** gives $\dfrac{\theta}{9}$. All are biased.

---

## Q4 — Unbiased and consistent?

$E(\hat\theta)=\theta$ and $Var(\hat\theta)=\dfrac{5}{n}$. The estimator is ___ and ___ for $\theta$.

a. An unbiased; consistent
b. A biased; consistent
c. An unbiased; not consistent
d. A biased; not consistent

> [!success] Answer: A

- **Unbiased:** $E(\hat\theta)=\theta$.
- **Consistent:** the formula sheet defines consistency as the variance going to zero as the sample grows:

$$
Var(\hat\theta)=\frac{5}{n}\;\longrightarrow\;0 \quad (n\to\infty)
$$

Both properties hold, so a. The constant 5 does not matter; only that the variance shrinks with $n$.

---

## Q5 — Maximum likelihood from a table

| | $X=0$ | $X=1$ |
|---|---|---|
| $\theta=0$ | 0.5 | 0.5 |
| $\theta=1$ | 0.9 | 0.1 |
| $\theta=2$ | 0.8 | 0.2 |

Which $\hat\theta$ is the maximum likelihood estimator for each value of $X$?

> [!success] Answer: D ($\hat\theta=1$ if $X=0$, and $\hat\theta=0$ if $X=1$)

The [[Maximum Likelihood Estimator]] picks, **for the observed $X$**, the $\theta$ with the largest likelihood. Read down each column:

- $X=0$: likelihoods 0.5, 0.9, 0.8, so the maximum is 0.9 at $\theta=1$.
- $X=1$: likelihoods 0.5, 0.1, 0.2, so the maximum is 0.5 at $\theta=0$.

> [!warning] Exam trap
> Compare within a column (one fixed $X$), never across a row. A row does not sum to 1 because the likelihood is not a probability distribution over $\theta$.

- **a** and **b** pick $\theta=2$ for one column, but 0.8 is below 0.9 in column 0, and in column 1 the best is $\theta=0$.
- **c** picks $\theta=0$ for $X=0$ and $\theta=1$ for $X=1$. It is the wrong way round.

---

## Q6 — What could the correlation be?

In a sample of 30, $Cov(X,Y)=6$. Which could be $r_{x,y}$?

a. $r=1$
b. $r=0$
c. $r=-1$
d. $r$ could be $-1$, $0$ or $1$

> [!success] Answer: A

The [[Correlation Coefficient]] is

$$
r_{x,y}=\frac{Cov(X,Y)}{S(X)\,S(Y)}
$$

The standard deviations are positive, so $r$ has the **same sign as the covariance**. A covariance of 6 is positive, so $r>0$. Of the options only $r=1$ is positive, so a. (Perfect correlation is possible: it needs $S(X)S(Y)=6$.)

- **b** needs a covariance of 0. **c** needs a negative covariance. **d** includes both.

---

## Q7 — Removing a misreported point

Tamar's regression of close friends on hair length (20 people) has slope $b=0.6$. One person, with hair **shorter than average**, reported an impossibly **high** number of friends. She drops him and refits on 19 people. The new slope will be:

a. lower than 0.6
b. equal to 0.6
c. higher than 0.6
d. not enough information

> [!warning] All answers were accepted (low psychometric performance)
> The printed key says C. The working below is AI-written, not official. Check before relying on it.

> [!success] Best answer: C (the slope rises). Matches the printed key.

Let the person's deviations from the sample means be $d_x<0$ (short hair) and $d_y$. The slope is $b=\dfrac{S_{xy}}{S_{xx}}$. Removing one point from $n$ points changes both sums by $\dfrac{n}{n-1}$ times that point's term:

$$
b_{\text{new}}=\frac{S_{xy}-c\,d_x d_y}{S_{xx}-c\,d_x^2},\qquad c=\frac{n}{n-1}
$$

$b_{\text{new}}>b$ exactly when

$$
d_x\,(d_y-b\,d_x)<0
$$

Since $d_x<0$, this holds when $d_y-b\,d_x>0$. That is the person's **residual** being positive: his $y$ lies above the fitted line. An impossibly high number of friends at below-average hair length certainly lies above the line, so the slope rises.

![[PP03_q7_outlier_flattens_slope.png|600]]

*Schematic only (no real data). The point at top left drags the left end of the line up, which flattens it. Dropping him restores the steeper line.*

> [!tip] Intuition
> A point that is low on $x$ and high on $y$ pulls against a positive relationship. Removing it lets the positive trend show.

> [!note] Why all answers were accepted
> The conclusion depends on the point lying above the line. The question describes this in words but gives no numbers, so a strict reader can call d defensible.

---

## Q8 — Printing machine: Z statistic

Normal with $\mu=70$ and $\sigma=5$ for a working machine. $n=5$ hours, $\bar X=65$. Test at $\alpha=0.05$ whether it runs **slower**. Which $Z$ and verdict?

a. $Z=-1.24$, significant
b. $Z=-1.24$, not significant
c. $Z=-2.24$, significant
d. $Z=-2.24$, not significant

> [!success] Answer: C ($Z=-2.24$, significant)

$\sigma$ is known, so use the single-sample [[Z Test]] (the question's word "t test" is loose; it asks for the Z statistic):

$$
Z=\frac{\bar X-\mu_{H_0}}{\sigma/\sqrt n}=\frac{65-70}{5/\sqrt5}=\frac{-5}{2.236}=-2.24
$$

$H_1:\mu<70$ is a [[One-Tailed Test]]. The critical value is $-Z_{0.95}=-1.645$. Since $-2.24<-1.645$ the statistic is in the rejection region, so the result is significant.

- **a, b** give $-1.24$, which does not come from the formula with the given numbers (the standard error is $5/\sqrt5=2.236$, not about 4).
- **d** has the right statistic but the wrong verdict: $-2.24$ is beyond $-1.645$.

---

## Q9 — Israel and Austria energy use

Israel: $n=20$, $\bar X=3.4$. Austria: $n=30$, $\bar Y=3.8$. Both population standard deviations are 1.4. Z statistic for a difference?

a. $Z=0.99$
b. $Z=1.99$
c. $Z=2.99$
d. $Z=3.99$

> [!success] Answer: A ($|Z|=0.99$)

Both $\sigma$ are known, so use the [[Two-Sample Z Test]]:

$$
Z=\frac{(\bar X-\bar Y)-0}{\sqrt{\dfrac{\sigma_X^2}{n_X}+\dfrac{\sigma_Y^2}{n_Y}}}
=\frac{3.4-3.8}{\sqrt{\dfrac{1.96}{20}+\dfrac{1.96}{30}}}
=\frac{-0.4}{0.404}=-0.99
$$

The sign depends only on which group is called $X$. Taking Austria minus Israel gives $+0.99$, which is option a. It is a **two-sided** test, so the cut-off is $\pm1.96$. Since $0.99<1.96$, it is not significant (the question only asks for the statistic).

---

## Q10 — Satisfied customers

$n=150$, sample proportion $\hat p=0.76$, $H_0:p=0.70$. Z statistic?

a. 0.6
b. 1.1
c. 1.6
d. 2.1

> [!success] Answer: C (1.6)

Use the [[Proportion Z Test]]. The standard error uses the **null** proportion, $p_{H_0}=0.70$:

$$
Z=\frac{\hat p-p_{H_0}}{\sqrt{\dfrac{p_{H_0}(1-p_{H_0})}{n}}}
=\frac{0.76-0.70}{\sqrt{\dfrac{0.70\cdot0.30}{150}}}
=\frac{0.06}{0.0374}=1.60
$$

Requirement check: $np_{H_0}=105\ge5$ and $n(1-p_{H_0})=45\ge5$.

---

## Q11 — Z test versus t test on the same sample

Ido (knows $\sigma$) gets $Z=1.7$ for $H_1:\mu>120$ on 15 students and is significant. Ori does not know $\sigma$ and runs a $t$ test on the same sample. The sample standard deviation equals the population one. Ori's $t$ statistic will ___ to 1.7 and his test will ___ significant at 0.05.

a. Be equal, be
b. Be equal, not be
c. Not be equal, not be
d. Not be equal, be

> [!success] Answer: B

- **Statistic:** the formulas $\dfrac{\bar X-\mu_{H_0}}{\sigma/\sqrt n}$ and $\dfrac{\bar X-\mu_{H_0}}{S/\sqrt n}$ are identical when $S=\sigma$, so $t=1.7$.
- **Verdict:** the $t$ distribution has heavier tails, with $n-1=14$ degrees of freedom. For a one-tailed 5% test, $Z_{0.95}=1.645$ but $t_{14,\,0.95}=1.761$. Because $1.645<1.7<1.761$, the $Z$ test rejects and the $t$ test does not.

![[PP03_q11_z_vs_t_critical.png|600]]

*The statistic 1.7 lies between the two cut-offs. Estimating $\sigma$ from the sample costs power, so the cut-off moves out.*

---

## Q12 — Power

$n=64$, known $\sigma^2=4$ (so $\sigma=2$), $H_0:\mu=30$, $\alpha=0.05$. What is the power if the true mean is 31?

a. 0.68
b. 0.78
c. 0.88
d. 0.98

> [!success] Answer: D (0.98)

Follow the power procedure from [[Lec_06-Two Sample Tests, Error Types and Power]]. The standard error is $\dfrac{2}{\sqrt{64}}=0.25$. The test is two-sided (no direction in $H_0$), so the upper critical value is

$$
\bar X_{crit}=Z_{crit}\cdot\frac{\sigma}{\sqrt n}+\mu_{H_0}=1.96\cdot0.25+30=30.49
$$

Standardise that cut-off under the truth $\mu_{H_1}=31$:

$$
Z_{\bar X_{crit}}=\frac{30.49-31}{0.25}=-2.04
$$

$$
1-\beta=1-\Phi(-2.04)=1-0.0207=0.979\approx0.98
$$

(The lower rejection region, below 29.51, adds essentially nothing when the truth is 31.)

![[PP03_q12_power_sigma2_n64.png|600]]

*The shaded area is the power: the share of the true sampling distribution beyond the critical value.*

> [!tip] Intuition
> The effect is $\dfrac{31-30}{0.25}=4$ standard errors. A 4-standard-error gap clears a 1.96 cut-off almost always.

---

## Q13 — Effect size zero

Cohen's $d=0$ for the hypothesis Arnold tests. His test ___ result in a Type I error and ___ result in a Type II error.

a. Could; could
b. Could not; could
c. Could; could not
d. Could not; could not

> [!success] Answer: C (could; could not)

Cohen's $d=\dfrac{\mu_{H_1}-\mu_{H_0}}{\sigma_X}=0$ means the true mean equals the null value: **$H_0$ is true**. From the outcomes table:

- Type I error (reject a true $H_0$) is possible, with probability $\alpha$.
- Type II error means failing to reject a **false** $H_0$. $H_0$ is not false, so it cannot happen.

---

## Q14 — Grape sugar

New method: $n=12$, $\bar X=1.3$, $S=0.2$. Standard method mean 1.1. Single-sample $t$ test, $\alpha=0.05$, testing whether the new method **increases** sugar.

a. $t=3.46$, significant
b. $t=3.46$, not significant
c. $t=1.46$, significant
d. $t=1.46$, not significant

> [!warning] All answers were accepted (mistakes in the question)
> The printed key says A. The paper does not say what the mistakes were. The working below is AI-written, not official. Check before relying on it.

> [!success] Best answer: A ($t=3.46$, significant). Matches the printed key.

$\sigma$ is unknown, so the single-sample [[t Test]] with $n-1=11$ degrees of freedom applies:

$$
t=\frac{\bar X-\mu_{H_0}}{S/\sqrt n}=\frac{1.3-1.1}{0.2/\sqrt{12}}=\frac{0.2}{0.0577}=3.46
$$

For a one-tailed test, $t_{11,\,0.95}=1.796$, and $3.46>1.796$, so it is significant. A two-tailed test would give the same verdict ($t_{11,\,0.975}=2.201$).

- **b** has the right statistic but the wrong verdict. **c, d**: 1.46 does not come from the given numbers.

---

## Q15 — Two universities, pooled t test

University A: $n=40$, mean \$55,000, $S=\$7{,}000$. University B: $n=50$, mean \$62,000, $S=\$8{,}000$. Two-sided $t$ test at $\alpha=0.05$ for a difference in income.

a. $t=2.12$, significant
b. $t=2.12$, not significant
c. $t=3.12$, significant
d. $t=3.12$, not significant

> [!success] Official answer: C ($t=3.12$, significant)

The formula-sheet [[Two-Sample t Test]] uses the [[Pooled Variance]], with $n_X+n_Y-2=88$ [[Degrees of Freedom]]:

$$
S_{pooled}^2=\frac{(n_X-1)S_X^2+(n_Y-1)S_Y^2}{n_X+n_Y-2}=\frac{39\cdot7000^2+49\cdot8000^2}{88}\approx57{,}350{,}000
$$

$$
t=\frac{\bar X-\bar Y}{\sqrt{S_{pooled}^2\left(\dfrac{1}{n_X}+\dfrac{1}{n_Y}\right)}}
=\frac{-7000}{\sqrt{57{,}350{,}000\cdot0.045}}=\frac{-7000}{1606}\approx-4.36
$$

The critical values for 88 degrees of freedom are about $\pm1.99$. The statistic is far inside the rejection region, so the test is **significant**. This agrees with the keyed verdict.

> [!warning] The keyed value 3.12 does not reproduce
> The sheet formula gives $|t|\approx4.36$ (the unpooled version gives about 4.42). Neither is 3.12, and no option (2.12 or 3.12) matches. The official letter **C is kept** and flagged. The verdict (significant) is correct, so a student using the sheet still lands on C or on a "significant" option; between c and a, the printed key says c.

> [!tip] Intuition
> A \$7,000 gap against a standard error of about \$1,600 is more than four standard errors. Whatever the exact formula, the test rejects, so the "not significant" options b and d are out.

---

## Q16 — F test for equal variances

Group 1: $n=31$, $S=78$. Group 2: $n=30$, $S=52$. F statistic, and is $H_0$ rejected?

a. $F=1.5$, $H_0$ rejected
b. $F=1.5$, $H_0$ not rejected
c. $F=2.25$, $H_0$ rejected
d. $F=2.25$, $H_0$ not rejected

> [!success] Answer: C ($F=2.25$, rejected)

The [[F Test for Equality of Variances]] works with **variances**, so square the standard deviations. The sheet says to put the larger variance on top:

$$
F=\frac{S_X^2}{S_Y^2}=\frac{78^2}{52^2}=\frac{6084}{2704}=2.25
$$

(1.5 is the ratio of standard deviations, which is the trap in a and b.)

Degrees of freedom are $(n_X-1,\,n_Y-1)=(30,29)$. Because the test is for "different" variances, it is two-sided, and with the larger variance on top the cut-off is the upper 2.5% point, about $F_{0.975}(30,29)\approx2.09$. Since $2.25>2.09$, reject $H_0$.

![[PP03_q16_f_30_29_rejection.png|600]]

*The statistic lies just inside the rejection region, so this is a close call. Check the exact table value.*

---

## Q17 — Confidence interval and tests

A 95% confidence interval for a proportion is 7% to 13%. A test of $H_0:p=8\%$ would ___ significant. A test of $H_0:p=5\%$ would ___ significant.

a. Be; be
b. Be; not be
c. Not be; be
d. Not be; not be

> [!success] Answer: C (not significant; significant)

Use the duality between a two-sided test at $\alpha=0.05$ and a 95% [[Confidence Interval]]: a null value **inside** the interval is not rejected, and one **outside** is rejected.

- 8% is inside [7%, 13%], so not significant.
- 5% is outside, so significant.

---

## Q18 — 99% confidence interval for the mean

$n=41$, $\bar X=8.7$, $S=2.5$, normal population. 99% interval for $\mu$?

a. $6.14\le\mu\le11.26$
b. $6.64\le\mu\le10.76$
c. $7.14\le\mu\le10.26$
d. $7.64\le\mu\le9.76$

> [!success] Answer: D

$\sigma$ is unknown, so use $t$ with $n-1=40$ degrees of freedom and $\alpha/2=0.005$ in each tail, $t_{40,\,0.995}=2.704$:

$$
\bar X\pm t_{n-1}^{1-\alpha/2}\frac{S}{\sqrt n}=8.7\pm2.704\cdot\frac{2.5}{\sqrt{41}}=8.7\pm2.704\cdot0.390=8.7\pm1.056
$$

$$
7.64\le\mu\le9.76
$$

The other options have half-widths of 2.56, 2.06 and 1.56, all wider than the correct 1.056, so they overstate the uncertainty.

---

## Q19 — Early adopters: goodness of fit

Claimed shares: 16% early, 68% pragmatic, 16% late. Observed in 200 people: 10, 130, 60. $\chi^2$ test at $\alpha=0.05$.

a. $\chi^2=9.89$, rejected
b. $\chi^2=9.89$, did not reject
c. $\chi^2=39.89$, rejected
d. $\chi^2=39.89$, did not reject

> [!success] Answer: C ($\chi^2=39.89$, rejected)

Use the [[Chi-Squared Goodness of Fit]] test with $E_i=N\cdot p_{i|H_0}$:

| Group | Observed | Expected | $\dfrac{(O-E)^2}{E}$ |
|---|---|---|---|
| Early | 10 | 32 | 15.125 |
| Pragmatic | 130 | 136 | 0.265 |
| Late | 60 | 32 | 24.500 |

$$
\chi^2=15.125+0.265+24.500=39.89
$$

All $E_i\ge5$, so the requirement holds. With 3 categories the degrees of freedom are $3-1=2$, and the critical value is $5.99$. Since $39.89>5.99$, reject $H_0$.

![[PP03_q19_chi_squared_df2.png|600]]

*The statistic is far beyond the 5% cut-off.*

---

## Q20 — Office work and tax cheating: independence

Of 1000 people, 700 work in an office (60 cheated) and 300 do not (10 cheated). $\chi^2$ test for independence at $\alpha=0.05$.

a. $\chi^2=8.85$, did not reject
b. $\chi^2=8.85$, rejected
c. $\chi^2=28.85$, did not reject
d. $\chi^2=28.85$, rejected

> [!success] Answer: B ($\chi^2=8.85$, rejected)

Build the observed table and the expected counts from $E_{ij}=N\,p(X_i)\,p(Y_j)$. In total 70 people cheated and 930 did not.

| | Cheated | Did not cheat | Total |
|---|---|---|---|
| Office: observed | 60 | 640 | 700 |
| Office: expected | 49 | 651 | 700 |
| Not office: observed | 10 | 290 | 300 |
| Not office: expected | 21 | 279 | 300 |

$$
\chi^2=\frac{(60-49)^2}{49}+\frac{(640-651)^2}{651}+\frac{(10-21)^2}{21}+\frac{(290-279)^2}{279}
$$

$$
\chi^2=2.469+0.186+5.762+0.434=8.85
$$

All expected counts are at least 5. A 2 by 2 table has $(2-1)(2-1)=1$ degree of freedom, with critical value 3.84. Since $8.85>3.84$, reject independence: cheating is associated with working in an office.

---

## Recap

| Q | Tool | Result | Key |
|---|---|---|---|
| 1 | $Var(\bar X)=\sigma^2/n$ over 200 workers | 5,000 | A |
| 2 | $E(X)=8-10a$, solve for $a$ | $(8-\bar X)/10$ | C |
| 3 | Scale by 3 | $3\hat\theta$ | B |
| 4 | Unbiased, variance to 0 | Unbiased and consistent | A |
| 5 | Max per column | 1 if $X=0$, 0 if $X=1$ | D |
| 6 | Sign of $r$ equals sign of covariance | $r=1$ | A |
| 7 | Positive residual removed | Slope rises (AI-written) | C |
| 8 | One-tailed Z | $-2.24$, significant | C |
| 9 | Two-sample Z | 0.99 in size | A |
| 10 | Proportion Z, null SE | 1.6 | C |
| 11 | Same statistic, heavier tails | Equal, not significant | B |
| 12 | Power, SE 0.25 | 0.98 | D |
| 13 | $H_0$ true | Type I only | C |
| 14 | One-sample $t$ | 3.46, significant (AI-written) | A |
| 15 | Pooled $t$ | Significant (sheet gives 4.36, key 3.12) | C |
| 16 | Variance ratio | 2.25, rejected | C |
| 17 | CI and test duality | Not; be | C |
| 18 | $t$ interval, 99% | 7.64 to 9.76 | D |
| 19 | Goodness of fit | 39.89, rejected | C |
| 20 | Independence | 8.85, rejected | B |

## Related notes

[[Statistics B]], [[Lec_01-Point Estimation and Sampling Distributions]], [[Lec_03-Maximum Likelihood Estimation]], [[Lec_05-Z Tests, t Tests and Two-Sample Tests]], [[Lec_06-Two Sample Tests, Error Types and Power]], [[Lec_07-Tests for Proportions and Variances]], [[Lec_08-Confidence Intervals]], [[Lec_09-Chi-Squared Tests for Goodness of Fit and Independence]], [[Lec_11-Joint Distributions, Correlation and Linear Regression]]
