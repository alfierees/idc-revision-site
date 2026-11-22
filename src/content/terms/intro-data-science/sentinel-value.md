---
title: Sentinel Value
subject: intro-data-science
aliases: []
related: ["Missing Values", "Outliers", "Summary Statistics"]
source_folder: intro-data-science
ai_drafted: true
---

A placeholder such as -1 or 999 that stands for missing data but is not NaN, so it must be found and replaced by hand.

## When to use

A zero count from `.isna().sum()` does not prove the data is clean, because that only finds declared gaps. Pair it with `describe()` and look for impossible minimums or maximums (for example an age of 999). This is a PS 02 point: see [[PS_02-Regression on Insurance Charges|PS 02]].

See [[Lecture 2 - EDA and Charts|DS Lec 2]].
