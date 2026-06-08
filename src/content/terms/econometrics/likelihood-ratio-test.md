---
title: Likelihood Ratio Test
subject: econometrics
aliases: ["LR test", "LR statistic"]
related: ["maximum-likelihood-estimation", "logit-model", "probit-model"]
source_folder: econometrics
ai_drafted: true
---

The **likelihood ratio (LR) test** is the MLE analogue of the [[F-test]]. To test a set of $q$ restrictions, estimate the model under the restrictions (restricted, $\mathcal L_R$) and without them (unrestricted, $\mathcal L_{UR}$), then compute $LR = 2[\log \mathcal L_{UR} - \log \mathcal L_R]$. Under the null, $LR \sim \chi^2(q)$; reject if $LR$ exceeds the critical value. Intuition: if removing the restricted variables makes the fit much worse, those variables matter.

## When to use

Test any nested-model restriction estimated by [[Maximum Likelihood Estimation|MLE]] — joint significance of multiple variables in a logit/probit, the validity of a constraint, the addition of a polynomial term. In R, `lmtest::lrtest(unrestricted, restricted)` does it. Contrast with the F-test, which compares sums of squared residuals from OLS models and uses an F distribution — same logic, different distribution.
