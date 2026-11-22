---
title: "Cusp Function Investigation, Piecewise Differentiability, Limits & Coffee Demand (2010 Moed A)"
type: past-paper
status: worked-solution
exam: "Math I Final Exam, Moed A 2010"
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
  - piecewise-function
  - differentiability
  - limits
  - marginal-demand
  - marginal-revenue
aliases:
  - Math I Moed A 2010
  - PP03 Maths for Economists A
subject: maths-for-economists-a
in_scope: true
---

# Cusp Function Investigation, Piecewise Differentiability, Limits & Coffee Demand (2010 Moed A)

> Part of: [[Maths for Economists A]]
> **Math I Final Exam, Moed A 2010**, 3 hours, four questions (35 + 30 + 15 + 20 = 100 points), non-graphing calculator only.
> Key concepts: [[Function Investigation]], [[Relative Extremum]], [[Concavity]], [[Continuity]], [[Differentiability]], [[Tangent Line]], [[Chain Rule]], [[Euler Limit]]
> Builds on: [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]], [[Lec_08-Chain Rule, Exponential Derivatives and Integrals]], [[Lec_09-Marginal Functions and Tangent Lines of Composites]]
> Practice: [[PS_10-Increase and Decrease Intervals, Extrema & Marginal Analysis]], [[PS_09-Piecewise Differentiability, Marginal Functions & Inequalities]], [[PS_07-Derivative Definition, Differentiability and Differentiation Rules]], [[PS_06-Exponential Limits, Euler Limits, Derivative Definition and Logarithms]]

> [!info] Source and provenance
> Answers follow **the key (author unclear)**, a handwritten solution of about four pages, unsigned and dated early January 2010, so it is not labelled official. Its working is terse, so the steps below fill the gaps without changing any answer.
> **Numbering.** Q1 has parts **a** and **c** only; there is no part b on the paper. The key answers the parts that are printed.

> [!success] AI-solved questions
> **None.** Every printed part has an answer in the key. Callouts marked `[!tip] Extra` or `[!warning]` are my additions or checks; they never replace a key answer.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | Investigation of a cube-root function with a **cusp**; a derivative of $g$ defined through $g(2x)=f(x)$ | [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[Lec_09-Marginal Functions and Tangent Lines of Composites]] |
| Q2 | Piecewise function: domain after simplifying, continuity with a parameter, differentiability by the definition, and a limit of the form $(\cdot)^{1/x}$ | [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]] |
| Q3 | Two limits: a conjugate at $-\infty$ and a rational limit with a hole | [[Lec_05-Infinite Limits]], [[Lec_04-Limits and Continuity]] |
| Q4 | Marginal demand, its direction, and a price for a given marginal revenue | [[Lec_09-Marginal Functions and Tangent Lines of Composites]], [[PS_10-Increase and Decrease Intervals, Extrema & Marginal Analysis]] |

> [!tip] Intuition: the one move behind each question
> - Q1: a cube root of a square, $\sqrt[3]{(x-1)^2}$, gives a **sharp point** at $x=1$ where the slope blows up. The derivative is undefined there, but the point is still a relative extremum.
> - Q2: differentiability needs the two one-sided slopes to match; a square-root term makes the right slope infinite.
> - Q4: marginal demand is the slope of the demand curve; its sign says "more price, less quantity", its derivative says how that response changes.

---

## Q1 — Investigate $f(x)=x-1-3\sqrt[3]{(x-1)^2}$ (35 points)

**Question.** Let $f(x)=x-1-3\cdot\sqrt[3]{(x-1)^2}$.

- a. Investigate the function by these criteria: Domain; Axis intersections; Asymptotes (use limits in your calculations); Intervals of increase and decrease; Points of relative extremum; Intervals of concavity (upward or downward); Inflection points. Draw the function's graph.
- c. Let $g(2x)=f(x)$, find $g'(4)$.

### a. Investigation

Write the root as a power: $f(x)=(x-1)-3(x-1)^{2/3}$.

**Domain.** A cube root is defined for every real number, so the domain is **all $x$**.

**Axis intersections.**

