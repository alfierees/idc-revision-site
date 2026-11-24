---
title: "Rational Function Sketch, Piecewise Differentiability with a Parameter, Limits & Tangent Line (2010 Moed B)"
type: past-paper
status: worked-solution
exam: "Math I Final Exam, Moed B 2010"
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
  - extrema
  - limits
  - euler-limit
  - tangent-line
  - quotient-rule
aliases:
  - Math I Moed B 2010
  - PP04 Maths for Economists A
subject: maths-for-economists-a
in_scope: true
---

# Rational Function Sketch, Piecewise Differentiability with a Parameter, Limits & Tangent Line (2010 Moed B)

> Part of: [[Maths for Economists A]]
> **Math I Final Exam, Moed B 2010**, 3 hours, four questions (35 + 30 + 20 + 15 = 100 points), non-graphing calculator only.
> Key concepts: [[Function Investigation]], [[Vertical Asymptote]], [[Oblique Asymptote]], [[Piecewise Function]], [[Differentiability]], [[Tangent Line]], [[Relative Extremum]], [[Quotient Rule]]
> Builds on: [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]], [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[Lec_11-Concavity, Inflection Points and Asymptotes]], [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]], [[Lec_09-Marginal Functions and Tangent Lines of Composites]]
> Practice: [[PS_12-Function Investigation, Asymptotes & Reading the Derivative Graph]], [[PS_09-Piecewise Differentiability, Marginal Functions & Inequalities]], [[PS_10-Increase and Decrease Intervals, Extrema & Marginal Analysis]], [[PS_08-Chain Rule, Exponential and Log Derivatives and Integrals]]

> [!info] Source and provenance
> Answers follow **the key (author unclear)**, a handwritten solution of about three pages, unsigned and dated January 2010, so it is not labelled official. Its working is terse, so the steps below fill the gaps without changing any answer.
> **Numbering.** Q1 has parts **a** and **c** only; there is no part b on the paper. The key answers the printed parts.

> [!success] AI-solved questions
> **None.** Every printed part has an answer in the key. Callouts marked `[!tip] Extra` or `[!warning]` are my additions or checks; they never replace a key answer.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | Investigate $\dfrac{x^2}{x+1}$, then use it to sketch a **piecewise** function glued to $\lvert 4-x\rvert$ | [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]], [[Lec_11-Concavity, Inflection Points and Asymptotes]] |
| Q2 | Piecewise function with parameter $k$: continuity, differentiability and tangent line, derivative, extrema | [[Lec_07-The Derivative, Differentiability and Rules]], [[PS_09-Piecewise Differentiability, Marginal Functions & Inequalities]] |
| Q3 | Euler limit at $-\infty$, a conjugate limit, and a ratio of exponentials | [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]], [[Lec_05-Infinite Limits]] |
| Q4 | Quotient rule with composed values, then the tangent line | [[Lec_09-Marginal Functions and Tangent Lines of Composites]] |

> [!tip] Intuition: the one move behind each question
> - Q1c: the sketch is just the pieces of part a, cut at $x=1$, with the new piece $\lvert4-x\rvert$ (a "V" with its tip at $x=4$) on the right.
> - Q2: differentiable at the join means the two one-sided slopes are equal, which pins down $k$.
> - Q4: you never need $f$ itself, only $f(1)=3$ and $f'(1)=2$ at the single point $x=1$.

---

## Q1 — Investigate $f(x)=\dfrac{x^2}{x+1}$ and sketch a piecewise function (35 points)

**Question.** Let $f(x)=\dfrac{x^2}{x+1}$.

- a. Investigate the function by these criteria: Domain; Axis intersections; Asymptotes (use limits in your calculations); Intervals of increase and decrease; Points of relative extremum; Intervals of concavity (upward or downward); Inflection points.
- c. Use part a to sketch the graph of the function

$$
y=\begin{cases}\dfrac{x^2}{x+1} & x\le 1\\[8pt] \lvert 4-x\rvert & x>1.\end{cases}
$$

### a. Investigation

**Domain.** The denominator vanishes at $x=-1$: **$x\neq-1$**.

**Axis intersections.** $f(x)=0$ only when $x^2=0$, so the single intersection is **$(0,0)$** (it is both the $x$- and $y$-intercept).

**Asymptotes.**

Vertical, at the excluded point:

$$
\lim_{x\to-1}\frac{x^2}{x+1}=\frac{1}{0}=\pm\infty,
$$

so **$x=-1$ is a vertical asymptote** (the limit is $+\infty$ from the right of $-1$ and $-\infty$ from the left).

