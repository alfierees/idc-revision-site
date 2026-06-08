---
title: Between Variation
subject: econometrics
aliases: ["between-unit variation", "cross-sectional variation"]
related: ["within-variation", "fixed-effects", "panel-data"]
source_folder: econometrics
ai_drafted: true
---

**Between variation** is the part of a variable's variance that lives in the *averages across units* — differences between unit-$i$'s mean and unit-$j$'s mean. In a panel, total variation decomposes into between (across units) plus [[Within Variation|within]] (within a unit, across time). Pooled OLS uses both; [[Fixed Effects]] purges between variation and uses only within.

## When to use

Be wary of between variation whenever cross-unit differences could be driven by unobserved fixed traits. PS_4's −18% pooled OLS estimate is built largely on between variation — and that variation is contaminated by states' unobserved fixed safety levels (road quality, terrain). The FE estimate of −7% uses only within-state variation and is therefore much more credible. The "between estimator" exists (run OLS on the unit means) but is rarely used in modern applied work for this reason.
