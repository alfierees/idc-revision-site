---
title: Gini Impurity
subject: intro-data-science
aliases: []
related: ["Decision Tree", "Random Forest"]
source_folder: intro-data-science
ai_drafted: true
---

A node-purity measure used to choose decision-tree splits: $\text{Gini}(S) = 1 - \sum_k p_k^2$, where $p_k$ is the share of class $k$ in the node. It is 0 for a pure node and 0.5 at maximum impurity for two classes.

## When to use

When asked how a [[Decision Tree]] picks a split: it chooses the feature and threshold that minimise the weighted Gini of the child nodes.

See [[Lecture 3 - Classification, KNN, Random Tree|DS Lec 3]].
