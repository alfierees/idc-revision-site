---
title: Dynamic Difference-in-Differences
subject: econometrics
aliases: ["dynamic-did", "event-study DiD", "period-specific DiD"]
related: ["difference-in-differences", "event-study", "parallel-trends-assumption", "prior-trends-test"]
source_folder: econometrics
ai_drafted: true
---

A DiD that estimates a **separate treatment effect for each period** instead of one average effect: an [[Event Study]] in DiD form. Two versions: **period-specific**, where the treatment-group dummy is interacted with a dummy for each period (one reference period is omitted to avoid perfect multicollinearity, and the pre-treatment coefficients should be about 0 if [[Parallel Trends Assumption|parallel trends]] holds); and **linear-trend**, where the effect changes by a fixed amount each period, so the effect in treated period $k$ is $\delta_1+\delta_2(k-1)$.

## When to use

When you suspect the effect builds up, fades or persists (gym incentives that fade after payments stop, a daycare fee whose effect persists after it is removed). Test $H_0:\delta_2=0$ in the linear-trend version: failing to reject means there are no dynamics and the standard single-effect [[Difference-in-Differences]] will do.

See [[Lec_11-Difference-in-Differences II (Dynamic DiD)|Lec 11]] and [[Lec_12-Course Summary (Late Fees at Daycare)|Lec 12]].
