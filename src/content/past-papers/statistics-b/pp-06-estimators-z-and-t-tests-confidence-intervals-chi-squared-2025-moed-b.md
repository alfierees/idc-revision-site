---
title: "Estimators, Z and t Tests, Confidence Intervals & Chi-Squared (2025 Moed B)"
type: past-paper
status: worked-solution
exam: "2025 Moed B (term 2, 19/08/2025)"
semester: 2
year: 1
course: "Statistics B"
instructor: unknown
tags:
  - statistics
  - past-paper
  - worked-solution
  - multiple-choice
  - unbiased-estimator
  - z-test
  - t-test
  - confidence-interval
  - chi-squared
  - statistical-power
aliases:
  - Statistics B Moed B 2025
  - PP06 Statistics B
  - Statistics II for Economics Moed B 2025
subject: statistics-b
in_scope: true
---

# Moed B 2025 — Worked Solutions

> Part of: [[Statistics B]]
> **2025 Moed B** — Statistics II for Economics, Asael Sklar. 20 multiple-choice questions, 5 points each, 3 hours, financial calculator and the lecturer's formula sheet allowed.
> Key concepts: [[Unbiased Estimator]], [[Consistent Estimator]], [[Maximum Likelihood Estimator]], [[Single Sample Z Test]], [[Single Sample t Test]], [[Two Samples Z Test]], [[Two Independent Samples t Test]], [[Single Sample Z Test for Proportion]], [[Two Samples Z Test for Proportions]], [[F Test for Equality of Variances]], [[Confidence Interval]], [[Statistical Power]], [[Type I Error]], [[Type II Error]], [[Chi-Squared Test for Independence]], [[Linear Regression]]
> Builds on: [[Lec_01-Point Estimation and Sampling Distributions]] · [[Lec_02-Point Estimation and the Variance Estimator]] · [[Lec_03-Maximum Likelihood Estimation]] · [[Lec_04-Hypothesis Testing and the Z Test]] · [[Lec_05-Z Tests, t Tests and Two-Sample Tests]] · [[Lec_06-Two Sample Tests, Error Types and Power]] · [[Lec_07-Tests for Proportions and Variances]] · [[Lec_08-Confidence Intervals]] · [[Lec_09-Chi-Squared Tests for Goodness of Fit and Independence]] · [[Lec_11-Joint Distributions, Correlation and Linear Regression]] · [[Lec_12-Exam Review 1]] · [[Lec_13-Exam Review Session 2]]

> [!warning] No official answer key: every answer is AI-written
> The source folder has **no key** for this paper. All 20 answers (Q1 to Q20) were solved from the lecture notes and the formula sheet, and every number was recomputed in Python. Check before relying on any of them. Each answer repeats the warning. **Q19 is a special case**: the likelihood table gives a maximum likelihood estimator that matches **no** option exactly (see Q19).

> [!info] Reading the paper
> Q6, Q11, Q17 and Q19 hold their formulas and tables as images in the PDF. They were transcribed from the rendered page, not from the text layer. The header fields for ID and notebook are blank and are left out here.

---

## What this paper tests

> [!info] Nearly one question per lecture
> 1. **Estimators (Q6, Q11, Q13, Q17, Q19)**: unbiasedness by solving for the parameter from $E(\hat\theta)$, sampling variance $\sigma^2/n$, consistency, and a discrete maximum likelihood table. See [[Lec_01-Point Estimation and Sampling Distributions]] and [[Lec_03-Maximum Likelihood Estimation]].
> 2. **Means (Q1, Q7, Q8, Q14, Q15)**: pick the right test (Z or t, one or two samples) using two questions: is the variance known, and are the averages normal? See [[Lec_05-Z Tests, t Tests and Two-Sample Tests]] and [[Lec_06-Two Sample Tests, Error Types and Power]].
> 3. **Proportions and variances (Q4, Q5, Q18)**: [[Lec_07-Tests for Proportions and Variances]].
> 4. **Intervals (Q9, Q16)**: [[Lec_08-Confidence Intervals]].
> 5. **Power and error types (Q2, Q10, Q20)**: [[Lec_06-Two Sample Tests, Error Types and Power]].
> 6. **Chi-squared (Q12)** and **regression (Q3)**: [[Lec_09-Chi-Squared Tests for Goodness of Fit and Independence]] and [[Lec_11-Joint Distributions, Correlation and Linear Regression]].

