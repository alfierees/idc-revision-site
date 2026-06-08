---
title: Endogenous Selection
subject: econometrics
aliases: ["endogenous sample selection"]
related: ["sample-selection-bias", "heckman-selection-model"]
source_folder: econometrics
ai_drafted: true
---

**Endogenous selection** is the technical condition behind [[Sample Selection Bias]]: who enters the estimation sample is determined by a process whose unobservables are correlated with the outcome equation's unobservables. Formally, the selection indicator $s_i$ and the outcome error $u_i$ have $\text{cov}(\text{unobservables in selection eq}, u_i) \neq 0$.

## When to use

Diagnose endogenous selection whenever the sample-inclusion decision is itself an economic choice (working vs not working, having children vs not, exiting the market vs surviving). [[Heckman Selection Model|Heckman]] tests for it via the significance of the [[Inverse Mills Ratio]] coefficient $\rho$; a significant $\rho$ confirms endogenous selection and the corrected estimate is preferred to naïve OLS.
