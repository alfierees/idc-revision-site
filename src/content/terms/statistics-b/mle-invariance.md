---
title: MLE Invariance
subject: statistics-b
aliases: [Invariance of MLE]
related: [Maximum Likelihood Estimator, Log-Likelihood, Normal Distribution]
source_folder: statistics-b
ai_drafted: true
---

If $\hat\theta$ is the [[Maximum Likelihood Estimator]] of $\theta$, then $g(\hat\theta)$ is the MLE of $g(\theta)$, provided $g$ is one-to-one.

## When to use

In the normal-sample MLE, the formula for $\sigma^2$ contains the unknown $\mu$; invariance lets you substitute the MLE $\bar X$ for it to get $\hat\sigma^2=\sum(x_i-\bar X)^2/n$.

See [[Lec_03-Maximum Likelihood Estimation|Lec 03]]. Also in [[PS_03-Maximum Likelihood Estimators|PS 03]].
