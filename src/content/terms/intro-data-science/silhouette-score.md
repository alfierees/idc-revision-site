---
title: Silhouette Score
subject: intro-data-science
aliases: []
related: ["K-Means", "Elbow Method", "Inertia", "Internal vs External Cluster Validation"]
source_folder: intro-data-science
ai_drafted: true
---

A per-point measure of how close a point is to its own cluster versus the nearest other cluster, from -1 to +1: near 1 is well matched, 0 is on a boundary, and -1 would fit better in a neighbouring cluster.

## When to use

Use it with the [[Elbow Method]] to choose K: pick the K where the average silhouette is highest. It is an internal check, since it uses only the geometry. In the StyleNation case both methods pointed to K = 4. Also in [[PS_03-Mall Customers Clustering and PCA|PS 03]] and [[PS_05-Clustering and PCA with scikit-learn|PS 05]].

See [[Lecture 5 - Clustering and Dimensionality Reduction|DS Lec 5]].
