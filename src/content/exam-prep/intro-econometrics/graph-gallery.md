---
title: "Graph Gallery"
subject: intro-econometrics
type: reference
description: "The pictures behind the exam questions, three of them interactive: the t-test with its rejection region and p-value on four past-paper tests, the four models of X2 from 2024 Moed A, and heteroskedasticity with the WLS fix. Plus the worked figures from the papers and lectures."
course: Intro to Econometrics
semester: 1
year: 2
order: 7
tags:
  - intro-econometrics
  - exam-prep
  - graphs
---

> Step through each graph with the arrows (or press play), then use the last step to explore. The static figures are drawn from the R output in the past papers and lectures, with the one thing to read off each.

## 1. The t-test (every paper, §2 of the cheat sheet)

The rejection region holds $\alpha$ of the area under $H_0$; the p-value is the area beyond your statistic. The toggle picks a past-paper test: a one-sided test (2023 A Q16), an insignificant slope (2023 A Q9), a null of 1 instead of 0 (2026 A Q1, far off the chart) and a p-value of 0.695 (2026 A Q18).

```graph
type: econ-t-test
paper: a23q16
```

The lecture's version of the two pictures, two-sided and one-sided at 5% with 32 df:

![[Lec06_rejection_regions.png]]

Nested confidence intervals: the 99% interval contains the 95% one, which contains the 90% one.

![[Lec05_nested_confidence_intervals.png]]

The F distribution and its one right tail (every joint test, the Chow test included):

![[Lec07_f_distribution_rejection.png]]

## 2. Functional form: the four models of X2 (2024 A Q10 to Q14, §5 and §6)

The same data fitted four ways: linear, dummies for low and high X2, dummies with interactions, and a quadratic. This is the "which plot matches which model" question. In the last step slide X2 and read each model's prediction and marginal effect.

```graph
type: econ-x2-models
```

The official sketch of the same four models:

![[PP03_q14_four_models.png]]

A dummy shifts the intercept (parallel lines); an interaction changes the slope (2025 B Q12 and Q14):

![[PP06_q14_dummy_vs_interaction.png]]

Separate lines for men and women from the gender interactions (2025 A Q2): the gap depends on education.

![[PP05_q2_men_women_lines.png]]

Quadratics: the turning point at $-\beta_1/(2\beta_2)$, a minimum when the squared term is positive (2025 B Q11) and a maximum when it is negative (2023 B Q15).

![[PP06_q11_quadratic_minimum.png]]

![[PP02_q15_quadratic_peak.png]]

The marginal effect of a quadratic is a straight line in $X$, crossing zero at the turning point (2023 A Q14):

![[PP01_q14_marginal_effect_quadratic.png]]

Elasticities by destination from the interaction model, against the pooled one (2023 B Q8):

![[PP02_q8_elasticity_by_continent.png]]

Log forms: a level fit against a log-level fit (Lecture 3), and why only the log-log demand has a constant elasticity.

![[Lec03_data_level_vs_loglevel.png]]

![[Lec03_demand_elasticity.png]]

Changing units rescales the axes, not the fit (Lecture 5):

![[Lec05_change_of_units.png]]

## 3. Heteroskedasticity and WLS (2023 A Q17, 2024 A Q8, 2026 A Q14 to Q16, §9)

Fanning residuals, the squared-residual plot the exam shows, and the transformed errors after dividing by $\sqrt h$. In the last step pick the true variance form and the weight: the wrong weight leaves a pattern.

```graph
type: econ-heteroskedasticity
```

Constant against growing error variance around the same line (Lecture 4):

![[Lec04_homo_vs_heteroskedasticity.png]]

2023 A Q17: `ols1` residuals arch and spread (a missing $X1^2$ and heteroskedasticity); `ols3` residuals are a shapeless cloud.

![[PP01_q17_residual_plots_ols1_ols3.png]]

2023 B Q13: the residual plot behind the `hccm` question.

![[PP02_q13_model1_residuals.png]]

## 4. Through the origin (2023 B Q16, 2024 A Q6, §8)

Forcing the line through 0 when the true intercept is not 0 tilts the slope:

![[Lec09_through_origin_slopes.png]]
