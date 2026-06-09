---
title: Autoregressive Model
subject: econometrics
aliases: ["AR model", "AR(p)", "autoregression"]
related: ["time-series", "distributed-lag-model", "strict-exogeneity"]
source_folder: econometrics
ai_drafted: true
---

An **autoregressive model** lets the past of $y$ predict the present: $y_t = \alpha + \phi_1 y_{t-1} + \cdots + \phi_p y_{t-p} + e_t$ (AR($p$)). The lagged dependent variables serve as regressors, capturing inertia / persistence in the series. AR(1) — $y_t = \alpha + \phi y_{t-1} + e_t$ — is the workhorse.

## When to use

Use AR models for time series with built-in persistence: stock prices, exchange rates, inflation, GDP. Two caveats: (i) the lagged dependent variable mechanically violates [[Strict Exogeneity]] (it correlates with past errors), so OLS is biased in small samples but consistent under weaker assumptions; (ii) AR models can produce **spurious regression** if the series is non-stationary (unit root) — always test for stationarity first (Augmented Dickey-Fuller).
