---
title: Confusion Matrix
subject: intro-data-science
aliases: ["evaluation metrics"]
related: ["Precision and Recall", "Supervised Learning", "Train-Test Split", "Logistic Regression"]
source_folder: intro-data-science
ai_drafted: true
---

A table of true negatives, false positives, false negatives and true positives that shows exactly where a classifier goes wrong. It is the basis for [[Precision and Recall]].

## When to use

Use it instead of accuracy when classes are imbalanced: if only 5% of members churn, predicting that nobody churns scores 95% accuracy and is useless. In scikit-learn it comes from `confusion_matrix` and `classification_report`.

See [[Lecture 3 - Classification, KNN, Random Tree|DS Lec 3]].
