---
title: n_init
subject: intro-data-science
aliases: []
related: ["K-Means", "Inertia"]
source_folder: intro-data-science
ai_drafted: true
---

The K-Means setting for the number of random restarts; scikit-learn keeps the run with the lowest inertia. The value used in the lecture is `n_init=10`.

## When to use

K-Means converges to a local optimum, so several random starts guard against a bad one. It appears in every `KMeans(n_clusters=..., random_state=42, n_init=10)` call in PS 03 and PS 05.

See [[Lecture 5 - Clustering and Dimensionality Reduction|Lec 5]].
