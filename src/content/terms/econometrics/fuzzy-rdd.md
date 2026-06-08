---
title: Fuzzy RDD
subject: econometrics
aliases: ["fuzzy regression discontinuity", "fuzzy RD"]
related: ["regression-discontinuity", "sharp-rdd", "instrumental-variables", "wald-estimator"]
source_folder: econometrics
ai_drafted: true
---

In a **fuzzy RDD**, crossing the [[Cutoff]] **changes the probability** of treatment but does not deterministically assign it. The first-stage jump in treatment probability is less than 1: some units above the cutoff don't take the treatment, some below it do (e.g. scholarship offers that recipients can decline). The fuzzy design is estimated as **IV with the cutoff dummy as the instrument**: the [[Wald Estimator]] (jump in outcome / jump in treatment probability) is the [[Local Average Treatment Effect|LATE]] for compliers near the cutoff.

## When to use

Use fuzzy RDD when the cutoff is "encouraging" rather than mandatory: eligibility for a program that some eligible people skip, age limits with exemptions, financial-aid offers that families can decline. The two extra requirements vs sharp RDD: a *meaningful* jump in treatment probability at the cutoff (analogue of instrument relevance) and the exclusion restriction (cutoff affects $Y$ only through the treatment).
