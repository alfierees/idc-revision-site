---
title: Normal Approximation of the Binomial
subject: statistics-a
aliases: ["Normal Approximation of Binomial"]
related: ["Binomial Distribution", "Central Limit Theorem", "Normal Distribution", "Standardization", "Z Table", "Sample Proportion"]
source_folder: statistics-a
ai_drafted: true
---

For large $n$, $B(n,p) \approx N(np, np(1-p))$, because a binomial count is a sum of $n$ independent 0/1 trials.

## When to use

Use it when $np \ge 5$ and $n(1-p) \ge 5$ instead of adding up many binomial terms: standardize and read the Z table. The lecture applies it with no continuity correction.

See [[Lec_12-Central Limit Theorem and Normal Approximations|Lec 12]].