> [!tip] Intuition
> Most questions are one formula plus one decision. Compute the statistic, then compare it with the critical value the lecturer's table gives. The answer options are built from common slips (wrong sign, forgetting the square root, not pooling), so a result that matches only one option is usually right.

---

## Q1 — Two-sample Z test for means

**Question.** Factory 1: $n=25$, mean 230 g, $\sigma=20$. Factory 2: $n=30$, mean 220 g, $\sigma=20$. Is Factory 1 heavier? Options: a. 0.85, b. 1.85, c. 1.45, d. 0.45.

The population standard deviations are known, so this is a [[Two Samples Z Test]]:

$$
Z=\frac{\bar X-\bar Y}{\sqrt{\dfrac{\sigma_X^2}{n_X}+\dfrac{\sigma_Y^2}{n_Y}}}
$$

$$
Z=\frac{230-220}{\sqrt{\dfrac{400}{25}+\dfrac{400}{30}}}=\frac{10}{\sqrt{16+13.33}}=\frac{10}{5.416}=1.846\approx 1.85
$$

> [!warning] AI-written answer, not official. Check before relying on it.
> **Answer: b. Z = 1.85.**

- a. 0.85, c. 1.45 and d. 0.45 do not follow from the data.

---

## Q2 — What raises statistical power

**Question.** A study has power 0.2. Which change raises it?

> [!warning] AI-written answer, not official. Check before relying on it.
> **Answer: b. Increase the true effect size (longer training).**

[[Statistical Power]] is the probability of rejecting a false $H_0$. It rises with a larger true effect, a larger sample, a larger $\alpha$ and a smaller population variance.

- a. Lowering $\alpha$ to 0.01 makes rejection harder, so power **falls**.
- b. A bigger true effect moves the distribution under $H_1$ away from $H_0$, so more of it falls in the rejection region. Correct.
- c. Extra variance widens both distributions and **lowers** power.
- d. A smaller sample raises the standard error, so power **falls**.

---

## Q3 — Slope from a regression line

**Question.** Intercept $a=20000$; sample averages $\bar X=14$ years and $\bar Y=68000$. Find the slope $b$.

The least squares line passes through the point of averages ([[Linear Regression]], [[Lec_11-Joint Distributions, Correlation and Linear Regression]]):

$$
\bar Y=a+b\bar X
$$

$$
b=\frac{\bar Y-a}{\bar X}=\frac{68000-20000}{14}=3428.6\approx 3429
$$

> [!warning] AI-written answer, not official. Check before relying on it.
> **Answer: c. b = 3429.**

The other options do not come from the correct formula. Forgetting to subtract the intercept gives $68000/14=4857$, which is not an option either, so a single option matching the correct working is reassuring.

---

## Q4 — F test for equal variances

**Question.** Fertilizer X: 12 plots, $S=5.2$. Fertilizer Y: 11 plots, $S=2.5$. Find $F$ and decide at $\alpha=0.05$.

Put the larger variance on top ([[F Test for Equality of Variances]], [[Lec_07-Tests for Proportions and Variances]]):

$$
F=\frac{S_X^2}{S_Y^2}=\frac{5.2^2}{2.5^2}=\frac{27.04}{6.25}=4.33
$$

The degrees of freedom are $(12-1,\ 11-1)=(11,10)$. The upper 5% point of $F(11,10)$ is about 2.94 and the upper 2.5% point is about 3.66. Since $4.33$ exceeds both, $H_0$ (equal variances) is rejected, whichever tail convention is used.

> [!warning] AI-written answer, not official. Check before relying on it.
> **Answer: c. F = 4.33, $H_0$ rejected.**

- a. and d. (1.42) do not equal the variance ratio (4.33); they are not the ratio of standard deviations either (2.08), so they look like arbitrary distractors.
- b. gets $F$ right but fails to reject, which contradicts the critical values above.

---

## Q5 — Z test for a proportion

**Question.** Claim: 8% defective. Sample: $n=250$, 6% defective. Two-tailed at 5%.

Under $H_0$ the standard error uses the **claimed** proportion ([[Single Sample Z Test for Proportion]]):

$$
Z=\frac{\hat p-p_0}{\sqrt{\dfrac{p_0(1-p_0)}{n}}}=\frac{0.06-0.08}{\sqrt{\dfrac{0.08\cdot 0.92}{250}}}=\frac{-0.02}{0.01716}=-1.17
$$

