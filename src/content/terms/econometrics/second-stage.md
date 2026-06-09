---
title: Second Stage
subject: econometrics
aliases: ["second-stage regression", "structural equation"]
related: ["two-stage-least-squares", "first-stage"]
source_folder: econometrics
ai_drafted: true
---

In [[Two Stage Least Squares|2SLS]], the **second stage** is the regression of the outcome $Y$ on the *fitted* endogenous regressor $\hat X$ (from the [[First Stage]]) and the exogenous controls: $Y_i = \beta_0 + \beta_1 \hat X_i + \boldsymbol\beta_2' W_i + u_i$. The coefficient $\hat\beta_1$ is the IV estimate of the causal effect of $X$ on $Y$.

## When to use

Mechanically, the second stage is just another OLS regression — but never run it by hand with `lm(Y ~ X_hat)`, because the SEs ignore the uncertainty in $\hat X$ from the first stage and will be wrong. Use `ivreg()` or `fixest::feols()` with IV syntax, which compute the correct asymptotic SEs.
