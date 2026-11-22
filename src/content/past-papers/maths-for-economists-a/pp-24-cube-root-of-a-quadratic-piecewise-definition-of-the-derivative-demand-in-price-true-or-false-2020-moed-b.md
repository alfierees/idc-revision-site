---
title: "Cube Root of a Quadratic, Piecewise Definition of the Derivative, Demand in Price & True or False (2020 Moed B)"
type: past-paper
status: worked-solution
exam: "Math I for Economics Final Exam, 2020 Moed B"
semester: 1
year: 1
course: "Maths for Economists A"
instructor: Hever Schulberg
tags:
  - maths-for-economists-a
  - past-paper
  - worked-solution
  - function-investigation
  - vertical-tangent
  - inflection-points
  - absolute-value
  - function-transformations
  - piecewise-functions
  - definition-of-derivative
  - continuity
  - chain-rule
  - inverse-demand
  - marginal-revenue
  - vertical-asymptote
  - true-or-false
aliases:
  - Math I 2020 Moed B
  - PP24 Maths for Economists A
subject: maths-for-economists-a
in_scope: true
---

# Cube Root of a Quadratic, Piecewise Definition of the Derivative, Demand in Price & True or False (2020 Moed B)

> Part of: [[Maths for Economists A]]
> **Math I for Economics Final Exam, 2020 (Moed B)**, Hever Schulberg. 4 questions (35, 25, 20, 20 points). Q4 says there is no connection between its segments.
> Builds on: [[Lec_03-Composition, Transformations, Exponentials and Limits]], [[Lec_04-Limits and Continuity]], [[Lec_05-Infinite Limits]], [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_08-Chain Rule, Exponential Derivatives and Integrals]], [[Lec_09-Marginal Functions and Tangent Lines of Composites]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[Lec_11-Concavity, Inflection Points and Asymptotes]], [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]]
> Practice: [[PS_07-Derivative Definition, Differentiability and Differentiation Rules]], [[PS_09-Piecewise Differentiability, Marginal Functions & Inequalities]], [[PS_10-Increase and Decrease Intervals, Extrema & Marginal Analysis]], [[PS_11-Concavity, Inflection Points & Asymptotes]], [[PS_12-Function Investigation, Asymptotes & Reading the Derivative Graph]]

> [!info] Source
> The exam is on pages 2 to 3 of the source PDF (page 1 is the cover). The **handwritten, unsigned key (author unclear)** is on pages 4 to 7 and covers every part, including the **true/false item Q4c**. Answers follow the key, expanded into steps. The key's Q4c example is "from one of our homework exercises".

> [!warning] Points where the key needs a check
> - **Q3c and Q3e (domain):** the key's interpretations say "the price changes from $\$8$ to $\$9$". The domain from Q3b is $0\le p\le8.5$, so $p=9$ is **outside** it. The derivatives are right; read the interpretation as a **rate** of about $-2$ units (or $-\$14$) per extra dollar around $p=8$, not as an actual move to $\$9$.
> - **Q1a2:** the key writes the $y$-intercept as $(0,-1.91)$; exactly $\sqrt[3]{-7}\approx-1.913$.
> - **Q1a7:** the key does not write the inflection points' $y$-values; they are $0$ (at $x=-1$ and $x=7$), computed here.
> - **Q2d:** the key shows only the two one-sided limits ($e$ and $0$). Since $f(0)=0$, the function does agree with the **left** limit but not the right one.
> - No part is AI-solved.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | Full investigation of $\sqrt[3]{x^2-6x-7}$ (**vertical tangents** and **inflections** at the zeros, one minimum); Dan's vertical-tangent claim; extremes of $y=\lvert f(x+1)\rvert$ | [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[Lec_11-Concavity, Inflection Points and Asymptotes]], [[Lec_03-Composition, Transformations, Exponentials and Limits]] |
| Q2 | Piecewise function with $\frac{x^3-x^2}{\lvert x\rvert}$ and an Euler limit $(x+1)^{1/x}$: domain, simplify, derivative from the definition, continuity at $0$, chain rule at a point | [[Lec_04-Limits and Continuity]], [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_08-Chain Rule, Exponential Derivatives and Integrals]] |
| Q3 | Demand $x(p)=\sqrt{68-8p}$: domain, $x'(8)$, revenue $R(p)$, $R'(8)$ and meaning | [[Lec_09-Marginal Functions and Tangent Lines of Composites]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]] |
| Q4 | $\lim_{x\to-\infty}(1-x)^x$, no vertical asymptote of $e^{-1/x^2}$, and a **true/false** on a vertical asymptote with a finite one-sided limit | [[Lec_05-Infinite Limits]], [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]], [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]] |

