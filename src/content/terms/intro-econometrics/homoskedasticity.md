---
title: Homoskedasticity
subject: intro-econometrics
aliases: []
related: ["Heteroskedasticity", "Classical Assumptions", "Gauss-Markov Theorem", "Variance of the OLS Estimator", "Robust Standard Errors"]
source_folder: intro-econometrics
ai_drafted: true
---

Assumption A4: $\mathrm{Var}(u\mid x)=\sigma^2$ for every $x$, meaning the error variance is constant. It is needed for the usual variance formula for OLS.

## When to use

If A4 fails, OLS stays unbiased but is no longer efficient and the usual variance formula is wrong; the fix in Lecture 12 is robust standard errors.

See [[Lec_04-OLS Estimator Properties|Lec 4]].
