---
title: Lasso Regression
subject: intro-data-science
aliases: []
related: ["L1 and L2 Penalty", "Ridge Regression", "Feature Scaling", "Cross-Validation"]
source_folder: intro-data-science
ai_drafted: true
---

L1-regularised regression that can shrink coefficients exactly to zero, so it performs automatic feature selection.

## When to use

Prefer it over [[Ridge Regression]] when many features are probably irrelevant (in PS 04 it dropped `has_sunroof`). Scale features first and pick alpha by cross-validation: too large and every coefficient goes to zero and the model underfits.

See [[Lecture 4 - Regression|DS Lec 4]].
