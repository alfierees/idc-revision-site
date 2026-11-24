---
title: "Cube Root Investigation, Piecewise with a Parameter, Advertising Sales & Limits (2018 Moed B)"
type: past-paper
status: worked-solution
exam: "Math I for Economics Final Exam, 2018 Moed B"
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
  - transformations
  - piecewise-functions
  - continuity-parameter
  - definition-of-derivative
  - marginal-sales
  - limits
  - exponential-limits
aliases:
  - Math I 2018 Moed B
  - PP20 Maths for Economists A
subject: maths-for-economists-a
in_scope: true
---

# Cube Root Investigation, Piecewise with a Parameter, Advertising Sales & Limits (2018 Moed B)

> Part of: [[Maths for Economists A]]
> **Math I for Economics Final Exam, 2018 (Moed B)**, Hever Schulberg. 4 questions (28, 28, 24, 20 points).
> Builds on: [[Lec_01-Functions, Domain and Sigma Notation]], [[Lec_02-Piecewise Functions and Business Applications]], [[Lec_03-Composition, Transformations, Exponentials and Limits]], [[Lec_04-Limits and Continuity]], [[Lec_05-Infinite Limits]], [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]], [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_09-Marginal Functions and Tangent Lines of Composites]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[Lec_11-Concavity, Inflection Points and Asymptotes]], [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]]
> Practice: [[PS_01-Functions, Domain and Piecewise Graphs]], [[PS_03-Composition, Transformations and Exponential Graphs]], [[PS_05-Limits, Infinite Limits and Limits at Infinity]], [[PS_06-Exponential Limits, Euler Limits, Derivative Definition and Logarithms]], [[PS_09-Piecewise Differentiability, Marginal Functions & Inequalities]], [[PS_10-Increase and Decrease Intervals, Extrema & Marginal Analysis]], [[PS_12-Function Investigation, Asymptotes & Reading the Derivative Graph]]

> [!info] Source
> The exam is on pages 2 to 3 of the source PDF. The **handwritten, unsigned key (author unclear)** is on pages 4 to 9 and covers every part. Answers below follow the key, expanded into steps.

> [!warning] Points where the key needs a check
> - **Q2e is labelled "d" in the key:** the key has two sections marked "d". The first is the limit (Q2d) and the second, solving $f'(x)=-\tfrac12$, is really Q2e. Contents are right; only the label is off.
> - **Q1g:** the key labels the shifted curve "$f(x)+1$" in colour, but the picture it draws is the one for $y=-f(x)+1$ (a reflection, then a shift up). The figure below follows the question, $y=-f(x)+1$.
> - **Q1 asymptotes and extremes:** the key does not list the extreme points explicitly (the question does not ask). They are read off the sign table and noted below.
> - No part is AI-solved.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | Full investigation of $(x^{2/3}-1)^2$: domain, intercepts, asymptotes, monotonicity, concavity, graph (with a **cusp**), then a reflection and shift | [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[Lec_03-Composition, Transformations, Exponentials and Limits]] |
| Q2 | Piecewise with an absolute value and a parameter $a$: domain, continuity, a corner from the definition, a limit at $-\infty$, solving $f'(x)=-\tfrac12$ | [[Lec_04-Limits and Continuity]], [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]] |
| Q3 | Advertising and sales: marginal sales, sign, solve for a given rate, interpret $N'(26)$ | [[Lec_09-Marginal Functions and Tangent Lines of Composites]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]] |
| Q4 | Three limits at $\pm\infty$, and whether $y=-\sqrt{x^2+9}$ is a function | [[Lec_05-Infinite Limits]], [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]], [[Lec_01-Functions, Domain and Sigma Notation]] |

> [!tip] Intuition: the one move behind each question
> - Q1: $x^{2/3}$ is **always** defined (cube root first, then square) and has a sharp **cusp** at $0$, because its derivative $\tfrac23x^{-1/3}$ blows up there.
> - Q2: three conditions for continuity at a seam; for differentiability compare the one-sided slopes.
> - Q3: $N'$ is positive (more advertising, more sales) but shrinking (diminishing returns).
> - Q4: limits at $-\infty$ with powers and exponentials: factor out the dominant term.

---

## Q1 — Investigating $f(x)=\left(x^{2/3}-1\right)^2$ (28 points)

