---
title: Perfect Multicollinearity
subject: intro-econometrics
aliases: []
related: ["Multicollinearity", "Dummy Variable Trap", "Model Misspecification"]
source_folder: intro-econometrics
ai_drafted: true
---

An exact linear relation among regressors, for example $x_{1i} = 5x_{2i}$ for all $i$. The first-order conditions become redundant, there is no unique solution, and OLS cannot be computed.

## When to use

It usually signals a mistake in the model, such as the [[Dummy Variable Trap]], so treat it as a [[Model Misspecification]] to fix rather than a data problem; the milder case is [[Multicollinearity]].

See [[Lec_10-Dummy Variables|Lecture 10]] and [[Lec_08-Goodness of Fit & Multicollinearity|Lecture 8]].
