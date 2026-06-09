---
title: Regression Discontinuity
subject: econometrics
aliases: ["RDD", "regression discontinuity design", "regression-discontinuity", "polynomial RDD", "causal-inference/RDD"]
related: ["running-variable", "cutoff", "bandwidth", "sharp-rdd", "fuzzy-rdd", "continuity-assumption", "local-average-treatment-effect"]
source_folder: econometrics
ai_drafted: true
---

**Regression discontinuity design (RDD)** exploits a hard treatment-assignment rule based on a threshold of some [[Running Variable|running variable]]. Units just above and just below the [[Cutoff]] are otherwise comparable — they couldn't perfectly choose which side they landed on — yet one group is treated and the other isn't. Any **jump** in the outcome at the cutoff must therefore be the causal effect of treatment. RDD has the highest internal validity of any non-experimental design.

## When to use

Look for RDD whenever treatment is assigned by a quantitative rule: scholarship cutoffs (test scores), means-tested transfers (income), legal-drinking-age effects (age), close-elections (vote share), pension eligibility (date of birth). PS_5 uses the >50% union-vote rule. The estimand is a [[Local Average Treatment Effect|LOCAL]] effect (only for units near the cutoff), valid under the [[Continuity Assumption]]. Two main variants: [[Sharp RDD]] (treatment is deterministic at the cutoff) and [[Fuzzy RDD]] (treatment probability jumps but isn't 0→1, estimated via IV with the cutoff dummy as instrument).
