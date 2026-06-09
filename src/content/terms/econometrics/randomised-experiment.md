---
title: Randomised Experiment
subject: econometrics
aliases: ["randomized experiment", "RCT", "randomised controlled trial", "random assignment"]
related: ["causal-inference", "treatment-effects", "endogeneity"]
source_folder: econometrics
ai_drafted: true
---

A **randomised experiment** assigns treatment by lottery: each unit's treatment status is determined by chance, independent of any of their characteristics (observed or not). Random assignment is the gold standard for causal inference because it mechanically breaks every backdoor path into the treatment node — there is no [[Omitted Variable Bias]], no reverse causality, no selection bias to worry about. The simple difference in average outcomes between treated and control is the unbiased average treatment effect.

## When to use

Randomised experiments are the benchmark every observational design tries to approximate. When feasible (lab experiments, A/B tests, field RCTs in development economics) they should be the first choice. PS_1's alcohol study randomly assigns `alcohol.treatment`, which is why `alcohol.treatment` — not the downstream `blood.alcohol.chng` — is the right regressor: only the random-assignment node is uncorrelated with gender, weight, and unobserved social preferences. Most economics questions, however, can't be experimentally manipulated (you can't randomise who goes to college), which is why the rest of the course teaches non-experimental designs.
