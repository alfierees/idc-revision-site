---
title: Linear in Parameters
subject: intro-econometrics
aliases: []
related: ["Functional Form", "Log-Log Model", "Log-Level Model", "Quadratic Model", "OLS Estimation"]
source_folder: intro-econometrics
ai_drafted: true
---

A model that is linear in the $\beta$s after the variables are transformed (logs, squares), so OLS still applies even if the relation between $x$ and $y$ is curved.

## When to use

Check this before using OLS on a nonlinear story: logs and quadratics are fine, but if no transformation makes the model linear in its parameters, OLS fails and you would need NLLS or GMM.

See [[Lec_03-Nonlinear Models with OLS|Lec 3]].
