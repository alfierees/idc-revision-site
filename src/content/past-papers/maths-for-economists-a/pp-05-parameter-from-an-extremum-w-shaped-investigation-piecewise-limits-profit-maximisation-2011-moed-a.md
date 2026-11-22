---
title: "Parameter from an Extremum, W-Shaped Investigation, Piecewise Limits & Profit Maximisation (2011 Moed A)"
type: past-paper
status: worked-solution
exam: "Math I Final Exam, Moed A 2011"
semester: 1
year: 1
course: "Maths for Economists A"
instructor: Hever Schulberg
tags:
  - maths-for-economists-a
  - past-paper
  - worked-solution
  - function-investigation
  - extremum-parameter
  - absolute-value-graph
  - piecewise-function
  - differentiability
  - limits
  - euler-limit
  - profit-maximisation
  - marginal-profit
aliases:
  - Math I Moed A 2011
  - PP05 Maths for Economists A
subject: maths-for-economists-a
in_scope: true
---

# Parameter from an Extremum, W-Shaped Investigation, Piecewise Limits & Profit Maximisation (2011 Moed A)

> Part of: [[Maths for Economists A]]
> **Math I Final Exam, Moed A 2011**, 3 hours, four questions (35 + 30 + 15 + 20 = 100 points), non-graphing calculator only.
> Key concepts: [[Function Investigation]], [[Relative Extremum]], [[Inflection Point]], [[Concavity]], [[Absolute Value Function]], [[Piecewise Function]], [[Differentiability]], [[Profit Function]], [[Marginal Revenue]]
> Builds on: [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[Lec_11-Concavity, Inflection Points and Asymptotes]], [[Lec_12-Asymptotes, Function Investigation and Reading the Derivative]], [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]], [[Lec_09-Marginal Functions and Tangent Lines of Composites]], [[Lec_03-Composition, Transformations, Exponentials and Limits]]
> Practice: [[PS_10-Increase and Decrease Intervals, Extrema & Marginal Analysis]], [[PS_11-Concavity, Inflection Points & Asymptotes]], [[PS_12-Function Investigation, Asymptotes & Reading the Derivative Graph]], [[PS_09-Piecewise Differentiability, Marginal Functions & Inequalities]], [[PS_03-Composition, Transformations and Exponential Graphs]]

> [!info] Source and provenance
> Answers follow **the key (author unclear)**, a handwritten solution of about five pages, unsigned and dated early January 2011, so it is not labelled official. Its working is terse, so the steps below fill the gaps without changing any answer. One part of Q4 needs an extra check, shown in a `[!warning]` callout.

> [!success] AI-solved questions
> **None.** Every part has an answer in the key. Callouts marked `[!tip] Extra` or `[!warning]` are my additions or checks; they never replace a key answer.

## What this paper tests

| Question | Core idea | Where it is taught |
|---|---|---|
| Q1 | Find a parameter from "extremum at $x=1$", investigate the resulting two-valley function, then transform its graph with an absolute value and a shift | [[Lec_10-Increase and Decrease Intervals and Relative Extrema]], [[Lec_11-Concavity, Inflection Points and Asymptotes]], [[Lec_03-Composition, Transformations, Exponentials and Limits]] |
| Q2 | Piecewise function: domain, continuity, differentiability by the definition, and a limit at infinity | [[Lec_07-The Derivative, Differentiability and Rules]], [[Lec_05-Infinite Limits]] |
| Q3 | An Euler ($1^\infty$) limit, and a limit that fails to exist because the one-sided limits differ | [[Lec_06-Exponential Limits, Tangent Slopes and Logarithms]], [[Lec_04-Limits and Continuity]] |
| Q4 | Profit from revenue and cost, marginal profit, maximum, and marginal profit's direction | [[Lec_09-Marginal Functions and Tangent Lines of Composites]], [[PS_10-Increase and Decrease Intervals, Extrema & Marginal Analysis]] |

> [!tip] Intuition: the one move behind each question
> - Q1a: if $x=1$ is an extremum of a differentiable function, its slope there is zero. That single equation gives $k$.
> - Q1c: $\lvert f(x-1)\rvert$ means "shift the graph right by 1, then flip every part below the axis upward". Zeros become corners (minima), valleys become hills (maxima).
> - Q4b: solving $P'(x)=0$ with a square root means squaring both sides, which can create a **fake** solution. Always check back.

---

## Q1 — Find $k$, investigate, then transform (35 points)

