---
title: Centroid
subject: intro-data-science
aliases: []
related: ["K-Means", "Inertia", "Euclidean Distance", "Elbow Method"]
source_folder: intro-data-science
ai_drafted: true
---

The mean point of a cluster. K-Means places $K$ centroids, assigns each point to the nearest one, then moves each centroid to the mean of its assigned points.

## When to use

It is the object K-Means updates in the Assign, Update, Repeat loop, which stops when no point changes cluster. [[Inertia]] is the sum of squared distances from each point to its own centroid.

See [[Lecture 5 - Clustering and Dimensionality Reduction|Lec 5]].
