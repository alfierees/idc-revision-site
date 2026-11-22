---
title: "Cube Root Times Linear Investigation, Exponential Piecewise, Candy Demand & Tangent of a Composite (2019 Moed B)"
type: past-paper
status: worked-solution
exam: "Math I for Economics Final Exam, 2019 Moed B"
semester: 1
year: 1
course: "Maths for Economists A"
instructor: Hever Schulberg
tags:
  - maths-for-economists-a
  - past-paper
  - worked-solution
  - function-investigation
  - cusp
  - inflection-points
  - reading-the-derivative
  - piecewise-functions
  - euler-limits
  - marginal-revenue
  - demand-function
  - chain-rule
  - tangent-line
  - definite-integral
aliases:
  - Math I 2019 Moed B
  - PP22 Maths for Economists A
subject: maths-for-economists-a
in_scope: true
---

# Cube Root Times Linear Investigation, Exponential Piecewise, Candy Demand & Tangent of a Composite (2019 Moed B)

> Part of: [[Maths for Economists A]]
> **Math I for Economics Final Exam, 2019 (Moed B)**, Hever Schulberg. 4 questions (30, 25, 25, 20 points), 3 hours, non-graphing calculator and formula sheet allowed.
> Builds on: [[Lec_03-Composition, Transformations, Exponentials and Limits]], [[Lec_04-Limits and Continuity]], [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]], [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_08-Chain Rule, Exponential Derivatives and Integrals]], [[Lec_09-Marginal Functions and Tangent Lines of Composites]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[Lec_11-Concavity, Inflection Points and Asymptotes]], [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]]
> Practice: [[PS_06-Exponential Limits, Euler Limits, Derivative Definition and Logarithms]], [[PS_08-Chain Rule, Exponential and Log Derivatives and Integrals]], [[PS_09-Piecewise Differentiability, Marginal Functions & Inequalities]], [[PS_10-Increase and Decrease Intervals, Extrema & Marginal Analysis]], [[PS_12-Function Investigation, Asymptotes & Reading the Derivative Graph]]

> [!info] Source
> The exam is on pages 2 to 3 of the source PDF (page 1 is the cover). The **handwritten, unsigned key (author unclear)** is on pages 4 to 8 and covers every part. Answers follow the key, expanded into steps. The key notes that **Q3 is taken from a homework exercise** and that **Q4 is similar to Question 3 of Exercise 9**.

> [!warning] Points where the key needs a check
> - **Q1d:** the key finds the inflection at $x=-2$ but does not write its $y$-value. It is $f(-2)=\sqrt[3]{4}\cdot(-12)\approx-19.05$ (computed here, not in the key).
> - **Q1c:** the key marks the extreme points as $(0,0)$ and $(4,-15.1)$. The second $y$-value is rounded; the exact value is $-6\sqrt[3]{16}\approx-15.12$.
> - **Q3c:** the key's rounded critical point is $x\approx5.77$; the exact value is $x=\sqrt{100/3}\approx5.7735$.
> - No part is AI-solved.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | Full investigation of $f(x)=\sqrt[3]{x^2}\,(x-10)$: domain, asymptote limits, intercepts, the given $f'$ and $f''$ verified, extremes (a **cusp** at $0$), inflection, graph; then increase/decrease of $g$ when $g'(x)=f(x-1)$ | [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[Lec_11-Concavity, Inflection Points and Asymptotes]] |
| Q2 | Piecewise with $\frac{|x+1|}{e^3(x+1)}$ and an **Euler limit** $(1+3x)^{-1/x}$: domain, continuity at $0$, three limits | [[Lec_04-Limits and Continuity]], [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]] |
| Q3 | Candy demand $D(x)=100-x^2$: rate of change, interpret $D'(2)$, marginal revenue, when revenue rises or falls | [[Lec_09-Marginal Functions and Tangent Lines of Composites]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]] |
| Q4 | Tangent slopes of $f(x/2)$ and $[f(x/2)]^5$ from given data (chain rule), and a definite integral with an unknown upper limit | [[Lec_08-Chain Rule, Exponential Derivatives and Integrals]], [[Lec_09-Marginal Functions and Tangent Lines of Composites]] |

