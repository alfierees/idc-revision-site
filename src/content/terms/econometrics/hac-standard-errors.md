---
title: HAC Standard Errors
subject: econometrics
aliases: ["Newey-West standard errors", "HAC", "heteroskedasticity and autocorrelation consistent", "Newey-West", "newey-west"]
related: ["serial-correlation", "time-series", "heteroskedasticity"]
source_folder: econometrics
ai_drafted: true
---

**HAC standard errors** (heteroskedasticity and autocorrelation consistent) — most commonly **Newey-West** — are the time-series analogue of robust standard errors. They correct OLS standard errors for *both* [[Heteroskedasticity]] *and* [[Serial Correlation]] in the residuals, using a kernel that down-weights more distant lags. HAC SEs are almost always *larger* than naive OLS SEs, so t-stats fall and p-values rise to honest levels.

## When to use

Use HAC SEs as the default for any time-series regression. R: `coeftest(model, vcov = NeweyWest(model))` from the `sandwich` / `lmtest` packages. The bandwidth (number of lags) is chosen by Newey-West's automatic rule (`NeweyWest()`) or set manually for the autocorrelation horizon you expect. PS_3 illustrates the contrast: under OLS the HNC coefficient looks significant, but under HAC the t-stat drops and significance can disappear.
