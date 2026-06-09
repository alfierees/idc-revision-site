---
title: Causal Inference
subject: econometrics
aliases: ["causal identification", "policy evaluation"]
related: ["causal-diagram", "treatment-effects", "instrumental-variables", "regression-discontinuity", "difference-in-differences"]
source_folder: econometrics
ai_drafted: true
---

**Causal inference** is the branch of statistics concerned with estimating the *causal* effect of one variable on another — not just their association. A regression coefficient is causal only if you have ruled out confounders (other things that vary with $X$ and affect $Y$), reverse causality ($Y$ causing $X$), and selection (non-random assignment of $X$).

## When to use

This is the framing for every applied-econometrics problem in the course. The toolkit available to you grows with each lecture: [[Causal Diagram|DAGs]] to identify confounders, [[Randomised Experiment|randomisation]] when you can run experiments, [[Instrumental Variables]] when an exogenous shifter exists, [[Fixed Effects]] for repeated observations of the same unit, [[Difference-in-Differences]] for staggered treatment, and [[Regression Discontinuity]] for sharp cutoffs. Which tool fits depends on the source of exogenous variation in your data.
