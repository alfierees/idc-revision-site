---
title: Two Independent Samples t Test
subject: statistics-b
aliases: ["Two-Sample t Test", "Two Sample Test"]
related: ["Pooled Variance", "t Distribution", "Degrees of Freedom", "Two Samples Z Test", "t Test", "Critical Value"]
source_folder: statistics-b
ai_drafted: true
---

Tests the difference $\mu_X-\mu_Y$ when the variances are unknown but assumed equal. The statistic is $t=\frac{(\bar X-\bar Y)-(\mu_X-\mu_Y)_{H_0}}{\sqrt{S^2_{pooled}(1/n_X+1/n_Y)}}\sim t_{n_X+n_Y-2}$, using the [[Pooled Variance]]. It requires both populations to be normal and all observations independent.

## When to use

Use it for "is there a difference between group X and group Y" when only $S_X$ and $S_Y$ are given. Use $df=n_X+n_Y-2$, and $\alpha/2$ for a non-directional hypothesis; the pizza example gives $t=1.283<1.676$ at $df=58$, so H0 is not rejected.

See [[Lec_05-Z Tests, t Tests and Two-Sample Tests|Lec 05]].
