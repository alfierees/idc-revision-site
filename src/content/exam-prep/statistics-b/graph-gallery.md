---
title: "Graph Gallery"
subject: statistics-b
type: reference
description: "The pictures behind the 20 questions, some interactive: sampling distributions and the CLT, bias and spread, likelihood, correlation and regression lines, Z and t tails, rejection regions, power and the alpha-beta trade-off, confidence intervals and chi-squared tails."
course: Statistics B
instructor: Asael Sklar
semester: 2
year: 1
order: 7
tags:
  - statistics-b
  - exam-prep
  - graphs
---

> Step through the interactive graphs with the arrows (or press play), then use the last step to explore. The static figures are from the lectures and the past-paper solutions, with the one thing to read off each.

## 1. Power: two curves, one critical value (Q12, Q13)

The question every paper asks. The critical value comes from the $H_0$ curve; power is the area of the **true** curve beyond it. Opens on the practice exam's Q12 (power 0.938). On the last step move $n$, the true mean, $\sigma$ and $\alpha$, and switch the alternative to one-sided to see why the wrong direction has almost no power.

```graph
type: stats-power
```

The same picture for 2025 Moed A Q11: $n = 36$, $\sigma = 4$, $H_0: \mu = 60$ two-sided, true mean 61.6, power about 0.67:

```graph
type: stats-power
mu0: 60
mu1: 61.6
sigma: 4
n: 36
```

One-tailed against two-tailed power (practice exam Q13): right direction, the one-tailed test wins; wrong direction, it has almost none.

![[Lec12_one_vs_two_tailed_power_q13.png]]

The $\alpha$ and $\beta$ trade-off: a stricter $\alpha$ pushes the critical value out, so $\beta$ grows and power falls.

![[Lec06_alpha_power_tradeoff.png]]

## 2. Sampling distributions (Q1)

The average of $n$ draws, for any population: centred on $\mu$, standard error $\sigma/\sqrt n$, and more normal as $n$ grows.

```graph
type: stats-clt-average
mu: 50
sigma: 10
```

The Law of Large Numbers: the spread of $\bar X$ narrows as $n$ grows.

![[Lec01_lln_narrowing.png]]

## 3. Bias and consistency (Q2 to Q4)

Bias is about the centre of the sampling distribution; consistency is about its spread shrinking as $n$ grows:

![[Lec01_bias_and_spread.png]]

Why $S^2$ divides by $n - 1$: dividing by $n$ is too low by the factor $\tfrac{n-1}{n}$, badly for small samples.

![[Lec02_variance_divisor_bias.png]]

## 4. Likelihood (Q5)

The likelihood is a function of the parameter with the data fixed; the MLE is its peak.

![[Lec03_bernoulli_likelihood.png]]

In a table, the maximum of each **column** (2024 Moed B Q5):

![[PP04_q5_likelihood_max_per_column.png]]

## 5. Correlation and regression (Q6 to Q8)

Four scatters: $r = 0.81$, $-0.81$, 0, and a parabola with $r = 0$.

![[Lec11_data_correlation_scatter.png]]

The prediction line for $\rho = 1$, 0.8 and 0: every line passes through $(\bar X, \bar Y)$, and $\rho = 0$ is flat at $\bar Y$.

![[Lec11_prediction_lines_by_rho.png]]

One misreported point flattens the slope (2024 Moed A Q7):

![[PP03_q7_outlier_flattens_slope.png]]

$Y$ on $X$ is not $X$ on $Y$:

![[Lec11_regression_not_symmetric.png]]

## 6. Tails and critical values (Q9 to Q11, Q14, Q15)

A normal probability by standardising, the building block of every $Z$ test:

```graph
type: stats-normal-area
mu: 0
sigma: 1
t: 1.96
```

One tail or two, at $\alpha = 0.05$: 1.645 against $\pm1.96$.

![[Lec05_one_vs_two_tailed.png]]

The $t$ distribution has fatter tails than $Z$, so its critical values are larger, more so for small $df$:

![[Lec05_t_vs_normal.png]]

Same data, $Z$ against $t$ cut-offs (2023 Moed A Q11):

![[PP01_q11_z_vs_t_cutoffs.png]]

## 7. Proportions and the F test (Q10, Q16, Q17)

Katy's test: $Z = -4$, deep in the left tail.

![[Lec07_katy_z_test.png]]

The $F$ distribution is skewed and positive; reject in the upper tail only.

![[Lec07_f_test_rejection.png]]

## 8. Confidence intervals (Q18, Q19)

The interval is built around the sample mean; 95% of such intervals catch $\mu$.

![[Lec08_ci_around_sample_mean.png]]

90% against 95%: more confidence, a wider interval.

![[Lec08_width_90_vs_95.png]]

The duality: 75 lies outside the interval, so a test of $\mu = 75$ rejects (2023 Moed B Q19).

![[PP02_q19_ci_excludes_75.png]]

## 9. Chi-squared (Q20)

Observed against expected counts for the die example:

![[Lec09_die_observed_vs_expected.png]]

The rejection region is the upper tail only ($df = 5$, critical 11.070):

![[Lec09_chi_squared_df5_rejection.png]]
