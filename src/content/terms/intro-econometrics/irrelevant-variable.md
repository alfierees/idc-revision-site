---
title: Irrelevant Variable
subject: intro-econometrics
aliases: []
related: ["Model Misspecification", "Omitted Variable Bias", "Unbiasedness", "Multicollinearity", "Variance of the OLS Estimator"]
source_folder: intro-econometrics
ai_drafted: true
---

A regressor whose true coefficient is zero. Including it keeps OLS unbiased but raises the variance of the estimates.

## When to use

Lecture 9 contrasts it with omitting a relevant variable: adding an irrelevant $x_3$ inflates variances (through $R_j^2$ when it is correlated with other regressors) but does not bias the other coefficients.

See [[Lec_09-Model Misspecification & Quadratics|Lec 9]].
