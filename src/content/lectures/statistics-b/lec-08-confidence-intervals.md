---
title: "Lec 08 - Confidence Intervals"
semester: 2
year: 1
course: "Statistics B"
lecture: 8
tags:
  - statistics-b
  - confidence-interval
  - sampling-distribution
  - standard-error
  - critical-value
  - t-distribution
  - hypothesis-testing
subject: statistics-b
in_scope: true
---

# Lec 08: Confidence Intervals

> Part of: [[Statistics B]]
> Key concepts: [[Confidence Interval]], [[Confidence Level]], [[Sampling Distribution of the Average]], [[Standard Error]], [[Critical Value]], [[Pooled Variance]], [[t Distribution]], [[Single Sample Z Test]], [[Two Independent Samples t Test]]

> [!info] Source
> Class 8 (124 slides, animation builds collapsed). Almost every equation on the slides is an image, so the formulas below were read from those images and cross-checked numerically. Slides 72 to 80 repeat the test-statistic boxes from [[Lec_07-Tests for Proportions and Variances]], so they appear here only as a lookup table.

## 1. Why a range and not a single number

**Point estimation** is the procedure from earlier lectures: the parameter is unknown (for example $\mu$), so we gather a random sample, compute a good estimator (for example $\bar{X}$) and use its value as our best guess.

> [!example] Allowance example
> To price a new card-collecting game, we ask 100 grade-schoolers their weekly allowance and find $\bar{X} = 24.7$ shekels per week. What is the probability that $\mu = 24.7$? Essentially zero, $p \approx 0$: $\bar{X}$ is a continuous random variable, so landing exactly on $\mu$ has no probability mass. The instruction "come back with numbers you are confident in" calls for a range.

A [[Confidence Interval]] is an estimated range in which a parameter lies, with a stated level of confidence. The slide's illustration: "with 95% confidence, the expected value of a grade-schooler's allowance is between 20.7 and 28.7". It **combines point estimation with hypothesis-testing logic**: the same sampling distribution drives both.

## 2. Reminders: sampling distribution and standard error

- An estimator is a sample statistic, so it is a **random variable** with its own distribution, the [[Sampling Distribution of the Average]] in the case of $\bar{X}$.
- For $n \ge 30$ (or a normal population):

$$
\bar{X} \sim N\left(\mu, \frac{\sigma^2}{n}\right)
$$

- The [[Standard Error]] is the standard deviation of a statistic's sampling distribution. For the average:

$$
SD(\bar{X}) = \frac{\sigma}{\sqrt{n}}
$$

## 3. Where the interval comes from

The lecturer builds the interval in four moves on the sampling distribution.

**Step 1: locate $\bar{X}$ relative to $\mu$.** The mean of the distribution is $\mu$. A value one standard error above it is $\bar{X} = \mu + \sigma/\sqrt{n}$, two standard errors above is $\mu + 2\sigma/\sqrt{n}$, and so on.

**Step 2: find the central 95% area.** From the standard normal table, the middle 95% lies between $-1.96$ and $+1.96$:

$$
P(-1.96 \le Z_{\bar{X}} \le 1.96) = 0.95
$$

Translating back to the units of $\bar{X}$:

$$
P\left(\mu - 1.96 \cdot \frac{\sigma}{\sqrt{n}} \le \bar{X} \le \mu + 1.96 \cdot \frac{\sigma}{\sqrt{n}}\right) = 0.95
$$

![[Lec08_sampling_distribution_95.png]]

**Step 3: apply it to a concrete sample.** Suppose $\sigma = 3$ and a sample of $n = 49$ gives $\bar{X} = 5$. Then

$$
1.96 \cdot \frac{3}{\sqrt{49}} = 1.96 \cdot \frac{3}{7} = 0.84
$$

so $P(\mu - 0.84 \le \bar{X} \le \mu + 0.84) = 0.95$: with probability 95% the sample average lands within 0.84 of $\mu$.