> [!tip] Intuition: the one move behind each question
> - Q1: $x^{2/3}$ has a cusp at $0$ because $f'$ has $x^{1/3}$ in the denominator. For part f, $g'$ is just $f$ shifted one unit right, so $g$ is increasing exactly where $f$ is positive.
> - Q2: a ratio $\frac{|x+1|}{x+1}$ is $\pm1$ depending on which side of $-1$ you are on.
> - Q3: price per **pound** is $4x$ because $x$ is the price per **quarter** pound.
> - Q4: with $f(2)=0$ and $f'(2)=-3$, anything built from $f(x/2)$ at $x=4$ reduces to those two numbers.

---

## Q1 — Investigating $f(x)=\sqrt[3]{x^2}\cdot(x-10)$ (30 points)

**Question.** Given $f(x)=\sqrt[3]{x^2}\cdot(x-10)$.

a. Find the domain and the asymptotes (if any) using the appropriate limits.
b. Find axes intercept points (if any).
c. Show that $f'(x)=\dfrac{5x-20}{3x^{1/3}}$, find relative extreme points (if any) and categorize them as minimum or maximum.
d. Show that $f''(x)=\dfrac{10x+20}{9x^{4/3}}$ and find inflection points (if any).
e. Draw the graph.
f. Given a function $g(x)$ whose derivative satisfies $g'(x)=f(x-1)$, find intervals of increase and decrease of $g(x)$ (if any).

### a. Domain and asymptotes

A cube root is defined for every real number, so the domain is all $x$ and there is **no vertical asymptote**. Horizontal asymptotes need the limits at $\pm\infty$:

$$
\lim_{x\to\infty}\sqrt[3]{x^2}\,(x-10)=\infty\cdot(\infty-10)=\infty,\qquad
\lim_{x\to-\infty}\sqrt[3]{x^2}\,(x-10)=\infty\cdot(-\infty-10)=-\infty
$$

> [!success] Answer (the key)
> Domain: **all $x$**. No vertical asymptote. Both limits are infinite, so **no horizontal asymptote** either.

### b. Intercepts

$\sqrt[3]{x^2}\,(x-10)=0$ gives $x=10$ or $\sqrt[3]{x^2}=0\Rightarrow x=0$.

> [!success] Answer (the key)
> Intercepts $(10,\,0)$ and $(0,\,0)$. (The $y$-intercept is $f(0)=0$, which is the same point as an $x$-intercept.)

### c. First derivative, extremes

Product rule on $x^{2/3}\cdot(x-10)$:

$$
f'(x)=\frac23x^{-1/3}(x-10)+x^{2/3}\cdot1=\frac{2(x-10)}{3x^{1/3}}+\frac{x^{2/3}}{1}=\frac{2x-20+3x}{3\sqrt[3]{x}}=\frac{5x-20}{3\sqrt[3]{x}}
$$

(The second term is brought to the common denominator $3x^{1/3}$ by multiplying top and bottom by $3x^{1/3}$: $x^{2/3}\cdot3x^{1/3}=3x$.) This matches the stated $f'$.

- $f'(x)=0$ when $5x-20=0$, so $x=4$.
- $f'(x)$ is **undefined** at $x=0$ (denominator zero).

| Interval | Numerator $5x-20$ | Denominator $3\sqrt[3]{x}$ | $f'$ | $f$ |
|---|---|---|---|---|
| $x<0$ | $-$ | $-$ | $+$ | increasing |
| $0<x<4$ | $-$ | $+$ | $-$ | decreasing |
| $x>4$ | $+$ | $+$ | $+$ | increasing |

> [!success] Answer (the key)
> - **Maximum** at $x=0$: the point $(0,\,0)$.
> - **Minimum** at $x=4$: $f(4)=\sqrt[3]{16}\cdot(-6)\approx-15.1$, the point $(4,\,-15.1)$.

### d. Second derivative, inflection

Quotient rule on $\dfrac{5x-20}{3x^{1/3}}$, or equivalently differentiate $f'(x)=\tfrac53x^{2/3}-\tfrac{20}{3}x^{-1/3}$:

