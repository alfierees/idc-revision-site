---
title: "Lec 07: The Derivative, Differentiability and Rules"
semester: 1
year: 1
course: "Maths for Economists A"
lecture: 7
tags:
  - maths-for-economists-a
  - derivative
  - definition-of-derivative
  - differentiability
  - tangent-line
  - vertical-tangent
  - cusp
  - differentiation-rules
  - product-rule
  - quotient-rule
subject: maths-for-economists-a
in_scope: true
---

# The Derivative, Differentiability and Rules

> Part of: [[Maths for Economists A]]
> Builds on: [[Lec_04-Limits and Continuity]] (limits, [[One-Sided Limit]]s, [[Continuity]]) and [[Lec_02-Piecewise Functions and Business Applications]] ([[Piecewise Function]]s)
> Key concepts: [[Derivative]], [[Definition of the Derivative]], [[Differentiability]], [[Tangent Line]], [[Vertical Tangent]], [[Cusp]], [[Power Rule]], [[Product Rule]], [[Quotient Rule]]

> [!note] How to read this note
> Lesson 07 is a two-page worksheet: page 2 is blank graph paper, and the lecturer worked the answers in class on the blank space of page 1. Only the printed questions are source. Every worked answer below sits in a **Reconstructed from the slides** callout: it is my working, not the lecturer's. Check it against your own class notes.

## 1. The definition of the derivative

**Printed:** The definition of the derivative is the following limit, if it exists:

$$f'(x)=\lim_{h\to 0}\frac{f(x+h)-f(x)}{h}$$

> [!note] Reconstructed from the slides
> The fraction is the slope of the **secant line** through $(x,f(x))$ and $(x+h,f(x+h))$. As $h\to 0$ the second point slides onto the first and the secant becomes the [[Tangent Line]]. So the [[Derivative]] at $x$ is the **slope of the tangent** there.
>
> "If it exists" is the whole point of this lesson: the limit can fail to exist, and then the function is **not differentiable** at that point (section 3). The limit is two-sided, so the left and right limits of the quotient (use $h\to0^-$ and $h\to0^+$) must agree. This is exactly the [[One-Sided Limit]] test from [[Lec_04-Limits and Continuity]].

**See it move.** The derivative is itself a function. Slide along f and watch f′ being drawn underneath.

```graph
type: calc-derivative-graph
fn: parabola
```

## 2. The derivative of $\sqrt{x}$ from the definition

**Printed:** Given $f(x)=\sqrt{x}$. (a) Find its derivative at a general point $x$, meaning find $f'(x)$. (b) Try to deduce the shape of the function's graph from the derivative you found. (c) Does the function have a tangent line at $x=0$? If so, find its equation.

> [!note] Reconstructed from the slides
> **(a)** Substitute into the definition, for $x>0$:
>
> $$
> f'(x)=\lim_{h\to0}\frac{\sqrt{x+h}-\sqrt{x}}{h}
> $$
>
> This is $\tfrac00$ at $h=0$. Multiply top and bottom by the **conjugate** $\sqrt{x+h}+\sqrt{x}$ so the difference of square roots becomes a difference of squares:
>
> $$
> \frac{\sqrt{x+h}-\sqrt{x}}{h}\cdot\frac{\sqrt{x+h}+\sqrt{x}}{\sqrt{x+h}+\sqrt{x}}=\frac{(x+h)-x}{h\left(\sqrt{x+h}+\sqrt{x}\right)}=\frac{1}{\sqrt{x+h}+\sqrt{x}}
> $$
>
> Now let $h\to0$:
>
> $$
> f'(x)=\frac{1}{2\sqrt{x}},\qquad x>0
> $$
>
> **(b)** Read the shape from $f'$:
>
> - $f'(x)>0$ for every $x>0$, so $f$ is **increasing**.
> - $f'(x)=\dfrac{1}{2\sqrt x}$ **decreases** as $x$ grows, so the slope keeps falling: $f$ is **concave** (it bends down, getting flatter).
> - As $x\to0^+$, $f'(x)\to+\infty$: the curve starts out **vertical** at the origin.
> - It is only defined for $x\ge0$ (the domain of the square root).
>
> ![[Lec07_sqrt_x.png]]
>
> **(c)** Try the definition at $x=0$. Only $h>0$ is allowed (the domain is $x\ge0$):
>
> $$
> \lim_{h\to0^+}\frac{\sqrt{0+h}-\sqrt0}{h}=\lim_{h\to0^+}\frac{\sqrt h}{h}=\lim_{h\to0^+}\frac{1}{\sqrt h}=+\infty
> $$
>
> The slope is infinite, so the limit does not exist as a number: **$f$ is not differentiable at $0$**. Geometrically the graph does leave the origin straight up, so the line $x=0$ (the $y$-axis) is a **vertical tangent**. Whether the course counts a vertical line as "a tangent line" is a convention: see section 5, where the same question recurs. A non-vertical tangent of the form $y=mx+b$ does not exist.

