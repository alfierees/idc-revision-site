---
title: "Cube Root Times x, Parameter Piecewise Differentiability, Absolute Value Limits & Average Profit (2013 Moed B)"
type: past-paper
status: worked-solution
exam: "Math I Final Exam, Moed B 2013"
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
  - differentiability
  - euler-limit
  - one-sided-limits
  - profit-function
  - marginal-function
aliases:
  - Maths A Moed B 2013
  - PP10 Maths A
subject: maths-for-economists-a
in_scope: true
---

# Cube Root Times x, Parameter Piecewise Differentiability, Absolute Value Limits & Average Profit (2013 Moed B)

> Part of: [[Maths for Economists A]]
> **Math I Final Exam, Moed B 2013**, 3 hours, 3 questions (40 / 35 / 25 points). Non-graphic calculator only, no other material.
> Builds on: [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]], [[Lec_11-Concavity, Inflection Points and Asymptotes]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]], [[Lec_04-Limits and Continuity]], [[Lec_09-Marginal Functions and Tangent Lines of Composites]]
> Practice: [[PS_12-Function Investigation, Asymptotes & Reading the Derivative Graph]], [[PS_11-Concavity, Inflection Points & Asymptotes]], [[PS_10-Increase and Decrease Intervals, Extrema & Marginal Analysis]], [[PS_09-Piecewise Differentiability, Marginal Functions & Inequalities]], [[PS_06-Exponential Limits, Euler Limits, Derivative Definition and Logarithms]], [[PS_04-Limits and Continuity]]

> [!info] Source
> The questions and the handwritten solution share one PDF (page 1 is the cover, questions on page 2, solution on pages 3 to 9). Answers follow **the key (author unclear)**: handwritten and unsigned. Terse working is expanded into steps.

> [!warning] Parts with no key
> None. Every part has a handwritten answer. No key answer needed changing.

> [!note] A typo in the question
> Q1a says "Investigate the function $g(x)$", but the function given is $f(x)$ and $g$ is only defined in part b. The key investigates **$f$**, so this note does too.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 (40) | [[Function Investigation]] of $f(x)=(\sqrt[3]{x}-2)\,x$ (a function that is convex everywhere), then reading properties of $g$ from $g'(x)=\lvert f(x)\rvert$ | [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[PS_12-Function Investigation, Asymptotes & Reading the Derivative Graph]] |
| Q2 (35) | A piecewise function with a parameter $a$: [[Continuity]] for every $a$, one value of $a$ for [[Differentiability]], and an [[Euler Limit]] at $-\infty$ | [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]], [[PS_09-Piecewise Differentiability, Marginal Functions & Inequalities]] |
| Q3 (25) | [[One-Sided Limit]]s with absolute values (one limit does not exist), then **average** profit with a parameter in the cost function | [[Lec_04-Limits and Continuity]], [[Lec_09-Marginal Functions and Tangent Lines of Composites]], [[PS_10-Increase and Decrease Intervals, Extrema & Marginal Analysis]] |

> [!tip] Intuition: the one move behind each question
> - Q1b: if $g'=|f|$ is **never negative**, then $g$ never decreases. And a function with a derivative everywhere is continuous.
> - Q2c: continuity is free here (both sides go to $0$), so differentiability is the only thing that fixes $a$: match the one-sided slopes, $\sqrt[3]{a}=-1$.
> - Q2d: $\frac{x}{x-1}=1+\frac{1}{x-1}$ is exactly the $(1+\text{small})^{\text{big}}$ shape of the Euler limit.
> - Q3a: an absolute value means two cases. Split into $x\to1^+$ and $x\to1^-$ and see if they agree.
> - Q3b: a relative extremum of the average profit means its derivative is $0$ at $x=20$: that is an equation for $a$.

---

## Q1 — Investigating $f(x)=(\sqrt[3]{x}-2)\cdot x$ (40 points)

**Question.** Given $f(x)=\big(\sqrt[3]{x}-2\big)\cdot x$.

**a.** Investigate the function by these criteria: 1) Domain; 2) Axis intersections; 3) Asymptotes (show the relevant limits); 4) Intervals of increase and decrease; 5) Points of relative extremum; 6) Intervals of concavity (upward or downward); 7) Inflection points; 8) Draw the graph of the function. (The question prints "$g(x)$" here, a typo for $f(x)$.)

