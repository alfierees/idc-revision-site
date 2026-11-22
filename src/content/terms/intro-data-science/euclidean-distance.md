---
title: Euclidean Distance
subject: intro-data-science
aliases: []
related: ["K-Means", "KNN", "Cosine Similarity", "Feature Scaling", "Curse of Dimensionality"]
source_folder: intro-data-science
ai_drafted: true
---

Straight-line distance between two points, $d(\mathbf{a}, \mathbf{b}) = \sqrt{\sum_{j} (a_j - b_j)^2}$, the default similarity measure for [[K-Means]] and [[KNN]].

## When to use

Always scale features first (StandardScaler), otherwise a feature such as average order value (50 to 500) dominates one in 0 to 1. For sparse rating vectors on personal scales, [[Cosine Similarity]] is preferred instead.

See [[Lecture 5 - Clustering and Dimensionality Reduction|DS Lec 5]].
