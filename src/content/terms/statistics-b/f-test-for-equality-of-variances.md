---
title: F Test for Equality of Variances
subject: statistics-b
aliases: []
related: ["F Distribution", "Sample Variance", "Degrees of Freedom", "Two Independent Samples t Test"]
source_folder: statistics-b
ai_drafted: true
---

The F test for equality of variances tests $\sigma_X^2/\sigma_Y^2=1$ using $S_X^2/S_Y^2$, which follows $F(n_X-1,n_Y-1)$ under $H_0$. Put the larger sample variance on top so $F\ge 1$ and only the right tail is needed.

## When to use

Use it to check the equal-variances assumption behind the pooled t test, but the lecture teaches it for the logic only (marked "not for practical use"); it needs normal data, and Levene's or Bartlett's test are used in practice.

See [[Lec_07-Tests for Proportions and Variances|Lec 07]].
