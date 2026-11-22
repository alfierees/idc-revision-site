---
title: Principal Component
subject: intro-data-science
aliases: []
related: ["PCA", "Explained Variance", "Curse of Dimensionality"]
source_folder: intro-data-science
ai_drafted: true
---

A direction of maximum remaining variance found by [[PCA]]: PC1 is the direction of greatest variance, PC2 the next greatest and orthogonal to PC1, and so on. Each is a weighted combination of the original features.

## When to use

Read the loadings to interpret one: large absolute loadings mean that feature strongly defines the component (in the StyleNation case PC1 summarised overall customer value and engagement). Use [[Explained Variance]] to decide how many to keep. Also in [[PS_03-Mall Customers Clustering and PCA|PS 03]].

See [[Lecture 5 - Clustering and Dimensionality Reduction|DS Lec 5]].
