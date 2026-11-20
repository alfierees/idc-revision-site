---
title: Scikit-Learn Pipeline
subject: intro-data-science
aliases: ["Pipeline"]
related: ["Data Leakage", "Feature Scaling", "Cross-Validation", "Polynomial Features", "Ridge Regression"]
source_folder: intro-data-science
ai_drafted: true
---

A single scikit-learn object that chains preprocessing steps (such as a scaler) and a model, so the preprocessing is fitted only on training data and [[Data Leakage]] is prevented.

## When to use

Use one whenever you cross-validate with scaling: fitting the scaler on the full dataset first leaks test information, whereas inside a pipeline it is re-fitted fresh for each fold. The lecture's full workflow is scaler, then `Ridge`, then `cross_val_score`. Also in [[PS_02-Regression on Insurance Charges|PS 02]].

See [[Lecture 4 - Regression|DS Lec 4]].
