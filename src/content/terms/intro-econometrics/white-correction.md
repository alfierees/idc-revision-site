---
title: White Correction
subject: intro-econometrics
aliases: []
related: ["Robust Standard Errors", "Heteroskedasticity", "Weighted Least Squares"]
source_folder: intro-econometrics
ai_drafted: true
---

Keeps the OLS estimates and replaces each unknown $Var(u_i)$ with the squared residual $\hat u_i^2$ to get robust standard errors.

## When to use

Use it when [[Heteroskedasticity]] is present but its form is unknown. Coefficients and $R^2$ do not change, but standard errors and tests do, and unlike [[Weighted Least Squares]] the estimator is not efficient.

See [[Lec_12-Heteroskedasticity|Lecture 12]].
