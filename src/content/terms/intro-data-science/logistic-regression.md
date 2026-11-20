---
title: Logistic Regression
subject: intro-data-science
aliases: []
related: ["Sigmoid Function", "Confusion Matrix", "Precision and Recall", "Feature Scaling", "Supervised Learning"]
source_folder: intro-data-science
ai_drafted: true
---

A probabilistic binary classifier: a linear score is passed through the [[Sigmoid Function]] to give a probability, which is classified as 1 if it exceeds a threshold (0.5 by default).

## When to use

Use it when you need probabilities rather than hard labels, for example ranking members by churn risk. It assumes a linear decision boundary and is sensitive to feature scale, so scale first.

See [[Lecture 3 - Classification, KNN, Random Tree|DS Lec 3]].
