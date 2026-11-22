---
title: "Rational Square with an Isolated Point, Limits, Marginal Revenue & Cost, Continuity Parameters & Tangent of a Composite (2021 Moed A)"
type: past-paper
status: worked-solution
exam: "Math I for Economics Final Exam, 2021 Moed A"
semester: 1
year: 1
course: "Maths for Economists A"
instructor: Hever Schulberg
tags:
  - maths-for-economists-a
  - past-paper
  - worked-solution
  - function-investigation
  - rational-function
  - asymptotes
  - function-transformations
  - limits
  - euler-limits
  - definition-of-derivative
  - marginal-revenue
  - marginal-cost
  - profit-maximisation
  - integration
  - continuity-parameter
  - chain-rule
  - tangent-line
aliases:
  - Math I 2021 Moed A
  - PP25 Maths for Economists A
subject: maths-for-economists-a
in_scope: true
---

# Rational Square with an Isolated Point, Limits, Marginal Revenue & Cost, Continuity Parameters & Tangent of a Composite (2021 Moed A)

> Part of: [[Maths for Economists A]]
> **Math I for Economics Final Exam, 2021 (Moed A)**, Hever Schulberg. 4 questions (30, 30, 20, 20 points). Q2 says there is no connection between its segments.
> Builds on: [[Lec_03-Composition, Transformations, Exponentials and Limits]], [[Lec_04-Limits and Continuity]], [[Lec_05-Infinite Limits]], [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]], [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_08-Chain Rule, Exponential Derivatives and Integrals]], [[Lec_09-Marginal Functions and Tangent Lines of Composites]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[Lec_11-Concavity, Inflection Points and Asymptotes]], [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]]
> Practice: [[PS_06-Exponential Limits, Euler Limits, Derivative Definition and Logarithms]], [[PS_07-Derivative Definition, Differentiability and Differentiation Rules]], [[PS_08-Chain Rule, Exponential and Log Derivatives and Integrals]], [[PS_09-Piecewise Differentiability, Marginal Functions & Inequalities]], [[PS_10-Increase and Decrease Intervals, Extrema & Marginal Analysis]], [[PS_12-Function Investigation, Asymptotes & Reading the Derivative Graph]]

> [!info] Source
> The exam is on pages 2 to 3 of the source PDF (page 1 is the cover). The **handwritten, unsigned key (author unclear)** is on pages 4 to 10 and covers every part. The key has no "from your HW" notes on this paper.

> [!warning] Points where the key needs a check
> - **Q1a2 (intercepts):** the key lists only the $x$-intercept $(-2,0)$ in writing. The definition $f(0)=2$ makes $(0,\,2)$ a $y$-intercept (an **isolated point** of the graph), which the key's sketch does show as a dot. Added below.
> - **Q1a5:** the key does not write the $y$-value of the inflection point. $f(-3)=\left(1-\tfrac23\right)^2=\tfrac19$ (computed here).
> - **Q2e:** the key stops at "differentiable, so there is a tangent line, no corner". The tangent's equation, $y=2x+1$, is **not** in the key; it is added below and marked as such.
> - **Q3e:** the key's meaning line writes only "$-9333\,\$$". Read it as a **loss** of about $\$9{,}333$ at $x=9$ (the unit is thousands of dollars, so $-9\tfrac13$ thousand).
> - **Q4b:** the key reads the boxed answers as $a=-\tfrac5{24}$ and $b=-\tfrac58$ (the key's handwritten "$a=-\tfrac{5}{24}$" is consistent with $3a=-\tfrac58$, which is checked below).
> - No part is AI-solved.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | Investigation of $\left(1+\tfrac2x\right)^2$ with the isolated point $f(0)=2$ (a **vertical asymptote** though $f(0)$ is defined, so $f$ is discontinuous at $0$), then $y=-\left(1-\tfrac2x\right)^2=-f(-x)$ by reflections | [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]], [[Lec_11-Concavity, Inflection Points and Asymptotes]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[Lec_03-Composition, Transformations, Exponentials and Limits]] |
| Q2 | Five unconnected items: $4^x(1/4)^x$, a limit with $\lvert x-3\rvert-2$, an Euler-type limit, asymptotes of $\frac{x-1}{\sqrt x}$, differentiability at a seam from the definition | [[Lec_04-Limits and Continuity]], [[Lec_05-Infinite Limits]], [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]], [[Lec_07-The Derivative, Differentiability and Rules]] |
| Q3 | Marginal revenue $5\sqrt x$ and marginal cost $2x+2$: meaning of $R'(9)$, $C'(6)$, the profit maximum, where $C'>R'$, and recovering profit by integrating | [[Lec_09-Marginal Functions and Tangent Lines of Composites]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[Lec_08-Chain Rule, Exponential Derivatives and Integrals]] |
| Q4 | Piecewise function with a $\sqrt{\ }-\sqrt{\ }$ quotient: domain, parameters $a,b$ for continuity (conjugate), tangent line to $g(x)=f(x^3)$ at $3$ | [[Lec_04-Limits and Continuity]], [[Lec_08-Chain Rule, Exponential Derivatives and Integrals]], [[Lec_09-Marginal Functions and Tangent Lines of Composites]] |

