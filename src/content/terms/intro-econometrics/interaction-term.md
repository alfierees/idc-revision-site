---
title: Interaction Term
subject: intro-econometrics
aliases: ["Interaction Terms"]
related: ["Dummy Variable", "Chow Test", "Marginal Effect", "Elasticity"]
source_folder: intro-econometrics
ai_drafted: true
---

The product of two regressors, as in $y_i = \beta_0 + \beta_1 x_i + \beta_2\,male_i + \beta_3 (x_i\cdot male_i) + u_i$. The dummy $\beta_2$ shifts the intercept while the interaction $\beta_3$ changes the slope, so the effect of $x$ can differ by group.

## When to use

Use it to give each group its own slope, to write the [[Chow Test]] as a pooled regression, or to estimate group-specific [[Elasticity]] values (for example by beverage type).

See [[Lec_11-Interaction Terms|Lecture 11]].
