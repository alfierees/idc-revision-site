---
title: Panel Data
subject: econometrics
aliases: ["longitudinal data", "panel"]
related: ["fixed-effects", "individual-fixed-effect", "time-fixed-effects", "between-variation", "within-variation", "clustered-standard-errors"]
source_folder: econometrics
ai_drafted: true
---

**Panel data** (longitudinal data) tracks the *same units* — people, firms, states, judges — across *multiple time periods*. Each unit appears in the dataset more than once. This unlocks comparisons of a unit *to itself* over time, which controls for every stable, time-invariant characteristic of that unit (observable or not). The structure is indexed by $(i, t)$ with $i$ for unit and $t$ for time.

## When to use

Reach for panel methods whenever the data have repeat observations per unit. The standard moves: [[Fixed Effects]] with unit dummies to absorb time-invariant unobservables, [[Time Fixed Effects]] with time dummies for nationwide shocks, [[Two-Way Fixed Effects]] for both, and [[Clustered Standard Errors]] (clustered at the unit level) for honest inference under within-unit serial correlation. PS_4 is the canonical example: 48 states × 23 years of seatbelt-law data, where the staggered timing of state-by-state law adoption supplies the treatment variation.
