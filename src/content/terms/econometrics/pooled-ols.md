---
title: Pooled OLS
subject: econometrics
aliases: ["pooled regression", "pooled-OLS"]
related: ["panel-data", "fixed-effects", "between-variation", "within-variation"]
source_folder: econometrics
ai_drafted: true
---

**Pooled OLS** runs a single OLS regression on all $N \times T$ panel observations, treating them as if they were $N \times T$ independent draws. It ignores the panel structure entirely: no unit dummies, no time dummies, no clustering. Pooled OLS conflates [[Between Variation|between]] and [[Within Variation|within]] variation, so its estimate of $\beta$ is contaminated by every time-invariant cross-unit confounder.

## When to use

Pooled OLS is a useful **baseline** to show how much bias your panel structure introduces — but it should rarely be the headline estimate. PS_4 reports pooled OLS at −18% and then [[Fixed Effects|FE]] at −7%, making the bias from unobserved fixed state heterogeneity transparent. Use pooled OLS only when you can credibly argue that there are no unit-level unobservables correlated with the regressor (rare in practice).
