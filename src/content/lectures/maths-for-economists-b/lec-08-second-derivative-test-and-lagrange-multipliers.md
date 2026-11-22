---
title: "Lec 08: Second Derivative Test and Lagrange Multipliers"
semester: 2
year: 1
course: "Maths for Economists B"
lecture: 8
tags:
  - maths-for-economists-b
  - local-extrema
  - second-derivative-test
  - constrained-optimization
  - lagrange-multipliers
subject: maths-for-economists-b
in_scope: true
---

# Lec 08: Second Derivative Test and Lagrange Multipliers

> Part of: [[Maths for Economists B]]
> Key concepts: [[Critical Point]], [[Second Derivative Test]], [[Saddle Point]], [[Constrained Optimization]], [[Lagrange Multipliers]]

> [!note] Reconstructed from the slides
> Lesson 8 is a skeleton (page 1 repeats the extrema recap from Lesson 7 and then adds new problems; page 2 is blank graph paper). The statement of the second derivative test and of the Lagrange method were left blank on the slides for class; they are written here from the standard theory, and the solutions are reconstructed.

## 1. Recap: types of critical point

![[Lec08_extremum_types.png]]

A [[Critical Point]] has $f'_x=f'_y=0$. It may be a local maximum, a local minimum or a [[Saddle Point]].

## 2. The second derivative test (two variables)

At a critical point $(a,b)$ compute the **discriminant**

$$D=f''_{xx}(a,b)\,f''_{yy}(a,b)-\big(f''_{xy}(a,b)\big)^2.$$

| Condition | Conclusion |
| --- | --- |
| $D>0$ and $f''_{xx}>0$ | local **minimum** |
| $D>0$ and $f''_{xx}<0$ | local **maximum** |
| $D<0$ | **saddle point** |
| $D=0$ | test is inconclusive |

> [!tip] Intuition
> $D>0$ means the surface curves the *same way* in all directions (bowl or dome); the sign of $f''_{xx}$ says which. $D<0$ means it curves up along one direction and down along another: a saddle.

### Example (finish Lesson 7): $f=x^3+y^3-6xy$

$f''_{xx}=6x$, $f''_{yy}=6y$, $f''_{xy}=-6$, so $D=36xy-36$.

| Point | $D$ | $f''_{xx}$ | Type | Value |
| --- | --- | --- | --- | --- |
| $(0,0)$ | $-36$ | $0$ | saddle | $0$ |
| $(2,2)$ | $108$ | $12$ | local minimum | $-8$ |

### Slide problem: $f(x,y)=xy^3-2x^3+2x^2-3xy$

> [!note] Reconstructed from the slides

$$f'_x=y^3-6x^2+4x-3y,\qquad f'_y=3xy^2-3x=3x(y^2-1).$$

From $f'_y=0$: $x=0$ or $y=\pm1$.

- $x=0$: $f'_x=y^3-3y=y(y^2-3)=0\Rightarrow y=0,\ \pm\sqrt3$. Points $(0,0),(0,\sqrt3),(0,-\sqrt3)$.
- $y=1$: $f'_x=-6x^2+4x-2=0\Rightarrow3x^2-2x+1=0$, discriminant $4-12<0$: no real solution.
- $y=-1$: $f'_x=-6x^2+4x+2=0\Rightarrow3x^2-2x-1=0\Rightarrow x=1$ or $x=-\tfrac13$. Points $(1,-1),(-\tfrac13,-1)$.

Second derivatives: $f''_{xx}=4-12x$, $f''_{yy}=6xy$, $f''_{xy}=3y^2-3$.

| Point | $f''_{xx}$ | $f''_{yy}$ | $f''_{xy}$ | $D$ | Type |
| --- | --- | --- | --- | --- | --- |
| $(0,0)$ | $4$ | $0$ | $-3$ | $-9$ | saddle |
| $(0,\pm\sqrt3)$ | $4$ | $0$ | $6$ | $-36$ | saddle |
| $(1,-1)$ | $-8$ | $-6$ | $0$ | $48$ | local **max**, $f=2$ |
| $(-\tfrac13,-1)$ | $8$ | $2$ | $0$ | $16$ | local **min**, $f=-\tfrac{10}{27}$ |

Here is the slide problem as a contour map, with each critical point classified:

```graph
type: mathsb-critical-types
```

## 3. Constrained optimisation: the box problem (substitution)

