---
title: Collaborative Filtering
subject: intro-data-science
aliases: ["CF"]
related: ["User-Based CF", "Item-Based CF", "Content-Based Filtering", "Cosine Similarity", "Cold Start Problem", "User-Item Matrix"]
source_folder: intro-data-science
ai_drafted: true
---

Recommends items from the collective behaviour of all users: if two users agreed in the past they will likely agree on new items. It uses no item features at all, only rating patterns.

## When to use

Use it when rating data is plentiful and features cannot capture taste; it comes in [[User-Based CF]] and [[Item-Based CF]] forms. Its weakness is the [[Cold Start Problem]], and similarity scores based on very few shared items (for example 2) are far less trustworthy than ones based on many.

See [[Lecture 6 - Recommendation Systems|Lec 6]].
