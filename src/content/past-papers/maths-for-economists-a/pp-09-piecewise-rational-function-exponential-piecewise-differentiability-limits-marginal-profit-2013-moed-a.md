---
title: "Piecewise Rational Function, Exponential Piecewise Differentiability, Limits & Marginal Profit (2013 Moed A)"
type: past-paper
status: worked-solution
exam: "Math I Final Exam, Moed A 2013"
semester: 1
year: 1
course: "Maths for Economists A"
instructor: Hever Schulberg
tags:
  - maths-for-economists-a
  - past-paper
  - worked-solution
  - function-investigation
  - piecewise-function
  - continuity
  - differentiability
  - limits
  - marginal-function
  - profit-function
aliases:
  - Maths A Moed A 2013
  - PP09 Maths A
subject: maths-for-economists-a
in_scope: true
---

# Piecewise Rational Function, Exponential Piecewise Differentiability, Limits & Marginal Profit (2013 Moed A)

> Part of: [[Maths for Economists A]]
> **Math I Final Exam, Moed A 2013**, 3 hours, 3 questions (35 / 35 / 30 points). Non-graphic calculator only, no other material.
> Builds on: [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]], [[Lec_11-Concavity, Inflection Points and Asymptotes]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_05-Infinite Limits]], [[Lec_09-Marginal Functions and Tangent Lines of Composites]], [[Lec_02-Piecewise Functions and Business Applications]], [[Lec_04-Limits and Continuity]]
> Practice: [[PS_12-Function Investigation, Asymptotes & Reading the Derivative Graph]], [[PS_11-Concavity, Inflection Points & Asymptotes]], [[PS_10-Increase and Decrease Intervals, Extrema & Marginal Analysis]], [[PS_09-Piecewise Differentiability, Marginal Functions & Inequalities]], [[PS_05-Limits, Infinite Limits and Limits at Infinity]], [[PS_04-Limits and Continuity]]

> [!info] Source
> The questions and the handwritten solution share one PDF (page 1 is the cover, questions on page 2, solution on pages 3 to 9). Answers follow **the key (author unclear)**: handwritten and unsigned. Terse working is expanded into steps.

> [!warning] Parts with no key
> None. Every part has a handwritten answer. The key leaves out the oblique asymptote of $g$ in Q1b; it is added below and labelled **mine**. No key answer needed changing.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 (35) | A [[Piecewise Function]] whose left piece has a [[Vertical Asymptote]]: domain and [[Continuity]], a full [[Function Investigation]] of the left piece $g$, then graphing the piecewise $f$ from $g$ | [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]], [[Lec_02-Piecewise Functions and Business Applications]], [[PS_12-Function Investigation, Asymptotes & Reading the Derivative Graph]] |
| Q2 (35) | A piecewise function with $e^{1/x}$: continuity at the joint, [[Definition of the Derivative]] with two different one-sided slopes, a sign argument for $f'\cdot f''$ | [[Lec_07-The Derivative, Differentiability and Rules]], [[PS_09-Piecewise Differentiability, Marginal Functions & Inequalities]] |
| Q3 (30) | Two limits (one is **not** an Euler limit), then marginal daily profit from a price-demand equation | [[Lec_05-Infinite Limits]], [[Lec_09-Marginal Functions and Tangent Lines of Composites]], [[PS_10-Increase and Decrease Intervals, Extrema & Marginal Analysis]] |

> [!tip] Intuition: the one move behind each question
> - Q1: investigate the **left piece as a function on its own** ($g$), then keep only the part with $x<2$ and attach the line $2-x$ for $x\ge2$.
> - Q2: $e^{1/x}$ as $x\to0^-$ goes to $e^{-\infty}=0$, which makes the left branch tame. The two one-sided slopes at $0$ differ ($-1$ and $-\frac18$): a corner.
> - Q2d: the product $f'\cdot f''<0$ is just "$f'$ and $f''$ have opposite signs", so you only need their signs.
> - Q3b: revenue is $x\cdot p$, so the $x$ in the price formula cancels and profit becomes a clean sum.

---

## Q1 — A piecewise rational function (35 points)

**Question.** Given

$$
f(x)=\begin{cases}\dfrac{x^2+x-2}{x-2} & x<2\\[8pt] 2-x & x\ge2\end{cases}
$$

