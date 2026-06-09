---
title: Spurious Regression
subject: econometrics
aliases: ["spurious correlation"]
related: ["deterministic-time-trend", "detrending", "time-series"]
source_folder: econometrics
ai_drafted: true
---

**Spurious regression** is when two trending variables appear strongly correlated in OLS purely because they both drift over time — not because of any genuine causal link. The textbook illustration: regressing US ice-cream sales on Bangladeshi GDP shows a high $R^2$ and significant slope, because both trend upward over the post-war period.

## When to use

Suspect spurious regression whenever both $y$ and $x$ trend over the sample. Diagnose by adding a [[Deterministic Time Trend|time trend]] $t$: if the coefficient on $x$ shrinks to insignificance once $t$ is included, the original correlation was spurious. The structural cure is [[Detrending]] both series before estimating their relationship. With unit-root (non-stationary) series, even detrending isn't enough — you'd need cointegration techniques (beyond the Y2 syllabus).
