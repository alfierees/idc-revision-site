---
title: Simultaneous Equations Model
subject: econometrics
aliases: ["SEM", "simultaneous system"]
related: ["instrumental-variables", "endogeneity", "two-stage-least-squares"]
source_folder: econometrics
ai_drafted: true
---

A **simultaneous equations model** is a system in which two (or more) variables are jointly determined — e.g. supply and demand both pin down price and quantity at the same time. In such systems every endogenous variable is on the left of one equation and on the right of others, so the OLS regressor in any single equation is correlated with that equation's error (a structural form of [[Endogeneity]]).

## When to use

The textbook case is the Fulton Fish Market (Graddy 1995): the equilibrium $(P_t, Q_t)$ is the intersection of supply and demand, so price is endogenous in *both* equations. Identification requires variables that shift **one** curve but not the other — weather shifts supply (and identifies demand), day-of-week shifts demand (and identifies supply). These instruments are then plugged into [[Two Stage Least Squares|2SLS]]. The identification logic generalises beyond supply/demand to any setting with feedback loops.
