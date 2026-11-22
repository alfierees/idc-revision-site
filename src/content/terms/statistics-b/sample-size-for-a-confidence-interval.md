---
title: Sample Size for a Confidence Interval
subject: statistics-b
aliases: []
related: ["Confidence Interval", "Margin of Error", "Standard Error", "Confidence Level", "Sample Proportion"]
source_folder: statistics-b
ai_drafted: true
---

Found by running a [[Confidence Interval]] backwards: the width is twice the [[Margin of Error]] (critical value times [[Standard Error]]), so set the width to be at most the target, solve for $n$ and round up to a whole number.

## When to use

Look for "what sample size ensures a width of at most ...". In Problem Set 8 a 95% interval of width at most 6 grams gives $n \ge 42.68$, so 43. For a proportion with no estimate available, use the worst case $\hat p=0.5$; a width of 3% at 95% gives 4268.4, rounded up to 4269.

See [[PS_08-Confidence Intervals|PS 08]].
