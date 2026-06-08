---
title: Clustered Standard Errors
subject: econometrics
aliases: ["cluster-robust standard errors", "clustered SEs"]
related: ["panel-data", "fixed-effects", "serial-correlation"]
source_folder: econometrics
ai_drafted: true
---

**Clustered standard errors** are robust standard errors that allow for arbitrary correlation of errors *within* a cluster (and independence across clusters). In panel data the cluster is typically the unit ($i$) — observations for the same state across years are correlated, so SEs must account for that. Without clustering, classical OLS SEs are typically far too small, t-stats are inflated, and inference over-rejects.

## When to use

Cluster SEs at the level at which the treatment varies (or the most plausible level of correlation). PS_4 clusters at the state level — that's where seatbelt laws turn on and where serial correlation in fatalities lives. R: `feols(y ~ x | state, cluster = ~state)` (`fixest`) or `coeftest(model, vcov = vcovCL(model, cluster = ~state))` (`sandwich`). Rule of thumb: you need at least ~30–50 clusters for the asymptotic approximation to work; with very few clusters, use wild-cluster bootstrap.