> [!tip] Intuition: the one move behind each question
> - Q1: $\left(1+\tfrac2x\right)^2$ is $\left(\tfrac{x+2}{x}\right)^2$: it is $\ge0$, touches $0$ at $x=-2$, blows up at $x=0$ and flattens to $1$ at both ends. The second graph is just $f$ reflected in both axes.
> - Q2: look at which side of the absolute value or square-root domain you are on, then simplify.
> - Q3: profit rises while marginal revenue beats marginal cost and falls after; profit itself comes from integrating $P'=R'-C'$ and using one known value to fix the constant.
> - Q4: for a $\sqrt{\ }-\sqrt{\ }$ over a vanishing denominator, multiply by the conjugate.

---

## Q1 — Investigating $f(x)=\left(1+\dfrac2x\right)^2$, $f(0)=2$ (30 points)

**Question.**

$$
f(x)=\begin{cases}\left(1+\dfrac2x\right)^2 & x\neq0\\[8pt] 2 & x=0\end{cases}
$$

a. Investigate the function by the following criteria:
  1. Domain.
  2. Axes intercept points (if any).
  3. Asymptotes (if any) using the appropriate limits.
  4. Find relative extreme points (if any) and increase/decrease intervals.
  5. Find inflection points (if any) and concavity intervals.
  6. Draw the graph.

b. Use part a and draw the graph of $y=-\left(1-\dfrac2x\right)^2$. Explain your considerations.

### a1. Domain

> [!success] Answer (the key)
> **All $x$** ($f(0)=2$ is defined by the second line).

### a2. Intercepts

$x$-intercept: $\left(1+\tfrac2x\right)^2=0\Rightarrow\tfrac2x=-1\Rightarrow x=-2$. The $y$-intercept comes from the isolated value $f(0)=2$.

