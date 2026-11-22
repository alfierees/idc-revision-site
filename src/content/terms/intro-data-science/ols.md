---
title: OLS
subject: intro-data-science
aliases: []
related: ["Linear Regression", "R-Squared", "RMSE", "Multicollinearity"]
source_folder: intro-data-science
ai_drafted: true
---

Ordinary least squares: the estimator that picks the coefficients minimising the sum of squared residuals, $\text{RSS} = \sum_i (y_i - \hat{y}_i)^2$.

## When to use

The closed form is $\hat{\boldsymbol{\beta}} = (X^\top X)^{-1} X^\top \mathbf{y}$, though scikit-learn uses numerical optimisation instead of inverting the matrix. OLS predictions do not change with feature scaling.

See [[Lecture 4 - Regression|DS Lec 4]].
