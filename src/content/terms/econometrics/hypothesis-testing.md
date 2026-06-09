---
title: Hypothesis Testing
subject: econometrics
aliases: ["hypothesis test", "significance test"]
related: ["f-test", "likelihood-ratio-test", "ols-estimator"]
source_folder: econometrics
ai_drafted: true
---

**Hypothesis testing** is the framework for deciding whether observed data is consistent with a stated null hypothesis $H_0$ (typically "no effect") or favours the alternative $H_1$. The standard recipe: compute a test statistic from the data, compare it to its sampling distribution under $H_0$, and **reject $H_0$** if the statistic falls in the tail (p-value < significance level $\alpha$, usually 0.05). The two complementary errors are Type I (reject a true $H_0$, probability $\alpha$) and Type II (fail to reject a false $H_0$).

## When to use

Every regression coefficient comes with an implicit hypothesis test $H_0: \beta_j = 0$ via its $t$-statistic. Joint hypotheses (e.g. "are these three coefficients all zero?") use the [[F-test]] under OLS or the [[Likelihood Ratio Test]] under MLE. Confidence intervals are the dual: a 95% CI is the set of $\beta_0$ values for which $H_0: \beta = \beta_0$ would *not* be rejected at the 5% level.
