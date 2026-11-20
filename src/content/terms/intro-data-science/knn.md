---
title: KNN
subject: intro-data-science
aliases: ["K-Nearest Neighbours"]
related: ["Euclidean Distance", "Feature Scaling", "Curse of Dimensionality", "Supervised Learning"]
source_folder: intro-data-science
ai_drafted: true
---

K-nearest neighbours classifies a point by a majority vote among its $K$ closest training points, using [[Euclidean Distance]]. There is no training step, but prediction is slow.

## When to use

Always scale features first. A very small $K$ overfits and a very large $K$ underfits; the rule of thumb is $K \approx \sqrt{n}$, odd to avoid ties. It degrades in many dimensions ([[Curse of Dimensionality]]).

See [[Lecture 3 - Classification, KNN, Random Tree|DS Lec 3]].
