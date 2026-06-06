---
title: Heteroskedasticity
subject: econometrics
aliases: ["heteroscedasticity", "non-constant variance"]
related: ["ols-estimator"]
in_scope: true
ai_drafted: false
---

When the variance of the error term in a regression varies with the regressors. Violates one of the Gauss–Markov assumptions, so [[OLS Estimator]] is unbiased but no longer BLUE — standard errors are wrong.

**When to use this concept:** any time you suspect that residuals fan out (or shrink) with a regressor. Diagnose with the recipe [[Testing for heteroskedasticity]].

Variance of the OLS estimator under homoskedasticity:
$$\operatorname{Var}(\hat{\beta}) = \sigma^2 (X^\top X)^{-1}$$
Under heteroskedasticity this formula no longer applies — use White's robust standard errors instead.