$$
f''(x)=\frac{5\cdot3x^{1/3}-(5x-20)\,x^{-2/3}}{9x^{2/3}}
=\frac{15x-(5x-20)}{9x^{2/3}\,x^{2/3}}=\frac{10x+20}{9x^{4/3}}
$$

(Multiplying top and bottom by $x^{2/3}$ turns $x^{1/3}$ into $x$.) This matches the stated $f''$.

- $f''(x)=0$ when $10x+20=0$, so $x=-2$.
- $f''(x)$ is **undefined** at $x=0$.

The denominator $9x^{4/3}=9\left(\sqrt[3]{x}\right)^4$ is positive for all $x\ne0$, so the sign of $f''$ is the sign of $10x+20$:

| Interval | $f''$ | $f$ |
|---|---|---|
| $x<-2$ | $-$ | concave down |
| $-2<x<0$ | $+$ | concave up |
| $x>0$ | $+$ | concave up |

> [!success] Answer (the key)
> **Inflection point at $x=-2$** (concavity changes from down to up). At $x=0$ the sign of $f''$ does **not** change, so it is not an inflection point. The $y$-value is $f(-2)\approx-19.05$ (not written in the key).

### e. The graph

![[PP22_q1_cube_root_times_linear_graph.png]]

> [!success] Answer (the key)
> The key's sketch: a curve that rises to a sharp **cusp-shaped maximum at $(0,0)$**, falls to a minimum at $(4,-15.1)$, and then rises through $(10,0)$ towards $+\infty$; on the left it keeps decreasing towards $-\infty$ with an inflection at $x=-2$.

> [!tip] Intuition
> At $x=0$ the slope tends to $+\infty$ from the left and $-\infty$ from the right, so the peak is a cusp, not a rounded top. Same shape family as the cusp in [[Lec_10-Increase and Decrease Intervals and Relative Extrema]].

### f. Increase and decrease of $g$ when $g'(x)=f(x-1)$

$g'(x)=f(x-1)$ is the graph of $f$ **shifted one unit to the right**. Sign of $f$: it equals $0$ at $x=0$ and $x=10$, is negative for $x<10$ ($x\neq0$), and positive for $x>10$. Shifted right by $1$, the zeros move to $x=1$ and $x=11$:

- $g'(x)<0$ for $x<11$ (where $x\ne1$), so $g$ is **decreasing**.
- $g'(x)>0$ for $x>11$, so $g$ is **increasing**.

At $x=1$ the derivative touches $0$ without changing sign, so there is no change in direction there.

> [!success] Answer (the key)
> $g$ is **increasing for $x>11$** and **decreasing for $x<11$**.

---

## Q2 — A piecewise function with an Euler limit (25 points)

**Question.**

$$
f(x)=\begin{cases}\dfrac{|x+1|}{e^{3}\,(x+1)} & x\le0\\[10pt] (1+3x)^{\frac1{-x}} & x>0\end{cases}
$$

a. Find the function's domain.
b. Is the function continuous at $x=0$?
c. Find $\displaystyle\lim_{x\to2}f(x)$.
d. Find $\displaystyle\lim_{x\to-1^+}f(x)$.
e. Find $\displaystyle\lim_{x\to-\infty}f(x)$.

### a. Domain

In the top branch the denominator $e^3(x+1)$ is zero at $x=-1$, which lies in $x\le0$. The bottom branch is fine for $x>0$ ($1+3x>0$).

> [!success] Answer (the key)
> Domain: **all $x$ except $x=-1$**, since the denominator is zero there.

### b. Continuity at $x=0$

1. $f(0)=\dfrac{|0+1|}{e^3(0+1)}=\dfrac1{e^3}$.
2. Left: $\displaystyle\lim_{x\to0^-}f(x)=\dfrac1{e^3}$ (the top branch is continuous at $0$).
   Right: write the exponent as an Euler limit, using $\dfrac1{-x}=\dfrac1{3x}\cdot(-3)$:

$$
\lim_{x\to0^+}(1+3x)^{-1/x}=\lim_{x\to0^+}\left[(1+3x)^{\frac1{3x}}\right]^{-3}=e^{-3}=\frac1{e^3}
$$

