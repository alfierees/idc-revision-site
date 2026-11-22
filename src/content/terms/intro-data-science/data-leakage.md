---
title: Data Leakage
subject: intro-data-science
aliases: []
related: ["Train-Test Split", "Cross-Validation", "Scikit-Learn Pipeline", "Feature Scaling"]
source_folder: intro-data-science
ai_drafted: true
---

Information from the test set or the target reaching the training step, which inflates scores that will not hold on new data.

## When to use

Two cases in the course: fitting a scaler on the full dataset before cross-validation (fix it with a [[Scikit-Learn Pipeline]]), and leaving the target column in the feature matrix (as with `charges` in the insurance problem set). Fit scalers and `PolynomialFeatures` on training data only, then transform the test data.

See [[Lecture 4 - Regression|Lec 4]].
