---
title: Omitted Variable Bias
subject: econometrics
aliases: ["OVB", "omitted variable"]
related: ["endogeneity", "causal-diagram", "instrumental-variables"]
source_folder: econometrics
ai_drafted: true
---

**Omitted variable bias** arises when a variable that affects $Y$ and is correlated with the included regressor $X$ is left out of the model. The omitted variable lands in the error term $u$, makes $\text{cov}(X, u) \neq 0$, and biases the OLS coefficient on $X$. The sign of the bias is predictable: if the omitted variable has a *positive* effect on $Y$ and is *positively* correlated with $X$, OLS overstates $X$'s effect; flip either sign to flip the bias direction.

## When to use

Reach for OVB framing whenever a [[Causal Diagram|DAG]] shows a confounder (a variable with arrows into both treatment and outcome) that you can't observe. PS_4's pooled OLS overstates the seatbelt-law effect by ~2.5× because early-adopting states were *already* safer (state-level unobserved heritage drives both early adoption and lower fatalities). PS_5's union-recall regression is biased because firms with bad management both unionise more and recall more. Fixes: include the omitted variable as a control (if observable), use [[Fixed Effects]] to absorb time-invariant confounders, or use [[Instrumental Variables]] when no observable proxy exists.
