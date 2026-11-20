---
title: Sparsity
subject: intro-data-science
aliases: []
related: ["User-Item Matrix", "Recommendation System", "Collaborative Filtering", "Cold Start Problem"]
source_folder: intro-data-science
ai_drafted: true
---

The percentage of the [[User-Item Matrix]] with no rating, typically 95 to 99 percent or more. Sparsity is the nature of the problem, not a data-quality bug.

## When to use

Compute it as the share of empty cells: Seret+ is 80 percent empty, and Balagan Books (5,000 users by 20,000 books with 50,000 ratings) is 99.95 percent. High sparsity hurts [[Collaborative Filtering]] because two users may overlap on very few items, which favours content-based filtering.

See [[Lecture 6 - Recommendation Systems|DS Lec 6]].