**Question.** Given $f(x)=\left(x^{\frac23}-1\right)^2$.

a. Find the domain.
b. Find asymptotes (if any) using the appropriate limits.
c. Find increase and decrease intervals.
d. Find concavity intervals.
e. Find axes intercept points (if any).
f. Draw the graph.
g. Draw the graph of $y=-f(x)+1$.

### a. Domain

$x^{2/3}=\left(\sqrt[3]{x}\right)^2$, and a cube root is defined for every real $x$.

> [!success] Answer (the key)
> The domain is **all $x$** (since the cube root is defined everywhere). Hence **no vertical asymptote**.

### b. Asymptotes

Vertical: none (domain is all $x$ and $f$ is continuous). Horizontal:

$$
\lim_{x\to\pm\infty}\left(\sqrt[3]{x^2}-1\right)^2=(\infty-1)^2=\infty
$$

> [!success] Answer (the key)
> **No vertical, no horizontal asymptote.**

### e. Axis intercepts (the key does this next)

- $x$-axis: $f(x)=0\Rightarrow\sqrt[3]{x^2}-1=0\Rightarrow\sqrt[3]{x^2}=1\Rightarrow x^2=1$ (cube both sides), so $x=\pm1$.
- $y$-axis: $f(0)=(0-1)^2=1$.

> [!success] Answer (the key)
> $x$-intercepts $(\pm1,\,0)$; $y$-intercept $(0,\,1)$.

### c. Increase and decrease

Chain rule, with $\dfrac{d}{dx}x^{2/3}=\dfrac23x^{-1/3}$:

$$
f'(x)=2\left(\sqrt[3]{x^2}-1\right)\cdot\frac23x^{-1/3}=\frac{4\left(\sqrt[3]{x^2}-1\right)}{3\sqrt[3]{x}}
$$

$f'(x)=0$ at $x=\pm1$ (numerator zero), and $f'$ is **undefined at $x=0$** (denominator zero), so the critical points are $-1$, $0$, $1$. Signs (numerator $\sqrt[3]{x^2}-1$ is negative for $|x|<1$ and positive for $|x|>1$; the denominator has the sign of $x$):

| Interval | $f'$ | $f$ |
|---|---|---|
| $x<-1$ | $-$ | decreasing |
| $-1<x<0$ | $+$ | increasing |
| $0<x<1$ | $-$ | decreasing |
| $x>1$ | $+$ | increasing |

> [!success] Answer (the key)
> - Increasing: $-1<x<0$ and $x>1$.
> - Decreasing: $x<-1$ and $0<x<1$.

> [!note] Extreme points (read from the table; not asked)
> Minimum at $x=\pm1$ (value $0$) and a relative maximum at $x=0$ with $f(0)=1$.
> At $x=0$ the slope is $+\infty$ from the left and $-\infty$ from the right: a **cusp** pointing up, not a smooth peak.

### d. Concavity

Simplify $f'$ first:

$$
f'(x)=\frac43\left(\frac{x^{2/3}}{x^{1/3}}-\frac1{x^{1/3}}\right)=\frac43\left(x^{1/3}-x^{-1/3}\right)
$$

$$
f''(x)=\frac43\left(\frac13x^{-2/3}+\frac13x^{-4/3}\right)=\frac49\left(\frac1{\sqrt[3]{x^2}}+\frac1{\sqrt[3]{x^4}}\right)
$$

Both terms are positive for every $x\neq0$, so $f''>0$ wherever it exists.

> [!success] Answer (the key)
> $f$ is **concave up ($\cup$) for all $x\neq0$**. There are no inflection points.

### f. The graph and g. the reflection

![[PP20_q1_graph_of_f_and_reflection.png]]

> [!success] Answer (the key)
> **Part f (top):** a "W"-like curve with minima at $(\pm1,0)$ touching the $x$-axis, a cusp at $(0,1)$, rising on both outer sides.
> **Part g (bottom):** $y=-f(x)+1$. First reflect $f$ in the $x$-axis (the cusp now points down, and the minima become maxima at height $0$), then **shift up by $1$**: maxima at $(\pm1,\,1)$, cusp at $(0,\,0)$.

> [!tip] Intuition
> Transformations from [[Lec_03-Composition, Transformations, Exponentials and Limits]]: the minus sign flips the graph upside down; the $+1$ lifts everything one unit. The point $(0,1)$ goes to $(0,-1)$ and then to $(0,0)$.