**a.** Find the domain and the interval of continuity for $f(x)$.

**b.** Given another function $g(x)=\dfrac{x^2+x-2}{x-2}$, investigate $g(x)$ by these criteria: 1) Domain; 2) Axis intersections; 3) Asymptotes (show the relevant limits); 4) Intervals of increase and decrease; 5) Points of relative extremum; 6) Intervals of concavity (upward or downward); 7) Inflection points.

**c.** Draw the graph of the function $f(x)$.

### a. Domain and continuity

Factor the numerator: $x^2+x-2=(x-1)(x+2)$. For $x<2$ the denominator $x-2$ is never zero, and for $x\ge2$ the line $2-x$ is defined, so the **domain is all $x$**.

Each piece is continuous on its own region, so check the joint $x=2$:

1. $f(2)=2-2=0$.
2. From the right: $\lim_{x\to2^+}f(x)=\lim(2-x)=0$. From the left: $\lim_{x\to2^-}\dfrac{x^2+x-2}{x-2}=\dfrac{4}{0^-}=-\infty$ (the numerator tends to $4+2-2=4>0$, the denominator to $0$ from below).

The left limit is infinite, so $f$ is **not continuous at $x=2$**.

> [!success] Answer
> Domain: all $x$. Interval of continuity: **$x\neq2$**, that is $(-\infty,2)\cup(2,\infty)$.

> [!note] A detail (mine)
> At $x=2$ the function is still continuous **from the right** ($0=f(2)$), but it is not continuous from the left, so it is not continuous at the point.

### b. Investigating $g(x)=\dfrac{x^2+x-2}{x-2}$

**1. Domain.** $x\neq2$.

**2. Axis intersections.** $g(0)=\dfrac{-2}{-2}=1$, so $(0,1)$. $g(x)=0$ when $(x-1)(x+2)=0$: $x=1$ or $x=-2$. The points are **$(-2,0)$, $(1,0)$ and $(0,1)$**.

**3. Asymptotes.**

- **[[Horizontal Asymptote]]: none.** Factor $x^2$ from the top and $x$ from the bottom:

$$
\lim_{x\to\pm\infty}\frac{x^2\big(1+\frac1x-\frac2{x^2}\big)}{x\big(1-\frac2x\big)}=\pm\infty .
$$

- **Vertical asymptote at $x=2$:**

$$
\lim_{x\to2^+}\frac{x^2+x-2}{x-2}=\frac{4}{0^+}=+\infty,
\qquad
\lim_{x\to2^-}\frac{x^2+x-2}{x-2}=\frac{4}{0^-}=-\infty .
$$

> [!note] Oblique asymptote (mine, the key does not state it)
> Divide: $x^2+x-2=(x-2)(x+3)+4$, so $g(x)=x+3+\dfrac{4}{x-2}$. The remainder term tends to $0$ at both ends, so the [[Oblique Asymptote]] is **$y=x+3$**. This also makes the next two steps easy to check.

**4. Increase and decrease.** Quotient rule:

$$
g'(x)=\frac{(2x+1)(x-2)-(x^2+x-2)}{(x-2)^2}=\frac{x^2-4x}{(x-2)^2}=\frac{x(x-4)}{(x-2)^2} .
$$

- $g'(x)=0$ at $x=0$ and $x=4$.
- $g'$ is undefined at $x=2$.

The denominator is positive, so the sign comes from $x(x-4)$:

| $x$ | $x<0$ | $0<x<2$ | $2<x<4$ | $x>4$ |
|---|---|---|---|---|
| $g'(x)$ | $+$ | $-$ | $-$ | $+$ |
| $g(x)$ | increasing | decreasing | decreasing | increasing |

- **Increasing** for $x<0$ and $x>4$; **decreasing** for $0<x<2$ and $2<x<4$.

**5. Relative extremum.**

- $x=0$: $+\to-$, a relative **maximum** at **$(0,1)$**.
- $x=4$: $-\to+$, a relative **minimum** at $g(4)=\dfrac{16+4-2}{2}=9$, the point **$(4,9)$**.

**6. Concavity.** From the form $g'(x)=1-4(x-2)^{-2}$:

$$
g''(x)=8(x-2)^{-3}=\frac{8}{(x-2)^3} .
$$

