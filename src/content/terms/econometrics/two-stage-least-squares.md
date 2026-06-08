---
title: Two Stage Least Squares
subject: econometrics
aliases: ["2SLS", "TSLS", "two-stage least squares"]
related: ["instrumental-variables", "first-stage", "second-stage", "endogeneity"]
source_folder: econometrics
ai_drafted: true
---

**Two-stage least squares (2SLS)** is the standard implementation of [[Instrumental Variables]] estimation. **Stage 1:** regress the endogenous regressor $X$ on the instrument $Z$ (plus all exogenous controls) to get the fitted values $\hat X$. **Stage 2:** regress $Y$ on $\hat X$ (plus the same controls). The coefficient on $\hat X$ in stage 2 is the IV estimate $\hat\beta_{\text{IV}}$ — it uses only the $Z$-driven slice of $X$'s variation, which is exogenous by construction.

## When to use

2SLS is the default IV recipe in modern applied work. In R, `ivreg(y ~ x + controls | z + controls, data = df)` from the `AER` package runs both stages and reports correct standard errors automatically (don't run the two stages manually with `lm()` — the second-stage SEs will be wrong). 2SLS is **consistent** but **biased in finite samples**; the bias shrinks as $n \to \infty$ and as the [[Instrument Relevance|first-stage F]] grows. Always report the first-stage F to demonstrate the instruments aren't weak.
