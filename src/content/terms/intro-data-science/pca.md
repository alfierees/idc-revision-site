---
title: PCA
subject: intro-data-science
aliases: ["dimensionality-reduction"]
related: ["Principal Component", "Explained Variance", "Curse of Dimensionality", "Unsupervised Learning", "Feature Scaling", "K-Means"]
source_folder: intro-data-science
ai_drafted: true
---

Principal Component Analysis finds a new coordinate system whose axes, the [[Principal Component]]s, capture the maximum variance in the data, so you can keep only the top few and compress many features into a handful.

## When to use

Use it when you have many features, when distance-based methods suffer from the [[Curse of Dimensionality]], or when you want a 2D scatter to check clusters. The lecture's rule is to keep enough components to reach 80 to 95 percent cumulative [[Explained Variance]], after scaling the features first. It assumes linear structure and can fail on curved clusters or when outliers dominate. Appears in [[PS_03-Mall Customers Clustering and PCA|PS 03]] and [[PS_05-Clustering and PCA with scikit-learn|PS 05]].

See [[Lecture 5 - Clustering and Dimensionality Reduction|DS Lec 5]].