---

## Q2 — A piecewise function with a parameter (28 points)

**Question.**

$$
f(x)=\begin{cases}\left|9-x^2\right| & x<0\\[2pt] 9a & x=0\\[2pt] \dfrac{x^2+9x}{x(x+1)} & x>0\end{cases}
$$

where $a$ is a constant.

a. Find the function's domain. Explain.
b. Can you find a value of $a$ for which the function is continuous for all $x$? If so, find it; if not, explain why.
c. Use the definition of the derivative to find if the function is differentiable at $x=-3$.
d. Find $\displaystyle\lim_{x\to-\infty}\frac{f(x)}{x^2+1}$.
e. Solve $f'(x)=-\tfrac12$ for $x>0$.

### a. Domain

The denominator $x(x+1)$ vanishes at $x=0$ and $x=-1$, but that branch is only used for $x>0$, and $x=0$ has its own value $9a$.

> [!success] Answer (the key)
> The domain is **all $x$**.

### b. The value of $a$ for continuity

Check the seam $x=0$:

1. $f(0)=9a$.
2. Right: $\displaystyle\lim_{x\to0^+}\frac{x(x+9)}{x(x+1)}=\frac{9}{1}=9$. Left: $\displaystyle\lim_{x\to0^-}|9-x^2|=|9|=9$. Both equal $9$.
3. Continuity needs the value to equal the limit: $9a=9$.

> [!success] Answer (the key)
> $a=1$.

### c. Differentiability at $x=-3$ from the definition

At $x=-3$ we are in the branch $|9-x^2|$, and $f(-3)=|9-9|=0$. With $x=-3+h$: $9-(-3+h)^2=9-(9-6h+h^2)=6h-h^2$.

$$
h\to0^+:\ 6h-h^2>0,\quad \lim_{h\to0^+}\frac{\left|9-(-3+h)^2\right|}{h}=\lim\frac{6h-h^2}{h}=\lim(6-h)=6
$$

$$
h\to0^-:\ 6h-h^2<0,\quad \lim_{h\to0^-}\frac{-(6h-h^2)}{h}=\lim(-6+h)=-6
$$

> [!success] Answer (the key)
> The one-sided derivatives are $6$ and $-6$, which differ, so **$f$ is not differentiable at $x=-3$** (a corner).

### d. $\displaystyle\lim_{x\to-\infty}\frac{f(x)}{x^2+1}$

For $x$ very negative ($x<-3$), $9-x^2<0$, so $|9-x^2|=x^2-9$:

$$
\lim_{x\to-\infty}\frac{x^2-9}{x^2+1}=\lim_{x\to-\infty}\frac{x^2\left(1-\frac9{x^2}\right)}{x^2\left(1+\frac1{x^2}\right)}=1
$$

> [!success] Answer (the key)
> $1$.

### e. Solve $f'(x)=-\tfrac12$ for $x>0$ (labelled "d" in the key)

For $x>0$ cancel the common factor $x$: $f(x)=\dfrac{x+9}{x+1}$. Then

$$
f'(x)=\frac{(x+1)-(x+9)}{(x+1)^2}=\frac{-8}{(x+1)^2}=-\frac12
$$

$$
(x+1)^2=16\;\Rightarrow\;x+1=\pm4\;\Rightarrow\;x=3\ \text{or}\ x=-5
$$

$x=-5$ is rejected because we need $x>0$.

> [!success] Answer (the key)
> $x=3$.

---

## Q3 — Advertising and sales (24 points)

**Question.** Investing $x$ thousand dollars in advertising a new product is expected to sell

$$
N(x)=-2000\left(\frac{30}{\sqrt{10+x}}-10\right),\qquad x\ge0
$$

units.

a. Is the marginal sales increasing or decreasing with $x$?
b. Does advertising have a positive or a negative effect on sales? Explain.
c. How much money should the company invest so that the rate of change in sales equals $240$?
d. Calculate $N'(26)$ and explain what this figure means.

Rewrite $N(x)=-60{,}000\,(x+10)^{-1/2}+20{,}000$.

$$
N'(x)=-60{,}000\cdot\left(-\frac12\right)(x+10)^{-3/2}=\frac{30{,}000}{(x+10)^{3/2}}
$$

### a. Marginal sales

