---
title: Consistent Estimator
subject: statistics-b
aliases: ["Consistency"]
related: ["Unbiased Estimator", "Estimator", "Variance of the Sample Mean"]
source_folder: statistics-b
ai_drafted: true
---

In this course a consistent estimator is one whose variance goes to 0 as $n$ grows, so larger samples make it more reliable. The slides pair this with unbiasedness as the working test of a good estimator.

## When to use

Check it by computing $Var(\hat\theta)$ and letting $n\to\infty$: $\bar X$ passes because $Var(\bar X)=\sigma^2/n\to 0$, while $X_3$ alone is unbiased but not consistent.

See [[Lec_02-Point Estimation and the Variance Estimator|Lec 02]].
