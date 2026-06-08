---
title: Heckman Selection Model
subject: econometrics
aliases: ["Heckman", "Heckit", "two-step Heckman", "heckman", "sample selection", "fertility"]
related: ["sample-selection-bias", "inverse-mills-ratio", "endogenous-selection", "probit-model"]
source_folder: econometrics
ai_drafted: true
---

The **Heckman selection model** corrects [[Sample Selection Bias]] with a two-equation system. The **selection equation** is a probit for whether an observation enters the sample: $\Pr(s_i = 1) = \Phi(\mathbf{z}_i'\boldsymbol\gamma)$. The **outcome equation** is OLS on the selected sample plus a correction term: $y_i = \mathbf{x}_i'\boldsymbol\beta + \rho\lambda_i + u_i$, where $\lambda_i$ is the [[Inverse Mills Ratio]] computed from the selection probit. If $\hat\rho$ is significant, selection bias is confirmed; the corrected $\hat{\boldsymbol\beta}$ is the unbiased outcome relationship.

## When to use

Use Heckman whenever you suspect a non-random selection mechanism is shaping who appears in your data. The standard cases: Mroz wage equation (selection = labour-force participation), PS_2's fertility regression (selection = having any children), studies of firm exit / survival, returns to migration. **Identification requires an exclusion restriction**: at least one variable in the selection equation that is NOT in the outcome equation (PS_2 uses `year.born`). Without it, the model is identified only off the non-linearity of $\Phi$, which is fragile.