**Step 4: flip the logic.** If our $\bar{X} = 5$ came from the green (central 95%) area, then $\mu$ is at most 0.84 away from 5. So **with 95% confidence** $5 - 0.84 \le \mu \le 5 + 0.84$, i.e. the 95% confidence interval for $\mu$ is $[4.16, 5.84]$.

![[Lec08_ci_around_sample_mean.png]]

> [!tip] The distance is symmetric
> "$\bar{X}$ is within 0.84 of $\mu$" is the same statement as "$\mu$ is within 0.84 of $\bar{X}$". That symmetry is the whole trick: a statement about where the sample mean falls becomes a statement about where the unknown $\mu$ sits.

## 4. General form

For any situation where we already built a hypothesis test, the matching interval is:

$$
\boxed{\hat{\theta} - \text{critical value}_{(\alpha/2)} \cdot S.E. \;\le\; \theta \;\le\; \hat{\theta} + \text{critical value}_{(\alpha/2)} \cdot S.E.}
$$

where $\hat{\theta}$ is the point estimate. To build the interval, identify two things in the hypothesis-test procedure:

1. the [[Standard Error]] (the denominator of the test statistic),
2. the [[Critical Value]] (the cut-off in the distribution the statistic follows under $H_0$, with $\alpha/2$ in each tail).

The probability mass $1-\alpha$ sits in the middle and $\alpha/2$ in each tail.

### Known variance (single mean)

Assumptions: $X \sim N(\cdot)$ or $n \ge 30$, and $\sigma_X$ known. The interval at confidence level $1-\alpha$ is

$$
\bar{X} - Z_{1-\frac{\alpha}{2}} \cdot \frac{\sigma}{\sqrt{n}} \le \mu \le \bar{X} + Z_{1-\frac{\alpha}{2}} \cdot \frac{\sigma}{\sqrt{n}}
$$

> [!example] IQ of economics students (95%)
> IQ is normal with $\sigma = 15$; a sample of $n = 30$ economics students has $\bar{X} = 110$. Find the 95% interval for $\mu$.
> - $\alpha = 1 - 0.95 = 5\%$, so look up $Z_{1-0.05/2} = Z_{0.975} = 1.96$.
> - Interval: $110 \pm 1.96 \cdot 15/\sqrt{30}$, giving $104.63 \le \mu \le 115.37$.

> [!example] Same data at 90%
> $\alpha = 10\%$, so $Z_{0.95} = 1.65$ (the slides round; the exact value is about 1.645). Interval: $110 \pm 1.65 \cdot 15/\sqrt{30}$, giving $105.48 \le \mu \le 114.52$.

![[Lec08_width_90_vs_95.png]]

## 5. What sets the width of the interval

The half-width is critical value times standard error, so three things move it.

| Factor | Change | Effect on width | Why |
| --- | --- | --- | --- |
| Confidence level $1-\alpha$ | higher confidence (smaller $\alpha$) | wider | larger critical value (95%: 1.96, 90%: 1.65) |
| Sample size $n$ | larger $n$ | narrower | $\sigma/\sqrt{n}$ shrinks |
| Population variance $\sigma^2$ | larger $\sigma^2$ | wider | larger standard error |

> [!warning] Common mistake
> More confidence is not free: you buy it with a wider, less informative interval. Only a bigger sample (or less noisy data) narrows the interval at a fixed confidence level.

## 6. Standard errors and critical values by question type

Slides 72 to 80 show the test boxes from earlier lectures and ask where the standard error and the critical value sit in each. Reading them off:

