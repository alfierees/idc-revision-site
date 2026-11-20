---
title: Variance of the OLS Estimator
subject: intro-econometrics
aliases: ["Variance Inflation Factor", "Variance of Estimator"]
related: ["Multicollinearity", "OLS Estimation"]
source_folder: intro-econometrics
ai_drafted: true
---

The sampling variance of $\hat\beta$. In the simple model it is $\sigma_u^2/\sum(x_i-\bar x)^2$; with several regressors it is $\sigma_u^2/\big[(1-R_j^2)\sum(x_{ji}-\bar x_j)^2\big]$, where $R_j^2$ comes from regressing $x_j$ on the other regressors.

## When to use

Read it to see what makes an estimate imprecise: a large error variance, little spread in $x_j$, or strong [[Multicollinearity]] ($R_j^2\to 1$). The factor $1/(1-R_j^2)$ is the Variance Inflation Factor.

See [[Lec_04-OLS Estimator Properties|Lecture 4]] and [[Lec_08-Goodness of Fit & Multicollinearity|Lecture 8]].