---
title: Pooled Variance
subject: statistics-b
aliases: []
related: ["Degrees of Freedom", "Two Independent Samples t Test", "Sample Variance", "t Distribution", "Confidence Interval", "Cohen's d"]
source_folder: statistics-b
ai_drafted: true
---

The pooled variance $S^2_{pooled}=\frac{(n_X-1)S_X^2+(n_Y-1)S_Y^2}{n_X+n_Y-2}$ is the average of the two sample variances $S_X^2$ and $S_Y^2$, each weighted by its [[Degrees of Freedom]]. It serves as a single estimate of the common variance $\sigma^2$ when the two populations are assumed to have equal variances.

## When to use

It sits inside the denominator of the [[Two Independent Samples t Test]], $\sqrt{S^2_{pooled}(1/n_X+1/n_Y)}$, and the matching [[Confidence Interval]] for a difference of means. Compute it first; in the lecture example with $n_X=n_Y=30$, $S_X=10$ and $S_Y=8$ it comes to 82.

See [[Lec_05-Z Tests, t Tests and Two-Sample Tests|Lec 05]].