The two-tailed critical values are $\pm 1.96$. Since $|-1.17|<1.96$, the result is **not significant**.

> [!warning] AI-written answer, not official. Check before relying on it.
> **Answer: c. Z = −1.17, not significant.**

Options a and b use $-2.17$, which does not follow from the data. Option d has the right $Z$ but the wrong decision ($|Z|<1.96$).

---

## Q6 — Unbiased estimator for $a$ (image question)

**Question.** The table (read from the rendered page) is: $X=1$ with probability $1-4a$, $X=2$ with probability $2a$, $X=3$ with probability $2a$. $\bar X$ is the average of 30 observations. Which is unbiased for $a$?

$$
E(X)=1(1-4a)+2(2a)+3(2a)=1-4a+4a+6a=1+6a
$$

$$
E(\bar X)=E(X)=1+6a
$$

Solve for $a$:

$$
a=\frac{E(\bar X)-1}{6}
$$

So $\hat a=\dfrac{\bar X-1}{6}$ has $E(\hat a)=\dfrac{1+6a-1}{6}=a$. See [[Unbiased Estimator]] and [[Lec_01-Point Estimation and Sampling Distributions]].

> [!warning] AI-written answer, not official. Check before relying on it.
> **Answer: a. $(\bar X-1)/6$.**

- b. $6\bar X$ has expectation $6+36a$.
- c. $(\bar X+2)/6$ has expectation $(3+6a)/6=0.5+a$.
- d. $1-6\bar X$ has expectation $-5-36a$.

> [!tip] Intuition
> Whenever $E(\bar X)$ is a linear function of the parameter, invert it. The sample size 30 does not matter for unbiasedness.

---

## Q7 — Single-sample Z test

**Question.** Claim 55 km per week. Sample: $n=81$, $\bar X=52$, $\sigma=9$.

$$
Z=\frac{\bar X-\mu_0}{\sigma/\sqrt n}=\frac{52-55}{9/9}=-3
$$

> [!warning] AI-written answer, not official. Check before relying on it.
> **Answer: a. Z = −3.**

$\sqrt{81}=9$ cancels the 9. Option d has the right size but the wrong sign, and the sign carries the direction of the difference.

---

## Q8 — Single-sample t test

**Question.** $n=10$, $\bar X=9.8$, $S=2.7$, $\mu_0=10$, $\alpha=0.05$, normal data, variance unknown. See [[Single Sample t Test]].

$$
t=\frac{\bar X-\mu_0}{S/\sqrt n}=\frac{9.8-10}{2.7/\sqrt{10}}=\frac{-0.2}{0.854}=-0.23
$$

The test is two-tailed (the question asks whether speed is "altered"). With 9 degrees of freedom the critical value is $\pm 2.26$. Since $|-0.23|<2.26$, the result is not significant.

> [!warning] AI-written answer, not official. Check before relying on it.
> **Answer: a. t = −0.23, not significant.**

Options c and d use $-2.23$, which does not follow from the data. Option b has the right $t$ but the wrong decision ($|t|<2.26$).

---

## Q9 — Confidence interval for a proportion

**Question.** $n=120$, $\hat p=70/120=0.583$. Give the 95% interval. See [[Confidence Interval]] and [[Lec_08-Confidence Intervals]].

$$
\hat p\pm 1.96\sqrt{\frac{\hat p(1-\hat p)}{n}}=0.583\pm 1.96\sqrt{\frac{0.583\cdot 0.417}{120}}=0.583\pm 1.96(0.0450)
$$

$$
0.583\pm 0.088\ \Rightarrow\ 0.50\le p\le 0.67
$$

> [!warning] AI-written answer, not official. Check before relying on it.
> **Answer: d. $0.50\le p\le 0.67$.**

- a. (width 0.48) is far too wide for $n=120$.
- b. (width 0.06) is far too narrow: it would need a much larger $n$.
- c. (width 0.32) is too wide: the margin would be about 0.16, not 0.088.

---

## Q10 — Power of a Z test

**Question.** $H_0:\mu=30$, $n=49$, $\sigma=4$, $\alpha=0.05$. True mean $31.6$. Find the power. See [[Statistical Power]] and [[Lec_06-Two Sample Tests, Error Types and Power]].

The standard error is $4/\sqrt{49}=4/7=0.571$. The test is two-sided in the question (no direction is stated). The upper cutoff is