> [!warning] Convention to check
> The worksheet asks "does the function have a tangent line... if so find its equation". For infinite slope there are two readings: (1) tangent line exists only if $f'$ is a finite number, so **no tangent**; (2) the graph has a **vertical tangent** $x=0$. I have written both. Check which one your lecturer marked as the answer.

**See it move.** The same secant idea on √x, at x = 4.

```graph
type: calc-tangent-slope
fn: sqrt
at: 4
```

## 3. Differentiability, tangent lines and the failure cases

Every part of this section follows one routine for a function and a point $x_0$:

> [!note] Reconstructed from the slides
> 1. **Domain:** is the point inside the domain, with room on both sides?
> 2. **Continuity:** does $\lim_{x\to x_0}f(x)=f(x_0)$? If not, **not differentiable** (differentiable implies continuous, so a jump kills it at once).
> 3. **One-sided slopes:** compute the left derivative and the right derivative. If they are the same **finite** number, $f$ is differentiable and that number is $f'(x_0)$. The tangent line is $y-f(x_0)=f'(x_0)(x-x_0)$.
> 4. If both one-sided slopes are $+\infty$ (or both $-\infty$): not differentiable, but there is a **vertical tangent** $x=x_0$.
> 5. If they differ (finite corner, or opposite infinities, a **cusp**): not differentiable and **no tangent line**.

### 3.1 A piecewise function with a jump

**Printed:** Given $f(x)=\begin{cases}x, & x\le1\\ x+1, & x>1\end{cases}$. (a) Is the function differentiable at $x=1$? (b) Is there a tangent line to the graph of the function at $x=1$?

> [!note] Reconstructed from the slides
> **(a)** Check continuity first. $f(1)=1$ and the left limit is $\lim_{x\to1^-}x=1$, but the right limit is $\lim_{x\to1^+}(x+1)=2$. The one-sided limits differ, so $f$ is **not continuous** at $1$ (a jump of size $1$). A function that is not continuous cannot be differentiable there: **not differentiable at $x=1$**.
>
> **(b)** **No tangent line.** The two pieces are both lines of slope $1$, but they sit at different heights at $x=1$, so no single line touches the graph there.
>
> The graph is shown in the top left of the figure in section 3.3.

### 3.2 A piecewise function with a corner

**Printed:** Given $f(x)=\begin{cases}4-x^2, & x\le2\\ (x-2)^2, & x>2\end{cases}$. (a) Is the function differentiable at $x=2$? (b) Is there a tangent line to the graph at $x=2$?