Horizontal:

$$
\lim_{x\to\pm\infty}\frac{x^2}{x(1+\frac1x)}=\lim_{x\to\pm\infty}\frac{x}{1+\frac1x}=\frac{\pm\infty}{1+0}=\pm\infty,
$$

so there is **no horizontal asymptote**.

> [!tip] Extra: the oblique asymptote the key does not list
> Polynomial division gives $\dfrac{x^2}{x+1}=x-1+\dfrac{1}{x+1}$, so the graph approaches the line $y=x-1$ at both ends. The key lists only the vertical and horizontal cases, but [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]] covers oblique asymptotes, so $y=x-1$ is worth adding to a complete answer.

**Increase and decrease.** Quotient rule:

$$
f'(x)=\frac{2x(x+1)-x^2}{(x+1)^2}=\frac{x^2+2x}{(x+1)^2}=\frac{x(x+2)}{(x+1)^2}.
$$

The denominator is positive for $x\neq-1$, so the sign comes from $x(x+2)$. The critical points are $x=0$ and $x=-2$ (the point $x=-1$ is not in the domain).

| Interval | $x<-2$ | $-2<x<-1$ | $-1<x<0$ | $x>0$ |
|---|---|---|---|---|
| sign of $f'$ | $+$ | $-$ | $-$ | $+$ |
| $f$ | increasing | decreasing | decreasing | increasing |

**Relative extremum.** $f'$ goes $+\to-$ at $x=-2$: **relative maximum at $(-2,-4)$** since $f(-2)=\frac{4}{-1}=-4$. It goes $-\to+$ at $x=0$: **relative minimum at $(0,0)$**.

**Concavity.**

$$
f''(x)=\frac{(2x+2)(x+1)^2-2(x+1)(x^2+2x)}{(x+1)^4}=\frac{2(x+1)\left[(x+1)^2-x^2-2x\right]}{(x+1)^4}=\frac{2}{(x+1)^3}.
$$

So $f''<0$ for $x<-1$ (concave down) and $f''>0$ for $x>-1$ (concave up). The change happens at $x=-1$, which is **not in the domain**, so there is **no inflection point**.

> [!success] Answer from the key (author unclear)
> - Domain $x\neq-1$; the only intersection is $(0,0)$.
> - Vertical asymptote $x=-1$; **no horizontal asymptote**.
> - Increasing for $x<-2$ and $x>0$; decreasing for $-2<x<-1$ and $-1<x<0$.
> - **Relative maximum $(-2,-4)$, relative minimum $(0,0)$.**
> - Concave down for $x<-1$; concave up for $x>-1$; **no inflection**.

### c. Sketch of the piecewise function

Take the part-a graph for $x\le1$ and replace everything to the right of $x=1$ with $\lvert4-x\rvert$.

- **Left piece, $x\le1$.** The graph of $\frac{x^2}{x+1}$ with its asymptote $x=-1$, the maximum $(-2,-4)$, the origin $(0,0)$ as a minimum, and the end point at $x=1$: $f(1)=\frac12$. This end point is **included** (closed dot), because $x\le1$.
- **Right piece, $x>1$.** $y=\lvert4-x\rvert=4-x$ for $1<x<4$ and $x-4$ for $x\ge4$. It is a V with tip $(4,0)$. At $x\to1^+$ the value is $\lvert4-1\rvert=3$, and this end point is **excluded** (hollow dot at $(1,3)$).
- The two pieces **do not join** at $x=1$: the graph jumps from $\frac12$ (closed) up to $3$ (hollow).

![[PP04_q1_piecewise_sketch.png]]

> [!success] Answer from the key (author unclear)
> The key's sketch shows exactly these features: the asymptote $x=-1$, the maximum $(-2,-4)$, the minimum $(0,0)$, a filled dot at $(1,\frac12)$, a **hollow dot at $(1,3)$**, a straight descent to $(4,0)$, and a rising line after $x=4$.

---

## Q2 — Piecewise function with parameter $k$ (30 points)

**Question.** Given

$$
f(x)=\begin{cases}6\sqrt[3]{x^4}-x & x\ge0\\[4pt] x^3-kx & x<0.\end{cases}
$$

- a. Find the domain and the interval of continuity of the function.
- b. Is there a value of the parameter $k$ for which the function is differentiable at $x=0$? Is there a tangent line at that point then?

Plug $k=1$ and:

- c. Find $f'(x)$.
- d. Find relative extremum for $f(x)$.

### a. Domain and continuity

Both pieces are defined for every real number (a cube root accepts any input), so the domain is **all $x$**.