- $y$-axis: $f(0)=-1-3\cdot 1=-4$, so $(0,-4)$.
- $x$-axis: set $f(x)=0$, i.e. $(x-1)=3(x-1)^{2/3}$. Either $x-1=0$, giving $x=1$, or divide by $(x-1)^{2/3}$ to get $(x-1)^{1/3}=3$, so $x-1=27$ and $x=28$. Intercepts $(1,0)$ and $(28,0)$.

**Asymptotes.** No vertical asymptote since $f$ is continuous for all $x$. For the horizontal ones:

$$
\lim_{x\to\infty}\left(x-1-3(x-1)^{2/3}\right)=\lim_{x\to\infty}(x-1)^{2/3}\left((x-1)^{1/3}-3\right)=\infty,
$$

$$
\lim_{x\to-\infty}\left(x-1-3(x-1)^{2/3}\right)=-\infty-\infty=-\infty.
$$

Neither limit is finite, so there is **no horizontal asymptote**. (The function does not follow a line either: the root term grows like $x^{2/3}$, which is unbounded relative to any line, so no oblique asymptote.)

**Increase and decrease.**

$$
f'(x)=1-2(x-1)^{-1/3}=1-\frac{2}{\sqrt[3]{x-1}}=\frac{\sqrt[3]{x-1}-2}{\sqrt[3]{x-1}}.
$$

Critical points are where $f'=0$ or $f'$ is undefined:

- $f'$ is undefined at $x=1$ (the denominator is $0$), but $f$ is defined there, so $x=1$ is critical.
- $f'=0$ when $\sqrt[3]{x-1}=2$, i.e. $x-1=8$, so $x=9$.

Sign table (note that $\sqrt[3]{x-1}$ has the sign of $x-1$):

| Interval | $x<1$ | $1<x<9$ | $x>9$ |
|---|---|---|---|
| numerator $\sqrt[3]{x-1}-2$ | $-$ | $-$ | $+$ |
| denominator $\sqrt[3]{x-1}$ | $-$ | $+$ | $+$ |
| $f'$ | $+$ | $-$ | $+$ |
| $f$ | increasing | decreasing | increasing |

**Relative extremum.** $f'$ goes $+\to-$ at $x=1$: **relative maximum at $(1,0)$**. It goes $-\to+$ at $x=9$: **relative minimum at $(9,-4)$**, since $f(9)=8-3\cdot 4=-4$.

At $x=1$ the slope is not defined ($f'\to+\infty$ from the left and $-\infty$ from the right), so the maximum is a sharp **cusp** rather than a smooth peak.

**Concavity.**

$$
f''(x)=\frac{2}{3}(x-1)^{-4/3}=\frac{2}{3\sqrt[3]{(x-1)^4}}.
$$

The fourth power under the root is positive for every $x\neq1$, so $f''>0$ everywhere except $x=1$, where it is undefined. The function is **concave up on $x<1$ and on $x>1$** and **concave down nowhere**. Concavity does not change at $x=1$, so there is **no inflection point**.

![[PP03_q1_investigation_graph.png]]

> [!success] Answer from the key (author unclear)
> - Domain all $x$. Intercepts $(0,-4)$, $(1,0)$, $(28,0)$.
> - No vertical asymptote; no horizontal asymptote ($\pm\infty$ at both ends).
> - Critical points $x=1$ and $x=9$. Increasing for $x<1$ and $x>9$; decreasing for $1<x<9$.
> - **Relative maximum $(1,0)$**, **relative minimum $(9,-4)$**.
> - Concave up for $x<1$ and for $x>1$; concave down nowhere; **no inflection**.

### c. $g(2x)=f(x)$, find $g'(4)$

Differentiate both sides with respect to $x$, using the chain rule on $g(2x)$:

$$
2g'(2x)=f'(x)\quad\Longrightarrow\quad g'(2x)=\frac{f'(x)}{2}.
$$

We want $g'(4)$, which is $g'(2x)$ at $x=2$:

$$
g'(4)=\frac{f'(2)}{2},\qquad f'(2)=1-\frac{2}{\sqrt[3]{2-1}}=1-2=-1.
$$

> [!success] Answer from the key (author unclear)
> **$g'(4)=-\dfrac12$.**

---

## Q2 — Piecewise function with parameter $a$ (30 points)

**Question.** Given

$$
f(x)=\begin{cases}\dfrac{1-\sqrt{x}}{1-x} & x\ge 0\\[8pt] x\cdot e^{2x}+a & x<0.\end{cases}
$$

