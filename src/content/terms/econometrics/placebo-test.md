---
title: Placebo Test
subject: econometrics
aliases: ["covariate balance test", "placebo check"]
related: ["regression-discontinuity", "continuity-assumption", "running-variable"]
source_folder: econometrics
ai_drafted: true
---

A **placebo test** in [[Regression Discontinuity]] runs the same RDD specification using **predetermined covariates** as the outcome instead of $y$. Pre-treatment characteristics — age, prior test scores, household demographics — should not jump at the cutoff if the [[Continuity Assumption]] holds. A significant jump in a placebo outcome signals either sorting (compromising the design) or that the cutoff coincides with another discontinuous policy.

## When to use

Run placebo tests on every covariate you have for which a jump at the cutoff would be implausible. PS_5 could test, for instance, whether firm size or industry mix jumps discontinuously at the 50% vote share — if they do, "winning the vote" is correlated with something other than the treatment itself. Placebo tests can also use **placebo cutoffs** (false thresholds at other points of the running variable): there should be no jump there.
