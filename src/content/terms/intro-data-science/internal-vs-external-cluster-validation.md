---
title: Internal vs External Cluster Validation
subject: intro-data-science
aliases: ["Internal Validation", "External Validation"]
related: ["Silhouette Score", "Inertia", "Elbow Method", "Unsupervised Learning"]
source_folder: intro-data-science
ai_drafted: true
---

Internal checks use only the geometry of the clusters (silhouette, inertia); external checks compare the clusters with ground-truth labels.

## When to use

In PS 03 there is no ground truth, so the clusters are judged by the elbow method and silhouette scores, both internal checks; whether the segments are useful is judged by profiling them.

See [[Lecture 5 - Clustering and Dimensionality Reduction|Lec 5]].
