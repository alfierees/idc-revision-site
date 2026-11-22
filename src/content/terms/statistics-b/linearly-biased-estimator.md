---
title: Linearly Biased Estimator
subject: statistics-b
aliases: []
related: [Unbiased Estimator, Bias, Biased Variance Estimator, Estimator, Maximum Estimator for a Uniform Distribution]
source_folder: statistics-b
ai_drafted: true
---

An [[Estimator]] whose expected value is a linear function of the parameter, $E=a+b\theta$; the correction $(\text{estimator}-a)/b$ makes it unbiased.

## When to use

In Lec 02 the divide-by-$n$ [[Biased Variance Estimator]] is linearly biased with $a=0$ and $b=(n-1)/n$, so multiplying by $n/(n-1)$ gives the unbiased sample variance. PS 02 practises spotting $a$ and $b$ and applying the correction.

See [[PS_02-Unbiased and Consistent Estimators and Variance Simulation|PS 02]].
