---
title: Single Sample t Test
subject: statistics-b
aliases: []
related: ["t Distribution", "Sample Standard Deviation", "Degrees of Freedom", "Single Sample Z Test", "t Test", "Critical Value", "Hypothesis Testing Procedure"]
source_folder: statistics-b
ai_drafted: true
---

Tests the expected value of one population when the variance is unknown and the population is normal. The sample standard deviation replaces $\sigma$, giving $t_{\bar X}=(\bar X-\mu_{H_0})/(S_X/\sqrt{n})\sim t_{n-1}$, a [[t Distribution]] with $n-1$ degrees of freedom.

## When to use

Use it when a question about one mean gives only the sample's standard deviation rather than a known $\sigma$. Read the critical value from the t table at $df=n-1$, using $\alpha/2$ if the hypothesis is two-tailed; in the lecture example with 5 workers, $t=1.41<2.132$, so H0 is not rejected.

See [[Lec_05-Z Tests, t Tests and Two-Sample Tests|Lec 05]].
