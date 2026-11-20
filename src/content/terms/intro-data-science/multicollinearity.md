---
title: Multicollinearity
subject: intro-data-science
aliases: []
related: ["Dummy-Variable Trap", "Ridge Regression", "Lasso Regression", "PCA", "Linear Regression"]
source_folder: intro-data-science
ai_drafted: true
---

Features that are strongly correlated with each other, which makes the individual coefficients unstable and hard to interpret.

## When to use

In PS 04, car age and kilometres driven are correlated: without regularisation they fight for credit and coefficients swing with small data changes, while [[Ridge Regression]] spreads the shared effect. [[PCA]] components are orthogonal, so PCA also removes it.

See [[Lecture 4 - Regression|Lec 4]].