> [!tip] Intuition: the one move behind each question
> - Q1: the zeros of $x^2-6x-7$ are the points where the cube root crosses the axis **vertically** (infinite slope), which is where it also changes concavity. For $\left|f(x+1)\right|$: shift left $1$, then flip only the part below the axis.
> - Q2: for $x<0$, $|x|=-x$, so the quotient simplifies to a parabola; the two sides at $0$ tend to different values.
> - Q3: write demand as a function of **price**, and then "marginal" means per extra dollar of price.
> - Q4: "vertical asymptote" needs just **one** infinite one-sided limit; the other side may be finite.

---

## Q1 — Investigating $f(x)=\sqrt[3]{x^2-6x-7}$ (35 points)

**Question.** Given $f(x)=\sqrt[3]{x^2-6x-7}=(x^2-6x-7)^{1/3}$.

a. Investigate the function by the following criteria:
  1. Domain.
  2. Axes intercept points (if any).
  3. Asymptotes (if any) using the appropriate limits.
  4. Show that $f'(x)=\dfrac{2x-6}{3\,(x^2-6x-7)^{2/3}}$.
  5. Find relative extreme points (if any) and increase and decrease intervals.
  6. Show that $f''(x)=\dfrac{-2x^2+12x-114}{9\,(x^2-6x-7)^{5/3}}$.
  7. Find inflection points (if any) and concavity intervals.
  8. Draw the graph.

b. Dan claims the function has a vertical tangent line at $x=-1$. Is Dan right? Explain.
c. Find relative extreme points of $y=\left|f(x+1)\right|$.

### a1. Domain

> [!success] Answer (the key)
> **All $x$** (a cube root accepts any real number).

### a2. Intercepts

$f(0)=\sqrt[3]{-7}\approx-1.91$. For $f(x)=0$: $x^2-6x-7=(x-7)(x+1)=0$.

> [!success] Answer (the key)
> $y$-intercept $(0,\,-1.91)$; $x$-intercepts $(7,\,0)$ and $(-1,\,0)$.

### a3. Asymptotes

> [!success] Answer (the key)
> **No vertical asymptote** ($f$ is continuous for all $x$). At $\pm\infty$:
>
> $$
> \lim_{x\to\infty}\sqrt[3]{x^2\left(1-\tfrac6x-\tfrac7{x^2}\right)}=\sqrt[3]{\infty}=\infty,\qquad \lim_{x\to-\infty}\sqrt[3]{x^2-6x-7}=\sqrt[3]{\infty+\infty-7}=\infty
> $$
> so **no horizontal asymptote**.

### a4 and a5. First derivative, extremes, monotonicity

Chain rule: $f'(x)=\tfrac13(x^2-6x-7)^{-2/3}\cdot(2x-6)=\dfrac{2x-6}{3(x^2-6x-7)^{2/3}}$, the stated $f'$.

- $f'(x)=0$ when $2x-6=0$, so $x=3$.
- $f'(x)$ is **undefined** at $x=7$ and $x=-1$ (where $x^2-6x-7=0$).

