---
title: Unbiased Estimator
subject: statistics-b
aliases: []
related: ["Estimator", "Consistent Estimator", "Bias", "Linearly Biased Estimator", "Sample Variance", "Sample Proportion", "Point Estimation"]
source_folder: statistics-b
ai_drafted: true
---

An estimator whose expected value equals the parameter, $E(\hat\theta)=\theta$: on average it hits the target.

## When to use

Check it with linearity of expectation, for example $E(\bar X)=\mu$, and always check [[Consistent Estimator]] too: $X_3$ is unbiased but not consistent. If $E(\hat\theta)=a+b\theta$, then $(\hat\theta-a)/b$ is unbiased.

See [[Lec_02-Point Estimation and the Variance Estimator|Lec 02]].
