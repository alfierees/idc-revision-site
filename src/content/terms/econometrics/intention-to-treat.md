---
title: Intention-to-Treat
subject: econometrics
aliases: ["ITT"]
related: ["instrumental-variables", "local-average-treatment-effect", "endogeneity", "treatment-effect"]
source_folder: econometrics
ai_drafted: true
---

The effect of being **assigned or offered** a treatment, regardless of whether the unit actually takes it up. Used when take-up is a **choice** ([[Endogeneity|endogenous]]) but assignment is randomised: regressing on assignment gives the unbiased ITT, which is also the policy-relevant quantity (an employer or government controls offers, not compliance).

## When to use

When "offered" differs from "took up" (the gym commitment contract in Lec 11). The effect of *actually complying* is recovered with [[Instrumental Variables|IV]], instrumenting take-up with the randomised offer, which gives the effect on compliers (a [[Local Average Treatment Effect|LATE]]).

See [[Lec_11-Difference-in-Differences II (Dynamic DiD)|Lec 11]].
