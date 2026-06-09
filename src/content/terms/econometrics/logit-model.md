---
title: Logit Model
subject: econometrics
aliases: ["logit", "logistic regression", "discrete-choice"]
related: ["probit-model", "linear-probability-model", "maximum-likelihood-estimation", "marginal-effects"]
source_folder: econometrics
ai_drafted: true
---

The **logit model** is a binary-outcome model estimating $\Pr(y = 1 \mid \mathbf{x}) = \exp(\mathbf{x}'\boldsymbol\beta) / [1 + \exp(\mathbf{x}'\boldsymbol\beta)]$ — the logistic CDF applied to the linear index. Like [[Probit Model|probit]], logit squashes predictions into $[0, 1]$, fixes the LPM's unbounded-probability problem, and is estimated by [[Maximum Likelihood Estimation|MLE]]. The two models give nearly indistinguishable predictions in practice.

## When to use

Same domain as probit — binary outcomes where the LPM's drawbacks bite. Logit has the advantage that coefficients can be interpreted as log-odds (a one-unit increase in $x_j$ multiplies the odds $p/(1-p)$ by $\exp(\hat\beta_j)$); the AME is computed via `dlogis()`. Use whichever your instructor prefers — the choice is rarely substantive. R: `glm(y ~ x, family = binomial(link = "logit"), data = df)`.
