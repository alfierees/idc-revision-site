---
title: "Lec 06: Two Sample Tests, Error Types and Power"
semester: 2
year: 1
course: "Statistics B"
lecture: 6
tags:
  - statistics-b
  - hypothesis-testing
  - two-sample-test
  - t-test
  - type-i-error
  - type-ii-error
  - statistical-power
  - effect-size
subject: statistics-b
in_scope: true
---

# Lec 06: Two Sample Tests, Error Types and Power

> Part of: [[Statistics B]]
> Key concepts: [[Two Samples Z Test]], [[Two Independent Samples t Test]], [[Pooled Variance]], [[Type I Error]], [[Type II Error]], [[Statistical Power]], [[Cohen's d]], [[Significance Level]], [[Critical Value]]

This is the source deck `Class 06`. It reviews the single sample tests, builds the **two independent samples t test** from scratch, solves Exercise 5 question 3, and then steps back to ask what can go wrong in any test: **Type I and Type II errors, power and effect size**. Roughly 45 of the 181 slides repeat Lec_05 or Lec_04 material and get only a recap here.

> [!info] Recap (slides 3 to 12, repeated from Lec_04 and Lec_05)
> - **Procedure of every test:** pose a yes/no question about a parameter, define $H_1$ and the complementary $H_0$, choose a test and $\alpha$, collect data, and reject $H_0$ if the data would be unlikely (probability below $\alpha$) under $H_0$.
> - **Single sample Z test:** variance known, average is normal under $H_0$ (e.g. $n \geq 30$). $Z_{\bar X} = \dfrac{\bar X - \mu_{H_0}}{\sigma_X/\sqrt{n}} \sim N(0,1)$.
> - **Single sample t test:** variance unknown, $X$ normal. $t_{\bar X} = \dfrac{\bar X - \mu_{H_0}}{S_X/\sqrt{n}} \sim t_{n-1}$.
> - **Two samples Z test:** known variances, averages normal under $H_0$. $Z_{\bar X-\bar Y} = \dfrac{(\bar X-\bar Y)-(\mu_X-\mu_Y)_{H_0}}{\sqrt{\sigma_X^2/n_X+\sigma_Y^2/n_Y}} \sim N(0,1)$.

## 1. Which test fits?

The deck keeps returning to one summary table. Two questions pick the test: **what is the question about** (one population mean, or a difference between two population means) and **is the population variance known**.

| Question type | Variance known | Variance unknown |
|---|---|---|
| Expected value of a single population | Single sample Z test, $Z_{\bar X}\sim N(0,1)$ | Single sample t test, $t_{\bar X}\sim t_{n-1}$ |
| Difference in expected values between two populations | Two samples Z test, $Z_{\bar X-\bar Y}\sim N(0,1)$ | Two independent samples t test, $t_{\bar X-\bar Y}\sim t_{n_X+n_Y-2}$ |

> [!tip] Reading the question
> "Is there a difference between group X and group Y" means the **two sample** row. "The standard deviation is known from previous data" means the **Z** column. If only sample standard deviations $S_X, S_Y$ are given, you are in the **t** column.

## 2. Two independent samples t test

### 2.1 When to use it and what it assumes

It answers questions about the **difference in expected value between two populations** when the population variances are unknown. Requirements:

1. Both populations are normal, $X, Y \sim N$.
2. All observations are independent (i.i.d.), $X_1,\dots,X_{n_X},Y_1,\dots,Y_{n_Y}$.
3. **Equal variances**, $\sigma_X^2=\sigma_Y^2$.

The slides footnote that a variant of the test exists that does not need equal variances; it is not developed in this lecture.

### 2.2 Building the test statistic (slides 14 to 22)

> [!note] Reconstructed from the slides
> The deck builds the statistic in steps (the argument is on the slides, the wording here is mine).

**Target parameter:** $\mu_X-\mu_Y$. **Estimator:** $\bar X-\bar Y$. Its distribution, using the equal variance assumption $\sigma_X^2=\sigma_Y^2=\sigma^2$:

$$
\bar X-\bar Y \sim N\left(\mu_X-\mu_Y,\ \sigma^2\left(\frac{1}{n_X}+\frac{1}{n_Y}\right)\right)
$$

Problem: $\sigma^2$ is unknown. We have **two independent estimators of the same variance**, $S_X^2$ and $S_Y^2$. Combine them as a weighted average, each weighted by its degrees of freedom. This is the **pooled variance**:

$$
S_{pooled}^2=\frac{(n_X-1)S_X^2+(n_Y-1)S_Y^2}{n_X+n_Y-2}
$$

Standardising with $S^2_{pooled}$ in place of $\sigma^2$ gives the statistic. Just as in the single sample case, dividing a normal quantity (the numerator, with the constants removed) by an independent chi-squared based estimate gives a t distribution. The slides write $S^2_{pooled}\sim\chi^2_{n_X+n_Y-2}$ (up to the usual scaling) and conclude:

$$
t_{\bar X-\bar Y}=\frac{(\bar X-\bar Y)-(\mu_X-\mu_Y)_{H_0}}{\sqrt{S_{pooled}^2\left(\frac{1}{n_X}+\frac{1}{n_Y}\right)}}\sim t_{n_X+n_Y-2}
$$

> [!info] Degrees of freedom
> $df=n_X+n_Y-2$. You lose one degree of freedom for each sample mean you estimated.

### 2.3 Procedure (slides 23, 28 and following)

1. Verify the populations are normal and the variances are equal.
2. Define $H_1$ and the complementary $H_0$; choose $\alpha$.
3. Calculate $t_{\bar X-\bar Y}$ (and $S^2_{pooled}$ first).
4. Compare with $t_{n_X+n_Y-2}$: for a right-tailed test, reject $H_0$ if $t_{\bar X-\bar Y}>t_{critical}$ for the chosen $\alpha$.

### 2.4 Worked example: pizza and programmers (slides 24 to 47)

A manager randomly assigns 30 programmers to a **pizza group** and 30 to a **control group** (normal lunch) and counts lines of code written after lunch. $X$ is lines of code in the pizza group, $Y$ in the control group. Assume normality and equal variances.

| Group | $n$ | Mean | Sample SD |
|---|---|---|---|
| Pizza ($X$) | 30 | 27 | 10 |
| Control ($Y$) | 30 | 24 | 8 |

**Hypotheses.** The manager asks whether pizza *improves* productivity, so it is directional:

$$
H_1:\ \mu_X-\mu_Y>0 \qquad H_0:\ \mu_X-\mu_Y\leq 0 \qquad \alpha=0.05
$$

**Pooled variance.**

$$
S_{pooled}^2=\frac{29\cdot 10^2+29\cdot 8^2}{30+30-2}=\frac{2900+1856}{58}=82
$$

**Test statistic.**

$$
t_{\bar X-\bar Y}=\frac{27-24-0}{\sqrt{82\left(\frac{1}{30}+\frac{1}{30}\right)}}=\frac{3}{2.338}=1.283
$$

**Critical value.** $df=30+30-2=58$, one-tailed at $\alpha=0.05$. The slide reads $t_{crit}=1.676$.

> [!warning] Table row used on the slide
> The slide's 1.676 is the table value for 50 degrees of freedom, the nearest row below 58 on a printed t table. The exact value for $df=58$ is about 1.672. The conclusion is unaffected either way.

**Conclusion.** $1.283<1.676$, so $H_0$ is **not rejected**: no evidence that pizza improves programming.

> [!warning] Common mistake
> Writing $H_1:\mu_X-\mu_Y>0$ and forgetting that $H_0$ is its **complement** ($\leq 0$), not $=0$. The critical value still comes from the boundary case $\mu_X-\mu_Y=0$.

## 3. Exercise 5 question 3 (slides 49 to 72)

**Setup.** Tanya studies the same question as Timmothy in Question 2: does telemarketers' average monthly call length (minutes) depend on gender? She uses his data but does **not know the population standard deviations**, assumes they are equal, and assumes normality because the observations are monthly averages. (In Question 2 Timmothy knew the standard deviations, 2.5 and 4, and ran a two samples Z test; he found $Z=1.14$, $p=0.2542$, and did not reject.)

| Male ($X$) | 8, 9, 9, 11, 11, 11, 13, 14, 14, 15 |
|---|---|
| Female ($Y$) | 5, 5, 7, 7, 7, 10, 10, 15, 16, 16 |

Summary statistics: $\bar X=11.5$, $\bar Y=9.8$, $S_X=2.42$, $S_Y=4.39$, $n_X=n_Y=10$.

**Which test?** Difference in two means, variances unknown but assumed equal, so the **two independent samples t test**.

**Hypotheses.** Non-directional, since the question is "depends on gender":

$$
H_0:\ \mu_F-\mu_M=0 \qquad H_1:\ \mu_F-\mu_M\neq 0 \qquad \alpha=0.05
$$

**Pooled variance.**

$$
S_{pooled}^2=\frac{(10-1)\cdot 2.42^2+(10-1)\cdot 4.39^2}{10+10-2}=12.56
$$

**Test statistic.**

$$
t_{\bar X-\bar Y}=\frac{11.5-9.8-0}{\sqrt{12.56\left(\frac{1}{10}+\frac{1}{10}\right)}}=1.07
$$

**Critical value.** Because the hypothesis is non-directional, $\alpha$ is split between two tails: $\alpha/2=0.05/2=0.025$. With $df=10+10-2=18$, the table gives $t_{crit}=2.101$ (slides 68 to 71 are figure-only slides showing exactly this lookup).

**Conclusion.** $|1.07|<2.101$, so **do not reject** $H_0$. Tanya reaches the **same conclusion as Timmothy**: no statistical evidence that call length depends on gender.

> [!tip] Z versus t on the same data
> Using the assumed known SDs (Timmothy) gave $Z=1.14$; estimating the variance from the data (Tanya) gave $t=1.07$ and a heavier-tailed reference distribution. Not knowing the variance costs you a little evidence, and you pay for it with the larger critical value.

## 4. Possible outcomes of a hypothesis test

A test has two possible outcomes: **reject $H_0$** or **do not reject $H_0$**. The world has two possible states: **$H_0$ is true** or **$H_1$ is true**. Crossing them gives four cases.

|  | Reject $H_0$ | Do not reject $H_0$ |
|---|---|---|
| **$H_0$ is true** | **Type I error**, probability $\alpha$ | Right decision, probability $1-\alpha$ |
| **$H_1$ is true** | Right decision, probability $1-\beta$ (**power**) | **Type II error**, probability $\beta$ |

- **Type I error:** rejecting $H_0$ when it is actually true (a false positive). Its probability is exactly the significance level, $\alpha$: this is the area of the $H_0$ distribution inside the critical region.
- **Type II error:** failing to reject $H_0$ when $H_1$ is true (a false negative). Its probability is $\beta$: the area of the $H_1$ distribution on the "do not reject" side of the critical value.
- **Power**, $1-\beta$: the probability of **correctly rejecting** $H_0$ given that it is false. It is the area of the $H_1$ distribution **beyond the critical value**.

![[Lec06_error_regions.png]]

*Theory diagram. The blue curve is the sampling distribution of $\bar X$ if $H_0$ is true, the red one if $H_1$ is true. The dashed line is the critical value. Blue tail = $\alpha$, orange = $\beta$, pink = power.*

> [!info] Only one distribution exists
> The slides stress that in reality only **one** of the two distributions is the real one. Hypothesis testing is a procedure for deciding which distribution the sample came from. $\alpha$ and $\beta$ are statements about what the procedure would do under each possible world.

> [!warning] Common mistakes
> - $\alpha$ is **not** "the probability that $H_0$ is true". It is the probability of rejecting **given** that $H_0$ is true.
> - $\beta$ can only be computed once you commit to a specific value $\mu_{H_1}$, because $H_1$ is a whole range of values.

### 4.1 The trade-off between the two errors

Ideally we would want minimal $\alpha$ **and** minimal $\beta$ (maximal power). We cannot have both from the same data: moving the critical value to shrink $\alpha$ (to the right in a right-tailed test) necessarily grows $\beta$, and vice versa.

## 5. Statistical power

### 5.1 Calculating power (procedure from slide 124)

1. Transform the critical value ($Z_{crit}$ or $t_{crit}$) into a value of $\bar X$ using the **$H_0$ distribution**: $\bar X_{crit}=Z_{crit}\cdot\dfrac{\sigma}{\sqrt n}+\mu_{H_0}$.
2. Find $p(\bar X>\bar X_{crit})$ using the **$H_1$ distribution**: $Z_{\bar X_{crit}}=\dfrac{\bar X_{crit}-\mu_{H_1}}{\sigma/\sqrt n}$, then $1-\beta=p(Z>Z_{\bar X_{crit}})$.

### 5.2 Example: one researcher (slides 101 to 110)

A Z test with $H_0:\mu\leq 10$, $\sigma=4$, $n=49$, assuming the true mean is $\mu_{H_1}=11$, at $Z_{crit}=1.65$ (that is $\alpha=0.05$, one-tailed).

$$
\bar X_{crit}=1.65\cdot\frac{4}{\sqrt{49}}+10=10.94
$$

Under $H_1$, $\bar X\sim N\left(11,\frac{4^2}{49}\right)$, so

$$
Z=\frac{10.94-11}{4/7}=-0.105,\qquad 1-\beta=p(Z>-0.105)=1-0.46=0.54
$$

There is a **54% chance of correctly rejecting $H_0$**.

### 5.3 What affects power?

**Significance level $\alpha$ (a controllable factor).** Two statisticians test the same 36 observations with $H_0:\mu\leq 12$, $\sigma=6$, true mean $\mu_{H_1}=14$. Here $\sigma/\sqrt n=6/6=1$.

| | $\alpha$ | $Z_{crit}$ | $\bar X_{crit}$ | $Z_{\bar X_{crit}}$ | Power $1-\beta$ |
|---|---|---|---|---|---|
| A | 0.05 | 1.65 | $1.65\cdot 1+12=13.65$ | $(13.65-14)/1=-0.35$ | $p(Z>-0.35)=0.64$ |
| B | 0.01 | 2.33 | $2.33\cdot 1+12=14.33$ | $(14.33-14)/1=0.33$ | $p(Z>0.33)=0.37$ |

![[Lec06_alpha_power_tradeoff.png]]

*Theory diagram. Same data, stricter $\alpha$ pushes the critical value right, so $\beta$ grows and power falls.*

**Hypothesis type (controllable).** A **directional** hypothesis puts all of $\alpha$ in one tail; a non-directional one splits it into $\alpha/2$ in each tail, so its critical values are further out. A directional hypothesis therefore **increases power**, but **only if the direction is correct**. If the true effect is in the other direction, the one-sided test is pointed the wrong way and cannot detect it.

**Sample size $n$ (controllable).** The standard error is $\sigma_{\bar X}=\sigma/\sqrt n$, so a larger $n$ makes both distributions narrower and they **overlap less**. Same example, $\alpha=0.05$, but now statistician B has $n=100$ and A has $n=36$:

- B: $\bar X_{crit}=1.65\cdot\dfrac{6}{\sqrt{100}}+12=12.99$
- $Z_{\bar X_{crit}}=\dfrac{12.99-14}{6/10}=-1.68$
- $1-\beta=p(Z>-1.68)=0.95$, against A's 0.64.

![[Lec06_sample_size_power.png]]

*Theory diagram. Same $\alpha$ and same true mean; more data separates the two distributions.*

The catch: increasing $n$ increases power directly, but also the **cost of gathering data**.

> [!info] Summary of controllable factors
> $\alpha$ level (lower $\alpha$ gives lower power), hypothesis type (directional gives higher power if the direction is right), sample size (larger $n$ gives higher power).

### 5.4 Uncontrollable factors and effect size

Two things about the real world also drive power: the **difference between $\mu_{H_1}$ and $\mu_{H_0}$**, and the **population variance** $\sigma^2$. Both are captured by **Cohen's $d$**: the difference between the actual expected value and the null expected value, measured in **population standard deviation units**.

$$
d=\frac{\mu_{H_1}-\mu_{H_0}}{\sigma_X}
$$

Power rises when the difference is larger or when $\sigma$ is smaller: **larger effects are easier to detect**. For the example above, $d=\dfrac{14-12}{6}=0.33$.

The general form is $d=\Delta\mu/\sigma$, with the standard deviation matching the test:

| Test | Cohen's $d$ |
|---|---|
| Single sample Z test | $d=\dfrac{\mu_{H_1}-\mu_{H_0}}{\sigma_X}$ |
| Single sample t test | $d=\dfrac{\mu_{H_1}-\mu_{H_0}}{S_X}$ |
| Two samples Z test | $d=\dfrac{\mu_X-\mu_Y}{\sigma}$ |
| Two independent samples t test | $d=\dfrac{\mu_X-\mu_Y}{S_{pooled}}$ |

**Benchmarks** (slide 176, with the lecture's examples):

| $d$ | Size | Example on the slide |
|---|---|---|
| about 0.2 | small | workplace diversity training on attitude toward out-groups, $d=0.23$ |
| about 0.5 | medium | task-level performance feedback on worker performance, $d=0.4$ |
| about 0.8 | large | monetary performance incentives on worker performance, $d=0.79$ |

For scale, slide 177 notes that the height difference between genders is about $d\approx 1.7$, a very large effect.

## Summary

- **Test choice:** one mean vs a difference of two means, and variance known (Z) vs unknown (t). Unknown but equal variances in two samples gives the **two independent samples t test** with $df=n_X+n_Y-2$ and the **pooled variance**.
- **Pizza example:** $t=1.283<1.676$, do not reject.
- **Exercise 5 Q3:** $S^2_{pooled}=12.56$, $t=1.07<2.101$ ($df=18$, $\alpha/2=0.025$), do not reject; same conclusion as Timmothy's Z test.
- **Four outcomes:** Type I error ($\alpha$), Type II error ($\beta$), and two right decisions ($1-\alpha$, and power $1-\beta$).
- **Power** is the area of the $H_1$ distribution beyond the critical value. It is raised by a larger $\alpha$, a correct directional hypothesis, larger $n$, and a larger effect size $d$; it is lowered by large variance.
- **Next week:** hypothesis tests for proportions.

## Related notes

- [[Statistics B]]
- Earlier lectures on the single sample Z and t tests: Lec_04 and Lec_05 (recapped above)
- Problem set: Exercise 5 (the source of question 3)
