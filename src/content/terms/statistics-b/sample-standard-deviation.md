---
title: Sample Standard Deviation
subject: statistics-b
aliases: ["Standard Deviation Estimator"]
related: ["Sample Variance", "Unbiased Estimator", "Single Sample t Test", "t Distribution", "Standard Error"]
source_folder: statistics-b
ai_drafted: true
---

$S=\sqrt{S^2}$, the square root of the [[Sample Variance]], used to estimate the population standard deviation $\sigma$. It is slightly biased low, because the square root is not a linear transformation and so $E(S)\ne\sigma$, but it is asymptotically unbiased.

## When to use

Use it whenever $\sigma$ is unknown: replacing $\sigma_X$ by $S_X$ in the test statistic turns the Z statistic into the t statistic of the [[Single Sample t Test]], with $n-1$ degrees of freedom. The same swap applies to the confidence interval.

See [[Lec_02-Point Estimation and the Variance Estimator|Lec 02]].
