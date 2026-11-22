---
title: "Lec 08: Chain Rule, Exponential Derivatives and Integrals"
semester: 1
year: 1
course: "Maths for Economists A"
lecture: 8
tags:
  - maths-for-economists-a
  - chain-rule
  - derivative-of-exponential
  - derivative-of-logarithm
  - indefinite-integral
  - definite-integral
  - integration-rules
  - piecewise-functions
subject: maths-for-economists-a
in_scope: true
---

# Chain Rule, Exponential Derivatives and Integrals

> Part of: [[Maths for Economists A]]
> Key concepts: [[Chain Rule]], [[Derivative of a Composed Power Function]], [[Derivative of an Exponential Function]], [[Derivative of a Logarithmic Function]], [[Indefinite Integral]], [[Definite Integral]], [[Integration Rules]], [[Piecewise Function]]
> Builds on: [[Lec_03-Composition, Transformations, Exponentials and Limits]] (composition, exponentials) and [[Lec_02-Piecewise Functions and Business Applications]] (piecewise functions)

> [!note] How to read this note
> Lesson 08 is a two-page worksheet. Page 1 prints headings, formulas and exercises with blank space for the lecturer's working; page 2 is blank graph paper. Only the printed items below are source: the formulas printed under "Integration rules" and "Definite integrals", and the exercise statements. Every explanation, derivation and answer is my reconstruction, inside a **Reconstructed from the slides** callout. Check it against your class notes.

## 1. The chain rule for a composed power function

**Printed:** the heading "The derivative of a composed power function: the chain rule" and the function $y=[f(x)]^n$. The space beneath it was left blank for the lecturer.

> [!note] Reconstructed from the slides
> $y=[f(x)]^n$ is a [[Composition of Functions|composition]]: an outer "power $n$" applied to an inner function $f(x)$. The [[Chain Rule]] says: differentiate the outside (keeping the inside untouched), then multiply by the derivative of the inside.
>
> $$
> y=[f(x)]^n \;\Rightarrow\; y'=n\,[f(x)]^{n-1}\cdot f'(x)
> $$
>
> **Example (mine, not printed).** $y=(3x^2+1)^4$. Here $f(x)=3x^2+1$, $f'(x)=6x$, so
>
> $$
> y'=4(3x^2+1)^3\cdot 6x=24x\,(3x^2+1)^3.
> $$
>
> Forgetting the factor $f'(x)$ is the usual mistake.

## 2. Derivatives of exponential and logarithmic functions

**Printed:** only the heading "The derivative of exponential and logarithmic functions". No formulas or exercises appear.

> [!note] Reconstructed from the slides
> Standard results, each with the chain rule built in ($f$ means $f(x)$, and $a>0$, $a\neq1$):
>
> | Function | Derivative |
> |---|---|
> | $y=e^{f}$ | $y'=f'\,e^{f}$ |
> | $y=a^{f}$ | $y'=f'\,a^{f}\ln a$ |
> | $y=\ln f$ | $y'=\dfrac{f'}{f}$ |
> | $y=\log_a f$ | $y'=\dfrac{f'}{f\,\ln a}$ |
>
> **Example (mine).** $y=e^{4x+1}$ gives $y'=4e^{4x+1}$. This is why the integral in section 4 carries a factor $\tfrac14$: integration undoes differentiation.
>
> $y=\ln(4x+1)$ gives $y'=\dfrac{4}{4x+1}$.

## 3. Definite integrals

**Printed:** the definition, and one exercise.

$$\int_a^b f(x)\,dx=\big[F(x)\big]_a^b=F(b)-F(a)$$

