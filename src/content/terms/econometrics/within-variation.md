---
title: Within Variation
subject: econometrics
aliases: ["within-unit variation", "time variation"]
related: ["between-variation", "fixed-effects", "within-estimator"]
source_folder: econometrics
ai_drafted: true
---

**Within variation** is the part of a variable's variance that comes from *changes within a unit over time* — how unit $i$ differs from its own average across time periods. In a panel decomposition, within + [[Between Variation|between]] = total. The [[Fixed Effects]] / [[Within Estimator]] uses *only* within variation; it is what makes panel methods credible for causal inference under unobserved time-invariant confounders.

## When to use

Whenever a panel-data design is justified, the credibility comes from within variation: a state's seatbelt law switches from 0 to 1 (PS_4); a judge gets older within a court (Heyes-Saberian); a firm's wages change over time. If a regressor has *no* within variation (e.g. a state's region of the country), FE cannot estimate its coefficient at all — the demeaning kills it.
