---
title: Bandwidth
subject: econometrics
aliases: ["RDD bandwidth", "window"]
related: ["regression-discontinuity", "running-variable", "cutoff", "local-average-treatment-effect"]
source_folder: econometrics
ai_drafted: true
---

The **bandwidth** in [[Regression Discontinuity]] is the window of running-variable values around the [[Cutoff]] within which observations are used for estimation. A narrower bandwidth makes the comparison more credible (units closer to the cutoff are more comparable) but cuts sample size and inflates standard errors; a wider bandwidth keeps more data but relies on the functional form holding far from the cutoff. The classic **bias-variance trade-off**.

## When to use

Choose the bandwidth deliberately. PS_5 uses ±0.1 around the 50% vote cutoff (322 of 1,144 observations). Modern practice uses data-driven bandwidth selectors: the Imbens-Kalyanaraman (IK) optimum, or Calonico-Cattaneo-Titiunik (CCT) — both implemented in R's `rdrobust` package. Report estimates at multiple bandwidths as a robustness check; large swings signal that the functional form, not the jump, is doing the work.
