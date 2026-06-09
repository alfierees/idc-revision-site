---
title: Individual Fixed Effect
subject: econometrics
aliases: ["unit fixed effect", "alpha_i", "individual FE"]
related: ["fixed-effects", "panel-data", "two-way-fixed-effects"]
source_folder: econometrics
ai_drafted: true
---

The **individual fixed effect** $\alpha_i$ is the unit-specific intercept in a panel regression $y_{it} = \alpha_i + \beta x_{it} + u_{it}$. It absorbs every characteristic of unit $i$ that doesn't vary across time — observable or unobservable, measurable or not. Geography, baseline ability, founding-era institutional culture, the unit's average level of $y$ — all of these land in $\alpha_i$ and stop contaminating the coefficient on $x$.

## When to use

Always include individual FE in panel regressions where unit-specific time-invariant confounders are plausible. PS_4's state FE $\alpha_i$ absorbs every fixed state trait — road network, terrain, baseline driving culture — that pooled OLS conflated with the seatbelt-law effect. The catch: $\alpha_i$ doesn't help if your confounder *changes over time*. Then you need [[Two-Way Fixed Effects]] or [[Difference-in-Differences]].
