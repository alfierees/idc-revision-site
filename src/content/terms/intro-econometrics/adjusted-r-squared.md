---
title: Adjusted R-squared
subject: intro-econometrics
aliases: ["Adjusted R squared"]
related: ["R-squared", "Multicollinearity", "Regression Through the Origin"]
source_folder: intro-econometrics
ai_drafted: true
---

$R^2$ with a penalty for the number of regressors, $\bar R^2 = 1 - (1-R^2)\frac{N-1}{N-K-1}$. It rises only if a new variable improves fit by more than a random regressor would, so it falls when you add a useless variable.

## When to use

Use it to choose between models of different size. It still cannot compare models with different outcome variables or models with no intercept, and under [[Multicollinearity]] it barely changes when one of two collinear variables is dropped.

See [[Lec_08-Goodness of Fit & Multicollinearity|Lecture 8]].
