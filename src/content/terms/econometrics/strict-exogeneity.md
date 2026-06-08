---
title: Strict Exogeneity
subject: econometrics
aliases: ["strictly exogenous"]
related: ["time-series", "autoregressive-model"]
source_folder: econometrics
ai_drafted: true
---

**Strict exogeneity** is the time-series version of the zero-conditional-mean assumption: $\mathbb E[u_t \mid \mathbf X] = 0$ for *all* time periods — past, present, *and* future. It is stronger than contemporaneous exogeneity ($\mathbb E[u_t \mid x_t] = 0$), which only requires the current period's error to be uncorrelated with the current regressor.

## When to use

Strict exogeneity fails for [[Autoregressive Model|autoregressive models]] (where lagged $y$ is a regressor and obviously correlates with past errors) and in any system with feedback (central bank reacts to past inflation → today's interest rate depends on past errors of inflation). Many panel and dynamic-panel estimators (Arellano-Bond, Anderson-Hsiao) exist *because* strict exogeneity is implausible in those settings.