**Question.** Let $f(x)=kx^2-3\sqrt[3]{x^4}$. The function has a relative extremum at $x=1$.

- a. Find the value of the parameter $k$.
- b. Plug $k=2$ and investigate the function by these criteria: Domain; Axis intersections; Asymptotes; Intervals of increase and decrease; Points of relative extremum; Intervals of concavity (upward or downward); Inflection points. Draw the function's graph.
- c. Find (using part b, where $k=2$) the values of $x$ at which the function $y=\lvert f(x-1)\rvert$ has a relative extremum.

### a. The value of $k$

Write $f(x)=kx^2-3x^{4/3}$, so $f'(x)=2kx-4x^{1/3}$. The function is differentiable at $x=1$, so a relative extremum there needs $f'(1)=0$:

$$
2k-4=0\ \Longrightarrow\ k=2.
$$

> [!success] Answer from the key (author unclear)
> **$k=2$.**

### b. Investigation of $f(x)=2x^2-3x^{4/3}$

**Domain.** A cube root accepts every real number: **all $x$**.

**Axis intersections.**

- $y$-axis: $f(0)=0$, so $(0,0)$.
- $x$-axis: $0=2x^2-3x^{4/3}=x^{4/3}\left(2x^{2/3}-3\right)$. Either $x=0$, or $x^{2/3}=\frac32$, so $x^2=\left(\frac32\right)^3=\frac{27}{8}$ and $x=\pm\frac32\sqrt{\frac32}\approx\pm1.84$.

Intercepts: $(0,0)$ and $(\pm1.84,\,0)$.

**Asymptotes.** No vertical asymptote: there is no point of undefinition (the function is continuous everywhere).

$$
\lim_{x\to\pm\infty}\left(2x^2-3x^{4/3}\right)=\lim_{x\to\pm\infty}x^2\left(2-\frac{3}{x^{2/3}}\right)=\infty\cdot(2-0)=\infty,
$$

so there is **no horizontal asymptote**. (The function grows like $x^2$, so no oblique asymptote either.)

**Increase and decrease.**

$$
f'(x)=4x-4x^{1/3}=4x^{1/3}\left(x^{2/3}-1\right).
$$

$f'=0$ when $x=0$ or $x^{2/3}=1$, i.e. $x=\pm1$. Critical points: $x=-1,\ 0,\ 1$ ($f'$ is defined everywhere, equal to $0$ at $x=0$).

| Interval | $x<-1$ | $-1<x<0$ | $0<x<1$ | $x>1$ |
|---|---|---|---|---|
| $x^{1/3}$ | $-$ | $-$ | $+$ | $+$ |
| $x^{2/3}-1$ | $+$ | $-$ | $-$ | $+$ |
| $f'$ | $-$ | $+$ | $-$ | $+$ |
| $f$ | decreasing | increasing | decreasing | increasing |

**Relative extremum.** Relative minima at $x=-1$ and $x=1$, with $f(\pm1)=2-3=-1$: **$(-1,-1)$ and $(1,-1)$**. Relative maximum at $x=0$: **$(0,0)$**.

**Concavity.**

$$
f''(x)=4-\frac43x^{-2/3}=\frac{12\sqrt[3]{x^2}-4}{3\sqrt[3]{x^2}}.
$$

- $f''$ is undefined at $x=0$ (the denominator is $0$).
- $f''=0$ when $12\sqrt[3]{x^2}=4$, i.e. $\sqrt[3]{x^2}=\frac13$, so $x^2=\frac1{27}$ and $x=\pm\frac{1}{3\sqrt3}\approx\pm0.19$.

The denominator $3\sqrt[3]{x^2}$ is positive for $x\neq0$, so the sign of $f''$ is the sign of $12\sqrt[3]{x^2}-4$:

| Interval | $x<-0.19$ | $-0.19<x<0.19$ | $x>0.19$ |
|---|---|---|---|
| $f''$ | $+$ | $-$ | $+$ |
| $f$ | concave up | concave down | concave up |

The concavity changes at $x=\pm\frac{1}{3\sqrt3}$, and $f$ is defined there, so these are **inflection points**. Their height is $f=2\cdot\frac1{27}-3\cdot\frac19=\frac{2}{27}-\frac{9}{27}=-\frac{7}{27}\approx-0.26$. The point $x=0$ lies inside the concave-down interval, so it is not an inflection point (it is the peak).

![[PP05_q1_investigation_graph.png]]

