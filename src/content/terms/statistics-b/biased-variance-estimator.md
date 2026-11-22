---
title: Biased Variance Estimator
subject: statistics-b
aliases: []
related: ["Sample Variance", "Unbiased Estimator", "Linearly Biased Estimator", "Bias"]
source_folder: statistics-b
ai_drafted: true
---

The biased variance estimator divides $\sum(X_i-\bar X)^2$ by $n$ instead of $n-1$, so its expected value is $\frac{n-1}{n}\sigma^2$, too small on average.

## When to use

Use it as the example of a [[Linearly Biased Estimator]]: multiplying by $\frac{n}{n-1}$ gives the [[Sample Variance]] $S^2$, which is unbiased.

See [[PS_02-Unbiased and Consistent Estimators and Variance Simulation|PS 02]].