> [!success] Answer (the key)
> $x$-intercept $(-2,\,0)$. (The key's sketch also marks the point $(0,\,2)$, the $y$-intercept given by $f(0)=2$.)

### a3. Asymptotes

- Horizontal: $\displaystyle\lim_{x\to\pm\infty}\left(1+\frac2x\right)^2=(1+0)^2=1$.
- Vertical: $\displaystyle\lim_{x\to0^\pm}\left(1+\frac2x\right)^2=\left(1\pm\infty\right)^2=\infty$.

> [!success] Answer (the key)
> Horizontal asymptote **$y=1$** (both ends); vertical asymptote **$x=0$**. The key adds: this means $f$ is **discontinuous at $x=0$**, even though $f(0)=2$ is defined (the limit is $\infty$, not $2$).

### a4. First derivative, extremes

$$
f'(x)=2\left(1+\frac2x\right)\cdot\left(-\frac2{x^2}\right)=-\frac{4}{x^2}\cdot\frac{x+2}{x}=\frac{-4(x+2)}{x^3}
$$

- $f'(x)=0$ at $x=-2$.
- $f'(x)$ is undefined at $x=0$.

| Interval | Numerator $-4(x+2)$ | Denominator $x^3$ | $f'$ | $f$ |
|---|---|---|---|---|
| $x<-2$ | $+$ | $-$ | $-$ | decreasing |
| $-2<x<0$ | $-$ | $-$ | $+$ | increasing |
| $x>0$ | $-$ | $+$ | $-$ | decreasing |

> [!success] Answer (the key)
> **Decreasing** for $x<-2$ and $x>0$; **increasing** for $-2<x<0$. Relative **minimum** at $x=-2$: the point $(-2,\,0)$.

### a5. Second derivative, inflection

Quotient rule on $\dfrac{-4x-8}{x^3}$:

$$
f''(x)=\frac{-4\cdot x^3-(-4x-8)\cdot3x^2}{x^6}=\frac{-4x^3+12x^3+24x^2}{x^6}=\frac{8x^3+24x^2}{x^6}=\frac{8(x+3)}{x^4}
$$

- $f''(x)=0$ at $x=-3$; undefined at $x=0$.
- The denominator $x^4$ is positive, so the sign of $f''$ is the sign of $x+3$.

| Interval | $f''$ | $f$ |
|---|---|---|
| $x<-3$ | $-$ | concave down |
| $-3<x<0$ | $+$ | concave up |
| $x>0$ | $+$ | concave up |

> [!success] Answer (the key)
> Concave **down** for $x<-3$; concave **up** for $x>-3$, $x\neq0$. **Inflection point** at $x=-3$ (the point $\left(-3,\,\tfrac19\right)$; the $y$-value is computed here, not in the key). At $x=0$ the function is not continuous, so it is not an inflection point.

### a6. The graph

![[PP25_q1_rational_square_and_reflection.png]]

> [!success] Answer (the key)
> The top panel is the key's first sketch: the horizontal asymptote $y=1$ at both ends (approached from **below** on the left, from **above** on the right), a minimum touching the axis at $(-2,0)$, climbing to $+\infty$ on both sides of the vertical asymptote $x=0$, plus the isolated point $(0,2)$.

### b. The graph of $y=-\left(1-\dfrac2x\right)^2$

Replace $x$ by $-x$ in $f$: $f(-x)=\left(1+\tfrac2{-x}\right)^2=\left(1-\tfrac2x\right)^2$. So

$$
y=-\left(1-\frac2x\right)^2=-f(-x)
$$

> [!success] Answer (the key)
> A **reflection about the $y$-axis** ($x\to-x$) **and about the $x$-axis** (the minus sign in front), **without the point $(0,2)$**, because this new formula is not defined at $x=0$.

What each feature of $f$ becomes (these follow from the transformation):

| Feature of $f$ | Feature of $y=-f(-x)$ |
|---|---|
| Minimum $(-2,0)$ | **Maximum $(2,\,0)$** |
| Inflection $\left(-3,\tfrac19\right)$ | Inflection $\left(3,\,-\tfrac19\right)$ |
| Horizontal asymptote $y=1$ | Horizontal asymptote $y=-1$ |
| Vertical asymptote $x=0$, $y\to+\infty$ | Vertical asymptote $x=0$, $y\to-\infty$ |

The bottom panel of the figure shows it.

---

## Q2 — Five unconnected items (30 points)

### a. $\displaystyle\lim_{x\to\infty}4^x\cdot\left(\frac14\right)^x$

Combine the powers: $4^x\left(\tfrac14\right)^x=\left(4\cdot\tfrac14\right)^x=1^x=1$ for every $x$.

> [!success] Answer (the key)
> $1$.

### b. $\displaystyle\lim_{x\to5}\frac{x-5}{|x-3|-2}$

Near $x=5$ the inside $x-3>0$, so $|x-3|=x-3$ and the denominator is $x-3-2=x-5$:

$$
\lim_{x\to5}\frac{x-5}{x-5}=1
$$

> [!success] Answer (the key)
> $1$.

### c. $\displaystyle\lim_{x\to\infty}\left(2+\frac{x+3}{1-x}\right)^x$

Combine into one fraction: $2+\dfrac{x+3}{1-x}=\dfrac{2-2x+x+3}{1-x}=\dfrac{5-x}{1-x}=1+\dfrac4{1-x}$. Now use Euler's form with $f(x)=\dfrac4{1-x}\to0$:

$$
\left(1+\frac4{1-x}\right)^x=\left[\left(1+\frac4{1-x}\right)^{\frac{1-x}4}\right]^{\frac{4x}{1-x}}\;\longrightarrow\;e^{\lim\frac{4x}{1-x}}=e^{-4}
$$

since $\dfrac{4x}{1-x}\to\dfrac{4}{-1}=-4$ as $x\to\infty$.

> [!success] Answer (the key)
> $e^{-4}$.

### d. Asymptotes of $f(x)=\dfrac{x-1}{\sqrt x}$

Domain: $x>0$.

- Vertical candidate $x=0$: $\displaystyle\lim_{x\to0^+}\frac{x-1}{\sqrt x}=\frac{-1}{0^+}=-\infty$, so **$x=0$ is a vertical asymptote**.
- At $\infty$: $\dfrac{x-1}{\sqrt x}=\sqrt x-\dfrac1{\sqrt x}\to\infty-0=\infty$.

> [!success] Answer (the key)
> Vertical asymptote **$x=0$**; **no horizontal asymptote**.

### e. $f(x)=\begin{cases}x^2+2 & x>1\\ 4x-x^2 & x\le1\end{cases}$ at $x=1$

The key first checks continuity (not mandatory, but needed for the derivative to exist): $f(1)=4-1=3$, the right limit is $1+2=3$, the left limit is $4-1=3$. So $f$ is **continuous** at $1$.

Derivative from the definition, one side at a time:

$$
h\to0^+:\ \frac{(1+h)^2+2-3}{h}=\frac{2h+h^2}{h}=2+h\to2
$$

$$
h\to0^-:\ \frac{4(1+h)-(1+h)^2-3}{h}=\frac{2h-h^2}{h}=2-h\to2
$$

> [!success] Answer (the key)
> The one-sided derivatives are both $2$, so **$f$ is differentiable at $x=1$** with $f'(1)=2$. Therefore there **is a tangent line** at this point and **no corner point**.

> [!note] Added here, not in the key
> The tangent line is $y-3=2(x-1)$, that is $y=2x+1$.

---

## Q3 — Marginal revenue and marginal cost (20 points)

**Question.** At a factory, $x\ge1$ units are made and sold. The marginal revenue is $R'(x)=5\sqrt x$ thousand dollars and the marginal cost is $C'(x)=2x+2$ thousand dollars.

a. Find $R'(9)$ and explain its meaning.
b. Find $C'(6)$ and explain its meaning.
c. Find the value of $x$ for which profit is maximal.
d. For which values of $x$ is marginal cost greater than marginal revenue?
e. It is also given that at $x=1$ the profit is $0$. Find the profit at $x=9$.

### a. $R'(9)$

> [!success] Answer (the key)
> $R'(9)=5\sqrt9=15$ thousand dollars: increasing the sales level from $9$ to $10$ units would raise revenue by approximately **$\$15{,}000$**.

### b. $C'(6)$

> [!success] Answer (the key)
> $C'(6)=2\cdot6+2=14$ thousand dollars: increasing production from $6$ to $7$ units would raise cost by approximately **$\$14{,}000$**.

### c. Profit-maximising $x$

$P'(x)=R'(x)-C'(x)=5\sqrt x-2x-2=0$, so $5\sqrt x=2x+2$. Square both sides:

$$
25x=(2x+2)^2=4x^2+8x+4\;\Rightarrow\;4x^2-17x+4=0\;\Rightarrow\;x=\frac{17\pm\sqrt{289-64}}8=\frac{17\pm15}8
$$

so $x=4$ or $x=\tfrac14$. The value $x=\tfrac14$ is outside the domain $x\ge1$ and is rejected. Both roots satisfy the unsquared equation, but only $x=4$ is allowed: $5\sqrt4=10=2\cdot4+2$.

Sign of $P'$ on $x\ge1$ (key's table): at $x=1$, $P'=5-4=1>0$, so $P'>0$ on $[1,4)$ and $P'<0$ after $4$.

