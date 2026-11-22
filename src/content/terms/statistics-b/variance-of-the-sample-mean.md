---
title: Variance of the Sample Mean
subject: statistics-b
aliases: []
related: ["Consistent Estimator", "Standard Error", "Sampling Distribution of the Average", "Central Limit Theorem", "Law of Large Numbers"]
source_folder: statistics-b
ai_drafted: true
---

For $n$ independent draws with variance $\sigma^2$, $Var(\bar X)=\sigma^2/n$, so it shrinks as the sample grows. It equals the variance of the sum, $n\sigma^2$, divided by $n^2$.

## When to use

It is why $\bar X$ is a [[Consistent Estimator]] ($\sigma^2/n\to0$) and why the [[Law of Large Numbers]] holds. A common slip is using $\sigma^2$ instead of $\sigma^2/n$ for the variance of an average; the [[Standard Error]] is its square root. Problem Set 1 checks it by simulation in Excel.

See [[PS_01-Unbiased and Consistent Estimators|PS 01]].
