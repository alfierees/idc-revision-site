---
title: Elbow Method
subject: intro-data-science
aliases: []
related: ["K-Means", "Inertia", "Silhouette Score", "Customer Segmentation"]
source_folder: intro-data-science
ai_drafted: true
---

Plot inertia (within-cluster sum of squares) against $K$ from 1 to about 10 and choose the $K$ where the curve bends and further clusters give diminishing returns.

## When to use

Use it to choose $K$ for [[K-Means]], but note the lecture's warning that the elbow is often a gentle curve, so combine it with the [[Silhouette Score]] and domain knowledge. For StyleNation both pointed to $K = 4$.

See [[Lecture 5 - Clustering and Dimensionality Reduction|DS Lec 5]].