The denominator $3(x^2-6x-7)^{2/3}=3\left(\sqrt[3]{x^2-6x-7}\right)^2$ is **positive** (a square) except at those two points, so the sign of $f'$ is the sign of $2x-6$:

| Interval | $f'$ | $f$ |
|---|---|---|
| $x<3$ (including through $-1$) | $-$ | decreasing |
| $x>3$ (including through $7$) | $+$ | increasing |

> [!success] Answer (the key)
> One relative **minimum** at $x=3$: $f(3)=\sqrt[3]{9-18-7}=\sqrt[3]{-16}\approx-2.52$, the point $(3,\,-2.52)$. **Decreasing** for $x<3$, **increasing** for $x>3$. (The points $x=-1$ and $x=7$ are not extremes: the sign of $f'$ does not change there.)

### a6. Second derivative

Write $u=x^2-6x-7$, so $f'=\tfrac13(2x-6)\,u^{-2/3}$ and $u'=2x-6$:

$$
f''(x)=\frac13\left[2u^{-2/3}-\frac23(2x-6)^2u^{-5/3}\right]=\frac{6u-2(2x-6)^2}{9\,u^{5/3}}
$$

Expand the numerator: $6x^2-36x-42-2\left(4x^2-24x+36\right)=6x^2-36x-42-8x^2+48x-72=-2x^2+12x-114$. This is the stated $f''$.

### a7. Inflection points and concavity

The numerator $-2x^2+12x-114$ has discriminant $12^2-4(-2)(-114)=144-912<0$, so it is **never zero and always negative**. Hence $f''(x)=0$ has no solution. But $f''$ is **undefined** at $x=-1$ and $x=7$ (where $u=0$). Because the numerator is always negative, the sign of $f''$ is the **opposite** of the sign of $u^{5/3}$, i.e. opposite to the sign of $u=x^2-6x-7$:

| Interval | $u$ | $f''$ | $f$ |
|---|---|---|---|
| $x<-1$ | $+$ | $-$ | concave down |
| $-1<x<7$ | $-$ | $+$ | concave up |
| $x>7$ | $+$ | $-$ | concave down |

> [!success] Answer (the key)
> $f''=0$: **none**. $f''$ undefined at $x=-1$ and $x=7$, where the concavity changes: **inflection points** at $x=-1$ and $x=7$ (the points $(-1,0)$ and $(7,0)$).

### a8. The graph

![[PP24_q1_cube_root_quadratic_and_abs_shift.png]]

> [!success] Answer (the key)
> The top panel is the key's sketch: the curve comes down vertically through $(-1,0)$, flattens to a minimum at $(3,-2.52)$, then rises vertically through $(7,0)$. (The bottom panel is part c.)

### b. Dan's claim: a vertical tangent at $x=-1$

$$
\lim_{x\to-1}f'(x)=\lim_{x\to-1}\frac{2x-6}{3(x^2-6x-7)^{2/3}}=\frac{-8}{0^+}=-\infty
$$

The numerator tends to $-8$, and the denominator tends to $0$ from above (a square-like power, so positive from both sides). The slope is infinite on both sides.

> [!success] Answer (the key)
> **Dan is right**: $f'(x)\to-\infty$ as $x\to-1$, so there is a **vertical tangent line at $x=-1$** (the line $x=-1$).

### c. Extremes of $y=\left|f(x+1)\right|$

Two steps, read from the key's pictures:

1. $f(x+1)$ is a **horizontal shift of $1$ unit to the left**: the zeros move from $-1,7$ to $-2,6$ and the minimum moves from $x=3$ to $x=2$ (height $-2.52$).
2. The absolute value **reflects only the negative part** (between $-2$ and $6$) above the axis. The minimum becomes a **maximum** at $x=2$ (height $2.52$), and the zeros $x=-2$ and $x=6$ (where the curve touches the axis) become minima.

> [!success] Answer (the key)
> $x_{\min}=-2$ and $x=6$ (points $(-2,0)$ and $(6,0)$); $x_{\max}=2$ (point $(2,\,2.52)$).

---

## Q2 — A piecewise function (25 points)

**Question.**

$$
f(x)=\begin{cases}\dfrac{x^3-x^2}{|x|} & x<0\\[8pt] 0 & x=0\\[4pt] (x+1)^{1/x} & x>0\end{cases}
$$

a. Find the function's domain. Explain.
b. Show that for $x<0$, $f(x)=-x^2+x$.
c. For $x<0$, use the definition of the derivative to find $f'(x)$.
d. Is the function continuous at $x=0$?
e. Find the derivative of $y=f(-3x+2)$ at $x=1$.

### a. Domain

> [!success] Answer (the key)
> **All $x$.** For $x<0$ the denominator $|x|$ is not zero; for $x>0$ the base $x+1$ is positive; and $f$ is defined at $x=0$ (it equals $0$).

### b. Simplify for $x<0$

For $x<0$, $|x|=-x$, so

$$
f(x)=\frac{x^3-x^2}{-x}=\frac{x\left(x^2-x\right)}{-x}=-(x^2-x)=-x^2+x
$$

### c. $f'(x)$ for $x<0$ from the definition

$$
f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}=\lim_{h\to0}\frac{-(x+h)^2+(x+h)+x^2-x}{h}
$$

