---
title: Maximum Likelihood Estimation
subject: econometrics
aliases: ["MLE", "maximum likelihood"]
related: ["logit-model", "probit-model", "likelihood-ratio-test"]
source_folder: econometrics
ai_drafted: true
---

**Maximum likelihood estimation (MLE)** picks the parameter vector $\hat{\boldsymbol\beta}$ that makes the observed data most probable under the assumed model. For binary outcomes, the likelihood is $\mathcal{L}(\boldsymbol\beta) = \prod_i G(\mathbf{x}_i'\boldsymbol\beta)^{y_i} \cdot [1 - G(\mathbf{x}_i'\boldsymbol\beta)]^{1 - y_i}$ where $G$ is the link CDF (logistic for logit, normal for probit). Taking logs converts the product to a sum, and a numerical optimiser (R's `glm()`) finds the $\hat{\boldsymbol\beta}$ that maximises it.

## When to use

MLE is the standard estimation method whenever OLS doesn't apply — non-linear models like [[Logit Model|logit]] / [[Probit Model|probit]], Tobit and censored regressions, [[Heckman Selection Model|Heckman selection]], duration models, and most modern structural models. Hypothesis testing uses the [[Likelihood Ratio Test]] (analogue of the F-test) rather than F. MLE is consistent and asymptotically normal under correct specification, but it is **not** unbiased in finite samples — bias shrinks as $n \to \infty$.
