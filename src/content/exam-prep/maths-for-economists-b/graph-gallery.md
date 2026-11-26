---
title: "Graph Gallery"
subject: maths-for-economists-b
type: reference
description: "The pictures behind every exam question, most of them interactive: global extrema on an interval, eight past-paper function studies step by step, logs and asymptotes, implicit slopes, contours and slices, the differential, critical point types, Lagrange, and linear systems with a parameter."
course: Maths for Economists B
instructor: Hever Schulberg
semester: 2
year: 1
order: 7
tags:
  - maths-for-economists-b
  - exam-prep
  - graphs
---

> Step through each graph with the arrows (or press play), then use the last step to explore: switch the function, drag the point, move the slider. The static figures are the past-paper sketches, with the one thing to read off each.

## 1. The function study, step by step (the last question)

The exam order as a picture: the domain, then the limits at the edges (asymptotes in red), then the sign of $f'$ and the extremum, then the interval from the paper (shaded) with the global extrema ringed. Switch between eight real past-paper functions at the top: $x^x + 1$ (2025 A), $xe^{-\sqrt x}$ (2025 B), $xe^x$ (2024 B), $x^2\ln x$ (2023 B), $xe^{-x}$ (2022 B), $\ln x + \tfrac1x$ (2022 A), $\tfrac{x}{\ln x}$ (2020 A) and $x - e^x$ (2017 A).

```graph
type: mathsb-function-study
fn: xx
```

The same graph opened on the vertical-asymptote case, where the domain has a gap at $x = 1$:

```graph
type: mathsb-function-study
fn: xlnx
```

The official sketches for the last two papers. 2025 A: on $[0.4, 1)$ the curve only rises, so the minimum is at the closed end and there is no maximum.

![[PP32_q4_x_to_the_x_plus_1.png]]

2025 B: the maximum of $xe^{-\sqrt x}$ is at $x = 4$, outside $[0, 2)$.

![[PP33_q4_x_exp_minus_sqrt_x.png]]

A decreasing function on two branches (2023 A): on $[1, \infty)$ the maximum is the closed end and the minimum is never reached.

![[PP28_q4_decreasing_branches.png]]

## 2. Global extrema depend on the interval (Lec 01)

Closed ends count, open ends do not, and a critical point outside the interval is irrelevant.

```graph
type: mathsb-global-extrema
```

The lecture's $-x^2$ on four domains:

![[Lec01_global_extrema_domains.png]]

## 3. Optimisation with a constraint in one variable (Lec 01)

The fence: substitute the area constraint, and cost becomes a function of $x$ alone, minimised at $x = 120$.

```graph
type: mathsb-fence-optimum
```

## 4. Logs, exponentials and asymptotes (Lec 02, 03)

The log is the exponential reflected in $y = x$: through $(1, 0)$, with the vertical asymptote $x = 0$.

```graph
type: mathsb-log-inverse
```

$x^2\ln x$ has a hole at the origin, not an asymptote; $\ln^2 x - x$ has a vertical asymptote at $x = 0$.

![[Lec03_asymptote_examples.png]]

## 5. Implicit differentiation (Lec 04, 06)

The circle is not a function of $x$, yet every point has a slope $y' = -x/y$. At $x = 3$ there are two points and two slopes.

```graph
type: mathsb-implicit-circle
```

The 2025 A level curves: the contour $z = 1$ is the $y$ axis without the origin; $z = e$ is a circle with a horizontal tangent at $(1, -1)$.

![[PP32_q2_level_curves.png]]

## 6. Surfaces: contours and slices (Lec 04 to 06)

Read a surface from above: each level curve $f = c$ is a contour (an indifference curve for a utility function).

```graph
type: mathsb-contour-map
```

A partial derivative is an ordinary slope on one slice of the surface:

```graph
type: mathsb-partial-slice
```

Domains drawn: dashed where a log excludes the boundary, solid where a root allows it (2022 A, 2023 A).

![[PP26_q3_domain.png]]

![[PP28_q3_domain.png]]

## 7. The differential (Lec 06)

For $z = xy$, the differential is the two strips; the small corner $dx\,dy$ is what it leaves out.

```graph
type: mathsb-differential
```

## 8. Critical points: max, min and saddle (Lec 07, 08)

The Lec 08 slide problem as a contour map, each critical point classified by $D$:

```graph
type: mathsb-critical-types
```

The three shapes the $D$ test tells apart:

![[Lec08_extremum_types.png]]

## 9. Lagrange: the level curve touches the constraint (Lec 08, 09)

At the best point the gradients line up, and $\lambda$ is what one more unit of the constraint is worth.

```graph
type: mathsb-lagrange
```

A linear revenue on a circle (2021 A): the optimum is where the revenue line just touches the circle.

![[PP24_q1_revenue_tangent_circle.png]]

## 10. Linear systems (Lec 10 to 12)

One, none or infinitely many: two lines that cross, are parallel, or coincide.

```graph
type: mathsb-linear-systems
```

Gauss-Jordan one row operation at a time:

```graph
type: mathsb-row-reduction
```

A system with a parameter: the verdict flips exactly where a pivot is 0.

```graph
type: mathsb-parameter-system
```
