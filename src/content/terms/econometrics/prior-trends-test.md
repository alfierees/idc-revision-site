---
title: Prior Trends Test
subject: econometrics
aliases: ["pre-trends test", "pre-trend test"]
related: ["parallel-trends-assumption", "difference-in-differences", "dynamic-difference-in-differences", "placebo-test"]
source_folder: econometrics
ai_drafted: true
---

A formal check of the [[Parallel Trends Assumption|parallel trends]] assumption using **pre-treatment data only**: regress the outcome on a time trend, the group dummy and their interaction, $y_{it}=\beta_0+\beta_1 t+\beta_2 dT_i+\beta_3(t\cdot dT_i)+u_{it}$, and test $H_0:\beta_3=0$ (equal pre-trends). Failing to reject supports the design; a significant $\beta_3$ is a red flag. It is evidence, not proof, since the post-period counterfactual is never observed.

## When to use

Before trusting any [[Difference-in-Differences]] estimate. The graphical version is the pre-treatment coefficients of a [[Dynamic Difference-in-Differences|dynamic DiD]], which should sit at zero.

See [[Lec_11-Difference-in-Differences II (Dynamic DiD)|Lec 11]].