**b.** $g(x)$ is another function, which satisfies $g'(x)=|f(x)|$. Find: 1. Interval of continuity of $g(x)$. 2. Increase and decrease intervals for $g(x)$.

### a. Investigation

Expand: $f(x)=x^{4/3}-2x$.

**1. Domain.** Cube roots exist for every real number: **all $x$**.

**2. Axis intersections.** $f(0)=0$, so the $y$-intercept is $(0,0)$. Solve $f(x)=0$:

$$
\big(\sqrt[3]{x}-2\big)\,x=0\ \Longrightarrow\ x=0\ \text{ or }\ \sqrt[3]{x}=2\ \Longrightarrow\ x=8 .
$$

The points are **$(0,0)$ and $(8,0)$**.

**3. Asymptotes.**

- **[[Vertical Asymptote]]: none**, since the function is continuous for all $x$.
- **[[Horizontal Asymptote]]: none:**

$$
\lim_{x\to\infty}\big(\sqrt[3]{x}-2\big)x=(\infty-2)\cdot\infty=\infty,
\qquad
\lim_{x\to-\infty}\big(\sqrt[3]{x}-2\big)x=(-\infty-2)\cdot(-\infty)=+\infty .
$$

> [!note] Oblique asymptote (mine, the key does not mention it)
> $f(x)$ grows like $x^{4/3}$, faster than any line, so $\frac{f(x)}{x}=\sqrt[3]{x}-2\to\pm\infty$: no [[Oblique Asymptote]] either.

**4. Increase and decrease.**

$$
f'(x)=\frac43x^{1/3}-2=\frac{4}{3}\sqrt[3]{x}-2 .
$$

$f'$ is defined for all $x$. Set it to zero:

$$
\frac43\sqrt[3]{x}=2\ \Longrightarrow\ \sqrt[3]{x}=\frac32\ \Longrightarrow\ x=\frac{27}{8}.
$$

Since $\sqrt[3]{x}$ increases with $x$, $f'$ increases too: it is negative for $x<\frac{27}{8}$ and positive for $x>\frac{27}{8}$.

| $x$ | $x<\frac{27}{8}$ | $x>\frac{27}{8}$ |
|---|---|---|
| $f'(x)$ | $-$ | $+$ |
| $f(x)$ | decreasing | increasing |

- **Decreasing** for $x<\frac{27}{8}$; **increasing** for $x>\frac{27}{8}$.

**5. Relative extremum.** $f'$ changes from $-$ to $+$ at $x=\frac{27}{8}$: a relative **minimum** at

$$
f\Big(\frac{27}{8}\Big)=\Big(\frac32-2\Big)\cdot\frac{27}{8}=-\frac12\cdot\frac{27}{8}=-\frac{27}{16},
$$

the point **$\big(\frac{27}{8},\,-\frac{27}{16}\big)$**.

**6. Concavity.**

$$
f''(x)=\frac43\cdot\frac13x^{-2/3}=\frac{4}{9\sqrt[3]{x^2}}>0 \quad(x\ne0).
$$

$f''$ is positive wherever it exists (a cube-root-squared is positive), and undefined at $x=0$. Because $f'(x)=\frac43\sqrt[3]{x}-2$ is **increasing on all of $\mathbb{R}$** (including through $x=0$), the function is concave up everywhere.

- **Concave up** for all $x$.

**7. Inflection points.** The concavity never changes: **none**.

**8. Graph.** The solid blue curve (the dashed orange curve is $|f|$, used in part b):

![[PP10_q1_f_and_abs_f.png]]

> [!tip] Intuition
> $f$ is a smooth bowl through the origin, dipping to its lowest point $\big(\frac{27}{8},-\frac{27}{16}\big)\approx(3.4,\,-1.7)$ before rising through $(8,0)$.

### b. Properties of $g$ when $g'(x)=|f(x)|$

The graph of $g'(x)=|f(x)|$ is $f$ with the part below the $x$-axis (between $x=0$ and $x=8$) flipped upward, shown as the dashed orange arch above.

