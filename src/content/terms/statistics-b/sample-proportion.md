---
title: Sample Proportion
subject: statistics-b
aliases: ["Proportion Estimator", "Proportion"]
related: ["Unbiased Estimator", "Consistent Estimator", "Binomial Distribution", "Single Sample Z Test for Proportion", "Success-Failure Condition", "Estimator"]
source_folder: statistics-b
ai_drafted: true
---

The share of successes in a sample, $\hat p=\sum X_i/n$, where each $X_i$ is 1 for a success and 0 for a failure. It is an [[Unbiased Estimator]] of the population proportion $p$ with variance $p(1-p)/n$, so it is also a [[Consistent Estimator]].

## When to use

It is the estimator behind polls and every proportion test. When $np>5$ and $n(1-p)>5$ the count of successes (a [[Binomial Distribution]]) is approximately normal, so $\hat p \sim N(p, p(1-p)/n)$; see the [[Success-Failure Condition]].

See [[Lec_07-Tests for Proportions and Variances|Lec 07]].