> [!success] Answer (the key)
> **$x=4$**, a **maximum** (profit increases up to $4$ and decreases afterwards).

### d. When is marginal cost greater than marginal revenue?

$C'(x)>R'(x)\iff P'(x)=R'(x)-C'(x)<0$.

> [!success] Answer (the key)
> **$x>4$.**

### e. Profit at $x=9$

Profit is an antiderivative of $P'$. Integrate $P'(x)=5x^{1/2}-2x-2$:

$$
P(x)=\int\left(5x^{1/2}-2x-2\right)dx=\frac{5x^{3/2}}{\tfrac32}-\frac{2x^2}2-2x+C=\frac{10}3x^{3/2}-x^2-2x+C
$$

Use $P(1)=0$: $0=\tfrac{10}3-1-2+C$, so $C=-\tfrac13$.

$$
P(9)=\frac{10}3\cdot9^{3/2}-9^2-18-\frac13=\frac{10}3\cdot27-81-18-\frac13=90-99-\frac13=-9\tfrac13\ \text{thousand dollars}
$$

> [!success] Answer (the key)
> $P(9)=-9\tfrac13$ thousand dollars, that is **$-\$9{,}333$**, a **loss** of about $\$9{,}333$.

> [!tip] Intuition
> This is consistent with part c: profit peaks at $x=4$ (where $P(4)=\tfrac{10}3\cdot8-16-8-\tfrac13=\tfrac73$ thousand, a small gain) and then falls, because from $x=4$ onwards each extra unit costs more than it earns.

---

## Q4 — A piecewise function with parameters (20 points)

**Question.**

$$
f(x)=\begin{cases}\dfrac{\sqrt{x+13}-\sqrt{x^2+7}}{x-3} & x<3\\[10pt] b & x=3\\[4pt] ax & x>3\end{cases}
$$

