---
title: Dummy Variable Trap
subject: intro-econometrics
aliases: []
related: ["Dummy Variable", "Base Category", "Perfect Multicollinearity"]
source_folder: intro-econometrics
ai_drafted: true
---

Including a dummy for every category as well as an intercept, which makes the regressors perfectly collinear so OLS cannot be computed.

## When to use

Whenever you code a $K$-category variable, include only $K-1$ dummies and treat the omitted one as the [[Base Category]]. It is the standard example of [[Perfect Multicollinearity]].

See [[Lec_10-Dummy Variables|Lecture 10]].