> [!note] Reconstructed from the slides
> **(a)** Continuity: $f(2)=4-4=0$, left limit $4-4=0$, right limit $(2-2)^2=0$. So $f$ is continuous at $2$. Now compare the one-sided slopes. Differentiate each piece and substitute $x=2$:
>
> - left: $\dfrac{d}{dx}(4-x^2)=-2x$, which is $-4$ at $x=2$
> - right: $\dfrac{d}{dx}(x-2)^2=2(x-2)$, which is $0$ at $x=2$
>
> The slopes $-4$ and $0$ differ: the graph has a **corner**. **Not differentiable at $x=2$.**
>
> **(b)** **No tangent line**, because the left and right directions disagree (the falling arc arrives with slope $-4$, the right arc leaves flat).
>
> (Differentiating each piece and plugging in is valid here because both pieces are continuous with the same value at $x=2$. In general the safest route is the limit definition from each side.)

### 3.3 Roots: vertical tangent versus cusp

**Printed:** Two small blocks, each asking (a) find the domain, (b) is the function differentiable at $x=0$, (c) is there a tangent line to the graph at $x=0$:

- Given $f(x)=\sqrt[5]{x}$
- Given $g(x)=\sqrt[3]{x^2}$

> [!note] Reconstructed from the slides
> **$f(x)=\sqrt[5]{x}=x^{1/5}$**
>
> **(a)** An odd root accepts negative inputs, so the domain is **all real numbers**.
>
> **(b)** For $x\ne0$ the [[Power Rule]] gives $f'(x)=\tfrac15x^{-4/5}$, which blows up as $x\to0$. From the definition at $0$:
>
> $$
> \lim_{h\to0}\frac{h^{1/5}-0}{h}=\lim_{h\to0}h^{-4/5}=\lim_{h\to0}\frac{1}{h^{4/5}}=+\infty
> $$
>
> The exponent $4/5$ makes $h^{4/5}$ positive on **both** sides, so the slope goes to $+\infty$ from the left and from the right. The limit is not a number: **not differentiable at $0$.**
>
> **(c)** The slope is $+\infty$ on both sides, so the curve passes through the origin going straight up. It has a **vertical tangent**, the line $x=0$ (bottom right of the figure).
>
> **$g(x)=\sqrt[3]{x^2}=x^{2/3}$**
>
> **(a)** Squaring first makes the input non-negative, and a cube root accepts any real number. Domain: **all real numbers**.
>
> **(b)** $g'(x)=\tfrac23x^{-1/3}$ for $x\ne0$. From the definition at $0$:
>
> $$
> \lim_{h\to0}\frac{h^{2/3}}{h}=\lim_{h\to0}h^{-1/3}=\lim_{h\to0}\frac{1}{\sqrt[3]{h}}
> $$
>
> This is $+\infty$ as $h\to0^+$ but $-\infty$ as $h\to0^-$ (the cube root of a negative number is negative). **Not differentiable at $0$.**
>
> **(c)** The two sides head to opposite infinities, so the curve forms a sharp point pointing down, a **cusp**. **No tangent line** at $0$ (bottom left of the figure).
>
> The pair is the point of the exercise: both have infinite slope at $0$, but with the **same** sign it is a vertical tangent, with **opposite** signs it is a cusp.

![[Lec07_failure_shapes.png]]

### 3.4 A product with an absolute value and a root

**Printed:** Given $f(x)=\lvert x-2\rvert\cdot\sqrt[3]{x-2}$. (a) Is it differentiable at $x=2$? (b) Does the function have a tangent line at $x=2$? If so, find its equation.

