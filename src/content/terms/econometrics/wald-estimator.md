---
title: Wald Estimator
subject: econometrics
aliases: ["Wald ratio"]
related: ["fuzzy-rdd", "instrumental-variables", "regression-discontinuity"]
source_folder: econometrics
ai_drafted: true
---

The **Wald estimator** is the IV estimator in its simplest form: a ratio of two reduced-form effects. In a [[Fuzzy RDD]], $\hat\beta_{\text{Wald}} = \frac{\text{jump in outcome at cutoff}}{\text{jump in treatment probability at cutoff}}$ — the "reduced form" over the "first stage." Algebraically it is the 2SLS estimator when the instrument is binary (the cutoff dummy) and there are no extra controls.

## When to use

The Wald estimator is the conceptual anchor for fuzzy RDD and binary-instrument IV (e.g. randomised-encouragement designs, draft-lottery instruments). Modern practice uses local-linear IV via `rdrobust::rdrobust(y, r, fuzzy = treat)` rather than computing the Wald ratio by hand, but the estimand is the same: the [[Local Average Treatment Effect|LATE]] for compliers.
