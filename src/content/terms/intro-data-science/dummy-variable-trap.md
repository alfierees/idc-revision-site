---
title: Dummy-Variable Trap
subject: intro-data-science
aliases: []
related: ["One-Hot Encoding", "Multicollinearity", "Linear Regression", "OLS"]
source_folder: intro-data-science
ai_drafted: true
---

Perfect multicollinearity caused by keeping every dummy (one-hot) level of a categorical variable alongside an intercept; the fix is to drop one level per category.

## When to use

In code, this is `pd.get_dummies(..., drop_first=True)`, used in the regression pipeline of Lecture 4 and the insurance-charges problem set. Without it linear-regression coefficients are not identifiable.

See [[Lecture 4 - Regression|Lec 4]].
