---
title: Ensemble Methods
subject: intro-data-science
aliases: []
related: ["Random Forest", "Decision Tree", "Bias-Variance Tradeoff"]
source_folder: intro-data-science
ai_drafted: true
---

Combining several models so their errors average out, giving lower variance than any single model. Each tree makes different mistakes, so averaging cancels noise while preserving the signal.

## When to use

The course example is the [[Random Forest]], which averages many [[Decision Tree]]s trained on bootstrap samples with random feature subsets. It scored 85% accuracy on the Yalla Fitness churn data versus 78% for a single tree, at the cost of interpretability.

See [[Lecture 3 - Classification, KNN, Random Tree|DS Lec 3]].
