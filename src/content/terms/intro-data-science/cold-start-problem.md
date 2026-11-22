---
title: Cold Start Problem
subject: intro-data-science
aliases: []
related: ["Recommendation System", "Content-Based Filtering", "Collaborative Filtering", "Hybrid Recommender", "User-Item Matrix"]
source_folder: intro-data-science
ai_drafted: true
---

When a recommender has too little data to predict well, either for a new user or for a new item with no ratings. It is a chicken-and-egg problem: you need ratings to recommend well, but need good recommendations to get ratings.

## When to use

[[Content-Based Filtering]] copes with new items because item features exist from day one, while [[Collaborative Filtering]] struggles because it needs rating history. The usual fix is a [[Hybrid Recommender]] (the Seret+ plan: most popular first, content-based after 3 ratings, blend in collaborative filtering after 10).

See [[Lecture 6 - Recommendation Systems|Lec 6]].
