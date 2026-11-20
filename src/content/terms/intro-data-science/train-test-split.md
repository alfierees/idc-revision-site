---
title: Train-Test Split
subject: intro-data-science
aliases: ["train/test split"]
related: ["Supervised Learning", "Overfitting", "Cross-Validation", "Data Leakage"]
source_folder: intro-data-science
ai_drafted: true
---

Partitioning the data into a training set the model learns from and a held-out test set used to measure honest performance on unseen examples.

## When to use

The first step of any supervised pipeline: `train_test_split(X, y, test_size=0.2, random_state=42)`, with `stratify=y` for imbalanced classes. Never test on training data, since a model that memorises can score 100 percent there. A single split can be lucky or unlucky, which is why [[Cross-Validation]] averages over K folds. Also in [[PS_01-Titanic Classification Basics|PS 01]].

See [[Lecture 3 - Classification, KNN, Random Tree|DS Lec 3]].
