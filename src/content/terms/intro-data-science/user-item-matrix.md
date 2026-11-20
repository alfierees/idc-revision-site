---
title: User-Item Matrix
subject: intro-data-science
aliases: []
related: ["Sparsity", "Recommendation System", "Collaborative Filtering", "Explicit Feedback"]
source_folder: intro-data-science
ai_drafted: true
---

The core data structure of a recommender: users as rows, items as columns and ratings as values, mostly empty.

## When to use

Known ratings are data and the empty cells are the predictions to make, so every recommender is a method for filling the blanks. Built in pandas with `pivot_table(index="user_id", columns="item_id", values="rating")`, which converts long format to matrix format. Its emptiness is [[Sparsity]].

See [[Lecture 6 - Recommendation Systems|DS Lec 6]].