Continuity needs checking only at the join $x=0$: $f(0)=6\cdot0-0=0$, the right limit is $6\sqrt[3]{0}-0=0$, and the left limit is $0^3-k\cdot0=0$. All three agree for **every** value of $k$.

> [!success] Answer from the key (author unclear)
> Domain: all $x$. The function is **continuous for all $x$** (whatever $k$ is).

### b. Differentiability at $x=0$

Use the definition with $f(0)=0$:

$$
f'(0)=\lim_{h\to0}\frac{f(h)}{h}.
$$

Right: $\displaystyle\lim_{h\to0^+}\frac{6h^{4/3}-h}{h}=\lim_{h\to0^+}\left(6h^{1/3}-1\right)=-1$.

Left: $\displaystyle\lim_{h\to0^-}\frac{h^3-kh}{h}=\lim_{h\to0^-}\left(h^2-k\right)=-k$.

The one-sided derivatives are equal exactly when $-k=-1$.

> [!success] Answer from the key (author unclear)
> **Yes: $k=1$.** For $k=1$ the function is differentiable at $x=0$ with $f'(0)=-1$, and **a tangent line exists** (slope $-1$ through $(0,0)$, that is $y=-x$; the line equation itself is my addition).

### c. Find $f'(x)$ for $k=1$

For $x>0$: $f(x)=6x^{4/3}-x$, so $f'(x)=8x^{1/3}-1$.
For $x<0$: $f(x)=x^3-x$, so $f'(x)=3x^2-1$.
At $x=0$: $f'(0)=-1$ (part b).

> [!success] Answer from the key (author unclear)
> - $f'(x)=8\sqrt[3]{x}-1$ for $x>0$
> - $f'(0)=-1$
> - $f'(x)=3x^2-1$ for $x<0$

### d. Relative extremum (for $k=1$)

Critical points come from $f'=0$ on each side (and $x=0$ gives $-1\neq0$, so it is not critical).

- $x<0$: $3x^2-1=0$, so $x^2=\frac13$ and (negative root only) $x=-\sqrt{\tfrac13}\approx-0.577$.
- $x>0$: $8\sqrt[3]{x}-1=0$, so $\sqrt[3]{x}=\frac18$ and $x=\frac{1}{512}$.

Sign of $f'$:

| Interval | $x<-\sqrt{1/3}$ | $-\sqrt{1/3}<x<\frac{1}{512}$ | $x>\frac{1}{512}$ |
|---|---|---|---|
| sign of $f'$ | $+$ ($3x^2>1$) | $-$ | $+$ |
| $f$ | increasing | decreasing | increasing |

On the middle interval $f'<0$ on both sides of $0$ (it equals $3x^2-1<0$ for $x<0$ close to $0$, then $-1$ at $0$, then $8\sqrt[3]{x}-1<0$ for $x<\frac1{512}$).

Values: at $x=-\sqrt{1/3}$, $f=x^3-x=x(x^2-1)=-\frac{1}{\sqrt3}\left(\frac13-1\right)=\frac{2}{3\sqrt3}=\frac{2\sqrt3}{9}$. At $x=\frac{1}{512}$, $\sqrt[3]{x}=\frac18$ so $x^{4/3}=\frac{1}{4096}$ and $f=\frac{6}{4096}-\frac{1}{512}=\frac{3}{2048}-\frac{4}{2048}=-\frac{1}{2048}$.

> [!success] Answer from the key (author unclear)
> **Relative maximum at $\left(-\sqrt{\tfrac13},\ \tfrac{2\sqrt3}{9}\right)$** and **relative minimum at $\left(\tfrac{1}{512},\ -\tfrac{1}{2048}\right)$.**

---

## Q3 — Limits (20 points)

**Question.** Find the limits:

1. $\displaystyle\lim_{x\to-\infty}\left(\frac{x-3}{x+1}\right)^{x}$
2. $\displaystyle\lim_{x\to1}\frac{\sqrt{x^2+3x}-x-1}{x^2+x-2}$
3. $\displaystyle\lim_{x\to\infty}\frac{4e^{x}-e^{-x}}{4e^{-x}-e^{x}}$

**1.** A $1^{\infty}$ form. Write the base as $1+\dfrac{-4}{x+1}$ since $\dfrac{x-3}{x+1}=1-\dfrac{4}{x+1}$:

$$
\left(1-\frac{4}{x+1}\right)^{x}=\left[\left(1+\frac{-4}{x+1}\right)^{\frac{x+1}{-4}}\right]^{\frac{-4x}{x+1}}\longrightarrow e^{-4},
$$