$$
\bar X_{crit}=30+1.96\cdot 0.571=31.12
$$

Power is the probability that $\bar X$ lands beyond this cutoff when the true mean is 31.6:

$$
1-\beta=P\!\left(Z>\frac{31.12-31.6}{0.571}\right)=P(Z>-0.84)=0.80
$$

The lower rejection region adds less than $10^{-6}$, so it is ignored.

![[PP06_q10_power_mu31_6.png|640]]

The red area to the right of the dashed cutoff is the power, 0.80.

> [!warning] AI-written answer, not official. Check before relying on it.
> **Answer: d. $1-\beta=0.80$.**

> [!warning] One-sided reading gives the same option
> With a one-sided cutoff of 1.645 the cutoff is $30+1.645(0.571)=30.94$ and the power is $P(Z>-1.16)=0.88$, which matches no option. The two-sided reading above matches option d, so it is the one used.

---

## Q11 — Unbiased estimator for $\mu$ (image question)

**Question.** $E(\hat\theta)=2\mu+4$ (read from the rendered page). Which is unbiased for $\mu$?

Solve for $\mu$:

$$
\mu=\frac{E(\hat\theta)-4}{2}
$$

So $\dfrac{\hat\theta-4}{2}$ has expectation $\dfrac{2\mu+4-4}{2}=\mu$.

> [!warning] AI-written answer, not official. Check before relying on it.
> **Answer: d. $(\hat\theta-4)/2$.**

- a. $(\hat\theta+4)/2$ has expectation $\mu+4$.
- b. $2\hat\theta-4$ has expectation $4\mu+4$.
- c. $2\hat\theta+4$ has expectation $4\mu+12$.

---

## Q12 — Chi-squared test of independence

**Question.** Remote: 28 pet, 32 no pet. In-office: 30 pet, 30 no pet. $\alpha=0.05$. See [[Chi-Squared Test for Independence]] and [[Lec_09-Chi-Squared Tests for Goodness of Fit and Independence]].

Row totals are 60 and 60; column totals are 58 and 62; $N=120$. Expected counts are (row total $\times$ column total) $/\,N$:

| | Own a pet | No pet |
|---|---|---|
| Remote work | $60\cdot 58/120=29$ | $60\cdot 62/120=31$ |
| In-office | $29$ | $31$ |

$$
\chi^2=\sum\frac{(O-E)^2}{E}=\frac{1}{29}+\frac{1}{31}+\frac{1}{29}+\frac{1}{31}=0.1335\approx 0.13
$$

The table is $2\times 2$, so $df=(2-1)(2-1)=1$ and the critical value is $3.84$. Since $0.13<3.84$, do not reject independence.

> [!warning] AI-written answer, not official. Check before relying on it.
> **Answer: b. $\chi^2=0.13$, did not reject $H_0$.**

Options c and d (5.13) overstate the statistic; with 5.13 the null would be rejected.

---

## Q13 — Variance of a sample average

**Question.** Population variance 400, samples of 16 observations.

$$
Var(\bar X)=\frac{\sigma^2}{n}=\frac{400}{16}=25
$$

See [[Sampling Distribution of the Average]]. Option b (40) is $400/10$ and option c (100) is $400/4=\sigma^2/\sqrt n$, the standard-deviation formula applied to the variance.

> [!warning] AI-written answer, not official. Check before relying on it.
> **Answer: d. 25.**

---

## Q14 — Can a Z test or a t test be used?

**Question.** Two independent samples: 12 from A, 10 from B. Both populations are **not** normal, but both variances are known ($\sigma^2=4$). Can the researcher use a two-sample Z test, and a two-sample t test?

The two tests need different things ([[Lec_06-Two Sample Tests, Error Types and Power]]):

- **Two samples Z test**: known variances **and** normal averages under $H_0$. The averages are normal if the populations are normal, or if the samples are large enough for the [[Central Limit Theorem]] (the lectures use about $n\ge 30$). Here $n=12$ and $n=10$ are small and the populations are not normal, so the averages are not normal. **Cannot.**
- **Two independent samples t test**: variance unknown and **normal populations**. The populations are not normal, and the variances are known anyway. **Cannot.**

> [!warning] AI-written answer, not official. Check before relying on it.
> **Answer: a. Cannot; cannot.**

> [!tip] Intuition
> Both tests lean on normality. Known variance fixes the spread but not the shape.

---

