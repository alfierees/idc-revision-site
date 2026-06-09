---
title: Deterministic Time Trend
subject: econometrics
aliases: ["time trend", "linear trend", "deterministic trend"]
related: ["time-series", "spurious-regression", "detrending"]
source_folder: econometrics
ai_drafted: true
---

A **deterministic time trend** is systematic drift in a series over time that can be modelled as a known function of $t$: linear ($y_t = \alpha_0 + \alpha_1 t + u_t$), quadratic ($+\alpha_2 t^2$), or exponential ($\log y_t = \alpha_0 + \alpha_1 t$). Including $t$ as a regressor — or first-differencing — removes the trend; the resulting "[[Detrending|detrended]]" series is what enters substantive analysis.

## When to use

Add a time trend whenever a series exhibits secular drift: vehicle fleet growth, technological improvement, population. PS_3's HNC coefficient is biased upward without controlling for the secular rise in the Mexico City vehicle fleet — the policy started halfway through the sample, so any uncontrolled trend gets attributed to the policy. PS_4's FE1 specification includes a linear trend $\beta_2 \cdot \text{year}_t$ for the same reason: nationwide improvements in road safety (safer cars, trauma medicine) shouldn't be attributed to seatbelt laws. The [[Frisch-Waugh-Lovell theorem|FWL]] equivalence: adding $t$ as a regressor is identical to detrending the data first.
