---
title: Time Series
subject: econometrics
aliases: ["time-series data"]
related: ["serial-correlation", "deterministic-time-trend", "panel-data", "static-model", "distributed-lag-model", "autoregressive-model"]
source_folder: econometrics
ai_drafted: true
---

A **time series** is a sequence of observations on the same unit indexed by time: $\{y_1, y_2, \ldots, y_T\}$. Examples: daily NOₓ readings, annual GDP, monthly unemployment. The defining feature is **temporal ordering** — past influences future — which breaks the OLS independence assumption.

## When to use

Time-series tools apply whenever the data is one (or a few) unit measured repeatedly over time, as opposed to a [[Panel Data|panel]] of many units over time. The lecture's classical-assumption layer adds **strict exogeneity** (errors uncorrelated with regressors at every lead and lag), homoskedasticity over time, and no serial correlation. Three workhorse model types: [[Static Model|static]], [[Distributed Lag Model|distributed lag]], and [[Autoregressive Model|autoregressive]] — the choice depends on whether past $x$ or past $y$ helps predict today.