1. **Continuity.** $g'(x)=|f(x)|$ exists for every $x$, so $g$ is differentiable everywhere, and a differentiable function is continuous. **$g$ is continuous on all of $\mathbb{R}$.**
2. **Increase and decrease.** An absolute value is never negative, so $g'(x)\ge0$ for all $x$. It equals $0$ only at the two isolated points $x=0$ and $x=8$, which does not stop $g$ from rising.

> [!success] Answer
> 1. $g$ is continuous for **all $x$**.
> 2. $g$ is **increasing for all $x$** (never decreasing).

---

## Q2 — A piecewise function with a parameter $a$ (35 points)

**Question.** Given

$$
f(x)=\begin{cases}\sqrt[3]{x^4+a\,x^3} & x>0\\[6pt] \dfrac{x}{x-1} & x\le 0\end{cases}
\qquad(\text{"}a\text{" is a parameter}).
$$

**a.** Find the domain of the function.

**b.** For which values of "$a$" is the function continuous at $x=0$?

**c.** Use the definition of the derivative to find the value of "$a$" for which the function is differentiable at $x=0$.

**d.** Find $\displaystyle\lim_{x\to-\infty}\big(f(x)\big)^{x}$.

### a. Domain

A cube root is defined for every real number, so the top branch is defined for all $x>0$. The bottom branch needs $x\neq1$, and $x=1$ is not in the region $x\le0$, so nothing is excluded.

> [!success] Answer
> **Domain: all $x$.**

### b. Continuity at $x=0$

1. $f(0)=\dfrac{0}{0-1}=0$.
2. From the right: $\lim_{x\to0^+}\sqrt[3]{x^4+ax^3}=\sqrt[3]{0}=0$. From the left: $\lim_{x\to0^-}\dfrac{x}{x-1}=\dfrac{0}{-1}=0$.
3. Both equal $f(0)=0$, whatever $a$ is.

> [!success] Answer
> **$f$ is continuous at $x=0$ for every value of $a$.**

### c. Differentiability at $x=0$

With $f(0)=0$:

**Right ($h\to0^+$).** Factor $h^3$ out of the root:

$$
\lim_{h\to0^+}\frac{\sqrt[3]{h^4+ah^3}-0}{h}=\lim_{h\to0^+}\frac{\sqrt[3]{h^3(h+a)}}{h}=\lim_{h\to0^+}\frac{h\sqrt[3]{h+a}}{h}=\sqrt[3]{a} .
$$

**Left ($h\to0^-$).**

$$
\lim_{h\to0^-}\frac{\frac{h}{h-1}-0}{h}=\lim_{h\to0^-}\frac{1}{h-1}=-1 .
$$

Differentiable at $0$ needs the one-sided slopes to be equal:

$$
\sqrt[3]{a}=-1\ \Longrightarrow\ a=(-1)^3=-1 .
$$

> [!success] Answer
> **$a=-1$.** It is the only value of $a$ for which $f$ is differentiable at $x=0$ (the slope there is $-1$).

### d. $\displaystyle\lim_{x\to-\infty}\big(f(x)\big)^{x}$

As $x\to-\infty$ we use the lower branch, $f(x)=\dfrac{x}{x-1}$. Write it as $1$ plus a small term:

$$
\frac{x}{x-1}=1+\frac{x-(x-1)}{x-1}=1+\frac{1}{x-1}.
$$

This is $1^{\infty}$ (the base tends to $1$, the exponent to $-\infty$), the [[Euler Limit]] shape. Rewrite with exponent $x-1$ inside:

$$
\lim_{x\to-\infty}\Big(1+\frac1{x-1}\Big)^{x}
=\lim_{x\to-\infty}\left[\Big(1+\frac{1}{x-1}\Big)^{x-1}\right]^{\frac{x}{x-1}}
=e^{\lim\frac{x}{x-1}}=e^{1}=e .
$$

The inner bracket tends to $e$ (the Euler limit also holds as $x\to-\infty$), and $\dfrac{x}{x-1}=\dfrac{1}{1-\frac1x}\to1$.

> [!success] Answer
> **$e$.**

---

## Q3 — One-sided limits and average profit (25 points)

**Question.**

**a.** Find the limits (if they exist):

1. $\displaystyle\lim_{x\to1}\left(\frac{1}{|1-x|}-\frac{2}{1-x^2}\right)$
2. $\displaystyle\lim_{x\to2}\frac{\sqrt{4x+1}-3}{|x-3|-1}$

