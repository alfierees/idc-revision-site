---
title: "Lec 09 - Constrained Optimisation and Lagrange Multipliers"
semester: 2
year: 1
course: "Maths for Economists B"
lecture: 9
tags:
  - maths-for-economists-b
  - optimisation
  - constrained-optimisation
  - lagrange-multipliers
  - multivariable-calculus
subject: maths-for-economists-b
in_scope: true
---

# Lec 09: Constrained Optimisation and Lagrange Multipliers

> Part of: [[Maths for Economists B]]
> Key concepts: [[Constrained Optimisation]], [[Lagrange Multiplier Method]], [[Lagrangian]], [[Lagrange Multiplier]], [[First-Order Conditions]]

> [!note] About this note
> The source is a 2-page skeleton (Lesson 9 framework): the box problem, the heading "The Lagrange Multipliers Method" and three exercises, with the working left blank (filled in during class). The method description and all working below are written for this note. Callouts marked *Reconstructed from the slides* are not verbatim class working.

## 1. The problem: optimising under a constraint

An **unconstrained** problem asks for the max/min of $f(x,y,\dots)$ over all inputs. A **constrained** problem restricts the inputs to those satisfying one or more equations $g(x,y,\dots)=c$. Economics is full of these: maximise utility subject to a budget, minimise cost subject to an output target.

There are two ways to attack it:

| Approach | Idea | When it works well |
| --- | --- | --- |
| **Substitution** | Solve the constraint for one variable, plug into $f$, then do ordinary one-variable calculus | One simple constraint that is easy to solve |
| **[[Lagrange Multiplier Method]]** | Add a new variable $\lambda$ per constraint and solve all first-order conditions together | Several constraints, or awkward ones (e.g. $x^2+y^2+z^2=1$) |

## 2. Warm-up: the box problem

> [!example] Slide problem
> Build a rectangular box with a **square base** and volume $2\,\text{m}^3$. Top and bottom material costs $\$0.50$ per $\text{m}^2$; side material costs $\$0.25$ per $\text{m}^2$. Find the minimal cost.

> [!note] Reconstructed from the slides
> Let the base side be $x$ and the height $h$ (metres).
>
> - Volume constraint: $x^2 h = 2$.
> - Top and bottom: two squares of area $x^2$, cost $2x^2 \times 0.50 = x^2$.
> - Sides: four rectangles of area $xh$, cost $4xh \times 0.25 = xh$.
>
> So the cost to minimise is
>
> $$
> C(x,h) = x^2 + xh \quad \text{subject to} \quad x^2 h = 2 .
> $$
>
> **By substitution.** From the constraint $h = 2/x^2$, so $C(x) = x^2 + 2/x$. Then
>
> $$
> C'(x) = 2x - \frac{2}{x^2} = 0 \;\Rightarrow\; x^3 = 1 \;\Rightarrow\; x = 1, \quad h = 2 .
> $$
>
> $C''(x) = 2 + 4/x^3 > 0$, so this is a minimum. Minimal cost: $C = 1 + 2 = \boxed{\$3}$.
>
> **By Lagrange** (see section 3): $L = x^2 + xh - \lambda(x^2 h - 2)$.
>
> $$
> L_x = 2x + h - 2\lambda x h = 0, \qquad L_h = x - \lambda x^2 = 0 .
> $$
>
> The second gives $\lambda = 1/x$ (as $x>0$). Substituting into the first: $2x + h - 2h = 0$, so $h = 2x$. The constraint $x^2 \cdot 2x = 2$ gives $x = 1$, $h = 2$, $\lambda = 1$, cost $\$3$. Both methods agree.

## 3. The Lagrange multipliers method

> [!info] Recipe (one constraint)
> To optimise $f(x_1,\dots,x_n)$ subject to $g(x_1,\dots,x_n) = c$:
>
> 1. Form the [[Lagrangian]]
>
>    $$
>    L(x_1,\dots,x_n,\lambda) = f(x_1,\dots,x_n) - \lambda\,\big(g(x_1,\dots,x_n) - c\big).
>    $$
>
> 2. Set every partial derivative to zero (the [[First-Order Conditions]]):
>
>    $$
>    \frac{\partial L}{\partial x_i} = 0 \;\;(i=1,\dots,n), \qquad \frac{\partial L}{\partial \lambda} = 0 .
>    $$
>
>    The last equation just returns the constraint $g = c$.
> 3. Solve this system for $x_1,\dots,x_n,\lambda$. Each solution is a candidate.
> 4. Compare the value of $f$ at the candidates (or argue from the shape of $f$) to decide which is the min and which is the max.

> [!info] Several constraints
> With constraints $g_1 = c_1, \dots, g_m = c_m$, use one multiplier per constraint:
>
> $$
> L = f - \lambda_1 (g_1 - c_1) - \dots - \lambda_m (g_m - c_m),
> $$
>
> and set all partials with respect to the $x_i$ and the $\lambda_j$ to zero.

> [!tip] Intuition
> At a constrained optimum the level curve of $f$ just touches the constraint curve, so the gradient of $f$ is parallel to the gradient of $g$: $\nabla f = \lambda \nabla g$. That is exactly what $\partial L / \partial x_i = 0$ says. The multiplier $\lambda$ is the scaling factor between the two gradients.

> [!tip] What $\lambda$ means in economics
> $\lambda$ measures how much the optimal value of $f$ changes if the constraint constant $c$ is relaxed by one unit (a "shadow price"). In the box problem $\lambda = 1$: one more $\text{m}^3$ of required volume would raise the minimal cost by roughly $\$1$. (Standard interpretation, not stated on the slides.)

