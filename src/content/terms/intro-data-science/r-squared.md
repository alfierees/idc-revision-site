---
title: R-Squared
subject: intro-data-science
aliases: ["R²", "coefficient of determination"]
related: ["RMSE", "MAE", "Linear Regression", "Overfitting"]
source_folder: intro-data-science
ai_drafted: true
---

The coefficient of determination, the share of the target's variance the model explains: 1 is a perfect fit, 0 is no better than predicting the mean, and it can be negative on a test set if the model is worse than the mean.

## When to use

Use it to compare models on the same dataset, always on the test set: adding any feature, even noise, raises $R^2$ on the training data (adjusted $R^2$ penalises extra features). A test score far below the training score signals [[Overfitting]]. Also in [[PS_04-Regression with scikit-learn|PS 04]].

See [[Lecture 4 - Regression|DS Lec 4]].
