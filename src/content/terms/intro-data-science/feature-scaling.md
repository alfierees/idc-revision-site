---
title: Feature Scaling
subject: intro-data-science
aliases: []
related: ["KNN", "K-Means", "Euclidean Distance", "Logistic Regression", "Ridge Regression", "Lasso Regression", "Scikit-Learn Pipeline"]
source_folder: intro-data-science
ai_drafted: true
---

Putting features on a comparable scale with StandardScaler or MinMaxScaler, so that a feature measured in large units does not dominate the others.

## When to use

Scale before distance-based methods ([[KNN]], [[K-Means]]) and before logistic regression or regularised regression (Ridge, Lasso); plain OLS predictions do not change with scaling. Fit the scaler on the training data only, ideally inside a [[Scikit-Learn Pipeline]].

See [[Lecture 3 - Classification, KNN, Random Tree|DS Lec 3]].