The key writes the same thing as $\dfrac{2\cdot4}{(x-2)^3}$ after simplifying the quotient rule. Then $g''$ is never $0$, and is undefined at $x=2$:

| $x$ | $x<2$ | $x>2$ |
|---|---|---|
| $g''(x)$ | $-$ | $+$ |
| $g(x)$ | concave down | concave up |

- **Concave down** for $x<2$; **concave up** for $x>2$.

**7. Inflection points.** $g''=0$ has no solution, and $x=2$ is outside the domain, so **no inflection points**.

### c. Graph of $f(x)$

Keep $g$ only for $x<2$: the hill with its top at $(0,1)$, crossing the axis at $(-2,0)$ and $(1,0)$, then plunging to $-\infty$ at the asymptote $x=2$. For $x\ge2$ add the straight line $y=2-x$, starting at the filled point $(2,0)$. (The minimum $(4,9)$ of $g$ is on the discarded branch $x>2$, so it does **not** appear on $f$.)

![[PP09_q1_piecewise_graph.png]]

> [!tip] Intuition
> $f$ has a gap you can see: just left of $x=2$ it dives to $-\infty$, but at $x=2$ it restarts at $0$ and slides down the line $2-x$.

---

## Q2 — A piecewise function with $e^{1/x}$ (35 points)

**Question.** Given

$$
f(x)=\begin{cases}x\left(e^{1/x}-1\right) & x<0\\[6pt] \dfrac{2}{\sqrt{x+4}}-1 & x\ge0\end{cases}
$$

**a.** Find the domain of the function.

**b.** Is the function continuous at $x=0$?

**c.** Use the definition of the derivative to find if the function is differentiable at $x=0$.

**d.** For $x>0$ show that $f'(x)\cdot f''(x)<0$.

### a. Domain

For $x<0$ the expression $e^{1/x}$ is defined ($x\ne0$ there). For $x\ge0$, $x+4\ge4>0$, so the root exists and is non-zero.

> [!success] Answer
> **Domain: all $x$.**

### b. Continuity at $x=0$

1. $f(0)=\dfrac{2}{\sqrt4}-1=0$.
2. From the right: $\lim_{x\to0^+}\Big(\dfrac{2}{\sqrt{x+4}}-1\Big)=1-1=0$.
   From the left: as $x\to0^-$, $\frac1x\to-\infty$, so $e^{1/x}\to e^{-\infty}=0$, and $x\big(e^{1/x}-1\big)\to0\cdot(0-1)=0$.
3. Both one-sided limits equal $f(0)=0$.

> [!success] Answer
> **Yes, $f$ is continuous at $x=0$.**

### c. Differentiability at $x=0$ from the definition

With $f(0)=0$, compute each one-sided slope $\dfrac{f(0+h)-f(0)}{h}$.

**Right ($h\to0^+$):**

$$
\lim_{h\to0^+}\frac{\frac{2}{\sqrt{h+4}}-1}{h}=\lim_{h\to0^+}\frac{2-\sqrt{h+4}}{h\sqrt{h+4}} .
$$

This is $\frac00$. Multiply top and bottom by the conjugate $2+\sqrt{h+4}$:

$$
\frac{4-(h+4)}{h\sqrt{h+4}\,\big(2+\sqrt{h+4}\big)}=\frac{-h}{h\sqrt{h+4}\,\big(2+\sqrt{h+4}\big)}=\frac{-1}{\sqrt{h+4}\,\big(2+\sqrt{h+4}\big)}\ \longrightarrow\ \frac{-1}{2\,(2+2)}=-\frac18 .
$$

**Left ($h\to0^-$):**

$$
\lim_{h\to0^-}\frac{h\big(e^{1/h}-1\big)-0}{h}=\lim_{h\to0^-}\big(e^{1/h}-1\big)=e^{-\infty}-1=-1 .
$$

The one-sided slopes are $-\frac18$ (right) and $-1$ (left): different.

> [!success] Answer
> **Not differentiable at $x=0$**: the function is continuous there but has a corner (left slope $-1$, right slope $-\frac18$).

### d. For $x>0$: $f'(x)\cdot f''(x)<0$

For $x>0$, $f(x)=2(x+4)^{-1/2}-1$.

