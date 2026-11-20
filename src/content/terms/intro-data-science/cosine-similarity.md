---
title: Cosine Similarity
subject: intro-data-science
aliases: []
related: ["Euclidean Distance", "Content-Based Filtering", "Collaborative Filtering", "User Profile", "Document-Term Matrix"]
source_folder: intro-data-science
ai_drafted: true
---

Measures the angle between two vectors rather than the distance, ranging from $-1$ (opposite) to $+1$ (identical direction) and ignoring vector length. For non-negative feature vectors it runs from 0 to 1.

## When to use

Use it for recommenders and text, where vectors are sparse and users have personal rating scales: two users rating 4 to 5 and 2 to 3 are far apart by [[Euclidean Distance]] but near-identical by cosine. The formula is $\text{cosine}(\mathbf{a}, \mathbf{b}) = \dfrac{\mathbf{a} \cdot \mathbf{b}}{\lVert \mathbf{a} \rVert \, \lVert \mathbf{b} \rVert}$.

See [[Lecture 6 - Recommendation Systems|Lec 6]].
