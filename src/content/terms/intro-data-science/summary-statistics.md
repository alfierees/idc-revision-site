---
title: Summary Statistics
subject: intro-data-science
aliases: []
related: ["Distributions", "Outliers", "Groupby", "Pandas"]
source_folder: intro-data-science
ai_drafted: true
---

A few numbers that describe a column: centre (mean, median, mode) and spread (standard deviation, quartiles). `df.describe()` produces them for the numeric columns.

## When to use

Choose the measure to fit the data: default to the median for skewed business metrics such as revenue or salary, since the mean is outlier-sensitive (the lecture's salary example has a mean of 213k but a median of 15k). The lecture warns that summary statistics alone are never enough, so always visualise too (Anscombe's quartet).

See [[Lecture 2 - EDA and Charts|DS Lec 2]].
