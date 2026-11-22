---
title: "Piecewise Cube Root, Absolute Value Cubic, Factory Profit & Asymptotes (2019 Moed A)"
type: past-paper
status: worked-solution
exam: "Math I for Economics Final Exam, 2019 Moed A"
semester: 1
year: 1
course: "Maths for Economists A"
instructor: Hever Schulberg
tags:
  - maths-for-economists-a
  - past-paper
  - worked-solution
  - piecewise-functions
  - differentiability
  - vertical-tangent
  - inflection-points
  - chain-rule
  - tangent-line
  - absolute-value
  - function-transformations
  - marginal-revenue
  - profit-maximisation
  - definition-of-derivative
  - asymptotes
aliases:
  - Math I 2019 Moed A
  - PP21 Maths for Economists A
subject: maths-for-economists-a
in_scope: true
---

# Piecewise Cube Root, Absolute Value Cubic, Factory Profit & Asymptotes (2019 Moed A)

> Part of: [[Maths for Economists A]]
> **Math I for Economics Final Exam, 2019 (Moed A)**, Hever Schulberg. 4 questions (30, 25, 25, 20 points), 3 hours, non-graphing calculator and formula sheet allowed.
> Builds on: [[Lec_02-Piecewise Functions and Business Applications]], [[Lec_03-Composition, Transformations, Exponentials and Limits]], [[Lec_04-Limits and Continuity]], [[Lec_05-Infinite Limits]], [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_08-Chain Rule, Exponential Derivatives and Integrals]], [[Lec_09-Marginal Functions and Tangent Lines of Composites]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[Lec_11-Concavity, Inflection Points and Asymptotes]], [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]]
> Practice: [[PS_07-Derivative Definition, Differentiability and Differentiation Rules]], [[PS_09-Piecewise Differentiability, Marginal Functions & Inequalities]], [[PS_10-Increase and Decrease Intervals, Extrema & Marginal Analysis]], [[PS_11-Concavity, Inflection Points & Asymptotes]], [[PS_12-Function Investigation, Asymptotes & Reading the Derivative Graph]]

> [!info] Source
> The exam is on pages 2 to 3 of the source PDF (page 1 is the cover, page 4 the formula sheet). The **handwritten, unsigned key (author unclear)** is on pages 5 to 12 and covers every part. Answers follow the key, expanded into steps. The key notes that **Q1 is from Exercise 11 of the homework** and **all of Q4 is from the homework exercises**.

> [!warning] Points where the key needs a check
> - **Q1d:** the key's table marks $x=0$ as both a relative **minimum** and an **inflection** point. That is consistent with the course definitions (continuous, and $f''$ changes sign), but $f'$ does not exist at $0$ (a corner), so it is an unusual point. Kept as in the key.
> - **Q4b(1), $x\to-\infty$:** the key gives the horizontal asymptote $y=-\sqrt3$ (verified below). The two sides give **different** asymptotes, $y=\sqrt3$ and $y=-\sqrt3$.
> - **Q2b:** the key's last line ("$x_{\min}=0,\ x_{\max}=1,\ x_{\min}=3$") is followed by a stray "meaning" label with nothing after it. Nothing is missing mathematically.
> - No part is AI-solved.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | Piecewise $\sqrt[3]{x-1}$ / $-(x+1)^2$: continuity at the seam, a **vertical tangent** (not a corner), a **corner** at the seam, sign tables for $f'$ and $f''$, then a tangent to a composite $g(x)=f(11x-2\sqrt x)$ | [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[Lec_11-Concavity, Inflection Points and Asymptotes]], [[Lec_09-Marginal Functions and Tangent Lines of Composites]] |
| Q2 | $f=\left|(x-3)^2x\right|$: reflect the negative part; extremes of $f(x)$, $f(x+2)$, $f(-x)$; a one-sided limit with an absolute value | [[Lec_03-Composition, Transformations, Exponentials and Limits]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[Lec_04-Limits and Continuity]] |
| Q3 | Factory: linear demand, revenue, cost, marginal meaning, maximal profit | [[Lec_02-Piecewise Functions and Business Applications]], [[Lec_09-Marginal Functions and Tangent Lines of Composites]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]] |
| Q4 | Derivative from the definition ($\sqrt{x+3}$ at $1$); asymptotes of $\frac{\sqrt{3x^2+1}}{x}$ and $e^{1/(x-4)}+2$ | [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_05-Infinite Limits]], [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]] |