$$
f'(x)=2\cdot\Big(-\frac12\Big)(x+4)^{-3/2}=-\frac{1}{\sqrt{(x+4)^3}}<0 ,
$$

$$
f''(x)=-1\cdot\Big(-\frac32\Big)(x+4)^{-5/2}=\frac{3}{2\sqrt{(x+4)^5}}>0 .
$$

For $x>0$ the expression $x+4>0$, so each root is positive: $f'$ is negative and $f''$ is positive. A negative times a positive is negative.

> [!success] Answer
> **$f'(x)\cdot f''(x)<0$ for all $x>0$**, because $f'<0$ and $f''>0$ there. ($f$ is decreasing and convex.)

---

## Q3 — Limits and marginal daily profit (30 points)

**Question.**

**a.** Find the limits:

1. $\displaystyle\lim_{x\to\infty}\left(1+\frac{1-3x}{1-2x}\right)^{-x}$
2. $\displaystyle\lim_{x\to\infty}\frac{e^{2x+1}+e^{-2x}}{e^{2x}+2e^{-2x}}$

Regardless of part a:

**b.** The price-demand equation for a given product is $p=\dfrac{500+30\sqrt[3]{(x-12)^2}}{x}$, where $p$ is the retail price for a single product (in \$) and $x$ is the daily demand. It is also known that every single product costs \$4 to produce. Find the interval of $x$ at which the **marginal daily profit** function is positive.

### a.1) A limit that looks like Euler but is not

Find where the fraction in the base goes. Divide top and bottom by $x$:

$$
\frac{1-3x}{1-2x}=\frac{x\big(\frac1x-3\big)}{x\big(\frac1x-2\big)}\ \longrightarrow\ \frac{-3}{-2}=\frac32 .
$$

So the base tends to $1+\frac32=\frac52=2.5$, **not to $1$**. It is a plain "number to a power" limit, not a $1^\infty$ form:

$$
\lim_{x\to\infty}(2.5)^{-x}=\lim_{x\to\infty}\frac{1}{2.5^{x}}=0 .
$$

> [!success] Answer
> **$0$.**

### a.2) Exponentials at infinity

Factor out the dominant term $e^{2x}$ from top and bottom ($e^{2x+1}=e\cdot e^{2x}$):

$$
\lim_{x\to\infty}\frac{e^{2x}\big[e+e^{-4x}\big]}{e^{2x}\big[1+2e^{-4x}\big]}=\frac{e+0}{1+0}=e .
$$

> [!success] Answer
> **$e$.**

### b) Where is marginal daily profit positive?

Revenue is $R(x)=x\cdot p$, so the $x$ in the denominator cancels:

$$
R(x)=500+30\sqrt[3]{(x-12)^2}=500+30(x-12)^{2/3} .
$$

Cost is $C(x)=4x$, so the daily profit is

$$
P(x)=R(x)-C(x)=500+30(x-12)^{2/3}-4x .
$$

The [[Marginal Function]] is its derivative:

$$
P'(x)=30\cdot\frac23(x-12)^{-1/3}-4=\frac{20}{\sqrt[3]{x-12}}-4=\frac{20-4\sqrt[3]{x-12}}{\sqrt[3]{x-12}} .
$$

- $P'$ is undefined at **$x=12$**.
- $P'(x)=0$: $20=4\sqrt[3]{x-12}$, so $\sqrt[3]{x-12}=5$; cube both sides: $x-12=125$, so **$x=137$**.

Sign table (the demand $x$ is positive, so $x>0$):

| $x$ | $0<x<12$ | $12<x<137$ | $x>137$ |
|---|---|---|---|
| numerator $20-4\sqrt[3]{x-12}$ | $+$ | $+$ | $-$ |
| denominator $\sqrt[3]{x-12}$ | $-$ | $+$ | $+$ |
| $P'(x)$ | $-$ | $+$ | $-$ |

> [!success] Answer
> The marginal daily profit is positive for **$12<x<137$**.

> [!tip] Intuition
> Below $x=12$ the cube-root term is falling (it is the left half of a cusp), so profit falls. Between 12 and 137 the cube-root term rises faster than the cost of \$4 per unit. After 137 it rises more slowly than \$4, so each extra unit loses money.
