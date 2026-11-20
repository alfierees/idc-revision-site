---
title: Heteroskedasticity
subject: intro-econometrics
aliases: []
related: ["Classical Assumptions", "Weighted Least Squares", "White Correction", "Robust Standard Errors", "Gauss-Markov Theorem"]
source_folder: intro-econometrics
ai_drafted: true
---

Non-constant error variance, so A4 fails. OLS stays unbiased, but the usual standard-error formula is biased, making t- and F-tests invalid, and by [[Gauss-Markov Theorem]] OLS is no longer efficient.

## When to use

In R output only the coefficient estimates remain trustworthy. Fix it with [[Weighted Least Squares]] when you know the variance form, or with the [[White Correction]] when you do not.

See [[Lec_12-Heteroskedasticity|Lecture 12]].
