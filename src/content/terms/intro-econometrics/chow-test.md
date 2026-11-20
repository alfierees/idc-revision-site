---
title: Chow Test
subject: intro-econometrics
aliases: []
related: ["F-test", "Interaction Term", "Dummy Variable", "Chow-Fisher Test", "Heteroskedasticity"]
source_folder: intro-econometrics
ai_drafted: true
---

An [[F-test]] of whether one regression pools two groups or the coefficients differ across groups. Version 1 compares a pooled model with one that adds a group dummy and its interaction; version 2 fits each group separately and uses $RSS_m + RSS_f$ as the unrestricted RSS.

## When to use

Reject if the intercept differs, the slope differs, or both; count the restrictions $q$ carefully. Under group [[Heteroskedasticity]] the separate-regression version is preferred because each group keeps its own variance.

See [[Lec_11-Interaction Terms|Lecture 11]].
