---
title: Probit Model
subject: econometrics
aliases: ["probit", "probit regression"]
related: ["logit-model", "linear-probability-model", "maximum-likelihood-estimation", "marginal-effects"]
source_folder: econometrics
ai_drafted: true
---

The **probit model** is a binary-outcome model that estimates $\Pr(y = 1 \mid \mathbf{x}) = \Phi(\mathbf{x}'\boldsymbol\beta)$, where $\Phi$ is the standard-normal CDF. By squashing the linear prediction $\mathbf{x}'\boldsymbol\beta \in (-\infty, +\infty)$ into $[0, 1]$, probit cures the [[Linear Probability Model|LPM]]'s out-of-range-probability problem; the price is non-linearity in parameters, so the model is estimated by [[Maximum Likelihood Estimation|MLE]] rather than OLS.

## When to use

Use probit when the LPM's unbounded predictions or constant marginal effects are uncomfortable — typically when many fitted values approach 0 or 1, or when the substantive question is about probabilities at the extremes. In practice probit and [[Logit Model|logit]] give nearly identical predictions; the choice rarely matters. Raw coefficients $\hat\beta_j$ tell you the direction only; for the *probability change* you need the [[Marginal Effects|marginal effect]] $\varphi(\bar{\mathbf{x}}'\hat{\boldsymbol\beta}) \cdot \hat\beta_j$ (see the [[Computing marginal effects (logit / probit)]] recipe). Hypothesis testing uses the [[Likelihood Ratio Test]] rather than the [[F-test]].
