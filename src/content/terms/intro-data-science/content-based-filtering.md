---
title: Content-Based Filtering
subject: intro-data-science
aliases: []
related: ["Cosine Similarity", "User Profile", "Collaborative Filtering", "Cold Start Problem", "One-Hot Encoding"]
source_folder: intro-data-science
ai_drafted: true
---

Recommends items similar to ones the user has already rated highly, with similarity measured on item features such as genre, language and length. It needs no data about other users.

## When to use

Follow the four-step pipeline: describe each item with a feature vector, build a [[User Profile]] by averaging the vectors of liked items, compute [[Cosine Similarity]] to every unseen item, then rank. It handles new items well but lacks serendipity, since it only gives more of what the user already liked.

See [[Lecture 6 - Recommendation Systems|Lec 6]].
