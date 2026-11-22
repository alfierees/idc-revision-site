---
title: Multiple Regression
subject: intro-econometrics
aliases: []
related: ["OLS Estimation", "Simple Linear Regression", "Residuals", "Rate of Change"]
source_folder: intro-econometrics
ai_drafted: true
---

A regression with $K$ explanatory variables, $y_i=\beta_0+\beta_1x_{1i}+\dots+\beta_Kx_{Ki}+u_i$, where each $\beta_k$ is the effect of $x_k$ on $y$ holding all the other regressors fixed.

## When to use

Whenever one regressor is not enough. OLS still minimises $\sum\hat u_i^2$, now with $K+1$ first-order conditions ($\sum\hat u_i=0$ and $\sum x_{ki}\hat u_i=0$ for each $k$). In R: `summary(lm(y ~ x1 + x2, mydata))`.

See [[Lec_03-Nonlinear Models with OLS|Lecture 3]].
