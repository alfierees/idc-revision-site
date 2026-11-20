---
title: Statistical Significance
subject: intro-econometrics
aliases: []
related: ["t-test", "p-value", "Significance Level", "t-statistic", "Null Hypothesis"]
source_folder: intro-econometrics
ai_drafted: true
---

A variable is significant when $H_0:\beta_k=0$ is rejected at the chosen level, read from the `t value` or `Pr(>|t|)` column of the output.

## When to use

For 'which variables are significant at 5%?' questions, compare each $|t|$ with the critical value (1.96 in the wage activity). The `t value` column tests only $\beta_k=0$; for any other null compute $(\hat\beta_k-b)/se$ yourself.

See [[Lec_06-Hypothesis Tests & p-values|Lec 6]].
