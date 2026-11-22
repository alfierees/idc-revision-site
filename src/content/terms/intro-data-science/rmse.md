---
title: RMSE
subject: intro-data-science
aliases: ["Root Mean Squared Error"]
related: ["MAE", "R-Squared", "Linear Regression", "Loss Function"]
source_folder: intro-data-science
ai_drafted: true
---

Root mean squared error: the square root of the average squared prediction error, expressed in the units of the target, with large errors penalised more heavily.

## When to use

Prefer it over [[MAE]] when a large miss is disproportionately bad, and report it with units. It is the usual cross-validation score and also the error measure for predicted ratings in a recommender. Also in [[PS_04-Regression with scikit-learn|PS 04]].

See [[Lecture 4 - Regression|DS Lec 4]].