> [!tip] Intuition: the one move behind each question
> - Q1: $\sqrt[3]{x-1}$ has slope $\to\infty$ at $x=1$ (a vertical tangent, the tangent line exists), whereas at the seam $x=0$ the one-sided slopes differ ($\tfrac13$ vs $-2$): a corner.
> - Q2: the absolute value reflects the part below the axis, creating a corner on the axis; shifting or flipping the graph just moves the extreme $x$-values.
> - Q3: profit is maximal where marginal revenue equals marginal cost.
> - Q4: limits at $\pm\infty$ for horizontal asymptotes; limits where the denominator vanishes for vertical ones.

---

## Q1 — A piecewise function (30 points)

**Question.** Given

$$
f(x)=\begin{cases}\sqrt[3]{x-1} & x>0\\[2pt] -(x+1)^2 & x\le0\end{cases}
$$

a. Find the function's interval of continuity. Explain your answer.
b. Is $f(x)$ differentiable at $x=1$? Is there a tangent line at that point? Is $x=1$ a corner point? Explain.
c. Find $f'(x)$ and $f''(x)$.
d. Find all relative extremum and inflection points of $f(x)$.
e. Define $g(x)=f\left(11x-2\sqrt x\right)$ for $x>0$. Use the chain rule and find the equation of the tangent line to the graph of $g(x)$ at $x=1$.

### a. Continuity

Each piece is continuous on its own (a cube root is defined everywhere; a polynomial is continuous), so only the seam $x=0$ needs checking:

1. $f(0)=-(0+1)^2=-1$.
2. Right: $\displaystyle\lim_{x\to0^+}\sqrt[3]{x-1}=\sqrt[3]{-1}=-1$. Left: $\displaystyle\lim_{x\to0^-}-(x+1)^2=-1$.
3. Value and both limits are $-1$.

> [!success] Answer (the key)
> The domain is all $x$ and $f$ is continuous at the seam, so **$f$ is continuous for all $x$**.

### b. Differentiability at $x=1$

For $x>0$: $f'(x)=\tfrac13(x-1)^{-2/3}=\dfrac{1}{3\sqrt[3]{(x-1)^2}}$. As $x\to1$ the denominator tends to $0^+$:

$$
f'(1)=\lim_{x\to1}\frac{1}{3\sqrt[3]{(x-1)^2}}=\frac1{0^+}=\infty
$$

> [!success] Answer (the key)
> **Not differentiable at $x=1$**: there is a **vertical tangent** (so a tangent line does exist, it is the line $x=1$). It is **not a corner**, because both one-sided slopes go to $+\infty$ (they agree), whereas a corner has two different finite slopes.

> [!tip] Intuition
> Differentiable means a finite slope. A vertical tangent has an infinite slope, so $f'(1)$ fails to exist, yet the curve is smooth there (no kink). Compare the cusp versus vertical-tangent picture in [[Lec_10-Increase and Decrease Intervals and Relative Extrema]].

### c. $f'(x)$ and $f''(x)$

$$
f'(x)=\begin{cases}\dfrac{1}{3\sqrt[3]{(x-1)^2}} & x>0,\ x\ne1\\[8pt] -2(x+1) & x<0\end{cases}
\qquad
f''(x)=\begin{cases}-\dfrac{2}{9\sqrt[3]{(x-1)^5}} & x>0,\ x\ne1\\[8pt] -2 & x<0\end{cases}
$$

(For $x>1$ or $0<x<1$: $f''=\tfrac13\cdot\left(-\tfrac23\right)(x-1)^{-5/3}=-\tfrac29(x-1)^{-5/3}$.)

At the seam $x=0$ compare the one-sided slopes:

$$
\lim_{x\to0^+}f'(x)=\frac{1}{3\sqrt[3]{(-1)^2}}=\frac13,\qquad \lim_{x\to0^-}f'(x)=-2(0+1)=-2
$$

> [!success] Answer (the key)
> $f'$ and $f''$ as above. $f'(x)=0$ at $x=-1$. $f'$ is **undefined at $x=0$** (slopes $\tfrac13\ne-2$, so **not differentiable at $0$**, a corner) and at $x=1$ (vertical tangent). $f''$ is never $0$, and is undefined at $x=0,1$.

### d. Relative extrema and inflection points

**Sign of $f'$** (critical numbers $-1$, $0$, $1$):

| Interval | $f'$ | $f$ |
|---|---|---|
| $x<-1$ | $+$ | increasing |
| $-1<x<0$ | $-$ | decreasing |
| $0<x<1$ | $+$ | increasing |
| $x>1$ | $+$ | increasing |

So $f'$ changes $+\to-$ at $x=-1$ (**maximum**) and $-\to+$ at $x=0$ (**minimum**); at $x=1$ the sign does not change, so there is no extreme point.

**Sign of $f''$** (candidates $0$ and $1$, where $f''$ is undefined):

| Interval | $f''$ | $f$ |
|---|---|---|
| $x<0$ | $-$ | concave down |
| $0<x<1$ | $+$ (since $(x-1)^{5/3}<0$) | concave up |
| $x>1$ | $-$ | concave down |

> [!success] Answer (the key)
> - Relative **maximum** at $x=-1$, with $f(-1)=-(0)^2=0$: the point $(-1,\,0)$.
> - Relative **minimum** at $x=0$, with $f(0)=-1$: the point $(0,\,-1)$.
> - **Inflection** points at $x=0$ and $x=1$: the points $(0,\,-1)$ and $(1,\,0)$ (both continuous, $f''$ changes sign).

![[PP21_q1_piecewise_graph.png]]

### e. Tangent line to $g(x)=f\left(11x-2\sqrt x\right)$ at $x=1$

Chain rule, $g'(x)=f'\!\left(11x-2\sqrt x\right)\cdot\left(11-2\cdot\tfrac12x^{-1/2}\right)=f'\!\left(11x-2\sqrt x\right)\cdot\left(11-\dfrac1{\sqrt x}\right)$.

At $x=1$ the inner function is $11-2=9$, so we use the branch $x>0$ of $f$:

$$
g'(1)=f'(9)\cdot(11-1)=\frac{1}{3\sqrt[3]{(9-1)^2}}\cdot10=\frac{1}{3\cdot4}\cdot10=\frac{10}{12}=\frac56
$$

$$
g(1)=f(9)=\sqrt[3]{9-1}=2
$$

Point-slope form: $y-2=\tfrac56(x-1)$.

> [!success] Answer (the key)
>
> $$
> y=\frac56x+\frac76
> $$

---

## Q2 — $f(x)=\left|(x-3)^2\cdot x\right|$ (25 points)

**Question.**

a. Find the function's interval of continuity.
b. Find relative extreme points of the function.
c. Find relative extreme points of $y_1=f(x+2)$.
d. Find relative extreme points of $y_2=f(-x)$.
e. Find $\displaystyle\lim_{x\to0^-}\frac{f(x)}{x}$.

### a. Continuity

> [!success] Answer (the key)
> $f$ is not defined piecewise (it is a composition of continuous functions), so its interval of continuity equals its domain: **all $x$**.

### b. Relative extreme points

An absolute-value graph is obtained by **reflecting the negative part** of the inner function in the $x$-axis. So first study $y=(x-3)^2x$.

- $x$-intercepts: $(x-3)^2x=0\Rightarrow x=3$ or $x=0$.
- Derivative: $y'=2(x-3)x+(x-3)^2=(x-3)(2x+x-3)=(x-3)(3x-3)=3(x-3)(x-1)$, so $y'=0$ at $x=1$ and $x=3$.
- Signs of $y'$: $+$ for $x<1$, $-$ for $1<x<3$, $+$ for $x>3$.

