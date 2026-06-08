---
title: Local Average Treatment Effect
subject: econometrics
aliases: ["LATE", "LOCAL effect"]
related: ["instrumental-variables", "regression-discontinuity", "two-stage-least-squares"]
source_folder: econometrics
ai_drafted: true
---

The **Local Average Treatment Effect (LATE)** is the average treatment effect for the subpopulation whose treatment status is *changed* by the instrument (or by crossing the RDD cutoff). [[Instrumental Variables|IV]] does not estimate the average effect for everyone in the sample — it estimates the effect for **compliers**, the subset of units who would take the treatment if and only if the instrument pushed them to. In [[Regression Discontinuity|RDD]], LATE is the effect for units close to the cutoff.

## When to use

Always interpret IV and RDD estimates as local effects, not population averages. The Angrist draft-lottery estimate is the effect of military service *for men whose service decision was changed by their draft number* — not for someone who volunteered regardless of the draft. PS_5's RDD estimates the union → recall effect for firms with near-50% vote shares, not the average effect across all unionised firms. This is the **internal-validity vs external-validity** trade-off: LATE is highly credible *for the compliers* but may not generalise to the whole population.
