---
title: Two-Way Fixed Effects
subject: econometrics
aliases: ["TWFE", "two-way FE", "two-dimensional fixed effects"]
related: ["fixed-effects", "individual-fixed-effect", "time-fixed-effects", "difference-in-differences"]
source_folder: econometrics
ai_drafted: true
---

**Two-way fixed effects (TWFE)** include dummies on *two* dimensions simultaneously — most commonly unit and time: $y_{it} = \alpha_i + \lambda_t + \beta x_{it} + u_{it}$. Individual dummies $\alpha_i$ purge all time-invariant unit traits; time dummies $\lambda_t$ purge all unit-invariant shocks. The remaining variation that identifies $\hat\beta$ is the *interaction* — within-unit deviations from the unit's mean, relative to within-period deviations from the period's mean.

## When to use

TWFE is the panel-data version of [[Difference-in-Differences]] — it identifies treatment effects from the **differential timing** at which units enter treatment. PS_4's FE2 is the textbook setup: state FE removes everything fixed about each state, year FE removes every nationwide shock, and the seatbelt law's effect is identified from states that switched the law on at different times. Always cluster SEs at the unit (not unit-and-time) level. Recent literature (Goodman-Bacon, de Chaisemartin-D'Haultfœuille) shows TWFE estimators are biased under treatment-effect heterogeneity over time — but for short, simple panels they remain the default.