> [!example] Square-base box, volume $2\ \text{m}^3$
> Top and bottom cost $\$0.50/\text{m}^2$, sides $\$0.25/\text{m}^2$. Find the minimum cost.
>
> Let the base side be $a$ and the height $h$. Volume: $a^2h=2\Rightarrow h=\dfrac2{a^2}$.
> Cost: top and bottom $=2\cdot a^2\cdot0.5=a^2$; four sides $=4ah\cdot0.25=ah$. So
>
> $$C(a)=a^2+ah=a^2+\frac2a.$$
>
> $C'(a)=2a-\dfrac2{a^2}=0\Rightarrow a^3=1\Rightarrow a=1$, $h=2$. $C''(a)=2+\dfrac4{a^3}>0$, so it is a minimum.
> **Minimum cost: $\$3$** (box $1\times1\times2$ m).

![[Lec08_box_cost.png]]

## 4. The Lagrange multipliers method

[[Constrained Optimization]] means optimising $f(x_1,\dots,x_n)$ subject to one or more constraints $g_k(x_1,\dots,x_n)=c_k$. [[Lagrange Multipliers]] avoids solving the constraint for one variable first.

1. Form $\mathcal L=f-\sum_k\lambda_k\,(g_k-c_k)$ (one multiplier $\lambda_k$ per constraint).
2. Set every partial derivative to zero: $\partial\mathcal L/\partial x_i=0$ for all $i$, plus the constraints themselves.
3. Solve the system for the $x_i$ and the $\lambda_k$; evaluate $f$ at the solution.

> [!tip] Why it works
> At the optimum the gradient of $f$ is a combination of the constraint gradients: you cannot improve $f$ while staying on the constraint. $\lambda$ measures how much $f$ would change if the constraint constant $c$ were relaxed by one unit.

> [!example] Box problem again with Lagrange
> Minimise $C=a^2+ah$ subject to $a^2h=2$. $\mathcal L=a^2+ah-\lambda(a^2h-2)$.
> $\mathcal L_a=2a+h-2\lambda ah=0$, $\ \mathcal L_h=a-\lambda a^2=0\Rightarrow\lambda=\tfrac1a$.
> Substituting: $2a+h-2h=0\Rightarrow h=2a$, and $a^2\cdot2a=2\Rightarrow a=1$, $h=2$: same answer.

### Slide problem 1: four variables, two constraints

> [!note] Reconstructed from the slides

Minimise $f=x^2+y^2+z^2+t^2$ subject to $x+y+z+t=-4$ and $x-y+z-t=0$.

$\mathcal L=f-\lambda_1(x+y+z+t+4)-\lambda_2(x-y+z-t)$:

$$2x=\lambda_1+\lambda_2,\quad 2y=\lambda_1-\lambda_2,\quad 2z=\lambda_1+\lambda_2,\quad 2t=\lambda_1-\lambda_2.$$

So $x=z=a$ and $y=t=b$. Constraints: $2a+2b=-4$ and $2a-2b=0$, giving $a=b=-1$. The point is $(-1,-1,-1,-1)$ and the minimum value is $\mathbf{4}$. It is a minimum because $f$ is a sum of squares (convex).

### Slide problem 2: $n$ variables

Minimise $f=\sum_{i=1}^n x_i^2$ subject to $\sum_{i=1}^n x_i=1$; show the minimum is $\tfrac1n$.

$\mathcal L=\sum x_i^2-\lambda\big(\sum x_i-1\big)$, so $2x_i=\lambda$ for every $i$: **all $x_i$ are equal**. The constraint then gives $x_i=\tfrac1n$ and

$$f_{\min}=n\cdot\frac1{n^2}=\frac1n.\qquad\blacksquare$$

> [!tip] Interpretation
> Spreading a fixed total equally minimises the sum of squares: a "variance is smallest when everything is equal" result.

## Summary

- Classify critical points with $D=f''_{xx}f''_{yy}-(f''_{xy})^2$: $D>0$ is an extremum (sign of $f''_{xx}$ decides), $D<0$ a saddle.
- A constrained problem can be solved by substitution or by Lagrange multipliers.
- Lagrange: $\mathcal L=f-\lambda(g-c)$, set all partials to zero, solve with the constraint; with several constraints use several $\lambda$s.

## Related notes

[[Maths for Economists B]] · [[Critical Point]] · [[Second Derivative Test]] · [[Saddle Point]] · [[Constrained Optimization]] · [[Lagrange Multipliers]]