| Question type | Matching test | Standard error | Critical value (two-sided) |
| --- | --- | --- | --- |
| Difference in means, known variance | two samples Z test | $\sqrt{\sigma_X^2/n_X + \sigma_Y^2/n_Y}$ | $Z_{1-\alpha/2}$ |
| Difference in means, unknown (equal) variance | two independent samples t test | $\sqrt{S^2_{pooled}\,(1/n_X + 1/n_Y)}$ | $t^{\alpha/2}_{n_X+n_Y-2}$ |
| Mean of one population, known variance | single sample Z test | $\sigma_X/\sqrt{n}$ | $Z_{1-\alpha/2}$ |
| Mean of one population, unknown variance | single sample t test | $S_X/\sqrt{n}$ | $t^{\alpha/2}_{n-1}$ |
| Difference in proportions | two samples Z test for proportions | see note below | $Z_{1-\alpha/2}$ |
| Single proportion | single sample Z test for proportion | $\sqrt{\hat{p}(1-\hat{p})/n}$ | $Z_{1-\alpha/2}$ |

> [!warning] Proportions: test versus interval
> The two-proportion **test** uses the pooled $\hat{p}$ in its denominator because it assumes $H_0: p_1 = p_2$. The two-proportion **interval** (summary slide 3) uses the **unpooled** standard error $\sqrt{\hat{p}_1(1-\hat{p}_1)/n_1 + \hat{p}_2(1-\hat{p}_2)/n_2}$, since the interval does not assume the proportions are equal. Likewise, a single-proportion test puts $p_{H_0}$ in the denominator while the interval plugs in $\hat{p}$.

The pooled variance used in the equal-variance t case is:

$$
S^2_{pooled} = \frac{(n_X - 1) S_X^2 + (n_Y - 1) S_Y^2}{n_X + n_Y - 2}
$$

## 7. Worked example: difference in means, unknown variance

Two independent random samples: sample 1 has $n_1 = 50$, $\bar{X}_1 = 80$, $S_1 = 15$; sample 2 has $n_2 = 50$, $\bar{X}_2 = 70$, $S_2 = 13$. Assume normality and $\sigma_1 = \sigma_2$. Build a 95% interval for $\mu_1 - \mu_2$.

1. **Matching test:** two independent samples t test, with $t \sim t_{n_X+n_Y-2}$ under $H_0$.
2. **Pooled variance:**

$$
S^2_{pooled} = \frac{(50-1) \cdot 15^2 + (50-1) \cdot 13^2}{50 + 50 - 2} = 197
$$

3. **Standard error:**

$$
S.E. = \sqrt{197 \cdot \left(\frac{1}{50} + \frac{1}{50}\right)} = 2.81
$$

4. **Critical value:** $\alpha/2 = 0.025$ and $df = 50 + 50 - 2 = 98$. From the t table, $t^{0.025}_{98} = 1.99$.
5. **Point estimate:** $\bar{X}_1 - \bar{X}_2 = 80 - 70 = 10$.
6. **Interval:**

$$
10 - 1.99 \cdot 2.81 \le \mu_1 - \mu_2 \le 10 + 1.99 \cdot 2.81 \;\;\Rightarrow\;\; 4.41 \le \mu_1 - \mu_2 \le 15.59
$$

> [!note] Reading the t table (slides 95 and 96)
> Those slides show the t table as a picture. The method on the slide: write $\alpha/2 = 0.025$ for the tail column, find the row for $df = 98$, and read $t^{0.025}_{98} = 1.99$. The table image itself was not readable in this session, so only the value stated on the slide is used here.

> [!tip] The t distribution
> When $\sigma$ is estimated by $S$, the critical value comes from a [[t Distribution]] with $n-1$ degrees of freedom (single sample) instead of the standard normal. The only changes to the known-variance formula are $\sigma \to S$ and $Z \to t$.

## 8. Why "confidence" and not "probability"

Once the interval is built, say $[4.41, 15.59]$, the parameter $\mu$ is a fixed number, not a random variable. So **each interval either includes $\mu$ or it doesn't**: there is no 95% chance attached to this particular interval. What is 95% is the probability that the $\bar{X}$ we built the interval around came from the green area (the central $1-\alpha$ of the sampling distribution). That is why we say "with 95% confidence" and never "with probability 95% $\mu$ is in this interval".

> [!tip] Why not 100% confidence?
> You can: setting $\alpha = 0$ gives $-\infty \le \mu \le \infty$. It is guaranteed correct and useless. Every extra bit of confidence widens the interval, so we settle for something like 95% that is both reliable and informative.