> [!success] Answer from the key (author unclear)
> - Domain all $x$. Intercepts $(0,0)$ and $(\pm1.84,0)$ (exactly $x=\pm\frac32\sqrt{\frac32}$).
> - No vertical asymptote; no horizontal asymptote.
> - Decreasing for $x<-1$ and $0<x<1$; increasing for $-1<x<0$ and $x>1$.
> - **Minima $(-1,-1)$ and $(1,-1)$; maximum $(0,0)$.**
> - Concave up for $x<-\frac{1}{3\sqrt3}$ and $x>\frac{1}{3\sqrt3}$; concave down for $-\frac{1}{3\sqrt3}<x<\frac{1}{3\sqrt3}$.
> - **Inflection points at $x=\pm\frac{1}{3\sqrt3}\approx\pm0.19$, with $y\approx-0.26$.**

### c. Relative extrema of $y=\lvert f(x-1)\rvert$

Build the graph in two steps:

1. **Shift right by 1.** $f(x-1)$ is the graph of $f$ moved one unit to the right. Every feature at $x=a$ moves to $x=a+1$.
2. **Absolute value.** $\lvert\cdot\rvert$ flips every part below the $x$-axis upward and leaves the rest alone.

What each feature becomes:

| Feature of $f$ | at $x=$ | after shifting | after $\lvert\cdot\rvert$ |
|---|---|---|---|
| zero (crossing the axis, left) | $-1.84$ | $x=-0.84$ | corner, value $0$: relative **minimum** |
| minimum, value $-1$ | $-1$ | $x=0$ | flipped to a hill of height $1$: relative **maximum** |
| maximum, value $0$ (touches the axis from below) | $0$ | $x=1$ | value $0$, nothing below: relative **minimum** |
| minimum, value $-1$ | $1$ | $x=2$ | flipped to a hill of height $1$: relative **maximum** |
| zero (crossing the axis, right) | $1.84$ | $x=2.84$ | corner, value $0$: relative **minimum** |

The exact zero locations are $x=1\pm\frac32\sqrt{\frac32}\approx-0.84$ and $2.84$.

![[PP05_q1_abs_shifted_graph.png]]

> [!success] Answer from the key (author unclear)
> Relative extrema at **$x=-0.84,\ 0,\ 1,\ 2,\ 2.84$** (minima at $-0.84$, $1$ and $2.84$; maxima at $0$ and $2$).

> [!tip] Extra: why the inflection points do not matter here
> Inflection points of $f$ only change concavity, not direction, so they never become extrema of $\lvert f(x-1)\rvert$. Only the critical points and the zeros of $f$ matter.

---

## Q2 — Piecewise function (30 points)

**Question.** Given

$$
f(x)=\begin{cases}e^{x} & x<0\\[4pt] \dfrac{1}{1+\sqrt x} & x\ge0.\end{cases}
$$

- a. Find the domain of the function.
- b. Show that the function is continuous for all $x$ in its domain.
- c. Use the definition of the derivative to find if the function is differentiable at $x=0$ and if a tangent line exists at that point.
- d. Find $\displaystyle\lim_{x\to\infty}\left|3-\sqrt[3]{x}\right|\cdot f(4x)$.

### a. Domain

$e^x$ is defined for all $x<0$. For $x\ge0$, $1+\sqrt x\ge1$ is never $0$.

> [!success] Answer from the key (author unclear)
> **The domain is all $x$** ($1+\sqrt x$ is positive, so it is never $0$).

### b. Continuity everywhere

Away from $x=0$, each piece is a continuous elementary function ($e^x$ and $\frac{1}{1+\sqrt x}$). Only the join $x=0$ needs checking:

1. $f(0)=\dfrac{1}{1+0}=1$.
2. Right limit: $\displaystyle\lim_{x\to0^+}\frac{1}{1+\sqrt x}=1$. Left limit: $\displaystyle\lim_{x\to0^-}e^{x}=e^0=1$.

The limit exists and equals $f(0)$.

> [!success] Answer from the key (author unclear)
> Both conditions hold at $x=0$ ($f(0)=1=$ the limit), so **$f$ is continuous at $0$ and therefore for all $x$.**

### c. Differentiability at $x=0$

$$
f'(0)=\lim_{h\to0}\frac{f(h)-f(0)}{h}.
$$

**Right** ($h\to0^+$):

