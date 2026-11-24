---
title: "Root Function Investigation, Absolute Value Quadratic, Tangent of a Quotient, Profit Maximum (2015 Moed A)"
type: past-paper
status: worked-solution
exam: "Math I Final Exam, 2015 (Moed A)"
semester: 1
year: 1
course: "Maths for Economists A"
instructor: Hever Schulberg
tags:
  - maths-for-economists-a
  - past-paper
  - worked-solution
  - domain
  - asymptotes
  - increase-decrease
  - concavity
  - absolute-value
  - corner-point
  - tangent-line
  - profit-maximisation
  - true-false
aliases:
  - Maths A Moed A 2015
  - PP13 Maths A
subject: maths-for-economists-a
in_scope: true
---

# Root Function Investigation, Absolute Value Quadratic, Tangent of a Quotient, Profit Maximum (2015 Moed A)

> Part of: [[Maths for Economists A]]
> **Math I Final Exam, 2015 (Moed A)**, 3 hours, 4 questions worth 30 / 25 / 25 / 20 points. Answer all, justify every claim, non-graphing calculator only, no other material.
> Builds on: [[Lec_04-Limits and Continuity]], [[Lec_05-Infinite Limits]], [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_08-Chain Rule, Exponential Derivatives and Integrals]], [[Lec_09-Marginal Functions and Tangent Lines of Composites]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[Lec_11-Concavity, Inflection Points and Asymptotes]], [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]]
> Practice: [[PS_02-Absolute Values, Business Functions and Exponential Equations]], [[PS_07-Derivative Definition, Differentiability and Differentiation Rules]], [[PS_09-Piecewise Differentiability, Marginal Functions & Inequalities]], [[PS_10-Increase and Decrease Intervals, Extrema & Marginal Analysis]], [[PS_11-Concavity, Inflection Points & Asymptotes]], [[PS_12-Function Investigation, Asymptotes & Reading the Derivative Graph]]

> [!info] Source
> Answers follow **the key (author unclear)**: a handwritten, unsigned solution, 7 pages (file `solution 2015A`). Terse working is expanded into steps. Nothing in the key is changed.

> [!warning] Parts with no key
> None. Every part has a handwritten answer. One numbering quirk: Q2 on the paper has **two parts labelled "c"**. The key answers them as c (tangent at the maximum) and d (corner points), so this note calls the second one d.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 (30) | Investigate $\dfrac{x}{x-\sqrt x}$: [[Domain]], [[Horizontal Asymptote]], [[Increasing and Decreasing Intervals]], a $\frac00$ limit at the excluded point, [[Vertical Asymptote]], [[Concavity Intervals]] read from a given $f'$ | [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[Lec_11-Concavity, Inflection Points and Asymptotes]] |
| Q2 (25) | $\left|x^{2}-x\right|$: [[Continuity]], graph by reflection, tangent at the maximum, corner points | [[Lec_02-Piecewise Functions and Business Applications]], [[Lec_07-The Derivative, Differentiability and Rules]], [[PS_02-Absolute Values, Business Functions and Exponential Equations]] |
| Q3 (25) | Tangent line to a quotient built from an unknown $f$ ([[Quotient Rule]] and [[Chain Rule]]); maximal profit from a demand equation | [[Lec_09-Marginal Functions and Tangent Lines of Composites]], [[PS_09-Piecewise Differentiability, Marginal Functions & Inequalities]], [[PS_10-Increase and Decrease Intervals, Extrema & Marginal Analysis]] |
| Q4 (20) | True or false: corner points, tangent at an extremum, $a^{x}$ at $-\infty$, number of vertical asymptotes | [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]], [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]] |

> [!tip] Intuition: the one move behind each question
> - Q1: $x-\sqrt x=\sqrt x(\sqrt x-1)$. Factoring shows both trouble spots ($x=0$ and $x=1$) at once, and one of them is only a hole-like point, not an asymptote.
> - Q2: reflect the part of the parabola that dips below the axis. The reflection creates a peak (smooth, flat tangent) and two corners.
> - Q3a: the unknown $f$ never needs a formula, only the values $f(2)$ and $f'(2)$.
> - Q3b: profit is a downward parabola in the quantity, so the vertex is the maximum.

---

## Q1 — Investigating $f(x)=\dfrac{x}{x-\sqrt{x}}$ (30 points)

**Question.** Given $f(x)=\dfrac{x}{x-\sqrt{x}}$.

a. What is the function's domain? Explain.
b. Find horizontal asymptotes (if there are any) using the appropriate limits.
c. Find increase and decrease intervals (if there are any).
d. Does $f(x)$ have a vertical asymptote at $x=0$? Answer using the appropriate limit.
e. Does $f(x)$ have a vertical asymptote at a different value of $x$? Answer using the appropriate limits.

