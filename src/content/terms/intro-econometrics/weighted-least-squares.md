---
title: Weighted Least Squares
subject: intro-econometrics
aliases: ["WLS"]
related: ["Heteroskedasticity", "Generalized Least Squares", "White Correction", "Gauss-Markov Theorem"]
source_folder: intro-econometrics
ai_drafted: true
---

OLS after dividing every term by $\sqrt{h_i}$, where $Var(u_i)=\sigma^2 h_i$, which is inverse-variance weighting: noisy observations get less weight. OLS is the equal-weight special case, and WLS is itself a special case of [[Generalized Least Squares]].

## When to use

Use it when the form of the [[Heteroskedasticity]] is known: the transformed model satisfies A4, so the estimates are efficient (BLUE), though the coefficients and $R^2$ change. Check that the leftover error variance collapses to a constant.

See [[Lec_12-Heteroskedasticity|Lecture 12]].