where $a$ and $b$ are constants.

a. Find the function's domain.
b. Find the values of $a$ and $b$ for which $f(x)$ is continuous at $x=3$.

Plug in the values from b (or any values except $0$ if you did not solve it) and continue:

c. Given $g(x)=f\left(x^3\right)$, find the equation of the tangent line to the graph of $g(x)$ at $x=3$.

### a. Domain

In the first branch $\sqrt{x^2+7}$ is defined for all $x$ ($x^2+7>0$), but $\sqrt{x+13}$ needs $x+13\ge0$. The second and third branches define $f$ at $x=3$ and for $x>3$.

> [!success] Answer (the key)
> The domain is **$x\ge-13$**.

### b. Parameters for continuity at $x=3$

Continuity needs $f(3)=\lim_{x\to3^-}f=\lim_{x\to3^+}f$.

- $f(3)=b$.
- Right: $\displaystyle\lim_{x\to3^+}ax=3a$.
- Left: the quotient is $\tfrac00$ at $x=3$ (check: $\sqrt{16}-\sqrt{16}=0$). Multiply by the conjugate:

$$
\lim_{x\to3^-}\frac{\sqrt{x+13}-\sqrt{x^2+7}}{x-3}\cdot\frac{\sqrt{x+13}+\sqrt{x^2+7}}{\sqrt{x+13}+\sqrt{x^2+7}}
=\lim_{x\to3^-}\frac{(x+13)-(x^2+7)}{(x-3)\left(\sqrt{x+13}+\sqrt{x^2+7}\right)}
$$

The numerator is $-x^2+x+6=-(x^2-x-6)=-(x+2)(x-3)$, so the factor $(x-3)$ cancels:

$$
\lim_{x\to3^-}\frac{-(x+2)}{\sqrt{x+13}+\sqrt{x^2+7}}=\frac{-5}{4+4}=-\frac58
$$

So $b=-\tfrac58$ and $3a=-\tfrac58$, giving $a=-\tfrac5{24}$.

> [!success] Answer (the key)
> $a=-\dfrac5{24}$ and $b=-\dfrac58$.

### c. Tangent line to $g(x)=f\left(x^3\right)$ at $x=3$

Chain rule: $g'(x)=f'\!\left(x^3\right)\cdot3x^2$. At $x=3$ the inner value is $3^3=27>3$, so we use the branch $f(x)=ax$, for which $f'(x)=a=-\tfrac5{24}$:

$$
g'(3)=f'(27)\cdot3\cdot3^2=-\frac5{24}\cdot27=-\frac{45}8,\qquad g(3)=f(27)=-\frac5{24}\cdot27=-\frac{45}8
$$

Point-slope form through $\left(3,\,-\tfrac{45}8\right)$:

$$
y+\frac{45}8=-\frac{45}8(x-3)\;\Rightarrow\;y=-\frac{45}8x+\frac{135}8-\frac{45}8=-\frac{45}8x+\frac{45}4
$$

> [!success] Answer (the key)
> $y=-\dfrac{45}8x+\dfrac{45}4$, that is $y=-5.625x+11.25$.

> [!tip] Intuition
> Near $x=3$ the argument $x^3$ is near $27$, far into the linear branch, so $g(x)=-\tfrac5{24}x^3$ there; the seam of $f$ at $3$ is irrelevant. Directly: $g'(3)=-\tfrac5{24}\cdot3\cdot9=-\tfrac{45}8$, the same slope.

---

## Quick reference

> [!summary] Results at a glance
> | Part | Result |
> |---|---|
> | Q1a | Domain all $x$; $x$-intercept $(-2,0)$ and the point $(0,2)$; asymptotes $y=1$, $x=0$ (discontinuous at $0$); min $(-2,0)$; inflection $x=-3$ |
> | Q1b | $y=-f(-x)$: reflect in both axes, without $(0,2)$; max $(2,0)$, asymptote $y=-1$ |
> | Q2 | $1$; $1$; $e^{-4}$; vertical $x=0$ only; differentiable at $1$ (both slopes $2$), tangent exists, no corner |
> | Q3 | $R'(9)=15$; $C'(6)=14$; max profit at $x=4$; $C'>R'$ for $x>4$; $P(9)=-9\tfrac13$ thousand dollars |
> | Q4 | Domain $x\ge-13$; $a=-\tfrac5{24}$, $b=-\tfrac58$; tangent $y=-\tfrac{45}8x+\tfrac{45}4$ |
