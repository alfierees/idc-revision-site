---
title: "Lec 04: Implicit Differentiation and Two-Variable Functions"
semester: 2
year: 1
course: "Maths for Economists B"
lecture: 4
tags:
  - maths-for-economists-b
  - implicit-differentiation
  - tangent-line
  - two-variable-functions
  - logarithmic-differentiation
subject: maths-for-economists-b
in_scope: true
---

# Lec 04: Implicit Differentiation and Two-Variable Functions

> Part of: [[Maths for Economists B]]
> Key concepts: [[Implicit Differentiation]], [[Tangent Line]], [[Logarithmic Differentiation]], [[Two-Variable Function]], [[Coordinate Plane]], [[Cross Section of a Surface]]

> [!note] How to read this note
> The lesson slides are a skeleton: the explanation area for implicit differentiation is blank and all examples are unsolved. Every example is worked below and marked as reconstructed. Slide page 2 is empty graph paper.

## 1. Implicit differentiation

> [!note] Slide area blank, standard method supplied
> **Idea.** Sometimes $y$ is not isolated: the curve is given as an equation $F(x,y)=0$. Treat $y$ as an unknown function $y(x)$ and differentiate **both sides** with respect to $x$, using the chain rule on every term with $y$:
>
> $$\frac{d}{dx}\,g(y)=g'(y)\cdot\frac{dy}{dx}.$$
>
> Then solve the resulting equation for $\dfrac{dy}{dx}$.

> [!warning] Common mistakes
> - Forgetting the factor $y'$ on $y$-terms. $\frac{d}{dx}y^2=2yy'$, not $2y$.
> - Products such as $xy^2$ need the product rule: $y^2+2xyy'$.
> - The slope usually depends on **both** $x$ and $y$, so find the $y$ values at the given $x$ first.

### Example 1: $x^2+y^2=25$, slopes where $x=3$

> [!note] Reconstructed from the slides
> At $x=3$: $9+y^2=25$, so $y=\pm4$. Differentiate: $2x+2yy'=0$, so $y'=-\dfrac xy$.
>
> - at $(3,4)$: slope $-\dfrac34$.
> - at $(3,-4)$: slope $+\dfrac34$.
>
> ![[Lec04_circle_tangents.png]]
>
> The tangent is perpendicular to the radius, and the radius to $(3,4)$ has slope $\frac43$, so a tangent slope of $-\frac34$ is the negative reciprocal.

### Example 2: $y-xy^2+x^2+1=0$, tangent lines where $x=1$

> [!note] Reconstructed from the slides
> At $x=1$: $y-y^2+1+1=0\Rightarrow y^2-y-2=0\Rightarrow (y-2)(y+1)=0$, so $y=2$ or $y=-1$.
>
> Differentiate (product rule on $xy^2$):
>
> $$y'-y^2-2xyy'+2x=0\;\Rightarrow\;y'(1-2xy)=y^2-2x\;\Rightarrow\;y'=\frac{y^2-2x}{1-2xy}.$$
>
> | Point | Slope | Tangent line |
> |---|---|---|
> | $(1,2)$ | $\dfrac{4-2}{1-4}=-\dfrac23$ | $y-2=-\tfrac23(x-1)$, i.e. $y=-\tfrac23x+\tfrac83$ |
> | $(1,-1)$ | $\dfrac{1-2}{1+2}=-\dfrac13$ | $y+1=-\tfrac13(x-1)$, i.e. $y=-\tfrac13x-\tfrac23$ |

### Example 3: $t\ln x=xe^t-1$ where $x=f(t)$; find $x'=\dfrac{dx}{dt}$

> [!note] Reconstructed from the slides
> Differentiate with respect to $t$ (product rule on both sides, chain rule on $x$):
>
> $$\ln x+\frac{t\,x'}{x}=x'e^t+xe^t.$$
>
> Collect $x'$: $x'\left(\dfrac tx-e^t\right)=xe^t-\ln x$, so
>
> $$x'=\frac{xe^t-\ln x}{\dfrac tx-e^t}=\boxed{\frac{x\,(xe^t-\ln x)}{t-xe^t}}.$$

### Example 4: derivative of $y=x^{1/x}$

> [!note] Reconstructed from the slides
> Variable base **and** variable exponent: use **logarithmic differentiation**. For $x>0$:
>
> $$\ln y=\frac{\ln x}{x}.$$
>
> Differentiate both sides: $\dfrac{y'}{y}=\dfrac{\frac1x\cdot x-\ln x\cdot1}{x^2}=\dfrac{1-\ln x}{x^2}$. So
>
> $$y'=\boxed{x^{1/x}\cdot\frac{1-\ln x}{x^2}}.$$

## 2. Two-variable functions

### Planes in 3D

The 3D rectangular coordinate system has three axes $x,y,z$. A plane is a collection of points satisfying one condition on a coordinate:

| Plane | Points of the form |
|---|---|
| $[X,Y]$ plane ($z=0$) | $(x,y,0)$ |
| $z=4$ plane | $(x,y,4)$ |
| $[X,Z]$ plane ($y=0$) | $(x,0,z)$ |
| $[Y,Z]$ plane ($x=0$) | $(0,y,z)$ |

### Graph of a two-variable function

The graph of $z=f(x,y)$ is a **surface** in 3D. The slide's method: **intersect the surface with different planes** to get ordinary curves, which are easy to draw and differentiate. Fixing $z$ gives a level curve; fixing $x$ or $y$ gives a cross section.

### Example: surface $f(x,y)=x^2+y^2$

> [!note] Reconstructed from the slides
> **(a) Plane $z=2$, at the point $(1,1)$.** The intersection is $x^2+y^2=2$, a circle of radius $\sqrt2$ at height 2. Implicit differentiation: $2x+2yy'=0\Rightarrow y'=-x/y=-1$ at $(1,1)$. The tangent line in that plane is $y-1=-(x-1)$:
>
> $$\boxed{z=2,\quad x+y=2.}$$
>
> **(b) Plane $x=0$, at the point where $y=1$.** The intersection is $z=y^2$, a parabola in the $(y,z)$ plane. At $y=1$, $z=1$, so the point is $(0,1,1)$, and the slope is $\dfrac{dz}{dy}=2y=2$. The tangent line is $z-1=2(y-1)$:
>
> $$\boxed{x=0,\quad z=2y-1.}$$
>
> ![[Lec04_surface_sections.png]]

> [!tip] Link to later topics
> The slopes in (a) and (b) are the seeds of **partial derivatives**: slope in the direction of one variable with the others held fixed.

> [!note] Assumption
> "Intersects from the surface" is read as "the curve where the plane meets the surface".

## Summary

- Implicit differentiation: differentiate both sides, put a $y'$ on every $y$ term, then solve for $y'$. Find the $y$ values at the given $x$ first.
- Worked slopes: circle $\mp\frac34$; $y-xy^2+x^2+1=0$ gives $-\frac23$ at $(1,2)$ and $-\frac13$ at $(1,-1)$.
- Variable-power functions: logarithmic differentiation, $\big(x^{1/x}\big)'=x^{1/x}\dfrac{1-\ln x}{x^2}$.
- Two-variable surfaces are studied via planes: $z=c$ gives level curves, $x=c$ or $y=c$ gives cross sections.

## Related notes

- [[Maths for Economists B]]
- Previous: [[Lec_03-Exponential and Logarithmic Limits and Asymptotes]]
