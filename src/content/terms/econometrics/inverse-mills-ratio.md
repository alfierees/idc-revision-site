---
title: Inverse Mills Ratio
subject: econometrics
aliases: ["IMR", "lambda", "Mills ratio"]
related: ["heckman-selection-model", "sample-selection-bias"]
source_folder: econometrics
ai_drafted: true
---

The **inverse Mills ratio (IMR)** $\lambda_i = \varphi(\mathbf{z}_i'\hat{\boldsymbol\gamma}) / \Phi(\mathbf{z}_i'\hat{\boldsymbol\gamma})$ is the correction term inserted into the outcome equation in the [[Heckman Selection Model|Heckman]] two-step procedure. It is computed from the first-stage selection probit and quantifies, for each selected observation, the implied conditional expectation of the unobserved selection error. The coefficient $\rho$ on $\lambda_i$ in the outcome equation tests for selection: if $\hat\rho$ is statistically significant, the selection equation's unobservables are correlated with the outcome equation's unobservables, confirming bias.

## When to use

The IMR is the diagnostic *and* the fix in Heckman. PS_2's outcome equation gives $\hat\rho = -3.171$ (p < 0.001) → strong evidence of selection bias in the fertility regression. The corrected `educ` coefficient (+0.017, n.s.) is dramatically different from the OLS estimate (−0.103, ***) — a clean illustration that the OLS result was largely a selection artefact, not a within-sample fertility effect.
