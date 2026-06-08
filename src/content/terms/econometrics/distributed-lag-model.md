---
title: Distributed Lag Model
subject: econometrics
aliases: ["DL model", "distributed lag"]
related: ["time-series", "static-model", "autoregressive-model"]
source_folder: econometrics
ai_drafted: true
---

A **distributed lag model** lets $x$ affect $y$ over multiple periods: $y_t = \alpha_0 + \delta_0 x_t + \delta_1 x_{t-1} + \delta_2 x_{t-2} + \cdots + u_t$. Each $\delta_k$ is the effect of $x$ at time $t$ on $y$ at time $t + k$ (the **impulse response** of $y$ to $x$). The **long-run multiplier** $\sum_k \delta_k$ is the total cumulative effect.

## When to use

Reach for a DL model whenever the response of $y$ to $x$ takes time — fiscal policy on output, monetary policy on inflation, weather on agricultural yields. PS_3 uses lagged weather (`tmp_l1`, `rh_l1`, `wsp_l1`) because yesterday's meteorological conditions still influence today's NOₓ via atmospheric persistence. The number of lags is a modelling choice — too few risks omitted-lag bias, too many burns degrees of freedom.
