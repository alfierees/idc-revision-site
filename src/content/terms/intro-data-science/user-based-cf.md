---
title: User-Based CF
subject: intro-data-science
aliases: []
related: ["Collaborative Filtering", "Item-Based CF", "Cosine Similarity", "KNN", "User-Item Matrix", "Sparsity"]
source_folder: intro-data-science
ai_drafted: true
---

Predicts a user's rating for an item from what similar users gave it: find the most similar users by cosine similarity over the items both have rated, then take a similarity-weighted average of their ratings.

## When to use

Used in worked rating-prediction questions (User A to I8 came to about 2.8). It is the same idea as [[KNN]], with K neighbours voting on a rating instead of a label. Weaknesses: thin overlap gives unreliable similarity, it is slow with millions of users, and a user with zero ratings cannot use it. Mean-centering corrects for users who rate on different scales.

See [[Lecture 6 - Recommendation Systems|DS Lec 6]].