So $y$ has a maximum at $(1,\,4)$ (since $y(1)=(-2)^2\cdot1=4$) and a minimum at $(3,\,0)$. The inner function is negative only for $x<0$ (there $(x-3)^2>0$ and $x<0$); the absolute value flips that branch above the axis, creating a **corner on the axis at $x=0$**, which is a minimum of $f$ (value $0$, and $f\ge0$ everywhere).

![[PP21_q2_abs_cubic_graph.png]]

> [!success] Answer (the key)
> $x_{\min}=0$ (point $(0,0)$), $x_{\max}=1$ (point $(1,4)$), $x_{\min}=3$ (point $(3,0)$).

### c. $y_1=f(x+2)$

> [!success] Answer (the key)
> A **horizontal translation of $2$ units to the left**, so every extreme $x$-value drops by $2$: $x_{\min}=-2$, $x_{\max}=-1$, $x_{\min}=1$.

### d. $y_2=f(-x)$

> [!success] Answer (the key)
> A **reflection about the $y$-axis**, so each $x$-value changes sign and minimum/maximum types are kept: $x_{\min}=-3$, $x_{\max}=-1$, $x_{\min}=0$.

> [!tip] Intuition
> For c and d no new calculus is needed: relabel the extremes of part b. The $y$-values (heights $0$, $4$, $0$) do not change.

### e. $\displaystyle\lim_{x\to0^-}\frac{f(x)}{x}$

When $x\to0^-$ the expression inside the absolute value, $(x-3)^2x$, is **negative**, so $|(x-3)^2x|=-(x-3)^2x$:

$$
\lim_{x\to0^-}\frac{-x(x-3)^2}{x}=\lim_{x\to0^-}-(x-3)^2=-(0-3)^2=-9
$$

> [!success] Answer (the key)
> $-9$.

> [!tip] Intuition
> This is the left-hand slope of $f$ at the corner at $0$ (since $f(0)=0$). The right-hand value would be $+9$, which is why $0$ is a corner.

---

## Q3 — A factory: demand, revenue, cost and profit (25 points)

**Question.** A factory finds that at a price of $\$45$ per unit the daily demand is $200$ units, and at $\$40$ it is $300$ units.

a. Assuming the price-demand equation is linear, find $x(p)$ ($x$ daily demand, $p$ price per unit).
b. Find the daily revenue function $R(x)$, find $R'(30)$ and explain it.
c. Assuming each unit costs $\$25$ to produce, find $C(x)$, find $C'(30)$ and explain it.
d. Find the daily profit function $P(x)$ and the maximal daily profit.

### a. Demand

Slope: $\dfrac{300-200}{40-45}=-20$. Point-slope through $(p,x)=(40,300)$: $x-300=-20(p-40)$.

> [!success] Answer (the key)
> $x(p)=-20p+1100$.

### b. Revenue and marginal revenue

Invert the demand: $p=\dfrac{1100-x}{20}$. Then revenue is price times quantity:

$$
R(x)=x\cdot p=x\cdot\frac{1100-x}{20}=-\frac1{20}x^2+55x,\qquad R'(x)=-\frac1{10}x+55,\qquad R'(30)=-3+55=52
$$

> [!success] Answer (the key)
> $R'(30)=\$52$. At a production level of $30$ units, producing and selling the **$31$st unit** raises revenue by approximately **$\$52$**.

### c. Cost and marginal cost

> [!success] Answer (the key)
> $C(x)=25x$, so $C'(x)=25$ and $C'(30)=\$25$: each unit costs $\$25$ to produce, **including the $31$st unit**.

### d. Profit and its maximum

$$
P(x)=R(x)-C(x)=-\frac1{20}x^2+55x-25x=-\frac1{20}x^2+30x
$$

$$
P'(x)=-\frac1{10}x+30=0\ \Rightarrow\ x=300,\qquad P(300)=-\frac{90000}{20}+9000=4500
$$

The graph of $P$ is a downward parabola ($\cap$), so $x=300$ is a **maximum**.

> [!success] Answer (the key)
> Maximum daily profit **$\$4{,}500$**, at $300$ units per day.

