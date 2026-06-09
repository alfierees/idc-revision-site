---
title: OLS Estimator
subject: econometrics
aliases: ["ordinary least squares", "least squares estimator", "OLS", "OLS estimation"]
related: ["heteroskedasticity"]
in_scope: true
ai_drafted: false
---

The estimator that minimises the sum of squared residuals.

$$\hat{\beta} = (X^\top X)^{-1} X^\top y$$

Under the Gauss–Markov assumptions OLS is BLUE — best linear unbiased estimator. Loses BLUE-ness under [[Heteroskedasticity]] (still unbiased, but not minimum variance among linear unbiased estimators).