- a. Find the domain of the function.
- b. Find the value of the parameter $a$ for which the function is continuous at $x=0$.
- c. Plug the value of $a$ from part b and use the definition of the derivative to find if the function is differentiable at $x=0$ and if a tangent line exists at that point.
- d. Find $\displaystyle\lim_{x\to 0^+}\left(\frac{1}{f(x)}\right)^{1/x}$.

### a. Domain

For $x<0$ the formula $xe^{2x}+a$ is defined everywhere. For $x\ge 0$ the denominator $1-x$ is $0$ at $x=1$.

Simplify the right piece by writing $1-x=(1-\sqrt x)(1+\sqrt x)$, which cancels $1-\sqrt x$ and leaves $\dfrac{1}{1+\sqrt x}$ for $x\ge 0$, $x\neq 1$ (the cancelled point $x=1$ stays excluded from the original formula).

> [!success] Answer from the key (author unclear)
> The domain is **all $x$ except $x=1$.**

### b. Continuity at $x=0$

Right: $\displaystyle\lim_{x\to0^+}\frac{1}{1+\sqrt x}=1$. Left: $\displaystyle\lim_{x\to0^-}\left(xe^{2x}+a\right)=a$. Also $f(0)=\dfrac{1-0}{1-0}=1$. All three must agree:

> [!success] Answer from the key (author unclear)
> **$a=1$.**

### c. Differentiability at $x=0$ (with $a=1$, so $f(0)=1$)

$$
f'(0)=\lim_{h\to0}\frac{f(h)-f(0)}{h}.
$$

**From the right** ($h\to0^+$, use $f(h)=\dfrac{1}{1+\sqrt h}$ or the original form):

$$
\frac{\dfrac{1-\sqrt h}{1-h}-1}{h}=\frac{(1-\sqrt h)-(1-h)}{h(1-h)}=\frac{h-\sqrt h}{h(1-h)}=\frac{\sqrt h\left(\sqrt h-1\right)}{h(1-h)}=\frac{\sqrt h-1}{\sqrt h\,(1-h)}\ \longrightarrow\ \frac{-1}{0^+}=-\infty.
$$

**From the left** ($h\to0^-$, use $f(h)=he^{2h}+1$):

$$
\frac{he^{2h}+1-1}{h}=e^{2h}\ \longrightarrow\ 1.
$$

The one-sided slopes are $-\infty$ and $1$, so they do not match.

> [!success] Answer from the key (author unclear)
> **$f$ is not differentiable at $x=0$ and there is no tangent line there.** The left slope is the finite number $1$ and the right slope is infinite, so no single line (not even a vertical one) touches the graph on both sides.

### d. The limit $\displaystyle\lim_{x\to0^+}\left(\frac{1}{f(x)}\right)^{1/x}$

For small $x>0$ use $f(x)=\dfrac{1-\sqrt x}{1-x}$, so $\dfrac{1}{f(x)}=\dfrac{1-x}{1-\sqrt x}=1+\sqrt x$ (cancel $1-\sqrt x$ again). The limit becomes a $1^\infty$ form:

$$
\lim_{x\to0^+}\left(1+\sqrt x\right)^{1/x}=\lim_{x\to0^+}\left[\left(1+\sqrt x\right)^{1/\sqrt x}\right]^{\sqrt x/x}=\lim_{x\to0^+}\left[\left(1+\sqrt x\right)^{1/\sqrt x}\right]^{1/\sqrt x}.
$$

The inner bracket tends to $e$ and the outer exponent $\dfrac{1}{\sqrt x}\to+\infty$, so the limit is $e^{\infty}$.

> [!success] Answer from the key (author unclear)
> **$\infty$** (the limit is $e^{1/0^+}=e^{\infty}=\infty$).

> [!tip] Intuition
> $(1+\sqrt x)^{1/x}$ is $e^{\ln(1+\sqrt x)/x}$ and $\ln(1+\sqrt x)\approx\sqrt x$, so the exponent behaves like $\sqrt x/x=1/\sqrt x\to\infty$. A square root dominates a plain $x$ near $0$.

---

## Q3 — Limits (15 points)

