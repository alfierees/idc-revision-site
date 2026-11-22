---
title: Model Misspecification
subject: intro-econometrics
aliases: []
related: ["Omitted Variable Bias", "Functional Form", "t-test", "Multicollinearity"]
source_folder: intro-econometrics
ai_drafted: true
---

Choosing the wrong specification: the wrong functional form, or the wrong set of variables. The lecture's two variable-choice errors are adding an irrelevant variable (coefficients stay unbiased, only precision suffers) and omitting a relevant correlated variable (bias).

## When to use

Spot an irrelevant variable by a failed [[t-test]] and drop it (after checking it is not just collinear); fix an omission, the more dangerous error, by adding the variable back. When unsure, keep a borderline variable, since bias is worse than extra variance.

See [[Lec_09-Model Misspecification & Quadratics|Lecture 9]] and [[Lec_10-Dummy Variables|Lecture 10]] and [[Lec_13-Exam Review|Lecture 13]].