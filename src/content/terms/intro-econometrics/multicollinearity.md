---
title: Multicollinearity
subject: intro-econometrics
aliases: []
related: ["Perfect Multicollinearity", "Variance of the OLS Estimator", "F-test", "t-test"]
source_folder: intro-econometrics
ai_drafted: true
---

A linear relationship among the explanatory variables. Partial multicollinearity (a strong but not exact relation) leaves OLS unbiased but inflates the variance of the estimates, giving big standard errors and small t-statistics; the exact case is [[Perfect Multicollinearity]].

## When to use

The classic signature is joint significance on an [[F-test]] with individually insignificant [[t-test]] results, or neither variable significant when both are in the model. A rule of thumb is a correlation above about 0.7; check the correlation matrix before dropping a seemingly irrelevant variable.

See [[Lec_08-Goodness of Fit & Multicollinearity|Lecture 8]] and [[Lec_13-Exam Review|Lecture 13]].
