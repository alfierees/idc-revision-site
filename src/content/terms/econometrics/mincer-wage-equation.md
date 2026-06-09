---
title: Mincer Wage Equation
subject: econometrics
aliases: ["Mincer equation", "returns to education equation", "returns-to-education"]
related: ["heckman-selection-model", "sample-selection-bias"]
source_folder: econometrics
ai_drafted: true
---

The **Mincer wage equation** is the standard regression model for the returns to education: $\log \text{wage}_i = \beta_0 + \beta_1 \text{educ}_i + \beta_2 \text{exper}_i + \beta_3 \text{exper}_i^2 + u_i$. The log-level functional form means $\hat\beta_1$ is approximately the percentage wage gain per extra year of schooling; the experience quadratic captures the concave wage-tenure profile.

## When to use

Any returns-to-education question starts here. Two standard threats: **omitted ability bias** (smart people get more schooling *and* earn more, so OLS overstates the return — typical OLS estimate ~10.7% per year is biased upward) and **sample selection** in datasets like Mroz where wages are observed only for labour-force participants (corrected via [[Heckman Selection Model|Heckman]]). The textbook fixes are parental-education instruments for the first and Heckman correction for the second.