It is also given that the derivative $f'(x)$ **decreases** on the interval $\frac19<x<1$ and **increases** on the intervals $0<x<\frac19$ and $x>1$.

f. Find concavity intervals for $f(x)$.

### a. Domain

> [!success] Answer
>
> $$
> x>0,\quad x\neq1
> $$

Two conditions:

- The square root needs $x\ge0$.
- The denominator must not be zero: $x-\sqrt x=\sqrt x\,(\sqrt x-1)=0$ gives $\sqrt x=0$ (so $x=0$) or $\sqrt x=1$ (so $x=1$). Both are excluded.

Together: $x\ge0$ with $x\neq0$ and $x\neq1$, i.e. $x>0,\ x\neq1$.

### b. Horizontal asymptote

> [!success] Answer
> **$y=1$** (as $x\to\infty$). There is no asymptote on the left, because the domain has no negative values.

Divide numerator and denominator by $x$ (factor $x$ out of the denominator):

$$
\lim_{x\to\infty}\frac{x}{x-\sqrt x}=\lim_{x\to\infty}\frac{x}{x\left(1-\frac{1}{\sqrt x}\right)}=\lim_{x\to\infty}\frac{1}{1-\frac1{\sqrt x}}=\frac{1}{1-0}=1 .
$$

### c. Increase and decrease intervals

> [!success] Answer
> $f$ is **decreasing** on $(0,1)$ and on $(1,\infty)$. It is never increasing.

Differentiate with the [[Quotient Rule]], using $(\sqrt x)'=\tfrac12x^{-1/2}$:

$$
f'(x)=\frac{1\cdot\left(x-\sqrt x\right)-x\left(1-\tfrac12x^{-1/2}\right)}{\left(x-\sqrt x\right)^{2}} .
$$

Expand the numerator, noting $x\cdot\tfrac12x^{-1/2}=\tfrac12\sqrt x$:

$$
x-\sqrt x-x+\tfrac12\sqrt x=-\tfrac12\sqrt x .
$$

$$
f'(x)=\frac{-\tfrac12\sqrt x}{\left(x-\sqrt x\right)^{2}} .
$$

On the domain, $\sqrt x>0$ and the square in the denominator is positive, so $f'(x)<0$ everywhere. Hence $f$ is decreasing on every interval of its domain.

> [!tip] Intuition
> State it as two intervals, $(0,1)$ and $(1,\infty)$. $x=1$ is not in the domain (it is a vertical asymptote, see part e), so you cannot say "decreasing on $(0,\infty)$".

### d. Vertical asymptote at $x=0$?

> [!success] Answer
> **No.** The limit as $x\to0^{+}$ is the finite number $0$.

Only the right-hand limit exists (the domain starts at $0$). Direct substitution gives $\frac00$. The key shows two ways to resolve it.

**Method I, conjugate.** Multiply top and bottom by $x+\sqrt x$:

$$
\lim_{x\to0^{+}}\frac{x}{x-\sqrt x}\cdot\frac{x+\sqrt x}{x+\sqrt x}
=\lim_{x\to0^{+}}\frac{x\left(x+\sqrt x\right)}{x^{2}-x}
=\lim_{x\to0^{+}}\frac{x\left(x+\sqrt x\right)}{x\,(x-1)}
=\lim_{x\to0^{+}}\frac{x+\sqrt x}{x-1}=\frac{0+0}{0-1}=0 .
$$

**Method II, factor.** Write $x=\sqrt x\cdot\sqrt x$ and the denominator as $\sqrt x\,(\sqrt x-1)$, then cancel $\sqrt x$:

$$
\lim_{x\to0^{+}}\frac{\sqrt x}{\sqrt x-1}=\frac{0}{0-1}=0 .
$$

A vertical asymptote needs an **infinite** limit. The limit is $0$, so there is **no vertical asymptote at $x=0$**.

### e. Vertical asymptote at another $x$

> [!success] Answer
> **Yes, $x=1$.**

The only other point excluded from the domain is $x=1$. At $x=1$ the numerator is $1$ and the denominator is $0$, so the limit is of the form $\frac{1}{0}=\pm\infty$: that alone shows an infinite limit, hence a vertical asymptote.

To see the sides, cancel $\sqrt x$ as in method II: $f(x)=\dfrac{\sqrt x}{\sqrt x-1}$ near $1$.

