---
title: F-test
subject: econometrics
aliases: ["F test", "joint significance test", "F-statistic"]
related: ["hypothesis-testing", "likelihood-ratio-test", "ols-estimator", "instrument-relevance"]
source_folder: econometrics
ai_drafted: true
---

The **F-test** is the OLS workhorse for jointly testing multiple linear restrictions on coefficients. The statistic compares the residual sum of squares of the restricted and unrestricted models: $F = \frac{(SSR_R - SSR_{UR}) / q}{SSR_{UR} / (n - k - 1)}$, where $q$ is the number of restrictions. Under $H_0$, $F \sim F(q, n - k - 1)$; reject if $F$ exceeds the critical value (or p < $\alpha$).

## When to use

Standard uses: testing whether a group of regressors is jointly insignificant, testing whether two coefficients are equal, testing the overall fit of a regression ($H_0$: all slopes = 0). In R: `linearHypothesis(model, c("x1 = 0", "x2 = 0"))` from `car`. The first-stage F is the standard [[Instrument Relevance]] diagnostic in IV (F > 10 = not weak). The MLE analogue for non-linear models is the [[Likelihood Ratio Test]].
