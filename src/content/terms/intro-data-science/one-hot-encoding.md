---
title: One-Hot Encoding
subject: intro-data-science
aliases: []
related: ["Dummy-Variable Trap", "Decision Tree", "Linear Regression", "Feature Scaling"]
source_folder: intro-data-science
ai_drafted: true
---

Encoding a categorical variable as a set of binary columns, one per category, for example `membership_type` becomes three 0/1 columns.

## When to use

Use `pd.get_dummies(...)` before fitting models on categorical features. In regression use `drop_first=True` to drop one level per category and avoid the [[Dummy-Variable Trap]] (PS 02).

See [[Lecture 3 - Classification, KNN, Random Tree|DS Lec 3]].