- $x\to1^{+}$: $\sqrt x-1\to0^{+}$, so $\dfrac{1}{0^{+}}=+\infty$.
- $x\to1^{-}$: $\sqrt x-1\to0^{-}$, so $\dfrac{1}{0^{-}}=-\infty$.

So **$x=1$ is a vertical asymptote**.

### f. Concavity intervals

> [!success] Answer
> - **Concave up ($\cup$):** $0<x<\frac19$ and $x>1$.
> - **Concave down ($\cap$):** $\frac19<x<1$.

A function is concave up where $f'$ is **increasing** and concave down where $f'$ is **decreasing**. The question hands us exactly that information about $f'$, so we read the answer off directly:

| Interval | $f'$ is | So $f$ is |
|---|---|---|
| $0<x<\frac19$ | increasing | concave up $\cup$ |
| $\frac19<x<1$ | decreasing | concave down $\cap$ |
| $x>1$ | increasing | concave up $\cup$ |

> [!tip] Intuition
> The concavity changes sign at $x=\frac19$, which is in the domain, so $x=\frac19$ is an [[Inflection Point]], with $f(\tfrac19)=\dfrac{1/9}{1/9-1/3}=-\tfrac12$. At $x=1$ the concavity also changes sign, but $1$ is not in the domain, so it is not an inflection point. This remark goes beyond what the question asked and is my addition.

---

## Q2 — The function $f(x)=\left|x^{2}-x\right|$ (25 points)

**Question.** Given $f(x)=\left|x^{2}-x\right|$.

a. Find the function's interval of continuity. Explain.
b. Draw the graph of the function.
c. Find the equation of the tangent line to the graph of $f(x)$ at its maximum point.
d. Does $f(x)$ have corner points? If so, find them and explain. (Printed as a second "c" on the paper.)

### a. Interval of continuity

> [!success] Answer
> **All $x$.**

The key: a function that is not written as a piecewise ("compound") function is continuous at every point of its domain. This one is defined for all $x$ ($x^{2}-x$ is a polynomial and $|\cdot|$ is defined everywhere), so it is continuous for all $x$.

### b. The graph

Start from the parabola $y=x^{2}-x=x(x-1)$. It crosses the $x$-axis at $x=0$ and $x=1$ and dips below the axis in between, with its vertex at $\left(\tfrac12,-\tfrac14\right)$. Taking the absolute value **reflects the negative part** (the dip between $0$ and $1$) over the $x$-axis. The vertex becomes a peak at $\left(\tfrac12,\tfrac14\right)$, and the two ends outside $[0,1]$ stay as they were.

![[PP13_q2_abs_x2_minus_x.png]]

As a piecewise function (the key's "if you really want to work hard"):

$$
f(x)=\begin{cases}x^{2}-x & x\le0\ \text{ or }\ x\ge1\\[4pt] -x^{2}+x & 0<x<1\end{cases}
$$

### c. Tangent line at the maximum point

> [!success] Answer
>
> $$
> y=\tfrac14
> $$

The (relative) maximum is the peak $\left(\tfrac12,\tfrac14\right)$. The function is smooth there, so $f'\left(\tfrac12\right)=0$ and the tangent is horizontal through that point: $y=\tfrac14$. (Check on the middle piece: $f'(x)=-2x+1$, which is $0$ at $x=\tfrac12$.)

### d. Corner points

> [!success] Answer
> **Yes: $x=0$ and $x=1$.**

The reflection created two corner points at the places where the parabola met the $x$-axis. To show it, find the derivative of each piece:

$$
f'(x)=\begin{cases}2x-1 & x<0\ \text{ or }\ x>1\\[4pt] -2x+1 & 0<x<1\end{cases}
$$

Compare the one-sided slopes at each seam:

| Point | slope from the left | slope from the right |
|---|---|---|
| $x=0$ | $2\cdot0-1=-1$ | $-2\cdot0+1=1$ |
| $x=1$ | $-2\cdot1+1=-1$ | $2\cdot1-1=1$ |

The one-sided slopes are different finite numbers at both points, so each is a **corner point** (the function is continuous but not differentiable there).

---

## Q3 — Tangent of a quotient and maximal profit (25 points)

There is no connection between the two parts.

### a. Tangent line to $g(x)=\dfrac{[f(x)]^{3}}{x}$ at $x=2$

**Question.** Given $f(x)$ with $f'(2)=-1$ and $f(2)=1$, find the equation of the tangent line to the graph of $g(x)=\dfrac{[f(x)]^{3}}{x}$ at $x=2$.

> [!success] Answer
>
> $$
> y=-\tfrac74x+4
> $$

A tangent line needs a point and a slope.

