---
title: Estimation Period
subject: econometrics
aliases: ["estimation window", "pre-event window"]
related: ["event-study", "observation-period", "abnormal-returns"]
source_folder: econometrics
ai_drafted: true
---

The **estimation period** in an [[Event Study]] is the pre-event window used to fit the baseline ("business as usual") model. Coefficients estimated here are projected forward into the [[Observation Period]] to compute predicted values and [[Abnormal Returns]]. The estimation window should be long enough for reliable estimation but free of anticipation effects that contaminate the baseline.

## When to use

Pick the estimation period before fitting anything. PS_3 chose Jan 1 1986 – Nov 19 1989 (~3.9 years pre-HNC) — long enough for four full annual cycles to identify seasonal coefficients, and ending exactly at the policy date to avoid post-policy contamination. The trade-off: longer estimation periods give more precise baseline coefficients but risk the data-generating process changing slowly over time; shorter periods are more current but noisier.
