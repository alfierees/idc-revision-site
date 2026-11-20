---
title: R-squared
subject: intro-econometrics
aliases: ["R squared"]
related: ["Adjusted R-squared", "Total Sum of Squares", "F-test"]
source_folder: intro-econometrics
ai_drafted: true
---

The share of the variation in $y$ that the regression explains, $R^2 = 1 - RSS/TSS$ (equivalently $MSS/TSS$). It never falls when a regressor is added, even a noise one, and it depends on the variance of $y$, so it only compares models with the same outcome variable.

## When to use

Quote it to describe fit, and switch to [[Adjusted R-squared]] when comparing models with different numbers of regressors. The overall model F-test can also be written purely in terms of $R^2$.

See [[Lec_08-Goodness of Fit & Multicollinearity|Lecture 8]].