$$
\frac{\dfrac{1}{1+\sqrt h}-1}{h}=\frac{\dfrac{1-(1+\sqrt h)}{1+\sqrt h}}{h}=\frac{-\sqrt h}{h(1+\sqrt h)}=\frac{-1}{\sqrt h\,(1+\sqrt h)}\ \longrightarrow\ \frac{-1}{0^+}=-\infty.
$$

**Left** ($h\to0^-$):

$$
\frac{e^{h}-1}{h}\ \longrightarrow\ 1.
$$

(This is the standard limit $\frac{e^h-1}{h}\to1$.)

> [!success] Answer from the key (author unclear)
> The one-sided derivatives are $-\infty$ and $1$, so **$f$ is not differentiable at $x=0$ and there is no tangent line there.**

### d. The limit at infinity

For large $x$, $\sqrt[3]{x}>3$, so $3-\sqrt[3]{x}<0$ and the absolute value turns it around: $\lvert3-\sqrt[3]{x}\rvert=\sqrt[3]{x}-3$. Also $f(4x)=\dfrac{1}{1+\sqrt{4x}}=\dfrac{1}{1+2\sqrt x}$. So

$$
\lim_{x\to\infty}\frac{\sqrt[3]{x}-3}{1+2\sqrt{x}}=\lim_{x\to\infty}\frac{x^{1/3}\left(1-\frac{3}{x^{1/3}}\right)}{x^{1/2}\left(\frac{1}{x^{1/2}}+2\right)}=\lim_{x\to\infty}\frac{1}{x^{1/6}}\cdot\frac{1-0}{0+2}=0.
$$

The top grows like $x^{1/3}$, the bottom like $x^{1/2}$, and the bottom's higher power wins.

> [!success] Answer from the key (author unclear)
> **$0$.**

---

## Q3 — Limits (15 points)

**Question.** Find the limits: 1. $\displaystyle\lim_{x\to\infty}\left(\frac{x+3}{x-3}\right)^{2x}$ and 2. $\displaystyle\lim_{x\to1}\frac{\sqrt{x^3+1}-\sqrt{x+1}}{\sqrt{(x-1)^2}}$.

**1.** A $1^\infty$ form. Write the base as $1+\dfrac{6}{x-3}$ since $\dfrac{x+3}{x-3}-1=\dfrac{6}{x-3}$:

$$
\left(1+\frac{6}{x-3}\right)^{2x}=\left[\left(1+\frac{6}{x-3}\right)^{\frac{x-3}{6}}\right]^{\frac{12x}{x-3}}\longrightarrow e^{12},
$$

because the inner bracket tends to $e$ and $\dfrac{12x}{x-3}=\dfrac{12}{1-\frac3x}\to12$.

> [!success] Answer from the key (author unclear)
> **$e^{12}$.**

**2.** Note that $\sqrt{(x-1)^2}=\lvert x-1\rvert$. At $x=1$ the top is $\sqrt2-\sqrt2=0$ and the bottom is $0$. Multiply by the conjugate of the top:

$$
\frac{(x^3+1)-(x+1)}{\lvert x-1\rvert\left(\sqrt{x^3+1}+\sqrt{x+1}\right)}=\frac{x^3-x}{\lvert x-1\rvert\left(\sqrt{x^3+1}+\sqrt{x+1}\right)}=\frac{x(x-1)(x+1)}{\lvert x-1\rvert\left(\sqrt{x^3+1}+\sqrt{x+1}\right)}.
$$

The factor $\dfrac{x-1}{\lvert x-1\rvert}$ is $+1$ for $x>1$ and $-1$ for $x<1$, so the two sides must be taken separately.

From the right ($x\to1^+$):

$$
\frac{x(x+1)}{\sqrt{x^3+1}+\sqrt{x+1}}\longrightarrow\frac{2}{\sqrt2+\sqrt2}=\frac{1}{\sqrt2}.
$$

From the left ($x\to1^-$): the same expression with a minus sign, $-\dfrac{1}{\sqrt2}$.

> [!success] Answer from the key (author unclear)
> The one-sided limits are $\dfrac{1}{\sqrt2}$ and $-\dfrac{1}{\sqrt2}$, which differ, so **the limit is not defined (does not exist).**

---

## Q4 — Monthly revenue, cost and profit (20 points)

**Question.** The monthly revenue (in thousand dollars) from producing and selling $x$ **thousand** products is $R(x)=40(x+6)^{3/2}+400x$, when the monthly cost (in thousand dollars) of production is $C(x)=30x^2+40x$.

