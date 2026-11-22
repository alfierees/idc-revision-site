---
title: Sample Variance
subject: statistics-b
aliases: []
related: ["Unbiased Estimator", "Biased Variance Estimator", "Sample Standard Deviation", "Estimator", "Variance of the Sample Mean"]
source_folder: statistics-b
ai_drafted: true
---

$S^2=\sum(X_i-\bar X)^2/(n-1)$, the [[Unbiased Estimator]] of the population variance $\sigma^2$ when $\mu$ is unknown. Dividing by $n$ instead gives an expected value of $\frac{n-1}{n}\sigma^2$, too small because $\bar X$ is closer to the observations than $\mu$ is; dividing by $n-1$ pays that back.

## When to use

Divide by $n$ only when $\mu$ is known or you hold the whole population. In Excel, VAR.S divides by $n-1$ and VAR.P by $n$. Example from the lecture: for the sample 5, 6, 7, $S^2=2/2=1$.

See [[Lec_02-Point Estimation and the Variance Estimator|Lec 02]].
