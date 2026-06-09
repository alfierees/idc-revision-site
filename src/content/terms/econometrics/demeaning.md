---
title: Demeaning
subject: econometrics
aliases: ["within transformation", "mean-centering"]
related: ["fixed-effects", "within-estimator"]
source_folder: econometrics
ai_drafted: true
---

**Demeaning** is the operation $\tilde y_{it} = y_{it} - \bar y_i$ where $\bar y_i$ is the unit-$i$ mean: subtract each unit's average from every observation of that unit. Applied to all variables in a regression, demeaning is algebraically equivalent to adding unit dummies — the [[Within Estimator]] view of [[Fixed Effects]] estimation.

## When to use

Demeaning is the engine inside every fixed-effects estimator. Conceptually it strips out the *level* of each unit and forces the regression to identify $\hat\beta$ from *changes* within a unit over time. Any time-invariant regressor (e.g. a state's geographic region) is also demeaned to zero and drops out — which is why FE cannot estimate coefficients on time-invariant variables.
