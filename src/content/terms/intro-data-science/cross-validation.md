---
title: Cross-Validation
subject: intro-data-science
aliases: ["K-Fold Cross-Validation"]
related: ["Train-Test Split", "Scikit-Learn Pipeline", "Data Leakage", "Ridge Regression", "Overfitting"]
source_folder: intro-data-science
ai_drafted: true
---

K-fold evaluation: split the data into $K$ folds, hold one out as the test set in each round, train on the rest, and average the $K$ scores. It gives a more robust score than a single split, which can be lucky or unlucky.

## When to use

Use it to compare models or choose a regularisation strength such as alpha. Put scaling inside a [[Scikit-Learn Pipeline]] so it is refitted for each fold, otherwise test information leaks into training. The lecture calls $K = 10$ the standard default.

See [[Lecture 4 - Regression|DS Lec 4]].
