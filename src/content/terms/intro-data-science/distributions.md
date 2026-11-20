---
title: Distributions
subject: intro-data-science
aliases: []
related: ["Histograms", "Summary Statistics", "Boxplots", "Outliers"]
source_folder: intro-data-science
ai_drafted: true
---

The shape of how a variable's values are spread: normal, right-skewed, left-skewed or uniform, with different modes and tails. Two products can share a mean and behave completely differently.

## When to use

Check the shape before choosing a summary: for right-skewed data such as revenue, income or order values, report the median because the mean is misleading (`df["col"].skew()` is positive for a right tail). The shape is usually read from a [[Histograms]] chart.

See [[Lecture 2 - EDA and Charts|DS Lec 2]].
