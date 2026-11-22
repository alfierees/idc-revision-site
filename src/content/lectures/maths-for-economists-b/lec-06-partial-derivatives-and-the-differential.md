---
title: "Lec 06: Partial Derivatives and the Differential"
semester: 2
year: 1
course: "Maths for Economists B"
lecture: 6
tags:
  - maths-for-economists-b
  - partial-derivatives
  - differential
  - implicit-differentiation
  - second-partial-derivatives
subject: maths-for-economists-b
in_scope: true
---

# Lec 06: Partial Derivatives and the Differential

> Part of: [[Maths for Economists B]]
> Key concepts: [[Partial Derivative]], [[Total Differential]], [[Implicit Differentiation]], [[Second Partial Derivative]]

> [!note] Reconstructed from the slides
> The lesson is a 2-page skeleton. Definitions and questions are on the slides; the class working was handwritten and is not in the source, so all solutions below are reconstructed.

## 1. Partial derivatives

The [[Partial Derivative]] with respect to $x$ is the ordinary derivative in $x$ with every other variable frozen as a constant:

$$f'_x(x,y)=\frac{\partial f}{\partial x}=\lim_{h\to0}\frac{f(x+h,y)-f(x,y)}{h}, \qquad f'_y(x,y)=\lim_{h\to0}\frac{f(x,y+h)-f(x,y)}{h}.$$

Recap on $f(x,y)=2x^2-3x^2y+5y+1$: $f'_x=4x-6xy$ and $f'_y=5-3x^2$.

## 2. Geometric interpretation

$f'_x(x_0,y_0)$ is the **slope of the tangent line to the curve cut from the surface by the plane $y=y_0$**, in the $x$ direction. Similarly $f'_y(x_0,y_0)$ is the slope in the plane $x=x_0$. Economically: the approximate change in $f$ from a one-unit increase in one variable, the other held fixed.

> [!example] $z=x^2+y^2$, find $z'_x(2,1)$ and interpret
> $z'_x = 2x$, so $z'_x(2,1)=4$. In the plane $y=1$ the curve is $z=x^2+1$ and the point is $(2,1,5)$. The slope is $4$: with $y$ held at $1$, raising $x$ from $2$ by one unit raises $z$ by about $4$.

### Slope in the plane $x=1$

> [!example] $f(x,y)=y\ln(x+y^2-1)-2xe$, plane $x=1$, at $y=e^2$
> The slope in the plane $x=1$ is a derivative in $y$, i.e. $f'_y(1,e^2)$. Differentiating in $y$ (product rule on $y\cdot\ln(\cdot)$; the term $-2xe$ has no $y$, reading $e$ as the constant $2.718\ldots$):
>
> $$f'_y=\ln(x+y^2-1)+y\cdot\frac{2y}{x+y^2-1}.$$
>
> At $x=1$: $x+y^2-1=y^2=e^4$, so $f'_y(1,e^2)=\ln e^4+\dfrac{2e^4}{e^4}=4+2=6$.

> [!warning] Check slide
> The last term is printed as "$2xe$"; if it is really $2xe^{y}$ the answer changes. Under the constant-$e$ reading the numbers come out cleanly ($6$), which suggests that is the intended one.

![[Lec06_tangent_slopes.png]]

A partial derivative is an ordinary slope on one slice of the surface. Step through it:

```graph
type: mathsb-partial-slice
```

## 3. The differential

The [[Total Differential]] approximates the change in the function from small changes in the variables. For $z=f(x,y)$:

$$\boxed{dz = f'_x(x,y)\,dx + f'_y(x,y)\,dy}$$

Each partial derivative is a "price per unit" of one variable, multiplied by how much that variable moves. Then $f(x_0+dx,\,y_0+dy)\approx f(x_0,y_0)+dz$.

