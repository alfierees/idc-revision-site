---
title: Serial Correlation
subject: econometrics
aliases: ["autocorrelation", "auto-correlation"]
related: ["time-series", "hac-standard-errors", "clustered-standard-errors"]
source_folder: econometrics
ai_drafted: true
---

**Serial correlation** is non-zero correlation between error terms across time periods: $\text{cov}(u_t, u_{t-k}) \neq 0$ for some $k \neq 0$. It violates OLS assumption A3 (independence) and makes the classical standard errors **too small** — t-stats look too large, p-values misleadingly low, and inference over-rejects the null. The OLS *point estimates* remain unbiased; only the inference is wrong.

## When to use

Suspect serial correlation in any daily, monthly, or annual time series — atmospheric persistence, business-cycle dynamics, lagged variables in the model, or any unmodelled trend / seasonal component all generate it. PS_3's daily NOₓ regression is the canonical case. Diagnose with the **Breusch-Godfrey test** (`lmtest::bgtest(model, order = k)`) which beats Durbin-Watson because it handles multiple lags and lagged regressors. Fix with [[HAC Standard Errors|Newey-West / HAC]] standard errors (`sandwich::NeweyWest()`) — they correct for autocorrelation and heteroskedasticity simultaneously.
