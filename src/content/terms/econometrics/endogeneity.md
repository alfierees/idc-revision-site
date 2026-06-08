---
title: Endogeneity
subject: econometrics
aliases: ["endogenous regressor"]
related: ["instrumental-variables", "omitted-variable-bias"]
source_folder: econometrics
ai_drafted: true
---

A regressor is **endogenous** when it is correlated with the error term: $\text{cov}(X_i, u_i) \neq 0$. Under endogeneity, OLS is both **biased and inconsistent** — more data does not heal the bias because OLS converges to the wrong target. The three classic sources are: [[Omitted Variable Bias|omitted variables]] (a confounder drives both $X$ and $Y$), **reverse causality** ($Y$ causes $X$), and **selection** (who is treated is not random).

## When to use

Flag endogeneity whenever your regressor of interest could plausibly be tangled up with anything in $u$. PS_2's education-fertility regression is the textbook case: cultural norms drive both schooling and family size (omitted variable), and having children early forces women to leave school (reverse causality). The standard fixes are [[Instrumental Variables]], [[Fixed Effects]] for time-invariant confounders, [[Regression Discontinuity]] for sharp cutoffs, and randomised experiments when feasible.
