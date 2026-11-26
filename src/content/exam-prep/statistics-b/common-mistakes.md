---
title: "Common Mistakes"
subject: statistics-b
type: reference
description: "The slips the wrong options are built on, topic by topic, each with the fix: variance of the sum vs the average, unbiased vs consistent, rows vs columns in a likelihood table, pooling SDs, the wrong tail, and power read off the H0 curve."
course: Statistics B
instructor: Asael Sklar
semester: 2
year: 1
order: 5
tags:
  - statistics-b
  - exam-prep
  - mistakes
---

## Estimation

| Mistake | Fix |
|---|---|
| "The variance of the sum falls as $n$ grows" | That is the average. The sum's variance is $n\sigma^2$ and grows |
| $SE = \sigma/n$ | $\sigma/\sqrt n$ (the **variance** is $\sigma^2/n$) |
| Unbiased means consistent | $X_3$ is unbiased with variance $\sigma^2$ for every $n$: not consistent |
| $E(\hat\theta_1\hat\theta_2) = E(\hat\theta_1)E(\hat\theta_2)$ | Only if independent. Products are "not necessarily" unbiased |
| $S$ is unbiased because $S^2$ is | The square root is not linear: $S$ is slightly biased |
| Reading the likelihood table along a row | The data are fixed: go down the **observed value's column** |
| "The likelihood is the probability that $\theta$ is true" | It is $P(\text{data} \mid \theta)$, a function of $\theta$ |

## Correlation and regression

| Mistake | Fix |
|---|---|
| $r = 0$ means no relationship | No **linear** relationship; a parabola can have $r = 0$ |
| $Cov = 0$ means independent | Independence gives $Cov = 0$, not the reverse |
| Changing currency changes $r$ | $r$ is unit-free; the SD and the slope change |
| $r = 0$ makes the intercept 0 | It makes the slope 0; the intercept is $\bar Y$ |
| The line of $X$ on $Y$ is the same line | Different unless $\lvert r\rvert = 1$ |

## Choosing and computing a test

| Mistake | Fix |
|---|---|
| A $Z$ test with sample SDs | $Z$ needs $\sigma$ **known**. Otherwise $t$ |
| "$n = 35$, so the $t$ test is fine on a non-normal population" | Large $n$ makes $\bar X$ normal; the $t$ test still assumes a normal population |
| Pooling the SDs: $(24\cdot8 + 24\cdot12)/48$ | Pool the **variances**: $(24\cdot64 + 24\cdot144)/48 = 104$ |
| $df = n$ | $n - 1$ for one sample, $n_X + n_Y - 2$ for pooled |
| Using $\hat p$ in the SE of a one-proportion test | Use $p_0$: $H_0$ fixes the variance |
| Not pooling $\hat p$ in a two-proportion test | $H_0$ says one common $p$: $\hat p = \tfrac{x_1 + x_2}{n_1 + n_2}$ |
| A two-tailed critical value for "increases" | One tail: 1.645, not 1.96 |
| Halving the $p$-value of a two-sided test | **Double** the one-tail probability |
| "Not rejected, so $H_0$ is true" | No evidence either way |
| $F$ with the smaller variance on top | Larger on top, and $df$ in the same order |

## Power and errors

| Mistake | Fix |
|---|---|
| Power from the $H_0$ curve | The critical value comes from $H_0$; the **area** from the true curve |
| Standardising the critical value with $\mu_0$ | Use the true mean |
| "A smaller $\alpha$ gives more power" | Smaller $\alpha$ moves the critical value out: less power |
| "Switching from $Z$ to $t$ raises $\alpha$" | $\alpha$ is fixed by design; $\beta$ rises |
| A one-tailed test always has more power | Only in the right direction; in the wrong one, almost none |
| Type II error possible when $d = 0$ | $d = 0$ means $H_0$ is true: only Type I is possible |

## Intervals and chi-squared

| Mistake | Fix |
|---|---|
| Using the width as the margin | Width is twice the margin |
| Rounding the sample size to the nearest integer | Always **up** |
| $z$ in an interval with $S$ | $t_{n-1}$ |
| "95% chance $\mu$ is in this interval" | 95% of intervals built this way contain $\mu$ |
| $\chi^2$ with $(O - E)^2/O$ | Divide by $E$ |
| $df = k$ | $k - 1$; independence $(r - 1)(c - 1)$ |
| A two-tailed $\chi^2$ test | Upper tail only |
| Expected counts below 5 ignored | The test needs every $E \ge 5$ |
