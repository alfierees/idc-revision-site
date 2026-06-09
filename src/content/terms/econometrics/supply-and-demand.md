---
title: Supply and Demand
subject: econometrics
aliases: ["supply curve", "demand curve", "supply-demand system"]
related: ["simultaneous-equations-model", "instrumental-variables", "endogeneity", "two-stage-least-squares"]
source_folder: econometrics
ai_drafted: true
---

In the econometrics context, **supply and demand** refers not just to the microeconomic concept but specifically to the **identification problem** that arises when trying to estimate supply or demand elasticities from observational price-quantity data. Both supply and demand equations contain price as a regressor, but price is jointly determined by both curves — it is **endogenous** in each equation. Regressing quantity on price with OLS does not identify either curve; the scatter of equilibrium points is a mixture of movements along both curves.

The Graddy (1995) Fulton Fish Market study (Lecture 06) is the canonical example: to identify the **demand** elasticity, weather (which shifts only supply) is used as an instrument for price — stormy-day supply contractions generate price variation that is purely supply-driven, tracing out movement along the demand curve. Similarly, day-of-week dummies (shifting demand) identify the supply curve. This is the classical **simultaneous equations** identification strategy: a variable that shifts one curve serves as an instrument for the endogenous price in the other curve's equation. See [[Simultaneous Equations & Time Series]] (Lecture 06).

## When to use

Reach for the simultaneous-equations framing whenever price and quantity are jointly determined. The diagnostic is that price appears on the right-hand side of both the supply and demand equations — OLS on either equation alone yields biased estimates. The [[Instrumental Variables]] solution requires finding variables (curve shifters) that are excluded from one equation but directly affect the endogenous variable in the other.
