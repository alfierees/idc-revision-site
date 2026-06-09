---
title: Fixed Effects
subject: econometrics
aliases: ["fixed effects estimator", "FE", "fixed-effects model"]
related: ["panel-data", "within-estimator", "demeaning", "individual-fixed-effect", "time-fixed-effects"]
source_folder: econometrics
ai_drafted: true
---

The **fixed effects (FE) estimator** adds a separate intercept $\alpha_i$ for each unit in a panel: $y_{it} = \alpha_i + \beta x_{it} + u_{it}$. The unit dummy absorbs every time-invariant characteristic of unit $i$ — observable or unobservable — so $\hat\beta$ is identified purely from variation *within* a unit over time. The effect of cross-unit differences (a major source of bias in pooled OLS) is mechanically purged.

## When to use

Use FE whenever you have [[Panel Data]] and suspect unobserved time-invariant confounders. PS_4 is the textbook case: pooled OLS estimates a −18 % seatbelt-law effect, but state FE shrinks it to −7 % because the early-adopting states were already safer for fixed reasons (road quality, terrain, driving culture). Always cluster standard errors at the unit level — within-unit serial correlation otherwise produces falsely tight SEs. FE absorbs only **time-invariant** characteristics; a regressor that changes over time and is also correlated with $u$ remains a problem (use IV or DiD).
