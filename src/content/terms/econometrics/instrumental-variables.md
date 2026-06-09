---
title: Instrumental Variables
subject: econometrics
aliases: ["IV", "instrumental variables estimation"]
related: ["endogeneity", "two-stage-least-squares", "instrument-relevance", "instrument-validity", "weak-instruments"]
source_folder: econometrics
ai_drafted: true
---

**Instrumental variables (IV)** is the standard fix for [[Endogeneity]]: find a third variable $Z$ that moves $X$ but has no direct path to $Y$, and use only the $Z$-driven slice of $X$'s variation to estimate the causal effect on $Y$. The instrument essentially borrows a piece of natural experiment hidden in the data. Implementation is [[Two Stage Least Squares|2SLS]]: regress $X$ on $Z$ (first stage), then regress $Y$ on the fitted $\hat X$ (second stage).

## When to use

Whenever the regressor of interest is endogenous: $\text{cov}(X, u) \neq 0$ because of [[Omitted Variable Bias|omitted variables]], reverse causality, or selection. Examples: Angrist's draft-lottery instrument for military service, Card's college-proximity instrument for schooling, Sander's parents-education instrument for the woman's own education (PS_2). IV requires both [[Instrument Relevance]] (Z moves X — testable via first-stage F-stat) and [[Instrument Validity]] (Z affects Y only through X — not testable, must be argued from theory). Bias does not shrink with sample size when X is endogenous, so IV exists precisely to handle the bias that OLS cannot.