3. Value and both one-sided limits are $\dfrac1{e^3}$.

> [!success] Answer (the key)
> **Yes**, $f$ is continuous at $x=0$.

### c. $\displaystyle\lim_{x\to2}f(x)$

$x=2$ is in the branch $x>0$, and the formula is continuous there:

$$
\lim_{x\to2}(1+3x)^{-1/x}=(1+6)^{-1/2}=\frac1{7^{1/2}}=\frac1{\sqrt7}
$$

> [!success] Answer (the key)
> $\dfrac1{\sqrt7}$.

### d. $\displaystyle\lim_{x\to-1^+}f(x)$

For $x$ slightly above $-1$, $x+1>0$, so $|x+1|=x+1$ and it cancels:

$$
\lim_{x\to-1^+}\frac{x+1}{e^3(x+1)}=\frac1{e^3}
$$

> [!success] Answer (the key)
> $\dfrac1{e^3}$.

### e. $\displaystyle\lim_{x\to-\infty}f(x)$

For $x<-1$, $x+1<0$, so $|x+1|=-(x+1)$:

$$
\lim_{x\to-\infty}\frac{-(x+1)}{e^3(x+1)}=-\frac1{e^3}
$$

> [!success] Answer (the key)
> $-\dfrac1{e^3}$.

> [!tip] Intuition
> $\dfrac{|x+1|}{x+1}$ is the **sign** of $x+1$: $+1$ to the right of $-1$ and $-1$ to the left. So the top branch jumps between $\dfrac1{e^3}$ and $-\dfrac1{e^3}$ at the undefined point $x=-1$.

---

## Q3 — Candy demand and revenue (25 points)

**Question.** Customers are willing to buy $D(x)$ pounds of candy per day when the price is $\$x$ per **quarter of a pound**, with $D(x)=100-x^2$ and $1\le x\le10$.

a. Find the rate of change of $D(x)$ with respect to $x$.
b. Find $D'(2)$ and interpret the result.
c. Find $R'(x)$: the marginal daily revenue function.
d. Is the daily revenue increasing or decreasing when $x$ is increased?

> The key notes this question is taken from a homework exercise.

### a. Rate of change

> [!success] Answer (the key)
> $D'(x)=-2x$.

### b. $D'(2)$

> [!success] Answer (the key)
> $D'(2)=-4$. When the price per quarter pound is raised by **$\$1$, from $\$2$ to $\$3$**, the daily demand falls by approximately **$4$ pounds**.

### c. Marginal revenue

Revenue is **price per pound times pounds sold**. A pound is four quarter-pounds, so the price per pound is $4x$:

$$
R(x)=D(x)\cdot4x=(100-x^2)\cdot4x=400x-4x^3
$$

> [!success] Answer (the key)
> $R'(x)=400-12x^2$.

### d. Increasing or decreasing revenue

$R'(x)=0\iff12x^2=400\iff x^2=\dfrac{100}{3}\iff x\approx5.77$ (taking the positive root, since $x\ge1$).

| Interval | $R'$ | $R$ |
|---|---|---|
| $1<x<5.77$ | $+$ | increasing |
| $5.77<x<10$ | $-$ | decreasing |

> [!success] Answer (the key)
> Revenue **increases** for $1<x<5.77$ and **decreases** for $5.77<x<10$ (a maximum at $x\approx5.77$).

> [!tip] Intuition
> Raising the price earns more per pound but loses buyers; up to about $\$5.77$ per quarter pound the extra price wins, after that the lost demand wins.

---

## Q4 — Chain rule on given data, and an integral (20 points)

**Question.** Given a function $f(x)$ with: the slope of the tangent at $x=2$ is $-3$, and the function intersects the $x$-axis at $x=2$.

a. Write the data using mathematical notation.
b. Given $y_1=f\!\left(\dfrac x2\right)$, find the slope of the tangent to $y_1$ at $x=4$.
c. Given $y_2=\left[f\!\left(\dfrac x2\right)\right]^5$:
  1. Find the slope of the tangent to $y_2$ at $x=4$.
  2. Find the equation of that tangent line.

