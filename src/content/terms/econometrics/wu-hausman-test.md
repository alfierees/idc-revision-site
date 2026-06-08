---
title: Wu-Hausman Test
subject: econometrics
aliases: ["Hausman test", "Wu test", "endogeneity test"]
related: ["endogeneity", "instrumental-variables", "two-stage-least-squares"]
source_folder: econometrics
ai_drafted: true
---

The **Wu-Hausman test** asks whether a regressor is actually endogenous. The intuition: under the null of exogeneity, OLS and 2SLS estimate the same parameter (OLS is even more efficient); under the alternative of endogeneity, the two estimators converge to different things. The test statistic compares $\hat\beta_{\text{OLS}}$ and $\hat\beta_{\text{IV}}$ and rejects when their difference is too large to be sampling noise.

## When to use

Run after any IV estimation: if the test *rejects*, the regressor is endogenous and IV was necessary (OLS would have been biased). If it *fails to reject*, OLS and IV agree and you can prefer OLS for its efficiency. PS_2 reports Wu-Hausman p = 9.4×10⁻¹⁰ for the fertility-education regression, decisively confirming endogeneity. Available in R as `summary(ivreg_model, diagnostics = TRUE)` — the "Wu-Hausman" row.
