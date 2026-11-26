---
title: "Past Paper Topic Map"
subject: statistics-b
type: reference
description: "Where each topic sits in the seven papers on this site (2023 to 2025 and the practice exam), question by question: the same 20 slots come back every year."
course: Statistics B
instructor: Asael Sklar
semester: 2
year: 1
order: 3
tags:
  - statistics-b
  - exam-prep
  - past-papers
---

> Counted from every paper on this site: [[PP_01|2023 Moed A]], [[PP_02|2023 Moed B]], [[PP_03|2024 Moed A]], [[PP_04|2024 Moed B]], [[PP_05|2025 Moed A]], [[PP_06|2025 Moed B]] and the [[PP_07|practice exam]]. All are 20 multiple-choice questions. 2023 and 2024 and the practice exam have official letter keys; **2025 A and B have no official working** (2025 A only says "the answer is always a"), so their solutions are checked but not official.

## Every topic, every paper

The numbers are question numbers. Every row is in every paper.

| Topic | 23 A | 23 B | 24 A | 24 B | 25 A | 25 B | Practice | Cheat sheet |
|---|---|---|---|---|---|---|---|---|
| Sampling distribution: variance of an average or a sum | 1 | 1 | 1 | 1 | 1 | 13 | 1 | §1 |
| Unbiased estimator: find one, fix a biased one | 2, 3 | 2, 3 | 2, 3 | 2, 3 | 2, 3 | 6, 11 | 2, 3 | §2 |
| Consistency | 4 | 4 | 4 | 4 | 4 | 17 | 4 | §2 |
| Maximum likelihood (a table or $\ln L$) | 5 | 5 | 5 | 5 | 5 | 19 | 5 | §3 |
| Correlation and the regression line | 6 to 8 | 6 to 8 | 6, 7 | 6, 7 | 20 | 3 | 6 to 8 | §4 |
| A $Z$ or $t$ statistic for one or two means | 9, 15, 16 | 16, 17 | 8, 9, 14, 15 | 8, 9, 14, 15 | 6, 7, 14, 15 | 1, 7, 8, 15 | 9, 10, 15, 16 | §5, §6 |
| Proportion $Z$ test, one or two groups | 10 | 9, 10 | 10 | 10 | 8, 9 | 5, 18 | | §7 |
| "Which test is allowed?" | 11 | 11 | 11 | 11 | 10 | 14 | 11 | §6 |
| Power, Type I and II errors, Cohen's $d$ | 12 to 14 | 12 to 15 | 12, 13 | 12, 13 | 11 to 13 | 2, 10, 20 | 12 to 14 | §9 |
| $F$ test for equal variances | 17 | | 16 | 16 | 16 | 4 | 17 | §8 |
| Confidence interval or sample size | 18, 19 | 18, 19 | 17, 18 | 17, 18 | 17, 18 | 9, 16 | 18, 19 | §10 |
| $\chi^2$ goodness of fit or independence | 20 | 20 | 19, 20 | 19, 20 | 19 | 12 | 20 | §11 |

> [!tip] What this means
> The first five questions (estimation) and the last one ($\chi^2$) are close to free marks once you know the method: they barely change. The middle block is where the points are lost, mostly on **which test** (known $\sigma$? normal population?), **which tail**, and **power**. 2025 Moed B shuffled the order, so read every question for its topic rather than trusting the position.

## The recurring question patterns

| Pattern | Seen in | What it wants |
|---|---|---|
| "As $n$ grows, the mean and variance of the sum / average…" | every paper, Q1 | Sum: both grow. Average: mean fixed, variance $\sigma^2/n$ falls |
| $X$ takes $a$, $2a$, $3a$: "which estimator is unbiased for $a$?" | every paper | $E(X)$ as a multiple of $a$, then divide |
| $E(\hat\theta) = a + b\theta$: "an unbiased estimator is…" | 23 A, 23 B, 24 B, 25 A | $(\hat\theta - a)/b$ |
| "Necessarily / not necessarily" unbiased after adding or multiplying | practice, 24 A | Sum: linearity holds. Product: not necessarily |
| Two variances given: "consistent?" | every paper | Both $\to 0$ means consistent |
| A likelihood table | every paper | Largest entry in each column |
| A point added at $(\bar X, \bar Y)$, or one removed | 23 A, 24 A | The line goes through the means; an outlier moves the slope |
| $r = 0$: slope and intercept | 24 B, 25 A, practice | Slope necessarily 0, intercept $\bar Y$ |
| Changing units (dollars to shekels) | 24 B | The SD scales, $r$ stays the same |
| "Can she use a $Z$ test? A $t$ test?" | every paper | $Z$ needs known $\sigma$; $t$ needs a normal population |
| Power with a true mean, $n$, $\sigma$ | every paper | Critical $\bar X$ under $H_0$, area under the true curve |
| One-tailed vs two-tailed power | practice, 25 A | Right direction: one-tailed more power. Wrong direction: almost none |
| Cohen's $d = 0$: which errors are possible? | 24 A | $H_0$ is true: a Type I error could happen, a Type II could not |
| Sample size for a target width | 23 A, 24 B (a mean), practice (a proportion) | Width is **twice** the margin; $p = 0.5$ for a proportion; round **up** |
| A CI and "would the test reject?" | 23 B, 24 A | Reject exactly when $\mu_0$ is outside the interval |
| Changing $\alpha$ in a $\chi^2$ test | 25 B | Larger $\alpha$, smaller critical value, easier to reject |
