---
title: Binomial Distribution
subject: statistics-a
aliases: []
related: ["Bernoulli Distribution", "Geometric Distribution", "Hypergeometric Distribution", "Binomial Coefficient", "Normal Approximation of the Binomial"]
source_folder: statistics-a
ai_drafted: true
---

$B(n,p)$ counts the successes in $n$ independent Bernoulli trials with the same success probability $p$. Its expected value is $np$ and its variance is $np(1-p)$.

## When to use

Use it when a fixed number of independent tries each has the same success probability (30 rolls of a 20-sided die counting 1s is $B(30,1/20)$). The variance formula needs independent trials. For large $n$ it can be approximated by a normal, see [[Normal Approximation of the Binomial]].

See [[Lec_06-Expected Value, Variance and Known Distributions|Lec 06]].
