---
title: Decision Tree
subject: intro-data-science
aliases: []
related: ["Gini Impurity", "Random Forest", "Ensemble Methods", "Overfitting", "One-Hot Encoding", "Supervised Learning"]
source_folder: intro-data-science
ai_drafted: true
---

A flowchart classifier that splits the data with if/else tests on features until the leaves are mostly one class. At each node it picks the feature and threshold that minimise the weighted [[Gini Impurity]] of the children.

## When to use

Its strengths are that it is interpretable and needs no scaling; its weaknesses are instability and overfitting, so limit it with `max_depth` or `min_samples_leaf`, or ensemble it as a [[Random Forest]]. On the Yalla Fitness churn data it scored 78% accuracy.

See [[Lecture 3 - Classification, KNN, Random Tree|DS Lec 3]].
