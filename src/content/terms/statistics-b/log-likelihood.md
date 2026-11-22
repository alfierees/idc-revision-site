---
title: Log-Likelihood
subject: statistics-b
aliases: []
related: [Likelihood, Maximum Likelihood Estimator, MLE Invariance]
source_folder: statistics-b
ai_drafted: true
---

$\ln L$, the logarithm of the [[Likelihood]]; it has the same maximiser as $L$ because $\ln$ is monotonic, and it turns products into sums.

## When to use

In the continuous MLE recipe, take $\ln L$ before differentiating to avoid the product rule: for a Bernoulli sample $\ln L=\sum X_i\ln p+(n-\sum X_i)\ln(1-p)$. Then set the first derivative to 0 and check the second.

See [[Lec_03-Maximum Likelihood Estimation|Lec 03]]. Also in [[PS_03-Maximum Likelihood Estimators|PS 03]].
