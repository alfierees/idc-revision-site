---
title: "Graph Gallery"
subject: maths-for-economists-a
type: reference
description: "The pictures behind every exam question, in one place, most of them interactive: limits, continuity, asymptotes, Euler, derivatives, corners and cusps, extrema, concavity, six past-paper investigations step by step, marginal cost, profit and integrals."
course: Maths for Economists A
semester: 1
year: 1
order: 7
tags:
  - maths-for-economists-a
  - exam-prep
  - graphs
---

> Step through each graph with the arrows (or press play), then use the last step to explore: drag the point, switch the function, move the slider. The static figures are the lecture and past-paper sketches, with the one thing to read off each.

## 1. The full investigation, step by step (the big question)

The exam order, as a picture: domain and intercepts, then asymptotes, then the sign of $f'$ (top strip, with the extrema), then the sign of $f''$ (bottom strip, with the inflections), and only then the curve. Switch between six real past-paper functions at the top: $(1+\tfrac2x)^2$ (2021 A), $x^{4/3} - 2x^{2/3} - 3$ (2021 B), $\tfrac{x+3}{x+2}$ (2023 B), $x(x+1)^{2/3}$ (2025 A), $\sqrt[3]{x^2}(x-10)$ (2019 B) and the piecewise $x^2 + 2x$ / $\sqrt x$ (2022 A and 2025 B).

```graph
type: calc-investigation
fn: square
```

A lecture investigation drawn by hand: every feature of the sketch comes from a line of the tables.

![[lec12-investigation-graph.png]]

## 2. Functions and transformations (Lec 01 to 03)

The four families the course uses. Switch family at the top.

```graph
type: calc-function-family
family: quadratic
```

Shifts and reflections: $f(x + c)$ moves left, $f(x) + c$ moves up, $f(-x)$ and $-f(x)$ reflect. Every extreme point travels with the graph, which is how the $f(x+2)$ and $f(-x)$ parts are answered in one line.

```graph
type: calc-transformations
base: parabola
```

An absolute value flips only the part below the axis.

![[pp21-q2-abs-cubic-graph.png]]

## 3. Limits and continuity (Lec 03 to 05)

A limit is where the curve is heading, not the value at the point. Three cases: a hole (removable), a jump, and a point moved off the curve.

```graph
type: calc-limit-approach
limitCase: removable
```

```graph
type: calc-limit-approach
limitCase: jump
```

The sign of an infinite limit: an odd power in the denominator flips sign across the asymptote, an even power does not.

![[lec05-pole-sign.png]]

Choosing a parameter to close the gap at a seam (Lec 12): $\sqrt[3]{x+1}$ joined to $\tfrac1x + a$. One value of $a$ makes it continuous, but the join still has no single slope.

```graph
type: calc-continuity-join
```

## 4. Asymptotes and Euler (Lec 05, 06, 11)

$\tfrac{ax - 1}{x - b}$: the root of the denominator gives the vertical asymptote, the leading terms the horizontal one, and when the factors cancel the asymptote collapses into a hole.

```graph
type: calc-asymptotes
```

$\left(1 + \tfrac kx\right)^x$ creeps up to $e^k$: the $1^\infty$ form that substitution cannot settle.

```graph
type: calc-euler-limit
```

An oblique asymptote: the rational function hugs a slanted line.

![[lec12-oblique-asymptote.png]]

## 5. The derivative (Lec 06 and 07)

The tangent slope as the limit of secant slopes. Drag the point in the last step.

```graph
type: calc-tangent-slope
fn: parabola
at: -3
```

$f$ and $f'$ together: where $f$ rises, $f'$ is above the axis; where $f$ turns, $f'$ crosses zero.

```graph
type: calc-derivative-graph
fn: cubic
```

## 6. Corner, cusp, vertical tangent, jump (Lec 07)

The left and right slopes at $x = 0$ for each failure shape. Switch shape at the top: smooth $x^2$, corner $\lvert x\rvert$, cusp $x^{2/3}$, vertical tangent $\sqrt[3]{x}$, and a jump.

```graph
type: calc-differentiability
shape: corner
```

The same shapes as the lecture drew them.

![[lec07-failure-shapes.png]]

![[lec10-cusp-vs-vertical-tangent.png]]

## 7. Extrema and concavity (Lec 10 and 11)

The sign strip of $f'$ under the curve: a change from $+$ to $-$ is a maximum, $-$ to $+$ a minimum, no change no extremum.

```graph
type: calc-extrema
fn: quartic
```

Concavity: the tangent turns anticlockwise on a $\cup$ and clockwise on a $\cap$; the inflection is where it switches.

```graph
type: calc-concavity
fn: cubic
```

The inflection shapes from the lecture slides.

![[lec11-slide-inflection-shapes.png]]

## 8. The economics question (Lec 02 and 09)

Marginal cost $C'(x)$ against the true cost of one more unit, $C(x+1) - C(x)$, for $C = 300 + 100x - x^2$: $40$ against $39$ at $x = 30$.

```graph
type: calc-marginal-cost
```

A factory's revenue, cost and profit as functions of the price (Lec 02): profit is positive between the break-even prices and peaks in between.

```graph
type: calc-optimisation
```

## 9. Integrals (Lec 08)

Rectangles under a curve approach the area as they get thinner.

```graph
type: calc-riemann
fn: square
```

The signed area of the lecture's piecewise function: drag the upper limit, and area below the axis counts negative.

```graph
type: calc-accumulation
```

The past-paper version: the piecewise parabola and root, where $\int_{-1}^{a} f\,dx = 0$ at $a = 1$ (2025 Moed B Q3d).

![[pp34-q3-piecewise-graph.png]]
