---
title: Marginal Effects
subject: econometrics
aliases: ["marginal effect", "ME", "AME", "average marginal effect", "partial effects"]
related: ["logit-model", "probit-model", "linear-probability-model"]
source_folder: econometrics
ai_drafted: true
---

The **marginal effect** of a regressor $x_j$ is the change in $\Pr(y = 1)$ from a one-unit change in $x_j$, holding all else fixed. In [[Linear Probability Model|LPM]] the marginal effect *is* the coefficient $\hat\beta_j$. In [[Logit Model|logit]] and [[Probit Model|probit]] the marginal effect depends on where you are on the S-curve: $\partial \Pr / \partial x_j = g(\mathbf{x}'\boldsymbol\beta) \cdot \beta_j$, where $g$ is the link function's PDF (`dlogis` or `dnorm` in R).

## When to use

Whenever you need a *probability change* from a logit/probit regression — raw coefficients only tell direction. Two conventions: the **marginal effect at the mean (MEM)** evaluates $g(\bar{\mathbf{x}}'\hat{\boldsymbol\beta}) \cdot \hat\beta_j$ at the sample means, and the **average marginal effect (AME)** averages $g(\mathbf{x}_i'\hat{\boldsymbol\beta}) \cdot \hat\beta_j$ across all observations. R's `margins::margins(model)` returns the AME with proper standard errors. See the [[Computing marginal effects (logit / probit)]] recipe.
