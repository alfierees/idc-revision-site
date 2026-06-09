---
title: Weak Instruments
subject: econometrics
aliases: ["weak instrument problem"]
related: ["instrumental-variables", "instrument-relevance", "first-stage"]
source_folder: econometrics
ai_drafted: true
---

An instrument is **weak** when it only loosely correlates with the endogenous regressor — the [[First Stage]] coefficient is small or the first-stage F-statistic is below the conventional threshold of 10. With weak instruments, the IV estimate is severely biased toward the OLS estimate (the very thing you were trying to escape) and has hugely inflated standard errors. The bias does not shrink with sample size.

## When to use

Diagnose weak instruments whenever you use IV — it's a precondition for trusting the estimate. The Staiger-Stock rule: first-stage F < 10 = weak. Modern recommendations (Andrews-Stock-Sun) put the threshold higher (closer to 20 for some test inversions). PS_2's parents-education instrument has F = 953, comfortably strong; many real-world papers are not so lucky. Fix: find a stronger instrument, or use weak-instrument-robust inference (Anderson-Rubin confidence intervals).
