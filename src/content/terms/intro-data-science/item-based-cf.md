---
title: Item-Based CF
subject: intro-data-science
aliases: []
related: ["Collaborative Filtering", "User-Based CF", "Cosine Similarity", "Content-Based Filtering", "User-Item Matrix"]
source_folder: intro-data-science
ai_drafted: true
---

Predicts a rating from the user's own ratings of similar items, where two items are similar if the same users tend to rate them similarly (measured on the columns of the user-item matrix, not from item features).

## When to use

Lecture 6 shows a worked [[Cosine Similarity]] between two items and why item-based often beats [[User-Based CF]]: items are stable, the item-item matrix is smaller and can be precomputed. Amazon's "also bought" is item-based CF.

See [[Lecture 6 - Recommendation Systems|Lec 6]].
