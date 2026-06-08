---
title: Within Estimator
subject: econometrics
aliases: ["within estimator", "fixed-effects within transformation"]
related: ["fixed-effects", "demeaning", "panel-data", "within-variation"]
source_folder: econometrics
ai_drafted: true
---

The **within estimator** is the algebraic equivalent of the [[Fixed Effects]] estimator. Instead of running OLS with unit dummies, it **demeans** each variable by subtracting the unit-specific mean: $\tilde y_{it} = y_{it} - \bar y_i$, $\tilde x_{it} = x_{it} - \bar x_i$, then runs OLS on the transformed data. The unit-fixed effect $\alpha_i$ vanishes in the demeaning (it equals its own mean), leaving $\hat\beta$ identified by [[Within Variation|within-unit variation]] only.

## When to use

In practice you don't compute this by hand — `feols(y ~ x | unit, data = df)` (`fixest`) or `plm(y ~ x, model = "within", data = df)` (`plm`) do the within-transformation automatically and produce identical $\hat\beta$ to OLS-with-dummies. The within form is faster on huge panels and clarifies the intuition: the coefficient comes from how *each unit's own changes* in $x$ relate to its own changes in $y$.
