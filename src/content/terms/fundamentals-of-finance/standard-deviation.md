---
title: Standard Deviation
subject: fundamentals-of-finance
aliases: ["SD", "Volatility", "Variance"]
related: ["Expected Return", "Portfolio Risk", "Covariance"]
source_folder: fundamentals-of-finance
ai_drafted: true
---

The square root of the variance of returns, $\sigma=\sqrt{\sum_i p_i\,(r_i-E(r))^2}$: the course's measure of total risk (the dispersion of outcomes). From historical data use `STDEV.S` (or `VAR.S` for the variance); annualise a monthly $\sigma$ by $\times\sqrt{12}$.

## When to use

Use it to place assets and portfolios on the mean-standard deviation plane, and in the [[Capital Market Line]] for efficient portfolios. For a single asset it overstates the risk that is priced: only the systematic part counts ([[Beta]]). Taught in [[Lesson_08-Risk, Return & Diversification]].
