---
title: "Lec 05: Two Variable Functions"
semester: 2
year: 1
course: "Maths for Economists B"
lecture: 5
tags:
  - maths-for-economists-b
  - two-variable-functions
  - domain
  - contour-lines
  - partial-derivatives
subject: maths-for-economists-b
in_scope: true
---

# Lec 05: Two Variable Functions

> Part of: [[Maths for Economists B]]
> Key concepts: [[Two-Variable Function]], [[Domain of a Two-Variable Function]], [[Contour Line]], [[Indifference Curve]], [[Partial Derivative]]

> [!note] Reconstructed from the slides
> This lesson is a 2-page skeleton: the definitions and questions are on the slides, but the class working was handwritten on the blank space and is not in the source. Every worked solution below is reconstructed and is marked as such.

## 1. Two-variable functions and surfaces

A [[Two-Variable Function]] $z = f(x,y)$ assigns one number $z$ to each point $(x,y)$ of the $[x,y]$ plane. Its graph is a **surface** in 3D: above each point $(x,y)$ of the floor sits the point at height $z=f(x,y)$.

Cutting the surface with a vertical plane gives an ordinary one-variable curve, and a one-variable curve has a tangent line. There are two natural cuts:

| Cut | Plane | What stays fixed | Resulting curve |
| --- | --- | --- | --- |
| Slice in $x$ | $y = y_0$ | $y$ | $z$ as a function of $x$ |
| Slice in $y$ | $x = x_0$ | $x$ | $z$ as a function of $y$ |
| Level cut | $z = z_0$ | $z$ | a [[Contour Line]] in the $[x,y]$ plane |

### Worked example: tangent lines on $f(x,y)=x^2+y^2$

> [!note] Reconstructed from the slides

**(a)** Plane $z=2$ at the point $(1,1)$. The curve is $x^2+y^2=2$, a circle of radius $\sqrt 2$. Differentiate implicitly (treat $y$ as a function of $x$):

$$2x + 2y\,y' = 0 \quad\Rightarrow\quad y' = -\frac{x}{y} = -1 \text{ at } (1,1).$$

Tangent line: $y - 1 = -(x-1)$, so $y = -x + 2$.

**(b)** Plane $x=0$ at the point where $y=1$. Setting $x=0$ leaves the curve $z = y^2$, so the point is $(0,1,1)$ and the slope is $\dfrac{dz}{dy} = 2y = 2$. Tangent line in that plane: $z - 1 = 2(y-1)$, i.e. $z = 2y - 1$.

> [!tip] Intuition
> In (b) fixing $x=0$ turns the problem into a one-variable derivative. That is exactly what a [[Partial Derivative]] is (section 4).

## 2. The domain of a two-variable function

The [[Domain of a Two-Variable Function]] is the set of points $(x,y)$ where the formula makes sense. The rules are the one-variable ones applied to each expression:

| Expression | Condition |
| --- | --- |
| Denominator | $\neq 0$ |
| Even root $\sqrt{u}$ | $u \ge 0$ |
| Logarithm $\ln u$ | $u > 0$ (strictly) |

> [!note] Reconstructed from the slides
> Solutions to the six slide examples, shown on the $[x,y]$ plane in the figure below.

| Function | Domain |
| --- | --- |
| $x^2+y^2$ | the whole plane, no restriction |
| $\dfrac{x-4y}{x^2+y^2}$ | $x^2+y^2\neq 0$, so everything except the origin $(0,0)$ |
| $\dfrac{x-4y}{x-y}$ | $x \ne y$, so the plane minus the line $y=x$ |
| $5\sqrt{x-2}-\ln(2-2y)$ | $x\ge 2$ and $2-2y>0$, so $x\ge2$ and $y<1$ |
| $\ln(x-2y)+\ln(y-2x)$ | $x>2y$ and $y>2x$. Combined: $2x<y<\tfrac{x}{2}$, which forces $x<0$ (a wedge in the third quadrant) |
| $\ln\!\big[x\,(y-x^2)\big]$ | $x(y-x^2)>0$: either $x>0$ and $y>x^2$, or $x<0$ and $y<x^2$ |

> [!example] Why the fifth one forces $x<0$
> From $x>2y$ and $y>2x$: $x > 2y > 4x$, so $x>4x$, which only holds for $x<0$. Check $x=-1$: need $-2<y<-0.5$. Take $y=-1$: $x-2y=1>0$ and $y-2x=1>0$. Good.

![[Lec05_domains.png]]

> [!warning] Common mistakes
> - A log needs a strictly positive argument, so its zero set is **excluded** (dashed boundary); a square root allows $0$ (solid boundary).
> - For a product inside a log, the *product* must be positive: two cases (both factors positive, or both negative), not just one.

## 3. Contour lines (isolines) and indifference curves

A [[Contour Line]] (isoline) of $z=f(x,y)$ is the set of points where $f$ takes a fixed value $z=c$. Drawing several contours on the $[x,y]$ plane gives a 2D map of the 3D surface, like a hiking map. In economics, contours of a utility function are [[Indifference Curve]]s; contours of profit are isoprofit curves.

> [!note] Reconstructed from the slides
> Slide asks for contours of three functions.

| Function | Contour $z=c$ | Shape |
| --- | --- | --- |
| $z=2y-6x+8$ | $y = 3x + \dfrac{c-8}{2}$ | parallel straight lines, slope $3$ |
| $z=\ln x+\ln y$ ($x,y>0$) | $\ln(xy)=c\Rightarrow xy=e^{c}$ | hyperbolas |
| $z=\max\{x,y\}$ ($x,y\ge0$) | $\max\{x,y\}=c$ | L-shapes: the vertical segment $x=c,\ 0\le y\le c$ and the horizontal segment $y=c,\ 0\le x\le c$, corner on $y=x$ |

![[Lec05_contour_lines.png]]

> [!tip] Reading economics from contours
> Straight parallel contours = goods are perfect substitutes. Hyperbolas ($xy=$ const) = Cobb-Douglas style smooth substitution. L-shaped contours are the signature of perfect complements. Strictly, $\min\{x,y\}$ is the complements case (corner on $y=x$, arms going up and right); the $\max$ contours here are its mirror image, with arms going down and left.

## 4. Partial derivatives (first look)

The [[Partial Derivative]] of $f(x,y)$ with respect to $x$ treats $y$ as a constant and differentiates in $x$; likewise for $y$:

$$f'_x(x,y)=\frac{\partial f}{\partial x}, \qquad f'_y(x,y)=\frac{\partial f}{\partial y}.$$

### Worked example

> [!note] Reconstructed from the slides

For $f(x,y)=2x^2-3x^2y+5y+1$:

$$f'_x = 4x - 6xy, \qquad f'_y = -3x^2 + 5.$$

In $f'_x$ the term $5y+1$ has no $x$, so it vanishes; $-3x^2y$ is $-3y$ times $x^2$, giving $-6xy$. In $f'_y$ the term $2x^2$ is a constant and $-3x^2y$ gives $-3x^2$. The next lesson uses this in full.

## Summary

- A two-variable function is a surface; slicing it with a plane fixed in one variable gives a one-variable curve with a tangent line.
- Domain: denominators $\ne0$, even roots $\ge0$, logs $>0$, then draw the region on the $[x,y]$ plane (strict inequalities dashed).
- Contour lines $f(x,y)=c$ are the 2D map of the surface; indifference curves are contours of utility.
- A partial derivative differentiates in one variable with the other held constant.

## Related notes

[[Maths for Economists B]] · [[Two-Variable Function]] · [[Domain of a Two-Variable Function]] · [[Contour Line]] · [[Partial Derivative]]
