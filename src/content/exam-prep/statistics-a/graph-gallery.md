---
title: "Graph Gallery"
subject: statistics-a
type: reference
description: "The pictures behind the course, in one place. Three are interactive: the six discrete distributions, normal areas and cut-offs, and the CLT for an average. Step through them, then change the numbers."
course: Statistics A
semester: 1
year: 1
order: 7
tags:
  - statistics-a
  - exam-prep
  - graphs
---

> Step through the interactive graphs with the arrows (or press play), then use the last step to explore. The static figures are the lecture diagrams, with the one thing to read off each.

## 1. Discrete distributions (Q9 to Q12)

Pick a distribution at the top. The bars are $P(X = k)$, the dashed line is $E(X)$ (the balance point) and the bracket is one SD either side. In the last step slide $k$ to read off $P(X = k)$ and $P(X \le k)$. The presets are lecture and past-paper examples: 50 cars with 10 damaged is 2024 Moed B Q11.

```graph
type: stats-discrete-dist
dist: binomial
n: 20
p: 0.25
k: 5
```

Binomial vs geometric vs hypergeometric vs Poisson in one picture:

![[Lec07_three_new_distributions.png]]

A binomial with small $p$ is skewed right; with $p = 0.5$ it is a symmetric bell around $np$.

![[Lec07_data_binomial_n5_p02.png]]

![[Lec07_data_binomial_32_half.png]]

## 2. Normal areas and cut-offs (Q18)

The default numbers are 2023 Moed B Q18: trunks $N(20, 5^2)$, more than 26 tons, answer 11.5%. In the last step switch the question type: left area, right tail, between two values, or **find the cut-off** from a probability (the admissions and grade-boundary questions).

```graph
type: stats-normal-area
mu: 20
sigma: 5
t: 26
```

$\mu$ moves the bell, $\sigma$ widens it.

![[Lec11_normal_mu_sigma.png]]

68-95-99.7: the same areas for every normal curve.

![[Lec11_empirical_rule.png]]

Standardizing only relabels the axis: the area stays the same.

![[Lec11_standardization.png]]

## 3. CLT: why an average is so much less spread out (Q19 to Q20)

Default numbers: 2023 Moed B Q20, salaries with mean 8,900 and SD 2,500, average of 100 workers above 9,000, answer 0.3446. Compare the tail for one worker with the tail for the average, then drag $n$ up and watch the law of large numbers.

```graph
type: stats-clt-average
mu: 8900
sigma: 2500
n: 100
t: 9000
```

A sum of skewed variables turns into a bell as $n$ grows.

![[Lec12_clt_sums.png]]

The average narrows around $\mu$ as $n$ grows (law of large numbers).

![[Lec12_lln_narrowing.png]]

$n = 10$ vs $n = 100$: a 5 cm gap goes from 15% likely to 0.04%.

![[Lec12_height_average_n10_n100.png]]

Normal approximation of $B(100, 0.8)$: the shaded area is $P(X \le 74)$.

![[Lec12_binomial_normal_approx.png]]

## 4. Probability pictures (Q1 to Q5)

Unions, intersections and complements as regions.

![[Lec01_set_operations.png]]

![[Lec02_venn_diagrams.png]]

Trees: multiply along a branch, add across branches (the Monty Hall tree).

![[Lec03_monty_hall_tree.png]]

## 5. Counting (Q6)

Order? Replacement? The four formulas.

![[Lec04_counting_formulas_grid.png]]

## 6. Random variables (Q7 to Q8)

PMF bars and the CDF staircase: each jump of the CDF is one bar.

![[Lec05_three_coins_pmf_cdf.png]]

The expected value is the balance point.

![[Lec06_balance_point.png]]

## 7. Covariance and correlation (Q13 to Q15)

The sign of the covariance: points in the matching quadrants push it up, mismatched ones push it down.

![[Lec08_covariance_sign_quadrants.png]]

Correlation from scatter plots, including a curved pattern with $\rho = 0$.

![[Lec08_data_scatter_correlations.png]]

Zero covariance but clearly dependent.

![[Lec08_zero_cov_dependent.png]]

A variable and a linear function of itself: $\rho = \pm 1$.

![[Lec09_perfect_correlation.png]]

## 8. Continuous variables (Q16 to Q17)

Density and CDF of a triangle: probability is area under $f$, and $F$ is the running area.

![[Lec10_pdf_cdf_triangle.png]]

The continuous uniform: a flat density and a straight-line CDF.

![[Lec10_uniform_pdf_cdf.png]]