Expand $-(x+h)^2=-x^2-2xh-h^2$:

$$
=\lim_{h\to0}\frac{-x^2-2xh-h^2+x+h+x^2-x}{h}=\lim_{h\to0}\frac{h(-2x-h+1)}{h}=\lim_{h\to0}(-2x-h+1)=-2x+1
$$

> [!success] Answer (the key)
> $f'(x)=-2x+1$ for $x<0$.

### d. Continuity at $x=0$

- Right: $\displaystyle\lim_{x\to0^+}(1+x)^{1/x}=e$ (Euler's limit).
- Left: $\displaystyle\lim_{x\to0^-}(-x^2+x)=0$.

The one-sided limits differ ($e\neq0$), so the limit at $0$ does not exist.

> [!success] Answer (the key)
> **Not continuous** (discontinuous) at $x=0$.

> [!tip] Intuition
> The function value is $f(0)=0$, which matches the left piece but not the right one, so this is a jump. For continuity you need value and **both** limits to agree.

### e. Derivative of $y=f(-3x+2)$ at $x=1$

Chain rule: $y'(x)=f'(-3x+2)\cdot(-3)$. At $x=1$ the inner value is $-3+2=-1$, which is $<0$, so use $f'(x)=-2x+1$:

$$
y'(1)=f'(-1)\cdot(-3)=\left(-2(-1)+1\right)\cdot(-3)=3\cdot(-3)=-9
$$

> [!success] Answer (the key)
> $-9$.

---

## Q3 — Demand as a function of price (20 points)

**Question.** The price-demand equation is $8p=68-x^2$, where $p$ is the price per unit (in dollars) and $x$ the demand (in units).

a. Show that the demand as a function of $p$ is $x(p)=\sqrt{68-8p}$.
b. Find the domain of the function from part a.
c. Find $x'(8)$ and explain its financial meaning.
d. Find the revenue as a function of $p$, $R(p)$.
e. Find $R'(8)$ and explain its financial meaning.

### a. Demand in terms of price

$x^2=68-8p$, so $x=\pm\sqrt{68-8p}$. **Demand is never negative**, so the negative root is rejected:

$$
x(p)=\sqrt{68-8p}
$$

### b. Domain

We need $68-8p\ge0$, so $p\le8.5$, and a price cannot be negative.

> [!success] Answer (the key)
> $0\le p\le8.5$.

### c. $x'(8)$

$$
x'(p)=\frac12(68-8p)^{-1/2}\cdot(-8)=\frac{-4}{\sqrt{68-8p}},\qquad x'(8)=\frac{-4}{\sqrt{4}}=-2
$$

> [!success] Answer (the key)
> $x'(8)=-2$: when the price per unit goes up by about **$\$1$** from $\$8$, the demand falls by about **$2$ units**. (The key words it as "from $\$8$ to $\$9$"; see the warning at the top, because $9$ is outside the domain.)

### d. Revenue as a function of $p$

Revenue is price times quantity:

$$
R(p)=p\cdot x(p)=p\sqrt{68-8p}
$$

### e. $R'(8)$

Product rule:

$$
R'(p)=1\cdot\sqrt{68-8p}+p\cdot\frac{-4}{\sqrt{68-8p}}=\frac{(68-8p)-4p}{\sqrt{68-8p}}=\frac{68-12p}{\sqrt{68-8p}}
$$

$$
R'(8)=\frac{68-96}{\sqrt{4}}=\frac{-28}{2}=-14
$$

> [!success] Answer (the key)
> $R'(8)=-14$: when the price rises by about **$\$1$** from $\$8$, **revenue falls by about $\$14$** (key: "from $\$8$ to $\$9$"; same domain caveat).

> [!tip] Intuition
> $R'(p)=0$ at $p=\frac{68}{12}\approx5.67$. Above that price, losing buyers costs more than the higher price earns, so at $p=8$ revenue is already falling in price.

---

## Q4 — Three unconnected items (20 points)

### a. $\displaystyle\lim_{x\to-\infty}(1-x)^x$

The base $1-x\to+\infty$ and the exponent $x\to-\infty$:

$$
(1-x)^x\to(+\infty)^{-\infty}=\frac1{\infty^{\infty}}=0
$$

> [!success] Answer (the key)
> $0$.

### b. Vertical asymptote of $y=e^{-1/x^2}$?

The candidate is $x=0$. Since $\dfrac1{x^2}\to+\infty$ from both sides:

$$
\lim_{x\to0}e^{-1/x^2}=e^{-\infty}=0
$$

> [!success] Answer (the key)
> **No vertical asymptote**: the limit at $x=0$ is the finite number $0$ (from both sides).

### c. True or false: "there exists a non-piecewise function $f(x)$ with a vertical asymptote at $x=4$ and $\displaystyle\lim_{x\to4^-}f(x)=2$"

1. **True** (no justification was required).
2. A vertical asymptote needs only **one** infinite one-sided limit, so the other side may be finite. Using vertical and horizontal translations, the position of the asymptote and the finite limit can be moved to any values. The key uses an example from the homework:

$$
f(x)=e^{\frac1{x-4}}+2:\qquad \lim_{x\to4^+}f(x)=\infty\ \text{(vertical asymptote at }x=4),\qquad \lim_{x\to4^-}f(x)=e^{-\infty}+2=2
$$

> [!success] Answer (the key)
> **True.** Example: $f(x)=e^{\frac1{x-4}}+2$.

---

## Quick reference

> [!summary] Results at a glance
> | Part | Result |
> |---|---|
> | Q1a | Domain all $x$; intercepts $(0,-1.91)$, $(7,0)$, $(-1,0)$; no asymptotes; min $(3,-2.52)$; decreasing $x<3$, increasing $x>3$ |
> | Q1a7 | $f''$ never $0$; inflections at $x=-1$ and $x=7$; concave down, up, down |
> | Q1b-c | Dan is right ($f'\to-\infty$ at $-1$); $\lvert f(x+1)\rvert$: min at $-2$ and $6$, max at $2$ |
> | Q2 | Domain all $x$; $f=-x^2+x$ for $x<0$; $f'=-2x+1$; discontinuous at $0$ ($e$ vs $0$); $y'(1)=-9$ |
> | Q3 | $x=\sqrt{68-8p}$, $0\le p\le8.5$; $x'(8)=-2$; $R'(8)=-14$ |
> | Q4 | $0$; no vertical asymptote; true, e.g. $e^{1/(x-4)}+2$ |