because the inner bracket tends to $e$ (the exponent $\frac{x+1}{-4}\to+\infty$ as $x\to-\infty$) and $\frac{-4x}{x+1}\to-4$.

> [!success] Answer from the key (author unclear)
> **$e^{-4}$.** (The key's handwriting shows the same work, and the value is the same as $x\to+\infty$.)

**2.** Both top and bottom are $0$ at $x=1$. Multiply by the conjugate of the numerator and note that $(x^2+3x)-(x+1)^2=x-1$:

$$
\frac{\sqrt{x^2+3x}-(x+1)}{x^2+x-2}\cdot\frac{\sqrt{x^2+3x}+(x+1)}{\sqrt{x^2+3x}+(x+1)}=\frac{x-1}{(x-1)(x+2)\left(\sqrt{x^2+3x}+x+1\right)}.
$$

Cancel $x-1$ and substitute $x=1$:

$$
\frac{1}{(1+2)\left(\sqrt4+1+1\right)}=\frac{1}{3\cdot4}=\frac1{12}.
$$

> [!success] Answer from the key (author unclear)
> **$\dfrac{1}{12}$.**

**3.** Divide top and bottom by $e^{x}$ (the dominant term at $+\infty$):

$$
\frac{4-e^{-2x}}{4e^{-2x}-1}\longrightarrow\frac{4-0}{0-1}=-4.
$$

> [!success] Answer from the key (author unclear)
> **$-4$.**

---

## Q4 — Tangent line of a quotient with a composed function (15 points)

**Question.** A function $f(x)$ satisfies $f'(1)=2$, $f(1)=3$. Find the equation of the tangent line to $g(x)=\dfrac{f(x^2)}{\sqrt{1+f(x)}}$ at $x=1$.

The tangent line is $y-g(1)=g'(1)(x-1)$, so we need $g(1)$ and $g'(1)$.

**The value.**

$$
g(1)=\frac{f(1)}{\sqrt{1+f(1)}}=\frac{3}{\sqrt4}=\frac32.
$$

**The derivative.** Quotient rule, with the chain rule on $f(x^2)$ (its derivative is $f'(x^2)\cdot2x$) and on the root (its derivative is $\dfrac{f'(x)}{2\sqrt{1+f(x)}}$):

$$
g'(x)=\frac{f'(x^2)\cdot2x\cdot\sqrt{1+f(x)}-f(x^2)\cdot\dfrac{f'(x)}{2\sqrt{1+f(x)}}}{1+f(x)}.
$$

At $x=1$ (so $x^2=1$ as well):

$$
g'(1)=\frac{2\cdot2\cdot\sqrt4-3\cdot\dfrac{2}{2\sqrt4}}{1+3}=\frac{8-\dfrac32}{4}=\frac{6.5}{4}=1.625=\frac{13}{8}.
$$

**The line.**

$$
y-1.5=1.625(x-1)\ \Longrightarrow\ y=1.625x-0.125.
$$

> [!success] Answer from the key (author unclear)
> $g'(1)=1.625$, $g(1)=\tfrac32$, so the tangent line is **$y=1.625x-0.125$** (that is, $y=\tfrac{13}{8}x-\tfrac18$).

---

## Summary of answers

| Part | Answer |
|---|---|
| Q1a | Domain $x\neq-1$; $(0,0)$; VA $x=-1$, no HA; max $(-2,-4)$, min $(0,0)$; concave down for $x<-1$, up for $x>-1$; no inflection |
| Q1c | $\frac{x^2}{x+1}$ up to a closed dot at $(1,\frac12)$, then $\lvert4-x\rvert$ from a hollow dot at $(1,3)$, tip at $(4,0)$ |
| Q2a | Domain all $x$; continuous for all $x$ and every $k$ |
| Q2b | $k=1$; tangent line exists |
| Q2c | $f'=8\sqrt[3]{x}-1$ for $x>0$, $-1$ at $0$, $3x^2-1$ for $x<0$ |
| Q2d | Max $\left(-\sqrt{1/3},\,\frac{2\sqrt3}{9}\right)$; min $\left(\frac1{512},\,-\frac1{2048}\right)$ |
| Q3 | $e^{-4}$; $\frac1{12}$; $-4$ |
| Q4 | $y=1.625x-0.125$ |

## Related notes

- [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]]
- [[Lec_07-The Derivative, Differentiability and Rules]]
- [[Lec_09-Marginal Functions and Tangent Lines of Composites]]
- [[PS_09-Piecewise Differentiability, Marginal Functions & Inequalities]]