Regardless of part a:

**b.** A company produces and sells $x$ products monthly, for the price of \$400 per unit. The company's monthly cost of production is $C(x)=4x^2+a$ ("$a$" is a parameter).

1. Express the average monthly profit function (per unit): $y=\dfrac{P(x)}{x}$. (You may use "$a$" in your answer.)
2. Find the value of "$a$" if the average monthly profit function has a relative extremum at $x=20$, and decide whether this point is a relative minimum or maximum.

### a.1) A limit with an absolute value (it does not exist)

The absolute value $|1-x|$ changes form on the two sides of $1$, so take each side separately. Note $1-x^2=(1-x)(1+x)$.

**From the right ($x\to1^+$):** $1-x<0$, so $|1-x|=-(1-x)$:

$$
\frac{1}{-(1-x)}-\frac{2}{(1-x)(1+x)}=\frac{-(1+x)-2}{(1-x)(1+x)}=\frac{-x-3}{(1-x)(1+x)} .
$$

As $x\to1^+$: the numerator tends to $-4$, and $(1-x)\to0^-$, $(1+x)\to2$. So the limit is $\dfrac{-4}{0^-\cdot2}=+\infty$.

**From the left ($x\to1^-$):** $1-x>0$, so $|1-x|=1-x$:

$$
\frac{1}{1-x}-\frac{2}{(1-x)(1+x)}=\frac{(1+x)-2}{(1-x)(1+x)}=\frac{x-1}{(1-x)(1+x)}=\frac{-1}{1+x}\ \longrightarrow\ -\frac12 .
$$

> [!success] Answer
> The one-sided limits are $+\infty$ (right) and $-\frac12$ (left). **The limit does not exist.**

### a.2) A conjugate limit with an absolute value

Near $x=2$, $x-3<0$, so $|x-3|=-(x-3)=3-x$ and the denominator is $|x-3|-1=2-x$. Both top and bottom tend to $0$ ($\frac00$). Multiply by the conjugate $\sqrt{4x+1}+3$:

$$
\frac{(4x+1)-9}{(2-x)\big(\sqrt{4x+1}+3\big)}=\frac{4x-8}{(2-x)\big(\sqrt{4x+1}+3\big)}=\frac{4(x-2)}{(2-x)\big(\sqrt{4x+1}+3\big)}=\frac{-4}{\sqrt{4x+1}+3}.
$$

At $x=2$: $\sqrt9+3=6$, so the limit is $\dfrac{-4}{6}$.

> [!success] Answer
> **$-\dfrac23$.**

### b.1) The average profit function

Revenue is price times quantity, $R(x)=400x$, so profit is $P(x)=400x-4x^2-a$. Divide by $x$:

$$
y=\frac{P(x)}{x}=\frac{400x-4x^2-a}{x}=400-4x-\frac{a}{x}.
$$

> [!success] Answer
> **$y=\dfrac{400x-4x^2-a}{x}=400-4x-\dfrac{a}{x}$.**

> [!note] About the key's first line
> The handwritten first line shows the numerator as "$x\cdot400-4x^2a$", with the minus sign before $a$ hard to read. The next line of the key, $y=400-4x-ax^{-1}$, only works with $-a$, so that is what is used here.

### b.2) The value of $a$ and the type of extremum

$$
y'=-4+\frac{a}{x^2}.
$$

$y'$ is undefined at $x=0$ (outside the relevant range, since $x>0$). A relative extremum at $x=20$ requires $y'(20)=0$:

$$
-4+\frac{a}{20^2}=0\ \Longrightarrow\ a=4\cdot400=1600 .
$$

Then $y'=-4+\dfrac{1600}{x^2}=\dfrac{-4x^2+1600}{x^2}$. Its sign is the sign of $1600-4x^2$:

| $x$ | $0<x<20$ | $x>20$ |
|---|---|---|
| $y'$ | $+$ | $-$ |
| $y$ | increasing | decreasing |

The sign goes from $+$ to $-$: a **maximum**.

> [!success] Answer
> **$a=1600$**, and $x=20$ is a relative **maximum** of the average profit.

> [!tip] A number to anchor it (mine, not in the key)
> With $a=1600$: $y(20)=400-80-\dfrac{1600}{20}=400-80-80=240$ dollars of average profit per unit.
