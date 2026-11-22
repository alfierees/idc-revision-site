---
title: Likelihood
subject: statistics-b
aliases: []
related: [Maximum Likelihood Estimator, Log-Likelihood, Likelihood Table, Likelihood vs Probability, Binomial Distribution]
source_folder: statistics-b
ai_drafted: true
---

The probability of the observed sample given a parameter value, $L(\theta, X)=P(X \mid \theta)$, read as a function of $\theta$ with the data fixed.

## When to use

It is the first step of the maximum likelihood recipe: write $L(\theta,\mathbf X)$, then take the [[Log-Likelihood]]. For a Bernoulli sample it is $L(p,\mathbf X)=p^{\sum X_i}(1-p)^{n-\sum X_i}$.

See [[Lec_03-Maximum Likelihood Estimation|Lec 03]]. Also in [[PS_03-Maximum Likelihood Estimators|PS 03]].
