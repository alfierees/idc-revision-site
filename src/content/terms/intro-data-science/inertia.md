---
title: Inertia
subject: intro-data-science
aliases: ["WCSS", "within-cluster sum of squares"]
related: ["K-Means", "Centroid", "Elbow Method", "Silhouette Score", "n_init"]
source_folder: intro-data-science
ai_drafted: true
---

The sum of squared distances from each point to its own centroid (within-cluster sum of squares, WCSS); K-Means minimises it. It is available as `km.inertia_` in scikit-learn.

## When to use

Plot it against K for the [[Elbow Method]]. It can only fall as K grows, so you look for the bend rather than the minimum. With [[n_init]], scikit-learn keeps the run with the lowest inertia.

See [[Lecture 5 - Clustering and Dimensionality Reduction|Lec 5]].