> [!warning] Common mistakes
> - Forgetting that the equation $\partial L/\partial\lambda = 0$ is the constraint itself, and so skipping it when solving.
> - Dividing by a variable that could be zero (divide only when you know it is non-zero, otherwise treat it as a separate case).
> - Stopping after finding candidates: you still need to decide which is the minimum and which the maximum.

Watch why the gradients must line up at the optimum, and what $\lambda$ measures:

```graph
type: mathsb-lagrange
```

## 4. Exercise 1: two constraints, four variables

> [!example] Slide problem
> Find the minimal value of $f(x,y,z,t) = x^2+y^2+z^2+t^2$ under the constraints
>
> $$
> x+y+z+t = -4, \qquad x-y+z-t = 0 .
> $$

> [!note] Reconstructed from the slides
> $$
> L = x^2+y^2+z^2+t^2 - \lambda\,(x+y+z+t+4) - \mu\,(x-y+z-t).
> $$
>
> First-order conditions in the variables:
>
> $$
> 2x = \lambda+\mu, \quad 2y = \lambda-\mu, \quad 2z = \lambda+\mu, \quad 2t = \lambda-\mu .
> $$
>
> So $x = z$ and $y = t$. Write $x=z=a$ and $y=t=b$.
>
> - First constraint: $2a+2b = -4$, so $a+b=-2$.
> - Second constraint: $2a-2b = 0$, so $a=b$.
>
> Hence $a=b=-1$: $x=y=z=t=-1$ (with $\lambda=-4$, $\mu=0$).
>
> $$
> f_{\min} = 4\times(-1)^2 = \boxed{4}.
> $$
>
> This is a minimum because $f$ is a sum of squares (convex) and the constraints are linear, so the single critical point is the global minimum.

## 5. Exercise 2: min and max on a sphere

> [!example] Slide problem
> Find the minimal and maximal value of $f(x,y,z) = 2x+4y+4z$ under the constraint $x^2+y^2+z^2 = 1$.

> [!note] Reconstructed from the slides
> $$
> L = 2x+4y+4z - \lambda\,(x^2+y^2+z^2-1).
> $$
>
> $$
> L_x: 2 = 2\lambda x, \qquad L_y: 4 = 2\lambda y, \qquad L_z: 4 = 2\lambda z .
> $$
>
> So $\lambda \neq 0$ and $x = 1/\lambda$, $y = z = 2/\lambda$. Plug into the constraint:
>
> $$
> \frac{1}{\lambda^2} + \frac{4}{\lambda^2} + \frac{4}{\lambda^2} = \frac{9}{\lambda^2} = 1 \;\Rightarrow\; \lambda = \pm 3 .
> $$
>
> | $\lambda$ | Point $(x,y,z)$ | $f$ | Verdict |
> | --- | --- | --- | --- |
> | $3$ | $\left(\tfrac13, \tfrac23, \tfrac23\right)$ | $\tfrac23 + \tfrac83 + \tfrac83 = 6$ | **maximum** |
> | $-3$ | $\left(-\tfrac13, -\tfrac23, -\tfrac23\right)$ | $-6$ | **minimum** |
>
> The sphere is closed and bounded, so $f$ attains both extremes, and they must be among the two candidates. Maximum $=6$, minimum $=-6$.

> [!tip] Sanity check
> $f$ is the dot product of $(x,y,z)$ with $(2,4,4)$, which has length $\sqrt{4+16+16}=6$. For a unit vector the dot product ranges over $[-6,6]$, matching the answer.

## 6. Exercise 3: the sum of squares under a sum constraint

> [!example] Slide problem
> Given $f(x_1,\dots,x_n) = \sum_{i=1}^{n} x_i^2$, find its minimal value under the constraint $\sum_{i=1}^{n} x_i = 1$ and show it equals $\dfrac{1}{n}$.

> [!note] Reconstructed from the slides
> $$
> L = \sum_{i=1}^{n} x_i^2 - \lambda\left(\sum_{i=1}^{n} x_i - 1\right).
> $$
>
> For each $i$: $\dfrac{\partial L}{\partial x_i} = 2x_i - \lambda = 0$, so $x_i = \lambda/2$. Every $x_i$ is the same. The constraint gives $n \cdot \lambda/2 = 1$, so $\lambda = 2/n$ and
>
> $$
> x_i = \frac{1}{n} \quad \text{for all } i .
> $$
>
> $$
> f_{\min} = \sum_{i=1}^{n} \left(\frac1n\right)^2 = n \cdot \frac{1}{n^2} = \boxed{\frac{1}{n}} .
> $$
>
> Interpretation: for a fixed total, a sum of squares is smallest when the total is split **equally**. This is a minimum because $f$ is convex.

## Summary

- A constrained problem can be solved by substitution (one easy constraint) or by [[Lagrange Multiplier Method]].
- Build $L = f - \lambda(g-c)$, set all partials to zero, solve, and compare candidates.
- One multiplier per constraint; $\partial L/\partial \lambda = 0$ restates the constraint.
- Results from the slides: box minimum cost $\$3$ at $x=1$, $h=2$; two-constraint problem has minimum $4$ at $(-1,-1,-1,-1)$; on the unit sphere $2x+4y+4z$ ranges from $-6$ to $6$; $\sum x_i^2$ with $\sum x_i = 1$ is minimised at $x_i = 1/n$ with value $1/n$.

## Related notes

- [[Maths for Economists B]]
- [[Constrained Optimisation]], [[Lagrangian]], [[Lagrange Multiplier]]
