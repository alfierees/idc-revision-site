---
title: Static Model
subject: econometrics
aliases: ["static time-series model"]
related: ["time-series", "distributed-lag-model", "autoregressive-model"]
source_folder: econometrics
ai_drafted: true
---

A **static model** in time series is one where $x$ affects $y$ only contemporaneously: $y_t = \beta_0 + \beta_1 x_t + u_t$. There is no carry-over, no lags. It is the simplest time-series specification and assumes the entire impact of $x$ on $y$ happens in the same period.

## When to use

Static models work when the relationship is genuinely immediate (e.g. today's weather → today's pollution dispersion, abstracting from yesterday's residual air mass). For most economic relationships — investment responding to interest rates, inflation responding to money supply — the immediate-effect assumption is too strong and a [[Distributed Lag Model]] or [[Autoregressive Model]] is more realistic.
