---
title: Explained Variance
subject: intro-data-science
aliases: ["Explained Variance Ratio"]
related: ["PCA", "Principal Component", "Curse of Dimensionality"]
source_folder: intro-data-science
ai_drafted: true
---

The share of the total variance captured by each principal component, $\text{EVR}_k = \lambda_k / \sum_j \lambda_j$. The cumulative sum tells you how many components to keep.

## When to use

A common rule is to keep enough components to explain 80 to 95% of the variance, read from a scree plot of cumulative explained variance. In the StyleNation example, three components explained about 82%.

See [[Lecture 5 - Clustering and Dimensionality Reduction|DS Lec 5]].
