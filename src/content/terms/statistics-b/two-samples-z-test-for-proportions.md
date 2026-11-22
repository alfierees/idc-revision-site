---
title: Two Samples Z Test for Proportions
subject: statistics-b
aliases: ["Two-Proportion Z Test"]
related: ["Pooled Proportion", "Success-Failure Condition", "Sample Proportion", "Single Sample Z Test for Proportion", "Two Samples Z Test", "Z Test"]
source_folder: statistics-b
ai_drafted: true
---

Tests $H_0: p_1=p_2$ with $Z=(\hat p_1-\hat p_2)/\sqrt{\hat p(1-\hat p)(1/n_1+1/n_2)}\sim N(0,1)$, where $\hat p$ is the [[Pooled Proportion]]: total successes over total observations, a valid estimate of the common $p$ only because H0 says the populations are the same.

## When to use

Use it to compare two groups' proportions, such as click-through rates for two ad colours. Verify the four success and failure counts with each sample's own $\hat p$ first; in the lecture example the pooled $\hat p=0.023$, $Z=1.62$ and the doubled p-value is 0.105, so H0 is not rejected.

See [[Lec_07-Tests for Proportions and Variances|Lec 07]].
