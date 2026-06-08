---
title: First Stage
subject: econometrics
aliases: ["first-stage regression", "first stage equation"]
related: ["two-stage-least-squares", "instrument-relevance", "weak-instruments"]
source_folder: econometrics
ai_drafted: true
---

In [[Two Stage Least Squares|2SLS]], the **first stage** is the regression of the endogenous regressor $X$ on the instrument(s) $Z$ and all exogenous controls: $X_i = \gamma_0 + \gamma_1 Z_i + \boldsymbol\gamma_2' W_i + v_i$. Its fitted values $\hat X_i$ are what enter the second-stage outcome equation. The first-stage F-statistic on the instruments is the standard diagnostic for [[Instrument Relevance|relevance]] / [[Weak Instruments|weak instruments]].

## When to use

Always report the first stage alongside the second — readers need to see that the instruments actually move $X$. A first-stage coefficient of the expected sign and magnitude is reassuring; a tiny coefficient or low F is a red flag. R: with `ivreg`, call `summary(model, diagnostics = TRUE)` to see the first-stage F.
