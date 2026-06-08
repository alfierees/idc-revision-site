---
title: Seasonality
subject: econometrics
aliases: ["seasonal effects", "seasonal pattern"]
related: ["time-series", "deterministic-time-trend"]
source_folder: econometrics
ai_drafted: true
---

**Seasonality** is a regular, calendar-driven pattern in a time series — winter peaks in heating demand, summer troughs in unemployment, Q4 spikes in retail sales. Failing to control for it leaves seasonal variation in the residuals, which can both bias coefficients (if the treatment timing correlates with a season) and inflate residual standard errors. The standard fix is **seasonal dummies**: one indicator per season-of-year level (e.g. 11 month-of-year dummies, with January as the omitted reference).

## When to use

Add seasonal dummies (`factor(month)`, `factor(day_of_week)`, `factor(quarter)`) to any time-series regression whose data shows visible periodicity. PS_3's HNC analysis must control for month-of-year (Mexico City winter inversions trap NOₓ) and day-of-week (commuting traffic) — these dummies absorb the seasonal level, so the coefficient on the HNC dummy is identified from variation *within* a given month and weekday across years.
