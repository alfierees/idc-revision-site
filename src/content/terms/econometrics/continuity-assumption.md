---
title: Continuity Assumption
subject: econometrics
aliases: ["continuity at the cutoff"]
related: ["regression-discontinuity", "cutoff", "running-variable"]
source_folder: econometrics
ai_drafted: true
---

The **continuity assumption** is the identifying assumption of [[Regression Discontinuity]]: in the *absence* of treatment, the conditional expectation of the outcome would evolve *smoothly* through the [[Cutoff]]. No other variable can jump discontinuously at the threshold for any reason other than the treatment itself. Under continuity, any observed jump in $y$ at the cutoff is attributable to the treatment alone.

## When to use

Continuity is plausible when units cannot perfectly sort across the cutoff. Defend it by (i) plotting pre-treatment covariates against the running variable — they should not jump at the cutoff (a [[Placebo Test]]); (ii) running the [[McCrary Density Test]] — the density of the running variable should be continuous at the cutoff (sorting would create a bunched-up density). If either test fails, the design is compromised.
