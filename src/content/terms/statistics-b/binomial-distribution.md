---
title: Binomial Distribution
subject: statistics-b
aliases: []
related: ["Sample Proportion", "Normal Distribution", "Likelihood", "Hypergeometric Distribution", "Central Limit Theorem"]
source_folder: statistics-b
ai_drafted: true
---

The binomial distribution counts successes: the sum of $n$ independent Bernoulli flips, with $E=np$ and $Var=np(1-p)$.

## When to use

It is the model for a count of successes, whether checking $\hat p$ is unbiased and consistent, writing a likelihood for draws with replacement, or finding the null distribution of a count (the psychic example). For large $n$ it is approximated by a normal when $np>5$ and $n(1-p)>5$.

See [[PS_01-Unbiased and Consistent Estimators|PS 01]].
