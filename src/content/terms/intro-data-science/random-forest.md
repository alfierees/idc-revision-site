---
title: Random Forest
subject: intro-data-science
aliases: []
related: ["Decision Tree", "Ensemble Methods", "KNN", "Logistic Regression"]
source_folder: intro-data-science
ai_drafted: true
---

An ensemble of [[Decision Tree]]s, each grown on a bootstrap sample of the training set with a random subset of features at each split, that vote on the answer (majority wins, or average the probabilities).

## When to use

Often the best off-the-shelf classifier: in the Yalla Fitness comparison it beat the tree, logistic regression and KNN (85 percent accuracy). Each tree makes different mistakes, so averaging lowers variance while bias stays about the same. Costs: less interpretable than one tree and slower to train. Also in [[PS_01-Titanic Classification Basics|PS 01]].

See [[Lecture 3 - Classification, KNN, Random Tree|DS Lec 3]].
