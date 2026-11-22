---
title: Two Samples Z Test
subject: statistics-b
aliases: ["Two-Sample Z Test"]
related: ["Z Test", "Two Independent Samples t Test", "Single Sample Z Test", "Critical Value", "P-Value", "Non-Directional Hypothesis"]
source_folder: statistics-b
ai_drafted: true
---

Tests the difference $\mu_X-\mu_Y$ when both variances are known and the averages are normal under H0. The statistic is $Z=\frac{(\bar X-\bar Y)-(\mu_X-\mu_Y)_{H_0}}{\sqrt{\sigma_X^2/n_X+\sigma_Y^2/n_Y}}\sim N(0,1)$; the variances add even though the means are subtracted.

## When to use

Use it for a difference between two populations when the standard deviations are given. In the lecture example $\sigma_X=4$, $\sigma_Y=5$, $n_X=n_Y=30$ gives $Z=-2.57$, beyond $\pm1.96$, so H0 is rejected; a non-directional p-value is twice the one-tail probability.

See [[Lec_05-Z Tests, t Tests and Two-Sample Tests|Lec 05]].