Marginal sales is $N'(x)$. $x$ appears only in the denominator, so as $x$ grows the fraction shrinks.

$$
N''(x)=30{,}000\cdot\left(-\frac32\right)(x+10)^{-5/2}=-\frac{45{,}000}{(x+10)^{5/2}}<0
$$

> [!success] Answer (the key)
> **Decreasing**: $N'(x)$ falls as $x$ grows (and $N''<0$ confirms it).

### b. Positive or negative effect

> [!success] Answer (the key)
> **Positive**, since $N'(x)=\dfrac{30{,}000}{(x+10)^{3/2}}>0$: more advertising always raises sales.

### c. Investment for a rate of change of $240$

$$
\frac{30{,}000}{(x+10)^{3/2}}=240\;\Rightarrow\;(x+10)^{3/2}=125
$$

Raise both sides to the power $\tfrac23$ (equivalently, square and then take the cube root: $125^2=15{,}625$, $\sqrt[3]{15{,}625}=25$):

$$
x+10=25\;\Rightarrow\;x=15
$$

> [!success] Answer (the key)
> $x=15$, that is the company should invest **$\$15{,}000$**.

### d. $N'(26)$

$$
N'(26)=\frac{30{,}000}{(36)^{3/2}}=\frac{30{,}000}{216}\approx138.9
$$

> [!success] Answer (the key)
> $N'(26)\approx138.9$. When the company already invests $\$26{,}000$ in advertising, **an additional $\$1{,}000$ raises sales by about $139$ units**.

---

## Q4 — Four unrelated parts (20 points)

### a. $\displaystyle\lim_{x\to-\infty}(1-x)^x$

As $x\to-\infty$ the base $1-x\to+\infty$ and the exponent $x\to-\infty$:

$$
\lim_{x\to-\infty}(1-x)^x=\infty^{-\infty}=\frac1{\infty}=0
$$

> [!success] Answer (the key)
> $0$.

### b. $\displaystyle\lim_{x\to-\infty}\left(5x\sqrt[3]{x}-7x^2\right)$

Note $5x\sqrt[3]{x}=5x^{4/3}$. Factor out $x^2$:

$$
5x^{4/3}-7x^2=x^2\left(\frac{5}{x^{2/3}}-7\right)\;\to\;\infty\cdot(0-7)=-\infty
$$

> [!success] Answer (the key)
> $-\infty$. (The $x^2$ term dominates and has coefficient $-7$.)

### c. $\displaystyle\lim_{x\to-\infty}\frac{e^{2x+1}+e^{-x}}{e^{2x}+2e^{-x}}$

As $x\to-\infty$, $e^{-x}\to\infty$ is the dominant term. Divide top and bottom by $e^{-x}$:

$$
\frac{e^{3x+1}+1}{e^{3x}+2}\;\xrightarrow[x\to-\infty]{}\;\frac{0+1}{0+2}=\frac12
$$

> [!success] Answer (the key)
> $\dfrac12$.

### d. Is $y=-\sqrt{x^2+9}$ a function on all $x$?

> [!success] Answer (the key)
> **Yes, it is a function.** $x^2+9>0$ for every $x$, so the root is defined for all $x$, and each $x$ gives exactly **one** value of $y$ (the minus sign picks one root, not both). No restriction of the domain is needed.

> [!tip] Intuition
> Contrast this with an equation like $y^2=x^2+9$, which gives two $y$ values per $x$ and is **not** a function. Here the explicit minus sign fixes the single value.

---

## Quick reference

> [!summary] Results at a glance
> | Part | Result |
> |---|---|
> | Q1a-b | Domain all $x$; no asymptotes |
> | Q1c-d | Increasing $-1<x<0$, $x>1$; decreasing $x<-1$, $0<x<1$; concave up for all $x\neq0$ |
> | Q1e | $(\pm1,0)$ and $(0,1)$; cusp at $(0,1)$ |
> | Q2a-c | Domain all $x$; $a=1$; not differentiable at $-3$ (slopes $\pm6$) |
> | Q2d-e | Limit $=1$; $x=3$ |
> | Q3 | Marginal sales decreasing; positive effect; invest $\$15{,}000$; $N'(26)\approx139$ units per $\$1{,}000$ |
> | Q4 | $0$; $-\infty$; $\tfrac12$; yes it is a function |
