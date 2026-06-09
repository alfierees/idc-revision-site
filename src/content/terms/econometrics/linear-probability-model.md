---
title: Linear Probability Model
subject: econometrics
aliases: ["LPM", "binary-outcome", "binary-outcomes"]
related: ["logit-model", "probit-model", "heteroskedasticity", "marginal-effects"]
source_folder: econometrics
ai_drafted: true
---

The **Linear Probability Model (LPM)** is OLS applied directly to a binary outcome $y_i \in \{0, 1\}$. Under the zero-conditional-mean assumption, $\mathbb{E}[y_i \mid x_i] = \Pr(y_i = 1 \mid x_i) = \beta_0 + \beta_1 x_i$, so each $\hat\beta_j$ is a **change in probability** of the outcome (in percentage points). It is the simplest possible binary-response model and the coefficients are directly interpretable as marginal effects.

## When to use

Reach for LPM as the first pass whenever the outcome is binary — it produces directly interpretable coefficients and lets you focus on the design rather than the link function. Two unavoidable drawbacks: (i) predicted probabilities can fall **outside [0, 1]** because nothing in OLS constrains them — the Andersen ultimatum-game lecture hits 1.19 — which motivates [[Logit Model|logit]] / [[Probit Model|probit]]; (ii) the residual variance $p(x)(1 - p(x))$ depends on $x$, so [[Heteroskedasticity]] is built in **by construction** — always report robust standard errors.
