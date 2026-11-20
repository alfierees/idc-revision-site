---
title: Precision at K
subject: intro-data-science
aliases: ["Precision@K"]
related: ["Recall at K", "Precision and Recall", "Recommendation System", "Train-Test Split"]
source_folder: intro-data-science
ai_drafted: true
---

The share of the top K recommended items that are relevant: the number of relevant items in the top K divided by $K$. Relevant usually means rated 4 or above.

## When to use

The homepage metric for a recommender: of the 5 shows shown, how many will the user enjoy. Worked example in the lecture: top 5 with 4 hits is $4/5 = 0.80$. It is measured by hiding some known ratings as a test set. It matters more for a homepage, [[Recall at K]] more for search.

See [[Lecture 6 - Recommendation Systems|DS Lec 6]].