> [!tip] Intuition
> $P'=R'-C'=0$ means marginal revenue equals marginal cost: $-\tfrac1{10}x+55=25$ gives $x=300$. At $x=300$ the price is $p=\dfrac{1100-300}{20}=40$, one of the two given prices.

---

## Q4 — Three unconnected segments (20 points)

The question says there is no connection between the segments. The key notes all segments are from the homework exercises.

### a. Slope of the tangent to $f(x)=\sqrt{x+3}$ at $x=1$, from the definition

$f(1)=\sqrt4=2$. Multiply by the conjugate:

$$
f'(1)=\lim_{h\to0}\frac{f(1+h)-f(1)}{h}=\lim_{h\to0}\frac{\sqrt{4+h}-2}{h}\cdot\frac{\sqrt{4+h}+2}{\sqrt{4+h}+2}=\lim_{h\to0}\frac{(4+h)-4}{h\left(\sqrt{4+h}+2\right)}=\lim_{h\to0}\frac{1}{\sqrt{4+h}+2}=\frac14
$$

> [!success] Answer (the key)
> The slope is $\dfrac14$.

### b. Asymptotes with limits

**(1) $g(x)=\dfrac{\sqrt{3x^2+1}}{x}$.** Take $\sqrt{x^2}=|x|$ out of the root.

$x\to\infty$ ($|x|=x$):

$$
\lim_{x\to\infty}\frac{\sqrt{x^2\left(3+\frac1{x^2}\right)}}{x}=\lim_{x\to\infty}\frac{x\sqrt{3+\frac1{x^2}}}{x}=\sqrt3
$$

$x\to-\infty$ ($|x|=-x$):

$$
\lim_{x\to-\infty}\frac{-x\sqrt{3+\frac1{x^2}}}{x}=-\sqrt3
$$

Vertical candidate $x=0$ (the denominator vanishes; the numerator $\to1$):

$$
\lim_{x\to0^+}g(x)=\frac1{0^+}=\infty,\qquad \lim_{x\to0^-}g(x)=\frac1{0^-}=-\infty
$$

> [!success] Answer (the key)
> Horizontal asymptotes **$y=\sqrt3$** (at $+\infty$) and **$y=-\sqrt3$** (at $-\infty$); vertical asymptote **$x=0$**.

**(2) $h(x)=e^{\frac1{x-4}}+2$.**

Horizontal: $\displaystyle\lim_{x\to\pm\infty}\left(e^{\frac1{x-4}}+2\right)=e^{0}+2=3$.

Vertical candidate $x=4$:

$$
\lim_{x\to4^+}\left(e^{\frac1{0^+}}+2\right)=e^{\infty}+2=\infty,\qquad
\lim_{x\to4^-}\left(e^{\frac1{0^-}}+2\right)=e^{-\infty}+2=0+2=2
$$

One infinite one-sided limit is enough for a vertical asymptote (the formula sheet says "at least one").

> [!success] Answer (the key)
> Horizontal asymptote **$y=3$** (both ends); vertical asymptote **$x=4$**.

---

## Quick reference

> [!summary] Results at a glance
> | Part | Result |
> |---|---|
> | Q1a-b | Continuous for all $x$; $f'(1)=\infty$: vertical tangent, tangent exists, not a corner |
> | Q1c | $f'=\frac{1}{3\sqrt[3]{(x-1)^2}}$ ($x>0$), $-2(x+1)$ ($x<0$); not differentiable at $0$ (slopes $\tfrac13$, $-2$) |
> | Q1d | Max $(-1,0)$; min $(0,-1)$; inflection $(0,-1)$ and $(1,0)$ |
> | Q1e | $y=\tfrac56x+\tfrac76$ |
> | Q2 | Continuous for all $x$; min $0$, max $1$, min $3$; shifted: $-2,-1,1$; reflected: $-3,-1,0$; limit $-9$ |
> | Q3 | $x=-20p+1100$; $R'(30)=52$; $C'(30)=25$; max profit $4500$ at $x=300$ |
> | Q4 | Slope $\tfrac14$; $y=\pm\sqrt3$ and $x=0$; $y=3$ and $x=4$ |
