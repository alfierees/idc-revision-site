---
title: Linear Regression
subject: intro-data-science
aliases: ["regression"]
related: ["OLS", "R-Squared", "RMSE", "MAE", "Polynomial Features", "Supervised Learning"]
source_folder: intro-data-science
ai_drafted: true
---

A model that predicts a continuous target as a weighted sum of the features plus an intercept, $\hat{y} = \beta_0 + \beta_1 x_1 + \dots + \beta_k x_k$, fitted by [[OLS]].

## When to use

Use it as the baseline for any "how much?" question and evaluate with [[MAE]], [[RMSE]] and [[R-Squared]] on the test set. A coefficient is the change in prediction per unit of a feature, holding the others constant: association, not causation.

See [[Lecture 4 - Regression|DS Lec 4]].
