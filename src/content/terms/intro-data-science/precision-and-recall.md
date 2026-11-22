---
title: Precision and Recall
subject: intro-data-science
aliases: ["precision-recall"]
related: ["Confusion Matrix", "Logistic Regression", "Precision at K", "Recall at K"]
source_folder: intro-data-science
ai_drafted: true
---

The paired classification metrics: precision is the share of predicted positives that are really positive, $TP/(TP+FP)$, and recall is the share of actual positives that were caught, $TP/(TP+FN)$.

## When to use

Use them instead of plain accuracy on imbalanced classes such as churn. Precision matters when each alarm has a cost (ad spend, calls); recall matters when missing a case is costly (fraud). Lowering the threshold raises recall and lowers precision, so pick the threshold from the business cost of each error; F1 gives a single balanced number.

See [[Lecture 3 - Classification, KNN, Random Tree|DS Lec 3]].