> [!example] Estimate $f(4.95,\,2.04)$ for $f=\sqrt{x^2-y^4}$, from $(5,2)$
> $f(5,2)=\sqrt{25-16}=3$.
> $f'_x=\dfrac{x}{\sqrt{x^2-y^4}}=\dfrac{5}{3}$, $\quad f'_y=\dfrac{-2y^3}{\sqrt{x^2-y^4}}=\dfrac{-16}{3}$.
> $dx=4.95-5=-0.05$, $dy=2.04-2=0.04$.
>
> $$dz=\frac53(-0.05)+\left(-\frac{16}{3}\right)(0.04)\approx-0.0833-0.2133=-0.2967.$$
>
> Estimate: $3-0.2967\approx 2.703$. (The exact value is $\approx2.680$; the differential is linear, so it drifts slightly for these step sizes.)

> [!example] Company profit: estimate the daily profit change
> $P'_x=200+3y$, $P'_y=100+3x$, and $P(100,400)=180{,}000$. Move to $101$ tables, $398$ chairs, so $dx=1$, $dy=-2$.
> At $(100,400)$: $P'_x=200+1200=1400$, $P'_y=100+300=400$.
>
> $$dP=1400(1)+400(-2)=600,\qquad P(101,398)\approx180{,}600\ \$.$$

Why does the differential work, and what does it leave out? For $z=xy$ you can see it as area:

```graph
type: mathsb-differential
```

## 4. Implicit differentiation with partial derivatives

If an equation $F(x,y)=0$ defines $y$ as a function of $x$, then

$$\boxed{y'_x=\frac{dy}{dx}=-\frac{f'_x}{f'_y}}$$

This comes from setting $dF = F'_x\,dx+F'_y\,dy = 0$ along the curve and solving for $dy/dx$. See [[Implicit Differentiation]].

> [!example] $x^2+y^2=25$, slopes at $x=3$
> Let $F=x^2+y^2-25$. Then $y'=-\dfrac{2x}{2y}=-\dfrac{x}{y}$. At $x=3$: $y^2=16$, so $y=\pm4$.
>
> | Point | Slope $-x/y$ |
> | --- | --- |
> | $(3,\,4)$ | $-\tfrac34$ |
> | $(3,\,-4)$ | $+\tfrac34$ |

> [!example] $t\ln x = x e^{t}-1$ with $x=f(t)$, find $x'=dx/dt$
> Put $F(t,x)=t\ln x-xe^{t}+1=0$. Then $F'_t=\ln x-xe^{t}$ and $F'_x=\dfrac{t}{x}-e^{t}$, so
>
> $$x'=-\frac{F'_t}{F'_x}=\frac{xe^{t}-\ln x}{\frac tx-e^{t}}=\frac{x\,(xe^{t}-\ln x)}{t-xe^{t}}.$$
>
> Check by differentiating directly in $t$: $\ln x+\dfrac{t\,x'}{x}=x'e^{t}+xe^{t}$, which rearranges to the same result.

## 5. Second partial derivatives

Differentiate a partial derivative again. There are four of them:

$$f''_{xx},\quad f''_{yy},\quad f''_{xy}=\frac{\partial}{\partial y}\!\left(f'_x\right),\quad f''_{yx}=\frac{\partial}{\partial x}\!\left(f'_y\right).$$

For well-behaved (continuous second-derivative) functions the **mixed partials are equal**: $f''_{xy}=f''_{yx}$.

> [!example] $z=x^4y^7$
> $z'_x=4x^3y^7$, $\quad z'_y=7x^4y^6$.
>
> $$z''_{xx}=12x^2y^7,\qquad z''_{yy}=42x^4y^5,\qquad z''_{xy}=z''_{yx}=28x^3y^6.$$

## Summary

- $f'_x$: differentiate in $x$, hold $y$ fixed; geometrically the slope in the plane $y=$ const.
- $dz=f'_x\,dx+f'_y\,dy$ gives a linear estimate of the change in $f$.
- Implicit slope: $y'=-f'_x/f'_y$.
- Second partials come in four versions; the two mixed ones agree.

## Related notes

[[Maths for Economists B]] · [[Partial Derivative]] · [[Total Differential]] · [[Implicit Differentiation]] · [[Second Partial Derivative]]
