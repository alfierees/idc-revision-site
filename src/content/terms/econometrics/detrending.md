---
title: Detrending
subject: econometrics
aliases: ["detrended", "trend removal"]
related: ["deterministic-time-trend", "spurious-regression"]
source_folder: econometrics
ai_drafted: true
---

**Detrending** removes a deterministic time trend from a series by regressing it on $t$ and keeping the residuals. The residual series — the part of $y$ not explained by the trend — is then used for substantive analysis. By the **Frisch-Waugh-Lovell theorem**, regressing detrended $y$ on detrended $x$ gives the *exact same* coefficient as regressing $y$ on $x$ and $t$ together.

## When to use

Detrend any time series before correlating it with another trending series — otherwise you risk [[Spurious Regression]]. The choice of trend functional form matters: linear $t$, quadratic $t^2$, exponential (use $\log y$), or non-parametric (Hodrick-Prescott filter). PS_3's HNC analysis adds $t$ as a regressor in Q5 to detrend `log_nox` against the secular vehicle-fleet growth — the FWL theorem says this is equivalent to detrending both sides first.