where $F$ is an antiderivative of $f$ ($F'=f$). Exercise: $\displaystyle\int_1^2 x^3\,dx=$

> [!note] Reconstructed from the slides
> An antiderivative of $x^3$ is $F(x)=\tfrac{x^4}{4}$ (the constant $C$ cancels in $F(b)-F(a)$, so it is dropped).
>
> $$
> \int_1^2 x^3\,dx=\left[\frac{x^4}{4}\right]_1^2=\frac{16}{4}-\frac{1}{4}=\frac{15}{4}
> $$

**See it move.** Add rectangles until they become the exact area under x³ from 1 to 2.

```graph
type: calc-riemann
fn: cube
```

## 4. Integrals

### Integration rules (printed)

$$\int\big(f(x)\pm g(x)\big)dx=\int f(x)\,dx\pm\int g(x)\,dx$$

$$\int a\,f(x)\,dx=a\int f(x)\,dx$$

$$\int f(ax+b)\,dx=\frac{F(ax+b)}{a}+C$$

where $F$ is an antiderivative of $f$.

> [!note] Reconstructed from the slides
> The third rule is the chain rule run backwards for a **linear** inside function. Differentiating $F(ax+b)$ gives $a\,f(ax+b)$, so dividing by $a$ fixes it. It works only when the inside is linear. The basic power rule used below is
>
> $$
> \int x^n\,dx=\frac{x^{n+1}}{n+1}+C\quad(n\neq-1),\qquad \int\frac1x\,dx=\ln|x|+C,\qquad \int e^{x}\,dx=e^{x}+C.
> $$

### Immediate integrals (printed exercises)

**(a)** $\displaystyle\int (x^2-x^3)\,dx$

> [!note] Reconstructed from the slides
>
> $$
> \int (x^2-x^3)\,dx=\frac{x^3}{3}-\frac{x^4}{4}+C
> $$

**(b)** $\displaystyle\int\left(3x^2-8x^3+\frac{1}{6\sqrt[6]{x^5}}\right)dx$

> [!note] Reconstructed from the slides
> Rewrite the last term with a fractional power: $6\sqrt[6]{x^5}=6x^{5/6}$, so
>
> $$
> \frac{1}{6\sqrt[6]{x^5}}=\frac16\,x^{-5/6}.
> $$
> Then integrate term by term:
>
> $$
> \int\left(3x^2-8x^3+\tfrac16 x^{-5/6}\right)dx = x^3-2x^4+\frac16\cdot\frac{x^{1/6}}{1/6}+C = x^3-2x^4+x^{1/6}+C.
> $$
> The last term simplifies because $\tfrac16$ cancels the $\tfrac{1}{1/6}$.

**(c)** $\displaystyle\int (4x+1)^5\,dx$

> [!note] Reconstructed from the slides
> Linear inside ($a=4$, $b=1$), outer function $x^5$ with antiderivative $\tfrac{x^6}{6}$:
>
> $$
> \int (4x+1)^5\,dx=\frac{(4x+1)^6}{4\cdot 6}+C=\frac{(4x+1)^6}{24}+C
> $$

**(d)** $\displaystyle\int e^{4x+1}\,dx$

> [!note] Reconstructed from the slides
>
> $$
> \int e^{4x+1}\,dx=\frac{e^{4x+1}}{4}+C
> $$

**(e)** $\displaystyle\int \frac{1}{4x+1}\,dx$

> [!note] Reconstructed from the slides
> Outer function $\tfrac1x$ with antiderivative $\ln|x|$:
>
> $$
> \int\frac{1}{4x+1}\,dx=\frac{\ln|4x+1|}{4}+C
> $$

**(f)** $\displaystyle\int\big(1+\sqrt{x}\big)^2\,dx$

> [!note] Reconstructed from the slides
> The inside is **not** linear in $x$ (it contains $\sqrt x$), so the $\tfrac1a$ rule does not apply. Expand first:
>
> $$
> (1+\sqrt x)^2=1+2\sqrt x+x=1+2x^{1/2}+x
> $$
>
> $$
> \int\big(1+2x^{1/2}+x\big)dx=x+2\cdot\frac{x^{3/2}}{3/2}+\frac{x^2}{2}+C=x+\frac43x^{3/2}+\frac{x^2}{2}+C
> $$

## 5. Integral of a piecewise function

**Printed:**

$$f(x)=\begin{cases}x^2-2, & x\le 0\\ 3-x, & 0<x<5\\ \dfrac{1}{x^2}, & x\ge 5\end{cases}\qquad\text{Find}\quad\int_{-3}^{7} f(x)\,dx$$

> [!note] Reconstructed from the slides
> Split the interval at the breakpoints $x=0$ and $x=5$ and use the formula that applies on each part. The points $-3$ and $7$ lie in the first and third pieces.
>
> $$
> \int_{-3}^{7}f\,dx=\int_{-3}^{0}(x^2-2)\,dx+\int_{0}^{5}(3-x)\,dx+\int_{5}^{7}x^{-2}\,dx
> $$
>
> **Piece 1:**
>
> $$
> \left[\frac{x^3}{3}-2x\right]_{-3}^{0}=0-\big(-9+6\big)=3
> $$
>
> **Piece 2:**
>
> $$
> \left[3x-\frac{x^2}{2}\right]_{0}^{5}=15-\frac{25}{2}=\frac52
> $$
>
> **Piece 3:**
>
> $$
> \left[-\frac1x\right]_{5}^{7}=-\frac17+\frac15=\frac{2}{35}
> $$
>
> **Total:**
>
> $$
> 3+\frac52+\frac{2}{35}=\frac{210+175+4}{70}=\frac{389}{70}\approx5.56
> $$
>
> The jumps at $x=0$ and $x=5$ do not matter: a finite jump does not change the area, and each piece is integrated up to its own endpoint.

![[Lec08_piecewise_integral.png]]

> [!note] Reconstructed from the slides
> The figure is my sketch. Blue regions are above the $x$-axis and add to the integral; red regions are below it and subtract. Piece 1 has area above and below the axis (zero at $x=\pm\sqrt2$), so its signed total is $3$, not simply an area. Piece 2 is a triangle above (area $4.5$) minus a triangle below (area $2$), giving $2.5$.

**See it move.** Drag the upper limit and watch signed area accumulate across the three pieces.

```graph
type: calc-accumulation
```

## Summary

- **Chain rule:** $[f]^n$ has derivative $n[f]^{n-1}f'$. Exponentials and logs pick up the same factor $f'$.
- **Definite integral:** $F(b)-F(a)$, with no constant needed.
- **Linear inside:** $\int f(ax+b)\,dx=F(ax+b)/a+C$. A non-linear inside needs expanding or another method.
- **Piecewise integrals:** split at the breakpoints and add the pieces.