> [!note] Reconstructed from the slides
> Put $u=x-2$ so the question is about $u=0$. Here $f=\lvert u\rvert\,u^{1/3}$, and $f(2)=0\cdot0=0$. The function is defined for all real $x$ (a cube root is fine for negative inputs). Use the definition at $x=2$:
>
> $$
> f'(2)=\lim_{h\to0}\frac{\lvert h\rvert\,h^{1/3}-0}{h}=\lim_{h\to0}\frac{\lvert h\rvert}{h}\,h^{1/3}
> $$
>
> Since $\dfrac{\lvert h\rvert}{h}=\pm1$ (the sign of $h$) and $h^{1/3}$ has the same sign as $h$, the product is $\lvert h\rvert^{1/3}\ge0$ on both sides:
>
> $$
> \lim_{h\to0}\lvert h\rvert^{1/3}=0
> $$
>
> **(a)** The limit exists and is $0$, so **$f$ is differentiable at $x=2$ with $f'(2)=0$.** (Contrast with $\lvert x\rvert$ alone, which has a corner: the extra factor $\sqrt[3]{x-2}$, which goes to $0$, smooths the corner out.)
>
> **(b)** Yes, a tangent line exists. With slope $0$ through $(2,\,0)$:
>
> $$
> y=0
> $$
>
> Cross-check: for $u>0$, $f=u^{4/3}$ with slope $\tfrac43u^{1/3}\to0$; for $u<0$, $f=-u^{4/3}$ with slope $-\tfrac43\,u^{1/3}=\tfrac43\lvert u\rvert^{1/3}\to0$. Both one-sided slopes are $0$.

### 3.5 A piecewise function with a jump (and its derivative)

**Printed:** Given $f(x)=\begin{cases}x^2, & x<2\\ x^2+1, & x\ge2\end{cases}$. (a) Is it differentiable at $x=2$? (b) Find its derivative $f'(x)$.

> [!note] Reconstructed from the slides
> **(a)** Continuity at $2$: left limit $\lim_{x\to2^-}x^2=4$, but $f(2)=2^2+1=5$ and the right limit is $5$. The one-sided limits differ, so $f$ has a jump at $2$ and is **not differentiable at $x=2$**.
>
> **(b)** Away from $x=2$ each piece is a simple polynomial:
>
> $$
> f'(x)=\begin{cases}2x, & x<2\\ 2x, & x>2\end{cases}
> $$
>
> Both pieces have the same derivative, but the point $x=2$ itself is excluded because $f$ is not differentiable there. State it as: $f'(x)=2x$ for all $x\ne2$, and $f'(2)$ does not exist.

> [!tip] Exam habit
> Whenever a piecewise function is "glued" at a point, check **continuity first**. A jump settles the answer in one line, and it is the usual trap when the two pieces have matching derivatives.

**See it move.** Compare left and right slopes for each way differentiability can fail.

```graph
type: calc-differentiability
shape: corner
```

## 4. Rules for differentiation