## 9. Link between confidence intervals and hypothesis tests

The two procedures share one distribution, the sampling distribution. Suppose the 95% interval for $\mu_1 - \mu_2$ is $4.41 \le \mu_1 - \mu_2 \le 15.59$. Then for $H_0: \mu_1 - \mu_2 = 0$ at $\alpha = 0.05$, **we will necessarily reject $H_0$**.

Why:

- **Hypothesis test:** reject $H_0$ if $\bar{X}$ is more than (critical value $\cdot$ S.E.) away from $\mu_{H_0}$.
- **Confidence interval:** estimate that $\mu$ is at most (critical value $\cdot$ S.E.) away from $\bar{X}$.

The distance condition is the same, so the interval is **the range of values $\mu_{H_0}$ for which we would not reject $H_0$** in the matching test (same $\alpha$). If $\mu_{H_0}$ lies inside the interval, do not reject; if outside, reject.

![[Lec08_ci_test_duality.png]]

> [!warning] Two-sided only
> Confidence intervals are equivalent to **two-tailed** (non-directional) tests. The equivalent of a directional test is an upper or lower confidence bound, which is not covered in this course.

## 10. Summary of formulas (slides 118 to 120)

| Situation | Interval |
| --- | --- |
| General | $\hat{\theta} - \text{crit}_{(\alpha/2)} \cdot S.E. \le \theta \le \hat{\theta} + \text{crit}_{(\alpha/2)} \cdot S.E.$ |
| Mean, known variance | $\bar{X} \pm Z_{1-\alpha/2} \cdot \sigma/\sqrt{n}$ |
| Mean, unknown variance | $\bar{X} \pm t^{1-\alpha/2}_{n-1} \cdot S_x/\sqrt{n}$ |
| Difference of means, known variance | $(\bar{X}_1 - \bar{X}_2) \pm Z_{1-\alpha/2}\sqrt{\sigma_1^2/n_1 + \sigma_2^2/n_2}$ |
| Difference of means, unknown (equal) variance | $(\bar{X}_1 - \bar{X}_2) \pm t^{1-\alpha/2}_{n_X+n_Y-2}\sqrt{S^2_{pooled}(1/n_X + 1/n_Y)}$ |
| Proportion | $\hat{p} \pm Z_{1-\alpha/2}\sqrt{\hat{p}(1-\hat{p})/n}$ |
| Difference of proportions | $(\hat{p}_1 - \hat{p}_2) \pm Z_{1-\alpha/2}\sqrt{\hat{p}_1(1-\hat{p}_1)/n_1 + \hat{p}_2(1-\hat{p}_2)/n_2}$ |

> [!note] Notation
> The slides write the t critical value both as $t^{0.025}_{98}$ (upper-tail $\alpha/2$ notation, used in the example) and as $t^{1-\alpha/2}_{df}$ (in the summary). They denote the same number.

## Summary

- A confidence interval turns a point estimate into a range: **estimate $\pm$ critical value $\times$ standard error**.
- It comes from the sampling distribution: 95% of sample means fall within 1.96 standard errors of $\mu$, so $\mu$ is within 1.96 standard errors of $\bar{X}$ with 95% confidence.
- Known variance uses $Z$; unknown variance uses $S$ and the $t$ distribution ($n-1$ df, or $n_X+n_Y-2$ for two pooled samples).
- Width grows with confidence level and variance, and shrinks with sample size.
- The interval either contains $\mu$ or not; "95%" describes the procedure, not this interval.
- A two-sided test rejects $H_0$ exactly when $\mu_{H_0}$ lies outside the matching interval.
- Coming up: exercises 7 and 8 on Tuesday, then chi-squared tests (goodness of fit, independence); an extra-credit "real hypothesis testing in class" assignment is due in two weeks.

## Related notes

- [[Statistics B]]
- [[Confidence Interval]], [[Standard Error]], [[Critical Value]], [[t Distribution]]
