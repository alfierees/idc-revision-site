---
title: Instrument Relevance
subject: econometrics
aliases: ["relevance condition"]
related: ["instrumental-variables", "weak-instruments", "first-stage"]
source_folder: econometrics
ai_drafted: true
---

**Relevance** is the first IV condition: the instrument $Z$ must actually move the endogenous regressor $X$, $\text{cov}(Z, X) \neq 0$. Without relevance, IV has nothing to work with — the "clean variation" you're trying to extract from $X$ via $Z$ is empty. Relevance is **statistically testable** by running the first-stage regression $X = \gamma_0 + \gamma_1 Z + \text{controls} + v$ and looking at the F-statistic for the instruments' joint significance.

## When to use

Always check relevance before reporting any IV estimate — it's a precondition, not an option. **Rule of thumb:** first-stage F > 10 = the instruments are sufficiently strong; F < 10 → [[Weak Instruments|weak]] and the IV estimate is unreliable (bias plus inflated SEs). PS_2's parents'-education instrument has F = 953, well above the threshold. Contrast with [[Instrument Validity]] (the exclusion restriction) which is *not* testable.
