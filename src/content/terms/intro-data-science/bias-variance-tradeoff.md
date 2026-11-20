---
title: Bias-Variance Tradeoff
subject: intro-data-science
aliases: ["Bias-Variance Trade-off"]
related: ["Overfitting", "Cross-Validation", "Ridge Regression", "Lasso Regression", "Polynomial Features"]
source_folder: intro-data-science
ai_drafted: true
---

Every model sits between two failure modes: high bias (too simple, underfits, high training and test error) and high variance (memorises noise, overfits, low training error but high test error). The aim is the balance with the lowest test error.

## When to use

Use it to diagnose a model from its training and test errors: fix high bias with a more complex model or more features, and high variance by regularising ([[Ridge Regression]], [[Lasso Regression]]), getting more data or simplifying. The lecture's examples are a linear model on curved data versus a degree-10 polynomial on 30 points.

See [[Lecture 4 - Regression|DS Lec 4]].
