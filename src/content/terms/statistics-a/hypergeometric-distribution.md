---
title: Hypergeometric Distribution
subject: statistics-a
aliases: []
related: ["Binomial Distribution", "Binomial Coefficient", "Combination"]
source_folder: statistics-a
ai_drafted: true
---

$HG(N,D,n)$ is the number of successes in a sample of $n$ drawn without replacement from a population of $N$ items containing $D$ successes.

## When to use

Use it for a finite population sampled without replacement (a committee of 5 from a class of 50, or women among 10 people fired from 55). It resembles the [[Binomial Distribution]], but each draw changes what is left, so the variance is smaller by the factor $(N-n)/(N-1)$.

See [[Lec_07-Known Distributions|Lec 07]].
