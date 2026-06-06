---
title: Testing for heteroskedasticity
subject: econometrics
related_terms: ["heteroskedasticity", "ols-estimator"]
in_scope: true
ai_drafted: false
---

## Steps

1. Run OLS to get residuals $\hat{u}_i$.
2. Square the residuals: $\hat{u}_i^2$.
3. Regress $\hat{u}_i^2$ on your regressors (Breusch–Pagan) or on regressors plus their squares and cross-products (White).
4. Compute $nR^2$ from this auxiliary regression.
5. Compare to $\chi^2$ with $k$ degrees of freedom (number of regressors in the auxiliary regression, excluding the constant).
6. Reject $H_0$ of homoskedasticity if $nR^2 > \chi^2_{k, 0.05}$.

## Common pitfalls

- Forgetting that White's test is more general — it also picks up specification errors, not just heteroskedasticity.
- Reporting non-robust standard errors after rejecting the null.