- a) Find the marginal profit at a monthly production level of 3000 units of the product and explain the meaning of the results.
- b) How many units should be sold monthly to achieve maximal profit?
- c) Can you find an interval of $x$ on which the marginal profit is increasing with $x$? If so, find it.

**Profit** is revenue minus cost:

$$
P(x)=R(x)-C(x)=40(x+6)^{3/2}+400x-30x^2-40x=40(x+6)^{3/2}+360x-30x^2.
$$

Its derivative (the marginal profit) uses the chain rule on $(x+6)^{3/2}$:

$$
P'(x)=60(x+6)^{1/2}+360-60x.
$$

**a) Marginal profit at 3000 units** ($x=3$, because $x$ counts thousands):

$$
P'(3)=60\sqrt9+360-180=180+180=360.
$$

> [!success] Answer from the key (author unclear)
> $P'(3)=360$. At a production level of 3000 units, **selling an additional 1000 units will increase the profit by about 360,000 dollars** (the units are thousands of units and thousands of dollars).

**b) Maximal profit.** Set $P'(x)=0$:

$$
60\sqrt{x+6}=60x-360\ \Longrightarrow\ \sqrt{x+6}=x-6.
$$

Square both sides:

$$
x+6=x^2-12x+36\ \Longrightarrow\ x^2-13x+30=0\ \Longrightarrow\ (x-10)(x-3)=0,
$$

so $x=10$ or $x=3$. Squaring can create false solutions, so check both in $\sqrt{x+6}=x-6$:

- $x=3$: left side $\sqrt9=3$, right side $3-6=-3$. **False**, so reject $x=3$.
- $x=10$: left side $\sqrt{16}=4$, right side $10-6=4$. **True.**

The second derivative confirms a maximum:

$$
P''(x)=\frac{30}{\sqrt{x+6}}-60,\qquad P''(10)=\frac{30}{4}-60=-52.5<0.
$$

> [!success] Answer from the key (author unclear)
> $x=10$ is the only stationary point ($x=3$ is rejected on checking), and $P''(10)=-52.5<0$, so it is a maximum: **sell and produce 10 thousand units, i.e. 10,000 units, a month.**

> [!warning] A check on the key's wording
> The key writes "check answers!" and then "plug $x=3$ back to the original equation and see it's false". That is the check done above; the key's final answer $x=10$ stands. (My addition: the maximal profit itself is $P(10)=40\cdot64+3600-3000=3160$ thousand dollars; the key does not ask for it.)

**c) Is marginal profit ever increasing?** Marginal profit is $P'$, so look at the sign of $P''$:

$$
P''(x)=\frac{30}{\sqrt{x+6}}-60.
$$

For any $x>0$, $\sqrt{x+6}>\sqrt6>2$, so $\dfrac{30}{\sqrt{x+6}}<15<60$ and $P''<0$.

> [!success] Answer from the key (author unclear)
> $P''<0$ for every $x>0$, so the marginal profit **decreases on the whole domain** and **there is no interval on which it increases.**

---

## Summary of answers

| Part | Answer |
|---|---|
| Q1a | $k=2$ |
| Q1b | Domain all $x$; intercepts $(0,0)$, $(\pm1.84,0)$; no asymptotes; minima $(\pm1,-1)$, maximum $(0,0)$; concave down on $\left(-\frac1{3\sqrt3},\frac1{3\sqrt3}\right)$, concave up outside; inflection at $x=\pm\frac{1}{3\sqrt3}$ ($y\approx-0.26$) |
| Q1c | Extrema of $\lvert f(x-1)\rvert$ at $x=-0.84,\ 0,\ 1,\ 2,\ 2.84$ |
| Q2a | All $x$ |
| Q2b | Continuous at $0$ (both limits $=1=f(0)$), hence everywhere |
| Q2c | Not differentiable at $0$ (slopes $-\infty$ and $1$); no tangent line |
| Q2d | $0$ |
| Q3 | $e^{12}$; does not exist (one-sided limits $\pm\frac1{\sqrt2}$) |
| Q4 | $P'(3)=360$ (thousand dollars per thousand units); max at $x=10$ thousand units; marginal profit decreasing everywhere |

## Related notes

- [[Lec_10-Increase and Decrease Intervals and Relative Extrema]]
- [[Lec_11-Concavity, Inflection Points and Asymptotes]]
- [[Lec_07-The Derivative, Differentiability and Rules]]
- [[PS_10-Increase and Decrease Intervals, Extrema & Marginal Analysis]]