Without any connection to previous parts:

d. Given $\displaystyle\int_0^{\ln a}\left(e^x+e^{-x}\right)^2dx=2\ln a-\frac1{2a^2}+2$, find $a$.

> The key notes this question is similar to Question 3 of Exercise 9 (see [[PS_09-Piecewise Differentiability, Marginal Functions & Inequalities]]).

### a. The data in notation

> [!success] Answer (the key)
> $f'(2)=-3$ and $f(2)=0$.

### b. Slope of $y_1=f(x/2)$ at $x=4$

Chain rule (inner function $x/2$, derivative $\tfrac12$): $y_1'(x)=f'\!\left(\tfrac x2\right)\cdot\tfrac12$. At $x=4$, $\tfrac x2=2$:

$$
y_1'(4)=f'(2)\cdot\frac12=-3\cdot\frac12=-1.5
$$

> [!success] Answer (the key)
> $-1.5$.

### c. $y_2=\left[f(x/2)\right]^5$

**(1) Slope.** Outer power, then inner $f$, then inner $x/2$:

$$
y_2'(x)=5\left[f\!\left(\tfrac x2\right)\right]^4\cdot f'\!\left(\tfrac x2\right)\cdot\frac12,\qquad
y_2'(4)=5\,[f(2)]^4\cdot f'(2)\cdot\frac12=5\cdot0\cdot(-3)\cdot\frac12=0
$$

**(2) Tangent line.** $y_2(4)=[f(2)]^5=0$. Slope $0$ through $(4,0)$: $y-0=0\,(x-4)$.

> [!success] Answer (the key)
> Slope $=0$; tangent line **$y=0$** (the $x$-axis).

> [!tip] Intuition
> $f(2)=0$ kills the whole product: a fifth power of something that is $0$ is flat there, so the tangent is the $x$-axis.

### d. Solving for $a$

Expand the square, using $e^x\cdot e^{-x}=e^0=1$:

$$
\left(e^x+e^{-x}\right)^2=e^{2x}+2+e^{-2x}
$$

Integrate term by term:

$$
\int_0^{\ln a}\left(e^{2x}+2+e^{-2x}\right)dx=\left[\frac{e^{2x}}2+2x-\frac{e^{-2x}}2\right]_0^{\ln a}
$$

At the upper limit, $e^{2\ln a}=e^{\ln a^2}=a^2$ and $e^{-2\ln a}=e^{\ln a^{-2}}=a^{-2}$:

$$
\left(\frac{a^2}2+2\ln a-\frac1{2a^2}\right)-\left(\frac12+0-\frac12\right)=\frac{a^2}2+2\ln a-\frac1{2a^2}
$$

Set equal to the given value $2\ln a-\dfrac1{2a^2}+2$. The $2\ln a$ and $-\dfrac1{2a^2}$ terms cancel on both sides:

$$
\frac{a^2}2=2\;\Rightarrow\;a^2=4\;\Rightarrow\;a=2\ \text{or}\ a=-2
$$

$a=-2$ is rejected because $\ln a$ needs $a>0$.

> [!success] Answer (the key)
> $a=2$.

---

## Quick reference

> [!summary] Results at a glance
> | Part | Result |
> |---|---|
> | Q1a-b | Domain all $x$; no asymptotes; intercepts $(0,0)$ and $(10,0)$ |
> | Q1c | Max $(0,0)$ (cusp); min $(4,-15.1)$ |
> | Q1d | Inflection at $x=-2$ (concave down for $x<-2$, up after) |
> | Q1f | $g$ increasing for $x>11$, decreasing for $x<11$ |
> | Q2 | Domain $x\ne-1$; continuous at $0$ (value and limits $e^{-3}$); $\tfrac1{\sqrt7}$; $e^{-3}$; $-e^{-3}$ |
> | Q3 | $D'=-2x$; $D'(2)=-4$; $R'=400-12x^2$; increasing on $(1,5.77)$, decreasing on $(5.77,10)$ |
> | Q4 | $f'(2)=-3,\ f(2)=0$; $-1.5$; $0$ and $y=0$; $a=2$ |
