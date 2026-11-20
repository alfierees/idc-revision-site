---
title: Ridge Regression
subject: intro-data-science
aliases: []
related: ["L1 and L2 Penalty", "Lasso Regression", "Linear Regression", "Overfitting", "Feature Scaling", "Cross-Validation"]
source_folder: intro-data-science
ai_drafted: true
---

L2-regularised linear regression: it adds the sum of squared coefficients, times a strength $\lambda$, to the loss, so all coefficients shrink towards zero but none reach exactly zero.

## When to use

Use it to cut [[Overfitting]] when all features are relevant; [[Lasso Regression]] is the choice when many are irrelevant. Scale the features first, and pick the strength (`alpha`) by [[Cross-Validation]]: too small barely regularises, too large pushes every coefficient to zero and underfits. Also in [[PS_02-Regression on Insurance Charges|PS 02]] and [[PS_04-Regression with scikit-learn|PS 04]].

See [[Lecture 4 - Regression|DS Lec 4]].
