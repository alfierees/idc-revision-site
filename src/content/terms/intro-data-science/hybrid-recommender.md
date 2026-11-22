---
title: Hybrid Recommender
subject: intro-data-science
aliases: []
related: ["Content-Based Filtering", "Collaborative Filtering", "Item-Based CF", "Cold Start Problem"]
source_folder: intro-data-science
ai_drafted: true
---

A weighted blend of content-based and collaborative approaches that covers each one's weaknesses: $\hat{r} = \alpha \cdot \hat{r}_{\text{CB}} + \beta \cdot \hat{r}_{\text{Item-CF}}$ with $\alpha + \beta = 1$.

## When to use

Worked example from the lecture: a content-based prediction of 2.8 and an item-CF prediction of 2.5, with weights 0.4 and 0.6, give 2.62. Raise the content-based weight for new users and the CF weight for active users. The hybrid had the best results in the Seret+ case.

See [[Lecture 6 - Recommendation Systems|Lec 6]].
