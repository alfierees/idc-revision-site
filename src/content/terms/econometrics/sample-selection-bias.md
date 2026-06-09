---
title: Sample Selection Bias
subject: econometrics
aliases: ["selection bias", "selection on unobservables"]
related: ["heckman-selection-model", "inverse-mills-ratio", "endogenous-selection"]
source_folder: econometrics
ai_drafted: true
---

**Sample selection bias** arises when the sample on which you estimate the model is not a random draw from the population, and the selection process is *correlated with the outcome's unobservables*. Then OLS on the selected sample produces a biased coefficient — it estimates the relationship *among the selected*, not the population relationship. The classic example is the Mroz returns-to-education regression, which can only be estimated on women observed in the labour market.

## When to use

Flag selection bias whenever the dataset implicitly drops observations on a non-random criterion: women's wage data condition on labour-force participation; firm recall outcomes condition on the firm existing in the data; PS_2's fertility data drops women with zero children because `childs = NA`. The standard fix is the [[Heckman Selection Model]], which models both the selection equation (who enters the sample) and the outcome equation jointly, recovering an unbiased estimate via the [[Inverse Mills Ratio]] correction term.
