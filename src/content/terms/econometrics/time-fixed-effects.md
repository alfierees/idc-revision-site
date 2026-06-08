---
title: Time Fixed Effects
subject: econometrics
aliases: ["time FE", "year fixed effects", "lambda_t"]
related: ["two-way-fixed-effects", "panel-data", "fixed-effects"]
source_folder: econometrics
ai_drafted: true
---

**Time fixed effects** $\lambda_t$ are dummy variables — one per time period — that absorb whatever happens uniformly across all units in that period. National recessions, federal policy shocks, technology rollouts, fuel-price spikes — anything that hits all units in year $t$ equally is captured by $\lambda_t$ and removed from the residual. They are the flexible, no-functional-form alternative to a [[Deterministic Time Trend|linear time trend]].

## When to use

Add time FE whenever common-shock confounders are plausible. PS_4's FE2 specification uses year dummies to absorb every nationwide shock — the 1995 repeal of the 55 mph limit, federal airbag mandates, recessions — without imposing that they happen on a smooth time path. The cost is a handful of degrees of freedom (one dummy per time period). When combined with individual FE → [[Two-Way Fixed Effects]] → the canonical [[Difference-in-Differences]] design.