**Printed:** the list of rules (with a lecturer's blank space beside each for examples).

| Name | Rule |
| --- | --- |
| [[Constant Rule]] | $f(x)=c\ \Rightarrow\ f'(x)=0$ |
| [[Power Rule]] | $f(x)=x^{a}\ \Rightarrow\ f'(x)=a\,x^{a-1}$ |
| Sum and difference | $\left[f(x)\pm g(x)\right]'=f'(x)\pm g'(x)$ |
| [[Constant Multiple Rule]] | $\left[c\cdot f(x)\right]'=c\cdot f'(x)$ |
| [[Product Rule]] | $\left[f(x)\cdot g(x)\right]'=f'(x)\,g(x)+f(x)\,g'(x)$ |
| [[Quotient Rule]] | $\left[\dfrac{f(x)}{g(x)}\right]'=\dfrac{f'(x)\,g(x)-f(x)\,g'(x)}{g(x)^2}$ |

> [!note] Reconstructed from the slides
> The Power Rule holds for **any** real exponent $a$, including fractions and negatives. So first rewrite roots and reciprocal powers as powers of $x$:
> $\sqrt[n]{x^m}=x^{m/n}$ and $\dfrac1{x^k}=x^{-k}$. This is why section 3 used $x^{1/5}$ and $x^{2/3}$. Check against section 2: $\left(x^{1/2}\right)'=\tfrac12x^{-1/2}=\dfrac1{2\sqrt x}$, matching the answer from the definition.

### Printed practice problems

Each is printed with the blank space for the lecturer's answer. All are solved here.

**1. $\left(\sqrt{x^3}\right)'$**

> [!note] Reconstructed from the slides
> Rewrite: $\sqrt{x^3}=x^{3/2}$. Power Rule:
>
> $$
> \left(x^{3/2}\right)'=\tfrac32x^{1/2}=\tfrac32\sqrt{x}
> $$

**2. $\left(\dfrac{1+x}{x}\right)'$**

> [!note] Reconstructed from the slides
> **Method A (split the fraction):** $\dfrac{1+x}{x}=x^{-1}+1$, so the derivative is $-x^{-2}=-\dfrac1{x^2}$.
>
> **Method B ([[Quotient Rule]]):** with $f=1+x$ and $g=x$:
>
> $$
> \frac{1\cdot x-(1+x)\cdot1}{x^2}=\frac{-1}{x^2}
> $$
>
> Both give $-\dfrac1{x^2}$ (for $x\ne0$).

**3. $\left[\sqrt{3x}+(2x)^3\right]'$**

> [!note] Reconstructed from the slides
> I read the printed expression as $\sqrt{3x}+(2x)^3$ (square root over both $3$ and $x$). If the root covers only the $3$, the first term is the constant $\sqrt3\,x$ and its derivative is $\sqrt3$; check the printed bar on your copy.
>
> - $\sqrt{3x}=\sqrt3\,x^{1/2}$, derivative $\sqrt3\cdot\tfrac12x^{-1/2}=\dfrac{\sqrt3}{2\sqrt x}$
> - $(2x)^3=8x^3$, derivative $24x^2$
>
> Sum rule:
>
> $$
> \left[\sqrt{3x}+(2x)^3\right]'=\frac{\sqrt3}{2\sqrt x}+24x^2
> $$
>
> Do not differentiate $(2x)^3$ as $3(2x)^2$ alone: that forgets the factor $2$ from the inside (the [[Chain Rule]] is not in this lesson, so expand to $8x^3$ first).

**4. $\left(\dfrac{x^3}{7}\right)'$**

> [!note] Reconstructed from the slides
> $\dfrac{x^3}{7}=\tfrac17x^3$. Constant Multiple and Power Rule:
>
> $$
> \left(\tfrac17x^3\right)'=\tfrac37x^2
> $$

**5. $f(x)=(2x-9)(x^2+6)$**

> [!note] Reconstructed from the slides
> The printed task shows the function; the question is its derivative. [[Product Rule]] with $u=2x-9$ and $v=x^2+6$:
>
> $$
> f'(x)=u'v+uv'=2(x^2+6)+(2x-9)(2x)=2x^2+12+4x^2-18x=6x^2-18x+12
> $$
>
> Check by expanding first: $f(x)=2x^3-9x^2+12x-54$, so $f'(x)=6x^2-18x+12$. Same.

**6. $\left(\dfrac{3}{x^7}\right)'$**

> [!note] Reconstructed from the slides
> $\dfrac3{x^7}=3x^{-7}$, so
>
> $$
> \left(3x^{-7}\right)'=-21x^{-8}=-\frac{21}{x^8}
> $$

## Summary

- The [[Derivative]] is $\lim_{h\to0}\dfrac{f(x+h)-f(x)}{h}$, the slope of the [[Tangent Line]]. It must exist as a **finite** number from both sides.
- Test order at a point: domain, continuity, left and right slopes.
- **Jump** (discontinuity): never differentiable, no tangent. **Corner** (different finite one-sided slopes): not differentiable, no tangent. **Cusp** (opposite infinite slopes): not differentiable, no tangent. **Vertical tangent** (same-sign infinite slopes): not differentiable, but the graph has the line $x=x_0$ as a tangent.
- The Power Rule works for fractional and negative exponents once roots and reciprocals are rewritten as powers.
