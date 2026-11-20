---
title: K-Means
subject: intro-data-science
aliases: ["clustering"]
related: ["Centroid", "Inertia", "Elbow Method", "Silhouette Score", "Euclidean Distance", "Feature Scaling", "n_init", "Unsupervised Learning"]
source_folder: intro-data-science
ai_drafted: true
---

A centroid-based clustering algorithm that partitions the points into exactly K clusters: initialise K centroids, assign each point to the nearest, move each centroid to the mean of its points, and repeat until assignments stop changing.

## When to use

[[Feature Scaling]] first, choose K with the [[Elbow Method]] and [[Silhouette Score]], and run with [[n_init]]=10. It must be given K in advance, assumes spherical clusters, and is sensitive to outliers.

See [[Lecture 5 - Clustering and Dimensionality Reduction|DS Lec 5]].
