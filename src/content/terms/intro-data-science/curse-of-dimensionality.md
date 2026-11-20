---
title: Curse of Dimensionality
subject: intro-data-science
aliases: []
related: ["KNN", "K-Means", "Euclidean Distance", "PCA", "Explained Variance"]
source_folder: intro-data-science
ai_drafted: true
---

In many dimensions all points become almost equally distant from each other, so the nearest neighbour is hardly closer than the farthest. Distance-based methods degrade, models need far more data, and visualisation becomes impossible.

## When to use

It explains why clustering on 50+ raw features is unreliable and why [[KNN]] and [[K-Means]] suffer. The lecture's fix is to reduce dimensions first with [[PCA]], then cluster.

See [[Lecture 5 - Clustering and Dimensionality Reduction|DS Lec 5]].
