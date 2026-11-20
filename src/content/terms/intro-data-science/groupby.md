---
title: Groupby
subject: intro-data-science
aliases: []
related: ["DataFrame", "Pandas", "Summary Statistics"]
source_folder: intro-data-science
ai_drafted: true
---

The split-apply-combine pattern: split rows into groups by one or more columns, apply an aggregation such as mean, sum or count, and combine the results into a summary table.

## When to use

Use it to compare segments, for example `df.groupby("product_category")["revenue"].mean()`, with `.agg([...])` for several statistics or a list of columns for two-level groups. Averages hide differences, which groupby reveals.

See [[Lecture 2 - EDA and Charts|DS Lec 2]].
