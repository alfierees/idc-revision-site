---
title: Single Sample Z Test for Proportion
subject: statistics-b
aliases: ["Proportion Z Test", "Z Test for a Proportion"]
related: ["Sample Proportion", "Success-Failure Condition", "Z Test", "Standard Error", "P-Value", "Non-Directional Hypothesis"]
source_folder: statistics-b
ai_drafted: true
---

Tests $H_0: p=p_{H_0}$ with $Z_{\hat p}=(\hat p-p_{H_0})/\sqrt{p_{H_0}(1-p_{H_0})/n}\sim N(0,1)$. The hypothesised $p_{H_0}$, not $\hat p$, goes in the [[Standard Error]], which pins the variance down automatically so no t distribution is needed.

## When to use

Use it for a yes/no question about one proportion, such as whether the share of female economics students differs from 50%. First verify the [[Success-Failure Condition]] with $p_{H_0}$; in the lecture example $Z=-4$, and the two-tailed p-value (doubled) is 0.0000634, so H0 is rejected.

See [[Lec_07-Tests for Proportions and Variances|Lec 07]].
