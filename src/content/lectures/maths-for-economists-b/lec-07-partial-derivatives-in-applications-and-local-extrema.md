---
title: "Lec 07: Partial Derivatives in Applications and Local Extrema"
semester: 2
year: 1
course: "Maths for Economists B"
lecture: 7
tags:
  - maths-for-economists-b
  - partial-derivatives
  - n-variable-functions
  - profit-maximisation
  - local-extrema
  - critical-points
subject: maths-for-economists-b
in_scope: true
---

# Lec 07: Partial Derivatives in Applications and Local Extrema

> Part of: [[Maths for Economists B]]
> Key concepts: [[Partial Derivative]], [[Marginal Profit]], [[Isoprofit Curve]], [[Local Extremum]], [[Saddle Point]], [[Critical Point]]

> [!note] Reconstructed from the slides
> The lesson is a 2-page skeleton: questions and definitions are on the slides, the class working is not in the source. All solutions below are reconstructed. Page 2 of this lesson repeats the start of the extrema material that Lesson 8 continues.

## 1. Functions of $n$ variables

For $f(x_1,\dots,x_n)$, the partial derivative $\dfrac{\partial f}{\partial x_j}$ differentiates in $x_j$ only. In a sum $\sum_i g(x_i)$, **every term except the $j$-th is a constant**, so $\dfrac{\partial}{\partial x_j}\sum_i g(x_i)=g'(x_j)$.

> [!example] $f=e^{\sum_{i=1}^n x_i^2}=e^{x_1^2+\dots+x_n^2}$
> By the chain rule, the inner function's derivative in $x_j$ is $2x_j$:
>
> - (a) $\dfrac{\partial f}{\partial x_3}=2x_3\,f$.
> - (b) $\dfrac{\partial f}{\partial x_j}=2x_j\,f$.
> - (c) Show $\displaystyle\sum_{j=1}^n \frac1{x_j}\frac{\partial f}{\partial x_j}=2fn$:
>
> $$\sum_{j=1}^n \frac1{x_j}\cdot 2x_j f=\sum_{j=1}^n 2f = 2fn. \qquad\blacksquare$$

> [!example] $f=\sum_{i=1}^n x_i^5$, find $\sum_i x_i\,\partial f/\partial x_i$
> $\dfrac{\partial f}{\partial x_i}=5x_i^4$, so $\displaystyle\sum_i x_i\cdot5x_i^4=5\sum_i x_i^5=5f$.

> [!example] $f=\sum_{i=1}^n \ln x_i$, find $\sum_i x_i\,\partial f/\partial x_i$
> $\dfrac{\partial f}{\partial x_i}=\dfrac1{x_i}$, so $\displaystyle\sum_i x_i\cdot\frac1{x_i}=n$.

> [!tip] Pattern: Euler's idea
> $\sum_i x_i\,\partial f/\partial x_i$ equals (degree of homogeneity) $\times f$: $5f$ for $\sum x_i^5$. For $\sum\ln x_i$ (not homogeneous) it is the constant $n$. Spotting this saves effort on exam sums.

## 2. Surfboard company: a full profit problem

A company makes $x$ regular and $y$ competitive surfboards weekly.

- Cost: $C(x,y)=700+70x+100y$.
- Price-demand: $p=240-4x+y$ (regular), $q=300+x-12y$ (competitive).

> [!note] Setup
> Revenue $=px+qy$ (price times quantity for each board type). Profit $P=\text{revenue}-\text{cost}$.

**(a) Profit function.**

$$R=(240-4x+y)x+(300+x-12y)y=240x+300y-4x^2-12y^2+2xy,$$

$$\boxed{P(x,y)=170x+200y-4x^2-12y^2+2xy-700.}$$

$P(20,10)=3400+2000-1600-1200+400-700=2300$.

**(b) Which board to add?** Compare the [[Marginal Profit]] of each type at $(20,10)$:

$P'_x=170-8x+2y=30$ and $P'_y=200-24y+2x=0$.

An extra regular board adds about $30$; an extra competitive board adds about $0$. **Choose the regular board.**

**(c) Production level.** Conditions: regular sales are twice competitive ($x=2y$), and an extra board of either type has the same effect on profit ($P'_x=P'_y$):

$$170-8x+2y=200-24y+2x \;\Rightarrow\; 10x-26y=-30.$$

With $x=2y$: $20y-26y=-30\Rightarrow y=5$, $x=10$. Check: $P'_x=170-80+10=100=P'_y=200-120+20$. **Production is $10$ regular and $5$ competitive.**

**(d) An isoprofit curve.** $P(10,10)=1700+2000-400-1200+200-700=1600$, so $(10,10)$ lies on the [[Isoprofit Curve]] $P(x,y)=1600$. Its slope there is

$$y'(10,10)=-\frac{P'_x}{P'_y}=-\frac{110}{-20}=5.5.$$

*Meaning:* along the curve of constant profit $1600$, each extra regular board must be accompanied by about $5.5$ more competitive boards. At this point an extra regular board adds $110$ and an extra competitive board subtracts $20$, so to keep $dP=110\,dx-20\,dy=0$ the competitive count must rise by $5.5$ per extra regular board.

![[Lec07_profit_contours.png]]

## 3. Local extrema in two variables

Let $(a,b)$ be a point and "near" mean in a small neighbourhood.

| Type | Definition (for $(x,y)$ near $(a,b)$) |
| --- | --- |
| [[Local Extremum]]: local maximum | $f(x,y)\le f(a,b)$ |
| Local minimum | $f(x,y)\ge f(a,b)$ |
| [[Saddle Point]] | up in some directions, down in others: neither max nor min |

### Rule: first-order necessary condition

> [!info] Rule
> If $f$ has a local extremum at $(a,b)$, then both partial derivatives vanish there:
>
> $$f'_x(a,b)=0,\qquad f'_y(a,b)=0.$$

A point satisfying this is a [[Critical Point]]. The rule is **necessary, not sufficient**: a saddle point also has zero gradient. Lesson 8 supplies the test that tells the three types apart.

### Example: $f(x,y)=x^3+y^3-6xy$, find the critical points

$f'_x=3x^2-6y=0$ and $f'_y=3y^2-6x=0$.

From the first, $y=\tfrac{x^2}{2}$. Substitute: $3\cdot\tfrac{x^4}{4}-6x=0\Rightarrow x^4=8x\Rightarrow x(x^3-8)=0$, so $x=0$ or $x=2$.

| $x$ | $y=x^2/2$ | Critical point |
| --- | --- | --- |
| $0$ | $0$ | $(0,0)$ |
| $2$ | $2$ | $(2,2)$ |

(The classification of these two points is done in [[Lec_08-Second Derivative Test and Lagrange Multipliers]].)

## Summary

- Sums over $i$: only the $i=j$ term survives a partial derivative.
- For two-product problems: write revenue, subtract cost, take $P'_x$ and $P'_y$ as marginal profits.
- Slope of a constant-profit curve $=-P'_x/P'_y$.
- Local extremum needs $f'_x=f'_y=0$ (critical point); need a second test to classify.

## Related notes

[[Maths for Economists B]] · [[Partial Derivative]] · [[Marginal Profit]] · [[Critical Point]] · [[Local Extremum]] · [[Saddle Point]]
