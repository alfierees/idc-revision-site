---
title: Maximum Likelihood Estimator
subject: statistics-b
aliases: [MLE, Maximum Likelihood Estimate]
related: [Likelihood, Log-Likelihood, Likelihood Table, MLE Invariance, Unbiased Estimator, Consistent Estimator]
source_folder: statistics-b
ai_drafted: true
---

The parameter value that maximises the [[Likelihood]] of the observed sample, the $\hat\theta$ for which $L(\theta,\mathbf X)$ is largest.

## When to use

Either read it off a [[Likelihood Table]] (the largest entry in each column) or derive it: write $L$, take the [[Log-Likelihood]], set the first derivative to 0 and check the second. A Bernoulli sample gives $\hat p=\sum X_i/n$ and a normal sample gives $\hat\mu=\bar X$ with a divide-by-$n$ variance. MLEs are not necessarily unbiased but are almost always consistent.

See [[Lec_03-Maximum Likelihood Estimation|Lec 03]]. Also in [[PS_03-Maximum Likelihood Estimators|PS 03]], [[PP_04-Estimators, Z and t Tests, F Test, Confidence Intervals & Chi-Squared (2024 Moed B)|PP 04]], [[Lec_12-Exam Review 1|Lec 12]].