**Question.** Find the limits: 1. $\displaystyle\lim_{x\to-\infty}\left(\sqrt{x^2+1}+x\right)$ and 2. $\displaystyle\lim_{x\to2}\left(\frac{x^2+8}{x^2-x-2}-\frac{4}{x-2}\right)$.

**1.** As $x\to-\infty$ the form is $\infty-\infty$ (since $x$ is a large negative number). Multiply by the conjugate:

$$
\left(\sqrt{x^2+1}+x\right)\cdot\frac{\sqrt{x^2+1}-x}{\sqrt{x^2+1}-x}=\frac{(x^2+1)-x^2}{\sqrt{x^2+1}-x}=\frac{1}{\sqrt{x^2+1}-x}.
$$

For $x\to-\infty$, $-x\to+\infty$ so the denominator tends to $+\infty$ and the fraction to $0$.

> [!success] Answer from the key (author unclear)
> **$0$.**

**2.** At $x=2$ both fractions blow up, so combine them. Since $x^2-x-2=(x-2)(x+1)$, the common denominator is $(x-2)(x+1)$:

$$
\frac{x^2+8-4(x+1)}{(x-2)(x+1)}=\frac{x^2-4x+4}{(x-2)(x+1)}=\frac{(x-2)^2}{(x-2)(x+1)}=\frac{x-2}{x+1}\ \longrightarrow\ \frac{0}{3}=0.
$$

> [!success] Answer from the key (author unclear)
> **$0$.**

---

## Q4 — Coffee demand (20 points)

**Question.** The demand for coffee (in tons) when the price per ton is $x$ dollars is $D(x)=100-3\sqrt[3]{x}$.

- a) Find $D'(27)$ and explain the meaning of the result.
- b) Is the marginal demand increasing or decreasing when the price per ton is increased?
- c) Find the price per ton for which the marginal revenue is 60 dollars (for a 1 dollar increase in the price).

Write $D(x)=100-3x^{1/3}$.

**a)**

$$
D'(x)=-x^{-2/3}=-\frac{1}{\sqrt[3]{x^2}},\qquad D'(27)=-\frac{1}{9}\approx-0.111.
$$

> [!success] Answer from the key (author unclear)
> $D'(27)=-\frac19\approx-0.111$. When the price is 27 dollars per ton, **raising the price by 1 dollar reduces demand by about 0.111 tons, i.e. about 111 kg**.

**b)** Marginal demand is $D'(x)$, so ask whether $D'$ rises or falls: $D''(x)=\dfrac23x^{-5/3}>0$ for $x>0$.

> [!success] Answer from the key (author unclear)
> $D''>0$, so **marginal demand is increasing** as the price rises. It stays negative but becomes less negative, so each extra dollar costs less demand than the last.

**c)** Revenue is price times quantity (here the price is the variable $x$):

$$
R(x)=x\cdot D(x)=100x-3x^{4/3},\qquad R'(x)=100-4x^{1/3}.
$$

Set $R'(x)=60$:

$$
100-4\sqrt[3]{x}=60\ \Longrightarrow\ 4\sqrt[3]{x}=40\ \Longrightarrow\ \sqrt[3]{x}=10\ \Longrightarrow\ x=1000.
$$

> [!success] Answer from the key (author unclear)
> **The price is $x=1000$ dollars per ton.**

---

## Summary of answers

| Part | Answer |
|---|---|
| Q1a | Domain all $x$; intercepts $(0,-4)$, $(1,0)$, $(28,0)$; no asymptotes; max $(1,0)$ (cusp), min $(9,-4)$; concave up everywhere except $x=1$; no inflection |
| Q1c | $g'(4)=-\tfrac12$ |
| Q2a | All $x$ except $x=1$ |
| Q2b | $a=1$ |
| Q2c | Not differentiable at $0$; no tangent line |
| Q2d | $\infty$ |
| Q3 | $0$ and $0$ |
| Q4 | $D'(27)=-\tfrac19$ (about 111 kg); marginal demand increasing; $x=1000$ dollars per ton |

## Related notes

- [[Lec_10-Increase and Decrease Intervals and Relative Extrema]]
- [[Lec_07-The Derivative, Differentiability and Rules]]
- [[Lec_09-Marginal Functions and Tangent Lines of Composites]]
- [[PS_10-Increase and Decrease Intervals, Extrema & Marginal Analysis]]