**Slope.** Use the [[Quotient Rule]], with the [[Chain Rule]] on $[f(x)]^{3}$ (its derivative is $3[f(x)]^{2}f'(x)$):

$$
g'(x)=\frac{3[f(x)]^{2}f'(x)\cdot x-[f(x)]^{3}\cdot1}{x^{2}} .
$$

Substitute $x=2$, $f(2)=1$, $f'(2)=-1$:

$$
g'(2)=\frac{3\cdot1^{2}\cdot(-1)\cdot2-1^{3}}{2^{2}}=\frac{-6-1}{4}=-\frac74 .
$$

**Point.**

$$
g(2)=\frac{[f(2)]^{3}}{2}=\frac{1^{3}}{2}=\frac12 .
$$

**Line.** $y-\tfrac12=-\tfrac74\,(x-2)$, so

$$
y=-\tfrac74x+\tfrac72+\tfrac12=-\tfrac74x+4 .
$$

> [!note] The key's remark
> The key points out that this question comes from Exercise 11 of the course. The closest practice in this vault on tangent lines of composites is [[PS_09-Piecewise Differentiability, Marginal Functions & Inequalities]] (Q4) and [[Lec_09-Marginal Functions and Tangent Lines of Composites]].

### b. Maximal daily profit

**Question.** A factory's price demand equation is $x=-20p+1100$, where $x$ is the daily demand and $p$ the price per unit in dollars. The cost of producing each unit is $\$25$. Find the maximal daily profit possible.

> [!success] Answer
>
> $$
> \text{maximal daily profit}=\$4500\quad\text{(at }x=300\text{ units)}
> $$

**Profit as a function of quantity.** Solve the demand equation for the price: $p=\dfrac{1100-x}{20}$. Profit is revenue minus cost, $P(x)=x\cdot p-25x$:

$$
P(x)=x\cdot\frac{1100-x}{20}-25x=55x-\frac{x^{2}}{20}-25x=-\frac{1}{20}x^{2}+30x .
$$

This is a parabola opening **downward** ($-\frac1{20}<0$), so its vertex is the maximum.

**Maximise.**

$$
P'(x)=-\frac{1}{20}\cdot2x+30=-\frac{x}{10}+30=0\quad\Longrightarrow\quad x=300 .
$$

**Maximal profit.**

$$
P(300)=-\frac{300^{2}}{20}+30\cdot300=-4500+9000=4500 .
$$

> [!tip] Intuition
> **Check (mine, not the key's).** At $x=300$ the price is $p=\frac{1100-300}{20}=40$, so the margin is $40-25=15$ dollars per unit. Profit equals margin times quantity: $15\cdot300=4500$, matching the answer.

---

## Q4 — True or false (20 points)

**Question.** Answer true or false and explain briefly (using words, mathematics, a graph or an example).

### a. "Every corner point is also a relative extreme point."

> [!success] Verdict
> **False.**

The key: the slopes on the two sides of a corner can be different, but they need not have **different signs**. A relative extremum needs the function to switch from increasing to decreasing (or the reverse). If both one-sided slopes have the same sign, the function keeps going the same direction through the corner.

> [!tip] Intuition
> Example: $f(x)=x$ for $x<0$ and $f(x)=2x$ for $x\ge0$. At $x=0$ the slopes are $1$ and $2$ (a corner), but $f$ is increasing on both sides, so there is no extremum. Compare $|x|$: slopes $-1$ and $1$ have opposite signs, so there the corner is a minimum.

### b. "A tangent line at a relative extreme point at which a function is differentiable is always a horizontal tangent line."

> [!success] Verdict
> **True.**

If $f$ is differentiable at a relative extreme point, the derivative there must equal $0$. A tangent with slope $0$ is horizontal.

### c. "If $a$ is a constant with $0<a<1$, then $\displaystyle\lim_{x\to-\infty}a^{x}=\infty$."

> [!success] Verdict
> **True.**

$$
\lim_{x\to-\infty}a^{x}=a^{-\infty}=\frac{1}{a^{\infty}}=\frac{1}{0^{+}}=\infty .
$$

For $0<a<1$, powers of $a$ shrink toward $0$ (staying positive) as the exponent goes to $+\infty$, so the reciprocal blows up. For instance $\left(\tfrac12\right)^{x}=2^{-x}\to\infty$ as $x\to-\infty$.

### d. "A function could have more than two vertical asymptotes."

> [!success] Verdict
> **True.**

The key's example:

$$
y=\frac{1}{(x-1)(x-2)(x-3)}
$$

has three vertical asymptotes, $x=1$, $x=2$ and $x=3$: at each, the numerator is $1$ and the denominator tends to $0$, so the function is infinite.
