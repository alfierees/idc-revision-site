---
title: Overfitting
subject: intro-data-science
aliases: []
related: ["Bias-Variance Tradeoff", "Early Stopping", "Train-Test Split", "Ridge Regression", "Polynomial Features"]
source_folder: intro-data-science
ai_drafted: true
---

A model memorises the noise in its training data instead of the real pattern, so training error keeps falling while test or validation error rises. Lecture 4 calls this the high-variance failure mode: low training error, high test error.

## When to use

Expect it whenever a model is too flexible for the data: a degree-10 polynomial on 30 points, an unrestricted tree grown until every leaf is pure, or a network trained for too many epochs. [[PS_02-Regression on Insurance Charges|PS 02]] (degree-5 polynomial features give a near-perfect training score but a hugely negative test score) and [[PS_07-Neural Networks MLP with scikit-learn|PS 07]] test it. The lecture fixes are to regularise, get more data or simplify, and to stop when validation loss stops improving.

See [[Lecture 4 - Regression|DS Lec 4]].
