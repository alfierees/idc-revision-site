---
title: Difference-in-Differences
subject: econometrics
aliases: ["DiD", "DD", "diff-in-diff"]
related: ["two-way-fixed-effects", "fixed-effects", "panel-data", "causal-inference"]
source_folder: econometrics
ai_drafted: true
---

**Difference-in-Differences (DiD)** identifies a treatment effect by comparing the *change* in outcomes for the treated group to the *change* for an untreated control group. The "two differences": (1) post − pre for the treated, (2) post − pre for the control; DiD = (1) − (2). With staggered treatment timing across many units, the design generalises to [[Two-Way Fixed Effects]]: $y_{it} = \alpha_i + \lambda_t + \beta \cdot \text{treat}_{it} + u_{it}$. The unit FE absorb baseline differences, the time FE absorb common shocks, and $\beta$ is identified from the within-unit change at the time of treatment.

## When to use

DiD is the workhorse design for policy evaluation when randomisation isn't feasible and a credible control group exists. PS_4's seatbelt-law TWFE is exactly DiD with staggered adoption. The identifying assumption is **parallel trends**: in the absence of treatment, treated and control groups would have evolved on the same trajectory. Plot the pre-treatment trends to support this. Recent literature (Goodman-Bacon, Sun-Abraham, Callaway-Sant'Anna) shows TWFE can give biased estimates when treatment effects evolve over time or vary across cohorts — for those cases, use the modern heterogeneity-robust estimators.