## Q15 — Two independent samples t test

**Question.** Yoga: $n=18$, mean 22, $S=4$. Control: $n=18$, mean 27, $S=5$. Does yoga reduce stress? $\alpha=0.05$. See [[Two Independent Samples t Test]] and [[Pooled Variance]].

$$
S_p^2=\frac{(n_X-1)S_X^2+(n_Y-1)S_Y^2}{n_X+n_Y-2}=\frac{17(16)+17(25)}{34}=20.5
$$

$$
t=\frac{\bar X-\bar Y}{\sqrt{S_p^2\left(\dfrac1{n_X}+\dfrac1{n_Y}\right)}}=\frac{22-27}{\sqrt{20.5\cdot\dfrac{2}{18}}}=\frac{-5}{1.509}=-3.31
$$

The question reports the size of the statistic as 3.31 (the sign depends on which group goes first). With $df=34$ the critical values are 1.69 (one-tailed) and 2.03 (two-tailed). $3.31$ beats both, so the result is **significant**.

> [!warning] AI-written answer, not official. Check before relying on it.
> **Answer: d. t = 3.31, significant.**

Options b and c (2.31) are not reachable from the data. Option a has the right size but the wrong decision.

---

## Q16 — Confidence interval for a mean

**Question.** $n=36$, $\bar X=42$, $S=8$, approximately normal. 95% interval for $\mu$. Variance unknown, so use $t$ with $df=35$ ($t_{0.975}=2.03$).

$$
\bar X\pm t\frac{S}{\sqrt n}=42\pm 2.03\cdot\frac{8}{6}=42\pm 2.70
$$

$$
39.3\le\mu\le 44.7
$$

> [!warning] AI-written answer, not official. Check before relying on it.
> **Answer: a. $39.3\le\mu\le 44.7$.**

- b. has a margin of 1.7, about one standard error (1.33), too narrow for 95%.
- c. has a margin of 3.9, too wide.
- d. has a margin of 7, close to $\pm S$ (8), far too wide: the margin is a multiple of the standard error $S/\sqrt n$, not of $S$.

---

## Q17 — Biased or unbiased, consistent or not (image question)

**Question.** $E(\hat\theta)=\theta/n$ and $Var(\hat\theta)=\theta/2$ (read from the rendered page).

- **Biased?** $E(\hat\theta)=\theta/n\ne\theta$ for $n>1$. Biased. (The bias vanishes as $n\to\infty$.)
- **Consistent?** The working test in [[Lec_01-Point Estimation and Sampling Distributions]] needs $Var(\hat\theta)\to 0$ as $n\to\infty$. Here the variance is $\theta/2$ for every $n$, so it does not shrink. In addition, the estimator is centred on $\theta/n\to 0$, not on $\theta$. Not consistent. See [[Consistent Estimator]].

> [!warning] AI-written answer, not official. Check before relying on it.
> **Answer: c. A biased; not consistent.**

---

## Q18 — Two-sample Z test for proportions

**Question.** Online: $n=120$, 72% passed. In-class: $n=150$, 65% passed. $H_0$: proportions equal; two-tailed at 5%. See [[Two Samples Z Test for Proportions]] and [[Pooled Proportion]].

Pool under $H_0$:

$$
\hat p=\frac{0.72(120)+0.65(150)}{270}=\frac{86.4+97.5}{270}=0.681
$$

$$
Z=\frac{0.72-0.65}{\sqrt{\hat p(1-\hat p)\left(\dfrac1{120}+\dfrac1{150}\right)}}=\frac{0.07}{\sqrt{0.681\cdot 0.319\cdot 0.01500}}=\frac{0.07}{0.0571}=1.23
$$

Since $1.23<1.96$, the result is not significant.

> [!warning] AI-written answer, not official. Check before relying on it.
> **Answer: b. Z = 1.23, not significant.**

Options a and d (2.23) do not follow from the data. Option c has the right $Z$ but the wrong decision ($|Z|<1.96$).

---

## Q19 — Maximum likelihood from a table (image question)

**Question.** The likelihood table (read from the rendered page):

| | $X=0$ | $X=1$ |
|---|---|---|
| $\theta=-1$ | 0.1 | 0.9 |
| $\theta=0$ | 0.8 | 0.2 |
| $\theta=1$ | 0.6 | 0.4 |

Options: a. $(-1,\ 1)$, b. $(1,\ -1)$, c. $(1,\ 0)$, d. $(0,\ 1)$, where each pair gives $\hat\theta$ for $X=0$ then $X=1$.

The [[Maximum Likelihood Estimator]] picks, for each observed $X$, the $\theta$ with the largest likelihood in that column ([[Lec_03-Maximum Likelihood Estimation]]):

- $X=0$: the largest value is $0.8$, at $\theta=0$.
- $X=1$: the largest value is $0.9$, at $\theta=-1$.

So the true MLE is $\hat\theta=0$ for $X=0$ and $\hat\theta=-1$ for $X=1$.

> [!warning] AI-written answer, not official. Check before relying on it.
> **No option matches exactly.** Option d is the only one with $\hat\theta=0$ for $X=0$, and option b is the only one with $\hat\theta=-1$ for $X=1$; each is half right. **Best guess: d**, because $0$ appears as an answer only there, which suggests the question intended the $X=0$ row to drive the key. The table or the options may contain a transcription error in the source. Treat this as unresolved.

---

## Q20 — Changing $\alpha$ in a chi-squared test

**Question.** A goodness-of-fit test at $\alpha=0.05$ ($df=5$) is switched to $\alpha=0.1$, all else equal, and $H_0$ is false. Effect on $\beta$ and $\alpha$?

Raising $\alpha$ widens the rejection region, so the test rejects more often. Rejecting more often means $\alpha$ is **higher** and, because a false $H_0$ is then rejected more often, $\beta$ is **lower**. See [[Type I Error]], [[Type II Error]] and [[Chi-Squared Test for Goodness of Fit]].

![[PP06_q20_alpha_beta_tradeoff.png|640]]

The schematic shows the same effect: the dashed cutoff moves left when $\alpha$ rises, so the blue Type I area grows and the red Type II area shrinks. The effect size in the picture is made up for illustration.

> [!warning] AI-written answer, not official. Check before relying on it.
> **Answer: d. Lower $\beta$; higher $\alpha$.**

---

## Recap table (all AI-written, none official)

| Q | Topic | Tool | Answer |
|---|---|---|---|
| 1 | Two means, known $\sigma$ | Two samples Z | b (1.85) |
| 2 | Raising power | Power factors | b |
| 3 | Regression slope | $\bar Y=a+b\bar X$ | c (3429) |
| 4 | Equal variances | F test | c (4.33, reject) |
| 5 | Proportion | Z for proportion | c (−1.17, not sig.) |
| 6 | Unbiased for $a$ | Invert $E(\bar X)$ | a |
| 7 | Mean, known $\sigma$ | Single sample Z | a (−3) |
| 8 | Mean, unknown $\sigma$ | Single sample t | a (−0.23, not sig.) |
| 9 | CI for proportion | $\hat p\pm 1.96\,SE$ | d (0.50 to 0.67) |
| 10 | Power | Cutoff, then $P(Z>-0.84)$ | d (0.80) |
| 11 | Unbiased for $\mu$ | Invert $E(\hat\theta)$ | d |
| 12 | Independence | Chi-squared, $df=1$ | b (0.13, not rejected) |
| 13 | Variance of $\bar X$ | $\sigma^2/n$ | d (25) |
| 14 | Which test | Normality needed | a (cannot, cannot) |
| 15 | Two means, unknown $\sigma$ | Pooled t | d (3.31, sig.) |
| 16 | CI for a mean | t interval | a (39.3 to 44.7) |
| 17 | Bias, consistency | Variance does not shrink | c |
| 18 | Two proportions | Pooled Z | b (1.23, not sig.) |
| 19 | MLE from a table | Column maximum | none matches; d best guess |
| 20 | $\alpha$ versus $\beta$ | Trade-off | d |

## Related Notes

[[Statistics B]] · [[Lec_01-Point Estimation and Sampling Distributions]] · [[Lec_03-Maximum Likelihood Estimation]] · [[Lec_05-Z Tests, t Tests and Two-Sample Tests]] · [[Lec_06-Two Sample Tests, Error Types and Power]] · [[Lec_07-Tests for Proportions and Variances]] · [[Lec_08-Confidence Intervals]] · [[Lec_09-Chi-Squared Tests for Goodness of Fit and Independence]] · [[Lec_11-Joint Distributions, Correlation and Linear Regression]] · [[Lec_12-Exam Review 1]] · [[Lec_13-Exam Review Session 2]]
